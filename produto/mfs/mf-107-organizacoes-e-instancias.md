# MF-107:Atender várias organizações numa instalação, sem misturá-las

> Uma mesma instalação do mAIg, a instância, atende várias organizações ao mesmo tempo, cada uma com os seus apps, as suas regras e o seu registro, sem enxergar nada das outras. A instância roda na infraestrutura do cliente ou na da Maind, e quem cuida dela acompanha o estado e as versões, mas nunca lê o que é de cada organização.

**Também chamada de:** Organizações e instâncias · **Versão do mAIg:** 1ª · **Classe:** essencial · **Situação:** rascunho do PO

## Em uma frase

Esta macro funcionalidade faz uma instalação do mAIg servir a vários clientes ao mesmo tempo, cada um no seu espaço fechado, e deixa essa instalação rodar onde o cliente preferir: dentro da rede dele ou nos servidores da Maind, os computadores dela sempre ligados. (decisão 9)

O mAIg, ou Maind AI Gateway ("gateway" quer dizer portão, em inglês), é a plataforma da Maind que fica entre os produtos da Maind e os dados e a inteligência artificial (IA) da empresa cliente. Cada produto entra nele como um app; o primeiro é o Maind Horus. Quase tudo no mAIg acontece por organização, o espaço de um cliente dentro do mAIg, e esta mf define o que é uma organização, onde mora, como nasce, quando fica pronta, quem a acompanha e como é encerrada. Por isso ela é a base das outras.

## Quem ganha

- **Equipe da Maind.** As pessoas da Maind que fecham a contratação, entregam e dão suporte. Passam a atender um cliente pequeno sem instalar nada para ele: basta criar uma organização numa instância da Maind, isto é, numa instalação do mAIg que a Maind já mantém. Nas instâncias da Maind, fazem o papel de administrador da instância.
- **Administrador da instância.** Quem cuida da instalação física do mAIg: a TI do cliente, a equipe de tecnologia da empresa, quando o mAIg roda na infraestrutura do cliente; a equipe da Maind, quando roda na da Maind. Ganha um lugar para criar organizações, acompanhar o estado e as versões e encerrar uma organização sem tocar nas outras, sem nunca ver o registro delas, a anotação de tudo o que cada organização pediu. (decisão 12)
- **De forma indireta, o owner da organização.** A pessoa que responde por uma organização no mAIg recebe um espaço só dela: a organização vizinha não vê nada do que ela configura nem do que os apps dela pedem. (decisão 9)

## A decisão que passa a ser possível

- **A equipe da Maind passa a poder dizer sim a um cliente sem equipe de TI**, com o mAIg na infraestrutura da Maind, sem pedir a ele que instale nada. (decisão 9)
- **A TI do cliente passa a poder exigir o mAIg dentro de casa** e, com uma instalação só, atender mais de uma organização da mesma empresa. (decisões 9 e 11)
- **A dor que some:** a pergunta "e se o cliente vizinho vir os meus dados?" ganha resposta. Cada organização é um espaço fechado, e nem quem cuida da instalação lê o registro dela. (decisões 9 e 12)

## Como funciona

### Instância, organização e empresa: três palavras que não se misturam

**Em resumo:** a instância é uma instalação física do mAIg; a organização é o espaço de um cliente dentro dela; a empresa é quem assina o contrato e pode ter uma organização ou várias.

**Quem é quem.**

- **A instância** é cada instalação física do mAIg, com o núcleo dele: o que vem pronto para todos os apps, como a segurança, o registro, o cofre (o lugar trancado onde ficam as senhas dos bancos de dados; os bancos são onde a empresa guarda as informações do dia a dia) e as regras de uso da IA. Uma instância atende uma ou mais organizações. (decisão 9)
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
- **O que é de cada organização:** os apps que ela contratou e liberou, as permissões, os bancos que cada app lê, a IA (as chaves dos provedores, isto é, as senhas de acesso às empresas que vendem os modelos de IA, mais os modelos permitidos, os limites e o custo por app) e o registro. As pessoas que usam os apps também são dela, e o cadastro delas fica no núcleo do mAIg (decisão 23, Segurança e permissões, MF-101).
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
- **Na infraestrutura da Maind**, a instância roda nas máquinas da Maind, a empresa não instala nada, e o administrador da instância é a equipe da Maind. Ali convivem empresas diferentes. Essas máquinas ficam separadas da nuvem dos apps, onde roda o Horus, e a conversa com a nuvem passa só pela ligação que o mAIg abre. Por enquanto, o endereço do mAIg ali fica aberto na internet, protegido pelo login; fechar essa rede fica para a segunda versão do mAIg ou depois (decisão 48).
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
- **O primeiro owner da organização** recebe esse usuário e passa a liberar e configurar os apps, os bancos e a IA da organização. Também nomeia o auditor, a pessoa que só lê o registro da organização e não muda nenhuma configuração. (decisão 12) Pode cadastrar até mais dois owners da organização, e os três entram por usuário e senha (decisão 25).

**O que vem depois.** O primeiro acesso, isto é, como o owner da organização entra pela primeira vez e define a própria senha, está em Segurança e permissões (MF-101). A contratação de cada app e o handshake contratual, o aperto de mão digital em que o mAIg confere com um servidor da Maind que a organização contratou o app, estão em Contratação dos apps (MF-103). O certificado próprio da organização, a carteira de identidade digital dela, a Maind o emite quando a organização é criada, e todo pedido da organização só passa com ele e com o kit do app (decisão 28).

**Por que é assim.** É o princípio dos dois passos de um app: quem cuida da instalação física controla o que existe nela, e cada organização escolhe o que usa. O administrador da instância cria a organização, mas entrega o comando dela ao owner da organização logo no começo (decisão 10). Abre-se mão de: a Maind emite um certificado novo a cada organização criada, e por isso criar uma organização, mesmo na instância do cliente, passa a depender dela (decisão 28). O ato de criar a organização e o usuário do primeiro owner da organização fica anotado no registro da nova organização, em nome do administrador da instância (decisão 29).

**Exemplo.**

1. Marta, no papel de administrador da instância, cria a organização "Farma Vida", a Maind emite o certificado próprio dela (decisão 28), e o ato fica anotado no registro da organização (decisão 29).
2. Cria o usuário de Paulo como primeiro owner da organização, digitando só o e-mail dele. O mAIg manda o link de primeiro acesso direto a Paulo, e ele define a própria senha (decisão 51, MF-101).
3. Marta cria também a "Farma Vida Manipulação" e o usuário de quem vai responder por ela. Paulo não vê essa outra organização.
4. As duas existem, mas ainda não atendem ninguém, como explica o próximo tópico.

### A organização fica ativa quando está pronta, e o cockpit mostra o que falta

**Em resumo:** a organização fica ativa sozinha quando tem o certificado dela e um owner da organização com acesso. Cada app tem as próprias condições para entrar em uso. O mAIg marca tudo sozinho, e uma tela de cockpit mostra o que ainda falta (decisão 72).

**Quem é quem.**

- **Em configuração** é o estado de uma organização, ou de um app nela, que existe, mas ainda não atende as pessoas; **ativa**, ou em uso, é o estado do que já atende.
- **As condições da organização:** o certificado da organização, que a Maind emite quando ela é criada (decisão 28), e ao menos um owner da organização com acesso.
- **As condições de cada app:** cada app declara o mínimo de que precisa para entrar em uso. O Horus precisa de ao menos um banco e de uma IA (MF-104).
- **O cockpit de ativação** é a tela do console que mostra, numa olhada só, o que falta para a organização ficar ativa e para cada app entrar em uso, com o passo que resolve cada pendência.

**Como funciona.** O mAIg confere as condições sozinho e muda o estado assim que elas se cumprem: ninguém precisa clicar em "ativar". O owner da organização vê no cockpit todas as pendências da organização e dos apps dela. O administrador da instância vê no painel da instância só as pendências que são da instância, como uma organização ainda sem owner da organização com acesso, sem ver a configuração dela (decisão 12).

**Por que é assim.** Nenhum app fica travado por uma condição de que não precisa, como um app que gera documentos e não lê banco. Ninguém esquece de ativar, porque o mAIg marca sozinho. E o cockpit poupa o owner da organização de adivinhar o que falta. Ficaram de fora as condições do Horus para toda organização, que travariam um app sem banco (D-277 do Horus), e o administrador da instância marcar a organização como ativa, que lhe daria uma decisão que é da organização. Abre-se mão de: uma organização ativa pode ainda não ter nenhum app pronto.

> **Analogia:** o painel de um carro acende, antes da partida, as luzes do que falta, como o cinto e a porta aberta. **Onde a analogia para:** o carro anda mesmo com uma luz acesa; no mAIg, o app só entra em uso quando as pendências dele somem.

**Exemplo.**

1. Marta cria a organização "Farma Vida", e a Maind emite o certificado dela (MF-103).
2. Paulo abre o link de primeiro acesso e define a senha (decisão 51). Com o certificado e um owner da organização com acesso, a organização passa sozinha a ativa.
3. No cockpit, Paulo vê o Horus com duas pendências: "falta um banco" e "falta a IA".
4. Paulo cadastra o banco de vendas, e a primeira pendência some. Cadastra a chave da IA, a segunda some, e o Horus entra em uso.
5. Ana, gerente comercial, faz a primeira pergunta ao Horus.

**Quando dá errado.** Paulo configura o banco, mas esquece a IA. O Horus continua em configuração, e o cockpit segue mostrando "falta a IA", com o caminho para resolvê-la. Ninguém põe o Horus em uso à força.

### O painel da instância: o estado e as versões, nunca o registro

**Em resumo:** o administrador da instância acompanha o que é da instância: as instalações, o estado e as versões, dá o aval às versões novas do mAIg e define a janela em que elas se instalam (decisão 39). Numa emergência, suspende um app na instância inteira, sem apagar a configuração nem o registro (decisão 46, MF-104). Nunca vê o registro das organizações, e só escreve nele, sem lê-lo, os atos dele que as tocam. (decisões 12 e 29)

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

### Encerrar uma organização

**Em resumo:** o mAIg não exclui uma organização: encerra. Encerrar retira os apps, os bancos, a IA e o acesso das pessoas que usam os apps, e deixa o registro da organização na instância, que o owner da organização e o auditor dela continuam lendo até o app ser desinstalado (decisão 31). No Horus, excluir apaga tudo o que há dela (D-278 do Horus); o mAIg decidiu diferente. O owner da organização pede o encerramento, ou a Maind, quando todos os contratos da organização acabaram; o administrador da instância o executa; e ele tem volta por 30 dias (decisão 78).

**Quem é quem.**

- **Encerrar** é a organização deixar de funcionar na instância sem sair dela. Não é um app parar depois do fim do contrato, que guarda a configuração para voltar como estava (decisão 14), nem retirar um app só (decisão 21): é a organização inteira, com todos os apps retirados. (decisão 31)
- **O que sai:** os apps da organização, pela retirada de sempre, com o aviso e a cópia do registro para o owner da organização (decisão 21); os bancos e a IA configurados; a configuração; e o acesso das pessoas que usam os apps.
- **O que fica:** o registro da organização, que só o owner da organização e o auditor dela leem, até o app ser desinstalado. (decisões 12 e 15)
- **Quem encerra:** o owner da organização pede, no console, ou a Maind, quando todos os contratos da organização acabaram. O administrador da instância executa, e os owners da organização e o auditor são avisados. No Horus, quem excluía era quem administra a instalação (D-278, D-280 do Horus).
- **A volta:** por 30 dias, a configuração fica guardada, e o encerramento pode ser desfeito. Depois disso, os apps, os bancos e a IA saem de vez, e o registro segue até a desinstalação do app (decisões 31 e 78).

**Por que é assim.** O registro de um app só sai com a desinstalação dele (decisão 15), e o app pode seguir instalado para as outras organizações depois que uma sai. Se a organização fosse excluída, o registro dela sairia sem o app sair, e quem exclui, a TI do cliente ou a equipe da Maind, apagaria a prova de uma organização inteira, que nenhum dos dois pode nem ver (decisão 12). Encerrar tira o que é da organização e guarda a prova. Abre-se mão de: a organização encerrada segue ocupando a instância e guardando dados de pessoas até os apps dela serem desinstalados; é um estado novo para construir, além de em configuração e ativa; e a palavra excluir deixa de valer para organizações. No Horus, excluir uma organização apaga tudo o que há dela, e só dela, sem volta (D-278 do Horus); o mAIg decidiu diferente (decisão 31).

**A relação com o registro.** O registro da organização encerrada fica na instância e só sai quando o app é desinstalado, junto com o registro das outras organizações que o usavam (decisão 15). Uma organização encerrada não conta como dona do app, e por isso não trava a desinstalação (decisão 21).

**Exemplo.**

1. A Farma Vida vende a farmácia de manipulação, e o owner da organização "Farma Vida Manipulação" pede o encerramento dela no console.
2. Marta, no papel de administrador da instância, executa o encerramento, e os owners da organização e o auditor são avisados.
3. O Horus é retirado dela, com o aviso e a cópia do registro para o owner da organização. Saem também os bancos, a IA e o acesso das pessoas que usam o app.
4. A organização "Farma Vida" não sente nada: apps, regras e registro seguem como estavam.
5. Um ano depois, alguém pergunta quem leu o banco de vendas da manipulação no último mês antes da venda. O owner da organização encerrada, ou o auditor dela, abre o registro e responde.

**Quando dá errado.** Marta executa o encerramento da organização errada. Ela só executa o que um owner da organização ou a Maind pediu, e os owners da organização e o auditor recebem o aviso na hora. Dentro de 30 dias, o encerramento é desfeito, e a organização volta como estava, com a configuração guardada (decisão 78).

### Atualizar o próprio mAIg

**Em resumo:** o mAIg ganha versões novas, e cada instância precisa recebê-las. O mAIg baixa a versão nova sozinho e confere que ela é da Maind. Na casa do cliente, só se instala com o aval da TI do cliente, dentro da janela de horário que o administrador da instância define; na hospedagem da Maind, se instala sozinho, na janela (decisão 39). Os apps seguem sendo atualizados pelo administrador da instância, um a um (MF-104). No Horus, quem atualiza é quem hospeda, a Maind nas instalações dela e o cliente na dele (D-292 do Horus).

**Quem é quem.**

- O mAIg tem **versões** próprias, separadas das do Horus e dos outros apps (decisão 2). **Atualizar** é trocar a versão instalada numa instância por uma mais nova.
- **A janela** é o intervalo de horário, por exemplo de madrugada, em que o mAIg pode se instalar.
- **A assinatura da Maind** é a marca digital que prova que a versão veio da Maind e não foi alterada no caminho.
- **O aval** é a aprovação do administrador da instância, a TI do cliente na casa do cliente, para aquela versão entrar.

**O que muda com várias organizações por instância.** A versão é da instância, e não de cada organização. Atualizar uma instância atualiza o mAIg para todas as organizações dela de uma vez; na da Maind, isso alcança empresas diferentes ao mesmo tempo (decisão 9). Na do cliente, a TI dele dá o aval e escolhe a janela (decisão 39). Na da Maind, a equipe da Maind define uma janela de madrugada para a instância inteira e avisa o owner da organização de cada uma 7 dias antes, ou 24 horas antes numa correção de segurança. Nas duas, a atualização do mAIg fica anotada no registro de cada organização, como a de um app (decisões 29 e 47).

**Por que é assim.** Nenhum código novo entra na casa do cliente sem a TI dele ver antes, que é o que a TI de segurança rígida exige. E quem invadisse a Maind não conseguiria mandar um mAIg falso para dentro dos clientes, porque a versão precisa da assinatura da Maind e do aval da TI do cliente. Baixar sozinho poupa a TI de buscar a versão, e o prazo de adiamento, de 30 dias para uma versão comum e de 7 para uma correção de segurança, evita que uma instância fique esquecida numa versão velha (decisão 45). Na hospedagem da Maind, quem cuida da instância é a própria Maind, e a instalação segue sozinha. Na casa do cliente, isso substitui a instalação sozinha (decisão 30, decisão 39).

**O que se perde.** Um cliente que demora a dar o aval fica mais tempo numa versão velha, e a convivência entre versões pesa mais (MF-104). Numa instância da Maind, a atualização alcança empresas diferentes ao mesmo tempo, nenhuma escolhe o horário, e quem trabalha de madrugada sente (decisão 47). E quem adia além do prazo fica com os apps parados até dar o aval (decisão 45).

> **Analogia:** a entrega de um remédio novo numa farmácia. A transportadora traz a caixa lacrada, a farmácia confere o lacre do fabricante, e o farmacêutico responsável aprova antes de pôr o remédio na prateleira. **Onde a analogia para:** na hospedagem da Maind, a farmácia é da própria Maind, e quem aprova é ela mesma.

**Exemplo.**

1. A Maind lança uma versão nova do mAIg.
2. O mAIg da Farma Vida baixa a versão pela ligação com a Maind e confere a assinatura. Marta, da TI do cliente, vê no painel a versão nova esperando o aval, lê o que mudou e aprova.
3. Marta definiu a janela entre 2h e 4h da manhã. Na madrugada seguinte, o mAIg se instala, e de manhã Marta confere a versão nova no painel. (decisões 12 e 39)
4. Na instância da Maind, onde estão a Ótica Visão Clara e a clínica, o owner da organização de cada uma é avisado 7 dias antes. Na madrugada marcada pela equipe da Maind, a atualização acontece sozinha, as duas passam à versão nova ao mesmo tempo, e cada registro ganha a linha da atualização (decisão 47).

**Quando dá errado.**

- **A versão nova traz um defeito.** Marta deu o aval, o mAIg se instalou na madrugada e não sobe direito, e a Farma Vida amanhece sem o mAIg. Como ele volta à versão anterior é ponto do arquiteto do mAIg (decisão 39).
- **Chega uma versão sem a assinatura da Maind.** O mAIg a recusa, e ela nem chega a esperar o aval.

**Se a atualização não acontece.** A TI do cliente pode adiar uma versão comum por até 30 dias e uma correção de segurança por até 7. Passado o prazo, o mAIg segue na versão velha, porque nada se instala sem o aval, mas os apps passam a recusar a conversa: a pessoa vê o aviso "Atualização necessária", e o painel mostra o motivo e a versão, até a TI do cliente dar o aval e a versão se instalar. É o caminho do Horus, agora confirmado no mAIg (decisão 45, D-292 do Horus). Se o motivo é a ligação com a Maind fora, os apps já param por ela (decisão 41).

Exemplo: a Maind lança uma correção de segurança, e Marta a deixa esperando enquanto a Farma Vida fecha o mês. No oitavo dia, Ana abre o Horus e vê "Atualização necessária". Marta dá o aval, a correção se instala na janela daquela madrugada, e de manhã Ana volta a usar o Horus.

**O que ainda está em aberto.** Como o mAIg busca, confere e instala a versão e volta à anterior se ela falhar está em "O que ainda falta decidir". Quantas versões podem conviver é ponto de Gestão dos apps (MF-104).

### A cópia de segurança do cofre e do registro

**Em resumo:** quem opera a máquina faz a cópia de segurança do cofre e do registro: a Maind, na hospedagem dela, e a TI do cliente, na casa do cliente, com uma ferramenta que vem no mAIg. A cópia sai cifrada, e cada restauração fica no registro (decisão 65).

**Quem é quem.**

- **A cópia de segurança** é uma cópia guardada à parte, para recuperar o cofre e o registro se a máquina falhar.
- **Restaurar** é pôr de volta, a partir da cópia, o que se perdeu.

**Como funciona.** A cópia sai cifrada com a chave de cada organização, e por isso quem a guarda não lê nada (decisão 57). Cada restauração vira uma linha no registro de cada organização, como os outros atos do administrador da instância que a tocam (decisão 29).

**Por que é assim.** Sem cópia, um disco queimado leva as senhas dos bancos e o registro, que é a prova do que aconteceu. Quem opera a máquina é quem pode fazer a cópia, e a ferramenta do mAIg evita que ela saia sem cifra ou seja esquecida. Ficaram de fora a Maind fazer a cópia de todas as instâncias, que tiraria o registro e o cofre da casa do cliente, mesmo cifrados, e cada um fazer como quiser. Abre-se mão de: a TI do cliente ganha mais uma tarefa, e restaurar depende da chave da organização.

**Exemplo.** O disco da máquina do mAIg da Farma Vida queima numa madrugada. De manhã, Marta põe o mAIg numa máquina nova e restaura a cópia da noite anterior com a ferramenta do mAIg. O cofre e o registro voltam, e o registro da Farma Vida ganha a linha da restauração, com o nome de Marta e a hora.

**O que ainda está em aberto.** Como a ferramenta faz e restaura a cópia está em "O que ainda falta decidir".

## Prova de valor

Prova de valor proposta pelo PO; o dono da Maind ainda não a confirmou.

**Demonstração 1: duas empresas na mesma instância, sem se verem.** Numa instância da Maind, a equipe da Maind cria duas organizações de empresas diferentes, e o owner da organização de cada uma configura um banco e a IA. Cada owner da organização e cada auditor procuram, no próprio espaço, qualquer sinal da outra: apps, regras, configuração ou registro. Não encontram nada. Por fim, a equipe da Maind abre o painel da instância diante de quem confere: vê as duas organizações, o estado e as versões, e nenhum registro. Quem confere de fora: a TI do cliente e o auditor de cada organização.

**Demonstração 2: encerrar uma sem tocar na outra.** O administrador da instância encerra uma das organizações. Na outra, a pessoa que usa o app faz uma pergunta e recebe a resposta, e o registro continua inteiro. Quem confere: o auditor da organização que ficou.

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

Nenhuma outra mf do mAIg. Esta é a base: a contratação, as permissões, os bancos, a IA e o registro são todos por organização, e por isso as outras mfs dependem desta. Mas criar e encerrar uma organização usam outras mfs: o certificado da organização (MF-103), que chega pela ligação (MF-108), a anotação no registro (MF-102), o primeiro owner da organização (MF-101) e a retirada dos apps (MF-104). Por isso essas peças formam, com esta, um núcleo base construído junto, como explica o mapa das macro funcionalidades.

- **Pré-requisito de negócio: a Maind ter infraestrutura própria para hospedar instâncias e uma equipe para fazer nelas o papel de administrador da instância.** Sem isso, não existe a hospedagem na Maind, a que atende o cliente sem TI. (decisão 9)

**Quem depende desta:** Segurança e permissões (MF-101), Registro e auditoria (MF-102), Contratação dos apps (MF-103), Gestão dos apps (MF-104) e Console de configuração (MF-110).

## Ponto de partida no Horus

O mAIg nasceu como o middleware do Horus, a peça entre as telas do Horus, na nuvem da Maind (os servidores da Maind na internet), e os dados da empresa; abaixo, "a peça" é esse middleware.

- **Várias organizações em qualquer hospedagem.** No Horus, a peça atende várias organizações em qualquer hospedagem, cada uma isolada pelo seu certificado, e a diferença entre as hospedagens é só o local físico. Se a instalação compartilhada for invadida, ficam expostas as senhas e as regras de todas, e quem exigir mais isolamento instala em casa. Isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma, e o dono da Maind decidiu em 09/11/2026 que cada organização tem o seu certificado, além do kit de cada app (decisão 28). (D-272 do Horus)
- **Ativa só quando pronta.** No Horus, a organização nasce em configuração e só passa a ativa com a peça ligada e o handshake confirmado, um banco e a IA configurados; a trava é automática, e o ato de ativar, pela leitura registrada lá, é de quem administra a instalação. Isso já foi decidido assim no Horus (D-277 do Horus). O mAIg decidiu diferente: a organização fica ativa com o certificado e um owner da organização com acesso, cada app tem as condições dele, e o mAIg marca tudo sozinho (decisão 72).
- **Excluir apaga o que é da organização, e só dela.** No Horus, saem as pessoas, os bancos, a IA e a configuração, sem tocar nas outras, e uma exclusão por engano não tem volta (D-278 do Horus). O mAIg já decidiu diferente: a organização é encerrada, e o registro dela segue legível até o app ser desinstalado (decisão 31); do que o Horus apaga, só o registro fica.
- **Quem administra a instalação cria e exclui as organizações.** No Horus, quem administra a instalação cria a organização e o usuário do owner da organização, vê o estado e a versão e exclui; no mAIg, a organização é encerrada, e não excluída (decisão 31): o owner da organização ou a Maind pede, o administrador da instância executa, e há volta por 30 dias (decisão 78). A parte em que o administrador da instância cria as organizações e o usuário do primeiro owner da organização já vale para o mAIg; o resto vale como ponto de partida, e o mAIg ainda confirma. (D-271, D-280 do Horus)
- **O painel mostra o estado e a versão.** No Horus, o painel mostra se a peça de cada organização está no ar ou fora e em que versão; quando ela para, é avisado o responsável pelo serviço, a Maind na instalação dela e o cliente na dele. Isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma. (D-275 do Horus)
- **O painel só enxerga contagens das pessoas.** No Horus, as pessoas ficam isoladas na peça, fora da nuvem da Maind, e o painel de quem administra a instalação só as conta. Isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma. (D-261 do Horus)
- **Quem atualiza é quem hospeda.** No Horus, a Maind atualiza a peça dela e o cliente, a dele, e uma versão velha demais é recusada, com aviso (D-292 do Horus). O mAIg já decidiu diferente: o mAIg baixa a versão nova sozinho e, na casa do cliente, só a instala com o aval da TI do cliente, dentro da janela de horário que o administrador da instância define (decisão 39). A recusa ficou confirmada, com prazo: passados 30 dias de adiamento, ou 7 para uma correção de segurança, os apps recusam a conversa (decisão 45).
- **A queda da instalação compartilhada alcança todas as organizações dela.** No Horus, com a peça da Maind fora do ar, a queda alcança todas as organizações atendidas por ela; com a do cliente, só a dele. Isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma. (D-283 do Horus)

## O que ainda falta decidir

- **Falta o arquiteto do mAIg definir como o mAIg busca a versão nova, confere que ela é da Maind, espera o aval da TI do cliente, se instala e volta à versão anterior se ela falhar.** *O que está em jogo:* uma versão com defeito não pode derrubar a instância sem volta, e uma versão falsa não pode entrar na casa do cliente, nem com o aval (decisão 39). A busca usa a conexão de saída com a Maind (decisão 6), sem abrir porta de entrada (MF-108).
- **Falta o arquiteto do mAIg definir como a ferramenta do mAIg faz e restaura a cópia de segurança do cofre e do registro.** *O que está em jogo:* a cópia precisa sair cifrada com a chave de cada organização (decisões 57 e 65), e restaurar uma cópia antiga não pode apagar sem rastro as linhas do registro feitas depois dela.
- **Falta o arquiteto do mAIg definir o que sobra de uma organização encerrada e como o owner da organização e o auditor seguem lendo o registro dela.** *O que está em jogo:* a decisão 31 tira os apps, os bancos, a IA e o acesso das pessoas que usam os apps, e mantém só a leitura do registro até o app ser desinstalado. É preciso dizer o que fica de pé para isso, como o acesso do owner da organização e do auditor, o certificado da organização (decisão 28) e o nome das pessoas ligado às linhas (decisão 27), sem que a organização volte a funcionar, e quando ela some de vez, depois de o último app dela ser desinstalado.
- **Falta o dono da Maind decidir quando uma organização ganha uma instância só dela na infraestrutura da Maind e se, com o arquiteto do mAIg, uma organização pode mudar de instância ou de hospedagem.** *O que está em jogo:* a mesma infraestrutura física pode ter mais de uma instância (decisão 9), o que dá mais isolamento a quem não quer instalar nada, mas sem critério cada pedido vira exceção; e um cliente que começa na Maind e depois quer o mAIg na própria rede pode ter de refazer toda a configuração, com o registro preso ao app instalado na instância antiga. (decisão 15)
- **Falta o arquiteto do mAIg definir como as organizações de uma mesma instância ficam separadas por dentro, além dos dois certificados.** *O que está em jogo:* é a promessa do multi-tenant. Cada pedido passa com o certificado da organização e com o kit do app (decisão 28); falta dizer como o mAIg usa os dois para guardar cada organização num espaço separado e para conferir, a cada pedido, que ele é dela. No Horus, a organização era isolada só pelo certificado, e ficou como hipótese que isso baste (D-272 do Horus).
- **Falta o arquiteto do mAIg definir, com o dono da Maind, como uma organização criada no mAIg passa a existir também na parte de fora de cada app.** *O que está em jogo:* no Horus, a organização nascia na nuvem da Maind e depois era ligada à peça (D-258 do Horus); no mAIg, ela nasce na instância, e a parte de fora do app, como as telas do Horus, precisa conhecê-la sem um segundo cadastro que possa divergir.
- **Também depende, e está explicado em outras mfs:** quantas versões do mAIg e dos apps podem conviver (MF-104); como a Maind alcança o banco na hospedagem dela (MF-105); e o preço, do mapa geral do mAIg.

## Decisões do PO para discutir

- **Decisão:** tratar "a organização só fica ativa quando está pronta" como ponto de partida do Horus, e não como regra já valendo no mAIg, e abrir a pergunta do que é "pronta". *Por que:* as condições do Horus (handshake, banco e IA) foram pensadas para o Horus, e o mAIg serve a vários apps. *Alternativa:* adotar as condições do Horus como estão na primeira versão. *Reabrir se:* o dono da Maind quiser fechar a primeira versão só com o Horus em vista.
- **Decisão:** pôr aqui a atualização do próprio mAIg, que o dono da Maind decidiu em 09/11/2026 que se faz sozinha, dentro de uma janela de horário que o administrador da instância define (decisão 30); o ponto de partida do Horus era que quem atualiza é quem hospeda (D-292 do Horus), entrada que a lista de pontos de partida não trazia para esta mf. *Por que:* a versão é da instância, e uma atualização alcança todas as organizações dela. *Alternativa:* tratá-la em Gestão dos apps, junto da convivência de versões (MF-104). *Reabrir se:* a atualização do mAIg e a dos apps seguirem o mesmo caminho, ou a TI de um cliente de segurança rígida exigir aprovar cada versão antes de ela entrar.
- **Decisão:** esta mf não depende de nenhuma outra. *Por que:* as condições de ativação usam o resultado de outras mfs, mas a regra mora aqui, e declarar a dependência faria um círculo, porque a contratação depende desta (MF-103). *Alternativa:* declarar dependência da contratação, dos bancos e da IA (MF-103, MF-105, MF-106). *Reabrir se:* a ativação passar a fazer parte da contratação.
- **Decisão:** o destino do registro de uma organização que sai era ponto novo, sem resposta no texto; o dono da Maind decidiu em 09/11/2026 que a organização não é excluída, e sim encerrada, e que o registro dela segue legível até o app ser desinstalado (decisão 31). A leitura do PO era que a exclusão levava o registro junto, como no Horus e por cuidado com a lei de proteção de dados. *Por que:* o mAIg liga a exclusão do registro à desinstalação do app (decisão 15), e numa instância com várias organizações o app pode seguir instalado. *Alternativa:* a exclusão que leva o registro junto, a pedido do owner da organização, ou o registro guardado e fechado até o app sair da instância. *Reabrir se:* a lei ou um cliente exigir apagar tudo.
- **Decisão:** a prova de valor principal usa duas organizações de empresas diferentes numa instância da Maind. *Por que:* é o caso mais exigente, o que a TI de um cliente vai querer ver antes de aceitar dividir a instalação. *Alternativa:* duas organizações da mesma empresa, na casa do cliente. *Reabrir se:* o primeiro cliente for hospedado na própria rede.
- **Decisão:** pôr o owner da organização em "Quem ganha", de forma indireta, e usar personagens ilustrativos novos (a "Farma Vida Manipulação", a Ótica Visão Clara, uma clínica e Rafael, da equipe da Maind). *Por que:* o isolamento é a garantia que o owner da organização recebe, e os exemplos pediam uma segunda organização da mesma empresa e uma segunda empresa na instância da Maind. *Alternativa:* só os papéis e os personagens das páginas da visão. *Reabrir se:* o dono da Maind preferir um elenco fixo para todas as mfs.
- **Decisão:** manter a classe essencial e a mf inteira na primeira versão. *Por que:* várias organizações por instância estão na primeira versão (decisão 16), e sem elas não há hospedagem na Maind. *Alternativa:* deixar para a segunda versão o encerramento e a mudança de instância. *Reabrir se:* a primeira versão não comportar o painel da instância inteiro.
- **Decisão:** declarar um pré-requisito de negócio: a Maind ter infraestrutura própria para hospedar instâncias e uma equipe para fazer nelas o papel de administrador da instância. *Por que:* sem isso, não existe a hospedagem na Maind, que atende o cliente sem TI (decisão 9). *Alternativa:* não declarar pré-requisito, como se a hospedagem na Maind já existisse. *Reabrir se:* o dono da Maind decidir que a primeira venda acontece só com o mAIg na infraestrutura do cliente.
- **Decisão:** o encerramento de uma organização entrou em "Quem ganha" e na segunda demonstração como coisa que o administrador da instância faz, no lugar da exclusão que o Horus tem (D-278, D-280 do Horus). *Por que:* sem ele, a demonstração de que uma organização sai sem tocar na outra não teria como ser feita, e o dono da Maind decidiu em 09/11/2026 que a organização é encerrada, e não excluída (decisão 31). *Alternativa:* uma segunda demonstração sem o encerramento, só com a organização vizinha que não muda. *Reabrir se:* o dono da Maind decidir outro caminho para quem encerra, que é ponto em aberto desta mf.
- **Decisão:** três pontos novos foram abertos aqui, além da atualização, do que é "pronta" e de quem encerra uma organização: quando uma organização ganha uma instância só dela e se pode mudar de instância, com o dono da Maind; como as organizações de uma instância ficam separadas por dentro, com o arquiteto do mAIg; e como uma organização criada no mAIg passa a existir na parte de fora de cada app, com o arquiteto do mAIg e o dono da Maind. *Por que:* nenhuma decisão os responde, e o primeiro e o terceiro mudam o que o cliente e a equipe da Maind fazem. *Alternativa:* deixar todos para o arquiteto do mAIg. *Reabrir se:* o arquiteto do mAIg mostrar que algum deles é só técnico.
- **Decisão:** usar entradas do Horus fora da lista indicada para esta mf: quem cria o usuário do owner da organização (D-271 do Horus), a queda da instalação compartilhada (D-283 do Horus) e o jeito como a organização nascia na nuvem da Maind e era ligada à peça (D-258 do Horus). *Por que:* a primeira já foi aceita para o mAIg, a segunda mostra o preço da instância compartilhada, e a terceira explica o ponto novo sobre a parte de fora de cada app. *Alternativa:* ficar só nas entradas da lista. *Reabrir se:* o dono da Maind preferir o ponto de partida só com as entradas da lista.
- **Decidido pelo dono da Maind em 10/11/2026:** o mAIg baixa a versão nova sozinho, mas, na casa do cliente, só a instala com o aval da TI do cliente, que pode adiar até um prazo máximo; na hospedagem da Maind, a instalação segue sozinha (decisão 39). Na casa do cliente, isso substitui a instalação sozinha (decisão 30). Esta mf teve o tópico da atualização reescrito e ganhou um ponto em aberto, o dos prazos.
- **Decidido pelo dono da Maind em 10/11/2026:** a ligação com a Maind é requisito para o mAIg funcionar de ponta a ponta, e criar uma organização exige a ligação de pé, sem certificado provisório (decisão 41). O ponto em aberto sobre criar uma organização sem conexão saiu desta mf.
- **Decidido pelo dono da Maind em 11/11/2026:** a TI do cliente adia uma versão nova do mAIg por até 30 dias, e uma correção de segurança por até 7; passado o prazo, o mAIg segue na versão velha, e os apps recusam a conversa com o aviso "Atualização necessária" até ela dar o aval (decisão 45). O ponto em aberto dos prazos saiu desta mf, e a recusa de uma versão velha demais, que era ponto de partida do Horus, ficou confirmada.
- **Decidido pelo dono da Maind em 11/11/2026:** numa instância da Maind, a equipe da Maind define uma janela de madrugada para a atualização do mAIg, avisa o owner da organização de cada uma 7 dias antes, ou 24 horas antes numa correção de segurança, e a atualização fica anotada no registro de cada organização, como a de um app; na casa do cliente, a anotação vale do mesmo jeito (decisão 47). O ponto em aberto da janela numa instância da Maind saiu desta mf.
- **Decidido pelo dono da Maind em 11/11/2026:** quem opera a máquina faz a cópia de segurança do cofre e do registro, a Maind na hospedagem dela e a TI do cliente na casa do cliente, com uma ferramenta do mAIg; a cópia sai cifrada, e cada restauração fica no registro (decisão 65). Esta mf ganhou o tópico da cópia de segurança e um ponto do arquiteto do mAIg.
- **Decidido pelo dono da Maind em 11/11/2026:** a organização fica ativa sozinha quando tem o certificado e um owner da organização com acesso; cada app tem as condições dele para entrar em uso; o mAIg marca tudo sozinho; e um cockpit de ativação, no console, mostra o que falta (decisão 72). O tópico foi reescrito, e o ponto em aberto saiu desta mf.
- **Decidido pelo dono da Maind em 11/11/2026:** o encerramento de uma organização é pedido pelo owner da organização, no console, ou pela Maind, quando todos os contratos acabaram; o administrador da instância executa; e há volta por 30 dias (decisão 78). O ponto em aberto saiu desta mf.
