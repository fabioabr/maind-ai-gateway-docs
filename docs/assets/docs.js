/* =============================================================
   DOCS DOCS — runtime compartilhado
   Tema light/dark, copy de código, smooth scroll, TOC highlight,
   compartilhar e toast. Idêntico ao do design system de referência.
   ============================================================= */
(() => {
  const KEY = 'kinto-theme';
  const root = document.documentElement;
  const saved = localStorage.getItem(KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = saved || (prefersDark ? 'dark' : 'light');
  root.setAttribute('data-theme', initial);

  // Toggle de tema
  document.querySelectorAll('.theme-toggle button').forEach(b => {
    b.addEventListener('click', () => {
      const next = b.getAttribute('data-set');
      root.classList.add('theme-switching');
      root.setAttribute('data-theme', next);
      localStorage.setItem(KEY, next);
      requestAnimationFrame(() => requestAnimationFrame(() => root.classList.remove('theme-switching')));
    });
  });

  // Menu horizontal/vertical — mesmo padrão do tema, sem transição especial
  const KEY_MENU = 'kinto-menu';
  const savedMenu = localStorage.getItem(KEY_MENU) || 'vertical';
  root.setAttribute('data-menu', savedMenu);
  document.querySelectorAll('.menu-toggle button').forEach(b => {
    b.addEventListener('click', () => {
      const next = b.getAttribute('data-set');
      root.setAttribute('data-menu', next);
      localStorage.setItem(KEY_MENU, next);
    });
  });

  // Copy de blocos de código
  document.querySelectorAll('.copy[data-copy]').forEach(btn => {
    btn.addEventListener('click', () => {
      const el = document.getElementById(btn.getAttribute('data-copy'));
      if (el) navigator.clipboard.writeText(el.innerText).then(() => showToast('Código copiado ✓'));
    });
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href.length > 1) {
        const t = document.querySelector(href);
        if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); history.replaceState(null, '', href); }
      }
    });
  });

  // Highlight do TOC conforme a rolagem.
  //
  // Só o TOC: os links da SIDEBAR apontam para outras páginas, e marcá-los por
  // âncora apagaria o destaque da página atual.
  //
  // O listener vai no documento E no shell porque quem rola depende do tamanho
  // da tela: no desktop é o shell (colunas com sidebar sticky), no celular é a
  // página. Evento de scroll de elemento não borbulha — sem os dois, o TOC
  // ficava parado no primeiro item.
  const tocLinks = document.querySelectorAll('.toc a');
  const sections = Array.from(document.querySelectorAll('h2[id], h3[id]'));
  const marcarSecaoAtual = () => {
    let atual = sections[0]?.id;
    for (const s of sections) { if (s.getBoundingClientRect().top < 100) atual = s.id; }
    tocLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + atual));
  };
  document.addEventListener('scroll', marcarSecaoAtual, { passive: true });
  document.querySelector('.shell')?.addEventListener('scroll', marcarSecaoAtual, { passive: true });
  marcarSecaoAtual();

  // Codetabs — abas de código por linguagem (Python/Java/C#), escala p/ N grupos
  document.querySelectorAll('.codetabs').forEach(group => {
    const tabs = Array.from(group.querySelectorAll('.codetab'));
    const panels = Array.from(group.querySelectorAll('.codetabs-panel'));
    tabs.forEach((tab, i) => tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      panels[i]?.classList.add('active');
    }));
    group.querySelector('.codetabs-copy')?.addEventListener('click', () => {
      const active = group.querySelector('.codetabs-panel.active');
      if (active) navigator.clipboard.writeText(active.innerText).then(() => showToast('Código copiado ✓'));
    });
  });

  const toast = document.getElementById('toast');
  let tt;
  window.showToast = function (m) {
    toast.textContent = m; toast.classList.add('on');
    clearTimeout(tt); tt = setTimeout(() => toast.classList.remove('on'), 1600);
  };
})();

/* =============================================================
   Largura ajustável dos menus (esquerdo e "Neste artigo").
   Arraste a borda; duplo clique restaura o padrão. A escolha fica em
   localStorage (kinto-side-w / kinto-toc-w) e é reaplicada pelo <head> antes
   do primeiro paint. Escreve --side-w-user / --toc-w-user na raiz; o .shell
   do docs.css as lê. Some em tela estreita, no menu horizontal (só o esquerdo)
   e na impressão.
   ============================================================= */
(() => {
  const shell = document.querySelector('.shell');
  const side = document.querySelector('.side');
  const toc = document.querySelector('.toc');
  if (!shell || !side) return;
  const root = document.documentElement;
  const KEY = { side: 'kinto-side-w', toc: 'kinto-toc-w' };
  const VAR = { side: '--side-w-user', toc: '--toc-w-user' };
  const LIM = { side: [160, 560], toc: [140, 480] };
  const wide = () => window.innerWidth > 1200;

  const load = (k) => { try { return parseInt(localStorage.getItem(KEY[k]), 10) || 0; } catch (e) { return 0; } };
  const save = (k, v) => { try { v ? localStorage.setItem(KEY[k], v) : localStorage.removeItem(KEY[k]); } catch (e) {} };
  const clamp = (k, v) => Math.max(LIM[k][0], Math.min(LIM[k][1], v));
  const apply = (k, v) => (v ? root.style.setProperty(VAR[k], v + 'px') : root.style.removeProperty(VAR[k]));

  const handles = {};
  const place = () => {
    [['side', side], ['toc', toc]].forEach(([k, el]) => {
      const h = handles[k];
      if (!h || !el) return;
      const r = el.getBoundingClientRect();
      const vis = r.width > 0 && wide();
      h.style.display = vis ? '' : 'none';
      if (!vis) return;
      const top = Math.max(r.top, 0);
      h.style.top = top + 'px';
      h.style.height = Math.max(0, Math.min(r.bottom, window.innerHeight) - top) + 'px';
      h.style.left = (k === 'side' ? r.right : r.left) + 'px';
    });
  };

  const make = (k, el) => {
    if (!el) return;
    const h = document.createElement('div');
    h.className = 'menu-resizer menu-resizer--' + k;
    h.setAttribute('role', 'separator');
    h.setAttribute('aria-orientation', 'vertical');
    h.title = 'Arraste para ajustar a largura · duplo clique restaura';
    document.body.appendChild(h);
    handles[k] = h;
    h.addEventListener('dblclick', () => { save(k, 0); apply(k, 0); place(); });
    h.addEventListener('pointerdown', (ev) => {
      ev.preventDefault();
      h.setPointerCapture(ev.pointerId);
      h.classList.add('on');
      document.body.classList.add('menu-resizing');
      const move = (e) => {
        const r = shell.getBoundingClientRect();
        const w = clamp(k, Math.round(k === 'side' ? e.clientX - r.left : r.right - e.clientX));
        apply(k, w);
        h.dataset.w = w;
        place();
      };
      const up = () => {
        h.classList.remove('on');
        document.body.classList.remove('menu-resizing');
        h.removeEventListener('pointermove', move);
        h.removeEventListener('pointerup', up);
        if (h.dataset.w) save(k, parseInt(h.dataset.w, 10));
      };
      h.addEventListener('pointermove', move);
      h.addEventListener('pointerup', up);
    });
  };

  make('side', side);
  make('toc', toc);
  apply('side', load('side'));
  apply('toc', load('toc'));
  place();
  window.addEventListener('resize', place);
  shell.addEventListener('scroll', place, { passive: true });
  new MutationObserver(() => setTimeout(place, 0))
    .observe(root, { attributes: true, attributeFilter: ['data-menu'] });
})();
