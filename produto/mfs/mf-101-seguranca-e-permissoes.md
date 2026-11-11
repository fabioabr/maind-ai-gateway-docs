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

**O que ainda está em aberto.** A confirmação em dois passos chega na segunda versão, configurável (decisão 50). O que acontece depois de várias tentativas erradas e como se recupera uma senha esquecida estão no fim desta página.

### Os jeitos de entrar na primeira versão

**Em resumo:** na primeira versão do mAIg, entra-se com usuário e senha ou com a conta Google. O login da empresa chega na segunda versão.

**Quem é quem.**

- **Usuário e senha.** A pessoa tem um nome de acesso e uma senha que só ela conhece, conferida a cada entrada.
- **Conta Google.** Quem confere a senha é o Google, que confirma ao mAIg que a pessoa é quem diz ser. O mAIg aceita a confirmação, mas continua decidindo o que a pessoa pode fazer.
- **Login da empresa.** É a entrada com o sistema de identidade da própria empresa, onde ela já cadastra os funcionários. Chega na segunda versão, junto com a versão 2.1 do Horus (decisão 16). O detalhe está em Login da empresa (MF-112).
- **Confirmação em dois passos.** É pedir uma segunda prova além da senha, como um código no celular. Também chega na segunda versão, como configuração da entrada: quem configura escolhe se a liga e para quem. Na primeira versão, o owner da organização, o auditor e o administrador da instância entram só com usuário e senha (decisão 50).

**Os jeitos de entrar são escolha da organização.** No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: a forma de entrar é configuração da organização, e o owner da organização liga ou desliga cada uma. O owner da organização e o administrador da instância entram sempre por usuário e senha, mesmo com o login da empresa ligado (decisão 24). Assim, o acesso de quem configura tudo não depende de uma conta mantida fora do mAIg e nunca fica trancado do lado de fora se o login da empresa falhar. Essa senha abre só o console: para usar os apps, o owner da organização entra como qualquer pessoa, pelo jeito de entrar que a organização ligou (decisão 55).

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

- **O endereço do mAIg** é onde o mAIg atende as pessoas, dentro da rede do cliente. A TI do cliente pode deixá-lo visível só de dentro da rede ou pela VPN, o túnel protegido que liga quem está fora à rede da empresa. Na hospedagem da Maind, ele fica nas máquinas da Maind, separadas da nuvem dos apps, e por enquanto aberto na internet, protegido pelo login (decisão 48).
- **O passe** é uma credencial curta que diz quem é a pessoa, de que organização e com que papel num app, assinada com a chave do certificado da organização (MF-107). Cada app recebe o seu passe, que não abre os outros apps (decisão 40).
- **O código de uso único** é o que o navegador leva às telas do app depois do login. Só serve uma vez, e a parte de fora do app o troca pelo passe pela ligação com o mAIg.

**Como funciona.** O login começa pelo app: a pessoa abre o app, e ele a manda ao endereço do mAIg (decisão 40). O mAIg confere a pessoa pelo jeito de entrar que a organização ligou, o usuário e a senha ou a conta Google, e manda o navegador às telas do app com o código de uso único. A parte de fora do app troca o código pelo passe pela ligação que o mAIg mantém com a Maind e confere a assinatura. Daí em diante, cada pedido leva o passe, e o núcleo o confere em todo pedido (decisões 32 e 33). O navegador renova o passe falando direto com o mAIg, a cada 15 minutos (decisão 37). Se a pessoa abre depois outro app, não digita a senha de novo: o mAIg já a conhece e emite outro passe, só para esse app, com o papel dela nele (decisões 23 e 40).

**Por que é assim.** A senha da pessoa e a resposta do Google ficam no mAIg e nunca chegam à nuvem da Maind. A nuvem não consegue fabricar um passe, porque não tem a chave da organização, e por isso quem invadisse a nuvem da Maind não se passaria por ninguém diante do mAIg. E, como o passe só se renova pelo mAIg, a regra da TI do cliente de ver o mAIg só de dentro da rede ou pela VPN vale durante todo o uso dos apps, e não só na entrada. (decisões 32 e 37)

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
| Administrador da instância | cria as organizações e o usuário do primeiro owner da organização; instala os apps na instância, uma vez só; vê as instalações, o estado e as versões | o registro das organizações; a configuração dos bancos, da IA e das pessoas delas |
| Owner da organização | libera e configura os apps; configura os bancos e a IA; dá acesso às pessoas; nomeia o auditor; cadastra até mais dois owners da organização; consulta o registro | nada de outras organizações, nem das que dividem a instância |
| Auditor, até dois por organização | lê o registro da organização que o nomeou; o de fora da empresa, só até a data que o owner da organização definiu | não muda nenhuma configuração |
| Pessoa que usa o app | usa o que o app mostra a ela | senhas, chaves, configuração e registro |

A tabela segue as decisões 10 e 12. O papel de administrador da instância é da TI do cliente quando o mAIg roda na infraestrutura do cliente, isto é, nas máquinas e na rede dele, e da equipe da Maind quando roda na da Maind (D-271, D-280 do Horus).

**Por que é assim.** Quem cuida da instalação física controla o que roda nela, e cada organização escolhe o que usa (decisão 10). Quem configura não é quem confere: é a separação de funções, que separa quem movimenta o dinheiro de quem audita as contas. E, se o administrador da instância visse o registro, a equipe da Maind veria o de todos os clientes das instâncias da Maind (decisão 12).

**A fé pública do owner da organização.** O owner da organização tem uma espécie de fé pública dentro da organização, como um tabelião no cartório: é quem a empresa indicou para responder por ela no mAIg, e o que ele faz vale como ato da organização. Por isso a senha de um banco pode passar por ele, e por isso ele pode retirar outro owner da organização sozinho (decisões 52 e 67). O freio não é uma segunda aprovação, e sim o registro, o auditor e os avisos dos atos sensíveis (decisão 54). **Onde a analogia para:** o tabelião é nomeado pelo Estado; o owner da organização é indicado pela própria empresa.

**Uma pessoa, mais de um papel.** A mesma pessoa pode fazer mais de um papel: Paulo é owner da organização e também pergunta ao Horus. A exceção é o auditor: o owner da organização não pode nomear a si mesmo, porque auditaria o próprio trabalho.

**Até três owners da organização.** Uma organização pode ter até três owners da organização: o primeiro, cujo usuário o administrador da instância cria, e até mais dois, que o owner da organização cadastra. Todos entram por usuário e senha, e, quando o login da empresa chegar, ele passa a ser mais um jeito de entrar para os três, sem tirar a senha (decisões 24 e 25). Assim, a organização não depende de uma pessoa só. Qualquer owner da organização retira outro, sozinho: o retirado e o auditor são avisados na hora, e a retirada fica no registro (decisão 52). Se ela ficar sem nenhum owner da organização com acesso, o administrador da instância a destrava, com espera de 48 horas e aviso aos antigos owners da organização e ao auditor (decisão 53). Abre-se mão de: até três pessoas com a chave de tudo e três senhas que podem ser roubadas; e de seguir o Horus num ponto, porque ele liga os owners da organização a mais só ao login da empresa (D-258 do Horus).

> **Analogia:** num condomínio, a administradora cuida do prédio, cada morador decide o próprio apartamento e o conselho fiscal confere as contas sem mexer nelas. **Onde a analogia para:** o conselho fiscal é eleito pela assembleia, e a administradora entra em qualquer área comum; no mAIg, o auditor é nomeado pelo owner da organização que ele confere, e o administrador da instância não enxerga o registro de organização nenhuma.

**Exemplo.** A Farma Vida instalou o mAIg na própria rede.

1. Marta, da TI da Farma Vida, faz o papel de administrador da instância e cria a organização Farma Vida e o usuário de Paulo.
2. Paulo, diretor de operações, é o owner da organização. Libera o Horus, escolhe o banco e a IA e dá acesso a Ana.
3. Paulo nomeia Renata, da área de segurança, auditora da organização.
4. Renata vê no registro o que o Horus pediu em nome de Ana. Marta vê que o Horus está instalado e funcionando, mas não vê o registro nem o banco escolhido por Paulo.

**Quando dá errado.**

- **O auditor tenta mudar uma configuração.** Não consegue: o papel só lê (decisão 12).
- **Um owner da organização sai da empresa ou esquece a senha.** Os outros owners da organização, até três por organização, seguem configurando (decisão 25). Quem sai da empresa é retirado por outro owner da organização no mesmo dia, com aviso a ele e ao auditor (decisão 52). Se a organização só cadastrou um, ninguém mais configura, embora os apps sigam funcionando. O administrador da instância digita o e-mail do novo owner da organização, e o link vai direto para ele; a troca só vale 48 horas depois, e nesse tempo os antigos owners da organização e o auditor são avisados por e-mail e podem barrá-la (decisão 53).
- **O administrador da instância tenta se pôr no lugar do owner da organização.** Ele não vê o link, que vai direto ao e-mail do novo owner da organização (decisão 51). E a troca espera 48 horas, com aviso aos antigos owners da organização e ao auditor, que a barram se não a reconhecem (decisão 53).
- **Um owner da organização afasta outro sem motivo.** O afastado e o auditor são avisados na hora, o registro mostra quem retirou e quando, e outro owner da organização pode recolocá-lo (decisão 52).

**Até dois auditores.** Uma organização pode ter até dois auditores, e um deles pode ser de fora da empresa, como o de uma auditoria externa. O de fora recebe um acesso que vence numa data que o owner da organização define, como o fim da auditoria. Nomear ou trocar um auditor é ato sensível (decisões 54 e 79). Abre-se mão de: mais uma pessoa lê o registro, que tem nomes e o que cada um consultou.

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

**Em resumo:** o administrador da instância cria o usuário do primeiro owner da organização, e o mAIg manda direto ao e-mail dele um link de uso único para definir a própria senha. Nem o link nem a senha passam por mais ninguém (decisão 51).

**Quem é quem.**

- **O usuário** é a conta com que alguém entra no mAIg.
- **O link de primeiro acesso** abre a tela para definir a senha. Serve uma vez só e vale por pouco tempo.
- **O e-mail do owner da organização** é para onde o mAIg manda o link. Quem cria o usuário só o digita.

**Como acontece.** Quem cria o usuário digita o e-mail do owner da organização, e o mAIg manda o link direto para lá. Quem criou o usuário nunca vê o link. Se o link vence, ele pede outro, que também vai direto ao e-mail, e cada envio fica anotado no registro da organização (decisão 51, MF-102). Vale nas duas hospedagens: na da Maind, quem cria o usuário é a equipe da Maind; na do cliente, a TI do cliente (D-271 do Horus). No Horus, quem criava o usuário recebia o link e o entregava por fora do sistema (D-290 do Horus); o mAIg decidiu diferente.

**Por que é assim.** A senha de quem configura tudo nasce com o próprio owner da organização, e nem a equipe da Maind nem a TI do cliente a conhecem. Como o link também não passa por elas, nenhuma das duas consegue usá-lo antes do owner da organização e entrar no lugar dele, com acesso aos bancos, à IA e ao registro, que o papel delas nunca vê (decisões 12 e 51). Abre-se mão de: o mAIg passa a enviar e-mail, e um e-mail digitado errado manda o link para outra pessoa.

> **Analogia:** é como a chave provisória que a imobiliária entrega ao novo morador, para abrir a porta uma vez e trocar o segredo da fechadura. **Onde a analogia para:** a chave provisória serve até alguém trocar a fechadura; o link para de funcionar sozinho, depois do primeiro uso ou de pouco tempo.

**Exemplo.**

1. Marta cria a organização Farma Vida e o usuário de Paulo como owner da organização.
2. Marta digita o e-mail de Paulo, e o mAIg manda o link de primeiro acesso direto para ele. Marta não vê o link.
3. Paulo abre o link e define a senha. Marta não a vê em momento nenhum.
4. O link deixa de funcionar. Daqui em diante, Paulo entra com usuário e senha.

**Quando dá errado.**

- **O link vence antes de ser aberto.** Marta pede um link novo para o mesmo usuário, e o mAIg o manda de novo ao e-mail de Paulo.
- **Marta digita o e-mail errado.** O link vai para outra pessoa. Paulo não recebe nada e avisa Marta, que corrige o e-mail e pede um link novo; o primeiro deixa de valer, e o registro mostra os dois envios.
- **Outra pessoa abre o link antes de Paulo.** Paulo o encontra já usado e não consegue definir a senha. É o sinal de que o link vazou: Paulo avisa Marta, e o acesso é refeito antes que quem o abriu use a conta.

**O que ainda está em aberto.** Como o mAIg envia o e-mail, a recuperação de uma senha esquecida e o acesso do primeiro administrador da instância estão no fim desta página.

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

**O que ainda está em aberto.** Nada sobre onde ficam as pessoas. A proteção extra do login está em "O que ainda falta decidir".

## Prova de valor

Prova de valor proposta pelo PO; o dono da Maind ainda não a confirmou.

**Demonstração 1: cada papel no seu lugar.** Marta, da TI do cliente, e Renata, a auditora, acompanham.

1. Paulo liberou ao Horus só o banco de vendas. Ana faz uma pergunta que pede o banco financeiro, e o mAIg recusa antes de ler qualquer dado.
2. Renata encontra a recusa no registro, tenta liberar o banco financeiro e não consegue.
3. Marta entra como administrador da instância. Vê o Horus instalado, o estado e a versão, mas não encontra o registro nem a configuração do banco.

**Demonstração 2: a senha que ninguém conhece.** Marta cria o usuário de Paulo e lhe entrega o link. Paulo define a senha. Marta tenta usar o mesmo link de novo, e ele não funciona; em nenhum momento o mAIg lhe mostrou a senha de Paulo.

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
- O que cada pessoa vê dentro de um banco e os papéis internos de cada app: são do app; no Horus, a segurança por pessoa é uma mf da versão 2.1 (MF-106 do Horus).

## Depende de

- `MF-107:Organizações e instâncias`. Os papéis existem dentro de uma instância ou de uma organização, e quase toda permissão vale por organização. Sem organização, não há a quem dar um papel nem onde valer uma permissão.

## Ponto de partida no Horus

O middleware é a peça do Horus que deu origem ao mAIg; a nuvem do Horus é a parte dele nos servidores da Maind.

- No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: as pessoas ficam isoladas no middleware, fora da nuvem do Horus, o owner da organização as gere por lá, e o painel de quem administra a instância só enxerga contagens delas (D-261 do Horus).
- No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: só o owner da organização usa a tela de configuração, onde aprovava o convite de uma pessoa nascido no Horus (D-262 do Horus). O mAIg decidiu diferente: não há convite de dentro dos apps, e o owner da organização cadastra as pessoas direto no console (decisão 77).
- No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: o owner da organização usa a mesma tela nas duas hospedagens, e na da Maind é a Maind quem cria o usuário dele (D-271 do Horus).
- No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: criar a organização cria também o usuário do owner da organização (D-280 do Horus).
- No Horus, o primeiro acesso é um link de uso único e validade curta, entregue por fora do sistema por quem criou o usuário, e a senha não passa por mais ninguém (D-290 do Horus). O mAIg já decidiu diferente na entrega: o link vai direto ao e-mail do owner da organização, e quem criou o usuário nunca o vê (decisão 51).
- No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: a forma de entrar é configuração da organização (D-291 do Horus). Que o owner da organização e o administrador da instância entrem sempre por usuário e senha o dono da Maind confirmou em 09/11/2026 (decisão 24).
- No Horus, o owner da organização cadastra até mais dois owners da organização, ligados ao login da empresa (D-258 do Horus). O dono da Maind confirmou o limite de três owners da organização em 09/11/2026, mas com os três entrando por usuário e senha (decisão 25).

## O que ainda falta decidir

- **Falta o arquiteto do mAIg definir, com o dono da Maind, a proteção extra do login por usuário e senha: o que acontece depois de várias tentativas erradas, como se recupera uma senha esquecida e, para a segunda versão, como funciona a confirmação em dois passos configurável (decisão 50).** *O que está em jogo:* o owner da organização e o administrador da instância entram sempre por usuário e senha (decisão 24) e têm a chave de tudo, e essa senha é a única porta garantida deles; uma senha roubada abre a organização inteira, e uma recuperação mal desenhada vira uma porta dos fundos.
- **Falta o arquiteto do mAIg definir como o mAIg envia o e-mail do primeiro acesso, na casa do cliente e na hospedagem da Maind.** *O que está em jogo:* o link precisa chegar ao owner da organização sem passar por quem criou o usuário (decisão 51). Na casa do cliente, o mAIg só liga para fora (decisão 6), e o e-mail pode sair pelo servidor de e-mail da própria empresa ou pela ligação com a Maind, que então veria o link passar.
- **Falta o arquiteto do mAIg definir como nasce o acesso do primeiro administrador da instância, quando o mAIg é instalado.** *O que está em jogo:* é a primeira conta de todas; se nascer com uma senha conhecida por mais gente, a regra de que a senha não passa por ninguém falha justamente no começo.
- **Falta o dono da Maind decidir, para a segunda versão do mAIg ou depois, como fechar a rede da instância da Maind, que na primeira versão fica com o endereço aberto na internet.** *O que está em jogo:* na casa do cliente, a TI dele deixa o endereço visível só por dentro da rede ou pela VPN (decisão 32); na hospedagem da Maind, a tela de entrada e o console ficam ao alcance de qualquer pessoa na internet, protegidos só pelo login (decisão 48). Para fechar, é preciso um caminho até lá para quem não tem TI nem VPN, como a Ótica Visão Clara.
- **Falta o arquiteto do mAIg definir como o navegador renova o passe direto com o mAIg quando ele pede permissão para um site da internet falar com um endereço interno.** *O que está em jogo:* os navegadores novos pedem essa permissão à pessoa, e uma renovação que esbarra nela derruba a pessoa a cada 15 minutos ou a ensina a aceitar qualquer pedido (decisão 37).
- **Também depende, e está explicado em outras mfs:** o conteúdo do registro e o pedido de uma pessoa excluída para apagar os dados dela (MF-102); a política do certificado dos apps (MF-103); o isolamento dos módulos (MF-109).

## Decisões do PO para discutir

- **Decisão:** uma pessoa pode acumular papéis, mas o owner da organização não pode nomear a si mesmo auditor. *Por que:* a decisão 12 descartou o owner da organização auditar a si mesmo. *Alternativa:* papéis livres, ou nenhum acúmulo. *Reabrir se:* uma organização pequena não tiver outra pessoa para ser auditora.
- **Decisão:** só entra quem está cadastrado na organização, mesmo com uma conta Google válida. *Por que:* a autenticação confirma quem a pessoa é, e não o que pode; no Horus, quem chega pelo login da empresa sem convite também não entra (D-253 do Horus). *Alternativa:* aceitar qualquer conta Google com o e-mail da empresa. *Reabrir se:* empresas grandes pedirem para não cadastrar as pessoas uma a uma.
- **Decisão:** cada pedido passa por duas conferências, a da pessoa e a do app, e o owner da organização dá as duas. *Por que:* com uma só, ou o app lê qualquer banco, ou qualquer pessoa usa qualquer app. *Alternativa:* só a permissão do app. *Reabrir se:* um app precisar guardar as próprias pessoas; aí a conferência da pessoa passa ao app (as pessoas ficam no núcleo, decisão 23).
- **Decisão:** o que cada pessoa vê dentro de um banco e os papéis internos de cada app ficam com o app; os papéis do Horus não entram no texto. *Por que:* o briefing põe a segurança por pessoa no app, e os papéis do Horus trazem regras comerciais dele. *Alternativa:* um catálogo de papéis por app no mAIg. *Reabrir se:* um segundo app precisar dos papéis do Horus.
- **Decisão:** as pessoas ficam no núcleo, como o PO recomendou, e o dono da Maind confirmou em 09/11/2026 (decisão 23). *Por que:* é o ponto de partida do Horus, dá o login único e deixa o mAIg conferir o "em nome de quem" do registro. *Alternativa:* em cada app, ou no núcleo com exceção por app. *Reabrir se:* um app futuro precisar de cadastro próprio, ou o jurídico pesar o dado pessoal no núcleo.
- **Decisão:** o PO completou os casos de falha do link de primeiro acesso: o vencido se refaz por quem criou o usuário, e o aberto por outra pessoa obriga a refazer o acesso. *Por que:* o Horus diz como o link nasce, não o que acontece quando ele falha. *Alternativa:* o próprio owner da organização pedir um link novo na tela de entrada. *Reabrir se:* o arquiteto do mAIg desenhar a recuperação de outro jeito.
- **Decisão:** o PO usou duas entradas do Horus fora da lista do briefing (D-258, D-280 do Horus). *Por que:* a primeira é a única fonte sobre mais de um owner da organização, e a segunda é a que o briefing do mAIg cita junto com a D-271 do Horus. *Alternativa:* deixar o ponto dos owners da organização sem ponto de partida. *Reabrir se:* o dono da Maind não quiser herdar o limite do Horus. O dono da Maind adotou o limite de três owners da organização em 09/11/2026, mas com os owners da organização a mais também entrando por usuário e senha (decisão 25).
- **Decisão:** o PO abriu quatro pontos novos além do (g): os owners da organização, os auditores, a proteção extra do login e o primeiro administrador da instância. *Por que:* a TI do cliente pergunta isso numa aprovação de segurança, e as decisões de 08/11 não respondiam. *Alternativa:* deixá-los ao arquiteto do mAIg, sem registro. *Reabrir se:* algum já estiver respondido no planejamento do middleware herdado. Os owners da organização foram decididos em 09/11/2026 (decisão 25); sobra quem pode retirar quem.
- **Decisão:** a prova de valor tem duas demonstrações, os papéis com a recusa e o primeiro acesso. *Por que:* a TI do cliente e o auditor as veem funcionando sem número nenhum. *Alternativa:* uma demonstração do login pela conta Google. *Reabrir se:* o dono da Maind quiser a prova centrada na pessoa que usa o app.
- **Decidido pelo dono da Maind em 10/11/2026:** o login começa no endereço do mAIg, e a nuvem dos apps confia só no passe que o mAIg assina, que vale 15 minutos e se renova pelo mAIg (decisões 32 e 37). O login começa pelo app, e o passe é de um app só, com o papel da pessoa nele (decisão 40). Uma tarefa marcada roda com um passe de agendamento, guardado só no mAIg e conferido a cada rodada (decisão 42). Esta mf ganhou o tópico do endereço do mAIg e do passe, e dois pontos em aberto.
- **Decidido pelo dono da Maind em 11/11/2026:** na hospedagem da Maind, o mAIg roda em máquinas separadas da nuvem dos apps e, por enquanto, com o endereço aberto na internet, protegido pelo login (decisão 48). O ponto em aberto passou a ser como fechar essa rede, na segunda versão do mAIg ou depois.
- **Decidido pelo dono da Maind em 11/11/2026:** a confirmação em dois passos chega na segunda versão do mAIg, junto com a versão 2.1 do Horus, e é configurável: quem configura a entrada escolhe se a liga e para quem (decisão 50). O ponto da proteção extra do login ficou com as tentativas erradas, a recuperação da senha e o desenho da confirmação na segunda versão.
- **Decidido pelo dono da Maind em 11/11/2026:** o link de primeiro acesso do owner da organização vai direto do mAIg ao e-mail dele; o administrador da instância só digita o e-mail e nunca vê o link, pede outro se ele vencer, e cada envio fica no registro da organização (decisão 51). Esta mf ganhou um ponto do arquiteto do mAIg: como o mAIg envia esse e-mail.
- **Decidido pelo dono da Maind em 11/11/2026:** qualquer owner da organização retira outro, sozinho; o retirado e o auditor são avisados na hora, a retirada fica no registro, e outro owner da organização pode recolocar quem foi afastado (decisão 52). O ponto em aberto ficou só com a organização sem nenhum owner da organização com acesso.
- **Decidido pelo dono da Maind em 11/11/2026:** uma organização sem nenhum owner da organização com acesso é destravada pelo administrador da instância, que digita o e-mail do novo owner da organização; o link vai direto a ele, a troca só vale 48 horas depois, e nesse tempo os antigos owners da organização e o auditor são avisados e podem barrá-la (decisão 53). O ponto em aberto da organização que fica sem quem a configure saiu desta mf.
- **Decidido pelo dono da Maind em 11/11/2026:** a senha própria do owner da organização e do administrador da instância abre só o console; para usar os apps, o owner da organização entra como qualquer pessoa (decisão 55).
- **Decidido pelo dono da Maind em 11/11/2026:** uma pessoa que está em duas organizações tem duas contas, uma em cada, e o mesmo e-mail pode se repetir; cada owner da organização cuida da conta que está na dele (decisão 66). O tópico das pessoas ganhou esse parágrafo e um exemplo.
- **Decidido pelo dono da Maind em 11/11/2026:** uma organização pode ter até dois auditores, e um deles pode ser de fora da empresa, com um acesso que vence numa data definida pelo owner da organização (decisão 79). O ponto em aberto saiu desta mf.
