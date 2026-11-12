# MF-101:Entrar e agir só dentro do que foi permitido

> O mAIg confere quem está chegando, pessoa ou app, e o que cada um pode fazer. Cada papel vê e faz só o que é dele, e nenhum pedido de um app é atendido sem a permissão de quem responde pela organização.

**Também chamada de:** Segurança e permissões · **Versão do mAIg:** 1ª · **Classe:** essencial · **Situação:** rascunho do PO

## Em uma frase

O mAIg confere quem é cada pessoa e cada app que chega até ele e só deixa cada um fazer o que foi permitido, do mesmo jeito para todos os apps.

O mAIg, ou Maind AI Gateway, fica entre os produtos da Maind, chamados apps, e os dados e a inteligência artificial (IA) da empresa cliente. O primeiro app é o Maind Horus, em que as pessoas perguntam sobre os dados da empresa.

O mAIg guarda o que a empresa tem de mais sensível: as senhas dos bancos de dados, as chaves de acesso à IA e o registro do que os apps pediram. Sem uma portaria firme, o resto perde o sentido. Por isso a segurança e as permissões fazem parte do núcleo nativo, os serviços que vêm prontos no mAIg e servem a todos os apps (decisão 3).

## Quem ganha

- **TI do cliente**, a equipe de tecnologia da empresa cliente. Aprova uma portaria só, a do mAIg, em vez de uma por app, e sabe que cada pedido é conferido antes de ser atendido.
- **Owner da organização**, a pessoa que responde pela organização no mAIg. Decide quem entra, quem usa cada app, o que cada app pode pedir e quem confere tudo. Entra com uma senha que só ele conhece.
- **Pessoa que usa o app**, quem trabalha com o app no dia a dia; no Horus, a pessoa que pergunta. Entra com usuário e senha ou com a conta Google e nunca lida com senha de banco nem com chave de IA.

## A decisão que passa a ser possível

- **A TI do cliente passa a poder dizer sim ao mAIg** sabendo que cada pessoa e cada app são conferidos na entrada, e cada pedido de novo antes de ser atendido.
- **O owner da organização passa a poder liberar um app novo** dizendo ele mesmo o que o app pode pedir, sem entregar senha nenhuma ao app nem à Maind.
- **A dor que some:** cada app novo deixa de trazer um jeito próprio de dar permissão aos dados e à IA, que a TI do cliente teria de aprovar e vigiar app por app.

## Como funciona

### Autenticação e autorização: as duas perguntas da portaria

**Em resumo:** antes de atender alguém, o mAIg faz duas perguntas. A autenticação pergunta "quem está chegando?". A autorização pergunta "o que essa pessoa ou esse app pode fazer?".

**Quem é quem.**

- **Autenticação** é conferir que alguém é quem diz ser. Para uma pessoa, é o login, a entrada no sistema. Para um app, é o certificado, uma espécie de carteira de identidade digital que a Maind emite para cada app contratado (MF-103).
- **Autorização** vem depois: sabendo quem é, o mAIg confere o que pode ser feito.
- **Uma permissão** é cada item do que se pode fazer, como "o Horus pode ler o banco de vendas".
- **Um papel** é um conjunto pronto de permissões, dado a uma pessoa. O mAIg tem quatro.
- **As configurações de segurança** são as regras gerais da organização, como os jeitos de entrar ligados. Ficam no núcleo, e não em cada app (decisão 3).

**Por que é assim.** Feitas no núcleo, a autenticação e a autorização se configuram uma vez e valem para todos os apps, o que permite aprovar a segurança uma vez só (decisão 3). E nenhum app toca uma senha de banco ou uma chave de IA: pede ao mAIg, que confere a permissão antes de atender (decisão 5).

**A conferência acontece a cada pedido.** Entrar não dá passe livre. Cada pedido de um dado ou da IA é conferido de novo, e uma permissão tirada pelo owner da organização já vale no pedido seguinte.

> **Analogia:** na portaria de um prédio, mostrar o documento ao porteiro é a autenticação, e a lista de andares que o crachá abre é a autorização. **Onde a analogia para:** no prédio, ninguém confere o que a pessoa faz depois de passar; no mAIg, cada pedido é conferido de novo, e os apps também passam pela portaria, com o certificado no lugar do documento.

**Exemplo.** Ana, gerente comercial da Farma Vida, uma rede de 40 farmácias, quer as vendas de outubro por farmácia. As pessoas estão cadastradas no núcleo do mAIg (decisão 23).

1. Ana entra com o usuário e a senha dela. O mAIg confere que ela é quem diz ser.
2. O mAIg confere que Ana pode usar o Horus, porque Paulo, o owner da organização, lhe deu esse acesso.
3. Ana pergunta nas telas do Horus, a parte de fora do app, na nuvem da Maind. A pergunta chega pela conexão que o próprio mAIg abriu com a Maind, e o mAIg reconhece o Horus pelo certificado.
4. O módulo do Horus, a parte do app que roda dentro do mAIg, pede os dados de vendas. O mAIg confere que o Horus pode ler esse banco na Farma Vida.
5. Só então o mAIg lê o banco, sem alterar nada, e anota o pedido no registro, o log de tudo o que acontece (MF-102).

**Quando dá errado.**

- **A senha está errada.** O mAIg não deixa entrar, e nada do que está dentro fica à vista.
- **Um app pede o que não pode.** O mAIg recusa e anota a recusa no registro, onde o owner da organização e o auditor a veem depois (decisão 5). O app não tem como dar a volta: não tem a senha do banco nem a chave da IA.

**Senha esquecida e tentativas erradas.** Cada pessoa pede o próprio link de troca de senha na tela de entrada: o link é de uso único e vai direto ao e-mail do cadastro, e ninguém vê nem define a senha de outra pessoa. Depois de várias tentativas erradas, a conta fica bloqueada por um tempo, e a própria pessoa é avisada por e-mail. Vale para todos os papéis, na onda 1.0 da primeira versão, e o pedido fica anotado no registro (decisão 99). Quem perdeu também o e-mail procura quem cuida do cadastro dele: o owner da organização, para as pessoas; o administrador da instância, para o owner da organização; outro administrador da instância, para o administrador da instância. Abre-se mão de: quem controla a caixa de e-mail de uma pessoa consegue trocar a senha dela, e quem está dentro da rede consegue bloquear por um tempo a conta de outra pessoa.

**O que ainda está em aberto.** A confirmação em dois passos chega na segunda versão, configurável (decisão 50). Quantas tentativas erradas bloqueiam a conta, e por quanto tempo, está no fim desta página.

### Os jeitos de entrar na primeira versão

**Em resumo:** na primeira versão do mAIg, entra-se com usuário e senha ou com a conta Google, os dois jeitos já na onda 1.0. Cada organização nasce só com usuário e senha ligados, e o owner da organização liga a conta Google se quiser (decisão 98). O login da empresa chega na segunda versão.

**Quem é quem.**

- **Usuário e senha.** A pessoa tem um nome de acesso e uma senha que só ela conhece, conferida a cada entrada.
- **Conta Google.** Quem confere a senha é o Google, que confirma ao mAIg que a pessoa é quem diz ser. O mAIg aceita a confirmação, mas continua decidindo o que a pessoa pode fazer. Com o Google fora do ar, quem entra por ele não começa sessão nova, e quem já entrou segue, porque o passe se renova com o mAIg (decisões 37 e 98).
- **Login da empresa.** É a entrada com o sistema de identidade da própria empresa, onde ela já cadastra os funcionários. Chega na segunda versão, junto com a versão 2.1 do Horus (decisão 16). O detalhe está em Login da empresa (MF-112).
- **Confirmação em dois passos.** É pedir uma segunda prova além da senha, como um código no celular. Também chega na segunda versão, como configuração da entrada: quem configura escolhe se a liga e para quem. Na primeira versão, o owner da organização, o auditor e o administrador da instância entram só com usuário e senha (decisão 50).

**Os jeitos de entrar são escolha da organização.** No Horus, isso já foi decidido assim, e vale no mAIg: a forma de entrar é configuração da organização, e o owner da organização liga ou desliga cada uma, num ato sensível (decisões 40 e 85). O owner da organização e o administrador da instância entram sempre por usuário e senha, mesmo com o login da empresa ligado (decisão 24). Assim, o acesso de quem configura tudo não depende de uma conta mantida fora do mAIg e nunca fica trancado do lado de fora se o login da empresa falhar. Essa senha abre só o console: para usar os apps, o owner da organização entra como qualquer pessoa, pelo jeito de entrar que a organização ligou (decisão 55).

**Por que é assim.** A primeira versão traz o que a versão 2.0 do Horus usa; o login da empresa chega quando o Horus passa a usá-lo. Abre-se mão de: o mAIg fica incompleto até a segunda versão, e a TI do cliente que exija o login da empresa espera até lá (decisão 16). Quanto ao owner da organização e ao administrador da instância, abre-se mão de a empresa impor a própria política de senha a quem tem a chave de tudo, e de a senha de quem deixa a empresa continuar valendo até alguém retirá-lo (decisão 24).

**Exemplo.** Paulo, owner da organização da Farma Vida, define como as pessoas entram.

1. Paulo entra no console do mAIg, a tela onde se configura tudo (MF-110), com usuário e senha.
2. Nas configurações de segurança, ele liga os dois jeitos de entrar da primeira versão.
3. Ana passa a entrar com a conta Google que já usa no trabalho. O Google confirma que ela é Ana; o mAIg confere que ela pode usar o Horus.
4. Paulo continua entrando com usuário e senha.

**Quando dá errado.** Alguém entra com uma conta Google que o owner da organização não cadastrou. O Google confirma quem a pessoa é, mas isso não basta: ela não está entre as pessoas da organização, e o mAIg não a deixa entrar. Ser quem diz ser não dá permissão nenhuma.

### Onde se entra: o endereço do mAIg e o passe

**Em resumo:** a pessoa entra pelo endereço do mAIg da organização, e não pela nuvem da Maind. O mAIg confere quem ela é e entrega à nuvem só um passe assinado por ele, que vale 15 minutos e se renova pelo mAIg. (decisões 32 e 37)

**Quem é quem.**

- **O endereço do mAIg** é onde o mAIg atende as pessoas, dentro da rede do cliente. É um endereço só, para a tela de entrada, a renovação do passe, o console, a página de status e a planilha, com o nome e o certificado que a TI do cliente escolhe e instala na primeira etapa do setup, a configuração inicial da instância; o nome precisa estar sob um domínio público da empresa, porque o Google e uma autoridade certificadora pública só aceitam nomes assim (decisões 120 e 140). A TI do cliente pode deixá-lo visível só de dentro da rede ou pela VPN, o túnel protegido que liga quem está fora à rede da empresa. Na hospedagem da Maind, ele fica nas máquinas da Maind, separadas da nuvem dos apps, e por enquanto aberto na internet, protegido pelo login (decisão 48).
- **O passe** é uma credencial curta que diz quem é a pessoa, de que organização e com que papel num app, assinada com a chave do certificado da organização (MF-107). Cada app recebe o seu passe, que não abre os outros apps (decisão 40).
- **O código de uso único** é o que o navegador leva às telas do app depois do login. Só serve uma vez, e a parte de fora do app o troca pelo passe pela ligação com o mAIg.

**Como funciona.** O login começa pelo app: a pessoa abre o app, e ele a manda ao endereço do mAIg (decisão 40). O mAIg confere a pessoa pelo jeito de entrar que a organização ligou, o usuário e a senha ou a conta Google, e manda o navegador às telas do app com o código de uso único. A parte de fora do app troca o código pelo passe pela ligação que o mAIg mantém com a Maind e confere a assinatura. Daí em diante, cada pedido leva o passe, e o núcleo o confere em todo pedido (decisões 32 e 33). O navegador renova o passe falando direto com o mAIg, a cada 15 minutos (decisão 37). Se a pessoa abre depois outro app, não digita a senha de novo: o mAIg já a conhece e emite outro passe, só para esse app, com o papel dela nele (decisões 23 e 40).

**Por que é assim.** A senha da pessoa e a resposta do Google ficam no mAIg e nunca chegam à nuvem da Maind. A nuvem não consegue fabricar um passe, porque não tem a chave da organização: a chave privada nasce dentro do mAIg e nunca sai dele, e a Maind recebe só a pública (decisão 86), e por isso quem invadisse a nuvem da Maind não se passaria por ninguém diante do mAIg. E, como o passe só se renova pelo mAIg, a regra da TI do cliente de ver o mAIg só de dentro da rede ou pela VPN vale durante todo o uso dos apps, e não só na entrada. (decisões 32 e 37)

**O que se abre mão.** A máquina da pessoa precisa alcançar o mAIg para entrar e para seguir usando os apps: quem sai da VPN no meio do trabalho precisa voltar a ela. E o certificado da organização passa a valer em todo login, de modo que um certificado vencido tranca a organização inteira. (decisões 32 e 37)

**As tarefas marcadas.** Uma tarefa que roda sozinha numa hora marcada, como um relatório das 7h, não tem o navegador da pessoa para renovar o passe. Por isso, quando a pessoa a cria no app, o mAIg emite um passe de agendamento, só daquela tarefa e em nome dela, e o guarda só nele, nunca na nuvem. Na hora marcada, a parte de fora do app só pede "rode a tarefa", e o mAIg confere, a cada rodada, se a pessoa ainda tem acesso e permissão; se ela perdeu o acesso, a tarefa para, e o owner da organização é avisado. A tarefa nunca roda em nome do app, o que pularia a conferência da pessoa. (decisão 42)

> **Analogia:** um crachá que só a portaria da empresa imprime e que o prédio vizinho, onde ficam as telas, aceita sem conseguir imprimir um igual. Ele vale 15 minutos, e a troca se faz na portaria da empresa. **Onde a analogia para:** a troca é feita pelo navegador, sozinha, e a pessoa não percebe enquanto estiver na rede da empresa.

**Exemplo.** Ana, gerente comercial da Farma Vida, trabalha de casa.

1. Ana liga a VPN da Farma Vida e abre o endereço do mAIg, que Marta, da TI do cliente, deixou visível só por dentro da rede.
2. Ana entra com a conta Google. O mAIg confere que ela pode usar o Horus e manda o navegador às telas do Horus com o código de uso único.
3. A parte de fora do Horus troca o código pelo passe pela ligação com o mAIg, e Ana começa a perguntar.
4. A cada 15 minutos, o navegador renova o passe com o mAIg, sem Ana perceber.
5. Ana desliga a VPN para uma reunião. Em até 15 minutos, a renovação falha, e o Horus pede que ela entre de novo.

**Quando dá errado.** O certificado da organização não consegue ser renovado. Ele vale 30 dias e se renova sozinho pela ligação; se a renovação falha, o atual segue valendo até o fim, e o owner da organização e a TI do cliente são avisados 7 dias antes de ele vencer. Só se ele chegar a vencer o mAIg deixa de assinar passes, e ninguém da organização entra nos apps até a renovação. (decisão 44, MF-103)

**O que ainda está em aberto.** Como fechar, depois da primeira versão, a rede da instância da Maind, e como o navegador renova o passe quando pede permissão para um site da internet falar com um endereço interno, estão no fim desta página.

### Os quatro papéis e o que cada um vê

**Em resumo:** o administrador da instância cuida da instalação; o owner da organização decide o que a organização usa; o auditor confere sem mudar nada; e a pessoa que usa o app trabalha com ele.

**Três palavras antes dos papéis.** A instância é cada instalação física do mAIg e atende uma ou mais organizações sem misturá-las. A organização é o espaço de um cliente dentro dela, com os seus apps e as suas regras. A empresa é a companhia que assina o contrato e pode ter várias organizações (decisão 9).

**Quem é quem.**

| Papel | Vê e faz | Não vê nem faz |
|---|---|---|
| Administrador da instância, até três por instância | traz a organização à instância, digitando a chave temporária do PDF na interface de setup ou, para uma organização a mais, no console (decisão 128), e executa o encerramento dela (decisão 78); cadastra, exclui e substitui os owners da organização, menos o primeiro, que vem da Maind (decisões 83 e 136); instala os apps na instância, uma vez só: os contratados no dia entram no setup, e o autorizado depois espera o clique dele (decisões 134 e 137); dá o aval às versões novas do mAIg (decisões 39 e 45); suspende um app numa emergência (decisão 46); faz e restaura a cópia de segurança (decisão 65); vê as instalações, o estado, as versões e as pendências da instância (decisão 72); lê o registro da instância (decisão 81); cadastra e retira os outros administradores da instância (decisão 100) | o registro das organizações; a configuração dos bancos, da IA e das pessoas delas |
| Owner da organização | libera e configura os apps; configura os bancos e a IA; dá acesso às pessoas; nomeia os auditores; consulta o registro | nada de outras organizações, nem das que dividem a instância |
| Auditor, até dois por organização; na onda 1.0, um só, de dentro da empresa | lê o registro da organização que o nomeou; o de fora da empresa, só até a data que o owner da organização definiu | não muda nenhuma configuração |
| Pessoa que usa o app | usa o que o app mostra a ela | senhas, chaves, configuração e registro |

A tabela segue as decisões 10 e 12. O papel de administrador da instância é da TI do cliente quando o mAIg roda na infraestrutura do cliente, isto é, nas máquinas e na rede dele, e da equipe da Maind quando roda na da Maind (D-271, D-280 do Horus).

**Por que é assim.** Quem cuida da instalação física controla o que roda nela, e cada organização escolhe o que usa (decisão 10). Quem configura não é quem confere: é a separação de funções, que separa quem movimenta o dinheiro de quem audita as contas. E, se o administrador da instância visse o registro, a equipe da Maind veria o de todos os clientes das instâncias da Maind (decisão 12).

**A fé pública do owner da organização.** O owner da organização tem uma espécie de fé pública dentro da organização, como um tabelião no cartório: é quem a empresa indicou para responder por ela no mAIg, e o que ele faz vale como ato da organização. Por isso a senha de um banco pode passar por ele (decisão 67). Quem cadastra, exclui e substitui os próprios owners da organização, porém, é o administrador da instância, com volta em 48 horas (decisão 83). O freio não é uma segunda aprovação, e sim o registro, o auditor e os avisos dos atos sensíveis (decisão 54). **Onde a analogia para:** o tabelião é nomeado pelo Estado; o owner da organização é indicado pela própria empresa.

**Uma pessoa, mais de um papel.** A mesma pessoa pode fazer mais de um papel: Paulo é owner da organização e também pergunta ao Horus. A exceção é o auditor: o owner da organização não pode nomear a si mesmo, porque auditaria o próprio trabalho.

**Os owners da organização.** Uma organização tem tantos owners da organização quantos assentos desse papel contratar (decisão 84). Quem os cadastra, exclui e substitui é o administrador da instância, e um owner da organização não cadastra nem retira outro; só o primeiro vem de fora, com o e-mail registrado pela Maind (decisão 136). A troca vale na hora, com volta: os owners da organização e os auditores são avisados e, por 48 horas, qualquer um deles pode barrá-la, e então ela se desfaz sozinha (decisão 83). Todos entram por usuário e senha, e, quando o login da empresa chegar, ele passa a ser mais um jeito de entrar, sem tirar a senha (decisão 24). Assim, a organização não depende de uma pessoa só, e quem rouba a senha de um owner da organização não consegue tirar os outros. Abre-se mão de: mais pessoas com a chave de tudo e mais senhas que podem ser roubadas; na hospedagem da Maind, a gestão dos owners da organização fica com a equipe da Maind, e o freio é a volta em 48 horas; e de seguir o Horus num ponto, porque ele liga os owners da organização a mais só ao login da empresa (D-258 do Horus).

> **Analogia:** num condomínio, a administradora cuida do prédio, cada morador decide o próprio apartamento e o conselho fiscal confere as contas sem mexer nelas. **Onde a analogia para:** o conselho fiscal é eleito pela assembleia, e a administradora entra em qualquer área comum; no mAIg, o auditor é nomeado pelo owner da organização que ele confere, e o administrador da instância não enxerga o registro de organização nenhuma.

**Exemplo.** A Farma Vida instalou o mAIg na própria rede.

1. Marta, da TI da Farma Vida, faz o papel de administrador da instância: executa o setup com a chave temporária que a Maind mandou, e a organização Farma Vida chega à instância; o mAIg cria o usuário de Paulo, cujo e-mail a Maind registrou (decisões 128 e 136).
2. Paulo, diretor de operações, é o owner da organização. Libera o Horus, escolhe o banco e a IA e dá acesso a Ana.
3. Paulo nomeia Renata, da área de segurança, auditora da organização.
4. Renata vê no registro o que o Horus pediu em nome de Ana. Marta vê que o Horus está instalado e funcionando, mas não vê o registro nem o banco escolhido por Paulo.

**Quando dá errado.**

- **O auditor tenta mudar uma configuração.** Não consegue: o papel só lê (decisão 12).
- **Um owner da organização sai da empresa ou esquece a senha.** Os outros owners da organização seguem configurando. Quem sai da empresa é excluído pelo administrador da instância no mesmo dia, com aviso aos owners da organização e aos auditores (decisão 83). Se a organização só tinha um, o administrador da instância o substitui: digita o e-mail do novo owner da organização, o link vai direto para ele (decisão 51), e a troca vale na hora, com volta em 48 horas se alguém a barrar (decisão 83).
- **O administrador da instância tenta se pôr no lugar do owner da organização.** Ele não vê o link, que vai direto ao e-mail do novo owner da organização (decisão 51). E os owners da organização e os auditores são avisados na hora e, por 48 horas, podem barrar a troca, que então se desfaz sozinha (decisão 83).
- **Alguém rouba a senha de um owner da organização.** O invasor configura o que o owner da organização configura, mas não consegue tirar os outros, porque só o administrador da instância os exclui (decisão 83). Os outros owners da organização pedem ao administrador da instância que exclua a conta roubada, e os atos sensíveis do invasor já chegaram como aviso (decisão 54).

**Até dois auditores.** Uma organização pode ter até dois auditores, e um deles pode ser de fora da empresa, como o de uma auditoria externa. O de fora recebe um acesso que vence numa data que o owner da organização define, como o fim da auditoria. Nomear ou trocar um auditor é ato sensível (decisões 54 e 79). Abre-se mão de: mais uma pessoa lê o registro, que tem nomes e o que cada um consultou.

**Em que onda chegam os auditores.** Na onda 1.0 da primeira versão, cada organização tem um auditor só, de dentro da empresa e sem data de vencimento. O segundo auditor e o auditor de fora chegam na onda 1.1 (decisão 97). Na casa do cliente, o auditor de fora chega ao console pela VPN que a TI do cliente concede, e o console avisa disso o owner da organização quando ele o cadastra (decisão 127). O owner da organização não nomeia a si mesmo auditor (decisão 96). Abre-se mão de: na onda 1.0, uma auditoria externa pede ao auditor da empresa o que precisar ver.

**Os administradores da instância cuidam uns dos outros.** O primeiro administrador da instância nasce na interface de setup, a tela de configuração inicial que já vem no pacote do mAIg: é a pessoa da TI do cliente que digitou ali a chave temporária enviada pela Maind (decisão 132). Um administrador da instância cadastra e retira outro, até três, e o último não pode ser retirado. Cada ato fica no registro da instância e avisa os demais. Se nenhum administrador da instância tiver acesso, vale o procedimento da instalação, feito na máquina do mAIg por quem a opera ou, quando o mAIg roda num Kubernetes, o sistema que orquestra contêineres num cluster, um conjunto de máquinas, por quem opera o cluster, com acesso ao espaço do mAIg nele, com o uso anotado no registro da instância (decisões 100 e 144). O administrador da instância entra sempre por usuário e senha e recebe os avisos da instância no e-mail dele. Entra na onda 1.0 (decisão 100). Abre-se mão de: um administrador da instância pode retirar outro sem pedir a ninguém; o freio é o registro e o aviso.

**A equipe da Maind e o console da casa do cliente.** Na onda 1.0, a equipe da Maind não entra no console da casa do cliente: quem mostra a tela à Maind é o owner da organização ou a TI do cliente. Na onda 1.1, o suporte da Maind chega pela VPN que a TI do cliente concede, quando o owner da organização liga o acesso de suporte (decisão 127).

### As permissões: quem usa cada app e o que cada app pode pedir

**Em resumo:** um pedido só é atendido quando passa por duas conferências: a pessoa pode usar aquele app, e o app pode pedir aquilo naquela organização. Quem dá as duas permissões é o owner da organização.

**Quem é quem.**

- **A permissão da pessoa** diz quais apps ela pode usar na organização.
- **A permissão do app** diz o que ele pode pedir ao núcleo na organização: de quais bancos lê e quais IAs usa. A parte de fora de cada app fica registrada no mAIg com as permissões dela (decisão 4).

O cadastro dos bancos está em Bancos da empresa (MF-105). As IAs e os limites, em Governança da IA (MF-106). A liberação do app, em Gestão dos apps (MF-104).

**Por que duas conferências.** Só com a permissão da pessoa, um app liberado leria qualquer banco da organização. Só com a do app, qualquer pessoa usaria qualquer app. E as duas valem por organização: o que Paulo libera ao Horus na Farma Vida não vale para outra organização da mesma instância (decisões 9 e 10).

**O que fica com o app.** O que cada pessoa vê dentro de um banco, como só as vendas da própria região, não é conferido pelo mAIg. O mAIg confere se o app pode ler o banco; o app decide o que mostra a cada pessoa. No Horus, essa segurança por pessoa é uma mf da versão 2.1 (MF-106 do Horus).

**Exemplo.** Paulo liberou ao Horus só o banco de vendas.

1. Ana pergunta ao Horus a margem de cada farmácia em outubro.
2. O mAIg confere que Ana pode usar o Horus. Ela pode.
3. O módulo do Horus pede os dados do banco financeiro.
4. O mAIg confere a permissão do app: na Farma Vida, o Horus só lê o banco de vendas. O pedido é recusado.
5. O mAIg anota a recusa no registro: o app, a pessoa, o banco e a hora (MF-102).
6. Paulo vê a recusa, conversa com a área financeira e decide se libera o banco financeiro ao Horus. O que a tela de Ana mostra enquanto isso é assunto do app.

**Quando dá errado.** O módulo de um app tenta chegar ao banco sem passar pelo núcleo. Não tem como: ele não tem a senha e só usa os serviços do núcleo (decisões 4 e 5). Como o mAIg garante esse isolamento está em Execução isolada dos apps (MF-109).

### O primeiro acesso do owner da organização

**Em resumo:** o e-mail do primeiro owner da organização vem da Maind, registrado na contratação, e, no fim do setup, o mAIg cria o usuário dele sozinho e manda direto ao e-mail dele um link de uso único para definir a própria senha. Nem o link nem a senha passam por mais ninguém (decisões 51 e 136).

**Quem é quem.**

- **O usuário** é a conta com que alguém entra no mAIg.
- **O link de primeiro acesso** abre a tela para definir a senha. Serve uma vez só e vale por pouco tempo.
- **O Gerenciador do mAIg** é o cockpit da Maind para controlar e cobrar os clientes, na nuvem da Maind. É nele que a equipe da Maind cria a organização e registra o e-mail do primeiro owner da organização (decisão 128).
- **O setup** é a configuração inicial da instância, que a TI do cliente faz na interface de setup, a tela que já vem no pacote do mAIg, digitando a chave temporária que a Maind mandou. O detalhe é de Organizações e instâncias (decisão 132, MF-107).
- **O e-mail do owner da organização** é para onde o mAIg manda o link. O do primeiro vem do Gerenciador; o dos outros owners da organização, o administrador da instância só o digita.

**Como acontece.** Para o primeiro owner da organização, ninguém digita nada na instância: o e-mail chega com a organização, e o mAIg cria o usuário e manda o link no fim do setup (decisão 136). Para os outros owners da organização, o administrador da instância digita o e-mail, e o mAIg manda o link direto para lá (decisão 83). Em nenhum caso quem cria ou cadastra vê o link. Se o link vence, o administrador da instância pede outro, que também vai direto ao e-mail, e cada envio fica anotado no registro da organização (decisão 51, MF-102). Vale nas duas hospedagens: na da Maind, quem cadastra os outros owners da organização é a equipe da Maind; na do cliente, a TI do cliente (D-271 do Horus). No Horus, quem criava o usuário recebia o link e o entregava por fora do sistema (D-290 do Horus); o mAIg decidiu diferente.

**Por que é assim.** A senha de quem configura tudo nasce com o próprio owner da organização, e nem a equipe da Maind nem a TI do cliente a conhecem. Como o link também não passa por elas, nenhuma das duas recebe o link nas mãos. E o e-mail do primeiro owner da organização vem de quem fechou a contratação, e não de quem opera a máquina: a TI do cliente não escolhe quem manda na organização. O link sai pelo servidor de e-mail da própria empresa, ou, na hospedagem da Maind, pelo serviço de e-mail da Maind, serve uma vez e o uso fica no registro; como quem opera o servidor de e-mail ainda poderia alcançá-lo, o sinal de um uso indevido é o owner da organização encontrar o link já usado (decisão 12, decisões 51 e 90). Abre-se mão de: o mAIg passa a enviar e-mail, e um e-mail digitado errado manda o link para outra pessoa.

> **Analogia:** é como a chave provisória que a imobiliária entrega ao novo morador, para abrir a porta uma vez e trocar o segredo da fechadura. **Onde a analogia para:** a chave provisória serve até alguém trocar a fechadura; o link para de funcionar sozinho, depois do primeiro uso ou de pouco tempo.

**Exemplo.**

1. Rafael, da equipe da Maind, cria a organização Farma Vida no Gerenciador do mAIg e registra o e-mail de Paulo como primeiro owner da organização.
2. Marta, da TI do cliente, executa o setup da instância com a chave temporária que a Maind mandou. No fim do setup, o mAIg cria o usuário de Paulo e manda o link de primeiro acesso direto para ele. Nem Marta nem Rafael veem o link.
3. Paulo abre o link e define a senha. Ninguém a vê em momento nenhum. Paulo também baixa o código de recuperação da organização, que guarda fora do mAIg (decisão 87).
4. O link deixa de funcionar. Daqui em diante, Paulo entra com usuário e senha.

**Quando dá errado.**

- **O link vence antes de ser aberto.** Marta pede no console um link novo para o mesmo usuário, e o mAIg o manda de novo ao e-mail de Paulo.
- **O e-mail de Paulo foi registrado errado no Gerenciador.** O link vai para outra pessoa. Paulo não recebe nada e avisa a Maind; Marta, como administrador da instância, o substitui pela regra de sempre, digitando o e-mail certo, com aviso e volta em 48 horas (decisão 83). O primeiro link deixa de valer, e o registro mostra os dois envios. É o mesmo risco de um e-mail digitado errado, agora do lado da Maind (decisão 136).
- **Outra pessoa abre o link antes de Paulo.** Paulo o encontra já usado e não consegue definir a senha. É o sinal de que o link vazou: Paulo avisa Marta, e o acesso é refeito antes que quem o abriu use a conta.

**O servidor de e-mail vem antes.** Na onda 1.0, o administrador da instância configura o servidor de e-mail da empresa e faz um envio de teste, dentro do setup, antes de a organização chegar à instância, porque é no fim do setup que sai o link do primeiro owner da organização. Sem isso, o console não deixa trazer uma organização, e o painel da instância mostra quando um envio falha (decisões 125 e 128).

**O que ainda está em aberto.** Como é o procedimento da instalação, que devolve o acesso quando nenhum administrador da instância consegue entrar, está no fim desta página; o primeiro administrador da instância nasce na interface de setup (decisão 132). A senha esquecida já tem regra: cada pessoa pede o próprio link de troca na tela de entrada (decisão 99).

### As pessoas que usam os apps: onde ficam e quem as cadastra

**Em resumo:** o owner da organização cadastra as pessoas no núcleo do mAIg e dá a elas o acesso aos apps. O cadastro e o login ficam no núcleo, para todos os apps (decisão 23).

**Quem é quem.**

- **O cadastro das pessoas** é a lista de quem pode entrar, com o nome, o e-mail e o jeito de entrar de cada uma.
- **Login único** é entrar uma vez e usar todos os apps da organização com a mesma conta.
- **Dado pessoal** é a informação que identifica uma pessoa, como o nome e o e-mail; a lei de proteção de dados pessoais regula como ele se guarda.

**O que a decisão faz e o que ficou de fora.**

- **No núcleo, para todos os apps (a decisão).** O mAIg guarda o cadastro e faz o login das pessoas. Há login único, o mAIg confere a permissão da pessoa e sabe, ele mesmo, em nome de quem cada pedido é feito. O dado pessoal fica num lugar só, sob a guarda do mAIg, e a saída de uma pessoa se resolve ali (decisão 23). Excluída uma pessoa, ela perde o acesso, mas as linhas do registro em nome dela seguem, com o nome, até a desinstalação do app (decisão 27, MF-102).
- **Em cada app (ficou de fora).** Cada app guardaria as próprias pessoas e faria o próprio login. A pessoa teria uma conta por app, a conferência da pessoa passaria ao app, e o registro anotaria o "em nome de quem" que o app informasse, sem como conferi-lo (MF-102). Também ficou de fora abrir uma exceção para um app específico, que quebraria o objetivo de servir a todo app do mesmo jeito.

**O ponto de partida do Horus vale no mAIg.** No Horus, isso já foi decidido assim, e o dono da Maind confirmou para o mAIg (decisão 23): as pessoas da organização ficam isoladas no middleware, a peça do Horus que deu origem ao mAIg, fora da nuvem do Horus, e o owner da organização as gere por lá, porque é mais seguro (D-261 do Horus).

**Por que é assim.** A escolha vale para todos os apps, e não só para o Horus. O cadastro no núcleo dá o login único e as mesmas permissões em todos os apps, deixa o mAIg conferir, ele mesmo, em nome de quem cada pedido é feito, e mantém o dado pessoal num lugar só, sob a guarda do cliente. (decisão 23)

**O que se abre mão.** O núcleo passa a guardar nome e e-mail de pessoas e a responder por eles perante a lei de proteção de dados. Se a ligação com a Maind cair, ninguém entra em app nenhum, porque a entrada mora no mAIg. E um app futuro não pode ter as próprias pessoas. (decisão 23)

**Exemplo.** Com as pessoas no núcleo, Paulo dá à equipe comercial o acesso ao Horus.

1. Paulo cadastra Ana e mais cinco pessoas da área comercial e marca que podem usar o Horus.
2. Ana entra uma vez e chega ao Horus.
3. Meses depois, chega um segundo app da Maind. Paulo só marca quem pode usá-lo, e Ana entra nele com a mesma conta.

**Quando dá errado.** Uma pessoa sai da empresa. O owner da organização tira o acesso dela, e ela deixa de entrar. Se ela entrava pelo Google com a conta da empresa e a empresa desligar essa conta, também deixa de entrar por ele; com uma conta Google pessoal, ela só deixa de entrar quando o owner da organização tira o acesso. As linhas dela no registro seguem, com o nome, até a desinstalação do app (decisão 27, MF-102).

**Uma pessoa em duas organizações tem duas contas.** Cada conta mora numa organização, e o mesmo e-mail pode aparecer nas duas. Cada owner da organização cuida da conta que está na dele, e sair de uma organização não mexe na outra. Na tela de entrada, a pessoa escolhe a organização, e o login único vale dentro de cada uma (decisões 40 e 66). Assim as organizações ficam separadas de ponta a ponta, sem um nível de empresa acima delas (decisões 9 e 11). Abre-se mão de: a pessoa tem duas senhas e escolhe a organização ao entrar.

**Exemplo.** Ana usa o Horus na Farma Vida e na Farma Vida Distribuição, duas organizações na mesma instância. Ela tem uma conta em cada, com o mesmo e-mail. Paulo cuida da conta dela na Farma Vida, e Júlia, owner da organização da Distribuição, da outra. Quando Ana deixa de trabalhar com a distribuidora, Júlia tira o acesso dela, e Ana continua usando o Horus na Farma Vida.

**Em que onda.** Na onda 1.0, o owner da organização cadastra as pessoas uma a uma. O cadastro de várias pessoas de uma vez, por uma lista que o owner da organização sobe no console, chega na onda 1.1 (decisão 101).

**O que ainda está em aberto.** Nada sobre onde ficam as pessoas.

### O que entra em cada onda

A primeira versão do mAIg sai em duas ondas, a 1.0 e a 1.1, e a segunda versão vem depois (decisões 92 e 95). A tabela diz em que onda chega cada capacidade desta mf, com as decisões que a sustentam. "Não entra" quer dizer que a capacidade não faz parte da primeira versão e não tem versão marcada.

| Capacidade | Onda | Decisões | Por quê |
| --- | --- | --- | --- |
| Entrar com usuário e senha | onda 1.0 | 16, 24 | É o jeito de entrar que vale para todos os papéis; sem ele ninguém entra. |
| Entrar com a conta Google, que nasce desligada em cada organização | onda 1.0 | 16, 90, 98 | Os dois jeitos de entrar estão no núcleo da primeira versão, e o Google só é ligado se o owner da organização quiser. |
| O owner da organização liga e desliga cada jeito de entrar, num ato sensível | onda 1.0 | 40, 85 | A forma de entrar é política da empresa, e a mudança avisa os owners da organização e o auditor. |
| A senha própria do owner da organização e do administrador da instância abre só o console | onda 1.0 | 24, 55 | A chave de tudo não circula pelos apps. |
| Login no endereço do mAIg, com passe de 15 minutos e código de uso único | onda 1.0 | 32, 37, 92 | É o que prova ao app quem é a pessoa sem a senha sair da rede da empresa. |
| Um endereço só na rede do cliente para a tela de entrada, o passe, o console, a página de status e a planilha | onda 1.0 | 32, 120, 140 | A TI do cliente libera e protege um nome só. |
| Login único: a pessoa entra uma vez e recebe um passe por app, com o papel dela em cada app | onda 1.0 | 23, 40 | As pessoas moram no núcleo, e a regra é a mesma para todos os apps. |
| Passe de agendamento, para uma tarefa marcada rodar em nome de uma pessoa | onda 1.0 | 42, 95 | Sem ele, a tarefa marcada rodaria sem pessoa identificada, e o registro perderia o "quem". |
| Os quatro papéis: administrador da instância, owner da organização, auditor e pessoa que usa o app | onda 1.0 | 10, 12, 23 | São a base das permissões. |
| As duas conferências a cada pedido: a pessoa pode usar o app, e o app pode pedir aquilo | onda 1.0 | 5, 60, 92 | É a promessa central: agir só dentro do que foi permitido. |
| O administrador da instância cadastra, exclui e substitui os owners da organização, com volta em 48 horas; o primeiro vem da Maind, criado pelo mAIg no fim do setup | onda 1.0 | 83, 92, 136 | Sem isso, uma organização que perde o owner da organização fica sem ninguém que a configure. |
| Até três administradores da instância, que cadastram e retiram uns aos outros; o primeiro nasce na interface de setup, e o último não pode ser retirado | onda 1.0 | 84, 100, 132 | A instância não pode depender de uma pessoa só, e na casa do cliente não há ninguém acima deles. |
| Procedimento da instalação, feito na máquina do mAIg, para quando nenhum administrador da instância tem mais acesso, com o uso anotado no registro da instância | onda 1.0 | 100 | Quem tem a máquina nas mãos é a TI do cliente; é o último recurso. |
| Um auditor por organização, de dentro da empresa, que só lê o registro; o owner da organização não nomeia a si mesmo | onda 1.0 | 12, 16, 85, 96, 97 | Os avisos de segurança da onda 1.0 chegam sempre ao auditor; sem auditor, esse freio não existe. |
| O segundo auditor e o auditor de fora da empresa, com acesso que vence numa data; o de fora chega pela VPN que a TI concede | onda 1.1 | 79, 92, 97, 127 | Melhora a governança, mas não impede o primeiro app de sair. |
| O owner da organização cadastra as pessoas no console, uma a uma, sem convite pelos apps | onda 1.0 | 23, 77 | Sem cadastro, ninguém entra no app. |
| Cadastro das pessoas em lote: o owner da organização sobe uma lista no console | onda 1.1 | 77, 101 | Não impede o primeiro app de sair, e responde à empresa grande ainda na primeira versão. |
| Link de primeiro acesso, enviado direto ao e-mail da pessoa, com cada envio no registro; o do primeiro owner da organização sai no fim do setup, para o e-mail registrado no Gerenciador do mAIg | onda 1.0 | 51, 90, 125, 136 | É como a senha nasce sem passar pelas mãos de ninguém. |
| Código de recuperação, baixado pelo owner da organização quando a organização nasce | onda 1.0 | 87 | Sem ele, a cópia de segurança não é restaurada. |
| Excluir uma pessoa: ela perde o acesso, e as linhas dela no registro seguem com o nome | onda 1.0 | 27 | Quem sai da empresa precisa perder o acesso na hora, sem apagar a prova. |
| A pessoa de duas organizações tem duas contas e escolhe a organização na tela de entrada | onda 1.0 | 66 | Mantém as organizações separadas desde a entrada. |
| Bloqueio temporário da entrada depois de várias tentativas erradas de senha, com aviso por e-mail à própria pessoa | onda 1.0 | 24, 50, 99 | Na primeira versão, a senha é a única barreira do owner da organização, do auditor e do administrador da instância. |
| Troca da senha esquecida: a própria pessoa pede o link na tela de entrada, e ele vai ao e-mail do cadastro, com o pedido anotado no registro | onda 1.0 | 51, 99 | A senha não passa por outra pessoa, e uma senha esquecida não vira um pedido à TI. |
| Confirmação em dois passos | segunda versão | 50, 92 | Já decidida para a segunda versão, configurável. |
| Regra de quem vê o quê dentro de um banco, pessoa a pessoa | não entra | 60, 73 | É lógica de cada app, e não do mAIg; o mAIg libera o banco inteiro ao app. |

## Prova de valor

Prova de valor proposta pelo PO; o dono da Maind ainda não a confirmou.

**Demonstração 1: cada papel no seu lugar.** Marta, da TI do cliente, e Renata, a auditora, acompanham.

1. Paulo liberou ao Horus só o banco de vendas. Ana faz uma pergunta que pede o banco financeiro, e o mAIg recusa antes de ler qualquer dado.
2. Renata encontra a recusa no registro, tenta liberar o banco financeiro e não consegue.
3. Marta entra como administrador da instância. Vê o Horus instalado, o estado e a versão, mas não encontra o registro nem a configuração do banco.

**Demonstração 2: a senha que ninguém conhece.** Marta cria o usuário de Paulo e só digita o e-mail dele. O link de primeiro acesso chega direto a Paulo, e Marta nunca o vê. Paulo define a senha, e o link deixa de funcionar. O registro da organização mostra o envio do link, e em nenhum momento o mAIg mostrou a Marta o link ou a senha de Paulo (decisão 51).

## Retorno para o negócio

- **Aprovar a segurança uma vez só.** Uma portaria igual para todos os apps é o que a TI do cliente avalia na primeira venda (decisão 3). Hipótese: a TI do cliente aprova mais depressa o segundo app quando ele entra pela portaria que ela já conhece.
- **Argumento de venda.** O auditor, que confere sem poder mudar nada, reforça o argumento de venda junto à área de segurança do cliente (decisão 12).
- **Custo de atender.** Hipótese: como o owner da organização dá e tira acessos sozinho, a equipe da Maind recebe menos pedidos de suporte para mudar quem entra e o que pode.

## O que não inclui

- O login com o sistema de identidade da empresa, que chega na segunda versão (MF-112).
- A confirmação em dois passos, que também chega na segunda versão (decisão 50).
- O registro e a consulta dele (MF-102).
- O certificado de cada app e o handshake contratual, a conversa em que o mAIg confere a contratação com a Maind (MF-103).
- Liberar, pausar e retirar um app (MF-104).
- O cadastro dos bancos e o cofre das senhas, o lugar trancado de onde nenhum app as tira (MF-105).
- As chaves de IA, os modelos permitidos e os limites (MF-106).
- Criar e encerrar organizações e a separação entre elas (MF-107).
- A tela onde tudo se configura (MF-110).
- O isolamento do módulo de cada app (MF-109).
- O que cada pessoa vê dentro de um banco e os papéis internos de cada app: são do app, e não do mAIg, que libera o banco inteiro ao app (decisões 60 e 73); no Horus, a segurança por pessoa é uma mf da versão 2.1 (MF-106 do Horus).

## Depende de

- `MF-107:Organizações e instâncias`. Os papéis existem dentro de uma instância ou de uma organização, e quase toda permissão vale por organização. Sem organização, não há a quem dar um papel nem onde valer uma permissão.

## Ponto de partida no Horus

O middleware é a peça do Horus que deu origem ao mAIg; a nuvem do Horus é a parte dele nos servidores da Maind.

- No Horus, as pessoas ficam isoladas no middleware, fora da nuvem do Horus, o owner da organização as gere por lá, e o painel de quem administra a instância só enxerga contagens delas (D-261 do Horus). Que as pessoas ficam no núcleo e que o owner da organização as gere vale no mAIg (decisão 23). Que o painel só enxerga contagens também vale no mAIg: o painel da instância mostra, de cada organização, só contagens, sem nomes, a não ser os dos owners da organização (decisão 119).
- No Horus, só o owner da organização usa a tela de configuração, onde aprovava o convite de uma pessoa nascido no Horus (D-262 do Horus). Que só o owner da organização configura a organização vale no mAIg (decisão 96). No convite, o mAIg decidiu diferente: não há convite de dentro dos apps, e o owner da organização cadastra as pessoas direto no console (decisão 77).
- No Horus, o owner da organização usa a mesma tela nas duas hospedagens, e na da Maind é a Maind quem cria o usuário dele (D-271 do Horus). Que, na hospedagem da Maind, é a equipe da Maind quem cadastra os owners da organização vale no mAIg para os owners da organização a mais; o primeiro, o mAIg cria sozinho no fim do setup, com o e-mail registrado no Gerenciador do mAIg (decisões 83 e 136). A mesma tela nas duas hospedagens também vale no mAIg: o console é o mesmo programa, com as mesmas telas (decisão 96).
- No Horus, isso já foi decidido assim, e vale no mAIg: criar a organização cria também o usuário do owner da organização (decisão 29, D-280 do Horus). Em 12/11/2026, o mAIg decidiu diferente em quem cria: a organização nasce na Maind, no Gerenciador do mAIg, e é o próprio mAIg que cria o usuário do primeiro owner da organização no fim do setup, com o e-mail que a Maind registrou (decisões 128 e 136).
- No Horus, o primeiro acesso é um link de uso único e validade curta, entregue por fora do sistema por quem criou o usuário, e a senha não passa por mais ninguém (D-290 do Horus). O mAIg já decidiu diferente na entrega: o link vai direto ao e-mail do owner da organização, e quem criou o usuário nunca o vê (decisão 51).
- No Horus, isso já foi decidido assim, e vale no mAIg: a forma de entrar é configuração da organização (decisões 40 e 85, D-291 do Horus). Que o owner da organização e o administrador da instância entrem sempre por usuário e senha o dono da Maind confirmou em 09/11/2026 (decisão 24).
- No Horus, o owner da organização cadastra até mais dois owners da organização, ligados ao login da empresa (D-258 do Horus). O dono da Maind confirmou o limite de três owners da organização em 09/11/2026, mas com os três entrando por usuário e senha (decisão 25). Depois, o limite passou a ser o número de assentos, e a gestão dos owners da organização passou ao administrador da instância (decisões 83 e 84).

## O que ainda falta decidir

- **Falta o arquiteto do mAIg definir quantas tentativas erradas bloqueiam a conta e por quanto tempo e, para a segunda versão, como funciona a confirmação em dois passos configurável (decisão 50).** *O que está em jogo:* o owner da organização e o administrador da instância entram sempre por usuário e senha (decisão 24) e têm a chave de tudo, e essa senha é a única porta garantida deles; uma senha roubada abre a organização inteira. O bloqueio temporário e o link de troca pedido pela própria pessoa já estão decididos, e faltam os números (decisão 99).
- **Falta o arquiteto do mAIg definir como é o procedimento da instalação, que devolve o acesso quando nenhum administrador da instância consegue entrar.** *O que está em jogo:* é o último recurso de quem tem a máquina nas mãos; se devolver o acesso com uma senha conhecida por mais gente, a regra de que a senha não passa por ninguém falha justamente aí. O procedimento é feito na máquina do mAIg por quem a opera ou, no Kubernetes, por quem opera o cluster, com acesso ao espaço do mAIg, e o uso fica no registro da instância (decisões 100 e 144). Como nasce o primeiro administrador da instância já está decidido: na interface de setup, é quem digita a chave temporária (decisão 132).
- **Falta o dono da Maind decidir, para a segunda versão do mAIg ou depois, como fechar a rede da instância da Maind, que na primeira versão fica com o endereço aberto na internet.** *O que está em jogo:* na casa do cliente, a TI dele deixa o endereço visível só por dentro da rede ou pela VPN (decisão 32); na hospedagem da Maind, a tela de entrada e o console ficam ao alcance de qualquer pessoa na internet, protegidos só pelo login (decisão 48). Para fechar, é preciso um caminho até lá para quem não tem TI nem VPN, como a Ótica Visão Clara.
- **Falta o arquiteto do mAIg definir como o navegador renova o passe direto com o mAIg quando ele pede permissão para um site da internet falar com um endereço interno.** *O que está em jogo:* os navegadores novos pedem essa permissão à pessoa, e uma renovação que esbarra nela derruba a pessoa a cada 15 minutos ou a ensina a aceitar qualquer pedido (decisão 37).
- **Também depende, e está explicado em outras mfs:** o conteúdo do registro e o pedido de uma pessoa excluída para apagar os dados dela (MF-102); a política do certificado dos apps (MF-103); o isolamento dos módulos (MF-109).

## Decisões do PO para discutir

- **Decisão:** uma pessoa pode acumular papéis, mas o owner da organização não pode nomear a si mesmo auditor. *Por que:* a decisão 12 descartou o owner da organização auditar a si mesmo. *Alternativa:* papéis livres, ou nenhum acúmulo. *Reabrir se:* uma organização pequena não tiver outra pessoa para ser auditora.
- **Decisão:** só entra quem está cadastrado na organização, mesmo com uma conta Google válida. *Por que:* a autenticação confirma quem a pessoa é, e não o que pode; no Horus, quem chega pelo login da empresa sem convite também não entra (D-253 do Horus). *Alternativa:* aceitar qualquer conta Google com o e-mail da empresa. *Reabrir se:* empresas grandes pedirem para não cadastrar as pessoas uma a uma.
- **Decisão:** cada pedido passa por duas conferências, a da pessoa e a do app, e o owner da organização dá as duas. *Por que:* com uma só, ou o app lê qualquer banco, ou qualquer pessoa usa qualquer app. *Alternativa:* só a permissão do app. *Reabrir se:* um app precisar guardar as próprias pessoas; aí a conferência da pessoa passa ao app (as pessoas ficam no núcleo, decisão 23).
- **Decisão:** o que cada pessoa vê dentro de um banco e os papéis internos de cada app ficam com o app; os papéis do Horus não entram no texto. *Por que:* o briefing põe a segurança por pessoa no app, e os papéis do Horus trazem regras comerciais dele. *Alternativa:* um catálogo de papéis por app no mAIg. *Reabrir se:* um segundo app precisar dos papéis do Horus.
- **Decisão:** as pessoas ficam no núcleo, como o PO recomendou, e o dono da Maind confirmou em 09/11/2026 (decisão 23). *Por que:* é o ponto de partida do Horus, dá o login único e deixa o mAIg conferir o "em nome de quem" do registro. *Alternativa:* em cada app, ou no núcleo com exceção por app. *Reabrir se:* um app futuro precisar de cadastro próprio, ou o jurídico pesar o dado pessoal no núcleo.
- **Decisão:** o PO completou os casos de falha do link de primeiro acesso: o vencido se refaz por quem criou o usuário, e o aberto por outra pessoa obriga a refazer o acesso. *Por que:* o Horus diz como o link nasce, não o que acontece quando ele falha. *Alternativa:* o próprio owner da organização pedir um link novo na tela de entrada. *Reabrir se:* o arquiteto do mAIg desenhar a recuperação de outro jeito. Foi decidido depois: o link do primeiro owner da organização sai do setup, para o e-mail registrado no Gerenciador do mAIg, e o e-mail errado se corrige pela substituição do owner da organização (decisão 136).
- **Decisão:** o PO usou duas entradas do Horus fora da lista do briefing (D-258, D-280 do Horus). *Por que:* a primeira é a única fonte sobre mais de um owner da organização, e a segunda é a que o briefing do mAIg cita junto com a D-271 do Horus. *Alternativa:* deixar o ponto dos owners da organização sem ponto de partida. *Reabrir se:* o dono da Maind não quiser herdar o limite do Horus. O dono da Maind adotou o limite de três owners da organização em 09/11/2026, mas com os owners da organização a mais também entrando por usuário e senha (decisão 25).
- **Decisão:** o PO abriu quatro pontos novos além do (g): os owners da organização, os auditores, a proteção extra do login e o primeiro administrador da instância. *Por que:* a TI do cliente pergunta isso numa aprovação de segurança, e as decisões de 08/11 não respondiam. *Alternativa:* deixá-los ao arquiteto do mAIg, sem registro. *Reabrir se:* algum já estiver respondido no planejamento do middleware herdado. Os owners da organização foram decididos em 09/11/2026 (decisão 25), e quem retira quem foi decidido depois: só o administrador da instância exclui um owner da organização (decisão 83).
- **Decisão:** a prova de valor tem duas demonstrações, os papéis com a recusa e o primeiro acesso. *Por que:* a TI do cliente e o auditor as veem funcionando sem número nenhum. *Alternativa:* uma demonstração do login pela conta Google. *Reabrir se:* o dono da Maind quiser a prova centrada na pessoa que usa o app.
- **Decidido pelo dono da Maind em 10/11/2026:** o login começa no endereço do mAIg, e a nuvem dos apps confia só no passe que o mAIg assina, que vale 15 minutos e se renova pelo mAIg (decisões 32 e 37). O login começa pelo app, e o passe é de um app só, com o papel da pessoa nele (decisão 40). Uma tarefa marcada roda com um passe de agendamento, guardado só no mAIg e conferido a cada rodada (decisão 42). Esta mf ganhou o tópico do endereço do mAIg e do passe, e dois pontos em aberto.
- **Decidido pelo dono da Maind em 11/11/2026:** na hospedagem da Maind, o mAIg roda em máquinas separadas da nuvem dos apps e, por enquanto, com o endereço aberto na internet, protegido pelo login (decisão 48). O ponto em aberto passou a ser como fechar essa rede, na segunda versão do mAIg ou depois.
- **Decidido pelo dono da Maind em 11/11/2026:** a confirmação em dois passos chega na segunda versão do mAIg, junto com a versão 2.1 do Horus, e é configurável: quem configura a entrada escolhe se a liga e para quem (decisão 50). O ponto da proteção extra do login ficou com as tentativas erradas, a recuperação da senha e o desenho da confirmação na segunda versão.
- **Decidido pelo dono da Maind em 11/11/2026:** o link de primeiro acesso do owner da organização vai direto do mAIg ao e-mail dele; o administrador da instância só digita o e-mail e nunca vê o link, pede outro se ele vencer, e cada envio fica no registro da organização (decisão 51). Esta mf ganhou um ponto do arquiteto do mAIg: como o mAIg envia esse e-mail.
- **Decidido pelo dono da Maind em 11/11/2026:** qualquer owner da organização retira outro, sozinho; o retirado e o auditor são avisados na hora, a retirada fica no registro, e outro owner da organização pode recolocar quem foi afastado (decisão 52). O ponto em aberto ficou só com a organização sem nenhum owner da organização com acesso. Esta regra foi substituída depois: quem cadastra, exclui e substitui um owner da organização é o administrador da instância (decisão 83).
- **Decidido pelo dono da Maind em 11/11/2026:** uma organização sem nenhum owner da organização com acesso é destravada pelo administrador da instância, que digita o e-mail do novo owner da organização; o link vai direto a ele, a troca só vale 48 horas depois, e nesse tempo os antigos owners da organização e o auditor são avisados e podem barrá-la (decisão 53). O ponto em aberto da organização que fica sem quem a configure saiu desta mf. Esta regra foi substituída depois: a troca feita pelo administrador da instância vale na hora, com volta em 48 horas (decisão 83).
- **Decidido pelo dono da Maind em 11/11/2026:** a senha própria do owner da organização e do administrador da instância abre só o console; para usar os apps, o owner da organização entra como qualquer pessoa (decisão 55).
- **Decidido pelo dono da Maind em 11/11/2026:** uma pessoa que está em duas organizações tem duas contas, uma em cada, e o mesmo e-mail pode se repetir; cada owner da organização cuida da conta que está na dele (decisão 66). O tópico das pessoas ganhou esse parágrafo e um exemplo.
- **Decidido pelo dono da Maind em 11/11/2026:** uma organização pode ter até dois auditores, e um deles pode ser de fora da empresa, com um acesso que vence numa data definida pelo owner da organização (decisão 79). O ponto em aberto saiu desta mf.
- **Decidido pelo dono da Maind em 11/11/2026:** a gestão dos owners da organização passa ao administrador da instância, que os cadastra, exclui e substitui; a troca vale na hora, com volta em 48 horas se um owner da organização ou um auditor a barrar (decisão 83). O número de owners da organização passa a ser o de assentos contratados, e os administradores da instância são até três, sem custo (decisão 84). Substitui a decisão 52 e absorve a 53.
- **Decidido pelo dono da Maind em 11/11/2026:** a chave privada de todo certificado do mAIg nasce dentro dele e nunca sai; a Maind recebe e atesta só a chave pública, e por isso nem ela fabrica passes (decisão 86).
- **Decidido pelo dono da Maind em 11/11/2026:** o e-mail do mAIg sai pelo servidor de e-mail da própria empresa, ou pelo serviço de e-mail da Maind na hospedagem dela, e a promessa do primeiro acesso foi ajustada (decisão 90). O ponto do arquiteto do mAIg sobre o envio do e-mail saiu desta mf.
- **Decidido por delegação do dono da Maind em 11/11/2026:** a primeira versão sai em duas ondas, a 1.0 e a 1.1, e a segunda versão vem depois; cada capacidade desta mf tem a onda marcada no tópico "O que entra em cada onda". A regra que resume o recorte: a onda 1.0 liga e para; a onda 1.1 desfaz e encerra (decisão 95).
- **Decidido por delegação do dono da Maind em 11/11/2026:** o owner da organização não nomeia a si mesmo auditor; só o owner da organização configura a organização, e o auditor entra no console só para ler o registro e os avisos que recebe e, na onda 1.1, para baixar a cópia assinada. As duas regras deixam de ser proposta do PO e entram na onda 1.0 (decisão 96).
- **Decidido por delegação do dono da Maind em 11/11/2026:** na onda 1.0, cada organização tem um auditor só, de dentro da empresa e sem data de vencimento; o segundo auditor e o auditor de fora, com o acesso que vence numa data, chegam na onda 1.1 (decisão 97).
- **Decidido por delegação do dono da Maind em 11/11/2026:** a primeira versão tem dois jeitos de entrar, usuário e senha e conta Google, os dois na onda 1.0; cada organização nasce só com usuário e senha ligados, e o owner da organização liga o Google se quiser. Com o Google fora do ar, quem entra por ele não começa sessão nova, e quem já entrou segue (decisão 98).
- **Decidido por delegação do dono da Maind em 11/11/2026:** cada pessoa pede o próprio link de troca de senha na tela de entrada, de uso único, direto ao e-mail do cadastro; depois de várias tentativas erradas, a conta fica bloqueada por um tempo, e a própria pessoa é avisada por e-mail. Vale para todos os papéis, o pedido fica anotado no registro, e ninguém vê nem define a senha de outra pessoa. Entra na onda 1.0 (decisão 99).
- **Decidido por delegação do dono da Maind em 11/11/2026:** os administradores da instância cuidam uns dos outros: um cadastra e retira outro, até três, e o último não pode ser retirado; cada ato fica no registro da instância e avisa os demais. Sem nenhum administrador da instância com acesso, vale o procedimento da instalação, feito na máquina do mAIg, com o uso anotado no registro da instância. A conta do administrador da instância entra sempre por usuário e senha e recebe os avisos da instância no e-mail dele. Entra na onda 1.0 (decisão 100).
- **Decidido por delegação do dono da Maind em 11/11/2026:** o cadastro de várias pessoas de uma vez, com o owner da organização subindo uma lista no console, chega na onda 1.1; na onda 1.0, ele cadastra uma a uma (decisão 101).
- **Decidido por delegação do dono da Maind em 11/11/2026:** o núcleo sugere as colunas sensíveis de cada banco, já marcadas, e o owner da organização confere no cadastro do banco e marca ou desmarca. Marcar ou desmarcar é ato sensível: fica no registro e avisa os outros owners da organização e o auditor. A coluna marcada sai sempre mascarada, para todos os apps. Entra na onda 1.0 (decisão 111).
- **Decidido por delegação do dono da Maind em 11/11/2026:** qualquer owner da organização pede a volta do encerramento no console, dentro dos 30 dias, não importa quem pediu o encerramento; o administrador da instância executa, e os owners da organização e os auditores são avisados. O owner da organização não recusa antes um encerramento pedido pela Maind. Encerrada a organização, os owners da organização e os auditores continuam entrando no console, todos para ler o registro e os owners da organização também para pedir a volta. Conta a data do pedido. Chega na onda 1.1 (decisão 115).
- **Decidido por delegação do dono da Maind em 11/11/2026:** o painel da instância mostra o estado, as versões e as pendências da instalação e, de cada organização, só contagens, sem nomes; os únicos nomes que o administrador da instância vê são os dos owners da organização, porque é ele quem os gere. O painel mostra também a data da última cópia de segurança, o estado da restauração, a data do vencimento do certificado do endereço, a lista do que a instância manda à Maind e a falha de envio de e-mail. Entra na onda 1.0 (decisão 119).
- **Decidido por delegação do dono da Maind em 11/11/2026:** a TI do cliente escolhe o nome do endereço do mAIg na rede dela e instala o certificado desse endereço, na instalação; o mAIg avisa os administradores da instância antes de o certificado vencer, e o painel da instância mostra a data. É outro certificado, diferente do certificado da organização, que a Maind atesta. Entra na onda 1.0 (decisão 120).
- **Decidido por delegação do dono da Maind em 11/11/2026:** na onda 1.0, o administrador da instância configura o servidor de e-mail da empresa e faz um envio de teste; sem isso, o console não deixa criar organização. O painel da instância mostra quando um envio falha, e o link de primeiro acesso, o link de troca de senha e os avisos saem por esse servidor (decisão 125).
- **Decidido por delegação do dono da Maind em 11/11/2026:** na onda 1.0, a equipe da Maind não entra no console da casa do cliente, e quem mostra a tela é o owner da organização ou a TI do cliente; na onda 1.1, o suporte da Maind e o auditor de fora chegam pela VPN que a TI do cliente concede, e o console avisa o owner da organização de que a pessoa precisa da VPN (decisão 127).
- **Decidido pelo dono da Maind em 12/11/2026:** a organização nasce na Maind, no Gerenciador do mAIg, e chega à instância pela ligação; o administrador da instância a traz digitando a chave temporária na interface de setup ou, para uma organização a mais, no console (decisão 128). A tabela dos papéis e os exemplos deixaram de dizer que ele cria a organização.
- **Decidido pelo dono da Maind em 12/11/2026:** o setup tem cinco passos, com a interface de setup que vem no pacote do mAIg, e quem digita a chave temporária vira o primeiro administrador da instância (decisão 132). O ponto em aberto sobre como nasce o acesso do primeiro administrador da instância saiu desta mf; ficou só o procedimento da instalação.
- **Decidido pelo dono da Maind em 12/11/2026:** o e-mail do primeiro owner da organização vem da Maind, registrado no Gerenciador do mAIg, e o mAIg cria o usuário dele sozinho no fim do setup e manda o link; o administrador da instância não digita esse e-mail e segue cadastrando os outros owners da organização (decisão 136). O tópico do primeiro acesso foi reescrito.
- **Decidido pelo dono da Maind em 12/11/2026:** na rede do cliente, o mAIg tem um endereço só, com o nome e o certificado que a TI do cliente escolhe e instala, para a tela de entrada, a renovação do passe, o console, a página de status e a planilha; o nome precisa estar sob um domínio público da empresa (decisão 140).
- **Decidido pelo dono da Maind em 12/11/2026:** no Kubernetes, o núcleo do mAIg manda o cluster trocar a caixa, com permissão só no espaço do mAIg, e o procedimento da instalação é feito por quem opera o cluster (decisão 144). O ponto do procedimento da instalação passou a citar os dois formatos.
