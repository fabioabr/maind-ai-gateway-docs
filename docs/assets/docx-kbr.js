/* DocX · o que é do DocX sobre o design system da Kinto (kbr-docs): a busca pelo índice embutido, o atalho "/", a vista
   Lista/Cartões da entrada e o seletor de sistema. O tema, o menu e o TOC são do docs.js da Kinto, que não se edita. */
(() => {
  'use strict';
  const normalize = value => String(value).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  function search(items, query) {
    const words = normalize(query).trim().split(/\s+/).filter(Boolean);
    if (!words.length) return [];
    return items.map(item => {
      const title = normalize(item.title);
      const text = normalize(`${item.title} ${item.summary} ${item.text}`);
      return { item, score: words.every(word => text.includes(word)) ? 1 + words.filter(word => title.includes(word)).length * 5 : 0 };
    }).filter(result => result.score).sort((a, b) => b.score - a.score).map(result => result.item);
  }
  /* Os diagramas do Archify (os quadros .dx-diagrama): o tema segue o da página, nos dois sentidos, por mensagem (vale também em
     file://, onde o quadro é de outra origem). A página manda: quando o quadro fica pronto ('archify-maind:pronto') ela responde
     com o tema; a cada troca de tema dela, todos os quadros recebem; se o leitor trocar o tema por dentro do diagrama, a página
     acompanha. Só se obedece a mensagem de um quadro desta página, e só se ela traz um tema diferente do atual: sem laço. */
  function diagramThemeSync({ frames, currentTheme, setTheme, onPageTheme, listen }) {
    const post = frame => {
      try { frame.contentWindow.postMessage({ tipo: 'archify-maind:tema', tema: currentTheme() }, '*'); } catch (_) { /* o quadro ainda não existe */ }
    };
    listen(event => {
      const data = event.data;
      if (!data || !frames.some(frame => frame.contentWindow === event.source)) return;
      if (data.tipo === 'archify-maind:pronto') frames.filter(frame => frame.contentWindow === event.source).forEach(post);
      else if (data.tipo === 'archify-maind:tema' && (data.tema === 'dark' || data.tema === 'light') && data.tema !== currentTheme()) setTheme(data.tema);
    });
    onPageTheme(() => frames.forEach(post));
    frames.forEach(frame => { if (frame.addEventListener) frame.addEventListener('load', () => post(frame)); post(frame); });
  }
  if (typeof module !== 'undefined' && module.exports) module.exports = { normalize, search, diagramThemeSync };
  if (typeof document === 'undefined') return;
  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];
  const store = {
    get(key) { try { return localStorage.getItem(key); } catch (_) { return null; } },
    set(key, value) { try { localStorage.setItem(key, value); } catch (_) { /* localStorage bloqueado: vale só nesta página */ } },
  };

  /* Busca: o mesmo índice em todas as páginas (assets/busca.js); até 20 resultados, com teclado. Há uma busca no topo e,
     na entrada, outra na faixa de título: cada formulário [data-search-form] funciona sozinho. */
  const index = Array.isArray(window.DX_BUSCA) ? window.DX_BUSCA : null;
  const forms = $$('[data-search-form]');
  const typingNow = () => /^(input|textarea|select)$/i.test(document.activeElement?.tagName || '') || document.activeElement?.isContentEditable;
  if (index) {
    forms.forEach(form => {
      const input = $('[data-search-input]', form);
      const results = $('[data-search-results]', form);
      const status = $('[data-search-status]', form);
      if (!input || !results) return;
      const close = () => { results.hidden = true; };
      const render = () => {
        const query = input.value.trim();
        const matches = search(index, query);
        results.replaceChildren();
        results.hidden = !query;
        if (!query) { if (status) status.textContent = ''; return; }
        const label = `${matches.length} ${matches.length === 1 ? 'resultado' : 'resultados'}`;
        if (status) status.textContent = `${label}.`;
        const count = document.createElement('p');
        count.className = 'dx-busca-contagem';
        count.textContent = matches.length ? label : 'Nenhum resultado. Tente outro termo.';
        results.append(count);
        matches.slice(0, 20).forEach(item => {
          const link = document.createElement('a');
          link.href = item.url;
          const title = document.createElement('strong');
          title.textContent = item.title;
          const summary = document.createElement('small');
          summary.textContent = item.summary;
          link.append(title, summary);
          results.append(link);
        });
      };
      input.addEventListener('input', render);
      input.addEventListener('focus', () => { if (input.value.trim()) render(); });
      input.addEventListener('keydown', event => {
        if (event.key === 'Escape') { close(); return; }
        if (event.key === 'ArrowDown' && $('a', results)) { event.preventDefault(); $('a', results).focus(); }
      });
      results.addEventListener('keydown', event => {
        const links = $$('a', results);
        const current = links.indexOf(document.activeElement);
        if (event.key === 'Escape') { close(); input.focus(); }
        if (['ArrowDown', 'ArrowUp'].includes(event.key)) {
          event.preventDefault();
          const next = current + (event.key === 'ArrowDown' ? 1 : -1);
          if (next < 0) input.focus(); else links[Math.min(next, links.length - 1)]?.focus();
        }
      });
      results.addEventListener('click', event => { if (event.target.closest('a')) close(); });
      form.addEventListener('submit', event => {
        event.preventDefault();
        const first = $('a', results);
        if (first) first.click(); else render();
      });
    });
    document.addEventListener('click', event => { if (!event.target.closest('[data-search-form]')) forms.forEach(form => { const r = $('[data-search-results]', form); if (r) r.hidden = true; }); });
    document.addEventListener('keydown', event => {
      if (event.key === '/' && !typingNow() && forms.length) {
        event.preventDefault();
        /* A busca da faixa de título, quando está à vista, ganha a vez; senão, a do topo. */
        const visible = forms.map(form => $('[data-search-input]', form)).find(field => field && field.getClientRects().length);
        (visible || $('[data-search-input]', forms[0]))?.focus();
      }
    });
  }

  /* A vista da entrada: Cartões ou Lista; a escolha fica no navegador. */
  const groups = $('[data-vista-alvo]');
  const views = $$('[data-vista]');
  if (groups && views.length) {
    const apply = view => {
      groups.setAttribute('data-vista-atual', view);
      views.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.vista === view)));
    };
    apply(store.get('dx-vista') === 'lista' ? 'lista' : 'cartoes');
    views.forEach(button => button.addEventListener('click', () => { apply(button.dataset.vista); store.set('dx-vista', button.dataset.vista); }));
  }

  /* O seletor de sistema (manual.os): esconde os blocos [data-os] dos outros sistemas; a escolha fica no navegador. */
  const system = $('[data-os-select]');
  if (system) {
    const apply = name => {
      document.documentElement.setAttribute('data-os-atual', name);
      $$('[data-os]').forEach(block => { block.hidden = block.dataset.os.toLowerCase() !== name.toLowerCase(); });
    };
    const saved = store.get('dx-os');
    if (saved && [...system.options].some(option => option.value === saved)) system.value = saved;
    apply(system.value);
    system.addEventListener('change', () => { apply(system.value); store.set('dx-os', system.value); });
  }

  /* Os diagramas embutidos acompanham o tema da página (e a página, o do diagrama); o link "tela cheia" leva o tema na URL. */
  const diagramFrames = $$('.dx-diagrama iframe');
  if (diagramFrames.length) {
    const root = document.documentElement;
    const theme = () => (root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');
    const fullLinks = $$('.dx-diagrama figcaption a');
    const stamp = () => fullLinks.forEach(link => link.setAttribute('href', link.getAttribute('href').split('?')[0] + '?tema=' + theme()));
    diagramThemeSync({
      frames: diagramFrames,
      currentTheme: theme,
      setTheme: name => { const button = $(`.theme-toggle [data-set="${name}"]`); if (button) button.click(); },
      onPageTheme: callback => new MutationObserver(() => { stamp(); callback(); }).observe(root, { attributes: true, attributeFilter: ['data-theme'] }),
      listen: handler => window.addEventListener('message', handler),
    });
    stamp();
  }
})();
