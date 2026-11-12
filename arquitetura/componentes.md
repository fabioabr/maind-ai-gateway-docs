# Os componentes de arquitetura do mAIg

> Este documento lista as peças de que o Maind AI Gateway (mAIg) precisa para funcionar, em dois blocos: a casa do cliente, com o mAIg e os periféricos, e o lado da Maind de que o mAIg depende. Para cada peça: o que faz, o que guarda, com quem fala, que decisões a exigem, que mfs atende, em que onda entra e o que o arquiteto ainda precisa definir. Sem escolher tecnologia.

Situação: proposta do arquiteto do mAIg, revista com as decisões do dono da Maind de 12/11/2026 (seção 9) · Data: 12/11/2026

## 1. Em uma frase

Na primeira versão, o mAIg se constrói com 24 componentes na casa do cliente, apoiados em 8 periféricos da empresa cliente e em 7 componentes do lado da Maind, entre eles o Gerenciador do mAIg, onde a Maind cria cada organização e gera a chave temporária com que o mAIg, na interface de setup, liga para a Maind e se instala sozinho; na segunda versão entram mais 2 componentes e 2 periféricos. Todo pedido de um app atravessa sempre as mesmas peças, na mesma ordem: a ligação, a portaria, o módulo do app, os serviços do núcleo que conferem e anotam, o fiscal da saída e a ligação de volta.

## Como ler

**O que é um componente aqui.** Uma peça com um trabalho só. Ela guarda alguma coisa, ou nada; fala com peças definidas; e responde por algumas decisões do dono da Maind. Não é uma tela, um programa nem um servidor: é um papel dentro do mAIg. Dividir o mAIg em peças é organização interna, e é decisão do arquiteto do mAIg. Por isso, em cada componente, a linha **Corte** diz de onde vem a peça: ou uma decisão a nomeia, ou ela é **proposta do arquiteto**, com o motivo em uma linha.

**Os selos de onda.** A primeira versão do mAIg sai em duas ondas, e a segunda versão vem depois (decisões 92 e 95). Cada componente, e cada capacidade dentro dele, leva uma de quatro marcas:

- **onda 1.0:** entra no mínimo para o primeiro app, o Horus 2.0, sair com segurança;
- **onda 1.1:** entra na primeira versão, mas depois, com o resto da governança;
- **segunda versão:** fica para a versão seguinte do mAIg, que sai com o Horus 2.1;
- **não entra:** não faz parte da primeira versão e não tem versão marcada.

**O que este documento não escolhe.** Linguagem de programação, banco de dados, mensageria, protocolo, fornecedor, máquina, sistema. Isso vem depois. As escolhas de infraestrutura e de fornecedor são do dono da Maind. Tecnologia: ver `tecnologia.md`, na mesma pasta.

**Como cada componente é descrito.** Sempre nos mesmos sete itens: o que faz; o que guarda; com quem fala, e em que sentido; as decisões que o exigem; as mfs que atende; a onda; e os pontos do arquiteto em aberto. Uma seta (→) quer dizer que o componente começa a conversa; uma seta ao contrário (←) quer dizer que o outro começa.

**Os códigos.** `C-nn` é um componente da casa do cliente; `P-nn`, um periférico da casa do cliente; `M-nn`, um componente do lado da Maind; `A-nn`, um dos 39 pontos do arquiteto do mAIg, listados na seção 8. Os números das decisões são os do README; as mfs se citam como `MF-101`.

**As fontes.** As decisões 1 a 127 do README; a visão; o mapa das macro funcionalidades e as 12 mfs, com a tabela "O que entra em cada onda" e os pontos "Falta o arquiteto do mAIg definir" de cada uma; e a parte 4 do registro das decisões do PO. Quando uma decisão mais nova muda uma mais velha, vale a mais nova.

**Palavras que aparecem muito.**

- **O núcleo** é a parte do mAIg que vem pronta para todos os apps (decisão 3). **O módulo** é a parte de um app que roda dentro do mAIg, isolada; **a parte de fora** é a parte do app que roda fora dele, no Horus a nuvem da Maind, com as telas (decisão 4).
- **A instância** é cada instalação física do mAIg. **A organização** é o espaço de um cliente dentro dela, com os seus apps e as suas regras (decisão 9).
- **Um certificado digital** é como uma carteira de identidade digital: um arquivo que diz quem é o portador e traz a assinatura de quem o emitiu. **A chave privada** é o carimbo que assina; **a chave pública** é a parte que qualquer um confere. No mAIg, a chave privada nasce dentro do mAIg e nunca sai dele; a Maind recebe só a pública e a atesta (decisão 86).
- **Assinar** é marcar um arquivo com a chave privada, de um jeito que denuncia qualquer alteração. **Cifrar** é embaralhar um dado com uma chave, de modo que sem ela não se lê nada (decisão 57).
- **O passe** é uma credencial curta, assinada pelo mAIg, que diz quem é a pessoa, de que organização e com que papel num app (decisão 32).
- **O handshake contratual** é a conversa em que o mAIg confere com a Maind que um app foi contratado. **A licença** é o documento assinado pela Maind com a data do fim do contrato e a carência (decisão 56).
- **O Gerenciador do mAIg** (M-07) é o cockpit interno de controle e cobrança da Maind, na nuvem dela, separado de qualquer app, onde a organização nasce. **A chave temporária** é o segredo de vida curta e uso único que o Gerenciador gera e que a TI digita na **interface de setup** do mAIg; com ela o mAIg liga para a Maind, busca **o arquivo da organização**, assinado, e **o manifesto do que a organização pode ter**, e se instala sozinho, no estilo de um gerenciador de pacotes. **O PDF com senha** leva as instruções e a chave ao e-mail oficial da organização; a senha vai por outro canal. Não há portal do cliente na primeira versão (dono da Maind, 12/11/2026; seção 9, item 8).
- **A ligação** é a conexão que o mAIg abre com a Maind e mantém aberta, de dentro para fora (decisão 6). **Uma saída liberada** é a permissão, no firewall, que é o muro de proteção da rede, para um computador de dentro falar com um endereço de fora. **A VPN** é o túnel protegido que liga quem está fora à rede da empresa.
- **O registro** junta o log, a anotação de tudo o que acontece, e a auditoria, a conferência dessas anotações depois (decisão 12). **O cofre** é onde ficam as senhas dos bancos e as chaves de IA (decisão 5). **O console** é a tela onde tudo se configura (`MF-110`).
- **Um cache** é uma cópia temporária de um resultado, guardada só para não refazer o mesmo trabalho (decisão 93).

## 2. O desenho em palavras

### As camadas

O mAIg na casa do cliente se desenha em sete camadas. A camada diz só a vizinhança de cada peça; a lista completa está na seção 3.

1. **A borda: o que as pessoas alcançam.** A porta de entrada (C-01), o console (C-20) e a luz de estado com a página de status (C-19). É tudo o que um navegador dentro da rede do cliente, ou pela VPN, consegue abrir.
2. **A identidade e as chaves.** O cadastro das pessoas (C-02), o emissor de passes (C-03) e o chaveiro (C-11). É onde se confere quem é quem e onde ficam as chaves que assinam e que cifram.
3. **O núcleo que confere e anota.** A portaria dos pedidos (C-04), o livro de regras da organização (C-05), o leitor dos bancos (C-06), o intermediário da IA (C-07), o fiscal da saída (C-08) e o escrivão do registro (C-09). É a única porta que um módulo tem para o mundo.
4. **Os apps.** A guarda dos kits e das licenças (C-14), o catálogo dos apps instalados (C-15), o compartimento dos módulos (C-16) e o cache dos painéis (C-17). É onde o app existe dentro da instância.
5. **A guarda: cofres e registros.** O cofre da organização (C-10), o registro de cada organização (C-12) e o registro da instância (C-13). É o que fica cifrado e o que vai na cópia de segurança.
6. **A ligação.** A ligação com a Maind (C-18). É a única conversa da instância com o mundo de fora, além das saídas para a IA, para o Google e para o e-mail.
7. **A operação da instância.** O instalador (C-21), o atualizador (C-22), a ferramenta de cópia de segurança (C-23) e o carteiro dos avisos (C-24). É o que a TI do cliente opera.

Do lado da Maind ficam sete peças: o ponto de conexão (M-01), a emissão de certificados (M-02), o servidor das contratações (M-03), o canal de atualização (M-04), o serviço de e-mail da hospedagem da Maind (M-05), o Gerenciador do mAIg (M-07), o cockpit interno da Maind, e, do outro lado, a nuvem dos apps (M-06).

### Uma pergunta, do navegador ao banco e de volta

Ana, gerente comercial da Farma Vida, pergunta ao Horus quanto cada farmácia vendeu em outubro. É o caminho da onda 1.0.

1. **A entrada.** Ana abre o Horus. A parte de fora do Horus a manda à porta de entrada do mAIg (C-01), dentro da rede da Farma Vida. O cadastro das pessoas (C-02) confere a senha, ou aceita a confirmação do Google (P-05). O emissor de passes (C-03) assina um passe só para o Horus, com o papel de Ana nele, usando a chave da organização guardada no chaveiro (C-11), e manda o navegador de volta à nuvem com um código de uso único. A parte de fora troca o código pelo passe pela ligação (C-18 e M-01). (decisões 32, 37 e 40)
2. **O pedido desce.** A parte de fora do Horus (M-06) manda a pergunta ao ponto de conexão da Maind (M-01), que a entrega pela ligação que o mAIg da Farma Vida abriu (C-18). O pedido leva um número e o passe de Ana. (decisão 33)
3. **A portaria.** A portaria dos pedidos (C-04) confere o passe, a identidade do app, a organização, se o Horus está em uso nessa organização e se o limite de pedidos não foi atingido, consultando o livro de regras (C-05). Só então o pedido entra no compartimento do Horus (C-16), com a indicação de que é de Ana, da Farma Vida. (decisões 28, 56 e 89)
4. **O módulo pede a IA.** O módulo do Horus pede ao núcleo um modelo de IA, na camada 1. O intermediário da IA (C-07) confere o modelo, o limite de gasto e a camada, pega a chave no cofre (C-10), faz o pedido direto ao provedor (P-04), conta o custo e manda o escrivão (C-09) anotar no registro da organização (C-12). (decisões 19, 20, 62 e 112)
5. **O módulo pede os dados.** O módulo pede a leitura do banco de vendas. A portaria confere a permissão do Horus sobre esse banco. O leitor dos bancos (C-06) pega a senha no cofre, lê o banco só para consulta, dentro do limite de tempo e de linhas, e entrega os dados ao módulo. O escrivão anota a consulta, com o valor dos filtros sensíveis mascarado, e quantas linhas voltaram. (decisões 5, 58, 61 e 103)
6. **A saída.** O módulo monta a resposta. O fiscal da saída (C-08) confere o teto de 200 linhas, mascara as colunas sensíveis e, se a resposta passar do teto, a recusa inteira. A resposta pronta sobe pela ligação, passa pelo ponto de conexão e chega à parte de fora do Horus, que a mostra a Ana sem gravá-la. (decisões 34, 35, 43 e 124)
7. **Depois.** Renata, a auditora, encontra as duas linhas no registro pelo console (C-20). Paulo, o owner da organização, vê o gasto do Horus crescer na visão do consumo. Marta, da TI, vê no painel da instância só que a ligação está no ar e em que versão o Horus está.

Se a ligação cai no meio do passo 6, a ligação (C-18) guarda o pedido por cerca de 15 minutos e religa sozinha; se não volta nesse tempo, descarta o pedido, e Ana refaz a pergunta (decisão 69).

### O nascimento de uma organização

1. A equipe da Maind cria a organização "Farma Vida" no Gerenciador do mAIg (M-07), com o e-mail oficial da Farma Vida, o e-mail de Paulo como primeiro owner e a contratação do Horus. O Gerenciador gera uma chave temporária, de vida curta e uso único, e um PDF protegido por senha com as instruções da primeira etapa e a chave; o PDF vai ao e-mail oficial da Farma Vida pelo serviço de e-mail da Maind (M-05), e a senha vai por outro canal, da equipe da Maind ao responsável, por telefone ou mensagem. (dono da Maind, 12/11/2026; decisões 10 e 11)
2. Marta, da TI, abre o PDF e, seguindo as instruções, sobe a imagem do mAIg na máquina ou no cluster da empresa. A imagem já vem com a interface de setup (C-21). Nela, Marta informa o nome do endereço e o certificado dele e digita a chave temporária. (decisão 120)
3. A guarda (C-14) abre a primeira conexão com a Maind, sem certificado ainda, apresentando a chave; o servidor das contratações (M-03) a confere no Gerenciador e a marca como usada, e entrega pela ligação o arquivo assinado da organização e o manifesto do que a Farma Vida pode ter, com o kit do Horus. O livro de regras (C-05) cria a organização a partir do arquivo, em configuração. O chaveiro (C-11) gera as chaves da ligação, da organização e do módulo do Horus, guarda as privadas e manda as públicas nos pedidos de atestado; a emissão de certificados (M-02) atesta a da organização por 30 dias. O mAIg baixa do registro (M-04) a imagem do módulo do Horus, confere a assinatura e o sobe, no estilo de um gerenciador de pacotes. O chaveiro também gera a chave que cifra o registro e o cofre dessa organização. (decisões 28, 44, 57, 86 e 88)
4. Ainda na interface de setup, Marta configura e testa o servidor de e-mail da empresa (P-03) e define a conta dela como primeira administradora da instância. (decisões 100 e 125)
5. No fim do setup, o mAIg cria sozinho o usuário de Paulo como primeiro owner da organização (C-02), com o e-mail que veio no arquivo, e o carteiro dos avisos (C-24) manda o link de primeiro acesso direto ao e-mail de Paulo, pelo servidor de e-mail da empresa. Marta não vê o link nem digitou o e-mail. Os outros owners, depois, são cadastrados por Marta. (decisões 51, 83, 90 e 99)
6. O escrivão (C-09) anota no registro da nova organização (C-12): a chegada do arquivo, a instalação do Horus, a criação do usuário e cada envio do link. Marta só escreve essas linhas; nunca as lê. A interface de setup se desliga, e o console (C-20) assume o endereço. (decisão 29)
7. Paulo abre o link, define a senha e baixa o código de recuperação da organização, que guarda fora do mAIg. Com o certificado e um owner com acesso, o livro de regras marca a organização como ativa, sozinho; Paulo libera e configura o Horus. (decisões 72 e 87)

### Na hospedagem da Maind, as mesmas peças

As peças são as mesmas e o console é o mesmo programa, com as mesmas telas (decisão 96). O que muda é quem faz o papel de administrador da instância, a equipe da Maind, e sete regras: o endereço do mAIg fica aberto na internet, protegido pelo login, até a segunda versão (decisão 48); a versão nova se instala sozinha, numa janela de madrugada, com aviso 7 dias antes, ou 24 horas numa correção de segurança (decisão 47); suspender um app pede duas pessoas da Maind (decisão 46); a cópia de segurança é feita pela Maind, mas o código de recuperação segue com a organização (decisões 65 e 87); o e-mail sai pelo serviço de e-mail da Maind (M-05, decisão 90); o banco do cliente aceita conexão só do endereço fixo da Maind (decisão 91); e a instância roda em máquinas separadas da nuvem dos apps (decisão 48).

## 3. Os componentes da casa do cliente

### O resumo

| Código | Componente | Grupo | Onda |
| --- | --- | --- | --- |
| C-01 | A porta de entrada: o endereço do mAIg e a tela de entrada | A entrada e a identidade | onda 1.0 |
| C-02 | O cadastro das pessoas e a conferência de quem entra | A entrada e a identidade | onda 1.0 |
| C-03 | O emissor de passes | A entrada e a identidade | onda 1.0 |
| C-04 | A portaria dos pedidos | O núcleo que confere e anota | onda 1.0 |
| C-05 | O livro de regras da organização | O núcleo que confere e anota | onda 1.0 |
| C-06 | O leitor dos bancos | O núcleo que confere e anota | onda 1.0 |
| C-07 | O intermediário da IA | O núcleo que confere e anota | onda 1.0 |
| C-08 | O fiscal da saída | O núcleo que confere e anota | onda 1.0 |
| C-09 | O escrivão do registro | O núcleo que confere e anota | onda 1.0 |
| C-10 | O cofre da organização | Os cofres e o registro | onda 1.0 |
| C-11 | O chaveiro: certificados, chave de cifra e código de recuperação | Os cofres e o registro | onda 1.0 |
| C-12 | O registro de cada organização | Os cofres e o registro | onda 1.0 |
| C-13 | O registro da instância | Os cofres e o registro | onda 1.0 |
| C-14 | A guarda dos documentos assinados que chegam pela ligação: a organização, os kits e as licenças | Os apps | onda 1.0 |
| C-15 | O catálogo dos apps instalados | Os apps | onda 1.0 |
| C-16 | O compartimento dos módulos | Os apps | onda 1.0 |
| C-17 | O cache dos painéis | Os apps | onda 1.0 |
| C-18 | A ligação com a Maind | A ligação de dentro para fora | onda 1.0 |
| C-19 | A luz de estado e a página de status | A ligação de dentro para fora | onda 1.0 (a página, onda 1.1) |
| C-20 | O console | O console | onda 1.0 |
| C-21 | O instalador: a interface de setup e o procedimento da máquina | A operação da instância | onda 1.0 |
| C-22 | O atualizador do mAIg | A operação da instância | onda 1.0 |
| C-23 | A ferramenta de cópia de segurança e restauração | A operação da instância | onda 1.0 |
| C-24 | O carteiro dos avisos | A operação da instância | onda 1.0 |
| C-25 | A ponte dos servidores MCP | A segunda versão | segunda versão |
| C-26 | A ligação com o provedor de identidade da empresa | A segunda versão | segunda versão |

A onda 1.1 não cria componente novo: acrescenta capacidades a componentes que já existem desde a onda 1.0. A lista está na seção 7.

### 3.1 A entrada e a identidade

#### C-01. A porta de entrada: o endereço do mAIg e a tela de entrada

- **O que faz.** É o endereço do mAIg dentro da rede do cliente, com o nome que a TI do cliente escolheu e o certificado desse endereço, que ela instala (decisão 120). Por ele chegam as pessoas: a tela de entrada, onde a pessoa escolhe a organização e entra por usuário e senha ou pela conta Google (decisões 66 e 98); o pedido do link de troca de senha (decisão 99); a renovação do passe, que o navegador faz direto com o mAIg a cada 15 minutos (decisão 37). Mostra a luz de estado antes do login (decisão 121). Na onda 1.1, abre também a página de status, com login, e entrega a planilha direto ao navegador, pelo mesmo caminho da renovação do passe (decisões 74 e 121). Na segunda versão, oferece o login da empresa (C-26). Na casa do cliente, a TI pode deixá-lo visível só de dentro da rede ou pela VPN; na hospedagem da Maind, fica aberto na internet, protegido pelo login (decisões 32 e 48).
- **O que guarda.** Nada por si. Usa o certificado do endereço guardado no chaveiro (C-11).
- **Com quem fala.** ← o navegador das pessoas (P-08), de dentro da rede ou pela VPN. → o cadastro das pessoas (C-02), para conferir quem é. → o emissor de passes (C-03), para emitir o código de uso único e renovar o passe. → o Google (P-05), para a confirmação da conta. → a luz de estado (C-19). Na onda 1.1, ← o fiscal da saída (C-08), que lhe entrega a planilha.
- **Decisões que o exigem.** 26, 32, 37, 48, 66, 74, 98, 99, 120, 121.
- **Mfs que atende.** `MF-101`, `MF-108`, `MF-109` (a planilha), `MF-112` (segunda versão).
- **Onda.** Onda 1.0. A página de status e a planilha, onda 1.1. O login da empresa, segunda versão.
- **Corte.** As decisões nomeiam a tela de entrada e o endereço do mAIg (32, 120, 121). Proposta do arquiteto: reunir num endereço só a tela de entrada, a renovação do passe, a página de status, a planilha e o console (C-20), porque as fontes falam de "o endereço do mAIg" no singular e dizem que a planilha vai pelo mesmo caminho em que o navegador renova o passe (decisão 74). Separar o console desse endereço mudaria o que a TI configura (dois nomes, dois certificados): é pergunta para o dono da Maind (seção 9).
- **Pontos do arquiteto em aberto.** A-03 (como o navegador renova o passe quando pede permissão para um site da internet falar com um endereço interno). Também toca A-26 (o certificado do endereço).

#### C-02. O cadastro das pessoas e a conferência de quem entra

- **O que faz.** Guarda as pessoas de cada organização e confere quem entra: a senha, ou a confirmação que o Google devolve (decisões 23 e 98). Guarda também as contas do console: os owners da organização, os auditores e os administradores da instância, que entram sempre por usuário e senha, e essa senha abre só o console (decisões 24 e 55). Gera os links de uso único, o de primeiro acesso e o de troca de senha, e os entrega ao carteiro (C-24); ninguém vê nem define a senha de outra pessoa (decisões 51 e 99). Cria sozinho o usuário do primeiro owner de cada organização, com o e-mail que veio do Gerenciador (M-07) no arquivo da organização, no fim do setup, e manda o link de primeiro acesso direto a ele; os outros owners seguem com o administrador da instância (decisões 51, 83 e 99; dono da Maind, 12/11/2026, seção 9, item 8). Bloqueia a conta por um tempo depois de várias tentativas erradas e avisa a própria pessoa (decisão 99). Aplica as regras de quem cadastra quem: o owner da organização cadastra as pessoas, uma a uma (decisão 77); o administrador da instância cadastra, exclui e substitui os owners da organização, com volta em 48 horas (decisão 83); os administradores da instância cuidam uns dos outros, até três, e o último não pode ser retirado (decisão 100). Ao excluir uma pessoa, tira o acesso dela e deixa as linhas do registro com o nome (decisão 27). Uma pessoa em duas organizações tem duas contas (decisão 66). Na onda 1.1, aceita o cadastro em lote (decisão 101), o segundo auditor e o auditor de fora, com acesso que vence numa data (decisões 79 e 97). Na segunda versão, ganha a confirmação em dois passos, configurável (decisão 50), e aceita a confirmação do provedor de identidade da empresa (C-26).
- **O que guarda.** O cadastro de cada organização: nome, e-mail, jeito de entrar, a senha guardada de um jeito que não se lê de volta, os apps que cada pessoa pode usar. As contas dos owners da organização, dos auditores e dos administradores da instância. Os links de uso único ainda não usados e o estado de bloqueio de cada conta. Tudo isso faz parte da "configuração inteira" que vai na cópia de segurança (decisão 116).
- **Com quem fala.** ← a porta de entrada (C-01) e o console (C-20). → o emissor de passes (C-03), dizendo quem é a pessoa, de que organização e com que papel. → o carteiro (C-24), com os links e o aviso de bloqueio. → o escrivão (C-09), para anotar entradas, cadastros, exclusões e trocas. → o livro de regras (C-05), para saber os jeitos de entrar ligados.
- **Decisões que o exigem.** 23, 24, 25, 27, 50, 51, 55, 66, 77, 79, 83, 84, 97, 98, 99, 100, 101.
- **Mfs que atende.** `MF-101`, `MF-110`, `MF-112` (segunda versão).
- **Onda.** Onda 1.0. O lote, o segundo auditor e o auditor de fora, onda 1.1. A confirmação em dois passos e o login da empresa, segunda versão.
- **Corte.** A decisão 23 nomeia o cadastro das pessoas no núcleo. Proposta do arquiteto: separar quem confere a senha (este componente) de quem assina o passe (C-03), para que a chave da organização tenha um usuário único e a conferência da senha não a alcance.
- **Pontos do arquiteto em aberto.** A-01 (quantas tentativas bloqueiam, por quanto tempo, e o desenho da confirmação em dois passos). Também toca A-06 (o nome da pessoa excluída) e A-23 (o que sobra de uma organização encerrada).

#### C-03. O emissor de passes

- **O que faz.** Emite o código de uso único que o navegador leva à nuvem e, quando a parte de fora do app o troca pela ligação, emite o passe: uma credencial de 15 minutos, de um app só, com o papel da pessoa nele, assinada com a chave privada da organização (decisões 32, 37 e 40). Renova o passe a pedido do navegador, conferindo a cada renovação se a pessoa ainda tem acesso (decisão 37). Emite o passe de agendamento de cada tarefa marcada, em nome de quem a criou, e o guarda só no mAIg; a cada rodada, confere se a pessoa ainda tem acesso e permissão, e, se não tem, a tarefa para e o owner da organização é avisado (decisão 42). Confere a assinatura de todo passe que chega num pedido (decisão 33).
- **O que guarda.** Os passes de agendamento. O passe comum não fica guardado: vai com o navegador e com a parte de fora do app.
- **Com quem fala.** ← a porta de entrada (C-01), para emitir e renovar. ← a ligação (C-18), na troca do código pelo passe e no "rode a tarefa" da parte de fora. → o chaveiro (C-11), para assinar com a chave da organização. → o cadastro das pessoas (C-02), para conferir o acesso. → a portaria (C-04), que lhe pede a conferência do passe de cada pedido. → o carteiro (C-24), quando uma tarefa marcada para.
- **Decisões que o exigem.** 32, 33, 37, 40, 42, 86.
- **Mfs que atende.** `MF-101`, `MF-108`, `MF-102` (o "em nome de quem" de cada linha).
- **Onda.** Onda 1.0.
- **Corte.** A decisão 42 fala em "uma peça a mais no núcleo" para o passe de agendamento. Proposta do arquiteto: concentrar nessa peça toda emissão e toda conferência de passes, para que só ela use a chave da organização.
- **Pontos do arquiteto em aberto.** Nenhum dos 39 cai aqui. Uma leitura do arquiteto, registrada na seção 9: a espera de até uma hora da tarefa marcada quando a ligação está fora (decisão 69) fica com a parte de fora do app, que é quem pede "rode a tarefa"; o que o mAIg garante é conferir o passe de agendamento a cada rodada, atrasada ou não.

### 3.2 O núcleo que confere e anota

#### C-04. A portaria dos pedidos

- **O que faz.** É a única porta por onde um pedido chega a um módulo e por onde um módulo pede qualquer coisa ao núcleo. Para cada pedido que desce pela ligação, confere o passe, a identidade do app, a organização, o estado do app nessa organização (em uso, pausado, suspenso, parado, com atualização necessária) e o limite de pedidos da pessoa e do app no período (decisões 28, 33, 45, 46, 56, 89 e 109). Para cada pedido do módulo, faz as duas conferências: a pessoa pode usar o app, e o app pode pedir aquilo naquela organização (decisões 5 e 60). Entrega ao módulo só o que é da organização do pedido (decisão 60). Recusa com mensagem clara, e a recusa vai ao registro (decisão 96). Se o escrivão não consegue anotar, a portaria não atende (decisão 96). Quando uma pessoa ou um app chega perto do limite de pedidos ou o atinge, dispara o alerta do painel de alertas e o aviso de segurança (decisões 85 e 89).
- **O que guarda.** Só a contagem do limite de pedidos, por pessoa e por app, dentro do período. Não guarda pedido nem resposta.
- **Com quem fala.** ← a ligação (C-18), que lhe entrega cada pedido com o número e o passe. ← o compartimento dos módulos (C-16), por onde o módulo pede. → o emissor de passes (C-03), para conferir o passe. → o livro de regras (C-05), para as permissões e os estados. → o catálogo dos apps (C-15), para a identidade do app. → o leitor dos bancos (C-06), o intermediário da IA (C-07) e, na segunda versão, a ponte dos servidores MCP (C-25), para atender o que o módulo pediu. → o escrivão (C-09), para anotar tudo, inclusive a recusa. → o carteiro (C-24), no alerta do limite de pedidos.
- **Decisões que o exigem.** 5, 9, 28, 33, 45, 46, 56, 60, 85, 89, 96, 109.
- **Mfs que atende.** `MF-101`, `MF-109`, `MF-102`, `MF-104`.
- **Onda.** Onda 1.0.
- **Corte.** Proposta do arquiteto: uma porta só para todo pedido torna a conferência de cada pedido (decisão 5), o "cada pedido é de uma organização só" (decisão 60) e o "sem anotar, não atende" (decisão 96) um lugar só, que a TI do cliente avalia uma vez.
- **Pontos do arquiteto em aberto.** A-24 (como as organizações de uma mesma instância ficam separadas por dentro, além dos dois certificados). Também toca A-30 e A-31 (o compartimento).

#### C-05. O livro de regras da organização

- **O que faz.** Guarda a configuração de cada organização e de cada app nela, e é o que a portaria consulta a cada pedido. A organização entra no livro a partir do arquivo assinado pelo Gerenciador do mAIg (M-07), que o mAIg busca pela ligação quando a TI digita a chave temporária na interface de setup (C-21) ou na tela "adicionar organização" do console (C-20), conferido pela guarda (C-14); não há organização criada à mão (dono da Maind, 12/11/2026; seção 9, item 8). Marca sozinho a organização como ativa, quando tem o certificado e um owner com acesso, e cada app como em uso, quando tem o mínimo que declarou (decisão 72). Guarda a configuração de um app parado até a renovação ou até o owner da organização apagá-la (decisão 14). Na onda 1.1, guarda a organização encerrada, com a configuração por 30 dias e a volta (decisões 78, 114 e 115), a lista "o que a organização permite" e as preferências de aviso (decisões 64 e 126).
- **O que guarda.** Por organização: o estado (em configuração, ativa, encerrada); os apps liberados e o estado de cada um; as permissões de cada app, de cada pessoa a cada app e de cada app a cada banco; o cadastro de cada banco, sem a senha, com as colunas sensíveis marcadas (decisões 73 e 111); as regras da IA de cada app: os modelos permitidos, a camada, o limite de gasto (decisões 20 e 112); o teto da resposta de cada app (decisão 43); o limite de pedidos (decisão 89); os jeitos de entrar ligados (decisão 98); os auditores nomeados; a configuração guardada dos apps parados; os ajustes próprios de cada app. É a "configuração inteira" da cópia de segurança, junto com as pessoas (decisão 116). Por instância: as organizações que existem, a janela de atualização e os prazos de adiamento (decisões 39 e 45).
- **Com quem fala.** ← o console (C-20), que é onde tudo isso se muda. ← a portaria (C-04), o leitor (C-06), o intermediário (C-07), o fiscal (C-08) e o carteiro (C-24), que leem as regras. → o escrivão (C-09), para anotar cada mudança e cada ato sensível (decisão 54). ← a guarda (C-14), com o arquivo da organização conferido. → o chaveiro (C-11), ao instalar o arquivo de uma organização. → a ferramenta de cópia (C-23), que o leva inteiro.
- **Decisões que o exigem.** 9, 11, 14, 20, 31, 43, 54, 64, 72, 73, 78, 89, 98, 111, 112, 114, 115, 116, 126.
- **Mfs que atende.** `MF-104`, `MF-105`, `MF-106`, `MF-107`, `MF-110`.
- **Onda.** Onda 1.0. O encerramento, a volta, a lista "o que a organização permite" e as preferências, onda 1.1.
- **Corte.** A decisão 116 nomeia "a configuração inteira". Proposta do arquiteto: tratá-la como peça própria, separada dos cofres e dos registros, porque ela é o que a portaria consulta em todo pedido e o que a cópia de segurança leva sem cifra decidida (A-22).
- **Pontos do arquiteto em aberto.** A-23 (o que sobra de uma organização encerrada e como o owner da organização e o auditor seguem lendo o registro). Também toca A-24.

#### C-06. O leitor dos bancos

- **O que faz.** É o único que fala com os bancos da empresa. Lê, nunca altera (decisão 5). No cadastro de um banco, testa o usuário e o recusa se ele conseguir gravar (decisão 61); recusa o banco de um tipo fora da lista única da primeira versão (decisão 110); monta a sugestão das colunas sensíveis, já marcadas, para o owner da organização conferir (decisão 111). A cada consulta, pega a senha no cofre, aplica o limite de tempo e de linhas e, se a consulta passa do limite, a interrompe e o pedido falha com mensagem clara, sem resultado parcial (decisões 61 e 124). Entrega os dados ao módulo, nunca a senha. Quando um banco para de responder, pede ao carteiro que avise o owner da organização (decisão 71). Na hospedagem da Maind, alcança o banco pelo endereço fixo da Maind, com a conversa cifrada (decisão 91).
- **O que guarda.** Nada próprio. A lista dos tipos de banco da primeira versão é um fato que o arquiteto escreve na `MF-105` (A-15). O cadastro de cada banco fica no livro de regras (C-05); a senha, no cofre (C-10).
- **Com quem fala.** ← a portaria (C-04), com um pedido já conferido. ← o console (C-20), no cadastro e no teste do usuário. → o cofre (C-10), para a senha. → os bancos da empresa (P-02). → o escrivão (C-09), com a consulta feita, os filtros sensíveis mascarados e a contagem de linhas (decisões 58 e 103). → o carteiro (C-24), quando o banco cai. → o cache dos painéis (C-17), que guarda o último resultado de cada painel.
- **Decisões que o exigem.** 5, 58, 61, 67, 71, 73, 91, 103, 110, 111, 124.
- **Mfs que atende.** `MF-105`, `MF-102`, `MF-109`.
- **Onda.** Onda 1.0.
- **Corte.** A decisão 5 nomeia "as conexões com os dados". Proposta do arquiteto: separar quem lê (este componente) de quem guarda a senha (C-10), para que a senha saia do cofre só na hora da leitura e nunca fique com quem monta a consulta.
- **Pontos do arquiteto em aberto.** A-14 (os limites de tempo e de linhas e o teste do usuário), A-15 (os nomes dos bancos da lista), A-16 (como monta e refaz a sugestão das colunas sensíveis). Na segunda versão, A-38 (se leva ao banco a identidade da pessoa que entrou pelo login da empresa).

#### C-07. O intermediário da IA

- **O que faz.** É o único que fala com os provedores de IA, direto, por uma saída liberada para cada provedor, sem passar pela Maind (decisão 19). A cada pedido do módulo, confere se o modelo está na lista do app (decisão 5), se o app está dentro do limite de gasto do mês (decisões 75 e 112) e se o conteúdo cabe na camada do app: a camada 1 leva só a pergunta e os nomes das tabelas e colunas, a 2 leva também totais, a 3 leva linhas de dados; um total sobre poucas linhas conta como linha de dados (decisões 20 e 113). O pedido acima da camada é recusado inteiro, com mensagem clara (decisão 62). Pega a chave no cofre, faz o pedido, conta o custo na conta do app e manda anotar a camada e uma descrição do que foi enviado, nunca o texto nem a resposta (decisão 58). Avisa o owner da organização aos 80% do limite e recusa aos 100%, até o owner subir o limite ou o mês virar (decisões 75 e 112). Não troca de modelo sozinho quando um provedor falha; o app pode pedir outro da lista (decisão 96). Se um app precisa da web, é por aqui, pela busca do provedor (decisão 63). Avisa o owner quando a chave é recusada ou o crédito acaba (decisão 71).
- **O que guarda.** O consumo e o custo do mês, por app e por organização, para a visão do consumo e para o limite (decisão 112). As chaves ficam no cofre; as regras, no livro.
- **Com quem fala.** ← a portaria (C-04). → o cofre (C-10), para a chave. → os provedores de IA (P-04). → o livro de regras (C-05), para modelos, camada e limite. → o escrivão (C-09). → o carteiro (C-24), nos avisos de 80%, de chave recusada e de crédito. → o console (C-20), que mostra o consumo e o custo. Na segunda versão, → a ponte dos servidores MCP (C-25), para as ferramentas que o modelo pede.
- **Decisões que o exigem.** 5, 19, 20, 22, 58, 62, 63, 71, 75, 76, 96, 112, 113.
- **Mfs que atende.** `MF-106`, `MF-102`, `MF-109`, `MF-111` (segunda versão).
- **Onda.** Onda 1.0, inteira (decisão 112).
- **Corte.** A decisão 5 nomeia "a governança da IA". Proposta do arquiteto: uma peça só faz todo pedido ao provedor, porque a decisão 19 diz que só o núcleo o faz e o módulo não tem saída própria (decisão 63).
- **Pontos do arquiteto em aberto.** A-17 (como calcula o custo e com que precisão acompanha a fatura), A-18 (confirmar que o primeiro app responde bem na camada 1 e como o app declara a camada de cada pedido), A-19 (como reconhece dado e total, e quantas linhas são "poucas"). Na segunda versão, toca A-37 (o que as ferramentas mudam no custo e no tempo).

#### C-08. O fiscal da saída

- **O que faz.** Confere tudo o que sai do mAIg com dado da empresa. Antes de a resposta pronta subir pela ligação, confere o teto de linhas do app, que começa em 200, e mascara as colunas sensíveis marcadas no cadastro do banco (decisões 43 e 111). Se a resposta passa do teto, recusa a resposta inteira, com mensagem clara que diz o tamanho e o teto, e manda anotar a recusa com a contagem (decisão 124). Anota o tamanho de cada resposta (decisão 43). Na onda 1.1, libera as duas saídas a mais, app por app, só se o owner da organização as tiver liberado: a consulta feita ao banco, que volta à nuvem só com a instrução e com o valor dos filtros sensíveis mascarado (decisões 74 e 103); e a planilha, que vai direto ao navegador pela porta de entrada, sem passar pela nuvem e sem esbarrar no teto, com as colunas sensíveis sempre mascaradas e cada download no registro (decisão 74).
- **O que guarda.** Nada. Lê o teto e as saídas liberadas no livro de regras (C-05).
- **Com quem fala.** ← o compartimento dos módulos (C-16), com a resposta pronta. → a ligação (C-18), com a resposta conferida. → o escrivão (C-09), com o tamanho ou a recusa. → o livro de regras (C-05). Na onda 1.1, → a porta de entrada (C-01), com a planilha.
- **Decisões que o exigem.** 34, 43, 74, 103, 111, 124.
- **Mfs que atende.** `MF-109`, `MF-108`, `MF-105`, `MF-102`.
- **Onda.** Onda 1.0. A consulta devolvida e a planilha, onda 1.1.
- **Corte.** A decisão 43 diz que "o núcleo confere o teto antes de a resposta sair pela ligação, para que a promessa não dependa só do app", e a decisão 60 põe o teto e a máscara entre o que o núcleo garante sozinho. Proposta do arquiteto: uma peça na saída, por onde toda resposta passa, é o jeito de a promessa não depender do app.
- **Pontos do arquiteto em aberto.** Nenhum dos 39 cai aqui. Depende de A-16 (a sugestão das colunas sensíveis).

#### C-09. O escrivão do registro

- **O que faz.** É o único que escreve nos dois registros. Escreve a linha de cada pedido de um app: o app, a pessoa tirada do passe, o que foi pedido, o resultado, a hora; da leitura de banco, a consulta com os filtros sensíveis mascarados e a contagem; do pedido à IA, a camada, a descrição e o custo; nunca os dados nem a resposta (decisões 58 e 103). Escreve os atos do owner da organização e do auditor no console, inclusive as entradas e as consultas ao próprio registro (decisão 96). Escreve, no registro de cada organização que o ato toca, os atos do administrador da instância: criar a organização e o usuário, cada envio do link, instalar o kit, trocar um owner, instalar, atualizar, suspender ou retomar um app, atualizar o mAIg, restaurar a cópia (decisões 29, 46, 47, 51, 82, 83 e 116). Escreve no registro da instância os atos que não tocam organização nenhuma (decisão 102). Cifra cada linha do registro da organização com a chave dela (decisão 57). Se não consegue escrever, avisa a portaria, que não atende (decisão 96). Na onda 1.1, aceita a linha "informada pelo app", só com campos fixos, e recusa o que foge disso (decisão 104); e assina a cópia do registro que o owner da organização ou o auditor baixa (decisão 80).
- **O que guarda.** Nada: escreve nos livros C-12 e C-13.
- **Com quem fala.** ← a portaria (C-04), o leitor (C-06), o intermediário (C-07), o fiscal (C-08), o cadastro (C-02), o livro de regras (C-05), o catálogo (C-15), o atualizador (C-22) e a ferramenta de cópia (C-23), que lhe mandam o que anotar. → o registro de cada organização (C-12) e o registro da instância (C-13). → o chaveiro (C-11), para cifrar com a chave da organização e, na onda 1.1, para assinar a cópia. → o carteiro (C-24), quando a linha é um ato sensível (decisão 54).
- **Decisões que o exigem.** 12, 29, 46, 47, 51, 54, 57, 58, 80, 82, 83, 96, 102, 103, 104, 116.
- **Mfs que atende.** `MF-102`, e todas as que anotam nele.
- **Onda.** Onda 1.0. As linhas informadas pelo app e a cópia assinada, onda 1.1.
- **Corte.** Proposta do arquiteto: um escrivão só, que é o único a escrever nos registros, dá lugar à regra do administrador da instância que escreve sem ler nem alterar (decisão 29): ele nunca escreve; pede ao escrivão, que escreve e cifra.
- **Pontos do arquiteto em aberto.** A-07 (como o administrador da instância escreve no registro de uma organização sem poder lê-lo nem alterar uma linha).

### 3.3 Os cofres e o registro

#### C-10. O cofre da organização

- **O que faz.** Guarda, cifrado com a chave de cada organização, o que nenhum app pode ver: as senhas dos bancos e as chaves dos provedores de IA (decisões 5 e 57). A senha entra uma vez, no cadastro feito pelo owner da organização, e não volta a nenhuma tela (decisão 67); a chave de IA é sempre do cliente (decisão 22). Entrega a senha só ao leitor dos bancos e a chave só ao intermediário da IA, na hora de usar. Apaga a senha quando o owner apaga o cadastro do banco e a chave quando ele a apaga, desde a onda 1.0 (decisão 106). Na segunda versão, guarda o acesso a cada servidor MCP, se o arquiteto confirmar que é aqui que ele fica (A-35).
- **O que guarda.** As senhas dos bancos e as chaves de IA de cada organização, cifradas. Vai na cópia de segurança, cifrado (decisões 65 e 116).
- **Com quem fala.** ← o console (C-20), que cadastra e troca. → o leitor dos bancos (C-06) e o intermediário da IA (C-07), que pegam o segredo na hora de usar. → o chaveiro (C-11), para a chave que cifra. → a ferramenta de cópia (C-23).
- **Decisões que o exigem.** 5, 22, 57, 65, 67, 87, 106, 116.
- **Mfs que atende.** `MF-105`, `MF-106`, `MF-107`, `MF-111` (segunda versão).
- **Onda.** Onda 1.0.
- **Corte.** As decisões 5 e 57 nomeiam o cofre.
- **Pontos do arquiteto em aberto.** Na segunda versão, A-35 (onde fica guardado o acesso a cada servidor MCP; a proposta do arquiteto é aqui, como as senhas dos bancos). Depende de A-05 (onde fica a chave que cifra).

#### C-11. O chaveiro: certificados, chave de cifra e código de recuperação

- **O que faz.** Gera dentro do mAIg todo par de chaves e guarda a privada, que nunca sai; manda à Maind só a pública, para ela atestar (decisão 86). O par de chaves da ligação da instância nasce na primeira conexão do setup, autenticada pela chave temporária; o de uma organização nasce quando o arquivo dela, assinado pelo Gerenciador (M-07), chega pela ligação (seção 9, item 8). Cuida de quatro certificados: o da organização, que vale 30 dias, assina todo passe e se renova sozinho pela ligação, com aviso 7 dias antes de vencer se a renovação falhar (decisões 28 e 44); o de identidade de cada app, curto e trocado sozinho pela ligação (decisão 56); o da ligação com a Maind (decisão 38); e o do endereço do mAIg, que a TI do cliente instala e troca, com aviso antes de vencer (decisão 120). Gera e guarda a chave que cifra o registro e o cofre de cada organização, fora do alcance de quem opera a máquina (decisão 57); entrega ao owner da organização, quando a organização nasce, o código de recuperação dessa chave, que a Maind nunca tem; e destrói a chave quando o registro do último app da organização é excluído, na desinstalação (decisão 87). Se perder uma chave privada de certificado, gera um par novo e pede outro atestado (decisão 86); depois de uma restauração, pede sozinho o atestado novo, quando precisa (decisão 116). Na onda 1.1, assina a cópia do registro (decisão 80).
- **O que guarda.** As chaves privadas e os certificados atestados, com as datas de vencimento. A chave de cifra de cada organização. Não guarda o código de recuperação: ele é do owner da organização.
- **Com quem fala.** → a emissão de certificados da Maind (M-02), pela ligação (C-18): manda a chave pública e recebe o atestado e as renovações. ← o emissor de passes (C-03), o escrivão (C-09), o cofre (C-10) e a porta de entrada (C-01), que usam as chaves sem as ver. ← o console (C-20), na instalação e na troca do certificado do endereço. → o carteiro (C-24), nos avisos de vencimento. → a ferramenta de cópia e restauração (C-23), que pede o código de recuperação ao owner da organização na volta.
- **Decisões que o exigem.** 28, 38, 44, 56, 57, 80, 86, 87, 116, 120.
- **Mfs que atende.** `MF-101`, `MF-102`, `MF-103`, `MF-105`, `MF-107`, `MF-108`.
- **Onda.** Onda 1.0.
- **Corte.** A decisão 86 nomeia a geração das chaves dentro do mAIg. Proposta do arquiteto: juntar num chaveiro as chaves que assinam (decisão 86) e a chave que cifra (decisão 57), para que a regra "nunca sai do mAIg, nem para quem opera a máquina" tenha um guardião só. As duas têm destinos diferentes se forem perdidas, e o chaveiro as trata assim: a de certificado se refaz com um atestado novo; a de cifra só volta com o código de recuperação.
- **Pontos do arquiteto em aberto.** A-05 (onde fica a chave de cada organização, como o código de recuperação a restaura e quanto custa cifrar), A-26 (o tipo do certificado do endereço e onde nasce a chave dele). Também toca A-08 (a validade e a revogação do certificado do kit) e A-22 (se a chave do certificado entra na cópia).

#### C-12. O registro de cada organização

- **O que faz.** É o livro de cada organização: só se acrescenta, ninguém apaga nem altera uma linha, e ele fica guardado enquanto o app estiver instalado (decisões 15 e 31). Fica cifrado com a chave da organização, de modo que quem copia o disco ou a cópia de segurança não lê nada (decisão 57). Só o owner da organização e o auditor o leem, pelo console, por app, pessoa, banco ou modelo, resultado e período (decisões 12 e 95); o administrador da instância nunca o lê. As linhas de uma pessoa excluída seguem com o nome dela (decisão 27). Numa organização encerrada, segue legível pelo owner da organização e pelo auditor até o app ser desinstalado (decisão 31). Só é excluído com a desinstalação do app, na onda 1.1, depois do aviso com prazo e da cópia assinada (decisões 21, 80, 106 e 107). Não é enviado a sistemas de fora e não tem alerta automático de comportamento estranho (decisão 105).
- **O que guarda.** As linhas escritas pelo escrivão (C-09), cifradas. Vai na cópia de segurança, cifrado (decisão 116).
- **Com quem fala.** ← o escrivão (C-09), que é o único que escreve. ← o console (C-20), que o consulta para o owner da organização e para o auditor e, na onda 1.1, baixa a cópia assinada. → a ferramenta de cópia (C-23).
- **Decisões que o exigem.** 12, 15, 21, 27, 31, 57, 80, 87, 105, 106, 107, 116.
- **Mfs que atende.** `MF-102`, `MF-104`, `MF-107`.
- **Onda.** Onda 1.0. A cópia assinada e a exclusão na desinstalação, onda 1.1.
- **Corte.** As decisões 12 e 57 nomeiam o registro cifrado de cada organização.
- **Pontos do arquiteto em aberto.** A-04 (como é guardado sem que ninguém o altere, cifrado e consultável com o volume que só cresce), A-06 (como o nome de uma pessoa excluída continua ligado às linhas sem que ela volte a ter acesso).

#### C-13. O registro da instância

- **O que faz.** É o livro dos atos que não tocam organização nenhuma. Nasce com a instância e fica guardado enquanto ela existir (decisão 102). Anota: cadastrar e retirar um administrador da instância; o pedido de troca de senha de um administrador; o uso do procedimento da instalação; configurar e testar o servidor de e-mail; instalar ou trocar o certificado do endereço do mAIg; fazer e restaurar a cópia de segurança; e, na onda 1.1, desinstalar um app (decisões 81 e 102). Só os administradores da instância o leem, e ele não tem dado de organização nenhuma (decisão 81).
- **O que guarda.** As linhas, só acrescentadas. Vai na cópia de segurança (decisão 116). Como ele fica cifrado é parte de A-22.
- **Com quem fala.** ← o escrivão (C-09). ← o console (C-20), na parte da instância. → a ferramenta de cópia (C-23).
- **Decisões que o exigem.** 81, 100, 102, 116, 120, 125.
- **Mfs que atende.** `MF-102`, `MF-107`, `MF-110`.
- **Onda.** Onda 1.0. A linha da desinstalação, onda 1.1.
- **Corte.** As decisões 81 e 102 nomeiam o registro da instância.
- **Pontos do arquiteto em aberto.** Nenhum dos 39 cai aqui. Depende de A-22 (como a ferramenta cifra o registro da instância na cópia).

### 3.4 Os apps: contratação, instalação e execução

#### C-14. A guarda dos documentos assinados que chegam pela ligação: a organização, os kits e as licenças

- **O que faz.** Recebe pela ligação, e nunca por e-mail ou download, os documentos assinados pela Maind: o **arquivo da organização**, que o mAIg busca no servidor das contratações (M-03) quando a TI digita a **chave temporária** do PDF na interface de setup (C-21), e que faz a organização existir na instância; o **manifesto do que a organização pode ter**, com o **kit** de cada app contratado (o app, a imagem do módulo e o bilhete de inscrição), pelo qual o mAIg se instala no estilo de um gerenciador de pacotes; e a licença de cada app. Anota cada chegada e cada instalação no registro da organização (decisões 10 e 82; dono da Maind, 12/11/2026, seção 9, item 8). A chave temporária é de vida curta e uso único, e a guarda a apresenta uma vez só, na primeira conexão, antes de a instância ter certificado. Uma segunda organização numa instância que já existe entra pelo mesmo caminho, com outra chave digitada no console (C-20). Faz o handshake contratual pela ligação: apresenta-se ao servidor das contratações da Maind e recebe a liberação do app para aquela organização e a licença, com a data do fim do contrato e a carência (decisões 10, 11 e 56). Se a ligação está fora, espera e tenta de novo (decisão 6). Calcula a situação do contrato de cada app em cada organização: em vigor, perto do fim, em carência ou parado (`MF-103`). Pede ao carteiro os três avisos do fim do contrato ao owner da organização (decisões 13 e 126). Para o app quando a licença vence sem renovação ou quando chega a ação manual da Maind, com o motivo no registro e o aviso de segurança (decisões 56 e 94); recebe a licença renovada e devolve o app como estava (decisões 13 e 14). Recebe o pedido de encerramento vindo da Maind, na onda 1.1 (decisão 78). Troca sozinho, pela ligação, o certificado de identidade do app, com o chaveiro (decisão 56).
- **O que guarda.** Por app e organização: o kit instalado, a licença em vigor, a situação do contrato, a ação manual recebida com o motivo.
- **Com quem fala.** ← a interface de setup (C-21) e o console (C-20), com a chave temporária digitada. ← o servidor das contratações (M-03), pela ligação, com o arquivo da organização, o manifesto e os kits. → o servidor das contratações da Maind (M-03), pela ligação (C-18): handshake, licença, renovação; ← a ação manual e o pedido de encerramento, que descem pela mesma ligação. → o chaveiro (C-11), para o certificado de identidade do app. → o livro de regras (C-05), com o estado "parado" e a liberação. → o escrivão (C-09). → o carteiro (C-24).
- **Decisões que o exigem.** 6, 10, 11, 13, 14, 56, 78, 82, 86, 94, 126.
- **Mfs que atende.** `MF-103`, `MF-104`, `MF-108`.
- **Onda.** Onda 1.0, inteira. O pedido de encerramento pela Maind, onda 1.1.
- **Corte.** As decisões 10 e 56 nomeiam o kit, o handshake e a licença. Proposta do arquiteto: a peça que os guarda e que calcula a situação do contrato é um corte de organização, separado do catálogo dos apps (C-15), porque o contrato é por organização e a instalação é por instância.
- **Pontos do arquiteto em aberto.** A-08 (o formato do handshake e da licença, a validade do certificado do kit e a revogação, com o dono da Maind). Também toca A-09 (o que vem no kit) e A-25 (como a organização passa a existir na parte de fora do app). Os três estão fechados em `tecnologia.md` (C-14, M-03, M-07): o kit chega pela ligação, como parte do manifesto assinado, e a organização nasce no Gerenciador (as leituras do fluxo do setup foram confirmadas pelo dono).

#### C-15. O catálogo dos apps instalados

- **O que faz.** Guarda o que cada app declarou ao ser instalado e o que a instância sabe dele. Registra a parte de fora, com a identidade dela e a lista do que o app pode pedir (decisão 4); registra o módulo, com a versão e a assinatura da Maind conferida antes de instalar e antes de cada atualização, recusando a versão sem assinatura ou alterada (decisão 88). Guarda o mínimo que o app declarou para entrar em uso, como um banco e uma IA no Horus (decisão 72), e, na onda 1.1, a lista dos tipos de ato das linhas informadas pelo app (decisão 104). Guarda o estado do app na instância: instalado, suspenso, com atualização necessária. Aplica a regra de versão por prazo: vencido o prazo de adiamento do módulo, só aquele app deixa de atender, com "Atualização necessária" (decisões 45 e 109). Quando uma versão nova pede uma permissão que a anterior não pedia, a permissão chega desligada (`MF-104`). Na onda 1.1, conduz a desinstalação: só se conclui no fim do prazo do aviso, se nenhuma organização ativa tiver o app, e um pedido de volta à espera a segura; desinstalado o app, o registro dele é excluído e o ato vai ao registro da instância (decisões 21, 81, 106 e 107). Só recebe apps da Maind (decisão 8).
- **O que guarda.** Por app instalado: a identidade da parte de fora, as permissões que o app pode pedir, o mínimo para entrar em uso, a versão do módulo e a data da instalação, o estado na instância, a lista de tipos de ato (onda 1.1).
- **Com quem fala.** ← o console (C-20), na instalação, na atualização, na suspensão e, na onda 1.1, na desinstalação. ← o canal de atualização da Maind (M-04), pela ligação (C-18), de onde vem o módulo assinado. → o compartimento dos módulos (C-16), para pôr o módulo para rodar. → a portaria (C-04), que lhe pergunta a identidade e o estado de cada app. → o escrivão (C-09), com uma linha em cada organização que usa o app. → o carteiro (C-24), na suspensão e, na onda 1.1, no aviso da desinstalação.
- **Decisões que o exigem.** 4, 8, 10, 21, 29, 45, 46, 72, 81, 88, 104, 106, 107, 109.
- **Mfs que atende.** `MF-104`, `MF-103`, `MF-109`, `MF-102`.
- **Onda.** Onda 1.0. A lista de tipos de ato e a desinstalação, onda 1.1.
- **Corte.** A decisão 4 nomeia "registrar a parte de fora e implantar o módulo". Proposta do arquiteto: o catálogo é o lugar do contrato de app, o que cada app declara ao núcleo (A-11), para que um segundo app entre pelo mesmo caminho do primeiro.
- **Pontos do arquiteto em aberto.** A-11 (o contrato de app), A-12 (como o app declara a lista dos tipos de ato), A-20 (como o owner da organização sabe quais modelos cada app consegue usar). Também toca A-13 e A-18.

#### C-16. O compartimento dos módulos

- **O que faz.** Roda o módulo de cada app isolado, com a porta única para o núcleo. Cumpre as quatro garantias: o módulo não lê o que é de outro módulo; não alcança nada sem passar pela portaria; não derruba nem trava os outros nem o núcleo; e só recebe o que é da organização de cada pedido (`MF-109`, decisões 4, 5 e 60). Não dá ao módulo saída própria para a internet (decisão 63). Entrega ao módulo cada pedido com a pessoa e a organização, e leva o que o módulo pede à portaria. Para de entregar pedidos a um módulo pausado numa organização, suspenso na instância ou parado pelo fim da licença (decisões 46, 56 e 96). Troca o módulo por cima na atualização, sem tocar na configuração nem no registro (`MF-104`). O que o módulo faz com o que recebe é do app, inclusive não misturar os pedidos de duas organizações (decisão 60).
- **O que guarda.** Nada duradouro: o módulo em execução e o que está em trânsito.
- **Com quem fala.** ← o catálogo (C-15), que lhe entrega o módulo assinado. ← a portaria (C-04), com o pedido já conferido; → a portaria, com o que o módulo pede. → o fiscal da saída (C-08), com a resposta pronta. Dentro dele, o módulo de cada app; fora dele, nada.
- **Decisões que o exigem.** 4, 5, 46, 60, 63, 88, 109.
- **Mfs que atende.** `MF-109`, `MF-104`.
- **Onda.** Onda 1.0.
- **Corte.** A decisão 4 nomeia "um módulo que roda isolado dentro do mAIg". Proposta do arquiteto: o compartimento é o que isola, e é do mAIg; o módulo é do app. Separar os dois deixa claro que o isolamento não depende de como o app foi feito.
- **Pontos do arquiteto em aberto.** A-13 (como um mAIg novo conversa com um módulo antigo dentro do prazo de adiamento, e o contrário), A-30 (como os módulos ficam isolados e quanto da máquina cada um pode usar), A-31 (uma cópia do módulo para todas as organizações ou uma por organização), A-33 (o que acontece com um pedido quando o módulo para no meio dele).

#### C-17. O cache dos painéis

- **O que faz.** Guarda por um tempo o último resultado de cada painel, para o painel abrir rápido e o banco não receber a mesma consulta várias vezes (decisão 35). Só entrega o resultado a quem tem permissão de ver o mesmo dado, conferida pela portaria como em todo pedido (decisão 93). Nunca entra na cópia de segurança; depois de uma restauração, recomeça vazio (decisão 93). Na nuvem da Maind fica só a receita do painel, nunca o resultado (decisão 35).
- **O que guarda.** O último resultado de cada painel, por organização, com validade.
- **Com quem fala.** ← o leitor dos bancos (C-06), que lhe entrega o resultado. ← a portaria (C-04), que lhe pede o resultado guardado quando um painel abre. → o compartimento (C-16), que recebe o resultado como se fosse lido.
- **Decisões que o exigem.** 35, 93, 95.
- **Mfs que atende.** `MF-109`, `MF-107`.
- **Onda.** Onda 1.0.
- **Corte.** As decisões 35 e 93 nomeiam o cache.
- **Pontos do arquiteto em aberto.** A-32 (quanto tempo vale e como fica protegido enquanto está guardado).

### 3.5 A ligação de dentro para fora

#### C-18. A ligação com a Maind

- **O que faz.** Abre a ligação com o ponto de conexão da Maind quando a instância sobe, em duas ou três linhas, e a mantém aberta; religa sozinha quando cai (decisões 6 e 33). A ligação é feita pela própria Maind, sem serviço de outra empresa no caminho (decisão 38). A conversa tem dois transportes: o principal, gRPC sobre HTTP/2, e um de reserva, WebSocket, para o qual a ligação passa sozinha quando o intermediário de saída da empresa não deixa o HTTP/2 passar (dono da Maind, 12/11/2026; `tecnologia.md`, C-18). É uma ligação só para todas as pessoas e todas as organizações da instância: cada pedido leva um número e o passe de quem pediu, e pela ligação descem só os pedidos que o mAIg conhece, nunca acesso à rede do cliente (decisão 33). Confere, dentro da ligação, o certificado da parte de fora de cada app (decisões 6 e 10). Pela ligação correm: os pedidos e as respostas dos apps; a troca do código pelo passe (decisão 32); o handshake contratual, a licença e a ação manual (decisão 56); a renovação dos certificados (decisões 44 e 56); o download das versões novas (decisão 39); e, da instância para a Maind, só o mínimo de operação: a versão do mAIg e a dos módulos, o estado da ligação e o estado da licença de cada app, nunca dado, nome, consulta nem mensagem de erro com valores (decisão 123). Quando a ligação cai, guarda o que estava em andamento por cerca de 15 minutos; se não volta, descarta e a pessoa refaz (decisão 69). Se não volta em cerca de 5 minutos, pede ao carteiro que avise quem cuida da instância (decisão 71). Recusa a conversa quando o certificado não vale ou quando a versão do mAIg passou do prazo de adiamento (decisões 45 e 109). O pedido ao provedor de IA, o Google, o e-mail e a tela do console não passam por ela (decisões 19, 26 e 90). Sem a ligação, não há login nos apps, licença nem atualização: a primeira versão não tem modo sem ligação (decisões 41 e 122).
- **O que guarda.** A fila curta dos pedidos em andamento (decisão 69). O estado da ligação, para o painel da instância e para a luz de estado. As quedas passadas, para a página de status da onda 1.1 (decisão 121); onde elas ficam é do arquiteto.
- **Com quem fala.** → o ponto de conexão da Maind (M-01), que ela abre e mantém. → a portaria (C-04), com cada pedido que desce; ← o fiscal da saída (C-08), com cada resposta que sobe. ← o emissor de passes (C-03), a guarda dos kits e das licenças (C-14), o chaveiro (C-11) e o atualizador (C-22), que conversam com a Maind por ela. → a luz de estado (C-19) e o console (C-20), com o estado. → o carteiro (C-24), quando não volta.
- **Decisões que o exigem.** 6, 19, 26, 32, 33, 38, 39, 41, 44, 45, 56, 69, 71, 90, 109, 121, 122, 123.
- **Mfs que atende.** `MF-108`, `MF-103`, `MF-107`, `MF-101`.
- **Onda.** Onda 1.0.
- **Corte.** As decisões 6 e 38 nomeiam "dentro do mAIg, a peça que liga para a Maind, mantém a ligação viva e religa sozinha".
- **Pontos do arquiteto em aberto.** A-27 (o que conta como "em andamento" e como guarda e entrega esse trabalho). Também toca A-28 (o endereço que a TI libera) e A-29 (o caminho alternativo para a empresa cujo intermediário quebra a ligação), cuja outra metade é do ponto de conexão (M-01), e A-33 (o módulo que para no meio).

#### C-19. A luz de estado e a página de status

- **O que faz.** Fornece a luz de estado, igual em todos os apps e na tela de entrada, com três cores e sempre com texto: "no ar", "instável" ou "fora do ar" (decisões 70 e 121). Dá aos apps o aviso próprio, e não um erro, quando a ligação está fora ou a versão venceu, com o texto "Atualização necessária" (decisões 45, 109 e 121). Na onda 1.1, abre a página de status, com o login do mAIg, só de dentro da rede ou pela VPN: mostra a cada pessoa o estado da ligação e dos apps da organização dela, em uso, pausado, suspenso, parado ou com atualização necessária, e as quedas passadas, sem nome de pessoa nem de banco (decisões 70 e 121).
- **O que guarda.** Nada. Lê o estado da ligação (C-18), do catálogo (C-15) e do livro de regras (C-05).
- **Com quem fala.** ← a ligação (C-18), o catálogo (C-15) e o livro de regras (C-05), com o estado. → a porta de entrada (C-01), que mostra a luz antes do login. → a parte de fora de cada app (M-06), pela ligação, que mostra a luz do mAIg. ← o navegador (P-08), na página de status, pela porta de entrada.
- **Decisões que o exigem.** 45, 70, 109, 121.
- **Mfs que atende.** `MF-108`, `MF-104`, `MF-110`.
- **Onda.** A luz, onda 1.0. A página de status, onda 1.1.
- **Corte.** As decisões 70 e 121 nomeiam a luz e a página como peças do mAIg, iguais para todos os apps.
- **Pontos do arquiteto em aberto.** Nenhum dos 39 cai aqui. O número de dias de quedas que a página mostra é do dono da Maind.

### 3.6 O console

#### C-20. O console

- **O que faz.** É a tela de configuração de cada instância: o mesmo programa, com as mesmas telas, na casa do cliente e na hospedagem da Maind (decisão 96). Cada papel entra com o próprio usuário e vê só a sua parte (decisões 10 e 12). Na casa do cliente, só abre de dentro da rede ou pela VPN, no endereço do mAIg (decisões 26 e 120). Tem três partes. **A parte da instância**, do administrador da instância: o painel da instância, com o estado, as versões e as pendências da instalação, de cada organização só contagens sem nomes, fora os dos owners da organização, a data da última cópia de segurança, o estado da restauração, a data do vencimento do certificado do endereço, a lista do que a instância manda à Maind e a falha de envio de e-mail (decisão 119); adicionar uma organização nova digitando a chave temporária que a Maind gerou no Gerenciador (M-07), e instalar os apps que o Gerenciador autorizou depois do setup (decisões 10 e 29; seção 9, item 8); cadastrar, excluir e substituir os outros owners, porque o primeiro vem da Maind (decisão 83); gerir os owners da organização e os outros administradores (decisões 83 e 100); configurar e testar o servidor de e-mail, feito dentro do setup e refeito aqui, sem o que nenhuma organização nova entra (decisão 125); instalar o kit, instalar e atualizar os apps (decisões 10 e 88); dar o aval às versões novas do mAIg e definir a janela (decisão 39); suspender e retomar um app (decisão 46); fazer e restaurar a cópia (decisão 65); ler o registro da instância (decisão 81); e, na onda 1.1, executar o encerramento e a volta de uma organização (decisões 78 e 115) e desinstalar um app (decisão 106). **A parte da organização**, do owner da organização: liberar, configurar, pausar e retomar os apps, com a tela de cada app dizendo o que falta (decisões 72 e 96); os bancos, com as colunas sensíveis (decisões 67 e 111); a IA, com as chaves, os modelos, a camada, o limite de gasto e a visão do consumo e do custo (decisão 112); o teto da resposta e o limite de pedidos (decisões 43 e 89); as pessoas e os jeitos de entrar (decisões 77 e 98); o auditor (decisão 97); o registro, com busca (decisão 95); o painel de alertas, com os avisos de segurança e o alerta do limite de pedidos (decisões 85 e 89); a situação do contrato de cada app (`MF-103`); e, na onda 1.1, o cockpit de ativação (decisão 72), as duas saídas a mais (decisão 74), a cópia assinada (decisão 80), o cadastro em lote (decisão 101), retirar um app e apagar a configuração guardada (decisão 106), pedir o encerramento e a volta (decisões 78 e 115), a lista "o que a organização permite" e as preferências de aviso (decisões 64 e 126), e o acesso de suporte da Maind, por tempo limitado, só à configuração, pela VPN que a TI concede (decisões 68 e 127). **A parte do auditor**: lê o registro e os avisos que recebe e, na onda 1.1, baixa a cópia assinada (decisão 96). Todo ato no console vai ao registro (decisão 96).
- **O que guarda.** Nada próprio: o que se muda nele mora no livro de regras (C-05), no cadastro das pessoas (C-02), no cofre (C-10), no catálogo (C-15) e na guarda dos kits (C-14).
- **Com quem fala.** ← o navegador (P-08), de dentro da rede ou pela VPN; na onda 1.1, também o do suporte da Maind e o do auditor de fora, pela VPN concedida. → o cadastro das pessoas (C-02), para entrar. → o livro de regras (C-05), o cadastro (C-02), o cofre (C-10), o catálogo (C-15), a guarda dos kits (C-14), o chaveiro (C-11), o atualizador (C-22), a ferramenta de cópia (C-23) e o leitor dos bancos (C-06), para configurar e testar. → os registros (C-12 e C-13), só para ler. ← o carteiro (C-24), com os avisos que aparecem no console e no painel de alertas. ← a ligação (C-18), com o estado e a lista do mínimo de operação.
- **Decisões que o exigem.** 10, 12, 26, 29, 39, 43, 46, 64, 65, 67, 68, 72, 74, 77, 78, 80, 81, 83, 85, 88, 89, 95, 96, 97, 98, 100, 101, 106, 111, 112, 115, 119, 120, 125, 126, 127.
- **Mfs que atende.** `MF-110`, e a tela de todas as outras.
- **Onda.** Onda 1.0. As telas das capacidades da onda 1.1 chegam com elas.
- **Corte.** A `MF-110` e as decisões 10 e 12 nomeiam o console, com a parte da instância e a parte de cada organização. O painel da instância (decisão 119), o painel de alertas (decisão 89) e o cockpit de ativação (decisão 72) são telas dele, e não componentes à parte: proposta do arquiteto, porque nenhuma delas guarda nada que o livro de regras e os registros já não guardem.
- **Pontos do arquiteto em aberto.** Nenhum dos 39 cai aqui, como diz a `MF-110`. Toca A-20 (como mostra ao owner da organização os modelos que cada app consegue usar) e A-28 (como mostra à TI o endereço da Maind, na lista do que a instância manda).

### 3.7 A operação da instância

#### C-21. O instalador: a interface de setup e o procedimento da máquina

- **O que faz.** É a imagem do mAIg, que já vem com a **interface de setup**, posta pela TI do cliente numa máquina da empresa ou num cluster Kubernetes dela, em dois formatos do mesmo pacote (`MF-103`; dono da Maind, 12/11/2026). A TI segue o **PDF com senha** que a Maind mandou ao e-mail oficial da organização, com as instruções da primeira etapa. Na interface, no endereço do mAIg: recebe o nome do endereço e o certificado (decisão 120); recebe a **chave temporária** do PDF, abre a ligação com a Maind e se instala sozinho, no estilo de um gerenciador de pacotes, buscando o arquivo da organização, o manifesto e as imagens dos apps contratados, e criando os certificados com as chaves nascendo dentro dele (decisão 86); configura e testa o servidor de e-mail (decisão 125); cria a instância e o registro dela (decisão 102) e a conta do primeiro administrador da instância, definida ali pela TI (decisão 100); e, ao fim, cria o usuário do primeiro owner, com o e-mail vindo do Gerenciador, e manda o link de primeiro acesso (decisão 51). Depois disso, a interface de setup se desliga e o console (C-20) assume. Depois, serve ao procedimento da instalação: quando nenhum administrador da instância consegue entrar, quem opera a máquina usa o procedimento, na própria máquina, para devolver o acesso, e o uso fica no registro da instância (decisão 100). Na hospedagem da Maind, quem o usa é a equipe da Maind.
- **O que guarda.** Nada depois de instalar.
- **Com quem fala.** ← quem opera a máquina (a TI do cliente ou a equipe da Maind), na própria máquina. → o cadastro das pessoas (C-02), para a conta do primeiro administrador e para o procedimento. → o chaveiro (C-11), com o certificado do endereço. → o registro da instância (C-13), pelo escrivão (C-09). → a guarda (C-14), com a chave temporária, que abre a ligação (C-18) com a Maind. ← o canal de atualização da Maind (M-04), de onde vêm a imagem do mAIg e as dos módulos. → o carteiro (C-24), com o link do primeiro owner.
- **Decisões que o exigem.** 100, 102, 120, 125.
- **Mfs que atende.** `MF-101`, `MF-103`, `MF-107`.
- **Onda.** Onda 1.0.
- **Corte.** A decisão 100 nomeia "o procedimento da instalação, feito na máquina do mAIg por quem a opera". Proposta do arquiteto: uma peça própria para o que acontece antes de o console existir e para o último recurso, que não passa pelo console.
- **Pontos do arquiteto em aberto.** A-02 (como nasce o acesso do primeiro administrador da instância e como é o procedimento da instalação), A-10 (em que ambientes o mAIg roda e o que a Maind entrega para instalá-lo).

#### C-22. O atualizador do mAIg

- **O que faz.** Baixa a versão nova do mAIg pela ligação, confere pela assinatura que ela é da Maind e recusa a versão sem assinatura ou alterada (decisão 39). Quem troca a caixa depende do formato: no Docker, uma peça pequena do pacote, o zelador; no Kubernetes, o próprio cluster, acionado depois do aval (dono da Maind, 12/11/2026; `tecnologia.md`, C-22). Na casa do cliente, espera o aval do administrador da instância e se instala dentro da janela de horário que ele define; na hospedagem da Maind, instala sozinho, na janela de madrugada da Maind, com aviso aos owners da organização 7 dias antes, ou 24 horas numa correção de segurança (decisões 39 e 47). Conta o prazo de adiamento: 30 dias para uma versão comum, 7 para uma correção de segurança; vencido o prazo, o mAIg segue na versão velha, mas os apps recusam a conversa, com "Atualização necessária", até o aval (decisões 45 e 109). Anota a atualização no registro de cada organização (decisão 47). Avisa os administradores da versão à espera de aval e do prazo perto do fim (decisão 126). Os módulos dos apps não passam por aqui: quem os atualiza é o administrador da instância, pelo catálogo (C-15, decisão 88).
- **O que guarda.** A versão baixada à espera de aval, com o que mudou. A versão anterior, para a volta se a nova falhar: como, é A-21.
- **Com quem fala.** → o canal de atualização da Maind (M-04), pela ligação (C-18). ← o console (C-20), com o aval e a janela. → o escrivão (C-09), com uma linha em cada organização. → o carteiro (C-24). → a ligação (C-18) e o catálogo (C-15), com a versão em vigor, para a regra de versão.
- **Decisões que o exigem.** 30, 39, 45, 47, 109, 123, 126.
- **Mfs que atende.** `MF-107`, `MF-104`, `MF-108`.
- **Onda.** Onda 1.0.
- **Corte.** As decisões 30 e 39 nomeiam a atualização do mAIg. Proposta do arquiteto: separar do catálogo dos apps, porque o caminho é outro: baixa sozinho, espera aval, tem janela e prazo próprios, e precisa de volta.
- **Pontos do arquiteto em aberto.** A-21 (como busca, confere, espera o aval, instala e volta à versão anterior se ela falhar).

#### C-23. A ferramenta de cópia de segurança e restauração

- **O que faz.** Vem no mAIg e gera a cópia de segurança, cifrada, que quem opera a máquina guarda fora dela: a TI do cliente na casa do cliente, a Maind na hospedagem dela (decisão 65). A cópia inteira é cifrada por uma chave da cópia, criada na instalação, mostrada uma vez e guardada fora da máquina por quem a opera (dono da Maind, 12/11/2026); as partes de cada organização seguem cifradas também com a chave dela. A cópia leva o cofre, o registro de cada organização, o registro da instância e a configuração inteira: as organizações, os apps, as pessoas, as permissões e as regras da IA; só o cache fica de fora (decisões 93 e 116). O cofre e o registro de cada organização saem cifrados com a chave dela (decisão 57). Restaura numa máquina nova: a instância volta como estava na data da cópia, sem a TI recadastrar nada; cada organização só volta com o código de recuperação dela, digitado pelo owner da organização; a organização sem código fica sem restaurar, e as outras voltam; o que mudou depois da data da cópia se perde, inclusive linhas do registro (decisões 87 e 116). Anota cada restauração no registro de cada organização e no registro da instância (decisões 29, 65 e 102). Depois da restauração, o chaveiro pede sozinho o atestado novo dos certificados, quando precisa, e o painel da instância mostra o estado de cada organização até a volta completa (decisão 116). Informa ao painel a data da última cópia (decisão 116).
- **O que guarda.** Nada: gera o arquivo e o entrega a quem opera a máquina.
- **Com quem fala.** ← quem opera a máquina, pelo console (C-20) ou na própria máquina. → o cofre (C-10), os registros (C-12 e C-13), o livro de regras (C-05) e o cadastro das pessoas (C-02), que ela copia e devolve. → o chaveiro (C-11), para cifrar e, na restauração, para pedir o código de recuperação e os atestados novos. → o lugar da cópia (P-06). → o escrivão (C-09).
- **Decisões que o exigem.** 29, 57, 65, 87, 93, 102, 116.
- **Mfs que atende.** `MF-107`, `MF-102`, `MF-105`, `MF-110`.
- **Onda.** Onda 1.0.
- **Corte.** A decisão 65 nomeia "uma ferramenta que vem no mAIg".
- **Pontos do arquiteto em aberto.** A-22 (como faz e restaura a cópia, como cifra cada parte, o registro da instância e a configuração inclusive, e se a chave do certificado de cada organização entra nela).

#### C-24. O carteiro dos avisos

- **O que faz.** Entrega todo aviso do mAIg em dois lugares: sempre no console, e também por e-mail, só com o tipo do aviso, a organização e um link, sem dado nenhum (decisão 64). Na onda 1.0, cada aviso tem destinatário fixo, e ninguém o desliga nem o redireciona: os avisos de segurança vão aos owners da organização e ao auditor; a queda de um banco e de uma IA, o limite de gasto, a tarefa marcada que parou e o fim do contrato vão aos owners da organização; o certificado da organização perto de vencer vai aos owners e aos administradores da instância; os avisos da instância, a ligação fora, a versão nova à espera de aval, o prazo de adiamento perto do fim, a falha de envio de e-mail e o certificado do endereço perto de vencer, vão a todos os administradores da instância (decisão 126). Os avisos de segurança chegam sempre: a troca de um owner da organização, a suspensão de um app, os atos sensíveis aos auditores e, na onda 1.1, a desinstalação de um app (decisões 85 e 107). Entrega também o que não é aviso e chega sempre: o link de primeiro acesso, inclusive o do primeiro owner, criado pelo mAIg no fim do setup com o e-mail vindo do Gerenciador (seção 9, item 8), o link de troca de senha e o aviso de bloqueio à própria pessoa (decisões 51 e 99). Na hospedagem da Maind, o aviso de atualização 7 dias antes (decisão 47). Alimenta o painel de alertas com os avisos de segurança e o alerta do limite de pedidos (decisão 89). Manda o e-mail pelo servidor de e-mail da empresa, configurado e testado pelo administrador da instância; na hospedagem da Maind, pelo serviço de e-mail da Maind (decisões 90 e 125). Mostra no painel da instância quando um envio falha (decisão 125). Na onda 1.1, obedece à lista "o que a organização permite" e às preferências de cada pessoa, fora os avisos de segurança (decisões 64 e 126).
- **O que guarda.** Os avisos de cada organização e da instância, para aparecerem no console e no painel de alertas. Os e-mails que ainda não saíram.
- **Com quem fala.** ← todo componente que avisa: o cadastro (C-02), o emissor de passes (C-03), a portaria (C-04), o livro de regras (C-05), o leitor (C-06), o intermediário (C-07), o escrivão (C-09), o chaveiro (C-11), a guarda dos kits (C-14), o catálogo (C-15), a ligação (C-18) e o atualizador (C-22). → o console (C-20). → o servidor de e-mail da empresa (P-03) ou o serviço de e-mail da Maind (M-05). ← o console (C-20), na configuração e no teste do servidor.
- **Decisões que o exigem.** 47, 51, 54, 64, 71, 75, 85, 89, 90, 99, 107, 125, 126.
- **Mfs que atende.** `MF-110`, `MF-102`, `MF-101`, `MF-103`, `MF-105`, `MF-106`, `MF-108`.
- **Onda.** Onda 1.0. A lista "o que a organização permite" e as preferências, onda 1.1.
- **Corte.** A decisão 64 diz que "o mAIg passa a enviar e-mail", e a decisão 126 fixa os destinatários. Proposta do arquiteto: um carteiro único, para que a lista de destinatários fixos da onda 1.0 e a regra "aviso de segurança chega sempre" fiquem num lugar só.
- **Pontos do arquiteto em aberto.** Nenhum dos 39 cai aqui. Três pontos a mais, levantados no fechamento da primeira versão e listados na seção 9: como o mAIg se conecta ao servidor de e-mail, como é o envio de teste e o que acontece com os e-mails que não saíram quando o servidor volta.

### 3.8 A segunda versão

#### C-25. A ponte dos servidores MCP

- **O que faz.** Na segunda versão, dá à IA as ferramentas da empresa, só para leitura (`MF-111`). O owner da organização cadastra cada servidor MCP no console, com o endereço e o acesso; toda ferramenta nasce bloqueada, e ele libera uma a uma as de leitura; o servidor nasce desligado para todos os apps, e ele escolhe quais apps o usam. A ponte mostra ao modelo só as ferramentas liberadas, faz cada chamada pelo núcleo, entrega o resultado ao módulo e anota a chamada no registro (decisão 5). Nenhum app fala com o servidor direto.
- **O que guarda.** O cadastro dos servidores e a lista das ferramentas, com o que está liberado, no livro de regras (C-05). O acesso a cada servidor, no cofre (C-10), se A-35 confirmar.
- **Com quem fala.** ← a portaria (C-04), com o pedido do módulo. ← o intermediário da IA (C-07), quando o modelo pede uma ferramenta. → os servidores MCP da empresa (P-10). → o escrivão (C-09). ← o console (C-20).
- **Decisões que o exigem.** 5, 16, 92. As regras da `MF-111` são pontos de partida do Horus que o mAIg ainda confirma.
- **Mfs que atende.** `MF-111`.
- **Onda.** Segunda versão, inteira.
- **Corte.** A `MF-111` nomeia os servidores MCP como parte do núcleo (decisão 5). Proposta do arquiteto: a ponte é a peça do núcleo que os alcança, pela mesma porta única dos bancos e da IA.
- **Pontos do arquiteto em aberto.** A-34 (como aplica a lista de ferramentas liberadas), A-36 (como a Maind alcança um servidor MCP da empresa na hospedagem da Maind), A-37 (o que o uso das ferramentas muda no custo da IA e no tempo da resposta). Também toca A-35.

#### C-26. A ligação com o provedor de identidade da empresa

- **O que faz.** Na segunda versão, oferece o login da empresa como mais um jeito de entrar, ligado pelo owner da organização, organização por organização (`MF-112`, decisões 16 e 40). Leva a pessoa à tela de login da empresa e recebe a confirmação assinada do provedor de identidade, que fica no mAIg e nunca vai à nuvem (decisão 32). Entra só quem o owner da organização cadastrou (decisões 23 e 77). Pelo ponto de partida do Horus, traz o papel da pessoa, que vale dentro de cada app (decisão 40), e reconfirma a sessão com o provedor a cada 8 horas. O owner da organização e o administrador da instância seguem entrando no console por usuário e senha (decisão 24).
- **O que guarda.** Os dados da ligação com o provedor de cada organização, no livro de regras (C-05).
- **Com quem fala.** ← a porta de entrada (C-01). → o provedor de identidade da empresa (P-09), por uma saída liberada (decisão 90). → o cadastro das pessoas (C-02), para conferir o cadastro. → o emissor de passes (C-03).
- **Decisões que o exigem.** 16, 23, 24, 32, 40, 50, 90, 92.
- **Mfs que atende.** `MF-112`, `MF-101`.
- **Onda.** Segunda versão, inteira.
- **Corte.** A `MF-112` nomeia o login da empresa. Proposta do arquiteto: peça própria porque conversa com um sistema de fora e tem relógio próprio, o da reconfirmação.
- **Pontos do arquiteto em aberto.** A-39 (confirmar que o login da empresa permite reconfirmar a sessão a cada 8 horas). Também toca A-38.

## 4. Os periféricos da casa do cliente

Periférico é tudo o que não é o mAIg, mas de que o mAIg depende para funcionar. É da empresa cliente, e o mAIg espera dele o que está abaixo.

#### P-01. A máquina onde o mAIg roda

- **O que é.** O servidor, a máquina virtual, a VPS ou o cluster Kubernetes da empresa onde a TI instala o mAIg, num dos dois formatos do pacote (dono da Maind, 12/11/2026). Na hospedagem da Maind, são as máquinas da Maind, separadas da nuvem dos apps (decisão 48).
- **O que o mAIg espera.** Ficar ligada; ter um caminho interno até cada banco e até o servidor de e-mail; ter as saídas liberadas; ser operada por quem faz a cópia de segurança e usa o procedimento da instalação (decisões 65 e 100). Quem controla a máquina ligada ainda alcança, com muito esforço, o que estiver em uso: é o risco aceito da decisão 57.
- **Quem fala com ela.** O instalador (C-21), o procedimento da máquina e a ferramenta de cópia (C-23), por quem a opera.
- **Decisões.** 9, 48, 57, 65, 100. **Onda.** Onda 1.0. Em que ambientes o mAIg roda é A-10.

#### P-02. Os bancos da empresa

- **O que é.** Os bancos de tabelas que os apps consultam, consultados por SQL, a linguagem de consulta desses bancos, de um tipo que esteja na lista única da primeira versão (decisão 110).
- **O que o mAIg espera.** Um usuário que só lê, criado pela TI do cliente e testado no cadastro (decisão 61); se a empresa quer recorte, um usuário mais restrito, cadastrado como banco à parte (decisão 73); um caminho na rede interna até o banco; a senha, cadastrada pelo owner da organização (decisão 67). Na hospedagem da Maind, o banco aceita conexão só do endereço fixo da Maind, cifrada, com o usuário que só lê (decisão 91). Quando o banco para, o pedido falha, fica no registro, e o owner da organização é avisado (decisão 71).
- **Quem fala com ele.** Só o leitor dos bancos (C-06). **Decisões.** 5, 61, 67, 71, 73, 91, 110, 124. **Onda.** Onda 1.0.

#### P-03. O servidor de e-mail da empresa

- **O que é.** O servidor por onde saem os links de primeiro acesso, os links de troca de senha e os avisos (decisão 90).
- **O que o mAIg espera.** Aceitar envio a partir da máquina do mAIg, com um endereço de remetente; ser configurado e testado pela TI dentro do setup, antes de o link do primeiro owner sair (decisão 125); e caixas de e-mail que funcionem para cada owner da organização, auditor e administrador. Quem opera esse servidor ainda poderia alcançar um link; por isso o sinal de uso indevido é o owner da organização encontrar o link já usado (decisão 90). Se o servidor para, os avisos seguem no console, e o painel mostra a falha (decisão 125).
- **Quem fala com ele.** Só o carteiro (C-24). **Decisões.** 51, 64, 90, 99, 125, 126. **Onda.** Onda 1.0.

#### P-04. Os provedores de IA

- **O que é.** As empresas que oferecem os modelos de IA. A conta e a chave são sempre da empresa cliente, que contrata e paga (decisão 22).
- **O que o mAIg espera.** Uma chave só para o mAIg, para a fatura bater com a visão do consumo (`MF-106`); uma saída liberada da máquina do mAIg até cada provedor (decisão 19); e, quando um app precisa da web, que a busca seja feita pelo provedor (decisão 63). O que chega ao provedor fica sob as regras dele (visão). Com quais provedores a primeira versão fala é pergunta para o dono da Maind (seção 9).
- **Quem fala com ele.** Só o intermediário da IA (C-07). **Decisões.** 19, 20, 22, 63, 71, 75, 112. **Onda.** Onda 1.0.

#### P-05. O Google, provedor de login

- **O que é.** O Google, quando o owner da organização liga a entrada pela conta Google; cada organização nasce só com usuário e senha (decisão 98).
- **O que o mAIg espera.** Uma saída liberada até o Google (decisão 90); contas Google das pessoas com o mesmo e-mail do cadastro; que o Google confirme quem a pessoa é, enquanto o mAIg decide se ela entra (`MF-101`). Com o Google fora do ar, ninguém começa sessão nova por ele, e quem já entrou segue, porque o passe se renova com o mAIg (decisões 37 e 98).
- **Quem fala com ele.** A porta de entrada (C-01), com o cadastro das pessoas (C-02). **Decisões.** 16, 37, 90, 98. **Onda.** Onda 1.0.

#### P-06. O lugar da cópia de segurança

- **O que é.** Um lugar da empresa, fora da máquina do mAIg, onde a TI guarda o arquivo cifrado que a ferramenta gera (decisão 65). Na hospedagem da Maind, é da Maind.
- **O que o mAIg espera.** Que o arquivo seja guardado e que a cópia seja feita com a regularidade que a TI escolher; a data da última cópia aparece no painel (decisão 116). O código de recuperação de cada organização fica em outro lugar, com o owner da organização, e nunca com a Maind (decisão 87). Quem guarda a cópia não lê nada (decisão 57).
- **Quem fala com ele.** A ferramenta de cópia (C-23), por quem opera a máquina. **Decisões.** 57, 65, 87, 93, 116. **Onda.** Onda 1.0.

#### P-07. A rede, o firewall e a VPN

- **O que é.** A rede interna da empresa, as saídas liberadas para a internet, o nome e o certificado do endereço do mAIg na rede e a VPN de quem trabalha de fora (decisões 6, 26, 90 e 120).
- **O que o mAIg espera.** Nenhuma porta de entrada (decisão 6). Saídas liberadas, uma a uma: o ponto de conexão da Maind, um nome só com IP fixo, na porta 443, por HTTP/2 ou, quando o intermediário da empresa não o deixa passar, por WebSocket (dono da Maind, 12/11/2026), cada provedor de IA, o Google se usado, o servidor de e-mail da empresa e, na segunda versão, o provedor de identidade (decisão 90). Um endereço interno para o mAIg, com nome e certificado escolhidos e instalados pela TI, que ela troca antes de vencer (decisão 120). Que a VPN leve até o mAIg quem trabalha de fora e, na onda 1.1, o suporte da Maind e o auditor de fora, se a TI conceder (decisões 26 e 127). A lista do que sai pela ligação fica à vista da TI no painel (decisão 123). Sem a saída até a Maind, o mAIg não funciona: não há modo sem ligação (decisão 122).
- **Quem fala com ela.** A ligação (C-18), o intermediário da IA (C-07), a porta de entrada (C-01), o carteiro (C-24) e o console (C-20). **Decisões.** 6, 19, 26, 90, 120, 122, 123, 127. **Onda.** Onda 1.0. Que endereço exato a TI libera é A-28.

#### P-08. O navegador das pessoas

- **O que é.** O programa em que cada pessoa abre o app e em que o administrador da instância, o owner da organização e o auditor abrem o console.
- **O que o mAIg espera.** Alcançar a nuvem do app pela internet e o endereço do mAIg pela rede ou pela VPN; deixar a tela do app falar com o endereço interno para renovar o passe a cada 15 minutos (decisão 37); levar à nuvem só o código de uso único (decisão 32); na onda 1.1, receber a planilha direto do mAIg (decisão 74). Se o navegador bloqueia a conversa com o endereço interno, o passe não se renova, e a pessoa perde o app em até 15 minutos.
- **Quem fala com ele.** A porta de entrada (C-01) e o console (C-20); a nuvem do app (M-06). **Decisões.** 26, 32, 37, 74. **Onda.** Onda 1.0. Como resolver a permissão que o navegador pede é A-03.

#### P-09. O provedor de identidade da empresa (segunda versão)

- **O que é.** O sistema onde a empresa guarda as contas dos funcionários e confere a senha de cada um (`MF-112`).
- **O que o mAIg espera.** Que fale o padrão que o mAIg aceita (pelo ponto de partida do Horus, o OpenID Connect; o SAML não é aceito); que a TI o prepare para aceitar o mAIg e entregue ao owner da organização os dados da ligação; que responda à reconfirmação da sessão. O que acontece quando ele não responde é do dono da Maind.
- **Quem fala com ele.** A ligação com o provedor de identidade (C-26). **Decisões.** 16, 24, 32, 40, 90, 92. **Onda.** Segunda versão.

#### P-10. Os servidores MCP da empresa (segunda versão)

- **O que é.** Os programas da empresa que oferecem à IA ferramentas prontas para consultar os sistemas internos (`MF-111`).
- **O que o mAIg espera.** Um endereço e um acesso, entregues pela TI ao owner da organização; a marca "só leitura" em cada ferramenta que só lê; uma credencial de leitura nos sistemas que o servidor consulta, porque essa garantia é da empresa, e não do mAIg. Com o mAIg na casa do cliente, o servidor é alcançado de dentro da rede; na hospedagem da Maind, como alcançá-lo é A-36.
- **Quem fala com ele.** A ponte dos servidores MCP (C-25). **Decisões.** 5, 9, 16, 92. **Onda.** Segunda versão.

## 5. Os componentes do lado da Maind

A primeira versão não tem modo sem ligação (decisão 122): sem estas peças, o mAIg na casa do cliente não recebe organização nem kit, não faz login nos apps, não confere licença e não se atualiza. A nuvem dos apps entra só como "do outro lado": o que o mAIg espera dela, sem detalhar nenhum app.

#### M-01. O ponto de conexão

- **O que faz.** É o lugar, na Maind, onde os mAIg de todos os clientes se conectam. Guarda as ligações abertas e entrega cada pedido ao mAIg certo e cada resposta à parte de fora certa (decisão 38). Atende os dois transportes da ligação, gRPC sobre HTTP/2 e WebSocket, num nome só, com IP fixo, na porta 443, atrás do qual fica também o registro de imagens (dono da Maind, 12/11/2026). Confere, pelo certificado da ligação, qual instância está do outro lado (decisões 38 e 86). Faz as duas pontas junto com a peça de dentro do mAIg, sem serviço de outra empresa no caminho (decisão 38). Vê a queda de uma ligação do outro lado e avisa a Maind (decisão 71). Recebe o mínimo de operação de cada instância (decisão 123). Precisa de mais de um servidor, porque é a peça da Maind mais valiosa para um atacante (decisão 33).
- **O que guarda.** As ligações abertas e a que instância e organizações cada uma pertence. O mínimo de operação recebido. O que mais guarda das conversas que passam é do arquiteto; o padrão é o da decisão 36 para a nuvem: só o tamanho, a hora e o número do pedido.
- **O que o mAIg espera dele.** Estar sempre de pé, com um endereço que a TI do cliente conhece e que não muda sem aviso (A-28); aceitar duas ou três linhas por instância (decisão 33); nunca começar uma conversa com a rede do cliente, só descer pedidos pela ligação que o mAIg abriu (decisão 33); e não atrasar as respostas pequenas por causa de uma grande (decisão 33).
- **Com quem fala.** ← a ligação de cada mAIg (C-18), que a abre. ← a nuvem dos apps (M-06), com os pedidos; → a nuvem, com as respostas. → a emissão de certificados (M-02), o servidor das contratações (M-03) e o canal de atualização (M-04), que conversam com os mAIg por ele. → a equipe da Maind, no aviso de queda.
- **Decisões que o exigem.** 6, 33, 38, 41, 71, 86, 122, 123. **Mfs.** `MF-108`. **Onda.** Onda 1.0.
- **Corte.** As decisões 33 e 38 nomeiam o ponto de conexão.
- **Pontos do arquiteto em aberto.** A-28 (o endereço exato que a TI libera e como ela fica sabendo se ele mudar), A-29 (como aguenta muitas pessoas ao mesmo tempo e a queda de um servidor da Maind, e o caminho alternativo para a empresa cujo intermediário quebra a ligação; a metade do caminho alternativo é da ligação, C-18). O compromisso de disponibilidade é do dono da Maind.

#### M-02. A emissão de certificados: o cartório da Maind

- **O que faz.** Atesta as chaves públicas que os mAIg mandam, como um cartório que reconhece a firma sem ter a caneta: nunca recebe uma chave privada (decisão 86). As chaves do cartório ficam num cofre de chaves portátil da Maind, o OpenBao, que se destranca pelo cofre em hardware da nuvem quando há um; a raiz fica fora de linha e só é usada com duas pessoas (dono da Maind, 12/11/2026). Emite e renova o certificado de cada organização, por 30 dias, quando a organização é criada e a cada renovação pela ligação (decisões 28 e 44); o certificado de identidade de cada app, curto e trocado sozinho (decisão 56); e o certificado da ligação (decisão 38). Cancela um certificado antes do prazo só com a autorização de duas pessoas da Maind, e o ato vai ao registro da organização (decisão 44). O endereço da Maind, com que os mAIg conversam, é provado por uma autoridade certificadora pública; é o único lugar em que ela entra (decisão 56). Depois de uma restauração, atende o pedido de atestado novo que o mAIg faz sozinho (decisão 116).
- **O que guarda.** As chaves públicas atestadas, as validades e os cancelamentos, com as duas pessoas que autorizaram. Nenhuma chave privada.
- **O que o mAIg espera dele.** Estar de pé o bastante para a renovação de 30 dias nunca falhar por muito tempo, porque uma falha longa chega a trancar organizações (decisão 44); e atestar só o que vem de uma instância com ligação conferida.
- **Com quem fala.** ← o chaveiro de cada mAIg (C-11), pela ligação e pelo ponto de conexão (M-01). → a nuvem dos apps (M-06), que precisa da chave pública da organização para conferir a assinatura do passe (decisão 32). ← duas pessoas da Maind, no cancelamento.
- **Decisões que o exigem.** 10, 28, 38, 41, 44, 56, 86, 116. **Mfs.** `MF-103`, `MF-107`, `MF-101`, `MF-108`. **Onda.** Onda 1.0.
- **Corte.** As decisões 28, 44 e 86 nomeiam a emissão de certificados da Maind.
- **Pontos do arquiteto em aberto.** Toca A-08 (a validade do certificado do kit e a revogação). A regra das duas pessoas é um procedimento da Maind, e como ela se cumpre é parte de A-08.

#### M-03. O servidor das contratações e o handshake

- **O que faz.** É a face das máquinas do lado da Maind: o servidor da Maind Tech que confere as contratações (decisão 10) contra o que a equipe da Maind cadastrou no Gerenciador do mAIg (M-07), onde o app, a organização, o e-mail do primeiro owner e a data do fim do contrato são registrados (decisões 10 e 11; seção 9, item 8). Recebe a chave temporária que a interface de setup apresenta na primeira conexão, confere-a no Gerenciador e a marca como usada; entrega pela ligação o arquivo assinado da organização e o manifesto assinado do que a organização pode ter, com o kit de cada app contratado, um por app e por organização; é a metade "o que pode ser instalado" da instalação no estilo de um gerenciador de pacotes, e o registro de imagens (M-04) é a metade "os pacotes". Atende o handshake contratual: confere o arquivo da organização e o kit, procura a contratação e, se a encontra, libera o app só para aquela organização e entrega a licença, assinada, com a data do fim do contrato e a carência (decisões 11 e 56). Emite a licença renovada a cada renovação (decisão 56). Executa a ação manual que para um app, só em três casos, falta de pagamento depois dos avisos, incidente de segurança ou ordem judicial, com duas pessoas autorizando e o motivo que vai ao registro da organização (decisões 13 e 94). Na onda 1.1, manda o pedido de encerramento de uma organização cujos contratos acabaram (decisão 78). Deixa a equipe da Maind acompanhar a situação dos contratos pelo lado dela (`MF-103`).
- **O que guarda.** As contratações: app, organização, data do fim, carência; as licenças emitidas e as renovações; as ações manuais, com o motivo e as duas pessoas; os kits entregues.
- **O que o mAIg espera dele.** Responder ao handshake pela ligação, sem outro caminho; só liberar o que foi cadastrado, e só para a organização cadastrada; mandar a licença de um jeito que o mAIg confere pela assinatura; e nunca parar um app fora dos três casos.
- **Com quem fala.** ← a guarda dos kits e das licenças de cada mAIg (C-14), pela ligação e pelo ponto de conexão (M-01); → a mesma guarda, com a licença, a ação manual e o pedido de encerramento. ← o Gerenciador (M-07), com as organizações, as contratações, as renovações e as aprovações da equipe da Maind; → o Gerenciador, com a situação de cada instância e de cada app. O kit chega à instância por aqui, pela ligação (A-09, fechado).
- **Decisões que o exigem.** 10, 11, 13, 56, 78, 94. **Mfs.** `MF-103`, `MF-104`, `MF-107`. **Onda.** Onda 1.0. O pedido de encerramento, onda 1.1.
- **Corte.** A decisão 10 nomeia "um servidor da Maind Tech para o handshake contratual". Proposta do arquiteto, revista em 12/11/2026: separar a face das máquinas (este servidor, com o handshake, a licença e a ação manual) da face das pessoas, o Gerenciador do mAIg (M-07), que é a origem das organizações e das contratações e de onde saem o kit e o arquivo da organização; a leitura (a) do item 8 da seção 9 ficou superada: não há portal.
- **Pontos do arquiteto em aberto.** A-09 (o que vem no kit, além do certificado, e por que caminho ele chega com segurança ao administrador da instância): fechado, o caminho é a ligação: o kit é parte do manifesto assinado que este servidor entrega. Também toca A-08 e A-25.

#### M-04. O canal de atualização e a assinatura das versões

- **O que faz.** Publica cada versão nova do mAIg, assinada pela Maind, marcando a que é correção de segurança, para o atualizador de cada instância baixá-la pela ligação (decisões 39 e 45). É um registro de imagens próprio da Maind, atrás do mesmo nome e IP fixo do ponto de conexão, e assina as imagens e o pacote do Kubernetes com chaves guardadas no OpenBao (dono da Maind, 12/11/2026). A imagem do mAIg, com a interface de setup, e o pacote do Kubernetes são públicos no registro, assinados, e é deles que a TI parte, pelo endereço que o PDF indica; as imagens dos módulos saem só com o bilhete de download que o núcleo pede pela ligação, para os apps que o manifesto do servidor das contratações (M-03) autoriza: é a metade "os pacotes" da instalação no estilo de um gerenciador de pacotes. Publica cada versão do módulo de cada app, assinada pela Maind, para o administrador da instância instalar (decisão 88). Entrega o pacote com que a TI do cliente instala o mAIg pela primeira vez (A-10). Uma versão sem assinatura, ou alterada no caminho, é recusada pelo mAIg (visão, decisão 88).
- **O que guarda.** As versões assinadas do mAIg e dos módulos, com a marca de correção de segurança, e o pacote de instalação.
- **O que o mAIg espera dele.** Que toda versão venha assinada; que a marca de correção de segurança seja clara, porque ela muda o prazo de 30 para 7 dias (decisão 45); e que a versão venha pelo mesmo caminho que a TI já liberou, ou que a TI saiba de onde ela vem (A-28).
- **Com quem fala.** ← o atualizador de cada mAIg (C-22) e o catálogo dos apps (C-15), pela ligação e pelo ponto de conexão (M-01). ← a equipe da Maind, que publica e assina.
- **Decisões que o exigem.** 30, 39, 45, 47, 88, 109. **Mfs.** `MF-107`, `MF-104`. **Onda.** Onda 1.0.
- **Corte.** A visão nomeia "o canal de atualização da Maind", e as decisões 39 e 88 nomeiam a assinatura das versões. Proposta do arquiteto: tratar as duas, a publicação e a assinatura, como uma peça só do lado da Maind.
- **Pontos do arquiteto em aberto.** Toca A-10 (o que a Maind entrega para instalar) e A-21 (a volta à versão anterior).

#### M-05. O serviço de e-mail da hospedagem da Maind

- **O que faz.** Nas instâncias hospedadas pela Maind, faz o papel do servidor de e-mail da empresa: por ele saem os links de primeiro acesso, os links de troca de senha e os avisos, sem dado nenhum (decisão 90). O mAIg só fala SMTP com ele; o fornecedor é escolhido na implantação (dono da Maind, 12/11/2026). Por ele sai também o PDF com senha que o Gerenciador (M-07) manda ao e-mail oficial de cada organização, do domínio da Maind; a senha do PDF nunca vai por e-mail: a equipe da Maind a passa ao responsável por telefone ou mensagem.
- **O que guarda.** Nada do mAIg.
- **O que o mAIg espera dele.** O mesmo que espera do servidor da empresa (P-03): aceitar o envio, ser testado antes da primeira organização (decisão 125) e não ter ninguém da Maind usando um link antes do owner da organização; o sinal de uso indevido é o mesmo da decisão 90.
- **Com quem fala.** ← o carteiro dos avisos (C-24) das instâncias da Maind.
- **Decisões que o exigem.** 51, 64, 90, 125, 126. **Mfs.** `MF-110`, `MF-101`. **Onda.** Onda 1.0.
- **Corte.** A decisão 90 nomeia "o serviço de e-mail da Maind".
- **Pontos do arquiteto em aberto.** Os mesmos três pontos do carteiro (C-24), na seção 9.

#### M-06. A nuvem dos apps: a parte de fora de cada app, do outro lado

- **O que é.** A parte de fora de cada app, que roda fora do mAIg; no Horus, a nuvem da Maind, com as telas (decisão 4). Não é construída pelo mAIg: aqui fica só o que o mAIg espera dela. Na hospedagem da Maind, ela roda em máquinas separadas das instâncias (decisão 48).
- **O que o mAIg espera dela.**
  - **Identidade e permissões.** Estar registrada no mAIg com um certificado e com a lista do que o app pode pedir (decisão 4); apresentar o certificado dentro da ligação (decisão 6); e declarar o contrato de app (A-11).
  - **Só pela ligação.** Falar com o mAIg só pela ligação que o mAIg abriu, nunca por outro caminho (decisão 33); numerar cada pedido e levar nele o passe da pessoa (decisão 33); respeitar a regra de versão por prazo e recusar a conversa com um mAIg ou um módulo vencido, mostrando "Atualização necessária" (decisões 45 e 109).
  - **O login.** Mandar a pessoa à porta de entrada do mAIg; receber do navegador só o código de uso único; trocá-lo pelo passe pela ligação; conferir a assinatura do passe com a chave pública da organização; pedir um passe por app; nunca ver a senha nem fabricar um passe (decisões 32, 37 e 40).
  - **O que guarda.** Só a receita de cada painel, nunca o resultado; a resposta só passa pela memória e nunca é gravada; as anotações técnicas guardam só o tamanho, a hora e o número do pedido (decisões 35 e 36). Uma empresa de auditoria independente confere isso (decisão 36).
  - **O que recebe.** A resposta pronta, até o teto, com as colunas sensíveis mascaradas; na onda 1.1, a consulta feita, se liberada; nunca a planilha, que vai direto ao navegador (decisões 43 e 74).
  - **As tarefas marcadas.** Pedir só "rode a tarefa", na hora marcada, e aceitar que o mAIg confira o passe de agendamento a cada rodada; com a ligação fora, esperar até uma hora e rodar uma rodada atrasada só, dizendo que atrasou (decisões 42 e 69).
  - **As telas.** Mostrar a luz de estado que o mAIg fornece e o aviso próprio, e não um erro, quando a ligação está fora ou a versão venceu (decisões 70 e 121). O resto da tela é do app.
  - **O registro.** Na onda 1.1, pedir ao núcleo que anote o que acontece só dentro do app, só com os campos fixos (decisões 59 e 104).
  - **As organizações.** Conhecer cada organização a partir do Gerenciador do mAIg (M-07), que é onde ela nasce, sem um segundo cadastro que possa divergir (A-25; leitura (b) do item 8 da seção 9, confirmada pelo dono).
- **Com quem fala.** → o ponto de conexão (M-01), com os pedidos; ← o ponto de conexão, com as respostas. ← o navegador das pessoas (P-08). ← a emissão de certificados (M-02), para a chave pública da organização. ← o Gerenciador (M-07), com a organização e os apps contratados.
- **Decisões que o exigem.** 4, 6, 32, 33, 34, 35, 36, 37, 40, 42, 43, 45, 59, 69, 70, 74, 104, 109, 121. **Mfs.** `MF-108`, `MF-109`, `MF-101`, `MF-102`. **Onda.** Onda 1.0.
- **Corte.** A decisão 4 nomeia a parte de fora do app.
- **Pontos do arquiteto em aberto.** A-25 (como uma organização passa a existir na parte de fora de cada app): fechado pela leitura (b) do item 8 da seção 9, confirmada pelo dono: a organização nasce no Gerenciador (M-07) e chega daí à nuvem de cada app.

#### M-07. O Gerenciador do mAIg: o cockpit interno da Maind

- **O que faz.** É o cockpit de controle e cobrança da Maind, na nuvem da Maind, separado de qualquer app: não é o primeiro app e não passa pela ligação. **Só a equipe da Maind o usa**: na primeira versão não há portal do cliente nem página pública (dono da Maind, 12/11/2026; seção 9, item 8). Reúne as organizações, as contratações, a cobrança e as assinaturas. Cria a organização, com o e-mail oficial dela, o e-mail do primeiro owner e os apps contratados (app, fim do contrato, carência). Gera, para cada organização e instância a instalar, uma **chave temporária** de vida curta e uso único, que faz o papel do código de ativação; gera o **PDF protegido por senha**, com as instruções da primeira etapa e a chave, e o manda ao e-mail oficial da organização pelo serviço de e-mail da Maind (M-05); a senha do PDF é mostrada à equipe e vai ao responsável por outro canal, por telefone ou mensagem. Assina o **arquivo da organização** e o **manifesto do que a organização pode ter**, que o servidor das contratações (M-03) entrega pela ligação quando a chave é apresentada; registra a **autorização de cada app** (uma contratação nova vira uma entrada nova no manifesto, que desce às instâncias); renova; aprova com duas pessoas a ação manual (decisão 94), o cancelamento de um certificado (decisão 44) e o pedido de encerramento (decisão 78); acompanha a situação de cada instância e de cada app com o que M-03 devolve, inclusive a chave usada e quando; mantém a tabela de preços da IA; e tem o lugar da cobrança, cujo escopo é do PO e do dono. Informa à nuvem de cada app a organização e os apps contratados: é a origem (leitura (b), confirmada).
- **O que guarda.** As organizações, com o e-mail oficial e o do primeiro owner, e as contratações, que são a origem para M-03 e para a nuvem dos apps; as chaves temporárias, só pelo hash, com o uso e a validade; os PDFs enviados e quando; os documentos assinados; as aprovações, com as duas pessoas; a tabela de preços; a cobrança.
- **O que o mAIg espera dele.** Que a organização só exista por um arquivo assinado por ele; que o arquivo e o manifesto sejam conferíveis pela chave pública da Maind que vem na imagem; que a chave temporária valha uma vez só e por pouco tempo; e que nada dele dependa de um app.
- **Com quem fala.** ← a equipe da Maind, no cockpit. → o e-mail oficial da organização, pelo serviço de e-mail da Maind (M-05), com o PDF; a senha, pela equipe, por outro canal. → o servidor das contratações (M-03), com as organizações, as contratações, as chaves temporárias, os documentos assinados e as aprovações; ← M-03, com a situação de cada instância e de cada app. → a nuvem de cada app (M-06), com a organização e os apps contratados. → o registro de imagens (M-04), indiretamente: o manifesto diz quais imagens cada instância pode baixar.
- **Decisões que o exigem.** 10, 11, 44, 51, 78, 94, e a decisão do dono de 12/11/2026 sobre o fluxo do setup (seção 9, item 8). **Mfs.** `MF-103`, `MF-107`, `MF-110`. **Onda.** Onda 1.0: sem ele, nenhuma organização e nenhum kit chegam à instância.
- **Corte.** O dono nomeou o Gerenciador em 12/11/2026 e, no mesmo dia, tirou o portal da primeira versão. Proposta do arquiteto: o Gerenciador é a face das pessoas e a origem de tudo o que a instância recebe assinado; o servidor das contratações (M-03) é a face das máquinas, que confere a chave temporária e entrega o arquivo, o manifesto e a licença pela ligação; o registro de imagens (M-04) entrega as imagens. Juntos, M-03 e M-04 são as duas metades da instalação no estilo de um gerenciador de pacotes: o que pode ser instalado e os pacotes.
- **Pontos do arquiteto em aberto.** Fecha A-25 (a organização nasce aqui e chega daqui à nuvem de cada app, leitura (b), confirmada) e, com M-03, A-09 (o kit chega pela ligação). As leituras do fluxo do setup (a chave temporária como código de ativação; os apps instalados do mesmo jeito, sem PDF por app, com o kit e o bilhete; liberar e configurar com o owner) foram confirmadas pelo dono. Tecnologia: ver `tecnologia.md`, M-07.

## 6. As conexões

A tabela diz o que passa entre as peças e quem começa a conversa. Entre o mAIg e a Maind, quem começa é sempre o mAIg: a Maind só desce pedidos pela ligação que o mAIg abriu (decisão 33).

| De | Para | O que passa | Quem começa a conversa | Decisões |
| --- | --- | --- | --- | --- |
| Navegador (P-08) | Porta de entrada (C-01) | Login, escolha da organização, link de troca de senha, renovação do passe; na onda 1.1, página de status e planilha | O navegador | 32, 37, 66, 74, 99, 121 |
| Navegador (P-08) | Nuvem do app (M-06) | As telas do app e o código de uso único | O navegador | 32, 40 |
| Navegador (P-08) | Console (C-20) | A configuração e a consulta, de dentro da rede ou pela VPN | O navegador | 26, 120 |
| Porta de entrada (C-01) | Cadastro das pessoas (C-02) | A senha, ou a confirmação do Google | A porta de entrada | 23, 98, 99 |
| Porta de entrada (C-01) | Google (P-05) | A confirmação da conta Google | O mAIg, por uma saída liberada | 90, 98 |
| Emissor de passes (C-03) | Chaveiro (C-11) | A assinatura com a chave da organização | O emissor | 32, 86 |
| Nuvem do app (M-06) | Ponto de conexão (M-01) | Pedidos numerados, com o passe; a troca do código pelo passe; "rode a tarefa" | A nuvem do app | 32, 33, 42 |
| Ligação (C-18) | Ponto de conexão (M-01) | A ligação em duas ou três linhas, por gRPC sobre HTTP/2 ou, na reserva, por WebSocket; pedidos e respostas; o mínimo de operação | O mAIg, sempre | 6, 33, 38, 123; 12/11/2026 |
| Ligação (C-18) | Portaria (C-04) | Cada pedido que desce, com o número e o passe | A ligação | 33 |
| Portaria (C-04) | Emissor de passes (C-03) | A conferência do passe | A portaria | 33 |
| Portaria (C-04) | Livro de regras (C-05) | As permissões, os estados e os limites | A portaria | 5, 60, 89 |
| Portaria (C-04) | Compartimento (C-16) | O pedido conferido, com a pessoa e a organização | A portaria | 60 |
| Compartimento (C-16) | Portaria (C-04) | O que o módulo pede: permissão, dados, IA, anotação; na segunda versão, ferramentas MCP | O módulo | 4, 5 |
| Leitor dos bancos (C-06) | Cofre (C-10) | A senha do banco, na hora de ler | O leitor | 5, 57 |
| Leitor dos bancos (C-06) | Bancos da empresa (P-02) | A consulta, só leitura, com limite de tempo e de linhas | O mAIg, por dentro da rede; na hospedagem da Maind, pelo endereço fixo | 5, 61, 91, 124 |
| Intermediário da IA (C-07) | Cofre (C-10) | A chave do provedor, na hora de pedir | O intermediário | 5, 57 |
| Intermediário da IA (C-07) | Provedores de IA (P-04) | O pedido ao modelo, dentro da camada do app | O mAIg, por uma saída liberada por provedor | 19, 20, 22, 62 |
| Escrivão (C-09) | Registros (C-12, C-13) | As linhas, cifradas no registro da organização | O escrivão, único a escrever | 29, 57, 81, 102 |
| Escrivão (C-09) | Carteiro (C-24) | Os atos sensíveis, que viram aviso | O escrivão | 54, 85 |
| Fiscal da saída (C-08) | Ligação (C-18) | A resposta pronta, dentro do teto e mascarada | O fiscal | 34, 43, 124 |
| Fiscal da saída (C-08) | Porta de entrada (C-01) | A planilha, direto ao navegador (onda 1.1) | O fiscal | 74 |
| Carteiro (C-24) | Servidor de e-mail (P-03) ou serviço de e-mail da Maind (M-05) | E-mails sem dado: tipo do aviso, organização e link; os links de uso único | O mAIg, por uma saída liberada | 51, 64, 90, 99, 125 |
| Carteiro (C-24) | Console (C-20) | Os avisos e o painel de alertas | O carteiro | 64, 89, 126 |
| Console (C-20) | Livro de regras (C-05), Cadastro (C-02), Cofre (C-10), Catálogo (C-15), Guarda dos kits (C-14) | As configurações e os cadastros | O console, por um papel que entrou | 10, 12, 96 |
| Console (C-20) | Registros (C-12, C-13) | A consulta, só leitura; na onda 1.1, a cópia assinada | O console | 12, 80, 81 |
| Gerenciador (M-07) | E-mail oficial da organização, pelo serviço de e-mail da Maind (M-05) | O PDF com senha, com as instruções da primeira etapa e a chave temporária; a senha, por outro canal, pela equipe da Maind | A Maind | 10, 11; 12/11/2026 |
| Interface de setup (C-21) e Console (C-20) | Guarda (C-14) | A chave temporária digitada pela TI; no console, também para uma organização nova ou um app autorizado depois | A TI do cliente | 10, 29; 12/11/2026 |
| Guarda (C-14) | Servidor das contratações (M-03) | A chave temporária, na primeira conexão, ainda sem certificado; de volta, o arquivo da organização, o manifesto do que a organização pode ter com o kit de cada app, os certificados e a licença; depois, o handshake de cada app e as renovações | O mAIg, pela ligação | 10, 11, 28, 56, 86; 12/11/2026 |
| Gerenciador (M-07) | Servidor das contratações (M-03) | As organizações, as contratações, as chaves temporárias, os documentos assinados, as autorizações de apps e as aprovações com duas pessoas; de volta, a situação de cada instância e app | O Gerenciador | 10, 11, 44, 78, 94 |
| Gerenciador (M-07) | Nuvem do app (M-06) | A organização e os apps contratados (leitura (b) do item 8 da seção 9, confirmada) | O Gerenciador | 4, 11; A-25 |
| Servidor das contratações (M-03) | Guarda dos kits (C-14) | A ação manual com o motivo; na onda 1.1, o pedido de encerramento | A Maind, mas só pela ligação aberta | 33, 78, 94 |
| Chaveiro (C-11) | Emissão de certificados (M-02) | A chave pública; de volta, o atestado e as renovações | O mAIg, pela ligação | 28, 44, 56, 86 |
| Emissão de certificados (M-02) | Chaveiro (C-11) | O cancelamento de um certificado, com duas pessoas | A Maind, pela ligação aberta | 44 |
| Emissão de certificados (M-02) | Nuvem do app (M-06) | A chave pública da organização, para conferir o passe | A nuvem do app | 32, 86 |
| Atualizador (C-22) | Canal de atualização (M-04) | A versão nova do mAIg, assinada | O mAIg, pela ligação | 39, 45 |
| Catálogo (C-15) | Canal de atualização (M-04) | A versão nova do módulo de um app, assinada | O administrador da instância, pelo console | 88 |
| Catálogo (C-15) | Compartimento (C-16) | O módulo assinado, para rodar, atualizar, suspender ou parar | O catálogo | 4, 46, 88 |
| Ferramenta de cópia (C-23) | Lugar da cópia (P-06) | O arquivo cifrado; na volta, o código de recuperação de cada organização | Quem opera a máquina | 65, 87, 116 |
| Ferramenta de cópia (C-23) | Chaveiro (C-11) | A cifra da cópia; na volta, o código de recuperação e o pedido de atestado novo | A ferramenta | 57, 87, 116 |
| Ligação (C-18) | Luz de estado (C-19) e Console (C-20) | O estado da ligação | A ligação | 12, 70, 121 |
| Luz de estado (C-19) | Nuvem do app (M-06) | A luz e o aviso próprio | O mAIg, pela ligação | 70, 121 |
| Instalador (C-21) | Cadastro (C-02), Chaveiro (C-11), Registro da instância (C-13) | A conta do primeiro administrador, o certificado do endereço, o uso do procedimento | Quem opera a máquina | 100, 102, 120 |
| Suporte da Maind e auditor de fora | Console (C-20) | A configuração, por tempo limitado; o registro, só leitura (onda 1.1) | A pessoa, pela VPN que a TI concede | 68, 79, 127 |
| Ligação com o provedor de identidade (C-26) | Provedor de identidade (P-09) | O login da empresa e a reconfirmação a cada 8 horas (segunda versão) | O mAIg, por uma saída liberada | 32, 40, 90 |
| Ponte dos servidores MCP (C-25) | Servidores MCP (P-10) | A chamada de uma ferramenta liberada (segunda versão) | O mAIg | 5 |
| Ponto de conexão (M-01) | Equipe da Maind | O aviso de que uma ligação caiu e não voltou | O ponto de conexão | 71 |

## 7. Componentes por onda

### O que precisa existir na onda 1.0

Na casa do cliente, os 24 componentes C-01 a C-24, com as capacidades marcadas "onda 1.0" em cada um. Do lado da Maind, os 7 componentes M-01 a M-07. Dos periféricos, P-01 a P-08. É o mínimo para o Horus 2.0 sair com segurança: "a onda 1.0 liga e para" (decisão 95). Na onda 1.0, nenhum app é retirado nem desinstalado, nenhuma organização é encerrada e nenhum registro é excluído (decisão 106).

**O que cresceu na onda 1.0 em 12/11/2026, pelas decisões do dono da Maind** (`tecnologia.md`, seções 6 e 7): o pacote em dois formatos, com o Kubernetes na primeira versão (C-16, C-21, C-22, P-01); o segundo transporte da ligação, o WebSocket, com a troca automática (C-18, M-01); a interface de setup com a instalação no estilo de um gerenciador de pacotes (C-21, C-14) e o Gerenciador do mAIg (M-07), de onde a organização nasce, com as chaves temporárias e o PDF com senha. O portal do cliente, que chegou a entrar, saiu com a revisão do dono no mesmo dia. Os quatro entram na estimativa da decisão 92.

### O que chega na onda 1.1

Nenhum componente novo. A onda 1.1 "desfaz e encerra" (decisão 95), e cada capacidade dela cai num componente que já existe:

| Capacidade da onda 1.1 | Componente | Decisões |
| --- | --- | --- |
| O cockpit de ativação | Console (C-20), lendo o livro de regras (C-05) | 72, 95 |
| O segundo auditor e o auditor de fora, com acesso que vence; a VPN concedida | Cadastro das pessoas (C-02), Console (C-20) | 79, 97, 127 |
| A cópia assinada do registro | Escrivão (C-09), Chaveiro (C-11), Registro de cada organização (C-12), Console (C-20) | 80, 106 |
| Retirar um app, apagar a configuração guardada, desinstalar, com o aviso e o prazo | Livro de regras (C-05), Catálogo (C-15), Registro (C-12), Carteiro (C-24), Console (C-20) | 21, 106, 107, 108 |
| O encerramento de uma organização, o pedido pela Maind e a volta em 30 dias | Livro de regras (C-05), Guarda dos kits (C-14), Servidor das contratações (M-03), Console (C-20) | 31, 78, 114, 115 |
| O roteiro de saída do cliente | Nenhum componente novo: usa a cópia assinada, a retirada e o encerramento | 118 |
| O acesso de suporte da Maind, pela VPN | Console (C-20), Livro de regras (C-05), Escrivão (C-09) | 68, 127 |
| A consulta devolvida à tela e a planilha, com a liberação das duas saídas | Fiscal da saída (C-08), Porta de entrada (C-01), Livro de regras (C-05) | 74, 103 |
| A página de status | Luz de estado e página de status (C-19), Porta de entrada (C-01), Ligação (C-18) | 70, 121 |
| A lista "o que a organização permite" e as preferências de aviso | Livro de regras (C-05), Carteiro (C-24), Console (C-20) | 64, 126 |
| As linhas "informadas pelo app" | Escrivão (C-09), Catálogo (C-15), Nuvem do app (M-06) | 59, 104 |
| O cadastro das pessoas em lote | Cadastro das pessoas (C-02), Console (C-20) | 101 |

### O que fica para a segunda versão

- **A ponte dos servidores MCP (C-25)** e os servidores MCP da empresa (P-10): `MF-111` inteira (decisões 16 e 92).
- **A ligação com o provedor de identidade da empresa (C-26)** e o provedor de identidade (P-09): `MF-112` inteira (decisões 16 e 92).
- **A confirmação em dois passos**, configurável, no cadastro das pessoas (C-02) (decisão 50).
- **O fechamento da rede da instância da Maind**, hoje aberta na internet e protegida pelo login: é do lado da Maind e do dono da Maind, para a segunda versão ou depois (decisão 48).

### O que não entra, e não tem componente

Enviar o registro para sistemas de fora e os alertas automáticos de comportamento estranho (decisão 105); a retirada de um app no lugar do owner da organização (decisão 108); a leitura de fontes que não sejam bancos de tabelas consultados por SQL, e a gravação nos bancos (decisões 5 e 110); limites e modelos de IA por pessoa (decisão 96); a mudança de uma organização de instância ou de hospedagem (decisão 117); o funcionamento sem a ligação com a Maind (decisão 122). A regra de quem vê o quê dentro de um banco, pessoa a pessoa, é de cada app (decisões 60 e 73).

## 8. Os 39 pontos do arquiteto, componente a componente

Os 39 pontos são os "Falta o arquiteto do mAIg definir" das 12 mfs, na ordem da parte 4 do registro das decisões do PO. Cada um cai num componente; quando toca outro, a última coluna diz qual. Nenhum ficou sem componente.

| Código | Mf | O ponto, em resumo | Cai em | Também toca |
| --- | --- | --- | --- | --- |
| A-01 | `MF-101` | Quantas tentativas erradas bloqueiam a conta e por quanto tempo; e, na segunda versão, o desenho da confirmação em dois passos configurável (decisão 50) | C-02 Cadastro das pessoas | C-01, C-24 |
| A-02 | `MF-101` | Como nasce o acesso do primeiro administrador da instância e como é o procedimento da instalação, que devolve o acesso (fechado: na interface de setup, pela TI que digitou a chave temporária; o procedimento, na máquina ou no cluster) | C-21 Instalador e procedimento | C-02, C-13 |
| A-03 | `MF-101` | Como o navegador renova o passe direto com o mAIg quando pede permissão para um site da internet falar com um endereço interno | C-01 Porta de entrada | P-08, M-06 |
| A-04 | `MF-102` | Como o registro é guardado sem que ninguém o altere, cifrado com a chave da organização e consultável com o volume que só cresce | C-12 Registro de cada organização | C-09, C-11 |
| A-05 | `MF-102` | Onde fica a chave de cada organização, como o código de recuperação a restaura e quanto custa cifrar o registro e o cofre | C-11 Chaveiro | C-10, C-12, C-23 |
| A-06 | `MF-102` | Como o nome de uma pessoa excluída continua ligado às linhas do registro, sem que ela volte a ter acesso | C-12 Registro de cada organização | C-02 |
| A-07 | `MF-102` | Como o administrador da instância escreve no registro de uma organização sem poder lê-lo nem alterar uma linha | C-09 Escrivão do registro | C-12, C-20 |
| A-08 | `MF-103` | O formato do handshake contratual e da licença, a validade do certificado de cada kit e a revogação, com o dono da Maind | C-14 Guarda dos kits e das licenças | M-02, M-03, C-11 |
| A-09 | `MF-103` | O que vem no kit de instalação, além do certificado, e por que caminho ele chega com segurança ao administrador da instância (fechado: pela ligação, no manifesto assinado que o servidor das contratações entrega) | M-03 Servidor das contratações | M-07, C-14, C-21 |
| A-10 | `MF-103` | Em que ambientes o mAIg roda e o que a Maind entrega para instalá-lo | C-21 Instalador e procedimento | M-04, P-01 |
| A-11 | `MF-103` | O que um app declara ao núcleo para ser instalado: o contrato de app | C-15 Catálogo dos apps | C-16, M-06 |
| A-12 | `MF-103` | Como o app declara a lista dos tipos de ato das linhas informadas pelo app (onda 1.1) | C-15 Catálogo dos apps | C-09 |
| A-13 | `MF-104` | Como um mAIg novo conversa com um módulo antigo dentro do prazo de adiamento, e o contrário | C-16 Compartimento dos módulos | C-15, C-22 |
| A-14 | `MF-105` | Os limites de tempo e de linhas de cada consulta e como o mAIg testa, no cadastro, se o usuário do banco consegue gravar | C-06 Leitor dos bancos | P-02 |
| A-15 | `MF-105` | Os nomes dos bancos da lista única que a primeira versão lê, fato a levantar junto aos clientes de hoje do primeiro app | C-06 Leitor dos bancos | P-02 |
| A-16 | `MF-105` | Como o núcleo monta a sugestão das colunas sensíveis e quando a refaz | C-06 Leitor dos bancos | C-08, C-05 |
| A-17 | `MF-106` | Como o mAIg calcula o custo de cada pedido e com que precisão acompanha a fatura do provedor | C-07 Intermediário da IA | P-04, C-20 |
| A-18 | `MF-106` | Confirmar que o primeiro app responde bem na camada 1 e definir como um app diz ao núcleo, pedido por pedido, a camada de que precisa | C-07 Intermediário da IA | C-15 |
| A-19 | `MF-106` | Como o núcleo reconhece o que é dado e o que é total, e quantas linhas são "poucas" para um total contar como linha de dados | C-07 Intermediário da IA | |
| A-20 | `MF-106` | Como o owner da organização sabe quais modelos cada app consegue usar | C-15 Catálogo dos apps | C-20, C-07 |
| A-21 | `MF-107` | Como o mAIg busca a versão nova, confere que é da Maind, espera o aval, se instala e volta à versão anterior se ela falhar | C-22 Atualizador do mAIg | M-04, C-18 |
| A-22 | `MF-107` | Como a ferramenta faz e restaura a cópia, como cifra cada parte dela e se a chave do certificado de cada organização entra nela | C-23 Ferramenta de cópia | C-11, C-13, C-05 |
| A-23 | `MF-107` | O que sobra de uma organização encerrada e como o owner da organização e o auditor seguem lendo o registro dela (onda 1.1) | C-05 Livro de regras | C-02, C-11, C-12 |
| A-24 | `MF-107` | Como as organizações de uma mesma instância ficam separadas por dentro, além dos dois certificados | C-04 Portaria dos pedidos | C-10, C-12, C-16 |
| A-25 | `MF-107` | Como uma organização criada na Maind passa a existir na instância e na parte de fora de cada app (fechado: a organização nasce no Gerenciador e chega daí à instância, pela ligação, e à nuvem de cada app; leitura (b), confirmada) | M-07 Gerenciador do mAIg | M-06, M-03, C-14 |
| A-26 | `MF-107` | O tipo do certificado do endereço do mAIg e onde nasce a chave dele, conferindo a regra da decisão 86 | C-11 Chaveiro | C-01, C-21 |
| A-27 | `MF-108` | O que conta como "em andamento" quando a ligação cai e como o mAIg guarda e entrega esse trabalho no prazo curto | C-18 Ligação com a Maind | C-16, M-06 |
| A-28 | `MF-108` | Que endereço exato a TI do cliente libera e como ela fica sabendo se ele mudar | M-01 Ponto de conexão | C-18, C-20, M-04 |
| A-29 | `MF-108` | Como a ligação aguenta muitas pessoas ao mesmo tempo e a queda de um servidor da Maind, e o caminho alternativo para a empresa cujo intermediário quebra a ligação | M-01 Ponto de conexão | C-18 |
| A-30 | `MF-109` | Como os módulos ficam isolados dentro do mAIg e quanto da máquina cada um pode usar | C-16 Compartimento dos módulos | P-01 |
| A-31 | `MF-109` | Se uma cópia só do módulo atende todas as organizações da instância ou se cada organização tem a sua cópia | C-16 Compartimento dos módulos | C-04 |
| A-32 | `MF-109` | Quanto tempo vale o cache dos painéis e como ele fica protegido enquanto está guardado | C-17 Cache dos painéis | |
| A-33 | `MF-109` | O que acontece com um pedido quando o módulo para no meio dele | C-16 Compartimento dos módulos | C-18, M-06 |
| A-34 | `MF-111` | Como o mAIg aplica a lista de ferramentas liberadas (segunda versão) | C-25 Ponte dos servidores MCP | C-07 |
| A-35 | `MF-111` | Onde fica guardado o acesso a cada servidor MCP (segunda versão) | C-10 Cofre da organização | C-25 |
| A-36 | `MF-111` | Como a Maind alcança um servidor MCP da empresa quando a instância roda na infraestrutura da Maind (segunda versão) | C-25 Ponte dos servidores MCP | P-10 |
| A-37 | `MF-111` | O que o uso das ferramentas muda no custo da IA e no tempo da resposta (segunda versão) | C-25 Ponte dos servidores MCP | C-07 |
| A-38 | `MF-112` | Se o núcleo leva ao banco a identidade da pessoa que entrou pelo login da empresa, com o dono da Maind (segunda versão) | C-06 Leitor dos bancos | C-26, P-02 |
| A-39 | `MF-112` | Confirmar que o login da empresa permite reconfirmar a sessão a cada 8 horas (segunda versão); se o owner ajusta o intervalo é do dono da Maind | C-26 Ligação com o provedor de identidade | C-02 |

Seis componentes da casa do cliente não recebem nenhum dos 39: o emissor de passes (C-03), o fiscal da saída (C-08), o registro da instância (C-13), a luz de estado e a página de status (C-19), o console (C-20) e o carteiro (C-24). Eles dependem de pontos que caem em outros, como a tabela mostra.

## 9. O que fica em aberto

### Do arquiteto: como construir

**Os 39 pontos** da seção 8, cada um no seu componente. Nenhum deles muda o que a primeira versão faz na casa do cliente, e nenhum segura este documento.

**A estimativa item por item** que a decisão 92 pede: continua depois deste documento, e o item da onda 1.0 que não couber volta ao dono da Maind. Os quatro itens que entraram na onda 1.0 contra a sugestão do PO são os primeiros a rever, se for preciso: o limite de gasto com a tela de consumo, o pedido guardado quando a ligação cai, a luz de estado e o cache dos painéis.

**Pontos a mais, levantados no fechamento da primeira versão** e que não estão entre os 39, porque são dos periféricos:

- Do carteiro e do servidor de e-mail (C-24, P-03, M-05): como o mAIg se conecta ao servidor de e-mail; como é o envio de teste; o que acontece com os e-mails que não saíram quando o servidor volta.
- Do Google (P-05): o que a empresa precisa cadastrar no Google para o mAIg ser aceito; quanto tempo dura uma sessão já aberta.
- Do navegador (P-08): quais navegadores e versões a onda 1.0 aceita.
- Da rede (P-07): como a TI instala e troca o certificado do endereço, junto com A-26.

**Leituras do arquiteto**, que valem até alguém dizer o contrário e não mudam o que uma pessoa vê:

- **Duas identidades por app.** A decisão 4 registra a parte de fora com um certificado; a decisão 86 diz que a chave privada do certificado do kit nasce no mAIg e nunca sai dele. Como a parte de fora roda na nuvem da Maind, ela não pode usar uma chave que nunca sai do mAIg. A leitura: cada app tem duas identidades atestadas pela Maind, a do módulo, com a chave no chaveiro da instância (C-11), e a da parte de fora, com a chave na nuvem (M-06). A `MF-103` já deixa em aberto "se o certificado do kit é o mesmo com que a parte de fora do app se identifica"; esta leitura responde que não, e cai em A-08. A promessa de que a nuvem não fabrica passes não muda, porque o passe é assinado com a chave da organização, e não com a do app.
- **A espera da tarefa marcada fica na nuvem do app.** A decisão 69 diz que as tarefas marcadas esperam até uma hora, e a decisão 42 diz que é a parte de fora quem pede "rode a tarefa". A leitura: quem espera e quem decide rodar uma rodada atrasada só é a parte de fora; o mAIg garante conferir o passe de agendamento a cada rodada, atrasada ou não (C-03, M-06).
- **Um endereço só na rede do cliente.** A tela de entrada, a renovação do passe, o console, a página de status e a planilha ficam no mesmo endereço, com o nome e o certificado que a TI escolheu (C-01). As fontes falam de "o endereço do mAIg" no singular (decisões 32, 120 e 121).

### Do dono da Maind: infraestrutura, fornecedor, custo e o que muda o que uma pessoa vê

**Os 12 pontos que já estão no registro do PO** continuam com o dono da Maind, e nenhum segura a construção: a análise do pedido de uma pessoa excluída (`MF-102`); a antecedência do aviso do fim do contrato e a carência (`MF-103`); o prazo do aviso da desinstalação (`MF-104`); quando uma organização ganha uma instância só dela (`MF-107`); o compromisso de disponibilidade do ponto de conexão e os dias de quedas da página de status (`MF-108`); o fechamento da rede da instância da Maind (`MF-101`); e os cinco da segunda versão (`MF-111` e `MF-112`).

**Perguntas novas, que este documento levanta.** Nenhuma delas é decidida aqui.

1. **O kit de instalação.** As decisões 10 e 56 dizem que o kit traz o certificado do app; a decisão 86 diz que a chave privada desse certificado nasce no mAIg. Pela leitura do arquiteto, o kit passa a trazer o que deixa o mAIg gerar a chave e pedir o atestado, e não um certificado pronto para usar. Para a TI do cliente, nada muda: continua recebendo um arquivo da Maind e instalando-o. **Decidido pelo dono da Maind em 12/11/2026 (opção A):** o kit não traz certificado pronto; traz o que deixa o mAIg gerar a chave do app e pedir o atestado à Maind, e a decisão 86 vale também para o certificado do app. O arquiteto fecha A-08 e A-09 com essa leitura. A levar ao README e às mfs (decisões 10 e 56, `MF-103`) quando a arquitetura fechar. Levada em 12/11/2026: decisão 138.
2. **As duas identidades de cada app.** **Decidido pelo dono da Maind em 12/11/2026 (opção A):** cada app tem duas identidades: a do módulo, com a chave criada no mAIg a partir do kit (decisão 86), e a da parte de fora, com a chave na nuvem da Maind e atestada pela Maind, que o núcleo confere a cada conversa pela ligação (decisões 4 e 49). Não muda o que ninguém vê. A levar ao README e às mfs (decisões 4 e 86, `MF-103` e `MF-108`) quando a arquitetura fechar. Levada em 12/11/2026: decisão 139.
3. **Um endereço ou dois na rede do cliente.** **Decidido pelo dono da Maind em 12/11/2026 (opção A):** um endereço só na rede do cliente para a tela de entrada, a renovação do passe, o console, a página de status e a planilha; a TI do cliente escolhe um nome e instala um certificado (decisão 120). A levar ao README e às mfs (decisão 120, `MF-101` e `MF-110`) quando a arquitetura fechar. Levada em 12/11/2026: decisão 140.
4. **Com quais provedores de IA a primeira versão fala.** **Decidido pelo dono da Maind em 12/11/2026 (fora das opções):** cinco provedores, sempre com a chave da empresa cliente (decisão 22): o OpenRouter, o Amazon Bedrock e os três fabricantes direto, a OpenAI, a Anthropic e o Google. O mAIg precisa de um conector para cada um, e a TI do cliente libera a saída só dos provedores que a organização escolher (decisão 90). A levar ao README e à `MF-106` quando a arquitetura fechar. Levada em 12/11/2026: decisão 141.
5. **Em que ambientes o mAIg roda.** **Decidido pelo dono da Maind em 12/11/2026 (opção A):** a Maind entrega o mAIg como um pacote pronto em contêiner, uma caixa fechada com o programa e tudo de que ele precisa, que roda numa máquina Linux da empresa: servidor próprio, máquina virtual ou a nuvem dela. O mesmo pacote serve à hospedagem da Maind, e atualizar é trocar a caixa por uma nova, assinada pela Maind (decisões 39 e 45). **Revisto pelo dono da Maind no mesmo dia:** o setup tem de rodar em qualquer lugar, tanto no lado da Maind quanto na casa do cliente: numa máquina virtual, numa VPS, num Kubernetes (gerenciado ou não) ou só com Docker. Assim, instalar num Kubernetes da empresa entra na primeira versão; entregar uma máquina virtual pronta continua de fora, porque a máquina virtual roda o pacote em Docker. O arquiteto fecha A-10 com essa escolha. A levar ao README e à `MF-107` quando a arquitetura fechar. Levada em 12/11/2026: decisões 142 e 143.
6. **Onde ficam as peças do lado da Maind.** **Decidido pelo dono da Maind em 12/11/2026 (opção A):** o ponto de conexão (M-01), a emissão de certificados (M-02), o servidor das contratações (M-03) e o canal de atualização (M-04) ficam num ambiente próprio da Maind, separado da nuvem dos apps (M-06) e das instâncias hospedadas pela Maind, pela mesma lógica da decisão 48; assim, uma nuvem dos apps invadida não alcança o cartório nem o canal de atualização (decisão 49). O custo de operar esse ambiente entra na pergunta 7. A levar ao README e às mfs (decisões 48 e 49, `MF-108`) quando a arquitetura fechar. Levada em 12/11/2026: decisão 146.
7. **Os custos que a arquitetura cria.** A cifra do registro e do cofre (decisão 57), o ponto de conexão com mais de um servidor (decisão 33), a emissão de certificados sempre de pé (decisão 44) e a auditoria externa anual (decisão 36) têm custo. O arquiteto estima depois deste documento; aceitar o custo é do dono da Maind.
8. **O nascimento da organização e o Gerenciador do mAIg.** **Decidido pelo dono da Maind em 12/11/2026 (fora das opções, e muda o nascimento da organização):** a organização nasce na Maind, e não no mAIg. Os passos:

   1. A Maind cria a organização no **Gerenciador do mAIg**: o cockpit de controle e cobrança da Maind, na nuvem da Maind, separado de qualquer app (não é o primeiro app).
   2. O Gerenciador gera um **arquivo de setup assinado**, com as informações da organização, que vai para o cliente.
   3. O cliente prepara o próprio ambiente seguindo um **acesso público** da Maind, com as instruções e as informações da organização, e executa o setup.
   4. Ao fim do setup, o cliente instala no mAIg o arquivo disponibilizado no portal.
   5. Havendo conectividade, o mAIg faz o handshake com a Maind.

   Não precisa ser tudo automático; o que importa é que **a Maind cria a organização e assina o arquivo**. Leituras do arquiteto, a confirmar com o dono: (a) o Gerenciador reúne o servidor das contratações (M-03), o portal da dúvida 5 e a cobrança, e vira uma peça própria do lado da Maind (M-07); (b) a nuvem de cada app conhece a organização a partir do Gerenciador, que é a origem, e o passe assinado pelo mAIg continua provando a pessoa (resolve A-25); (c) o arquivo de setup e o arquivo instalado no fim podem ser um só; (d) quem cadastra o primeiro owner da organização continua sendo o administrador da instância (decisões 51 e 83), salvo nova decisão. A levar ao README e às mfs (decisões 9, 16 e 51, `MF-103`, `MF-107` e `MF-110`) quando a arquitetura fechar. Levada em 12/11/2026: decisão 128, com o fluxo do setup nas decisões 129 a 137.

**Decisões do README que as respostas de 12/11/2026 mudam ou precisam. Levadas ao README e às mfs em 12/11/2026, como as decisões 128 a 155, com nota em cada decisão antiga que muda; o número levado está no fim de cada item:**

- **Decisões 28, 29, 41 e 125, e as `MF-107` e `MF-110`:** a organização não é mais criada pelo administrador da instância no console; nasce no Gerenciador do mAIg (M-07) e chega à instância pela ligação, depois que a TI digita a chave temporária na interface de setup (ou, para uma organização a mais, no console). O que as decisões dizem sobre "criar a organização" passa a valer para esse gesto: a ligação de pé (41), o e-mail testado dentro do setup (125), a linha no registro (29) e o certificado emitido quando o arquivo chega (28). As decisões 9 (várias organizações por instância) e 11 (contratação por organização) não mudam. Levada: decisão 128.
- **Decisões 10 e 56, e as `MF-103` e `MF-104`:** o kit não é mais um arquivo entregue pela Maind: é uma entrada do manifesto assinado do que a organização pode ter, que o servidor das contratações entrega pela ligação, com o bilhete de inscrição no lugar do certificado (item 1 acima); no setup, os apps contratados são instalados sozinhos, no estilo de um gerenciador de pacotes; o gesto do administrador para um app autorizado depois é a dúvida nova 4 do `tecnologia.md`. "Instalado o kit" passa a ser "chegado o manifesto". Levada: decisões 134, 137 e 138.
- **Decisão 51 e a `MF-101`:** o e-mail do primeiro owner da organização vem da Maind, registrado no Gerenciador; o mAIg cria o usuário dele sozinho no fim do setup e manda o link; o administrador da instância não digita esse e-mail. Levada: decisão 136.
- **Decisão 83 e a `MF-110`:** o administrador da instância segue cadastrando, excluindo e substituindo os owners, menos o primeiro, que vem da Maind. Levada: decisão 136.
- **Decisão 100 e a `MF-101`:** o primeiro administrador da instância nasce na interface de setup, definido pela TI que digitou a chave temporária; o procedimento da instalação, "na máquina do mAIg por quem a opera", no Kubernetes é feito por quem opera o cluster, com acesso ao namespace do mAIg. Levada: decisões 132 e 144.
- **Decisão 120 e a `MF-107`:** o nome do endereço e o certificado entram na primeira etapa da interface de setup. Levada: decisões 132 e 140.
- **A decisão de 12/11 sobre os ambientes (item 5 acima) e a `MF-107`:** o Kubernetes entra na primeira versão, em dois formatos do mesmo pacote; no Kubernetes, quem troca a caixa é o próprio cluster. Levada: decisões 142, 143 e 144.
- **Decisões 33, 38 e 90, e a `MF-108`:** a ligação tem dois transportes, gRPC sobre HTTP/2 e WebSocket, com troca automática, os dois feitos pela Maind; a saída que a TI libera é um nome só, com IP fixo, na porta 443, atrás do qual ficam a ligação e o registro de imagens; a primeira conexão do setup, pela chave temporária, é a exceção ao certificado da instância. Levada: decisões 133, 149 e 154.
- **Decisões 65, 87 e 116, e a `MF-107`:** a cópia de segurança passa a ter uma chave da cópia da instância, mostrada uma vez na instalação e guardada por quem opera a máquina, além do código de recuperação de cada organização. Levada: decisão 152.
- **Decisão 112 e a `MF-106`:** o custo por app é o informado pelo provedor quando ele informa, ou "estimado" pela tabela da Maind, com a data da tabela; o limite trava pelo número que aparece. Levada: decisão 153.
- **Decisões 44 e 86, e a `MF-103`:** as chaves da Maind que atestam e assinam ficam no OpenBao; a raiz do cartório fora de linha, usada só com duas pessoas; a regra de que a Maind nunca recebe chave privada não muda, e vale também no setup. Levada: decisão 148.
- **Decisão 7 e a `MF-110`:** o console usa o design system da casa, que vira um pacote próprio da Maind. Levada: decisão 155.
- **Superado no mesmo dia:** o portal do cliente e a página pública de instruções (dúvida 5 do `tecnologia.md`) não entram na primeira versão. Levada: decisão 129.
- **Sem versão marcada, registro para o PO:** a ideia do dono de uma oferta premium com um dispositivo físico de guarda das chaves, como as carteiras frias de criptomoedas. Registrada na decisão 152.

   **Revisto pelo dono da Maind em 12/11/2026, para simplificar:** a primeira versão **não tem portal do cliente**. O Gerenciador do mAIg gera um **PDF protegido por senha**, com as instruções e os dados da organização, e a Maind o manda ao **e-mail oficial da organização**. O Gerenciador fica só com o cockpit interno da Maind. Com isso, a leitura (a) deixa de valer como estava: não há portal para juntar ao Gerenciador.

   **Senha do PDF (dono da Maind, 12/11/2026, opção A):** a senha vai por outro canal, separado do e-mail: a equipe da Maind a passa ao responsável pela contratação, por telefone ou mensagem. Quem invadir só o e-mail não abre o PDF.

   **O que vai no PDF (dono da Maind, 12/11/2026, opção A):** as instruções e um código de ativação de uso único, que vence. No fim do setup, a TI digita o código no console, e o mAIg, pela ligação, busca na Maind o arquivo assinado da organização e faz o handshake. Nenhum arquivo instalável viaja por e-mail. O mesmo caminho vale para o kit de cada app contratado: um PDF com o código do app. Isso responde a leitura (c): o arquivo é um só, e quem o traz é o mAIg.

   **O fluxo do setup, nas palavras do dono da Maind (12/11/2026), que vale sobre as notas acima:**
   
   1. A Maind cria a organização no Gerenciador do mAIg, e o Gerenciador gera **chaves temporárias, de duração curta**.
   2. A Maind gera um **PDF com as instruções** da primeira etapa de configuração no ambiente do cliente (o cluster ou a máquina), enviado ao e-mail oficial da organização, com a senha por outro canal.
   3. O cliente instala na infraestrutura dele a **imagem do mAIg**, que já vem com uma **interface de setup**.
   4. O PDF traz a **chave temporária**, que a TI digita na interface de setup.
   5. O mAIg abre uma conexão segura com a Maind (gRPC sobre HTTP/2, ou o caminho alternativo) e a instalação segue **no estilo de um gerenciador de pacotes, como o npm**: o mAIg baixa o que precisa e o que a organização está autorizada a ter, e instala tudo sozinho, inclusive criando os certificados, com as chaves privadas nascendo dentro dele (decisão 86).
   
   Leituras do arquiteto sobre esse fluxo, confirmadas pelo dono nas confirmações 1 a 3 abaixo: a chave temporária faz o papel do código de ativação; o que a organização está autorizada a ter (os apps contratados no Gerenciador) é baixado e instalado do mesmo jeito, sem um PDF por app; liberar cada app para a organização e configurá-lo continua com o owner da organização; e a nuvem de cada app conhece a organização pelo Gerenciador, que é a origem (leitura (b)).

   **O primeiro owner (dono da Maind, 12/11/2026, opção A; substitui a leitura (d)):** o e-mail do primeiro owner da organização vem da Maind, registrado no Gerenciador na contratação. No fim do setup, o mAIg cria o usuário dele sozinho e manda o link de primeiro acesso direto ao e-mail dele (decisões 51 e 99). Os outros owners continuam cadastrados pelo administrador da instância (decisão 83). A leitura (b) fica confirmada pelo fluxo do dono: a nuvem de cada app conhece a organização pelo Gerenciador.

   **Confirmação 1 (dono da Maind, 12/11/2026, opção A):** a chave temporária faz o papel do código de ativação. Ela vale uma vez só e vence em pouco tempo. Só é gasta quando chega à Maind e a Maind entrega a organização; se o setup parar antes disso (por exemplo, sem a saída liberada), a TI tenta de novo com a mesma chave. Se vencer ou já tiver sido usada, a equipe da Maind gera outra no Gerenciador, e uma tentativa de reuso é recusada e avisada.

   **Confirmação 2 (dono da Maind, 12/11/2026, opção A):** o setup instala o núcleo e, junto, os apps que a organização já tem contratados no dia, sem um PDF nem um clique por app; o aval da TI está no próprio setup, que ela executa. Os apps contratados depois aparecem como "app autorizado" e o administrador clica em instalar (dúvida nova 4).

   **Confirmação 3 (dono da Maind, 12/11/2026, opção A):** instalado não quer dizer liberado. Depois do setup, o owner da organização libera e configura cada app no console: quais bancos ele lê, quais IAs usa e quem da organização o usa. O app fica ativo sozinho quando o mínimo está configurado (decisões 11, 12 e 72). Com isso, as três leituras do fluxo do setup estão confirmadas.

### Divergências achadas nas fontes

1. **O kit e a chave privada.** As decisões 10 e 56 e a `MF-103` dizem que o kit traz o certificado do app; a decisão 86 diz que a chave privada de todo certificado, inclusive o do kit, nasce no mAIg e nunca sai. Um kit não pode trazer um certificado cuja chave ainda não nasceu. A divergência cai em A-09 e na pergunta 1.
2. **A identidade da parte de fora.** A decisão 4 e a `MF-108` dizem que o núcleo confere o certificado da parte de fora dentro da ligação; a decisão 86 prende a chave do certificado do kit ao mAIg. Só fecha com duas identidades por app, como na pergunta 2. A `MF-103` já registrava a dúvida.
3. **Quem espera até uma hora.** A `MF-108` põe "a tarefa marcada espera a ligação por até uma hora" na tabela de ondas como capacidade do mAIg, mas o texto da mesma mf diz que "o Horus espera até uma hora", e a decisão 42 põe o "rode a tarefa" na parte de fora. As fontes não dizem de que lado fica a espera; a leitura do arquiteto está acima.
4. **O certificado do endereço e a decisão 86.** A decisão 86 lista três certificados com a chave nascida no mAIg: o da organização, o do kit e o da ligação. A decisão 120 cria um quarto, o do endereço, que a TI do cliente instala, e a `MF-107` pede que o arquiteto confira se a regra da decisão 86 vale para ele. Não é contradição, e sim uma lacuna, que cai em A-26.
5. **"O estado da ligação" entre o que a instância manda à Maind.** A decisão 123 lista o estado da ligação entre o mínimo de operação que a instância manda; com a ligação fora, nada se manda. A leitura é que o ponto de conexão (M-01) observa esse estado do outro lado, como diz a decisão 71, e a instância manda o que vê enquanto a ligação está de pé. Não muda nada do que a TI aprova.
