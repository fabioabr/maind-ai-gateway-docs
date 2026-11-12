# Maind AI Gateway (mAIg) — documentação

Documentação pública do **Maind AI Gateway (mAIg)**. O código fica num repositório privado, à parte.

Comece pela [visão e pelos objetivos](visao.md). As macro funcionalidades estão em [produto/](produto/00-mapa-das-macro-funcionalidades.md) (rascunho do PO).

## O que é

Com a IA, os dados viraram o combustível dos projetos. Mas a maioria das empresas não deixa um banco de dados
visível de fora, nem mesmo por trás de um firewall ou de uma VPN. O mAIg resolve isso: é uma plataforma da Maind instalada **na casa
do cliente** (ou hospedada pela Maind, para quem não quer instalar). Quem acessa os dados é o mAIg, e o owner da
organização, indicado pela empresa, controla o que cada produto pode ver e fazer; a TI do cliente libera as saídas, cria
os usuários dos bancos e, na casa do cliente, opera a instância.

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
    Foi decidido depois: cada app tem duas identidades atestadas pela Maind, a do módulo, com a chave criada no mAIg, e
    a da parte de fora, com a chave na nuvem da Maind (decisão 139); e os apps contratados entram no setup, sem um gesto
    por app (decisão 134).
5. **Dados e IA também são nativos.** Entram no núcleo, além do item 3:
   - as conexões com os dados: o cofre das senhas dos bancos e o acesso só de leitura;
   - a governança da IA: as chaves dos provedores, os modelos permitidos, os limites e o custo por app;
   - os servidores MCP do cliente.

   Nenhum app toca uma senha de banco ou uma chave de IA: pede ao mAIg, que confere a permissão e registra no log.
6. **O mAIg liga para fora.** Ele abre a conexão com a Maind e a mantém aberta, e as partes de fora dos apps
   respondem por ela. O cliente não abre porta de entrada nenhuma; só libera a saída para o endereço da Maind (e, para a IA, as saídas da decisão 19). O
   certificado do handshake vale dentro dessa conexão. Se ela cair, o mAIg reconecta sozinho e guarda o que estava
   em andamento.
    Foi decidido depois: a ligação tem dois caminhos já na onda 1.0, com a troca automática para o alternativo (decisão
    154), e a saída para a Maind é um nome só, com IP fixo (decisão 149).
7. **Marca Maind.** O mAIg leva a marca da Maind. Por enquanto, o desenho não considera apps vendidos com a marca
   de outra empresa (white label).
    Foi decidido depois: o console usa o design system da casa, o mesmo das telas do primeiro app, com a marca da Maind
    (decisão 155).
8. **Só apps da Maind, por enquanto.** O mAIg não recebe sistemas do próprio cliente nem apps de outras empresas, e
   não se vende sozinho: entra junto com um app da Maind. Reabrir quando um cliente pedir para ligar um sistema
   próprio ao mAIg.
9. **Várias organizações por instância, em qualquer infraestrutura.** O mAIg atende várias organizações
   (multi-tenant): uma instância, que é cada instalação física do mAIg, atende uma ou mais organizações, e cada
   organização tem o seu próprio conjunto de apps e de regras de governança. O mAIg roda na infraestrutura do cliente
   ou na da Maind. Numa mesma infraestrutura física pode haver mais de uma instância, para organizações diferentes.
    Foi decidido depois: a organização nasce na Maind, no Gerenciador do mAIg, e chega à instância pela ligação (decisão
    128); e "qualquer infraestrutura" ganhou a lista: máquina virtual, VPS, Kubernetes ou só Docker (decisão 143).
10. **A Maind libera cada app por certificado; depois, dois passos.** Fechada a contratação, a Maind entrega um **kit de
    instalação** com um **certificado digital emitido pela Maind**, abaixo de uma autoridade certificadora pública e
    confiável. Instalado o kit, o mAIg conversa com um **servidor da Maind Tech** para o **handshake contratual**, que
    confere a contratação e libera o app. Liberado pela Maind, o app segue em dois passos: o **administrador da
    instância** o instala na instância, uma vez só, e o **owner de cada organização** o libera e configura para a dele.
    A identidade, a licença e a carência foram separadas depois em três peças (decisão 56).
    Foi decidido depois: o kit não traz certificado pronto e deixou de ser um arquivo entregue pela Maind: os apps
    contratados chegam pela ligação e são instalados no setup, sem um PDF nem um clique por app (decisões 134 e 138); o
    app autorizado depois do setup chega como "app autorizado", e o administrador da instância clica em instalar
    (decisão 137); liberar e configurar segue com o owner da organização (decisão 135).
11. **A contratação é por organização.** Cada organização contrata os próprios apps, e o handshake contratual libera o
    app só para ela. Um contrato comercial pode listar várias organizações da mesma empresa.
12. **O registro é do owner da organização e de um auditor.** Dentro da organização, consultam o registro (log e auditoria) o
    **owner da organização** e um **auditor** que ele nomeia, que só lê o registro e não muda nenhuma configuração. O
    administrador da instância vê só o que é da instância (as instalações, o estado e as versões), nunca o registro das
    organizações. Quantos auditores uma organização pode ter foi decidido depois: até dois, e um deles pode ser de fora
    da empresa (decisão 79).
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
    Depois, a primeira versão foi dividida em duas ondas, a 1.0 e a 1.1 (decisão 92).
    No fechamento da primeira versão, os dois jeitos de entrar, usuário e senha e conta Google, e a governança da IA
    inteira ficaram na onda 1.0 (decisões 98 e 112), e o recorte completo, com a onda de cada capacidade, ficou escrito
    (decisão 95).
    Na arquitetura de 12/11/2026, a onda 1.0 cresceu com o Gerenciador do mAIg, a interface de setup, o formato
    Kubernetes e o segundo caminho da ligação (decisões 128 e 132; decisões 143 e 154).
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
    rede do cliente fica como possível segundo produto, para um cliente de segurança extrema. A lista de saídas foi
    completada depois (decisão 90).
    Foi decidido depois: os provedores da primeira versão são cinco, o OpenRouter, o Amazon Bedrock, a OpenAI, a
    Anthropic e o Google (decisão 141).
20. **O owner da organização escolhe, app por app, o que o pedido ao provedor de IA pode levar.** O pedido tem três camadas:
    a **camada 1** leva só a pergunta e a descrição do banco (nomes de tabelas e colunas), sem dado nenhum; a **camada 2**
    leva também totais já somados, sem linhas de pessoas nem de clientes; a **camada 3** leva também linhas de dados. Cada
    app começa na camada 1, e o owner da organização sobe a camada dele no console. O núcleo confere a camada antes de
    enviar o pedido e anota no registro a camada de cada pedido e uma descrição do que foi enviado; se o registro guarda
    também o texto inteiro fica em aberto. Abre-se mão de: o núcleo precisa reconhecer o que é dado e o que é total, o
    Horus precisa funcionar bem na camada 1, e o owner da organização ganha mais uma configuração. Se o registro guarda o
    texto inteiro foi decidido depois: nunca guarda (decisão 58).
    Foi decidido depois: um total calculado sobre poucas linhas conta como linha de dados (decisão 113).
21. **Um app só sai da instância quando nenhuma organização o tem mais, e antes cada owner é avisado e pode baixar uma
    cópia do registro.** O administrador da instância só desinstala um app quando todas as organizações da instância já
    o retiraram (ou foram encerradas, como diz a decisão 31). Antes, o owner de cada organização retira o app da dele, é avisado de que o
    registro sai com a desinstalação e pode baixar uma cópia. O registro continua saindo só com a desinstalação, como diz
    a decisão 15, e o administrador da instância nunca o vê, como diz a decisão 12. Abre-se mão de: uma organização que
    não retira o app segura a desinstalação para todas; baixar o registro é uma função nova, e a cópia sai do controle do
    mAIg; e o registro de um app já retirado fica guardado até a desinstalação. Quem pode baixar a cópia e em que forma
    foi decidido depois (decisão 80).
    No fechamento da primeira versão, ficou decidido que retirar e desinstalar chegam na onda 1.1, com a cópia assinada
    do registro (decisão 106), que toda desinstalação começa com um aviso, com prazo, também às organizações que já
    retiraram o app (decisão 107), e que ninguém retira um app no lugar do owner da organização (decisão 108).
22. **A chave de IA é sempre do cliente.** Cada organização traz a própria conta em cada provedor de IA e cadastra a chave
    no cofre do mAIg. A Maind não dá chave nem paga a IA de nenhum cliente: a fatura do provedor vai direto à empresa, e a
    Maind não carrega o custo de IA. Reabre-se quando uma venda travar por falta de conta num provedor. Abre-se mão de: o
    cliente precisa ter conta num provedor antes de começar, o que atrasa o primeiro dia de quem não tem equipe de TI; e as
    decisões do Horus sobre a chave dada pela Maind (D-264 e D-267 do Horus) deixam de valer no mAIg.
    Foi decidido depois: os cinco provedores da primeira versão, sempre com a chave da empresa (decisão 141), e o custo
    mostrado como informado pelo provedor ou "estimado" (decisão 153).
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
    arquiteto do mAIg. A regra de quem retira um owner foi decidida depois (decisão 52), e depois a gestão dos owners
    passou ao administrador da instância, sem o limite de três (decisões 83 e 84).
26. **O console se alcança só de dentro da rede do cliente.** Na instalação na casa do cliente, o owner da organização, o
    auditor e o administrador da instância chegam ao console de dentro da rede da empresa, e quem está fora entra pela VPN
    que a empresa já mantém. O mAIg não abre porta de entrada nem passa a tela do console pela conexão com a Maind, de modo
    que a configuração e o registro não passam pela Maind. Na hospedagem da Maind, o console fica nos servidores da Maind e
    se abre de qualquer lugar, com login. Abre-se mão de: quem trabalha fora do escritório depende da VPN da empresa, e uma
    empresa sem VPN precisa montar uma. Reabre-se se uma venda travar por falta de acesso de fora; o passo seguinte seria
    deixar a TI do cliente ligar, por conta dela, a passagem pela Maind.
    Foi decidido depois: o console, a tela de entrada, a renovação do passe, a página de status e a planilha ficam num
    endereço só na rede do cliente (decisão 140).
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
    Foi decidido depois: a organização nasce no Gerenciador do mAIg, e o certificado dela é emitido quando o arquivo
    assinado chega à instância, logo depois de a chave temporária ser digitada na etapa 2 da interface de setup (decisão
    128); o kit do app não traz certificado pronto (decisão 138).
29. **Os atos do administrador da instância que tocam uma organização também são anotados no registro dela.** Criar a
    organização e o usuário do primeiro owner da organização, e instalar ou atualizar um app que ela contratou, viram
    linhas no registro da organização, com o nome de quem fez e a hora. O administrador da instância só escreve essas
    linhas e nunca lê o registro, de modo que a decisão 12 segue valendo. Assim o auditor responde sozinho quando um app
    mudou de versão e quem o mudou, também na hospedagem da Maind, onde quem muda é a equipe da Maind. Abre-se mão de: o
    administrador ganha um caminho de escrita no registro, que precisa ser protegido contra abuso; o mesmo ato vira uma
    linha em cada organização que usa o app; e os atos que não tocam nenhuma organização seguem sem anotação. A
    desinstalação, que só acontece quando nenhuma organização tem mais o app e exclui o registro dele, ainda
    não tem onde ser anotada. Reabre-se se o dono da Maind quiser anotar também esses atos num registro próprio da
    instância. Faltam dizer como o administrador da instância escreve no registro sem poder lê-lo nem alterá-lo, ponto do
    arquiteto do mAIg, e se a desinstalação deixa alguma anotação e onde, ponto do dono da Maind. Depois, instalar o kit
    de uma organização passou a entrar no registro dela (decisão 82), e a desinstalação e os outros atos que não tocam
    organização nenhuma foram decididos: ficam no registro da instância (decisão 81).
    Foi decidido depois: criar a organização passou a ser o gesto de digitar a chave temporária na interface de setup,
    ou no console para uma organização a mais, e é esse gesto que entra no registro dela (decisão 128); o usuário do
    primeiro owner da organização é criado pelo próprio mAIg no fim do setup (decisão 136).
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
    arquiteto do mAIg. Quem pede e quem executa o encerramento, e a volta por 30 dias, foram decididos depois (decisão 78).
    No fechamento da primeira versão, ficou decidido que a organização encerrada continua sem travar a desinstalação, e
    que só um pedido de volta à espera de execução a segura, até a volta ser executada (decisão 107); e que o
    encerramento chega inteiro na onda 1.1 (decisão 114).

## Decisões da rodada do login pelo mAIg (10/11/2026 e 11/11/2026)

Nasceram de uma exigência da TI de um cliente: a instalação do mAIg só pode ser vista de dentro da rede da empresa ou
pela VPN dela.

32. **O login começa no endereço do mAIg, e a nuvem dos apps confia só no passe que o mAIg assina.** A pessoa entra pelo
    endereço do mAIg da organização, que fica na rede do cliente e, se a TI do cliente quiser, só se alcança de dentro
    dela ou pela VPN da empresa. O mAIg confere a pessoa pelo jeito de entrar que a organização ligou e emite um passe,
    uma credencial curta assinada com a chave do certificado da organização (decisão 28), que diz quem é a pessoa, de que
    organização e com que papéis. O navegador leva à nuvem só um código de uso único, que a parte de fora do app troca
    pelo passe pela ligação com o mAIg. A senha da pessoa e a resposta do login da empresa ficam no mAIg e nunca chegam à
    nuvem da Maind, e a nuvem não consegue fabricar um passe, porque não tem a chave da organização, que nasce no mAIg e
    nunca sai dele (decisão 86). Detalha a decisão
    23. Abre-se mão de: a máquina da pessoa precisa alcançar o mAIg para entrar; o certificado da organização passa a
    valer em todo login, e um certificado vencido tranca a organização inteira; e, na hospedagem da Maind, falta dizer
    se o endereço do mAIg pode ser limitado à rede de cada empresa, ponto do dono da Maind. Foi decidido depois que, na
    primeira versão, esse endereço fica aberto na internet, protegido pelo login, e que fechar essa rede fica para a
    segunda versão do mAIg ou depois (decisão 48).
    Foi decidido depois: o endereço do mAIg é um só na rede do cliente (decisão 140), e a nuvem de cada app conhece a
    organização pelo Gerenciador do mAIg, que é a origem (decisão 128).
33. **A nuvem dos apps fala com o mAIg só pela ligação que o mAIg abre, a mesma para todas as pessoas.** Cada mAIg
    mantém aberta a ligação com o ponto de conexão da Maind, em duas ou três linhas, para não depender de uma só
    (decisão 6). Todas as pessoas e todas as organizações da instância usam essa ligação. Cada pedido leva um número,
    para a resposta voltar ao lugar certo, e o passe de quem pediu, que o núcleo confere em todo pedido. Pela ligação
    descem só os pedidos que o mAIg conhece, nunca acesso à rede do cliente: a Maind pede, e o mAIg decide. Quem está na
    internet não enxerga o mAIg, e nenhum computador da Maind precisa alcançá-lo por outro caminho. Abre-se mão de: o
    ponto de conexão vira a peça da Maind mais valiosa para um atacante e precisa de mais de um servidor; e uma resposta
    grande não pode atrasar as outras, ponto do arquiteto do mAIg.
    Foi decidido depois: a ligação tem dois caminhos, o principal e o alternativo por WebSocket, com troca automática,
    já na onda 1.0 (decisão 154); o ponto de conexão fica atrás de um nome só da Maind, com IP fixo (decisão 149); e a
    primeira conexão do setup, pela chave temporária, é a única sem o certificado da instância (decisão 133).
34. **A resposta pronta volta à nuvem do app.** É o que deixa os apps funcionarem sem instalar as telas na casa do
    cliente, e não muda. A resposta que a pessoa vê passa pela nuvem da Maind para chegar à tela dela. Abre-se mão de: a
    promessa à TI do cliente deixa de ser "nada dos dados sai" e passa a ser "sai só a resposta que a pessoa vê, e ela
    não fica guardada" (decisão 35); e até onde a resposta pode levar dados de pessoas segue em aberto, ponto do dono da
    Maind. Foi decidido depois: a resposta tem um teto de 200 linhas por app, com as colunas sensíveis mascaradas
    (decisão 43), e além dela só sai o que o owner da organização liberar, app por app (decisão 74).
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
    Foi decidido depois: o caminho alternativo para a empresa cujo intermediário quebra a ligação é o WebSocket, feito
    pela Maind e já na onda 1.0, com a troca automática (decisão 154).
39. **O mAIg baixa a versão nova sozinho, mas só a instala com o aval da TI do cliente.** Na casa do cliente, o mAIg
    busca a versão nova na Maind pela ligação de saída, confere pela assinatura que ela é da Maind e espera o aval do
    administrador da instância para se instalar, dentro da janela de horário que ele define. A TI do cliente pode adiar
    até um prazo máximo, e uma correção de segurança tem prazo curto. Na hospedagem da Maind, a instalação segue
    sozinha, na janela. Substitui a decisão 30 na casa do cliente: nenhum código novo entra sem a TI do cliente ver
    antes, que é o que a TI de segurança rígida exige. Abre-se mão de: um cliente que demora fica mais tempo numa versão
    velha, e a convivência entre versões pesa mais; e faltam dizer o prazo máximo de adiamento e o da correção de
    segurança, pontos do dono da Maind. Os dois prazos foram decididos depois (decisão 45).
    Foi decidido depois: atualizar é trocar a caixa do contêiner (decisão 142); no Kubernetes, o núcleo manda o cluster
    trocar a caixa, depois do aval e dentro da janela, com permissão só no próprio namespace (decisão 144); e o app
    autorizado depois do setup espera o clique do administrador da instância (decisão 137). Pela ligação chegam só o
    aviso da versão nova, o manifesto e o bilhete; a imagem do mAIg é baixada do registro de imagens da Maind, no
    mesmo nome, pelo zelador ou pelo cluster (decisões 134 e 149).
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
    Foi decidido depois: a primeira versão não tem modo sem ligação (decisão 122), e, na onda 1.0, o servidor de e-mail
    é configurado e testado antes de a primeira organização ser criada (decisão 125).
    Foi decidido depois: a organização nasce no Gerenciador do mAIg, e a ligação de pé é exigida no gesto que a traz à
    instância, a chave temporária digitada na interface de setup ou no console (decisão 128); a chave só é gasta quando
    chega à Maind (decisão 133).
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
    Foi decidido depois: o núcleo sugere as colunas sensíveis, e o owner da organização confere (decisão 111); e a
    resposta que passa do teto é recusada inteira, com mensagem clara (decisão 124).
44. **O certificado da organização vale 30 dias, se renova sozinho e nunca para sem aviso.** O mAIg o renova sozinho
    pela ligação com a Maind, que já é requisito (decisão 41). Se a renovação falhar, o certificado atual segue valendo
    até o fim, e o owner da organização e a TI do cliente são avisados 7 dias antes de ele vencer. Cancelá-lo antes do
    prazo exige a autorização de duas pessoas da Maind, e o ato fica no registro da organização. Como ele assina todo
    login (decisão 32), é a peça que mais precisa de cuidado: ninguém é trancado por esquecimento, e um certificado
    roubado vale pouco tempo. Abre-se mão de: a Maind mantém a emissão de certificados sempre de pé, porque uma falha
    longa dela chega a trancar organizações; e a política do certificado de cada kit segue em aberto, ponto do arquiteto
    do mAIg. Foi decidido depois, em parte: a identidade de cada app passou a ser um certificado curto, trocado sozinho
    pela ligação, como o da organização (decisão 56).
    Foi decidido depois: a chave do cartório que atesta os certificados fica num cofre portátil de código aberto, com a
    raiz fora de linha e usada só com duas pessoas (decisão 148).
45. **A TI do cliente adia uma versão nova do mAIg por até 30 dias, e uma correção de segurança por até 7.** Passado o
    prazo, o mAIg continua na versão velha, porque nada se instala sem o aval, mas os apps passam a recusar a conversa:
    a pessoa vê o aviso "Atualização necessária", e o painel da instância mostra o motivo e a versão, como no Horus
    (D-292 do Horus). Detalha a decisão 39 e mantém o aval da TI do cliente. Ficaram de fora a instalação forçada ao fim
    do prazo, que desfaria a decisão 39, e prazos de 60 e 15 dias, que deixariam uma falha de segurança aberta por duas
    semanas. Abre-se mão de: quem adia além do prazo fica com os apps parados até dar o aval. Na hospedagem da Maind,
    os prazos não pesam, porque a instalação segue sozinha, na janela.
    Foi decidido depois: a mesma regra, por prazo, vale para o módulo de cada app, e a contagem de versões que convivem
    saiu do texto das mfs (decisão 109).
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
    Foi decidido depois: as peças próprias da Maind ficam num ambiente separado também das instâncias hospedadas
    (decisão 146), na mesma nuvem pública do primeiro app, numa conta separada (decisão 147); e as instâncias hospedadas
    rodam num Kubernetes gerenciado, um namespace por instância (decisão 151).
49. **A visão diz de quem o mAIg protege, e de quem não, inclusive a própria Maind.** Uma seção da visão traz uma linha
    por ator: alguém de fora, a organização vizinha, um app com defeito, a nuvem da Maind, o canal de atualização, a
    emissão de certificados, a equipe da Maind, a TI do cliente, o owner da organização e o provedor de IA. Cada linha diz
    o que o mAIg impede e o que fica como risco aceito. Sobre si mesma, a Maind promete que uma nuvem invadida não se
    passa por ninguém (decisão 32), não leva a base inteira (decisão 43) e não instala nada na casa do cliente sem o aval
    da TI do cliente (decisão 39), e que a TI do cliente pode parar um app sem depender dela (decisão 46). E admite que
    uma nuvem invadida alcança, por pouco tempo, o que as pessoas que estão usando os apps já poderiam ver (decisão 37).
    Ficaram de fora escrever só o que o mAIg impede, porque a omissão custaria confiança, e deixar a pergunta só para o
    modelo técnico do arquiteto do mAIg. Abre-se mão de: o risco que sobra fica escrito, à vista de qualquer leitor.
    Foi decidido depois: o cartório, o canal de atualização e o Gerenciador ficam num ambiente próprio da Maind,
    separado da nuvem dos apps (decisão 146), e a parte de fora de cada app tem a própria identidade, atestada pela
    Maind e conferida pelo núcleo a cada conversa (decisão 139).
50. **A confirmação em dois passos chega na segunda versão do mAIg, e é configurável.** A confirmação em dois passos
    pede uma segunda prova além da senha, como um código no celular. Na primeira versão, o owner da organização, o
    auditor e o administrador da instância entram só com usuário e senha (decisão 24). Na segunda versão, junto com a
    versão 2.1 do Horus, a confirmação entra como configuração da entrada: quem configura escolhe se a liga e para quem.
    Ficaram de fora torná-la obrigatória desde a primeira versão, para os três papéis ou para todos, e obrigatória só na
    hospedagem da Maind. Abre-se mão de: na primeira versão, uma senha roubada abre a chave de tudo, e na hospedagem da
    Maind o console fica aberto na internet protegido só pela senha (decisão 48). O que acontece depois de várias
    tentativas erradas e como se recupera uma senha esquecida seguem com o arquiteto do mAIg.
    Foi decidido depois: cada pessoa pede o próprio link de troca de senha, e a conta fica bloqueada por um tempo depois
    de várias tentativas erradas (decisão 99).
51. **O link de primeiro acesso do owner da organização vai direto do mAIg ao e-mail dele.** Quem cria o usuário, o
    administrador da instância, só digita o e-mail do owner da organização e nunca vê o link. Se o link vence, ele pede
    outro, que também vai direto ao e-mail, e cada envio fica anotado no registro da organização (decisão 29). Assim,
    nem a TI do cliente nem a equipe da Maind consegue usar o link antes do owner da organização e entrar no lugar dele,
    com acesso ao que o papel delas nunca vê (decisão 12). Substitui, no mAIg, o ponto de partida do Horus, em que quem
    criava o usuário recebia o link e o entregava por fora do sistema (D-290 do Horus). Ficaram de fora manter a
    entrega por fora, com a anotação de quando e de onde a senha foi criada, e dividir o link em duas metades.
    Abre-se mão de: o mAIg passa a enviar e-mail, e um e-mail digitado errado manda o link para outra pessoa; e falta
    dizer como o mAIg envia esse e-mail, ponto do arquiteto do mAIg. O caminho do e-mail e o ajuste desta promessa
    foram decididos depois (decisão 90).
    Foi decidido depois: o e-mail do primeiro owner da organização vem da Maind, registrado no Gerenciador do mAIg, e o
    próprio mAIg cria o usuário dele no fim do setup e manda o link; o administrador da instância não digita esse e-mail
    (decisão 136).
52. **Qualquer owner da organização retira outro, sozinho.** O retirado e o auditor são avisados na hora, e a retirada
    fica anotada no registro da organização. Quem sai da empresa perde o acesso no mesmo dia, sem depender de mais
    ninguém, e quem foi afastado sem motivo pode ser recolocado por outro owner da organização. Ficaram de fora exigir a
    confirmação de um segundo owner da organização, que numa organização com só dois impediria um de retirar o outro, e
    deixar a retirada com o administrador da instância, que lhe daria poder sobre quem manda na organização do cliente
    (decisão 51). Abre-se mão de: um owner da organização pode afastar outro sem motivo, e o freio é o aviso e o
    registro. O que acontece quando a organização fica sem nenhum owner da organização com acesso foi decidido depois
    (decisão 53). Substituída pela decisão 83: um owner não retira mais outro.
53. **Uma organização sem nenhum owner com acesso é destravada pelo administrador da instância, com espera e aviso.**
    O administrador da instância digita o e-mail do novo owner da organização, e o link de primeiro acesso vai direto
    para ele (decisão 51). A troca só vale 48 horas depois. Nesse tempo, os owners da organização antigos e o auditor são
    avisados por e-mail e podem barrá-la; se alguém barra, a troca não acontece, e o caso volta à conversa entre a empresa
    e o administrador da instância. Tudo fica no registro da organização (decisão 29). Enquanto isso, os apps seguem
    funcionando; só falta quem configure. Ficaram de fora destravar na hora, que deixaria o administrador da instância
    escolher quem manda na organização, e exigir um pedido formal da empresa à Maind, que seria lento e poria a Maind no
    meio até na casa do cliente. Abre-se mão de: dois dias sem ninguém que configure. Passou a seguir a regra da
    decisão 83: a troca vale na hora, com volta em 48 horas.
54. **Os atos sensíveis do owner da organização avisam na hora os outros owners e o auditor.** A lista é fixa: mudar o
    que o pedido ao provedor de IA pode levar (decisão 20), cadastrar ou trocar um banco, trocar o auditor, subir o teto
    da resposta (decisão 43) e baixar a cópia do registro (decisão 21). Toda troca de owner da organização feita pelo
    administrador da instância também avisa (decisão 83). O aviso só informa e não pede aprovação, e o ato segue no registro, como todos. Assim, nada importante
    muda em silêncio, e o auditor fica sabendo no mesmo dia. Ficaram de fora uma trava que a organização ligaria para
    exigir a aprovação de um segundo owner da organização, que não funcionaria numa organização com um owner só, e não
    ter lista, que deixaria um ato grave semanas sem ninguém ver. Abre-se mão de: chegam mais avisos, e um owner da
    organização mal-intencionado ainda age, só não escondido. Liberar o acesso de suporte da Maind entrou na lista depois (decisão
    68).
    Marcar ou desmarcar uma coluna sensível também entrou na lista depois (decisão 111).
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
    Foi decidido depois: o certificado do app não vem pronto no kit, a chave dele nasce no mAIg (decisão 138), e cada
    app tem duas identidades, a do módulo e a da parte de fora (decisão 139); o kit deixou de ser um arquivo: o app
    chega pela ligação, no setup ou como "app autorizado" (decisões 134 e 137).
57. **O registro e o cofre de cada organização ficam cifrados, e o sigilo vale também contra quem opera a máquina.**
    Cifrar é embaralhar os dados com uma chave, de modo que sem ela não se lê nada. A chave é de cada organização, e
    quem opera a máquina, a equipe da Maind na hospedagem dela e a TI do cliente na casa do cliente, não a alcança.
    Quem copia o disco ou a cópia de segurança não lê nada. Assim, a promessa de que o administrador da instância não
    lê o registro das organizações (decisão 12) deixa de ser só de tela. Ficaram de fora só a tela proteger, que
    deixaria a equipe da Maind ler o registro e as senhas dos bancos de todos os clientes, e cifrar só o cofre, que
    deixaria o registro legível. Abre-se mão de: custa mais e é mais complexo; perder a chave é perder o registro, e é
    preciso um jeito seguro de recuperá-la; e fica como risco aceito que quem controla a máquina ligada ainda alcance,
    com muito esforço, o que estiver em uso naquele momento. Onde fica a chave, como se recupera e quanto custa são
    pontos do arquiteto do mAIg. Quem guarda a cópia de recuperação foi decidido depois (decisão 87).
58. **O registro guarda o que foi pedido, mas nunca os dados.** De cada leitura de banco, a linha guarda, além do fato,
    a consulta feita e quantas linhas voltaram, e nunca os dados devolvidos. De cada pedido à IA, guarda a camada e a
    descrição do que foi enviado, já decididas (decisão 20), e nunca o texto inteiro do pedido nem a resposta. Assim, o
    auditor sabe o que foi lido e o que foi à IA, e o registro não vira uma cópia dos dados da empresa guardada sem
    prazo (decisão 15). Segue o ponto de partida do Horus, que não guarda o conteúdo das perguntas e das respostas
    (D-090 do Horus). Ficaram de fora guardar tudo, que faria do registro um alvo tão sensível quanto o próprio banco, e
    guardar só o fato, que deixaria o auditor sem saber o que foi perguntado ao banco. Abre-se mão de: o auditor não
    reconstrói palavra por palavra o que a IA recebeu e respondeu.
    Foi decidido depois: no registro, o valor de um filtro que toca uma coluna sensível aparece mascarado (decisão 103).
59. **Os apps podem anotar no registro do mAIg o que acontece só dentro deles, com a linha marcada como "informada
    pelo app".** O que acontece só no app, como baixar uma conversa do Horus em PDF ou alterar um painel, o núcleo não
    vê. O app pode pedir ao núcleo que anote, e a linha fica marcada, separada das que o núcleo viu com os próprios
    olhos. Assim, o auditor confere tudo num lugar só e sabe o que é prova do núcleo e o que é a palavra do app.
    Ficaram de fora cada app manter o próprio registro, que obrigaria o auditor a conferir em dois lugares e deixaria
    esse registro na nuvem da Maind, fora do controle da TI do cliente, e anotar sem marcar a diferença. Abre-se mão
    de: o registro cresce, e uma linha informada pelo app vale menos como prova.
    Foi decidido depois: a linha informada pelo app só tem campos fixos (decisão 104).
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
    No fechamento da primeira versão, "cortada" foi lida assim: a consulta que passa do limite é interrompida, e o
    pedido falha com mensagem clara, sem resultado parcial (decisão 124).
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
    Foi decidido depois: num cluster que não aplica a política de rede, o mAIg instala o núcleo e recusa instalar
    qualquer módulo até a política valer, com o diagnóstico feito pelo núcleo (decisão 145).
64. **Os avisos chegam também por e-mail, sem dado nenhum, e quem recebe se configura em dois níveis.** O e-mail traz
    só o tipo do aviso e a organização, como "Mudança no que vai à IA, organização Farma Vida", e um link para o
    console, onde fica o detalhe; o aviso aparece sempre no console. A organização tem uma lista de configurações que
    dizem o que ela permite e para quais papéis, e uma delas é quais papéis podem receber avisos por e-mail. Quem é de
    um papel permitido escolhe, nas próprias preferências, se quer receber; quem é de um papel não permitido nem vê a
    opção e não recebe. Quem mexe nas configurações da organização é o owner da organização. O link de primeiro acesso
    não é aviso e chega sempre (decisão 51). Ficaram de fora o e-mail com o detalhe completo, que levaria informação
    sensível para fora do mAIg, e os avisos só no console, que ninguém veria a tempo. Abre-se mão de: o mAIg passa a
    enviar e-mail; e uma organização que desliga o e-mail de um papel enfraquece para ele os avisos das decisões 46, 53
    e 54, que seguem só no console. Depois, os avisos de segurança passaram a chegar sempre (decisão 85).
    Na onda 1.0, cada aviso tem destinatário fixo, e a lista de configuração e as preferências de aviso chegam na onda
    1.1 (decisão 126).
65. **Quem opera a máquina faz a cópia de segurança do cofre e do registro.** Na hospedagem da Maind, a Maind faz a
    cópia; na casa do cliente, a TI do cliente, com uma ferramenta que vem no mAIg. A cópia sai cifrada com a chave de
    cada organização (decisão 57), e cada restauração fica anotada no registro de cada organização (decisão 29).
    Ficaram de fora a Maind fazer a cópia de todas as instâncias, que tiraria da casa do cliente o registro e o cofre,
    mesmo cifrados, e cada um fazer como quiser, sem ferramenta, que deixaria a cópia sem cifra ou esquecida. Abre-se mão
    de: a TI do cliente ganha mais uma tarefa, e restaurar depende da chave da organização. Como a ferramenta faz e
    restaura a cópia é ponto do arquiteto do mAIg.
    Foi decidido depois: a cópia leva também o registro da instância e a configuração inteira, e a restauração devolve a
    instância como estava na data da cópia (decisão 116).
    Foi decidido depois: a cópia tem uma chave própria da instância, criada na instalação e mostrada uma vez, que quem
    opera a máquina guarda fora dela, além do código de recuperação de cada organização (decisão 152).
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
    Foi decidido depois: na casa do cliente, o suporte da Maind chega ao console pela VPN que a TI do cliente concede,
    na onda 1.1 (decisão 127).
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
    Foi decidido depois: a luz de estado entra na onda 1.0, e a página de status chega na onda 1.1, com o login do mAIg,
    só de dentro da rede ou pela VPN (decisão 121).
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
    Foi decidido depois: instalado não quer dizer liberado; o owner da organização libera e configura cada app depois do
    setup, e o app fica ativo sozinho com o mínimo (decisão 135).
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
    Foi decidido depois: as duas saídas chegam na onda 1.1 (decisão 95), e, na consulta devolvida à tela, o valor de um
    filtro que toca uma coluna sensível aparece mascarado (decisão 103). A planilha segue a regra das colunas sensíveis:
    a coluna marcada sai sempre mascarada (decisões 43 e 111).
75. **O limite de gasto de IA de cada app avisa antes e trava no teto.** Quando o app chega a 80% do limite, o owner da
    organização é avisado, no console e por e-mail (decisão 64). Ao chegar a 100%, o núcleo recusa os pedidos do app à
    IA, e a pessoa vê uma mensagem clara, até o owner da organização subir o limite, o que ele faz na hora no console,
    ou até o período virar. Os outros apps seguem com a IA, porque o limite é por app. Ficaram de fora só avisar, que
    faria do limite uma sugestão, e travar sem aviso antes, que faria o owner da organização descobrir pelo app parado.
    Abre-se mão de: no fim do período, o app pode parar para todos até alguém subir o limite. O que o limite mede e em
    que período vale seguem em aberto.
    Foi decidido depois: o limite mede dinheiro, vale por app e recomeça a cada mês do calendário (decisão 112).
    Foi decidido depois: o limite trava pelo número que aparece na visão do consumo, informado pelo provedor ou
    "estimado" (decisão 153).
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
    No fechamento da primeira versão, a regra foi lida assim, para qualquer app: a camada liberada vale por app e é o
    teto; cada pedido diz a camada de que precisa, e o pedido acima do teto é recusado inteiro (decisões 20 e 62).
77. **Só o owner da organização cadastra as pessoas, direto no console; não há convite de dentro dos apps.** Quem usa
    um app e quer chamar um colega pede ao owner da organização por fora, e ele cadastra a pessoa no console. O
    cadastro fica num caminho só, no núcleo (decisão 23), sob a fé pública do owner da organização (decisão 67). Muda o
    ponto de partida do Horus, em que o convite nascia dentro do app e o owner aprovava (D-262 do Horus). Ficaram de
    fora o convite pelo app com aprovação do owner da organização, que abriria um segundo caminho para o núcleo cuidar,
    e o convite que vale sem aprovação, que tiraria do owner da organização o controle de quem entra. Abre-se mão de:
    quem quer chamar um colega pede por fora e espera.
    Foi decidido depois: o cadastro de várias pessoas de uma vez, por uma lista, chega na onda 1.1 (decisão 101).
78. **O encerramento de uma organização é pedido pelo owner dela ou pela Maind, executado pelo administrador da
    instância e tem volta por 30 dias.** O owner da organização pede no console, ou a Maind pede, quando todos os
    contratos da organização acabaram. O administrador da instância executa, e os owners da organização e o auditor
    são avisados. Por 30 dias, a configuração fica guardada, e o encerramento pode ser desfeito; depois, os apps, os
    bancos e a IA saem de vez, e o registro segue até a desinstalação do app (decisão 31). Ficaram de fora o
    administrador da instância encerrar quando decidisse, que lhe daria uma decisão que é da organização, e encerrar
    sem volta, em que um engano obrigaria a configurar tudo de novo. Abre-se mão de: a configuração fica guardada por
    30 dias, e o ato passa por dois papéis.
    Foi decidido depois: qualquer owner da organização pede a volta, não importa quem pediu o encerramento, e conta a
    data do pedido (decisão 115); o encerramento chega inteiro na onda 1.1 (decisão 114); e um pedido de volta à espera
    de execução segura a desinstalação de um app (decisão 107).
79. **Uma organização pode ter até dois auditores, e um deles pode ser de fora da empresa.** O auditor de fora, como o
    de uma auditoria externa, recebe um acesso que vence numa data que o owner da organização define, como o fim da
    auditoria. Os dois só leem o registro e não mudam nenhuma configuração (decisão 12). Nomear ou trocar um auditor é
    ato sensível e avisa os outros owners da organização e o auditor que já existe (decisão 54). Ficaram de fora um
    auditor só, sempre de dentro, que obrigaria a auditoria externa a pedir ao auditor uma cópia ou uma consulta, e
    auditores sem limite, que deixariam o registro à vista de gente demais. Abre-se mão de: mais uma pessoa lê o
    registro, que tem nomes e o que cada um consultou.
    Foi decidido depois: na onda 1.0, há um auditor só, de dentro da empresa, e o segundo e o de fora chegam na onda 1.1
    (decisão 97); o auditor de fora chega ao console pela VPN que a TI do cliente concede (decisão 127).
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
    Foi decidido depois: o registro da instância nasce com a instância, com a lista dos atos que anota (decisão 102), e
    vai na cópia de segurança (decisão 116).
82. **Instalar o kit de uma organização entra no registro dela.** O kit vale para um app e uma organização, porque a
    contratação é por organização (decisões 10 e 11). Por isso instalá-lo é um ato do administrador da instância que toca
    essa organização e fica anotado no registro dela, como manda a decisão 29, com quem instalou e quando. O registro da
    instância fica só com o que não toca organização nenhuma, como a desinstalação de um app (decisão 81). Fecha a
    inconsistência 14 da avaliação de 10/11/2026. Ficou de fora anotar a instalação do kit no registro da instância, que
    esconderia do auditor da organização quando o kit dela entrou. Abre-se mão de: nada relevante; corrigem-se os
    exemplos que tratavam a instalação do kit como ato sem organização.
    Foi decidido depois: "instalado o kit" passou a ser "chegado o manifesto"; os apps contratados entram no setup, e a
    instalação de cada um segue anotada no registro da organização (decisão 134).
83. **A gestão dos owners da organização passa ao administrador da instância.** É ele quem cadastra, exclui e substitui
    os owners de cada organização; um owner da organização não cadastra nem retira outro. A troca vale na hora, mas com
    volta: os owners da organização e os auditores são avisados na hora e, por 48 horas, qualquer um deles pode
    barrá-la; se alguém barra, ela se desfaz sozinha, e tudo fica no registro da organização (decisão 29). O link de
    primeiro acesso do owner novo vai direto ao e-mail dele (decisão 51). Substitui a decisão 52 e absorve a 53: a
    organização sem owner com acesso é só um caso de substituição. Assim, quem rouba a senha de um owner não consegue
    tirar os outros e ficar sozinho no comando. Ficaram de fora a troca na hora sem volta, que deixaria a organização
    dependendo da boa-fé de quem administra a instância, e a troca que só vale depois de 48 horas, que manteria por dois
    dias o acesso de quem sai da empresa. Abre-se mão de: na hospedagem da Maind, quem gere os owners de cada cliente é a
    equipe da Maind, e o freio é a volta em 48 horas; e um owner retirado com razão pode barrar a própria retirada, se
    ainda for avisado.
    Foi decidido depois: o administrador da instância segue cadastrando, excluindo e substituindo os owners da
    organização, menos o primeiro, cujo e-mail vem da Maind e cujo usuário o mAIg cria no fim do setup (decisão 136).
84. **Na contratação, há por enquanto três tipos de assento: membro, owner da organização e administrador da
    instância.** Membros e owners da organização são quantos a organização contratar; administradores da instância são
    no máximo três por instância, sem custo. O limite de três owners por organização da decisão 25 deixa de valer: vale o
    número de assentos de owner contratados. Os assentos são os do Horus, o primeiro app, e valem por enquanto. Abre-se
    mão de: quanto mais owners da organização, mais senhas com a chave de tudo, sem a confirmação em dois passos na
    primeira versão (decisão 50).
    Foi decidido depois: os administradores da instância também cuidam uns dos outros, até três (decisão 100).
85. **Os avisos de segurança chegam sempre, e a organização não os desliga.** São eles: a troca de um owner da
    organização pelo administrador da instância (decisão 83), a suspensão de um app (decisão 46) e os atos sensíveis,
    que chegam sempre aos auditores (decisão 54). Os outros avisos seguem configuráveis (decisão 64). Além disso, "mudar
    quem recebe aviso" e "mudar os jeitos de entrar" passam a ser atos sensíveis. Assim, a volta de 48 horas da troca de
    owner e a conferência do auditor funcionam sempre, e ninguém desliga o auditor para agir escondido. Ficaram de fora
    só o aviso da troca de owner chegar sempre, que deixaria o owner desligar o e-mail do auditor, e tudo seguir
    configurável, que faria os freios dependerem de uma configuração. Abre-se mão de: algumas pessoas recebem e-mails
    que não podem recusar.
    Foi decidido depois: o aviso de que um app vai ser desinstalado entrou entre os avisos de segurança (decisão 107),
    e, na onda 1.0, cada aviso tem destinatário fixo (decisão 126).
86. **A chave privada de todo certificado do mAIg nasce dentro do mAIg e nunca sai dele; a Maind recebe só a chave
    pública.** A chave privada é o carimbo que assina, por exemplo o passe de cada pessoa (decisão 32); a pública é a
    parte que qualquer um confere. O mAIg gera o par de chaves, guarda a privada e manda à Maind só a pública, que a
    Maind importa e atesta, como um cartório que reconhece a firma sem ter a caneta. Vale para o certificado da
    organização (decisões 28 e 44), o do kit (decisão 56) e o da ligação (decisão 38). Assim, nem a Maind, nem quem a
    invadir, consegue fabricar o passe de alguém, e a promessa da visão de que a nuvem não fabrica passes passa a ter a
    decisão por baixo. Ficaram de fora a Maind gerar o carimbo e guardar uma cópia, que permitiria a ela fabricar passes
    de qualquer cliente, e a Maind gerar e entregar sem cópia, que faria o carimbo passar por ela. Abre-se mão de: se o
    mAIg perder a chave privada, por exemplo num disco queimado, gera um par novo e pede outro atestado; a Maind não tem
    como recuperar a chave antiga.
    Foi decidido depois: a regra vale também para o certificado do app, que não vem pronto no kit (decisão 138), e a
    parte de fora tem a própria identidade, com a chave na nuvem da Maind (decisão 139); no setup, as chaves privadas
    nascem dentro do mAIg (decisão 132); e as chaves da Maind que atestam ficam num cofre portátil, sem que a Maind
    receba chave privada de cliente (decisão 148).
87. **A cópia de recuperação da chave que cifra o registro e o cofre fica com a própria organização, e nunca com a
    Maind.** Quando a organização nasce, o owner da organização baixa um código de recuperação e o guarda. Para
    restaurar a cópia de segurança numa máquina nova (decisão 65), o mAIg pede esse código. A Maind nunca tem cópia, nem
    na hospedagem dela. A chave é destruída quando nada da organização precisa mais ser lido: com o registro do último
    app dela, na desinstalação (decisões 15 e 31). Daí em diante, nenhuma cópia de segurança antiga pode ser lida.
    Assim, a promessa de que a Maind não lê o registro (decisão 57) vale por construção, também na hospedagem dela.
    Ficaram de fora a Maind guardar a cópia num cofre com duas pessoas, que lhe devolveria a leitura do registro e do
    cofre, e a cópia dividida entre a organização e a Maind, mais complexa. Abre-se mão de: se a organização perder o
    código e o disco ao mesmo tempo, perde o registro e as senhas dos bancos, e o cliente sem TI precisa guardar bem esse
    código.
    Foi decidido depois: a parte da cópia que não é de nenhuma organização fica cifrada com uma chave própria da
    instância, guardada por quem opera a máquina (decisão 152).
88. **Toda versão do módulo de um app é assinada pela Maind, e o mAIg confere a assinatura antes de instalar.** Uma
    versão sem assinatura, ou alterada no caminho, é recusada. Vale para a primeira instalação e para cada atualização.
    O administrador da instância continua instalando os apps, como hoje (decisões 10 e 29). Estende ao módulo de cada app
    a regra que a decisão 39 deu ao próprio mAIg. Assim, ninguém põe um módulo falso dentro da rede do cliente para ler
    os bancos, e a promessa da visão de que "uma versão sem assinatura é recusada" vale para tudo. Ficaram de fora a
    assinatura só na primeira instalação, que deixaria entrar uma atualização falsa, e nenhuma assinatura, que faria a
    segurança do módulo depender do canal de download. Abre-se mão de: a Maind passa a assinar cada versão de cada app.
    Foi decidido depois: no setup, os módulos dos apps contratados entram sozinhos, com a assinatura conferida (decisão
    134); no Kubernetes, o núcleo manda o cluster trocar a caixa pelas versões assinadas (decisão 144).
89. **Cada organização tem um limite de pedidos, configurado pelo owner da organização, e um painel de alertas no
    console.** O limite de pedidos diz quantos pedidos uma pessoa ou um app faz num período; acima dele, o núcleo
    recusa, com mensagem clara. Ele vem com um valor padrão, que o arquiteto do mAIg propõe, e o owner da organização o
    ajusta no console. Quando uma pessoa ou um app chega perto do limite ou o atinge, o alerta aparece no painel de
    alertas do console, o cockpit administrativo que reúne os avisos de segurança, e chega também como aviso de segurança
    (decisão 85). Assim, uma nuvem invadida não leva a base em fatias de 200 linhas sem esbarrar no limite e sem que a
    organização veja. Completa o teto da resposta (decisão 43), que vale por resposta. Ficaram de fora só reescrever a
    promessa e um limite fixo da Maind, igual para todos. Abre-se mão de: quem trabalha muito pode esbarrar no limite
    até o owner da organização ajustá-lo; e o máximo do teto da resposta segue sem número fixo da Maind.
90. **A lista de saídas do mAIg passa a dizer a verdade, e o e-mail sai pelo servidor de e-mail da própria empresa.**
    As saídas que a TI do cliente libera são: a do endereço da Maind; a de cada provedor de IA que a organização
    escolher (decisão 19); a do Google, quando a organização usa a conta Google para entrar, e, na segunda versão, a do
    provedor de identidade da empresa; e a do servidor de e-mail da própria empresa, que a TI do cliente configura na
    instalação e por onde saem os links de primeiro acesso e os avisos (decisões 51 e 64). Na hospedagem da Maind, o
    e-mail sai pelo serviço de e-mail da Maind. A promessa da decisão 51 é ajustada: o link não passa pelas mãos de
    quem cria o usuário, serve uma vez, e o uso fica no registro; quem opera o servidor de e-mail ainda poderia
    alcançá-lo, e por isso o sinal de um uso indevido é o owner da organização encontrar o link já usado. Assim, a
    Maind não fica sabendo quem são os owners e os auditores de cada cliente, e a TI do cliente aprova as saídas reais.
    Ficaram de fora o e-mail sair pela ligação com a Maind, que mostraria à Maind os papéis e os avisos de cada cliente
    e calaria o aviso de ligação caída, e a TI escolher entre os dois caminhos. Abre-se mão de: uma saída e uma
    configuração a mais na casa do cliente, e a promessa deixa de ser "duas saídas".
    Foi decidido depois: o servidor de e-mail é configurado e testado pelo administrador da instância, na onda 1.0, e
    sem isso o console não deixa criar organização (decisão 125).
    Foi decidido depois: a saída para a Maind é um nome só, com IP fixo, na porta 443, atrás do qual ficam a ligação e o
    registro de imagens (decisão 149); os provedores de IA da primeira versão são cinco (decisão 141); e, na hospedagem
    da Maind, o e-mail sai por um serviço que fala SMTP, escolhido na implantação (decisão 150).
91. **Na hospedagem da Maind, o banco do cliente aceita conexão só do endereço fixo da Maind.** A TI do cliente, ou o
    provedor da nuvem dele, libera o banco apenas para esse endereço, com a conversa cifrada e o usuário que só lê
    (decisão 61). Vale para o banco num serviço de nuvem e para o banco num servidor da empresa. O cliente não instala
    nada (decisão 9). Ficaram de fora um conector de saída instalado pelo cliente, que tiraria da hospedagem da Maind o
    "sem instalar nada", e atender só bancos que já estão na nuvem, que limitaria o público dela. Abre-se mão de: o
    banco fica alcançável pela internet, ainda que por um endereço só, e a promessa de que o banco não fica exposto vale
    por inteiro só na casa do cliente. Esta decisão responde o que estava com o arquiteto do mAIg na MF-105.
92. **O mAIg sai em três ondas, para o Horus 2.0 não esperar a governança completa.** A versão 1.0 traz o mínimo para
    o Horus 2.0 sair: o login pelo mAIg e o passe, a ligação, as permissões, o cofre e o registro cifrados, a camada da IA, o teto e o limite de pedidos, as assinaturas, a gestão dos owners da organização, os avisos de segurança e o painel de alertas, a suspensão de um app e a cópia de segurança. A versão 1.1 traz a governança completa: o cockpit de ativação, os dois auditores, a cópia assinada do registro, o acesso de suporte, a volta do encerramento, a planilha, a página de status, as preferências de aviso e as linhas informadas pelo app. A versão 2.0 sai com o
    Horus 2.1: os servidores MCP, o login da empresa, a confirmação em dois passos e o fechamento da rede da instância da
    Maind. Antes de fechar o recorte, o arquiteto do mAIg estima item por item, e o dono da Maind confirma. Detalha a
    decisão 16. Ficaram de fora pôr tudo o que foi decidido na primeira versão, que atrasaria o Horus 2.0 sem saber
    quanto, e deixar o arquiteto propor o recorte, que lhe daria uma escolha de produto. Abre-se mão de: os primeiros
    clientes recebem a governança em duas etapas; e algumas mfs, como a do console, passam a ter partes em duas versões,
    o que o Horus evitou com a regra de uma mf numa versão só.
    No fechamento da primeira versão, os nomes foram acertados: a primeira versão sai em duas ondas, a 1.0 e a 1.1, e a
    segunda versão vem depois; são as três partes que esta decisão chama de versões 1.0, 1.1 e 2.0. O recorte completo,
    com a onda de cada capacidade, está na decisão 95, e a governança da IA ficou inteira na onda 1.0 (decisão 112).
    Na arquitetura de 12/11/2026, a onda 1.0 cresceu com o formato Kubernetes (decisão 143), o segundo caminho da
    ligação (decisão 154), a interface de setup (decisão 132) e o Gerenciador do mAIg (decisão 128), itens a pesar na
    estimativa item por item.
93. **O resultado que o mAIg guarda para um painel abrir mais rápido é um cache, e o cache não entra na cópia de
    segurança.** É uma cópia temporária do resultado de uma consulta, que só serve para não consultar o banco de novo
    (decisão 35). Ela nunca vai para a cópia de segurança (decisão 65) e só é entregue a quem tem permissão de ver o
    mesmo dado, como a decisão 35 já previa. Quanto tempo o cache vale e como ele fica protegido enquanto está
    guardado são pontos do arquiteto do mAIg. Abre-se mão de: depois de uma restauração, o cache recomeça vazio, e os
    painéis voltam a consultar o banco até ele se refazer.
94. **A Maind só para um app à mão em três casos, com duas pessoas autorizando.** Os casos são a falta de pagamento
    depois dos avisos, um incidente de segurança e uma ordem judicial. Duas pessoas da Maind autorizam a ação manual
    (decisão 13), o motivo fica no registro da organização, e o owner da organização e os auditores recebem na hora um
    aviso de segurança (decisão 85). Assim, o cliente sabe exatamente quando pode ser parado, e ninguém da Maind para
    um app sozinho ou por engano. Ficaram de fora parar em qualquer caso, com duas pessoas, que deixaria o cliente sem
    saber quando pode ser parado, e parar só por incidente de segurança, que deixaria a Maind sem saída para a falta de
    pagamento e para uma ordem judicial antes de a licença vencer. Abre-se mão de: a Maind não pode parar um app por
    outro motivo, mesmo que pareça justo.

## Decisões do fechamento da primeira versão (11/11/2026)

Em 11/11/2026, o dono da Maind delegou a um decisor as decisões que faltavam para fechar a documentação da primeira
versão, na parte que fica na casa do cliente. Elas valem como as outras, e o dono da Maind pode rever qualquer uma.

95. **A primeira versão do mAIg sai em duas ondas, a 1.0 e a 1.1, e a segunda versão vem depois; cada capacidade da casa
    do cliente tem a onda marcada, inclusive as que a decisão 92 não cita.** A onda 1.0 é o mínimo para o Horus 2.0
    sair, a onda 1.1 é a governança completa, e a segunda versão do mAIg sai com o Horus 2.1: são as três partes que a
    decisão 92 chamou de versões 1.0, 1.1 e 2.0. Além do que a decisão 92 cita, entram na onda 1.0: várias organizações
    na mesma instância, com a criação da organização e do usuário do primeiro owner da organização; a instalação do kit
    e do app, o handshake contratual, a licença e o app que para no fim do contrato; a ativação automática da
    organização e de cada app, com a tela do app dizendo o que falta; a consulta ao registro no console, com busca; os
    atos do administrador da instância anotados no registro da organização; o código de recuperação; a atualização do
    mAIg e a do módulo de cada app, com a assinatura conferida; o certificado da organização, que se renova sozinho; o
    passe de agendamento e a espera das tarefas marcadas; o pedido guardado por um tempo curto quando a ligação cai; e o
    cache dos painéis. Fica para a onda 1.1 a consulta feita ao banco, que volta à tela só com a instrução, junto com a
    planilha: na onda 1.0, só a resposta pronta sai do mAIg. A onda 1.1 inteira é: o cockpit de ativação; o segundo
    auditor e o auditor de fora, com acesso que vence; a cópia assinada do registro; retirar um app, apagar a
    configuração guardada de um app parado e desinstalar, com aviso e prazo; o encerramento de uma organização e a volta
    em 30 dias; o roteiro de saída do cliente; o acesso de suporte da Maind; a planilha e a consulta devolvida à tela,
    com a liberação das duas saídas; a página de status; as preferências de aviso e a lista "o que a organização
    permite"; as linhas "informadas pelo app"; e o cadastro das pessoas em lote. Ficam para a segunda versão os
    servidores MCP, o login da empresa e a confirmação em dois passos (decisão 92). As capacidades com regra própria
    levam a onda na decisão delas (decisões 96 a 127), e a marca de cada capacidade está em cada mf, no tópico "O que
    entra em cada onda". A regra que resume o recorte: a onda 1.0 liga e para; a onda 1.1 desfaz e encerra. Abre-se mão
    de: a onda 1.0 fica maior do que a lista da decisão 92 deixa ver, e, se a estimativa do arquiteto do mAIg mostrar
    que um item não cabe, o item volta ao dono da Maind (decisão 92); na onda 1.0, o owner da organização olha app por
    app para saber o que falta, e a pessoa não vê de onde veio o número.
    Foi decidido depois: entram também na onda 1.0 a interface de setup, com a instalação no estilo de um gerenciador de
    pacotes, o formato Kubernetes e o segundo caminho da ligação (decisões 132 e 143; decisão 154).
96. **Nove regras que as mfs traziam como proposta do PO, ou como ponto de partida a confirmar, passam a valer como
    decisão.** (1) O owner da organização pausa e retoma um app na organização dele, sem apagar nada. (2) Se o mAIg não
    consegue anotar a linha no registro, ele recusa o pedido: sem anotar, não atende. (3) O pedido recusado também fica
    anotado no registro. (4) Os atos do owner da organização e do auditor no console entram no registro: as mudanças de
    configuração, a nomeação do auditor, as entradas e as consultas ao próprio registro. (5) O owner da organização não
    nomeia a si mesmo auditor. (6) O mAIg não troca de modelo de IA sozinho quando um provedor falha; o app pode pedir
    outro modelo da lista dele. (7) Os modelos permitidos e os limites da IA são por app, e não por pessoa. (8) O
    console é o mesmo programa, com as mesmas telas, na casa do cliente e na hospedagem da Maind. (9) Só o owner da
    organização configura a organização; o auditor entra no console só para ler o registro e os avisos que recebe e, na
    onda 1.1, para baixar a cópia assinada. As nove entram na onda 1.0. Abre-se mão de: se o registro tem um problema,
    os apps param de atender até ele voltar; uma organização pequena precisa de uma segunda pessoa para ser auditora; a
    empresa não limita no mAIg o gasto de IA de uma pessoa ou de uma área; e nenhuma das duas hospedagens tem tela só
    dela.
97. **Na onda 1.0, cada organização tem um auditor só, de dentro da empresa e sem data de vencimento; o segundo auditor
    e o auditor de fora chegam na onda 1.1.** O auditor de fora é o que tem o acesso que vence numa data (decisão 79).
    Abre-se mão de: na onda 1.0, uma auditoria externa pede ao auditor da empresa o que precisar ver.
98. **A primeira versão tem dois jeitos de entrar, usuário e senha e conta Google, os dois na onda 1.0.** Cada
    organização nasce só com usuário e senha ligados, e o owner da organização liga o Google se quiser. Com o Google
    fora do ar, quem entra por ele não começa sessão nova, e quem já entrou segue, porque o passe se renova com o mAIg
    (decisão 37). O login da empresa segue para a segunda versão (decisão 92). Abre-se mão de: o Google é mais um
    periférico para a TI do cliente liberar e mais um motivo para alguém não conseguir entrar.
99. **Cada pessoa pede o próprio link de troca de senha na tela de entrada, e a conta fica bloqueada por um tempo depois
    de várias tentativas erradas.** O link é de uso único e vai direto ao e-mail do cadastro. No bloqueio, a própria
    pessoa é avisada por e-mail. Vale para todos os papéis. O pedido fica anotado no registro da organização, ou no
    registro da instância quando quem pede é um administrador da instância (decisão 102). Ninguém vê nem define a senha
    de outra pessoa. Quem perdeu também o e-mail procura quem cuida do cadastro dele: o owner da organização, para as
    pessoas (decisão 77); o administrador da instância, para o owner da organização (decisão 83); outro administrador da
    instância, para o administrador da instância (decisão 100). Entra na onda 1.0. O número de tentativas e o tempo do
    bloqueio seguem com o arquiteto do mAIg (decisão 50). Abre-se mão de: quem controla a caixa de e-mail de uma pessoa
    consegue trocar a senha dela, e quem está dentro da rede consegue bloquear por um tempo a conta de outra pessoa.
    Foi decidido depois: o link de primeiro acesso do primeiro owner da organização sai no fim do setup, para o e-mail
    registrado no Gerenciador do mAIg (decisão 136).
100. **Os administradores da instância cuidam uns dos outros: um cadastra e retira outro, até três, e o último não pode
    ser retirado.** Cada ato fica no registro da instância e avisa os demais (decisão 102). Se nenhum administrador da
    instância tiver acesso, vale o procedimento da instalação, feito na máquina do mAIg por quem a opera, com o uso
    anotado no registro da instância. A conta do administrador da instância não tem jeito de entrar nem avisos a
    configurar na primeira versão: entra sempre por usuário e senha (decisão 24) e recebe os avisos da instância no
    e-mail dele (decisão 126). Entra na onda 1.0. Como nasce a conta do primeiro administrador da instância e como é o
    procedimento da instalação são pontos do arquiteto do mAIg. Abre-se mão de: um administrador da instância pode
    retirar outro sem pedir a ninguém; o freio é o registro e o aviso.
    Foi decidido depois: o primeiro administrador da instância nasce na interface de setup, definido pela TI do cliente
    que digitou a chave temporária (decisão 132); no Kubernetes, o procedimento da instalação é feito por quem opera o
    cluster, com acesso ao namespace do mAIg (decisão 144).
101. **O cadastro de várias pessoas de uma vez chega na onda 1.1: o owner da organização sobe uma lista no console; na
    onda 1.0, ele cadastra uma a uma.** O cadastro continua sendo só do owner da organização (decisão 77). Abre-se mão
    de: quem instalar na onda 1.0 cadastra as pessoas uma a uma.
102. **O registro da instância nasce com a instância, na onda 1.0, anota os atos que não tocam organização nenhuma e
    fica guardado enquanto a instância existir.** Os atos: cadastrar e retirar um administrador da instância; o pedido
    de troca de senha de um administrador da instância; o uso do procedimento da instalação; configurar e testar o
    servidor de e-mail; instalar ou trocar o certificado do endereço do mAIg; fazer e restaurar a cópia de segurança; e,
    na onda 1.1, desinstalar um app. Só os administradores da instância o leem (decisão 81), e ele vai na cópia de
    segurança (decisão 116). Abre-se mão de: é mais um registro para guardar e proteger desde o primeiro dia.
    Na arquitetura de 12/11/2026, o registro da instância nasce no primeiro acesso à interface de setup, antes de
    qualquer outro ato, e anota cada etapa do setup (decisão 132).
103. **No registro e na consulta devolvida à tela, o valor de um filtro aparece mascarado quando o filtro toca uma
    coluna sensível.** Os outros valores, como o período e a cidade, aparecem. Vale no registro desde a onda 1.0 e na
    consulta devolvida à tela na onda 1.1. Abre-se mão de: quem lê o registro vê que houve um filtro por CPF, mas não
    qual CPF, e a regra depende de a coluna estar marcada como sensível (decisão 111).
104. **A linha do registro "informada pelo app" só tem campos fixos: o tipo do ato, o alvo, a hora e a pessoa.** O tipo
    do ato vem de uma lista que o app declara ao ser instalado; o alvo vem por um código; a pessoa, o núcleo tira do
    passe; e o núcleo recusa o que foge disso. Chega na onda 1.1 (decisão 92). Como o app declara a lista dos tipos de
    ato é ponto do arquiteto do mAIg. Abre-se mão de: a linha diz o ato e o código do alvo, como "baixou a conversa
    4812", e não o assunto.
105. **A primeira versão não envia o registro para sistemas de fora e não tem alerta automático de comportamento
    estranho.** A saída do registro é a cópia assinada, na onda 1.1 (decisão 80), e o único alerta automático é o do
    limite de pedidos (decisão 89). As duas capacidades não entram na primeira versão, e nenhuma versão está marcada
    para elas. Abre-se mão de: a empresa que tem uma central de segurança própria não recebe as linhas do mAIg nela.
106. **Retirar um app, apagar a configuração guardada de um app parado e desinstalar chegam juntos na onda 1.1, com a
    cópia assinada do registro; na onda 1.0, um app só para, e nenhum registro é excluído.** Na onda 1.0, um app para
    pela pausa do owner da organização, pela suspensão do administrador da instância, pelo fim da licença ou pela ação
    manual da Maind (decisão 94), e o owner da organização continua podendo apagar, um a um, o cadastro de um banco e a
    chave de uma IA. Os três gestos esperam a cópia assinada porque a retirada dá ao owner da organização o aviso e o
    direito à cópia do registro (decisão 21), e a cópia é da onda 1.1 (decisões 80 e 92). Abre-se mão de: na onda 1.0, o
    app que a organização não quer mais fica pausado, e o instalado por engano continua instalado; a configuração e o
    registro seguem guardados.
107. **Toda desinstalação começa com um aviso de segurança, com prazo, a toda organização que tem registro naquele app,
    e só se conclui no fim do prazo, se nenhuma organização ativa tiver o app.** O aviso vai aos owners da organização e
    aos auditores, e alcança as organizações que retiraram o app e as encerradas que o tinham; todas podem baixar a
    cópia assinada dentro do prazo. A organização encerrada não segura a desinstalação, nem dentro dos 30 dias da volta
    (decisão 31). O que segura é o pedido de volta: enquanto houver um pedido de volta à espera de execução, o console
    não conclui a desinstalação; a volta é executada primeiro, e a organização que voltou segura a desinstalação como
    qualquer outra (decisão 21). A organização encerrada que não pede a volta dentro do prazo do aviso ainda pode voltar
    depois, dentro dos 30 dias, e a volta devolve só o que ainda existir. Chega na onda 1.1. O tamanho do prazo é
    número, fora do escopo do fechamento. Abre-se mão de: toda desinstalação demora no mínimo o prazo do aviso, e a
    organização encerrada que deixa passar o prazo pode voltar sem aquele app e sem o registro dele.
108. **Ninguém retira um app no lugar do owner da organização: o impasse da organização que não responde se resolve pela
    troca do owner da organização ou pelo encerramento da organização.** A troca é a do owner da organização que não
    responde (decisão 83), e o encerramento é o que o owner da organização ou a Maind pedem (decisão 78). A retirada à
    força não entra na primeira versão; os dois caminhos valem na onda 1.1, quando retirar e encerrar existem (decisões
    106 e 114). Abre-se mão de: os dois caminhos levam dias, e o app fica instalado, sem uso, enquanto isso.
109. **A regra de versão única é por prazo, para o mAIg e para o módulo de cada app: a TI do cliente adia a versão nova
    dentro do prazo e, vencido o prazo, o que ficou velho deixa de atender, com o aviso "Atualização necessária".** Com
    o mAIg vencido, todos os apps recusam a conversa (decisão 45); com o módulo de um app vencido, só aquele app para. A
    contagem de versões que convivem sai do texto das mfs. Entra na onda 1.0. Os dias do prazo do módulo são número,
    fora do escopo do fechamento; enquanto a Maind não disser outro, valem os da decisão 45. Como um mAIg novo conversa
    com um módulo antigo dentro do prazo é ponto do arquiteto do mAIg. Abre-se mão de: o app com o módulo atrasado para
    até a TI do cliente dar o aval.
110. **A primeira versão só lê bancos de tabelas consultados por SQL, de uma lista única do mAIg, igual para todos os
    apps.** A lista é feita dos tipos que os clientes de hoje do primeiro app já usam. O banco de um tipo fora da lista
    é recusado no cadastro, com mensagem clara, e um tipo novo entra por versão nova do mAIg. Os nomes da lista são fato
    que o arquiteto do mAIg levanta e escreve na mf dos bancos da empresa. Outros tipos de fonte, como bancos de
    documentos, arquivos, planilhas e serviços, não entram. Entra na onda 1.0. Abre-se mão de: a empresa cujo dado mora
    noutro tipo de fonte não usa o mAIg na primeira versão, e o cliente novo com um banco fora da lista espera uma
    versão.
111. **O núcleo sugere as colunas sensíveis de cada banco, já marcadas, e o owner da organização confere no cadastro do
    banco e marca ou desmarca.** Marcar ou desmarcar uma coluna sensível é ato sensível: fica no registro e avisa os
    outros owners da organização e o auditor (decisão 54). A coluna marcada sai sempre mascarada, para todos os apps
    (decisão 43). Como o núcleo monta e refaz a sugestão é ponto do arquiteto do mAIg. Entra na onda 1.0. Abre-se mão
    de: o cadastro do banco ganha um passo de conferência, e a coluna que o núcleo não sugerir e o owner da organização
    não marcar sai às claras.
112. **A governança da IA entra inteira na onda 1.0: as chaves dos provedores, a lista de modelos por app, o limite de
    gasto e o custo por app; o limite mede dinheiro, vale por app e recomeça a cada mês do calendário.** O mAIg avisa
    aos 80% e recusa aos 100% (decisão 75), e o owner da organização vê no console o consumo e o custo de toda a IA da
    organização. As chaves, os modelos, os limites e o custo já estavam no núcleo da primeira versão (decisão 16), e a
    divisão em ondas não os moveu (decisão 92). Como o mAIg calcula o custo é ponto do arquiteto do mAIg. Abre-se mão
    de: o limite depende de o mAIg calcular bem o custo, e a onda 1.0 fica maior.
    Foi decidido depois: o custo por app é o informado pelo provedor, quando ele informa, ou "estimado" pela tabela da
    Maind, com a data da tabela; o limite trava pelo número que aparece (decisão 153).
113. **Um total calculado sobre poucas linhas conta como linha de dados e só vai ao provedor de IA com o app na camada
    3.** Na camada 2, o pedido é recusado inteiro (decisão 62), e a pessoa é avisada do motivo. Quantas linhas são
    "poucas" é número que o arquiteto do mAIg propõe. Entra na onda 1.0. Abre-se mão de: na camada 2, algumas perguntas
    ficam sem resposta da IA.
114. **O encerramento de uma organização chega inteiro na onda 1.1: o pedido, a execução e a volta em 30 dias.** Na onda
    1.0, a organização que deixa de usar o mAIg fica com os apps pausados ou parados e com a configuração guardada. As
    regras do encerramento não mudam (decisões 31 e 78). Abre-se mão de: uma organização criada por engano ou abandonada
    segue ocupando a instância até a onda 1.1.
115. **Qualquer owner da organização pede a volta do encerramento no console, dentro dos 30 dias, não importa quem pediu
    o encerramento.** O administrador da instância executa a volta, e os owners da organização e os auditores são
    avisados. O owner da organização não recusa antes um encerramento pedido pela Maind: a volta é o caminho de quem
    discorda. Encerrada a organização, os owners da organização e os auditores continuam entrando no console: todos para
    ler o registro (decisão 31), e os owners da organização também para pedir a volta. As pessoas que usam os apps só
    voltam a entrar depois da volta. O app cujo contrato acabou volta parado (decisão 56). Conta a data do pedido: o
    pedido feito dentro dos 30 dias vale mesmo executado depois, e a configuração fica guardada até a volta ser
    executada. Chega na onda 1.1. Abre-se mão de: a Maind pode pedir um encerramento e ver a organização voltar, com os
    apps parados, e a configuração pode ficar guardada além dos 30 dias.
116. **A cópia de segurança leva o cofre, o registro de cada organização, o registro da instância e a configuração
    inteira; só o cache dos painéis fica de fora.** A configuração inteira são as organizações, os apps, as pessoas, as
    permissões e as regras da IA. O painel da instância mostra a data da última cópia. A restauração devolve a instância
    como estava na data da cópia, e a TI do cliente não refaz configuração à mão. Cada organização só volta com o código
    de recuperação dela (decisão 87): a organização sem o código fica sem restaurar, e as outras voltam. O que mudou
    depois da data da cópia se perde, inclusive linhas do registro. Cada restauração fica anotada no registro de cada
    organização (decisões 29 e 65) e no registro da instância (decisão 102). Se a restauração precisar de um atestado
    novo da Maind para o certificado de uma organização (decisão 86), o mAIg o pede sozinho, pela ligação, e o painel da
    instância mostra o estado de cada organização até a volta completa. Entra na onda 1.0. Como a ferramenta cifra cada
    parte e se a chave do certificado entra na cópia são pontos do arquiteto do mAIg. Abre-se mão de: a cópia passa a
    guardar os nomes e os e-mails das pessoas, cifrados, e fica maior.
    Foi decidido depois: a parte da cópia que não é de nenhuma organização fica cifrada com uma chave própria da
    instância, mostrada uma vez na instalação e guardada por quem opera a máquina (decisão 152).
117. **A primeira versão não leva uma organização de uma instância para outra, nem da hospedagem da Maind para a casa do
    cliente, nem o contrário, e nenhuma versão está marcada para isso.** Quem muda começa uma organização nova e a
    configura de novo. O registro antigo fica na instância antiga, até a desinstalação do app nela (decisão 15). A
    capacidade não entra. Abre-se mão de: o cliente que começa num lugar e muda para outro deixa o registro antigo na
    instância antiga, e, se um cliente pedir a mudança, a ferramenta será uma decisão nova do dono da Maind.
118. **A saída do cliente não tem gesto próprio: é um roteiro, com os gestos que já existem.** O roteiro: os owners da
    organização e os auditores baixam a cópia assinada do registro; os apps são retirados, e as organizações,
    encerradas; por fim, a TI do cliente apaga a máquina e as cópias de segurança. O mAIg não atesta que tudo foi
    apagado. O roteiro vale na onda 1.1, quando existem a cópia assinada, a retirada e o encerramento. Na onda 1.0, não
    há saída com prova: os apps param com o fim da licença, e a máquina é do cliente; se a TI do cliente a apaga, o
    registro vai junto, sem cópia assinada. Quem quer levar a prova espera a onda 1.1, ou guarda a máquina ou a cópia de
    segurança, que só abre com o código de recuperação (decisão 87). Abre-se mão de: a saída não tem comprovante.
119. **O painel da instância mostra o estado, as versões e as pendências da instalação e, de cada organização, só
    contagens, sem nomes.** Os únicos nomes que o administrador da instância vê são os dos owners da organização, porque
    é ele quem os gere (decisão 83). O painel mostra também a data da última cópia de segurança e o estado da
    restauração (decisão 116), a data do vencimento do certificado do endereço (decisão 120), a lista do que a instância
    manda à Maind (decisão 123) e a falha de envio de e-mail (decisão 125). Entra na onda 1.0. Abre-se mão de: a TI do
    cliente não consegue, pelo painel, dizer quem são as pessoas de uma organização.
    Foi decidido depois: o console mostra o app autorizado pela Maind à espera do clique de instalar (decisão 137), e a
    TI do cliente pede pelo console o teste da política de rede do cluster (decisão 145).
120. **A TI do cliente escolhe o nome do endereço do mAIg na rede dela e instala o certificado desse endereço, na
    instalação.** O mAIg avisa os administradores da instância antes de o certificado vencer, e o painel da instância
    mostra a data. É outro certificado, diferente do certificado da organização, que a Maind atesta (decisões 28 e 44).
    O tipo do certificado do endereço e onde nasce a chave dele são pontos do arquiteto do mAIg, que confere a regra da
    chave privada (decisão 86). Entra na onda 1.0. Abre-se mão de: a instalação ganha um passo que exige alguém da TI do
    cliente, e, se o certificado vence sem ser trocado, os navegadores recusam o endereço e ninguém entra.
    Foi decidido depois: o nome do endereço e o certificado entram na primeira etapa da interface de setup (decisão
    132), e é um endereço só para a tela de entrada, a renovação do passe, o console, a página de status e a planilha
    (decisão 140); o nome precisa estar sob um domínio público da empresa.
121. **A luz de estado, igual em todos os apps, entra na onda 1.0, com três cores e sempre com texto; a página de status
    chega na onda 1.1, com o login do mAIg.** A luz diz "no ar", "instável" ou "fora do ar" e aparece também na tela de
    entrada, antes do login. Com a ligação fora ou a versão vencida, a pessoa vê um aviso próprio, e não um erro; o
    aviso "Atualização necessária" faz parte (decisão 109). A página de status só abre de dentro da rede ou pela VPN, e
    mostra a cada pessoa o estado da ligação e dos apps da organização dela (decisão 70) e as quedas passadas, sem nome
    de pessoa nem de banco. Abre-se mão de: na onda 1.0, quem quer o detalhe de uma queda pergunta a quem cuida da
    instância; na onda 1.1, quem não tem conta ou não consegue entrar vê só a luz.
122. **A primeira versão não tem modo sem ligação: a empresa que não libera a saída da rede até a Maind não usa o mAIg
    na própria rede.** A ligação parte sempre do mAIg (decisão 6), e sem ela não há login, licença nem atualização. O
    modo sem ligação não entra, e nenhuma versão está marcada para ele. Abre-se mão de: esse cliente fica sem caminho na
    casa dele.
123. **Além do que os apps precisam para funcionar, a instância manda à Maind só o mínimo de operação: a versão do mAIg
    e a dos módulos, o estado da ligação e o estado da licença de cada app.** Nunca vai dado, nome de pessoa, consulta
    nem mensagem de erro com valores. A lista fica escrita na documentação e à vista da TI do cliente no painel da
    instância. O que os apps precisam para funcionar são os pedidos e as respostas dos apps, a troca do código pelo
    passe, o download das versões novas, a renovação do certificado da organização e a conferência da licença. Entra na
    onda 1.0. Abre-se mão de: a Maind sabe menos quando algo falha, e o suporte depende de alguém do cliente mostrar a
    tela, na onda 1.0, ou do acesso de suporte, na onda 1.1.
124. **Quando a resposta passa do teto, o núcleo recusa a resposta inteira, com mensagem clara, e nunca entrega um
    resultado parcial como se fosse inteiro.** A mensagem diz o tamanho da resposta e o teto. A pessoa refaz o pedido
    com um filtro ou pede um total, ou o owner da organização sobe o teto (decisão 43). A recusa fica no registro, com a
    contagem (decisões 12 e 58). A consulta que passa do limite de tempo ou de linhas (decisão 61) é interrompida, e o
    pedido falha com mensagem clara. Entra na onda 1.0. Abre-se mão de: a pessoa não recebe nem as primeiras linhas.
125. **Na onda 1.0, o administrador da instância configura o servidor de e-mail da empresa e faz um envio de teste; sem
    isso, o console não deixa criar organização.** O painel da instância mostra quando um envio falha. O link de
    primeiro acesso (decisão 51), o link de troca de senha (decisão 99) e os avisos (decisão 126) saem por esse
    servidor. Abre-se mão de: a instalação ganha um passo obrigatório, e a empresa sem servidor de e-mail próprio
    precisa de um.
    Foi decidido depois: o teste do servidor de e-mail entra no setup, antes de a organização chegar à instância, porque
    é no fim do setup que o mAIg manda o link do primeiro owner da organização (decisões 128 e 136).
126. **Na onda 1.0, cada aviso tem destinatário fixo, aparece sempre no console e vai por e-mail, sem dado nenhum; a
    lista "o que a organização permite" e as preferências de aviso chegam na onda 1.1.** Os destinatários: os avisos de
    segurança vão aos owners da organização e ao auditor; a queda de um banco e de uma IA, o limite de gasto, a tarefa
    marcada que parou e o fim do contrato vão aos owners da organização; o certificado da organização perto de vencer
    vai aos owners da organização e aos administradores da instância; e os avisos da instância vão a todos os
    administradores da instância. Os avisos da instância são a ligação fora, a versão nova à espera de aval, o prazo de
    adiamento perto do fim, a falha de envio de e-mail e o certificado do endereço perto de vencer. Abre-se mão de: na
    onda 1.0, ninguém desliga nem redireciona um aviso.
127. **Na onda 1.0, a equipe da Maind não entra no console da casa do cliente; na onda 1.1, o suporte da Maind e o
    auditor de fora chegam pela VPN que a TI do cliente concede.** Na onda 1.0, quem mostra a tela à Maind é o owner da
    organização ou a TI do cliente. Na onda 1.1, ao ligar o acesso de suporte (decisão 68) ou cadastrar um auditor de
    fora (decisão 79), o console avisa o owner da organização de que a pessoa precisa da VPN. Abre-se mão de: a TI do
    cliente precisa dar VPN a uma pessoa de fora, e quem não quiser fica sem auditor de fora e sem suporte com tela; na
    onda 1.0, o suporte é mais lento.

## Decisões da arquitetura (12/11/2026)

Em 12/11/2026, o dono da Maind respondeu às dúvidas que a arquitetura do mAIg levantou, registradas em
`arquitetura/tecnologia.md` e `arquitetura/componentes.md`. As decisões são dele, e não por delegação. Algumas mudam
decisões anteriores; a decisão que muda recebe uma nota, e o texto dela segue como foi escrito.

128. **A organização nasce na Maind, no Gerenciador do mAIg, e chega à instância pela ligação.** O Gerenciador do mAIg é
    o cockpit da Maind para controlar e cobrar os clientes: roda na nuvem da Maind, separado de qualquer app, e não é o
    primeiro app. A equipe da Maind cria nele a organização, com o e-mail do primeiro owner da organização e os apps
    contratados, e o Gerenciador assina o arquivo da organização, que o mAIg busca pela ligação logo depois que a TI do
    cliente digita a chave temporária, na etapa 2 das cinco da interface de setup; em seguida chega o manifesto do que a
    organização pode ter, e o fim do setup é a criação do usuário do primeiro owner da organização (decisões 132 e 136).
    O administrador da instância deixa de criar a organização no console: o gesto dele passa a ser digitar a chave
    temporária na interface de setup ou, para uma organização a mais numa instância que já roda, no console. O que as
    decisões antigas dizem sobre "criar a organização" passa a valer para esse gesto: a ligação de pé (decisão 41), o
    e-mail testado (decisão 125), a linha no registro (decisão 29) e o certificado emitido quando o arquivo chega
    (decisão 28). A nuvem de cada app conhece a organização pelo Gerenciador, que é a origem, e o passe assinado pelo
    mAIg continua provando a pessoa (decisão 32). Assim, não há um segundo cadastro que possa divergir, e a Maind é quem
    diz quais organizações existem e o que cada uma pode ter. Ficaram de fora a parte de fora do app criar a organização
    ao vê-la pela primeira vez e o servidor das contratações avisar a nuvem. Abre-se mão de: a Maind ganha uma peça
    inteira para construir, o Gerenciador, e nenhuma organização existe sem passar por ela, nem na casa do cliente.
    Ajustada em 12/11/2026 ao fechar a arquitetura.
129. **A primeira versão não tem portal do cliente: a entrega é um PDF protegido por senha, enviado ao e-mail oficial da
    organização.** O dono da Maind escolheu primeiro um portal da Maind com login, onde o administrador da instância
    baixaria o pacote e o kit, e no mesmo dia o revisou, para simplificar. O Gerenciador do mAIg gera o PDF com as
    instruções da primeira etapa e os dados da organização, e a Maind o manda ao e-mail oficial da organização. O
    Gerenciador fica só com o cockpit interno da Maind, e a página pública de instruções também não entra. Abre-se mão
    de: o e-mail vira o canal de um documento sensível, e por isso a senha vai por outro caminho (decisão 130) e o PDF
    não traz nada instalável (decisão 131); a Maind não vê quem baixou o quê, só quando a chave foi usada e de onde.
130. **A senha do PDF vai por outro canal, separado do e-mail.** A equipe da Maind a passa ao responsável pela
    contratação por telefone ou mensagem. Quem invadir só o e-mail não abre o PDF. O e-mail precisa ser esperado pela
    organização, para não parecer golpe. Abre-se mão de: um passo manual da equipe da Maind a cada organização, e um PDF
    que não abre, porque a senha se perdeu, pede outro, gerado no Gerenciador.
131. **O PDF traz as instruções e um código de ativação de uso único, que vence; nenhum arquivo instalável viaja por
    e-mail.** A TI do cliente digita o código na etapa 2 das cinco da interface de setup, e o mAIg, pela ligação, busca
    na Maind o arquivo assinado da organização e o manifesto do que ela pode ter, e faz o handshake; o console só recebe
    o código de uma organização a mais numa instância que já roda (decisão 128). O arquivo é um só, e quem o traz é o
    mAIg. O dono da Maind disse nesta decisão que o mesmo caminho valeria para o kit de cada app, com um PDF por app; o
    fluxo do setup, decidido em seguida, vale sobre isso: os apps contratados entram no setup sem PDF por app (decisões
    132 e 134). Abre-se mão de: o código é o elo mais humano da cadeia, e a TI do cliente tem de tratá-lo como senha.
    Ajustada em 12/11/2026 ao fechar a arquitetura.
132. **O setup do mAIg tem cinco passos, e a instalação segue no estilo de um gerenciador de pacotes.** (1) A Maind cria
    a organização no Gerenciador do mAIg, e o Gerenciador gera chaves temporárias, de duração curta. (2) A Maind gera o
    PDF com as instruções da primeira etapa de configuração no ambiente do cliente, o cluster ou a máquina, e o manda ao
    e-mail oficial da organização, com a senha por outro canal (decisões 129 e 130). (3) O cliente instala na
    infraestrutura dele a imagem do mAIg, que já vem com uma interface de setup. (4) A TI do cliente digita na interface
    de setup a chave temporária que veio no PDF. (5) O mAIg abre uma conexão segura com a Maind, e a instalação segue
    como num gerenciador de pacotes, como o npm: o mAIg baixa o que precisa e o que a organização está autorizada a ter
    e instala tudo sozinho, inclusive criando os certificados, com as chaves privadas nascendo dentro dele (decisão 86).
    O nome do endereço e o certificado dele (decisão 120) entram na primeira etapa da interface de setup, e quem digita
    a chave vira o primeiro administrador da instância (decisão 100). Não precisa ser tudo automático: o que importa é
    que a Maind cria a organização e assina o arquivo. A interface de setup entra na onda 1.0. Abre-se mão de: a
    interface de setup fica exposta no endereço interno até a instância ser configurada, e a única porta é a chave
    temporária; a onda 1.0 cresce com a interface de setup e o Gerenciador, itens a pesar na estimativa da decisão 92.
133. **A chave temporária faz o papel do código de ativação: vale uma vez só, vence em pouco tempo e só é gasta quando a
    Maind entrega a organização.** Se o setup para antes disso, por exemplo sem a saída liberada, a TI do cliente tenta
    de novo com a mesma chave. Se a chave vence ou já foi usada, a equipe da Maind gera outra no Gerenciador, com PDF e
    senha novos, e uma tentativa de reuso é recusada e avisada. O Gerenciador mostra quando a chave foi usada e de onde.
    A primeira conexão do setup, feita com a chave, é a única sem o certificado da instância, e só serve para pedir o
    certificado e o arquivo. Confirma a primeira leitura do arquiteto sobre o fluxo do setup. Abre-se mão de: quem tem o
    PDF, a senha e a saída liberada instala em nome da organização; a defesa é a vida curta, o uso único e o aviso.
134. **O setup instala o núcleo e, junto, os apps que a organização já tem contratados no dia, sem um PDF nem um clique
    por app.** O aval da TI do cliente está no próprio setup, que ela executa. O que a organização está autorizada a ter
    vem do Gerenciador num manifesto assinado, e cada módulo entra com a assinatura da Maind conferida (decisão 88).
    Pela ligação chegam só o manifesto e um bilhete de download para cada módulo; a imagem do módulo, a caixa com o
    programa, não passa pela ligação: é baixada, com o bilhete, do registro de imagens da Maind, que fica no mesmo nome
    de internet da ligação (decisão 149), pelo zelador, a peça do mAIg que cuida das caixas, no formato Docker, ou pelo
    próprio cluster, no Kubernetes (decisão 144). "Instalado o kit" passa a ser "chegado o manifesto", e a instalação de
    cada app continua anotada no registro da organização (decisão 82). Os apps contratados depois chegam como "app
    autorizado" (decisão 137). Confirma a segunda leitura do arquiteto. Abre-se mão de: a instalação dos primeiros apps
    deixa de ser um gesto à parte do administrador da instância; é o setup. Ajustada em 12/11/2026 ao fechar a
    arquitetura.
135. **Instalado não quer dizer liberado: depois do setup, o owner da organização libera e configura cada app no
    console.** Ele diz quais bancos o app lê, quais IAs usa e quem da organização o usa, e o app fica ativo sozinho
    quando o mínimo está configurado (decisões 11 e 12; decisão 72). Confirma a terceira leitura do arquiteto; os dois
    passos da decisão 10 seguem valendo, com o primeiro feito pelo setup. Abre-se mão de: nada; é o que já valia.
136. **O e-mail do primeiro owner da organização vem da Maind, registrado no Gerenciador na contratação, e o mAIg cria o
    usuário dele sozinho no fim do setup.** O link de primeiro acesso vai direto ao e-mail dele (decisões 51 e 99), e o
    administrador da instância não digita esse e-mail. Os outros owners da organização continuam cadastrados pelo
    administrador da instância (decisão 83). Substitui a leitura de que o primeiro owner da organização seguiria com o
    administrador da instância. Abre-se mão de: um e-mail errado no Gerenciador manda o link à pessoa errada, o mesmo
    risco da decisão 51, agora do lado da Maind.
137. **Um app autorizado pela Maind depois do setup chega pela ligação, aparece no console como "app autorizado", e o
    administrador da instância clica em instalar.** O resto é o mesmo caminho do setup, sem arquivo nenhum. A decisão 10
    continua valendo: nenhum módulo novo entra na casa do cliente sem um gesto da TI do cliente, e ela escolhe o
    momento, como faz com as versões (decisão 39). Só o setup instala sozinho o que a organização pode ter (decisão
    134). Ficaram de fora o mAIg instalar sozinho na janela de atualização, que poria um módulo novo sem o aval da TI do
    cliente, e o gesto do administrador da instância também no setup, que contraria o fluxo do dono da Maind. Abre-se
    mão de: um clique a mais, e um app pode ficar dias "autorizado" sem ser instalado.
138. **O kit de um app não traz certificado pronto: traz o que deixa o mAIg gerar a chave do app e pedir o atestado à
    Maind.** A regra de que a chave privada nasce no mAIg e nunca sai dele (decisão 86) vale também para o certificado
    do app, e por isso um kit não pode trazer um certificado cuja chave ainda não nasceu. Com o fluxo do setup, o kit
    deixou de ser um arquivo entregue pela Maind: é a entrada do app no manifesto do que a organização pode ter, que
    chega pela ligação, com um bilhete de inscrição no lugar do certificado (decisão 134). Para a TI do cliente, nada
    muda no gesto: ela executa o setup ou clica em instalar. Abre-se mão de: o "kit" das decisões 10 e 56 vira uma
    palavra do passado, e o que identifica o app nasce na instância.
139. **Cada app tem duas identidades atestadas pela Maind: a do módulo, com a chave criada no mAIg, e a da parte de
    fora, com a chave na nuvem da Maind.** A do módulo nasce do kit (decisão 86); a da parte de fora, que roda na nuvem
    da Maind, não pode usar uma chave que nunca sai do mAIg, e por isso tem a própria, atestada pela Maind, que o núcleo
    confere a cada conversa pela ligação (decisões 4 e 49). A promessa de que a nuvem não fabrica passes não muda,
    porque o passe é assinado com a chave da organização, e não com a do app. Não muda o que ninguém vê. Abre-se mão de:
    são duas identidades por app para a Maind atestar e trocar.
140. **Na rede do cliente, o mAIg tem um endereço só, com um nome e um certificado que a TI do cliente escolhe e
    instala.** No mesmo endereço ficam a tela de entrada, a renovação do passe, o console, a página de status e a
    planilha (decisão 120). Assim a TI do cliente libera e protege um nome só. Abre-se mão de: o nome do endereço
    precisa estar sob um domínio público da empresa, porque o Google (decisão 98) e uma autoridade certificadora pública
    só aceitam nomes assim; é uma restrição à decisão 120, que vai ao material da TI do cliente.
141. **A primeira versão fala com cinco provedores de IA, sempre com a chave da empresa cliente: o OpenRouter, o Amazon
    Bedrock e os três fabricantes direto, a OpenAI, a Anthropic e o Google.** O mAIg tem um conector para cada um, e a
    TI do cliente libera a saída só dos provedores que a organização escolher (decisões 22 e 90). A ordem de construir e
    provar: o OpenRouter e a Anthropic primeiro; depois, na ordem proposta pelo arquiteto, a OpenAI, o Google e o Amazon
    Bedrock. Ficou de fora uma lista com menos provedores. Abre-se mão de: cinco conectores para construir e manter, e
    cada provedor novo é uma versão nova do mAIg.
142. **A Maind entrega o mAIg como um pacote pronto em contêiner, o mesmo nas duas hospedagens, e atualizar é trocar a
    caixa.** O contêiner é uma caixa fechada com o programa e tudo de que ele precisa, que roda numa máquina Linux da
    empresa, num servidor próprio, numa máquina virtual ou na nuvem dela. O mesmo pacote serve à hospedagem da Maind, e
    atualizar é trocar a caixa por uma nova, assinada pela Maind (decisões 39 e 45). Entregar uma máquina virtual pronta
    fica de fora, porque a máquina virtual roda o pacote. Foi revista no mesmo dia pela regra de rodar em qualquer lugar
    (decisão 143). Abre-se mão de: a TI do cliente precisa saber rodar contêineres, e o material da TI tem de dizer, com
    todas as letras, que quem troca a caixa tem poder sobre a máquina.
143. **O mAIg roda em qualquer lugar, dos dois lados: numa máquina virtual, numa VPS, num Kubernetes, gerenciado ou não,
    ou só com Docker; a regra vale acima da escolha da nuvem.** Revisão da decisão 142 e regra sobre a decisão 147,
    feitas no mesmo dia. O pacote sai em dois formatos, um para Docker, que serve à máquina virtual, à VPS e ao
    servidor, e outro para Kubernetes, o sistema que orquestra contêineres num cluster, e a atualização com o aval da TI
    do cliente funciona nos dois; no Kubernetes, quem troca a caixa é o próprio cluster, e não uma peça do mAIg. Com
    isso, instalar no Kubernetes da empresa entra na primeira versão, na onda 1.0, e muda a decisão de deixá-lo fora. Do
    lado da Maind, nenhuma peça depende de um serviço exclusivo de uma nuvem: onde o arquiteto recomendou um serviço da
    nuvem, como o cofre de chaves, o registro de imagens e o e-mail, ele vira um "encaixe", que usa o serviço da nuvem
    quando há e uma peça portátil quando não há. Abre-se mão de: dois formatos para construir, provar e explicar à TI do
    cliente, e a onda 1.0 cresce; é um item a pesar na estimativa da decisão 92.
144. **No Kubernetes, o núcleo do mAIg manda o cluster trocar a caixa, depois do aval da TI do cliente e dentro da
    janela.** A permissão do núcleo é só no próprio namespace, o espaço do mAIg dentro do cluster, e só para trocar
    pelas versões assinadas pela Maind; é a mesma permissão que o setup usa para subir os módulos. A regra da
    atualização (decisão 39) vale igual nos dois formatos, e a permissão fica escrita no material da TI do cliente.
    Ficaram de fora a TI do cliente aplicar a versão ela mesma, que tiraria o "se instala sozinho na janela", e os dois
    caminhos à escolha. Abre-se mão de: o núcleo ganha uma permissão no cluster, presa ao namespace, que uma TI muito
    rígida pode querer negar.
145. **Num cluster que não aplica a política de rede, o mAIg instala o núcleo e recusa instalar qualquer módulo até a
    política valer, com a mensagem dizendo o que falta.** No Kubernetes, "sem saída de rede" é uma regra do cluster, e
    não um fato físico: só vale se a camada de rede a aplicar. O próprio núcleo faz o diagnóstico: roda o teste da caixa
    de prova na instalação e de novo sempre que a TI do cliente pedir pelo console, e confere de tempos em tempos que a
    regra continua valendo. Assim, a promessa de que o módulo nunca sai para a internet por conta própria (decisão 63)
    vale por construção em todo cluster em que o mAIg roda. Ficaram de fora instalar com um aviso aceito pela TI do
    cliente e exigir o formato Docker desse cliente. Abre-se mão de: um cliente com cluster sem política fica sem app
    até ajustar a camada de rede, e pode preferir o formato Docker.
146. **As peças do lado da Maind ficam num ambiente próprio, separado da nuvem dos apps e das instâncias hospedadas pela
    Maind.** São o ponto de conexão, a emissão de certificados, o servidor das contratações, o canal de atualização e o
    Gerenciador do mAIg. A separação segue a lógica da decisão 48: uma nuvem dos apps invadida não alcança o cartório, o
    canal de atualização nem o Gerenciador (decisão 49). Abre-se mão de: a Maind opera três infraestruturas, a dos apps,
    a das instâncias e a das peças próprias, e o custo disso entra na estimativa.
147. **O lado da Maind roda na mesma nuvem pública da produção real do primeiro app, numa conta separada, operada pela
    Maind.** Uma nuvem só para o time conhecer e uma fatura só, com a separação da decisão 146 feita por conta separada,
    que é o que esses fornecedores recomendam. Ficaram de fora uma segunda nuvem e servidores próprios da Maind. A regra
    de rodar em qualquer lugar (decisão 143) vale acima desta escolha: trocar de nuvem não muda nenhuma peça. Abre-se
    mão de: uma falha grande do fornecedor derruba as duas pontas ao mesmo tempo, mas o mAIg precisa das duas de todo
    jeito.
148. **As chaves da Maind ficam num cofre de chaves portátil e de código aberto, que roda em qualquer lugar, e a raiz do
    cartório fica fora de linha, usada só com duas pessoas.** São a chave do cartório, que atesta os certificados, as
    que assinam o kit, a licença, o manifesto e as imagens, e a chave de cada instância hospedada pela Maind. A chave
    nunca sai do cofre: ele devolve só a assinatura, e cada uso fica anotado; quando a nuvem tem um cofre em hardware,
    ele é usado para destrancar o cofre portátil. A regra de que a Maind nunca recebe chave privada de cliente (decisão
    86) não muda e vale também no setup. Ficaram de fora o cofre da nuvem sozinho, que prenderia a Maind ao fornecedor,
    uma chave de hardware física, que não emite em linha os certificados curtos, e chaves em arquivo. Abre-se mão de: o
    cofre precisa do mesmo cuidado de disponibilidade do ponto de conexão, com cópia de segurança e um procedimento para
    destrancá-lo depois de reiniciar; se ele cai, o cartório para de emitir, e uma parada longa chega a trancar
    organizações (decisão 44).
149. **A Maind tem um nome de internet só, com IP fixo reservado, na porta 443, e atrás dele ficam a ligação e o
    registro de imagens.** A TI do cliente libera uma linha só, por nome ou por IP, e a promessa da decisão 90 fica
    literal; as versões novas do mAIg e dos módulos vêm do mesmo nome. O IP só muda por decisão da Maind, com aviso.
    Ficaram de fora o nome sem IP fixo, que quebraria a TI do cliente que libera por IP, e dois nomes, contra a decisão
    90. Abre-se mão de: a Maind opera o próprio registro de imagens e paga o IP fixo.
150. **O e-mail da hospedagem da Maind sai por um serviço que fala o padrão SMTP, escolhido na implantação, com o
    domínio da Maind configurado.** Decorre da regra de rodar em qualquer lugar (decisão 143): a arquitetura não depende
    de qual é o fornecedor, que se escolhe junto com a nuvem, sem mudar nenhuma peça. Ficou de fora um servidor de
    e-mail próprio da Maind, cuja reputação de envio é difícil de construir, e um link de primeiro acesso no lixo
    eletrônico tranca owners da organização. Abre-se mão de: nada relevante.
151. **A Maind roda as instâncias que hospeda num Kubernetes gerenciado da nuvem, com um namespace por instância,
    separadas por namespace e por política de rede.** A troca de caixa, o reinício, os limites e a cópia agendada vêm do
    cluster, e muitas instâncias cabem num cluster só, operado num lugar só. Não muda a casa do cliente. Ficaram de fora
    uma máquina virtual por instância e os dois formatos por faixa de cliente. Abre-se mão de: o isolamento entre
    instâncias é por namespace, mais fraco que por máquina; o cliente que exigir máquina própria fica para uma decisão
    futura.
152. **A cópia de segurança da instância tem uma chave própria, aleatória, criada na instalação e mostrada uma vez só,
    que quem opera a máquina guarda fora dela.** Ela cifra a parte da cópia que não é de nenhuma organização, a
    configuração, as pessoas e o registro da instância, que a chave de cada organização (decisão 57) não cobre. A cópia
    inteira fica ilegível para quem a guarda; a restauração pede essa chave e o código de recuperação de cada
    organização (decisão 87), e a cópia agendada segue automática. Ficaram de fora uma senha digitada a cada cópia, que
    acabaria com a cópia automática, e a parte da instância sem cifra. Abre-se mão de: mais um segredo para a TI do
    cliente não perder; perdê-lo é perder a cópia da instância, não a das organizações. Fica registrada para o PO e o
    arquiteto do mAIg, sem versão marcada, a ideia do dono da Maind de uma oferta premium com um dispositivo físico de
    guarda das chaves, como as carteiras frias de criptomoedas.
153. **A visão do consumo mostra o custo informado pelo provedor, quando ele informa, e, nos outros, uma estimativa
    marcada como "estimado", com a data da tabela de preços da Maind.** A estimativa é o uso vezes a tabela de preços da
    Maind, que se atualiza pela ligação, sem versão nova: a tabela chega assinada pelo Gerenciador do mAIg, e quem a
    entrega pela ligação é o servidor das contratações da Maind. O limite de gasto (decisão 112) trava pelo número que
    aparece, informado ou estimado. Ficaram de fora o owner da organização preencher a tabela, que ninguém manteria, e a
    tabela da Maind editável por ele. Abre-se mão de: a estimativa pode divergir da fatura por descontos, cache e
    arredondamentos do provedor. Ajustada em 12/11/2026 ao fechar a arquitetura.
154. **A ligação com a Maind tem dois caminhos já na onda 1.0, e o mAIg troca sozinho para o alternativo quando o
    intermediário da empresa não deixa o principal passar.** O caminho principal é o da ligação de sempre; o
    alternativo, por WebSocket, um jeito de conversa que os intermediários corporativos deixam passar, entra quando o
    principal é bloqueado, sem ninguém mexer em nada. Os dois são feitos pela Maind (decisão 38). O dono da Maind
    escolheu contra a recomendação do arquiteto, por razão de produto: nenhuma empresa fica de fora por causa do
    intermediário dela. Ficaram de fora só o caminho principal na onda 1.0, com o alternativo na onda 1.1, e nunca ter o
    alternativo. Abre-se mão de: duas camadas de transporte para construir, provar e manter desde o início, e a onda 1.0
    cresce; é um item a pesar na estimativa da decisão 92.
155. **O console usa o design system da casa, o mesmo das telas do primeiro app, com a marca da Maind.** O design system
    é o conjunto de botões, tabelas, formulários e menus que dá a cara de um produto. Ele sai do repositório do primeiro
    app e vira um pacote próprio da Maind, usado pelos dois produtos, e o console passa a parecer da mesma família dos
    apps (decisão 7). Ficaram de fora uma biblioteca de mercado com um tema e componentes próprios do mAIg. Abre-se mão
    de: até o pacote existir, o console não tem a cara decidida, e o mAIg depende de um pacote mantido com o time do
    primeiro app.
