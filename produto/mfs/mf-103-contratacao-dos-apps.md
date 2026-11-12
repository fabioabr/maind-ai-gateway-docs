# MF-103:Contratar e liberar um app com segurança

> A empresa contrata um app da Maind para uma organização, e a Maind entrega um kit com um certificado digital. O mAIg confere a contratação com a Maind e libera o app só para essa organização; no fim do contrato, o app não para de surpresa.

**Também chamada de:** Contratação dos apps · **Versão do mAIg:** 1ª · **Classe:** essencial · **Situação:** rascunho do PO

## Em uma frase

A contratação dos apps é o caminho pelo qual um app da Maind passa a valer para uma organização: o trâmite comercial, o kit de instalação com o certificado digital, a conferência da contratação com a Maind e, no fim do contrato, o aviso, a carência e a renovação. O certificado digital é uma espécie de carteira de identidade digital. A carência é o tempo em que o app continua funcionando depois do fim do contrato, à espera da renovação.

O mAIg, o Maind AI Gateway, é a plataforma da Maind que fica na rede da empresa cliente, ou na infraestrutura da Maind, e pela qual os produtos da Maind chegam aos dados e à inteligência artificial (IA) da empresa. "Gateway" quer dizer portão. Cada produto entra no mAIg como um app, e o primeiro é o Horus.

Cada instalação física do mAIg é uma instância. Dentro dela, cada cliente trabalha numa organização, o espaço com os seus próprios apps e as suas próprias regras (decisão 9). Um app só funciona para a organização que o contratou (decisão 11).

Esta mf existe para que essa regra valha sempre do mesmo jeito. Sem ela, cada liberação seria um acerto feito à mão entre a equipe da Maind e a TI do cliente, a equipe de tecnologia da empresa. Com ela, a Maind libera um app sem entrar na rede do cliente, e o cliente não abre uma porta de entrada, a abertura na rede por onde alguém de fora começaria uma conversa com um computador de dentro. E uma renovação atrasada não derruba a operação (decisão 6, decisões 10 e 13).

## Quem ganha

- **Equipe da Maind** (as pessoas da Maind que vendem, entregam e dão suporte aos apps). Ganha um caminho único para liberar qualquer app em qualquer cliente: fecha a contratação, entrega o kit e deixa a conferência para o mAIg e para a Maind. Não precisa entrar na rede do cliente para liberar nada. E tem um jeito claro de parar um app quando for preciso.
- **Administrador da instância** (quem cuida da instalação física do mAIg: a TI do cliente, quando o mAIg roda na rede da empresa, ou a equipe da Maind, quando roda na infraestrutura da Maind). Recebe um pacote pronto e o instala. Não precisa acreditar na palavra de ninguém: sem contratação, o mAIg não libera o app.
- **Owner da organização** (a pessoa que responde pela organização no mAIg). Vê quais apps a organização contratou e até quando. É avisado antes do fim de cada contrato e tem uma carência para renovar, sem que o app pare no dia seguinte.
- **De forma indireta, a pessoa que usa o app e a TI do cliente.** A pessoa que usa o app não fica sem ele porque um pedido de compra atrasou (decisão 13). A TI do cliente não abre porta de entrada na rede para que um app seja contratado (decisão 6).

## A decisão que passa a ser possível

- **A equipe da Maind passa a poder liberar um app para uma organização, e só para ela,** sem tocar na instância do cliente e sem pedir à TI do cliente que abra uma porta de entrada.
- **O administrador da instância passa a poder conferir que um app foi contratado antes de pô-lo para rodar:** o mAIg só o libera depois que a Maind confirma a contratação.
- **O owner da organização passa a poder renovar no ritmo da área de compras da empresa:** o fim do contrato, sozinho, não desliga o app.
- **A dor que some:** o app que para de surpresa porque a renovação emperrou na burocracia, e o desgaste que isso causaria entre o cliente e a Maind.

## Como funciona

### O caminho inteiro, em oito passos

**Em resumo:** da contratação ao uso, todo app passa pelos mesmos oito passos, sempre na mesma ordem: seis no começo e dois no fim do contrato.

**Quem é quem.**

- **A empresa** é a companhia cliente, que assina o contrato com a Maind. **A organização** é o espaço com que a empresa trabalha dentro do mAIg, com os seus próprios apps e as suas próprias regras. **A instância** é cada instalação física do mAIg, que atende uma ou mais organizações sem misturá-las (decisões 9 e 11).
- **O servidor da Maind Tech** é o computador da Maind, sempre ligado, que confere as contratações.
- **O kit de instalação** é o pacote que a Maind entrega para cada app contratado. Dentro dele vem o certificado digital, uma espécie de carteira de identidade digital do app. A licença, com a data do fim do contrato e a carência, chega depois, pela ligação (decisão 56).
- **O handshake contratual** é a conversa em que o mAIg se apresenta à Maind com o certificado e a Maind confere a contratação. Handshake quer dizer "aperto de mão", em inglês.

**Os oito passos** (decisões 10 e 13):

1. Fechada a contratação, a equipe da Maind entrega o kit de instalação, com o certificado, ao administrador da instância.
2. O administrador da instância instala o kit no mAIg, e a instalação fica anotada no registro da organização (decisão 82).
3. O mAIg faz o handshake contratual com o servidor da Maind Tech.
4. O servidor da Maind Tech libera o app para a organização que o contratou.
5. O administrador da instância instala o app na instância, uma vez só.
6. O owner da organização libera e configura o app para a organização dele. Daqui em diante, as pessoas da organização usam o app.
7. Antes de o contrato acabar, o mAIg avisa o owner da organização.
8. O app só para por uma ação manual da equipe da Maind ou quando a licença vence sem ser renovada, ao fim da carência.

**O que esta mf cobre.** Os passos 1 a 4, 7 e 8. Cobre também o trâmite comercial, que vem antes do passo 1, e a renovação. Os passos 5 e 6, instalar e liberar, são da gestão dos apps (MF-104).

**O que vem antes.** A organização já existe na instância, com o usuário do primeiro owner da organização e com o certificado próprio dela, que a Maind emitiu quando ela foi criada (decisão 28, MF-107). E o mAIg já mantém aberta a conexão com a Maind, a ligação que ele mesmo abre de dentro para fora (MF-108).

### O trâmite comercial: o que se contrata e para quem

**Em resumo:** antes de qualquer passo técnico, a Maind e a empresa fecham a contratação: qual app, para quais organizações e até quando. O mAIg só entra em cena depois.

**Quem é quem.**

- **O trâmite comercial** é a negociação e o fechamento do contrato entre a empresa e a Maind.
- **A empresa assina; a organização recebe.** Quem assina é a empresa. Mas, para o mAIg, quem contrata cada app é a organização. Um mesmo contrato comercial pode listar várias organizações da mesma empresa (decisão 11).
- **A equipe da Maind** conduz o trâmite do lado da Maind.

**O que a Maind precisa cadastrar.** Para conferir a contratação, o servidor da Maind Tech precisa conhecê-la. Por isso, ao fechar o trâmite, a equipe da Maind cadastra nele três coisas: o app, a organização e a data em que o contrato acaba. Sem esse cadastro, o handshake não tem o que conferir, e o app não é liberado.

**Por que é assim.** O trâmite fica fora do mAIg porque é um acordo entre pessoas, com proposta, assinatura e pedido de compra. O mAIg recebe só o resultado: uma prova, que ele consegue conferir, de que o app foi contratado por aquela organização (decisão 10).

**O preço fica de fora.** O mAIg vem embutido no preço dos apps, sem linha própria na conta (decisão 17). O preço em reais é um ponto do mapa geral e não faz parte desta mf.

### O kit de instalação

**Em resumo:** o kit é o pacote que a equipe da Maind entrega ao administrador da instância depois de fechada a contratação. Dentro dele vem o certificado digital que identifica o app; o contrato se prova pela licença, que chega depois, pela ligação (decisão 56).

**Quem é quem.**

- **Quem entrega** é a equipe da Maind. **Quem recebe e instala** é o administrador da instância (decisão 10).
- **Na infraestrutura do cliente,** o administrador da instância é a TI do cliente, e o kit passa de uma empresa para a outra. **Na infraestrutura da Maind,** o administrador da instância é a própria equipe da Maind, que entrega o kit a si mesma.
- **Um kit vale para um app e uma organização.** Se a empresa contrata dois apps, recebe dois kits. Se um contrato lista duas organizações, cada uma recebe o seu kit. O kit identifica o app, e a licença prova o contrato (decisão 56); o certificado da organização, que não vem nele, prova de quem é o pedido (decisão 28).

**Por que é assim.** O kit leva para dentro da instância a prova da contratação, sem que a Maind precise entrar nela. É o administrador da instância quem decide instalar o kit, porque é ele quem controla o que roda na instalação (decisão 10).

**Quando dá errado.** O kit chega a uma instância onde a organização ainda não foi criada: não há para quem liberar o app, e a organização precisa vir antes (MF-107). O kit se perde ou cai em mãos erradas: o certificado dentro dele é o que identifica o app, e contê-lo depende da política do certificado, ainda em aberto. Mesmo assim, o kit sozinho não abre nada da organização, porque o pedido também exige o certificado dela (decisão 28).

**O que ainda está em aberto.** O que mais vem no kit, além do certificado, e por que caminho ele chega com segurança ao administrador da instância estão em "O que ainda falta decidir". Também estão lá em que ambientes o mAIg roda e o que um app declara ao núcleo para ser instalado, como a lista dos tipos de ato das linhas informadas pelo app, que chegam na onda 1.1 (decisão 104).

### Três peças: o certificado, a licença e a autoridade pública

**Em resumo:** cada app contratado tem três peças separadas. O certificado do kit diz quem é o app e se troca sozinho; a licença diz até quando vale o contrato e quanto dura a carência; e a autoridade certificadora pública só prova que o endereço da Maind é da Maind (decisão 56).

**Quem é quem.**

- **O certificado digital** é um arquivo que diz a quem pertence e traz a assinatura digital de quem o emitiu. A assinatura digital é uma marca que só o emissor consegue produzir e que denuncia qualquer alteração no arquivo.
- **O certificado do kit** é a identidade do app na organização. O mAIg gera o par de chaves e guarda a privada, que nunca sai dele; a Maind recebe só a pública e a atesta (decisão 86). Ele vale pouco tempo, e o mAIg o troca sozinho pela ligação, como faz com o da organização (decisão 44).
- **A licença** é um documento assinado pela Maind, com a data do fim do contrato e a carência. Chega ao mAIg pela ligação, no handshake contratual e a cada renovação. Quando ela vence sem ser renovada, o app para (decisão 56).
- **A autoridade certificadora pública** é uma entidade reconhecida publicamente que garante identidades no mundo digital. No mAIg, ela serve só para provar que o endereço da Maind, com que o mAIg conversa, é mesmo da Maind.

**Por que é assim.** Cada peça faz um trabalho só. Um certificado roubado vale pouco tempo, porque é curto e se troca sozinho. Renovar o contrato é trocar a licença, sem reinstalar nada. E a carência vira um prazo do contrato, e não a data de validade de um arquivo. Antes, o certificado do kit, emitido abaixo de uma autoridade pública, fazia os três trabalhos (decisões 10 e 56). Abre-se mão de: são três peças em vez de uma, e a confiança nos certificados dos kits passa a se apoiar na Maind, e não numa autoridade de mercado.

> **Analogia:** numa empresa, o crachá diz quem é o funcionário e é trocado de tempos em tempos, o contrato de trabalho diz até quando ele trabalha ali, e o cartório reconhece a firma de quem assina. **Onde a analogia para:** no mAIg, o crachá se troca sozinho, sem ninguém pedir, e o cartório só confere o endereço da Maind, e não cada contrato.

**Dois certificados em cada pedido.** O certificado do kit prova que a organização contratou aquele app. O certificado da organização, que a Maind emite quando a organização é criada, prova de quem é o pedido. Um pedido só passa com os dois, e por isso um kit copiado, sozinho, não abre nada da organização (decisão 28). Abre-se mão de: são dois tipos de certificado para emitir, renovar e cancelar; a Maind passa a emitir um novo a cada organização criada, e criar uma organização, mesmo na instância do cliente, depende dela; e a TI do cliente tem mais uma peça para entender e aprovar.

**O certificado da organização se renova sozinho e nunca para sem aviso.** Ele vale 30 dias, e o mAIg o renova sozinho pela ligação com a Maind, que já é requisito para tudo funcionar. Se a renovação falhar, o certificado atual segue valendo até o fim, e o owner da organização e a TI do cliente são avisados 7 dias antes de ele vencer. Cancelá-lo antes do prazo exige a autorização de duas pessoas da Maind, e o ato fica anotado no registro da organização. Como ele assina todo login da organização, é o que mais precisa de cuidado: assim, ninguém é trancado por esquecimento, e um certificado roubado vale pouco tempo. (decisões 41 e 44)

**O que ainda está em aberto.** Quanto tempo vale o certificado do kit e como ele é cancelado antes do prazo, se vazar, e quanto dura a carência estão em "O que ainda falta decidir". Também está em aberto se o certificado do kit é o mesmo com que a parte de fora do app, a que roda fora do mAIg, se identifica nele.

### O handshake contratual: a Maind confere e libera

**Em resumo:** instalado o kit, o mAIg se apresenta ao servidor da Maind Tech com o certificado. O servidor confere a contratação e libera o app só para a organização que o contratou (decisões 10 e 11).

**Quem é quem.**

- **O handshake contratual** é essa conversa de apresentação e conferência. É contratual porque o que se confere é o contrato, e não só a identidade.
- **Liberar o app** é a Maind dizer ao mAIg, de um jeito que ele consegue conferir, que aquele app foi contratado por aquela organização.
- **A conexão de dentro para fora** é a ligação que o mAIg abre com a Maind e mantém aberta. O handshake corre por dentro dela (decisão 6).

**Como acontece.** O mAIg lê o certificado do kit. Pela conexão que ele mesmo abriu, apresenta o certificado ao servidor da Maind Tech. O servidor confere a assinatura e procura a contratação cadastrada pela equipe da Maind. Se a encontra, responde que o app está liberado para aquela organização e entrega a licença, com a data do fim do contrato e a carência (decisão 56).

**O que vem depois.** Com o app liberado, o administrador da instância pode instalá-lo, e o owner da organização, liberá-lo para as pessoas da organização (MF-104).

**Por que é assim.** O handshake amarra a liberação ao contrato: nenhum app funciona numa organização sem que a Maind confirme que ela o contratou. E, como é o mAIg quem liga para fora, contratar um app não pede à TI do cliente que abra uma porta de entrada no firewall, o muro de proteção da rede (decisão 6).

> **Analogia:** é como a recepção de um hotel que, antes de entregar a chave, liga para a central de reservas e confere a reserva. **Onde a analogia para:** a recepção confere uma vez, na chegada; no mAIg, a liberação dura enquanto a licença vale, e pode acabar com ela.

**Quando dá errado.** O servidor não encontra a contratação, o certificado é de outra organização ou está vencido: o app não é liberado. O administrador da instância vê que a conferência falhou e com que motivo, em palavras simples, e procura a equipe da Maind. Se o mAIg está sem conexão com a Maind, o handshake espera a conexão voltar, e o mAIg reconecta sozinho (decisão 6).

**O que ainda está em aberto.** O formato do handshake está em "O que ainda falta decidir". Inclui saber se ele se repete de tempos em tempos e como a data do fim do contrato chega ao mAIg.

### Uma contratação por organização

**Em resumo:** cada organização contrata os próprios apps, e o handshake libera o app só para ela, mesmo numa instância que atende outras. Um contrato comercial pode listar várias organizações da mesma empresa (decisão 11).

**Quem é quem.** Numa instância da Maind convivem organizações de empresas diferentes. Numa instância do cliente, as organizações costumam ser da própria empresa. A regra é a mesma nas duas (decisão 9).

**Por que é assim.** A contratação por organização funciona igual na instância da Maind e na do cliente, e uma organização que sai não afeta as outras. Abre-se mão de: uma empresa com muitas organizações recebe uma liberação por organização (decisão 11).

**O que ficou de fora.** A contratação por instância: na instância da Maind, liberar o app para uma organização seria liberá-lo para todas. E a contratação por empresa, que criaria um nível acima da organização que o mAIg não tem (decisão 11).

**Exemplo.** Numa instância da Maind, a Organização A, da empresa X, e a Organização B, da empresa Y, convivem sem se misturar.

1. A empresa X contrata o Horus para a Organização A. A equipe da Maind cadastra a contratação e entrega o kit.
2. O handshake libera o Horus só para a Organização A. A equipe da Maind, no papel de administrador da instância, instala o Horus na instância.
3. Para a Organização B, o Horus está instalado, mas indisponível: ela não o contratou.
4. Meses depois, a empresa Y contrata o Horus. A Organização B recebe o seu kit, e o handshake libera o app para ela. O Horus, que já estava instalado, não é instalado de novo.
5. Mais tarde, a empresa X não renova, e o Horus para na Organização A. Na Organização B, nada muda.

**Uma empresa, duas organizações.** Se a Farma Vida abrir no mAIg uma segunda organização, para a distribuidora dela, e contratar o Horus também para ela, o contrato comercial pode ser um só, listando as duas. Mesmo assim, cada organização recebe o seu kit e a sua liberação, e cada uma tem o seu owner da organização e as suas regras.

### Na infraestrutura da Maind: os mesmos passos, outras mãos

**Em resumo:** com o mAIg hospedado pela Maind, o caminho é o mesmo. Muda só quem faz o papel de administrador da instância.

**Quem faz o quê.** A equipe da Maind fecha a contratação, entrega o kit a si mesma, instala-o e instala o app. O owner da organização continua sendo quem libera e configura o app para a organização dele (decisão 10).

**O que protege cada cliente.** Na instância da Maind, organizações de empresas diferentes dividem a mesma instalação (decisão 9). É o handshake por organização que impede um app contratado por uma empresa de funcionar para outra (decisão 11). E é o certificado de cada organização que impede o pedido de uma de ser tomado por outra (decisão 28). E a equipe da Maind, mesmo no papel de administrador da instância, não vê o registro das organizações, a anotação de tudo o que os apps pedem ao mAIg em nome de cada uma (decisão 12).

### Exemplo completo: a Farma Vida contrata o Horus

**Em resumo:** a Farma Vida, uma rede de 40 farmácias com o mAIg na própria rede, contrata o Horus; o exemplo vai da conversa comercial até o app liberado, pronto para os dois passos da gestão dos apps.

**Quem é quem no exemplo.** Marta é da TI do cliente e faz o papel de administrador da instância. Paulo, diretor de operações, é o owner da organização Farma Vida. Renata, da área de segurança, é a auditora, a pessoa que só lê o registro da organização. Ana, gerente comercial, é a pessoa que usa o app: no Horus, a pessoa que pergunta.

**Exemplo.**

1. **A contratação.** A Farma Vida e a Maind fecham a contratação do Horus para a organização Farma Vida, por um prazo combinado entre as duas.
2. **O cadastro na Maind.** A equipe da Maind cadastra no servidor da Maind Tech o app, a organização e a data do fim do contrato.
3. **O que já estava pronto.** Marta já tinha instalado o mAIg num servidor da Farma Vida e criado a organização e o usuário de Paulo (MF-107). O mAIg já mantém aberta a conexão com a Maind; Marta só liberou no firewall as saídas combinadas: a do endereço da Maind e a do provedor de IA da Farma Vida (MF-108).
4. **O kit.** A equipe da Maind entrega a Marta o kit do Horus, com o certificado digital.
5. **A instalação do kit.** Marta instala o kit no mAIg.
6. **O handshake.** O mAIg apresenta o certificado ao servidor da Maind Tech, pela conexão que ele mesmo abriu. O servidor confere a contratação e libera o Horus para a organização Farma Vida.
7. **A situação à vista.** Paulo abre o console do mAIg, a tela onde configura a organização, e vê o Horus contratado, "em vigor", com a data do fim do contrato (MF-110).
8. **Os dois passos seguintes.** Marta instala o Horus na instância, e Paulo o libera e configura para a organização (MF-104). Depois, Ana faz a primeira pergunta.

**O que não aconteceu.** Ninguém abriu porta de entrada na rede da Farma Vida. A Maind não entrou na instância para liberar nada. E nenhuma senha de banco passou pela Maind: quem cadastra os bancos é Paulo, depois, e as senhas ficam no cofre do mAIg, o lugar trancado de onde nenhum app as tira (MF-105).

### O segundo app: o mesmo caminho, sem aprovação do zero

**Em resumo:** com o mAIg instalado e aprovado, um segundo app da Maind passa pelo mesmo caminho, com o seu próprio kit e o seu próprio contrato, e sem uma nova rodada de aprovação de segurança do zero.

O segundo app deste exemplo é o Maind Doc, um assistente que gera documentos de projetos corporativos com IA. Ele é só um exemplo de segundo app possível: não está definido nem planejado.

**Exemplo.**

1. A Farma Vida contrata o segundo app para a mesma organização. A equipe da Maind cadastra a contratação no servidor da Maind Tech.
2. A equipe da Maind entrega a Marta um kit novo, só desse app.
3. Marta instala o kit, e o handshake libera o segundo app para a organização Farma Vida, pela mesma conexão que o mAIg já mantém aberta.
4. Marta não reabre a análise de segurança: o que a TI do cliente aprovou foi o mAIg, e o segundo app usa os mesmos serviços dele.
5. No console, Paulo passa a ver dois apps contratados, cada um com a sua data de fim.

**Dois contratos, duas vidas.** O contrato do Horus e o do segundo app são independentes. Cada um tem a sua data de fim, o seu aviso, a sua carência e a sua renovação. Se o segundo app não for renovado, o Horus segue como estava, porque cada app tem a própria licença, com a data de fim dele (decisão 56).

### A situação do contrato de cada app

**Em resumo:** para cada app de cada organização, o mAIg mostra ao owner da organização em que pé está o contrato: em vigor, perto do fim, em carência ou parado.

**As quatro situações.**

- **Em vigor:** o contrato vale, e o app funciona.
- **Perto do fim:** o contrato ainda vale, mas o aviso do fim já foi dado.
- **Em carência:** o contrato acabou, e o app continua funcionando, à espera da renovação.
- **Parado:** o app parou, por ação manual da Maind ou por licença vencida. A configuração dele fica guardada (MF-104). É o mesmo estado "parado" da gestão dos apps e da página de status (decisão 70); "encerrar" fica só para a organização (decisões 31 e 78).

**Quem vê o quê.** O owner da organização vê a situação de cada app da organização no console do mAIg (MF-110). A equipe da Maind acompanha os contratos pelo lado dela. A pessoa que usa o app não vê nada diferente enquanto o app funciona. O administrador da instância vê se o app está instalado, em que estado e em que versão, mas não o contrato de cada organização (decisão 12).

**Por que é assim.** O aviso do fim do contrato precisa de um lugar onde o owner da organização o encontre e o confira depois. E a carência só funciona se alguém souber que ela começou. Sem isso, ela vira o "parar sem aviso" que ficou descartado (decisão 13).

### O aviso do fim do contrato

**Em resumo:** antes de o contrato acabar, o mAIg avisa o owner da organização (decisão 13). Com quanta antecedência ainda está em aberto.

**Quem é quem.** Quem avisa é o mAIg. Quem recebe é o owner da organização. O mAIg sabe a data do fim porque ela vem na licença, que chega da Maind no handshake contratual (decisão 56).

**Os três avisos.** O primeiro chega antes do fim, com a antecedência que ainda falta decidir. O segundo chega no dia em que o contrato acaba e a carência começa. O terceiro chega antes de a licença vencer, porque é o vencimento dela que, sem renovação, para o app. Os três aparecem no console do mAIg, junto da situação do contrato (MF-110), e chegam também por e-mail, só com o tipo do aviso e um link, sem dado nenhum (decisão 64). Na onda 1.0 da primeira versão, o destinatário é fixo: os três avisos vão aos owners da organização, e ninguém os desliga nem os redireciona. As preferências de aviso chegam na onda 1.1 (decisão 126).

**Por que é assim.** Parar sem aviso ficou descartado, porque o cliente descobriria pelo app parado (decisão 13). Um aviso só, muito antes do fim, pode se perder entre a área de operações e a de compras. Os avisos seguintes marcam os dois momentos em que o risco de parar aumenta.

**Quando dá errado.** O owner da organização saiu da empresa, ou não abriu o console. O app continua funcionando na carência, e a equipe da Maind, que acompanha os contratos, procura a empresa pelo lado comercial. Se a organização tem outro owner da organização, ele assume; se não tem, o administrador da instância cadastra um novo owner da organização, com aviso e volta em 48 horas (decisão 83, MF-101).

**O que ainda está em aberto.** A antecedência do primeiro aviso, junto com a duração da carência, está em "O que ainda falta decidir".

### A carência e as duas únicas formas de parar

**Em resumo:** o fim do contrato não para o app sozinho. Ele só para por uma ação manual da equipe da Maind ou quando a licença vence sem ser renovada. Até lá, a organização tem uma carência para renovar (decisão 13).

**Quem é quem.**

- **A carência** é o tempo em que o app continua funcionando depois do fim do contrato. É um prazo que vem na licença: vai do fim do contrato até o vencimento da licença, ou até a ação manual, se esta vier antes (decisão 56).
- **A ação manual** é o ato da equipe da Maind de parar um app numa organização. Ela vale só para aquele app e aquela organização (decisão 11) e só acontece em três casos: falta de pagamento depois dos avisos, incidente de segurança ou ordem judicial. Duas pessoas da Maind autorizam, o motivo fica no registro, e o owner da organização e os auditores recebem na hora um aviso de segurança (decisões 85 e 94).
- **O vencimento da licença** é o limite que chega sozinho, sem ninguém agir.

**Por que é assim.** Uma renovação atrasada pela burocracia de compras não derruba a operação do cliente. Abre-se mão de: durante a carência, a Maind entrega uso sem contrato em vigor (decisão 13).

**O que ficou de fora.** Parar o app no dia do fim do contrato, porque o desgaste com o cliente cairia sobre a Maind. E parar sem aviso, porque o cliente descobriria pelo app parado (decisão 13).

> **Analogia:** é como a assinatura de um jornal que continua chegando por algumas semanas depois do vencimento, enquanto o assinante renova. **Onde a analogia para:** o jornal decide sozinho, e sem avisar, quando parar de entregar; no mAIg, o limite é o vencimento da licença, que todos conhecem de antemão, ou um ato explícito da Maind.

**O que acontece quando o app para.** A configuração do app na organização fica guardada até a renovação ou até o owner da organização apagá-la (decisão 14). O registro do que o app pediu fica guardado enquanto ele estiver instalado na instância (decisão 15). Os dois assuntos são da gestão dos apps e do registro e auditoria (MF-104, MF-102).

**Exemplo.**

1. O contrato do Horus da Farma Vida vai acabar, e o mAIg avisa Paulo, com a antecedência combinada.
2. Paulo pede a renovação, mas o pedido de compra emperra na área de compras.
3. O contrato acaba. O console mostra o Horus "em carência", e Paulo recebe o segundo aviso. Ana continua perguntando ao Horus, sem perceber nada.
4. A equipe da Maind não faz a ação manual, porque sabe que a renovação está a caminho.
5. Antes de a licença vencer, Paulo recebe o terceiro aviso. Dessa vez, a compra sai.
6. A renovação é cadastrada na Maind, a licença renovada chega ao mAIg pela ligação, e o Horus volta a "em vigor". Se a compra não saísse, o Horus pararia no vencimento da licença.

**Os casos da ação manual.** Só três: falta de pagamento depois dos avisos, incidente de segurança ou ordem judicial, sempre com duas pessoas da Maind autorizando (decisão 94).

### A renovação: o app segue ou volta como estava

**Em resumo:** renovado o contrato, o app segue funcionando, se estava na carência, ou volta como estava, se tinha parado. Nos dois casos, ninguém refaz nada (decisões 13 e 14).

**Quem é quem.** A renovação comercial é da empresa e da equipe da Maind. A licença renovada vem com ela: é ela que estende o prazo em que o app funciona (decisão 56). O owner da organização não reconfigura nada.

**Como acontece.** A equipe da Maind cadastra a renovação no servidor da Maind Tech. O mAIg recebe a licença renovada pela ligação e confirma a contratação num novo handshake. A situação do contrato volta a "em vigor". Nada se reinstala: o kit e o certificado do app continuam os mesmos (decisão 56).

**Exemplo.**

1. A compra da Farma Vida atrasa demais, a licença vence, e o Horus para. O console mostra "parado".
2. A configuração do Horus fica guardada: as permissões, o banco de vendas que ele lê, a IA que usa e os limites que Paulo definiu (decisão 14).
3. Duas semanas depois, a compra sai, e a Farma Vida renova.
4. A equipe da Maind cadastra a renovação, e o mAIg recebe a licença renovada.
5. O Horus volta como estava. Ana pergunta de novo, e Renata encontra no registro a história de antes e de depois da parada.

**Quando dá errado.** Se Paulo apagou a configuração do Horus enquanto ele estava parado, a renovação traz o app de volta sem ela, e a configuração precisa ser refeita (decisão 14). Apagar a configuração guardada de um app parado só existe a partir da onda 1.1: na onda 1.0, o app parado volta sempre como estava (decisão 106).

### Quando dá errado

**Em resumo:** os casos mais prováveis desta mf e o que acontece em cada um; o atraso na renovação e a licença vencida estão nos tópicos acima.

- **A conferência falha.** A contratação não foi cadastrada, o kit é de outra organização ou o certificado não vale: o app não é liberado, e o administrador da instância vê o motivo (decisão 10).
- **Uma organização tenta usar um app que não contratou.** O app pode estar instalado na instância, mas não foi liberado para ela, e não funciona. O caminho é contratar (decisão 11).
- **O mAIg está sem conexão quando o kit é instalado.** O handshake espera a conexão voltar, e o mAIg reconecta sozinho (decisão 6).
- **Um certificado vaza.** Contê-lo a tempo depende da política de cancelamento do certificado, ainda em aberto.
- **A ação manual atinge o app ou a organização errada.** O app para ali, e a configuração dele fica guardada (decisão 14). Como o ato pede duas pessoas da Maind e o motivo fica no registro, o engano é conferido antes e aparece depois, e a Maind retoma o app (decisão 94).

### O que entra em cada onda

A primeira versão do mAIg sai em duas ondas, a 1.0 e a 1.1, e a segunda versão vem depois (decisões 92 e 95). A tabela diz em que onda chega cada capacidade desta mf, com as decisões que a sustentam. "Não entra" quer dizer que a capacidade não faz parte da primeira versão e não tem versão marcada. Nesta mf, tudo entra na onda 1.0.

| Capacidade | Onda | Decisões | Por quê |
| --- | --- | --- | --- |
| Kit de instalação com o certificado, instalado pelo administrador da instância | onda 1.0 | 10, 82 | É por ele que o mAIg passa a reconhecer o app. |
| As três peças separadas de cada app: a identidade, um certificado curto que se troca sozinho; a licença, com a data do fim do contrato; e a carência, que é um prazo da licença | onda 1.0 | 56 | É o que deixa conter um certificado vazado e parar um app sem contrato. |
| Handshake contratual: o mAIg confere sozinho, com a Maind, que o contrato existe | onda 1.0 | 10, 11, 16 | Sem ele, qualquer cópia do kit ligaria o app. |
| Contratação por organização | onda 1.0 | 11 | Duas organizações da mesma instância não dividem contrato. |
| Um segundo app entra pelo mesmo caminho do primeiro | onda 1.0 | 11 | Regras iguais para todos os apps. |
| Situação do contrato de cada app no console: em vigor, perto do fim, em carência ou parado | onda 1.0 | 13, 56 | Um app não pode parar sem que o owner da organização tenha visto chegar. |
| Aviso do fim do contrato ao owner da organização | onda 1.0 | 13, 126 | O fim do contrato não para o app sozinho, mas precisa ser avisado. |
| O app só para por licença vencida ou por ação manual da Maind, com motivo no registro e aviso de segurança | onda 1.0 | 13, 56, 94 | Uma parada sem anotação seria invisível para a organização. |
| A renovação devolve o app como estava antes | onda 1.0 | 13, 14 | Ninguém refaz a configuração por causa de um atraso. |

## Prova de valor

Prova de valor proposta pelo PO; o dono da Maind ainda não a confirmou.

1. **A liberação só para quem contratou, sem porta de entrada.** Numa instância com duas organizações, a equipe da Maind fecha a contratação de um app para uma só e entrega o kit. O administrador da instância instala o kit, e o handshake libera o app. A TI do cliente confere duas coisas: o app funciona só na organização que o contratou, e nenhuma porta de entrada foi aberta no firewall.
2. **O fim do contrato sem susto.** Numa organização de teste, a equipe da Maind cadastra um contrato que acaba em poucos dias. O owner da organização recebe o aviso, o contrato acaba, e o app segue funcionando na carência. Depois, a renovação é cadastrada, e o app continua como estava, sem nenhuma configuração refeita. Quem confere é o owner da organização, pela situação do contrato no console, e a pessoa que usa o app, que não percebe interrupção.

## Retorno para o negócio

- **Entrar e expandir.** O mesmo caminho serve ao primeiro app e a todos os seguintes, e a venda difícil, a aprovação de segurança, acontece uma vez. Hipótese: um segundo app contratado por um cliente que já tem o mAIg sai sem nova aprovação do zero, o que encurta a venda da expansão.
- **Retenção.** A carência evita que uma renovação atrasada derrube a operação do cliente e vire desgaste com a Maind (decisão 13). Hipótese: menos clientes perdidos por burocracia de compras.
- **Custo de atender.** A equipe da Maind libera apps sem entrar na rede do cliente e sem configurar nada à mão na instância. Hipótese: cada liberação custa pouco tempo de suporte e é igual em todos os clientes.
- **Argumento de venda.** Um certificado curto, que se troca sozinho, e uma licença assinada, conferidos por dentro de uma conexão que o mAIg abre, são fáceis de explicar à TI do cliente (decisão 56). Hipótese: isso ajuda a aprovação de segurança do mAIg.
- **O que se paga por isso.** A carência é uso sem contrato em vigor (decisão 13). E o primeiro app carrega sozinho o custo do mAIg até chegar o segundo (decisão 17).

## O que não inclui

- **Instalar o app na instância e liberá-lo e configurá-lo para a organização:** gestão dos apps (MF-104).
- **O que acontece com a configuração de um app parado e a exclusão dos dados ao desinstalar:** gestão dos apps (MF-104).
- **O registro do que cada app pede e a consulta pelo auditor:** registro e auditoria (MF-102).
- **Criar a organização e o usuário do primeiro owner da organização:** organizações e instâncias (MF-107).
- **Quem é o owner da organização e como ele é trocado:** segurança e permissões (MF-101).
- **A conexão que o mAIg abre para fora e a reconexão:** conexão de dentro para fora (MF-108).
- **A tela onde o owner da organização vê a situação do contrato e os avisos:** console de configuração (MF-110).
- **O preço em reais e a repartição do custo do mAIg entre os apps:** ponto do mapa geral; o mAIg vem embutido no preço dos apps (decisão 17).
- **A cobrança, a nota fiscal e o texto jurídico do contrato:** ficam com a área comercial da Maind, fora do mAIg.
- **Apps de outras empresas e sistemas do próprio cliente:** o mAIg recebe só apps da Maind, por enquanto (decisão 8).
- **O que a tela do app mostra à pessoa quando ele para:** é da parte de fora do app; no Horus, das telas do Horus. A luz de estado e a página de status, que mostram o app parado, são do mAIg (decisão 70, MF-108). A luz de estado entra na onda 1.0, e a página de status, na onda 1.1 (decisão 121).

## Depende de

- `MF-108:Conexão de dentro para fora`. O handshake contratual conversa com o servidor da Maind Tech pela conexão que o mAIg abre para fora. Sem ela, conferir a contratação exigiria abrir uma porta de entrada na rede do cliente.
- `MF-107:Organizações e instâncias`. A contratação é por organização. Sem a organização criada na instância, não há para quem liberar o app.
- **Pré-requisito de negócio: o preço em reais dos apps.** Sem ele, não há trâmite comercial a fechar. É um ponto do mapa geral.
- **Pré-requisito de negócio: um app da Maind pronto para ser contratado.** O primeiro é o Horus, na versão 2.0 dele.

## Ponto de partida no Horus

O mAIg nasceu do middleware do Horus, a peça que ficava entre as telas do Horus, na nuvem da Maind, e os dados da empresa. A nuvem da Maind são os computadores da Maind, acessados pela internet.

- **O certificado e a chave de instalação nasciam com a organização.** No Horus, criar uma organização gerava um certificado digital e uma chave de instalação cifrada, isto é, embaralhada de um jeito que só a ponta certa consegue ler. O certificado era importado no middleware, e as duas pontas confirmavam o handshake. O formato e o ciclo de vida do certificado ficaram para o arquiteto (D-258 do Horus). O mAIg decidiu diferente: há um certificado de identidade de cada app, curto e trocado sozinho (decisão 56), e outro de cada organização, atestado pela Maind quando ela é criada (decisão 28). A chave privada de todos eles nasce no mAIg e nunca sai dele (decisão 86).
- **A conexão se inverteu.** No Horus, isso já foi decidido assim, e vale no mAIg: o mAIg abre a conexão com a Maind e a mantém aberta, o certificado do handshake vale dentro dela, e o Horus deixa de cadastrar o endereço e a porta do middleware de cada organização (decisão 6, D-296 do Horus). Por isso, a parte do fluxo antigo em que o middleware devolvia o próprio endereço, para ser alcançado de fora, não vale para o mAIg.
- **A política do certificado ficou adiada.** No Horus, a política de segurança do certificado, com o formato, a rotação e a revogação, foi dita escolha da organização, e a decisão ficou para depois (P-049 do Horus). O mAIg decidiu diferente: o certificado da organização vale 30 dias, se renova sozinho e só se cancela com duas pessoas da Maind (decisão 44), e o de cada app é curto e trocado sozinho pela ligação (decisão 56). Quanto vale o certificado de cada kit e como ele é cancelado antes do prazo estão no fim desta página.
- **As versões que convivem.** No Horus, a parte do Horus na nuvem funciona com o middleware na versão atual e na anterior, e recusa uma mais velha, com aviso (D-292 do Horus). No mAIg, a recusa com aviso vale para a versão adiada além do prazo (decisão 45). Na contagem, o mAIg decidiu diferente: não há número de versões que convivem, e a regra é uma só, por prazo, para o mAIg e para o módulo de cada app (decisão 109, MF-104).
- **O fim do contrato, a carência e a renovação.** O Horus não tem decisão sobre isto: nas entradas usadas como ponto de partida, não há regra sobre o aviso, a carência ou a renovação, que nasceram no mAIg (decisão 13).

## O que ainda falta decidir

- **Falta o dono da Maind decidir com quanta antecedência o owner da organização é avisado do fim do contrato e quanto dura a carência, que passou a ser um prazo da licença.** *O que está em jogo:* uma antecedência curta pega o cliente de surpresa, e uma carência longa demais alonga o uso sem contrato em vigor (decisões 13 e 56).
- **Falta o arquiteto do mAIg definir, com o dono da Maind, o formato do handshake contratual e da licença, quanto tempo vale o certificado de cada kit e a revogação, que é o cancelamento dele antes do prazo.** *O que está em jogo:* é o que decide se um certificado vazado é contido a tempo. O formato também responde como chegam ao mAIg a licença, a ação manual e as trocas do certificado (decisão 56), e se o certificado do kit é o mesmo com que a parte de fora do app se identifica. No Horus, a política do certificado ficou como escolha da organização, e o assunto foi adiado; isso vale como ponto de partida, e o mAIg ainda confirma (P-049 do Horus). A política do certificado da organização já foi decidida (decisão 44).
- **Falta o arquiteto do mAIg definir o que vem no kit de instalação, além do certificado, e por que caminho ele chega com segurança ao administrador da instância.** *O que está em jogo:* o kit carrega a prova da contratação, e alguém que o interceptasse poderia tentar usá-la. Saber se ele traz também o módulo do app, a parte que roda dentro do mAIg, muda o trabalho de instalar (MF-104).
- **Falta o arquiteto do mAIg definir em que ambientes o mAIg roda e o que a Maind entrega para instalá-lo.** *O que está em jogo:* a TI do cliente precisa saber, antes de contratar, que máquina e que sistema preparar, e o administrador da instância precisa saber o que recebe para instalar o mAIg e cada app (decisão 10).
- **Falta o arquiteto do mAIg definir o que um app declara ao núcleo para ser instalado, que é o contrato de app.** *O que está em jogo:* é o que faz um segundo app entrar pelo mesmo caminho do primeiro, sem trabalho novo no núcleo: os pedidos que o app faz, os bancos e a IA de que precisa e o que ele mostra no console (decisão 11).
- **Falta o arquiteto do mAIg definir como o app declara a lista dos tipos de ato das linhas informadas pelo app.** *O que está em jogo:* o núcleo só aceita o tipo de ato que está na lista declarada na instalação e recusa o resto; sem o formato dessa lista, as linhas informadas pelo app não chegam na onda 1.1 (decisão 104).
- **Também depende, e está tratado em outros lugares:** o preço em reais e a repartição do custo do mAIg entre os apps (mapa geral); como um mAIg novo conversa com um módulo antigo dentro do prazo de adiamento (MF-104).

## Decisões do PO para discutir

Os trechos do texto que vão além das decisões do dono da Maind, sem código de decisão nem do Horus, estão aqui.

- **Decisão:** ao fechar o trâmite, a equipe da Maind cadastra no servidor da Maind Tech o app, a organização e a data do fim do contrato. *Por que:* o handshake só confere a contratação se o servidor a conhecer, e as decisões não dizem como ela chega lá. *Alternativa:* a contratação viajar inteira dentro do certificado, sem cadastro no servidor. *Reabrir se:* o arquiteto do mAIg preferir que o certificado carregue tudo.
- **Decisão:** um kit vale para um app e uma organização. *Por que:* é a leitura mais direta de duas regras: cada app se libera por certificado, e a liberação é por organização (decisões 10 e 11). *Alternativa:* um kit por contrato, valendo para todas as organizações e todos os apps listados nele. *Reabrir se:* empresas com muitas organizações acharem pesado receber um kit para cada uma.
- **Decisão:** o mAIg mostra ao owner da organização a situação do contrato de cada app, em quatro situações: em vigor, perto do fim, em carência e encerrado. *Por que:* o aviso e a carência precisam de um lugar onde se vejam e se confiram depois. *Alternativa:* só o aviso, sem situação permanente à vista. *Reabrir se:* o console ficar carregado demais para o owner da organização.
- **Decisão:** além do aviso antes do fim, o owner da organização recebe um aviso quando a carência começa e outro antes de o certificado vencer. *Por que:* a decisão 13 descarta parar sem aviso, e o vencimento do certificado para o app sozinho. *Alternativa:* só o aviso antes do fim, como diz a decisão 13. *Reabrir se:* os avisos virarem ruído para o owner da organização.
- **Decisão:** os avisos aparecem no console do mAIg; outros canais, como o e-mail, ficam de fora por enquanto. *Por que:* o console é o lugar de trabalho do owner da organização, e as decisões não falam de e-mail. *Alternativa:* aviso também por e-mail. *Reabrir se:* um owner da organização perder um aviso por não abrir o console.
- **Decisão:** o mAIg recebe da Maind, no handshake, a data do fim do contrato. *Por que:* é o mAIg quem avisa o owner da organização, e ele precisa da data para isso. *Alternativa:* a data vir só no certificado, ou o aviso partir da equipe da Maind, fora do mAIg. *Reabrir se:* o formato do handshake indicar outro caminho.
- **Decisão:** renovar o contrato inclui renovar o certificado, e a renovação não pede reconfiguração nenhuma. *Por que:* o certificado vencido para o app, e a configuração fica guardada (decisões 13 e 14). *Alternativa:* certificados de prazo curto, trocados várias vezes dentro de um mesmo contrato. *Reabrir se:* a política de rotação pedir certificados mais curtos que o contrato.
- **Decisão:** só o owner da organização e a equipe da Maind veem a situação do contrato; o administrador da instância e a pessoa que usa o app, não. *Por que:* o contrato é assunto da organização, e o administrador da instância vê só o que é da instância (decisão 12). *Alternativa:* avisar também o administrador da instância, que sente o app parar. *Reabrir se:* a TI do cliente pedir para saber antes.
- **Decisão:** quando o handshake falha, o administrador da instância vê que a conferência falhou e o motivo, em palavras simples, e procura a equipe da Maind. *Por que:* é ele quem instalou o kit e quem precisa saber o que fazer em seguida. *Alternativa:* só a equipe da Maind ver o motivo, pelo lado dela. *Reabrir se:* o motivo da falha revelar ao administrador da instância algo do contrato de uma organização que ele não deveria ver (decisão 12).
- **Decisão:** a cobrança, a nota fiscal e o texto jurídico do contrato ficam fora do mAIg. *Por que:* o mAIg só precisa do resultado do trâmite para liberar o app. *Alternativa:* o mAIg guardar uma cópia do contrato de cada organização. *Reabrir se:* um auditor pedir para ver o contrato no mesmo lugar do registro.
- **Decisão:** o "Depende de" ficou com a conexão e as organizações, como no mapa das dependências (MF-108, MF-107), mais dois pré-requisitos de negócio criados pelo PO: o preço em reais dos apps e um app da Maind pronto para ser contratado. *Por que:* sem as duas mfs, a contratação não acontece, e sem os dois pré-requisitos não há o que contratar. *Alternativa:* acrescentar a segurança e permissões, que dá os papéis, e o console, onde o aviso aparece (MF-101, MF-110). *Reabrir se:* o mapa das dependências for revisto.
- **Decisão:** duas entradas do Horus da lista de partida ficaram de fora do ponto de partida (D-195 do Horus, D-196 do Horus). *Por que:* foram substituídas em parte e descrevem o desenho antigo, com endereço público, chave cadastrada no Horus e bloqueio por endereço e porta, contrário à decisão 6. *Alternativa:* citá-las como história do desenho. *Reabrir se:* o dono da Maind quiser a história do middleware nas mfs.
- **Decisão:** a prova de valor tem duas demonstrações: a liberação só para a organização contratante, sem porta de entrada, e o fim do contrato com carência e renovação sem refazer nada. *Por que:* são os dois resultados que alguém de fora confere sem metas numéricas (decisão 18). *Alternativa:* uma prova só, da liberação. *Reabrir se:* o dono da Maind preferir uma prova mais curta.
- **Decidido pelo dono da Maind em 10/11/2026:** o certificado da organização vale 30 dias e se renova sozinho pela ligação; se a renovação falhar, o atual segue valendo até o fim, com aviso ao owner da organização e à TI do cliente 7 dias antes; cancelá-lo exige a autorização de duas pessoas da Maind, e o ato fica no registro (decisão 44). O ponto em aberto sobre o certificado da organização saiu desta mf, e o da política dos certificados ficou só com o do kit.
- **Decidido pelo dono da Maind em 11/11/2026:** a identidade, a licença e a carência de cada app viram três peças: um certificado curto, emitido pela Maind e trocado sozinho; uma licença assinada, com o fim do contrato e a carência; e a autoridade pública só no endereço da Maind (decisão 56). Reabre em parte duas decisões antigas (decisões 10 e 13): o app para quando a licença vence, e não o certificado, e renovar é trocar a licença. O tópico do certificado foi reescrito, e os avisos, a carência e a renovação passaram a falar da licença; as decisões do PO acima que falam do certificado vencido valem hoje para a licença.
- **Decidido pelo dono da Maind em 11/11/2026:** os avisos chegam também por e-mail, só com o tipo do aviso e um link para o console, sem dado nenhum (decisão 64), e o e-mail sai pelo servidor de e-mail da própria empresa ou, na hospedagem da Maind, pelo serviço de e-mail da Maind (decisão 90). A decisão do PO de deixar o e-mail de fora ficou superada.
- **Decidido pelo dono da Maind em 11/11/2026:** instalar o kit de uma organização entra no registro dela (decisão 82).
- **Decidido pelo dono da Maind em 11/11/2026:** a chave privada de todo certificado do mAIg, inclusive o do kit, nasce no mAIg e nunca sai; a Maind atesta só a chave pública (decisão 86).
- **Decidido pelo dono da Maind em 11/11/2026:** a Maind só para um app à mão em três casos (falta de pagamento depois dos avisos, incidente de segurança ou ordem judicial), com duas pessoas autorizando, o motivo no registro e aviso de segurança ao owner da organização e aos auditores (decisão 94). O ponto em aberto saiu desta mf.
- **Decidido por delegação do dono da Maind em 11/11/2026:** a primeira versão sai em duas ondas, a 1.0 e a 1.1, e a segunda versão vem depois; cada capacidade desta mf tem a onda marcada no tópico "O que entra em cada onda". A regra que resume o recorte: a onda 1.0 liga e para; a onda 1.1 desfaz e encerra (decisão 95).
- **Decidido por delegação do dono da Maind em 11/11/2026:** a linha do registro "informada pelo app" só tem campos fixos: o tipo do ato, de uma lista que o app declara ao ser instalado; o alvo, por um código; a hora; e a pessoa, que o núcleo tira do passe. O núcleo recusa o que foge disso. Chega na onda 1.1 (decisão 104).
- **Decidido por delegação do dono da Maind em 11/11/2026:** a regra de versão única é por prazo, para o mAIg e para o módulo de cada app: a TI do cliente adia a versão nova dentro do prazo e, vencido o prazo, o que ficou velho deixa de atender, com o aviso "Atualização necessária". Com o mAIg vencido, todos os apps recusam a conversa; com o módulo de um app vencido, só aquele app para. A contagem de versões que convivem saiu do texto. Entra na onda 1.0 (decisão 109).
- **Decidido por delegação do dono da Maind em 11/11/2026:** na onda 1.0, cada aviso tem destinatário fixo, aparece sempre no console e vai por e-mail, sem dado nenhum. Os avisos de segurança vão aos owners da organização e ao auditor; a queda de um banco e de uma IA, o limite de gasto, a tarefa marcada que parou e o fim do contrato vão aos owners da organização; o certificado da organização perto de vencer vai aos owners da organização e aos administradores da instância; e os avisos da instância vão a todos os administradores da instância. A lista "o que a organização permite" e as preferências de aviso chegam na onda 1.1 (decisão 126).
