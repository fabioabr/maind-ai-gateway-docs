# Maind AI Gateway (mAIg) — documentação

Documentação pública do **Maind AI Gateway (mAIg)**. O código fica num repositório privado, à parte.

Comece pela [visão e pelos objetivos](visao.md). As macro funcionalidades estão em [produto/](produto/00-mapa-das-macro-funcionalidades.md) (rascunho do PO).

## O que é

Com a IA, os dados viraram o combustível dos projetos. Mas a maioria das empresas não deixa um banco de dados
visível de fora, nem mesmo por trás de um firewall ou de uma VPN. O mAIg resolve isso: é uma plataforma da Maind instalada **na casa
do cliente** (ou hospedada pela Maind, para quem não quer instalar). Quem acessa os dados é o mAIg, e a TI do cliente
controla o que cada produto pode ver e fazer.

Os produtos da Maind entram no mAIg como **apps**. O **Maind Horus** é o primeiro; o **Maind Doc** (assistente
para gerar documentos de projetos corporativos com IA) e outros podem vir depois. Com o mAIg instalado e aprovado,
um novo app não precisa passar de novo pela aprovação de segurança: basta liberá-lo no mAIg que já existe.

As decisões abaixo são do **dono da Maind**, quem decide o que o mAIg é e o que entra nele. O PO e o arquiteto do
mAIg trabalham a partir delas, e o que elas ainda não respondem fica como ponto em aberto nas macro funcionalidades.

## Decisões iniciais (08/11/2026)

1. **Nome:** Maind AI Gateway, ou mAIg.
2. **Produto à parte:** o mAIg tem código, documentação, versões e decisões próprios, separados do Horus e dos
   outros produtos. O código é privado; esta documentação é pública.
3. **Plataforma de apps:** o mAIg traz de forma nativa o que é comum a todo app, e cada app traz só o que é dele.
   O núcleo nativo:
   - configurações de segurança;
   - autenticação e autorização;
   - log e auditoria;
   - gerenciamento dos certificados usados no handshake dos apps;
   - gestão dos apps.
4. **Um app tem duas partes:** uma parte fora do mAIg (no Horus, a que roda no SaaS da Maind), registrada com
   certificado e permissões, e um **módulo** que roda isolado dentro do mAIg e só usa os serviços nativos. Instalar
   um app é registrar a parte de fora e implantar o módulo.
5. **Dados e IA também são nativos.** Entram no núcleo, além do item 3:
   - as conexões com os dados: o cofre das senhas dos bancos e o acesso só de leitura;
   - a governança da IA: as chaves dos provedores, os modelos permitidos, os limites e o custo por app;
   - os servidores MCP do cliente.

   Nenhum app toca uma senha de banco ou uma chave de IA: pede ao mAIg, que confere a permissão e registra no log.
6. **O mAIg liga para fora.** Ele abre a conexão com a Maind e a mantém aberta, e as partes de fora dos apps
   respondem por ela. O cliente não abre porta de entrada nenhuma; só libera a saída para o endereço da Maind (e, para a IA, as saídas da decisão 19). O
   certificado do handshake vale dentro dessa conexão. Se ela cair, o mAIg reconecta sozinho e guarda o que estava
   em andamento.
7. **Marca Maind.** O mAIg leva a marca da Maind. Por enquanto, o desenho não considera apps vendidos com a marca
   de outra empresa (white label).
8. **Só apps da Maind, por enquanto.** O mAIg não recebe sistemas do próprio cliente nem apps de outras empresas, e
   não se vende sozinho: entra junto com um app da Maind. Reabrir quando um cliente pedir para ligar um sistema
   próprio ao mAIg.
9. **Várias organizações por instância, em qualquer infraestrutura.** O mAIg atende várias organizações
   (multi-tenant): uma instância, que é cada instalação física do mAIg, atende uma ou mais organizações, e cada
   organização tem o seu próprio conjunto de apps e de regras de governança. O mAIg roda na infraestrutura do cliente
   ou na da Maind. Numa mesma infraestrutura física pode haver mais de uma instância, para organizações diferentes.
10. **A Maind libera cada app por certificado; depois, dois passos.** Fechada a contratação, a Maind entrega um **kit de
    instalação** com um **certificado digital emitido pela Maind**, abaixo de uma autoridade certificadora pública e
    confiável. Instalado o kit, o mAIg conversa com um **servidor da Maind Tech** para o **handshake contratual**, que
    confere a contratação e libera o app. Liberado pela Maind, o app segue em dois passos: o **administrador da
    instância** o instala na instância, uma vez só, e o **owner de cada organização** o libera e configura para a dele.
    A identidade, a licença e a carência foram separadas depois em três peças (decisão 56).
11. **A contratação é por organização.** Cada organização contrata os próprios apps, e o handshake contratual libera o
    app só para ela. Um contrato comercial pode listar várias organizações da mesma empresa.
12. **O registro é do owner da organização e de um auditor.** Dentro da organização, consultam o registro (log e auditoria) o
    **owner da organização** e um **auditor** que ele nomeia, que só lê o registro e não muda nenhuma configuração. O
    administrador da instância vê só o que é da instância (as instalações, o estado e as versões), nunca o registro das
    organizações.
13. **O fim do contrato não para o app sozinho.** O owner da organização é avisado antes do fim. O serviço só se
    encerra de dois jeitos: por uma **ação manual da Maind** ou quando o **certificado digital vence sem ser
    renovado**. Até lá, o app continua funcionando, o que dá à organização uma carência para renovar.
    Depois, a carência passou a ser um prazo da licença, e não a validade do certificado (decisão 56).
14. **Depois que um app para, a configuração dele fica guardada.** As permissões, os bancos e as IAs que o app usa e
    os ajustes do owner ficam guardados até a organização renovar, e o app volta como estava, ou até o owner apagar.
15. **O registro fica guardado enquanto o app estiver instalado.** Não há prazo de guarda: o registro de um app só é
    excluído quando o app é **desinstalado** do mAIg, e aí os dados dele são excluídos. Abre-se mão de: o volume do
    registro só cresce, e guardar dados de pessoas sem prazo pede cuidado com a lei de proteção de dados.
16. **A primeira versão é o núcleo que a v2.0 do Horus usa, no mesmo planejamento do middleware.** Entram a segurança,
    o login por usuário e senha e por Google, as permissões, o registro com o auditor, os certificados com o handshake
    contratual, a gestão dos apps, o cofre dos bancos, a governança da IA (chaves, modelos, limites e custo), várias
    organizações por instância e a conexão de dentro para fora. Os servidores MCP e o login da empresa ficam para a
    segunda versão, junto com a v2.1 do Horus. O planejamento que o Horus tinha para o middleware se mantém para o mAIg.
17. **O mAIg vem embutido no preço dos apps.** O cliente paga pelos apps, e o mAIg vem junto, sem linha própria na
    conta. Abre-se mão de: o preço de cada app precisa cobrir o custo do mAIg, e o primeiro app o carrega sozinho até
    chegar o segundo.
18. **Os sinais de cada objetivo vêm depois do primeiro cliente.** Como medir se cada objetivo foi atingido se define
    a partir de um caso real. Abre-se mão de: a primeira venda acontece sem um sinal combinado para observar nela.

## Decisões da revisão do PO (09/11/2026)

19. **O pedido à IA sai direto para o provedor, por saídas liberadas uma a uma.** Quando a organização usa IA de fora, o
    núcleo do mAIg faz o pedido direto ao provedor de IA, com a chave guardada no cofre do mAIg, sem passar pela Maind. Por
    isso a TI do cliente libera, além da saída para o endereço da Maind, uma saída para cada provedor de IA que a
    organização escolheu, e a promessa passa a ser "poucas saídas, todas conhecidas". O mAIg continua sem nenhuma porta
    de entrada, e só o núcleo faz o pedido: o módulo do app não tem saída própria. Ajusta a decisão 6. Abre-se mão de: a
    promessa deixa de ser "uma saída só", e cada provedor novo é um novo pedido à TI do cliente. O modelo de IA dentro da
    rede do cliente fica como possível segundo produto, para um cliente de segurança extrema.
20. **O owner da organização escolhe, app por app, o que o pedido ao provedor de IA pode levar.** O pedido tem três camadas:
    a **camada 1** leva só a pergunta e a descrição do banco (nomes de tabelas e colunas), sem dado nenhum; a **camada 2**
    leva também totais já somados, sem linhas de pessoas nem de clientes; a **camada 3** leva também linhas de dados. Cada
    app começa na camada 1, e o owner da organização sobe a camada dele no console. O núcleo confere a camada antes de
    enviar o pedido e anota no registro a camada de cada pedido e uma descrição do que foi enviado; se o registro guarda
    também o texto inteiro fica em aberto. Abre-se mão de: o núcleo precisa reconhecer o que é dado e o que é total, o
    Horus precisa funcionar bem na camada 1, e o owner da organização ganha mais uma configuração.
21. **Um app só sai da instância quando nenhuma organização o tem mais, e antes cada owner é avisado e pode baixar uma
    cópia do registro.** O administrador da instância só desinstala um app quando todas as organizações da instância já
    o retiraram (ou foram encerradas, como diz a decisão 31). Antes, o owner de cada organização retira o app da dele, é avisado de que o
    registro sai com a desinstalação e pode baixar uma cópia. O registro continua saindo só com a desinstalação, como diz
    a decisão 15, e o administrador da instância nunca o vê, como diz a decisão 12. Abre-se mão de: uma organização que
    não retira o app segura a desinstalação para todas; baixar o registro é uma função nova, e a cópia sai do controle do
    mAIg; e o registro de um app já retirado fica guardado até a desinstalação. Quem pode baixar a cópia e em que forma
    foi decidido depois (decisão 80).
22. **A chave de IA é sempre do cliente.** Cada organização traz a própria conta em cada provedor de IA e cadastra a chave
    no cofre do mAIg. A Maind não dá chave nem paga a IA de nenhum cliente: a fatura do provedor vai direto à empresa, e a
    Maind não carrega o custo de IA. Reabre-se quando uma venda travar por falta de conta num provedor. Abre-se mão de: o
    cliente precisa ter conta num provedor antes de começar, o que atrasa o primeiro dia de quem não tem equipe de TI; e as
    decisões do Horus sobre a chave dada pela Maind (D-264 e D-267 do Horus) deixam de valer no mAIg.
23. **As pessoas que usam os apps ficam no núcleo do mAIg, para todos os apps.** O mAIg guarda o cadastro das pessoas e faz o
    login delas; o owner da organização as cadastra no console e dá a cada uma o acesso aos apps. Há login único e as mesmas
    permissões em todos os apps, e o mAIg confere, ele mesmo, em nome de quem cada pedido é feito. Abre-se mão de: o núcleo
    guarda nome e e-mail de pessoas e responde por eles perante a lei de proteção de dados; se a ligação com a Maind cair,
    ninguém entra em app nenhum, porque a entrada mora no mAIg; e um app futuro não pode ter as próprias pessoas.
24. **O owner da organização e o administrador da instância entram sempre por usuário e senha.** O login da empresa, que
    chega na segunda versão, nunca é o único caminho dos dois: a conta com usuário e senha segue valendo para eles mesmo
    com o login da empresa ligado, para que quem configura tudo nunca fique trancado do lado de fora se o login da empresa
    falhar ou for mal configurado. Vale desde a primeira versão. A entrada dos owners da organização a mais, que o Horus
    liga ao login da empresa, fica para a decisão sobre quantos owners uma organização pode ter. Abre-se mão de: a empresa
    não impõe a própria política de senha a quem tem a chave de tudo; quem deixa a empresa mantém a senha local até alguém
    retirá-lo; e a senha dessas duas contas passa a pedir uma proteção extra, como a confirmação em dois passos, que ainda
    é ponto em aberto. A confirmação em dois passos foi decidida depois (decisão 50), e também onde essa senha vale
    (decisão 55).
25. **Uma organização pode ter até três owners, todos com usuário e senha, desde a primeira versão.** O owner da
    organização cadastra até mais dois owners da organização, como diz o Horus (D-258 do Horus), mas os três entram por
    usuário e senha, e não só pelo login da empresa. Assim a organização não depende de uma pessoa só, e, quando o login da empresa
    chegar, ele vira mais um jeito de entrar para os três, sem tirar a senha (decisão 24). Abre-se mão de: até três
    pessoas com a chave de tudo e três senhas que podem ser roubadas; o mAIg se afasta do Horus num ponto, porque o
    Horus liga os owners a mais só ao login da empresa; e falta a regra de quem pode retirar quem, que fica para o
    arquiteto do mAIg. A regra de quem retira um owner foi decidida depois (decisão 52).
26. **O console se alcança só de dentro da rede do cliente.** Na instalação na casa do cliente, o owner da organização, o
    auditor e o administrador da instância chegam ao console de dentro da rede da empresa, e quem está fora entra pela VPN
    que a empresa já mantém. O mAIg não abre porta de entrada nem passa a tela do console pela conexão com a Maind, de modo
    que a configuração e o registro não passam pela Maind. Na hospedagem da Maind, o console fica nos servidores da Maind e
    se abre de qualquer lugar, com login. Abre-se mão de: quem trabalha fora do escritório depende da VPN da empresa, e uma
    empresa sem VPN precisa montar uma. Reabre-se se uma venda travar por falta de acesso de fora; o passo seguinte seria
    deixar a TI do cliente ligar, por conta dela, a passagem pela Maind.
27. **As linhas do registro de uma pessoa excluída seguem com o nome dela até a desinstalação do app.** Excluir uma
    pessoa da organização tira o acesso dela, mas não toca em nenhuma linha do registro: as linhas continuam trazendo o
    nome dela, como manda a decisão 15, e só saem com a desinstalação do app. Quem pedir que os dados dela sejam apagados
    tem o pedido analisado caso a caso, sem regra pronta. O mAIg se afasta do Horus num ponto, porque lá quem é excluído
    leva os próprios registros (D-210 do Horus). Abre-se mão de: guardar o nome de quem já saiu, sem prazo, pesa na lei de
    proteção de dados; cada pedido de apagar vira uma análise manual; e a pessoa excluída pode não aceitar que os dados
    dela fiquem. Reabre-se se a lei de proteção de dados exigir apagar as linhas de uma pessoa. Falta dizer quem analisa
    cada pedido e como o nome fica ligado às linhas, pontos que ficam para o dono da Maind e para o arquiteto do mAIg.
28. **Cada organização tem também um certificado próprio, além do kit de cada app.** A Maind emite o certificado da
    organização quando ela é criada na instância, e um pedido só passa com os dois: o certificado do kit, que prova a
    contratação do app (decisão 10), e o da organização, que prova de quem é o pedido. É uma segunda trava entre as
    organizações da mesma instância, e segue o Horus, onde cada organização é isolada pelo seu certificado (D-272 do
    Horus). Abre-se mão de: são dois tipos de certificado para emitir, renovar e cancelar; a Maind emite um novo a cada
    organização criada, e criar uma organização, mesmo na instância do cliente, passa a depender dela; e a TI do cliente
    tem mais uma peça para entender e aprovar. Reabre-se se a dependência da Maind para criar organização travar uma
    venda, ou se o arquiteto do mAIg mostrar que a segunda trava não acrescenta proteção. O prazo e a renovação do
    certificado da organização foram decididos depois (decisão 44). Criar uma organização exige a ligação com a Maind
    de pé (decisão 41).
29. **Os atos do administrador da instância que tocam uma organização também são anotados no registro dela.** Criar a
    organização e o usuário do primeiro owner da organização, e instalar ou atualizar um app que ela contratou, viram
    linhas no registro da organização, com o nome de quem fez e a hora. O administrador da instância só escreve essas
    linhas e nunca lê o registro, de modo que a decisão 12 segue valendo. Assim o auditor responde sozinho quando um app
    mudou de versão e quem o mudou, também na hospedagem da Maind, onde quem muda é a equipe da Maind. Abre-se mão de: o
    administrador ganha um caminho de escrita no registro, que precisa ser protegido contra abuso; o mesmo ato vira uma
    linha em cada organização que usa o app; e os atos que não tocam nenhuma organização seguem sem anotação. Depois,
    instalar o kit de uma organização passou a entrar no registro dela (decisão 82), e os atos que não tocam organização
    nenhuma ganharam o registro da instância (decisão 81). A desinstalação, que só acontece quando nenhuma organização tem mais o app e exclui o registro dele, ainda
    não tem onde ser anotada. Reabre-se se o dono da Maind quiser anotar também esses atos num registro próprio da
    instância. Faltam dizer como o administrador da instância escreve no registro sem poder lê-lo nem alterá-lo, ponto do
    arquiteto do mAIg, e se a desinstalação deixa alguma anotação e onde, ponto do dono da Maind.
30. **O mAIg se atualiza sozinho, dentro de uma janela de horário que o administrador da instância define.** O mAIg
    busca a versão nova na Maind pela conexão de saída que já mantém (decisão 6) e se instala sozinho, só dentro da
    janela de horário que a TI do cliente escolhe na instância dela. Os apps seguem sendo atualizados pelo administrador
    da instância, um a um (decisões 10 e 29); só o mAIg se atualiza sozinho. O mAIg se afasta do Horus num ponto, porque
    lá quem atualiza é quem hospeda, e a TI do cliente atualiza no tempo dela (D-292 do Horus). Abre-se mão de: ninguém
    confere a versão antes de ela entrar, e uma versão com defeito pode derrubar a instância sozinha, o que exige um
    caminho de volta; a Maind passa a decidir qual versão chega, e a TI do cliente só escolhe o horário; e, numa
    instância da Maind, a atualização alcança empresas diferentes ao mesmo tempo. Reabre-se se a TI de um cliente de
    segurança rígida exigir aprovar cada versão antes de ela entrar. Faltam dizer como o mAIg busca, confere e instala a
    versão e volta à anterior se ela falhar, ponto do arquiteto do mAIg, e quem define a janela numa instância da Maind e
    se as organizações são avisadas antes, ponto do dono da Maind. Na casa do cliente, a instalação passou a esperar o
    aval da TI do cliente (decisão 39). A janela e o aviso numa instância da Maind foram decididos depois (decisão 47).
31. **Uma organização não é excluída: é encerrada, e o registro dela segue legível até o app ser desinstalado.** Encerrar
    uma organização retira todos os apps dela, com o aviso e a cópia do registro da decisão 21, e tira os bancos, a IA e o
    acesso das pessoas que usam os apps. O registro fica na instância, e só o owner da organização e o auditor dela
    continuam podendo lê-lo, até o app ser desinstalado (decisão 15). Segue as decisões 12, 15, 21 e 27 sem exceção:
    ninguém apaga a prova, nem a equipe da Maind, nem a TI do cliente, nem o owner da organização. Uma organização
    encerrada não trava a desinstalação de um app (decisão 21). O mAIg se afasta do Horus, onde excluir apaga tudo o que é
    da organização, sem volta (D-278 do Horus). Abre-se mão de: a organização encerrada segue ocupando a instância e
    guardando dados de pessoas até os apps dela serem desinstalados; é um estado novo para construir; e a palavra
    "excluir" deixa de valer para organizações, e só as pessoas continuam sendo excluídas (decisão 27). Reabre-se se a lei ou um cliente exigir apagar tudo, e o passo seguinte seria oferecer a
    exclusão de verdade, a pedido do owner da organização. Faltam dizer quem pede e quem confirma o encerramento e se ele
    tem volta, pontos do dono da Maind, e o que sobra de uma organização encerrada para o registro seguir legível, ponto do
    arquiteto do mAIg.

## Decisões da rodada do login pelo mAIg (10/11/2026 e 11/11/2026)

Nasceram de uma exigência da TI de um cliente: a instalação do mAIg só pode ser vista de dentro da rede da empresa ou
pela VPN dela.

32. **O login começa no endereço do mAIg, e a nuvem dos apps confia só no passe que o mAIg assina.** A pessoa entra pelo
    endereço do mAIg da organização, que fica na rede do cliente e, se a TI do cliente quiser, só se alcança de dentro
    dela ou pela VPN da empresa. O mAIg confere a pessoa pelo jeito de entrar que a organização ligou e emite um passe,
    uma credencial curta assinada com a chave do certificado da organização (decisão 28), que diz quem é a pessoa, de que
    organização e com que papéis. O navegador leva à nuvem só um código de uso único, que a parte de fora do app troca
    pelo passe pela ligação com o mAIg. A senha da pessoa e a resposta do login da empresa ficam no mAIg e nunca chegam à
    nuvem da Maind, e a nuvem não consegue fabricar um passe, porque não tem a chave da organização. Detalha a decisão
    23. Abre-se mão de: a máquina da pessoa precisa alcançar o mAIg para entrar; o certificado da organização passa a
    valer em todo login, e um certificado vencido tranca a organização inteira; e, na hospedagem da Maind, falta dizer
    se o endereço do mAIg pode ser limitado à rede de cada empresa, ponto do dono da Maind.
33. **A nuvem dos apps fala com o mAIg só pela ligação que o mAIg abre, a mesma para todas as pessoas.** Cada mAIg
    mantém aberta a ligação com o ponto de conexão da Maind, em duas ou três linhas, para não depender de uma só
    (decisão 6). Todas as pessoas e todas as organizações da instância usam essa ligação. Cada pedido leva um número,
    para a resposta voltar ao lugar certo, e o passe de quem pediu, que o núcleo confere em todo pedido. Pela ligação
    descem só os pedidos que o mAIg conhece, nunca acesso à rede do cliente: a Maind pede, e o mAIg decide. Quem está na
    internet não enxerga o mAIg, e nenhum computador da Maind precisa alcançá-lo por outro caminho. Abre-se mão de: o
    ponto de conexão vira a peça da Maind mais valiosa para um atacante e precisa de mais de um servidor; e uma resposta
    grande não pode atrasar as outras, ponto do arquiteto do mAIg.
34. **A resposta pronta volta à nuvem do app.** É o que deixa os apps funcionarem sem instalar as telas na casa do
    cliente, e não muda. A resposta que a pessoa vê passa pela nuvem da Maind para chegar à tela dela. Abre-se mão de: a
    promessa à TI do cliente deixa de ser "nada dos dados sai" e passa a ser "sai só a resposta que a pessoa vê, e ela
    não fica guardada" (decisão 35); e até onde a resposta pode levar dados de pessoas segue em aberto, ponto do dono da
    Maind.
35. **A nuvem do app guarda a receita, nunca o resultado, e o que se guarda para abrir mais rápido fica no mAIg.** Um
    painel montado num app guarda na nuvem só a receita: que dados buscar, que gráfico, que filtros. Cada vez que alguém
    o abre, a parte de fora do app pede os dados ao mAIg pela ligação. O último resultado de cada painel pode ficar
    guardado por um tempo no mAIg, para o painel abrir rápido e o banco não receber a mesma consulta várias vezes; na
    nuvem da Maind, a resposta só passa pela memória. Abre-se mão de: o mAIg precisa de espaço e de uma regra de
    validade para o que guarda, e nenhum painel abre com a ligação fora.
36. **A promessa de que a nuvem não guarda a resposta se prova com uma auditoria de fora e com regras técnicas.** Uma
    empresa de auditoria independente, de um selo que a TI do cliente já conhece, como o SOC 2 ou a ISO 27001, confere
    que a nuvem dos apps segue a regra. As regras técnicas tornam a promessa verdadeira por construção: a resposta só
    passa pela memória e nunca é gravada, e as anotações técnicas da nuvem guardam só o tamanho, a hora e o número do
    pedido. Ficou de fora cifrar a resposta do mAIg até o navegador, que obrigaria a mudar de lugar o que a nuvem do app
    faz com os dados. Abre-se mão de: um custo anual de auditoria, ainda a cotar, e o compromisso de seguir as regras em
    todo app novo.
37. **O passe dura 15 minutos e se renova pelo mAIg.** O navegador da pessoa renova o passe falando direto com o mAIg.
    Se ela sai da rede da empresa ou da VPN, ou se o owner da organização tira o acesso dela, a renovação falha, e ela
    perde os apps em até 15 minutos. Assim, "o mAIg só de dentro ou pela VPN" vale durante todo o uso dos apps, e não só
    na entrada. A confirmação com o login da empresa a cada 8 horas, que vem do Horus, segue como ponto de partida
    (MF-112). Abre-se mão de: quem sai da VPN no meio do trabalho precisa voltar a ela para continuar; e os navegadores
    novos pedem permissão quando um site da internet fala com um endereço interno, o que a renovação precisa contornar,
    ponto do arquiteto do mAIg.
38. **A ligação entre o mAIg e a Maind é feita pela própria Maind, sem serviço de outra empresa no caminho.** A Maind
    faz as duas pontas: dentro do mAIg, a peça que liga para a Maind, mantém a ligação viva e religa sozinha; na Maind, o
    ponto de conexão, que guarda as ligações abertas e entrega cada pedido ao mAIg certo. Ficaram de fora os serviços
    prontos de nuvem, como o que o gateway de dados local da Microsoft usa, e os túneis de mercado, porque poriam mais
    uma empresa no caminho dos dados. A promessa à TI do cliente segue "uma saída para a Maind, e uma para cada provedor
    de IA" (decisão 19). Abre-se mão de: a reconexão, o sinal de vida, a fila dos pedidos e um caminho alternativo para
    a empresa cujo intermediário de saída quebre a ligação passam a ser trabalho da Maind.
39. **O mAIg baixa a versão nova sozinho, mas só a instala com o aval da TI do cliente.** Na casa do cliente, o mAIg
    busca a versão nova na Maind pela ligação de saída, confere pela assinatura que ela é da Maind e espera o aval do
    administrador da instância para se instalar, dentro da janela de horário que ele define. A TI do cliente pode adiar
    até um prazo máximo, e uma correção de segurança tem prazo curto. Na hospedagem da Maind, a instalação segue
    sozinha, na janela. Substitui a decisão 30 na casa do cliente: nenhum código novo entra sem a TI do cliente ver
    antes, que é o que a TI de segurança rígida exige. Abre-se mão de: um cliente que demora fica mais tempo numa versão
    velha, e a convivência entre versões pesa mais; e faltam dizer o prazo máximo de adiamento e o da correção de
    segurança, pontos do dono da Maind. Os dois prazos foram decididos depois (decisão 45).
40. **O login começa pelo app e usa o jeito de entrar configurado no mAIg, e o papel vale por app.** A pessoa abre um
    app, o app a manda à tela de entrada do mAIg, e o mAIg usa o jeito de entrar que a organização configurou, inclusive
    o login da empresa. O passe sai só para aquele app, com o papel da pessoa nele. Se depois ela abre outro app, não
    digita a senha de novo: o mAIg já a conhece e emite outro passe, só para esse app. Mantém o login único (decisão
    23) e responde que o papel trazido pelo login da empresa vale dentro de cada app, e não no núcleo para todos. Abre-se
    mão de: a TI do cliente cuida de um papel por app, e não de um papel comum a todos os apps; e um passe roubado de um
    app não abre os outros, o que é ganho, mas cada app precisa pedir o seu.
41. **A ligação com a Maind é requisito para o mAIg funcionar de ponta a ponta.** Sem ela, ninguém troca o código do
    login pelo passe (decisão 32), e as telas dos apps, que ficam na nuvem, não chegam ao mAIg (decisão 33). Por isso
    criar uma organização exige a ligação de pé, e não há certificado provisório nem organização criada sem a Maind.
    Abre-se mão de: uma instância sem ligação só serve para o console, e a disponibilidade do ponto de conexão da Maind
    passa a valer pelo produto inteiro, ponto do dono da Maind.
42. **Uma tarefa marcada roda com um passe de agendamento, guardado só no mAIg.** Quando a pessoa cria num app uma
    tarefa que roda sozinha numa hora marcada, como um relatório das 7h, o mAIg emite um passe só daquela tarefa, em
    nome dela, e o guarda só nele, nunca na nuvem. Na hora marcada, a parte de fora do app só pede "rode a tarefa", e o
    mAIg confere, a cada rodada, se a pessoa ainda tem acesso e permissão. Se ela perdeu o acesso, a tarefa para, e o
    owner da organização é avisado. Ficou de fora a tarefa rodar em nome do app, que pularia a conferência da pessoa.
    Abre-se mão de: uma peça a mais no núcleo; e a tarefa de quem sai da empresa para, mesmo quando outras pessoas
    dependem do relatório, e alguém precisa criá-la de novo em nome próprio.
43. **A resposta que volta à nuvem tem um teto por app: 200 linhas, com as colunas sensíveis mascaradas.** O normal é ir
    à tela um dado consolidado, como um total por loja ou por mês, e por isso o teto quase nunca atrapalha. As colunas
    sensíveis, como CPF, e-mail, telefone e salário, chegam mascaradas. O owner da organização sobe o teto de cada app
    no console, e o registro anota o tamanho de cada resposta. O núcleo confere o teto antes de a resposta sair pela
    ligação, para que a promessa não dependa só do app. Assim, um vazamento na nuvem nunca leva a base inteira. Abre-se
    mão de: quem precisa de uma lista grande pede ao owner da organização; e faltam dizer como o núcleo reconhece uma
    coluna sensível e o que a pessoa vê quando a resposta passa do teto, pontos do arquiteto do mAIg com o dono da Maind.
44. **O certificado da organização vale 30 dias, se renova sozinho e nunca para sem aviso.** O mAIg o renova sozinho
    pela ligação com a Maind, que já é requisito (decisão 41). Se a renovação falhar, o certificado atual segue valendo
    até o fim, e o owner da organização e a TI do cliente são avisados 7 dias antes de ele vencer. Cancelá-lo antes do
    prazo exige a autorização de duas pessoas da Maind, e o ato fica no registro da organização. Como ele assina todo
    login (decisão 32), é a peça que mais precisa de cuidado: ninguém é trancado por esquecimento, e um certificado
    roubado vale pouco tempo. Abre-se mão de: a Maind mantém a emissão de certificados sempre de pé, porque uma falha
    longa dela chega a trancar organizações; e a política do certificado de cada kit segue em aberto, ponto do arquiteto
    do mAIg.
45. **A TI do cliente adia uma versão nova do mAIg por até 30 dias, e uma correção de segurança por até 7.** Passado o
    prazo, o mAIg continua na versão velha, porque nada se instala sem o aval, mas os apps passam a recusar a conversa:
    a pessoa vê o aviso "Atualização necessária", e o painel da instância mostra o motivo e a versão, como no Horus
    (D-292 do Horus). Detalha a decisão 39 e mantém o aval da TI do cliente. Ficaram de fora a instalação forçada ao fim
    do prazo, que desfaria a decisão 39, e prazos de 60 e 15 dias, que deixariam uma falha de segurança aberta por duas
    semanas. Abre-se mão de: quem adia além do prazo fica com os apps parados até dar o aval. Na hospedagem da Maind,
    os prazos não pesam, porque a instalação segue sozinha, na janela.
46. **O administrador da instância suspende um app na instância inteira, numa emergência.** Com um gesto no painel da
    instância, o app para em todas as organizações dela, e a configuração e o registro ficam guardados, porque o
    registro é a prova do que aconteceu. Cada owner da organização é avisado, e a suspensão fica anotada no registro de
    cada organização (decisão 29). A retomada é outro gesto, do mesmo papel. Na hospedagem da Maind, quem suspende é a
    equipe da Maind, com a autorização de duas pessoas. A pausa segue do owner da organização, só na organização dele: a
    suspensão é outro ato, da instância. Ficaram de fora só a Maind suspender o app, em todas as instâncias, que
    deixaria a TI do cliente dependendo da Maind, e os dois freios juntos, que dariam à Maind o poder de parar apps na
    casa do cliente. Abre-se mão de: um gesto errado para o app em todas as organizações da instância de uma vez.
47. **Numa instância da Maind, a equipe da Maind define a janela de atualização do mAIg, avisa antes e anota.** A
    janela é de madrugada e vale para a instância inteira. O owner de cada organização é avisado 7 dias antes de cada
    atualização do mAIg, ou 24 horas antes numa correção de segurança, e a atualização fica anotada no registro de cada
    organização, como a de um app (decisão 29). Na casa do cliente, a anotação vale do mesmo jeito, porque o aval da TI
    do cliente é um ato do administrador da instância que toca cada organização (decisão 29). Responde o que a decisão
    30 deixou em aberto para a hospedagem da Maind.
    Ficaram de fora o owner da organização poder adiar, que deixaria uma organização segurar todas as outras da mesma
    instância, e atualizar sem aviso antes, que pegaria a empresa de surpresa. Abre-se mão de: nenhuma empresa escolhe
    o horário, e quem trabalha de madrugada sente a atualização.
48. **Na hospedagem da Maind, o mAIg roda em máquinas separadas da nuvem dos apps e, por enquanto, com o endereço
    aberto na internet.** A instância da Maind, a que atende os clientes sem infraestrutura própria, não divide as
    máquinas com o Horus nem com a parte de fora de outro app, e fala com a nuvem dos apps só pela ligação que o próprio
    mAIg abre (decisões 6 e 33). Na primeira versão, porém, o endereço do mAIg nessa instância, com a tela de entrada e
    o console, fica alcançável pela internet, protegido pelo login. Fechar a rede dela, como a TI do cliente fecha a
    dele, fica para a segunda versão do mAIg, junto com a versão 2.1 do Horus, ou depois, ponto do dono da Maind.
    Abre-se mão de: na primeira versão, a promessa de ver o mAIg só por dentro da rede ou pela VPN vale só na casa do
    cliente; e a Maind mantém duas infraestruturas, a da nuvem dos apps e a das instâncias.
49. **A visão diz de quem o mAIg protege, e de quem não, inclusive a própria Maind.** Uma seção da visão traz uma linha
    por ator: alguém de fora, a organização vizinha, um app com defeito, a nuvem da Maind, o canal de atualização, a
    emissão de certificados, a equipe da Maind, a TI do cliente, o owner da organização e o provedor de IA. Cada linha diz
    o que o mAIg impede e o que fica como risco aceito. Sobre si mesma, a Maind promete que uma nuvem invadida não se
    passa por ninguém (decisão 32), não leva a base inteira (decisão 43) e não instala nada na casa do cliente sem o aval
    da TI do cliente (decisão 39), e que a TI do cliente pode parar um app sem depender dela (decisão 46). E admite que
    uma nuvem invadida alcança, por pouco tempo, o que as pessoas que estão usando os apps já poderiam ver (decisão 37).
    Ficaram de fora escrever só o que o mAIg impede, porque a omissão custaria confiança, e deixar a pergunta só para o
    modelo técnico do arquiteto do mAIg. Abre-se mão de: o risco que sobra fica escrito, à vista de qualquer leitor.
50. **A confirmação em dois passos chega na segunda versão do mAIg, e é configurável.** A confirmação em dois passos
    pede uma segunda prova além da senha, como um código no celular. Na primeira versão, o owner da organização, o
    auditor e o administrador da instância entram só com usuário e senha (decisão 24). Na segunda versão, junto com a
    versão 2.1 do Horus, a confirmação entra como configuração da entrada: quem configura escolhe se a liga e para quem.
    Ficaram de fora torná-la obrigatória desde a primeira versão, para os três papéis ou para todos, e obrigatória só na
    hospedagem da Maind. Abre-se mão de: na primeira versão, uma senha roubada abre a chave de tudo, e na hospedagem da
    Maind o console fica aberto na internet protegido só pela senha (decisão 48). O que acontece depois de várias
    tentativas erradas e como se recupera uma senha esquecida seguem com o arquiteto do mAIg.
51. **O link de primeiro acesso do owner da organização vai direto do mAIg ao e-mail dele.** Quem cria o usuário, o
    administrador da instância, só digita o e-mail do owner da organização e nunca vê o link. Se o link vence, ele pede
    outro, que também vai direto ao e-mail, e cada envio fica anotado no registro da organização (decisão 29). Assim,
    nem a TI do cliente nem a equipe da Maind consegue usar o link antes do owner da organização e entrar no lugar dele,
    com acesso ao que o papel delas nunca vê (decisão 12). Substitui, no mAIg, o ponto de partida do Horus, em que quem
    criava o usuário recebia o link e o entregava por fora do sistema (D-290 do Horus). Ficaram de fora manter a
    entrega por fora, com a anotação de quando e de onde a senha foi criada, e dividir o link em duas metades.
    Abre-se mão de: o mAIg passa a enviar e-mail, e um e-mail digitado errado manda o link para outra pessoa; e falta
    dizer como o mAIg envia esse e-mail, ponto do arquiteto do mAIg.
52. **Qualquer owner da organização retira outro, sozinho.** O retirado e o auditor são avisados na hora, e a retirada
    fica anotada no registro da organização. Quem sai da empresa perde o acesso no mesmo dia, sem depender de mais
    ninguém, e quem foi afastado sem motivo pode ser recolocado por outro owner da organização. Ficaram de fora exigir a
    confirmação de um segundo owner da organização, que numa organização com só dois impediria um de retirar o outro, e
    deixar a retirada com o administrador da instância, que lhe daria poder sobre quem manda na organização do cliente
    (decisão 51). Abre-se mão de: um owner da organização pode afastar outro sem motivo, e o freio é o aviso e o
    registro. O que acontece quando a organização fica sem nenhum owner da organização com acesso foi decidido depois
    (decisão 53).
53. **Uma organização sem nenhum owner com acesso é destravada pelo administrador da instância, com espera e aviso.**
    O administrador da instância digita o e-mail do novo owner da organização, e o link de primeiro acesso vai direto
    para ele (decisão 51). A troca só vale 48 horas depois. Nesse tempo, os owners da organização antigos e o auditor são
    avisados por e-mail e podem barrá-la; se alguém barra, a troca não acontece, e o caso volta à conversa entre a empresa
    e o administrador da instância. Tudo fica no registro da organização (decisão 29). Enquanto isso, os apps seguem
    funcionando; só falta quem configure. Ficaram de fora destravar na hora, que deixaria o administrador da instância
    escolher quem manda na organização, e exigir um pedido formal da empresa à Maind, que seria lento e poria a Maind no
    meio até na casa do cliente. Abre-se mão de: dois dias sem ninguém que configure.
54. **Os atos sensíveis do owner da organização avisam na hora os outros owners e o auditor.** A lista é fixa: mudar o
    que o pedido ao provedor de IA pode levar (decisão 20), cadastrar ou trocar um banco, trocar o auditor, subir o teto
    da resposta (decisão 43) e baixar a cópia do registro (decisão 21). A retirada de um owner da organização já avisa
    (decisão 52). O aviso só informa e não pede aprovação, e o ato segue no registro, como todos. Assim, nada importante
    muda em silêncio, e o auditor fica sabendo no mesmo dia. Ficaram de fora uma trava que a organização ligaria para
    exigir a aprovação de um segundo owner da organização, que não funcionaria numa organização com um owner só, e não
    ter lista, que deixaria um ato grave semanas sem ninguém ver. Abre-se mão de: chegam mais avisos, e um owner da
    organização mal-intencionado ainda age, só não escondido. Liberar o acesso de suporte da Maind entrou na lista depois (decisão
    68).
55. **A senha própria do owner da organização e do administrador da instância abre só o console.** Para usar os
    apps, o owner da organização entra como qualquer pessoa, pelo jeito de entrar que a organização ligou. Assim, quando
    o login da empresa chegar, quem a empresa desliga perde os apps junto, mesmo mantendo a senha do console até alguém
    retirá-lo (decisões 24 e 52), e a chave de tudo não circula pelos apps. Ficaram de fora a senha própria abrir também
    os apps, que deixaria um owner da organização desligado pela empresa usando os apps, e abrir os dois só até o login
    da empresa ser ligado, que mudaria a regra no meio do caminho. Abre-se mão de: o owner da organização que também usa
    um app tem duas entradas, uma para configurar e outra para usar.
56. **A identidade, a licença e a carência de cada app viram três peças separadas.** Até aqui, o certificado do kit
    fazia os três trabalhos: identificava o app, provava o contrato e, pela data de validade, marcava o fim da carência
    (decisões 10 e 13). Agora a **identidade** é um certificado curto, emitido pela própria Maind e trocado sozinho pela
    ligação, como o da organização (decisão 44). A **licença** é um documento assinado pela Maind, com a data do fim do
    contrato e a carência, que chega ao mAIg pela ligação no handshake contratual e a cada renovação. E a autoridade
    certificadora pública fica só para provar que o endereço da Maind é mesmo da Maind. O app para por uma ação manual
    da Maind ou quando a licença vence sem ser renovada, ao fim da carência, e renovar o contrato é trocar a licença, sem
    reinstalar nada. Ficaram de fora manter um certificado só, que valeria até o fim do contrato se vazasse, e separar
    só a licença, com o certificado da identidade valendo um ano. Abre-se mão de: são três peças em vez de uma, e a
    confiança nos certificados dos kits passa a se apoiar na Maind, e não numa autoridade de mercado; e faltam dizer
    quanto dura a carência e com quanta antecedência o owner da organização é avisado, ponto do dono da Maind.
57. **O registro e o cofre de cada organização ficam cifrados, e o sigilo vale também contra quem opera a máquina.**
    Cifrar é embaralhar os dados com uma chave, de modo que sem ela não se lê nada. A chave é de cada organização, e
    quem opera a máquina, a equipe da Maind na hospedagem dela e a TI do cliente na casa do cliente, não a alcança.
    Quem copia o disco ou a cópia de segurança não lê nada. Assim, a promessa de que o administrador da instância não
    lê o registro das organizações (decisão 12) deixa de ser só de tela. Ficaram de fora só a tela proteger, que
    deixaria a equipe da Maind ler o registro e as senhas dos bancos de todos os clientes, e cifrar só o cofre, que
    deixaria o registro legível. Abre-se mão de: custa mais e é mais complexo; perder a chave é perder o registro, e é
    preciso um jeito seguro de recuperá-la; e fica como risco aceito que quem controla a máquina ligada ainda alcance,
    com muito esforço, o que estiver em uso naquele momento. Onde fica a chave, como se recupera e quanto custa são
    pontos do arquiteto do mAIg.
58. **O registro guarda o que foi pedido, mas nunca os dados.** De cada leitura de banco, a linha guarda, além do fato,
    a consulta feita e quantas linhas voltaram, e nunca os dados devolvidos. De cada pedido à IA, guarda a camada e a
    descrição do que foi enviado, já decididas (decisão 20), e nunca o texto inteiro do pedido nem a resposta. Assim, o
    auditor sabe o que foi lido e o que foi à IA, e o registro não vira uma cópia dos dados da empresa guardada sem
    prazo (decisão 15). Segue o ponto de partida do Horus, que não guarda o conteúdo das perguntas e das respostas
    (D-090 do Horus). Ficaram de fora guardar tudo, que faria do registro um alvo tão sensível quanto o próprio banco, e
    guardar só o fato, que deixaria o auditor sem saber o que foi perguntado ao banco. Abre-se mão de: o auditor não
    reconstrói palavra por palavra o que a IA recebeu e respondeu.
59. **Os apps podem anotar no registro do mAIg o que acontece só dentro deles, com a linha marcada como "informada
    pelo app".** O que acontece só no app, como baixar uma conversa do Horus em PDF ou alterar um painel, o núcleo não
    vê. O app pode pedir ao núcleo que anote, e a linha fica marcada, separada das que o núcleo viu com os próprios
    olhos. Assim, o auditor confere tudo num lugar só e sabe o que é prova do núcleo e o que é a palavra do app.
    Ficaram de fora cada app manter o próprio registro, que obrigaria o auditor a conferir em dois lugares e deixaria
    esse registro na nuvem da Maind, fora do controle da TI do cliente, e anotar sem marcar a diferença. Abre-se mão
    de: o registro cresce, e uma linha informada pelo app vale menos como prova.
60. **A visão diz o que o núcleo garante sozinho e o que depende de cada app.** Uma seção da visão, ao lado de "De quem
    o mAIg protege, e de quem não", separa as duas listas. O núcleo garante sozinho: as senhas e as chaves nunca saem
    dele (decisão 5); cada pedido é conferido contra a permissão e é de uma organização só; os bancos são só lidos; o
    registro é feito por ele e cifrado (decisão 57); a camada da IA (decisão 20) e o teto da resposta (decisão 43) são
    conferidos antes de qualquer coisa sair; e o passe é assinado por ele (decisão 32). É de cada app: como ele monta a
    pergunta à IA, o que mostra na tela, a lógica de dentro do módulo, inclusive não misturar os pedidos de duas
    organizações, e as linhas que informa ao registro (decisão 59). O que é do app se confere pela auditoria de fora
    (decisão 36), pelo registro e pela suspensão de emergência (decisão 46). Ficaram de fora seguir dizendo que o
    núcleo cuida de tudo, que prometeria mais do que ele cumpre, e escrever isso só na mf da execução isolada, longe de
    quem lê a visão. Abre-se mão de: fica escrito que parte da proteção depende do app.
61. **O "só leitura" tem duas travas, e cada consulta tem limite.** O usuário de cada banco cadastrado precisa ser um
    que só consegue ler: no cadastro, o mAIg testa esse usuário e o recusa se ele conseguir gravar. E o próprio mAIg só
    faz pedidos de leitura (decisão 5). Além disso, cada consulta tem um limite de tempo e de linhas, para que uma
    consulta pesada não deixe lento nem derrube o banco de produção. Esse limite de linhas protege o banco e é outro,
    maior, que o teto da resposta, que protege o que sai (decisão 43). Ficaram de fora só o mAIg garantir, com uma trava
    só, e só o usuário que lê, sem limites, que deixaria uma consulta pesada derrubar o banco. Abre-se mão de: a TI do
    cliente cria esse usuário antes de começar, e uma consulta grande demais é cortada. Os valores dos limites e o
    jeito de testar o usuário são pontos do arquiteto do mAIg.
62. **Um pedido à IA que leva mais do que a camada do app permite é recusado inteiro.** O núcleo confere a camada antes
    de enviar (decisão 20) e, se o pedido passa dela, não o envia. A pessoa vê uma mensagem clara, que diz que a pergunta
    precisaria mandar à IA mais dados do que a organização permite, e o caso fica no registro, à vista do owner da
    organização e do auditor. Ficaram de fora cortar só o excedente, que daria uma resposta pior ou errada sem que a
    pessoa soubesse, e segurar o pedido até o owner da organização aprovar, que faria dele o gargalo de cada pergunta.
    Abre-se mão de: a pessoa fica sem a resposta e precisa reformular a pergunta.
63. **O módulo de um app nunca sai para a internet por conta própria.** O único caminho dele para fora são os serviços
    do núcleo, e o núcleo só sai para a Maind e para cada provedor de IA (decisão 19). Se um app precisa da web, como a
    cotação do dólar, ele pede ao provedor de IA que faça a pesquisa, sob a governança da IA: a camada, o limite e o
    registro. Segue o ponto de partida do Horus, em que a pesquisa na web é feita pela busca do provedor de IA (D-162 do
    Horus). A TI do cliente continua liberando só as saídas para a Maind e para cada provedor. Ficaram de fora saídas
    liberadas uma a uma pela TI do cliente, que abririam caminhos a mais para os dados e trariam de volta a aprovação
    por app, e a saída livre, que quebraria a promessa de que nada sai sem passar pelo núcleo. Abre-se mão de: um app
    que dependa de outro serviço da internet não cabe no mAIg sem uma decisão nova.
64. **Os avisos chegam também por e-mail, sem dado nenhum, e quem recebe se configura em dois níveis.** O e-mail traz
    só o tipo do aviso e a organização, como "Mudança no que vai à IA, organização Farma Vida", e um link para o
    console, onde fica o detalhe; o aviso aparece sempre no console. A organização tem uma lista de configurações que
    dizem o que ela permite e para quais papéis, e uma delas é quais papéis podem receber avisos por e-mail. Quem é de
    um papel permitido escolhe, nas próprias preferências, se quer receber; quem é de um papel não permitido nem vê a
    opção e não recebe. Quem mexe nas configurações da organização é o owner da organização. O link de primeiro acesso
    não é aviso e chega sempre (decisão 51). Ficaram de fora o e-mail com o detalhe completo, que levaria informação
    sensível para fora do mAIg, e os avisos só no console, que ninguém veria a tempo. Abre-se mão de: o mAIg passa a
    enviar e-mail; e uma organização que desliga o e-mail de um papel enfraquece para ele os avisos das decisões 46, 53
    e 54, que seguem só no console.
65. **Quem opera a máquina faz a cópia de segurança do cofre e do registro.** Na hospedagem da Maind, a Maind faz a
    cópia; na casa do cliente, a TI do cliente, com uma ferramenta que vem no mAIg. A cópia sai cifrada com a chave de
    cada organização (decisão 57), e cada restauração fica anotada no registro de cada organização (decisão 29).
    Ficaram de fora a Maind fazer a cópia de todas as instâncias, que tiraria da casa do cliente o registro e o cofre,
    mesmo cifrados, e cada um fazer como quiser, sem ferramenta, que deixaria a cópia sem cifra ou esquecida. Abre-se mão
    de: a TI do cliente ganha mais uma tarefa, e restaurar depende da chave da organização. Como a ferramenta faz e
    restaura a cópia é ponto do arquiteto do mAIg.
66. **Uma pessoa que está em duas organizações tem duas contas, uma em cada.** O mesmo e-mail pode aparecer nas duas, e
    cada owner da organização cuida da conta que está na dele. Sair de uma organização não mexe na outra, e, na tela de
    entrada, a pessoa escolhe a organização. O login único vale dentro de cada organização (decisão 40). Mantém as
    organizações separadas de ponta a ponta (decisão 9) e sem um nível de empresa acima delas (decisão 11). Ficaram de
    fora uma conta só para as duas, que ficaria acima das organizações sem que se soubesse quem manda nela, e uma conta
    por empresa, que exigiria esse nível de empresa. Abre-se mão de: a pessoa tem duas senhas e escolhe a organização
    ao entrar.
67. **Só o owner da organização cadastra a senha de um banco, e a TI do cliente não ganha um papel próprio.** Quem
    conhece a senha costuma ser a TI do cliente, que a passa ao owner da organização, e ele a cadastra no console; a
    senha vai para o cofre e não aparece mais em tela nenhuma. Não há problema em a senha passar por ele, porque o owner
    da organização tem uma espécie de fé pública dentro da organização: é quem a empresa indicou para responder por ela
    no mAIg, e o que ele faz vale como ato da organização. Mantém os papéis como estão: o owner da organização, o
    auditor, a pessoa que usa os apps e o administrador da instância. Ficaram de fora um papel novo para a TI cadastrar a
    senha sem ser owner da organização e fazer da TI um dos owners da organização, que lhe daria a chave de tudo,
    inclusive o registro. Abre-se mão de: a senha passa pelas mãos do owner da organização, que muitas vezes não é da
    área técnica.
68. **O owner da organização libera um acesso de suporte por tempo limitado, só à configuração.** Quando precisa de
    ajuda, o owner da organização liga no console um acesso para a equipe da Maind, que vale por um tempo curto, como
    até o fim do dia, e mostra só a configuração, nunca o registro nem as senhas. Liberar o acesso é um ato sensível:
    fica no registro e avisa o auditor (decisão 54). Combina com a fé pública do owner da organização (decisão 67): é ele
    quem decide quando a Maind olha. Mantém a regra de que a equipe da Maind não enxerga as organizações (decisão 12)
    fora dessa janela. Ficaram de fora o suporte nunca ver nada, que deixaria o owner da organização mostrando a tela
    por videochamada, e a equipe da Maind ver sempre a configuração de todas as organizações, que quebraria a decisão
    12. Abre-se mão de: enquanto o acesso dura, a equipe da Maind vê a configuração da organização.
69. **Um pedido em andamento quando a ligação cai fica guardado por um tempo curto, como 15 minutos.** Se a ligação
    volta nesse tempo, a resposta chega normalmente; passado o prazo, o mAIg descarta o pedido, e a pessoa vê que a
    ligação caiu e que precisa refazer a pergunta. As tarefas marcadas seguem a regra que já existe: esperam até uma
    hora (D-285 do Horus). Detalha o "guardar o que estava em andamento" da decisão 6. Ficaram de fora não guardar
    nada, que obrigaria a refazer uma pergunta demorada por causa de uma oscilação de segundos, e guardar sem prazo,
    que entregaria respostas velhas fora de contexto. Abre-se mão de: o mAIg precisa de espaço para guardar os
    pedidos, e numa queda longa a pessoa refaz a pergunta. O que conta exatamente como "em andamento" e como guardar
    são pontos do arquiteto do mAIg.
70. **A luz de estado e a página de status são do mAIg, iguais para todos os apps.** Cada app mostra a luz que o mAIg
    fornece, e uma página do mAIg mostra o estado da ligação e de todos os apps instalados: em uso, pausado, suspenso,
    parado ou com atualização necessária. Para quem é de uma organização, a página mostra os apps da organização dela,
    sem revelar os das outras (decisão 9). Assim, a mesma queda aparece do mesmo jeito em qualquer app, e nenhum app
    refaz esse trabalho. Muda o ponto de partida do Horus, em que cada organização tinha a luz e a página do próprio app
    (D-283, D-284 do Horus). Ficaram de fora uma luz por app, que mostraria a mesma queda de jeitos diferentes, e duas
    luzes, uma do mAIg e outra do app, que confundiriam a pessoa. Abre-se mão de: um app que precise mostrar algo só
    dele, como a lentidão de um serviço próprio, faz isso à parte.
71. **Quando algo para e não volta sozinho, o aviso vai para quem resolve.** Se a ligação com a Maind não volta depois
    de alguns minutos, como 5, são avisados quem cuida da instância, a TI do cliente ou a equipe da Maind na hospedagem
    dela, e também a Maind, que vê a queda do outro lado. Se um banco para de responder, ou a IA para por chave recusada
    ou falta de crédito, é avisado o owner da organização, que cuida deles. Os avisos chegam no console e por e-mail,
    sem dado nenhum (decisão 64). Confirma, para o banco e a IA, o ponto de partida do Horus (D-240, D-268 do Horus).
    Ficaram de fora avisar só quem cuida da instância, que receberia avisos de banco e de IA que não são assunto dela, e
    não avisar ninguém, que deixaria a pessoa que usa o app descobrir a queda. Abre-se mão de: chegam mais avisos, e uma
    queda curta da internet pode gerar um aviso à toa.
72. **A organização fica ativa sozinha quando tem o certificado e um owner com acesso, e cada app tem as condições
    dele; um cockpit mostra o que falta.** A organização passa a ativa quando tem o certificado dela (decisão 28) e ao
    menos um owner da organização com acesso. Cada app declara o mínimo de que precisa para entrar em uso; o Horus, por
    exemplo, precisa de um banco e de uma IA. O mAIg marca tudo sozinho, sem ninguém clicar em "ativar". Uma tela de
    cockpit, no console, mostra numa olhada só as pendências de ativação da organização e de cada app, com o passo que
    resolve cada uma. O administrador da instância vê só as pendências que são da instância, como uma organização sem
    owner com acesso, sem ver a configuração dela (decisão 12). Muda o ponto de partida do Horus, que exigia a ligação,
    um banco e a IA para toda organização (D-277 do Horus). Ficaram de fora as condições do Horus para toda
    organização, que travariam um app que não lê banco, e o administrador da instância marcar a organização como ativa,
    que lhe daria uma decisão que é da organização. Abre-se mão de: uma organização ativa pode ainda não ter nenhum app
    pronto.
73. **A permissão de um app vale pelo banco inteiro, e o recorte se faz no próprio banco.** Quando o owner da
    organização libera um banco para um app, o app pode ler tudo o que o usuário cadastrado do banco alcança. Para que
    o app não veja uma parte, como a tabela de salários, a TI do cliente cria no banco um usuário mais restrito, que só
    enxerga o que pode ser lido, e o owner da organização o cadastra como um banco à parte. Combina com as duas travas
    do "só leitura" (decisão 61). Ficaram de fora o owner da organização escolher no console as tabelas e as vistas de
    cada app, e escolher até as colunas, que deixariam o cadastro mais pesado. Abre-se mão de: cada recorte pede um
    usuário novo no banco, e o owner da organização não consegue ajustá-lo sozinho.
74. **Além da resposta pronta, só sai o que o owner da organização liberar, app por app.** Duas saídas podem ser
    liberadas. A consulta feita ao banco volta à nuvem do app, para a pessoa ver de onde veio o número, e traz só a
    instrução, sem dado nenhum. A planilha sai direto do mAIg para o navegador da pessoa, sem passar pela nuvem do app e
    sem esbarrar no teto da resposta, pelo mesmo caminho em que o navegador já renova o passe (decisão 37); vale o
    limite de cada consulta (decisão 61), e as colunas sensíveis seguem mascaradas. Liberar uma saída é ato sensível
    (decisão 54), e cada planilha baixada fica no registro. Confirma, com essas regras, o ponto de partida do Horus, em
    que o owner da organização pode liberar outras saídas (D-189, D-196 do Horus). Ficaram de fora só a resposta pronta,
    sempre, que tiraria a planilha e a origem do número, e todas as saídas pela nuvem do app, que fariam a planilha
    esbarrar no teto e passar pela nuvem da Maind. Abre-se mão de: dá mais configuração, e a planilha baixada sai do
    controle do mAIg, porque fica no computador da pessoa.
75. **O limite de gasto de IA de cada app avisa antes e trava no teto.** Quando o app chega a 80% do limite, o owner da
    organização é avisado, no console e por e-mail (decisão 64). Ao chegar a 100%, o núcleo recusa os pedidos do app à
    IA, e a pessoa vê uma mensagem clara, até o owner da organização subir o limite, o que ele faz na hora no console,
    ou até o período virar. Os outros apps seguem com a IA, porque o limite é por app. Ficaram de fora só avisar, que
    faria do limite uma sugestão, e travar sem aviso antes, que faria o owner da organização descobrir pelo app parado.
    Abre-se mão de: no fim do período, o app pode parar para todos até alguém subir o limite. O que o limite mede e em
    que período vale seguem em aberto.
76. **Por padrão, o Horus trabalha na camada 1, e a IA não vê os números; só a Análise avançada manda dados à IA.**
    Na pergunta comum, à IA vão só a pergunta e os nomes das tabelas: a IA escreve a consulta, o mAIg a roda no banco e
    monta a resposta, e a IA não vê número nenhum. Quando a pessoa liga, numa pergunta, a Análise avançada do Horus, o
    "ultra thinking", os dados voltam à IA para ela raciocinar sobre eles. Isso só acontece se o owner da organização
    tiver liberado ao Horus a camada que essa análise pede (decisão 20); se não tiver, o pedido é recusado inteiro, com
    mensagem clara (decisão 62). Assim, a promessa de que nenhum dado da empresa vai à IA vale por padrão, e quem
    precisa de mais escolhe, pergunta por pergunta, dentro do que a organização permite. Ficaram de fora o Horus
    depender da camada 2 ou da camada 3 para funcionar, que mandaria dados à IA em toda pergunta. Abre-se mão de: na
    pergunta comum, uma explicação como "por que as vendas caíram" sai mais pobre, e o Horus fica mais difícil de
    construir. Que o Horus responde bem na camada 1 é ponto do arquiteto do mAIg confirmar.
77. **Só o owner da organização cadastra as pessoas, direto no console; não há convite de dentro dos apps.** Quem usa
    um app e quer chamar um colega pede ao owner da organização por fora, e ele cadastra a pessoa no console. O
    cadastro fica num caminho só, no núcleo (decisão 23), sob a fé pública do owner da organização (decisão 67). Muda o
    ponto de partida do Horus, em que o convite nascia dentro do app e o owner aprovava (D-262 do Horus). Ficaram de
    fora o convite pelo app com aprovação do owner da organização, que abriria um segundo caminho para o núcleo cuidar,
    e o convite que vale sem aprovação, que tiraria do owner da organização o controle de quem entra. Abre-se mão de:
    quem quer chamar um colega pede por fora e espera.
78. **O encerramento de uma organização é pedido pelo owner dela ou pela Maind, executado pelo administrador da
    instância e tem volta por 30 dias.** O owner da organização pede no console, ou a Maind pede, quando todos os
    contratos da organização acabaram. O administrador da instância executa, e os owners da organização e o auditor
    são avisados. Por 30 dias, a configuração fica guardada, e o encerramento pode ser desfeito; depois, os apps, os
    bancos e a IA saem de vez, e o registro segue até a desinstalação do app (decisão 31). Ficaram de fora o
    administrador da instância encerrar quando decidisse, que lhe daria uma decisão que é da organização, e encerrar
    sem volta, em que um engano obrigaria a configurar tudo de novo. Abre-se mão de: a configuração fica guardada por
    30 dias, e o ato passa por dois papéis.
79. **Uma organização pode ter até dois auditores, e um deles pode ser de fora da empresa.** O auditor de fora, como o
    de uma auditoria externa, recebe um acesso que vence numa data que o owner da organização define, como o fim da
    auditoria. Os dois só leem o registro e não mudam nenhuma configuração (decisão 12). Nomear ou trocar um auditor é
    ato sensível e avisa os outros owners da organização e o auditor que já existe (decisão 54). Ficaram de fora um
    auditor só, sempre de dentro, que obrigaria a auditoria externa a pedir ao auditor uma cópia ou uma consulta, e
    auditores sem limite, que deixariam o registro à vista de gente demais. Abre-se mão de: mais uma pessoa lê o
    registro, que tem nomes e o que cada um consultou.
80. **O owner da organização e os auditores podem baixar a cópia do registro, num arquivo assinado pelo mAIg.** A
    assinatura prova que a cópia é a original, sem nenhuma alteração. Cada download fica no registro e avisa os outros
    papéis, como todo ato sensível (decisão 54). Fora do mAIg, a cópia fica com quem a baixou, e o registro mostra quem
    baixou e quando. Ficaram de fora só o owner da organização baixar, que deixaria o auditor dependendo de quem ele
    confere para ter a prova, e ninguém baixar, que desfaria a cópia da decisão 21 e perderia a prova na desinstalação.
    Abre-se mão de: são mais pessoas com uma cópia de dados de pessoas fora do mAIg.
81. **A instância tem um registro próprio, onde só se acrescenta, para os atos que não tocam organização nenhuma.**
    Desinstalar um app, que só acontece quando nenhuma organização o tem mais e apaga o registro dele, fica ali, com quem
    fez e quando. Quem lê é o administrador da instância, e o registro da instância não tem dado de
    organização nenhuma. Completa a decisão 29, que anota no registro de cada organização o que a toca. Ficaram de fora
    não anotar nada, que deixaria sem prova quem desinstalou e quando, e anotar na Maind, que guardaria lá o histórico
    das instalações de cada cliente. Abre-se mão de: é mais um registro para guardar e proteger.
82. **Instalar o kit de uma organização entra no registro dela.** O kit vale para um app e uma organização, porque a
    contratação é por organização (decisões 10 e 11). Por isso instalá-lo é um ato do administrador da instância que toca
    essa organização e fica anotado no registro dela, como manda a decisão 29, com quem instalou e quando. O registro da
    instância fica só com o que não toca organização nenhuma, como a desinstalação de um app (decisão 81). Fecha a
    inconsistência 14 da avaliação de 10/11/2026. Ficou de fora anotar a instalação do kit no registro da instância, que
    esconderia do auditor da organização quando o kit dela entrou. Abre-se mão de: nada relevante; corrigem-se os
    exemplos que tratavam a instalação do kit como ato sem organização.
