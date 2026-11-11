# MF-106:Controlar quais IAs, quanto e a que custo

> O mAIg guarda as chaves de inteligência artificial da empresa e decide, app por app, quais modelos cada um usa, até onde e a que custo. Nenhum app toca uma chave, e o owner da organização vê o consumo de todos os apps num lugar só.

**Também chamada de:** Governança da IA · **Versão do mAIg:** 1ª · **Classe:** essencial · **Situação:** rascunho do PO

## Em uma frase

O mAIg, o Maind AI Gateway, guarda as chaves que dão acesso aos serviços de inteligência artificial (IA) da empresa cliente. A cada pedido de um app, ele confere se o modelo é permitido e se o app está dentro do limite, faz o pedido com a chave da empresa, conta o custo na conta do app e anota tudo no registro (decisão 5).

Os apps da Maind usam IA. No Horus, o primeiro app, é a IA que entende a pergunta da pessoa e ajuda a montar a resposta. A IA é um serviço pago pelo uso, oferecido por empresas chamadas provedores, e cada pedido a ela custa dinheiro. Sem controle, a conta chega sem explicação, a chave de acesso é copiada para cada produto, e ninguém sabe qual produto gastou o quê.

Governança é o conjunto de regras sobre quem usa o quê, quanto e com que controle. Esta parte do mAIg é a governança da IA: as regras da IA de cada organização ficam num lugar só, para todos os apps. É o que justifica o "AI" do nome, que destaca a governança de IA e de dados num lugar só (decisão 1).

## Quem ganha

- **Owner da organização.** É quem responde pela organização no mAIg. A organização é o espaço da empresa dentro do mAIg, com os seus próprios apps e as suas próprias regras (decisão 9). Ele passa a escolher, app por app, quais modelos de IA cada um usa e até onde. Vê, num lugar só, quanto cada app consumiu e quanto custou. E troca uma chave num lugar só, sem caçá-la em cada produto.
- **Também ganham.** A TI do cliente, a equipe de tecnologia da empresa, deixa de entregar as chaves de IA a cada produto: elas ficam no mAIg, sob o controle da empresa. O auditor, a pessoa que o owner da organização nomeia para conferir o registro, encontra ali quanto de IA cada pedido usou (decisão 12). E a equipe da Maind não precisa guardar as chaves dos clientes nem responder por eles quanto cada app gastou.

## A decisão que passa a ser possível

**O owner da organização passa a poder dizer sim à IA nos apps da Maind sabendo, app por app, qual modelo se usa, até onde e quanto custa.** A decisão deixa de ser "liberar a IA ou não". Passa a ser "liberar quais modelos, para qual app, com que limite".

**A dor que some: a fatura de IA sem explicação.** Quando vários produtos usam a mesma conta de IA, a fatura do provedor chega com um total, e não com o gasto de cada produto. Com o mAIg, cada pedido é contado na conta do app que o fez, e o owner da organização vê o que cada app gastou.

**E a chave espalhada.** Quando cada produto guarda a própria cópia da chave, uma chave vazada pode ter vindo de qualquer um deles. E trocá-la exige mexer em todos. Com o mAIg, a chave fica num lugar só, e nenhum app a tem.

## Como funciona

### O que se governa: provedores, modelos e chaves

**Em resumo:** a empresa tem conta em um ou mais provedores de IA, cada um com vários modelos, e cada conta tem uma chave. O mAIg guarda as chaves e aplica as regras de uso de cada app.

**Quem é quem.**

- **Um provedor de IA** é uma empresa que oferece, pela internet, o acesso a modelos de IA, e cobra pelo uso.
- **Um modelo** é cada IA que o provedor oferece: o programa que entende um pedido e escreve a resposta. Um provedor costuma ter vários, que diferem no que fazem bem e no preço.
- **A chave do provedor** é uma espécie de senha que dá acesso à conta da empresa no provedor. Quem tem a chave usa a conta, e o provedor cobra o uso da empresa a quem a chave pertence. A chave é do cliente e fica no mAIg.
- **O pedido ao modelo** é cada vez que um app pede algo à IA: entender uma pergunta, resumir um texto, escrever uma resposta. Cada pedido tem um custo.
- **O núcleo** é o que vem pronto no mAIg e serve a todos os apps. A governança da IA é uma das partes dele (decisões 3 e 5).
- **O app** é cada produto da Maind que entra no mAIg. Ele tem uma parte fora do mAIg, com as telas, e o módulo, a parte interna, que roda isolado dentro do mAIg e pede a IA ao núcleo (decisão 4). No Horus, a parte de fora fica na nuvem da Maind, os computadores da Maind alcançados pela internet.
- **O registro** junta o log, a anotação de tudo o que acontece, e a auditoria, a conferência dessas anotações depois. Cada pedido de IA entra nele (MF-102).

**O que o mAIg controla.** Quatro coisas: as chaves com que fala com os provedores, os modelos que cada app pode usar, os limites de uso de cada app e o custo do que cada app usou (decisão 5).

**Por que é assim.** Com a chave em cada app, o cliente teria de procurar app por app quanto se gastou e com qual modelo. E cada produto novo seria mais um lugar com uma cópia da chave. No núcleo, o owner da organização controla a IA num lugar só, para todos os apps.

**O que se abre mão.** O núcleo do mAIg fica maior antes de o primeiro app sair. Ficaram de fora pôr no núcleo só os dados, deixando a IA com cada app, e não pôr nem os dados nem a IA (decisão 5).

**Em que onda.** A governança da IA entra inteira na onda 1.0 da primeira versão: as chaves dos provedores, a lista de modelos por app, o limite de gasto e o custo por app. As chaves, os modelos, os limites e o custo já estavam no núcleo da primeira versão (decisão 16), e a divisão em ondas não os moveu (decisão 92). Abre-se mão de: a onda 1.0 fica maior (decisão 112).

### As chaves: no cofre do mAIg, nunca num app

**Em resumo:** o owner da organização cadastra no mAIg a chave de cada provedor que a organização usa. A chave vai para o cofre, e dali só o núcleo a usa, na hora de pedir ao provedor.

**Como funciona.** O owner da organização cadastra as chaves no console, a tela do mAIg onde se configura tudo (MF-110). Cada chave vai para o cofre, a parte do núcleo onde ficam trancadas as senhas dos bancos e as chaves de IA. Quando um app pede a IA, o núcleo usa a chave guardada e faz o pedido ao provedor. Ao módulo, entrega a resposta da IA, nunca a chave (decisão 5).

**Ninguém vê a chave de volta.** Depois de guardada, a chave não aparece em tela nenhuma, nem para quem a cadastrou. Se for preciso trocá-la, o owner da organização cadastra a nova, que toma o lugar da antiga.

**Mais de um provedor.** Uma organização pode usar mais de um provedor, e cadastra uma chave de cada. As regras de cada app dizem quais modelos ele usa. O núcleo usa a chave do provedor daquele modelo.

**Quem cadastra.** O owner da organização, em qualquer hospedagem. A equipe da Maind dá suporte, sem cadastrar no lugar dele.

**Exemplo.** A Farma Vida, uma rede de 40 farmácias, tem conta num provedor de IA. Marta, da TI, faz o papel de administrador da instância. Paulo, diretor de operações, é o owner da organização.

1. Marta gera, na conta da Farma Vida no provedor, uma chave só para o mAIg.
2. Marta passa a chave a Paulo, por um canal combinado entre os dois.
3. Paulo entra no console do mAIg e cadastra a chave do provedor.
4. A chave vai para o cofre. A tela não volta a mostrá-la, nem a Paulo.
5. Paulo escolhe quais modelos desse provedor o Horus pode usar e põe um limite para o Horus.

**Por que uma chave só para o mAIg.** Se a mesma chave for usada também por outro sistema da empresa, o provedor cobra os dois na mesma conta, e o mAIg só enxerga o que passa por ele. A fatura do provedor ficaria maior do que a soma que o mAIg mostra, sem explicação.

**Quando dá errado.** A chave vaza por outro caminho. Paulo cadastra uma chave nova no console, e Marta cancela a antiga na conta do provedor. Como nenhum app tem a chave, há um lugar só para trocá-la.

**Só a chave do cliente.** A chave é sempre da organização: ela traz a própria conta em cada provedor, e a Maind não dá chave nem paga a IA de nenhum cliente. No Horus, a Maind podia dar uma chave paga por ela; isso não vale no mAIg (decisão 22). Quem ainda não tem conta num provedor precisa criar uma antes de começar, e a equipe da Maind pode orientá-lo, sem cadastrar a chave por ele.

### Os modelos permitidos, app por app

**Em resumo:** o owner da organização diz quais modelos cada app pode usar. A cada pedido, o núcleo confere se o modelo pedido está na lista daquele app.

**Quem é quem.**

- **A lista de modelos permitidos** é a regra de cada app: os modelos que ele pode usar naquela organização.
- **O módulo do app** pede um modelo ao núcleo. O núcleo confere a lista antes de fazer o pedido ao provedor.
- **O owner da organização** monta a lista de cada app, no console (MF-110).

**Por que é assim.** Os modelos diferem no preço e no que fazem bem. Liberar só os que servem ao app evita gastar com um modelo caro onde um mais simples basta. E a empresa pode ter regras próprias sobre quais provedores aceita, por contrato ou por cuidado com os dados. Escolher o modelo é também escolher o provedor, e portanto para onde vai o pedido. Com a lista, essa escolha é da organização, e não de cada app.

**Exemplo.**

1. Paulo libera ao Horus dois modelos do provedor da Farma Vida: um mais simples e um mais caro.
2. Para entender uma pergunta de Ana, gerente comercial, o módulo do Horus pede o modelo mais simples. Ele está na lista, e o pedido segue.
3. Numa versão nova, o módulo do Horus passa a pedir um modelo de outro provedor, que Paulo não liberou. O núcleo não faz o pedido, e o pedido recusado fica no registro.
4. Paulo encontra o pedido recusado no registro. Decide se cadastra a chave do outro provedor e libera o modelo, ou se mantém a lista como está.

**Quando dá errado.** O owner da organização não libera nenhum modelo que o app saiba usar. O app não consegue o que precisa da IA, e no Horus as perguntas ficam sem resposta. Como o owner da organização sabe, antes, quais modelos servem a cada app ainda não está definido.

**Quem escolhe o modelo de cada pedido.** É o app, dentro da lista. O mAIg confere e faz o pedido, mas não troca por conta própria o modelo que o app pediu, nem quando um provedor falha; o app pode pedir outro modelo da lista dele (decisão 96).

### Os limites: até onde cada app usa a IA

**Em resumo:** o owner da organização põe um limite de gasto de IA para cada app. O limite mede dinheiro, vale por app e recomeça a cada mês do calendário (decisão 112). Antes de cada pedido, o núcleo confere se o app está dentro do limite.

**Quem é quem.**

- **O limite** é o teto de gasto de IA de um app numa organização, em dinheiro, por mês do calendário. É de cada app: o limite de um app não se mistura com o de outro (decisão 112).
- **A conferência** acontece antes do pedido ao provedor, e não depois de a conta chegar.

**Por que é assim.** O limite protege a organização de surpresas. Um app com um defeito, ou um uso muito acima do esperado, não consome sem freio a conta de IA da empresa. E, como o limite é por app, um app que chega ao teto não tira a IA dos outros.

> **Analogia:** é como o cartão corporativo de uma empresa. O financeiro define o limite de cada departamento, e a fatura sai separada por departamento. **Onde a analogia para:** no mAIg, o cartão nunca sai do cofre; o app pede a compra, e quem passa o cartão é o núcleo, depois de conferir o limite.

**Exemplo.**

1. Paulo põe um limite para o Horus, em dinheiro, para o mês.
2. Ao longo do mês, as perguntas da Farma Vida vão consumindo o limite, e Paulo acompanha o consumo no console.
3. Numa semana de fechamento, as perguntas crescem, e o Horus se aproxima do teto.
4. Paulo decide se aumenta o limite ou se o deixa como está.

**Quando dá errado.** O app chega ao limite. Pela regra do núcleo, o mAIg confere o limite antes de pedir ao provedor, e um pedido que passaria do teto não segue como um pedido comum. Aos 80% do limite, o owner da organização é avisado, no console e por e-mail; aos 100%, o núcleo recusa os pedidos do app à IA, e a pessoa vê uma mensagem clara, até o owner da organização subir o limite, na hora, ou até o mês virar (decisões 64 e 75). Os outros apps seguem com a IA. Abre-se mão de: no fim do mês, o app pode parar para todos até alguém subir o limite.

**O que o limite mede.** Dinheiro: o limite é um valor de gasto de IA, vale por app e recomeça a cada mês do calendário. Entra na onda 1.0, com o aviso aos 80% e a recusa aos 100% (decisão 112). Abre-se mão de: o limite depende de o mAIg calcular bem o custo.

**O que ainda está em aberto.** Como o mAIg calcula o custo de cada pedido está em "O que ainda falta decidir".

### O custo por app e a visão do consumo

**Em resumo:** a cada pedido, o núcleo conta o custo na conta do app que o fez. O owner da organização vê, no console, quanto cada app consumiu e quanto custou.

**Quem é quem.**

- **O consumo** é quanto de IA um app usou: quantos pedidos e a quais modelos.
- **O custo** é quanto esse uso custou.
- **A visão do consumo** é a tela em que o owner da organização vê o consumo e o custo de cada app. Ela fica no console do mAIg, porque é lá que mora o controle da IA de todos os apps (MF-110).
- **A fatura do provedor** é a conta que o provedor manda à empresa dona da chave. Com a chave da empresa, quem cobra a IA é o provedor, direto da empresa. O mAIg não cobra pela IA: mostra quanto cada app gastou.

**Por que é assim.** Saber quanto cada app gasta é o que permite ao owner da organização julgar se cada app vale o que custa. É também o terceiro objetivo do mAIg: quais IAs cada app usa e quanto gasta se configuram e se consultam num lugar só.

**Exemplo.**

1. No fim do mês, Paulo abre a visão do consumo no console.
2. Vê quanto o Horus gastou e em quais modelos.
3. Recebe a fatura do provedor e a compara com a visão. Consegue dizer quanto da fatura veio do Horus.
4. Se a Farma Vida tiver um segundo app, Paulo vê o gasto de cada um separado, e não só o total.

**Quando dá errado.** A soma do mAIg e a fatura não batem. Pode ser que a mesma chave esteja sendo usada fora do mAIg, que só enxerga o que passa por ele. Pode ser também diferença no jeito de calcular. Como o mAIg calcula o custo de cada pedido, e com que precisão ele acompanha a fatura, ainda não está definido.

**Um ponto de partida que vem do Horus.** No Horus, o owner da organização vê o consumo e o custo de toda a IA da organização (D-267 do Horus). Vale no mAIg: o owner da organização vê no console o consumo e o custo de toda a IA da organização, desde a onda 1.0 (decisão 112). A parte em que a Maind dá a chave não vale no mAIg (decisão 22).

### Um pedido de IA, passo a passo

**Em resumo:** o módulo pede, o núcleo confere o modelo e o limite, usa a chave do cofre, pede ao provedor, conta o custo, anota e entrega a resposta da IA ao módulo. À nuvem da Maind volta só a resposta pronta.

**Exemplo.** Ana, gerente comercial da Farma Vida, pergunta ao Horus: "quais farmácias venderam menos em outubro do que em setembro?".

1. Ana digita a pergunta nas telas do Horus, na nuvem da Maind.
2. A pergunta chega ao módulo do Horus, dentro do mAIg da Farma Vida, pela conexão que o próprio mAIg abriu com a Maind e mantém aberta (MF-108).
3. Para entender a pergunta, o módulo pede a IA ao núcleo e diz qual modelo quer.
4. O núcleo confere se esse modelo está na lista do Horus, na organização Farma Vida. Está.
5. O núcleo confere se o Horus está dentro do limite que Paulo pôs. Está.
6. O núcleo usa a chave da Farma Vida, guardada no cofre, e faz o pedido ao provedor. O provedor responde.
7. O núcleo conta o custo do pedido na conta do Horus.
8. O núcleo anota no registro que o Horus usou a IA, com qual modelo, em nome de Ana, quanto e quando.
9. O módulo recebe a resposta da IA, nunca a chave. Os números de vendas, ele os pede ao núcleo pelo caminho dos bancos (MF-105).
10. O módulo termina a resposta, e só a resposta pronta volta à nuvem da Maind. Ana a vê na tela.
11. Paulo vê, na visão do consumo, o gasto do Horus crescer com essa pergunta. Renata, da área de segurança, nomeada auditora por Paulo, encontra o pedido no registro.

**O que não aconteceu.** O Horus não viu a chave. A conta do provedor foi para a Farma Vida, pela chave dela. Nenhum modelo fora da lista foi usado, e o Horus não passou do limite.

### Para onde vai o pedido ao provedor

**Em resumo:** o pedido ao modelo sai do mAIg direto rumo ao provedor de IA, que fica fora da rede da empresa, por uma saída que a TI do cliente libera para ele, sem passar pela Maind (decisão 19). O quanto desse pedido pode levar de dados da empresa é escolha do owner da organização, em três camadas, explicadas no tópico seguinte (decisão 20).

**Quem é quem.**

- **O pedido ao provedor** é o que o núcleo manda ao modelo em nome do app. Quem monta o conteúdo é o app; no Horus, o módulo.
- **A nuvem da Maind** é para onde volta a resposta pronta, que pode conter dados da empresa, até o teto de 200 linhas e com as colunas sensíveis mascaradas; além dela, só sai o que o owner da organização liberar (decisões 43 e 74).
- **A saída da rede** é a permissão, no firewall, o muro de proteção da rede, para um computador de dentro abrir uma conversa com um endereço de fora. A TI do cliente libera a saída para o endereço da Maind (decisão 6) e uma saída para o endereço de cada provedor de IA que a organização escolheu (decisão 19).

**Por que isto importa.** A promessa do mAIg é que à nuvem da Maind só volta a resposta pronta, que não fica guardada lá, até o teto de 200 linhas e com as colunas sensíveis mascaradas (decisões 34 e 43). Além dela, só sai o que o owner da organização liberar, app por app (decisão 74). A regra vem do Horus, e o mAIg a confirmou com essas travas (D-189 do Horus). O pedido ao provedor também sai da casa do cliente, e por isso a decisão 20 põe o que pode ir nele sob o controle do owner da organização. Escolher os provedores e os modelos de cada app decide para quem vai o pedido; a camada decide o que vai nele.

**Quando dá errado.** Um app tenta mandar ao provedor mais do que a camada dele permite. A conferência por camada, no tópico seguinte, existe para esse caso: o pedido é recusado inteiro (decisão 62).

**O que ainda está em aberto.** Por onde o pedido sai e o que ele pode levar já estão decididos (decisões 19 e 20). O que sobra em aberto está no tópico seguinte.

### O que o pedido ao provedor pode levar: as três camadas

**Em resumo:** o owner da organização escolhe, app por app, até que camada de dados o pedido ao provedor de IA pode levar. O app começa na camada mais restrita, e o núcleo confere a camada antes de enviar o pedido. (decisão 20) Mudar a camada avisa na hora os outros owners da organização e o auditor (decisão 54, MF-102).

**Quem é quem.**

- **Uma camada** é um nível do que o pedido ao provedor pode levar. São três, da mais restrita à mais aberta.
- **A camada 1** leva só a pergunta e a descrição do banco: os nomes das tabelas e das colunas, sem nenhum dado.
- **A camada 2** leva também totais já somados, como "vendas por mês", sem linhas de pessoas nem de clientes.
- **A camada 3** leva também linhas de dados, isto é, registros um a um, como "venda 8231, cliente Fulano, R$ 480".
- **O owner da organização** escolhe a camada de cada app, no console (MF-110).
- **O auditor** confere no registro a camada de cada pedido (MF-102).

**Como funciona.** O owner da organização escolhe, para cada app, a camada mais alta que o pedido ao provedor pode levar. Enquanto ele não escolhe, o app fica na camada 1. A cada pedido, o núcleo confere se o conteúdo cabe na camada do app antes de enviá-lo ao provedor e anota no registro a camada do pedido e uma descrição do que foi enviado, como quais tabelas e quantas linhas. O registro nunca guarda o texto inteiro do pedido nem a resposta (decisão 58, MF-102). (decisão 20)

**Por que é assim.** Sem esta regra, a promessa de que os dados não saem crus da casa do cliente valeria só para a Maind, e a organização não teria como controlar o que vai ao provedor. Com a escolha por app, cada organização decide conforme o risco dela, inclusive o da lei de proteção de dados, e o auditor consegue provar o que saiu. Ficaram de fora uma regra única da Maind para todas as organizações, que tiraria do Horus o que depende de o modelo ler linhas, e não ter regra de conteúdo, que deixaria cada app mandar o que quisesse. (decisão 20)

**O que se abre mão.** O núcleo precisa reconhecer o que é dado e o que é total, o que dá trabalho e pode falhar. O Horus precisa funcionar bem na camada 1. E o owner da organização ganha mais uma configuração para entender. (decisão 20)

> **Analogia:** é o que se entrega a um consultor externo. A empresa já escolheu quem é o consultor (a decisão 19); a camada diz o que se entrega a ele: só a pergunta e a planta dos arquivos, também os totais, ou também os documentos inteiros. **Onde a analogia para:** o consultor é um terceiro, e o que ele recebe sai do controle da empresa; por isso o mAIg confere a camada antes de entregar, e não depois.

**Exemplo.**

1. Paulo, owner da organização da Farma Vida, não escolheu camada para o Horus, e o app ficou na camada 1.
2. Ana pergunta ao Horus por que as vendas de Campinas caíram em outubro.
3. O módulo do Horus pede a IA ao núcleo, com a pergunta e a descrição do banco de vendas.
4. O núcleo vê que o pedido cabe na camada 1, faz o pedido ao provedor com a chave da Farma Vida e anota no registro: o Horus, em nome de Ana, camada 1, com a descrição do que foi enviado.
5. Um mês depois, Paulo decide que o Horus pode explicar os resultados com totais por mês e sobe o app para a camada 2. Os pedidos seguintes podem levar totais; as linhas de clientes continuam sem sair.
6. Renata, a auditora, confere no registro a camada de cada pedido e não muda nenhuma configuração.

**Quando dá errado.**

- **Um app tenta mandar mais do que a camada permite**, por exemplo linhas de clientes na camada 2. O núcleo recusa o pedido inteiro, sem cortar só o excedente. A pessoa vê uma mensagem clara, que diz que a pergunta precisaria mandar à IA mais dados do que a organização permite, e o caso fica no registro, à vista do owner da organização e do auditor (decisão 62). Abre-se mão de: a pessoa fica sem a resposta e precisa reformular a pergunta; cortar só o excedente daria uma resposta pior ou errada sem que ela soubesse.
- **Um total identifica uma pessoa.** Um total de vendas de um cliente que comprou uma vez só é, na prática, uma linha de dados. Por isso um total calculado sobre poucas linhas conta como linha de dados e só vai ao provedor de IA com o app na camada 3; na camada 2, o pedido é recusado inteiro, e a pessoa é avisada do motivo (decisões 62 e 113). Abre-se mão de: na camada 2, algumas perguntas ficam sem resposta da IA. Quantas linhas são "poucas" está em "O que ainda falta decidir".

**A camada de que cada pedido precisa.** A camada liberada vale por app e é o teto: cada pedido diz a camada de que precisa, e o pedido acima do teto é recusado inteiro, com mensagem clara (decisões 20 e 62). A regra vale para qualquer app (decisão 76). O primeiro app serve de exemplo. Por padrão, o Horus trabalha na camada 1: à IA vão só a pergunta e os nomes das tabelas, a IA escreve a consulta, o mAIg a roda no banco e monta a resposta, e a IA não vê número nenhum. Quando a pessoa liga, numa pergunta, a Análise avançada do Horus, o "ultra thinking", os dados voltam à IA para ela raciocinar sobre eles, mas só se o owner da organização tiver liberado ao Horus a camada que essa análise pede; se não tiver, o pedido é recusado inteiro. Assim, a promessa de que nenhum dado vai à IA vale por padrão. Abre-se mão de: na pergunta comum, uma explicação como "por que as vendas caíram" sai mais pobre.

**O que ainda está em aberto.** Como o núcleo reconhece o que é dado e o que é total, quantas linhas são "poucas" e a confirmação de que o primeiro app responde bem na camada 1 estão em "O que ainda falta decidir".

### Quem faz e quem vê o quê com a IA

**Em resumo:** quem configura a IA é o owner da organização; quem confere o uso é o auditor. O administrador da instância e a equipe da Maind não configuram a IA das organizações, e a pessoa que usa o app não vê nada disso.

- **Owner da organização.** Cadastra e troca as chaves, escolhe os modelos de cada app, escolhe até que camada o pedido de cada app ao provedor pode levar dados, põe os limites e vê o consumo e o custo de todos os apps da organização. Não vê a chave depois de guardada.
- **Auditor.** Lê no registro o uso de IA de cada pedido: qual app, qual modelo, em que camada, em nome de quem, quanto e quando. Não muda nenhuma configuração (decisão 12).
- **Administrador da instância.** Cuida da instalação física do mAIg, a instância, e vê só o que é da instância: as instalações, o estado e as versões. Não configura a IA das organizações e não vê o consumo nem o registro delas (decisão 12).
- **TI do cliente.** Cuida das contas da empresa nos provedores, gera as chaves e as cancela no provedor quando é preciso. Na infraestrutura do cliente, faz também o papel de administrador da instância.
- **Equipe da Maind.** Dá suporte ao owner da organização, antes e depois da venda, sem configurar no lugar dele. Na infraestrutura da Maind, faz o papel de administrador da instância, sem ver pelo mAIg a IA das organizações.
- **Pessoa que usa o app.** Usa o app e recebe as respostas. Não vê chaves, modelos permitidos nem limites.

**Por que é assim.** Quem configura não é quem confere, e é essa separação que deixa a área de segurança do cliente ver tudo sem poder mudar nada (decisão 12). O administrador da instância fica de fora pela mesma razão que o deixa fora do registro. Na instância da Maind, esse papel é da equipe da Maind, que veria de uma vez o gasto de todos os clientes da instância.

### Na hospedagem da Maind

**Em resumo:** as regras da IA são as mesmas nas duas hospedagens. Muda o lugar onde a chave fica guardada e de onde sai o pedido ao provedor.

**Quem é quem.** A instância é cada instalação física do mAIg. Ela roda na infraestrutura do cliente, isto é, nas máquinas e na rede dele, ou na infraestrutura da Maind, e numa e noutra atende uma ou mais organizações (decisão 9).

**O que muda para a IA.**

- **Na infraestrutura do cliente.** A chave fica no cofre do mAIg, dentro da casa do cliente. O pedido ao provedor sai da rede da empresa.
- **Na infraestrutura da Maind.** A chave fica no cofre da instância, na infraestrutura da Maind, e o pedido ao provedor sai de lá. Quem configura continua a ser o owner da organização. Cada organização tem a sua própria configuração de IA, mesmo dividindo a instância com outras (decisão 9).

**Uma ressalva do Horus que o mAIg não herda.** No Horus, quem opera a instalação da Maind segue podendo, tecnicamente, alcançar as chaves guardadas nela, e a promessa de que a Maind não vê as chaves só vale por inteiro com a instalação na casa do cliente (D-273 do Horus). O mAIg decidiu diferente: o cofre e o registro ficam cifrados com a chave da organização, que a equipe da Maind não alcança, e o risco aceito é o que estiver em uso com a máquina ligada (decisão 57).

**Sem IA da instância.** No Horus, isso já foi decidido assim, e vale no mAIg, onde cada organização traz a própria conta em cada provedor: não há uma IA no nível da instância, compartilhada pelas organizações. Cada organização tem a sua (decisão 22). Abriu-se mão do controle central, que a Maind tinha, de qual modelo cada organização usa e de quanto ela gasta (D-266 do Horus).

### Quando dá errado

**Em resumo:** quando a IA não pode ou não consegue atender, o pedido não segue e fica no registro. Nenhuma falha faz o mAIg entregar uma chave a um app.

- **O provedor recusa a chave, ou o crédito acaba.** A IA para para os apps que usam essa chave. Os pedidos não são atendidos e ficam no registro, como todo pedido. No Horus, isso já foi decidido assim, e vale no mAIg: o owner da organização é sempre avisado, no console e por e-mail (decisão 71, D-268 do Horus). Na onda 1.0, o destinatário desse aviso e o do aviso do limite de gasto é fixo: os owners da organização. As preferências de aviso chegam na onda 1.1 (decisão 126). O aviso à equipe da Maind, que valia para a chave dada por ela, não vale no mAIg (decisão 22).
- **O app chega ao limite.** O owner da organização já foi avisado aos 80%. Aos 100%, o núcleo recusa os pedidos do app à IA, com uma mensagem clara, até o owner da organização subir o limite ou o mês virar (decisões 75 e 112).
- **O app pede um modelo que não está na lista.** O núcleo não faz o pedido, e o pedido recusado fica no registro, à vista do owner da organização e do auditor (decisão 5).
- **O provedor fica fora do ar.** O pedido não é atendido e fica no registro. O app pode pedir outro modelo da lista dele; o mAIg não troca de modelo por conta própria (decisão 96).
- **A chave vaza.** O owner da organização cadastra uma chave nova, e a TI do cliente cancela a antiga no provedor. Há um lugar só para trocar.
- **A mesma chave é usada fora do mAIg.** A fatura do provedor fica maior do que a soma que o mAIg mostra. O mAIg só enxerga o que passa por ele.
- **O app para.** As escolhas de IA do app, como os modelos e o limite, ficam guardadas com o resto da configuração dele, até a organização renovar ou o owner da organização apagar (decisão 14). As chaves continuam na organização, servindo aos outros apps. Apagar a configuração guardada de um app parado só existe a partir da onda 1.1; a chave de uma IA, o owner da organização apaga desde a onda 1.0 (decisão 106, MF-104).
- **O app é desinstalado.** Os dados dele são excluídos, e com eles o registro do uso de IA daquele app (decisão 15). O histórico de consumo do app desinstalado sai junto. Pausar, retirar e desinstalar estão explicados na gestão dos apps (MF-104). Retirar e desinstalar chegam na onda 1.1; na onda 1.0, um app só para (decisão 106).
- **Uma organização vizinha, na mesma instância.** Não enxerga as chaves, os modelos, os limites nem o consumo da outra (decisão 9).

### O que entra em cada onda

A primeira versão do mAIg sai em duas ondas, a 1.0 e a 1.1, e a segunda versão vem depois (decisões 92 e 95). A tabela diz em que onda chega cada capacidade desta mf, com as decisões que a sustentam. "Não entra" quer dizer que a capacidade não faz parte da primeira versão e não tem versão marcada. Nesta mf, tudo o que entra na primeira versão entra na onda 1.0.

| Capacidade | Onda | Decisões | Por quê |
| --- | --- | --- | --- |
| O owner da organização cadastra no cofre a chave de cada provedor de IA | onda 1.0 | 5, 22, 112 | A chave é sempre da empresa; sem chave, não há IA. |
| Lista de modelos permitidos por app, conferida a cada pedido | onda 1.0 | 5, 16, 112 | A empresa decide com quais modelos os dados dela conversam. |
| O pedido à IA vai direto do mAIg ao provedor, sem passar pela Maind | onda 1.0 | 19 | O que a empresa manda à IA não passa por terceiros. |
| Três camadas da IA por app; o app começa na camada 1, e o owner da organização sobe | onda 1.0 | 20, 76, 92 | É o controle do que a IA pode ver dos dados da empresa. |
| Cada pedido diz a camada de que precisa; o pedido acima da camada liberada é recusado inteiro | onda 1.0 | 20, 62, 76 | Um pedido atendido pela metade vazaria justamente o que a camada protege. |
| Um total calculado sobre poucas linhas conta como linha de dados e só vai ao provedor de IA com o app na camada 3 | onda 1.0 | 20, 62, 113 | O total de uma pessoa só mostra o dado daquela pessoa. |
| Mudar a camada de um app é ato sensível | onda 1.0 | 54, 85 | O auditor fica sabendo quando a IA passa a ver mais. |
| Limite de gasto de IA por app, em dinheiro, por mês do calendário, com aviso aos 80% e recusa aos 100% | onda 1.0 | 75, 112 | A conta da IA é da empresa, e ela não entrega a chave sem um freio de gasto. |
| Custo por app e consumo de toda a IA da organização, à vista do owner da organização no console | onda 1.0 | 5, 16, 112 | O limite em dinheiro só faz sentido se o owner da organização vê o gasto. |
| Aviso ao owner da organização quando a chave é recusada ou o crédito acaba | onda 1.0 | 71, 126 | Quem resolve precisa saber. |
| O mAIg não troca de modelo sozinho quando um falha; o app pode pedir outro modelo da lista dele | onda 1.0 | 5, 96 | Trocar de modelo muda a resposta e o custo, e a lista de modelos é da empresa. |
| Limites e modelos diferentes por pessoa | não entra | 96 | A governança da IA é por app; por pessoa, o que existe é o limite de pedidos (decisão 89). |

## Prova de valor

Prova de valor proposta pelo PO; o dono da Maind ainda não a confirmou.

**Demonstração 1: o owner da organização controla a IA do Horus num lugar só.**

1. Paulo, owner da organização da Farma Vida, cadastra no console a chave do provedor, libera ao Horus um modelo só e põe um limite.
2. Ana faz uma pergunta ao Horus e recebe a resposta.
3. Paulo vê, na visão do consumo, o custo daquela pergunta na conta do Horus.
4. Paulo retira o modelo da lista do Horus. A pergunta seguinte de Ana fica sem resposta, e o pedido recusado aparece no registro.
5. Marta, da TI do cliente, procura a chave nas telas do Horus e no console, depois de guardada, e não a encontra.

**Demonstração 2: a fatura do provedor explicada app por app.**

1. No fim de um período, Paulo compara a visão do consumo com a fatura do provedor do mesmo período.
2. Consegue dizer quanto da fatura veio de cada app.
3. Renata, a auditora, encontra no registro os pedidos por trás de cada valor e não consegue mudar nada.

O que as duas mostram a quem é de fora: a chave está num lugar só, a escolha dos modelos é do cliente, cada gasto tem um app por trás, e tudo fica anotado. Nada disso depende da palavra da Maind.

## Retorno para o negócio

- **Entrar.** Hipótese: o gasto com IA sem controle é uma das objeções de quem aprova um produto com IA, e o owner da organização diz sim mais depressa quando vê, antes de começar, que pode escolher os modelos, pôr um limite e acompanhar o custo de cada app.
- **Expandir.** Um segundo app chega com a sua própria lista de modelos e o seu próprio limite, e o gasto dele aparece separado do Horus. Hipótese: ver o custo de cada app à parte facilita aprovar o segundo app, o que apoia a estratégia de entrar e expandir.
- **Reter.** Hipótese: a fatura explicada app por app evita a surpresa que leva um cliente a cortar o uso de IA ou a cancelar.
- **Custo de atender.** Com a chave da empresa, a IA é cobrada pelo provedor direto da empresa, e a Maind não carrega esse custo (decisão 22). A equipe da Maind também não precisa responder quanto cada app gastou: o owner da organização vê sozinho. Hipótese: menos chamados ao suporte sobre consumo.
- **Coerência com o preço.** O mAIg vem embutido no preço dos apps (decisão 17). A governança da IA não cria uma conta nova da Maind para o cliente: mostra o que o cliente já paga ao provedor.

## O que não inclui

- **O preço da IA e a cobrança do provedor.** O provedor cobra a empresa dona da chave. O preço em reais dos apps, que inclui o mAIg, é um ponto de negócio ainda em aberto, fora das mfs.
- **Os bancos da empresa.** São dos bancos da empresa (MF-105).
- **A tela onde se cadastram as chaves, os modelos e os limites.** É do console de configuração (MF-110).
- **A consulta ao registro e a guarda dele.** São do registro e auditoria (MF-102).
- **Os papéis e a conferência das permissões.** São da segurança e permissões (MF-101).
- **Qual modelo o app pede em cada tarefa e como ele monta o pedido.** É do app, no módulo dele (MF-109). O que o pedido pode levar, no máximo, é a camada desta mf (decisão 20).
- **As ferramentas extras que a empresa dá à IA.** São os servidores MCP, os programas da empresa que seguem um padrão para dar à IA ferramentas como consultar um sistema interno; ficam para a segunda versão (MF-111).
- **Limites e modelos por pessoa que usa o app.** Não entram na primeira versão, e nenhuma versão está marcada para eles: as regras desta mf são por app, e não por pessoa (decisão 96). Por pessoa, o que existe no mAIg é o limite de pedidos (decisão 89), e o que cada pessoa pode fazer dentro do app é do próprio app.
- **Pausar, retirar e desinstalar um app.** É da gestão dos apps (MF-104).

## Depende de

- `MF-101:Segurança e permissões` — é ela que sabe quem é o owner da organização, o único que cadastra chaves e define modelos e limites, e que confere, a cada pedido, se o app pode usar a IA.
- `MF-102:Registro e auditoria` — cada pedido de IA precisa ficar anotado, com o modelo e o quanto usou; é desse registro que o auditor confere o uso.
- `MF-110:Console de configuração` — as chaves, os modelos, os limites e a visão do consumo ficam no console.
- `MF-104:Gestão dos apps`: os modelos e os limites valem para um app liberado na organização e ficam guardados quando o app para.

## Ponto de partida no Horus

- **A organização configura a IA dela.** No Horus, isso já foi decidido assim, e vale no mAIg: com a peça na casa do cliente, a organização configura a IA dela (decisões 20 e 22). Essa peça é o middleware, a peça entre as telas do Horus e os dados da empresa, que deu origem ao mAIg. O Horus permitia também que a Maind desse uma chave de algum provedor de IA, paga por ela, com o preço registrado de a TI do cliente poder lê-la e reaproveitá-la (D-264 do Horus); isso não vale no mAIg, onde a chave é sempre do cliente (decisão 22).
- **A IA é configurada fora das telas do app.** No Horus, isso já foi decidido assim, e vale no mAIg: a IA, como os bancos, é configurada sempre na tela de configuração do middleware, e não nas telas do Horus, e assim as chaves ficam fora da parte do Horus na nuvem (decisões 20 e 22). A parte sobre quem configura foi substituída pela entrada do último item desta lista (D-265 do Horus).
- **Não há IA da instância.** No Horus, isso já foi decidido assim, e vale no mAIg: não há configuração de IA no nível da instância, e cada organização tem a sua (decisão 22). Abriu-se mão do controle central de qual modelo cada organização usa e de quanto gasta (D-266 do Horus).
- **O owner da organização vê tudo.** No Horus, o owner da organização vê o consumo e o custo de toda a IA da organização, e onde essa tela mora ficou para o arquiteto do Horus (D-267 do Horus). Vale no mAIg: o owner da organização vê no console o consumo e o custo de toda a IA da organização, desde a onda 1.0 (decisão 112). A parte em que a Maind dá a chave e a paga não vale no mAIg (decisão 22).
- **Quem é avisado quando a IA para.** No Horus, isso já foi decidido assim, e vale no mAIg: quando a IA da organização para, por chave recusada ou falta de crédito, o owner da organização é sempre avisado, no console e por e-mail (decisão 71, D-268 do Horus). O aviso à equipe da Maind, que valia para a chave dada por ela, não vale no mAIg (decisão 22).
- **Quem configura é o owner da organização.** No Horus, em qualquer hospedagem, quem configura a IA é o owner da organização, a equipe da Maind só dá suporte, e quem opera a instalação da Maind segue podendo, tecnicamente, alcançar as chaves (D-273 do Horus). A primeira parte vale no mAIg (decisões 22 e 68). Na segunda, o mAIg decidiu diferente: o cofre fica cifrado com a chave da organização, que quem opera a máquina não alcança (decisão 57).

## O que ainda falta decidir

- **Falta o arquiteto do mAIg definir como o mAIg calcula o custo de cada pedido e com que precisão ele acompanha a fatura do provedor.** *O que está em jogo:* se a soma do mAIg e a fatura não baterem, o owner da organização deixa de confiar na visão do consumo, e o limite, que mede dinheiro, perde o sentido (decisão 112).
- **Falta o arquiteto do mAIg confirmar que o primeiro app responde bem na camada 1 e definir como um app diz ao núcleo, pedido por pedido, a camada de que precisa.** *O que está em jogo:* a promessa de que nenhum dado vai à IA vale por padrão só se a pergunta comum funcionar bem sem que a IA veja os números (decisão 76); e o pedido que precisa de uma camada maior, como o da Análise avançada do Horus, tem de passar pela mesma conferência de camada, sem um caminho à parte (decisões 20 e 62).
- **Falta o arquiteto do mAIg definir como o núcleo reconhece o que é dado e o que é total e quantas linhas são "poucas" para um total contar como linha de dados.** *O que está em jogo:* se o núcleo errar, uma linha de dados passa por total, e a camada deixa de proteger o que promete (decisão 20). A regra do total que identifica uma só pessoa já está decidida: o total calculado sobre poucas linhas conta como linha de dados e só vai ao provedor de IA na camada 3. Falta o número, que o arquiteto do mAIg propõe (decisão 113).
- **Falta o arquiteto do mAIg definir como o owner da organização sabe quais modelos cada app consegue usar.** *O que está em jogo:* sem essa informação, o owner da organização pode montar uma lista com que o app não funciona, e só descobre pela falta de resposta.
- **Também depende, e está explicado em outras mfs:** como os módulos dos apps ficam isolados (MF-109); o preço em reais dos apps e como a Maind reparte o custo do mAIg entre eles, que é ponto do mapa geral.

## Decisões do PO para discutir

- **Decisão:** os modelos permitidos e os limites são por app, e não por pessoa que usa o app. *Por que:* a decisão fala em limites e custo por app, e o que cada pessoa faz dentro do app é do app. *Alternativa:* limites por pessoa no próprio mAIg. *Reabrir se:* um cliente pedir para limitar o gasto de IA de uma pessoa ou de uma área.
- **Decisão:** a visão do consumo fica no console do mAIg, e não nas telas de cada app. *Por que:* o objetivo de controlar num lugar só pede o gasto de todos os apps na mesma tela; no Horus, o lugar dessa tela tinha ficado para o arquiteto. *Alternativa:* cada app mostrar o próprio gasto. *Reabrir se:* o owner da organização quiser ver o gasto dentro do app que usa.
- **Decisão:** o auditor vê o uso de IA pedido a pedido, no registro; a visão somada do consumo e do custo é do owner da organização. *Por que:* o auditor só lê o registro, e o registro já anota quanto de IA cada pedido usou. *Alternativa:* dar ao auditor também a visão do consumo. *Reabrir se:* a área de segurança do cliente pedir a visão somada.
- **Decisão:** a chave, depois de guardada, não aparece de volta para ninguém, nem para o owner da organização; e uma organização pode cadastrar chaves de mais de um provedor. *Por que:* cumpre "nenhum app toca uma chave" sem exceção para pessoas, e a decisão fala em chaves dos provedores, no plural. *Alternativa:* um provedor só por organização. *Reabrir se:* a TI do cliente precisar conferir qual chave está cadastrada.
- **Decisão:** a chave dada e paga pela Maind, que vinha do Horus, foi recusada pelo dono da Maind em 09/11/2026 (decisão 22); no mAIg, a chave é sempre do cliente. *Por que:* mantém a promessa de que a chave é do cliente e fica no mAIg, e a Maind não carrega custo de IA. *Alternativa:* a Maind dar uma chave paga por ela, ou emprestá-la só como teste. *Reabrir se:* uma venda travar por falta de conta num provedor de IA.
- **Decisão:** o mAIg não troca de modelo por conta própria quando um provedor falha; quem escolhe é o app, dentro da lista. *Por que:* trocar de modelo muda a resposta e o custo, e a regra do núcleo é só conferir e fazer o pedido. *Alternativa:* abrir um ponto para o mAIg passar o pedido a outro modelo da lista. *Reabrir se:* um app precisar de troca automática.
- **Decisão:** no exemplo, Marta gera uma chave só para o mAIg, e o texto explica o porquê, sem fazer disso uma regra. *Por que:* sem isso, a fatura do provedor e a soma do mAIg não batem. *Alternativa:* exigir uma chave exclusiva no cadastro. *Reabrir se:* o arquiteto do mAIg tiver como conferir se a chave é usada fora.
- **Decisão:** o histórico de consumo de um app desinstalado sai junto com o registro dele. *Por que:* é a consequência da regra de que, desinstalado o app, os dados dele são excluídos. *Alternativa:* guardar só as somas do consumo depois da desinstalação. *Reabrir se:* o owner da organização precisar do custo de um app antigo para prestar contas.
- **Decisão:** três pontos novos sobre o pedido ao provedor entraram aqui: o que vai nele, por onde ele sai e como o owner da organização sabe quais modelos servem ao app; o primeiro e o segundo foram decididos pelo dono da Maind em 09/11/2026 (decisões 20 e 19), e a decisão 20 abriu três pontos novos. *Por que:* o pedido ao provedor é a única saída da casa do cliente que não vai para a Maind, e nenhuma decisão a descreve. *Alternativa:* levar o primeiro para a mf do registro e o segundo para a mf da conexão. *Reabrir se:* essas mfs já os tratarem.
- **Decisão:** a prova de valor tem duas demonstrações: o owner da organização controla a IA de um app num lugar só, e a fatura do provedor é explicada app por app; o Horus é o app do exemplo. *Por que:* são coisas que alguém de fora confere, com a fatura do próprio provedor na mão. *Alternativa:* uma demonstração com o limite atingido. *Reabrir se:* o dono da Maind quiser ver também o limite atingido. Foi decidido depois: o limite avisa aos 80% e recusa aos 100% (decisão 75), mede dinheiro e recomeça a cada mês do calendário (decisão 112).
- **Decisão:** em "Quem ganha", além do owner da organização, entraram a TI do cliente, o auditor e a equipe da Maind, como ganhos menores. *Por que:* cada um muda de fato com esta mf: a TI não entrega chaves a cada produto, o auditor confere o uso de IA no registro, e a equipe da Maind não guarda as chaves dos clientes. *Alternativa:* só o owner da organização, como na lista das mfs. *Reabrir se:* o dono da Maind preferir a lista curta.
- **Decisão:** a chave é cadastrada por organização e serve a todos os apps dela; os modelos permitidos e o limite são de cada app. Parar ou desinstalar um app tira só as escolhas de IA daquele app, e a chave continua na organização. *Por que:* uma chave por provedor evita repetir a mesma chave em cada app, e a decisão fala em modelos, limites e custo por app. *Alternativa:* uma chave por app, cadastrada com a configuração dele. *Reabrir se:* um cliente quiser uma conta de provedor diferente para cada app.
- **Decisão:** ler "anota no registro o que foi enviado" como a camada do pedido mais uma descrição do que foi enviado (por exemplo, quais tabelas e quantas linhas), e não o texto inteiro. *Por que:* guardar o texto inteiro faria do registro uma cópia dos dados e pesaria na guarda sem prazo (decisão 15); o ponto segue aberto na MF-102. *Alternativa:* guardar o texto inteiro de cada pedido. *Reabrir se:* o auditor precisar reconstruir um pedido palavra por palavra.
- **Decisão:** além dos três pontos sobre o pedido ao provedor, quatro pontos novos foram abertos aqui: o que o limite mede e em que período vale, o que acontece quando um app chega ao limite e quem é avisado quando a IA para, com o dono da Maind; e como se calcula o custo de cada pedido, com o arquiteto do mAIg. *Por que:* nenhuma decisão os responde, e os três primeiros mudam o que o owner da organização vê e decide. *Alternativa:* deixá-los todos para o arquiteto do mAIg. *Reabrir se:* o arquiteto do mAIg mostrar que algum deles é só técnico. Foi decidido depois: os três pontos do dono da Maind foram fechados: quem é avisado (decisão 71), o que acontece no limite (decisão 75) e o que o limite mede e em que período vale (decisão 112).
- **Decidido pelo dono da Maind em 11/11/2026:** o registro guarda, de cada pedido à IA, a camada e a descrição do que foi enviado, e nunca o texto inteiro do pedido nem a resposta (decisão 58). Confirma a leitura do PO acima, e o ponto saiu da MF-102.
- **Decidido pelo dono da Maind em 11/11/2026:** um pedido à IA que leva mais do que a camada do app permite é recusado inteiro, com uma mensagem clara à pessoa e uma linha no registro (decisão 62). O ponto em aberto saiu desta mf.
- **Decidido pelo dono da Maind em 11/11/2026:** quando a IA de um app para, por chave recusada ou falta de crédito, é avisado o owner da organização, no console e por e-mail (decisão 71). O ponto em aberto saiu desta mf.
- **Decidido pelo dono da Maind em 11/11/2026:** o limite de gasto de IA de cada app avisa o owner da organização aos 80% e trava aos 100%, até ele subir o limite ou o período virar (decisão 75). O ponto em aberto saiu desta mf; o que o limite mede e em que período vale foram decididos depois: dinheiro, por app, por mês do calendário (decisão 112).
- **Decidido pelo dono da Maind em 11/11/2026:** por padrão, o Horus trabalha na camada 1, e a IA não vê os números; só a Análise avançada, ligada pela pessoa numa pergunta, manda dados à IA, e só se a camada do app permitir (decisão 76). O ponto do dono da Maind saiu, e ficou um ponto do arquiteto do mAIg para confirmar a camada 1 e o caminho da Análise avançada.
- **Decidido por delegação do dono da Maind em 11/11/2026:** a primeira versão sai em duas ondas, a 1.0 e a 1.1, e a segunda versão vem depois; cada capacidade desta mf tem a onda marcada no tópico "O que entra em cada onda". A regra que resume o recorte: a onda 1.0 liga e para; a onda 1.1 desfaz e encerra (decisão 95).
- **Decidido por delegação do dono da Maind em 11/11/2026:** o mAIg não troca de modelo de IA sozinho quando um provedor falha, e o app pode pedir outro modelo da lista dele; os modelos permitidos e os limites da IA são por app, e não por pessoa. As duas regras deixam de ser proposta do PO e entram na onda 1.0 (decisão 96).
- **Decidido por delegação do dono da Maind em 11/11/2026:** a governança da IA entra inteira na onda 1.0: as chaves dos provedores, a lista de modelos por app, o limite de gasto e o custo por app. O limite mede dinheiro, vale por app e recomeça a cada mês do calendário, com aviso aos 80% e recusa aos 100%, e o owner da organização vê no console o consumo e o custo de toda a IA da organização (decisão 112).
- **Decidido por delegação do dono da Maind em 11/11/2026:** um total calculado sobre poucas linhas conta como linha de dados e só vai ao provedor de IA com o app na camada 3; na camada 2, o pedido é recusado inteiro, e a pessoa é avisada do motivo. Entra na onda 1.0 (decisão 113).
- **Decidido por delegação do dono da Maind em 11/11/2026:** na onda 1.0, cada aviso tem destinatário fixo, aparece sempre no console e vai por e-mail, sem dado nenhum. Os avisos de segurança vão aos owners da organização e ao auditor; a queda de um banco e de uma IA, o limite de gasto, a tarefa marcada que parou e o fim do contrato vão aos owners da organização; o certificado da organização perto de vencer vai aos owners da organização e aos administradores da instância; e os avisos da instância vão a todos os administradores da instância. A lista "o que a organização permite" e as preferências de aviso chegam na onda 1.1 (decisão 126).
