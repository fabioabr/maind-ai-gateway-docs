# MF-107:Atender várias organizações numa instalação, sem misturá-las

> Uma mesma instalação do mAIg, a instância, atende várias organizações ao mesmo tempo, cada uma com os seus apps, as suas regras e o seu registro, sem enxergar nada das outras. A instância roda na infraestrutura do cliente ou na da Maind, e quem cuida dela acompanha o estado e as versões, mas nunca lê o que é de cada organização.

**Também chamada de:** Organizações e instâncias · **Versão do mAIg:** 1ª · **Classe:** essencial · **Situação:** rascunho do PO

## Em uma frase

Esta macro funcionalidade faz uma instalação do mAIg servir a vários clientes ao mesmo tempo, cada um no seu espaço fechado, e deixa essa instalação rodar onde o cliente preferir: dentro da rede dele ou nos servidores da Maind, os computadores dela sempre ligados. (decisão 9)

O mAIg, ou Maind AI Gateway ("gateway" quer dizer portão, em inglês), é a plataforma da Maind que fica entre os produtos da Maind e os dados e a inteligência artificial (IA) da empresa cliente. Cada produto entra nele como um app; o primeiro é o Maind Horus. Quase tudo no mAIg acontece por organização, o espaço de um cliente dentro do mAIg, e esta mf define o que é uma organização, onde mora, como nasce, quando fica pronta, quem a acompanha e como sai. Por isso ela é a base das outras.

## Quem ganha

- **Equipe da Maind.** As pessoas da Maind que fecham a contratação, entregam e dão suporte. Passam a atender um cliente pequeno sem instalar nada para ele: basta criar uma organização numa instância da Maind, isto é, numa instalação do mAIg que a Maind já mantém. Nas instâncias da Maind, fazem o papel de administrador da instância.
- **Administrador da instância.** Quem cuida da instalação física do mAIg: a TI do cliente, a equipe de tecnologia da empresa, quando o mAIg roda na infraestrutura do cliente; a equipe da Maind, quando roda na da Maind. Ganha um lugar para criar organizações, acompanhar o estado e as versões e tirar uma organização sem tocar nas outras, sem nunca ver o registro delas, a anotação de tudo o que cada organização pediu. (decisão 12)
- **De forma indireta, o owner da organização.** A pessoa que responde por uma organização no mAIg recebe um espaço só dela: a organização vizinha não vê nada do que ela configura nem do que os apps dela pedem. (decisão 9)

## A decisão que passa a ser possível

- **A equipe da Maind passa a poder dizer sim a um cliente sem equipe de TI**, com o mAIg na infraestrutura da Maind, sem pedir a ele que instale nada. (decisão 9)
- **A TI do cliente passa a poder exigir o mAIg dentro de casa** e, com uma instalação só, atender mais de uma organização da mesma empresa. (decisões 9 e 11)
- **A dor que some:** a pergunta "e se o cliente vizinho vir os meus dados?" ganha resposta. Cada organização é um espaço fechado, e nem quem cuida da instalação lê o registro dela. (decisões 9 e 12)

## Como funciona

### Instância, organização e empresa: três palavras que não se misturam

**Em resumo:** a instância é uma instalação física do mAIg; a organização é o espaço de um cliente dentro dela; a empresa é quem assina o contrato e pode ter uma organização ou várias.

**Quem é quem.**

- **A instância** é cada instalação física do mAIg, com o núcleo dele: o que vem pronto para todos os apps, como a segurança, o registro, o cofre (o lugar trancado onde ficam as senhas dos bancos de dados, onde a empresa guarda as informações do dia a dia) e as regras de uso da IA. Uma instância atende uma ou mais organizações. (decisão 9)
- **A organização** é o espaço de um cliente dentro da instância, com o seu próprio conjunto de apps e as suas próprias regras de governança, isto é, as regras sobre quem pode usar o quê, até onde e com que registro. É ela que contrata um app, que tem um owner da organização e que tem um registro só dela. (decisão 9, decisões 11 e 12)
- **A empresa** é o cliente no mundo dos contratos, a pessoa jurídica que assina com a Maind. Pode ter várias organizações, e um contrato comercial pode listar várias organizações da mesma empresa. (decisão 11)
- **A infraestrutura** é o lugar físico, com as máquinas e a rede, onde a instância roda: a do cliente ou a da Maind. (decisão 9)

**Não existe um nível "empresa" dentro do mAIg.** Cada organização contrata, configura e consulta o próprio registro por conta própria. Uma empresa com três organizações tem três espaços independentes, e não um espaço com três divisões. Contratar por empresa ficou de fora, porque criaria um nível acima da organização, que o mAIg não tem. (decisão 11)

**Por que é assim.** A organização é a unidade que funciona igual em qualquer lugar: na instância da Maind convivem empresas diferentes; na do cliente, as organizações costumam ser da mesma empresa. As regras são as mesmas nos dois casos, e uma organização que sai não afeta as outras. (decisão 11)

> **Analogia:** um condomínio com vários prédios no mesmo terreno. O terreno é a infraestrutura; cada prédio, uma instância; cada apartamento, uma organização, com a sua chave e a sua mobília; a família é a empresa, que pode ter mais de um apartamento. **Onde a analogia para:** no condomínio, os vizinhos se cruzam no elevador e ouvem a festa ao lado; no mAIg, uma organização não enxerga nada da outra, mesmo dividindo a instância.

**Exemplo.** A Farma Vida é uma rede de 40 farmácias e tem também uma farmácia de manipulação, que quer tratar à parte.

1. O contrato da Farma Vida com a Maind lista duas organizações: "Farma Vida" e "Farma Vida Manipulação".
2. Marta, da TI da Farma Vida, instalou o mAIg na rede da empresa: essa é a instância, e as duas organizações existem nela lado a lado.
3. Paulo, diretor de operações, é o owner da organização "Farma Vida". Não vê o que a "Farma Vida Manipulação" configura, embora as duas sejam da mesma empresa e da mesma instância.

### Várias organizações numa instância, sem misturá-las

**Em resumo:** o mAIg é multi-tenant: uma mesma instalação atende vários clientes sem misturá-los. O que é de cada organização fica fechado nela; o que é da instância é comum a todas.

**Quem é quem.**

- **Multi-tenant** vem do inglês "tenant", inquilino: uma instalação com vários inquilinos, cada um no seu espaço. (decisão 9)
- **O que é de cada organização:** os apps que ela contratou e liberou, as permissões, os bancos que cada app lê, a IA (as chaves dos provedores, isto é, as senhas de acesso às empresas que vendem os modelos de IA, mais os modelos permitidos, os limites e o custo por app) e o registro. As pessoas que usam os apps também são dela, mas onde fica o cadastro delas ainda está em aberto, em Segurança e permissões (MF-101).
- **O que é da instância:** a instalação física, a versão do mAIg, o estado e os apps instalados. Cada app é instalado uma vez só, para a instância inteira, mesmo que várias organizações o usem. (decisões 10 e 12)

**Instalado não é liberado.** Um app instalado só funciona para a organização que o contratou e cujo owner da organização o liberou. Duas organizações da mesma instância podem usar o mesmo app, cada uma com a sua configuração, ou uma pode usá-lo e a outra não. A contratação está em Contratação dos apps (MF-103), e a liberação, em Gestão dos apps (MF-104). (decisões 10 e 11)

**Por que é assim.** Uma instalação serve a muitos clientes: a Maind não opera uma instalação por cliente, e a TI do cliente não precisa de uma por organização da empresa. O isolamento é o que torna isso aceitável: sem ele, ninguém poria os dados de duas empresas na mesma instalação. (decisão 9)

**O preço da escolha.** No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: uma instalação que atende muitas organizações vira um ponto único, e, se for invadida, expõe as regras e as senhas de todas; quem não aceita esse risco instala na própria rede. (D-272 do Horus)

**Exemplo.** A Ótica Visão Clara é uma rede pequena de óticas, sem equipe de TI, e contratou o Horus. Rafael, da equipe da Maind, cuida da instância da Maind onde ela vai ficar, e onde já existe a organização de outra empresa, uma clínica, que também usa o Horus.

1. Rafael, no papel de administrador da instância, cria a organização "Ótica Visão Clara". Não instala nada: o Horus já está instalado ali.
2. A contratação libera o Horus só para a Ótica, e o owner da organização dela configura o banco e a IA. (decisão 11)
3. A clínica não vê nada disso, e a Ótica não vê nada da clínica.
4. Rafael vê as duas organizações, o estado e a versão do mAIg, mas não lê o registro de nenhuma. (decisão 12)

**Quando dá errado.** O owner da organização da Ótica procura no registro um pedido que foi feito pela clínica. Não encontra: o registro dele só tem o que é da organização dele. E, se a clínica sair do mAIg, a Ótica segue como antes. (decisões 11 e 12)

**O que ainda está em aberto.** Como as organizações de uma instância ficam separadas por dentro, em "O que ainda falta decidir". Esse isolamento não é o dos módulos dos apps (o módulo é a parte de cada app que roda dentro do mAIg), que separa um app do outro; esse, e o que a separação entre organizações pede a um módulo instalado uma vez para várias delas, são de Execução isolada dos apps (MF-109).

### Onde a instância roda: na infraestrutura do cliente ou na da Maind

**Em resumo:** a instância roda na infraestrutura do cliente ou na da Maind, e numa mesma infraestrutura física pode haver mais de uma instância. O mAIg é o mesmo nos dois lugares; mudam quem cuida dele e a força da promessa de não expor o banco. (decisão 9)

**Quem é quem.**

- **Na infraestrutura do cliente**, a instância roda nas máquinas da empresa, dentro da rede dela, e o administrador da instância é a TI do cliente.
- **Na infraestrutura da Maind**, a instância roda nas máquinas da Maind, a empresa não instala nada, e o administrador da instância é a equipe da Maind. Ali convivem empresas diferentes.
- **Mais de uma instância na mesma infraestrutura física:** as mesmas máquinas podem ter duas ou mais instalações do mAIg, separadas, para organizações diferentes. Dividem as máquinas, não a instalação. (decisão 9)

**O mesmo mAIg nos dois lugares.** No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: a diferença entre as hospedagens é só o local físico (D-272 do Horus). Para o owner da organização, o trabalho é o mesmo nas duas: liberar e configurar os apps, os bancos e a IA, com a equipe da Maind só dando suporte. (decisão 10)

**Por que as duas.** Um cliente pequeno, sem equipe de TI, usa o mAIg sem instalar nada; quem exige tudo dentro de casa instala na própria rede. Com uma só, a Maind deixaria um desses clientes de fora. (decisão 9)

**O que muda para o banco.** Na infraestrutura do cliente, a promessa de não expor o banco vale por inteiro: o mAIg lê o banco por dentro da rede, e as senhas ficam no cofre do mAIg, o lugar trancado de onde nenhum app as tira. Na da Maind, o banco precisa ser alcançável pela Maind, e as senhas ficam no cofre da Maind, em troca de a empresa não instalar nada. Como a Maind alcança esse banco é ponto de Bancos da empresa (MF-105). (decisão 9)

**Exemplo.**

1. A Farma Vida não quer o banco alcançável de fora. Marta instala o mAIg na rede da empresa e faz o papel de administrador da instância.
2. A Ótica Visão Clara, sem TI, entra numa instância da Maind, onde Rafael faz esse papel.
3. Paulo e o owner da organização da Ótica fazem o mesmo trabalho, no mesmo console do mAIg, o lugar único de configuração; a diferença está só no caminho até o banco. (MF-110)

**Quando dá errado.** No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: com a instalação compartilhada da Maind fora do ar, a queda alcança todas as organizações dela de uma vez; com a do cliente, só as daquela instalação (D-283 do Horus). O que acontece com a ligação e com os apps nessa hora está em Conexão de dentro para fora (MF-108).

**O que ainda está em aberto.** Quando uma organização ganha uma instância só dela na Maind, e se uma organização pode mudar de instância, em "O que ainda falta decidir".

### Criar uma organização

**Em resumo:** o administrador da instância cria as organizações e, com cada uma, o usuário do primeiro owner da organização, que a partir daí cuida dela.

**Quem é quem.**

- **O administrador da instância** cria a organização e o usuário do primeiro owner da organização: a equipe da Maind, na infraestrutura da Maind; a TI do cliente, na dele.
- **O usuário** é o cadastro com que uma pessoa entra no mAIg.
- **O primeiro owner da organização** recebe esse usuário e passa a liberar e configurar os apps, os bancos e a IA da organização. Também nomeia o auditor, a pessoa que só lê o registro da organização e não muda nenhuma configuração. (decisão 12)

**O que vem depois.** O primeiro acesso, isto é, como o owner da organização entra pela primeira vez e define a própria senha, está em Segurança e permissões (MF-101). A contratação de cada app e o handshake contratual, o aperto de mão digital em que o mAIg confere com um servidor da Maind que a organização contratou o app, estão em Contratação dos apps (MF-103).

**Por que é assim.** É o princípio dos dois passos de um app: quem cuida da instalação física controla o que existe nela, e cada organização escolhe o que usa. O administrador da instância cria a organização, mas entrega o comando dela ao owner da organização logo no começo. (decisão 10)

**Exemplo.**

1. Marta, no papel de administrador da instância, cria a organização "Farma Vida".
2. Cria o usuário de Paulo como primeiro owner da organização, e Paulo define a própria senha no primeiro acesso. (MF-101)
3. Marta cria também a "Farma Vida Manipulação" e o usuário de quem vai responder por ela. Paulo não vê essa outra organização.
4. As duas existem, mas ainda não atendem ninguém, como explica o próximo tópico.

### A organização só fica ativa quando está pronta

**Em resumo:** No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: uma organização nasce em configuração e só passa a ativa quando já consegue responder (D-277 do Horus). O que "pronta" quer dizer no mAIg, que serve a vários apps, ainda está em aberto.

**Quem é quem.**

- **Em configuração** é o estado de uma organização que existe, mas ainda não atende as pessoas; **ativa** é o estado da que já atende.
- **As condições do Horus:** o middleware ligado, com o handshake confirmado; ao menos um banco configurado; e a IA configurada pelo owner da organização. O middleware era a peça do Horus que deu origem ao mAIg, entre as telas do Horus e os dados da empresa. (D-277 do Horus)
- **Quem ativa, no Horus:** pela leitura registrada lá, ainda a confirmar, a trava é automática, mas o ato de ativar segue sendo de quem administra a instalação. (D-277 do Horus)

**Por que é assim, no Horus.** Uma organização ativa que não consegue responder decepciona logo no primeiro uso. O preço: a ativação depende de o owner da organização configurar o banco e a IA, e quem administra a instalação não ativa à força uma organização incompleta. (D-277 do Horus)

**Por que no mAIg isso não está fechado.** As condições do Horus foram pensadas para um app que lê bancos e usa IA. O mAIg serve a vários apps, e um app que gere documentos com IA, como poderia ser o Maind Doc, talvez não leia banco nenhum. O Maind Doc é só um exemplo, nem definido nem planejado.

> **Analogia:** uma loja nova só abre as portas com estoque na prateleira e o caixa funcionando, mesmo com o ponto já alugado. **Onde a analogia para:** a loja decide sozinha quando abrir; no mAIg, as condições dependem de pessoas diferentes, como a Maind, que confere a contratação, e o owner da organização, que configura o banco e a IA.

**Exemplo**, com as condições do Horus.

1. A organização "Farma Vida" nasce em configuração, e o handshake contratual confirma que ela contratou o Horus. (MF-103)
2. Paulo configura o banco de vendas e a IA. (MF-105, MF-106)
3. Cumpridas as condições, a organização passa a ativa, e Ana, gerente comercial, faz a primeira pergunta ao Horus.

**Quando dá errado.** Paulo configura o banco, mas esquece a IA. Pelo ponto de partida do Horus, a organização continua em configuração, ninguém a ativa à força, e Ana ainda não usa o Horus. (D-277 do Horus)

### O painel da instância: o estado e as versões, nunca o registro

**Em resumo:** o administrador da instância acompanha o que é da instância: as instalações, o estado e as versões. Nunca vê o registro das organizações. (decisão 12)

**Quem é quem.**

- **O painel da instância** é a parte do console do mAIg, o lugar único de configuração, usada pelo administrador da instância. A tela é de Console de configuração (MF-110); esta mf define o que ela mostra.
- **As instalações** são os apps instalados e as organizações que existem na instância. **O estado** diz se a instância e o que está nela funcionam. **As versões** dizem em que edição estão o mAIg e cada app; uma versão é cada edição de um sistema, com o que foi corrigido ou acrescentado.
- **O registro** junta o log, a anotação de tudo o que acontece, e a auditoria, a consulta a essas anotações. É do owner da organização e do auditor. (decisão 12)

**O que o painel não mostra.** O registro de nenhuma organização: nem quem pediu o quê, nem quando, nem por qual app. Nem a configuração dos bancos e da IA, que é do owner da organização. (decisão 12)

**O que vem do Horus.** No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: o painel mostra se a peça que atende cada organização está no ar ou fora e em que versão (D-275 do Horus), e das pessoas enxerga só contagens, sem nomes. (D-261 do Horus)

**Por que é assim.** É a separação de funções: quem cuida da instalação não confere o que cada organização fez. Na infraestrutura da Maind, o administrador da instância é a equipe da Maind; se ela visse o registro, veria de uma vez o de todos os clientes da instância, e o isolamento quebraria. (decisão 12)

> **Analogia:** o síndico sabe se o elevador funciona, quantos apartamentos estão ocupados e quando foi a última manutenção, mas não lê a correspondência dos moradores. **Onde a analogia para:** o síndico costuma ter uma chave para emergências; o painel do administrador da instância não abre o registro das organizações em situação nenhuma.

**Exemplo.**

1. Marta abre o painel da instância da Farma Vida: vê as duas organizações, o estado de cada uma e as versões do Horus e do próprio mAIg.
2. Um diretor pede a Marta a lista de quem consultou o banco de vendas na véspera. O painel não tem isso: quem consulta o registro é Paulo ou Renata, da área de segurança, que Paulo nomeou auditora. (MF-102)

**Quando dá errado.** Na instância da Maind, um cliente pede à equipe da Maind uma cópia do registro da organização dele. A equipe da Maind não tem esse acesso; o caminho é o owner da organização ou o auditor. (decisão 12)

### Excluir uma organização

**Em resumo:** No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: excluir uma organização apaga tudo o que há dela, e só dela, sem tocar nas outras da mesma instalação (D-278 do Horus). Quem pede, quem confirma e o que acontece com o registro estão em aberto.

**Quem é quem.**

- **Excluir** é tirar a organização da instância de vez. Não é um app parar pelo fim do contrato: o app parado guarda a configuração, para voltar como estava se a organização renovar. (decisão 14)
- **O que vai junto, no Horus:** as pessoas, os bancos e a IA configurados e a configuração da organização; e quem exclui é quem administra a instalação. (D-278, D-280 do Horus)

**Por que é assim, no Horus.** Uma organização que não existe mais não deve deixar para trás dados de pessoas nem senhas de banco, e, como a instalação é compartilhada, só o que é dela sai. O preço: uma exclusão por engano leva a configuração, sem volta. (D-278 do Horus)

**A relação com o registro.** No mAIg, o registro de um app fica guardado enquanto o app estiver instalado e só é excluído quando o app é desinstalado (decisão 15). Mas o app pode seguir instalado para as outras organizações depois que uma sai, e as decisões não dizem o que acontece com o registro da que saiu. É um ponto novo, em "O que ainda falta decidir".

**Exemplo**, com o ponto de partida do Horus.

1. A Farma Vida vende a farmácia de manipulação e pede o fim da organização "Farma Vida Manipulação".
2. Marta, no papel de administrador da instância, exclui essa organização.
3. Vão embora as pessoas, os bancos, a IA e a configuração dela.
4. A organização "Farma Vida" não sente nada: apps, regras e registro seguem como estavam.

**Quando dá errado.** Marta exclui a organização errada. Pelo ponto de partida do Horus, não há volta: a organização teria de ser criada e configurada de novo (D-278 do Horus). Por isso quem pede e quem confirma a exclusão é um dos pontos em aberto.

### Atualizar o próprio mAIg

**Em resumo:** o mAIg ganha versões novas, e alguém precisa instalá-las em cada instância. No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: quem atualiza é quem hospeda, a Maind nas instalações dela e o cliente na dele (D-292 do Horus). No mAIg, isso ainda está em aberto.

**Quem é quem.** O mAIg tem versões próprias, separadas das do Horus e dos outros apps (decisão 2). Atualizar é trocar a versão instalada numa instância por uma mais nova.

**O que muda com várias organizações por instância.** A versão é da instância, e não de cada organização. Atualizar uma instância atualiza o mAIg para todas as organizações dela de uma vez; na da Maind, isso alcança empresas diferentes ao mesmo tempo. (decisão 9) Na do cliente, pelo ponto de partida do Horus, que o mAIg ainda confirma, a TI dele escolhe a hora. (D-292 do Horus)

**Por que importa.** No Horus, o motivo registrado é que a peça na casa do cliente é atualizada pela TI dele, no tempo dela, enquanto a Maind atualiza com frequência a parte que roda na nuvem dela. Sem regra, uma instalação esquecida numa versão antiga para de conversar com os apps. (D-292 do Horus)

**Exemplo**, com o ponto de partida do Horus.

1. A Maind lança uma versão nova do mAIg.
2. Rafael atualiza a instância da Maind onde estão a Ótica Visão Clara e a clínica; as duas passam à versão nova ao mesmo tempo.
3. Marta atualiza a instância da Farma Vida numa noite de pouco movimento e confere a versão nova no painel. (decisão 12)

**Quando dá errado.** Marta adia a atualização por muito tempo. No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: com uma versão velha demais, a organização para de funcionar, a pessoa vê o aviso de que é preciso atualizar, e o painel mostra o motivo e a versão, até a instalação ser atualizada. (D-292 do Horus)

**O que ainda está em aberto.** Quem atualiza, como a versão chega e se as organizações são avisadas antes, em "O que ainda falta decidir". Quantas versões podem conviver é ponto de Gestão dos apps (MF-104).

## Prova de valor

Prova de valor proposta pelo PO; o dono da Maind ainda não a confirmou.

**Demonstração 1: duas empresas na mesma instância, sem se verem.** Numa instância da Maind, a equipe da Maind cria duas organizações de empresas diferentes, e o owner da organização de cada uma configura um banco e a IA. Cada owner da organização e cada auditor procuram, no próprio espaço, qualquer sinal da outra: apps, regras, configuração ou registro. Não encontram nada. Por fim, a equipe da Maind abre o painel da instância diante de quem confere: vê as duas organizações, o estado e as versões, e nenhum registro. Quem confere de fora: a TI do cliente e o auditor de cada organização.

**Demonstração 2: excluir uma sem tocar na outra.** O administrador da instância exclui uma das organizações. Na outra, a pessoa que usa o app faz uma pergunta e recebe a resposta, e o registro continua inteiro. Quem confere: o auditor da organização que ficou.

## Retorno para o negócio

- **Entrar em clientes sem TI.** A hospedagem na Maind leva o mAIg, e com ele o primeiro app, a empresas que não instalariam nada, o que alarga a entrada da estratégia de entrar e expandir. (decisão 9)
- **Entrar em clientes exigentes.** A hospedagem na casa do cliente atende quem só aceita o banco protegido dentro da própria rede. (decisão 9)
- **Custo de atender menor.** Hipótese: com várias organizações por instância, a Maind opera menos instalações do que tem clientes, e um cliente novo na infraestrutura dela não pede uma instalação nova.
- **Expandir dentro da mesma empresa.** Hipótese: abrir uma organização nova para uma unidade da mesma empresa, sem instalação nova, facilita levar os apps a outras partes dela.
- **Confiança que ajuda a vender.** Hipótese: saber que nem o administrador da instância lê o registro pesa a favor na aprovação de segurança, sobretudo na instância da Maind, onde convivem empresas diferentes.
- **O que se abre mão.** A instalação compartilhada é um ponto único, como mostra o ponto de partida do Horus no segundo tópico: uma queda ou uma invasão alcança todas as organizações dela.

## O que não inclui

- **Os papéis, o login (a entrada no sistema) e o primeiro acesso do owner da organização:** Segurança e permissões (MF-101).
- **O registro e a consulta pelo owner da organização e pelo auditor:** Registro e auditoria (MF-102).
- **A contratação por organização, o kit de instalação (o pacote que a Maind entrega a cada contratação, com um certificado digital, uma espécie de carteira de identidade digital) e o handshake contratual:** Contratação dos apps (MF-103).
- **Instalar, pausar, retirar e desinstalar um app, e quantas versões podem conviver:** Gestão dos apps (MF-104).
- **O cofre e o jeito de a Maind alcançar o banco na hospedagem dela:** Bancos da empresa (MF-105).
- **As chaves, os modelos, os limites e o custo da IA:** Governança da IA (MF-106).
- **A ligação que a instância abre com a Maind e o que acontece quando ela cai:** Conexão de dentro para fora (MF-108).
- **O isolamento entre os módulos dos apps, que separa um app do outro, e não uma organização da outra:** Execução isolada dos apps (MF-109).
- **A tela do painel da instância:** Console de configuração (MF-110).
- **Um nível "empresa" acima das organizações:** não existe no mAIg. (decisão 11)
- **O preço:** ponto em aberto do mapa geral do mAIg.

## Depende de

Nenhuma outra mf do mAIg. Esta é a base: a contratação, as permissões, os bancos, a IA e o registro são todos por organização, e por isso as outras mfs dependem desta.

- **Pré-requisito de negócio: a Maind ter infraestrutura própria para hospedar instâncias e uma equipe para fazer nelas o papel de administrador da instância.** Sem isso, não existe a hospedagem na Maind, a que atende o cliente sem TI. (decisão 9)

**Quem depende desta:** Segurança e permissões (MF-101), Registro e auditoria (MF-102), Contratação dos apps (MF-103), Gestão dos apps (MF-104) e Console de configuração (MF-110).

## Ponto de partida no Horus

O mAIg nasceu como o middleware do Horus, a peça entre as telas do Horus, na nuvem da Maind (os servidores da Maind na internet), e os dados da empresa; abaixo, "a peça" é esse middleware.

- **Várias organizações em qualquer hospedagem.** No Horus, a peça atende várias organizações em qualquer hospedagem, cada uma isolada pelo seu certificado, e a diferença entre as hospedagens é só o local físico. Se a instalação compartilhada for invadida, ficam expostas as senhas e as regras de todas, e quem exigir mais isolamento instala em casa. Isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma. (D-272 do Horus)
- **Ativa só quando pronta.** No Horus, a organização nasce em configuração e só passa a ativa com a peça ligada e o handshake confirmado, um banco e a IA configurados; a trava é automática, e o ato de ativar, pela leitura registrada lá, é de quem administra a instalação. Isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma. (D-277 do Horus)
- **Excluir apaga o que é da organização, e só dela.** No Horus, saem as pessoas, os bancos, a IA e a configuração, sem tocar nas outras, e uma exclusão por engano não tem volta. Isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma. (D-278 do Horus)
- **Quem administra a instalação cria e exclui as organizações.** No Horus, quem administra a instalação cria a organização e o usuário do owner da organização, vê o estado e a versão e exclui. A parte em que o administrador da instância cria as organizações e o usuário do primeiro owner da organização já vale para o mAIg; o resto vale como ponto de partida, e o mAIg ainda confirma. (D-271, D-280 do Horus)
- **O painel mostra o estado e a versão.** No Horus, o painel mostra se a peça de cada organização está no ar ou fora e em que versão; quando ela para, é avisado o responsável pelo serviço, a Maind na instalação dela e o cliente na dele. Isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma. (D-275 do Horus)
- **O painel só enxerga contagens das pessoas.** No Horus, as pessoas ficam isoladas na peça, fora da nuvem da Maind, e o painel de quem administra a instalação só as conta. Isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma. (D-261 do Horus)
- **Quem atualiza é quem hospeda.** No Horus, a Maind atualiza a peça dela e o cliente, a dele, e uma versão velha demais é recusada, com aviso. Isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma. (D-292 do Horus)
- **A queda da instalação compartilhada alcança todas as organizações dela.** No Horus, com a peça da Maind fora do ar, a queda alcança todas as organizações atendidas por ela; com a do cliente, só a dele. Isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma. (D-283 do Horus)

## O que ainda falta decidir

- **Falta o dono da Maind decidir, com o arquiteto do mAIg, quem atualiza o mAIg em cada hospedagem, como a versão nova chega à instância e se as organizações são avisadas antes.** *O que está em jogo:* numa instância da Maind, uma atualização alcança empresas diferentes ao mesmo tempo; numa do cliente, uma instância esquecida numa versão velha para de funcionar. O ponto de partida do Horus é que quem atualiza é quem hospeda. (D-292 do Horus)
- **Falta o dono da Maind decidir o que torna uma organização pronta para ficar ativa no mAIg e quem a marca como ativa.** *O que está em jogo:* as condições do Horus foram pensadas para um app que lê bancos; com vários apps, "pronta" pode valer para a organização ou para cada app, e uma trava errada barra um app que nem precisa de banco. (D-277 do Horus)
- **Falta o dono da Maind decidir quem pede e quem confirma a exclusão de uma organização, e o que acontece com o registro dela.** *O que está em jogo:* a exclusão não tem volta, e, na instância do cliente, quem exclui é a TI do cliente, não o owner da organização; o registro só sai quando o app é desinstalado (decisão 15), e o app pode seguir instalado para as outras organizações.
- **Falta o dono da Maind decidir quando uma organização ganha uma instância só dela na infraestrutura da Maind e se, com o arquiteto do mAIg, uma organização pode mudar de instância ou de hospedagem.** *O que está em jogo:* a mesma infraestrutura física pode ter mais de uma instância (decisão 9), o que dá mais isolamento a quem não quer instalar nada, mas sem critério cada pedido vira exceção; e um cliente que começa na Maind e depois quer o mAIg na própria rede pode ter de refazer toda a configuração, com o registro preso ao app instalado na instância antiga. (decisão 15)
- **Falta o arquiteto do mAIg definir como as organizações de uma mesma instância ficam separadas por dentro.** *O que está em jogo:* é a promessa do multi-tenant. No Horus, cada organização era isolada pelo seu certificado, e ficou como hipótese que isso baste (D-272 do Horus); no mAIg, o certificado chega no kit de instalação de cada app contratado, e não como uma identidade única da organização. (decisão 10)
- **Falta o arquiteto do mAIg definir, com o dono da Maind, como uma organização criada no mAIg passa a existir também na parte de fora de cada app.** *O que está em jogo:* no Horus, a organização nascia na nuvem da Maind e depois era ligada à peça (D-258 do Horus); no mAIg, ela nasce na instância, e a parte de fora do app, como as telas do Horus, precisa conhecê-la sem um segundo cadastro que possa divergir.
- **Também depende, e está explicado em outras mfs:** onde ficam e quem cadastra as pessoas que usam os apps (MF-101); quantas versões do mAIg e dos apps podem conviver (MF-104); como a Maind alcança o banco na hospedagem dela (MF-105); e o preço, do mapa geral do mAIg.

## Decisões do PO para discutir

- **Decisão:** tratar "a organização só fica ativa quando está pronta" como ponto de partida do Horus, e não como regra já valendo no mAIg, e abrir a pergunta do que é "pronta". *Por que:* as condições do Horus (handshake, banco e IA) foram pensadas para o Horus, e o mAIg serve a vários apps. *Alternativa:* adotar as condições do Horus como estão na primeira versão. *Reabrir se:* o dono da Maind quiser fechar a primeira versão só com o Horus em vista.
- **Decisão:** pôr aqui a atualização do próprio mAIg, com o ponto de partida do Horus de que quem atualiza é quem hospeda (D-292 do Horus), entrada que a lista de pontos de partida não trazia para esta mf. *Por que:* a versão é da instância, e uma atualização alcança todas as organizações dela. *Alternativa:* tratá-la em Gestão dos apps, junto da convivência de versões (MF-104). *Reabrir se:* a atualização do mAIg e a dos apps seguirem o mesmo caminho.
- **Decisão:** esta mf não depende de nenhuma outra. *Por que:* as condições de ativação usam o resultado de outras mfs, mas a regra mora aqui, e declarar a dependência faria um círculo, porque a contratação depende desta (MF-103). *Alternativa:* declarar dependência da contratação, dos bancos e da IA (MF-103, MF-105, MF-106). *Reabrir se:* a ativação passar a fazer parte da contratação.
- **Decisão:** abrir como ponto novo o destino do registro de uma organização excluída, sem resposta no texto. A leitura do PO é que a exclusão leva o registro junto, como no Horus e por cuidado com a lei de proteção de dados. *Por que:* o mAIg liga a exclusão do registro à desinstalação do app (decisão 15), e numa instância com várias organizações o app pode seguir instalado. *Alternativa:* guardar o registro da organização excluída até o app sair da instância. *Reabrir se:* o dono da Maind já considerar a exclusão da organização uma desinstalação dos apps dela.
- **Decisão:** a prova de valor principal usa duas organizações de empresas diferentes numa instância da Maind. *Por que:* é o caso mais exigente, o que a TI de um cliente vai querer ver antes de aceitar dividir a instalação. *Alternativa:* duas organizações da mesma empresa, na casa do cliente. *Reabrir se:* o primeiro cliente for hospedado na própria rede.
- **Decisão:** pôr o owner da organização em "Quem ganha", de forma indireta, e usar personagens ilustrativos novos (a "Farma Vida Manipulação", a Ótica Visão Clara, uma clínica e Rafael, da equipe da Maind). *Por que:* o isolamento é a garantia que o owner da organização recebe, e os exemplos pediam uma segunda organização da mesma empresa e uma segunda empresa na instância da Maind. *Alternativa:* só os papéis e os personagens das páginas da visão. *Reabrir se:* o dono da Maind preferir um elenco fixo para todas as mfs.
- **Decisão:** manter a classe essencial e a mf inteira na primeira versão. *Por que:* várias organizações por instância estão na primeira versão (decisão 16), e sem elas não há hospedagem na Maind. *Alternativa:* deixar para a segunda versão a exclusão e a mudança de instância. *Reabrir se:* a primeira versão não comportar o painel da instância inteiro.
- **Decisão:** declarar um pré-requisito de negócio: a Maind ter infraestrutura própria para hospedar instâncias e uma equipe para fazer nelas o papel de administrador da instância. *Por que:* sem isso, não existe a hospedagem na Maind, que atende o cliente sem TI (decisão 9). *Alternativa:* não declarar pré-requisito, como se a hospedagem na Maind já existisse. *Reabrir se:* o dono da Maind decidir que a primeira venda acontece só com o mAIg na infraestrutura do cliente.
- **Decisão:** a exclusão de uma organização entrou em "Quem ganha" e na segunda demonstração como coisa que o administrador da instância faz, embora no mAIg ela ainda seja ponto de partida do Horus (D-278, D-280 do Horus). *Por que:* sem ela, a demonstração de que uma organização sai sem tocar na outra não teria como ser feita. *Alternativa:* uma segunda demonstração sem a exclusão, só com a organização vizinha que não muda. *Reabrir se:* o dono da Maind decidir outro caminho para a exclusão, que é ponto em aberto desta mf.
- **Decisão:** três pontos novos foram abertos aqui, além da atualização, do que é "pronta" e do registro da organização excluída: quando uma organização ganha uma instância só dela e se pode mudar de instância, com o dono da Maind; como as organizações de uma instância ficam separadas por dentro, com o arquiteto do mAIg; e como uma organização criada no mAIg passa a existir na parte de fora de cada app, com o arquiteto do mAIg e o dono da Maind. *Por que:* nenhuma decisão os responde, e o primeiro e o terceiro mudam o que o cliente e a equipe da Maind fazem. *Alternativa:* deixar todos para o arquiteto do mAIg. *Reabrir se:* o arquiteto do mAIg mostrar que algum deles é só técnico.
- **Decisão:** usar entradas do Horus fora da lista indicada para esta mf: quem cria o usuário do owner da organização (D-271 do Horus), a queda da instalação compartilhada (D-283 do Horus) e o jeito como a organização nascia na nuvem da Maind e era ligada à peça (D-258 do Horus). *Por que:* a primeira já foi aceita para o mAIg, a segunda mostra o preço da instância compartilhada, e a terceira explica o ponto novo sobre a parte de fora de cada app. *Alternativa:* ficar só nas entradas da lista. *Reabrir se:* o dono da Maind preferir o ponto de partida só com as entradas da lista.
