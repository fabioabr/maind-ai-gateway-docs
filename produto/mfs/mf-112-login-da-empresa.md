# MF-112:Entrar com o login que a empresa já usa

> A pessoa que usa o app entra com a mesma conta que usa nos sistemas da empresa, conferida pelo provedor de identidade dela, o sistema onde a TI do cliente cadastra os funcionários. A TI do cliente passa a controlar num lugar só quem entra, e quem a empresa desliga não consegue mais entrar nos apps pelo login da empresa. O owner da organização e o administrador da instância, que também entram por usuário e senha, mantêm essa senha até alguém retirá-los, mas ela abre só o console, e não os apps (decisões 24 e 55).

**Também chamada de:** Login da empresa · **Versão do mAIg:** 2ª · **Classe:** acelera · **Situação:** rascunho do PO

## Em uma frase

O mAIg passa a aceitar o login da empresa: a pessoa entra nos apps com a conta que a TI do cliente já lhe deu, e quem confirma quem ela é passa a ser o provedor de identidade da empresa, como mais um jeito de entrar, ao lado do usuário e senha e do Google.

**Os termos, pelo que fazem.** Login é a entrada da pessoa no sistema. Autenticar é conferir que alguém é quem diz ser. O provedor de identidade, ou IDP, na sigla em inglês, é o sistema em que a empresa cadastra os funcionários e pelo qual eles entram nos sistemas internos; é a TI do cliente quem o controla. O OpenID Connect é um padrão, uma regra combinada entre fabricantes, que permite a um sistema pedir ao provedor de identidade da empresa que confirme quem é a pessoa.

**Por que existe.** Muitas empresas exigem que todo sistema novo use o login delas. Para a pessoa, é uma senha a menos para lembrar. Para a TI do cliente, é um lugar só para dar e tirar acesso: quem sai da empresa é desligado uma vez e perde a entrada em tudo o que usa pelo login da empresa. Sem o login da empresa, a TI do cliente pode exigi-lo para aprovar a compra. A primeira versão do mAIg funciona sem ele; esta mf tira esse atrito da venda e do uso.

**Em que onda.** Esta mf fica inteira para a segunda versão do mAIg. A primeira versão sai em duas ondas, a 1.0 e a 1.1, e a segunda versão vem depois: nada desta mf entra na onda 1.0 nem na onda 1.1 (decisões 16 e 95). Na primeira versão, as pessoas entram por usuário e senha ou pela conta Google, os dois jeitos desde a onda 1.0 (decisão 98). As regras que o texto traz como ponto de partida do Horus, com a marca de que o mAIg ainda confirma, ficam para o fechamento da segunda versão, e não seguram o fechamento da primeira.

## Quem ganha

- **TI do cliente.** É quem mais ganha. Controla num lugar só, o provedor de identidade da empresa, quem consegue entrar nos apps da Maind. Desliga uma pessoa uma vez, e ela deixa de entrar nos apps; pelo ponto de partida do Horus, perde o acesso no mesmo dia. E atende à regra interna de que todo sistema use o login da empresa.
- **Pessoa que usa o app.** Entra com a conta que já usa todos os dias, sem uma senha nova. No Horus, é a pessoa que pergunta.
- **Owner da organização.** Pelo ponto de partida do Horus, recebe do login da empresa o papel de cada pessoa, em vez de ajustá-lo à mão. Continua decidindo quem entra. A senha esquecida já não passa por ele desde a primeira versão: cada pessoa pede o próprio link de troca de senha na tela de entrada (decisão 99).

## A decisão que passa a ser possível

**A TI do cliente passa a poder aprovar o mAIg** mesmo quando a regra da empresa é "nenhum sistema com senha própria", porque a entrada nos apps passa pelo provedor de identidade que ela já controla.

**A TI do cliente passa a poder desligar uma pessoa num lugar só** e saber que ela perde a entrada nos apps da Maind pelo login da empresa, sem pedir nada ao owner da organização nem à Maind; pelo ponto de partida do Horus, na mesma jornada de trabalho.

**A dor que some.** Sem esta mf, cada pessoa tem uma senha a mais, e quem sai da empresa continua com uma porta aberta até alguém lembrar de tirá-la no mAIg. Isso só não vale para o owner da organização e o administrador da instância, que mantêm a senha local até alguém retirá-los (decisão 24). Mas essa senha abre só o console, e não os apps (decisão 55).

## Como funciona

### O que é o login da empresa

**Em resumo:** em vez de digitar uma senha do mAIg, a pessoa é levada à tela de login da própria empresa, entra ali, e o provedor de identidade confirma ao mAIg quem ela é.

**Quem é quem.**

- **O provedor de identidade da empresa** guarda as contas dos funcionários e confere a senha de cada um. Só a TI do cliente cria, muda e desliga essas contas.
- **O mAIg** recebe a confirmação de quem é a pessoa e decide se ela entra, pelas regras da organização. A autenticação é do núcleo do mAIg (decisão 3). O cadastro e o login das pessoas ficam no núcleo, iguais para todos os apps (decisão 23).
- **A pessoa que usa o app** escolhe "entrar com o login da empresa" e digita a senha na tela da própria empresa. O mAIg nunca vê essa senha.

**Como acontece, em geral.** É assim que o OpenID Connect funciona em qualquer sistema: a pessoa pede para entrar, o sistema a leva à tela de login da empresa, ela entra ali com a conta de sempre, e o provedor de identidade devolve ao sistema uma confirmação assinada, que diz quem ela é e não se falsifica sem que se perceba.

**Por que é assim.** A senha da pessoa fica num lugar só, o da empresa, e quem decide se a conta vale é a TI do cliente.

**Onde fica a confirmação.** O login começa no endereço do mAIg, e a confirmação assinada do provedor de identidade chega ao mAIg e fica nele: nunca vai à nuvem da Maind. A nuvem dos apps recebe só o passe que o mAIg assina, que vale 15 minutos e se renova pelo mAIg (decisões 32 e 37, MF-101).

> **Analogia:** é como mostrar na portaria do prédio o crachá que a empresa já deu ao funcionário, em vez de pedir um crachá novo ao prédio. **Onde a analogia para:** o porteiro do mAIg não confere o crachá a olho; pergunta ao próprio sistema da empresa, e o crachá só vale enquanto a empresa o mantiver ativo.

**A diferença para o login pelo Google.** O login pelo Google, da primeira versão, confere uma conta Google da pessoa (decisão 16). O login da empresa consulta o provedor de identidade que a TI do cliente controla e, pelo ponto de partida do Horus, traz junto o papel da pessoa e se confirma de tempos em tempos, como mostram os tópicos seguintes.

### Mais um jeito de entrar, ligado pelo owner da organização

**Em resumo:** o login da empresa é mais um jeito de entrar, ao lado do usuário e senha e do Google. O owner da organização o liga na organização dele, e só o OpenID Connect é aceito.

**Quem é quem.**

- **Os jeitos de entrar** são configuração da organização. Na primeira versão do mAIg, são o usuário e senha e o Google, os dois desde a onda 1.0: cada organização nasce só com usuário e senha ligados, e o owner da organização liga o Google se quiser (decisão 98). O login da empresa entra na segunda versão como mais um, no mesmo lugar (decisão 16).
- **O owner da organização** liga ou desliga cada jeito de entrar, no console do mAIg, a tela onde ele configura tudo (MF-110).
- **A TI do cliente** prepara o provedor de identidade da empresa para aceitar o mAIg e entrega ao owner da organização os dados da ligação.
- **O SAML** é outro padrão de login, usado por parte das empresas. Não é aceito.

**Por que é assim.** No Horus, isso já foi decidido assim, e vale no mAIg: a mecânica de login é configuração da organização, o owner da organização liga ou desliga cada uma, num ato sensível, e o login da empresa entra como mais uma, sem refazer o login (decisões 40 e 85, D-291 do Horus). Ainda pelo ponto de partida do Horus, só o OpenID Connect é aceito, porque cobre os provedores de identidade mais comuns sem uma peça nova; o SAML só entra por decisão nova, quando um cliente importante o exigir (D-184 do Horus).

**Em cada organização.** O mAIg não tem um nível de empresa acima da organização, e cada uma tem as próprias regras (decisões 9 e 11). Por isso uma empresa com duas organizações, como a matriz e uma subsidiária, liga o login nas duas, mesmo com o mesmo provedor de identidade. E uma pessoa que está nas duas tem uma conta em cada uma (decisão 66, MF-101).

**O owner da organização e o administrador da instância.** Os dois entram sempre por usuário e senha, mesmo com o login da empresa ligado (decisão 24, D-291 do Horus). Assim, quem configura a organização nunca fica trancado do lado de fora se o login da empresa falhar ou for mal configurado. Os outros owners da organização, quantos a organização contratar, também entram por usuário e senha, e o login da empresa vira mais um jeito de entrar para todos, sem tirar a senha (decisões 25 e 84). Essa senha local abre só o console: para usar os apps, o owner da organização entra como qualquer pessoa, pelo jeito de entrar da organização, e quem a empresa desliga perde os apps junto (decisão 55).

**Do que se abre mão.** Uma empresa que só tem SAML fica sem o login da empresa até uma decisão nova. E uma empresa com várias organizações repete a ligação em cada uma. E a TI do cliente não impõe a política da empresa à entrada do owner da organização e do administrador da instância, que seguem por usuário e senha (decisão 24).

**Exemplo.** A Farma Vida, rede de 40 farmácias, usa o mAIg com o Horus e quer que os funcionários entrem com a conta da empresa.

1. Marta, da TI do cliente, prepara o provedor de identidade da Farma Vida para aceitar o mAIg e entrega a Paulo os dados da ligação.
2. Paulo, owner da organização, abre o console do mAIg, liga o login da empresa e informa os dados que Marta lhe deu.
3. Paulo decide manter o usuário e senha para quem ainda não tem conta na empresa, e desliga o Google.
4. Na próxima vez em que Ana, gerente comercial, abre o Horus, o Horus a manda à tela de entrada do mAIg da Farma Vida, no endereço do mAIg, onde aparece "entrar com o login da empresa". Ela é levada à tela de login da Farma Vida e entra com a conta de sempre. A confirmação volta ao mAIg, que emite o passe do Horus, e Ana cai no Horus (decisões 32 e 40).
5. Paulo continua entrando no console com o usuário e a senha dele.

**Quando dá errado.** Os dados da ligação estão errados, e o login da empresa não funciona. Os outros jeitos de entrar que Paulo deixou ligados continuam valendo, e Paulo, que entra por usuário e senha, corrige a ligação no console. Se a Farma Vida só tivesse SAML, o login da empresa não poderia ser ligado.

### O login só confirma quem a pessoa é: entra quem a organização cadastrou

**Em resumo:** o login da empresa só autentica: prova quem a pessoa é. Para entrar, ela precisa estar cadastrada na organização, como já acontece na primeira versão.

**Quem é quem.** **Autenticar** é provar quem a pessoa é. **Dar acesso** é decidir que ela pode entrar e o que pode fazer; isso continua com o owner da organização, que cadastra as pessoas da organização. Ter uma conta no provedor de identidade da empresa não basta.

**Por que é assim.** No Horus, com o login da empresa ligado, só entra quem tem convite, como antes, e quem chega pelo login da empresa sem convite não entra (D-253 do Horus). Vale no mAIg, onde o lugar do convite é o cadastro que o owner da organização faz direto no console: quem chega pelo login da empresa sem estar cadastrado não entra (decisões 23 e 77). Assim, ninguém entra numa organização sem o owner da organização saber, e ligar o login da empresa não muda quem pode entrar.

**Do que se abre mão.** O owner da organização continua cadastrando cada pessoa, mesmo com o login da empresa ligado. Numa empresa grande, é trabalho; que o owner da organização prefira isso a deixar entrar sozinho é uma hipótese a validar.

**Exemplo.**

1. Ana está cadastrada na organização da Farma Vida. Ela entra pelo login da empresa e chega ao Horus.
2. João, da logística, tem conta no provedor de identidade da Farma Vida, mas não foi cadastrado por Paulo. Ele tenta entrar pelo login da empresa.
3. O provedor de identidade confirma que é o João. O mAIg confere que João não está cadastrado na organização, e ele não entra.
4. Se João precisar do Horus, Paulo o cadastra, e a próxima entrada dele pelo login da empresa funciona.

**O que ainda está em aberto.** O texto que João lê quando não entra é desenho de tela. Onde ficam as pessoas que usam os apps já foi decidido: no núcleo, para todos os apps (decisão 23).

### O papel que o login da empresa traz

**Em resumo:** pelo ponto de partida do Horus, o login da empresa também diz qual é o papel da pessoa, e, quando ele discorda do cadastro, vale o que o login da empresa diz. No mAIg, esse papel vale dentro de cada app, e não no núcleo para todos: o passe de cada app leva o papel da pessoa naquele app (decisão 40).

**Quem é quem.** O papel, que no Horus se chama role, é o conjunto de funcionalidades que a pessoa pode usar no app. O provedor de identidade da empresa costuma guardar o setor ou a função de cada funcionário, e o login da empresa pode trazer essa informação junto com a confirmação de quem a pessoa é.

**Por que é assim.** No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: quando a role do cadastro e a do login da empresa discordam, vale a do login da empresa, e quem chega sem um valor correspondente recebe a role padrão da organização (D-254 do Horus). Assim, a TI do cliente governa os papéis num lugar só, e a pessoa que mudou de área não fica com uma permissão velha.

**Do que se abre mão.** O owner da organização deixa de poder mudar, dentro do app, o papel de quem entra pelo login da empresa: se o login disser outra coisa, vale o login.

**Exemplo.** Ana é promovida a diretora comercial, e Marta muda a função dela no provedor de identidade da Farma Vida. Na próxima entrada de Ana pelo login da empresa, o Horus passa a lhe mostrar o que a nova role permite, sem Paulo mexer em nada.

**O que já está decidido.** No mAIg, a autorização, a conferência do que cada um pode fazer, é do núcleo (decisão 3). O papel trazido pelo login da empresa vale dentro de cada app, e não no núcleo para todos: o passe de cada app leva o papel da pessoa naquele app (decisão 40).

### A confirmação de tempos em tempos: quem sai da empresa perde o acesso

**Em resumo:** pelo ponto de partida do Horus, a sessão que nasce pelo login da empresa se confirma com ele a cada 8 horas. Quem foi desligado pela empresa não consegue entrar de novo.

**Quem é quem.** A **sessão** é o tempo em que a pessoa segue dentro do app sem precisar entrar de novo. **Confirmar a sessão** é o mAIg perguntar de novo ao provedor de identidade se a conta da pessoa continua valendo.

**Por que é assim.** No Horus, a sessão comum dura até 30 dias, e quem saísse da empresa poderia continuar entrando nesse tempo todo. No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: a sessão nascida pelo login da empresa se confirma com ele a cada 8 horas, e se a empresa desligou a pessoa ela precisa entrar de novo e não consegue (D-255 do Horus). O intervalo de 8 horas é, no próprio Horus, uma hipótese técnica a validar.

**Do que se abre mão.** O app passa a depender de o provedor de identidade da empresa responder à confirmação. Para quem continua na empresa, quase nada muda; quem sente a diferença é a pessoa desligada.

> **Analogia:** é como o porteiro que, a cada troca de turno, liga para o setor de pessoal para conferir se os crachás ainda valem. **Onde a analogia para:** o porteiro confere todos de uma vez, na troca de turno; o mAIg confere a sessão de cada pessoa, no tempo dela.

**Exemplo.** Jorge, farmacêutico da Farma Vida, usa o Horus pelo login da empresa.

1. Às 8h, Jorge entra no Horus pelo login da empresa, e a sessão dele começa.
2. Às 10h, a Farma Vida o desliga, e Marta desativa a conta dele no provedor de identidade.
3. Até a próxima confirmação, a sessão de Jorge ainda vale.
4. Às 16h, o mAIg confirma a sessão com o provedor de identidade, que diz que a conta não vale mais. Jorge precisa entrar de novo e não consegue.
5. Ninguém precisou avisar Paulo nem a Maind: a TI do cliente desligou Jorge num lugar só.

Se Marta também tira Jorge da VPN, ele perde os apps bem antes, em até 15 minutos, porque o passe só se renova pelo mAIg, e a máquina dele deixa de alcançá-lo (decisão 37).

**Dois relógios.** Quem entra pelo login da empresa tem dois relógios correndo ao mesmo tempo, e o que vencer primeiro tira a pessoa dos apps. O primeiro é o do passe, de 15 minutos, que se renova pelo mAIg: a cada renovação, o mAIg confere se a pessoa ainda tem acesso na organização e se a máquina dela ainda o alcança. Por isso quem o owner da organização tira do cadastro, ou quem sai da rede da empresa ou da VPN, perde os apps em até 15 minutos (decisão 37). O segundo é o da confirmação com o provedor de identidade, a cada 8 horas: é quando o mAIg pergunta à empresa se a conta ainda vale. Por isso quem a empresa desliga, sem que ninguém mexa no cadastro da organização, perde os apps na confirmação seguinte, como Jorge. O relógio das 8 horas vem do Horus e segue como ponto de partida (decisão 37, D-255 do Horus).

**O que ainda está em aberto.** O que acontece quando o provedor de identidade da empresa não responde à confirmação, e se o intervalo pode ser ajustado; os pontos estão no fim desta mf.

### O login da empresa e as regras dos bancos

**Em resumo:** no Horus, com o login da empresa ligado, as regras do próprio banco da empresa sobre quem vê o quê também passam a valer, junto com as do app. No mAIg, isso levanta uma pergunta nova, porque quem fala com o banco é o núcleo.

**Quem é quem.** Muitos bancos de dados têm regras próprias de acesso por pessoa: o vendedor de uma região só vê as vendas dela, por exemplo. Para essas regras valerem, o banco precisa saber quem é a pessoa por trás de cada consulta, e o login da empresa é o que dá essa identidade confiável.

**O ponto de partida do Horus.** No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: com o login da empresa ligado, o aviso de resposta limitada diz qual regra do Horus limitou a resposta e que os controles da empresa também valem (D-256 do Horus). E a fonte cuja tecnologia não aceita a identidade da pessoa continua respondendo, só com a regra do Horus, e o owner da organização é avisado disso ao ligar o login da empresa (D-257 do Horus).

**Por que importa para o mAIg.** Quem vê o quê dentro do banco, pessoa por pessoa, é assunto de cada app (MF-105). Mas, no mAIg, nenhum app fala com o banco: quem consulta é o núcleo, com a senha que fica no cofre, o lugar trancado onde ficam as senhas dos bancos (decisão 5). Para que as regras do banco valham por pessoa, o núcleo teria de levar ao banco a identidade de quem perguntou. Se faz isso, e como, ainda não está decidido.

### Por que fica para a segunda versão, e o que a primeira já deixa pronto

**Em resumo:** o login da empresa fica para a segunda versão porque nenhum app o usa na primeira. A primeira versão já deixa pronto o lugar onde ele entra.

**Por que depois.** A primeira versão do mAIg é o núcleo que a versão 2.0 do Horus usa, e o Horus só passa a usar o login da empresa na versão 2.1. Ela entrega já na primeira venda o motivo de o mAIg existir, a governança, e deixa para depois só o que nenhum app usa ainda (decisão 16).

No Horus, isso já foi decidido assim, e vale no mAIg, onde o login da empresa chega na segunda versão, junto com a versão 2.1 do Horus: o login corporativo ficou fora da versão 2.0, em que a pessoa entra por e-mail e senha ou pelo Google e o owner da organização atribui as roles no cadastro, para que a versão 2.0 não dependesse do sistema de login de cada cliente (decisões 16 e 92, D-118 do Horus).

**Do que se abre mão.** O mAIg fica incompleto até a segunda versão (decisão 16). E, até lá, a TI do cliente que exige o login da empresa pode segurar a aprovação: no próprio Horus, isso foi registrado como o contra de deixar o login corporativo para depois (D-118 do Horus). Ficou de fora fazer o núcleo completo já, porque atrasaria a versão 2.0 do Horus por partes que ele só usa na 2.1 (decisão 16).

**O que a primeira versão já deixa pronto.** Os cinco itens abaixo já existem desde a onda 1.0 (decisão 95).

- **A autenticação no núcleo** (MF-101). A autenticação já é do núcleo, e o login da empresa é mais um jeito de autenticar no mesmo lugar (decisão 3). Como as pessoas ficam no núcleo, ele vale do mesmo jeito para todos os apps (decisão 23, MF-101).
- **Os jeitos de entrar como configuração da organização** (MF-101). O owner da organização já liga e desliga o usuário e senha e o Google, desde a onda 1.0 (decisões 85 e 98); o login da empresa entra ao lado deles, sem refazer o login (D-291 do Horus).
- **O cadastro das pessoas da organização** (MF-101). É com ele que o login da empresa confere se quem chegou pode entrar.
- **O owner da organização e o administrador da instância por usuário e senha** (MF-101). Os dois continuam entrando como na primeira versão (decisão 24).
- **O console** (MF-110). A tela onde o owner da organização vai ligar o login da empresa.

### Quando dá errado

**Em resumo:** o login da empresa só deixa entrar quem a organização cadastrou e enquanto a empresa mantiver a conta ativa; quando a ligação falha, os outros jeitos de entrar que estiverem ligados continuam valendo.

- **Uma pessoa sem cadastro na organização tenta entrar.** O provedor de identidade confirma quem ela é, mas ela não entra (D-253 do Horus).
- **A empresa desliga uma pessoa.** Ela perde a entrada na próxima confirmação da sessão, em até 8 horas pelo ponto de partida do Horus (D-255 do Horus). Se a pessoa é um owner da organização, ela mantém a senha local até alguém retirá-la (decisão 24), mas essa senha abre só o console, e os apps ela perde junto (decisão 55).
- **O papel do login e o do cadastro discordam.** Vale o do login da empresa; sem valor correspondente, a pessoa recebe o papel padrão da organização (D-254 do Horus).
- **Os dados da ligação estão errados.** O login da empresa não funciona; o owner da organização, que entra por usuário e senha, corrige a ligação no console.
- **A empresa só tem SAML.** O login da empresa não pode ser ligado até uma decisão nova (D-184 do Horus).
- **Um banco não aceita a identidade da pessoa.** Continua respondendo só com a regra do app, e o owner da organização é avisado (D-257 do Horus).
- **O provedor de identidade da empresa sai do ar.** O que acontece com quem tenta entrar e com as sessões abertas ainda não está decidido.

### O que entra em cada onda

A primeira versão do mAIg sai em duas ondas, a 1.0 e a 1.1, e a segunda versão vem depois (decisões 92 e 95). A tabela diz em que onda chega cada capacidade desta mf, com as decisões que a sustentam. "Não entra" quer dizer que a capacidade não faz parte da primeira versão e não tem versão marcada. Esta mf fica inteira para a segunda versão: nada dela entra na onda 1.0 nem na onda 1.1.

| Capacidade | Onda | Decisões | Por quê |
| --- | --- | --- | --- |
| Entrar com o login que a empresa já usa | segunda versão | 16, 92 | A mf inteira fica para a segunda versão. |
| O papel da pessoa vem do login da empresa | segunda versão | 16, 92 | A mf inteira fica para a segunda versão. |
| A sessão se reconfirma com o login da empresa de tempos em tempos | segunda versão | 16, 92 | A mf inteira fica para a segunda versão. |

## Prova de valor

Prova de valor proposta pelo PO; o dono da Maind ainda não a confirmou.

1. **Quem sai da empresa perde o acesso no mesmo dia.** A TI do cliente desliga uma pessoa no provedor de identidade da empresa de manhã. Na mesma jornada de trabalho, ela não consegue mais usar o app, e ninguém precisou pedir nada ao owner da organização nem à Maind. A TI do cliente confere sozinha.
2. **O login autentica, mas não dá acesso.** A organização liga o login da empresa. Uma pessoa cadastrada entra com a conta da empresa; outra, com conta na empresa mas sem cadastro na organização, tenta entrar e não consegue. A TI do cliente e o owner da organização conferem os dois casos.

## Retorno para o negócio

- **Acelera, e não é essencial.** A primeira versão entrega a promessa do mAIg com o usuário e senha e o Google; o login da empresa aumenta a adoção e tira um atrito da venda.
- **Acelera a aprovação.** Hipótese: a TI do cliente que exige o login da empresa aprova o mAIg sem ressalva, o que encurta a etapa mais lenta da venda e reforça o objetivo de aprovar a segurança uma vez só.
- **Acelera a adoção e reduz o custo de atender.** Hipótese: sem uma senha nova, mais pessoas usam os apps, e mais cedo; caem os pedidos de "esqueci a senha", e o desligamento de quem sai deixa de depender de alguém lembrar de fazê-lo no mAIg.
- **Serve a todo app.** A autenticação é do núcleo, e não de cada app (decisão 3). Hipótese: ligado uma vez na organização, o login da empresa vale também para o segundo app, sem nenhuma conversa nova sobre login com a TI do cliente.

## O que não inclui

- **O login por usuário e senha e pelo Google, as permissões e os papéis do mAIg, e o primeiro acesso do owner da organização.** São da MF-101.
- **O cadastro das pessoas que usam os apps.** Fica com a segurança e as permissões, e as pessoas ficam no núcleo (decisão 23, MF-101).
- **O provedor de identidade da empresa.** É da empresa: o mAIg não cria nem muda contas nele, e a TI do cliente o mantém.
- **O SAML e outros padrões de login.** Só com uma decisão nova (D-184 do Horus).
- **Tirar a senha do owner da organização e do administrador da instância.** Os dois entram sempre também por usuário e senha, mesmo com o login da empresa ligado, por decisão do dono da Maind (decisão 24, D-291 do Horus); para os owners da organização, o login da empresa é mais um jeito de entrar, sem tirar a senha (decisão 25). Essa senha abre só o console, e não os apps (decisão 55).
- **Quem vê o quê dentro do banco, pessoa por pessoa.** É de cada app; no Horus, de uma mf do próprio Horus.
- **A tela onde o login da empresa se liga.** O console é da MF-110.

## Depende de

- `MF-101:Segurança e permissões`: o login da empresa é mais um jeito de autenticar, dentro da segurança e das permissões que ela cria. Ele usa o cadastro das pessoas da organização para decidir quem entra, os jeitos de entrar que o owner da organização liga e desliga, e o usuário e senha com que o owner da organização e o administrador da instância continuam entrando.
- `MF-110:Console de configuração`: é no console que o owner da organização liga o login da empresa, como faz com os bancos, a IA e os servidores MCP.

## Ponto de partida no Horus

- No Horus, isso já foi decidido assim, e vale no mAIg: o login corporativo ficou fora da versão 2.0; a pessoa entra por e-mail e senha ou pelo Google, e o owner da organização atribui as roles no cadastro, para que a versão 2.0 não dependesse do sistema de login de cada cliente; o contra registrado é que a TI de um cliente pode exigir o login corporativo para aprovar a compra (decisões 16 e 92, D-118 do Horus).
- No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: o login corporativo usa só o OpenID Connect, ligado em cada organização pelo owner da organização; o SAML só entra por decisão nova, quando um cliente importante o exigir, e um cliente que só tenha SAML fica de fora até lá (D-184 do Horus).
- No Horus, isso já foi decidido assim, e vale no mAIg, onde o lugar do convite é o cadastro feito pelo owner da organização: o login da empresa só autentica; só entra quem tem convite, e quem chega por ele sem convite não entra (decisões 23 e 77, D-253 do Horus).
- No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: quando a role do cadastro e a do login da empresa discordam, vale a do login da empresa, e quem chega sem valor correspondente recebe a role padrão da organização (D-254 do Horus).
- No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: a sessão nascida pelo login da empresa se confirma com ele a cada 8 horas, e o intervalo é uma hipótese técnica a validar (D-255 do Horus).
- No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: com o login da empresa ligado, o aviso de resposta limitada diz qual regra do Horus limitou a resposta e que os controles da empresa também valem (D-256 do Horus).
- No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: a fonte cuja tecnologia não aceita a identidade da pessoa continua disponível só com a regra do Horus, e o owner da organização é avisado ao ligar o login da empresa (D-257 do Horus).
- No Horus, isso já foi decidido assim, e vale no mAIg: a mecânica de login é configuração da organização; o owner da organização liga ou desliga cada uma, o login da empresa entra como mais uma (decisões 40 e 85, D-291 do Horus). Que o owner da organização e o administrador da instância entrem sempre por usuário e senha o dono da Maind confirmou em 09/11/2026 (decisão 24).

## O que ainda falta decidir

- **Falta o dono da Maind decidir o que acontece quando o provedor de identidade da empresa não responde.** *O que está em jogo:* se ninguém entra, uma queda do sistema da empresa para os apps da Maind; se as sessões abertas seguem valendo, uma pessoa desligada nesse intervalo continua dentro. No Horus, o que a pessoa lê quando a confirmação falha ficou para o desenho (D-255 do Horus).
- **Falta o arquiteto do mAIg definir, com o dono da Maind, se o núcleo leva ao banco a identidade da pessoa que entrou pelo login da empresa.** *O que está em jogo:* sem isso, as regras de acesso do próprio banco da empresa não valem por pessoa, e o ponto de partida do Horus, em que elas valem junto com as do app, não se sustenta no mAIg (MF-105).
- **Falta o arquiteto do mAIg confirmar que o login da empresa permite confirmar a sessão a cada 8 horas, e o dono da Maind decidir se o owner da organização ajusta esse intervalo.** *O que está em jogo:* o intervalo é o tempo máximo em que uma pessoa desligada ainda usa os apps; no Horus, ele é uma hipótese técnica (D-255 do Horus).

## Decisões do PO para discutir

- **Decisão:** ligar o login da empresa em cada organização, e não uma vez por empresa. *Por que:* o mAIg não tem um nível de empresa acima da organização, e o Horus já decidiu assim (decisões 9 e 11). *Alternativa:* uma ligação por empresa, valendo para todas as organizações dela. *Reabrir se:* uma empresa com muitas organizações reclamar de repetir a ligação.
- **Decisão:** aceitar só o OpenID Connect na segunda versão, como o Horus (D-184 do Horus). *Por que:* cobre os provedores de identidade mais comuns sem uma peça nova. *Alternativa:* aceitar também o SAML. *Reabrir se:* um cliente importante só tiver SAML.
- **Decisão:** o owner da organização e o administrador da instância entram sempre por usuário e senha, como o PO recomendou, e o dono da Maind confirmou em 09/11/2026 (decisão 24); os owners da organização a mais também entram por usuário e senha, e o dono da Maind o confirmou em 09/11/2026 (decisão 25). *Por que:* protege contra ficar trancado do lado de fora, e é o que o Horus diz dos dois (D-258 do Horus, D-291 do Horus). *Alternativa:* deixar o owner da organização, ou só os owners da organização a mais, entrar só pelo login da empresa, com uma conta de reserva; o dono da Maind decidiu que o login da empresa é mais um jeito de entrar para os três, sem tirar a senha (decisão 25). *Reabrir se:* a TI de um cliente exigir que toda conta, inclusive a do owner da organização, entre pelo login da empresa.
- **Decisão:** traduzir o convite do Horus por "estar cadastrado na organização". *Por que:* convite é um mecanismo do Horus, e no mAIg o cadastro das pessoas é do núcleo (decisão 23). *Alternativa:* usar "convite" também no mAIg. *Reabrir se:* o dono da Maind quiser o convite também no mAIg.
- **Decisão:** tratar o papel trazido pelo login e as regras dos bancos por pessoa como ponto de partida do Horus e pontos em aberto, e não como regras do mAIg (D-254 do Horus, D-256 do Horus, D-257 do Horus). *Por que:* os dois dependem de uma decisão que o mAIg ainda não tomou: se o núcleo leva a identidade ao banco; onde ficam as pessoas já foi decidido (decisão 23). *Alternativa:* adotá-los já como regras do núcleo. *Reabrir se:* esses pontos forem decididos.
- **Decisão:** manter em "Depende de" a segurança e as permissões e o console, sem os bancos (MF-101, MF-110). *Por que:* a segurança e as permissões são a dependência combinada, e é no console que o owner da organização liga o login da empresa, como manda a regra do mapa; os bancos só entram se o núcleo levar a identidade da pessoa até eles (MF-105). *Alternativa:* ficar só com a segurança e as permissões, ou acrescentar os bancos. *Reabrir se:* o núcleo passar a levar a identidade ao banco.
- **Decisão:** manter as 8 horas como número do Horus, e não como número do mAIg (D-255 do Horus). *Por que:* no próprio Horus é uma hipótese técnica a validar. *Alternativa:* adotar as 8 horas como regra. *Reabrir se:* o arquiteto do mAIg confirmar o intervalo.
- **Decisão:** classe acelera, e as duas provas de valor vindas do Horus, a da pessoa desligada e a da pessoa sem cadastro (D-253 do Horus, D-255 do Horus). *Por que:* a primeira versão entrega a promessa sem o login da empresa, que aumenta a adoção e tira um atrito da aprovação; e as duas provas a TI do cliente confere sozinha. *Alternativa:* essencial, se a exigência do login da empresa travar vendas da primeira versão. *Reabrir se:* um cliente condicionar a compra ao login da empresa antes da segunda versão.
- **Decidido pelo dono da Maind em 10/11/2026:** o login começa no endereço do mAIg, a confirmação do provedor de identidade fica no mAIg, e a nuvem dos apps recebe só o passe que o mAIg assina, que vale 15 minutos e se renova pelo mAIg (decisões 32 e 37). Esta mf ganhou o parágrafo de onde fica a confirmação e o caso de quem é tirado da VPN.
- **Decidido pelo dono da Maind em 10/11/2026:** o login começa pelo app e usa o jeito de entrar configurado no mAIg, e o papel trazido pelo login da empresa vale dentro de cada app, e não no núcleo para todos (decisão 40). O ponto em aberto sobre onde vale o papel saiu desta mf.
- **Decidido pelo dono da Maind em 11/11/2026:** a senha local do owner da organização e do administrador da instância abre só o console; para usar os apps, o owner da organização entra como qualquer pessoa, e quem a empresa desliga perde os apps junto (decisão 55). O ponto em aberto de onde vale essa senha saiu desta mf.
- **Decidido por delegação do dono da Maind em 11/11/2026:** a primeira versão sai em duas ondas, a 1.0 e a 1.1, e a segunda versão vem depois; esta mf fica inteira para a segunda versão, e nada dela entra na onda 1.0 nem na onda 1.1 (decisão 95).
- **Decidido por delegação do dono da Maind em 11/11/2026:** os dois jeitos de entrar da primeira versão, usuário e senha e conta Google, entram na onda 1.0; cada organização nasce só com usuário e senha ligados, e o owner da organização liga o Google se quiser (decisão 98).
- **Decidido por delegação do dono da Maind em 11/11/2026:** cada pessoa pede o próprio link de troca de senha na tela de entrada, e ninguém vê nem define a senha de outra pessoa; por isso a senha esquecida já não passa pelo owner da organização na primeira versão (decisão 99).
