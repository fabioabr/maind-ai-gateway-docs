# MF-105:Usar os bancos da empresa sem expor a senha

> O mAIg guarda num cofre as senhas dos bancos de dados da empresa e lê esses bancos em nome dos apps, só para consulta. Nenhum app vê uma senha, nada muda nos bancos e cada leitura fica anotada no registro.

**Também chamada de:** Bancos da empresa · **Versão do mAIg:** 1ª · **Classe:** essencial · **Situação:** rascunho do PO

## Em uma frase

O mAIg, o Maind AI Gateway, guarda num cofre as senhas dos bancos de dados da empresa cliente e, quando um app da Maind precisa de um dado, lê o banco por ele, só para consulta, depois de conferir a permissão e de anotar o pedido no registro (decisão 5).

Um banco de dados é o sistema onde a empresa guarda as informações do dia a dia, como as vendas de cada loja. É o que ela tem de mais sensível, e por isso quase nenhuma empresa deixa o banco visível de fora. Ao mesmo tempo, os produtos da Maind só funcionam se lerem esses dados. O Horus, o primeiro app, responde perguntas sobre as vendas e precisa ler o banco de vendas.

Esta parte do mAIg desfaz esse nó. A senha do banco fica num lugar só, sob o controle da empresa. Quem conversa com o banco é sempre o mAIg, e nunca o app. É a parte do mAIg que sustenta o primeiro objetivo dele: usar os dados do cliente sem expor o banco.

## Quem ganha

- **TI do cliente.** É a equipe de tecnologia da empresa, que cuida dos servidores, da rede e dos bancos. Passa a ter as senhas dos bancos num lugar só, em vez de uma cópia em cada produto. Aprova um caminho só até os dados, o do mAIg, que só lê. E, com o mAIg na rede da empresa, não abre nenhuma porta de entrada: a abertura no firewall, o muro de proteção da rede, por onde alguém de fora começa uma conversa com um computador de dentro (decisão 6).
- **Owner da organização.** É quem responde pela organização no mAIg. A organização é o espaço da empresa dentro do mAIg, com os seus próprios apps e as suas próprias regras (decisão 9). Ele passa a decidir, banco por banco, quais apps leem cada um. Dá e retira essas permissões sozinho, num lugar só, sem pedir nada à Maind.
- **Também ganham.** O auditor, a pessoa que o owner da organização nomeia para conferir o registro, encontra ali cada leitura feita por cada app (decisão 12). A equipe da Maind não precisa conhecer, por rotina, as senhas dos bancos dos clientes. E a pessoa que usa o app recebe respostas feitas com os dados da empresa sem que ninguém tenha aberto o banco para fora.

## A decisão que passa a ser possível

**A TI do cliente passa a poder dizer sim a um app da Maind sem abrir o banco para fora e sem entregar a senha a ninguém.** Sem o mAIg, para um produto de fora ler o banco, a empresa teria de abrir um caminho até ele ou confiar a senha ao produto. Com o mAIg na infraestrutura do cliente, o banco continua atrás do firewall e a senha fica no cofre. A TI aprova uma coisa só: que o mAIg leia, sem alterar nada.

**O owner da organização passa a poder liberar um banco para um app, e só para ele.** Um app não lê um banco só porque o banco está cadastrado: precisa da permissão. E a permissão se desfaz no mesmo lugar em que foi dada.

**A dor que some: a senha espalhada.** Quando cada produto guarda a própria cópia da senha do banco, trocar a senha vira uma caça a todos os lugares onde ela está. E um vazamento pode ter vindo de qualquer um deles. Com o mAIg, a senha mora num lugar só, e nenhum app a tem.

## Como funciona

### O que são os bancos da empresa para o mAIg

**Em resumo:** para o mAIg, um banco da empresa é um lugar de onde ele lê dados em nome dos apps. Ele guarda a senha num cofre, lê só para consulta e nunca entrega a senha a um app.

**Quem é quem.**

- **O banco de dados** guarda as informações da empresa: vendas, estoque, clientes. Uma empresa costuma ter vários. Na Farma Vida, uma rede de 40 farmácias, um banco guarda as vendas e outro guarda o estoque.
- **O usuário e a senha do banco** são o que dá acesso a ele, como o login de uma pessoa num sistema. Quem tem os dois consegue ler o banco. Se o usuário tiver permissão para isso, consegue também alterá-lo.
- **O cofre** é a parte do núcleo do mAIg onde as senhas ficam trancadas. O núcleo é o que vem pronto no mAIg e serve a todos os apps (decisão 3).
- **"Só leitura"** quer dizer que o mAIg lê os dados e nunca altera, apaga ou grava nada nos bancos (decisão 5).
- **O app** é cada produto da Maind que entra no mAIg. Ele tem duas partes: uma fora do mAIg, com as telas, e o módulo, a parte interna, que roda isolado dentro do mAIg e é quem pede os dados ao núcleo (decisão 4). O primeiro app é o Maind Horus, em que as pessoas da empresa fazem perguntas sobre os dados e recebem a resposta pronta.
- **O registro** junta o log, a anotação de tudo o que acontece, e a auditoria, a conferência dessas anotações depois. Cada leitura de banco entra nele (MF-102).
- **O console** é a tela do mAIg onde se configura tudo, inclusive o cadastro dos bancos (MF-110).

**Por que é assim.** O banco é o que a empresa tem de mais sensível, e a senha é a chave dele. Se cada app guardasse a própria senha e fosse sozinho ao banco, a TI do cliente teria de avaliar e vigiar cada app. Com o cofre no núcleo, todo app passa pelo mesmo caminho: pede, o mAIg confere, lê e anota. O controle fica num lugar só, sob as regras da empresa (decisão 5).

**O que se abre mão.** O núcleo do mAIg fica maior antes de o primeiro app sair. Ficou de fora deixar os dados fora do núcleo, com cada app guardando as próprias senhas e indo sozinho aos bancos (decisão 5).

**Quais bancos a primeira versão lê.** Só bancos de tabelas consultados por SQL, a linguagem de consulta desses bancos, de uma lista única do mAIg, igual para todos os apps. A lista é feita dos tipos que os clientes de hoje do primeiro app já usam. O banco de um tipo fora da lista é recusado no cadastro, com mensagem clara, e um tipo novo entra por versão nova do mAIg. Outros tipos de fonte, como bancos de documentos, arquivos, planilhas e serviços, não entram. Entra na onda 1.0 (decisão 110). Abre-se mão de: a empresa cujo dado mora noutro tipo de fonte não usa o mAIg na primeira versão, e o cliente novo com um banco fora da lista espera uma versão. Os nomes da lista estão em "O que ainda falta decidir".

### O cofre: a senha entra uma vez e não sai mais

**Em resumo:** a senha de um banco é digitada uma vez, no cadastro, e vai direto para o cofre. Dali ela só é usada pelo próprio núcleo, na hora de ler o banco. Nenhum app a recebe.

**Como funciona.** O owner da organização cadastra o banco no console (MF-110). Ele informa onde o banco está, o usuário e a senha, e a senha vai para o cofre. Quando um app pede um dado, o núcleo usa a senha guardada, abre a conversa com o banco e lê o que foi pedido. Ao módulo do app, entrega os dados, nunca a senha (decisão 5).

**Ninguém vê a senha de volta.** Depois de guardada, a senha não aparece em tela nenhuma. Não a vê a pessoa que usa o app, nem o auditor, nem o administrador da instância, nem quem a cadastrou. Se a senha do banco mudar, o owner da organização digita a nova, que toma o lugar da antiga.

**O cofre é cifrado.** O cofre de cada organização fica embaralhado com uma chave da própria organização, que quem opera a máquina não alcança: nem a equipe da Maind, na hospedagem dela, nem a TI do cliente, na casa do cliente. Quem copia o disco ou a cópia de segurança não lê senha nenhuma (decisão 57, MF-102). A cópia de segurança do cofre é feita por quem opera a máquina (decisão 65, MF-107), e a cópia de recuperação da chave fica com a própria organização, nunca com a Maind (decisão 87).

**Quem cadastra.** O owner da organização cadastra os bancos, em qualquer hospedagem. A equipe da Maind dá suporte, sem cadastrar no lugar dele. Assim, a Maind não precisa conhecer, por rotina, a senha do banco de cada cliente.

**As colunas sensíveis, no cadastro.** Uma coluna sensível é a que guarda um dado que não deve sair às claras, como o CPF de um cliente. No cadastro do banco, o núcleo sugere as colunas sensíveis, já marcadas, e o owner da organização confere e marca ou desmarca. Marcar ou desmarcar é ato sensível: fica no registro e avisa os outros owners da organização e o auditor (decisão 54). A coluna marcada sai sempre mascarada, para todos os apps (decisão 43). Entra na onda 1.0 (decisão 111). Abre-se mão de: o cadastro do banco ganha um passo de conferência, e a coluna que o núcleo não sugerir e o owner da organização não marcar sai às claras. Como o núcleo monta a sugestão está em "O que ainda falta decidir".

> **Analogia:** é como o cofre da recepção de um hotel. O hóspede pede o que deixou guardado, o recepcionista abre o cofre e entrega o objeto, e o hóspede nunca recebe a combinação. **Onde a analogia para:** no hotel, o hóspede leva o objeto original; no mAIg, o app recebe só uma cópia do que foi lido, e o banco continua intacto, onde sempre esteve.

**Exemplo.** A Farma Vida instalou o mAIg na própria rede e contratou o Horus. Marta, da TI, faz o papel de administrador da instância. Paulo, diretor de operações, é o owner da organização.

1. Marta cria no banco de vendas um usuário só para o mAIg, com permissão apenas para ler, como o mAIg exige (decisão 61).
2. Marta passa a Paulo o usuário e a senha, por um canal combinado entre os dois.
3. Paulo entra no console do mAIg e cadastra o banco de vendas: onde ele está, o usuário e a senha.
4. A senha vai para o cofre. A tela não volta a mostrá-la, nem a Paulo. O console mostra as colunas que o núcleo sugere como sensíveis, já marcadas, como o CPF do cliente, e Paulo confere a lista (decisão 111).
5. Paulo dá ao Horus a permissão de ler o banco de vendas. O banco de estoque, ele não cadastra por enquanto.

**Quando dá errado.** Paulo digita a senha errada. O mAIg não consegue ler o banco, e os pedidos do Horus a esse banco não são atendidos até a senha certa entrar no cadastro. O mesmo acontece se Marta trocar a senha no banco e ninguém atualizar o cadastro.

**Quem conhece e quem cadastra.** Quem conhece a senha é a TI do cliente, e quem cadastra é o owner da organização: no exemplo, a senha passou pelas mãos de Paulo. A TI do cliente não ganha um papel próprio para cadastrá-la direto; ela passa a senha ao owner da organização, que a cadastra. Não há problema em a senha passar por ele, porque o owner da organização tem uma espécie de fé pública dentro da organização: é quem a empresa indicou para responder por ela no mAIg (decisão 67). Abre-se mão de: a senha passa pelas mãos de quem muitas vezes não é da área técnica.

### O acesso só de leitura

**Em resumo:** o mAIg lê os bancos e nunca altera nada neles. Ler é consultar. Alterar é gravar, mudar ou apagar, e isso o mAIg não faz.

**Quem é quem.** Ler é ver uma informação: quanto cada farmácia vendeu, quais produtos estão em falta. Alterar é mudar o que está guardado: corrigir um preço, apagar uma venda, gravar um pedido novo. O mAIg só faz o primeiro (decisão 5).

**Por que é assim.** O "só leitura" torna pequeno o pedido à TI do cliente. Ela não aprova um sistema que pode mexer nos dados da empresa, só um que pode olhá-los. Um erro num app, ou um pedido malfeito, não estraga um dado, porque o caminho até o banco não grava. E é o que basta ao Horus, que responde perguntas sobre os dados e não precisa mudá-los. Uma consequência: um app que precise gravar num banco da empresa não encontra esse caminho no mAIg.

> **Analogia:** é como a sala de consulta de um arquivo histórico. O pesquisador pede o documento, lê na mesa e devolve, sem levá-lo para casa e sem escrever nele. **Onde a analogia para:** no arquivo, o pesquisador manuseia o documento original; no mAIg, o app nem chega perto do banco, porque quem lê é o núcleo, que entrega ao app uma cópia do que foi pedido.

**As duas travas.** O "só leitura" é garantido em dois lugares ao mesmo tempo. O primeiro é o próprio mAIg, que só faz pedidos de leitura ao banco. O segundo é o banco: o usuário cadastrado precisa ser um que só tem permissão para ler, e assim o próprio banco recusa qualquer gravação, mesmo que algo falhe no mAIg. No cadastro, o mAIg testa esse usuário e o recusa se ele conseguir gravar (decisão 61). Foi o que Marta fez no exemplo do tópico anterior.

**O limite de cada consulta.** Mesmo só lendo, uma consulta pesada pode deixar lento ou derrubar o banco de produção, como o do caixa das farmácias. Por isso cada consulta tem um limite de tempo e de linhas; passado o limite, ela é interrompida, e o pedido falha com a mensagem clara de que a consulta foi grande demais: o app não recebe um pedaço do resultado como se fosse o resultado inteiro (decisão 124). Esse limite protege o banco e é outro, maior, que o teto da resposta, que protege o que sai do mAIg (decisões 43 e 61). Abre-se mão de: a TI do cliente cria o usuário que só lê antes de começar, e uma consulta grande demais é interrompida, sem entregar nem as primeiras linhas.

**Quando dá errado.**

- **O módulo de um app pede algo que alteraria um banco.** O mAIg não faz a alteração, e o pedido fica no registro, à vista do owner da organização e do auditor (decisões 5 e 12).
- **Paulo cadastra um usuário que consegue gravar.** O mAIg testa o usuário, recusa o cadastro e diz o motivo; Paulo pede a Marta um usuário que só lê (decisão 61).

**O que ainda está em aberto.** Os valores do limite de tempo e de linhas e o jeito de testar o usuário no cadastro são do arquiteto do mAIg e estão em "O que ainda falta decidir".

### Quais apps leem cada banco

**Em resumo:** cadastrar um banco não libera nenhum app. O owner da organização diz quais apps leem cada banco e pode retirar essa permissão quando quiser.

**Quem é quem.**

- **O cadastro do banco** pertence à organização. Um banco cadastrado uma vez pode servir a mais de um app da mesma organização.
- **A permissão de leitura** diz que um app pode ler um banco. Cada app recebe a sua. Sem ela, o mAIg não lê aquele banco para aquele app.
- **A conferência** é feita pelo núcleo, a cada pedido, pelas regras de segurança e permissões (MF-101).
- **O owner da organização** dá e retira as permissões, no console (MF-110).

**Por que é assim.** Cada app lê só o que precisa. Se o Horus só responde sobre vendas, não há por que ele ler o banco de estoque. E as regras são de cada organização. Duas organizações na mesma instância, isto é, na mesma instalação do mAIg, não enxergam os bancos uma da outra (decisão 9). O controle de quais bancos cada app lê fica no mAIg, para todos os apps, e não espalhado em cada produto.

**Exemplo.** O Horus da Farma Vida já lê o banco de vendas.

1. A diretoria quer perguntar ao Horus sobre a falta de produtos nas farmácias. Para isso, ele precisa ler o banco de estoque.
2. Marta passa a Paulo o usuário e a senha de leitura do banco de estoque. Paulo cadastra o banco no console.
3. Paulo dá ao Horus a permissão de ler o banco de estoque.
4. Ana, gerente comercial, pergunta quais farmácias estão sem um remédio, e o Horus responde.
5. Meses depois, a Farma Vida decide que o estoque não deve mais passar pelo Horus. Paulo retira a permissão.
6. Na pergunta seguinte de Ana sobre o estoque, o mAIg não lê o banco para o Horus, e o pedido recusado fica no registro.

**Quando dá errado.** O que Ana vê na tela, quando o Horus não consegue ler um banco, é decidido pelo Horus, e não pelo mAIg. O que o mAIg garante é que não lê sem permissão e que anota o pedido (decisão 5).

**A permissão vale pelo banco inteiro.** O app lê tudo o que o usuário cadastrado do banco alcança. Para que ele não veja uma parte, como a folha de pagamento guardada no mesmo banco das vendas, a TI do cliente cria no banco um usuário mais restrito, que só enxerga as vendas, e o owner da organização o cadastra como um banco à parte (decisão 73). Abre-se mão de: cada recorte pede um usuário novo no banco, e o owner da organização não ajusta o recorte sozinho.

### O caminho de um pedido de dados, passo a passo

**Em resumo:** o módulo do app pede, o núcleo confere a permissão, usa a senha do cofre, lê, anota e entrega os dados ao módulo. À nuvem da Maind volta a resposta pronta, até o teto de 200 linhas e com as colunas sensíveis mascaradas, e só sai mais o que o owner da organização liberar (decisões 43 e 74). A resposta que passa do teto é recusada inteira (decisão 124). A consulta e a planilha, que são o que o owner da organização pode liberar a mais, chegam na onda 1.1 da primeira versão (decisão 95).

**Quem é quem.** A nuvem da Maind são os computadores da Maind, alcançados pela internet. É onde roda a parte de fora do Horus, com as telas. A conexão entre a nuvem e o mAIg é aberta sempre pelo mAIg, de dentro para fora (decisão 6).

**Exemplo.** Ana, gerente comercial da Farma Vida, pergunta ao Horus: "quais farmácias venderam menos em outubro do que em setembro?".

1. Ana digita a pergunta nas telas do Horus, a parte de fora do app, na nuvem da Maind.
2. A pergunta chega ao módulo do Horus, dentro do mAIg da Farma Vida, pela conexão que o próprio mAIg abriu com a Maind e mantém aberta (MF-108).
3. O módulo precisa dos números de vendas e pede ao núcleo que leia o banco de vendas. Ele não sabe a senha e não tem como ir sozinho ao banco.
4. O núcleo confere a permissão: o Horus, na organização Farma Vida, pode ler o banco de vendas? Pode, porque Paulo deu essa permissão.
5. O núcleo usa a senha guardada no cofre e lê no banco de vendas o que foi pedido, sem alterar nada. Entrega os dados ao módulo, dentro do mAIg. A senha não sai do núcleo.
6. O núcleo anota no registro que o Horus leu o banco de vendas, em nome de Ana, e quando, com a consulta feita e quantas linhas voltaram, mas nunca os números devolvidos (decisão 58).
7. O módulo monta a resposta. Se precisar da IA para isso, pede ao núcleo, pelo caminho da governança da IA (MF-106).
8. A resposta pronta volta à nuvem da Maind, pela mesma conexão, até o teto de 200 linhas e com as colunas sensíveis mascaradas, e não fica guardada lá (decisões 34 e 43). Os números crus de vendas não vão para a Maind, mas a resposta pronta pode conter números da empresa. Além dela, só sai o que o owner da organização liberar ao Horus: a consulta feita, sem dado nenhum, e a planilha, que vai direto do mAIg ao navegador de Ana (decisão 74, MF-109). Essas duas saídas chegam na onda 1.1 (decisão 95).
9. Ana vê a lista das farmácias na tela. Mais tarde, Renata, da área de segurança, nomeada auditora por Paulo, encontra no registro a leitura feita para essa pergunta.

**O que não aconteceu.** O Horus não viu a senha. Ninguém abriu porta de entrada na rede da Farma Vida. A Maind não recebeu os dados crus. E o banco de vendas não mudou em nada. Entre o módulo e o banco houve sempre um serviço do núcleo, e por isso o pedido passou pela conferência e ficou no registro (decisões 4 e 5).

**Quando a resposta passa do teto.** O núcleo recusa a resposta inteira, com mensagem clara, que diz o tamanho da resposta e o teto, e nunca entrega um resultado parcial como se fosse inteiro. A pessoa refaz o pedido com um filtro ou pede um total, ou o owner da organização sobe o teto (decisão 43). A recusa fica no registro, com a contagem. Entra na onda 1.0 (decisão 124). Abre-se mão de: a pessoa não recebe nem as primeiras linhas.

### Quem faz e quem vê o quê com os bancos

**Em resumo:** quem cadastra e libera os bancos é o owner da organização; quem confere as leituras é o auditor. O administrador da instância e a equipe da Maind não configuram os bancos das organizações, e a pessoa que usa o app não vê nada disso.

- **Owner da organização.** Cadastra os bancos, confere as colunas sensíveis que o núcleo sugere, dá e retira as permissões, troca a senha quando ela muda e apaga o cadastro que não serve mais. Cadastrar ou trocar um banco avisa na hora os outros owners da organização e o auditor (decisão 54, MF-102). Marcar ou desmarcar uma coluna sensível também (decisão 111). Vê a lista dos bancos da organização e quais apps leem cada um. Não vê a senha depois de guardada.
- **Auditor.** Lê no registro cada leitura: qual app leu qual banco, em nome de quem e quando, com a consulta feita e quantas linhas voltaram, nunca os dados (decisão 58). Não muda nenhuma configuração (decisão 12).
- **Administrador da instância.** Cuida da instalação física do mAIg: instala os apps e acompanha o estado e as versões. Não configura os bancos das organizações e não vê o registro delas (decisão 12).
- **TI do cliente.** Cuida dos bancos fora do mAIg: cria o usuário que o mAIg vai usar e troca a senha quando a política da empresa pede. Na infraestrutura do cliente, faz também o papel de administrador da instância, sem por isso ver o registro.
- **Equipe da Maind.** Dá suporte ao owner da organização no cadastro, antes e depois da venda, sem cadastrar no lugar dele. Na infraestrutura da Maind, faz o papel de administrador da instância.
- **Pessoa que usa o app.** Usa as telas do app e recebe as respostas. Não vê senhas, cadastros nem permissões.

**Por que é assim.** Cada organização decide o que usa, e quem decide é alguém dela (decisão 10). Quem configura não é quem confere. É essa separação de funções que dá à área de segurança do cliente a visão de tudo, sem o poder de mudar nada (decisão 12).

### A senha muda, o app para, o banco sai do cadastro

**Em resumo:** o cadastro de um banco acompanha a vida da empresa. A senha muda, os apps param e voltam, os bancos deixam de ser usados. Em cada caso, o que se guarda e o que se apaga segue uma regra.

**A senha muda.** A TI do cliente troca a senha no banco, e o owner da organização digita a nova no cadastro. Como a senha mora num lugar só, há um lugar só para atualizar, e a troca vale para todos os apps que leem aquele banco.

**O app para.** Quando um app para, depois do fim do contrato, as permissões dele sobre os bancos ficam guardadas com o resto da configuração dele. Elas ficam até a organização renovar, e o app volta como estava, ou até o owner da organização apagar (decisão 14). Apagar a configuração guardada de um app parado só existe a partir da onda 1.1 (decisão 106, MF-104). O cadastro do banco não depende do app: continua na organização, servindo aos outros apps.

**O app é desinstalado.** Os dados do app são excluídos, e as permissões dele sobre os bancos saem junto (decisão 15). O cadastro do banco continua na organização, porque pertence a ela, e não ao app. Pausar, retirar e desinstalar um app estão explicados por inteiro na gestão dos apps (MF-104). Retirar e desinstalar chegam na onda 1.1; na onda 1.0, um app só para (decisão 106).

**O banco sai do cadastro.** O owner da organização apaga o cadastro de um banco que a organização não quer mais ligar ao mAIg. A senha sai do cofre, e nenhum app lê mais aquele banco. As leituras antigas continuam no registro, que segue a regra de guarda dele (MF-102). Apagar o cadastro de um banco existe desde a onda 1.0 (decisão 106).

**Por que é assim.** Renovar não pede refazer nada (decisão 14). E separar o cadastro do banco, que é da organização, da permissão, que é de cada app, faz com que a saída de um app não leve junto o que os outros usam.

### Na hospedagem da Maind: o banco precisa ser alcançável

**Em resumo:** com o mAIg na infraestrutura do cliente, a promessa de não expor o banco vale por inteiro. Com o mAIg na infraestrutura da Maind, o banco precisa ser alcançável pela Maind, e a senha fica no cofre da instância da Maind, cifrado com a chave da organização. O banco aceita conexão só do endereço fixo da Maind, cifrada e com o usuário que só lê (decisão 91).

**Quem é quem.**

- **A instância** é cada instalação física do mAIg. Ela roda na infraestrutura do cliente, isto é, nas máquinas e na rede dele, ou na infraestrutura da Maind (decisão 9).
- **A hospedagem** é o lugar onde a instância roda. Na do cliente, quem cuida é a TI do cliente, no papel de administrador da instância. Na da Maind, a empresa não instala nada, e quem cuida é a equipe da Maind.

**O que muda para os bancos.**

- **Na infraestrutura do cliente.** O mAIg fica dentro da rede da empresa e lê o banco por dentro. O banco não fica visível de fora, e a TI do cliente libera a saída para o endereço da Maind e as dos provedores de IA que a organização escolher (decisões 6 e 19). As senhas ficam no cofre do mAIg, dentro da casa do cliente.
- **Na infraestrutura da Maind.** O mAIg fica fora da rede da empresa. Para ler o banco, ele precisa chegar até lá de fora. A TI do cliente, ou o provedor da nuvem dele, libera o banco só para o endereço fixo da Maind, com a conversa cifrada e o usuário que só lê, seja o banco num serviço de nuvem, seja num servidor da empresa (decisões 61 e 91). As senhas desses clientes ficam no cofre da instância, na infraestrutura da Maind, cifrado com a chave de cada organização, que a equipe da Maind não alcança (decisão 57).

**Por que existem as duas.** Um cliente pequeno, sem equipe de TI, usa o mAIg sem instalar nada. Quem exige ter tudo dentro de casa instala o mAIg na própria rede. O que se abre mão: na hospedagem da Maind, a promessa de não expor o banco fica menor, em troca de a empresa não instalar nada (decisão 9).

**O que está em jogo no caminho até o banco.** Esse caminho é justamente o que o mAIg veio evitar. Escolhido sem cuidado, ele faria da hospedagem da Maind o problema de antes: um caminho de fora até o banco, que a TI do cliente teria de vigiar. Por isso a TI que aceita a hospedagem da Maind precisa saber, antes de aceitar, que caminho é esse, quem pode usá-lo e o que acontece se alguém de fora o encontrar. O caminho é o endereço fixo da Maind, com a conversa cifrada e o usuário que só lê (decisão 91).

**Exemplo.** Uma variação: a Farma Vida não quer instalar nada e usa uma instância da Maind.

1. A equipe da Maind, no papel de administrador da instância, cria a organização Farma Vida numa instância da Maind e o usuário de Paulo como owner da organização.
2. Paulo entra no console e cadastra o banco de vendas, do mesmo jeito que faria com o mAIg na própria rede. A senha vai para o cofre da instância, que fica na infraestrutura da Maind.
3. Para o mAIg ler o banco, Marta libera o banco de vendas só para o endereço fixo da Maind, com a conversa cifrada e o usuário que só lê (decisão 91).
4. Dali em diante, o pedido de Ana segue o mesmo caminho: permissão, cofre, leitura e registro.
5. Paulo e Renata continuam a ser os únicos que leem o registro da organização. A equipe da Maind, mesmo cuidando da instância, não o vê (decisão 12).

**Quando dá errado.** A TI do cliente não aceita nenhum caminho de fora até o banco. Nesse caso, a hospedagem da Maind não serve a essa empresa, e o caminho que resta é instalar o mAIg na própria rede.

**Uma ressalva do Horus que o mAIg não herda.** No Horus, quem opera a instalação da Maind segue podendo, tecnicamente, alcançar as senhas guardadas nela, e por isso a promessa de que a Maind não vê as senhas só vale por inteiro com a instalação na casa do cliente (D-273 do Horus). O mAIg decidiu diferente: o cofre e o registro ficam cifrados com a chave da organização, que a equipe da Maind não alcança, e o risco aceito é o que estiver em uso com a máquina ligada (decisão 57).

**O que se abre mão.** O banco fica alcançável pela internet, ainda que por um endereço só, e a promessa de que o banco não fica exposto vale por inteiro só na casa do cliente (decisão 91).

### Quando dá errado

**Em resumo:** quando o mAIg não consegue ler um banco, ou não pode ler, o pedido não é atendido e fica no registro. Nenhuma falha faz o mAIg entregar uma senha ou alterar um dado.

- **A senha do banco mudou, e o cadastro não.** O mAIg não consegue ler o banco. Os pedidos dos apps que leem esse banco não são atendidos e ficam no registro, como todo pedido. O conserto é o owner da organização digitar a senha nova no console.
- **O banco está fora do ar.** O mAIg não lê, e o pedido fica no registro. Quando o banco volta, as leituras seguintes voltam a funcionar, sem nenhuma mudança no cadastro.
- **O banco é de um tipo fora da lista.** O console recusa o cadastro, com mensagem clara, e um tipo novo entra por versão nova do mAIg (decisão 110).
- **Uma consulta passa do limite de tempo ou de linhas.** A consulta é interrompida, e o pedido falha com mensagem clara, sem resultado parcial (decisão 124).
- **A resposta passa do teto.** O núcleo recusa a resposta inteira e diz o tamanho da resposta e o teto; a recusa fica no registro (decisão 124).
- **Um app pede um banco que não pode ler.** O núcleo confere a permissão e, sem ela, não lê. O pedido fica no registro, e o owner da organização e o auditor podem vê-lo depois (decisão 5).
- **Um app pede para alterar um dado.** O mAIg não altera, e o pedido fica no registro (decisão 5).
- **O owner da organização retira uma permissão por engano.** O app deixa de ler aquele banco. Nada se perdeu no banco nem no cadastro: devolver a permissão resolve.
- **O owner da organização apaga o cadastro de um banco por engano.** A senha sai do cofre, e nenhum app lê mais o banco. Para voltar, é preciso cadastrar o banco de novo, com a senha, e devolver as permissões.
- **Uma organização vizinha, na mesma instância.** Não enxerga os bancos, as senhas nem as permissões da outra (decisão 9).
- **Uma instalação da Maind é invadida.** No Horus, numa instalação que atende muitas organizações, uma invasão expõe as senhas e as regras de todas elas, e quem não aceita esse risco instala na própria rede (D-272 do Horus). O mAIg decidiu diferente em parte: o cofre de cada organização fica cifrado com a chave dela, e quem copia o disco não lê senha nenhuma; fica como risco aceito o que estiver em uso com a máquina ligada (decisão 57). Quem não aceita esse risco instala o mAIg na própria rede.

**Quem é avisado.** Quando um banco para de responder, é avisado o owner da organização, que cuida dele, no console e por e-mail, sem dado nenhum, para que alguém conserte antes de as pessoas reclamarem (decisões 64 e 71). Na onda 1.0, o destinatário é fixo: o aviso vai aos owners da organização, e ninguém o desliga nem o redireciona; as preferências de aviso chegam na onda 1.1 (decisão 126). Confirma o ponto de partida do Horus (D-240 do Horus).

### O que entra em cada onda

A primeira versão do mAIg sai em duas ondas, a 1.0 e a 1.1, e a segunda versão vem depois (decisões 92 e 95). A tabela diz em que onda chega cada capacidade desta mf, com as decisões que a sustentam. "Não entra" quer dizer que a capacidade não faz parte da primeira versão e não tem versão marcada. Nesta mf, tudo o que entra na primeira versão entra na onda 1.0.

| Capacidade | Onda | Decisões | Por quê |
| --- | --- | --- | --- |
| O owner da organização cadastra o banco; a senha vai ao cofre e nunca volta à tela | onda 1.0 | 5, 67, 92 | A senha do banco não pode passar pela Maind nem pela nuvem do app. |
| Cofre cifrado por organização | onda 1.0 | 57, 92 | Sem a cifra, quem tem acesso ao disco lê as senhas. |
| Só leitura, com duas travas, e teste do usuário do banco no cadastro | onda 1.0 | 5, 61 | A TI não instala algo que possa gravar no banco de produção. |
| Limite de tempo e de linhas para cada consulta; a consulta que passa do limite é interrompida, e o pedido falha com mensagem clara | onda 1.0 | 61, 124 | Uma consulta pesada não pode derrubar o banco da empresa, e um resultado parcial não pode passar por inteiro. |
| Permissão de leitura de cada banco, app por app, dada e retirada pelo owner da organização | onda 1.0 | 5 | Um app só lê o banco que lhe foi liberado. |
| Permissão pelo banco inteiro; quem quer recorte usa um usuário restrito, criado pela TI no próprio banco | onda 1.0 | 73 | O recorte fino fica no banco, que é quem sabe fazê-lo. |
| O núcleo sugere as colunas sensíveis, já marcadas; o owner da organização confere no cadastro do banco e marca ou desmarca, num ato sensível | onda 1.0 | 43, 67, 111 | A máscara da onda 1.0 só funciona se alguém disser quais colunas mascarar, e a sugestão já marcada é o padrão seguro. |
| Trocar a senha de um banco num lugar só e apagar o cadastro de um banco | onda 1.0 | 5, 67 | As senhas mudam, e o que não se usa mais não deve ficar guardado. |
| Aviso ao owner da organização quando um banco para de responder | onda 1.0 | 64, 71, 126 | Quem resolve precisa saber antes de as pessoas reclamarem. |
| Leitura de bancos de tabelas consultados por SQL, a linguagem de consulta desses bancos, dentro de uma lista única, feita dos tipos de banco que os clientes de hoje do primeiro app já usam; o banco fora da lista é recusado no cadastro | onda 1.0 | 43, 61, 110 | O teto, a máscara e os limites da consulta falam de linhas e colunas, e a primeira versão não pode deixar de fora o banco de quem já é cliente. |
| Leitura de outros tipos de fonte: bancos de documentos, arquivos, planilhas, serviços | não entra | 110 | As regras de proteção da primeira versão não foram pensadas para elas. |
| Gravar nos bancos da empresa | não entra | 5, 61 | O mAIg só lê. |

## Prova de valor

Prova de valor proposta pelo PO; o dono da Maind ainda não a confirmou.

**Demonstração 1: a TI do cliente confere que a senha não saiu do cofre e que o banco não mudou.**

1. Paulo, owner da organização da Farma Vida, cadastra o banco de vendas no console do mAIg e dá ao Horus a permissão de lê-lo.
2. Ana faz ao Horus uma pergunta sobre as vendas e recebe a resposta.
3. Marta, da TI do cliente, confere no firewall que nenhuma porta de entrada foi aberta.
4. Marta procura a senha nas telas do Horus e no console do mAIg, depois de guardada, e não a encontra.
5. Marta confere, pelas ferramentas do próprio banco, que o usuário do mAIg só fez leituras.

**Demonstração 2: a permissão retirada aparece no registro.**

1. Paulo retira do Horus a permissão de ler o banco de estoque.
2. Ana pergunta ao Horus sobre o estoque, e o Horus não consegue os dados.
3. Renata, a auditora, encontra no registro o pedido recusado: o app, a pessoa, o banco e a hora.
4. Renata tenta devolver a permissão e não consegue: o auditor só lê.

O que as duas mostram a quem é de fora: o banco continua onde estava, a senha está num lugar só, a permissão é do cliente e tudo fica anotado. Nada disso depende da palavra da Maind.

## Retorno para o negócio

- **Entrar.** Hipótese: os bancos estão no centro da aprovação de segurança, e são o que a TI do cliente mais examina antes de dizer sim. Por isso a TI aprovaria mais depressa um caminho só de leitura, com a senha num cofre sob o controle da empresa, do que um produto que guarda a senha consigo.
- **Expandir.** Um banco cadastrado para o Horus serve a um segundo app da mesma organização. Liberar esse banco para o novo app é dar uma permissão, sem novo cadastro e sem nova aprovação do zero. Hipótese: o segundo app chega ao uso mais depressa, o que apoia a estratégia de entrar e expandir.
- **Reter.** Quando um app para e volta, as permissões dele sobre os bancos voltam como estavam (decisão 14). Hipótese: uma renovação sem retrabalho pesa a favor de renovar.
- **Custo de atender.** A equipe da Maind dá suporte sem guardar, por rotina, as senhas dos clientes. Hipótese: há menos risco para a Maind e menos trabalho no suporte do que se ela cadastrasse os bancos por cada cliente.
- **Abrir clientes pequenos.** A hospedagem da Maind deixa usar o Horus sem instalar nada, desde que o banco seja alcançável pela Maind. Hipótese: parte dos clientes pequenos aceita essa troca, e os que não aceitam instalam o mAIg em casa.

## O que não inclui

- **Quem vê o quê dentro de um banco, pessoa por pessoa.** É do app, e não do mAIg, que libera o banco inteiro ao app (decisões 60 e 73). No Horus, fica numa mf da versão 2.1 do Horus (MF-106 do Horus).
- **Como a pergunta vira consulta e resposta.** É o ciclo de análise do Horus, que roda no módulo do app (MF-109).
- **A tela do cadastro dos bancos.** É do console de configuração (MF-110).
- **Os papéis e a conferência das permissões.** São da segurança e permissões (MF-101).
- **A consulta ao registro e a guarda dele.** São do registro e auditoria (MF-102).
- **As chaves de IA, os modelos e o custo da IA.** São da governança da IA (MF-106).
- **As ferramentas extras que a empresa dá à IA.** São os servidores MCP, os programas da empresa que seguem um padrão para dar à IA ferramentas como consultar um sistema interno; ficam para a segunda versão (MF-111).
- **Pausar, retirar e desinstalar um app.** É da gestão dos apps (MF-104).
- **A conexão com a Maind.** É da conexão de dentro para fora (MF-108).
- **Ler outros tipos de fonte.** Bancos de documentos, arquivos, planilhas e serviços não entram na primeira versão, e nenhuma versão está marcada para eles (decisão 110).
- **Gravar nos bancos da empresa.** Fica fora do mAIg, que só lê (decisão 5).

## Depende de

- `MF-101:Segurança e permissões` — é ela que sabe quem é o owner da organização, o único que cadastra bancos e dá permissões, e que confere, a cada pedido, se o app pode ler aquele banco.
- `MF-102:Registro e auditoria` — cada leitura precisa ficar anotada; sem o registro, a regra "o mAIg confere e anota" fica pela metade, e o auditor não tem o que conferir.
- `MF-110:Console de configuração` — o cadastro dos bancos, a troca da senha e as permissões se fazem no console.
- `MF-104:Gestão dos apps`: a permissão de acessar um banco vale para um app liberado na organização e fica guardada quando o app para.

## Ponto de partida no Horus

- **Os dados chegam por uma peça separada.** No Horus, isso já foi decidido assim, e vale no mAIg, onde o módulo roda dentro do mAIg e o mAIg roda em qualquer infraestrutura: toda organização chega aos dados por uma peça separada da parte do Horus na nuvem da Maind (decisão 4, decisões 9 e 48). Essa peça é o middleware, a peça entre as telas do Horus e os dados da empresa, que deu origem ao mAIg. O lugar onde ela fica não importa para o produto, desde que a rede a alcance. Ela pode ficar na Maind ou, se a organização preferir, na casa dela, para garantir que os bancos não fiquem expostos para fora (D-258 do Horus).
- **Só a pergunta e a resposta pronta saem.** No Horus, pelo middleware, o que sai da casa do cliente para a Maind é só a pergunta e a resposta pronta, e o owner da organização pode permitir mais, como o comando da consulta e os dados em planilha, cada saída por uma permissão própria (D-189, D-196 do Horus). Vale no mAIg, com as regras dele: a resposta pronta tem um teto de 200 linhas, com as colunas sensíveis mascaradas, e a planilha vai direto do mAIg ao navegador da pessoa, sem passar pela nuvem do app (decisões 43 e 74). A consulta e a planilha chegam na onda 1.1 (decisão 95).
- **O cadastro fica fora das telas do app.** No Horus, isso já foi decidido assim, e vale no mAIg: os bancos são configurados sempre na tela de configuração do middleware, e não nas telas do Horus, e assim as senhas ficam fora da parte do Horus na nuvem (decisão 67). A mesma entrada punha a equipe da Maind como quem configura na hospedagem da Maind, e essa parte foi substituída pela entrada do item seguinte (D-265 do Horus).
- **Quem configura é o owner da organização.** No Horus, isso já foi decidido assim, e vale no mAIg: em qualquer hospedagem, quem configura os bancos é o owner da organização, e a equipe da Maind só dá suporte, antes e depois da venda (decisões 67 e 68, D-273 do Horus). A consequência que o Horus registrou, de que quem opera a instalação da Maind segue podendo, tecnicamente, alcançar as senhas, e de que a promessa de que a Maind não vê só vale por inteiro com a instalação na casa do cliente, não vale no mAIg: o cofre fica cifrado com a chave da organização (decisão 57).
- **Quem é avisado quando uma fonte para.** No Horus, isso já foi decidido assim, e vale no mAIg: quando uma fonte de dados deixa de conectar, é avisado o owner da organização (decisão 71, D-240 do Horus).

## O que ainda falta decidir

- **Falta o arquiteto do mAIg definir os limites de tempo e de linhas de cada consulta e como o mAIg testa, no cadastro, se o usuário do banco consegue gravar.** *O que está em jogo:* as duas travas e o limite estão decididos (decisão 61); um limite apertado demais corta perguntas comuns, um folgado demais deixa uma consulta pesada derrubar o banco, e um teste mal feito aceita um usuário que grava.
- **Falta o arquiteto do mAIg levantar e escrever nesta mf os nomes dos bancos da lista única que a primeira versão lê.** *O que está em jogo:* a regra está decidida: só bancos de tabelas consultados por SQL, de uma lista única, igual para todos os apps, feita dos tipos que os clientes de hoje do primeiro app já usam (decisão 110). Faltam os nomes: sem eles, a TI do cliente não sabe, antes de contratar, se o banco dela entra, e cada tipo a mais é mais trabalho no núcleo antes da primeira venda.
- **Falta o arquiteto do mAIg definir como o núcleo monta a sugestão das colunas sensíveis e quando a refaz.** *O que está em jogo:* a coluna que o núcleo não sugerir e o owner da organização não marcar sai às claras; uma sugestão fraca deixa passar um dado sensível, e uma sugestão que não se refaz perde a coluna nova que o banco ganhar (decisão 111).
- **Também depende, e está explicado em outras mfs:** como os módulos dos apps ficam isolados (MF-109). O que sai além da resposta pronta já foi decidido: só a consulta e a planilha, se o owner da organização liberar (decisão 74).

## Decisões do PO para discutir

- **Decisão:** a senha, depois de guardada, não aparece de volta para ninguém, nem para o owner da organização que a cadastrou; para mudá-la, digita-se a nova. *Por que:* é o jeito mais simples de cumprir "nenhum app toca uma senha" sem abrir exceção para as pessoas. *Alternativa:* deixar o owner da organização ver a senha guardada. *Reabrir se:* a TI do cliente precisar conferir no mAIg qual senha está cadastrada.
- **Decisão:** o cadastro do banco é da organização, e cada app recebe a sua permissão de leitura. Desinstalar um app tira só as permissões dele; apagar o banco tira a senha do cofre e a leitura de todos os apps. *Por que:* as páginas da visão já dizem que o owner da organização configura os bancos da organização e diz quais apps leem cada um; um cadastro por banco evita repetir a senha. *Alternativa:* um cadastro por app, com a senha repetida em cada um. *Reabrir se:* um cliente quiser senhas diferentes para cada app no mesmo banco.
- **Decisão:** o usuário do banco que só lê entrou no exemplo como cautela da TI do cliente, e não como regra do cadastro; virou ponto em aberto do arquiteto do mAIg. *Por que:* as decisões só dizem que o mAIg lê; como garantir é do arquiteto. *Alternativa:* exigir o usuário que só lê já nesta mf. *Reabrir se:* o arquiteto do mAIg definir a garantia. Foi decidido depois: o usuário que só lê é regra do cadastro, testado pelo mAIg e recusado se conseguir gravar (decisão 61).
- **Decisão:** um pedido que falha, por senha errada ou banco fora do ar, fica no registro como todo pedido. *Por que:* a página do núcleo diz que todo pedido de um app ao núcleo entra no registro. *Alternativa:* anotar só os pedidos atendidos e os recusados por falta de permissão. *Reabrir se:* a mf do registro definir outra regra para os pedidos que falham.
- **Decisão:** além do caminho até o banco na hospedagem da Maind, que já era ponto em aberto, cinco pontos novos foram abertos aqui: como se garante o "só leitura", os tipos de banco, a permissão menor que o banco inteiro, a TI do cliente cadastrar a senha e o aviso quando um banco para. Quatro deles ficaram com o dono da Maind, e não com o arquiteto do mAIg. *Por que:* nenhuma decisão os responde, e cada um muda o que o cliente consegue fazer na primeira versão. *Alternativa:* deixá-los todos para o arquiteto do mAIg. *Reabrir se:* o arquiteto do mAIg mostrar que algum deles é só técnico. Foi decidido depois: os cinco foram fechados, cada um por uma decisão: o só leitura (decisão 61), a senha cadastrada só pelo owner da organização (decisão 67), o aviso (decisão 71), a permissão pelo banco inteiro (decisão 73) e os tipos de banco (decisão 110).
- **Decisão:** o ponto sobre deixar sair mais do que a pergunta e a resposta pronta, que vem do Horus, ficou na execução isolada dos apps, e esta mf só aponta para ele; a regra do Horus aparece aqui só no ponto de partida. *Por que:* quem monta o que volta à nuvem é o módulo, e cada tema vive numa mf só. *Alternativa:* tratá-lo aqui, porque o que sai são os dados lidos dos bancos. *Reabrir se:* o dono da Maind preferir ver o assunto junto dos bancos.
- **Decisão:** em "Quem ganha", além da TI do cliente e do owner da organização, entraram o auditor, a equipe da Maind e a pessoa que usa o app, como ganhos menores. *Por que:* cada um muda de fato com esta mf. *Alternativa:* só os dois papéis da lista das mfs. *Reabrir se:* o dono da Maind preferir a lista curta.
- **Decisão:** a prova de valor tem duas demonstrações: a TI do cliente confere que a senha não saiu e que o banco não mudou; o auditor vê a permissão retirada no registro. *Por que:* são coisas que alguém de fora confere sem depender da palavra da Maind. *Alternativa:* uma demonstração só, com a pergunta respondida. *Reabrir se:* o dono da Maind quiser também uma demonstração na hospedagem da Maind, o que depende do ponto em aberto sobre o caminho até o banco. Foi decidido depois: o caminho é o endereço fixo da Maind, com a conversa cifrada e o usuário que só lê (decisão 91).
- **Decisão:** usar duas entradas do Horus fora da lista indicada para esta mf: o risco de uma invasão da instalação compartilhada (D-272 do Horus) e quem é avisado quando uma fonte de dados para (D-240 do Horus). *Por que:* a primeira mostra o preço da hospedagem na Maind para as senhas, e a segunda é o ponto de partida do aviso quando um banco para de responder. *Alternativa:* ficar só nas entradas da lista. *Reabrir se:* o dono da Maind preferir o ponto de partida só com as entradas da lista.
- **Decidido pelo dono da Maind em 11/11/2026:** o cofre e o registro de cada organização ficam cifrados com uma chave da organização, que quem opera a máquina não alcança (decisão 57). O tópico do cofre ganhou esse parágrafo.
- **Decidido pelo dono da Maind em 11/11/2026:** o "só leitura" tem duas travas, o mAIg e o usuário do banco que só lê, testado no cadastro e recusado se conseguir gravar, e cada consulta tem limite de tempo e de linhas (decisão 61). O ponto do arquiteto passou a ser os valores dos limites e o jeito de testar o usuário.
- **Decidido pelo dono da Maind em 11/11/2026:** só o owner da organização cadastra a senha de um banco; a TI do cliente a passa a ele e não ganha um papel próprio (decisão 67). O ponto em aberto saiu desta mf.
- **Decidido pelo dono da Maind em 11/11/2026:** quando um banco para de responder, é avisado o owner da organização, no console e por e-mail (decisão 71). O ponto em aberto saiu desta mf.
- **Decidido pelo dono da Maind em 11/11/2026:** a permissão de um app vale pelo banco inteiro, e o recorte se faz com um usuário mais restrito no próprio banco, criado pela TI do cliente (decisão 73). O ponto em aberto saiu desta mf.
- **Decidido pelo dono da Maind em 11/11/2026:** na hospedagem da Maind, o banco do cliente aceita conexão só do endereço fixo da Maind, cifrada e com o usuário que só lê (decisão 91). O ponto do arquiteto do mAIg sobre o caminho até o banco saiu desta mf.
- **Decidido por delegação do dono da Maind em 11/11/2026:** a primeira versão sai em duas ondas, a 1.0 e a 1.1, e a segunda versão vem depois; cada capacidade desta mf tem a onda marcada no tópico "O que entra em cada onda". A regra que resume o recorte: a onda 1.0 liga e para; a onda 1.1 desfaz e encerra (decisão 95).
- **Decidido por delegação do dono da Maind em 11/11/2026:** a primeira versão só lê bancos de tabelas consultados por SQL, de uma lista única do mAIg, igual para todos os apps, feita dos tipos que os clientes de hoje do primeiro app já usam. O banco de um tipo fora da lista é recusado no cadastro, com mensagem clara, e um tipo novo entra por versão nova. Outros tipos de fonte, como bancos de documentos, arquivos, planilhas e serviços, não entram. Entra na onda 1.0 (decisão 110).
- **Decidido por delegação do dono da Maind em 11/11/2026:** o núcleo sugere as colunas sensíveis de cada banco, já marcadas, e o owner da organização confere no cadastro do banco e marca ou desmarca. Marcar ou desmarcar é ato sensível: fica no registro e avisa os outros owners da organização e o auditor. A coluna marcada sai sempre mascarada, para todos os apps. Entra na onda 1.0 (decisão 111).
- **Decidido por delegação do dono da Maind em 11/11/2026:** quando a resposta passa do teto, o núcleo recusa a resposta inteira, com mensagem clara, que diz o tamanho da resposta e o teto, e nunca entrega um resultado parcial como se fosse inteiro; a recusa fica no registro, com a contagem. A consulta que passa do limite de tempo ou de linhas é interrompida, e o pedido falha com mensagem clara. Entra na onda 1.0 (decisão 124).
- **Decidido por delegação do dono da Maind em 11/11/2026:** na onda 1.0, cada aviso tem destinatário fixo, aparece sempre no console e vai por e-mail, sem dado nenhum. Os avisos de segurança vão aos owners da organização e ao auditor; a queda de um banco e de uma IA, o limite de gasto, a tarefa marcada que parou e o fim do contrato vão aos owners da organização; o certificado da organização perto de vencer vai aos owners da organização e aos administradores da instância; e os avisos da instância vão a todos os administradores da instância. A lista "o que a organização permite" e as preferências de aviso chegam na onda 1.1 (decisão 126).
