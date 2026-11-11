# MF-110:Configurar tudo num lugar só

> O console do mAIg é o lugar único onde cada papel faz e confere o que lhe cabe: o administrador da instância cuida da instalação, o owner da organização configura os apps, os bancos, a IA e as pessoas, e o auditor lê o registro.

**Também chamada de:** Console de configuração · **Versão do mAIg:** 1ª · **Classe:** essencial · **Situação:** rascunho do PO

## Em uma frase

O console de configuração é a tela do mAIg onde se ajusta e se consulta tudo o que o mAIg faz, para todos os apps, num lugar só, e onde cada papel vê só a parte que lhe cabe.

O mAIg, ou Maind AI Gateway, é a plataforma da Maind que fica entre os produtos da Maind e os dados e a inteligência artificial (IA) da empresa cliente; "gateway" quer dizer portão. Cada produto da Maind entra nele como um **app**, e o primeiro é o Maind Horus, em que as pessoas fazem perguntas sobre os dados da empresa. O **núcleo** é o que vem pronto no mAIg e serve a todo app: a segurança, o registro de tudo o que acontece, o acesso aos bancos de dados e as regras de uso da IA (decisões 3 e 5).

**Por que esta mf existe.** Um dos objetivos do mAIg é dar à empresa cliente o controle num lugar só: quais bancos cada app lê, quais IAs usa, quanto gasta, quem pediu o quê e quando. Sem o console, as regras do núcleo existiriam, mas cada assunto teria o seu lugar, ou cada app traria as suas próprias telas de configuração, e a TI do cliente vigiaria vários lugares. O console não cria regras: é onde as regras das outras mfs são exercidas e consultadas.

## Quem ganha

- **Owner da organização.** A organização é o espaço de um cliente dentro do mAIg, com os seus apps e as suas regras; o owner da organização é quem responde por ela. Ganha um lugar só para pôr os apps para funcionar, sozinho, com o apoio da Maind: libera os apps, liga os bancos e a IA, cuida das pessoas, nomeia o auditor e consulta o registro e o consumo.
- **Administrador da instância.** A instância é cada instalação física do mAIg; o administrador da instância é quem cuida dela. Ganha um lugar para abrir organizações, instalar os apps e acompanhar o estado e as versões, sem planilha nem chamado, e sem nunca ver o que é das organizações.
- **Auditor.** É quem o owner da organização nomeia para conferir o registro. Ganha o registro à mão, no mesmo lugar onde as configurações moram, sem poder mudar nenhuma delas.
- **TI do cliente.** É a equipe de tecnologia da empresa cliente. Ganha a resposta a "o que cada app da Maind lê, usa e gasta" num lugar só. Na infraestrutura do cliente, é ela quem faz o papel de administrador da instância.
- **Equipe da Maind.** Ganha um console igual em todos os clientes, o que simplifica ensinar e dar suporte. Na infraestrutura da Maind, é ela quem faz o papel de administrador da instância.

## A decisão que passa a ser possível

- **O owner da organização passa a poder pôr um app para funcionar na organização sem abrir chamado à Maind:** liga o banco e a IA, libera o app e dá acesso às pessoas.
- **O administrador da instância passa a poder abrir uma organização e instalar um app sem ver nada do que a organização faz.**
- **O auditor passa a poder conferir sem pedir o registro a ninguém.**
- **A dor que some:** a pergunta "onde se configura isso?" a cada app novo. O segundo app se configura no mesmo lugar e do mesmo jeito que o primeiro.

## Como funciona

### O console: um lugar só para configurar e consultar

**Em resumo:** o console é a tela de configuração do mAIg. Tudo o que o núcleo governa se ajusta e se consulta ali, para todos os apps, e cada papel entra com o próprio usuário e vê só a sua parte.

**Quem é quem.**

- **O console** é a tela de configuração de cada instância do mAIg. Quem entra nele encontra a parte da instância ou a parte de uma organização, conforme o papel.
- **Quem entra:** o administrador da instância, o owner da organização e o auditor.
- **Quem não entra:** a pessoa que usa o app, que trabalha só nas telas do próprio app; no Horus, a pessoa que pergunta.
- **A empresa** é a companhia cliente, que assina o contrato. Ela pode ter várias organizações, e cada uma tem a sua parte no console (decisão 11).

**Por que é assim.** Os dados, a IA, a segurança e o registro são do núcleo, e não de cada app (decisões 3 e 5). O que é do núcleo se configura num lugar do núcleo, igual para todos os apps. No Horus, isso já foi decidido assim, e vale no mAIg: os bancos e a IA são configurados na tela de configuração do middleware, e não no Horus (decisões 22 e 67, D-265 do Horus). O middleware é a peça do Horus que deu origem ao mAIg.

> **Analogia:** o console é como a sala da administração de um prédio comercial, onde ficam o quadro de chaves, a lista dos crachás e o livro de visitas. **Onde a analogia para:** no prédio, quem entra na sala vê tudo o que está nela; no console, cada papel vê só a sua parte, e quem cuida da instalação não lê o registro de nenhuma organização.

**Um lugar, e não as regras.** Cada assunto tem a sua mf, que diz a regra. O console é o lugar onde ela se exerce. Por isso este documento aponta, em cada assunto, para a mf dona dele, e não descreve telas: como o console se apresenta é do desenho.

**Por onde se chega.** Na instalação na casa do cliente, o console se abre de dentro da rede da empresa, e quem está fora entra pela VPN, o túnel protegido que liga quem está fora à rede da empresa e que a TI do cliente já mantém. O mAIg não abre porta de entrada nem passa a tela pela Maind (decisões 6 e 26). O endereço do console tem o nome que a TI do cliente escolheu na rede dela e o certificado que ela instalou (decisão 120). Na hospedagem da Maind, o console fica nos servidores da Maind e se abre de qualquer lugar, com login.

### Cada papel vê só a sua parte

**Em resumo:** o console tem uma parte da instância, do administrador da instância, e uma parte de cada organização, do owner da organização e do auditor dela. Ninguém vê a parte de outra organização.

| Papel | O que faz no console | O que não vê nem faz |
|---|---|---|
| Administrador da instância | Cria as organizações e, a partir da onda 1.1, as encerra; cria o usuário do primeiro owner da organização e gere os owners da organização; cadastra e retira outros administradores da instância; instala os kits e os apps; configura e testa o servidor de e-mail; faz e restaura a cópia de segurança; dá o aval às versões novas do mAIg; suspende um app numa emergência; acompanha o estado, as versões e as pendências da instância; lê o registro da instância | O registro das organizações; os bancos e a IA delas; os nomes das pessoas das organizações, fora os dos owners da organização |
| Owner da organização | Libera e configura os apps; configura os bancos, a IA e as pessoas; nomeia o auditor; consulta o registro e o consumo | Nada de outras organizações, nem das que dividem a instância com a dele |
| Auditor | Lê o registro da organização que o nomeou e os avisos que recebe | Não muda nenhuma configuração; nada de outras organizações |
| Pessoa que usa o app | Não entra no console: usa as telas do app | Senhas, chaves, configuração e registro |

**Por que é assim.** Quem cuida da instalação física controla o que roda nela, e cada organização escolhe o que usa (decisão 10). O registro é do owner da organização e do auditor, e nunca do administrador da instância (decisão 12). Duas organizações na mesma instância não enxergam nada uma da outra (decisão 9). Quem é cada papel e o que ele pode fazer são da segurança e permissões; o console só mostra a cada um o que elas permitem (MF-101).

**Em que onda.** O console entra na onda 1.0 da primeira versão, com a parte da instância e a parte de cada organização (decisões 10 e 12). A tela de cada capacidade chega na onda da capacidade: o encerramento de uma organização, o segundo auditor e o auditor de fora, o cockpit de ativação, o acesso de suporte e a lista do que a organização permite chegam na onda 1.1. O que é do próprio console está no tópico "O que entra em cada onda" (decisão 95).

**Exemplo.** A Farma Vida é uma rede de 40 farmácias com o mAIg na própria rede. Ela tem duas organizações na instância: a Farma Vida, das farmácias, e a Farma Vida Distribuição, da distribuidora do grupo. No mesmo dia, três pessoas entram no console.

1. Marta, da TI do cliente, entra como administrador da instância. Vê as duas organizações, os apps instalados e o estado e a versão de cada um. Não encontra o registro de nenhuma das duas.
2. Paulo, diretor de operações, entra como owner da organização Farma Vida. Vê os apps liberados para ela, os bancos, a IA, as pessoas, o consumo e o registro. Não vê nada da Farma Vida Distribuição.
3. Renata, da área de segurança, entra como auditora da Farma Vida. Vê o registro da organização, e nenhum ajuste fica ao alcance dela.

**Quando dá errado.** Renata tenta mudar o limite de gasto de IA do Horus e não consegue: o auditor só lê (decisão 12). Marta procura saber quem perguntou o quê ao Horus e não encontra: o registro não é dela (decisão 12).

### A parte da instância: o administrador da instância

**Em resumo:** na parte da instância, o administrador da instância abre as organizações, gere os owners da organização, instala os kits e os apps e acompanha o estado e as versões. Nunca vê o registro das organizações, mas os atos dele que tocam uma organização ficam anotados no registro dela (decisão 29).

**Quem ocupa o papel.** Na infraestrutura do cliente, é a TI do cliente. Na infraestrutura da Maind, é a equipe da Maind. No Horus, isso já foi decidido assim, e vale no mAIg: na hospedagem da Maind, é a Maind quem cria o usuário com que o owner da organização entra na tela de configuração (decisões 51 e 83, D-271 do Horus).

**O que faz no console, assunto por assunto.**

- **Cria as organizações da instância e, a partir da onda 1.1, as encerra.** As regras de criar, encerrar e manter as organizações separadas são das organizações e instâncias (MF-107). Ao criar uma organização, o mAIg gera a chave dela, e a Maind atesta o certificado próprio dela, sem nunca receber a chave privada (decisões 28 e 86). O encerramento chega inteiro na onda 1.1, com o pedido, a execução e a volta em 30 dias; na onda 1.0, a organização que deixa de usar o mAIg fica com os apps pausados ou parados e com a configuração guardada (decisão 114).
- **Cria o usuário do primeiro owner da organização.** Digita só o e-mail dele, e o mAIg manda o link de primeiro acesso direto para lá, sem que o administrador da instância o veja (decisão 51). Como esse owner da organização define a própria senha é da segurança e permissões (MF-101).
- **Instala o kit de instalação.** É o pacote, com um certificado digital, que a Maind entrega depois de fechada a contratação de um app. O certificado é uma espécie de carteira de identidade digital, que o mAIg usa para conferir a contratação com a Maind (MF-103). Como o kit é de uma organização, a instalação fica anotada no registro dela (decisão 82).
- **Configura e testa o servidor de e-mail da empresa,** por onde saem os links de primeiro acesso, os links de troca de senha e os avisos. Na onda 1.0, o administrador da instância configura o servidor e faz um envio de teste; sem isso, o console não deixa criar organização, e o painel da instância mostra quando um envio falha (decisão 125). Na hospedagem da Maind, o e-mail sai pelo serviço de e-mail da Maind (decisão 90).
- **Instala cada app na instância, uma vez só,** mesmo que várias organizações o usem (MF-104). O mAIg só aceita o módulo assinado pela Maind (decisão 88).
- **Faz a cópia de segurança e a restaura,** com a ferramenta do mAIg. A cópia leva o cofre, o registro de cada organização, o registro da instância e a configuração inteira; só o cache dos painéis fica de fora. A cópia sai cifrada, a restauração devolve a instância como estava na data da cópia, e cada organização só volta com o código de recuperação dela. Cada restauração fica no registro de cada organização e no registro da instância. Entra na onda 1.0 (decisões 65 e 116). O detalhe é das organizações e instâncias (MF-107).
- **Gere os owners da organização.** Cadastra, exclui e substitui os owners da organização, quantos a organização contratar. A troca vale na hora, com aviso aos owners da organização e aos auditores, que por 48 horas podem barrá-la, e então ela se desfaz sozinha (decisões 83 e 84, MF-101).
- **Cuida dos outros administradores da instância.** Um cadastra e retira outro, até três, e o último não pode ser retirado. Cada ato fica no registro da instância e avisa os demais. O administrador da instância entra sempre por usuário e senha e recebe os avisos da instância no e-mail dele. Entra na onda 1.0 (decisão 100, MF-101).
- **Acompanha as instalações, o estado e as versões** dos apps e da própria instância, no painel da instância (decisão 12). O painel mostra o estado, as versões e as pendências da instalação e, de cada organização, só contagens, sem nomes; os únicos nomes que o administrador da instância vê são os dos owners da organização, porque é ele quem os gere. Mostra também a data da última cópia de segurança, o estado da restauração, a data do vencimento do certificado do endereço, a lista do que a instância manda à Maind e a falha de envio de e-mail. Entra na onda 1.0 (decisão 119). O detalhe é das organizações e instâncias (MF-107). É no painel também que o administrador da instância dá o aval às versões novas do mAIg e define a janela de horário em que elas se instalam (decisão 39, MF-107). O aval tem prazo: 30 dias para uma versão comum e 7 para uma correção de segurança (decisão 45).
- **Lê o registro da instância.** É o registro dos atos que não tocam organização nenhuma, como cadastrar e retirar um administrador da instância, configurar e testar o servidor de e-mail, instalar ou trocar o certificado do endereço do mAIg e fazer e restaurar a cópia de segurança. Nasce com a instância, na onda 1.0, fica guardado enquanto a instância existir, e só os administradores da instância o leem (decisões 81 e 102). O que ele guarda é do registro e auditoria (MF-102).
- **Suspende um app na instância inteira, numa emergência,** e o retoma depois. A configuração e o registro ficam guardados, e cada owner da organização é avisado; na hospedagem da Maind, a suspensão pede a autorização de duas pessoas da equipe da Maind (decisão 46, MF-104).

**O que não faz nem vê.** Não vê o registro das organizações: nem quem pediu o quê, nem quando, nem por qual app (decisão 12). Os atos dele que tocam uma organização, como criá-la e instalar ou atualizar um app, ficam anotados no registro dela, e ele só os escreve, sem poder lê-los (decisão 29). Também não configura os bancos e a IA das organizações, que ficam com o owner da organização (decisão 67, D-273 do Horus). No Horus, o painel de quem administra a instalação só enxerga contagens das pessoas das organizações, e não os dados delas (D-261 do Horus). Vale no mAIg: o painel da instância mostra, de cada organização, só contagens, sem nomes, e os únicos nomes que o administrador da instância vê são os dos owners da organização (decisão 119). Abre-se mão de: a TI do cliente não consegue, pelo painel, dizer quem são as pessoas de uma organização.

**Por que é assim.** Nenhum app novo passa a rodar na instância sem passar pelo administrador da instância (decisão 10). Mas o que cada organização faz é dela: se o administrador da instância visse o registro, a equipe da Maind veria, nas instâncias da Maind, o registro de todos os clientes, e o isolamento entre as organizações se quebraria (decisão 12).

**Exemplo.** Marta prepara a organização da Farma Vida.

1. Marta entra no console da instância que ela instalou na rede da Farma Vida. Configura o servidor de e-mail da empresa e faz um envio de teste; sem isso, o console não deixa criar organização (decisão 125).
2. Cria a organização Farma Vida e o usuário de Paulo como owner da organização. A Maind atesta o certificado próprio da Farma Vida, a partir da chave pública que o mAIg gerou (decisões 28 e 86).
3. Recebe da equipe da Maind o kit do Horus e o instala. O mAIg faz o handshake contratual, o aperto de mão digital em que ele se apresenta com o certificado a um servidor da Maind, que confere a contratação e libera o Horus para a organização (decisão 10).
4. Instala o Horus na instância, uma vez só.
5. Daqui em diante, Marta acompanha o estado e a versão do Horus. O que a Farma Vida configura e pergunta não aparece para ela.

**Quando dá errado.** Marta executa por engano o encerramento da organização errada. Os apps, os bancos e a IA dela saem, mas o registro segue legível (decisão 31), e a configuração fica guardada durante os 30 dias da volta. Dentro desse prazo, qualquer owner da organização pede a volta no console, Marta a executa, e a organização volta como estava (decisões 78 e 115). O encerramento e a volta chegam na onda 1.1; na onda 1.0, nenhuma organização é encerrada (decisão 114). O detalhe é das organizações e instâncias (MF-107).

### A parte da organização: o owner da organização

**Em resumo:** na parte da organização, o owner da organização põe os apps para funcionar: libera e configura os apps, liga os bancos e a IA, cuida das pessoas, nomeia o auditor e consulta o registro e o consumo.

**O que faz no console, assunto por assunto.**

- **Os apps.** Libera e configura cada app que a organização contratou e que o administrador da instância instalou: as permissões, os bancos e as IAs que ele usa e os ajustes. Pausa e retoma um app na organização dele, sem apagar nada (decisão 96). Quando um app para, a configuração dele fica guardada, e é o owner da organização quem decide se a apaga (decisões 10 e 14). Retirar um app e apagar a configuração guardada de um app parado chegam na onda 1.1; na onda 1.0, um app só para (decisão 106). As regras são da gestão dos apps (MF-104).
- **Os bancos.** Cadastra a ligação só de leitura com cada banco de dados da organização, o lugar onde ela guarda as informações do dia a dia. A senha do banco vai para o cofre, o lugar trancado do mAIg de onde nenhum app a tira. Diz também quais apps leem cada banco. No cadastro, confere as colunas sensíveis que o núcleo sugere, já marcadas, e marca ou desmarca; marcar ou desmarcar é ato sensível, e a coluna marcada sai sempre mascarada, para todos os apps (decisão 111). As regras são dos bancos da empresa (MF-105).
- **A IA.** Cadastra as chaves dos provedores de IA. O provedor é a empresa que oferece os modelos de IA, os programas que entendem uma pergunta e escrevem a resposta; a chave é a senha de acesso a ele, e é do cliente. Escolhe os modelos que cada app pode usar, escolhe até que camada de dados o pedido de cada app ao provedor pode levar, põe os limites e acompanha o consumo e o custo por app. A governança da IA entra inteira na onda 1.0, e o limite mede dinheiro, vale por app e recomeça a cada mês do calendário (decisão 112). As regras são da governança da IA (MF-106).
- **O teto da resposta.** Sobe, app por app, o teto de linhas da resposta que volta à nuvem, que começa em 200, com as colunas sensíveis mascaradas (decisão 43, MF-109).
- **O limite de pedidos.** Ajusta quantos pedidos uma pessoa ou um app faz num período, a partir de um valor padrão; acima dele, o núcleo recusa (decisão 89, MF-109).
- **O painel de alertas.** É a tela que reúne os avisos de segurança: o volume perto do limite de pedidos, as trocas de owner da organização, as suspensões e os atos sensíveis. O owner da organização e os auditores o veem (decisões 85 e 89). Entra na onda 1.0, e não se confunde com o cockpit de ativação, que é outra tela e chega na onda 1.1 (decisão 72). A lista dos atos sensíveis segue a onda de cada capacidade: marcar ou desmarcar uma coluna sensível entra na lista já na onda 1.0 (decisão 111); baixar a cópia do registro e liberar uma saída só são atos sensíveis a partir da onda 1.1, quando passam a existir (decisão 95).
- **As saídas além da resposta.** Libera, app por app, a consulta feita ao banco, para a pessoa ver a origem do número, e a planilha, que vai direto do mAIg ao navegador. Liberar é ato sensível (decisão 74, MF-109). As duas saídas chegam na onda 1.1; na onda 1.0, só a resposta pronta sai do mAIg (decisão 95).
- **As pessoas.** Cadastra as pessoas que usam os apps e dá acesso a elas. O cadastro e o login ficam no núcleo do mAIg, para todos os apps (decisão 23, MF-101). Na onda 1.0, cadastra uma a uma; o cadastro de várias de uma vez, com uma lista que ele sobe no console, chega na onda 1.1 (decisão 101). Não vê nem define a senha de ninguém: cada pessoa pede o próprio link de troca de senha na tela de entrada (decisão 99). Os owners da organização, ele não cadastra: quem os gere é o administrador da instância (decisão 83). Ao excluir uma pessoa, o owner da organização tira o acesso dela, e as linhas do registro em nome dela seguem, com o nome, até a desinstalação do app (decisão 27).
- **Os jeitos de entrar.** Na primeira versão, as pessoas entram por usuário e senha ou pela conta Google (decisão 16). Os dois jeitos entram na onda 1.0: cada organização nasce só com usuário e senha ligados, e o owner da organização liga o Google se quiser (decisão 98). No Horus, isso já foi decidido assim, e vale no mAIg: o owner da organização liga ou desliga cada jeito de entrar, e mudar os jeitos de entrar é ato sensível (decisões 32 e 85, D-291 do Horus). O owner da organização e o administrador da instância entram no console sempre por usuário e senha, mesmo com o login da empresa ligado (decisão 24). As regras do login são da segurança e permissões (MF-101).
- **O cockpit de ativação.** Chega na onda 1.1 (decisão 95). Com ele, o owner da organização vê, numa olhada só, as pendências de ativação da organização e de cada app, como "falta um banco" ou "falta a IA", com o passo que resolve cada uma. Na onda 1.0, a tela de cada app, no console, diz o que falta a esse app. Nas duas ondas, o mAIg marca a organização e os apps como prontos sozinho (decisão 72, MF-107).
- **Os auditores.** Na onda 1.0, nomeia um auditor só, de dentro da empresa e sem data de vencimento. Na onda 1.1, nomeia até dois, e um pode ser de fora da empresa, com um acesso que vence na data que o owner da organização define (decisões 12 e 79). O auditor de fora chega ao console da casa do cliente pela VPN que a TI do cliente concede, e o console avisa o owner da organização disso ao cadastrá-lo (decisões 97 e 127). O owner da organização não nomeia a si mesmo auditor (decisão 96).
- **O que a organização permite.** Chega na onda 1.1. Diz, numa lista de configurações, quais funcionalidades a organização permite e para quais papéis. Um exemplo: quais papéis podem receber avisos por e-mail. Quem é de um papel permitido escolhe, nas próprias preferências, se quer ou não receber; quem é de um papel não permitido nem vê a opção e não recebe (decisão 64). Os avisos de segurança ficam fora dessa lista e chegam sempre: a troca de um owner da organização, a suspensão de um app e os atos sensíveis enviados aos auditores (decisão 85). Na onda 1.0, não há lista nem preferências: cada aviso tem destinatário fixo, aparece sempre no console e vai por e-mail, sem dado nenhum. Os avisos de segurança vão aos owners da organização e ao auditor; a queda de um banco e de uma IA, o limite de gasto, a tarefa marcada que parou e o fim do contrato vão aos owners da organização (decisão 126).
- **O registro.** Consulta o registro da organização, o log: a anotação de cada pedido dos apps, com o que leram, em nome de quem e quando (MF-102). Baixar a cópia assinada do registro chega na onda 1.1 (decisão 95).
- **O fim de um contrato.** É ele quem é avisado de que um contrato está para acabar (decisão 13). Na onda 1.0, esse aviso vai aos owners da organização, no console e por e-mail (decisão 126). A antecedência do aviso é da contratação dos apps (MF-103).

**Por que é assim.** Cada organização escolhe o que usa, e quem escolhe é alguém dela (decisão 10). No Horus, isso já foi decidido assim, e vale no mAIg: em qualquer hospedagem, quem configura os bancos e a IA é o owner da organização, e a equipe da Maind só dá suporte (decisões 67 e 68, D-273 do Horus). Assim, a equipe da Maind não precisa conhecer, por rotina, as senhas dos bancos de cada cliente.

**O que se abre mão.** No Horus, isso já foi decidido assim, e vale no mAIg: o preço dessa escolha é que o owner da organização precisa saber configurar um banco e uma IA, com o apoio da Maind (decisão 67, D-273 do Horus). Hipótese: com a documentação e o suporte, ele consegue fazer isso sozinho.

**Exemplo.** O primeiro dia de Paulo no console.

1. Paulo abre o link de primeiro acesso, que chegou direto ao e-mail dele, e define a própria senha (decisão 51, MF-101).
2. Cadastra a ligação só de leitura com o banco de vendas da Farma Vida. A senha vai para o cofre.
3. Cadastra a chave do provedor de IA da Farma Vida, escolhe os modelos permitidos ao Horus e põe um limite de gasto.
4. Libera o Horus para a organização e permite que ele leia o banco de vendas.
5. Dá acesso a Ana, gerente comercial, a pessoa que usa o app.
6. Nomeia Renata auditora da organização.
7. Ana já pode perguntar ao Horus. No fim do mês, Paulo vê no console quanto o Horus gastou de IA.

**Quando dá errado.**

- **Paulo apaga a configuração de um app parado.** Uma renovação depois disso não traz o app de volta como estava: a configuração precisa ser refeita (decisão 14). Apagar a configuração guardada só existe a partir da onda 1.1 (decisão 106).
- **Paulo tira do Horus, sem querer, a permissão de ler o banco de vendas.** O núcleo passa a recusar os pedidos do Horus a esse banco, e cada recusa fica no registro (decisão 5). Paulo devolve a permissão no console.
- **A organização ou um app não fica pronto.** A organização fica ativa, na primeira vez, com o certificado e um owner da organização com acesso, e cada app tem as condições dele (decisão 72, MF-107). Na onda 1.0, a tela de cada app, no console, diz o que falta; a partir da onda 1.1, o cockpit de ativação mostra tudo o que falta numa tela só, com o passo que resolve cada pendência (decisão 95). A condição do owner da organização com acesso vale só para a primeira ativação: a organização que já está ativa continua ativa quando fica sem owner da organização com acesso, e o administrador da instância resolve pela troca do owner da organização (decisões 72 e 83).

### O auditor no console

**Em resumo:** o auditor entra no console para ler o registro da organização que o nomeou. Só lê: não muda nenhuma configuração.

**O que faz.** Consulta o registro da organização: o que cada app pediu, em nome de quem, que banco leu, quanto de IA usou e quando. Lê também os avisos que recebe e, a partir da onda 1.1, baixa a cópia assinada do registro (decisão 96). O que o registro guarda e como se consulta é do registro e auditoria (MF-102).

**O que não faz nem vê.** Não muda nenhuma configuração: nem um app, nem um banco, nem uma IA, nem uma pessoa. Não vê o registro de outras organizações (decisão 12).

**Por que no console.** O registro é do núcleo, e o console é o lugar único onde o que o núcleo guarda se consulta. É a separação de funções: quem configura não é quem confere, e a área de segurança do cliente confere tudo sem poder alterar nada (decisão 12).

**Exemplo.** Renata confere a semana do Horus.

1. Renata entra no console com o usuário de auditora.
2. Abre o registro da Farma Vida e vê os pedidos do Horus: quais bancos leu, qual IA usou, em nome de quem e quando.
3. Encontra pedidos recusados ao banco de pessoal, que Paulo nunca liberou ao Horus.
4. Quer saber também se Paulo mudou alguma permissão do Horus naquela semana, e encontra a resposta no mesmo registro.

**Os atos de quem configura.** Os atos do owner da organização e do auditor no console também entram no registro: as mudanças de configuração, como liberar um app ou trocar uma permissão, a nomeação do auditor, as entradas e as consultas ao próprio registro (decisão 96). É por isso que o passo 4 tem resposta. O detalhe é do registro e auditoria (MF-102).

### O que fica fora do console

**Em resumo:** o console cuida do que o núcleo governa. O que é próprio de cada app fica no app, e a pessoa que usa o app nunca precisa entrar no console.

**O que fica de fora, e onde mora.**

- **A configuração própria de cada app.** O que é só do app, como as regras internas dele e o que cada pessoa vê nas telas dele, fica no próprio app. Um agendamento de relatório no Horus, por exemplo, nasce no Horus; o passe de agendamento, em nome de quem criou a tarefa, e a conferência a cada rodada são do mAIg (decisão 42).
- **O trabalho da pessoa que usa o app.** Ela usa as telas do app, e não o console.
- **Instalar o próprio mAIg nos servidores e liberar a saída da rede.** Isso vem antes de o console existir, e é das organizações e instâncias e da conexão de dentro para fora (MF-107, MF-108). Escolher o nome do endereço do mAIg na rede e instalar o certificado desse endereço também é da instalação, feita pela TI do cliente; o console só mostra, no painel da instância, a data em que o certificado vence (decisão 120).
- **A negociação e o preço.** São do trâmite comercial entre a Maind e a empresa, fora do mAIg.

**Por que é assim.** O console reúne o que é comum a todos os apps. Se cada app pusesse nele as suas telas, o console viraria um pedaço de cada app, e a fronteira entre o mAIg e os apps se apagaria.

**O que se abre mão.** O owner da organização trabalha em dois lugares: no console, para o que é do núcleo, e no app, para o que é do app. No Horus, isso já foi decidido assim, e vale no mAIg: o owner da organização usa o Horus e a tela de configuração do middleware, com uma entrada para configurar e outra para usar (decisão 55, D-261 do Horus).

**Exemplo.** Ana, gerente comercial, quer um relatório de vendas toda segunda-feira.

1. Ana nunca entra no console. Entra no Horus e cria o agendamento ali, porque a tarefa nasce no Horus. O mAIg emite um passe de agendamento só dessa tarefa, em nome de Ana, e confere a cada segunda-feira se ela ainda tem acesso e permissão (decisão 42).
2. O limite de gasto de IA que vale para esse relatório é o que Paulo pôs no console para o Horus.
3. Para mudar o limite, Paulo vai ao console; para mudar o dia do relatório, Ana vai ao Horus.

**Quem cadastra as pessoas.** As pessoas que usam os apps são cadastradas no console, porque o cadastro delas é do núcleo (decisão 23, MF-101). Só o owner da organização cadastra as pessoas, direto no console; não há convite de dentro dos apps. Quem quer chamar um colega pede ao owner da organização por fora (decisão 77).

### O mesmo console nas duas hospedagens

**Em resumo:** a instância pode rodar na infraestrutura do cliente ou na da Maind, e o console é o mesmo nas duas. Muda quem faz o papel de administrador da instância e onde ficam as senhas.

**As duas hospedagens.** Hospedar é dar lugar para um sistema rodar. Na infraestrutura do cliente, a instância roda nas máquinas da empresa, e a TI do cliente faz o papel de administrador da instância. Na infraestrutura da Maind, a empresa não instala nada, e a equipe da Maind faz esse papel (decisão 9).

**O que não muda.** O owner da organização configura os bancos e a IA do mesmo jeito, no mesmo console. No Horus, o owner da organização acessa a mesma tela de configuração nas duas hospedagens, e a diferença entre elas é só o local físico (D-271 do Horus). Vale no mAIg: o console é o mesmo programa, com as mesmas telas, na casa do cliente e na hospedagem da Maind, desde a onda 1.0, e nenhuma das duas hospedagens tem tela só dela (decisão 96). Mas, no mAIg, a diferença entre as hospedagens vai além do local físico, como mostra o parágrafo seguinte.

**O que muda.** Na infraestrutura da Maind, o banco aceita conexão só do endereço fixo da Maind, com a conversa cifrada e o usuário que só lê (decisão 91). As senhas desses clientes ficam no cofre da instância da Maind, cifrado com a chave de cada organização, que a equipe da Maind não alcança (decisão 57). O console se abre de qualquer lugar, com login, e não só de dentro da rede (decisões 26 e 48). A versão nova do mAIg se instala sozinha, na janela que a equipe da Maind define, com aviso antes (decisões 39 e 47). Suspender um app pede duas pessoas da equipe da Maind (decisão 46), a cópia de segurança é feita pela Maind (decisão 65), e o e-mail sai pelo serviço de e-mail da Maind (decisão 90). No Horus, quem opera a instalação da Maind segue podendo, tecnicamente, alcançar as senhas guardadas nela, e por isso a promessa de que a Maind não vê as senhas só vale por inteiro com a instalação na casa do cliente (D-273 do Horus). O mAIg decidiu diferente: o cofre e o registro ficam cifrados com a chave da organização, e o risco aceito é o que estiver em uso com a máquina ligada (decisão 57).

**Exemplo.** E se a Farma Vida não quisesse instalar nada.

1. A Farma Vida usa uma instância da Maind, onde convivem organizações de outras empresas.
2. A equipe da Maind, no papel de administrador da instância, cria a organização Farma Vida e o usuário de Paulo, e instala o Horus.
3. Paulo entra no mesmo console e configura o banco e a IA como faria na própria rede. A TI da Farma Vida libera o banco só para o endereço fixo da Maind (decisão 91).
4. Renata lê o registro da Farma Vida no console. A equipe da Maind vê o estado e a versão do Horus, mas não o registro (decisão 12).

**Por onde se chega.** Na hospedagem da Maind, o console fica nos servidores da Maind, e Paulo, Renata e a equipe da Maind o abrem de qualquer lugar, com login (decisão 26). Quem tem o mAIg na própria rede o abre de dentro dela, ou pela VPN da empresa.

### O suporte da equipe da Maind

**Em resumo:** a equipe da Maind ajuda o owner da organização a configurar, antes e depois da venda, mas não configura no lugar dele.

**Como funciona.** O owner da organização faz cada configuração no console. A equipe da Maind explica, orienta e tira dúvidas. No Horus, isso já foi decidido assim, e vale no mAIg: a equipe da Maind dá suporte técnico, antes e depois da venda, mas não configura pelo owner da organização (decisões 67 e 68, D-273 do Horus).

**Por que é assim.** No Horus, isso já foi decidido assim, e vale no mAIg: a responsabilidade é a mesma nas duas hospedagens, e a equipe da Maind deixa de conhecer, por rotina, as senhas dos bancos de cada cliente (decisões 57 e 67, D-273 do Horus).

**Exemplo.** Paulo não sabe que modelo de IA escolher para o Horus.

1. Paulo chama a equipe da Maind.
2. A equipe explica o que cada modelo faz e quanto tende a custar.
3. Paulo escolhe e grava a escolha no console.
4. Ninguém da Maind mexeu na parte da organização.

**O acesso de suporte.** Chega na onda 1.1 (decisão 92). Quando a explicação não basta, o owner da organização liga no console um acesso para a equipe da Maind. Ele vale por um tempo curto, como até o fim do dia, e mostra só a configuração da organização, nunca o registro nem as senhas. Liberar o acesso é um ato sensível: fica no registro e avisa o auditor (decisões 54 e 68). É o owner da organização quem decide quando a Maind olha, pela fé pública que ele tem dentro da organização (decisão 67). Na casa do cliente, a pessoa da Maind chega ao console pela VPN que a TI do cliente concede, e o console avisa o owner da organização disso ao ligar o acesso. Na onda 1.0, a equipe da Maind não entra no console da casa do cliente: quem mostra a tela é o owner da organização ou a TI do cliente (decisão 127). Abre-se mão de: enquanto o acesso dura, a equipe da Maind vê a configuração da organização; a TI do cliente precisa dar VPN a uma pessoa de fora; e, na onda 1.0, o suporte é mais lento.

**Quando dá errado.** Um cadastro de banco não funciona, e a equipe da Maind precisaria ver o que Paulo vê para achar o erro. Na onda 1.0, é Paulo quem mostra a tela a Rafael, da equipe da Maind (decisão 127). A partir da onda 1.1, Paulo liga o acesso de suporte até o fim do dia, e o console avisa que Rafael precisa da VPN da Farma Vida, que Marta concede. Rafael vê a configuração do banco, sem a senha, e aponta o endereço errado. Renata recebe o aviso de que o acesso foi liberado, e à noite ele se fecha sozinho (decisão 68).

### Quando dá errado

**Em resumo:** os casos mais prováveis desta parte, com o que a pessoa vê e o que o mAIg faz; os casos de cada papel estão nos tópicos acima.

- **Um owner da organização sai da empresa ou fica fora por um tempo.** Os outros owners da organização seguem configurando a parte dela. Se ela só tinha um, o administrador da instância cadastra um novo owner da organização, com aviso e volta em 48 horas (decisão 83, MF-101).
- **Quem está fora do escritório não tem a VPN da empresa.** Não chega ao console de uma instalação na casa do cliente, e a TI do cliente precisa lhe dar a VPN (decisão 26).
- **A instância fica fora do ar.** O console, que é a tela da instância, fica fora junto, e ninguém configura nada até ela voltar. Nas telas dos apps, a pessoa vê a luz de estado em vermelho e um aviso próprio, e não um erro, desde a onda 1.0 (decisão 121). No Horus, cada organização tem uma página de status do próprio app, que abre sem login e diz desde quando a ligação está fora (D-283 do Horus). O mAIg decidiu diferente: a página de status é do mAIg, igual para todos os apps, mostra a quem é de uma organização só os apps dela, pede o login do mAIg e chega na onda 1.1 (decisões 70 e 121). A página e a tela de entrada ficam no próprio mAIg: servem ao caso em que só a ligação com a Maind cai, e ficam fora junto quando a instância inteira para. O detalhe é da conexão de dentro para fora (MF-108).
- **Alguém tenta fazer o que o papel não permite.** O console não deixa: o auditor não muda configuração, o administrador da instância não vê o registro, e o owner da organização não vê outra organização (decisões 9 e 12).
- **Uma pessoa esquece a senha.** Pede o próprio link de troca de senha na tela de entrada, de uso único, que vai direto ao e-mail do cadastro. Vale para todos os papéis, e ninguém vê nem define a senha de outra pessoa (decisão 99, MF-101).
- **Nenhum administrador da instância consegue entrar.** Vale o procedimento da instalação, feito na máquina do mAIg, com o uso anotado no registro da instância (decisão 100, MF-101).
- **Um envio de e-mail falha.** O painel da instância mostra a falha ao administrador da instância, que cuida do servidor de e-mail (decisão 125).
- **O certificado do endereço do mAIg vence sem ser trocado.** Os navegadores recusam o endereço, e ninguém entra no console. Para isso não acontecer, o mAIg avisa os administradores da instância antes do vencimento, e o painel da instância mostra a data (decisão 120).

### A primeira e a segunda versão do console

**Em resumo:** a primeira versão do console sai em duas ondas, a 1.0 e a 1.1, e traz tudo o que a versão 2.0 do Horus usa. A segunda versão acrescenta os servidores MCP e o login da empresa.

**Na primeira versão.** A parte da instância, com as organizações, os kits, os apps, o estado e as versões. A parte da organização, com os apps, os bancos, a IA, as pessoas, os jeitos de entrar por usuário e senha e pelo Google, o auditor e o registro (decisão 16).

**A primeira versão em duas ondas.** A primeira versão sai em duas ondas, a 1.0 e a 1.1, e a segunda versão vem depois. A onda 1.0 do console traz o que o primeiro app, o Horus da versão 2.0, precisa para sair, inclusive a gestão dos owners da organização, o servidor de e-mail configurado e testado, um auditor de dentro da empresa, o limite de pedidos, o painel de alertas e os avisos com destinatário fixo. A onda 1.1 traz o resto da governança: o cockpit de ativação; o segundo auditor e o auditor de fora; a página de status; a cópia assinada do registro; o acesso de suporte; a planilha e a consulta devolvida; as linhas informadas pelo app, que só têm campos fixos (decisão 104); o cadastro das pessoas em lote; retirar um app, apagar a configuração guardada e desinstalar; o encerramento de uma organização e a volta; a lista do que a organização permite, com as preferências de aviso; e o roteiro de saída do cliente, que não tem gesto próprio e usa os gestos que já existem (decisão 118). A regra que resume o recorte: a onda 1.0 liga e para; a onda 1.1 desfaz e encerra (decisões 92 e 95). A estimativa item por item do arquiteto do mAIg continua depois do fechamento da documentação, e não o segura (decisão 92).

**Na segunda versão, junto com a versão 2.1 do Horus.** Entram dois assuntos (decisão 16).

- **Os servidores MCP.** MCP é um padrão que dá à IA ferramentas extras, e um servidor MCP é o programa da empresa que as oferece, como um que consulta o estoque. No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: só o owner da organização cadastra os servidores MCP, na tela de configuração, como os bancos e a IA (D-287 do Horus). As regras são dos servidores MCP (MF-111).
- **O login da empresa.** É a entrada com o sistema de identidade que a empresa já usa nos sistemas dela. No Horus, isso já foi decidido assim, e vale no mAIg: ele entra como mais um jeito de entrar, no mesmo lugar onde o owner da organização liga e desliga os outros (decisões 40 e 85, D-291 do Horus). As regras são do login da empresa (MF-112).

### O que entra em cada onda

A primeira versão do mAIg sai em duas ondas, a 1.0 e a 1.1, e a segunda versão vem depois (decisões 92 e 95). A tabela diz em que onda chega cada capacidade desta mf, com as decisões que a sustentam. "Não entra" quer dizer que a capacidade não faz parte da primeira versão e não tem versão marcada. As telas de cada capacidade das outras mfs seguem a onda da capacidade, e aqui ficam só as capacidades que são do próprio console. A regra da rede e da VPN vale na casa do cliente; na hospedagem da Maind, o console se abre de qualquer lugar, com login (decisões 26 e 48).

| Capacidade | Onda | Decisões | Por quê |
| --- | --- | --- | --- |
| Console único, com a parte da instância e a parte de cada organização; cada papel vê só a sua | onda 1.0 | 10, 12, 92 | É onde tudo se configura; sem console, nada entra em uso. |
| O console só abre de dentro da rede da empresa ou pela VPN | onda 1.0 | 26 | A tela que guarda a chave de tudo não fica exposta à internet. |
| O console é o mesmo programa, com as mesmas telas, na casa do cliente e na hospedagem da Maind | onda 1.0 | 96 | A infraestrutura do mAIg é a mesma nos dois lugares, e nenhuma hospedagem tem tela só dela. |
| Só o owner da organização configura a organização; o auditor entra no console só para ler o registro e os avisos que recebe | onda 1.0 | 67, 96 | Quem confere não configura, e quem configura é conferido. |
| O administrador da instância configura e testa o servidor de e-mail da empresa; sem o teste, o console não deixa criar organização | onda 1.0 | 90, 125 | O link de primeiro acesso e os avisos de segurança saem por ele. |
| Avisos sempre no console e por e-mail sem dado, com destinatário fixo: os de segurança e os de quem resolve | onda 1.0 | 64, 71, 85, 126 | Os freios da onda 1.0 dependem de o aviso chegar. |
| A lista "o que a organização permite" e as preferências de aviso de cada pessoa | onda 1.1 | 64, 92, 126 | Escolher quem recebe o quê é conforto; o padrão fixo já cobre o essencial. |
| Acesso de suporte da Maind, por tempo limitado e só à configuração, pela VPN que a TI concede | onda 1.1 | 68, 92, 127 | Na onda 1.0, a equipe da Maind não entra no console: quem mostra a tela é o owner da organização ou a TI. |

## Prova de valor

Prova de valor proposta pelo PO; o dono da Maind ainda não a confirmou.

1. **Uma organização nova configurada sem chamado.** Marta cria a organização e o usuário de Paulo e instala o Horus. Paulo, sozinho no console, com o suporte da Maind só para tirar dúvidas, cadastra o banco, a chave de IA, os modelos e o limite, libera o Horus, dá acesso a Ana e nomeia Renata. Ana faz a primeira pergunta e recebe a resposta. Quem confere é a TI do cliente: Marta atesta que não configurou nada da organização, e Renata encontra no registro a primeira pergunta de Ana.
2. **Cada papel vê só a sua parte.** Diante da área de segurança do cliente, Marta, Paulo e Renata entram no console, um depois do outro. Marta vê o estado e a versão do Horus, mas não o registro. Paulo vê a organização dele, e não a outra organização da instância. Renata vê o registro e não consegue mudar nenhuma configuração.

## Retorno para o negócio

- **Entrar.** O "controle num lugar só" deixa de ser promessa e vira um lugar que a TI do cliente vê na avaliação de segurança. É um argumento concreto na primeira venda.
- **Expandir.** O segundo app se configura no mesmo console, pelo mesmo owner da organização, do mesmo jeito que o primeiro. Não há um lugar novo a aprender a cada app.
- **Custo de atender.** O owner da organização configura sozinho, e a equipe da Maind só orienta. Hipótese: com a documentação e o suporte, o owner da organização dá conta sem que o suporte vire o caminho de sempre; no Horus, a mesma hipótese ficou a validar (D-273 do Horus).
- **Um console só.** O console é o mesmo nas duas hospedagens e para todos os apps: uma peça a construir, ensinar e manter.

## O que não inclui

- **As regras de cada assunto.** O console é o lugar; a regra é da mf dona: os papéis e as permissões (MF-101), o registro (MF-102), a contratação e o certificado (MF-103), instalar, pausar e retirar os apps (MF-104), os bancos (MF-105), a IA (MF-106), as organizações e o acompanhamento da instância (MF-107), a conexão e o estado dela (MF-108), a execução dos módulos (MF-109), os servidores MCP (MF-111) e o login da empresa (MF-112).
- **A configuração própria de cada app.** Fica no app; no Horus, nas telas do Horus.
- **As telas do app para a pessoa que usa o app.** São do app.
- **Instalar o próprio mAIg e liberar a rede.** São das organizações e instâncias e da conexão de dentro para fora (MF-107, MF-108).
- **A negociação, o contrato e o preço.** São do trâmite comercial, fora do mAIg.
- **O desenho das telas.** Como o console se apresenta fica para o desenho, depois que as regras de cada mf fecharem.

## Depende de

- `MF-101:Segurança e permissões`: quem entra no console e o que cada papel vê nele são os papéis e as permissões dessa mf. O console só mostra a cada um o que ela permite.
- `MF-107:Organizações e instâncias`: o console se divide em uma parte da instância e uma parte por organização. Sem instâncias e organizações, não há essas partes nem quem crie as organizações.

## Ponto de partida no Horus

- No Horus, isso já foi decidido assim, e vale no mAIg: o middleware tem uma base de configuração, com as pessoas e os detalhes da organização, e uma tela de configuração; as configurações de autenticação ficam nele (decisões 23 e 40, D-258 do Horus). Que o owner da organização e o administrador da instância entrem sempre por usuário e senha o dono da Maind confirmou em 09/11/2026 (decisão 24).
- No Horus, com esse usuário, o owner da organização cadastra outros owners da organização, no máximo mais dois, ligados ao login da empresa (D-258 do Horus). O dono da Maind confirmou o limite de três owners da organização em 09/11/2026, mas com os três entrando por usuário e senha (decisão 25). Depois, o mAIg decidiu diferente: o limite passou a ser o número de assentos, e quem cadastra os owners da organização passou a ser o administrador da instância (decisões 83 e 84).
- No Horus, isso já foi decidido assim, e vale no mAIg: em qualquer hospedagem, os bancos e a IA são configurados na tela de configuração do middleware, e não no Horus (decisões 22 e 67, D-265 do Horus).
- No Horus, isso já foi decidido assim, e vale no mAIg: em qualquer hospedagem, quem configura os bancos e a IA é o owner da organização, e a equipe da Maind dá suporte sem configurar por ele (decisões 67 e 68, D-273 do Horus).
- No Horus, a tela de configuração é a mesma nas duas hospedagens, o owner da organização a acessa nas duas, e na hospedagem da Maind é a Maind quem cria o usuário dele (D-271 do Horus). Que, na hospedagem da Maind, é a equipe da Maind quem cria o usuário do owner da organização vale no mAIg (decisão 83). A mesma tela também vale no mAIg: o console é o mesmo programa, com as mesmas telas, nas duas hospedagens (decisão 96).
- No Horus, o owner da organização cadastra e gere as pessoas pela tela de configuração, os dados delas ficam no middleware, fora da nuvem da Maind, e o painel da instância só enxerga contagens (D-261 do Horus). Que o owner da organização cadastra as pessoas no console e que elas ficam no núcleo vale no mAIg (decisões 23 e 77). Que o painel da instância só enxerga contagens também vale no mAIg: de cada organização, só contagens, sem nomes, fora os nomes dos owners da organização (decisão 119).
- No Horus, entre os papéis da organização, só o owner da organização usa a tela de configuração, e o convite de uma pessoa nascia no Horus e era aprovado por ele ali (D-262 do Horus). No mAIg, só o owner da organização configura a organização, e o auditor entra no console só para ler o registro e os avisos que recebe (decisão 96). O convite, o mAIg decidiu diferente: não há convite de dentro dos apps, e o owner da organização cadastra as pessoas direto no console (decisão 77).
- No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: só o owner da organização cadastra e gere os servidores MCP, na tela de configuração, como os bancos e a IA, na versão 2.1 (D-287 do Horus).
- No Horus, isso já foi decidido assim, e vale no mAIg: a tela de configuração inclui definir como as pessoas da organização entram; na versão 2.0, usuário e senha e Google, que o owner da organização liga ou desliga, e na 2.1 o login da empresa, como mais um jeito no mesmo lugar (decisões 16 e 85, D-291 do Horus).

## O que ainda falta decidir

- **Também depende, e está explicado em outras mfs:** como nasce o acesso do primeiro administrador da instância e como é o procedimento da instalação (MF-101); com quanta antecedência chega o aviso do fim do contrato (MF-103); como um mAIg novo conversa com um módulo antigo dentro do prazo de adiamento (MF-104); o tipo do certificado do endereço do mAIg (MF-107); quantos dias de quedas a página de status mostra (MF-108).

## Decisões do PO para discutir

- **Decisão:** o auditor entra no console e lê ali o registro da organização, só para leitura. *Por que:* o objetivo do controle num lugar só pede que o que o núcleo guarda se consulte no mesmo lugar, e a decisão 12 só diz que o auditor lê. *Alternativa:* uma consulta do registro à parte, fora do console. *Reabrir se:* a área de segurança dos clientes preferir receber o registro nas ferramentas dela. Foi decidido depois: o auditor entra no console só para ler o registro e os avisos que recebe e, na onda 1.1, para baixar a cópia assinada (decisão 96).
- **Decisão:** o console tem duas partes, a da instância e a de cada organização, e o administrador da instância usa o mesmo console. *Por que:* o mapa das mfs põe nesta mf a criação das organizações e o estado da instância. *Alternativa:* um painel da instância separado, como no Horus, em que só o owner da organização usava a tela de configuração (D-262 do Horus). *Reabrir se:* o arquiteto do mAIg mostrar que separar os dois reduz o risco de um papel ver o que não deve.
- **Decisão:** a pessoa que usa o app não entra no console. *Por que:* ela não configura nada do núcleo, e no Horus só o owner da organização usava a tela de configuração (D-262 do Horus). *Alternativa:* dar a ela uma parte pequena, como ver o próprio uso. *Reabrir se:* o dono da Maind quiser dar à pessoa uma parte pequena do console, já que o cadastro e o login dela são do núcleo (decisão 23).
- **Decisão:** tratar o console como o lugar, e não como a regra: cada assunto aponta para a mf dona, e o console não tem regras próprias além da divisão por papel. *Por que:* evita que esta mf repita ou contradiga as outras. *Alternativa:* concentrar no console as regras de configuração de todos os assuntos. *Reabrir se:* o dono da Maind achar a mf fina demais para ser essencial, e preferir distribuí-la pelas outras.
- **Decisão:** a configuração própria de cada app fica no app, e não no console. *Por que:* o console reúne só o que é do núcleo, e assim a fronteira entre o mAIg e os apps fica clara. *Alternativa:* deixar cada app pôr as suas telas de configuração dentro do console, para o owner da organização ter mesmo um lugar só. *Reabrir se:* cada owner da organização reclamar de trabalhar em dois lugares, como já se previa no Horus (D-261 do Horus).
- **Decisão:** ler que o console faz parte de cada instância e cai junto com ela. *Por que:* no Horus, a tela de configuração fazia parte do middleware e era a mesma nas duas hospedagens (D-258 do Horus, D-271 do Horus). *Alternativa:* um console fora da instância, por exemplo na nuvem da Maind. *Reabrir se:* uma venda travar por falta de acesso de fora e o console precisar sair da instância; por ora, o console fica dentro dela e se alcança só de dentro da rede do cliente (decisão 26).
- **Decisão:** propor, para discutir, que o console mostre ao owner da organização o que ainda falta para a organização ficar pronta, como o banco e a IA. *Por que:* no Horus, a organização só fica ativa com a conexão, um banco e a IA configurados (D-277 do Horus), e o owner da organização precisa saber o que falta. *Alternativa:* deixar só a regra de ativação e não dizer nada sobre o que o console mostra. *Reabrir se:* a mf das organizações e instâncias já tratar disso (MF-107). Foi decidido depois: o cockpit de ativação mostra o que falta (decisão 72) e chega na onda 1.1; na onda 1.0, a tela de cada app diz o que falta (decisão 95).
- **Decisão:** manter as dependências do mapa e anotar uma lacuna nele: a gestão dos apps não depende do console, mas a liberação de um app pelo owner da organização acontece no console (MF-104). *Por que:* os bancos e a governança da IA dependem do console no mapa, e a gestão dos apps faz o mesmo tipo de configuração. *Alternativa:* deixar o mapa como está. *Reabrir se:* o dono da Maind preferir que o console dependa dos assuntos, e não o contrário.
- **Decisão:** a prova de valor usa a ativação de uma organização nova sem chamado e a divisão por papel, sem metas. *Por que:* são os dois resultados que a TI do cliente e o auditor conferem de fora. *Alternativa:* provar com a chegada de um segundo app configurado no mesmo console. *Reabrir se:* houver um segundo app antes da prova.
- **Decisão:** seguir o registro e auditoria, que põe no registro os atos de quem configura no console, e só apontar para ele, sem abrir aqui um ponto próprio (MF-102). *Por que:* o tema vive numa mf só, e sem esses atos o auditor não confere o que o owner da organização permitiu ou mudou (decisão 12). *Alternativa:* deixar o ponto em aberto também nesta mf. *Reabrir se:* o dono da Maind recusar essa decisão do PO no registro e auditoria. Foi decidido depois: os atos do owner da organização e do auditor no console entram no registro (decisão 96).
- **Decisão:** deixar quem pode retirar um owner da organização, e o que acontece quando a organização fica sem nenhum com acesso, na segurança e permissões, e só apontar para ela (MF-101). *Por que:* o ponto já está descrito ali por inteiro. *Alternativa:* descrevê-lo também aqui, pelo lado do console. *Reabrir se:* a decisão desse ponto pedir algo próprio do console, como uma parte da organização dividida entre owners da organização. Foi decidido depois: quem cadastra, exclui e substitui os owners da organização é o administrador da instância (decisão 83), e a organização que já está ativa continua ativa quando fica sem owner da organização com acesso (decisões 72 e 83).
- **Decidido pelo dono da Maind em 11/11/2026:** os avisos chegam também por e-mail, só com o tipo do aviso e um link para o console, sem dado nenhum; a organização diz, numa lista de configurações, o que permite e para quais papéis, e cada pessoa escolhe nas próprias preferências dentro do permitido (decisão 64). A parte do owner da organização ganhou o item do que a organização permite.
- **Decidido pelo dono da Maind em 11/11/2026:** o owner da organização libera um acesso de suporte por tempo limitado, só à configuração, nunca ao registro nem às senhas; liberar é ato sensível, anotado e com aviso ao auditor (decisão 68). O ponto em aberto saiu desta mf.
- **Decidido pelo dono da Maind em 11/11/2026:** o console ganha um cockpit de ativação, que mostra o que falta para a organização ficar ativa e para cada app entrar em uso (decisão 72). Confirma a proposta do PO acima de mostrar ao owner da organização o que falta.
- **Decidido pelo dono da Maind em 11/11/2026:** só o owner da organização cadastra as pessoas, direto no console; não há convite de dentro dos apps (decisão 77). O ponto em aberto saiu desta mf.
- **Decidido pelo dono da Maind em 11/11/2026:** o administrador da instância gere os owners da organização, com volta em 48 horas, e a instância tem até três administradores, sem custo (decisões 83 e 84).
- **Decidido pelo dono da Maind em 11/11/2026:** os avisos de segurança chegam sempre, e a organização não os desliga; "mudar quem recebe aviso" e "mudar os jeitos de entrar" passam a ser atos sensíveis (decisão 85).
- **Decidido pelo dono da Maind em 11/11/2026:** o console ganha o limite de pedidos, configurado pelo owner da organização, e o painel de alertas, o cockpit administrativo dos avisos de segurança (decisão 89).
- **Decidido pelo dono da Maind em 11/11/2026:** a primeira versão sai em duas ondas, a 1.0 e a 1.1, e a segunda versão vem depois; o console tem partes na onda 1.0 e na onda 1.1 (decisão 92).
- **Decidido por delegação do dono da Maind em 11/11/2026:** a primeira versão sai em duas ondas, a 1.0 e a 1.1, e a segunda versão vem depois; cada capacidade desta mf tem a onda marcada no tópico "O que entra em cada onda". A regra que resume o recorte: a onda 1.0 liga e para; a onda 1.1 desfaz e encerra (decisão 95).
- **Decidido por delegação do dono da Maind em 11/11/2026:** o console é o mesmo programa, com as mesmas telas, na casa do cliente e na hospedagem da Maind; só o owner da organização configura a organização, e o auditor entra no console só para ler o registro e os avisos que recebe e, na onda 1.1, para baixar a cópia assinada. As duas regras deixam de ser proposta do PO e entram na onda 1.0 (decisão 96).
- **Decidido por delegação do dono da Maind em 11/11/2026:** na onda 1.0, cada organização tem um auditor só, de dentro da empresa e sem data de vencimento; o segundo auditor e o auditor de fora, com o acesso que vence numa data, chegam na onda 1.1 (decisão 97).
- **Decidido por delegação do dono da Maind em 11/11/2026:** a primeira versão tem dois jeitos de entrar, usuário e senha e conta Google, os dois na onda 1.0; cada organização nasce só com usuário e senha ligados, e o owner da organização liga o Google se quiser. Com o Google fora do ar, quem entra por ele não começa sessão nova, e quem já entrou segue (decisão 98).
- **Decidido por delegação do dono da Maind em 11/11/2026:** cada pessoa pede o próprio link de troca de senha na tela de entrada, de uso único, direto ao e-mail do cadastro; depois de várias tentativas erradas, a conta fica bloqueada por um tempo, e a própria pessoa é avisada por e-mail. Vale para todos os papéis, o pedido fica anotado no registro, e ninguém vê nem define a senha de outra pessoa. Entra na onda 1.0 (decisão 99).
- **Decidido por delegação do dono da Maind em 11/11/2026:** os administradores da instância cuidam uns dos outros: um cadastra e retira outro, até três, e o último não pode ser retirado; cada ato fica no registro da instância e avisa os demais. Sem nenhum administrador da instância com acesso, vale o procedimento da instalação, feito na máquina do mAIg, com o uso anotado no registro da instância. A conta do administrador da instância entra sempre por usuário e senha e recebe os avisos da instância no e-mail dele. Entra na onda 1.0 (decisão 100).
- **Decidido por delegação do dono da Maind em 11/11/2026:** o cadastro de várias pessoas de uma vez, com o owner da organização subindo uma lista no console, chega na onda 1.1; na onda 1.0, ele cadastra uma a uma (decisão 101).
- **Decidido por delegação do dono da Maind em 11/11/2026:** o registro da instância nasce com a instância, na onda 1.0, e fica guardado enquanto a instância existir. Ele anota os atos que não tocam organização nenhuma: cadastrar e retirar um administrador da instância, o pedido de troca de senha de um administrador da instância, o uso do procedimento da instalação, configurar e testar o servidor de e-mail, instalar ou trocar o certificado do endereço do mAIg, fazer e restaurar a cópia de segurança e, na onda 1.1, desinstalar um app (decisão 102).
- **Decidido por delegação do dono da Maind em 11/11/2026:** a linha do registro "informada pelo app" só tem campos fixos: o tipo do ato, de uma lista que o app declara ao ser instalado; o alvo, por um código; a hora; e a pessoa, que o núcleo tira do passe. O núcleo recusa o que foge disso. Chega na onda 1.1 (decisão 104).
- **Decidido por delegação do dono da Maind em 11/11/2026:** retirar um app, apagar a configuração guardada de um app parado e desinstalar chegam juntos na onda 1.1, com a cópia assinada do registro. Na onda 1.0, um app só para, pela pausa, pela suspensão, pelo fim da licença ou pela ação manual da Maind, e nenhum registro é excluído; o owner da organização continua podendo apagar, um a um, o cadastro de um banco e a chave de uma IA (decisão 106).
- **Decidido por delegação do dono da Maind em 11/11/2026:** o núcleo sugere as colunas sensíveis de cada banco, já marcadas, e o owner da organização confere no cadastro do banco e marca ou desmarca. Marcar ou desmarcar é ato sensível: fica no registro e avisa os outros owners da organização e o auditor. A coluna marcada sai sempre mascarada, para todos os apps. Entra na onda 1.0 (decisão 111).
- **Decidido por delegação do dono da Maind em 11/11/2026:** a governança da IA entra inteira na onda 1.0: as chaves dos provedores, a lista de modelos por app, o limite de gasto e o custo por app. O limite mede dinheiro, vale por app e recomeça a cada mês do calendário, com aviso aos 80% e recusa aos 100%, e o owner da organização vê no console o consumo e o custo de toda a IA da organização (decisão 112).
- **Decidido por delegação do dono da Maind em 11/11/2026:** o encerramento de uma organização chega inteiro na onda 1.1: o pedido, a execução e a volta em 30 dias. Na onda 1.0, a organização que deixa de usar o mAIg fica com os apps pausados ou parados e com a configuração guardada (decisão 114).
- **Decidido por delegação do dono da Maind em 11/11/2026:** qualquer owner da organização pede a volta do encerramento no console, dentro dos 30 dias, não importa quem pediu o encerramento; o administrador da instância executa, e os owners da organização e os auditores são avisados. O owner da organização não recusa antes um encerramento pedido pela Maind. Encerrada a organização, os owners da organização e os auditores continuam entrando no console, todos para ler o registro e os owners da organização também para pedir a volta. Conta a data do pedido. Chega na onda 1.1 (decisão 115).
- **Decidido por delegação do dono da Maind em 11/11/2026:** a cópia de segurança leva o cofre, o registro de cada organização, o registro da instância e a configuração inteira, com as organizações, os apps, as pessoas, as permissões e as regras da IA; só o cache dos painéis fica de fora. A restauração devolve a instância como estava na data da cópia, e cada organização só volta com o código de recuperação dela. O que mudou depois da data da cópia se perde, inclusive linhas do registro, e cada restauração fica anotada no registro de cada organização e no registro da instância. Entra na onda 1.0 (decisão 116).
- **Decidido por delegação do dono da Maind em 11/11/2026:** a saída do cliente não tem gesto próprio: é um roteiro, com os gestos que já existem. Os owners da organização e os auditores baixam a cópia assinada do registro; os apps são retirados, e as organizações, encerradas; por fim, a TI do cliente apaga a máquina e as cópias de segurança. O mAIg não atesta que tudo foi apagado. O roteiro vale na onda 1.1; na onda 1.0, não há saída com prova (decisão 118).
- **Decidido por delegação do dono da Maind em 11/11/2026:** o painel da instância mostra o estado, as versões e as pendências da instalação e, de cada organização, só contagens, sem nomes; os únicos nomes que o administrador da instância vê são os dos owners da organização, porque é ele quem os gere. O painel mostra também a data da última cópia de segurança, o estado da restauração, a data do vencimento do certificado do endereço, a lista do que a instância manda à Maind e a falha de envio de e-mail. Entra na onda 1.0 (decisão 119).
- **Decidido por delegação do dono da Maind em 11/11/2026:** a TI do cliente escolhe o nome do endereço do mAIg na rede dela e instala o certificado desse endereço, na instalação; o mAIg avisa os administradores da instância antes de o certificado vencer, e o painel da instância mostra a data. É outro certificado, diferente do certificado da organização, que a Maind atesta. Entra na onda 1.0 (decisão 120).
- **Decidido por delegação do dono da Maind em 11/11/2026:** a luz de estado, igual em todos os apps, entra na onda 1.0, com três cores e sempre com texto, e aparece também na tela de entrada, antes do login; com a ligação fora ou a versão vencida, a pessoa vê um aviso próprio, e não um erro. A página de status chega na onda 1.1, com o login do mAIg, só de dentro da rede ou pela VPN, e mostra a cada pessoa o estado da ligação e dos apps da organização dela e as quedas passadas, sem nome de pessoa nem de banco (decisão 121).
- **Decidido por delegação do dono da Maind em 11/11/2026:** além do que os apps precisam para funcionar, a instância manda à Maind só o mínimo de operação: a versão do mAIg e a dos módulos, o estado da ligação e o estado da licença de cada app. Nunca vai dado, nome de pessoa, consulta nem mensagem de erro com valores, e a lista fica à vista da TI do cliente no painel da instância. Entra na onda 1.0 (decisão 123).
- **Decidido por delegação do dono da Maind em 11/11/2026:** na onda 1.0, o administrador da instância configura o servidor de e-mail da empresa e faz um envio de teste; sem isso, o console não deixa criar organização. O painel da instância mostra quando um envio falha, e o link de primeiro acesso, o link de troca de senha e os avisos saem por esse servidor (decisão 125).
- **Decidido por delegação do dono da Maind em 11/11/2026:** na onda 1.0, cada aviso tem destinatário fixo, aparece sempre no console e vai por e-mail, sem dado nenhum. Os avisos de segurança vão aos owners da organização e ao auditor; a queda de um banco e de uma IA, o limite de gasto, a tarefa marcada que parou e o fim do contrato vão aos owners da organização; o certificado da organização perto de vencer vai aos owners da organização e aos administradores da instância; e os avisos da instância vão a todos os administradores da instância. A lista "o que a organização permite" e as preferências de aviso chegam na onda 1.1 (decisão 126).
- **Decidido por delegação do dono da Maind em 11/11/2026:** na onda 1.0, a equipe da Maind não entra no console da casa do cliente, e quem mostra a tela é o owner da organização ou a TI do cliente; na onda 1.1, o suporte da Maind e o auditor de fora chegam pela VPN que a TI do cliente concede, e o console avisa o owner da organização de que a pessoa precisa da VPN (decisão 127).
