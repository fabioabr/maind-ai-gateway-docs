# MF-111:Dar à IA as ferramentas da empresa, só para leitura

> O owner da organização cadastra no mAIg os servidores MCP da empresa, programas que dão à inteligência artificial ferramentas para consultar os sistemas internos, e libera uma a uma só as ferramentas de leitura. A IA dos apps passa a responder também com o que só esses sistemas sabem, e o mAIg só a deixa chamar o que foi liberado.

**Também chamada de:** Servidores MCP · **Versão do mAIg:** 2ª · **Classe:** expande · **Situação:** rascunho do PO

## Em uma frase

O owner da organização cadastra no mAIg os servidores MCP da empresa, libera uma a uma as ferramentas de leitura e escolhe quais apps podem usá-las; o mAIg mostra à IA só o que foi liberado, faz cada chamada no lugar do app e anota tudo no registro.

**Os termos, pelo que fazem.** A IA, ou inteligência artificial, é aqui o modelo de IA: o programa que entende uma pergunta e escreve a resposta. MCP é um padrão, uma regra combinada entre fabricantes para que as peças de um se encaixem nas do outro, feito para dar à IA ferramentas extras. Um servidor MCP é um programa da empresa que oferece essas ferramentas, e uma ferramenta é cada coisa que ele sabe fazer, como "consultar o estoque de um produto". O registro é o log do mAIg, a anotação de tudo o que acontece (MF-102).

**Por que existe.** O banco de dados não guarda tudo o que a empresa sabe. Parte está em sistemas internos, como o de estoque ou o de chamados, e em consultas e regras que a TI do cliente já montou em volta deles. Uma ferramenta que consulta esses sistemas dá acesso às informações da empresa. Por isso ela fica no núcleo do mAIg, num lugar só e sob o controle do cliente, pela mesma regra dos bancos e da IA (decisão 5).

## Quem ganha

- **Owner da organização.** É quem mais ganha. Amplia o que os apps sabem responder sem pedir à Maind uma ligação nova com cada sistema: cadastra o servidor, libera as ferramentas de leitura e escolhe os apps que as usam. Em troca, responde pela escolha, porque é ele quem declara o que é leitura.
- **TI do cliente.** Vê num lugar só quais sistemas internos a IA alcança e por quais ferramentas. Um servidor novo não abre um caminho paralelo: passa pelo portão que ela já aprovou.
- **Auditor.** Encontra no registro cada chamada de ferramenta, como encontra cada leitura de banco: qual app pediu, em nome de quem e quando.
- **Pessoa que usa o app.** Recebe respostas que juntam o banco e o que só os sistemas internos sabem. No Horus, é a pessoa que pergunta.

## A decisão que passa a ser possível

**O owner da organização passa a poder dizer sim** a um pedido como "o Horus podia responder também com o estoque", sem abrir o sistema de estoque para a Maind e sem entregar à IA nenhuma ferramenta que ele não tenha liberado.

**A TI do cliente passa a poder responder**, sem chamar a Maind, à pergunta "o que a IA consegue fazer nos sistemas da empresa?". A resposta é a lista das ferramentas liberadas, servidor por servidor, no console do mAIg, a tela onde o owner da organização configura tudo (MF-110).

**A dor que some.** Sem esta mf, cada tipo novo de informação dependeria de a Maind construir no app uma ligação própria com o sistema do cliente. Com ela, a empresa oferece o que já tem, e o mAIg controla o uso.

## Como funciona

### O que é um servidor MCP e o que ele dá à IA

**Em resumo:** um servidor MCP é um programa da empresa que oferece à IA ferramentas prontas para consultar os sistemas internos. A IA pede uma ferramenta, o servidor a executa e devolve o resultado.

**Quem é quem.**

- **O modelo de IA** decide, no meio do trabalho, que precisa de uma informação e pede uma ferramenta. Ele chega aos apps pela governança da IA do mAIg, que guarda as chaves dos provedores e aplica os limites de cada app (MF-106).
- **O servidor MCP** é mantido pela TI do cliente e fica na infraestrutura da empresa, isto é, nas máquinas e na rede dela.
- **A ferramenta** pode só trazer informação, como "consultar o estoque", ou agir, isto é, mudar algo no sistema, como "pedir reposição".
- **Chamar uma ferramenta** é o modelo pedir que ela seja executada, com os dados de que precisa, e receber o resultado. Quem faz a chamada, no mAIg, é o núcleo.

**Por que é assim.** O banco responde o que está guardado nele. O servidor MCP traz o que a empresa montou em volta dos sistemas: uma consulta pronta, uma regra de negócio, um sistema cujo banco não está à vista.

> **Analogia:** o servidor MCP é como o balcão de atendimento de um departamento: quem chega faz um pedido pronto, como "quanto há deste produto?", e recebe a resposta sem entrar no arquivo. **Onde a analogia para:** esse balcão pode oferecer também serviços que mudam coisas, e quem decide quais deles a IA pode pedir não é o balcão, e sim o owner da organização, pelo mAIg.

### Onde o servidor fica, e por que a IA só chega a ele pelo mAIg

**Em resumo:** o servidor MCP fica na infraestrutura da empresa, e nenhum app fala com ele direto. O pedido passa pelo núcleo do mAIg, que confere a permissão, faz a chamada e anota no registro.

**Quem é quem.** A **empresa**, a companhia cliente, constrói o servidor e decide o que ele oferece. A **organização**, o espaço do cliente dentro da instância do mAIg, é onde o servidor é cadastrado. Como nada se herda da organização vizinha, ele é cadastrado em cada organização que vai usá-lo (decisão 9).

**Por que é assim.** É a regra do núcleo: nenhum app toca uma senha de banco nem uma chave de IA, e todo pedido passa pelo mAIg, que confere a permissão e anota no registro (decisão 5). O resultado fica dentro de casa: o módulo do app, a parte dele que roda isolada dentro do mAIg, usa o que a ferramenta devolveu, e para fora vai a resposta pronta. No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma (D-281 do Horus, D-286 do Horus). Se o que a ferramenta devolveu pode ir também ao provedor de IA está em "O que ainda falta decidir".

**As duas hospedagens.** Com o mAIg na infraestrutura do cliente, o mAIg chama o servidor de dentro da mesma rede, sem abrir porta de entrada nenhuma (MF-108). Com o mAIg na infraestrutura da Maind, o servidor precisa ser alcançável pela Maind, como o banco (decisão 9); como, ainda está em aberto.

### Só o owner da organização cadastra os servidores

**Em resumo:** quem cadastra e gere os servidores MCP da organização é só o owner da organização, no console do mAIg, como faz com os bancos e a IA.

**Quem é quem.**

- **Cadastrar um servidor** é dar ao mAIg o endereço dele e o acesso a ele. O acesso é a credencial, a identificação com que se entra no servidor, como um usuário e uma senha. **Gerir** é mudar o cadastro, liberar ou bloquear ferramentas e escolher quem as usa.
- **O administrador da instância** cuida da instalação física e não cadastra servidores das organizações, pela mesma regra que o deixa fora dos bancos e da IA delas (D-273 do Horus).
- **A equipe da Maind** dá suporte, sem cadastrar no lugar do owner da organização. **O auditor** vê o uso no registro e não muda nada (decisão 12).

**Por que é assim.** Cadastrar um servidor dá ao mAIg um caminho até um sistema da casa do cliente, e quem dá esse caminho é quem responde pela organização. No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: só o owner da organização cadastra e gere os servidores, na mesma tela dos bancos e da IA, e o time da Maind só dá suporte (D-287 do Horus, D-273 do Horus). Abre-se mão de: quem mais precisar de um servidor novo depende do owner da organização.

**Exemplo.** A Farma Vida, rede de 40 farmácias, tem um sistema de estoque, e a TI dela montou um servidor MCP para ele.

1. Marta, da TI do cliente, entrega a Paulo o endereço do servidor e uma credencial que só lê o sistema de estoque.
2. Paulo, owner da organização, abre o console do mAIg e cadastra o servidor "Estoque das farmácias".
3. O mAIg lista as ferramentas que o servidor oferece, todas bloqueadas. Nenhum app usa o servidor ainda.

**Quando dá errado.** Renata, a auditora, tenta cadastrar um servidor e não consegue: o papel dela só lê. Marta, quando age como administrador da instância, também não cadastra; ela ajuda Paulo como TI do cliente, com o endereço e a credencial.

### Toda ferramenta nasce bloqueada, e o owner da organização libera as de leitura

**Em resumo:** pelo ponto de partida do Horus, que o mAIg ainda confirma, toda ferramenta de um servidor recém-cadastrado nasce bloqueada. O owner da organização libera, uma a uma, as de leitura, e a IA só vê e só chama as liberadas (D-289 do Horus).

**Quem é quem.**

- **Bloqueada** quer dizer que a IA nem fica sabendo que a ferramenta existe, e o mAIg recusa qualquer chamada a ela.
- **A marca "só leitura"** é a indicação que o próprio servidor traz. Ela só deixa a ferramenta pré-selecionada; quem libera é o owner da organização.
- **O aviso extra** aparece quando o owner da organização tenta liberar uma ferramenta sem a marca: o mAIg pede que ele confirme que ela só lê.

**Por que é assim.** O mAIg não vê o que uma ferramenta faz por dentro. O que ele controla é a porta dele: o que o modelo vê e o que o modelo chama. Por isso tudo nasce fechado e só se abre com uma decisão do owner da organização. Abre-se mão de: o owner da organização precisa distinguir uma ferramenta de leitura de uma que age, o que é uma hipótese a validar.

> **Analogia:** é como o cardápio que o restaurante entrega na mesa: o garçom só anota o que está nele, e o resto da cozinha não existe para quem pede. **Onde a analogia para:** o cardápio diz o nome do prato, mas não garante a receita; o mAIg controla quais ferramentas a IA pede, mas não o que cada uma faz por dentro.

**Exemplo.** Paulo revisa as três ferramentas do "Estoque das farmácias".

1. "Consultar estoque" e "consultar transferências entre farmácias" vêm com a marca "só leitura" e aparecem pré-selecionadas. Paulo confere com Marta o que cada uma faz e as libera.
2. "Pedir reposição" vem sem a marca. Se Paulo tentasse liberá-la, o mAIg pediria o aviso extra. Paulo a deixa bloqueada, porque ela faz um pedido ao fornecedor.
3. A IA dos apps a que Paulo der acesso passa a ver só as duas ferramentas de consulta.

**E a ferramenta que aparece depois.** A TI do cliente pode atualizar o servidor quando quiser. Se ele passar a oferecer uma ferramenta nova, como "cancelar transferência", ela também nasce bloqueada: do contrário, uma atualização daria à IA uma ação nova sem ninguém decidir. No Horus, isso ficou como leitura a confirmar, e não como decisão (D-289 do Horus).

**O que ainda está em aberto.** Como o mAIg aplica a lista por dentro, e se o owner da organização é avisado de uma ferramenta nova; os pontos estão no fim desta mf.

### O que o "só leitura" garante, e o que fica com a empresa

**Em resumo:** pelo ponto de partida do Horus, que o mAIg ainda confirma, a promessa do mAIg é chamar só as ferramentas que o owner da organização declarou como leitura (D-289 do Horus). A garantia de verdade de que uma ferramenta só lê é a credencial de leitura do servidor, que é da empresa.

**Quem é quem.** **A credencial de leitura** é o acesso com que o servidor entra nos sistemas que consulta; se ele só permite ler, nenhuma ferramenta consegue mudar nada, mesmo que tente. Quem a cria e a mantém é a TI do cliente. No cadastro, o mAIg avisa o owner da organização de que essa garantia é da empresa.

**Por que é assim.** O mAIg não interfere no que cada ferramenta faz por dentro, e prometer "o mAIg nunca age nos sistemas" seria prometer mais do que ele cumpre. Nos bancos é diferente: quem lê é o próprio mAIg, que nunca altera nada (decisão 5). Num servidor MCP, o mAIg decide o que pedir, e o servidor decide o que fazer com o pedido. No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: a primeira promessa, a de que o servidor só lê, foi substituída em parte pela promessa por lista (D-286 do Horus, D-289 do Horus).

**Do que se abre mão.** A promessa deixa de ser "nunca age" e vira "só chama o que o owner da organização declarou como leitura". Ele responde por essa declaração, e o mAIg não consegue provar que a ferramenta só lê. Que as áreas de segurança dos clientes aceitem essa promessa é uma hipótese a validar.

**Quando dá errado.** Uma ferramenta marcada "só leitura" muda algo, por um erro de quem a fez, e o mAIg não percebe. Se a credencial só permite ler, o sistema recusa a mudança. Se permite escrever, a mudança acontece; a chamada, porém, está no registro, e o owner da organização bloqueia a ferramenta.

### Quem pode usar cada servidor: os apps e as pessoas

**Em resumo:** um servidor recém-cadastrado nasce desligado para todos. O owner da organização escolhe quais apps podem usá-lo e, dentro deles, quem recebe respostas que usam o servidor.

**Quem é quem.**

- **Liberar para um app** é dizer quais apps da organização podem pedir as ferramentas do servidor, como o owner da organização já diz quais apps leem cada banco e quais modelos de IA cada app usa (MF-105, MF-106).
- **Liberar para as pessoas** é dizer quem, dentro de um app, recebe respostas que usam o servidor. No Horus, isso se faz por role, o conjunto de funcionalidades que o owner da organização dá a cada pessoa.

**Por que é assim.** Cada pessoa só alcança o que o owner da organização liberou, e o mAIg não precisa conhecer as regras internas de cada servidor. A liberação por app segue a regra que o mAIg já aplica aos bancos e à IA; a extensão aos servidores MCP ainda precisa ser confirmada. No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: o servidor nasce desligado para todas as pessoas, e o owner da organização escolhe as roles que podem usá-lo (D-288 do Horus).

**Do que se abre mão.** É mais uma configuração a cada servidor. E quem tem a liberação vê tudo o que o servidor devolve: regras pessoa por pessoa ficam com a empresa, que pode dividir a informação em mais de um servidor (D-288 do Horus).

**Exemplo.**

1. Paulo libera o servidor só para o Horus: um segundo app da Farma Vida não o enxergaria.
2. Dentro do Horus, pelo ponto de partida do Horus, libera a role da área comercial, de que Ana faz parte.
3. Ana passa a receber respostas que usam o estoque; um colega de outra área, não.

**O que ainda está em aberto.** Se a liberação para as pessoas fica no núcleo, valendo para todos os apps, ou dentro de cada app, ainda não está decidido. As pessoas ficam no núcleo (decisão 23), o que favorece a liberação no núcleo, mas não a decide (MF-101).

### Uma pergunta que usa o servidor MCP, passo a passo

**Em resumo:** a pergunta de Ana junta o banco de vendas e o servidor de estoque. O mAIg confere cada pedido, faz cada chamada e anota tudo.

**Exemplo.** Ana, gerente comercial da Farma Vida, pergunta ao Horus: "quais farmácias vão ficar sem o antialérgico mais vendido nesta semana?".

1. Ana digita a pergunta nas telas do Horus, a parte de fora do app, na nuvem da Maind.
2. A pergunta chega ao módulo do Horus, dentro do mAIg da Farma Vida, pela conexão que o próprio mAIg abriu para a Maind (decisão 6).
3. O módulo pede ao núcleo as vendas da semana. O núcleo confere a permissão, tira a senha do cofre, o lugar trancado onde ficam as senhas dos bancos, lê o banco sem alterar nada e anota o pedido (MF-105).
4. O módulo pede a IA ao núcleo, que confere o modelo e os limites do Horus (MF-106). O modelo enxerga só as ferramentas que Paulo liberou para o Horus: "pedir reposição" não aparece.
5. O modelo pede "consultar estoque". O núcleo confere que a ferramenta está liberada para o Horus e para Ana, chama o servidor da Farma Vida, dentro da rede da empresa, e anota a chamada no registro.
6. O servidor devolve o estoque de cada farmácia, e o núcleo o entrega ao módulo, dentro do mAIg.
7. O módulo monta a lista das farmácias que vão ficar sem o produto. À nuvem da Maind volta essa resposta pronta, e Ana a vê na tela.
8. Mais tarde, Renata, da área de segurança e auditora da organização, encontra no registro a leitura do banco e a chamada da ferramenta, com o app, a pessoa e a hora.

**O que não aconteceu.** O módulo do Horus não falou com o servidor: pediu ao núcleo. "Pedir reposição" não foi oferecida ao modelo. Nada mudou no sistema de estoque. O que o servidor devolveu foi ao módulo, e se uma parte disso pode ir ao provedor de IA, que roda fora da rede, ainda está em aberto.

**Por que a chamada fica no registro.** Todo pedido de um app ao núcleo passa pela permissão e pelo registro, e o servidor MCP é um serviço do núcleo (decisão 5). O owner da organização e o auditor consultam o registro, o administrador da instância não (decisão 12), e ele fica guardado enquanto o app estiver instalado (decisão 15). Se o registro guarda também o conteúdo do que a ferramenta devolveu é a mesma pergunta que existe para todo pedido de um app (MF-102).

### Por que fica para a segunda versão, e o que a primeira já deixa pronto

**Em resumo:** os servidores MCP ficam para a segunda versão porque nenhum app os usa na primeira. A primeira versão já deixa prontos os serviços em que esta mf se apoia.

**Por que depois.** A primeira versão do mAIg é o núcleo que a versão 2.0 do Horus usa. Ela entrega já na primeira venda o motivo de o mAIg existir, a governança, e deixa para depois só o que nenhum app usa ainda. Os servidores MCP chegam com a versão 2.1 do Horus, quando ele passa a usá-los (decisão 16). No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: o cadastro de servidores MCP é uma mf da versão 2.1, que nasce depois de o middleware, a peça do Horus que deu origem ao mAIg, estar de pé e provado (D-282 do Horus).

**Do que se abre mão.** O mAIg fica incompleto até a segunda versão, e uma organização só leva os sistemas internos para dentro dos apps a partir dela. Fazer o núcleo completo já atrasaria a versão 2.0 do Horus por partes que ele só usa na 2.1 (decisão 16).

**O que a primeira versão já deixa pronto.**

- **O owner da organização e as permissões** (MF-101): o papel que cadastra e libera já existe.
- **O registro e o auditor** (MF-102): as chamadas entram no mesmo registro, lido pelas mesmas pessoas.
- **A lista dos apps de cada organização** (MF-104): é dela que o owner da organização escolhe os apps de cada servidor.
- **O jeito de usar um recurso da empresa** (MF-105): o banco já é cadastrado pelo owner da organização, usado só pelo núcleo e liberado app por app; o servidor MCP segue o mesmo caminho.
- **O pedido à IA pelo núcleo** (MF-106): como o modelo já é pedido pelo núcleo, é ali que se decide quais ferramentas ele enxerga.
- **O console** (MF-110): a tela onde o owner da organização vai cadastrar os servidores.

### Quando dá errado

**Em resumo:** o mAIg recusa o que não foi liberado, anota o que foi chamado e guarda a configuração quando um app para; o que ele não controla é o que a ferramenta faz por dentro.

- **O servidor não responde.** O mAIg não recebe o resultado, e o pedido fica no registro. O que a pessoa vê na tela é decisão de cada app, como em qualquer falha de uma fonte.
- **A IA tenta uma ferramenta bloqueada.** Ela nem a enxerga, e uma chamada a ela seria recusada.
- **Um app ou uma pessoa sem a liberação.** O app não vê as ferramentas do servidor; a pessoa recebe a resposta sem o que ele sabe.
- **Uma ferramenta que age foi liberada por engano, ou uma "só leitura" escreve.** A credencial de leitura da empresa é a barreira; a chamada fica no registro; e a ferramenta pode ser bloqueada de novo no console.
- **O app para por fim de contrato.** A liberação dos servidores para aquele app é uma das permissões dele, que ficam guardadas até a organização renovar ou o owner da organização apagar (decisão 14).
- **O app é desinstalado.** O registro das chamadas dele é excluído com os outros dados do app (decisão 15).

## Prova de valor

Prova de valor proposta pelo PO; o dono da Maind ainda não a confirmou.

1. **A ferramenta que age não é chamada.** O owner da organização cadastra um servidor com ferramentas de leitura e de ação e libera só as de leitura. No app, alguém faz uma pergunta que levaria a IA a usar uma ferramenta de ação. A TI do cliente confere, no sistema da empresa, que nada mudou, e o auditor confere no registro que só as ferramentas liberadas foram chamadas.
2. **A resposta que só o servidor sabe dar.** Uma pergunta é respondida com uma informação que está só no sistema interno, e não no banco. A TI do cliente confere que o servidor só foi chamado pelo mAIg, de dentro da rede, e o auditor encontra a chamada no registro.

## Retorno para o negócio

- **Expande, e não é essencial.** A primeira versão entrega a promessa do mAIg sem esta mf. Ela amplia o que os apps respondem em cada cliente, o que pesa na fase de expandir da estratégia de entrar e expandir.
- **Mais usos sem obra da Maind.** Hipótese: cada organização leva os sistemas internos para dentro dos apps sem a Maind construir uma ligação para cada um, o que reduz o custo de atender.
- **Retenção.** Hipótese: uma organização que levou o próprio conhecimento para dentro dos apps tem mais motivo para ficar, porque esse trabalho mora no mAIg.
- **Serve a todo app.** O servidor cadastrado fica disponível para qualquer app da Maind que o owner da organização liberar, como o resto do núcleo (decisão 3). Hipótese: um segundo app chega com mais valor, porque aproveita os servidores já cadastrados, e um servidor novo não pede uma aprovação de segurança do zero, porque passa pelo mesmo portão.

## O que não inclui

- **Ferramentas que agem nos sistemas da empresa.** Esta mf é só de leitura; agir exigiria uma decisão nova.
- **Servidores MCP da Maind ou na nuvem da Maind.** Só os servidores da empresa, cadastrados pela organização (D-282 do Horus).
- **O MCP como jeito de a parte de fora do app conversar com o mAIg.** Essa conversa corre pela conexão que o mAIg abre para a Maind (MF-108).
- **Construir e manter o servidor e a credencial de leitura.** São da empresa, com a TI do cliente.
- **Os bancos de dados**, que são da MF-105; **as chaves, os modelos, os limites e o custo da IA**, da MF-106; **a consulta e a guarda do registro**, da MF-102; **a tela do console**, da MF-110.
- **Quem vê o quê dentro do que o servidor devolve, pessoa por pessoa.** Fica com a empresa, que pode dividir a informação em mais de um servidor.
- **O que o app faz com o resultado.** A lógica é de cada app; o módulo que roda isolado dentro do mAIg é da MF-109.
- **Sistemas do cliente como apps.** Um servidor MCP é uma fonte da organização, e não um app; o mAIg recebe só apps da Maind, por enquanto (decisão 8).

## Depende de

- `MF-101:Segurança e permissões`: cria o owner da organização, o único que cadastra os servidores, e as permissões que dizem o que cada um pode fazer.
- `MF-102:Registro e auditoria`: cada chamada de ferramenta entra no registro, que dá ao auditor a resposta a "quem fez a IA consultar o quê".
- `MF-104:Gestão dos apps`: o owner da organização libera cada servidor para os apps instalados e liberados na organização, e a configuração de um app parado guarda essas liberações.
- `MF-105:Bancos da empresa`: o servidor segue o caminho dos bancos, um recurso da empresa usado só pelo núcleo e liberado app por app.
- `MF-110:Console de configuração`: é no console que o owner da organização cadastra os servidores, libera as ferramentas e escolhe quem as usa.
- `MF-106:Governança da IA`: é no pedido à IA que se decide quais ferramentas o modelo vê, sob as regras de modelos, limites e custo dessa mf.

## Ponto de partida no Horus

- No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: a organização poderá cadastrar os próprios servidores MCP, que ficam na infraestrutura dela, para customizar a extração de informação e agregar o conhecimento e o processo dela; o cadastro é feito no middleware, e o servidor MCP não é uma peça da conexão entre a nuvem do Horus e o middleware (D-281 do Horus).
- No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: o cadastro de servidores MCP é uma mf da versão 2.1, de classe expande, e ficam de fora os servidores MCP da Maind ou na nuvem dela (D-282 do Horus).
- No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: os servidores MCP só entregam informação, sem ação sobre os sistemas da organização, e o que devolvem sai só como parte da resposta pronta; a promessa foi substituída em parte pela lista liberada (D-286 do Horus).
- No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: só o owner da organização cadastra e gere os servidores MCP, na mesma tela dos bancos e da IA (D-287 do Horus).
- No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: um servidor recém-cadastrado nasce desligado para todas as pessoas, o owner da organização escolhe por servidor as roles que podem usá-lo, e as regras mais finas ficam com a organização (D-288 do Horus).
- No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: as ferramentas nascem bloqueadas, o owner da organização libera uma a uma as de leitura, a marca "só leitura" só pré-seleciona, a ferramenta sem a marca pede um aviso extra, o modelo só vê e só chama as liberadas, e o cadastro avisa que a garantia de verdade é a credencial de leitura do servidor, que é da organização. Ficaram como leitura a confirmar, e não como decisão, a ferramenta nova bloqueada e o registro de cada chamada (D-289 do Horus).
- No Horus, ficou como pendência do arquiteto, e não como decisão: como o middleware aplica a lista liberada, bloqueia a ferramenta nova, registra cada chamada e faz o resultado entrar na resposta com a origem e o período (P-050 do Horus).

## O que ainda falta decidir

- **Falta o arquiteto do mAIg definir como o mAIg aplica a lista de ferramentas liberadas.** *O que está em jogo:* mostrar ao modelo só as liberadas, recusar as outras, perceber e bloquear a ferramenta nova, registrar cada chamada e fazer o resultado entrar na resposta com a origem; é o que faz a promessa por lista funcionar (P-050 do Horus).
- **Falta o dono da Maind decidir se a liberação dos servidores para as pessoas fica no núcleo do mAIg ou dentro de cada app.** *O que está em jogo:* no núcleo, uma regra só vale para todos os apps; em cada app, cada um repete a liberação do seu jeito. As pessoas ficam no núcleo (decisão 23), o que favorece o núcleo, mas não decide o ponto (MF-101).
- **Falta o dono da Maind confirmar que a ferramenta nova nasce bloqueada e decidir se o owner da organização é avisado quando ela surge.** *O que está em jogo:* sem o bloqueio, uma atualização do servidor daria à IA uma ação nova sem ninguém decidir; sem o aviso, a ferramenta nova fica esquecida.
- **Falta o arquiteto do mAIg definir onde fica guardado o acesso a cada servidor MCP.** *O que está em jogo:* a credencial dá acesso a um sistema da empresa; no cofre do mAIg, como as senhas dos bancos, nenhum app a toca, e noutro lugar a regra precisa de outra garantia.
- **Falta o arquiteto do mAIg definir como a Maind alcança um servidor MCP da empresa quando a instância roda na infraestrutura da Maind.** *O que está em jogo:* é a mesma diferença entre as duas hospedagens que existe para os bancos, sem enfraquecer a promessa de governança (MF-105).
- **Falta o arquiteto do mAIg definir o que o uso das ferramentas muda no custo da IA e no tempo da resposta.** *O que está em jogo:* cada chamada faz o modelo trabalhar mais, e o custo da IA é contado por app; o owner da organização precisa saber quanto um servidor pesa antes de liberá-lo (MF-106).
- **Falta o dono da Maind decidir o que fazer quando um cliente exigir prova, e não só declaração, de que uma ferramenta só lê.** *O que está em jogo:* o mAIg sozinho não consegue provar o que a ferramenta faz por dentro, e um cliente de segurança rígida pode não aceitar a promessa por lista.
- **Falta o dono da Maind decidir se o que uma ferramenta MCP devolve pode ir ao provedor de IA, e em que camada (decisão 20).** *O que está em jogo:* quem pede a ferramenta é o modelo de IA, que roda no provedor, fora da rede, e para usar o que ela devolve o modelo costuma precisar ver o resultado. As camadas da decisão 20 dizem o que vai ao provedor num pedido comum, mas não falam do resultado de uma ferramenta.
- **Também depende, e está explicado em outras mfs:** como a Maind alcança o banco na hospedagem dela (MF-105).

## Decisões do PO para discutir

- **Decisão:** acrescentar a liberação do servidor app por app, além da liberação ferramenta por ferramenta e por pessoas que vem do Horus. *Por que:* no mAIg, os bancos e a IA já são liberados app por app, e o Horus era um app só. *Alternativa:* liberar o servidor para a organização inteira. *Reabrir se:* a liberação por app pesar demais para o owner da organização.
- **Decisão:** deixar em aberto onde mora a liberação por pessoas, em vez de pô-la no núcleo. *Por que:* o Horus libera por role, que é um conceito dele, e a liberação por pessoas ainda não foi decidida no mAIg, embora as pessoas fiquem no núcleo (decisão 23; D-288 do Horus). *Alternativa:* um grupo de pessoas por servidor, no núcleo, valendo para todos os apps. *Reabrir se:* o dono da Maind decidir que a liberação mora no núcleo.
- **Decisão:** apoiar o registro de cada chamada de ferramenta na decisão 5, e não só no Horus, onde ele é leitura a confirmar (D-289 do Horus). *Por que:* a decisão 5 põe os servidores MCP no núcleo, e todo pedido ao núcleo passa pela permissão e pelo registro. *Alternativa:* tratar o registro das chamadas como ponto em aberto. *Reabrir se:* o dono da Maind entender que a decisão 5 não cobre as chamadas de ferramenta.
- **Decisão:** tratar a ferramenta nova bloqueada como ponto de partida a confirmar, e não como regra do mAIg, porque no Horus ela é leitura do PO (D-289 do Horus). *Por que:* não há decisão do dono da Maind sobre ela. *Alternativa:* escrevê-la como regra. *Reabrir se:* o dono da Maind a confirmar.
- **Decisão:** deixar em aberto onde fica a credencial do servidor, em vez de afirmar o cofre. *Por que:* a decisão 5 fala das senhas dos bancos e das chaves de IA, e nenhuma fonte diz onde fica o acesso a um servidor MCP. *Alternativa:* afirmar o cofre, pela mesma regra dos bancos. *Reabrir se:* o arquiteto do mAIg definir o cofre.
- **Decisão:** cadastrar o servidor em cada organização que vai usá-lo, sem compartilhá-lo entre organizações da mesma empresa. *Por que:* nada se herda da organização vizinha, e o mAIg não tem um nível de empresa acima da organização (decisões 9 e 11). *Alternativa:* um cadastro por empresa. *Reabrir se:* uma empresa com muitas organizações reclamar de repetir o cadastro.
- **Decisão:** considerar a liberação dos servidores uma das permissões que ficam guardadas quando o app para. *Por que:* a decisão 14 guarda as permissões do app, e a liberação de um servidor é uma permissão. *Alternativa:* apagar as liberações quando o app para. *Reabrir se:* o dono da Maind entender que a decisão 14 não alcança os servidores MCP.
- **Decisão:** manter as dependências da lista combinada, acrescentar a governança da IA e não acrescentar a conexão de dentro para fora (MF-106, MF-108). *Por que:* é no pedido à IA que se decide quais ferramentas o modelo vê, e por isso a governança da IA entrou em "Depende de"; a conexão se relaciona com esta mf, mas já está na primeira versão. *Alternativa:* acrescentar também a conexão a "Depende de". *Reabrir se:* o mapa das dependências for revisto.
- **Decisão:** manter a classe expande, a mesma que o Horus deu à mf dele (D-282 do Horus). *Por que:* a primeira versão do mAIg entrega a promessa sem ela. *Alternativa:* acelera. *Reabrir se:* um cliente condicionar a compra a usar os próprios servidores MCP.
- **Decisão:** usar como prova de valor as duas demonstrações do Horus, com a conferência da TI do cliente e do auditor. *Por que:* são cenários que alguém de fora confere sem números. *Alternativa:* uma prova só. *Reabrir se:* o dono da Maind preferir outra demonstração.
