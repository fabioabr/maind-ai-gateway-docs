# MF-102:Saber quem pediu o quê, quando e com que dado

> O mAIg anota cada pedido que um app faz a ele: qual app, em nome de quem, que dado leu, quanta IA usou e quando. O owner da organização e até dois auditores nomeados por ele consultam essas anotações, e quem cuida da instalação não as vê.

**Também chamada de:** Registro e auditoria · **Versão do mAIg:** 1ª · **Classe:** essencial · **Situação:** rascunho do PO

## Em uma frase

O mAIg anota tudo o que os apps pedem a ele e deixa o owner da organização e os auditores conferirem, depois, quem pediu o quê, quando e com que dado.

O mAIg, ou Maind AI Gateway, fica entre os produtos da Maind, chamados apps, e os dados e a inteligência artificial (IA) da empresa cliente. Nenhum app toca uma senha de banco ou uma chave de IA: pede ao mAIg, que confere a permissão e anota o pedido (decisão 5).

Essa anotação é o que transforma a promessa do mAIg em algo que o cliente confere por conta própria. A governança, o conjunto de regras sobre quem usa o quê e quanto, só se prova com ela.

## Quem ganha

- **Auditor**, a pessoa que o owner da organização nomeia para conferir sem mudar nada. Uma organização pode ter até dois, e um deles pode ser de fora da empresa (decisão 79). Responde sozinho "quem pediu o quê", com as anotações na mão, sem depender da Maind nem de quem configurou.
- **Owner da organização**, a pessoa que responde pela organização no mAIg. Vê o que cada app fez com as permissões que ele deu e tem como mostrar que configurou certo.

De forma indireta, ganham também a TI do cliente, que aprova o mAIg sabendo que tudo fica anotado, e a pessoa que usa o app, porque o registro mostra também o que ela não pediu.

## A decisão que passa a ser possível

- **O auditor passa a poder responder "quem leu o banco de vendas na sexta à noite, por qual app e em nome de quem"** sem pedir nada à Maind.
- **O owner da organização passa a poder liberar um app novo** sabendo que tudo o que ele pedir fica à vista.
- **A dor que some:** um registro diferente em cada app, cada um num formato, ou um pedido à Maind para saber o que aconteceu dentro da casa do cliente.

## Como funciona

### O que cada linha do registro anota

**Em resumo:** o registro é onde o mAIg anota cada pedido que um app faz ao núcleo. Cada pedido vira uma linha, com o app, a pessoa, o que foi pedido, o resultado e a hora.

**Quem é quem.**

- **O log** é a anotação de tudo o que acontece, no momento em que acontece. **A auditoria** é a conferência dessas anotações, feita depois, por quem não executou a operação. **O registro** é o nome dos dois juntos (decisão 12).
- **O núcleo** são os serviços que vêm prontos no mAIg e servem a todos os apps. **O módulo** é a parte de um app que roda dentro do mAIg e pede ao núcleo tudo o que precisa (decisões 3 e 4).

**O que cada linha anota.**

- **Qual app pediu**, reconhecido pelo certificado, a carteira de identidade digital do app.
- **Em nome de quem**: a pessoa que usava o app quando o pedido nasceu.
- **O que foi pedido**: ler qual banco, ou usar qual modelo de IA.
- **Quanto**: no caso da IA, o uso e o custo do pedido, contados na conta do app (MF-106).
- **O resultado**: atendido, ou recusado por falta de permissão.
- **Quando**: o dia e a hora.

**Por que é assim.** Todo acesso aos dados e à IA passa pelo núcleo, que confere e anota (decisão 5). Por isso a anotação pega tudo, de todos os apps, num lugar só. É o que dá à empresa cliente o controle num lugar só, um dos objetivos do mAIg.

> **Analogia:** o registro é como o livro de visitas da portaria de um prédio, com o nome, a sala e a hora de cada entrada. **Onde a analogia para:** no livro de papel, o porteiro pode esquecer ou escrever errado; no mAIg, quem anota é o próprio núcleo, no momento do pedido, e o app não tem como pedir sem deixar a linha.

**Exemplo.** Ana, gerente comercial da Farma Vida, uma rede de 40 farmácias, pergunta ao Horus, o primeiro app da Maind, quanto cada farmácia vendeu em outubro.

1. O módulo do Horus pede os dados do banco de vendas. O núcleo confere a permissão, lê o banco sem alterar nada e anota: o Horus, em nome de Ana, leu o banco de vendas às 10h12; atendido.
2. O módulo pede à IA que monte a resposta. O núcleo confere o modelo e o limite, faz o pedido com a chave da Farma Vida e anota: o Horus, em nome de Ana, usou tal modelo, com tal uso e tal custo, às 10h12; atendido.
3. Ana vê a tabela na tela.
4. Na semana seguinte, Renata, a auditora, abre o registro e encontra as duas linhas.

**O que o app conta.** O que acontece só dentro de um app, como baixar uma conversa em PDF ou alterar um painel, o núcleo não vê. O app pode pedir ao núcleo que anote, e a linha fica marcada como "informada pelo app", separada das que o núcleo viu com os próprios olhos (decisão 59). A linha informada pelo app só tem campos fixos: o tipo do ato, que vem de uma lista que o app declara ao ser instalado, o alvo, por um código, a hora e a pessoa, que o núcleo tira do passe. O núcleo recusa o que foge disso, e a linha diz, por exemplo, "baixou a conversa 4812", sem o assunto. Essas linhas chegam na onda 1.1 da primeira versão; na onda 1.0, o registro só tem o que o núcleo viu (decisão 104). Assim, o auditor confere tudo num lugar só e sabe o que é prova do núcleo e o que é a palavra do app. Abre-se mão de: o registro cresce, e uma linha informada pelo app vale menos como prova.

**Quando dá errado.** O Horus pede um banco que Paulo, o owner da organização, não liberou. O núcleo não lê o banco, mas anota a linha com o resultado "recusado". A recusa também é informação: mostra um app pedindo mais do que lhe foi dado.

### Em nome de quem: a pessoa por trás de cada pedido

**Em resumo:** quem pede ao núcleo é sempre o módulo de um app, mas ele pede por alguém. A linha anota as duas coisas: o app e a pessoa.

**Por que anotar a pessoa.** Saber só que "o Horus leu o banco de vendas" não basta. As perguntas que chegam ao auditor costumam ser sobre pessoas: quem viu os números antes da divulgação, quem consultou um banco fora de hora. Sem a pessoa, o registro diria só que o app trabalhou.

**A linha é confiável porque as pessoas ficam no núcleo.** O mAIg cadastra as pessoas e faz o login delas (decisão 23), e por isso ele mesmo sabe quem está por trás de cada pedido. Se cada app guardasse as próprias pessoas, o mAIg anotaria o que o app informasse, sem como conferir. A confiança também depende do passe: a nuvem do app não consegue fabricá-lo, porque só o mAIg o assina (decisão 32). O que fica como risco aceito: uma nuvem invadida pode pedir, em nome de quem está usando o app, e por até 15 minutos depois de a pessoa sair, o que ela já poderia ver, e a linha mostra o nome dela (decisão 49).

**A tarefa marcada também tem pessoa.** Um app pode rodar algo numa hora marcada, como um relatório toda segunda-feira às 7h. A tarefa nunca roda em nome do app: o mAIg emite um passe de agendamento só daquela tarefa, em nome de quem a criou, e o guarda só nele, nunca na nuvem. A cada rodada, o mAIg confere se a pessoa ainda tem acesso e permissão, e a linha anota o nome dela, como em qualquer pedido. Se ela perdeu o acesso, a tarefa para, e o owner da organização é avisado (decisão 42).

**Exemplo.** A diretoria pergunta a Renata se alguém consultou o banco de vendas na véspera da reunião de resultados.

1. Renata procura no registro as leituras do banco de vendas naquele dia.
2. Encontra três linhas do Horus: duas em nome de Ana e uma em nome de um colega da área comercial.
3. Renata responde com os nomes, os horários e o app, sem pedir nada à Maind.
4. A diretoria quer saber, então, se a consulta foi sobre a loja do centro. Renata vê a consulta feita em cada linha e responde, sem ver os números devolvidos (decisão 58).

### Os atos de quem configura também entram no registro

**Em resumo:** além dos pedidos dos apps, o registro anota o que o owner da organização e o auditor fazem no mAIg e, das ações do administrador da instância, as que tocam a organização.

**O que entra.**

- Liberar, configurar, pausar ou retirar um app na organização.
- Dar ou tirar uma permissão, de um app ou de uma pessoa.
- Cadastrar ou mudar um banco ou uma IA. A senha e a chave não entram na linha: só o fato de terem mudado.
- Nomear ou trocar o auditor.
- Entrar no mAIg e consultar o registro.

**Por que é assim.** O auditor existe para conferir quem configura, porque o owner da organização não audita a si mesmo (decisão 12). Para isso, os atos do owner da organização precisam estar no registro. E a conferência vale nos dois sentidos: Paulo vê quando Renata consultou o registro.

**Os atos sensíveis avisam na hora.** Alguns atos do owner da organização, além de entrar no registro, avisam na hora os outros owners da organização e o auditor. A lista é fixa: mudar o que o pedido ao provedor de IA pode levar, cadastrar ou trocar um banco, trocar o auditor, subir o teto da resposta, baixar a cópia do registro, liberar o acesso de suporte da Maind (decisão 68), liberar uma saída além da resposta pronta, como a planilha, cujos downloads também ficam no registro (decisão 74), mudar quem recebe aviso e mudar os jeitos de entrar (decisão 85). Toda troca de owner da organização feita pelo administrador da instância também avisa (decisão 83). O aviso só informa e não pede aprovação (decisão 54). Ele aparece no console e chega também por e-mail, só com o tipo do aviso e um link, sem dado nenhum (decisão 64). Aos auditores, chega sempre: a organização não desliga esse aviso (decisão 85). Os avisos de segurança também ficam reunidos no painel de alertas do console, junto com o alerta de volume de pedidos (decisão 89). Marcar ou desmarcar uma coluna sensível também entrou na lista (decisão 111). Cada ato avisa a partir da onda em que a capacidade chega: baixar a cópia do registro, liberar o acesso de suporte, liberar uma saída além da resposta pronta e mudar quem recebe aviso só existem a partir da onda 1.1, e os outros avisam desde a onda 1.0 (decisão 95). Na onda 1.0, cada aviso tem destinatário fixo, e ninguém o desliga nem o redireciona; a lista do que a organização permite e as preferências de aviso chegam na onda 1.1 (decisão 126). Assim, nada importante muda em silêncio, e o auditor não depende de abrir o registro para saber. Abre-se mão de: chegam mais avisos, e um owner da organização mal-intencionado ainda age, só não escondido.

**Exemplo.** Numa sexta à tarde, o Horus passa a ler o banco financeiro.

1. Paulo libera o banco financeiro ao Horus, a pedido da área financeira, e o registro anota a mudança.
2. Na segunda, Renata vê as primeiras leituras do banco financeiro e, antes delas, a linha em que Paulo o liberou.
3. Renata pergunta a Paulo o motivo. A pergunta tem resposta porque as duas pontas estão anotadas: a permissão e o uso.

**Os atos do administrador da instância.** O administrador da instância não consulta o registro, mas os atos dele que tocam a organização também entram nele: trazer a organização à instância, com a chave temporária que a Maind mandou, e a criação do usuário do primeiro owner da organização pelo mAIg no fim do setup, a configuração inicial da instância, com cada envio do link de primeiro acesso (decisões 51 e 128; decisão 136), a chegada de cada app que a organização contratou, no setup ou com o clique no app autorizado, que substitui o antigo "instalar o kit" (decisões 82 e 134), cadastrar, excluir ou substituir um owner da organização, com a volta em 48 horas (decisão 83), instalar ou atualizar um app que a organização contratou, suspender ou retomar esse app numa emergência (decisão 46), e atualizar o próprio mAIg, com o aval da TI do cliente ou na janela da Maind (decisão 47). Cada ato vira uma linha no registro da organização, com o nome de quem o fez e a hora, e o administrador da instância só a escreve, sem poder lê-la (decisões 12 e 29). Assim, o auditor responde quando um app mudou de versão e quem o mudou, também na hospedagem da Maind, onde quem muda é a equipe da Maind. Como o app é instalado uma vez por instância (decisão 10), o mesmo ato vira uma linha em cada organização que o usa. Abre-se mão de: o administrador da instância ganha um caminho de escrita no registro, que precisa ser protegido contra abuso; e o que não toca organização nenhuma vai para outro lugar: o registro da instância, onde só se acrescenta e que o administrador da instância lê. O registro da instância nasce com a instância, na onda 1.0, e fica guardado enquanto a instância existir. Ali ficam, com quem fez e quando: cadastrar e retirar um administrador da instância, o pedido de troca de senha dele, o uso do procedimento da instalação, configurar e testar o servidor de e-mail, instalar ou trocar o certificado do endereço do mAIg, fazer e restaurar a cópia de segurança e, a partir da onda 1.1, desinstalar um app, que só acontece quando nenhuma organização o tem mais e exclui o registro dele (decisões 81 e 102). O registro da instância não tem dado de organização nenhuma.

**Exemplo.** Em março, Marta, no papel de administrador da instância da Farma Vida, atualiza o Horus da versão 2.0 para a 2.1.

1. O registro da Farma Vida anota: Marta, administrador da instância, atualizou o Horus da 2.0 para a 2.1, em 12 de março.
2. Marta não abre o registro: só deixa a linha.
3. Em junho, Renata estranha que o Horus passou a ler uma tabela nova e pergunta quando ele mudou de versão e quem o mudou.
4. Renata encontra a linha de Marta e responde sem pedir nada à Maind.

Na Ótica Visão Clara, que não tem TI e usa uma instância da Maind, a linha traz o nome de Rafael, da equipe da Maind, e Helena, owner da organização, vê quem mexeu no app dela.

### Quem consulta e quem não vê

**Em resumo:** dentro da organização, consultam o registro o owner da organização e os auditores nomeados por ele, até dois, que só leem. O administrador da instância nunca o vê; só escreve nele, sem ler, os atos dele que tocam a organização (decisão 29).

**Quem é quem.**

- **O owner da organização** responde pela organização e consulta o registro inteiro dela.
- **O auditor**, nomeado pelo owner da organização, consulta o mesmo registro e não muda nenhuma configuração (decisão 12). Costuma ser alguém da área de segurança. A organização pode ter até dois auditores, e um deles pode ser de fora da empresa, como o de uma auditoria externa, com um acesso que vence numa data que o owner da organização define (decisão 79). Na onda 1.0 da primeira versão, a organização tem um auditor só, de dentro da empresa; o segundo auditor e o auditor de fora chegam na onda 1.1 (decisão 97).
- **O administrador da instância** cuida da instalação física do mAIg, a instância. Na infraestrutura do cliente, é a TI do cliente; na da Maind, a equipe da Maind. Vê só as instalações, o estado e as versões (decisão 12), e escreve no registro das organizações os atos dele que as tocam, sem poder lê-lo (decisão 29).
- **A pessoa que usa o app** não consulta o registro.

**Como se consulta.** A consulta acontece no console do mAIg, a tela única de configuração (MF-110). Dá para procurar por app, por pessoa, por banco ou modelo, por resultado e por período.

**Por que é assim.** É a separação de funções: quem movimenta o dinheiro não é quem audita as contas. Com o auditor, a área de segurança do cliente confere tudo sem poder alterar nada, o que reforça o argumento de venda do mAIg. Abre-se mão de: mais um papel para criar e explicar (decisão 12).

**Por que o administrador da instância fica de fora.** Numa instância da Maind convivem organizações de empresas diferentes (decisão 9). Se o administrador da instância visse o registro, a equipe da Maind veria de uma vez o de todos os clientes, e o isolamento entre as organizações se quebraria (decisão 12). Pelo mesmo motivo, o painel da instância mostra, de cada organização, só contagens, sem nomes, a não ser os dos owners da organização (decisão 119). No Horus, já era assim (D-261 do Horus).

**O sigilo vale também fora da tela.** O registro de cada organização fica cifrado, isto é, embaralhado com uma chave da própria organização, que quem opera a máquina não alcança. Na hospedagem da Maind, quem opera a máquina é a equipe da Maind; na casa do cliente, a TI do cliente. Quem copia o disco ou a cópia de segurança não lê nada (decisão 57). A cópia de recuperação da chave fica com a própria organização, num código que o owner da organização baixa e guarda, e nunca com a Maind; a chave é destruída com o registro do último app da organização (decisão 87). A cópia de segurança é feita por quem opera a máquina, e cada restauração fica no registro (decisão 65, MF-107). A cópia leva o cofre, o registro de cada organização, o registro da instância e a configuração inteira, e, depois de uma restauração, cada organização só volta com o código de recuperação dela. O que mudou depois da data da cópia se perde, inclusive linhas do registro (decisão 116). Abre-se mão de: custa mais, perder a chave é perder o registro, e quem controla a máquina ligada ainda alcança, com muito esforço, o que estiver em uso naquele momento.

**O suporte da Maind também não vê.** Quando o owner da organização pede ajuda sobre algo do registro, a equipe da Maind não o abre por ele. O owner da organização ou o auditor mostram o que for preciso.

**Exemplo.**

1. Paulo nomeia Renata, da área de segurança, auditora da organização Farma Vida.
2. Renata entra e vê o registro: os pedidos do Horus e os atos de Paulo.
3. Ela tenta, por engano, mudar o ajuste de um banco. O mAIg não deixa: o papel dela só lê.
4. Marta, da TI da Farma Vida, no papel de administrador da instância, vê que o Horus está instalado, funcionando e na versão atual, e não encontra o registro.

**O que ainda está em aberto.** A regra diz o que o mAIg mostra a cada papel, e o sigilo vale também contra quem opera a máquina (decisão 57). Onde fica a chave de cada organização e como o registro é guardado sem que ninguém o altere são pontos do arquiteto do mAIg, no fim desta página. No Horus, quem opera a instalação da Maind segue podendo, tecnicamente, alcançar as senhas dos bancos guardadas nela (D-273 do Horus). O mAIg decidiu diferente: o cofre e o registro ficam cifrados com a chave da organização, e o risco aceito é o que estiver em uso com a máquina ligada (decisão 57).

### A guarda: nenhuma linha se apaga enquanto o app estiver instalado

**Em resumo:** o registro de um app fica guardado, sem prazo, enquanto o app estiver instalado no mAIg. Ninguém apaga nem muda uma linha; quando o app é desinstalado, os dados dele são excluídos. Na onda 1.0 da primeira versão, nenhum app é retirado nem desinstalado, e nenhum registro é excluído: retirar e desinstalar chegam na onda 1.1, junto com a cópia assinada do registro (decisão 106).

**Parar não é desinstalar.** Parar é o app deixar de funcionar para a organização, por exemplo depois do fim do contrato, quando a licença vence sem renovação (decisões 13 e 56). Desinstalar é tirar o app do mAIg. Com o app parado, o registro continua guardado; só a desinstalação o exclui (decisões 14 e 15). Pausar, retirar e desinstalar estão em Gestão dos apps (MF-104).

**Ninguém apaga uma linha.** Um registro que alguém pode editar não prova nada: se o owner da organização pudesse apagar uma linha, o auditor não saberia o que sumiu. Por isso o registro de um app só é excluído quando o app é desinstalado (decisão 15). No Horus, isso já foi decidido assim, e vale no mAIg: nem o owner da organização edita ou apaga uma anotação do rastro da auditoria (decisão 31, D-093 do Horus).

**Quem sai da organização.** Excluir uma pessoa da organização tira o acesso dela, mas as linhas do registro em nome dela continuam, com o nome, até a desinstalação do app (decisão 27). Assim, o auditor ainda responde quem leu o banco numa sexta à noite, mesmo que quem leu já tenha saído, e excluir uma pessoa não serve para fazer sumir o rastro dela. No Horus, quem é excluído leva consigo os registros dele (D-210 do Horus); o mAIg decidiu diferente. Abre-se mão de: guardar o nome de quem já saiu, sem prazo, pesa na lei de proteção de dados pessoais; o pedido de uma pessoa para apagar os dados dela é analisado caso a caso, sem regra pronta; e a pessoa pode não aceitar que os dados dela fiquem.

**Sem anotar, não atende.** O registro só é completo se nenhum pedido escapa dele. Se, por um problema, o mAIg não consegue anotar a linha, ele recusa o pedido. É melhor uma pergunta sem resposta do que um acesso ao banco sem rastro.

**Por que não há prazo.** Nada se perde enquanto o app existe, e quem renova depois de uma pausa encontra o registro inteiro. Abre-se mão de: o volume do registro só cresce, e guardar dados de pessoas sem prazo pede cuidado com a lei de proteção de dados pessoais. Ficaram de fora o owner da organização definir o prazo e um prazo fixo da Maind (decisão 15).

**A desinstalação vale para a instância inteira.** Um app é instalado uma vez por instância (decisão 10). Desinstalá-lo exclui os dados dele, e com eles o registro de todas as organizações da instância que o usavam (decisão 15). Por isso toda desinstalação começa com um aviso de segurança, com prazo, aos owners da organização e aos auditores de toda organização que tem registro naquele app, também das que já o retiraram e das encerradas, e todas podem baixar a cópia assinada dentro do prazo (decisão 107). Encerrar uma organização inteira, que não desinstala o app, é assunto de Organizações e instâncias (decisão 31, MF-107).

**O aviso e a cópia.** O owner da organização é avisado, quando retira o app, de que o registro só será excluído com a desinstalação, e pode baixar uma cópia dele até lá (decisão 21). Como o administrador da instância só desinstala um app quando nenhuma organização o tem mais, nenhuma organização perde o registro sem ter retirado o app antes (MF-104). A cópia pode ser baixada pelo owner da organização e pelos auditores, num arquivo assinado pelo mAIg, que prova que ela é a original, sem alteração. Cada download fica no registro e avisa os outros papéis (decisões 54 e 80). Fora do mAIg, a cópia fica com quem a baixou, e o registro mostra quem baixou e quando.

**Em que onda.** A cópia assinada chega na onda 1.1, junto com a retirada e a desinstalação de um app: na onda 1.0, como nenhum registro é excluído, nada se perde sem ela (decisão 106). Ela é a única saída do registro: a primeira versão não envia o registro para sistemas de fora (decisão 105).

> **Analogia:** é como o livro-caixa de uma loja, com as páginas numeradas, em que nada se arranca. **Onde a analogia para:** o livro-caixa vai para o arquivo quando a loja fecha; no mAIg, quando o app é desinstalado, o registro dele é excluído, sem arquivo, a não ser a cópia que o owner da organização tenha baixado.

**Exemplo.** O contrato do Horus da Farma Vida acaba, e a renovação atrasa.

1. A licença vence sem renovação, e o Horus para na Farma Vida (decisões 13 e 56).
2. O Horus continua instalado. Renata continua abrindo o registro e vê tudo o que ele pediu até parar.
3. A Farma Vida renova, o Horus volta como estava, e o registro segue do ponto em que parou.
4. Anos depois, a Farma Vida deixa de usar o Horus, e ele é desinstalado. O registro do Horus é excluído junto.

**Quando dá errado.** Um app é desinstalado por engano. Os dados dele, com o registro, são excluídos, e reinstalar o app não os traz de volta.

**Quando uma pessoa sai.** Ana deixa a Farma Vida, e Paulo exclui o cadastro dela. As linhas dela continuam no registro, com o nome, e Renata ainda responde quem leu o banco de vendas naquela sexta à noite. Se Ana pedir que os dados dela sejam apagados, o pedido é analisado caso a caso, porque nenhuma linha se apaga antes da desinstalação (decisão 27).

**Quando uma organização é encerrada.** O mAIg não exclui uma organização: encerra. O registro dela segue na instância, e só o owner da organização e o auditor dela continuam podendo lê-lo, até o app ser desinstalado (decisão 31). Assim, o registro não some quando a organização sai, e a equipe da Maind e a TI do cliente, que encerram sem poder ver o registro, também não o apagam. Abre-se mão de: a organização encerrada segue guardando dados de pessoas até os apps dela serem desinstalados.

**O que ainda está em aberto.** Como se analisa o pedido de uma pessoa excluída para apagar os dados dela está no fim desta página.

### O conteúdo do que foi pedido: a consulta, nunca os dados

**Em resumo:** a linha anota o fato e o que foi pedido, mas nunca os dados. De cada leitura de banco, guarda a consulta feita e quantas linhas voltaram; de cada pedido à IA, a camada e uma descrição do que foi enviado (decisões 20 e 58).

**Quem é quem.**

- **O fato** é o que a linha anota sempre: o app, a pessoa, o banco ou o modelo, o quanto, o resultado e a hora.
- **A consulta** é a instrução que diz ao banco quais dados buscar, como "as vendas de outubro, por loja".
- **Os dados** são o que o banco devolveu, os números da empresa. Eles nunca entram no registro, e nem o texto inteiro enviado à IA, nem a resposta dela.

**O que a linha guarda.**

- **Numa leitura de banco:** o fato, a consulta feita e quantas linhas voltaram. Quando um filtro da consulta toca uma coluna sensível, o valor dele aparece mascarado na linha: o auditor vê que houve um filtro por CPF, e não qual CPF. Os outros valores, como o período e a cidade, aparecem. Vale desde a onda 1.0 (decisão 103).
- **Num pedido à IA:** o fato, a camada do pedido, isto é, até que ponto ele levava dados, e uma descrição do que foi enviado ao provedor, como quais tabelas e quantas linhas (decisão 20).

**Por que é assim.** O auditor sabe o que foi lido e o que foi à IA, e o registro não vira uma cópia dos dados da empresa, guardada sem prazo (decisões 15 e 58). Segue o ponto de partida do Horus, cujo rastro da auditoria não guarda o conteúdo das perguntas e das respostas (D-090 do Horus). Ficaram de fora guardar tudo, que faria do registro um alvo tão sensível quanto o próprio banco, e guardar só o fato, que deixaria o auditor sem saber o que foi perguntado ao banco. Abre-se mão de: o auditor não reconstrói palavra por palavra o que a IA recebeu e respondeu.

**Exemplo.** Renata recebe uma denúncia: alguém teria levado para fora da empresa as vendas da loja do centro.

1. Renata procura no registro as leituras do banco de vendas pelo Horus na semana.
2. Encontra a consulta "vendas da loja do centro, por dia", feita em nome de Jorge numa terça, com 30 linhas devolvidas.
3. Ela não vê os números que Jorge recebeu, mas sabe quem pediu o quê e quando, e leva o caso à área responsável.
4. O registro mostra o que aconteceu dentro do mAIg. O que a pessoa fez depois com a resposta, fora dele, o registro não mostra.

### O que entra em cada onda

A primeira versão do mAIg sai em duas ondas, a 1.0 e a 1.1, e a segunda versão vem depois (decisões 92 e 95). A tabela diz em que onda chega cada capacidade desta mf, com as decisões que a sustentam. "Não entra" quer dizer que a capacidade não faz parte da primeira versão e não tem versão marcada.

| Capacidade | Onda | Decisões | Por quê |
| --- | --- | --- | --- |
| Uma linha no registro para cada pedido: o app, a pessoa, o que foi pedido, o resultado e a hora | onda 1.0 | 12, 58, 92 | É a prova que justifica o mAIg. |
| O pedido recusado também fica anotado | onda 1.0 | 12, 62, 96 | Uma tentativa barrada interessa tanto ao auditor quanto um pedido atendido. |
| Sem anotar, não atende: se o mAIg não consegue escrever a linha, recusa o pedido | onda 1.0 | 96 | Um pedido que escapa do registro quebra a prova. |
| Os atos do owner da organização e do auditor no console entram no registro, inclusive as entradas e as consultas ao próprio registro | onda 1.0 | 12, 96 | Quem configura também é conferido, e a conferência vale nos dois sentidos. |
| Os atos do administrador da instância que tocam a organização entram no registro dela, sem que ele possa lê-lo | onda 1.0 | 29, 46, 82, 83 | A organização precisa saber o que a TI fez com ela. |
| Os atos sensíveis avisam na hora os owners da organização e o auditor | onda 1.0 | 54, 85, 92 | São os avisos de segurança, que a organização não desliga. |
| Painel de alertas no console, com os avisos de segurança e os alertas do limite de pedidos | onda 1.0 | 89, 92 | É onde a organização vê que alguém está tirando dado demais. |
| O owner da organização e o auditor consultam o registro no console, por app, pessoa, banco ou modelo, resultado e período | onda 1.0 | 12 | Um registro que ninguém consegue ler não serve de prova. |
| O administrador da instância nunca lê o registro das organizações | onda 1.0 | 12, 57 | O sigilo vale também contra quem opera a máquina. |
| Registro cifrado por organização | onda 1.0 | 57, 92 | Sem a cifra, quem tem acesso ao disco lê tudo. |
| O registro fica guardado, sem prazo, enquanto o app estiver instalado, e ninguém apaga nem muda uma linha | onda 1.0 | 15, 31 | A prova não pode depender da boa vontade de ninguém. |
| A linha guarda a consulta feita e a contagem, nunca os dados | onda 1.0 | 58 | Dado da empresa não se copia para o registro. |
| No registro, o valor de um filtro que toca uma coluna sensível aparece mascarado; os outros valores aparecem | onda 1.0 | 58, 103 | Um CPF digitado num filtro é dado de pessoa e não pode entrar no registro pela porta da consulta. |
| Registro da instância, para os atos que não tocam organização nenhuma, lido pelos administradores da instância e guardado enquanto a instância existir | onda 1.0 | 81, 102 | Um registro que começa depois da instalação nasce com um buraco. |
| Linhas "informadas pelo app", só com campos fixos: o tipo do ato, o alvo por um código, a hora e a pessoa, tirada do passe | onda 1.1 | 59, 92, 104 | Completa a história, mas o registro do núcleo já prova o essencial; texto livre abriria uma porta lateral. |
| Cópia do registro em arquivo assinado, baixada pelo owner da organização e pelos auditores | onda 1.1 | 80, 92, 106 | Só é indispensável quando um app é retirado, e retirar também fica na onda 1.1. |
| Exportar o registro para sistemas de fora | não entra | 80, 105 | A saída do registro é a cópia assinada; uma segunda porta de saída não é necessária. |
| Alertas automáticos de comportamento estranho | não entra | 89, 105 | O registro anota e as pessoas conferem; o único alerta automático é o do limite de pedidos. |

## Prova de valor

Prova de valor proposta pelo PO; o dono da Maind ainda não a confirmou.

**Demonstração 1: quem pediu o quê, sem chamar a Maind.** Marta, da TI do cliente, pergunta a Renata quem leu o banco financeiro na semana anterior, por qual app e desde quando ele está liberado.

1. Renata procura no registro as leituras do banco financeiro.
2. Encontra as linhas do Horus, com a pessoa e a hora de cada uma, e uma tentativa recusada de antes da liberação.
3. Encontra a linha em que Paulo liberou o banco ao Horus.
4. Renata responde a Marta sem abrir chamado à Maind e sem que ninguém mude nada.

**Demonstração 2: o registro é da organização.** Marta, no papel de administrador da instância, mostra que não encontra o registro. Renata tenta apagar uma linha e não consegue. O Horus é parado, e o registro continua lá.

## Retorno para o negócio

- **Argumento de venda.** A área de segurança do cliente confere tudo sem poder mudar nada, o que reforça o argumento de venda (decisão 12). Hipótese: o registro com o auditor encurta a aprovação de segurança da primeira venda.
- **Entrar e expandir.** O segundo app aparece no mesmo registro que o Horus. Hipótese: a TI do cliente confia mais depressa num app novo quando vê, no lugar de sempre, tudo o que ele pede.
- **Custo de atender.** Hipótese: como o owner da organização e o auditor respondem sozinhos "quem pediu o quê", a equipe da Maind recebe menos pedidos de investigação.
- **O custo de guardar.** O registro sem prazo só cresce (decisão 15), e o mAIg vem embutido no preço dos apps (decisão 17). Na hospedagem da Maind, esse volume é um custo que o preço dos apps precisa cobrir.

## O que não inclui

- Os papéis, quem pode ser auditor e o cadastro das pessoas (MF-101).
- O que acontece só dentro de um app e o app não informa: o registro só tem o que o núcleo viu e o que o app pediu para anotar, com a marca "informada pelo app" (decisão 59). As linhas informadas pelo app chegam na onda 1.1 (decisão 104). No Horus, quem publicou ou abriu um relatório ficava no rastro da auditoria do próprio Horus (MF-116 do Horus).
- Os limites da IA e a visão do consumo por app: o registro anota o quanto de cada pedido, e a soma fica com a governança da IA (MF-106).
- Pausar, retirar e desinstalar um app (MF-104).
- Encerrar uma organização e acompanhar o estado e as versões da instância (MF-107).
- A tela da consulta (MF-110).
- Alertas automáticos de comportamento estranho: não entram na primeira versão, e nenhuma versão está marcada para eles. O registro anota, e quem confere são as pessoas. O painel de alertas e o alerta do limite de pedidos existem desde a onda 1.0, e esse é o único alerta automático (decisões 89 e 105).
- Enviar o registro para sistemas de fora, como a central de segurança da empresa: não entra na primeira versão, e nenhuma versão está marcada para isso. A saída do registro é a cópia assinada, na onda 1.1 (decisões 80 e 105).
- O que a pessoa faz com a resposta fora do mAIg.

## Depende de

- `MF-101:Segurança e permissões`. Quem consulta, o owner da organização e o auditor, e o "em nome de quem" de cada linha vêm dos papéis e do cadastro das pessoas.
- `MF-107:Organizações e instâncias`. O registro é de cada organização, e é a separação entre as organizações que impede uma de ver o registro da outra.

## Ponto de partida no Horus

No Horus, o registro tem o nome de rastro da auditoria e é uma mf do próprio Horus (MF-116 do Horus).

- No Horus, isso já foi decidido assim, e vale no mAIg, onde o registro é parte do núcleo: o Horus precisa de um rastro de quem viu e de quem entregou o quê a quem, porque os compradores corporativos pedem isso (decisão 3, D-082 do Horus).
- No Horus, o rastro anota quem fez o quê, para quem e quando, e não o conteúdo das perguntas e das respostas (D-090 do Horus). O mAIg decidiu diferente em parte: a linha anota também a consulta feita ao banco e quantas linhas voltaram, e, nos pedidos à IA, a camada e uma descrição do que foi enviado, mas nunca os dados nem a resposta (decisões 20 e 58).
- No Horus, nem o owner da organização edita ou apaga uma anotação do rastro, e exportar o rastro para sistemas de fora e os alertas automáticos ficaram fora da mf (D-093 do Horus). Que ninguém apaga uma linha vale no mAIg (decisão 31). Nos alertas, o mAIg decidiu diferente em parte: o painel de alertas do console avisa quando uma pessoa ou um app chega perto do limite de pedidos (decisão 89). Exportar o rastro para sistemas de fora também ficou fora do mAIg: a primeira versão não envia o registro para sistemas de fora nem tem alerta automático de comportamento estranho (decisão 105).
- No Horus, isso já foi decidido assim, e vale no mAIg: quem administra a instância não consulta o rastro das organizações (decisão 12, D-091 do Horus). No Horus, só o owner da organização o consultava; o mAIg já decidiu diferente e acrescentou os auditores, até dois (decisões 12 e 79).
- No Horus, o owner da organização definia por quantos dias o rastro fica guardado (D-092 do Horus). O mAIg já decidiu diferente: não há prazo, e o registro fica enquanto o app estiver instalado (decisão 15).
- No Horus, quem é excluído da organização leva consigo os registros dele, inclusive o rastro, e ficou em aberto se apagar tudo respeita a guarda que a lei exige (D-210 do Horus). O mAIg já decidiu diferente: as linhas do registro continuam, com o nome da pessoa, até a desinstalação do app (decisão 27).
- No Horus, o painel de quem administra a instância só enxerga contagens das pessoas das organizações (D-261 do Horus). Vale no mAIg: o painel da instância mostra, de cada organização, só contagens, sem nomes, a não ser os dos owners da organização (decisão 119).
- No Horus, quem opera a instalação da Maind segue podendo, tecnicamente, alcançar as senhas guardadas nela (D-273 do Horus). O mAIg decidiu diferente: o cofre e o registro ficam cifrados com a chave da organização, que quem opera a máquina não alcança, e o risco aceito é o que estiver em uso com a máquina ligada (decisão 57).

## O que ainda falta decidir

- **Falta o dono da Maind decidir como se analisa cada pedido de uma pessoa excluída para apagar os dados dela: quem analisa, em que prazo responde e o que se faz se a análise mandar apagar.** *O que está em jogo:* as linhas de uma pessoa excluída seguem com o nome até a desinstalação do app, e nenhuma se altera (decisão 27). Mas a lei de proteção de dados pessoais pode dar à pessoa o direito de pedir que os dados dela sejam apagados, e sem regra pronta cada pedido vira uma análise manual. Só o owner da organização e o auditor abrem o registro (decisão 12), e nenhum dos dois altera uma linha; por isso falta dizer quem analisa o pedido e como ele se cumpre.
- **Falta o arquiteto do mAIg definir como o registro é guardado: sem que ninguém o altere, nem quem opera a máquina, cifrado com a chave da organização (decisão 57) e consultável mesmo com o volume que só cresce.** *O que está em jogo:* o registro precisa resistir a quem tem acesso à máquina, em especial na hospedagem da Maind, e continuar rápido de consultar depois de anos sem prazo de guarda (decisão 15).
- **Falta o arquiteto do mAIg definir onde fica a chave de cada organização dentro do mAIg, como o código de recuperação a restaura e quanto custa cifrar o registro e o cofre.** *O que está em jogo:* a chave precisa ficar fora do alcance de quem opera a máquina, inclusive a equipe da Maind na hospedagem dela (decisão 57), e a cópia de recuperação fica com a organização, nunca com a Maind (decisão 87); uma recuperação mal desenhada vira uma porta dos fundos.
- **Falta o arquiteto do mAIg definir como o nome de uma pessoa excluída continua ligado às linhas do registro, sem que ela volte a ter acesso.** *O que está em jogo:* a decisão 27 mantém as linhas com o nome da pessoa até a desinstalação do app, mas o cadastro de quem sai deixa de valer para o login e para as permissões. É preciso dizer onde o nome fica guardado depois da exclusão e quem o enxerga, que deve ser só quem já abre o registro, o owner da organização e o auditor.
- **Falta o arquiteto do mAIg definir como o administrador da instância escreve no registro de uma organização sem poder lê-lo nem alterar uma linha.** *O que está em jogo:* a decisão 29 manda anotar no registro da organização os atos do administrador da instância que a tocam, e na hospedagem da Maind esse administrador é a equipe da Maind. O caminho de escrita não pode virar um jeito de ler o registro, de apagar uma linha ou de escrever uma linha falsa em nome de outra pessoa, e o registro precisa seguir valendo como prova (decisão 12).
- **Também depende, e está explicado em outras mfs:** quem desinstala um app e como (MF-104).

## Decisões do PO para discutir

- **Decisão:** os atos do owner da organização e do auditor no mAIg também entram no registro: mudanças de configuração, nomeação do auditor, entradas e consultas. *Por que:* a decisão 12 dá ao auditor a tarefa de conferir quem configura, o que só funciona se os atos de quem configura estiverem anotados. *Alternativa:* o registro só com os pedidos dos apps. *Reabrir se:* o volume pesar ou o dono da Maind quiser um registro mais estreito.
- **Decisão:** os atos do administrador da instância que tocam uma organização, como criá-la e instalar ou atualizar um app que ela contratou, também são anotados no registro dela, e ele só os escreve, sem poder lê-lo; a desinstalação ficou sem lugar. *Por que:* o auditor precisa saber quando um app mudou de versão e quem o mudou, e a decisão 12 tira o registro de quem administra a instância. *Alternativa:* um registro próprio da instância, ou nenhuma anotação. *Reabrir se:* o dono da Maind quiser anotar também os atos que não tocam nenhuma organização, como instalar um kit, num registro próprio da instância; o dono da Maind decidiu em 09/11/2026 que os atos que tocam uma organização entram no registro dela (decisão 29). Foi decidido depois: a desinstalação e os outros atos que não tocam organização nenhuma ficam no registro da instância (decisões 81 e 102).
- **Decisão:** sem anotar, o mAIg não atende. *Por que:* um pedido que escapa do registro quebra a prova que justifica o mAIg. *Alternativa:* atender e anotar depois, assim que o registro voltar. *Reabrir se:* o arquiteto do mAIg mostrar que isso derruba os apps com frequência.
- **Decisão:** ninguém apaga nem altera uma linha antes da desinstalação, nem o owner da organização. *Por que:* é a leitura da decisão 15, que só exclui o registro com a desinstalação, e é o mesmo princípio do Horus (D-093 do Horus). *Alternativa:* o owner da organização apagar linhas avulsas. *Reabrir se:* a lei de proteção de dados exigir apagar as linhas de uma pessoa; o dono da Maind já confirmou, em 09/11/2026, que as linhas de uma pessoa excluída ficam com o nome até a desinstalação (decisão 27).
- **Decisão:** o registro cobre o que passa pelo núcleo; o que acontece só dentro de um app fica com o app enquanto o ponto em aberto não se decide. *Por que:* é o que as decisões garantem, e o Horus já tem o rastro dele. *Alternativa:* o mAIg oferecer o registro para os apps anotarem o que é deles. *Reabrir se:* o auditor precisar ver tudo num lugar só. Esta regra foi substituída depois: o app pode pedir ao núcleo que anote o que acontece só dentro dele, com a linha marcada como "informada pelo app" (decisão 59).
- **Decisão:** o pedido sem pessoa, como uma tarefa marcada, fica anotado como do próprio app. *Por que:* não há quem ligar ao pedido. *Alternativa:* anotar em nome de quem criou a tarefa. *Reabrir se:* um app tiver tarefas criadas por pessoas e o auditor precisar saber quem as criou. Esta regra foi substituída depois: a tarefa marcada roda em nome de quem a criou (decisão 42).
- **Decisão:** a consulta fica no console do mAIg, com busca por app, pessoa, banco ou modelo, resultado e período, e a equipe da Maind não abre o registro nem para dar suporte. *Por que:* o console é a tela única (MF-110), e a decisão 12 tira o registro de quem administra a instância. *Alternativa:* uma tela à parte para o auditor; um acesso de suporte autorizado pelo owner da organização. *Reabrir se:* o suporte não conseguir ajudar sem ver o registro. Foi decidido depois: o owner da organização liga um acesso de suporte por tempo limitado, que mostra só a configuração e nunca o registro (decisão 68).
- **Decisão:** alertas automáticos de comportamento estranho ficam fora. *Por que:* o Horus também os deixou de fora, e as decisões não os pedem (D-093 do Horus). *Alternativa:* avisar o owner da organização de recusas repetidas. *Reabrir se:* a área de segurança de um cliente pedir. Foi decidido depois: o painel de alertas e o alerta do limite de pedidos existem desde a onda 1.0 (decisão 89), e o que não entra na primeira versão é só o alerta automático de comportamento estranho (decisão 105).
- **Decisão:** a prova de valor mostra o auditor respondendo sem chamar a Maind, uma ideia levantada como sinal e não adotada (decisão 18). *Por que:* aqui ela é só uma demonstração que alguém de fora confere, sem número. *Alternativa:* uma demonstração centrada na desinstalação. *Reabrir se:* o dono da Maind preferir não usar ideias de sinal não adotadas.
- **Decisão:** o PO usou entradas do Horus fora da lista do briefing e marcou as que o mAIg contraria como "o mAIg já decidiu diferente" (D-090, D-091, D-092, D-093, D-273 do Horus). *Por que:* são as que dizem o que o rastro guarda, quem consulta e quanto tempo. *Alternativa:* ficar só com a lista do briefing, que deixa o conteúdo sem ponto de partida. *Reabrir se:* o dono da Maind preferir que o Horus apareça só onde coincide com o mAIg.
- **Decisão:** o PO não usou uma entrada do Horus que estava na lista do briefing (D-214 do Horus). *Por que:* ela trata da contagem de assentos na cobrança do Horus, uma regra comercial, e não do que o painel da instância vê do registro. *Alternativa:* citá-la como "o painel só vê contagens". *Reabrir se:* houver outra leitura dela.
- **Decidido pelo dono da Maind em 10/11/2026:** uma tarefa marcada roda com um passe de agendamento, em nome de quem a criou, guardado só no mAIg e conferido a cada rodada; ela nunca roda em nome do app (decisão 42). A decisão do PO sobre o pedido sem pessoa ficou superada, e o tópico da tarefa marcada foi reescrito.
- **Decidido pelo dono da Maind em 11/11/2026:** a visão ganhou a seção "De quem o mAIg protege, e de quem não", honesta também sobre a própria Maind (decisão 49). Esta mf passou a dizer que a linha do registro também depende do passe, e qual é o risco aceito de uma nuvem invadida.
- **Decidido pelo dono da Maind em 11/11/2026:** os atos sensíveis do owner da organização, numa lista fixa, avisam na hora os outros owners da organização e o auditor, sem pedir aprovação (decisão 54). Esta mf ganhou o parágrafo dos atos sensíveis.
- **Decidido pelo dono da Maind em 11/11/2026:** o registro e o cofre de cada organização ficam cifrados com uma chave da organização, que quem opera a máquina não alcança, e o sigilo do registro deixa de ser só de tela (decisão 57). Esta mf ganhou o parágrafo do sigilo fora da tela e um ponto do arquiteto do mAIg: onde fica a chave, como se recupera e quanto custa.
- **Decidido pelo dono da Maind em 11/11/2026:** o registro guarda, de cada leitura de banco, a consulta feita e quantas linhas voltaram, e, de cada pedido à IA, a camada e a descrição, nunca os dados nem o texto inteiro do pedido e a resposta (decisão 58). O tópico do conteúdo foi reescrito, e o ponto em aberto saiu desta mf.
- **Decidido pelo dono da Maind em 11/11/2026:** os apps podem anotar no registro do mAIg o que acontece só dentro deles, com a linha marcada como "informada pelo app" (decisão 59). O ponto em aberto saiu desta mf.
- **Decidido pelo dono da Maind em 11/11/2026:** o owner da organização e os auditores podem baixar a cópia do registro, num arquivo assinado pelo mAIg; cada download fica no registro e avisa os outros papéis (decisão 80). O ponto em aberto saiu desta mf.
- **Decidido pelo dono da Maind em 11/11/2026:** a instância tem um registro próprio, onde só se acrescenta e que o administrador da instância lê, para os atos que não tocam organização nenhuma, como desinstalar um app (decisão 81). O ponto em aberto saiu desta mf.
- **Decidido pelo dono da Maind em 11/11/2026:** instalar o kit de uma organização entra no registro dela, e não no registro da instância (decisão 82). Fecha a inconsistência 14.
- **Decidido pelo dono da Maind em 11/11/2026:** a gestão dos owners da organização passa ao administrador da instância, e cada troca entra no registro da organização e avisa os owners da organização e os auditores (decisão 83).
- **Decidido pelo dono da Maind em 11/11/2026:** os atos sensíveis chegam sempre aos auditores, e "mudar quem recebe aviso" e "mudar os jeitos de entrar" entraram na lista (decisão 85).
- **Decidido pelo dono da Maind em 11/11/2026:** a cópia de recuperação da chave que cifra o registro e o cofre fica com a própria organização, num código que o owner da organização guarda, e nunca com a Maind; a chave é destruída com o registro do último app da organização (decisão 87). O ponto do arquiteto do mAIg ficou só com o onde e o como.
- **Decidido por delegação do dono da Maind em 11/11/2026:** a primeira versão sai em duas ondas, a 1.0 e a 1.1, e a segunda versão vem depois; cada capacidade desta mf tem a onda marcada no tópico "O que entra em cada onda". A regra que resume o recorte: a onda 1.0 liga e para; a onda 1.1 desfaz e encerra (decisão 95).
- **Decidido por delegação do dono da Maind em 11/11/2026:** se o mAIg não consegue anotar a linha no registro, ele recusa o pedido; o pedido recusado também fica anotado; e os atos do owner da organização e do auditor no console entram no registro, com as mudanças de configuração, a nomeação do auditor, as entradas e as consultas ao próprio registro. As três regras deixam de ser proposta do PO e entram na onda 1.0 (decisão 96).
- **Decidido por delegação do dono da Maind em 11/11/2026:** na onda 1.0, cada organização tem um auditor só, de dentro da empresa e sem data de vencimento; o segundo auditor e o auditor de fora, com o acesso que vence numa data, chegam na onda 1.1 (decisão 97).
- **Decidido por delegação do dono da Maind em 11/11/2026:** cada pessoa pede o próprio link de troca de senha na tela de entrada, de uso único, direto ao e-mail do cadastro; depois de várias tentativas erradas, a conta fica bloqueada por um tempo, e a própria pessoa é avisada por e-mail. Vale para todos os papéis, o pedido fica anotado no registro, e ninguém vê nem define a senha de outra pessoa. Entra na onda 1.0 (decisão 99).
- **Decidido por delegação do dono da Maind em 11/11/2026:** os administradores da instância cuidam uns dos outros: um cadastra e retira outro, até três, e o último não pode ser retirado; cada ato fica no registro da instância e avisa os demais. Sem nenhum administrador da instância com acesso, vale o procedimento da instalação, feito na máquina do mAIg, com o uso anotado no registro da instância. A conta do administrador da instância entra sempre por usuário e senha e recebe os avisos da instância no e-mail dele. Entra na onda 1.0 (decisão 100).
- **Decidido por delegação do dono da Maind em 11/11/2026:** o registro da instância nasce com a instância, na onda 1.0, e fica guardado enquanto a instância existir. Ele anota os atos que não tocam organização nenhuma: cadastrar e retirar um administrador da instância, o pedido de troca de senha de um administrador da instância, o uso do procedimento da instalação, configurar e testar o servidor de e-mail, instalar ou trocar o certificado do endereço do mAIg, fazer e restaurar a cópia de segurança e, na onda 1.1, desinstalar um app (decisão 102).
- **Decidido por delegação do dono da Maind em 11/11/2026:** no registro, desde a onda 1.0, e na consulta devolvida à tela, na onda 1.1, o valor de um filtro aparece mascarado quando o filtro toca uma coluna sensível; os outros valores, como o período e a cidade, aparecem (decisão 103).
- **Decidido por delegação do dono da Maind em 11/11/2026:** a linha do registro "informada pelo app" só tem campos fixos: o tipo do ato, de uma lista que o app declara ao ser instalado; o alvo, por um código; a hora; e a pessoa, que o núcleo tira do passe. O núcleo recusa o que foge disso. Chega na onda 1.1 (decisão 104).
- **Decidido por delegação do dono da Maind em 11/11/2026:** a primeira versão não envia o registro para sistemas de fora e não tem alerta automático de comportamento estranho; a saída do registro é a cópia assinada, na onda 1.1, e o único alerta automático é o do limite de pedidos. As duas capacidades não entram (decisão 105).
- **Decidido por delegação do dono da Maind em 11/11/2026:** retirar um app, apagar a configuração guardada de um app parado e desinstalar chegam juntos na onda 1.1, com a cópia assinada do registro. Na onda 1.0, um app só para, pela pausa, pela suspensão, pelo fim da licença ou pela ação manual da Maind, e nenhum registro é excluído; o owner da organização continua podendo apagar, um a um, o cadastro de um banco e a chave de uma IA (decisão 106).
- **Decidido por delegação do dono da Maind em 11/11/2026:** toda desinstalação começa com um aviso de segurança, com prazo, aos owners da organização e aos auditores de toda organização que tem registro naquele app, inclusive as que já o retiraram e as encerradas que o tinham, e só se conclui no fim do prazo, se nenhuma organização ativa tiver o app. Todas podem baixar a cópia assinada dentro do prazo. A organização encerrada não segura a desinstalação; o que segura é o pedido de volta à espera de execução. Chega na onda 1.1 (decisão 107).
- **Decidido por delegação do dono da Maind em 11/11/2026:** a cópia de segurança leva o cofre, o registro de cada organização, o registro da instância e a configuração inteira, com as organizações, os apps, as pessoas, as permissões e as regras da IA; só o cache dos painéis fica de fora. A restauração devolve a instância como estava na data da cópia, e cada organização só volta com o código de recuperação dela. O que mudou depois da data da cópia se perde, inclusive linhas do registro, e cada restauração fica anotada no registro de cada organização e no registro da instância. Entra na onda 1.0 (decisão 116).
- **Decidido por delegação do dono da Maind em 11/11/2026:** o painel da instância mostra o estado, as versões e as pendências da instalação e, de cada organização, só contagens, sem nomes; os únicos nomes que o administrador da instância vê são os dos owners da organização, porque é ele quem os gere. O painel mostra também a data da última cópia de segurança, o estado da restauração, a data do vencimento do certificado do endereço, a lista do que a instância manda à Maind e a falha de envio de e-mail. Entra na onda 1.0 (decisão 119).
- **Decidido por delegação do dono da Maind em 11/11/2026:** na onda 1.0, cada aviso tem destinatário fixo, aparece sempre no console e vai por e-mail, sem dado nenhum. Os avisos de segurança vão aos owners da organização e ao auditor; a queda de um banco e de uma IA, o limite de gasto, a tarefa marcada que parou e o fim do contrato vão aos owners da organização; o certificado da organização perto de vencer vai aos owners da organização e aos administradores da instância; e os avisos da instância vão a todos os administradores da instância. A lista "o que a organização permite" e as preferências de aviso chegam na onda 1.1 (decisão 126).
- **Decidido pelo dono da Maind em 12/11/2026:** a organização nasce na Maind, no Gerenciador do mAIg, e chega à instância pela chave temporária que o administrador da instância digita; é esse gesto, e não mais "criar a organização", que entra no registro dela (decisão 128). Os apps contratados entram no setup, e a chegada de cada um segue anotada no registro da organização, no lugar do antigo "instalar o kit" (decisão 134). Só a lista dos atos do administrador da instância mudou.
