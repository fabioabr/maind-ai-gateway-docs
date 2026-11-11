# MF-109:Rodar cada app isolado dentro do mAIg

> Cada app da Maind tem uma parte que trabalha dentro do mAIg, perto dos dados da empresa. Essa parte roda separada de tudo o mais e só chega aos dados e à inteligência artificial pedindo ao próprio mAIg, que confere e anota cada pedido.

**Também chamada de:** Execução isolada dos apps · **Versão do mAIg:** 1ª · **Classe:** essencial · **Situação:** rascunho do PO

## Em uma frase

O mAIg põe para rodar dentro dele a parte de cada app que precisa trabalhar perto dos dados da empresa, chamada módulo, e a mantém fechada num compartimento próprio, de onde ela só alcança os dados e a inteligência artificial (IA) pedindo ao núcleo do mAIg (decisão 4).

O mAIg, ou Maind AI Gateway, é a plataforma da Maind que fica entre os produtos da Maind e os dados e a IA da empresa cliente; "gateway" quer dizer portão. Cada produto da Maind entra nele como um **app**, e o primeiro é o Maind Horus, em que as pessoas fazem perguntas sobre os dados da empresa. O **núcleo** é o que vem pronto no mAIg e serve a todo app (decisões 3 e 5).

**Por que esta mf existe.** Todo app tem duas partes: uma fora do mAIg, com as telas, e um módulo, que roda dentro dele (decisão 4). Sem esta mf, o mAIg só saberia registrar apps, e o trabalho com os dados sairia da casa do cliente. Com ela, o trabalho fica perto dos dados, e o módulo não vira uma porta dos fundos: não tem senha, não tem chave e não tem caminho próprio até nada.

## Quem ganha

- **TI do cliente.** É a equipe de tecnologia da empresa cliente, que cuida dos servidores e da rede dela. Ganha a garantia de que o programa da Maind que roda dentro da casa dela não alcança nada sozinho. Avalia uma vez o jeito como todo módulo roda, e esse jeito vale para cada app que vier depois.
- **Os apps da Maind.** Cada app ganha um lugar pronto para trabalhar perto dos dados, com os serviços do núcleo à mão. Não traz a própria segurança, nem o próprio cofre, o lugar trancado onde ficam as senhas dos bancos, nem o próprio registro de tudo o que acontece. Traz só o que é dele: no Horus, o jeito de transformar uma pergunta em resposta.
- **De forma indireta, o owner da organização e a pessoa que usa o app.** A organização é o espaço de um cliente dentro do mAIg, com os seus apps e as suas regras. O owner da organização, quem responde por ela, sabe que o app só alcança o que ele liberou. A pessoa que usa o app, no Horus a pessoa que pergunta, recebe a resposta pronta sem que os dados crus da empresa vão para a nuvem da Maind.

## A decisão que passa a ser possível

- **A TI do cliente passa a poder dizer sim a um programa da Maind rodando dentro da rede dela.** Esse programa trabalha num compartimento fechado e só fala com o núcleo, que ela aprovou e cujas regras a empresa controla.
- **A Maind passa a poder levar o trabalho de cada app até os dados**, em vez de levar os dados até o app.
- **A dor que some:** cada app novo deixa de trazer um jeito novo de rodar dentro da casa do cliente, que a TI teria de avaliar do zero.

## Como funciona

### O módulo: a parte do app que trabalha dentro do mAIg

**Em resumo:** todo app tem duas partes. Uma fica fora do mAIg, com as telas; a outra, o módulo, roda dentro dele, isolada, e só usa os serviços do núcleo (decisão 4).

**Quem é quem.**

- **A parte de fora** roda fora do mAIg e fica registrada nele com um certificado e com permissões. O certificado é uma espécie de carteira de identidade digital, que prova quem é o app e não se falsifica sem que se perceba. As permissões são a lista do que o app pode pedir. No Horus, a parte de fora roda na nuvem da Maind, os computadores da Maind na internet, onde ficam as telas.
- **O módulo** é a parte interna do app, que roda dentro do mAIg. No Horus, é onde a pergunta vira resposta: o trabalho com o modelo de IA, o programa que entende a pergunta e escreve a resposta, e as consultas aos dados acontecem ali.
- **O núcleo** reúne os serviços prontos para todos os apps: a segurança e as permissões, o registro, os certificados, a gestão dos apps, as conexões com os dados, a governança da IA e, na segunda versão, os servidores MCP, que dão à IA ferramentas extras. Governança é o conjunto de regras sobre quem usa o quê, quanto e com que registro.
- **Isolado** quer dizer separado dos outros módulos e do resto do mAIg, para que um módulo não prejudique os outros nem leia o que não deve (decisão 4).

**Por que é assim.** As duas partes comportam o Horus como ele já foi desenhado: as telas na nuvem e o trabalho perto dos dados. E os dados não saem crus da casa do cliente: para fora vão a pergunta e a resposta pronta, que pode conter dados da empresa, até o teto de 200 linhas e com as colunas sensíveis mascaradas, e só sai mais o que o owner da organização liberar. Essa regra vem do Horus (D-189 do Horus), e vale no mAIg (decisão 74, decisões 34 e 43).

**Os caminhos que ficaram de fora.** Só registrar o app, que rodaria inteiro fora do mAIg, faria o trabalho com a IA sair da casa do cliente e enfraqueceria a governança. Pôr o app inteiro dentro do mAIg contradiz o Horus estar sempre na nuvem da Maind, e cada cliente viraria uma instalação completa do app (decisão 4).

**O que se abre mão.** O mAIg precisa saber rodar e isolar módulos de apps. É mais trabalho no núcleo, e é o maior custo dele (decisão 4).

> **Analogia:** é como um escritório de contabilidade que atende na própria sede, mas põe um contador para trabalhar numa sala da empresa cliente, com os papéis que ela entrega ali dentro; à sede vai só o relatório pronto. **Onde a analogia para:** o contador poderia abrir uma gaveta por conta própria; o módulo não alcança nada sozinho e pede cada dado e cada uso da IA ao núcleo, que confere e anota.

**Instalar não é rodar.** Instalar um app é registrar a parte de fora e implantar o módulo, isto é, pô-lo dentro do mAIg, pronto para trabalhar. A instância é cada instalação física do mAIg. Quem instala o app é o administrador da instância, a pessoa que cuida dessa instalação, uma vez só por instância (decisão 10). Esse passo é da gestão dos apps (MF-104). Esta mf cuida do que vem depois: como o módulo roda e o que ele pode e não pode fazer.

**Em que onda.** O módulo isolado, com a porta única dos serviços do núcleo, entra na onda 1.0 da primeira versão: é o que impede um app de pegar mais do que lhe foi liberado (decisões 4 e 5). O que chega em cada onda está no tópico "O que entra em cada onda" (decisão 95).

### Onde a pergunta vira resposta: o módulo do Horus

**Em resumo:** no Horus, a pergunta chega ao módulo pela conexão que o mAIg mantém aberta. O módulo pede ao núcleo os dados e a IA de que precisa, monta a resposta e devolve só a resposta pronta.

**Quem é quem no exemplo.** A Farma Vida é uma rede de 40 farmácias com o mAIg na própria rede. Marta, da TI do cliente, é o administrador da instância. Paulo, diretor de operações, é o owner da organização. Renata, da área de segurança, foi nomeada auditora por Paulo, e o auditor só lê o registro (decisão 12). Ana, gerente comercial, é a pessoa que usa o app.

**Exemplo.** Ana quer saber quanto cada farmácia vendeu em outubro.

1. Ana digita a pergunta nas telas do Horus, na nuvem da Maind.
2. A parte de fora do Horus passa a pergunta ao mAIg da Farma Vida pela conexão que o próprio mAIg abriu para fora e mantém aberta. Ninguém de fora abriu uma conexão para dentro da rede da Farma Vida (decisão 6).
3. O mAIg entrega a pergunta ao módulo do Horus, com a indicação de que ela é de Ana, da organização Farma Vida.
4. O módulo pede ao núcleo os dados de vendas de outubro. O núcleo confere se o Horus, nesta organização, pode ler o banco de vendas. Pode, porque Paulo deu essa permissão.
5. O núcleo tira a senha do cofre, lê o banco só para consulta e entrega os dados ao módulo. A senha não sai do núcleo (decisão 5).
6. O módulo pede a IA ao núcleo. O provedor de IA é a empresa que oferece o modelo, e a chave é a senha de acesso a ele, que pertence ao cliente. O núcleo confere se o modelo é permitido ao Horus e se ele está dentro dos limites, pede ao provedor com a chave da Farma Vida e conta o custo na conta do Horus. A chave não sai do núcleo (decisão 5).
7. Cada pedido fica no registro: o quê, por quem e quando.
8. O módulo monta a tabela de vendas por farmácia. Os dados crus de vendas ficam dentro do mAIg.
9. O módulo devolve só a resposta pronta, que sai pela mesma conexão. Ana vê a tabela na tela.

**O que entrou e o que saiu.** Entre a nuvem da Maind e o mAIg passaram só a pergunta, de ida, e a resposta pronta, de volta, dentro do teto de 200 linhas (decisões 34 e 43). A senha do banco e a chave da IA não saíram do núcleo (decisão 5).

**A ressalva da hospedagem na Maind.** A instância pode rodar na infraestrutura do cliente ou na da Maind (decisão 9). Na da Maind, o módulo roda lá também, o banco precisa ser alcançável pela Maind, e os dados lidos vão da rede da empresa até a instância da Maind. À parte de fora do app continuam chegando só a pergunta e a resposta pronta. Mas a promessa de que os dados não saem crus da casa do cliente vale por inteiro só com o mAIg na infraestrutura do cliente (decisão 9).

**O que o módulo devolve.** Já está decidido o que o módulo pode devolver à parte de fora do app: a resposta pronta, até o teto de 200 linhas e com as colunas sensíveis mascaradas, e só o que o owner da organização liberar além dela, como mostra o tópico do que volta à nuvem do app (decisões 43 e 74). Na onda 1.0, volta só a resposta pronta; a consulta devolvida à tela e a planilha, que são o que o owner da organização pode liberar a mais, chegam na onda 1.1 (decisão 95).

### A única porta do módulo: os serviços do núcleo

**Em resumo:** o módulo não alcança nada por conta própria. Para cada dado, cada uso da IA e cada anotação, ele pede ao núcleo, que confere a permissão, faz o pedido por ele e anota no registro.

**O que o módulo pode pedir ao núcleo.**

- **Conferir uma permissão:** se o app pode fazer aquilo naquela organização (MF-101).
- **Pedir dados:** o núcleo lê o banco por ele, só para consulta (MF-105).
- **Pedir a IA:** o núcleo fala com o provedor por ele, dentro dos modelos e limites permitidos (MF-106).
- **Anotar no registro:** o registro, também chamado de log, é a anotação de tudo o que acontece, para a auditoria, a conferência dessa anotação depois (MF-102).
- **Na segunda versão, usar os servidores MCP:** MCP é um padrão que dá à IA ferramentas extras, e um servidor MCP é o programa da empresa que as oferece, como um que consulta um sistema interno (MF-111).

**O que o módulo não faz.**

- **Não vê uma senha de banco nem uma chave de IA,** nem vai direto ao banco ou ao provedor de IA (decisão 5).
- **Não altera os bancos da empresa:** o mAIg só lê (decisão 5).
- **Não recebe nada direto de fora.** A pergunta chega pela conexão do mAIg, depois de o núcleo conferir o certificado da parte de fora do app (decisões 4 e 6).
- **Não conversa com o módulo de outro app.** Cada módulo fica no seu compartimento (decisão 4).
- **Não muda configuração nenhuma.** Quais bancos o app lê e quais IAs usa são escolhas do owner da organização, feitas no console do mAIg (MF-110).
- **Não tem saída própria para a internet.** O único caminho dele para fora são os serviços do núcleo. Um app que precise pesquisar na web pede ao provedor de IA que faça a pesquisa, sob a governança da IA (decisão 63, MF-106).

**Por que é assim.** Nenhum app toca uma senha de banco nem uma chave de IA: pede ao mAIg, que confere a permissão e anota no registro (decisão 5). E uma porta só é fácil de vigiar: a TI do cliente avalia uma vez o caminho que todo módulo é obrigado a usar.

> **Analogia:** é como um laboratório de análises com uma janela de passagem: o técnico lá dentro recebe as amostras pela janela e devolve só o laudo, sem sair da sala nem receber visitas. **Onde a analogia para:** no laboratório, quem está do lado de fora escolhe o que passa pela janela; no mAIg, é o módulo que pede, e o núcleo confere se ele pode antes de entregar qualquer coisa, e anota tudo.

**Exemplo.** O módulo do Horus pede para ler um banco que Paulo não liberou.

1. Ana pergunta quantas pessoas trabalham em cada farmácia. A resposta precisaria do banco de pessoal da Farma Vida.
2. O módulo do Horus pede ao núcleo os dados desse banco.
3. O núcleo confere a permissão: Paulo não deu ao Horus a leitura do banco de pessoal.
4. O núcleo não entrega os dados, e o pedido recusado fica no registro.
5. O módulo não tem como dar a volta: não tem a senha do banco nem um caminho próprio até ele.
6. O que Ana vê nesse caso é decidido pelo Horus, e não pelo mAIg, porque é a lógica do app.
7. Mais tarde, Renata e Paulo veem o pedido recusado no registro.

**Quando dá errado.** O que garante que o módulo não encontra uma volta é o isolamento. Como o mAIg o cumpre é o primeiro ponto de "O que ainda falta decidir".

### O que volta à nuvem do app e o que ela guarda

**Em resumo:** a resposta pronta volta à nuvem do app, porque é lá que ficam as telas. A nuvem guarda só a receita de cada painel, nunca o resultado, e o que se guarda para abrir mais rápido fica no mAIg. (decisões 34 e 35)

**Quem é quem.**

- **A resposta pronta** é o que a pessoa vê na tela: uma tabela, um gráfico, um número. Pode conter dados da empresa.
- **Um painel** é uma tela montada pela pessoa no app, com vários gráficos, que ela abre de novo quando quiser.
- **A receita de um painel** é o que se guarda dele: que dados buscar, que gráfico desenhar e que filtros usar. Não traz número nenhum.

**Como funciona.** A resposta pronta volta pela ligação à parte de fora do app, que a mostra na tela e não a grava: na nuvem da Maind, ela só passa pela memória (decisões 34 e 35). Quando alguém abre um painel, a parte de fora lê a receita e pede os dados ao mAIg pela ligação. O mAIg pode guardar por um tempo o último resultado de cada painel, para ele abrir rápido e o banco não receber a mesma consulta várias vezes, e antes de entregá-lo confere, como em todo pedido, se quem pediu pode ver aqueles dados (decisão 35). O resultado guardado entra na onda 1.0 (decisão 95).

**O teto da resposta.** Cada app tem um teto de 200 linhas por resposta, e as colunas sensíveis, como CPF, e-mail, telefone e salário, chegam mascaradas. O normal é ir à tela um dado consolidado, como um total por loja ou por mês, e por isso o teto quase nunca atrapalha. O owner da organização sobe o teto de cada app no console, o que avisa na hora os outros owners da organização e o auditor (decisão 54, MF-110), o registro anota o tamanho de cada resposta (MF-102), e o núcleo confere o teto antes de a resposta sair pela ligação, para que a promessa não dependa só do app. (decisão 43) O teto e a máscara entram na onda 1.0 (decisão 92).

**Quem diz que uma coluna é sensível.** O núcleo sugere as colunas sensíveis de cada banco, já marcadas, e o owner da organização confere no cadastro do banco e marca ou desmarca. Marcar ou desmarcar é ato sensível: fica no registro e avisa os outros owners da organização e o auditor (decisão 54). A coluna marcada sai sempre mascarada, para todos os apps. Entra na onda 1.0 (decisão 111). O passo do cadastro está nos bancos da empresa (MF-105). Abre-se mão de: a coluna que o núcleo não sugerir e o owner da organização não marcar sai às claras.

**Quando a resposta passa do teto.** O núcleo recusa a resposta inteira, com mensagem clara, que diz o tamanho da resposta e o teto, e nunca entrega um resultado parcial como se fosse inteiro. A pessoa refaz o pedido com um filtro ou pede um total, ou o owner da organização sobe o teto. A recusa fica no registro, com a contagem. Entra na onda 1.0 (decisão 124). Abre-se mão de: a pessoa não recebe nem as primeiras linhas.

**O limite de pedidos.** O teto vale por resposta. Para que ninguém leve a base em fatias, cada organização tem também um limite de pedidos por pessoa e por app num período, configurado pelo owner da organização no console, com um valor padrão que o arquiteto do mAIg propõe. Acima do limite, o núcleo recusa, com mensagem clara. Perto dele, ou ao atingi-lo, o alerta aparece no painel de alertas do console e chega como aviso de segurança (decisões 85 e 89). O limite entra na onda 1.0 (decisão 92). Abre-se mão de: quem trabalha muito pode esbarrar no limite até o owner da organização ajustá-lo.

**Por que é assim.** A resposta voltar à nuvem é o que deixa os apps funcionarem sem instalar as telas na casa do cliente, e isso não muda (decisão 34). O teto garante que um vazamento na nuvem nunca leve a base inteira (decisão 43). Guardar só a receita mantém na casa do cliente tudo o que é dado da empresa, mesmo o que se guarda para ganhar tempo (decisão 35).

**Como se prova.** Uma empresa de auditoria independente, de um selo que a TI do cliente já conhece, como o SOC 2 ou a ISO 27001, confere que a nuvem dos apps segue a regra. As regras técnicas tornam a promessa verdadeira por construção: a resposta só passa pela memória, e as anotações técnicas da nuvem guardam só o tamanho, a hora e o número do pedido. Ficou de fora cifrar a resposta do mAIg até o navegador, que obrigaria a mudar de lugar o que a nuvem do app faz com os dados. (decisão 36)

**O que se abre mão.** A promessa à TI do cliente passa a ser "sai só a resposta que a pessoa vê, e ela não fica guardada". O mAIg precisa de espaço e de uma regra de validade para o que guarda, nenhum painel abre com a ligação fora, e a auditoria tem um custo anual ainda a cotar. (decisão 34, decisões 35 e 36)

> **Analogia:** uma receita de bolo. A nuvem guarda a receita, e o bolo, que são os números, se faz na hora, na cozinha da empresa, cada vez que alguém abre o painel. **Onde a analogia para:** a cozinha pode guardar o último bolo por um tempo, para servir mais rápido, e quem o guarda é o mAIg, na casa do cliente.

**Exemplo.** Ana, gerente comercial da Farma Vida, montou no Horus um painel de vendas por farmácia.

1. A nuvem do Horus guarda a receita: vendas por farmácia, gráfico de barras, mês atual.
2. Às 9h, Ana abre o painel. A parte de fora do Horus lê a receita e pede os dados ao mAIg pela ligação.
3. O mAIg lê o banco, guarda o resultado por um tempo e devolve a resposta pronta, que aparece na tela de Ana sem ficar gravada na nuvem.
4. Às 9h05, um colega de Ana abre o mesmo painel. O mAIg confere que ele também pode ver as vendas e responde com o resultado que já tinha, e o banco não recebe outra consulta. Esse resultado guardado é um cache: só é entregue a quem pode ver o mesmo dado e nunca entra na cópia de segurança (decisão 93).

**As saídas além da resposta pronta.** Só sai o que o owner da organização liberar, app por app. As duas saídas chegam na onda 1.1 da primeira versão; na onda 1.0, só a resposta pronta sai do mAIg (decisão 95). A consulta feita ao banco volta à nuvem, para a pessoa ver de onde veio o número, e traz só a instrução, sem dado nenhum; o valor de um filtro que toca uma coluna sensível aparece mascarado, e os outros valores, como o período e a cidade, aparecem (decisão 103). A planilha sai direto do mAIg para o navegador da pessoa, sem passar pela nuvem do app e sem esbarrar no teto, pelo mesmo caminho em que o navegador renova o passe; vale o limite de cada consulta, e as colunas sensíveis saem sempre mascaradas: a planilha nunca sai com uma coluna sensível às claras, nem com a liberação do owner da organização (decisões 43 e 111). Liberar uma saída é ato sensível, e cada planilha baixada fica no registro (decisão 54, decisões 61 e 74). Abre-se mão de: dá mais configuração; a planilha baixada sai do controle do mAIg, porque fica no computador da pessoa; quem precisa de uma coluna sensível às claras não a recebe pela planilha; e, na onda 1.0, a pessoa não vê de onde veio o número.

**O que ainda está em aberto.** Quanto tempo vale o resultado guardado e como ele fica protegido está em "O que ainda falta decidir". Como o núcleo monta a sugestão das colunas sensíveis é ponto dos bancos da empresa (MF-105).

### O que o isolamento tem de garantir

**Em resumo:** "isolado" se desdobra em quatro garantias: o módulo não lê o que é de outro, não alcança nada sem o núcleo, não derruba nem trava os outros e só recebe do núcleo o que é da organização de cada pedido.

**As quatro garantias.**

1. **Não lê o que é de outro módulo.** O módulo do Horus não enxerga o que o módulo de outro app guarda ou está fazendo, nem o contrário.
2. **Não alcança nada sem passar pelo núcleo.** Nem o banco, nem o provedor de IA, nem o cofre, nem a configuração da organização.
3. **Não derruba nem trava os outros.** Se um módulo para por um defeito, ou fica lento com um pedido pesado, os outros módulos e o núcleo seguem atendendo.
4. **Só recebe o que é da organização do pedido.** O núcleo só entrega a um pedido o que é da organização dele: os bancos, a chave e o registro dela, como mostra o tópico seguinte. Cada pedido chega com o passe da pessoa, assinado com a chave do certificado da organização, e com a identidade do app, e o núcleo confere os dois (decisão 28, decisões 32 e 56). Não misturar as respostas de duas organizações dentro do módulo é do app (decisão 60).

**Quem é quem.** O arquiteto do mAIg, quem decide como o mAIg é construído, define como cada garantia é cumprida. A TI do cliente as confere quando aprova o mAIg.

**Por que é assim.** A definição de isolado é que um módulo não prejudique os outros nem leia o que não deve (decisão 4). As quatro garantias traduzem essa frase em fatos que a TI do cliente consegue conferir. Sem elas, cada app novo seria um risco novo dentro da rede, e a aprovação de segurança recomeçaria a cada app.

> **Analogia:** são como as paredes corta-fogo de um prédio: se uma sala pega fogo, a parede segura o fogo ali, e as outras salas seguem funcionando. **Onde a analogia para:** a parede corta-fogo só segura um estrago; o isolamento do mAIg também impede, o tempo todo, que um módulo espie ou alcance o que não é dele, mesmo quando nada dá errado.

**Exemplo.** A Farma Vida contrata um segundo app da Maind. Para o exemplo, é o Maind Doc, um assistente que gera documentos de projetos corporativos com IA; ele é só um exemplo possível e não está definido nem planejado.

1. Marta instala o segundo app na instância. O módulo dele roda isolado, separado do módulo do Horus.
2. Um defeito faz o módulo do segundo app parar no meio de uma tarefa.
3. Pela terceira garantia, o módulo do Horus continua atendendo, e Ana recebe a resposta dela.
4. Pela primeira garantia, o módulo do segundo app nunca viu os dados de vendas que o módulo do Horus estava usando.
5. Marta vê o estado de cada app instalado, porque o estado é o que o administrador da instância acompanha, e não vê o registro da organização (decisão 12).

**O que ainda está em aberto.** Como o mAIg isola os módulos, e quanto da máquina cada um pode usar, é o primeiro ponto de "O que ainda falta decidir".

### Um módulo, várias organizações

**Em resumo:** o app é instalado uma vez por instância e pode servir a várias organizações dela. O módulo atende cada pedido em nome de uma organização só, e o núcleo confere as permissões dessa organização.

**Quem é quem.** A organização é o espaço de um cliente dentro da instância, com os seus próprios apps e regras de governança; uma instância atende uma ou mais organizações (decisão 9). A empresa é a companhia cliente, que assina o contrato e pode ter várias organizações (decisão 11).

**Como funciona.** O administrador da instância instala o app uma vez só, e cada organização o libera e configura para si (decisão 10). Cada pedido que chega ao módulo é de uma organização, que o núcleo reconhece pelo passe da pessoa, assinado com a chave do certificado dela, e pela identidade do app (decisão 28, decisões 32 e 56). Quando o módulo pede um dado ou a IA, o núcleo confere as permissões daquela organização, usa o banco e a chave dela e anota no registro dela. Duas organizações na mesma instância não enxergam os apps, as regras nem o registro uma da outra (decisão 9). Várias organizações na mesma instância entram na onda 1.0 (decisão 95).

**Por que importa aqui.** Na infraestrutura da Maind, uma mesma instância pode atender organizações de empresas diferentes (decisão 9). Um mesmo módulo pode receber, no mesmo minuto, pedidos de duas empresas. Um defeito que misturasse esses pedidos seria o pior possível: os dados de uma empresa na resposta da outra. O núcleo garante que cada pedido usa só os bancos, a chave e o registro da própria organização; não misturar as respostas dentro do módulo é do app, e a visão diz o que é de cada um (decisão 60).

**Exemplo.** A Farma Vida tem duas organizações na instância de Marta: a Farma Vida, das farmácias, e a Farma Vida Distribuição, da distribuidora do grupo. Júlia é a owner da organização da Distribuição.

1. A Farma Vida contrata o Horus para as duas organizações, e o contrato lista as duas (decisão 11).
2. Marta instala o Horus na instância uma vez só.
3. Paulo libera o Horus na Farma Vida e permite a leitura do banco de vendas das farmácias. Júlia libera o Horus na Distribuição e permite a leitura do banco de pedidos da distribuidora.
4. Ana e uma pessoa da Distribuição fazem perguntas ao mesmo tempo.
5. O módulo do Horus atende as duas. Para a pergunta de Ana, o núcleo só entrega dados do banco de vendas, com a chave de IA da organização Farma Vida. Para a outra, só dados do banco de pedidos, com a chave da Distribuição.
6. Cada pedido vai para o registro da própria organização. Renata vê os da Farma Vida, e não os da Distribuição.

**O que ainda está em aberto.** Se uma cópia só do módulo atende todas as organizações da instância, ou se cada organização tem a sua cópia rodando à parte, é um ponto novo, do arquiteto do mAIg.

### Quando o módulo atende e quando deixa de atender

**Em resumo:** o módulo só atende uma organização que contratou o app e o liberou. Quando o app para para ela, o módulo deixa de atendê-la.

**O caminho até o módulo atender.** Fechada a contratação, a Maind entrega um kit com o certificado do app, e o mAIg faz o handshake contratual: o aperto de mão digital em que ele se apresenta com o certificado a um servidor da Maind Tech, que confere a contratação e libera o app. Depois, o administrador da instância instala o app, e o owner da organização o libera e configura (decisão 10). Esse caminho é da contratação e da gestão dos apps (MF-103, MF-104). Para uma organização que não liberou o app, ele não funciona, mesmo instalado na mesma instância (decisão 11).

**Quando o app para.** O serviço só se encerra por uma ação manual da Maind ou quando a licença vence sem ser renovada (decisões 13 e 56). Então o módulo deixa de atender aquela organização, e a configuração dela fica guardada até a organização renovar ou o owner da organização apagar (decisão 14). Desinstalado o app, ele sai do mAIg, e os dados dele são excluídos (decisão 15). Apagar a configuração guardada e desinstalar o app só existem a partir da onda 1.1; na onda 1.0, um app só para (decisão 106, MF-104).

### Quando dá errado

**Em resumo:** um pedido sem permissão não é atendido e fica no registro; um módulo com defeito não pode levar os outros junto; um app que faz o que não devia é suspenso; e alguns casos ainda dependem de pontos em aberto.

- **O módulo pede o que não pode.** O núcleo confere a permissão e, sem ela, não atende. O pedido fica no registro, à vista do owner da organização e do auditor (decisão 5).
- **A resposta passa do teto.** O núcleo recusa a resposta inteira, com mensagem clara, que diz o tamanho da resposta e o teto, e nunca entrega um pedaço como se fosse o resultado inteiro. A recusa fica no registro, com a contagem (decisão 124).
- **O módulo para no meio de um pedido.** Pela terceira garantia, os outros módulos e o núcleo seguem atendendo (decisão 4). O que a pessoa que usa o app vê, e se o pedido se perde ou é refeito, ainda está em aberto.
- **A conexão com a Maind cai durante um pedido.** O mAIg reconecta sozinho e guarda o que estava em andamento por um tempo curto, como 15 minutos (decisão 6, decisão 69). O detalhe é da conexão de dentro para fora (MF-108).
- **O módulo faz o que não devia com o que tem permissão de ler.** O isolamento separa um módulo dos outros, mas não controla o que ele faz com o que pode ler. Se uma versão passa a ler dados demais, o administrador da instância suspende o app na instância inteira, sem apagar o registro, que é a prova (decisão 46, MF-104).
- **Um pedido pesado de um app ocupa a máquina.** Pela terceira garantia, ele não pode atrasar os outros apps. Quanto da máquina cada módulo pode usar é parte do primeiro ponto em aberto.
- **A instância inteira fica fora do ar.** O módulo para junto com ela. A pessoa vê um aviso próprio, e não um erro, e a luz de estado em vermelho. A regra vale no mAIg para todos os apps, desde a onda 1.0 (decisão 121). No Horus, o aviso orientava a pessoa a procurar o owner da organização (D-283 do Horus). O detalhe é da conexão de dentro para fora (MF-108).

### O módulo na primeira e na segunda versão

**Em resumo:** na primeira versão, o único módulo é o do Horus. Na segunda, o módulo passa a poder usar os servidores MCP.

**Na primeira versão.** O mAIg sai junto com a versão 2.0 do Horus e traz o núcleo que ela usa (decisão 16). Só recebe apps da Maind: nem sistemas do próprio cliente nem apps de outras empresas rodam como módulo dentro dele, por enquanto (decisão 8). A primeira versão sai em duas ondas, a 1.0 e a 1.1, e a segunda versão vem depois. O módulo roda isolado desde a onda 1.0, com a porta única, o teto da resposta, o resultado guardado dos painéis e o limite de pedidos. Na onda 1.1 chegam as duas saídas além da resposta pronta: a consulta devolvida à tela e a planilha (decisões 92 e 95).

**Na segunda versão.** Os servidores MCP entram no núcleo junto com a versão 2.1 do Horus, e o módulo passa a pedir o uso das ferramentas deles pela mesma porta única (decisão 16).

**O que é do app, e não do mAIg.** A regra de quem vê o quê dentro do banco, pessoa a pessoa, é lógica de cada app, e não do núcleo: no núcleo, a permissão de um app vale pelo banco inteiro (decisões 60 e 73). Essa regra roda no módulo do app. O mAIg dá ao módulo o lugar e os serviços; o que o módulo faz com eles é do app. O primeiro app serve de exemplo: no Horus, a regra chega na versão 2.1 e foi desenhada para rodar no middleware, a peça do Horus que deu origem ao mAIg (D-263 do Horus, MF-106 do Horus).

### O que entra em cada onda

A primeira versão do mAIg sai em duas ondas, a 1.0 e a 1.1, e a segunda versão vem depois (decisões 92 e 95). A tabela diz em que onda chega cada capacidade desta mf, com as decisões que a sustentam. "Não entra" quer dizer que a capacidade não faz parte da primeira versão e não tem versão marcada.

| Capacidade | Onda | Decisões | Por quê |
| --- | --- | --- | --- |
| O módulo roda isolado e só alcança dados, IA e registro pedindo ao núcleo | onda 1.0 | 4, 5 | É o que impede um app de pegar mais do que lhe foi liberado. |
| O módulo não tem saída própria para a internet | onda 1.0 | 63 | Um módulo com defeito não leva dado para fora. |
| Só a resposta pronta volta à nuvem do app, e ela não é gravada lá | onda 1.0 | 34, 35 | O dado da empresa não se acumula fora da rede dela. |
| Cache do último resultado de cada painel, guardado no mAIg e entregue só a quem pode ver o mesmo dado | onda 1.0 | 35, 93, 95 | Sem ele, cada abertura de painel é uma consulta nova ao banco da empresa. |
| Teto de 200 linhas por resposta, com as colunas sensíveis mascaradas | onda 1.0 | 43, 92 | Limita o que sai da rede a cada resposta. |
| A resposta que passa do teto é recusada inteira, com mensagem clara, que diz o tamanho da resposta e o teto | onda 1.0 | 43, 62, 124 | O núcleo nunca entrega um resultado parcial como se fosse inteiro. |
| O owner da organização sobe o teto de um app, num ato sensível | onda 1.0 | 43, 54 | O teto é política da empresa, com padrão seguro. |
| Limite de pedidos por pessoa e por app, com valor padrão e ajuste do owner da organização | onda 1.0 | 89, 92 | Sem ele, o teto é contornado em fatias de 200 linhas. |
| Um módulo atende várias organizações sem misturá-las, e só as que contrataram e liberaram o app | onda 1.0 | 9, 10, 11 | O app é instalado uma vez por instância. |
| A consulta feita ao banco volta à tela, só a instrução, sem dado, com o valor do filtro que toca coluna sensível mascarado | onda 1.1 | 74, 95, 103 | É uma saída a mais; na onda 1.0, só sai a resposta pronta. |
| Planilha baixada direto do mAIg para o navegador, com as colunas sensíveis sempre mascaradas | onda 1.1 | 74, 92 | Já estava na onda 1.1. |

## Prova de valor

Prova de valor proposta pelo PO; o dono da Maind ainda não a confirmou.

1. **O módulo não alcança nada sozinho.** Na Farma Vida, com o Horus instalado, Paulo libera para ele só o banco de vendas. Diante de Marta e de Renata, Ana faz uma pergunta que precisaria do banco de pessoal. O núcleo recusa os dados, e Renata encontra o pedido recusado no registro. Em seguida, Paulo troca a senha do banco de vendas no console, e o Horus continua respondendo sem que nada mude nele: o app nunca teve a senha. Quem confere é a TI do cliente, com a auditora ao lado.
2. **Um módulo com defeito não derruba os outros nem enxerga o que é deles.** Numa instância de teste, a equipe da Maind instala, ao lado do Horus, um módulo de demonstração feito só para a prova. Esse módulo tenta ler o que é do módulo do Horus e alcançar o banco sem pedir ao núcleo, e depois para de repente. Marta confere que as tentativas não alcançaram nada e que o Horus seguiu respondendo enquanto o outro módulo estava parado.

## Retorno para o negócio

- **Entrar.** O módulo dentro do mAIg é o que permite à Maind dizer que os dados crus ficam na casa do cliente e que à nuvem só volta a resposta pronta, com teto e com as colunas sensíveis mascaradas (decisões 34 e 43). É o argumento que destrava a aprovação de segurança, a etapa lenta de cada venda (decisão 4).
- **Expandir.** O isolamento se aprova uma vez, e o módulo de cada app seguinte roda do mesmo jeito; o segundo app não reabre a discussão sobre um programa da Maind dentro da rede do cliente. Hipótese: a TI do cliente aceita que a aprovação do isolamento vale para os módulos que vierem depois.
- **Custo de atender.** A Maind não instala o app inteiro em cada cliente: a parte de fora roda uma vez, na nuvem da Maind, e só o módulo vai para cada instância (decisão 4). No Horus, isso já foi decidido assim, e vale no mAIg: o desenho atende quem exige tudo dentro de casa com uma frota só, sem operar uma instalação por cliente (decisão 4, D-196 do Horus).
- **O custo que fica.** Saber rodar e isolar módulos é o maior custo do núcleo (decisão 4). Como o mAIg vem embutido no preço dos apps, o primeiro app carrega esse custo sozinho até chegar o segundo (decisão 17).

## O que não inclui

- **A lógica de cada app.** O que o módulo faz por dentro é do app; no Horus, como a pergunta é entendida, qual consulta se monta e como a resposta é escrita são das mfs do Horus.
- **A parte de fora do app e as telas.** São do app; no Horus, ficam na nuvem da Maind.
- **Instalar, pausar, retirar e desinstalar o app, e a regra de versão por prazo.** São da gestão dos apps (MF-104). Retirar e desinstalar chegam na onda 1.1 (decisão 106).
- **A contratação, o kit, o certificado e o handshake contratual.** São da contratação dos apps (MF-103).
- **A conexão com a Maind e a reconexão.** São da conexão de dentro para fora (MF-108).
- **As permissões e os papéis; o registro e a consulta dele.** São da segurança e permissões e do registro e auditoria (MF-101, MF-102).
- **O cofre e a leitura dos bancos; as chaves, os modelos, os limites e o custo da IA.** São dos bancos da empresa e da governança da IA (MF-105, MF-106).
- **Criar, encerrar e separar as organizações.** São das organizações e instâncias (MF-107); aqui está só o que essa separação pede ao módulo.
- **Onde cada papel configura o que o app pode fazer.** É do console de configuração (MF-110).
- **Quem vê o quê dentro do banco, pessoa a pessoa.** É do app, e não do mAIg, que libera o banco inteiro ao app (decisões 60 e 73); no Horus, é da segurança dos dados por pessoa, na versão 2.1 (MF-106 do Horus).
- **Os servidores MCP.** São da segunda versão (MF-111).
- **Sistemas do próprio cliente ou apps de outras empresas como módulos.** Ficam de fora, por enquanto (decisão 8).

## Depende de

- `MF-104:Gestão dos apps`: o módulo só existe dentro do mAIg depois que o administrador da instância instala o app, o que é registrar a parte de fora e implantar o módulo. E só atende uma organização depois que o owner da organização libera o app para ela. Por meio dela, esta mf também depende, de forma indireta, da contratação, das permissões e das organizações (MF-103, MF-101, MF-107).

## Ponto de partida no Horus

- No Horus, isso já foi decidido assim, e vale no mAIg: o ciclo da análise, isto é, o trabalho com o modelo de IA e as consultas, roda dentro do middleware, a peça do Horus que deu origem ao mAIg, e à nuvem da Maind chegam só a pergunta e a resposta pronta (decisões 4 e 34, D-258 do Horus).
- No Horus, isso já foi decidido assim, e vale no mAIg, com o teto da resposta e a planilha direto ao navegador: o que sai da casa do cliente é só a pergunta e a resposta pronta, e cada saída a mais, como o comando da consulta gerada ou uma planilha com os dados, precisa de uma permissão própria; sem ela, a saída não acontece (decisões 43 e 74, D-189 do Horus). As saídas a mais chegam na onda 1.1 (decisão 95).
- No Horus, isso já foi decidido assim, e vale no mAIg: quem pode permitir essas saídas a mais é o owner da organização, e o funcionário da Maind que administra a instância não as liga nem as vê (decisões 12 e 74, D-196 do Horus).
- No Horus, isso já foi decidido assim, e vale no mAIg, onde todo app tem uma parte fora do mAIg: a instalação completa do Horus na casa do cliente fica de fora e só volta se um cliente exigir que nada, nem a pergunta, saia de casa (decisão 4, D-196 do Horus).
- No Horus, a regra de quem vê o quê dentro do banco, pessoa a pessoa, chega na versão 2.1 e roda no middleware (D-263 do Horus). No mAIg, ela é do app, e não do núcleo, e roda no módulo do app: o núcleo libera o banco inteiro ao app (decisões 60 e 73).
- O Horus não tem decisão sobre como os módulos se isolam uns dos outros, nem sobre um módulo que atende várias organizações: o middleware do Horus servia a um app só.

## O que ainda falta decidir

- **Falta o arquiteto do mAIg definir como os módulos dos apps ficam isolados dentro do mAIg, e quanto da máquina cada um pode usar.** *O que está em jogo:* o isolamento impede que um módulo prejudique os outros ou leia o que não deve, e é o maior custo do núcleo, o preço de cada app ter uma parte dentro do mAIg (decisão 4). Sem um teto para cada módulo, um pedido pesado de um app atrasa os outros.
- **Falta o arquiteto do mAIg definir se uma cópia só do módulo de um app atende todas as organizações da instância ou se cada organização tem a sua cópia rodando à parte.** *O que está em jogo:* uma cópia só gasta menos máquina, mas depende de o módulo nunca misturar os pedidos de organizações diferentes; uma cópia por organização separa mais e custa mais, sobretudo na instância da Maind, onde convivem empresas diferentes.
- **Falta o arquiteto do mAIg definir quanto tempo vale o cache que o mAIg guarda para os painéis abrirem rápido e como ele fica protegido enquanto está guardado.** *O que está em jogo:* o cache são dados da empresa parados dentro do mAIg; ele não entra na cópia de segurança e só é entregue a quem pode ver o mesmo dado (decisão 93), mas um cache longo ou desprotegido vira uma cópia dos dados fora do cofre.
- **Falta o arquiteto do mAIg definir o que acontece com um pedido quando o módulo para no meio dele.** *O que está em jogo:* a pessoa que usa o app precisa saber se o pedido se perdeu ou se volta sozinho. Para a queda da conexão, o mAIg já guarda o que estava em andamento (decisão 6), mas a parada do próprio módulo não está coberta.
- **Também depende, e está explicado em outras mfs:** como um mAIg novo conversa com um módulo antigo dentro do prazo de adiamento (MF-104); como o núcleo monta a sugestão das colunas sensíveis (MF-105); o formato do handshake contratual e a política do certificado (MF-103).

## Decisões do PO para discutir

- **Decisão:** desdobrar "isolado" em quatro garantias: não lê o que é de outro módulo, não alcança nada sem o núcleo, não derruba nem trava os outros e não mistura organizações. *Por que:* a decisão 4 diz só "não prejudica os outros nem lê o que não deve", e o arquiteto do mAIg e a TI do cliente precisam de algo que se confira. *Alternativa:* deixar só a frase da decisão 4 e o detalhe todo para o arquiteto. *Reabrir se:* o arquiteto mostrar que alguma garantia custa caro demais na primeira versão, sobretudo a terceira.
- **Decisão:** pôr nesta mf a separação entre organizações dentro de um mesmo módulo, como a quarta garantia. *Por que:* o app é instalado uma vez por instância (decisão 10), então o mesmo módulo atende várias organizações, e na instância da Maind elas são de empresas diferentes. *Alternativa:* deixar toda a separação entre organizações na mf das organizações e instâncias (MF-107). *Reabrir se:* o redator dessa mf já tiver coberto o caso do módulo compartilhado.
- **Decisão:** ler "o módulo só usa os serviços do núcleo" ao pé da letra: o módulo não tem saída própria para a internet, não recebe nada direto de fora e não conversa com outro módulo. *Por que:* é a leitura que mantém a porta única, que é o argumento de venda para a TI do cliente. *Alternativa:* permitir uma saída controlada à internet como mais um serviço do núcleo. *Reabrir se:* a pesquisa na web do Horus da versão 2.0 não couber na governança da IA.
- **Decisão:** usar uma decisão do Horus que não estava na lista de números indicada, a da pesquisa na web pela busca do provedor de IA (D-162 do Horus). *Por que:* sem ela, o ponto da saída para a internet pareceria teórico, e ele afeta a primeira versão. *Alternativa:* deixar o ponto sem o exemplo do Horus. *Reabrir se:* o dono da Maind preferir o ponto de partida só com os números do mapa.
- **Decisão:** tratar a permissão de saídas a mais do Horus, como o comando da consulta ou a planilha, como ponto em aberto, e não como ponto de partida adotado (D-189 do Horus, D-196 do Horus). *Por que:* a decisão 4 fala só da pergunta e da resposta pronta, e uma saída a mais muda a promessa do mAIg para todos os apps. *Alternativa:* adotar a regra do Horus, com cada saída desligada até o owner da organização ligá-la. *Reabrir se:* o Horus da versão 2.0 precisar dessas saídas desde o primeiro cliente. Foi decidido depois: além da resposta pronta, só sai o que o owner da organização liberar, app por app (decisão 74), e as duas saídas chegam na onda 1.1 (decisão 95).
- **Decisão:** manter só a gestão dos apps como dependência, como no mapa, e citar no texto os serviços que o módulo usa, sem fazer deles dependências formais (MF-101, MF-102, MF-105, MF-106). *Por que:* o isolamento se define e se prova sem os serviços de dados e de IA prontos. *Alternativa:* pôr os bancos da empresa e a governança da IA como dependências, porque a primeira prova de valor usa o banco. *Reabrir se:* a ordem de entrega precisar mostrar que esta mf só prova valor depois delas.
- **Decisão:** a segunda prova de valor usa um módulo de demonstração feito pela equipe da Maind só para o teste. *Por que:* na primeira versão só existe o módulo do Horus, e não há como mostrar a separação entre módulos com um módulo só. *Alternativa:* provar só com o Horus, mostrando a recusa de um pedido. *Reabrir se:* o dono da Maind não quiser um módulo que não é app de verdade, ou o segundo app chegar antes da prova.
- **Decisão:** ler a regra do Horus de quem vê o quê dentro do banco, que roda no middleware, como lógica do app que roda no módulo do Horus, fora do escopo desta mf (D-263 do Horus). *Por que:* o mapa das mfs diz que o "quem vê o quê dentro do banco por pessoa" é do app. *Alternativa:* fazer dessa regra um serviço do núcleo, para todos os apps. *Reabrir se:* um segundo app precisar da mesma regra por pessoa. Foi decidido depois: no núcleo, a permissão de um app vale pelo banco inteiro, e o recorte por pessoa é de cada app (decisões 60 e 73).
- **Decidido pelo dono da Maind em 10/11/2026:** a resposta pronta volta à nuvem do app; a nuvem guarda só a receita de cada painel, nunca o resultado, e o que se guarda para abrir mais rápido fica no mAIg; e a promessa se prova com uma auditoria de fora e com regras técnicas (decisão 34, decisões 35 e 36). Esta mf ganhou o tópico do que volta à nuvem do app, e o ponto do que o módulo pode devolver ficou só com o limite dos dados de pessoas.
- **Decidido pelo dono da Maind em 10/11/2026:** a resposta que volta à nuvem tem um teto por app, de 200 linhas, com as colunas sensíveis mascaradas; o owner da organização sobe o teto no console, e o registro anota o tamanho de cada resposta (decisão 43). O ponto do limite dos dados de pessoas virou dois: como o núcleo reconhece uma coluna sensível e o que a pessoa vê acima do teto, com o arquiteto do mAIg, e as saídas além da resposta pronta, com o dono da Maind. Foi decidido depois: os três foram fechados: as saídas (decisão 74), quem diz que uma coluna é sensível (decisão 111) e o que a pessoa vê acima do teto (decisão 124).
- **Decidido pelo dono da Maind em 11/11/2026:** o administrador da instância suspende um app na instância inteira, numa emergência, sem apagar a configuração nem o registro (decisão 46). O caso do módulo que faz o que não devia com o que tem permissão de ler, que o isolamento não cobre, entrou em "Quando dá errado" desta mf.
- **Decidido pelo dono da Maind em 11/11/2026:** a visão ganhou a seção "O que o núcleo garante e o que é de cada app" (decisão 60). Esta mf passou a dizer que não misturar as respostas de duas organizações dentro do módulo é do app.
- **Decidido pelo dono da Maind em 11/11/2026:** o módulo de um app nunca sai para a internet por conta própria; a pesquisa na web, quando um app precisa, vai pelo provedor de IA, sob a governança da IA (decisão 63). O ponto em aberto saiu desta mf.
- **Decidido pelo dono da Maind em 11/11/2026:** além da resposta pronta, só sai o que o owner da organização liberar, app por app: a consulta, pela nuvem, sem dado, e a planilha, direto do mAIg ao navegador, sem passar pela nuvem (decisão 74). O ponto em aberto saiu desta mf.
- **Decidido pelo dono da Maind em 11/11/2026:** cada organização tem um limite de pedidos por pessoa e por app, configurado pelo owner da organização, e o alerta de volume aparece no painel de alertas do console (decisão 89).
- **Decidido pelo dono da Maind em 11/11/2026:** o resultado guardado no mAIg para um painel abrir mais rápido é um cache, que não entra na cópia de segurança e só é entregue a quem pode ver o mesmo dado (decisão 93). Esta mf ganhou um ponto do arquiteto do mAIg: quanto tempo o cache vale e como fica protegido.
- **Decidido por delegação do dono da Maind em 11/11/2026:** a primeira versão sai em duas ondas, a 1.0 e a 1.1, e a segunda versão vem depois; cada capacidade desta mf tem a onda marcada no tópico "O que entra em cada onda". A regra que resume o recorte: a onda 1.0 liga e para; a onda 1.1 desfaz e encerra (decisão 95).
- **Decidido por delegação do dono da Maind em 11/11/2026:** no registro, desde a onda 1.0, e na consulta devolvida à tela, na onda 1.1, o valor de um filtro aparece mascarado quando o filtro toca uma coluna sensível; os outros valores, como o período e a cidade, aparecem (decisão 103).
- **Decidido por delegação do dono da Maind em 11/11/2026:** o núcleo sugere as colunas sensíveis de cada banco, já marcadas, e o owner da organização confere no cadastro do banco e marca ou desmarca. Marcar ou desmarcar é ato sensível: fica no registro e avisa os outros owners da organização e o auditor. A coluna marcada sai sempre mascarada, para todos os apps. Entra na onda 1.0 (decisão 111).
- **Decidido por delegação do dono da Maind em 11/11/2026:** a luz de estado, igual em todos os apps, entra na onda 1.0, com três cores e sempre com texto, e aparece também na tela de entrada, antes do login; com a ligação fora ou a versão vencida, a pessoa vê um aviso próprio, e não um erro. A página de status chega na onda 1.1, com o login do mAIg, só de dentro da rede ou pela VPN, e mostra a cada pessoa o estado da ligação e dos apps da organização dela e as quedas passadas, sem nome de pessoa nem de banco (decisão 121).
- **Decidido por delegação do dono da Maind em 11/11/2026:** quando a resposta passa do teto, o núcleo recusa a resposta inteira, com mensagem clara, que diz o tamanho da resposta e o teto, e nunca entrega um resultado parcial como se fosse inteiro; a recusa fica no registro, com a contagem. A consulta que passa do limite de tempo ou de linhas é interrompida, e o pedido falha com mensagem clara. Entra na onda 1.0 (decisão 124).
