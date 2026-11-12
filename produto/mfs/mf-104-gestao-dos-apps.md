# MF-104:Instalar, pausar e retirar apps sem refazer nada

> Os apps contratados no dia do setup entram sozinhos; o contratado depois chega como "app autorizado", e o administrador da instância clica em instalar, uma vez por instância. Instalado não é liberado: o owner da organização libera e configura o app para a organização dele. Depois, o app pode ser pausado, parar no fim do contrato, ser atualizado e voltar como estava; só retirar e desinstalar apagam alguma coisa.

**Também chamada de:** Gestão dos apps · **Versão do mAIg:** 1ª · **Classe:** essencial · **Situação:** rascunho do PO

## Em uma frase

A gestão dos apps é tudo o que acontece com um app depois de contratado: ele chega à instância pela ligação, o owner da organização o libera e configura, e a partir daí o app pode ser pausado, retomado, suspenso numa emergência, parado depois do fim do contrato, atualizado, retirado de uma organização e, por fim, desinstalado (decisão 46). Os apps contratados no dia do setup, a configuração inicial do mAIg feita pela TI do cliente, entram sozinhos; o contratado depois aparece no console como "app autorizado" e espera o clique do administrador da instância (decisões 134 e 137). Instalado não quer dizer liberado (decisão 135).

O mAIg, o Maind AI Gateway, é a plataforma da Maind que fica na rede da empresa cliente, ou na infraestrutura da Maind, e pela qual os produtos da Maind chegam aos dados e à inteligência artificial (IA) da empresa. "Gateway" quer dizer portão. Cada produto entra no mAIg como um app, e o primeiro é o Horus (decisão 3).

Cada instalação física do mAIg é uma instância. Dentro dela, cada cliente trabalha numa organização, o espaço com os seus próprios apps e as suas próprias regras (decisão 9). O administrador da instância cuida da instalação; o owner da organização responde pela organização.

Ao longo da vida, um app muda de situação muitas vezes: uma pausa para conferir algo, uma renovação atrasada, uma versão nova. Esta mf existe para que nenhuma dessas mudanças obrigue alguém a refazer a configuração. E para que apagar dados seja sempre um ato pensado, e não um efeito colateral (decisões 14 e 15).

## Quem ganha

- **Administrador da instância** (quem cuida da instalação física do mAIg: a TI do cliente, quando o mAIg roda na rede da empresa, ou a equipe da Maind, quando roda na infraestrutura da Maind). Controla o que roda na instância: os apps contratados no dia do setup entram sozinhos, no setup que ele executa, e o app autorizado depois só roda quando ele clica em instalar, uma vez para todas as organizações da instância (decisões 134 e 137). Atualiza o app num lugar só. E sabe quando pode desinstalar um app e o que a desinstalação apaga.
- **Owner da organização** (a pessoa que responde pela organização no mAIg). Decide se a organização usa o app e com que regras. Pausa e retoma sem refazer nada. Encontra a configuração guardada quando o app para depois do fim do contrato, e decide se a apaga.
- **De forma indireta, a pessoa que usa o app e o auditor.** A pessoa que usa o app reencontra o app como estava depois de uma pausa ou de uma renovação. O auditor, a pessoa nomeada pelo owner da organização que só lê o registro, encontra o registro inteiro enquanto o app estiver instalado. O registro é a anotação de tudo o que os apps pedem ao mAIg em nome de cada organização (decisão 15).

## A decisão que passa a ser possível

- **O administrador da instância passa a poder dizer sim a um app uma vez,** para a instalação inteira, sem decidir pelas organizações se elas o usam (decisão 10).
- **O owner da organização passa a poder pausar um app para conferir algo e retomá-lo no dia seguinte,** sem refazer permissões, bancos, IAs e limites.
- **O owner da organização passa a poder renovar um contrato atrasado sem medo:** o app volta como estava (decisão 14).
- **A dor que some:** descobrir, depois de uma renovação ou de uma versão nova, que é preciso configurar tudo de novo.

## Como funciona

### O ciclo de vida de um app

**Em resumo:** um app passa por estados, e cada mudança de estado é um ato de um papel. Só dois atos apagam alguma coisa: retirar e desinstalar. Os dois chegam na onda 1.1 da primeira versão: na onda 1.0, um app só para, e nada se apaga (decisão 106).

**Quem é quem.**

- **A instância** é cada instalação física do mAIg. **A organização** é o espaço de um cliente dentro da instância, com os seus próprios apps e as suas próprias regras. Uma instância atende uma ou mais organizações, sem misturá-las (decisão 9).
- **O administrador da instância** age na instância inteira. **O owner da organização** age só na organização dele.
- **A equipe da Maind** entra pelo contrato. Um app para no fim do contrato por uma ação manual dela ou pelo vencimento da licença, o documento assinado pela Maind que diz até quando vale o contrato, com a carência (decisão 56). As duas formas de parar são da contratação dos apps (MF-103).

**Os estados e os atos.** "Instalado", "suspenso" e "desinstalado" valem para a instância inteira; os outros estados valem para cada organização.

| Estado | O que quer dizer | Quem leva a ele |
|---|---|---|
| Instalado | O app está na instância, mas ainda não serve a uma organização. | O setup, para os apps contratados no dia; o administrador da instância, ao clicar em instalar o app autorizado depois. |
| Em configuração | O app foi liberado para a organização, mas ainda falta o mínimo para funcionar. | O owner da organização, ao começar a configurar. |
| Em uso | O app funciona para a organização, com a configuração dela. | O owner da organização, ao completar a configuração. |
| Pausado | O app não atende a organização, mas tudo fica guardado. | O owner da organização, ao pausar; ele mesmo retoma. |
| Suspenso | O app não atende nenhuma organização da instância, mas tudo fica guardado. | O administrador da instância, numa emergência; ele mesmo retoma. |
| Parado | O contrato acabou e o app parou; a configuração fica guardada. | A ação manual da Maind ou a licença vencida; só a renovação o traz de volta. |
| Retirado | A organização deixou de ter o app, e a configuração dela foi apagada. | O owner da organização, ao retirar, a partir da onda 1.1. |
| Desinstalado | O app saiu da instância, e os dados dele foram excluídos. | O administrador da instância, ao desinstalar, a partir da onda 1.1. |

**Por que é assim.** "Sem refazer nada" quer dizer que pausar, suspender, parar, renovar e atualizar não apagam a configuração. Apagar é sempre o ato de alguém que sabe o que está apagando (decisões 14 e 15).

**Em que onda.** Na onda 1.0, um app é instalado, liberado, configurado, pausado, suspenso, parado pelo fim do contrato e atualizado. Retirar, apagar a configuração guardada de um app parado e desinstalar chegam juntos na onda 1.1, com a cópia assinada do registro, porque a retirada dá ao owner da organização o aviso e o direito à cópia. Abre-se mão de: na onda 1.0, o app que a organização não quer mais fica pausado, e o instalado por engano continua instalado; a configuração e o registro seguem guardados (decisão 106).

### Instalar: no setup, sozinho; depois, com o clique do administrador da instância

**Em resumo:** o app chega à instância pela ligação, no manifesto assinado pela Maind do que a organização pode ter. Os apps contratados no dia do setup entram sozinhos; o autorizado depois aparece no console como "app autorizado", e o administrador da instância clica em instalar. Nos dois casos, o módulo entra uma vez só, mesmo que várias organizações da instância o usem, e com a assinatura da Maind conferida (decisões 10 e 88; decisões 134 e 137).

**Quem é quem.**

- **Um app tem duas partes.** A parte de fora roda fora do mAIg; no Horus, é a que roda na nuvem da Maind, os computadores da Maind acessados pela internet, com as telas. O módulo é a parte interna do app, que roda isolada dentro do mAIg e só usa os serviços do núcleo, o conjunto de serviços que vem pronto no mAIg para todo app (decisão 4).
- **Instalar um app** é registrar a parte de fora e pôr o módulo para rodar. Registrar a parte de fora é anotar no mAIg a identidade dela, um certificado atestado pela Maind, uma espécie de carteira de identidade digital, e a lista do que o app pode pedir (decisões 4 e 139).
- **O setup** é a configuração inicial do mAIg na infraestrutura do cliente, feita pela TI do cliente com uma chave temporária que a Maind manda num PDF com senha (MF-107).
- **Quando se instala.** Só o que a Maind autorizou para ao menos uma organização da instância chega ao mAIg: o manifesto é assinado pela Maind e chega pela ligação, e nada viaja por arquivo (MF-103). No setup, o mAIg baixa e instala sozinho os apps já contratados, no estilo de um gerenciador de pacotes; o aval da TI do cliente está no próprio setup, que ela executa (decisão 134). Depois do setup, um app novo chega como "app autorizado", e só roda quando o administrador da instância clica em instalar (decisão 137).

**Por que é assim.** Quem cuida da instalação física controla o que roda nela: nenhum módulo novo passa a rodar sem um gesto do administrador da instância. No setup, o gesto é executar o setup; depois, é o clique, e ele escolhe o momento, como faz com as versões (decisão 39). Se o owner da organização instalasse, cada organização poderia pôr um módulo novo para rodar na instalação de todas (decisão 10). Abre-se mão de: um clique a mais, e um app pode ficar dias "autorizado" sem ser instalado (decisão 137).

**Uma instalação, uma versão.** Como o app é instalado uma vez por instância, todas as organizações dela usam a mesma versão dele. Uma organização não escolhe, sozinha, ficar numa versão mais velha.

**O que o administrador da instância vê.** As instalações, o estado e as versões de cada app, e os apps autorizados à espera do clique. Vê também se alguma organização ainda tem o app, sem ver a configuração dela. Não vê o registro das organizações (decisão 12). Os atos dele que tocam uma organização, como instalar e atualizar um app, ficam anotados no registro dela, e ele só escreve a linha, sem lê-la (decisão 29, MF-102).

**Quando dá errado.** Um app que a Maind não autorizou para nenhuma organização da instância não aparece: ele não está no manifesto, e não há como instalá-lo (decisão 10). E, se o módulo não traz a assinatura da Maind, ou foi alterado no caminho, o mAIg o recusa (decisão 88).

**Num cluster sem a regra de rede.** O mAIg pode rodar num Kubernetes, o sistema que orquestra contêineres num cluster, um conjunto de máquinas. Ali, "o módulo não tem saída para a internet" é uma regra do cluster, e não um fato físico. Se o cluster não aplica essa regra, o mAIg instala só o núcleo e recusa instalar qualquer módulo até a regra valer, com a mensagem dizendo o que falta. O próprio núcleo faz o teste na instalação, de novo sempre que a TI do cliente pedir pelo console, e confere de tempos em tempos que a regra continua valendo. Assim, a promessa de que o módulo nunca sai para a internet por conta própria vale em todo cluster em que o mAIg roda (decisões 63 e 145). Abre-se mão de: um cliente com cluster sem a regra fica sem app até ajustar a rede do cluster, e pode preferir o formato só com contêineres, sem cluster.

**O que ainda está em aberto.** O que um app declara ao núcleo para ser instalado, o contrato de app, é um ponto da contratação dos apps (MF-103).

### Liberar e configurar: o owner da organização, para a organização dele

**Em resumo:** instalado não quer dizer liberado: na instância, o app ainda não funciona para a organização. O owner da organização o libera e o configura, e só então as pessoas da organização passam a usá-lo (decisões 10 e 135).

**O que o owner da organização configura.** A configuração de um app numa organização tem quatro partes (decisão 14):

- **As permissões:** o que o app pode pedir ao mAIg nesta organização, escolhido da lista com que o app foi registrado. As regras das permissões são da segurança e permissões (MF-101).
- **Os bancos que o app lê:** quais bancos de dados da organização ele pode consultar, sempre só para leitura. Como os bancos são cadastrados e onde ficam as senhas é dos bancos da empresa (MF-105).
- **As IAs que o app usa:** quais modelos de IA ele pode usar e com que limites. Um modelo é cada programa de IA que entende uma pergunta e escreve a resposta. Como funcionam as chaves dos provedores, os limites e o custo é da governança da IA (MF-106).
- **Os ajustes:** o que mais o app permite ajustar para a organização.

**O mínimo para entrar em uso.** Cada app declara, ao ser instalado, o mínimo de que precisa para funcionar. O Horus, por exemplo, precisa de ao menos um banco e de uma IA. Enquanto falta algo, o app fica "em configuração". Na onda 1.0, a tela do próprio app, no console, diz ao owner da organização o que falta; o cockpit de ativação, a tela única com tudo o que falta na organização e em cada app e o passo que resolve, chega na onda 1.1 (decisões 72 e 95). O console é a tela do mAIg onde o owner da organização configura tudo (MF-110).

**Quem usa o app.** Dar acesso às pessoas da organização é da segurança e permissões (MF-101).

**Por que é assim.** Cada organização escolhe o que usa, e quem escolhe é alguém dela. Se o administrador da instância fizesse tudo, o owner da organização perderia essa decisão, e, nas instâncias da Maind, ela cairia na equipe da Maind. Abre-se mão de: são dois atos, de papéis diferentes, para começar a usar um app (decisão 10).

> **Analogia:** num prédio, a administração decide quais serviços o prédio oferece, como uma lavanderia, e cada condômino decide se assina e como usa. **Onde a analogia para:** no prédio, o condômino assina com a própria administração; no mAIg, a organização contrata o app com a Maind, e o administrador da instância nem vê o que o owner da organização configurou.

**Quando dá errado.** O owner da organização procura um app que está instalado na instância, mas que a organização dele não contratou. O app não aparece para ele como disponível, e o caminho é contratar (decisão 11).

### Pausar e retomar

**Em resumo:** o owner da organização pode pausar um app na organização dele e retomá-lo quando quiser. Na pausa, nada se apaga, e na volta o app está como estava.

**Quem é quem.**

- **Pausar** é o owner da organização fazer o app deixar de atender a organização por um tempo. Só ele pausa, e só na organização dele.
- **Retomar** é desfazer a pausa. O app volta com a mesma configuração.

**O que acontece na pausa.** O mAIg deixa de atender os pedidos do app nessa organização. O módulo não lê banco nenhum nem usa IA nenhuma em nome dela. A configuração fica guardada, e o registro também (decisões 14 e 15). O que a tela do app mostra à pessoa que usa o app, nesse tempo, é do próprio app; a luz de estado, da onda 1.0, e a página de status, da onda 1.1, que mostram o app pausado, são do mAIg (decisões 70 e 121).

**O que a pausa não muda.** O contrato segue correndo, com as mesmas datas (MF-103). As outras organizações da instância seguem usando o app normalmente. E os outros apps da mesma organização não são afetados.

**Por que é assim.** Há momentos em que o owner da organização precisa que o app pare de ler os dados sem desmontar nada. Por exemplo: uma troca no banco de dados, uma conferência da área de segurança, uma dúvida sobre os limites de gasto. Sem a pausa, o único jeito seria retirar o app e configurá-lo de novo depois.

> **Analogia:** é como bloquear por um tempo um cartão de crédito: ele para de funcionar, mas o limite, a senha e o histórico continuam lá, e desbloquear é um gesto só. **Onde a analogia para:** o cartão bloqueado é de uma pessoa só; o app pausado numa organização segue funcionando nas outras organizações da mesma instância.

**Quando dá errado.** O owner da organização esquece o app pausado. As pessoas da organização ficam sem ele até alguém retomá-lo; o console mostra o app como "pausado", com a data da pausa.

### A suspensão de emergência: o administrador da instância, na instância inteira

**Em resumo:** quando um app faz o que não devia, o administrador da instância o suspende de uma vez, em todas as organizações da instância, sem apagar a configuração nem o registro (decisão 46).

**Quem é quem.**

- **Suspender** é o administrador da instância fazer o app deixar de atender todas as organizações da instância. Na casa do cliente, quem suspende é a TI do cliente; na hospedagem da Maind, a equipe da Maind, com a autorização de duas pessoas.
- **Retomar** é desfazer a suspensão, e é do mesmo papel. O app volta com a configuração de cada organização.

**O que acontece na suspensão.** O mAIg deixa de atender os pedidos do app em todas as organizações. A configuração de cada uma fica guardada, e o registro também, porque é a prova do que aconteceu. Cada owner da organização é avisado, e a suspensão fica anotada no registro de cada organização que usa o app (decisão 29, MF-102). Os outros apps da instância seguem funcionando.

**Suspender não é pausar.** A pausa é do owner da organização, só na organização dele, e serve ao dia a dia. A suspensão é da instância e serve à emergência.

**Por que é assim.** Responder a um problema pede duas coisas: parar o app suspeito e guardar a prova. Sem a suspensão, restava à TI do cliente desligar o mAIg inteiro, com todos os apps, ou desinstalar o app, o que exclui o registro (decisão 15). E a TI do cliente não fica dependendo da Maind, que pode ser a origem do problema. Ficaram de fora só a Maind suspender o app, em todas as instâncias, e os dois freios juntos, que dariam à Maind o poder de parar apps na casa do cliente (decisão 46).

**O que se perde.** Um gesto errado para o app em todas as organizações da instância de uma vez.

> **Analogia:** é como o registro geral de água de um prédio: o zelador fecha a água de todos os apartamentos de uma vez quando um cano estoura, e a obra começa sem molhar ninguém. **Onde a analogia para:** fechar o registro não apaga nada; suspender o app também não, e a configuração de cada organização volta intacta.

**Exemplo.**

1. Marta, da TI do cliente, percebe que o Horus está lendo do banco de vendas muito mais do que o normal.
2. Ela suspende o Horus no painel da instância. As duas organizações da instância, a Farma Vida e a Farma Vida Manipulação, deixam de usar o Horus na mesma hora, e o owner da organização de cada uma, como Paulo na Farma Vida, é avisado.
3. Renata, a auditora da Farma Vida, consulta no registro o que o Horus leu, porque nada foi apagado.
4. A Maind corrige o Horus, Marta instala a versão nova e retoma o app. Ana, gerente comercial, volta a perguntar ao Horus, e nada foi refeito.

**Quando dá errado.** Marta suspende o app errado. As pessoas das organizações ficam sem ele até ela retomá-lo, e o registro mostra quem suspendeu e quando.

### Quando o app para depois do fim do contrato

**Em resumo:** quando o contrato acaba e o app para, por ação manual da Maind ou pela licença vencida, a configuração dele fica guardada até a organização renovar ou até o owner da organização apagá-la (decisões 13 e 14). Apagar a configuração guardada só existe a partir da onda 1.1 (decisão 106).

**Parado não é pausado.** O app pausado volta quando o owner da organização quiser. O app parado só volta com a renovação do contrato, que é da contratação dos apps (MF-103). Nos dois casos, a configuração e o registro ficam guardados.

**Por que é assim.** Quem renova não refaz nada. Abre-se mão de: fica uma configuração parada, sem uso, até alguém decidir (decisão 14).

**O que ficou de fora.** Apagar a configuração depois de um prazo: quem renovasse depois refaria tudo, e o prazo viraria mais um número a definir. E apagar a configuração na hora em que o app para (decisão 14).

**A renovação devolve o estado de antes.** Se o app estava em uso, volta em uso. Se estava pausado quando o contrato acabou, volta pausado, e o owner da organização o retoma quando quiser.

### A configuração guardada: o que fica e o que não fica

**Em resumo:** a configuração guardada é a de um app numa organização: as permissões, os bancos e as IAs que ele usa e os ajustes. Os bancos e as chaves de IA em si são da organização e não somem com ela (decisão 14).

**O que fica guardado.** As permissões que o owner da organização deu ao app. A lista dos bancos que o app lê. Os modelos de IA que ele usa e os limites. Os ajustes. É tudo o que o owner da organização precisaria refazer se a configuração se perdesse.

**O que é da organização, e não do app.** O cadastro de cada banco, com a senha guardada no cofre, é da organização e pode servir a vários apps (MF-105). O cofre é o lugar trancado onde o mAIg guarda as senhas dos bancos, de onde nenhum app as tira. As chaves dos provedores de IA, as senhas que dão acesso a eles, também são da organização (MF-106). Por isso, apagar a configuração de um app não apaga o banco nem a chave: apaga só a ligação entre o app e eles.

**Quem pode apagar.** Só o owner da organização, e só na organização dele (decisão 14). Apagar a configuração de um app é retirá-lo da organização, como explica o próximo tópico. Esse gesto chega na onda 1.1; na onda 1.0, o owner da organização ainda apaga, um a um, o cadastro de um banco e a chave de uma IA, que são da organização e não do app (decisão 106).

> **Analogia:** é como a mesa de um funcionário em licença: os papéis ficam na mesa, na ordem em que ele deixou, até ele voltar ou até a empresa decidir esvaziá-la. **Onde a analogia para:** numa licença, a sala costuma esperar parada; no mAIg, a organização segue usando os mesmos bancos e as mesmas chaves em outros apps enquanto a configuração do app espera.

**Quando dá errado.** O owner da organização apaga a configuração de um app parado e, semanas depois, a organização renova. O app volta sem configuração, e o owner da organização precisa refazê-la (decisão 14).

### Retirar o app da organização

**Em resumo:** retirar é o owner da organização tirar o app da organização dele: o app deixa de servir a ela, e a configuração dela é apagada. Retirar chega na onda 1.1 da primeira versão, junto com a cópia assinada do registro (decisão 106). O registro continua guardado enquanto o app estiver instalado na instância (decisão 15).

**Quem é quem.** Quem retira é o owner da organização. Ninguém retira no lugar dele, nem o administrador da instância, nem a equipe da Maind: a retirada à força não entra na primeira versão (decisão 108). A retirada vale só para a organização dele: o app segue instalado na instância e em uso nas outras organizações que o têm.

**O que se apaga e o que fica.** Apaga-se a configuração do app nesta organização. Fica o registro do que o app pediu em nome dela, que o owner da organização e o auditor continuam consultando. O registro só é excluído quando o app é desinstalado da instância (decisão 15).

**O aviso e a cópia.** Ao retirar, o console avisa o owner da organização de que o registro do app, nesta organização, só será excluído quando o app for desinstalado da instância, e de que ele pode baixar uma cópia do registro até lá. Os auditores também podem baixá-la, e a cópia sai num arquivo assinado pelo mAIg (decisão 21, decisão 80).

**O que a retirada não muda.** O contrato comercial: retirar o app não o cancela, e o contrato segue as regras da contratação dos apps (MF-103). Se a organização quiser usar o app de novo, com o contrato ainda valendo, o owner da organização o libera e configura do zero.

**Por que é assim.** A retirada é o "apagar" que a decisão 14 deixa nas mãos do owner da organização, com um nome próprio para que ninguém a confunda com a pausa. É o único ato do owner da organização que obriga a refazer algo. Por isso, o console pede que ele confirme sabendo disso.

**Quando dá errado.** O owner da organização retira o app pensando que o pausava: a configuração se perde e precisa ser refeita. Para evitar isso, a confirmação diz com todas as letras que a configuração será apagada e lembra que a pausa existe para o caso contrário.

**O aviso de novo, na desinstalação.** A organização que já retirou o app é avisada de novo quando o administrador da instância for desinstalá-lo: toda desinstalação começa com um aviso de segurança, com prazo, aos owners da organização e aos auditores de toda organização que tem registro naquele app, e todos podem baixar a cópia assinada dentro do prazo (decisão 107).

### Desinstalar: o app sai da instância, e os dados dele são excluídos

**Em resumo:** desinstalar é o administrador da instância tirar o app da instância. Desinstalar chega na onda 1.1 da primeira versão, e toda desinstalação começa com um aviso, com prazo (decisões 106 e 107). Desinstalado o app, os dados dele são excluídos: o registro do que ele pediu e as configurações dele em todas as organizações da instância (decisão 15).

**Quem é quem.** Quem desinstala é o administrador da instância, porque é quem executou o setup ou clicou em instalar e é quem controla o que roda na instância (decisão 10). A desinstalação vale para a instância inteira, e não para uma organização.

**O que se exclui.** O módulo sai da instância, e a parte de fora deixa de estar registrada nela. O registro do app é excluído, e com ele a história do que o app pediu em cada organização. A exclusão não tem volta. Quem desinstalou e quando ficam no registro da instância, onde só se acrescenta e que o administrador da instância lê, porque não sobra organização com o app para receber a linha (decisão 81, MF-102).

**A trava.** O administrador da instância só desinstala um app quando nenhuma organização da instância o tem em configuração, em uso, pausado ou parado com a configuração guardada. Em outras palavras: todas as organizações que o tinham já o retiraram, ou foram encerradas (decisão 31). O console do administrador da instância mostra se alguma organização ainda tem o app, sem mostrar a configuração dela. A trava é decisão do dono da Maind (decisão 21).

**O aviso antes de desinstalar.** Toda desinstalação começa com um aviso de segurança, com prazo, a toda organização que tem registro naquele app, e só se conclui no fim do prazo, se nenhuma organização ativa tiver o app. O aviso vai aos owners da organização e aos auditores, e alcança as organizações que retiraram o app e as encerradas que o tinham; todas podem baixar a cópia assinada dentro do prazo. A organização encerrada não segura a desinstalação, nem dentro dos 30 dias da volta (decisão 31). O que segura é o pedido de volta: enquanto houver um pedido de volta à espera de execução, o console não conclui a desinstalação; a volta é executada primeiro, e a organização que voltou segura a desinstalação como qualquer outra. A organização encerrada que não pede a volta dentro do prazo do aviso ainda pode voltar depois, dentro dos 30 dias, e a volta devolve só o que ainda existir. Abre-se mão de: toda desinstalação demora no mínimo o prazo do aviso, e a organização encerrada que deixa passar o prazo pode voltar sem aquele app e sem o registro dele (decisão 107). O tamanho do prazo está em "O que ainda falta decidir".

**Por que a trava.** Sem ela, um ato do administrador da instância apagaria o registro de organizações que não pediram isso. Na infraestrutura da Maind, esse administrador é a equipe da Maind, que nem vê o registro das organizações (decisão 12). A trava devolve a decisão a cada owner da organização, que retira o app quando quiser e, ao retirar, é avisado e pode baixar uma cópia do registro (decisão 21).

**Por que a exclusão é assim.** Nada se perde enquanto o app existe, e não há prazo de guarda. Abre-se mão de: o volume do registro só cresce, e guardar dados de pessoas sem prazo pede cuidado com a lei de proteção de dados pessoais. Ficaram descartados um prazo definido pelo owner da organização e um prazo fixo da Maind (decisão 15).

**Quando dá errado.** Uma organização guarda a configuração de um app parado e não responde. A trava impede a desinstalação, e o app fica instalado, sem uso. O dono da Maind aceitou esse custo da trava (decisão 21). Ninguém retira o app no lugar do owner da organização: o impasse se resolve pela troca do owner da organização que não responde, feita pelo administrador da instância (decisão 83), ou pelo encerramento da organização (decisão 78). Abre-se mão de: os dois caminhos levam dias, e o app fica instalado, sem uso, enquanto isso (decisão 108).

**E se a organização for encerrada.** O mAIg não exclui uma organização: encerra. Encerrar retira todos os apps dela, com o aviso e a cópia do registro (decisão 21), e o registro segue legível até o app ser desinstalado (decisão 31). No Horus, excluir uma organização apaga tudo o que há dela, e só dela, sem tocar nas outras da mesma instalação (D-278 do Horus); o mAIg decidiu diferente. Criar e encerrar organizações é das organizações e instâncias (MF-107). O encerramento chega inteiro na onda 1.1 (decisão 114). A organização encerrada não segura a desinstalação de um app; só um pedido de volta à espera de execução a segura (decisão 107).

### Atualizar um app e as versões que convivem

**Em resumo:** quando a Maind lança uma versão nova de um app, o administrador da instância a instala por cima da anterior, uma vez para a instância. Antes de instalar, o mAIg confere a assinatura da Maind e recusa a versão sem assinatura ou alterada (decisão 88). A configuração e o registro ficam como estavam. Não há contagem de versões que convivem: a regra é uma só, por prazo, e vale para o mAIg e para o módulo de cada app (decisão 109).

**Quem é quem.**

- **Três peças têm versão:** o próprio mAIg, o módulo de cada app, dentro da instância, e a parte de fora de cada app, fora do mAIg. No Horus, a parte de fora roda na nuvem da Maind e é atualizada pela Maind; o módulo roda na instância e é atualizado por quem cuida dela.
- **Conviver** quer dizer funcionar juntas, mesmo em versões diferentes: a parte de fora nova com o módulo de antes, ou o módulo novo com um mAIg de antes.
- **Quem atualiza o app** na instância é o administrador da instância, como quem o instalou, e o ato fica anotado no registro de cada organização que usa o app (decisão 29, MF-102). O próprio mAIg segue outro caminho: baixa a versão nova sozinho e, na casa do cliente, só a instala com o aval da TI do cliente, dentro de uma janela de horário que o administrador da instância define (decisão 39, MF-107).

**Atualizar é trocar a caixa.** O mAIg e cada módulo vêm em contêineres, caixas fechadas com o programa e tudo de que ele precisa; atualizar é trocar a caixa por uma nova, assinada pela Maind (decisão 142). Quando o mAIg roda num Kubernetes, quem troca a caixa é o próprio cluster, a mando do núcleo do mAIg, depois do aval da TI do cliente e dentro da janela; a permissão do núcleo vale só no espaço do mAIg dentro do cluster e só para as versões assinadas pela Maind, e fica escrita no material da TI do cliente (decisão 144). Abre-se mão de: o núcleo ganha uma permissão no cluster, presa a esse espaço, que uma TI muito rígida pode querer negar.

**Atualizar não é reinstalar.** A atualização mantém a configuração de cada organização e o registro. Se a versão nova pede uma permissão que a anterior não pedia, essa permissão chega desligada. O app segue funcionando com as permissões de antes até o owner da organização decidir liberá-la.

**Por que é assim.** Na infraestrutura do cliente, a TI do cliente, a equipe de tecnologia da empresa, atualiza no tempo dela. A parte de fora, na nuvem da Maind, muda com frequência. Sem uma janela de convivência, cada versão nova da Maind deixaria parados os clientes que ainda não atualizaram. Como o mAIg pode ser atualizado antes dos apps instalados (decisão 39), ele pode ficar à frente deles, e a convivência entre um mAIg novo e o módulo de antes passa a pesar mais; com o aval da TI do cliente, ele também pode ficar para trás, e a convivência pesa nos dois sentidos.

**Quando dá errado.** A TI do cliente adia a versão nova dentro do prazo. Vencido o prazo, o que ficou velho deixa de atender, e a pessoa vê um aviso próprio de que a versão precisa ser atualizada. A luz de estado fica vermelha, com o texto "Atualização necessária". Com o mAIg vencido, todos os apps recusam a conversa (decisão 45, MF-107); com o módulo de um app vencido, só aquele app para, e os outros seguem (decisão 109). Enquanto a Maind não disser outro número, os dias do prazo do módulo são os do mAIg: 30 dias de adiamento de uma versão nova, ou 7 para uma correção de segurança. A luz é a do mAIg, e a página de status, que mostra o motivo sem a versão, chega na onda 1.1 (decisão 121). Quem atualiza o app é o administrador da instância, e o mAIg se instala na janela, com o aval da TI do cliente na casa do cliente (decisão 39). No Horus, a regra era por contagem: valiam a versão atual e a anterior, e uma mais velha era recusada com o mesmo aviso (D-292 do Horus). O mAIg decidiu diferente e ficou com o prazo. Abre-se mão de: o app com o módulo atrasado para até a TI do cliente dar o aval.

**O que ainda está em aberto.** Como um mAIg novo conversa com um módulo antigo dentro do prazo de adiamento, e o contrário, está em "O que ainda falta decidir".

### Uma instância, várias organizações: cada uma no seu passo

**Em resumo:** o app é um só na instância, mas cada organização o configura, pausa e retira por conta própria. O que uma organização faz não alcança as outras (decisões 9 e 11).

**Quem é quem.** Numa instância da Maind convivem organizações de empresas diferentes, e a equipe da Maind faz o papel de administrador da instância. Cada organização tem o seu owner da organização.

**Exemplo.** Numa instância da Maind, a Organização A, da empresa X, e a Organização B, da empresa Y, usam o Horus.

1. O Horus entra na instância uma vez, no setup ou com o clique da equipe da Maind no app autorizado. O owner da Organização A e o owner da Organização B o liberam e configuram, cada um com os seus bancos e as suas IAs.
2. O owner da Organização A pausa o Horus para trocar o banco de vendas. Na Organização B, ninguém percebe nada.
3. A equipe da Maind atualiza o Horus. As duas organizações passam à versão nova, cada uma com a sua configuração intacta, e a A continua pausada.
4. A empresa X decide não usar mais o Horus, e o owner da Organização A o retira. A configuração da A é apagada. O registro dela fica, porque o Horus segue instalado.
5. A equipe da Maind não consegue desinstalar o Horus: a Organização B ainda o usa.

### Exemplo completo: a Farma Vida, do Horus ao segundo app

**Em resumo:** a Farma Vida instala o Horus, pausa, para depois do fim do contrato, renova, atualiza, recebe um segundo app e, um dia, retira e desinstala esse segundo app; o exemplo mostra o que fica guardado em cada passo.

**Quem é quem no exemplo.** A Farma Vida é uma rede de 40 farmácias, com o mAIg na própria rede. Marta, da TI do cliente, faz o papel de administrador da instância. Paulo, diretor de operações, é o owner da organização. Renata, da área de segurança, é a auditora. Ana, gerente comercial, é a pessoa que usa o app: no Horus, a pessoa que pergunta.

**Exemplo.**

1. **Instalar.** A Farma Vida contratou o Horus antes do setup. Por isso, quando Marta executou o setup, o Horus entrou sozinho, uma vez só, e o handshake contratual o liberou para a organização Farma Vida (decisão 134, MF-103).
2. **Liberar e configurar.** Instalado não quer dizer liberado. Paulo, no console, dá ao Horus a permissão de ler o banco de vendas e escolhe a IA, os modelos e um limite de gasto. Com o mínimo configurado, o Horus passa a "em uso", e Paulo dá acesso a Ana (MF-101).
3. **Pausar.** Meses depois, a TI troca o servidor do banco de vendas. Paulo pausa o Horus por um dia. Ana não consegue perguntar ao Horus nesse dia; o que a tela mostra é do Horus, e a luz de estado e a página de status do mAIg mostram o Horus pausado (decisão 70).
4. **Retomar.** Terminada a troca, Paulo retoma o Horus. Ana pergunta de novo, e nada foi refeito. Se o endereço do banco mudou, Paulo o corrige no cadastro do banco, e não na configuração do Horus (MF-105).
5. **Parar e renovar.** Um ano depois, a renovação atrasa, e a licença vence: o Horus para (MF-103). A configuração fica guardada. A Farma Vida renova, e o Horus volta como estava.
6. **Atualizar.** A Maind lança uma versão nova do Horus, e Marta a instala. A configuração de Paulo continua, e Renata encontra no registro a história de antes e de depois.
7. **O segundo app.** A Farma Vida contrata um segundo app. Ele chega pela ligação como "app autorizado", e Marta clica em instalar (decisão 137). Para o exemplo, é o Maind Doc, um assistente que gera documentos de projetos corporativos com IA; ele é só um exemplo de segundo app possível e não está definido nem planejado. Paulo o configura à parte, com os bancos e as IAs dele.
8. **Retirar.** Tempos depois, já na onda 1.1, a Farma Vida deixa de usar o segundo app, e Paulo o retira. A configuração dele se apaga, e o Horus não é afetado. O registro do segundo app fica guardado enquanto ele estiver instalado.
9. **Desinstalar.** Nenhuma outra organização da instância tem o segundo app. Marta pede a desinstalação, e Paulo e Renata recebem o aviso de segurança, com o prazo para baixar a cópia assinada do registro. No fim do prazo, o app é desinstalado: o registro dele é excluído, e Paulo e Renata deixam de consultá-lo. O registro do Horus continua inteiro.

### Quando dá errado

**Em resumo:** os casos mais prováveis desta mf e o que acontece em cada um.

- **O administrador da instância procura um app não contratado.** Ele não aparece: só o que está no manifesto da organização chega à instância (decisão 10).
- **Um app autorizado fica dias sem o clique.** Ele aparece no console como "app autorizado", sem rodar, até o administrador da instância clicar em instalar; a TI do cliente escolhe o momento (decisão 137).
- **O cluster não aplica a regra de rede.** O mAIg instala só o núcleo e recusa instalar qualquer módulo até a regra valer, com a mensagem dizendo o que falta; o núcleo refaz o teste quando a TI do cliente pedir pelo console (decisão 145).
- **O owner da organização confunde retirar com pausar.** A configuração se perde e precisa ser refeita; a confirmação avisa antes (decisão 14).
- **A configuração foi apagada e a organização renova.** O app volta sem configuração, e o owner da organização a refaz (decisão 14).
- **Uma versão adiada além do prazo.** Com o mAIg vencido, todos os apps recusam a conversa até ele ser atualizado (decisão 45); com o módulo de um app vencido, só aquele app para (decisão 109).
- **O administrador da instância quer desinstalar um app que alguma organização ainda tem.** A trava impede. Se a organização não responde, o caminho é a troca do owner da organização ou o encerramento da organização, e ninguém retira o app no lugar dele (decisão 108).
- **Um módulo com defeito atrapalha a instância.** Impedir que um módulo prejudique os outros é da execução isolada dos apps (MF-109). Se o problema é o que o próprio app faz, como ler dados demais, o administrador da instância o suspende na instância inteira, sem apagar a prova (decisão 46).
- **Uma organização é encerrada.** Os apps dela são retirados, com o aviso e a cópia do registro, e o registro segue legível até o app ser desinstalado (decisão 31, MF-107). O encerramento chega na onda 1.1 (decisão 114).

### O que entra em cada onda

A primeira versão do mAIg sai em duas ondas, a 1.0 e a 1.1, e a segunda versão vem depois (decisões 92 e 95). A tabela diz em que onda chega cada capacidade desta mf, com as decisões que a sustentam. "Não entra" quer dizer que a capacidade não faz parte da primeira versão e não tem versão marcada.

| Capacidade | Onda | Decisões | Por quê |
| --- | --- | --- | --- |
| Os apps contratados no dia entram no setup, sem gesto por app, com a assinatura de cada módulo conferida | onda 1.0 | 88, 134 | Sem instalar, não há app; sem a assinatura, não se sabe o que foi instalado. |
| App autorizado depois do setup: o console mostra "app autorizado", e o administrador da instância clica em instalar | onda 1.0 | 10, 137 | Nenhum módulo novo entra na casa do cliente sem um gesto da TI do cliente. |
| Num cluster sem política de rede, o núcleo é instalado e nenhum módulo entra até a política valer; o diagnóstico é do núcleo | onda 1.0 | 63, 145 | A promessa de que o módulo não sai para a internet vale por construção em todo cluster. |
| Atualizar o módulo é trocar a caixa; no Kubernetes, o cluster troca a caixa a mando do núcleo, depois do aval | onda 1.0 | 39, 142, 144 | A regra da atualização com aval vale igual nos dois formatos do pacote. |
| Liberar e configurar o app por organização: permissões, bancos, IAs e ajustes | onda 1.0 | 10, 14 | É o segundo passo, o do owner da organização, sem o qual o app não atende. |
| Estado "em configuração" e o que falta para o app entrar em uso, na tela do próprio app | onda 1.0 | 72, 95 | O owner da organização precisa saber por que o app ainda não atende. |
| Pausar e retomar um app, pelo owner da organização, só na organização dele, sem apagar nada | onda 1.0 | 14, 46, 96 | É o freio do owner da organização na onda 1.0, enquanto retirar não chega. |
| Suspensão de emergência de um app pelo administrador da instância, com aviso a cada owner da organização | onda 1.0 | 29, 46, 92 | A TI precisa de um freio para um app que faz o que não devia. |
| App parado depois do fim do contrato, com a configuração guardada | onda 1.0 | 13, 14 | A licença tem data; o estado "parado" precisa existir desde o começo. |
| Atualizar um app por cima, com a assinatura conferida; permissão nova chega desligada | onda 1.0 | 29, 88, 95 | Sem atualização, uma falha do app não é corrigida. |
| A TI adia a versão nova do módulo de um app dentro do prazo; vencido o prazo, só aquele app deixa de atender, com "Atualização necessária" | onda 1.0 | 45, 109 | A regra de versão é uma só, por prazo, para o mAIg e para o módulo de cada app. |
| Apagar a configuração guardada de um app parado | onda 1.1 | 14, 106 | Apagar anda junto com retirar. |
| Retirar um app da organização, com aviso e direito à cópia do registro | onda 1.1 | 15, 21, 80, 106 | A retirada dá direito à cópia do registro, e a cópia é da onda 1.1. |
| Desinstalar um app da instância, com a trava de só se concluir quando nenhuma organização ativa o tem | onda 1.1 | 15, 21, 31, 81, 106, 107 | Desinstalar apaga o registro do app e depende de todas as retiradas. |
| Toda desinstalação começa com um aviso de segurança, com prazo, aos owners da organização e aos auditores de toda organização que tem registro no app, inclusive as que o retiraram e as encerradas | onda 1.1 | 15, 21, 31, 85, 107 | A exclusão de um registro não tem volta, e pode ter passado muito tempo desde a retirada. |
| O pedido de volta de uma organização encerrada segura a desinstalação: a volta é executada primeiro | onda 1.1 | 31, 78, 107 | Sem essa ordem, o registro de quem já pediu a volta poderia ser excluído por quem deveria executá-la. |
| Retirada forçada de um app pelo administrador da instância ou pela Maind | não entra | 12, 21, 108 | Retirar é ato do owner da organização; o impasse se resolve pela troca do owner da organização ou pelo encerramento. |

## Prova de valor

Prova de valor proposta pelo PO; o dono da Maind ainda não a confirmou.

1. **Pausar e voltar sem refazer nada.** Numa organização com o Horus em uso, o owner da organização pausa o app. O auditor confere no registro que, durante a pausa, o app não leu nada em nome da organização, e o administrador da instância confere que o app seguiu no ar na instância, para as outras organizações. O owner da organização retoma, e a pessoa que usa o app faz a mesma pergunta de antes e recebe a resposta, sem nenhuma configuração refeita. A mesma prova se repete com o fim do contrato e a renovação.
2. **Uma instalação, várias organizações, cada uma no seu passo.** Numa instância com duas organizações, o administrador da instância instala o app uma vez. Uma organização o retira, e a outra segue usando. O administrador da instância tenta desinstalar e é impedido pela trava. Quando a segunda organização também retira o app, ele pede a desinstalação, as duas organizações recebem o aviso com prazo, e, no fim do prazo, o registro do app é excluído. Esta prova vale a partir da onda 1.1, quando retirar e desinstalar passam a existir (decisões 106 e 107).

## Retorno para o negócio

- **Retenção.** Renovar sem refazer nada tira um obstáculo da renovação (decisão 14). Hipótese: menos atrito na hora de renovar, sobretudo depois de uma carência que terminou com o app parado.
- **Custo de atender.** O owner da organização pausa, retoma e retira sozinho, no console, sem abrir chamado à Maind. Hipótese: menos pedidos de suporte para "desligar por um tempo" um app.
- **Entrar e expandir.** O segundo app passa pelos mesmos dois passos do primeiro, e o administrador da instância já os conhece. Hipótese: a TI do cliente diz sim a um app novo com mais facilidade, porque sabe que pode retirá-lo e desinstalá-lo de um jeito claro.
- **Confiança.** Apagar é sempre um ato explícito, e nada some por efeito colateral. Hipótese: isso pesa a favor do mAIg na aprovação de segurança.
- **O que se paga por isso.** Configurações paradas e um registro que só cresce ocupam espaço e pedem cuidado com a lei de proteção de dados pessoais (decisões 14 e 15).

## O que não inclui

- **A contratação, o manifesto do que a organização pode ter, as identidades do app, o handshake, o fim do contrato e a renovação:** contratação dos apps (MF-103).
- **Rodar o módulo isolado e o que ele faz por dentro:** execução isolada dos apps (MF-109).
- **O cadastro dos bancos, o cofre das senhas e o acesso só de leitura:** bancos da empresa (MF-105).
- **As chaves dos provedores de IA, as regras dos modelos permitidos, dos limites e do custo:** governança da IA (MF-106).
- **Quem são as pessoas que usam o app, como recebem acesso e as regras das permissões:** segurança e permissões (MF-101).
- **O registro em si e a consulta pelo owner da organização e pelo auditor:** registro e auditoria (MF-102).
- **A tela onde tudo isto se faz:** console de configuração (MF-110).
- **Criar e encerrar organizações e atualizar o próprio mAIg:** organizações e instâncias (MF-107).
- **O que a tela do app mostra à pessoa que usa o app quando ele está pausado ou parado:** é da parte de fora do app; no Horus, das telas do Horus. A luz de estado e a página de status são do mAIg (decisão 70, MF-108).

## Depende de

- `MF-103:Contratação dos apps`. Um app só chega à instância depois de contratado: ele entra no manifesto que a Maind assina, e o handshake contratual o libera.
- `MF-101:Segurança e permissões`. Quem instala e quem libera são papéis definidos ali, e as permissões que o owner da organização dá ao app são parte da autorização, a conferência do que cada um pode fazer.
- `MF-107:Organizações e instâncias`. Instalar é por instância, e liberar, pausar e retirar são por organização. Sem as duas, não há onde instalar nem para quem liberar.
- `MF-110:Console de configuração`. O owner da organização libera e configura os apps pelo console, e o administrador da instância instala por ele. Sem o console, não há onde fazer os dois passos.
- `MF-102:Registro e auditoria`. Ao desinstalar um app, o registro dele é excluído, e as regras de guarda do registro são as dessa mf.

## Ponto de partida no Horus

O mAIg nasceu do middleware do Horus, a peça que ficava entre as telas do Horus, na nuvem da Maind, e os dados da empresa.

- **A versão atual e a anterior.** No Horus, a parte do Horus na nuvem funciona com o middleware na versão atual e na anterior. Com uma mais velha, a organização não funciona, e a pessoa vê o aviso de que a versão precisa ser atualizada, com a luz vermelha e o texto "Atualização necessária". Quem atualiza é quem hospeda: a Maind no middleware dela, o cliente no dele. Quantas versões a janela cobre, e uma janela diferente por contrato, ficaram de fora (D-292 do Horus). O mAIg decidiu diferente em quem atualiza: o mAIg baixa a versão nova sozinho e, na casa do cliente, só a instala com o aval da TI do cliente (decisão 39). A recusa com o aviso vale no mAIg para a versão adiada além do prazo (decisão 45). Na contagem, o mAIg decidiu diferente: não há número de versões que convivem, e a regra é uma só, por prazo, para o mAIg e para o módulo de cada app (decisão 109).
- **Só ativa com o mínimo configurado.** No Horus, uma organização nasce em configuração e só passa a ativa com o handshake confirmado, ao menos um banco configurado e a IA configurada pelo owner da organização (D-277 do Horus). O mAIg decidiu diferente para a organização, que passa a ativa com o certificado e um owner da organização com acesso, condição que vale só na primeira ativação, e levou a ideia para o app: cada app fica "em configuração" até ter o mínimo de que precisa, e o Horus precisa de um banco e de uma IA (decisão 72).
- **Excluir apaga só o que é de quem sai.** No Horus, excluir uma organização apaga, no middleware, as pessoas, os bancos, a IA e a configuração dela, e só o que é dela. Uma exclusão por engano leva junto a configuração, sem volta (D-278 do Horus). O mAIg decidiu diferente: a organização não é excluída, e sim encerrada, com volta por 30 dias (decisões 31 e 78, MF-107). Esta mf usa a ideia de apagar só o que é de quem sai na retirada e na desinstalação.
- **Pausar e retirar um app.** O Horus não tem decisão sobre isto: no Horus, o middleware servia a um app só, o próprio Horus.

## O que ainda falta decidir

- **Falta o arquiteto do mAIg definir como um mAIg novo conversa com um módulo antigo dentro do prazo de adiamento, e o contrário.** *O que está em jogo:* o cliente precisa de tempo para atualizar sem surpresa, e a Maind não pode carregar todas as versões antigas. Como o app é instalado uma vez por instância, todas as organizações dela andam juntas na mesma versão. A regra já está decidida: é por prazo, para o mAIg e para o módulo de cada app, sem contagem de versões (decisão 109). Com o mAIg atualizado por um caminho próprio (decisão 39), falta o desenho que garante a conversa entre as duas peças enquanto o prazo corre.
- **Falta o dono da Maind decidir o tamanho do prazo do aviso que abre toda desinstalação.** *O que está em jogo:* um prazo curto não dá tempo de baixar a cópia assinada, e um prazo longo segura um app instalado e sem uso. É só um número, da onda 1.1: quem recebe o aviso e o que segura a desinstalação já estão decididos (decisão 107).
- **Também depende, e está tratado em outros lugares:** o que o registro anota dos atos de quem gere os apps, como liberar, configurar, pausar e retirar (MF-102); como os módulos dos apps ficam isolados dentro do mAIg (MF-109); o manifesto do que a organização pode ter e o contrato de app (MF-103); quem atualiza o próprio mAIg (MF-107).

## Decisões do PO para discutir

Os trechos do texto que vão além das decisões do dono da Maind, sem código de decisão nem do Horus, estão aqui.

- **Decisão:** a mf separa três atos: pausar (o owner da organização, reversível, guarda tudo), retirar (o owner da organização, apaga a configuração da organização e mantém o registro) e desinstalar (o administrador da instância, exclui os dados do app na instância). *Por que:* o nome aprovado da mf fala em pausar e retirar, e as regras de guarda pedem que apagar seja um ato claro (decisões 14 e 15). *Alternativa:* um ato só, "remover", com o efeito decidido caso a caso. *Reabrir se:* os owners da organização confundirem os três na prática.
- **Decisão:** só o owner da organização pausa, e só na organização dele; o administrador da instância não tem uma pausa da instância inteira. *Por que:* cada organização escolhe o que usa (decisão 10), e um módulo com defeito se contém pelo isolamento (MF-109). *Alternativa:* uma pausa da instância inteira, para conter um problema antes de uma correção. *Reabrir se:* um módulo com defeito precisar ser parado em todas as organizações de uma vez.
- **Decisão:** a pausa não muda o contrato: as datas seguem correndo, e a pausa não estende o prazo. *Por que:* pausar é um ato de operação, e o contrato é da contratação dos apps. *Alternativa:* a pausa suspender a contagem do contrato. *Reabrir se:* a área comercial da Maind quiser oferecer suspensão de contrato.
- **Decisão:** a trava da desinstalação: o administrador da instância só desinstala quando nenhuma organização da instância tem o app em configuração, em uso, pausado ou parado com a configuração guardada. *Por que:* sem ela, um ato do administrador da instância apagaria o registro de organizações que não pediram isso. *Alternativa:* desinstalar com aviso e prazo às organizações; ou desinstalar livremente. *Reabrir se:* um app ficar instalado sem uso por causa de uma organização que não responde. Confirmada pelo dono da Maind em 09/11/2026 (decisão 21).
- **Decisão:** "os dados dele", na decisão 15, são o registro do app e as configurações dele em todas as organizações da instância. *Por que:* desinstalado o app, a configuração não tem mais a que servir. *Alternativa:* guardar a configuração mesmo depois de desinstalar, para uma reinstalação. *Reabrir se:* um cliente reinstalar um app e pedir a configuração de volta.
- **Decisão:** cada app declara o mínimo de que precisa para funcionar, e fica "em configuração" até tê-lo; o estado "em configuração" foi criado para isso. *Por que:* é a mesma ideia que o Horus adotou para a organização, que só fica ativa com o mínimo configurado (D-277 do Horus). *Alternativa:* o owner da organização liberar o app a qualquer momento, mesmo incompleto. *Reabrir se:* um app não tiver um mínimo claro.
- **Decisão:** a configuração do app guarda as ligações com os bancos e as IAs, e não os bancos e as chaves em si, que são da organização. *Por que:* um banco pode servir a vários apps, e retirar um app não pode apagar o banco que outro usa. *Alternativa:* cada app ter os seus próprios bancos e chaves. *Reabrir se:* a governança da IA ou os bancos da empresa definirem outro desenho (MF-106, MF-105).
- **Decisão:** quem atualiza um app na instância é o administrador da instância; a atualização mantém a configuração e o registro, e uma permissão nova chega desligada até o owner da organização liberá-la. *Por que:* é coerente com quem instala (decisão 10) e com o ponto de partida do Horus, em que quem atualiza é quem hospeda (D-292 do Horus). *Alternativa:* a atualização chegar sozinha, sem ato do administrador da instância. *Reabrir se:* clientes deixarem de atualizar e travarem as versões novas. Foi decidido depois: os apps contratados no dia entram no setup, sem gesto por app, e o autorizado depois espera o clique do administrador da instância (decisões 134 e 137); no Kubernetes, quem troca a caixa é o cluster, a mando do núcleo, depois do aval (decisão 144).
- **Decisão:** uma instalação, uma versão: todas as organizações da instância usam a mesma versão do app. *Por que:* é consequência de o app ser instalado uma vez só (decisão 10). *Alternativa:* versões diferentes por organização na mesma instância. *Reabrir se:* uma organização precisar ficar numa versão enquanto outra avança.
- **Decisão:** a renovação devolve o app ao estado de antes, inclusive pausado. *Por que:* "volta como estava" (decisão 14) vale também para a pausa. *Alternativa:* a renovação sempre devolver o app em uso. *Reabrir se:* owners da organização estranharem o app voltar pausado.
- **Decisão:** retirar o app não cancela o contrato; se a organização quiser o app de novo, com o contrato ainda valendo, o owner da organização o libera e configura do zero. *Por que:* retirar é um ato de operação, e o contrato é da contratação dos apps (MF-103). *Alternativa:* a retirada encerrar também o contrato daquele app para a organização. *Reabrir se:* organizações retirarem apps esperando parar de pagar por eles.
- **Decisão:** a retirada pede uma confirmação que diz que a configuração será apagada e lembra a pausa; o console mostra o app pausado com a data da pausa. *Por que:* retirar é o único ato do owner da organização que obriga a refazer algo. *Alternativa:* retirar sem confirmação, como qualquer ajuste. *Reabrir se:* a confirmação virar um incômodo sem efeito.
- **Decisão:** o aviso e a cópia da decisão 21 são dados na retirada, e não na desinstalação: o owner da organização é avisado quando retira o app e pode baixar a cópia até a desinstalação. *Por que:* o administrador da instância só desinstala quando nenhuma organização tem o app, e é na retirada que o owner da organização age. *Alternativa:* avisar também na desinstalação, com prazo. *Reabrir se:* passar muito tempo entre a retirada e a desinstalação. Foi decidido depois: toda desinstalação começa com um aviso de novo, com prazo, também às organizações que já retiraram o app (decisão 107).
- **Decisão:** o administrador da instância vê se alguma organização ainda tem o app, sem ver a configuração dela. *Por que:* ele precisa disso para saber se a trava deixa desinstalar, e a configuração é da organização (decisão 12). *Alternativa:* não ver nada das organizações e só tentar desinstalar. *Reabrir se:* isso for visto como quebra do isolamento entre organizações.
- **Decisão:** o "Depende de" ficou com a contratação, a segurança, as organizações, o console e o registro, como no mapa das dependências (MF-103, MF-101, MF-107, MF-110, MF-102). *Por que:* sem as três primeiras, não há app liberado, papéis nem lugar onde instalar; o console é onde tudo se faz, e a desinstalação apaga o registro. *Alternativa:* ficar só com as três primeiras. *Reabrir se:* o mapa das dependências for revisto.
- **Decisão:** a prova de valor tem duas demonstrações: pausar e voltar sem refazer nada, e uma instalação com várias organizações, cada uma no seu passo, até a desinstalação. *Por que:* são as duas promessas do nome da mf que alguém de fora confere sem metas numéricas (decisão 18). *Alternativa:* uma prova só, da pausa. *Reabrir se:* o dono da Maind preferir uma prova mais curta.
- **Decidido pelo dono da Maind em 11/11/2026:** o administrador da instância suspende um app na instância inteira, numa emergência, sem apagar a configuração nem o registro; cada owner da organização é avisado, a suspensão fica anotada no registro de cada organização, e na hospedagem da Maind a equipe da Maind suspende com a autorização de duas pessoas (decisão 46). A pausa segue só do owner da organização, como a decisão do PO registrou; a suspensão é outro ato, da instância, e ganhou um tópico e um estado nesta mf.
- **Decidido pelo dono da Maind em 11/11/2026:** toda versão do módulo de um app é assinada pela Maind e conferida pelo mAIg antes de instalar, na primeira instalação e em cada atualização (decisão 88).
- **Decidido por delegação do dono da Maind em 11/11/2026:** a primeira versão sai em duas ondas, a 1.0 e a 1.1, e a segunda versão vem depois; cada capacidade desta mf tem a onda marcada no tópico "O que entra em cada onda". A regra que resume o recorte: a onda 1.0 liga e para; a onda 1.1 desfaz e encerra (decisão 95).
- **Decidido por delegação do dono da Maind em 11/11/2026:** o owner da organização pausa e retoma um app na organização dele, sem apagar nada. A regra deixa de ser proposta do PO e entra na onda 1.0 (decisão 96).
- **Decidido por delegação do dono da Maind em 11/11/2026:** retirar um app, apagar a configuração guardada de um app parado e desinstalar chegam juntos na onda 1.1, com a cópia assinada do registro. Na onda 1.0, um app só para, pela pausa, pela suspensão, pelo fim da licença ou pela ação manual da Maind, e nenhum registro é excluído; o owner da organização continua podendo apagar, um a um, o cadastro de um banco e a chave de uma IA (decisão 106).
- **Decidido por delegação do dono da Maind em 11/11/2026:** toda desinstalação começa com um aviso de segurança, com prazo, aos owners da organização e aos auditores de toda organização que tem registro naquele app, inclusive as que já o retiraram e as encerradas que o tinham, e só se conclui no fim do prazo, se nenhuma organização ativa tiver o app. Todas podem baixar a cópia assinada dentro do prazo. A organização encerrada não segura a desinstalação; o que segura é o pedido de volta à espera de execução. Chega na onda 1.1 (decisão 107).
- **Decidido por delegação do dono da Maind em 11/11/2026:** ninguém retira um app no lugar do owner da organização. O impasse da organização que não responde se resolve pela troca do owner da organização ou pelo encerramento da organização, na onda 1.1; a retirada à força não entra (decisão 108).
- **Decidido por delegação do dono da Maind em 11/11/2026:** a regra de versão única é por prazo, para o mAIg e para o módulo de cada app: a TI do cliente adia a versão nova dentro do prazo e, vencido o prazo, o que ficou velho deixa de atender, com o aviso "Atualização necessária". Com o mAIg vencido, todos os apps recusam a conversa; com o módulo de um app vencido, só aquele app para. A contagem de versões que convivem saiu do texto. Entra na onda 1.0 (decisão 109).
- **Decidido pelo dono da Maind em 12/11/2026:** o setup instala o núcleo e, junto, os apps que a organização já tem contratados no dia, sem um PDF nem um clique por app; o aval da TI do cliente está no próprio setup (decisão 134). Instalado não quer dizer liberado: o owner da organização libera e configura cada app no console (decisão 135). Um app autorizado depois do setup chega pela ligação, aparece no console como "app autorizado", e o administrador da instância clica em instalar; nenhum módulo novo entra na casa do cliente sem um gesto da TI do cliente (decisão 137). O tópico de instalar, o resumo, o estado "instalado" e a tabela de ondas foram reescritos nesse desenho.
- **Decidido pelo dono da Maind em 12/11/2026:** o kit não traz certificado pronto e deixou de ser um arquivo: o app chega pela ligação, no manifesto assinado, e a chave dele nasce no mAIg (decisão 138). O ponto sobre de onde vem o módulo saiu desta mf, e o "Também depende" passou a apontar o manifesto e o contrato de app.
- **Decidido pelo dono da Maind em 12/11/2026:** o mAIg é um pacote pronto em contêiner, e atualizar é trocar a caixa (decisão 142); no Kubernetes, o núcleo manda o cluster trocar a caixa, depois do aval da TI do cliente e dentro da janela, com permissão só no espaço do mAIg (decisão 144). O tópico de atualizar ganhou o parágrafo "Atualizar é trocar a caixa".
- **Decidido pelo dono da Maind em 12/11/2026:** num cluster que não aplica a política de rede, o mAIg instala o núcleo e recusa instalar qualquer módulo até a política valer, com a mensagem dizendo o que falta; o próprio núcleo faz o diagnóstico, na instalação, a pedido da TI do cliente e de tempos em tempos (decisão 145). O tópico de instalar e "Quando dá errado" ganharam esse caso.
