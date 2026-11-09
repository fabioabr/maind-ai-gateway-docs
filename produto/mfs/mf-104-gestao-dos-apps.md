# MF-104:Instalar, pausar e retirar apps sem refazer nada

> O administrador da instância instala cada app uma vez, e o owner da organização o libera e configura para a dele. Depois, o app pode ser pausado, parar no fim do contrato, ser atualizado e voltar como estava; só retirar e desinstalar apagam alguma coisa.

**Também chamada de:** Gestão dos apps · **Versão do mAIg:** 1ª · **Classe:** essencial · **Situação:** rascunho do PO

## Em uma frase

A gestão dos apps é tudo o que acontece com um app depois de contratado: o administrador da instância o instala, o owner da organização o libera e configura, e a partir daí o app pode ser pausado, retomado, parado pelo fim do contrato, atualizado, retirado de uma organização e, por fim, desinstalado.

O mAIg, o Maind AI Gateway, é a plataforma da Maind que fica na rede da empresa cliente, ou na infraestrutura da Maind, e pela qual os produtos da Maind chegam aos dados e à inteligência artificial (IA) da empresa. "Gateway" quer dizer portão. Cada produto entra no mAIg como um app, e o primeiro é o Horus (decisão 3).

Cada instalação física do mAIg é uma instância. Dentro dela, cada cliente trabalha numa organização, o espaço com os seus próprios apps e as suas próprias regras (decisão 9). O administrador da instância cuida da instalação; o owner da organização responde pela organização.

Ao longo da vida, um app muda de situação muitas vezes: uma pausa para conferir algo, uma renovação atrasada, uma versão nova. Esta mf existe para que nenhuma dessas mudanças obrigue alguém a refazer a configuração. E para que apagar dados seja sempre um ato pensado, e não um efeito colateral (decisões 14 e 15).

## Quem ganha

- **Administrador da instância** (quem cuida da instalação física do mAIg: a TI do cliente, quando o mAIg roda na rede da empresa, ou a equipe da Maind, quando roda na infraestrutura da Maind). Instala cada app uma vez, para todas as organizações da instância, e controla o que roda nela. Atualiza o app num lugar só. E sabe quando pode desinstalar um app e o que a desinstalação apaga.
- **Owner da organização** (a pessoa que responde pela organização no mAIg). Decide se a organização usa o app e com que regras. Pausa e retoma sem refazer nada. Encontra a configuração guardada quando o app para pelo fim do contrato, e decide se a apaga.
- **De forma indireta, a pessoa que usa o app e o auditor.** A pessoa que usa o app reencontra o app como estava depois de uma pausa ou de uma renovação. O auditor, a pessoa nomeada pelo owner da organização que só lê o registro, encontra o registro inteiro enquanto o app estiver instalado. O registro é a anotação de tudo o que os apps pedem ao mAIg em nome de cada organização (decisão 15).

## A decisão que passa a ser possível

- **O administrador da instância passa a poder dizer sim a um app uma vez,** para a instalação inteira, sem decidir pelas organizações se elas o usam (decisão 10).
- **O owner da organização passa a poder pausar um app para conferir algo e retomá-lo no dia seguinte,** sem refazer permissões, bancos, IAs e limites.
- **O owner da organização passa a poder renovar um contrato atrasado sem medo:** o app volta como estava (decisão 14).
- **A dor que some:** descobrir, depois de uma renovação ou de uma versão nova, que é preciso configurar tudo de novo.

## Como funciona

### O ciclo de vida de um app

**Em resumo:** um app passa por estados, e cada mudança de estado é um ato de um papel. Só dois atos apagam alguma coisa: retirar e desinstalar.

**Quem é quem.**

- **A instância** é cada instalação física do mAIg. **A organização** é o espaço de um cliente dentro da instância, com os seus próprios apps e as suas próprias regras. Uma instância atende uma ou mais organizações, sem misturá-las (decisão 9).
- **O administrador da instância** age na instância inteira. **O owner da organização** age só na organização dele.
- **A equipe da Maind** entra pelo contrato. Um app para no fim do contrato por uma ação manual dela ou pelo vencimento do certificado digital, a carteira de identidade digital com que a Maind libera o app. As duas formas de parar são da contratação dos apps (MF-103).

**Os estados e os atos.** "Instalado" e "desinstalado" valem para a instância inteira; os outros estados valem para cada organização.

| Estado | O que quer dizer | Quem leva a ele |
|---|---|---|
| Instalado | O app está na instância, mas ainda não serve a uma organização. | O administrador da instância, ao instalar. |
| Em configuração | O app foi liberado para a organização, mas ainda falta o mínimo para funcionar. | O owner da organização, ao começar a configurar. |
| Em uso | O app funciona para a organização, com a configuração dela. | O owner da organização, ao completar a configuração. |
| Pausado | O app não atende a organização, mas tudo fica guardado. | O owner da organização, ao pausar; ele mesmo retoma. |
| Parado | O contrato acabou e o app parou; a configuração fica guardada. | A ação manual da Maind ou o certificado vencido; só a renovação o traz de volta. |
| Retirado | A organização deixou de ter o app, e a configuração dela foi apagada. | O owner da organização, ao retirar. |
| Desinstalado | O app saiu da instância, e os dados dele foram excluídos. | O administrador da instância, ao desinstalar. |

**Por que é assim.** "Sem refazer nada" quer dizer que pausar, parar, renovar e atualizar não apagam a configuração. Apagar é sempre o ato de alguém que sabe o que está apagando (decisões 14 e 15).

### Instalar: o administrador da instância, uma vez por instância

**Em resumo:** liberado o app pela Maind, o administrador da instância o instala na instância, uma vez só, mesmo que várias organizações dela o usem (decisão 10).

**Quem é quem.**

- **Um app tem duas partes.** A parte de fora roda fora do mAIg; no Horus, é a que roda na nuvem da Maind, os computadores da Maind acessados pela internet, com as telas. O módulo é a parte interna do app, que roda isolada dentro do mAIg e só usa os serviços do núcleo, o conjunto de serviços que vem pronto no mAIg para todo app (decisão 4).
- **Instalar um app** é registrar a parte de fora e pôr o módulo para rodar. Registrar a parte de fora é anotar no mAIg o certificado dela, uma espécie de carteira de identidade digital, e a lista do que o app pode pedir (decisão 4).
- **Quando se instala.** Só depois de a Maind liberar o app para ao menos uma organização da instância, no handshake contratual, a conferência da contratação entre o mAIg e a Maind (MF-103).

**Por que é assim.** Quem cuida da instalação física controla o que roda nela: nenhum módulo novo passa a rodar sem passar pelo administrador da instância. Se o owner da organização instalasse, cada organização poderia pôr um módulo novo para rodar na instalação de todas (decisão 10).

**Uma instalação, uma versão.** Como o app é instalado uma vez por instância, todas as organizações dela usam a mesma versão dele. Uma organização não escolhe, sozinha, ficar numa versão mais velha.

**O que o administrador da instância vê.** As instalações, o estado e as versões de cada app. Vê também se alguma organização ainda tem o app, sem ver a configuração dela. Não vê o registro das organizações (decisão 12).

**Quando dá errado.** O administrador da instância tenta instalar um app que a Maind não liberou para nenhuma organização da instância. O mAIg não deixa: o app ainda não foi contratado ali (decisão 10).

**O que ainda está em aberto.** De onde vem o módulo, se dentro do kit de instalação ou por outro caminho, é um ponto da contratação dos apps (MF-103).

### Liberar e configurar: o owner da organização, para a organização dele

**Em resumo:** instalado na instância, o app ainda não funciona para a organização. O owner da organização o libera e o configura, e só então as pessoas da organização passam a usá-lo (decisão 10).

**O que o owner da organização configura.** A configuração de um app numa organização tem quatro partes (decisão 14):

- **As permissões:** o que o app pode pedir ao mAIg nesta organização, escolhido da lista com que o app foi registrado. As regras das permissões são da segurança e permissões (MF-101).
- **Os bancos que o app lê:** quais bancos de dados da organização ele pode consultar, sempre só para leitura. Como os bancos são cadastrados e onde ficam as senhas é dos bancos da empresa (MF-105).
- **As IAs que o app usa:** quais modelos de IA ele pode usar e com que limites. Um modelo é cada programa de IA que entende uma pergunta e escreve a resposta. Como funcionam as chaves dos provedores, os limites e o custo é da governança da IA (MF-106).
- **Os ajustes:** o que mais o app permite ajustar para a organização.

**O mínimo para entrar em uso.** Cada app declara, ao ser instalado, o mínimo de que precisa para funcionar. O Horus, por exemplo, precisa de ao menos um banco e de uma IA. Enquanto falta algo, o app fica "em configuração", e o console mostra ao owner da organização o que falta. O console é a tela do mAIg onde o owner da organização configura tudo (MF-110).

**Quem usa o app.** Dar acesso às pessoas da organização é da segurança e permissões (MF-101).

**Por que é assim.** Cada organização escolhe o que usa, e quem escolhe é alguém dela. Se o administrador da instância fizesse tudo, o owner da organização perderia essa decisão, e, nas instâncias da Maind, ela cairia na equipe da Maind. Abre-se mão de: são dois atos, de papéis diferentes, para começar a usar um app (decisão 10).

> **Analogia:** num prédio, a administração decide quais serviços o prédio oferece, como uma lavanderia, e cada condômino decide se assina e como usa. **Onde a analogia para:** no prédio, o condômino assina com a própria administração; no mAIg, a organização contrata o app com a Maind, e o administrador da instância nem vê o que o owner da organização configurou.

**Quando dá errado.** O owner da organização procura um app que está instalado na instância, mas que a organização dele não contratou. O app não aparece para ele como disponível, e o caminho é contratar (decisão 11).

### Pausar e retomar

**Em resumo:** o owner da organização pode pausar um app na organização dele e retomá-lo quando quiser. Na pausa, nada se apaga, e na volta o app está como estava.

**Quem é quem.**

- **Pausar** é o owner da organização fazer o app deixar de atender a organização por um tempo. Só ele pausa, e só na organização dele.
- **Retomar** é desfazer a pausa. O app volta com a mesma configuração.

**O que acontece na pausa.** O mAIg deixa de atender os pedidos do app nessa organização. O módulo não lê banco nenhum nem usa IA nenhuma em nome dela. A configuração fica guardada, e o registro também (decisões 14 e 15). O que a tela do app mostra à pessoa que usa o app, nesse tempo, é do próprio app.

**O que a pausa não muda.** O contrato segue correndo, com as mesmas datas (MF-103). As outras organizações da instância seguem usando o app normalmente. E os outros apps da mesma organização não são afetados.

**Por que é assim.** Há momentos em que o owner da organização precisa que o app pare de ler os dados sem desmontar nada. Por exemplo: uma troca no banco de dados, uma conferência da área de segurança, uma dúvida sobre os limites de gasto. Sem a pausa, o único jeito seria retirar o app e configurá-lo de novo depois.

> **Analogia:** é como bloquear por um tempo um cartão de crédito: ele para de funcionar, mas o limite, a senha e o histórico continuam lá, e desbloquear é um gesto só. **Onde a analogia para:** o cartão bloqueado é de uma pessoa só; o app pausado numa organização segue funcionando nas outras organizações da mesma instância.

**Quando dá errado.** O owner da organização esquece o app pausado. As pessoas da organização ficam sem ele até alguém retomá-lo; o console mostra o app como "pausado", com a data da pausa.

### Quando o app para pelo fim do contrato

**Em resumo:** quando o contrato acaba e o app para, por ação manual da Maind ou pelo certificado vencido, a configuração dele fica guardada até a organização renovar ou até o owner da organização apagá-la (decisões 13 e 14).

**Parado não é pausado.** O app pausado volta quando o owner da organização quiser. O app parado só volta com a renovação do contrato, que é da contratação dos apps (MF-103). Nos dois casos, a configuração e o registro ficam guardados.

**Por que é assim.** Quem renova não refaz nada. Abre-se mão de: fica uma configuração parada, sem uso, até alguém decidir (decisão 14).

**O que ficou de fora.** Apagar a configuração depois de um prazo: quem renovasse depois refaria tudo, e o prazo viraria mais um número a definir. E apagar a configuração na hora em que o app para (decisão 14).

**A renovação devolve o estado de antes.** Se o app estava em uso, volta em uso. Se estava pausado quando o contrato acabou, volta pausado, e o owner da organização o retoma quando quiser.

### A configuração guardada: o que fica e o que não fica

**Em resumo:** a configuração guardada é a de um app numa organização: as permissões, os bancos e as IAs que ele usa e os ajustes. Os bancos e as chaves de IA em si são da organização e não somem com ela (decisão 14).

**O que fica guardado.** As permissões que o owner da organização deu ao app. A lista dos bancos que o app lê. Os modelos de IA que ele usa e os limites. Os ajustes. É tudo o que o owner da organização precisaria refazer se a configuração se perdesse.

**O que é da organização, e não do app.** O cadastro de cada banco, com a senha guardada no cofre, é da organização e pode servir a vários apps (MF-105). O cofre é o lugar trancado onde o mAIg guarda as senhas dos bancos, de onde nenhum app as tira. As chaves dos provedores de IA, as senhas que dão acesso a eles, também são da organização (MF-106). Por isso, apagar a configuração de um app não apaga o banco nem a chave: apaga só a ligação entre o app e eles.

**Quem pode apagar.** Só o owner da organização, e só na organização dele (decisão 14). Apagar a configuração de um app é retirá-lo da organização, como explica o próximo tópico.

> **Analogia:** é como a mesa de um funcionário em licença: os papéis ficam na mesa, na ordem em que ele deixou, até ele voltar ou até a empresa decidir esvaziá-la. **Onde a analogia para:** numa licença, a sala costuma esperar parada; no mAIg, a organização segue usando os mesmos bancos e as mesmas chaves em outros apps enquanto a configuração do app espera.

**Quando dá errado.** O owner da organização apaga a configuração de um app parado e, semanas depois, a organização renova. O app volta sem configuração, e o owner da organização precisa refazê-la (decisão 14).

### Retirar o app da organização

**Em resumo:** retirar é o owner da organização tirar o app da organização dele: o app deixa de servir a ela, e a configuração dela é apagada. O registro continua guardado enquanto o app estiver instalado na instância (decisão 15).

**Quem é quem.** Quem retira é o owner da organização. A retirada vale só para a organização dele: o app segue instalado na instância e em uso nas outras organizações que o têm.

**O que se apaga e o que fica.** Apaga-se a configuração do app nesta organização. Fica o registro do que o app pediu em nome dela, que o owner da organização e o auditor continuam consultando. O registro só é excluído quando o app é desinstalado da instância (decisão 15).

**O que a retirada não muda.** O contrato comercial: retirar o app não o cancela, e o contrato segue as regras da contratação dos apps (MF-103). Se a organização quiser usar o app de novo, com o contrato ainda valendo, o owner da organização o libera e configura do zero.

**Por que é assim.** A retirada é o "apagar" que a decisão 14 deixa nas mãos do owner da organização, com um nome próprio para que ninguém a confunda com a pausa. É o único ato do owner da organização que obriga a refazer algo. Por isso, o console pede que ele confirme sabendo disso.

**Quando dá errado.** O owner da organização retira o app pensando que o pausava: a configuração se perde e precisa ser refeita. Para evitar isso, a confirmação diz com todas as letras que a configuração será apagada e lembra que a pausa existe para o caso contrário.

**O que ainda está em aberto.** O que acontece com o registro de uma organização que retirou um app que segue instalado para outras está em "O que ainda falta decidir".

### Desinstalar: o app sai da instância, e os dados dele são excluídos

**Em resumo:** desinstalar é o administrador da instância tirar o app da instância. Desinstalado o app, os dados dele são excluídos: o registro do que ele pediu e as configurações dele em todas as organizações da instância (decisão 15).

**Quem é quem.** Quem desinstala é o administrador da instância, porque foi quem instalou e é quem controla o que roda na instância (decisão 10). A desinstalação vale para a instância inteira, e não para uma organização.

**O que se exclui.** O módulo sai da instância, e a parte de fora deixa de estar registrada nela. O registro do app é excluído, e com ele a história do que o app pediu em cada organização. A exclusão não tem volta.

**A trava.** O administrador da instância só desinstala um app quando nenhuma organização da instância o tem em configuração, em uso, pausado ou parado com a configuração guardada. Em outras palavras: todas as organizações que o tinham já o retiraram, ou foram excluídas. O console do administrador da instância mostra se alguma organização ainda tem o app, sem mostrar a configuração dela.

**Por que a trava.** Sem ela, um ato do administrador da instância apagaria o registro de organizações que não pediram isso. Na infraestrutura da Maind, esse administrador é a equipe da Maind, que nem vê o registro das organizações (decisão 12). A trava devolve a decisão a cada owner da organização, que retira o app quando quiser.

**Por que a exclusão é assim.** Nada se perde enquanto o app existe, e não há prazo de guarda. Abre-se mão de: o volume do registro só cresce, e guardar dados de pessoas sem prazo pede cuidado com a lei de proteção de dados pessoais. Ficaram descartados um prazo definido pelo owner da organização e um prazo fixo da Maind (decisão 15).

**Quando dá errado.** Uma organização guarda a configuração de um app parado e não responde. A trava impede a desinstalação, e o app fica instalado, sem uso. Como sair desse impasse está em "O que ainda falta decidir".

**E se a organização for excluída.** No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: excluir uma organização apaga tudo o que há dela, e só dela, sem tocar nas outras da mesma instalação (D-278 do Horus). Criar e excluir organizações é das organizações e instâncias (MF-107).

### Atualizar um app e as versões que convivem

**Em resumo:** quando a Maind lança uma versão nova de um app, o administrador da instância a instala por cima da anterior, uma vez para a instância. A configuração e o registro ficam como estavam. Quantas versões podem conviver ainda está em aberto.

**Quem é quem.**

- **Três peças têm versão:** o próprio mAIg, o módulo de cada app, dentro da instância, e a parte de fora de cada app, fora do mAIg. No Horus, a parte de fora roda na nuvem da Maind e é atualizada pela Maind; o módulo roda na instância e é atualizado por quem cuida dela.
- **Conviver** quer dizer funcionar juntas, mesmo em versões diferentes: a parte de fora nova com o módulo de antes, ou o módulo novo com um mAIg de antes.
- **Quem atualiza o app** na instância é o administrador da instância, como quem o instalou. A atualização do próprio mAIg é das organizações e instâncias (MF-107).

**Atualizar não é reinstalar.** A atualização mantém a configuração de cada organização e o registro. Se a versão nova pede uma permissão que a anterior não pedia, essa permissão chega desligada. O app segue funcionando com as permissões de antes até o owner da organização decidir liberá-la.

**Por que é assim.** Na infraestrutura do cliente, a TI do cliente, a equipe de tecnologia da empresa, atualiza no tempo dela. A parte de fora, na nuvem da Maind, muda com frequência. Sem uma janela de convivência, cada versão nova da Maind deixaria parados os clientes que ainda não atualizaram.

**Quando dá errado.** No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: com uma versão mais velha que a anterior, a organização não funciona, e a pessoa vê um aviso próprio de que a versão precisa ser atualizada. A luz de estado fica vermelha, com o texto "Atualização necessária". A página de status mostra o motivo, sem a versão, e o painel da instância mostra o motivo e a versão. Quem atualiza é quem hospeda (D-292 do Horus).

**O que ainda está em aberto.** Quantas versões do mAIg e dos apps podem conviver está em "O que ainda falta decidir".

### Uma instância, várias organizações: cada uma no seu passo

**Em resumo:** o app é um só na instância, mas cada organização o configura, pausa e retira por conta própria. O que uma organização faz não alcança as outras (decisões 9 e 11).

**Quem é quem.** Numa instância da Maind convivem organizações de empresas diferentes, e a equipe da Maind faz o papel de administrador da instância. Cada organização tem o seu owner da organização.

**Exemplo.** Numa instância da Maind, a Organização A, da empresa X, e a Organização B, da empresa Y, usam o Horus.

1. A equipe da Maind instala o Horus uma vez. O owner da Organização A e o owner da Organização B o liberam e configuram, cada um com os seus bancos e as suas IAs.
2. O owner da Organização A pausa o Horus para trocar o banco de vendas. Na Organização B, ninguém percebe nada.
3. A equipe da Maind atualiza o Horus. As duas organizações passam à versão nova, cada uma com a sua configuração intacta, e a A continua pausada.
4. A empresa X decide não usar mais o Horus, e o owner da Organização A o retira. A configuração da A é apagada. O registro dela fica, porque o Horus segue instalado.
5. A equipe da Maind não consegue desinstalar o Horus: a Organização B ainda o usa.

### Exemplo completo: a Farma Vida, do Horus ao segundo app

**Em resumo:** a Farma Vida instala o Horus, pausa, para pelo fim do contrato, renova, atualiza, recebe um segundo app e, um dia, retira e desinstala esse segundo app; o exemplo mostra o que fica guardado em cada passo.

**Quem é quem no exemplo.** A Farma Vida é uma rede de 40 farmácias, com o mAIg na própria rede. Marta, da TI do cliente, faz o papel de administrador da instância. Paulo, diretor de operações, é o owner da organização. Renata, da área de segurança, é a auditora. Ana, gerente comercial, é a pessoa que usa o app: no Horus, a pessoa que pergunta.

**Exemplo.**

1. **Instalar.** O handshake contratual já liberou o Horus para a organização Farma Vida (MF-103). Marta instala o Horus na instância, uma vez só.
2. **Liberar e configurar.** Paulo, no console, dá ao Horus a permissão de ler o banco de vendas e escolhe a IA, os modelos e um limite de gasto. Com o mínimo configurado, o Horus passa a "em uso", e Paulo dá acesso a Ana (MF-101).
3. **Pausar.** Meses depois, a TI troca o servidor do banco de vendas. Paulo pausa o Horus por um dia. Ana não consegue perguntar ao Horus nesse dia; o que a tela mostra é do Horus.
4. **Retomar.** Terminada a troca, Paulo retoma o Horus. Ana pergunta de novo, e nada foi refeito. Se o endereço do banco mudou, Paulo o corrige no cadastro do banco, e não na configuração do Horus (MF-105).
5. **Parar e renovar.** Um ano depois, a renovação atrasa, e o certificado vence: o Horus para (MF-103). A configuração fica guardada. A Farma Vida renova, e o Horus volta como estava.
6. **Atualizar.** A Maind lança uma versão nova do Horus, e Marta a instala. A configuração de Paulo continua, e Renata encontra no registro a história de antes e de depois.
7. **O segundo app.** A Farma Vida contrata um segundo app, e Marta o instala. Para o exemplo, é o Maind Doc, um assistente que gera documentos de projetos corporativos com IA; ele é só um exemplo de segundo app possível e não está definido nem planejado. Paulo o configura à parte, com os bancos e as IAs dele.
8. **Retirar.** Tempos depois, a Farma Vida deixa de usar o segundo app, e Paulo o retira. A configuração dele se apaga, e o Horus não é afetado. O registro do segundo app fica guardado enquanto ele estiver instalado.
9. **Desinstalar.** Nenhuma outra organização da instância tem o segundo app, e a trava deixa Marta desinstalá-lo. O registro dele é excluído, e Paulo e Renata deixam de consultá-lo. O registro do Horus continua inteiro.

### Quando dá errado

**Em resumo:** os casos mais prováveis desta mf e o que acontece em cada um.

- **O administrador da instância tenta instalar um app não contratado.** O mAIg não deixa (decisão 10).
- **O owner da organização confunde retirar com pausar.** A configuração se perde e precisa ser refeita; a confirmação avisa antes (decisão 14).
- **A configuração foi apagada e a organização renova.** O app volta sem configuração, e o owner da organização a refaz (decisão 14).
- **Uma versão velha demais.** A organização não funciona até a versão ser atualizada, como no ponto de partida do Horus (D-292 do Horus).
- **O administrador da instância quer desinstalar um app que alguma organização ainda tem.** A trava impede; o impasse está em aberto.
- **Um módulo com defeito atrapalha a instância.** Impedir que um módulo prejudique os outros é da execução isolada dos apps (MF-109). A gestão dos apps não tem uma pausa da instância inteira.
- **Uma organização é excluída.** Ela leva tudo o que é dela, inclusive as configurações dos apps (MF-107).

## Prova de valor

Prova de valor proposta pelo PO; o dono da Maind ainda não a confirmou.

1. **Pausar e voltar sem refazer nada.** Numa organização com o Horus em uso, o owner da organização pausa o app. O auditor confere no registro que, durante a pausa, o app não leu nada em nome da organização, e o administrador da instância confere que o app seguiu no ar na instância, para as outras organizações. O owner da organização retoma, e a pessoa que usa o app faz a mesma pergunta de antes e recebe a resposta, sem nenhuma configuração refeita. A mesma prova se repete com o fim do contrato e a renovação.
2. **Uma instalação, várias organizações, cada uma no seu passo.** Numa instância com duas organizações, o administrador da instância instala o app uma vez. Uma organização o retira, e a outra segue usando. O administrador da instância tenta desinstalar e é impedido pela trava. Quando a segunda organização também retira o app, ele desinstala, e o registro do app é excluído.

## Retorno para o negócio

- **Retenção.** Renovar sem refazer nada tira um obstáculo da renovação (decisão 14). Hipótese: menos atrito na hora de renovar, sobretudo depois de uma carência que terminou com o app parado.
- **Custo de atender.** O owner da organização pausa, retoma e retira sozinho, no console, sem abrir chamado à Maind. Hipótese: menos pedidos de suporte para "desligar por um tempo" um app.
- **Entrar e expandir.** O segundo app passa pelos mesmos dois passos do primeiro, e o administrador da instância já os conhece. Hipótese: a TI do cliente diz sim a um app novo com mais facilidade, porque sabe que pode retirá-lo e desinstalá-lo de um jeito claro.
- **Confiança.** Apagar é sempre um ato explícito, e nada some por efeito colateral. Hipótese: isso pesa a favor do mAIg na aprovação de segurança.
- **O que se paga por isso.** Configurações paradas e um registro que só cresce ocupam espaço e pedem cuidado com a lei de proteção de dados pessoais (decisões 14 e 15).

## O que não inclui

- **A contratação, o kit, o certificado, o handshake, o fim do contrato e a renovação:** contratação dos apps (MF-103).
- **Rodar o módulo isolado e o que ele faz por dentro:** execução isolada dos apps (MF-109).
- **O cadastro dos bancos, o cofre das senhas e o acesso só de leitura:** bancos da empresa (MF-105).
- **As chaves dos provedores de IA, as regras dos modelos permitidos, dos limites e do custo:** governança da IA (MF-106).
- **Quem são as pessoas que usam o app, como recebem acesso e as regras das permissões:** segurança e permissões (MF-101).
- **O registro em si e a consulta pelo owner da organização e pelo auditor:** registro e auditoria (MF-102).
- **A tela onde tudo isto se faz:** console de configuração (MF-110).
- **Criar e excluir organizações e atualizar o próprio mAIg:** organizações e instâncias (MF-107).
- **O que a tela do app mostra à pessoa que usa o app quando ele está pausado ou parado:** é da parte de fora do app; no Horus, das telas do Horus.

## Depende de

- `MF-103:Contratação dos apps`. Um app só é instalado e liberado depois de contratado e liberado pela Maind no handshake contratual.
- `MF-101:Segurança e permissões`. Quem instala e quem libera são papéis definidos ali, e as permissões que o owner da organização dá ao app são parte da autorização, a conferência do que cada um pode fazer.
- `MF-107:Organizações e instâncias`. Instalar é por instância, e liberar, pausar e retirar são por organização. Sem as duas, não há onde instalar nem para quem liberar.
- `MF-110:Console de configuração`. O owner da organização libera e configura os apps pelo console, e o administrador da instância instala por ele. Sem o console, não há onde fazer os dois passos.
- `MF-102:Registro e auditoria`. Ao desinstalar um app, o registro dele é excluído, e as regras de guarda do registro são as dessa mf.

## Ponto de partida no Horus

O mAIg nasceu do middleware do Horus, a peça que ficava entre as telas do Horus, na nuvem da Maind, e os dados da empresa.

- **A versão atual e a anterior.** No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: a parte do Horus na nuvem funciona com o middleware na versão atual e na anterior. Com uma mais velha, a organização não funciona, e a pessoa vê o aviso de que a versão precisa ser atualizada, com a luz vermelha e o texto "Atualização necessária". Quem atualiza é quem hospeda: a Maind no middleware dela, o cliente no dele. Quantas versões a janela cobre, e uma janela diferente por contrato, ficaram de fora (D-292 do Horus).
- **Só ativa com o mínimo configurado.** No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: uma organização nasce em configuração e só passa a ativa com o handshake confirmado, ao menos um banco configurado e a IA configurada pelo owner da organização (D-277 do Horus). Esta mf usa a mesma ideia para o app: ele fica "em configuração" até ter o mínimo de que precisa.
- **Excluir apaga só o que é de quem sai.** No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: excluir uma organização apaga, no middleware, as pessoas, os bancos, a IA e a configuração dela, e só o que é dela. Uma exclusão por engano leva junto a configuração, sem volta (D-278 do Horus). Esta mf usa a mesma ideia na retirada e na desinstalação.
- **Pausar e retirar um app.** O Horus não tem decisão sobre isto: no Horus, o middleware servia a um app só, o próprio Horus.

## O que ainda falta decidir

- **Falta o arquiteto do mAIg definir quantas versões do mAIg e dos apps podem conviver.** *O que está em jogo:* o cliente precisa de tempo para atualizar sem surpresa, e a Maind não pode carregar todas as versões antigas. Como o app é instalado uma vez por instância, todas as organizações dela andam juntas na mesma versão. No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: valem a versão atual e a anterior, e uma mais velha é recusada, com aviso (D-292 do Horus).
- **Falta o dono da Maind decidir se o administrador da instância pode desinstalar um app que alguma organização ainda tem, e com que aviso.** *O que está em jogo:* desinstalar exclui o registro e as configurações de todas as organizações da instância (decisão 15), e, na infraestrutura da Maind, quem desinstala é a equipe da Maind, que não vê esse registro (decisão 12). A trava protege as organizações, mas pode deixar um app instalado para sempre se uma delas não responder; a alternativa é um aviso com prazo.
- **Falta o dono da Maind decidir o que acontece com o registro de uma organização que retirou um app que segue instalado para outras.** *O que está em jogo:* pela decisão 15, esse registro fica enquanto o app estiver instalado, o que, numa instância da Maind, pode durar anos por causa de outras organizações. A organização que saiu fica com dados de pessoas guardados sem uso, o que pede cuidado com a lei de proteção de dados pessoais.
- **Também depende, e está tratado em outros lugares:** o que o registro anota dos atos de quem gere os apps, como liberar, configurar, pausar e retirar (MF-102); como os módulos dos apps ficam isolados dentro do mAIg (MF-109); de onde vem o módulo do app e o que mais vem no kit de instalação (MF-103); onde ficam e quem cadastra as pessoas que usam os apps (MF-101); quem atualiza o próprio mAIg (MF-107).

## Decisões do PO para discutir

Os trechos do texto que vão além das 18 decisões, sem código de decisão nem do Horus, estão aqui.

- **Decisão:** a mf separa três atos: pausar (o owner da organização, reversível, guarda tudo), retirar (o owner da organização, apaga a configuração da organização e mantém o registro) e desinstalar (o administrador da instância, exclui os dados do app na instância). *Por que:* o nome aprovado da mf fala em pausar e retirar, e as regras de guarda pedem que apagar seja um ato claro (decisões 14 e 15). *Alternativa:* um ato só, "remover", com o efeito decidido caso a caso. *Reabrir se:* os owners da organização confundirem os três na prática.
- **Decisão:** só o owner da organização pausa, e só na organização dele; o administrador da instância não tem uma pausa da instância inteira. *Por que:* cada organização escolhe o que usa (decisão 10), e um módulo com defeito se contém pelo isolamento (MF-109). *Alternativa:* uma pausa da instância inteira, para conter um problema antes de uma correção. *Reabrir se:* um módulo com defeito precisar ser parado em todas as organizações de uma vez.
- **Decisão:** a pausa não muda o contrato: as datas seguem correndo, e a pausa não estende o prazo. *Por que:* pausar é um ato de operação, e o contrato é da contratação dos apps. *Alternativa:* a pausa suspender a contagem do contrato. *Reabrir se:* a área comercial da Maind quiser oferecer suspensão de contrato.
- **Decisão:** a trava da desinstalação: o administrador da instância só desinstala quando nenhuma organização da instância tem o app em configuração, em uso, pausado ou parado com a configuração guardada. *Por que:* sem ela, um ato do administrador da instância apagaria o registro de organizações que não pediram isso. *Alternativa:* desinstalar com aviso e prazo às organizações; ou desinstalar livremente. *Reabrir se:* um app ficar instalado sem uso por causa de uma organização que não responde.
- **Decisão:** "os dados dele", na decisão 15, são o registro do app e as configurações dele em todas as organizações da instância. *Por que:* desinstalado o app, a configuração não tem mais a que servir. *Alternativa:* guardar a configuração mesmo depois de desinstalar, para uma reinstalação. *Reabrir se:* um cliente reinstalar um app e pedir a configuração de volta.
- **Decisão:** cada app declara o mínimo de que precisa para funcionar, e fica "em configuração" até tê-lo; o estado "em configuração" foi criado para isso. *Por que:* é a mesma ideia que o Horus adotou para a organização, que só fica ativa com o mínimo configurado (D-277 do Horus). *Alternativa:* o owner da organização liberar o app a qualquer momento, mesmo incompleto. *Reabrir se:* um app não tiver um mínimo claro.
- **Decisão:** a configuração do app guarda as ligações com os bancos e as IAs, e não os bancos e as chaves em si, que são da organização. *Por que:* um banco pode servir a vários apps, e retirar um app não pode apagar o banco que outro usa. *Alternativa:* cada app ter os seus próprios bancos e chaves. *Reabrir se:* a governança da IA ou os bancos da empresa definirem outro desenho (MF-106, MF-105).
- **Decisão:** quem atualiza um app na instância é o administrador da instância; a atualização mantém a configuração e o registro, e uma permissão nova chega desligada até o owner da organização liberá-la. *Por que:* é coerente com quem instala (decisão 10) e com o ponto de partida do Horus, em que quem atualiza é quem hospeda (D-292 do Horus). *Alternativa:* a atualização chegar sozinha, sem ato do administrador da instância. *Reabrir se:* clientes deixarem de atualizar e travarem as versões novas.
- **Decisão:** uma instalação, uma versão: todas as organizações da instância usam a mesma versão do app. *Por que:* é consequência de o app ser instalado uma vez só (decisão 10). *Alternativa:* versões diferentes por organização na mesma instância. *Reabrir se:* uma organização precisar ficar numa versão enquanto outra avança.
- **Decisão:** a renovação devolve o app ao estado de antes, inclusive pausado. *Por que:* "volta como estava" (decisão 14) vale também para a pausa. *Alternativa:* a renovação sempre devolver o app em uso. *Reabrir se:* owners da organização estranharem o app voltar pausado.
- **Decisão:** retirar o app não cancela o contrato; se a organização quiser o app de novo, com o contrato ainda valendo, o owner da organização o libera e configura do zero. *Por que:* retirar é um ato de operação, e o contrato é da contratação dos apps (MF-103). *Alternativa:* a retirada encerrar também o contrato daquele app para a organização. *Reabrir se:* organizações retirarem apps esperando parar de pagar por eles.
- **Decisão:** a retirada pede uma confirmação que diz que a configuração será apagada e lembra a pausa; o console mostra o app pausado com a data da pausa. *Por que:* retirar é o único ato do owner da organização que obriga a refazer algo. *Alternativa:* retirar sem confirmação, como qualquer ajuste. *Reabrir se:* a confirmação virar um incômodo sem efeito.
- **Decisão:** o administrador da instância vê se alguma organização ainda tem o app, sem ver a configuração dela. *Por que:* ele precisa disso para saber se a trava deixa desinstalar, e a configuração é da organização (decisão 12). *Alternativa:* não ver nada das organizações e só tentar desinstalar. *Reabrir se:* isso for visto como quebra do isolamento entre organizações.
- **Decisão:** o "Depende de" ficou com a contratação, a segurança e as organizações, como no mapa das dependências (MF-103, MF-101, MF-107). *Por que:* sem as três, não há app liberado, papéis nem lugar onde instalar. *Alternativa:* acrescentar o registro, que a desinstalação apaga, e o console, onde tudo se faz (MF-102, MF-110). *Reabrir se:* o mapa das dependências for revisto.
- **Decisão:** a prova de valor tem duas demonstrações: pausar e voltar sem refazer nada, e uma instalação com várias organizações, cada uma no seu passo, até a desinstalação. *Por que:* são as duas promessas do nome da mf que alguém de fora confere sem metas numéricas (decisão 18). *Alternativa:* uma prova só, da pausa. *Reabrir se:* o dono da Maind preferir uma prova mais curta.
