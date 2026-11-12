# A tecnologia de cada componente do mAIg

> Este documento diz com que tecnologia cada uma das 43 peças do Maind AI Gateway (mAIg) é feita: a linguagem, as bibliotecas, o banco de dados, o formato dos arquivos e o jeito como as peças conversam. Para cada peça: a tecnologia, por que esta, as duas melhores alternativas com o que se ganha e o que se perde, quem decide e os pontos do arquiteto que fecha ou deixa em aberto. Continua a lista de componentes de `componentes.md`, que não escolhia tecnologia.

Situação: proposta do arquiteto do mAIg, revista com as decisões do dono da Maind de 12/11/2026, inclusive o fluxo do setup (seção 6) · Data: 12/11/2026

## 1. Em uma frase

O mAIg é um programa só, escrito em C# sobre .NET, entregue como um pacote de contêineres em dois formatos, um para Docker e outro para Kubernetes, que roda em qualquer máquina Linux, máquina virtual, VPS ou cluster, na casa do cliente e na Maind; dentro dele, cada módulo de app roda numa caixa própria sem saída de rede, e o núcleo guarda o registro e o cofre de cada organização num arquivo cifrado próprio; a organização nasce na Maind, no Gerenciador do mAIg, que manda ao cliente um PDF com senha e uma chave temporária, com a qual a interface de setup do mAIg liga para a Maind e se instala sozinha, no estilo de um gerenciador de pacotes; a ligação com a Maind é uma conversa gRPC que o mAIg abre e mantém, e que passa sozinha para WebSocket quando a rede da empresa não deixa o HTTP/2 passar; o passe é um JWT assinado pela chave da organização; os certificados seguem o padrão X.509 e nascem de um pedido de atestado, de modo que a chave privada nunca sai de onde nasceu; e as chaves do lado da Maind vivem num cofre portátil, o OpenBao.

## Como ler

**O que é "tecnologia" aqui.** É a pilha de cada peça: a linguagem em que é escrita, as bibliotecas que usa (código pronto de terceiros, com licença), os programas de apoio de que depende (um banco de dados, um motor de contêineres) e os formatos dos arquivos e das mensagens. Não é a lista de telas nem a ordem de construção.

**Quem decide o quê.** Cada escolha leva uma de três marcas:

- **Decidida pelo arquiteto.** Organização interna: linguagem, bibliotecas, padrões, como as peças conversam por dentro, formato de guarda interna, testes. Vale até alguém mostrar que esbarra numa decisão do dono da Maind.
- **Decidida pelo dono da Maind em 12/11/2026 (dúvida N).** As dez propostas que o arquiteto fez na primeira versão deste documento e que o dono respondeu no mesmo dia. A nota de cada resposta está na seção 6, e é o registro; o corpo do documento já está reescrito com elas. Ainda em 12/11, o dono revisou duas delas com o **fluxo do setup**: a dúvida 5 (o portal do cliente) ficou superada, e a dúvida 9 (o nascimento da organização) ganhou o fluxo que vale sobre as notas anteriores; essas notas estão na seção 6, logo depois da dúvida 5.
- **Proposta ao dono, com recomendação.** O que ainda falta decidir: infraestrutura e ambientes, fornecedor, segurança e retenção de dados, e qualquer escolha que mude o que uma pessoa vê ou faz. As propostas novas estão na seção 6, em ordem de dependência.

Teste de bolso usado para separar as marcas: se alguém de fora do time técnico perceberia a diferença, a decisão não é só do arquiteto.

**A regra acima de todas, dada pelo dono em 12/11/2026 (dúvida 1).** O setup tem de rodar em qualquer lugar, tanto no lado da Maind quanto na casa do cliente: numa máquina virtual, numa VPS, num Kubernetes gerenciado ou não, ou só com Docker. Nenhuma peça pode depender de um serviço exclusivo de uma nuvem. Onde um serviço da nuvem ajuda, ele entra como **encaixe**: a peça usa o serviço quando ele existe e uma peça portátil quando não existe. A seção 2.7 lista os encaixes.

**As regras que este documento obedece.** Não reabre nenhuma das decisões 1 a 127 do README nem as de 12/11/2026; quando uma tecnologia esbarra numa delas, o texto diz isso e escolhe outra. Só entra tecnologia madura, de uso amplo e com licença que permita uso comercial; a licença das peças que pesam está dita, e a lista completa fica no anexo A. Não crava versão de produto: fala da família, como ".NET na versão de suporte longo mais recente".

**Os códigos.** `C-nn` é um componente da casa do cliente; `P-nn`, um periférico; `M-nn`, uma peça do lado da Maind, agora sete, com o Gerenciador do mAIg (M-07); `A-nn`, um dos 39 pontos do arquiteto, listados na seção 8 de `componentes.md`. "Decisão NN" é a decisão NN do README. "Dúvida N" é uma das dez propostas respondidas; "dúvida nova N", uma das propostas que este documento levanta agora.

**Os termos técnicos.** Cada um vem traduzido na primeira vez que aparece, muitas vezes com uma analogia. O anexo B repete os mais usados, para consulta.

**O que vale como insumo, não como regra.** No primeiro app, o Horus, o protocolo entre a nuvem e a peça da casa do cliente ficou em aberto, com preferência por gRPC; o backend do Horus é em .NET e as telas em Vue 3 com TypeScript. Este documento confirma os dois, com os motivos próprios do mAIg.

### 1.1 A stack num quadro

| Peça | Tecnologia | Quem decidiu |
| --- | --- | --- |
| Linguagem e plataforma | C# sobre .NET (suporte longo), ASP.NET Core; núcleo como um programa só | Arquiteto |
| Banco interno da instância | SQLite via EF Core; um arquivo da instância e um por organização | Arquiteto |
| Pacote | Imagens OCI assinadas com Cosign; dois formatos: Compose (Docker) e chart Helm (Kubernetes) | Dono (dúvida 1) |
| Troca de versão | No Docker, o zelador; no Kubernetes, o próprio Kubernetes, acionado pelo núcleo depois do aval | Dono (dúvida 1); quem aciona é a dúvida nova 1 |
| Isolamento do módulo | Contêiner por app sem saída de rede: `network_mode: none` no Docker; pod com política de rede no Kubernetes | Arquiteto; o cluster sem política é a dúvida nova 2 |
| Cifra e chaves na instância | AES-256-GCM, ECDSA P-256, X.509 do .NET; envelope com chave da instância fora do volume | Arquiteto |
| Chaves do lado da Maind | OpenBao (MPL 2.0), destrancado pelo cofre em hardware da nuvem quando há; raiz do cartório fora de linha, com duas pessoas | Dono (dúvida 2) |
| Endereço da Maind | Um nome, IP fixo, porta 443; ligação e registro de imagens (CNCF Distribution) atrás dele | Dono (dúvida 3) |
| Ligação (C-18, M-01) | gRPC sobre HTTP/2 com TLS mútuo e, quando o HTTP/2 não passa, WebSocket, com troca automática | Dono (dúvida 8) |
| Passe | JWT assinado com ES256 pela chave da organização | Arquiteto |
| Certificados e documentos | X.509 a partir de CSR; kit, licença, manifesto, tabela de preços e arquivo da organização em JWS | Arquiteto |
| Nascimento da organização | No Gerenciador do mAIg (M-07); chega à instância pela ligação, depois que a TI digita a chave temporária na interface de setup | Dono (dúvida 9, revista com o fluxo do setup) |
| Setup e entrega | PDF com senha ao e-mail oficial da organização, senha por outro canal, chave temporária; a imagem com a interface de setup; o resto pela ligação, no estilo de um gerenciador de pacotes, a partir do manifesto assinado (M-03) e do registro de imagens (M-04) | Dono (fluxo do setup); a dúvida 5, o portal, superada |
| Conectores de IA | Interface própria; OpenRouter e Anthropic primeiro; depois OpenAI, Google, Bedrock | Dono (ordem); arquiteto (forma) |
| Custo da IA | Informado pelo provedor quando há; senão, "estimado" pela tabela da Maind, com a data | Dono (dúvida 7) |
| Cópia de segurança | Arquivo único cifrado pela chave da cópia, mostrada uma vez na instalação | Dono (dúvida 6) |
| E-mail | SMTP via MailKit; na hospedagem da Maind, fornecedor escolhido na implantação; o PDF do setup sai do Gerenciador pelo mesmo serviço | Dono (dúvida 4) |
| Console e telas | Vue 3 + TypeScript, com o design system da casa (HUD Vue) como pacote próprio | Dono (dúvida 10) |
| Lado da Maind | ASP.NET Core + PostgreSQL + Vue; na mesma nuvem pública da produção do primeiro app, em conta separada | Dono (dúvida 1) |
| Testes | xUnit, NSubstitute, Shouldly, WireMock.Net, Testcontainers, Vitest, Playwright, kind; nenhum modelo pago | Arquiteto |

## 2. A base comum

### 2.1 A linguagem e a plataforma

**A tecnologia.** Todo o código do mAIg, na casa do cliente e no lado da Maind, é escrito em **C#** sobre **.NET**, na versão de suporte longo mais recente, com **ASP.NET Core** para o que atende pedidos pela web. .NET é a plataforma de programas da Microsoft, de código aberto e licença MIT, que roda em Linux; C# é a linguagem dela; ASP.NET Core é a parte que recebe pedidos de navegadores e de outros programas. É o que o dono da Maind prefere e o que o primeiro app já usa.

**Por que esta.** Três motivos próprios do mAIg, além da preferência da casa. Primeiro, a criptografia de que o mAIg precisa, certificados X.509, chaves, cifra com conferência de integridade, vem embutida na plataforma, sem biblioteca de terceiros para a parte mais sensível. Segundo, o gRPC, escolhido para a ligação e para a conversa com os módulos, é de primeira classe no .NET. Terceiro, um time só, com uma linguagem só, cuida do núcleo, do lado da Maind e do módulo do Horus.

**As alternativas consideradas.** Go: ganha-se um programa menor e mais leve na máquina do cliente, e o ecossistema de contêineres é feito nele; perde-se a coerência com a casa e o reaproveitamento do time do Horus. Java com Spring: ganha-se maturidade equivalente; perde-se a coerência e ganha-se um programa mais pesado, sem vantagem que compense.

**Quem decide.** Decidida pelo arquiteto.

### 2.2 O banco de dados interno de cada instância

**A tecnologia.** Cada instância guarda o que é seu em **SQLite**, um banco de dados que vive dentro do próprio programa, num arquivo, sem servidor à parte; é o banco mais instalado do mundo, embutido em todo celular e navegador, e é de domínio público. O acesso se faz por **EF Core** (Entity Framework Core, licença MIT), a biblioteca do .NET que traduz os objetos do programa em tabelas. A instância tem **um arquivo da instância** e **um arquivo por organização**:

- O arquivo da instância guarda o registro da instância (C-13), as contas dos administradores (parte de C-02), a lista das organizações, o catálogo dos apps (C-15), os kits, as licenças e o arquivo de cada organização recebido da Maind (C-14), a configuração da instância (parte de C-05) e a fila dos e-mails a sair (C-24).
- O arquivo de cada organização guarda o registro dela (C-12), o cofre dela (C-10), as pessoas dela (parte de C-02), a configuração dela (parte de C-05) e os passes de agendamento (C-03). O registro e o cofre ficam cifrados linha a linha com a chave da organização, como manda a decisão 57; a configuração e as pessoas ficam legíveis dentro do arquivo, porque o console precisa listá-las e a decisão 57 cifra o registro e o cofre.

Os arquivos ficam num **volume de dados**: no Docker, um volume da máquina; no Kubernetes, um volume persistente (PersistentVolume, o disco que o cluster dá a um pod e que sobrevive a ele), montado por um pod só. O núcleo roda sempre em **uma cópia só** por instância, porque o SQLite tem um escritor por vez: no Kubernetes, é um StatefulSet de uma réplica. Cresce-se por instâncias, não por réplicas, como a decisão 9 já permite.

**Por que esta.** O mAIg é "uma caixa fechada com tudo de que precisa" (decisão 6 de 12/11, revista para dois formatos): um banco embutido mantém a caixa uma só, sem um segundo programa para a TI do cliente instalar, atualizar e proteger, e isso vale igual no Docker e no Kubernetes. A carga de uma instância é baixa, algumas organizações com dezenas ou centenas de pessoas, e o único que escreve no banco é o núcleo, o que casa com "um escrivão só" (C-09). Um arquivo por organização faz do "registro de cada organização" um objeto físico: a cópia de segurança copia arquivos; a organização encerrada é um arquivo que fica (decisão 31); a desinstalação do último app é a exclusão desse arquivo e a destruição da chave (decisão 87).

**As alternativas consideradas.** **PostgreSQL** (licença PostgreSQL, permissiva), num segundo contêiner: ganha-se um banco servidor que o time do Horus já conhece, escritas concorrentes e permissões no banco para o registro aceitar só inclusão; perde-se a caixa única, e a TI do cliente ganha um segundo programa para operar, com a troca de versão maior do PostgreSQL, que exige migração, e as credenciais do banco para guardar; as permissões no banco protegem pouco contra quem tem a máquina, que é o adversário real da decisão 57. **SQL Server Express**: ganha-se a casa Microsoft; perde-se pelo limite de tamanho por banco, que o registro sem prazo (decisão 15) estouraria, e pela licença de produção da versão completa.

**Quem decide.** Decidida pelo arquiteto.

### 2.3 O pacote em dois formatos, a assinatura e a instalação

**A tecnologia.** O mAIg é entregue como **imagens de contêiner** no padrão aberto **OCI** (um contêiner é uma caixa fechada com um programa e tudo de que ele precisa; a imagem é o molde da caixa) e sai em **dois formatos**, com as mesmas imagens:

- **O formato Docker**, para máquina virtual, VPS ou servidor: um arquivo **Compose** diz quais caixas sobem juntas e como se ligam, e o motor é o **Docker Engine** (licença Apache 2.0, gratuito em servidor Linux; o que tem licença paga para empresas grandes é o Docker Desktop, de estação de trabalho, que o mAIg não usa). Tem três tipos de caixa: **o núcleo** (`maig-nucleo`), um programa .NET só, com os componentes da casa do cliente como partes internas, a única caixa que fala com a rede; **o módulo de cada app** (`maig-modulo-<app>`), uma caixa por app instalado, **sem rede nenhuma** (`network_mode: none`), que só conversa com o núcleo por um canal local da máquina; e **o zelador** (`maig-zelador`), uma caixa pequena com acesso ao motor de contêineres, que faz o que uma caixa não consegue fazer consigo mesma: baixar uma imagem nova, conferir a assinatura, trocar a caixa do núcleo ou de um módulo, guardar a anterior para a volta.
- **O formato Kubernetes**, para um cluster gerenciado ou não: um **chart Helm** (Helm, Apache 2.0, é o formato padrão de pacote do Kubernetes: um conjunto de modelos que descreve o que subir), assinado, que cria num namespace próprio: um StatefulSet de uma réplica para o núcleo, com o volume persistente; um Deployment por módulo de app, com uma **política de rede** (NetworkPolicy, a regra do cluster que diz com quem um pod fala) que nega tudo e só deixa o módulo falar com o núcleo; o perfil de segurança restrito dos pods (sem usuário root, sistema de arquivos só leitura, sem capacidades especiais, limites de memória e processador); um Service para a porta 443; e uma conta de serviço do núcleo com permissão **só no próprio namespace** para trocar a imagem do núcleo e dos módulos. **Não há zelador no Kubernetes**: quem troca a caixa é o próprio Kubernetes, pelo seu mecanismo de atualização gradual, acionado depois do aval da TI (quem aciona é a dúvida nova 1).

As imagens são construídas sobre as imagens oficiais do .NET da Microsoft na variante enxuta para Linux, sem shell nem utilitários. **Toda imagem é assinada com o Cosign** (projeto Sigstore, licença Apache 2.0), com a chave guardada no OpenBao do lado da Maind (seção 2.7); a chave pública da Maind vem gravada no pacote, e a imagem sem assinatura ou alterada é recusada (decisões 39 e 88): no Docker, pelo zelador; no Kubernetes, pelo núcleo antes de pedir a troca e por um contêiner de partida que confere a impressão digital da imagem que vai rodar contra o manifesto de versão. Cada versão publicada tem um **manifesto de versão** assinado (seção 4.3) com a lista das imagens, o que mudou, a marca de correção de segurança (decisão 45) e a faixa de versões do contrato núcleo-módulo.

O que fica fora das caixas: o **volume de dados** (seção 2.2) e a **chave da instância**, numa pasta da máquina separada do volume de dados, no Docker, ou num Secret do namespace (o cofre de segredos do próprio Kubernetes, guardado fora do volume), no Kubernetes (seção 2.5). A instalação começa pelo **PDF com senha** que a Maind manda ao e-mail oficial da organização (M-07, M-05), com as instruções da primeira etapa e a **chave temporária**; a senha do PDF vai por outro canal. A TI sobe a **imagem do mAIg**, que já traz a **interface de setup** (C-21): no Docker, pelo Compose do pacote; no Kubernetes, pelo chart, com um arquivo de valores mínimo e sem dado de organização. Na interface, a TI informa o endereço e o certificado, digita a chave temporária, e o mAIg abre a ligação com a Maind e se instala **no estilo de um gerenciador de pacotes, como o npm**: busca no servidor das contratações (M-03) o manifesto assinado do que a organização pode ter, baixa do registro (M-04) as imagens dos módulos dos apps contratados, confere as assinaturas, sobe as caixas e cria os certificados com as chaves nascendo dentro dele (decisão 86). Não há portal nem página pública: o arquivo da organização e o kit de cada app chegam pela ligação, e nada instalável viaja por e-mail (seção 6, dúvida 9 revista; a dúvida 5, superada).

**Por que esta.** É a decisão 6 de 12/11, revista pelo dono na dúvida 1: o setup roda em qualquer lugar, e o Kubernetes entra na primeira versão. As imagens são uma só; o que muda é o embrulho (Compose ou chart) e quem troca a caixa (o zelador ou o Kubernetes). O zelador existe no Docker porque trocar a própria caixa exige alguém de fora dela, e dar ao núcleo inteiro o acesso ao motor seria dar a um programa grande o poder de administrador da máquina; no Kubernetes esse "alguém de fora" já existe, e a permissão do núcleo fica presa ao namespace dele, que é o que uma TI de cluster sabe auditar.

**As alternativas consideradas.** **Um formato só, o Docker, com o Kubernetes rodando o Compose por adaptação**: ganha-se um embrulho só; perde-se por não ser o jeito que uma TI de Kubernetes aceita instalar, e por não dar as políticas de rede e de segurança do cluster. **Um operador Kubernetes próprio** (um controlador que vigia e aplica as versões): ganha-se o mecanismo mais idiomático; perde-se por ser mais uma peça para construir e manter, quando a permissão do núcleo no próprio namespace resolve com o que o Kubernetes já faz.

**Quem decide.** Os dois formatos e a troca pelo Kubernetes foram decididos pelo dono (dúvida 1). O embrulho de cada formato é do arquiteto. Quem aciona a troca no Kubernetes e o que fazer num cluster que não aplica política de rede são as dúvidas novas 1 e 2.

**Pontos que fecha.** A-10 (em que ambientes roda: máquina virtual, VPS ou servidor Linux com Docker Engine e o plugin Compose; ou um cluster Kubernetes, gerenciado ou não, que aplique política de rede; o que a Maind entrega: o PDF com as instruções e a chave temporária, a imagem com a interface de setup e o chart, públicos no registro, e o manifesto assinado com as imagens dos módulos; os mínimos de processador, memória e disco são números do próximo passo). A metade de A-21 que é "como instala e volta" (C-22).

### 2.4 Um programa só, com módulos internos, mais os processos que precisam ser separados

**A tecnologia.** O núcleo é **um programa só** (um "monólito modular"): uma solução .NET com um projeto por grupo de componentes, em que cada componente é uma parte com interface própria e tabelas próprias, e os componentes conversam por chamadas diretas dentro do processo, montadas pela injeção de dependências do ASP.NET Core. A regra "só o escrivão escreve no registro" e "só o chaveiro usa as chaves" vale por construção: a parte que escreve no registro é a única que recebe a conexão com as tabelas do registro, e a parte que assina é a única que recebe as chaves. O servidor web **Kestrel**, do próprio ASP.NET Core, atende num processo só a porta de entrada (C-01), o console (C-20) e a página de status (C-19), e abre, do lado de dentro, o canal por onde os módulos falam com a portaria (C-04). A ligação com a Maind (C-18) é um serviço de fundo do mesmo processo. O núcleo roda numa cópia só por instância (seção 2.2).

Três coisas rodam **fora** desse processo, cada uma por um motivo que o processo único não resolve:

- **O módulo de cada app**, numa caixa própria sem saída de rede (seção 2.3), porque o isolamento de memória, de falha e de rede entre o módulo e o núcleo não existe dentro de um processo .NET: o .NET moderno não tem compartimento interno que impeça um pedaço de código de ler a memória de outro ou de derrubar o processo.
- **Quem troca a caixa**: o zelador, no Docker; o Kubernetes, no cluster. Trocar a caixa do núcleo exige alguém fora dela.
- **A ferramenta de cópia e o instalador** (C-21, C-23) como comandos do mesmo programa do núcleo, executados por quem opera a máquina ou o cluster; usam o mesmo código, sem processo permanente.

**Por que esta.** Uma instância atende algumas organizações, não milhares; dividir o núcleo em serviços separados traria fila, rede interna e várias caixas para a TI operar, sem ganho de escala que o mAIg precise. As garantias que mais importam, uma porta só (C-04), um escrivão só (C-09), um chaveiro só (C-11), são mais fáceis de provar num processo só, em que a fronteira entre as partes é o compilador e a injeção de dependências, do que em vários processos, em que seria a rede.

**As alternativas consideradas.** **Microsserviços**, um processo por componente: ganha-se escala independente e troca de uma peça sem parar as outras; perde-se por multiplicar as caixas e a rede interna numa instância pequena, e por tornar as garantias de porta única e escrivão único um problema de rede. **Módulo dentro do processo do núcleo, com WebAssembly** (um sandbox de código que isola memória e nega rede por padrão): ganha-se o isolamento sem contêiner; perde-se por não ser madura a compilação de .NET para esse sandbox, e o módulo do Horus é .NET.

**Quem decide.** Decidida pelo arquiteto.

### 2.5 As chaves e a cifra: como o sigilo contra quem opera a máquina é construído

**A tecnologia.** Na instância, o mAIg usa só a criptografia embutida no .NET: **AES-256-GCM** para cifrar (a cifra simétrica padrão, com conferência de integridade embutida: se alguém altera um byte, a decifra falha); **ECDSA com a curva P-256** para assinar (a assinatura de chave pública que todo navegador e toda biblioteca de JWT conferem); **HKDF** e **HMAC-SHA-256** para derivar chaves e fazer carimbos de uma via; e as classes de X.509 do .NET para gerar chaves, pedidos de atestado e certificados. Não entra biblioteca de criptografia de terceiros na parte sensível.

As chaves formam um **envelope**, em que a chave que cifra os dados é, ela mesma, cifrada por outra:

1. **A chave de dados de cada organização** (uma chave AES aleatória) cifra, linha a linha, o registro (C-12) e o cofre (C-10) dessa organização. Vive na memória do núcleo enquanto ele roda.
2. **A chave da instância** cifra as chaves de dados para guardá-las em disco. Fica **fora do volume de dados**: no Docker, num arquivo de chave numa pasta da máquina que o script de instalação cria; no Kubernetes, num Secret do namespace, que o cluster guarda à parte do volume e cifra quando o cluster tem essa cifra ligada. Quem copia o volume de dados ou a cópia de segurança leva as chaves de dados cifradas e não lê nada; é a promessa da decisão 57. Quem controla a máquina ou o cluster ligado e leva também a chave da instância alcança o que está em uso: é o risco aceito da mesma decisão, e está escrito na visão. Na hospedagem da Maind, a chave de cada instância fica no OpenBao (seção 2.7), fora do alcance de quem opera a instância.
3. **O código de recuperação** de cada organização (decisão 87) é uma sequência aleatória longa, mostrada uma vez ao owner da organização, da qual se deriva uma chave que cifra uma segunda cópia da chave de dados. É essa cópia, e só ela, que vai na cópia de segurança: por isso a restauração sempre pede o código, e a Maind nunca o tem.

**Por que esta.** O envelope é o padrão da indústria para "cifrar com uma chave por cliente e trocar a chave da máquina sem recifrar tudo". AES-GCM tem aceleração no processador: cifrar uma linha do registro custa microssegundos, nada perto de uma consulta ao banco ou de um pedido à IA (responde a parte "quanto custa cifrar" de A-05). A curva P-256 é a mais universalmente aceita em certificados e em JWT, o que importa porque a nuvem dos apps confere o passe com a chave pública da organização (decisão 32).

**As alternativas consideradas.** **Cifrar o arquivo inteiro de cada organização**, com SQLCipher: ganha-se a cifra de tudo, inclusive a configuração; perde-se por depender de uma extensão com licenciamento por plataforma e por deixar o console sem consulta às pessoas e à configuração sem decifrar o arquivo inteiro a cada acesso. **Chave da instância num módulo de hardware (TPM) da máquina**: ganha-se uma chave que não sai nem com a máquina copiada; perde-se por depender de hardware que a máquina do cliente pode não ter; fica como opção futura, junto com a ideia do dono de um dispositivo físico de chaves (dúvida 6).

**Quem decide.** Decidida pelo arquiteto para a instância. O OpenBao do lado da Maind foi decidido pelo dono (dúvida 2).

**Pontos que fecha.** A-05 (onde fica a chave de cada organização, como o código de recuperação a restaura e quanto custa cifrar). A-24, em parte (as organizações separadas por dentro: um arquivo por organização, uma chave por organização e, na seção 3, um contexto de pedido que carrega a organização).

### 2.6 As telas: console, tela de entrada e página de status

**A tecnologia.** O console (C-20) e a página de status (C-19) são uma aplicação **Vue 3 com TypeScript** (licença MIT; TypeScript é Apache 2.0), construída com **Vite** (MIT) e estado em **Pinia** (MIT): uma tela que roda inteira no navegador e conversa com o núcleo por pedidos pequenos (uma SPA). Os componentes visuais, botões, tabelas, formulários e menus, vêm do **design system da casa, o HUD Vue**, o mesmo das telas do primeiro app, com a marca da Maind, que sai do repositório do Horus e vira um **pacote próprio**, usado pelos dois produtos e pelo Gerenciador do mAIg (M-07). O núcleo serve a aplicação como arquivos estáticos no mesmo endereço do mAIg, de modo que o navegador fala com uma origem só. A tela de entrada (C-01), com o login, a escolha da organização e a troca de senha, é **gerada no servidor** pelo próprio ASP.NET Core (Razor Pages), sem depender de código no navegador: um formulário de login funciona em qualquer navegador, não exige a aplicação carregada e aceita uma política de segurança de conteúdo mais rígida.

**Por que esta.** Vue 3 com TypeScript e o HUD Vue são o que as telas do primeiro app usam, e o console do mAIg é o mesmo programa na casa do cliente e na hospedagem da Maind (decisão 96): uma aplicação, uma cara, dois lugares. A tela de entrada separada é uma escolha de robustez: é a porta por onde todo mundo passa, e a página mais simples é a mais confiável.

**As alternativas consideradas.** **A tela de entrada dentro da mesma aplicação Vue**: ganha-se uma tecnologia só; perde-se a robustez de um formulário puro, e a aplicação inteira precisa carregar antes do login. **Uma biblioteca de componentes de mercado (PrimeVue, MIT) com tema da Maind**: ganha-se independência do repositório do Horus; perde-se a cara única da família, e foi a opção B da dúvida 10, não escolhida.

**Quem decide.** A tecnologia das telas é do arquiteto; o design system foi decidido pelo dono (dúvida 10). O pacote próprio do HUD Vue é trabalho conjunto com o time do Horus (seção 6, próximos passos).

### 2.7 Os encaixes: um serviço da nuvem quando existe, uma peça portátil quando não existe

A regra da dúvida 1 obriga cada necessidade de infraestrutura a ter uma resposta que funciona em máquina virtual, VPS, Kubernetes ou só Docker. A tabela diz a peça portátil, que é o padrão, e o serviço da nuvem que entra no lugar dela quando existe.

| Necessidade | A peça portátil (padrão) | O serviço da nuvem, quando há |
| --- | --- | --- |
| Cofre das chaves do lado da Maind (cartório, assinaturas, chaves das instâncias hospedadas) | **OpenBao** (MPL 2.0), em qualquer ambiente, destrancado por partes de chave divididas entre duas pessoas | O mesmo OpenBao, destrancado automaticamente pelo cofre em hardware da nuvem (KMS) |
| Registro de imagens (M-04) | **CNCF Distribution** (Apache 2.0), atrás do nome único da Maind | O mesmo registro, com o armazenamento no serviço de objetos da nuvem (compatível com S3) em vez do disco |
| E-mail da hospedagem (M-05) | SMTP, pelo mesmo carteiro (C-24), para o fornecedor escolhido na implantação | O serviço de e-mail transacional da nuvem, por SMTP |
| Banco do lado da Maind | PostgreSQL em contêiner ou em máquina virtual, com a cópia de segurança do próprio PostgreSQL | O PostgreSQL gerenciado da nuvem |
| Balanceador na frente do ponto de conexão (M-01) | Nginx (BSD) em modo de repasse TCP, que entrega a conexão cifrada inteira ao nó | O balanceador da nuvem ou do cluster, no mesmo modo de repasse |
| Armazenamento dos arquivos da instância | Volume do Docker | Volume persistente do Kubernetes, no disco do cluster |
| Chave da instância | Arquivo numa pasta da máquina, fora do volume | Secret do namespace; na hospedagem da Maind, o OpenBao |
| Quem troca a caixa | O zelador (Docker) | O Kubernetes, pelo mecanismo de atualização gradual |
| O procedimento da máquina (decisão 100) | Um comando do núcleo pelo `docker compose exec`, na máquina | O mesmo comando pelo `kubectl exec`, por quem opera o cluster |

**O OpenBao** merece um parágrafo, porque é a peça nova do lado da Maind (dúvida 2). É um cofre de segredos e de chaves de código aberto (MPL 2.0), mantido pela Linux Foundation como continuação do Vault depois que o Vault mudou para uma licença fechada. Roda em contêiner, em máquina virtual, em VPS ou em Kubernetes. Guarda as chaves que assinam (o motor "transit": a chave nunca sai, o cofre devolve só a assinatura, e cada uso fica anotado) e pode operar a autoridade certificadora emissora do cartório (o motor "pki": assina pedidos de certificado com perfis de validade). Quando reinicia, está trancado: destranca-se com o cofre em hardware da nuvem, quando há, ou com partes de chave divididas entre duas pessoas da Maind, quando não há; é o que o dono pediu. A raiz do cartório não fica nele: é criada numa cerimônia, guardada fora de linha e usada só com duas pessoas. Opera-se a mais, como o dono anotou: o cofre sempre de pé (dois nós ou mais), a cópia de segurança dele e o procedimento de destrancar depois de reiniciar.

**Quem decide.** O princípio e o OpenBao são do dono (dúvidas 1 e 2). Cada peça portátil é do arquiteto.
## 3. Componente a componente

Cada ficha repete a mesma ordem: a tecnologia; por que esta; as alternativas consideradas, as duas melhores; quem decide; e os pontos do arquiteto que fecha ou deixa em aberto. O que a base comum (seção 2) já decidiu não se repete: a linguagem é C# sobre .NET, o banco interno é SQLite, as telas são Vue 3 com TypeScript e o HUD Vue, e tudo roda no processo do núcleo, salvo quando a ficha diz o contrário.

### 3.1 A entrada e a identidade

#### C-01. A porta de entrada

- **A tecnologia.** O servidor web Kestrel, do ASP.NET Core, atende em HTTPS, na porta 443, com o certificado do endereço que a TI do cliente instala (decisão 120), lido de um arquivo na pasta de chaves (Docker) ou de um Secret (Kubernetes) e recarregado quando a TI o troca, sem parar o mAIg; no Kubernetes, o Service do cluster expõe a porta e repassa a conexão cifrada inteira ao núcleo, sem abri-la. As páginas de entrada, a escolha da organização e a troca de senha são páginas geradas no servidor (Razor Pages, seção 2.6). A sessão da pessoa na porta de entrada é um cookie de sessão do ASP.NET Core, só para o navegador, protegido contra leitura por código da página e contra uso a partir de outro site. A renovação do passe (decisão 37) é um endereço que a tela do app, na nuvem, chama a cada 15 minutos; ele responde com as permissões de origem cruzada (CORS, a regra que diz a um navegador quais sites podem chamar um endereço) só para as origens das partes de fora dos apps instalados, lidas do catálogo (C-15), e com os cabeçalhos do acesso a rede privada que os navegadores novos exigem quando um site da internet fala com um endereço interno. A luz de estado é um endereço público, sem login, que devolve só a cor e o texto.
- **Por que esta.** Kestrel atende HTTPS e HTTP/2 sozinho, com desempenho de servidor dedicado, e dispensa um servidor web na frente: uma caixa a menos para a TI do cliente. A página de entrada no servidor é a mais robusta possível para a porta por onde todo mundo passa.
- **As alternativas consideradas.** **Um servidor web na frente (Nginx ou Caddy)**: ganha-se a troca de certificado e as regras de acesso num lugar que a TI já conhece; perde-se mais uma caixa e mais um lugar de configuração, para um ganho que o Kestrel já dá. **A tela de entrada na mesma aplicação Vue**: já tratada na seção 2.6.
- **Quem decide.** Decidida pelo arquiteto.
- **Pontos do arquiteto.** Fecha **A-03** com um caminho principal e um de reserva: o principal são os cabeçalhos de origem cruzada e de acesso a rede privada no endereço da renovação, que o navegador pede uma vez e guarda; o de reserva, para o navegador que negar, é uma página pequena do próprio mAIg, aberta pela tela do app dentro de um quadro, que renova o passe no endereço interno e o devolve à tela do app por mensagem entre janelas. Os dois têm de ser provados nos navegadores da lista da onda 1.0. Fecha **A-26** junto com o chaveiro (C-11).

#### C-02. O cadastro das pessoas e a conferência de quem entra

- **A tecnologia.** Tabelas próprias no arquivo de cada organização (as pessoas, as contas do console da organização) e no arquivo da instância (os administradores da instância). A senha é guardada pelo componente de hash de senha do ASP.NET Core Identity, usado só ele, sem o resto do Identity: PBKDF2 com HMAC-SHA-512 e contagem alta de iterações, o padrão da plataforma e aceito pelas normas de mercado. A conferência da conta Google é feita pelo tratador de OpenID Connect embutido no ASP.NET Core: o Google confirma quem a pessoa é, e o mAIg confere o e-mail contra o cadastro e decide se ela entra (decisão 98). Os links de uso único são um segredo aleatório de 256 bits, guardado só pelo seu hash, com validade curta; o bloqueio por tentativas erradas é um contador por conta no banco. O **primeiro owner** de cada organização não é digitado por ninguém na instância: o e-mail dele vem do Gerenciador (M-07), dentro do arquivo assinado da organização, e o cadastro cria o usuário sozinho no fim do setup e manda o link de primeiro acesso direto a ele (decisões 51 e 99; dúvida 9, revista); os outros owners seguem com o administrador da instância (decisão 83). Na segunda versão, a confirmação em dois passos entra por código no celular (TOTP) ou por chave de acesso (passkey), com bibliotecas .NET de licença MIT.
- **Por que esta.** Tudo o que é sensível aqui, o hash da senha e o OpenID Connect, vem da própria plataforma. O resto é tabela e regra de negócio, que é do mAIg: quem cadastra quem (decisões 77, 83 e 100) não cabe no modelo de papéis de uma biblioteca pronta.
- **As alternativas consideradas.** **O ASP.NET Core Identity inteiro**: ganha-se fluxos prontos; perde-se porque o modelo dele briga com o do mAIg, uma conta por organização e papéis por app. **Argon2id para o hash da senha**: ganha-se um algoritmo mais resistente a hardware especializado; perde-se por depender de biblioteca de terceiros na parte mais sensível; fica como troca futura, porque o hash guarda a versão do algoritmo.
- **Quem decide.** Decidida pelo arquiteto.
- **Pontos do arquiteto.** **A-01** fecha no desenho: bloqueio progressivo por conta, com aviso à pessoa; os números são do próximo passo. A confirmação em dois passos da segunda versão é configurável por organização e por papel (decisão 50). Toca A-06 e A-23.

#### C-03. O emissor de passes

- **A tecnologia.** O passe é um **JWT** (JSON Web Token: um texto curto com os dados da pessoa, assinado, que qualquer um confere com a chave pública e ninguém altera sem a privada), assinado com **ES256**, a assinatura ECDSA P-256 da chave do certificado da organização (decisões 28 e 32). Leva: quem emitiu (a instância e a organização), a pessoa, o app a que serve, o papel dela nesse app, a hora de emissão e o vencimento em 15 minutos, um número único e o identificador da chave, que é a impressão digital do certificado da organização em vigor. A biblioteca é a Microsoft.IdentityModel (MIT), a mesma que a nuvem dos apps em .NET usa para conferir. O fluxo do login segue o desenho do código de autorização do OAuth 2: o código de uso único vale segundos, é guardado só pelo hash e só vale para aquele app e aquela pessoa; a troca do código pelo passe viaja pela ligação, porque o mAIg não tem endereço de entrada (decisão 6). O passe de agendamento (decisão 42) não circula: é uma linha no arquivo da organização, com a pessoa, o app, a tarefa e a hora da criação; a parte de fora pede "rode a tarefa" só com o número dela, e o emissor confere a linha, o acesso e a permissão a cada rodada.
- **Por que esta.** O JWT com ES256 é o único formato que a nuvem dos apps, em qualquer linguagem, confere sozinha com a chave pública que o cartório da Maind (M-02) publica, sem perguntar ao mAIg a cada pedido: é o que a decisão 32 pede.
- **As alternativas consideradas.** **PASETO**: ganha-se menos escolhas erradas possíveis; perde-se a aceitação universal. **Token opaco com consulta ao mAIg**: ganha-se a revogação imediata; perde-se por exigir uma consulta pela ligação a cada pedido e por contrariar a decisão 32.
- **Quem decide.** Decidida pelo arquiteto.
- **Pontos do arquiteto.** Nenhum dos 39 cai aqui. Quando o certificado da organização gira, os passes assinados pelo anterior seguem valendo até vencer, em até 15 minutos, porque o identificador da chave diz à nuvem qual certificado conferir; o cartório publica o anterior por mais um dia.

### 3.2 O núcleo que confere e anota

#### C-04. A portaria dos pedidos

- **A tecnologia.** Um serviço do processo do núcleo com duas faces. Para a ligação (C-18), é a função que recebe cada pedido que desce. Para os módulos, é um **servidor gRPC**: gRPC é um jeito de dois programas conversarem com mensagens tipadas e um contrato escrito, mantido como código aberto (Apache 2.0) e de primeira classe no .NET. No formato Docker, esse servidor atende num **socket Unix**, um canal entre programas da mesma máquina que não passa pela rede; no formato Kubernetes, atende na rede interna do cluster, com TLS mútuo entre o núcleo e cada módulo e a política de rede que só deixa o módulo falar com ele (C-16). A cada pedido que entra, a portaria cria um **contexto de pedido**: um identificador aleatório, válido só durante aquele pedido, que amarra a pessoa, a organização, o app e o número do pedido; o módulo recebe esse identificador e o apresenta em toda chamada ao núcleo; a portaria resolve organização e pessoa a partir dele, e nunca a partir do que o módulo diz. O limite de pedidos (decisão 89) usa o limitador de taxa embutido no ASP.NET Core, com janela deslizante, contado em memória por pessoa e por app.
- **Por que esta.** O contexto de pedido é o que torna "cada pedido é de uma organização só" (decisão 60) uma garantia do núcleo: o módulo não tem como nomear outra organização. O gRPC dá um contrato escrito, versionável e neutro de linguagem, e é o mesmo nos dois formatos; só o transporte muda.
- **As alternativas consideradas.** **Um gateway de API pronto (Envoy ou YARP)** na frente dos módulos: ganha-se regras prontas; perde-se porque as conferências da portaria são semânticas, não regras de caminho de URL. **Contadores num armazenamento compartilhado (Valkey)**: ganha-se contagem que sobrevive a reinício; perde-se uma caixa a mais para um processo só.
- **Quem decide.** Decidida pelo arquiteto.
- **Pontos do arquiteto.** Fecha **A-24** com três camadas: um arquivo por organização e uma chave por organização (seções 2.2 e 2.5), o contexto de pedido que carrega a organização em toda chamada, e toda consulta do núcleo escrita por organização a partir desse contexto. Toca A-30 e A-31 (C-16).

#### C-05. O livro de regras da organização

- **A tecnologia.** Tabelas no arquivo de cada organização (o estado, os apps, as permissões, os bancos sem a senha, as regras da IA, o teto, o limite, os jeitos de entrar, os auditores) e no arquivo da instância (as organizações, a janela de atualização, os prazos). **A organização entra no livro a partir do arquivo assinado pelo Gerenciador do mAIg (M-07)**, que o mAIg busca pela ligação depois que a TI digita a chave temporária na interface de setup (C-21) ou na tela "adicionar organização" do console (C-20), conferido pela guarda (C-14): o livro lê dele o identificador, o nome, o e-mail do primeiro owner e os apps contratados, cria a organização "em configuração" e não aceita organização criada à mão (dúvida 9, revista). O núcleo mantém uma **cópia em memória** da configuração de cada organização, refeita a cada mudança no console, para a portaria não ir ao disco em cada pedido. Os estados da organização (em configuração, ativa, encerrada) e do app (em uso, pausado, suspenso, parado, com atualização necessária) são uma máquina de estados explícita no código, com as transições que as decisões permitem e nenhuma outra. Toda mudança passa pelo escrivão (C-09) antes de valer.
- **Por que esta.** A configuração é lida em todo pedido e mudada raramente: a cópia em memória é a forma mais simples de ela não pesar. A máquina de estados explícita impede, por construção, uma transição que nenhuma decisão permite. Ler a organização de um arquivo assinado, e não de um formulário, é o que faz "a Maind cria a organização" valer por construção.
- **As alternativas consideradas.** **Arquivos de configuração em disco (YAML)**: perde-se a atomicidade das mudanças e o rastro no registro. **Um serviço de configuração à parte**: desnecessário num processo só.
- **Quem decide.** Decidida pelo arquiteto; a origem da organização é do dono (dúvida 9).
- **Pontos do arquiteto.** Fecha **A-23**: a organização encerrada é um estado no livro, e nada é apagado: o arquivo dela fica, a chave de dados fica, as pessoas que usam os apps perdem a entrada, e os owners da organização e os auditores seguem entrando no console só para ler o registro e pedir a volta (decisão 115). Com a desinstalação do último app, o arquivo é excluído e a chave destruída (decisão 87). Toca A-24.

#### C-06. O leitor dos bancos

- **A tecnologia.** Os conectores oficiais de .NET de cada família de banco, pelo padrão ADO.NET da plataforma: **Microsoft.Data.SqlClient** para o SQL Server (MIT), **Npgsql** para o PostgreSQL (licença PostgreSQL), **MySqlConnector** para o MySQL e o MariaDB (MIT) e **ODP.NET gerenciado** para o Oracle (termos de uso livre da Oracle, que permitem o uso comercial, mas não é código aberto). A lista final dos tipos (A-15) é um fato a levantar junto aos clientes de hoje do primeiro app; o SQL Server é certo, porque é a fonte analítica do Horus de hoje. O "só leitura" tem as duas travas da decisão 61: no cadastro, o mAIg consulta o **catálogo de permissões** do próprio banco e recusa o usuário que tenha qualquer permissão de gravar ou de alterar estrutura; não se testa "tentando gravar", porque em algumas famílias um comando de estrutura confirma sozinho e não se desfaz. Em cada consulta, o mAIg abre uma transação só leitura, onde a família aceita, aplica um **guarda de SQL** que só deixa passar uma instrução de consulta por vez, impõe o limite de tempo pelo tempo máximo do comando e o limite de linhas lendo até o limite mais uma e, se ela existir, cancelando o comando e falhando o pedido inteiro (decisão 124). A sugestão das colunas sensíveis (decisão 111) nasce dos **nomes e tipos** das colunas, por uma lista de padrões, lida do catálogo do banco, sem olhar nenhum dado; é refeita quando a impressão digital do esquema muda, conferida uma vez por dia e a cada edição do cadastro.
- **Por que esta.** Os conectores oficiais são o caminho maduro em .NET. O catálogo de permissões é a prova que o próprio banco dá; a transação só leitura e o guarda são o cinto a mais. Sugerir por nome e tipo mantém o núcleo sem ler dado que não precisava ler.
- **As alternativas consideradas.** **ODBC**: ganha-se um conector só; perde-se por depender de drivers do sistema na caixa, com menos tipagem. **Um motor de consulta federado (Trino)**: perde-se por pôr um programa grande, em Java, dentro da caixa do cliente.
- **Quem decide.** Decidida pelo arquiteto; a lista dos tipos (A-15) é fato, não escolha.
- **Pontos do arquiteto.** Fecha **A-14** e **A-16** (acima; os números são do próximo passo). **A-15** fica como levantamento. Na segunda versão, **A-38** tem caminho técnico: as quatro famílias aceitam que o mAIg informe ao banco, na sessão da consulta, a identidade de quem perguntou; se o mAIg deve fazer isso é decisão com o dono da Maind.

#### C-07. O intermediário da IA

- **A tecnologia.** Uma interface interna do mAIg, o **conector de IA**, com uma implementação por provedor, cinco ao todo, na ordem de construção que o dono da Maind definiu: **o OpenRouter e a API da Anthropic primeiro**; depois a OpenAI, o Google e o Amazon Bedrock. O módulo nunca escolhe o formato de nenhum provedor: ele pede ao núcleo "este modelo, estas partes, esta camada", e o núcleo monta o pedido na linguagem do provedor. O pedido do módulo é **tipado por partes**: cada parte declara o que é (a pergunta, a descrição do banco, um total, uma linha de dados), e é isso que deixa o núcleo conferir a camada antes de enviar (decisões 20 e 62). O custo de cada pedido é o que o provedor informa, quando informa (o OpenRouter devolve o custo em dólares em cada resposta); quando não informa, o núcleo multiplica a contagem de tokens por uma **tabela de preços** mantida pela Maind no Gerenciador (M-07), assinada e atualizada pela ligação sem versão nova, e a visão do consumo mostra o número com a marca "estimado" e a data da tabela; o limite de gasto (decisão 112) trava pelo número que aparece, informado ou estimado (dúvida 7). O consumo do mês é gravado **na mesma transação** da linha do registro. Os conectores, um a um, estão na seção 4.4, com o que se reaproveita do primeiro app.
- **Por que esta.** A decisão 19 põe só o núcleo falando com o provedor, e a decisão 60 põe a camada entre o que o núcleo garante sozinho: as duas exigem que o núcleo entenda o que vai no pedido, e por isso o pedido é tipado. Um conector por provedor, escrito pela Maind sobre a API de cada um, é o que o primeiro app já faz e o que dá controle total sobre o que sai pela saída liberada.
- **As alternativas consideradas.** **Microsoft.Extensions.AI** (MIT): ganha-se uma interface padrão e provedores prontos; perde-se porque a interface dela é a de um chat livre, e o mAIg precisa das partes tipadas; pode entrar por baixo dos conectores mais tarde. **Um proxy de IA pronto dentro da caixa (LiteLLM e semelhantes)**: perde-se por pôr um programa em outra linguagem no caminho dos dados e por esconder do núcleo o que ele precisa conferir.
- **Quem decide.** Decidida pelo arquiteto; a precisão do custo exibido foi decidida pelo dono (dúvida 7).
- **Pontos do arquiteto.** Fecha **A-17** (custo informado ou estimado, com a marca). Fecha **A-18** na metade do "como": o app declara a camada de cada pedido no próprio pedido, parte por parte; confirmar que o Horus responde bem na camada 1 é um ensaio com o time do Horus. Fecha **A-19** no desenho: um total só entra na camada 2 **por referência** a um resultado que o próprio núcleo leu, com a contagem de linhas que o produziu; o total com contagem abaixo do mínimo conta como linha de dados (decisão 113); o número do mínimo é do próximo passo. Toca A-37.

#### C-08. O fiscal da saída

- **A tecnologia.** Um serviço do processo do núcleo que recebe a resposta pronta do módulo já **estruturada**: o contrato (seção 4.2) obriga o módulo a devolver os dados como tabelas tipadas (colunas com nome e tipo, linhas) ao lado do texto, e nunca como texto solto com números dentro. Assim o fiscal conta as linhas contra o teto (decisão 43), recusa a resposta inteira acima dele (decisão 124) e mascara, pelo nome da coluna de origem que o leitor (C-06) anotou, as colunas marcadas como sensíveis (decisão 111). Na onda 1.1, gera a planilha no formato aberto `.xlsx` com a biblioteca ClosedXML (MIT), já mascarada.
- **Por que esta.** O teto e a máscara só são garantia do núcleo se o núcleo enxerga linhas e colunas. ClosedXML é a biblioteca de planilha .NET madura com licença permissiva; a mais conhecida, EPPlus, passou a licença comercial.
- **As alternativas consideradas.** **O módulo gera a planilha**: perde-se a garantia da máscara. **A planilha em CSV**: perde-se a abertura direta no Excel com tipos e acentos certos.
- **Quem decide.** Decidida pelo arquiteto.
- **Pontos do arquiteto.** Nenhum dos 39 cai aqui. Depende de A-16.

#### C-09. O escrivão do registro

- **A tecnologia.** O único serviço com acesso de escrita às tabelas dos registros. Cada linha é um documento JSON (System.Text.Json) com todos os campos, **cifrado com AES-256-GCM** pela chave de dados da organização, e guardado ao lado de cinco colunas legíveis: a organização, a hora, o número de sequência, a impressão digital da linha anterior e a da própria linha (**cadeia de hash**, SHA-256: alterar ou remover uma linha quebra todas as seguintes). Para a busca por app, pessoa, banco, modelo e resultado sem decifrar, cada um desses campos ganha um **índice cego**: um carimbo HMAC-SHA-256 do valor com uma chave de índice derivada da chave de dados; quem procura carimba o valor procurado e compara carimbos, e quem copia o disco vê carimbos, não nomes. Uma vez por dia e a cada mil linhas, o escrivão pede ao chaveiro (C-11) que assine, com a chave do certificado da organização, a impressão da última linha: é o **ponto de conferência** que prova que a cadeia não foi refeita. A escrita é **síncrona**, dentro do atendimento do pedido: se ela falha, a portaria não atende (decisão 96). Na onda 1.1, a cópia assinada é a exportação das linhas, da cadeia e dos pontos de conferência num arquivo, assinado de novo pelo chaveiro.
- **Por que esta.** A cifra linha a linha com índices cegos é o único jeito de cumprir ao mesmo tempo "cifrado contra quem copia o disco" (decisão 57) e "consultável por app, pessoa, banco, modelo, resultado e período" (decisão 95). A cadeia com pontos assinados torna "ninguém altera uma linha" (decisão 15) verificável. A escrita síncrona é o que a decisão 96 pede; o primeiro app grava o consumo de IA sem bloquear e aceita perder linha, e isso aqui não cabe.
- **As alternativas consideradas.** **Um banco de registro imutável à parte (immudb, Apache 2.0)**: ganha-se a prova pronta; perde-se uma caixa a mais. **Arquivos de texto, uma linha por linha (JSON Lines)**: perde-se a busca com índice.
- **Quem decide.** Decidida pelo arquiteto.
- **Pontos do arquiteto.** Fecha **A-07**: o administrador da instância escreve pelo mesmo caminho de todos; a parte do console que ele alcança não tem nenhum endereço de leitura do registro de uma organização, e a cifra faz a leitura por fora do console devolver só bytes. Fecha **A-04** e **A-06** com C-12.

### 3.3 Os cofres e o registro

#### C-10. O cofre da organização

- **A tecnologia.** Uma tabela no arquivo de cada organização, com cada segredo cifrado em AES-256-GCM pela chave de dados da organização (o envelope da seção 2.5), com um rótulo de finalidade dentro da cifra ("senha de banco", "chave de IA"; na segunda versão, "acesso a servidor MCP"). Nenhum endereço do console devolve o segredo: a tela vê só "cadastrada" e os últimos caracteres. O leitor (C-06) e o intermediário (C-07) recebem o segredo por uma interface interna que o decifra para um buffer de memória de vida curta, zerado no fim da chamada. A senha do servidor de e-mail da instância (C-24) é um segredo **da instância**, cifrado com a chave da instância.
- **Por que esta.** Reaproveita a mesma cifra do registro. O primeiro app cifra as chaves com o Data Protection do ASP.NET Core, cujas chaves ficam numa pasta que vai na cópia de segurança; isso é trocado pelo envelope por organização, porque a decisão 57 exige uma chave por organização que quem opera a máquina não alcance.
- **As alternativas consideradas.** **Um cofre de segredos como produto (o próprio OpenBao) dentro da instância**: ganha-se rotação e auditoria prontas; perde-se uma caixa a mais na casa do cliente, com as próprias chaves para proteger e destrancar a cada reinício; o OpenBao fica no lado da Maind (seção 2.7), e na casa do cliente a ideia do dono de um dispositivo físico de chaves (dúvida 6) é o caminho futuro. **O gerenciador de segredos da nuvem**: não existe na casa do cliente, e a regra da dúvida 1 o proíbe como dependência.
- **Quem decide.** Decidida pelo arquiteto.
- **Pontos do arquiteto.** **A-35** (segunda versão) fecha como a proposta previa: o acesso a cada servidor MCP fica aqui. Depende de A-05, fechado na seção 2.5.

#### C-11. O chaveiro: certificados, chave de cifra e código de recuperação

- **A tecnologia.** Tudo com as classes de criptografia do .NET: as chaves são ECDSA P-256; o pedido de atestado é um **CSR** (o pedido de certificado padrão, PKCS#10: a chave pública mais os dados do portador, assinados pela privada); o certificado é **X.509**, em texto PEM. As chaves privadas ficam cifradas com a chave da instância, no arquivo da organização (a do certificado da organização) ou no da instância (a da ligação e a do módulo de cada app). O par de chaves da ligação da instância nasce na primeira conexão do setup, autenticada pela chave temporária; o par de chaves de uma organização nasce quando o arquivo dela, vindo do Gerenciador (M-07), chega pela ligação; os CSR vão no handshake. Um serviço de fundo cuida da renovação: pede o atestado novo pela ligação quando passa de dois terços da validade, e avisa 7 dias antes do fim se não conseguir (decisão 44). O certificado do endereço (decisão 120) é da TI do cliente: ela o entrega em PEM ou PFX com a chave, ou pede ao mAIg um CSR para a autoridade certificadora dela assinar; nos dois casos a Maind nunca vê essa chave. O código de recuperação (decisão 87) é um segredo aleatório de 128 bits, mostrado uma vez como grupos de caracteres, do qual se deriva por HKDF a chave que cifra a cópia de recuperação da chave de dados; o mAIg não o guarda. Destruir a chave (decisão 87) é sobrescrever e apagar as duas cópias cifradas junto com o arquivo da organização.
- **Por que esta.** O CSR e o X.509 são o que a decisão 86 pede em forma de padrão: a chave nasce no mAIg, e só a pública viaja. Usar a criptografia da plataforma reduz o que a TI do cliente precisa auditar.
- **As alternativas consideradas.** **O protocolo ACME** entre o chaveiro e o cartório: ganha-se um protocolo padrão de emissão automática; perde-se porque ele prova o controle de um nome de internet, e o mAIg precisa provar a identidade de uma instância pela ligação já autenticada. **Chave de hardware (TPM)**: opção futura, com o dispositivo da dúvida 6.
- **Quem decide.** Decidida pelo arquiteto.
- **Pontos do arquiteto.** **A-05** fechado (seção 2.5). **A-26** fecha assim: o certificado do endereço é X.509 da autoridade certificadora da empresa ou de uma pública; a chave nasce onde a TI preferir; a regra da decisão 86 é sobre os certificados que a Maind atesta e não se aplica a ele. **A-08**, na parte do chaveiro: o certificado de identidade do módulo de cada app vale 7 dias e gira sozinho pela ligação; a revogação antes do prazo é uma lista curta de cancelados que o cartório (M-02) desce pela ligação. **A-22**, na parte das chaves: as chaves privadas dos certificados **não entram** na cópia de segurança; depois de uma restauração, o chaveiro gera chaves novas e pede atestado novo (decisão 116); a chave de dados entra, só na cópia cifrada pelo código de recuperação.

#### C-12. O registro de cada organização

- **A tecnologia.** A tabela de registro do arquivo SQLite da organização, no modo de escrita WAL (as leituras não esperam a escrita), com as colunas da ficha do escrivão (C-09) e a tabela dos pontos de conferência assinados. Só há inclusão: o código não tem caminho de alteração nem de exclusão de linha, e a cadeia de hash denuncia a alteração feita por fora. O nome da pessoa excluída (decisão 27) está dentro do conteúdo cifrado de cada linha, gravado na hora. A organização encerrada mantém o arquivo; a desinstalação do último app o exclui.
- **Por que esta.** Um arquivo por organização transforma "registro de cada organização" em coisa física. O volume que só cresce (decisão 15) cabe no SQLite por anos e, se um dia pesar, o arquivo se divide por ano sem mudar o desenho.
- **As alternativas consideradas.** **PostgreSQL com permissão só de inclusão**: perde-se a caixa única, e a trava não vale contra quem tem a máquina. **Um armazenamento de séries temporais ou de logs**: perde-se por ser um programa grande para um registro de filtros simples.
- **Quem decide.** Decidida pelo arquiteto.
- **Pontos do arquiteto.** Fecha **A-04** (cadeia de hash com pontos assinados; cifra por organização, linha a linha; índices cegos e hora; arquivo próprio) e **A-06** (o nome vai dentro de cada linha, na hora).

#### C-13. O registro da instância

- **A tecnologia.** A mesma tabela e o mesmo código do registro de uma organização, no arquivo da instância, cifrada com a chave da instância e com a mesma cadeia de hash. Só os administradores da instância têm o endereço de leitura (decisão 81).
- **Por que esta.** Um código só para os dois registros.
- **As alternativas consideradas.** **Sem cifra, só com a cadeia**: ganha-se nada que valha a diferença de código. **No log técnico da máquina**: perde-se a consulta pelo console e a cadeia.
- **Quem decide.** Decidida pelo arquiteto.
- **Pontos do arquiteto.** Nenhum dos 39 cai aqui. Depende de A-22 (C-23).

### 3.4 Os apps: contratação, instalação e execução

#### C-14. A guarda dos documentos assinados: a organização, os kits e as licenças, que chegam pela ligação

- **A tecnologia.** Três documentos assinados pela Maind entram por aqui, todos em **JWS** (a assinatura padrão de documentos JSON, irmã do JWT), conferidos com a chave pública da Maind que vem na imagem, e **todos chegam pela ligação**: nenhum viaja por e-mail nem por download (dúvida 9, revista pelo fluxo do setup). **O arquivo da organização**: o identificador e o nome da organização, o e-mail do primeiro owner e os apps contratados, gerado pelo Gerenciador (M-07) quando a Maind cria a organização; o mAIg o busca no servidor das contratações (M-03) na primeira conexão do setup, apresentando a **chave temporária** que a TI digitou na interface de setup (C-21). **O manifesto do que a organização pode ter**: a lista dos apps contratados e, para cada um, o **kit**: o app, a referência da imagem do módulo com a impressão digital, o contrato de app (C-15) e um **bilhete de inscrição** de uso único e prazo curto, com que o mAIg gera a chave do módulo e pede o atestado (decisão 1 de 12/11: o kit não traz certificado pronto); é por esse manifesto que a instalação segue no estilo de um gerenciador de pacotes, e ele é atualizado pela ligação a cada app que o Gerenciador autoriza depois (dúvida nova 4). **A licença** de cada app, com a data do fim do contrato, a carência e a hora da emissão (decisão 56). A chave temporária é um segredo aleatório, de vida curta e uso único, gerado pelo Gerenciador; a guarda a apresenta uma vez, numa conexão em que a instância ainda não tem certificado e só o endereço da Maind se prova, pela autoridade pública (decisão 56); nessa conversa o chaveiro (C-11) pede os certificados da ligação e da organização, e daí em diante a ligação é mútua. O **handshake** de cada app é a troca de mensagens gRPC em que a guarda apresenta o bilhete e o CSR da identidade do módulo e recebe o certificado e a licença. A situação do contrato é calculada todo dia por um serviço de fundo a partir das datas da licença. A ação manual da Maind e o pedido de encerramento descem pela ligação como mensagens assinadas, conferidas antes de obedecer. Uma segunda organização numa instância que já existe entra pelo mesmo caminho: a Maind gera outra chave temporária no Gerenciador, e o administrador a digita na tela "adicionar organização" do console (C-20).
- **Por que esta.** O JWS é o formato que a mesma biblioteca do passe lê e confere: uma criptografia só para passe, arquivo da organização, manifesto, licença e manifesto de versão. A chave temporária de uso único cumpre a decisão 86 sem que documento nenhum carregue chave, e uma chave vencida ou já usada não serve para nada. Trazer tudo pela ligação, a partir de uma chave digitada, é o que faz "nada instalável viaja por e-mail" valer por construção.
- **As alternativas consideradas.** **O arquivo da organização e o kit baixados de um portal e instalados à mão**: era o desenho da dúvida 5 e da primeira resposta da dúvida 9, superado pelo fluxo do setup. **Um PDF por app, com um código por app**: apareceu numa nota intermediária e foi superado pelo fluxo do dono, em que os apps contratados vêm no manifesto, sem PDF por app (confirmado pelo dono em 12/11/2026).
- **Quem decide.** O fluxo é do dono (dúvida 9, revista); os formatos são do arquiteto.
- **Pontos do arquiteto.** Fecha **A-08**: o handshake são mensagens gRPC pela ligação; a licença é um JWS; o bilhete vale por um prazo curto, propõe-se 30 dias, e uma vez só; a revogação do certificado do módulo é pela lista de cancelados (C-11); a regra das duas pessoas é um procedimento do Gerenciador (M-07). Fecha **A-09**: o kit não é um arquivo; é uma entrada do manifesto assinado que o servidor das contratações entrega pela ligação (confirmado pelo dono em 12/11/2026). Toca A-25 (M-06, M-07).

#### C-15. O catálogo dos apps instalados

- **A tecnologia.** Tabelas no arquivo da instância, e o **contrato de app** (A-11) como peça central: um documento JSON assinado pela Maind, que vem no kit e também gravado dentro da imagem do módulo, com: o identificador e o nome do app; a versão do módulo e a faixa de versões do contrato núcleo-módulo que ele fala; a impressão digital da imagem; a identidade da parte de fora e as origens dela na web; a lista do que o app pode pedir ao núcleo; o mínimo que ele declara para entrar em uso (decisão 72); os modelos de IA que ele sabe usar, por provedor (A-20); os limites de memória e processador que pede; e, na onda 1.1, a lista dos tipos de ato das linhas informadas pelo app (A-12). A assinatura da imagem é conferida antes de rodar (decisão 88): pelo zelador, no Docker; pelo núcleo e pelo contêiner de partida, no Kubernetes.
- **Por que esta.** Um contrato escrito e assinado é o que deixa um segundo app entrar pelo mesmo caminho do primeiro: o núcleo lê o contrato, e não o código do app.
- **As alternativas consideradas.** **Sem contrato, por convenção**: ganha-se nada que dure até o segundo app. **O contrato guardado só na Maind**: perde-se a leitura pela TI do cliente, que o aprova.
- **Quem decide.** Decidida pelo arquiteto.
- **Pontos do arquiteto.** Fecha **A-11**, **A-12** e **A-20**. Toca A-13 e A-18.

#### C-16. O compartimento dos módulos

- **A tecnologia.** Uma caixa de contêiner por app instalado, com as mesmas cinco travas nos dois formatos, aplicadas por quem roda a caixa: **sem saída de rede**; sistema de arquivos **só leitura**, com uma área temporária em memória; usuário **sem privilégios**, sem nenhuma capacidade especial do Linux; **limites de memória e de processador**, do contrato de app, dentro de tetos que o administrador ajusta; e reinício automático se a caixa cair. No **Docker**, "sem saída de rede" é literal (`network_mode: none`: a caixa não tem placa de rede), e a única conversa é o **gRPC pelo socket Unix** (C-04), num diretório compartilhado só entre a caixa do núcleo e a do módulo. No **Kubernetes**, pods falam pela rede do cluster, e por isso "sem saída de rede" é uma **política de rede** que nega toda entrada e saída do pod do módulo e abre só o caminho até o Service do núcleo; a conversa é o mesmo gRPC, pela rede do cluster, com TLS mútuo entre o núcleo e o módulo (certificados internos emitidos pelo chaveiro); e o perfil de segurança restrito do cluster aplica as outras travas. A política de rede só vale se a camada de rede do cluster a aplicar; o instalador **confere isso** subindo um pod de prova e tentando sair, e, se a camada não aplica, não instala módulo nenhum (o que fazer então é a dúvida nova 2). O módulo implementa o serviço "Módulo" do contrato (seção 4.2); o núcleo o chama com o contexto de pedido e confere a saúde dele. Uma caixa por app atende todas as organizações da instância, com a organização no contexto de cada pedido.
- **Por que esta.** As quatro garantias da `MF-109` são exatamente o que um contêiner sem saída de rede e com limites dá, e o que um processo .NET dentro do núcleo não dá. No Docker a ausência de rede é física; no Kubernetes é uma regra do cluster, e por isso o instalador a prova antes de confiar nela.
- **As alternativas consideradas.** **Um sandbox WebAssembly dentro do núcleo**: perde-se por não ser madura a compilação de .NET para ele. **No Kubernetes, o módulo como contêiner lateral no pod do núcleo, dividindo o socket Unix**: ganha-se o socket Unix igual ao Docker; perde-se porque contêineres do mesmo pod dividem a mesma placa de rede, e o módulo teria saída; esbarra na decisão 63.
- **Quem decide.** Decidida pelo arquiteto. O cluster que não aplica política de rede é a dúvida nova 2.
- **Pontos do arquiteto.** Fecha **A-13**: o contrato núcleo-módulo é protobuf, em que campos novos não quebram quem não os conhece; o módulo declara a faixa de versões que fala, o núcleo declara a sua, e o núcleo sustenta a versão atual e a anterior, o que cobre os 30 dias da decisão 45. Fecha **A-30** (as cinco travas acima, nos dois formatos; os números são do próximo passo). Fecha **A-31**: uma cópia por app e por instância, com a organização no contexto. Fecha **A-33**: o módulo que para no meio de um pedido faz a chamada gRPC falhar; a portaria devolve uma falha clara, o escrivão anota "falhou", a caixa reinicia e o pedido **não é refeito sozinho**.

#### C-17. O cache dos painéis

- **A tecnologia.** O cache em memória do próprio processo do núcleo (`IMemoryCache`, da plataforma), com teto de tamanho por organização, nunca em disco. A chave de cada entrada é a organização, o app, a impressão digital da receita do painel e a impressão digital da permissão de quem pediu (decisão 93); a validade é declarada pelo app na receita, dentro de um teto do mAIg. Um reinício esvazia o cache, como a decisão 93 já aceita.
- **Por que esta.** Em memória, o resultado nunca toca o disco: quem copia o disco não leva dado algum.
- **As alternativas consideradas.** **Um cache em rede (Valkey, BSD)**: perde-se uma caixa a mais e um dado em claro fora do processo. **Uma tabela no SQLite**: perde-se por pôr dado da empresa no disco.
- **Quem decide.** Decidida pelo arquiteto.
- **Pontos do arquiteto.** Fecha **A-32** na forma; o tempo padrão é um número do próximo passo.

### 3.5 A ligação de dentro para fora

#### C-18. A ligação com a Maind

- **A tecnologia.** Dois transportes, decididos pelo dono (dúvida 8), para a mesma conversa. O principal é um cliente **gRPC sobre HTTP/2 com TLS**, do próprio .NET (Grpc.Net.Client, Apache 2.0): HTTP/2 é a versão da linguagem da web que leva várias conversas independentes numa conexão só; TLS é a cifra do caminho. A ligação é **mútua**: o mAIg confere o certificado do endereço da Maind, emitido por uma autoridade pública (decisão 56), e apresenta o certificado da ligação, emitido pelo cartório, pelo qual o ponto de conexão sabe qual instância está do outro lado (decisão 38). Cada **linha** da decisão 33 é uma conexão, duas ou três por instância, abertas para servidores diferentes do ponto de conexão; em cada linha, uma conversa longa de controle, mantida viva por sinais de vida, por onde descem os avisos de pedido e sobem o estado e o mínimo de operação (decisão 123); e, para o corpo de cada pedido e de cada resposta, uma chamada própria na mesma conexão, em pedaços, para que uma resposta grande não segure as pequenas (decisão 33). O transporte de reserva é o **WebSocket** (uma conversa aberta pela web comum, que os intermediários de saída das empresas deixam passar): as **mesmas mensagens protobuf**, em quadros, numa conexão WebSocket por linha, com a mesma identidade pelo certificado da ligação; as chamadas de corpo viram canais numerados dentro dela, com o mesmo cuidado de não deixar um corpo grande segurar os pequenos. **A troca é automática**: quando o HTTP/2 não passa (a conexão cai na negociação, o intermediário rebaixa para HTTP/1.1 ou as conversas são cortadas), a ligação passa para o WebSocket sem ninguém mexer em nada, anota a troca no registro da instância, mostra no painel que a instância está no caminho de reserva e tenta voltar ao HTTP/2 de tempos em tempos. Quem começa é sempre o mAIg, nos dois transportes. A reconexão é automática, com espera crescente e aleatória. O que está em andamento quando a ligação cai fica em memória por 15 minutos, pelo número do pedido; quando a linha volta, os dois lados conferem os números e entregam o que ficou (decisão 69).
- **Por que esta.** O gRPC dá contrato escrito, mensagens compactas e conversas simultâneas numa conexão, nativo no .NET dos dois lados. O WebSocket, com as mesmas mensagens, é o caminho que passa onde o HTTP/2 não passa, e o dono o quis na onda 1.0 para nenhuma empresa ficar de fora por causa do intermediário dela. Fazer as duas pontas com bibliotecas de código aberto, e nenhum serviço de outra empresa, é o que a decisão 38 pede.
- **As alternativas consideradas.** **WebSocket com JSON como caminho único**: ganha-se um transporte só; perde-se o contrato tipado e a separação de conversas que o HTTP/2 dá, e foi a opção que o dono não escolheu. **Um barramento de mensagens (NATS ou RabbitMQ)**: perde-se uma peça a mais no caminho dos dados; a decisão 38 pede as duas pontas feitas pela Maind.
- **Quem decide.** Os dois transportes e a troca automática são do dono (dúvida 8); o desenho de cada um é do arquiteto. O endereço e o IP fixo foram decididos (dúvida 3).
- **Pontos do arquiteto.** Fecha **A-27**: "em andamento" é o pedido aceito pela portaria cuja resposta ainda não foi confirmada pelo ponto de conexão; fica em memória, com o número, por 15 minutos; a entrega na volta é pela conferência de números, igual nos dois transportes. Fecha a metade de **A-28** e **A-29** que é da instância: um nome, uma porta (443), dois transportes com troca automática e a reconexão com espera crescente; a outra metade é de M-01. Toca A-33.

#### C-19. A luz de estado e a página de status

- **A tecnologia.** A luz nasce da máquina de estados da ligação: "no ar" com todas as linhas de pé, em qualquer dos dois transportes; "instável" quando uma linha caiu ou religou nos últimos minutos, ou quando a ligação acabou de trocar de transporte; "fora do ar" sem linha nenhuma. O núcleo a serve num endereço público da porta de entrada e a manda à parte de fora de cada app pela conversa de controle. As quedas e as trocas de transporte ficam numa tabela pequena do arquivo da instância. A página de status, na onda 1.1, é uma tela da aplicação Vue, com o login do mAIg, filtrada pela organização da pessoa.
- **Por que esta.** A luz é um derivado do estado que a ligação já tem.
- **As alternativas consideradas.** **Um produto de página de status**: perde-se por mostrar tudo a todos (decisão 70). **A luz calculada pela nuvem do app**: perde-se a igualdade entre apps.
- **Quem decide.** Decidida pelo arquiteto. Os dias de quedas que a página mostra são do dono da Maind.
- **Pontos do arquiteto.** Nenhum dos 39 cai aqui.

### 3.6 O console

#### C-20. O console

- **A tecnologia.** A aplicação Vue 3 com TypeScript e o HUD Vue da seção 2.6, servida pelo núcleo, falando com uma **API REST em JSON** do próprio núcleo, descrita por um documento OpenAPI. A sessão do console é um cookie do ASP.NET Core, com proteção contra pedidos forjados a partir de outro site, e a autorização é por papel e por organização em cada endereço: a parte da instância, a parte da organização e a parte do auditor são conjuntos de endereços distintos. Na parte da instância, duas telas vêm do fluxo do setup: **adicionar organização**, onde o administrador digita a chave temporária de uma organização nova que a Maind criou no Gerenciador (M-07) para esta instância, e o mAIg busca o arquivo dela pela ligação, pelo mesmo caminho da interface de setup (C-21), com o servidor de e-mail testado (decisão 125) e a ligação de pé (decisão 41); e **apps autorizados**, onde aparece cada app que o Gerenciador autorizou depois do setup, com o gesto de instalar (decisão 10; dúvida nova 4). Não há tela de "criar organização" com formulário nem de enviar arquivo. Toda mudança passa por um serviço do núcleo que chama o escrivão antes de gravar (decisão 96).
- **Por que esta.** É a tecnologia e a cara das telas do primeiro app, e o console é o mesmo programa nos dois lugares (decisão 96). A autorização por conjuntos de endereços torna "o administrador da instância nunca lê o registro da organização" (decisão 12) uma ausência de endereço.
- **As alternativas consideradas.** **Blazor**: perde-se a coerência com o Horus. **Telas geradas no servidor para o console inteiro**: perde-se a interatividade que o painel de alertas, o registro com busca e a visão do consumo pedem.
- **Quem decide.** Decidida pelo arquiteto; o design system é do dono (dúvida 10).
- **Pontos do arquiteto.** Nenhum dos 39 cai aqui. Toca A-20 e A-28: o painel mostra o endereço da Maind, o transporte em uso e, no Kubernetes, o namespace e a versão do chart.

### 3.7 A operação da instância

#### C-21. O instalador: a imagem com a interface de setup e o procedimento da máquina

- **A tecnologia.** A imagem do mAIg já vem com a **interface de setup**: o próprio núcleo, em "modo setup", serve no endereço do mAIg um conjunto de páginas geradas no servidor (Razor Pages, como a tela de entrada), que existe enquanto a instância não está configurada e se desliga quando o setup termina. A TI chega até ela seguindo o **PDF com senha** que a Maind mandou ao e-mail oficial da organização (M-07, M-05), com as instruções da primeira etapa, uma por formato: no Docker, subir a imagem pelo Compose do pacote (o volume de dados, a pasta de chaves, a porta 443); no Kubernetes, instalar o chart com um arquivo de valores mínimo (o tamanho do volume, o Service), sem nenhum dado de organização. A interface tem cinco etapas: (1) o nome do endereço e o certificado dele, enviados em PEM ou PFX, ou um CSR gerado ali para a autoridade da empresa assinar (decisão 120); (2) a **chave temporária** do PDF: a interface a entrega à guarda (C-14), que abre a primeira conexão com a Maind e busca o arquivo da organização e o manifesto do que ela pode ter, e a instalação segue **no estilo de um gerenciador de pacotes, como o npm**: o núcleo baixa do registro (M-04) as imagens dos módulos dos apps contratados, confere as assinaturas, pede ao zelador ou ao Kubernetes que as suba, e o chaveiro (C-11) cria os certificados com as chaves nascendo dentro do mAIg (decisão 86), com o andamento mostrado na tela; (3) o servidor de e-mail da empresa, configurado e testado por um código que chega ao e-mail de quem configura (decisão 125); (4) a conta do **primeiro administrador da instância**, com o e-mail e a senha definidos ali mesmo pela TI, sem link, porque quem chegou até aqui com a chave temporária e de dentro da rede é quem opera a máquina (decisão 100); (5) o fim: o mAIg cria o registro da instância (decisão 102), cria o usuário do primeiro owner da organização com o e-mail que veio no arquivo e manda o link de primeiro acesso direto a ele (decisões 51 e 99), e o console (C-20) assume o endereço. A **linha de comando do núcleo** segue na imagem, para quem opera via `docker compose run` ou `kubectl exec`: `admin recuperar`, o procedimento da decisão 100, que imprime um link de uso único para um administrador e anota o uso no registro da instância; `copia fazer` e `copia restaurar` (C-23); `versao`; e `setup`, que faz as cinco etapas sem tela, com os mesmos dados, para a hospedagem da Maind automatizar a criação de instâncias. A chave da instância nasce na etapa 2, fora do volume de dados.
- **Por que esta.** É o fluxo que o dono definiu: a imagem traz a interface, a TI digita uma chave, e o mAIg faz o resto pela ligação. Páginas no servidor são as mais robustas para a primeira coisa que a TI vê, e não dependem da aplicação Vue carregada. O e-mail dentro do setup é o que permite ao mAIg mandar o link do primeiro owner no fim, como a decisão 125 já exigia antes da primeira organização.
- **As alternativas consideradas.** **Um script de instalação com o pacote e os arquivos baixados de um portal**: era o desenho anterior, superado pelo fluxo do setup. **Um pacote do sistema (.deb ou .rpm)**: perde-se por multiplicar por distribuição o que a imagem faz uma vez.
- **Quem decide.** O fluxo é do dono (dúvida 9, revista; dúvida 1 para os dois formatos); as etapas e as telas são do arquiteto.
- **Pontos do arquiteto.** Fecha **A-02**: o primeiro administrador nasce na etapa 4 da interface de setup, definido pela TI que digitou a chave temporária; o procedimento é o `admin recuperar`, na máquina ou no cluster. **A-10** fechado na seção 2.3.

#### C-22. O atualizador do mAIg

- **A tecnologia.** Uma metade igual nos dois formatos e outra que muda. **Igual**: no núcleo, um serviço de fundo lê pela ligação o **manifesto de versão** assinado (M-04), mostra ao administrador no console o que mudou, a marca de correção de segurança e o prazo, e conta o prazo de adiamento (decisões 39 e 45); na casa do cliente espera o aval e a janela, na hospedagem da Maind espera só a janela (decisão 47). A caixa nova, ao subir, aplica as **migrações** do banco (as mudanças de estrutura, pelas migrações do EF Core), escritas em duas etapas, ampliar antes e limpar na versão seguinte, de modo que a versão anterior continue funcionando com a estrutura nova. **O que muda é quem troca a caixa.** No **Docker**, o zelador: baixa a imagem do registro da Maind com um bilhete curto de download que o núcleo pediu pela ligação, confere a assinatura Cosign e a impressão digital com o manifesto, sobe a caixa nova ao lado da antiga, espera a verificação de saúde, troca a porta e guarda a imagem antiga; se a saúde não passa em alguns minutos, religa a antiga e marca a versão como falhada. No **Kubernetes**, o próprio Kubernetes: depois do aval e dentro da janela, o núcleo confere a assinatura Cosign e a impressão digital, e com a conta de serviço limitada ao namespace muda a imagem do próprio StatefulSet; o Kubernetes faz a troca gradual, com a sonda de prontidão como verificação de saúde, guarda a revisão anterior e volta a ela se a nova não ficar pronta; a imagem do módulo de cada app é trocada do mesmo jeito, no Deployment do módulo, depois do aval do administrador (decisão 88). Quem aciona a troca no Kubernetes (o núcleo, como aqui, ou a TI) é a dúvida nova 1. A atualização do zelador é rara e manual, com instrução na nota da versão; o chart se atualiza pelo `helm upgrade` da TI quando a estrutura do pacote muda, também raro. A instalação no estilo de um gerenciador de pacotes, no setup (C-21), e a atualização usam o mesmo caminho: o manifesto assinado diz o que a instância pode ter, o registro entrega, o núcleo confere, e quem sobe a caixa é o zelador ou o Kubernetes.
- **Por que esta.** A assinatura e a impressão digital no manifesto são as duas conferências de "é da Maind e não foi alterada" (decisão 39), iguais nos dois formatos. Subir a nova ao lado e só então trocar, com a antiga guardada e as migrações em duas etapas, é o que torna a volta possível sem perder dado (A-21); o Kubernetes já faz isso por natureza, e o zelador o imita no Docker.
- **As alternativas consideradas.** **Um atualizador genérico de contêineres (Watchtower)**: perde-se a conferência da assinatura, o aval e a janela. **A TI aplicar a versão nova à mão no Kubernetes (`helm upgrade`) depois do aval**: ganha-se o controle total da TI; perde-se o "se instala sozinho na janela" da decisão 39; é a opção B da dúvida nova 1.
- **Quem decide.** Decidida pelo arquiteto; a troca pelo Kubernetes é do dono (dúvida 1); quem a aciona é a dúvida nova 1.
- **Pontos do arquiteto.** Fecha **A-21** (acima, nos dois formatos).

#### C-23. A ferramenta de cópia de segurança e restauração

- **A tecnologia.** Um comando do núcleo (`copia fazer`), também acionável pelo console, que: faz uma cópia consistente de cada arquivo SQLite pela função de cópia em linha do próprio SQLite, sem parar o mAIg; retira do pacote as cópias da chave de dados cifradas pela chave da instância e deixa só as cifradas pelo código de recuperação (seção 2.5); deixa de fora as chaves privadas dos certificados e a chave da instância; não inclui o cache (decisão 93); junta tudo num arquivo único e o cifra com AES-256-GCM pela **chave da cópia da instância**, uma chave aleatória criada na instalação, mostrada uma vez só e guardada fora da máquina por quem a opera (dúvida 6). No Docker, o arquivo sai numa pasta do volume que a TI leva ao lugar da cópia (P-06); no Kubernetes, o comando escreve no volume ou entrega o arquivo pela própria linha de comando (`kubectl exec … > arquivo`), e a cópia agendada é um CronJob do chart. A restauração, numa máquina ou num cluster novo: `instalar`, depois `copia restaurar <arquivo>` com a chave da cópia, que devolve a instância, os administradores, as organizações e a configuração; cada organização aparece no console como "aguardando o código de recuperação", e o owner da organização o digita no console (decisões 87 e 116); o chaveiro pede os atestados novos pela ligação. **Ideia do dono, sem versão marcada (dúvida 6):** uma oferta premium com um dispositivo físico de guarda das chaves, como as carteiras frias de criptomoedas, no lugar de a TI guardar a chave em papel ou num cofre de senhas; fica registrada para o PO e o arquiteto avaliarem.
- **Por que esta.** Copiar arquivos é a forma mais simples e mais testável de cópia. Tirar da cópia a chave de dados cifrada pela chave da instância é o que faz "só volta com o código de recuperação" valer por construção; a chave da cópia faz a parte da instância ilegível para quem guarda o arquivo (P-06).
- **As alternativas consideradas.** **Deixar a cópia a cargo da TI, com uma ferramenta dela**: perde-se a cifra por organização e a retirada das chaves; a TI pode usar as ferramentas dela por cima do arquivo. **Cópia contínua (replicação do SQLite)**: perde-se por complexidade que a primeira versão não pede.
- **Quem decide.** Decidida pelo arquiteto; a chave da cópia é do dono (dúvida 6).
- **Pontos do arquiteto.** Fecha **A-22** (acima, com C-11).

#### C-24. O carteiro dos avisos

- **A tecnologia.** Uma tabela de avisos por organização e da instância, para o console e o painel de alertas, e uma **caixa de saída** de e-mails no arquivo da instância. O envio é por **SMTP** com a biblioteca **MailKit** (MIT), com a conexão cifrada e usuário e senha guardados como segredo da instância. Um serviço de fundo lê a caixa de saída, tenta enviar, repete com espera crescente quando o servidor não responde, e marca a falha no painel (decisão 125); um e-mail de link cujo link já venceu não é mais enviado e vira falha visível. O envio de teste da configuração manda um e-mail com um código que quem configura digita; o teste é feito dentro do setup (C-21), porque é no fim do setup que o carteiro manda o link de primeiro acesso ao primeiro owner, com o e-mail vindo do Gerenciador (decisões 51, 99 e 125). O conteúdo é fixo por tipo de aviso: o tipo, a organização e o link, sem dado (decisão 64). Na hospedagem da Maind, o mesmo SMTP aponta para o fornecedor escolhido na implantação (M-05, dúvida 4).
- **Por que esta.** SMTP é o que todo servidor de e-mail fala, e MailKit é a biblioteca que a própria Microsoft indica. A caixa de saída responde às três perguntas da seção 9 de `componentes.md`.
- **As alternativas consideradas.** **O cliente SMTP embutido na plataforma**: a Microsoft o marca como não recomendado. **A API HTTP de um serviço de e-mail**: prende a um fornecedor, contra a regra da dúvida 1.
- **Quem decide.** Decidida pelo arquiteto; o fornecedor da hospedagem é do dono (dúvida 4).
- **Pontos do arquiteto.** Fecha os três pontos a mais do carteiro.

### 3.8 A segunda versão

#### C-25. A ponte dos servidores MCP

- **A tecnologia.** O **SDK oficial do MCP para C#** (ModelContextProtocol, MIT) como cliente, pelo transporte HTTP do protocolo; a lista de ferramentas de cada servidor é lida, guardada no livro de regras e mostrada ao owner da organização, que libera uma a uma; a ponte só apresenta ao modelo as liberadas e só executa chamada a uma liberada; cada chamada vai ao escrivão com o nome da ferramenta e o tempo gasto.
- **Por que esta.** O MCP é o protocolo que os provedores de IA e as ferramentas de empresa adotaram; o SDK oficial dispensa escrever o protocolo.
- **As alternativas consideradas.** **Um cliente HTTP fino da Maind**: perde-se a aderência a um protocolo que ainda muda. **O transporte por processo local (stdio)**: exigiria rodar o servidor MCP da empresa dentro da caixa do mAIg.
- **Quem decide.** Decidida pelo arquiteto, na segunda versão.
- **Pontos do arquiteto.** **A-34** fecha no desenho acima. **A-36** tem a saída técnica da decisão 91 (o servidor MCP liberado para o endereço fixo da Maind); se é aceitável é decisão com o dono. **A-37** se mede com os conectores.

#### C-26. A ligação com o provedor de identidade da empresa

- **A tecnologia.** O mesmo tratador de **OpenID Connect** do ASP.NET Core usado para o Google (C-02), configurado por organização; o papel da pessoa em cada app vem de uma reivindicação do provedor, mapeada por app (decisão 40); a reconfirmação a cada 8 horas usa a renovação silenciosa ou o token de renovação do próprio OpenID Connect. O SAML não é aceito.
- **Por que esta.** OpenID Connect é o padrão de todos os provedores de identidade de empresa, e o tratador é o mesmo do Google.
- **As alternativas consideradas.** **SAML**: mais pesado e já excluído em P-09. **LDAP direto**: a senha passaria pelo mAIg, o que a decisão 32 evita.
- **Quem decide.** Decidida pelo arquiteto, na segunda versão.
- **Pontos do arquiteto.** **A-39**: sim, o OpenID Connect permite reconfirmar a sessão no intervalo que o mAIg quiser; se o owner ajusta o intervalo é do dono. Toca A-38.

### 3.9 Os periféricos da casa do cliente

Periférico é da empresa cliente; aqui se diz com que tecnologia o mAIg fala com ele e o que exige dele.

#### P-01. A máquina, ou o cluster, onde o mAIg roda

- **A tecnologia que o mAIg exige.** Um de dois ambientes: um Linux de 64 bits (x86-64 na primeira versão) com o Docker Engine e o plugin Compose, em servidor, máquina virtual ou VPS, com acesso ao shell para quem opera e um disco para o volume de dados e a pasta de chaves; ou um cluster Kubernetes, gerenciado ou não, com um namespace para o mAIg, armazenamento persistente, uma camada de rede que aplique política de rede e acesso ao `kubectl` para quem opera. Os mínimos são números do próximo passo. Na hospedagem da Maind, a mesma escolha, num dos dois formatos (dúvida nova 3), em máquinas separadas da nuvem dos apps (decisão 48).
- **Por que esta.** É a dúvida 1 em forma de requisito.
- **Quem decide.** O requisito é do arquiteto; a máquina ou o cluster é da TI do cliente.
- **Pontos do arquiteto.** A-10 fechado (seção 2.3).

#### P-02. Os bancos da empresa

- **A tecnologia que o mAIg fala.** SQL pelos conectores nativos de .NET de cada família (C-06): SQL Server, PostgreSQL, MySQL e MariaDB, Oracle; a lista final é o levantamento de A-15. A conversa com o banco é cifrada sempre que a família permite, e obrigatoriamente na hospedagem da Maind (decisão 91). O mAIg exige um usuário que só lê, conferido pelo catálogo de permissões (decisão 61).
- **Quem decide.** O padrão é do arquiteto; o banco é da empresa.
- **Pontos do arquiteto.** A-14, A-15 e A-16 (C-06).

#### P-03. O servidor de e-mail da empresa

- **A tecnologia que o mAIg fala.** SMTP com a conexão cifrada e autenticação por usuário e senha (C-24), a partir do mAIg, com um endereço de remetente da empresa; a reputação do envio é da empresa. É configurado e testado dentro do setup, antes de o link do primeiro owner sair (decisão 125).
- **Quem decide.** O padrão é do arquiteto; o servidor é da empresa.
- **Pontos do arquiteto.** Os três pontos do carteiro (C-24).

#### P-04. Os provedores de IA

- **A tecnologia que o mAIg fala.** A API HTTPS de cada um dos cinco, pelos conectores da seção 4.4, na ordem OpenRouter e Anthropic primeiro, depois OpenAI, Google e Amazon Bedrock. A TI libera a saída para o nome de internet de cada provedor que a organização escolher (decisão 90). A chave é da empresa (decisão 22) e fica no cofre (C-10).
- **Quem decide.** A ordem e os cinco são do dono da Maind; a forma de falar com cada um é do arquiteto.
- **Pontos do arquiteto.** A-17, A-18 e A-19 (C-07).

#### P-05. O Google, provedor de login

- **A tecnologia que o mAIg fala.** OpenID Connect, pelo tratador do ASP.NET Core (C-02). A empresa cadastra no console do Google Cloud dela um cliente OAuth com o endereço de retorno do mAIg, e o owner da organização informa ao mAIg o identificador e o segredo, que vai ao cofre. Uma exigência que vem do Google e pesa na decisão 120: o Google só aceita endereço de retorno sob um domínio público (como `maig.empresa.com.br`), mesmo que ele só resolva dentro da rede; um nome como `maig.local` não é aceito. A sessão no mAIg é do próprio mAIg: o Google só confirma quem é a pessoa na entrada.
- **Quem decide.** O padrão é do arquiteto; o cadastro no Google é da empresa.
- **Pontos do arquiteto.** Fecha os dois pontos do Google da seção 9 de `componentes.md`. O nome sob domínio público está nos riscos da seção 6.

#### P-06. O lugar da cópia de segurança

- **A tecnologia que o mAIg exige.** Nenhuma em particular: o arquivo da cópia é único, autossuficiente e cifrado (C-23); a TI o guarda onde quiser, fora da máquina ou do cluster. A chave da cópia (dúvida 6) fica em outro lugar, com quem opera.
- **Quem decide.** A TI do cliente; na hospedagem da Maind, a Maind (decisão 65).

#### P-07. A rede, o firewall e a VPN

- **A tecnologia que o mAIg exige.** Saídas, nunca entradas: HTTPS na porta 443 para o **único nome de internet da Maind, com IP fixo** (dúvida 3), por HTTP/2 ou, quando o intermediário da empresa não o deixa passar, por WebSocket, com a troca feita pelo próprio mAIg (dúvida 8); HTTPS para o nome de cada provedor de IA escolhido e para o Google, se usado; a porta SMTP do servidor de e-mail da empresa; e, na segunda versão, HTTPS para o provedor de identidade. Um nome interno para o mAIg, sob um domínio público da empresa (P-05), com o certificado que a TI escolhe (decisão 120); a interface de setup (C-21) é alcançada nesse mesmo endereço, só de dentro da rede, antes de o console existir. No Kubernetes, uma camada de rede que aplique política de rede (C-16). A VPN da empresa é o caminho de quem está fora.
- **Quem decide.** O requisito é do arquiteto; a rede é da empresa.
- **Pontos do arquiteto.** A-28 (M-01); o certificado do endereço: pelo arquivo na pasta de chaves ou pelo Secret, com recarga automática (C-01, C-11).

#### P-08. O navegador das pessoas

- **A tecnologia que o mAIg exige.** Os navegadores de atualização contínua (Chrome, Edge, Firefox, Safari) nas versões em suporte; a lista exata é um número do próximo passo. Cookies de sessão para o endereço do mAIg e, na tela do app, a permissão de acesso a rede privada quando o navegador a pedir (A-03, C-01).
- **Quem decide.** O arquiteto define a lista; a empresa escolhe o navegador.
- **Pontos do arquiteto.** A-03 (C-01) e o ponto "quais navegadores" da seção 9 de `componentes.md`.

#### P-09. O provedor de identidade da empresa (segunda versão)

- **A tecnologia que o mAIg fala.** OpenID Connect com descoberta automática, código de autorização com PKCE e um cliente registrado pela TI; o papel numa reivindicação mapeada por app; a reconfirmação a cada 8 horas (C-26). SAML não é aceito.
- **Quem decide.** O padrão é do arquiteto; o provedor é da empresa.
- **Pontos do arquiteto.** A-39 (C-26).

#### P-10. Os servidores MCP da empresa (segunda versão)

- **A tecnologia que o mAIg fala.** O protocolo MCP pelo transporte HTTP, com a autenticação que o servidor exigir, guardada no cofre (C-25); a marca "só leitura" vem do próprio servidor, e a garantia de que ela só lê é da empresa.
- **Quem decide.** O padrão é do arquiteto; o servidor é da empresa.
- **Pontos do arquiteto.** A-34, A-36 e A-37 (C-25).

### 3.10 Os componentes do lado da Maind

Ficam num ambiente próprio da Maind, separado da nuvem dos apps e das instâncias hospedadas (decisão 4 de 12/11): a mesma nuvem pública da produção real do primeiro app, numa conta separada (dúvida 1), e com tudo pronto para rodar também em máquina virtual, VPS ou Kubernetes, pela regra dos encaixes (seção 2.7). A linguagem é a mesma do mAIg, C# sobre .NET; o banco é **PostgreSQL** (licença PostgreSQL), porque aqui há vários servidores escrevendo ao mesmo tempo; as chaves ficam no **OpenBao** (dúvida 2); as telas usam o HUD Vue.

#### M-01. O ponto de conexão

- **A tecnologia.** Um servidor em ASP.NET Core (Kestrel), em **dois ou mais nós** (decisão 33), que atende **os dois transportes** no mesmo nome e na mesma porta 443: o gRPC sobre HTTP/2 e o WebSocket, com as mesmas mensagens (dúvida 8). Fica atrás de um balanceador em **modo de repasse TCP** (o balanceador da nuvem ou do cluster, ou o Nginx em modo de repasse, pelo encaixe da seção 2.7), que entrega a conexão cifrada inteira ao nó, para que o certificado da ligação de cada instância chegue ao nó e a identidade seja conferida ali (TLS mútuo), igual nos dois transportes. Cada nó guarda as linhas das instâncias que caíram nele e anota num **diretório** em PostgreSQL "a instância X tem linhas nos nós A e B"; a nuvem dos apps (M-06) chama qualquer nó por uma API gRPC própria, autenticada pelo certificado de identidade da nuvem, e o nó que recebeu encaminha ao nó que tem a linha. Os pedidos à espera ficam em memória por 15 minutos (decisão 69). O nó vê a queda de uma ligação e dispara o aviso à equipe da Maind (decisão 71). Do que passa, guarda só o tamanho, a hora e o número (decisão 36). Serve também, no mesmo nome e porta, os caminhos do registro de imagens (M-04) e o manifesto de versão (A-28, dúvida 3).
- **Por que esta.** O gRPC em .NET é o mesmo da ponta de dentro; o WebSocket com as mesmas mensagens é a mesma conversa noutro embrulho, e o Kestrel atende os dois numa porta só. O repasse TCP preserva o certificado do cliente até o nó. O diretório em PostgreSQL com encaminhamento entre nós dispensa um barramento no caminho.
- **As alternativas consideradas.** **Um barramento de mensagens (NATS) entre os nós e a nuvem**: perde-se uma peça a mais no caminho. **Um serviço gerenciado de conexões persistentes da nuvem**: esbarra na decisão 38 e na regra da dúvida 1.
- **Quem decide.** Decidida pelo arquiteto; onde roda, o nome, o IP fixo e os dois transportes são do dono (dúvidas 1, 3 e 8); o compromisso de disponibilidade é do dono da Maind.
- **Pontos do arquiteto.** Fecha **A-28**: um nome, um IP fixo, a porta 443, para a ligação, o registro de imagens e o manifesto; a mudança é anunciada pelo manifesto de versão e aparece no painel com antecedência. Fecha **A-29**: dois ou mais nós, as linhas de cada instância em nós diferentes, o balanceador em repasse, os pedidos à espera por 15 minutos, e o WebSocket como caminho para o intermediário que quebra o HTTP/2.

#### M-02. A emissão de certificados: o cartório da Maind

- **A tecnologia.** Um serviço em ASP.NET Core que aplica as regras do mAIg (só instância autenticada pelo ponto de conexão; os perfis de validade; o cancelamento com duas pessoas) e assina pelo **OpenBao** (dúvida 2): a autoridade certificadora **emissora** vive no motor de certificados do OpenBao, que assina os CSR e mantém a lista de cancelados, e a chave dela nunca sai do cofre; a **raiz** é criada numa cerimônia, guardada fora de linha e usada só com duas pessoas, para assinar a emissora. Os perfis: o certificado da organização, 30 dias; o de identidade do módulo de cada app, 7 dias; o da ligação de cada instância, mais longo, renovado pela própria ligação; o de identidade da parte de fora de cada app (M-06); e os certificados internos entre o núcleo e os módulos no Kubernetes são emitidos pelo próprio chaveiro da instância, sem passar por aqui. Publica, para a nuvem dos apps, as chaves públicas dos certificados das organizações em vigor e do anterior, no formato de conjunto de chaves JSON (JWKS). O cancelamento antes do prazo (decisão 44) é um fluxo com duas aprovações na tela interna do Gerenciador (M-07), executado aqui, e a lista de cancelados desce às instâncias pela ligação. Nunca recebe chave privada (decisão 86). Os registros ficam em PostgreSQL.
- **Por que esta.** O motor de certificados do OpenBao é maduro, herdado do Vault, e faz exatamente a parte difícil de uma autoridade certificadora, guardar a chave e assinar; o que é do mAIg, as regras, fica no serviço .NET. Os perfis curtos fazem a revogação quase não precisar existir.
- **As alternativas consideradas.** **A autoridade certificadora toda em .NET, com a chave no OpenBao só para assinar**: ganha-se controle total dos perfis; perde-se por refazer o que o motor do OpenBao já faz; fica como reserva se o motor não cobrir um perfil. **Uma autoridade certificadora privada gerenciada da nuvem**: esbarra na regra da dúvida 1 e cobra por certificado.
- **Quem decide.** Decidida pelo arquiteto; o OpenBao e a raiz com duas pessoas são do dono (dúvida 2).
- **Pontos do arquiteto.** Toca **A-08** (fechado em C-11 e C-14).

#### M-03. O servidor das contratações e o handshake

- **A tecnologia.** Um serviço em ASP.NET Core com PostgreSQL, **sem tela própria**: as telas e os cadastros ficam no Gerenciador (M-07), que é a origem das organizações, das contratações e dos documentos assinados. O M-03 é a face voltada às instâncias, pela ligação, via M-01: recebe a **chave temporária** que a interface de setup apresenta na primeira conexão, confere-a no que o Gerenciador gerou (pelo hash; de vida curta e uso único) e a marca como usada; entrega o **arquivo assinado da organização** e o **manifesto assinado do que a organização pode ter**, com o kit de cada app; pede ao cartório (M-02) os certificados da ligação, da organização e do módulo de cada app, a partir dos CSR que chegam; emite e assina a **licença** (JWS), pela chave de licenças guardada no OpenBao, distinta da do cartório, e a renovada; atualiza o manifesto pela ligação quando o Gerenciador autoriza um app novo; executa a ação manual e o pedido de encerramento que a equipe aprovou no Gerenciador; e devolve ao Gerenciador a situação de cada instância e app (a versão, o estado da licença, a chave usada e quando, o mínimo de operação da decisão 123). É a metade "o que pode ser instalado" da instalação no estilo de um gerenciador de pacotes; a metade "os pacotes" é o registro de imagens (M-04).
- **Por que esta.** Separar a face das pessoas (M-07) da face das máquinas (M-03) deixa o handshake pequeno, auditável e sem tela, e põe num lugar só, o Gerenciador, tudo o que a equipe da Maind faz. A chave temporária conferida por hash e marcada como usada é o que impede o mesmo PDF de instalar duas instâncias. A chave da licença separada da do cartório limita o dano de um vazamento.
- **As alternativas consideradas.** **Tudo numa peça só, com as telas**: era a ficha anterior; a dúvida 9 trouxe o Gerenciador e separou as faces. **Dentro da nuvem dos apps**: esbarra na decisão 4 de 12/11.
- **Quem decide.** Decidida pelo arquiteto; o fluxo é do dono (dúvida 9, revista).
- **Pontos do arquiteto.** **A-09** fechado (C-14): o kit chega por aqui, no manifesto, pela ligação. Toca A-08 e A-25.

#### M-04. O canal de atualização e a assinatura das versões

- **A tecnologia.** Um **registro de imagens OCI**, o CNCF Distribution (Apache 2.0), servido atrás do mesmo nome, IP fixo e porta do ponto de conexão (dúvida 3), com o armazenamento no serviço de objetos da nuvem quando há, ou no disco (encaixe da seção 2.7). As imagens do núcleo, do zelador e dos módulos, e o chart Helm, são assinados com o **Cosign**, com a chave de assinatura no OpenBao, pelo encaixe que o Cosign tem para cofres compatíveis com o Vault; as assinaturas ficam no próprio registro. Cada versão tem o **manifesto de versão**, um JWS com a lista das imagens e as impressões digitais, o chart, o que mudou, a marca de correção de segurança e a faixa de versões do contrato núcleo-módulo; o manifesto desce pela ligação. É a metade "os pacotes" da instalação no estilo de um gerenciador de pacotes: a imagem do mAIg, com a interface de setup, e o chart são públicos no registro, assinados, e é deles que a TI parte, pelo endereço que o PDF indica, o mesmo nome único da Maind; as imagens dos módulos saem só com o bilhete curto de download que o núcleo pede pela ligação, para os apps que o manifesto do que a organização pode ter (M-03) autoriza. A esteira de integração contínua da Maind constrói as imagens de modo reprodutível, assina, publica no registro e publica o manifesto. As imagens anteriores ficam no registro, para a volta (A-21).
- **Por que esta.** O registro OCI é o jeito padrão de distribuir contêineres para Docker e Kubernetes, e o Cosign é a assinatura padrão deles. Atrás do mesmo nome, a TI libera um endereço só.
- **As alternativas consideradas.** **O registro gerenciado da nuvem com nome próprio**: foi a opção C da dúvida 3, não escolhida. **Pacotes assinados fora do padrão OCI**: perde-se a ferramenta padrão.
- **Quem decide.** Decidida pelo arquiteto; o registro próprio atrás do nome único é do dono (dúvida 3).
- **Pontos do arquiteto.** Toca **A-10** e **A-21**.

#### M-05. O serviço de e-mail da hospedagem da Maind

- **A tecnologia.** Um serviço de e-mail transacional, alcançado por SMTP pelo mesmo carteiro (C-24), com o domínio de envio da Maind configurado com SPF, DKIM e DMARC. **O fornecedor é escolhido na implantação** (dúvida 4): o da nuvem quando há, ou outro, sem mudar nada no mAIg, porque a conversa é SMTP. Por ele sai também o **PDF com senha** que o Gerenciador (M-07) manda ao e-mail oficial da organização, do domínio da Maind, com o envio anotado no Gerenciador; a senha do PDF nunca sai por e-mail: a equipe da Maind a passa ao responsável por telefone ou mensagem.
- **Quem decide.** Dono (dúvida 4).
- **Pontos do arquiteto.** Os mesmos de C-24.

#### M-06. A nuvem dos apps: o que a parte de fora precisa falar

- **A tecnologia que o mAIg exige.** A parte de fora de cada app não é construída pelo mAIg; ela precisa de quatro coisas: um cliente gRPC para a API do ponto de conexão (M-01), autenticado pelo certificado de identidade que o cartório (M-02) emite para ela; a conferência do passe JWT com a chave pública da organização lida do conjunto de chaves que o cartório publica; a troca do código de uso único pelo passe, via M-01; e as regras das decisões 35 e 36 na própria nuvem. **A organização chega à nuvem a partir do Gerenciador (M-07)**, que é a origem (leitura (b) da dúvida 9, confirmada pelo dono): o Gerenciador informa à nuvem de cada app a organização e os apps contratados, e o passe assinado pelo mAIg continua provando a pessoa e a organização a cada pedido. No Horus, isso é .NET e Vue.
- **Quem decide.** A tecnologia da parte de fora é do time de cada app; o que ela precisa falar é do arquiteto do mAIg; a origem da organização é do dono (dúvida 9).
- **Pontos do arquiteto.** **A-25** fechado: a organização nasce no Gerenciador e chega daí à nuvem de cada app (leitura (b), confirmada).

#### M-07. O Gerenciador do mAIg: o cockpit interno da Maind

- **A tecnologia.** Um serviço em ASP.NET Core com PostgreSQL e telas em Vue 3 com o HUD Vue, **só para a equipe da Maind**: na primeira versão não há portal do cliente nem página pública (dúvida 5, superada; dúvida 9, revista pelo fluxo do setup). Reúne as organizações, as contratações, a cobrança e as assinaturas. O que ele faz e o que gera: cria a organização, com o e-mail oficial dela, o e-mail do **primeiro owner** e os apps contratados (app, fim do contrato, carência); gera as **chaves temporárias** de duração curta e uso único, uma por organização e por instância a instalar, guardadas só pelo hash e mostradas uma vez, que fazem o papel do código de ativação (confirmado pelo dono em 12/11/2026); gera o **PDF protegido por senha**, com as instruções da primeira etapa, uma por formato, e a chave temporária, pela biblioteca **PDFsharp** (MIT), com a proteção por senha padrão do formato PDF, e o manda ao e-mail oficial da organização pelo serviço de e-mail da Maind (M-05), anotando o envio; a **senha do PDF** é gerada ali, mostrada à equipe e nunca enviada pelo sistema: a equipe a passa ao responsável pela contratação por telefone ou mensagem; assina o **arquivo da organização** e o **manifesto do que a organização pode ter**, que o servidor das contratações (M-03) entrega pela ligação; registra a **autorização de cada app** (uma contratação nova vira uma entrada nova no manifesto, que desce às instâncias); aprova com duas pessoas a ação manual (decisão 94), o cancelamento de certificado (decisão 44) e o pedido de encerramento (decisão 78); acompanha a situação de cada instância e app com o que M-03 devolve, inclusive a chave usada e quando; mantém a **tabela de preços** da IA (dúvida 7); e tem o lugar da **cobrança**, cujo escopo é do PO e do dono. Assina com chaves próprias no OpenBao, distintas das do cartório e das licenças. **Informa à nuvem de cada app** a organização e os apps contratados: é a origem (leitura (b), confirmada). Não é um app do mAIg: não tem módulo nem passa pela ligação.
- **Por que esta.** É a tecnologia da casa, e a peça é um sistema de cadastro com assinatura e geração de PDF, sem nada novo de infraestrutura. Tirar o portal tira uma superfície exposta na internet e um cadastro de senhas de clientes; o que o cliente recebe cabe num PDF e numa chave, e o resto o mAIg busca sozinho.
- **As alternativas consideradas.** **O portal do cliente com login**: era a dúvida 5, superada pelo dono para simplificar. **Gerar o PDF com uma biblioteca de licença dupla (QuestPDF) ou AGPL (iText)**: perde-se por licença; o PDFsharp é MIT e cobre texto, instruções e senha.
- **Quem decide.** A existência, o escopo sem portal e o fluxo são do dono (dúvidas 5 e 9); a tecnologia é do arquiteto.
- **Pontos do arquiteto.** Fecha **A-25** com M-06 (leitura (b), confirmada). Toca A-09 (C-14, M-03).
## 4. Os contratos entre as partes

Um contrato aqui é um documento escrito, versionado e guardado no repositório do mAIg, que diz como duas peças conversam: as mensagens, os campos, os erros e a versão. Quatro contratos sustentam o mAIg. Aqui vão o nome, a tecnologia e a responsabilidade de cada um, sem o esquema campo a campo, que é o próximo passo do arquiteto.

### 4.1 O Protocolo da Ligação: entre a ligação (C-18) e o ponto de conexão (M-01)

- **Nome.** Protocolo da Ligação mAIg, numa versão por manifesto de versão.
- **Tecnologia.** As mensagens são protobuf, as mesmas em dois transportes: gRPC sobre HTTP/2 com TLS mútuo, o principal; e WebSocket com TLS mútuo, a reserva, para onde o mAIg passa sozinho quando o HTTP/2 não passa (dúvida 8). Quem lê o contrato não vê o transporte: ele é uma camada por baixo.
- **O que carrega.** Uma conversa de controle por linha, aberta pelo mAIg, com: a identificação da instância (do certificado), o sinal de vida, o mínimo de operação (decisão 123), o aviso de que um pedido chegou, a luz de estado para a nuvem, o manifesto de versão e os avisos de mudança de endereço. E canais próprios, abertos pelo mAIg na mesma conexão (chamadas gRPC no HTTP/2; canais numerados no WebSocket), para os corpos: o corpo de um pedido que desce, em pedaços; o corpo de uma resposta que sobe, em pedaços; a troca do código pelo passe; o "rode a tarefa"; a chave temporária do setup, o arquivo da organização e o manifesto do que a organização pode ter, o handshake de cada app, a licença, a ação manual e o pedido de encerramento (encaminhados a M-03); o CSR, o atestado, a renovação e a lista de cancelados (encaminhados a M-02); o bilhete de download e a tabela de preços (M-04, M-07). A primeira conexão do setup é a exceção ao TLS mútuo: a instância ainda não tem certificado, se apresenta pela chave temporária e só confere o endereço da Maind; nessa conversa pede o certificado da ligação, e daí em diante a ligação é mútua.
- **Responsabilidade.** A ligação **carrega e identifica**: garante quem está em cada ponta, numera, multiplexa, guarda 15 minutos, religa e troca de transporte. Ela **não decide nada**: não lê passe, não confere permissão, não conhece organização além do número que vai na mensagem; quem decide é a portaria (C-04). Do lado da Maind, o ponto de conexão só encaminha.

### 4.2 O Contrato de Módulo: entre o núcleo e o módulo de cada app, isolado

- **Nome.** Contrato de Módulo mAIg, com a versão declarada pelos dois lados ao iniciar a conversa (A-13).
- **Tecnologia.** gRPC, com mensagens protobuf, neutro de linguagem. O transporte muda por formato e é invisível ao contrato: socket Unix no Docker; rede do cluster com TLS mútuo e política de rede no Kubernetes (C-04, C-16).
- **Os dois serviços.** O serviço **Módulo**, que o módulo implementa e o núcleo chama: descrever-se (a versão do contrato, o contrato de app), atender um pedido (com o contexto de pedido, a organização, a pessoa com o papel dela e o conteúdo; a resposta volta estruturada) e dizer a saúde. O serviço **Núcleo**, que o núcleo implementa e o módulo chama, sempre com o contexto de pedido: ler um banco (uma consulta SQL de leitura; o resultado vem como tabela tipada, com a origem de cada coluna); pedir à IA (o modelo, as partes tipadas com a camada de cada uma, os parâmetros que o app declara e a marca de parte estável para o cache do provedor; a resposta vem em fluxo, com a contagem e o custo no fim); conferir uma permissão; listar o que o app pode usar nesta organização; guardar e ler o resultado de um painel (C-17); e, na onda 1.1, anotar uma linha informada pelo app (decisão 104).
- **A resposta estruturada.** O módulo devolve texto para a pessoa ler e, separadas, as tabelas de dados com colunas tipadas e a origem de cada coluna; nunca dado dentro do texto. É o que deixa o fiscal (C-08) contar e mascarar.
- **Responsabilidade.** O módulo **calcula**; o núcleo **fornece e confere**, sempre pelo contexto do pedido. O módulo nunca recebe senha, chave nem a lista das outras organizações. O que o módulo escreve no log técnico da caixa dele é responsabilidade do app, e o contrato de app o obriga a seguir a regra da decisão 123.

### 4.3 O passe, os certificados e os documentos assinados

- **O passe.** JWT assinado com ES256 pela chave do certificado da organização, 15 minutos, um app por passe (C-03). O passe de agendamento não circula: é uma linha no mAIg.
- **Os certificados.** Todos X.509, nascidos de um CSR com a chave gerada onde o certificado vai viver (decisão 86), emitidos pelo cartório da Maind (M-02) a partir do OpenBao, menos o do endereço, que é da TI do cliente, e os internos entre o núcleo e os módulos no Kubernetes, que o chaveiro da instância emite. Os perfis: o da organização, 30 dias; o de identidade do módulo de cada app, 7 dias; o da ligação de cada instância; o de identidade da parte de fora de cada app; o do endereço do mAIg, da TI. A hierarquia da Maind: uma raiz fora de linha, usada com duas pessoas, e uma emissora em linha no OpenBao. A revogação é pela validade curta e por uma lista de cancelados que desce pela ligação.
- **Os documentos assinados.** Cinco JWS, e **todos chegam pela ligação**, nunca por e-mail ou download: o **arquivo da organização** e o **manifesto do que a organização pode ter**, com o kit de cada app, assinados pelo Gerenciador (M-07); a **licença**, assinada pelo servidor das contratações (M-03); o **manifesto de versão** e a **tabela de preços da IA**, assinados pelo canal de atualização (M-04) e pelo Gerenciador. Cada um com a própria chave no OpenBao, distintas da do cartório. A chave pública da Maind que os confere vem na imagem do mAIg e gira pelo manifesto de versão.
- **A chave temporária.** Não é documento assinado: é um segredo aleatório, de vida curta e uso único, gerado pelo Gerenciador, guardado só pelo hash, que viaja no PDF com senha e que a interface de setup apresenta uma vez, na primeira conexão, para a instância receber o certificado da ligação e o arquivo da organização. Faz o papel do código de ativação (confirmado pelo dono em 12/11/2026).
- **As imagens e o chart.** Assinados com o Cosign, com a chave no OpenBao; a chave pública vem no zelador e no núcleo.
- **Responsabilidade.** O cartório **atesta** e nunca guarda chave privada; o OpenBao **guarda** as chaves da Maind e só devolve assinaturas; o chaveiro **guarda** as privadas da instância e nunca as entrega; o emissor de passes **assina** e a nuvem **confere**; o zelador e o núcleo **recusam** o que não vier assinado.

### 4.4 Os cinco conectores de IA

**A ordem de construção**, definida pelo dono da Maind em 12/11/2026: **primeiro o OpenRouter e a API da Anthropic**; depois, nesta ordem proposta pelo arquiteto, a OpenAI, o Google e o Amazon Bedrock. Os cinco estão na primeira versão (decisão 5 de 12/11); a ordem é a de construir e provar.

**O contrato comum**, a interface interna "conector de IA", que todo conector implementa, para o intermediário (C-07) não saber de nenhum provedor em particular:

- **Listar os modelos** que a chave da organização alcança no provedor, para cruzar com o contrato de app (A-20).
- **Testar a chave sem gastar**: cada provedor tem uma chamada que confere a chave sem consumir modelo (no OpenRouter, a consulta da própria chave; nos outros, a lista de modelos). É o "testar" do cadastro no console e a origem do aviso "chave recusada" (decisão 71).
- **Pedir ao modelo**: recebe as partes tipadas já conferidas pela camada, o modelo, os parâmetros declarados pelo app e a marca de parte estável, monta o pedido na linguagem do provedor, lê a resposta em fluxo e devolve o texto, o motivo de parada (concluiu, cortou pelo teto, recusou, filtrou) e a contagem.
- **Contar**: devolve a contagem de tokens de entrada, de saída e de cache e, quando o provedor informa, o custo em dinheiro; o intermediário aplica a tabela da Maind quando o custo não vem e marca o número como "estimado", com a data da tabela (dúvida 7).
- **Buscar na web pelo provedor** (decisão 63): liga a ferramenta de busca do próprio provedor, quando ele tem, e informa quando não tem.
- **Falhar com clareza**: traduz cada falha do provedor numa categoria fixa (chave recusada, sem crédito, limite do provedor, provedor fora, recusa do modelo, filtro de conteúdo, modelo desconhecido) e numa mensagem sem nenhum trecho do corpo de erro do provedor, porque esse corpo pode ecoar o pedido ou a chave.

**O que vem do primeiro app.** O Horus 1.x tem, em C#, um provedor do OpenRouter e um do Amazon Bedrock, lidos só para este documento. O que se reaproveita e o que se reescreve vale como regra para todos os conectores:

- **Reaproveita-se, copiando e adaptando**, o que é conversa com o provedor: a leitura do fluxo de eventos (SSE) por uma função pura, sem rede; a montagem do corpo do pedido e a leitura de cada pedaço, com a tolerância a JSON malformado que nunca derruba a resposta; a leitura da contagem no fim do fluxo, inclusive do custo que o OpenRouter informa em notação científica, medida uma vez só; a detecção de falha **dentro** de um fluxo aceito (o objeto de erro, a recusa, o filtro de conteúdo, o motivo de parada nativo do provedor de origem), que sobe mesmo com texto já entregue, para que um parcial não passe por resposta inteira; a sanitização da mensagem do provedor para o log, com a chave mascarada e o teto de tamanho, e a regra de nunca ler o corpo de uma resposta de erro; a tradução dos códigos HTTP em categorias; o teste da chave pela consulta da própria chave, sem gastar token; o catálogo público de modelos com os preços, guardado por uma hora; a divisão do system em parte estável e volátil para o cache do provedor; o sufixo de busca web do OpenRouter; e, no Bedrock, a fábrica de cliente do SDK da AWS, a leitura do fluxo de eventos e a tradução de erros que apaga identificadores da conta.
- **Reescreve-se** o que é regra do produto, porque no mAIg as regras são outras: a interface do provedor (no Horus, um fluxo de texto puro com a chave passada por quem chama; no mAIg, as partes tipadas, a resposta estruturada e a contagem devolvida como valor, para o núcleo conferir a camada e o custo a cada pedido); **a chave**, que no Horus vem do Data Protection e é passada ao provedor por quem chama, e no mAIg sai do cofre (C-10) dentro do intermediário, na hora da chamada, e nenhum módulo a vê; **o registro do consumo**, que no Horus enfileira sem bloquear e aceita perder linha, e no mAIg é gravado na mesma transação da linha do registro, porque o limite de gasto depende dele e a decisão 96 diz "sem anotar, não atende"; **os campos que são do Horus**: as quinze funções, o fornecedor preferido do modelo e a lista de retenção zero do OpenRouter, que são escolhas de produto do Horus e não estão em nenhuma decisão do mAIg (se o dono as quiser no mAIg, é decisão nova), e os metadados de rastreio que o Horus manda ao painel do OpenRouter com o identificador da organização, da pessoa e da conversa, que o mAIg **não manda**: ao provedor vai só o que a camada permite, e nenhum identificador de pessoa ou organização; **os textos** das mensagens, que apontam para telas do Horus e passam a apontar para o owner da organização e o console do mAIg; e o raciocínio e a temperatura, que no Horus a função decide e no mAIg o app declara no pedido.

**Os cinco, um a um:**

1. **OpenRouter** (primeiro). API HTTPS com JSON, no formato compatível com o da OpenAI, com fluxo por SSE. Cliente HTTP fino escrito pela Maind, herdado do Horus. Informa o custo em dinheiro em cada resposta, o que dá a precisão máxima na visão do consumo; publica a lista de modelos com preços sem exigir chave; testa a chave pela consulta da própria chave; busca web pelo sufixo do modelo. Serve centenas de modelos de vários fabricantes com uma chave só.
2. **Anthropic** (primeiro, com o OpenRouter). A API de mensagens do fabricante, HTTPS com JSON e fluxo por SSE, com a chave da empresa cliente. Pelo **SDK oficial da Anthropic para .NET** (MIT), ou por um cliente HTTP fino no molde do OpenRouter se, na hora de construir, o SDK não cobrir o que o mAIg precisa; a decisão é do arquiteto na construção. Devolve a contagem de tokens de entrada, de saída e de cache, nunca o custo em dinheiro: entra a tabela, com a marca "estimado". Informa o motivo de parada, inclusive a recusa, que vira a mesma categoria do OpenRouter. Tem a ferramenta de busca na web do próprio provedor, que o conector liga sob a decisão 63. Aceita a marca de parte estável para o cache de prompt. Testa a chave pela lista de modelos. Não há código do Horus para ele: é novo.
3. **OpenAI.** API HTTPS com JSON e fluxo por SSE, no formato que o OpenRouter imita: o montador de corpo do OpenRouter cobre a maior parte. Pela **biblioteca oficial da OpenAI para .NET** (MIT) ou pelo cliente fino. Devolve contagem, não custo: tabela. Tem ferramenta de busca web. Testa a chave pela lista de modelos.
4. **Google.** A API Gemini, HTTPS com JSON e fluxo por SSE, pelo SDK oficial do Google para .NET, se estável na hora, ou pelo cliente fino. Devolve a contagem, não o custo: tabela. Tem a busca do Google como ferramenta de fundamentação. Testa a chave pela lista de modelos.
5. **Amazon Bedrock.** Pelo **SDK da AWS para .NET** (Apache 2.0), que assina cada pedido com a credencial da conta da empresa. A "chave" é a credencial da AWS ou a chave de API do Bedrock, com a região, guardada como um segredo só no cofre. Devolve contagem, não custo: tabela. A busca web depende do modelo servido. Herda do Horus a fábrica de cliente, a leitura do fluxo e a tradução de erros; as tabelas de capacidades e de catálogo do Horus servem de semente para a tabela de preços e de capacidades da Maind.

**Quem decide.** A ordem e os cinco são do dono da Maind, e a precisão do custo também (dúvida 7). A forma de cada conector, SDK oficial ou cliente fino, é do arquiteto.

## 5. Como se testa sem chamar modelo pago

A regra: **nenhum teste automático do mAIg chama um provedor de IA de verdade**, e a prova com modelo de verdade, quando preciso, é uma chamada só, por conector, antes de uma versão sair, com a aprovação do dono da Maind e o custo dito antes. O que torna isso possível:

- **O conector é a única peça que fala com o provedor**, e por trás dele tudo é testável com dados fixos: a conferência da camada, o cálculo do custo pela tabela, o limite de gasto, a máscara, a cadeia de hash, os índices cegos, a máquina de estados, tudo é teste de unidade, com **xUnit** (Apache 2.0), **NSubstitute** (BSD) para os dublês e **Shouldly** (BSD) para as asserções; a biblioteca de asserções mais popular, FluentAssertions, passou a licença paga para uso comercial e fica fora.
- **Os conectores são testados com conversas gravadas**: respostas reais dos provedores, copiadas da documentação pública de cada um e dos testes do Horus 1.x, servidas por um tratador HTTP falso dentro do teste ou pelo **WireMock.Net** (Apache 2.0). Cada gravação é um arquivo no repositório, sem chave nem dado de cliente. Cobre o caminho feliz, o fluxo cortado, a recusa, o filtro, cada código de erro e o fluxo mudo.
- **O provedor de ensaio** é um sexto conector que só existe na construção de testes e no modo de ensaio de uma instância de desenvolvimento, nunca na imagem publicada: responde um texto determinístico, declara a contagem que lhe pedirem, simula recusa, demora, chave recusada, crédito acabado e provedor fora. É com ele que o fluxo inteiro, do módulo à linha do registro, roda nos testes de ponta a ponta.
- **Um servidor local compatível com a OpenAI** (Ollama, MIT, com um modelo pequeno e gratuito na máquina de quem desenvolve) faz o papel do OpenRouter e da OpenAI nos testes de integração, a custo zero. Não substitui a gravação da Anthropic, do Google e do Bedrock.
- **O Bedrock** se testa com as respostas gravadas no tratador do próprio SDK da AWS.
- **O módulo de ensaio** é um contêiner de teste que implementa o Contrato de Módulo e pede ao núcleo tudo o que um app pode pedir, inclusive o que não pode; é a prova das quatro garantias e do contexto de pedido, **nos dois formatos**. **Testcontainers para .NET** (MIT) sobe, nos testes, essa caixa e as caixas de PostgreSQL, MySQL, SQL Server e Oracle gratuitas, para provar o leitor dos bancos; e sobe um OpenBao em modo de desenvolvimento para provar o cartório e as assinaturas sem cofre de verdade.
- **O formato Kubernetes** se prova num cluster local descartável (**kind**, Apache 2.0, o Kubernetes dentro de contêineres, usado pelo próprio projeto Kubernetes para testes), na esteira de integração contínua: o chart instala, o núcleo sobe, o módulo de ensaio não consegue sair pela política de rede, o pod de prova do instalador detecta uma camada de rede que não aplica política, a troca de imagem depois do aval roda e a volta funciona.
- **A ligação** se testa com as duas pontas no mesmo processo de teste, pelo servidor em memória do Kestrel, nos dois transportes: a queda, a religação, a entrega do que ficou 15 minutos, o encaminhamento entre nós e a **troca automática para o WebSocket**, provocada por um proxy de teste que rebaixa ou corta o HTTP/2, e a volta ao HTTP/2 quando ele passa de novo.
- **O fluxo do setup** se prova de ponta a ponta com um Gerenciador e um servidor das contratações de ensaio no mesmo processo de teste e um registro de imagens local: a chave temporária gerada e conferida pelo hash, a primeira conexão sem certificado, o arquivo da organização, a instalação no estilo de um gerenciador de pacotes a partir do manifesto, os certificados nascendo na instância, o e-mail de teste e o link do primeiro owner, nos dois formatos; e a chave usada, vencida ou errada, recusada.
- **As telas** se testam com **Vitest** (MIT) na lógica Vue e com **Playwright para .NET** (Apache 2.0) de ponta a ponta, contra uma instância com o provedor de ensaio; a interface de setup e o Gerenciador (M-07), do mesmo jeito.
- **A carga** se mede com o **k6** (AGPL, usado como ferramenta, nunca distribuído com o mAIg) contra o ponto de conexão, nos dois transportes.
- **A prova única com modelo de verdade**, por conector, grava a conversa (sem chave e sem dado) e vira mais um arquivo de gravação.
## 6. O que fica em aberto

### Do arquiteto: os próximos passos

Nenhum destes segura este documento; todos vêm antes de a construção começar.

1. **Os números, num lote só para o dono da Maind.** As tentativas e o tempo do bloqueio (A-01); o tempo e as linhas de cada consulta (A-14); quantas linhas são "poucas" para um total (A-19, decisão 113); a validade padrão do cache dos painéis (A-32); a memória e o processador de cada módulo (A-30); a validade do bilhete de inscrição; os mínimos da máquina e do cluster (P-01); a lista de navegadores (P-08). São números que mudam o que uma pessoa sente, e por isso vão ao dono como proposta, mas não entram na lista de dúvidas.
2. **Os esquemas dos quatro contratos** (seção 4): os arquivos protobuf do Protocolo da Ligação, com a camada de transporte dupla e a primeira conexão do setup, e do Contrato de Módulo; o JSON do contrato de app, do arquivo da organização, do manifesto do que a organização pode ter com o kit de cada app, da licença, do manifesto de versão e da tabela de preços; e a forma da chave temporária.
3. **O chart Helm e o cluster de prova**: o chart assinado, o arquivo de valores, as políticas de rede, a conta de serviço do núcleo limitada ao namespace, o CronJob da cópia e a esteira com o kind.
4. **O OpenBao do lado da Maind**: a instalação em dois nós, a cerimônia da raiz do cartório com duas pessoas, as partes de chave para destrancar sem cofre da nuvem, o encaixe com o cofre em hardware quando há, as chaves de assinatura separadas (cartório, licença, arquivos do Gerenciador, imagens, manifesto, tabela de preços) e o roteiro de cópia e de destrancamento.
5. **A prova dos dois transportes da ligação** com um intermediário que rebaixa o HTTP/2, e a prova de A-03 nos navegadores da lista.
6. **O pacote próprio do HUD Vue**, extraído do repositório do Horus com o time dele, com versão e publicação próprias, para o console e o Gerenciador.
7. **O levantamento de A-15** e **o ensaio do Horus na camada 1** (A-18), com o time do Horus.
8. **A estimativa item por item** que a decisão 92 pede, sobre a seção 7 deste documento, que cresceu com o Kubernetes, o WebSocket, a interface de setup com a instalação no estilo de um gerenciador de pacotes e o Gerenciador.
9. **A estrutura dos repositórios privados**: o do mAIg (a solução .NET, a aplicação Vue, os dois contratos como projetos próprios publicados para o time do Horus) e o lugar do Gerenciador (M-07), que pode ser o mesmo repositório ou um ao lado.
10. **O PDF e a interface de setup**: o modelo das instruções da primeira etapa, uma por formato, escrito com a TI de um cliente de ensaio; a geração do PDF com senha (PDFsharp); e o roteiro das cinco etapas da interface, provado em Docker e em Kubernetes.
11. **O que mudou para o PO levar ao README e às mfs**: a lista está na seção 9 de `componentes.md`; é do PO, não do arquiteto.

### Do dono da Maind: as dúvidas, em ordem de dependência

Cada dúvida tem uma decisão só, as opções exclusivas com a recomendada primeiro, o que se ganha e o que se perde, e por que cabe ao dono. A primeira é a de que as outras dependem. A ordem dos conectores de IA não está aqui: o dono já a decidiu em 12/11/2026.

**Dúvida 1. Onde roda o lado da Maind (M-01 a M-05).** *Decisão:* em que nuvem e em que conta fica o ambiente próprio da Maind que a decisão 4 de 12/11 criou.

- **(A, recomendada) Na mesma nuvem onde a nuvem dos apps (o Horus) roda, numa conta ou projeto separado, operado pela Maind.** Ganha-se: uma nuvem só para o time conhecer e uma fatura só; o cofre de chaves, o armazenamento, o balanceador e o e-mail do mesmo fornecedor; a separação da decisão 4 de 12/11 feita por conta separada, que é o que esses fornecedores recomendam. Perde-se: uma falha grande do fornecedor derruba as duas pontas ao mesmo tempo, mas o mAIg precisa das duas de todo jeito.
- **(B) Numa segunda nuvem, diferente da dos apps.** Ganha-se: independência de fornecedor entre as duas pontas. Perde-se: duas nuvens para o time saber operar, duas faturas, e a ligação entre a nuvem dos apps e o ponto de conexão atravessa a internet entre fornecedores.
- **(C) Em servidores próprios da Maind (VPS).** Ganha-se: o menor custo mensal. Perde-se: o ponto de conexão exige mais de um servidor com balanceador (decisão 33) e o cartório exige estar sempre de pé (decisão 44), e isso em VPS é operação manual da Maind; não há cofre de chaves em hardware.

*Por que é do dono:* é infraestrutura, fornecedor e custo de operação. *Dependem dela:* as dúvidas 2, 3, 4 e 5.

**Decidido pelo dono da Maind em 12/11/2026 (opção A, com uma regra a mais):** o lado da Maind roda na mesma nuvem pública da produção real do primeiro app, numa conta separada. A regra a mais vale acima da escolha da nuvem: **o setup tem de estar pronto para rodar numa máquina virtual, numa VPS, num Kubernetes (gerenciado ou não) ou só com Docker.** Por isso nenhuma peça pode depender de um serviço exclusivo de uma nuvem: onde o arquiteto recomendou um serviço da nuvem (o cofre de chaves, o registro de imagens, o e-mail), ele passa a ser um "encaixe" que funciona com o serviço da nuvem quando houver e com uma peça portátil quando não houver. As dúvidas 2, 3 e 4 se refazem com essa regra. **A regra vale também para o mAIg na casa do cliente (dono da Maind, 12/11/2026, opção A):** o pacote sai em dois formatos, um para Docker (máquina virtual, VPS ou servidor) e outro para Kubernetes, e a atualização com o aval da TI tem de funcionar nos dois; no Kubernetes, quem troca a caixa é o próprio Kubernetes, e não o zelador. Isso muda a decisão de 12/11 que deixava o Kubernetes fora da primeira versão.

**Dúvida 2. Onde ficam as chaves da Maind, e a chave da instância hospedada.** *Decisão:* onde vivem a chave do cartório (M-02), as chaves que assinam kit, licença, manifesto e imagens (M-03, M-04) e a chave da instância das instâncias hospedadas pela Maind.

- **(A, recomendada) No cofre de chaves da nuvem escolhida (KMS), em hardware, com a raiz do cartório fora de linha.** Ganha-se: a chave nunca sai do hardware, toda assinatura fica registrada, o Cosign e o .NET falam com esses cofres direto; a equipe da Maind que opera a hospedagem não alcança a chave da instância, o que fortalece a promessa da decisão 57 no lado da Maind. Perde-se: um custo mensal por chave e por assinatura, pequeno, e a dependência do fornecedor para assinar.
- **(B) Numa chave de hardware física (token) guardada por duas pessoas da Maind, com cerimônias de assinatura.** Ganha-se: independência de fornecedor e custo quase zero. Perde-se: toda emissão de certificado de 30 e de 7 dias exigiria a chave em linha, o que o token físico não dá; só serve à raiz.
- **(C) Chaves em arquivo nos servidores da Maind.** Ganha-se: simplicidade. Perde-se: quem invade o servidor leva a chave que assina tudo, e a promessa da decisão 49 fica fraca.

*Por que é do dono:* serviço pago e segurança. *Depende de:* 1.

**Decidido pelo dono da Maind em 12/11/2026 (opção A, refeita com a regra de rodar em qualquer lugar):** as chaves do lado da Maind (o cartório, as que assinam kit, licença, manifesto e imagens, e a chave de cada instância hospedada) ficam num cofre de chaves portátil e de código aberto, o OpenBao (licença MPL 2.0), que roda em máquina virtual, VPS, Kubernetes ou Docker e, quando há um cofre em hardware da nuvem, usa esse cofre para se destrancar. A raiz do cartório fica fora de linha e só é usada com duas pessoas. A chave nunca sai do cofre: ele devolve só a assinatura, e cada uso fica anotado. Opera-se a mais: o cofre sempre de pé, a cópia de segurança dele e o procedimento para destrancá-lo depois de reiniciar.

**Dúvida 3. O endereço único da Maind e o registro de imagens atrás dele.** *Decisão:* como a TI do cliente libera a saída para a Maind (A-28) e por onde as imagens são baixadas (M-04).

- **(A, recomendada) Um nome de internet só, com IP fixo reservado, na porta 443, servindo a ligação e o registro de imagens próprio da Maind (CNCF Distribution) por trás do mesmo nome.** Ganha-se: a TI libera uma linha só, por nome ou por IP, e a promessa da decisão 90 fica literal; o IP fixo não muda sem a Maind querer. Perde-se: a Maind opera o registro de imagens e paga o IP fixo, um custo pequeno.
- **(B) Um nome só, sem IP fixo, com o registro gerenciado da nuvem atrás de um proxy no mesmo nome.** Ganha-se: menos operação do registro. Perde-se: a TI que libera por IP quebra quando o IP muda, e o proxy de imagens é uma peça a mais.
- **(C) Dois nomes: um para a ligação e o nome próprio do registro gerenciado da nuvem.** Ganha-se: zero operação de registro. Perde-se: duas liberações na TI do cliente, contra a decisão 90.

*Por que é do dono:* muda o que a TI do cliente libera e tem custo. *Depende de:* 1.

**Decidido pelo dono da Maind em 12/11/2026 (opção A):** um nome de internet só, com IP fixo reservado, na porta 443, servindo a ligação e o registro de imagens próprio da Maind (CNCF Distribution, que roda em qualquer ambiente) por trás do mesmo nome. A TI do cliente libera uma linha só; o IP só muda por decisão da Maind, com aviso.

**Dúvida 4. O serviço de e-mail da hospedagem da Maind (M-05).** *Decisão:* por qual serviço saem os e-mails das instâncias hospedadas.

- **(A, recomendada) O serviço de e-mail transacional da nuvem escolhida, por SMTP, com o domínio da Maind configurado (SPF, DKIM, DMARC).** Ganha-se: uma fatura só e a entrega acompanhada pelo fornecedor. Perde-se: nada relevante.
- **(B) Um serviço especializado de e-mail transacional (Postmark, Brevo, Mailgun ou semelhante).** Ganha-se: melhores relatórios de entrega. Perde-se: mais um fornecedor e mais uma conta.
- **(C) Um servidor de e-mail próprio da Maind.** Ganha-se: nenhuma conta externa. Perde-se: a reputação de envio é difícil de construir, e o link de primeiro acesso cair no lixo eletrônico tranca owners.

*Por que é do dono:* fornecedor pago. *Depende de:* 1.

**Resolvida pela regra de rodar em qualquer lugar (12/11/2026):** o serviço de e-mail da hospedagem fala SMTP, o padrão que qualquer fornecedor aceita, com o domínio da Maind configurado (SPF, DKIM, DMARC). A arquitetura não depende de qual é o fornecedor: ele se escolhe na implantação, junto com a nuvem, sem mudar nenhuma peça.

**Dúvida 5. Por onde o kit chega ao administrador da instância (A-09).** *Decisão:* o caminho de entrega do kit e do pacote de instalação.

- **(A, recomendada) Um portal da Maind com login, onde o administrador da instância, cadastrado pela equipe da Maind na contratação, baixa o pacote e o kit; o link do portal vai por e-mail, e a senha nasce por link de primeiro acesso, como no mAIg.** Ganha-se: o kit nunca viaja por e-mail; quem baixa está identificado; a Maind vê quando foi baixado. Perde-se: um portal pequeno para construir e operar (M-03).
- **(B) E-mail com link de download de uso único, e o bilhete de inscrição ditado por telefone ou mensagem pela equipe da Maind.** Ganha-se: nenhum portal. Perde-se: um processo manual da equipe da Maind a cada contratação, e o e-mail como canal de um documento sensível.
- **(C) Tudo por e-mail.** Ganha-se: simplicidade. Perde-se: quem controla a caixa de e-mail do administrador instala o app em nome dele.

*Por que é do dono:* muda o que uma pessoa faz e cria uma tela para construir. *Depende de:* 1 (o portal roda no lado da Maind).

**Decidido pelo dono da Maind em 12/11/2026 (opção A):** um portal da Maind com login. A equipe da Maind cadastra o administrador da instância na contratação; ele recebe o link de primeiro acesso por e-mail, cria a própria senha e baixa no portal o pacote do mAIg e o kit de cada app. O kit nunca viaja por e-mail, quem baixa fica identificado e a Maind vê quando o kit foi baixado e usado. O portal é uma peça nova do lado da Maind, junto do servidor das contratações (M-03).

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

**Dúvida 6. Quem guarda a chave da cópia de segurança da instância.** *Decisão:* como fica cifrada a parte da cópia que não é de nenhuma organização (a configuração, as pessoas, o registro da instância), que a decisão 57 não cobre e a P-06 exige que ninguém leia.

- **(A, recomendada) Uma chave da cópia, aleatória, mostrada uma vez na instalação, que quem opera a máquina guarda fora dela, como o owner da organização guarda o código de recuperação.** Ganha-se: a cópia inteira é ilegível para quem a guarda; a restauração pede uma chave só, mais o código de cada organização. Perde-se: mais um segredo para a TI do cliente não perder; perdê-lo é perder a cópia da instância, não a das organizações, que têm o próprio código.
- **(B) Uma senha digitada a cada cópia e a cada restauração.** Ganha-se: nada a guardar da instalação. Perde-se: a cópia agendada deixa de ser automática, ou a senha fica num arquivo da máquina, o que anula a cifra.
- **(C) A parte da instância sem cifra, só as partes das organizações cifradas.** Ganha-se: simplicidade. Perde-se: nomes e e-mails de pessoas legíveis para quem guarda a cópia, contra a P-06.

*Por que é do dono:* retenção de dados e um gesto a mais da TI do cliente. *Independente das anteriores.*

**Decidido pelo dono da Maind em 12/11/2026 (opção A):** uma chave da cópia, aleatória, criada na instalação e mostrada uma vez só, que quem opera a máquina guarda fora dela. A cópia inteira fica ilegível para quem a guarda; a restauração pede essa chave e o código de recuperação de cada organização, e a cópia agendada segue automática. **Ideia do dono para depois, sem versão marcada:** uma oferta premium com um dispositivo físico de guarda das chaves, como as carteiras frias de criptomoedas, no lugar de a TI guardar a chave em papel ou num cofre de senhas. Fica registrada para o PO e o arquiteto avaliarem; não muda a primeira versão.

**Dúvida 7. O custo da IA no console: o que o provedor informa e o que o mAIg estima (A-17).** *Decisão:* o que a visão do consumo mostra quando o provedor não informa o custo em dinheiro.

- **(A, recomendada) Mostrar o custo informado pelo provedor quando ele informa (o OpenRouter) e, nos outros, a estimativa por tokens vezes a tabela de preços da Maind, com a marca "estimado" ao lado do número e a data da tabela.** Ganha-se: um número sempre, honesto sobre a origem; a tabela se atualiza pela ligação sem versão nova. Perde-se: a estimativa pode divergir da fatura por descontos, cache e arredondamentos do provedor; o limite de gasto (decisão 112) trava pela estimativa.
- **(B) O owner da organização preenche a tabela de preços no console, por modelo.** Ganha-se: o número bate com o contrato da empresa. Perde-se: uma configuração a mais, que ninguém mantém, e um app parado por uma tabela errada.
- **(C) A tabela da Maind como padrão, editável pelo owner da organização.** Ganha-se: os dois. Perde-se: mais tela e a dúvida de qual número vale no limite.

*Por que é do dono:* muda o que o owner da organização vê e em que o limite se baseia. *Independente.*

**Decidido pelo dono da Maind em 12/11/2026 (opção A):** a visão do consumo mostra o custo informado pelo provedor quando ele informa (o OpenRouter) e, nos outros, a estimativa por tokens vezes a tabela de preços da Maind, com a marca "estimado" ao lado do número e a data da tabela. A tabela se atualiza pela ligação, sem versão nova, e o limite de gasto (decisão 112) trava pelo número que aparece, informado ou estimado.

**Dúvida 8. O caminho alternativo para a empresa cujo intermediário quebra a ligação (A-29), na onda 1.0 ou depois.** *Decisão:* se a conversa da ligação por WebSocket, para intermediários corporativos que não deixam o HTTP/2 passar, é construída já na onda 1.0.

- **(A, recomendada) Só o gRPC sobre HTTP/2 na onda 1.0, com a exigência escrita no material da TI ("o HTTP/2 para o endereço da Maind precisa passar"), e o WebSocket como item da onda 1.1 ou antes, se o primeiro cliente travar.** Ganha-se: menos para construir e provar antes do Horus 2.0. Perde-se: uma empresa com intermediário restritivo pode não conseguir instalar na onda 1.0 sem ajustar o intermediário dela.
- **(B) Os dois caminhos na onda 1.0.** Ganha-se: nenhuma empresa fica de fora por isso. Perde-se: duas camadas de transporte para construir, provar e manter desde o início.
- **(C) Nunca; só HTTP/2.** Ganha-se: um caminho só para sempre. Perde-se: clientes.

*Por que é do dono:* muda quais empresas conseguem instalar e o recorte da onda 1.0 (decisão 92). *Depende de:* 3.

**Decidido pelo dono da Maind em 12/11/2026 (opção B, contra a recomendação):** os dois caminhos já na onda 1.0. A ligação usa o gRPC sobre HTTP/2 e, quando um intermediário da empresa não deixa o HTTP/2 passar, o mAIg passa sozinho para o caminho alternativo por WebSocket, sem ninguém mexer em nada. Abre-se mão de: duas camadas de transporte para construir, provar e manter desde o início, e a onda 1.0 cresce; é um item a pesar na estimativa da decisão 92.

**Dúvida 9. Como uma organização criada no mAIg passa a existir na parte de fora de cada app (A-25).** *Decisão:* o gatilho que faz a nuvem do app conhecer a organização.

- **(A, recomendada) A parte de fora cria a organização quando a vê pela primeira vez, a partir do passe assinado pelo mAIg, que já traz a organização.** Ganha-se: nenhum segundo cadastro que possa divergir, nenhuma mensagem a mais; a prova de que a organização existe é o passe. Perde-se: a organização só aparece na nuvem na primeira entrada de alguém, o que para o Horus não importa, porque lá fica só a receita dos painéis.
- **(B) O servidor das contratações (M-03) avisa a nuvem quando libera o app para a organização.** Ganha-se: a nuvem sabe antes do primeiro login. Perde-se: uma mensagem a mais entre dois sistemas da Maind, com o risco de divergência que A-25 quer evitar.
- **(C) Os dois.** Ganha-se: a antecedência e a prova. Perde-se: dois caminhos para manter.

*Por que é do dono:* envolve o Horus, outro produto, e a `MF-107` marca A-25 como "com o dono da Maind". *Independente.*

**Decidido pelo dono da Maind em 12/11/2026 (fora das opções, e muda o nascimento da organização):** a organização nasce na Maind, e não no mAIg. Os passos:

1. A Maind cria a organização no **Gerenciador do mAIg**: o cockpit de controle e cobrança da Maind, na nuvem da Maind, separado de qualquer app (não é o primeiro app).
2. O Gerenciador gera um **arquivo de setup assinado**, com as informações da organização, que vai para o cliente.
3. O cliente prepara o próprio ambiente seguindo um **acesso público** da Maind, com as instruções e as informações da organização, e executa o setup.
4. Ao fim do setup, o cliente instala no mAIg o arquivo disponibilizado no portal.
5. Havendo conectividade, o mAIg faz o handshake com a Maind.

Não precisa ser tudo automático; o que importa é que **a Maind cria a organização e assina o arquivo**. Leituras do arquiteto, a confirmar com o dono: (a) o Gerenciador reúne o servidor das contratações (M-03), o portal da dúvida 5 e a cobrança, e vira uma peça própria do lado da Maind (M-07); (b) a nuvem de cada app conhece a organização a partir do Gerenciador, que é a origem, e o passe assinado pelo mAIg continua provando a pessoa (resolve A-25); (c) o arquivo de setup e o arquivo instalado no fim podem ser um só; (d) quem cadastra o primeiro owner da organização continua sendo o administrador da instância (decisões 51 e 83), salvo nova decisão. A levar ao README e às mfs (decisões 9, 16 e 51, `MF-103`, `MF-107` e `MF-110`) quando a arquitetura fechar.

**Dúvida 10. A biblioteca de componentes visuais do console.** *Decisão:* de onde vêm botões, tabelas, formulários e menus do console, que dão a cara dele.

- **(A, recomendada) O design system da casa, o mesmo das telas do Horus (HUD Vue), com a marca da Maind.** Ganha-se: o console parece da mesma família dos apps, e o time que o mantém é um só. Perde-se: o mAIg passa a depender de um pacote do repositório do Horus, que precisa ser publicado como pacote próprio.
- **(B) Uma biblioteca de mercado (PrimeVue, MIT) com um tema na marca da Maind.** Ganha-se: independência do repositório do Horus e componentes prontos para tabelas grandes e formulários. Perde-se: duas caras na família Maind, e um tema para manter.
- **(C) Componentes próprios do mAIg, sem biblioteca.** Ganha-se: controle total. Perde-se: muito trabalho de tela num produto cujo valor não está na tela.

*Por que é do dono:* muda o que uma pessoa vê e a marca (decisão 7). *Independente.*

**Decidido pelo dono da Maind em 12/11/2026 (opção A):** o console usa o design system da casa, o mesmo das telas do primeiro app (HUD Vue), com a marca da Maind. O design system sai do repositório do primeiro app e vira um pacote próprio, usado pelos dois produtos.

### Do dono da Maind: as dúvidas novas, em ordem de dependência

As respostas de 12/11/2026 abriram quatro perguntas que fecham a solução e que só o dono responde. Nenhuma é número, preço nem jurídico. Das leituras (a) a (d) da dúvida 9: a (a) ficou superada, porque não há portal; a (b) foi confirmada; a (c) foi respondida, o arquivo é um só e quem o traz é o mAIg; a (d) foi substituída, o primeiro owner vem do Gerenciador. As leituras do fluxo do setup foram confirmadas pelo dono (confirmações 1 a 3), como registradas acima e no item 8 da seção 9 de `componentes.md`: a chave temporária faz o papel do código de ativação; os apps contratados são baixados e instalados do mesmo jeito, sem PDF por app, e é aí que entram o kit e o bilhete; liberar e configurar cada app continua com o owner da organização.

**Dúvida nova 1. No Kubernetes, quem manda o cluster trocar a caixa depois do aval da TI.** *Decisão:* o dono decidiu que no Kubernetes quem troca a caixa é o próprio Kubernetes; falta dizer quem lhe dá a ordem.

- **(A, recomendada) O núcleo, com uma permissão limitada ao próprio namespace, depois do aval e dentro da janela.** Ganha-se: a decisão 39 vale igual nos dois formatos: a TI dá o aval no console e o mAIg se instala sozinho na janela; a TI audita uma permissão pequena, só criar e trocar os próprios pods, que é o padrão dos operadores de Kubernetes; e é a mesma permissão que a instalação no estilo de um gerenciador de pacotes, no setup, precisa para subir os módulos no cluster. Perde-se: o núcleo ganha uma permissão no cluster, ainda que presa ao namespace, e uma TI muito rígida pode querer negá-la.
- **(B) A TI do cliente aplica a versão nova ela mesma (`helm upgrade`), depois de ver o aval no console.** Ganha-se: o núcleo não tem permissão nenhuma no cluster, e a TI controla o momento exato. Perde-se: "se instala sozinho dentro da janela" (decisão 39) deixa de valer no Kubernetes, e a janela e o prazo de adiamento passam a depender de alguém rodar um comando; na hospedagem da Maind, a equipe da Maind roda o comando a cada versão.
- **(C) Os dois, à escolha da TI na instalação.** Ganha-se: atende a TI rígida sem tirar o automático das outras. Perde-se: dois caminhos para construir, provar e explicar.

*Por que é do dono:* muda o que a TI faz e o que ela concede ao mAIg no cluster; toca a decisão 39. *Independente.*

**Decidido pelo dono da Maind em 12/11/2026 (opção A):** no Kubernetes, o núcleo do mAIg manda o cluster trocar a caixa depois do aval da TI, dentro da janela de horário, com permissão só no próprio namespace e só para trocar pelas versões assinadas pela Maind. A regra da atualização (decisão 39) vale igual nos dois formatos. A permissão do núcleo fica escrita no material da TI.

**Dúvida nova 2. O cluster do cliente que não aplica política de rede.** *Decisão:* o que o mAIg faz quando a camada de rede do cluster não aplica a política que mantém o módulo sem saída (C-16), o que o instalador detecta com um pod de prova.

- **(A, recomendada) Instalar o núcleo e recusar instalar qualquer módulo até a camada aplicar a política, com a mensagem dizendo o que falta.** Ganha-se: a promessa da decisão 63, "o módulo nunca sai para a internet por conta própria", vale por construção em todo cluster em que o mAIg roda; a TI sabe na hora o que ajustar, e ajustar é comum (trocar ou configurar a camada de rede). Perde-se: um cliente com cluster sem política fica sem app até ajustar, e pode preferir o formato Docker.
- **(B) Instalar com um aviso, e a TI aceita por escrito o risco de o módulo ter saída.** Ganha-se: ninguém fica sem instalar. Perde-se: a promessa da decisão 63 passa a depender da palavra do app nesse cliente, e a visão precisaria dizer isso.
- **(C) Exigir o formato Docker para esse cliente.** Ganha-se: a promessa vale sempre. Perde-se: o cliente que só tem cluster fica sem caminho.

*Por que é do dono:* é uma promessa de segurança da visão e muda o que a TI vê na instalação. *Depende de:* 1 (o pod de prova usa a mesma permissão do instalador no namespace).

**Decidido pelo dono da Maind em 12/11/2026 (opção A):** num cluster que não aplica a política de rede, o mAIg instala o núcleo e recusa instalar qualquer módulo até a camada aplicar a política, com a mensagem dizendo o que falta. O próprio núcleo faz o diagnóstico: roda o teste da caixa de prova na instalação e de novo sempre que a TI pedir pelo console, e confere de tempos em tempos que a regra continua valendo. A promessa da decisão 63 vale em todo cluster em que o mAIg roda.

**Dúvida nova 3. O formato das instâncias hospedadas pela Maind.** *Decisão:* em qual dos dois formatos a própria Maind roda as instâncias que hospeda para clientes sem infraestrutura.

- **(A, recomendada) Kubernetes gerenciado da nuvem, um namespace por instância.** Ganha-se: a troca de caixa, o reinício, os limites e a cópia agendada vêm do cluster; muitas instâncias cabem num cluster só, separadas por namespace e política de rede; é o que a equipe da Maind opera num lugar só. Perde-se: a equipe precisa saber Kubernetes, e o isolamento entre instâncias é por namespace, mais fraco que por máquina; o cliente que exigir máquina própria pede a opção B.
- **(B) Docker numa máquina virtual por instância.** Ganha-se: isolamento por máquina, e o mesmo roteiro da casa do cliente. Perde-se: uma máquina virtual por instância para operar, atualizar e monitorar, com o zelador em cada uma.
- **(C) Os dois, por faixa de cliente.** Ganha-se: o isolamento por máquina só para quem paga por ele. Perde-se: dois roteiros de operação na Maind.

*Por que é do dono:* infraestrutura e custo de operação da hospedagem. *Independente das anteriores; não muda a casa do cliente.*

**Decidido pelo dono da Maind em 12/11/2026 (opção A):** a Maind roda as instâncias que hospeda num Kubernetes gerenciado da nuvem, com um namespace por instância, separadas por namespace e por política de rede. A troca de caixa, o reinício, os limites e a cópia agendada vêm do cluster. O cliente que exigir máquina própria fica para uma decisão futura.

**Dúvida nova 4. Os apps contratados depois do setup: instalação sozinha ou com o gesto do administrador.** *Decisão:* no setup, o mAIg instala sozinho tudo o que a organização pode ter (fluxo do dono); falta dizer o que acontece quando a Maind autoriza um app novo numa instância que já roda.

- **(A, recomendada) O manifesto chega pela ligação, o console mostra "app autorizado" e o administrador da instância clica em instalar; o resto é o mesmo caminho do setup, sem arquivo nenhum.** Ganha-se: a decisão 10 continua valendo (o administrador instala, uma vez só, e o owner da organização libera e configura), e a TI escolhe o momento, como faz com as versões (decisão 39). Perde-se: um clique a mais, e um app pode ficar dias "autorizado" sem instalar.
- **(B) O mAIg instala sozinho, na janela de atualização, com aviso ao administrador.** Ganha-se: o app contratado chega sem ninguém mexer, igual ao setup. Perde-se: muda a decisão 10, e um módulo novo entra na casa do cliente sem o aval da TI, contra o espírito da decisão 39.
- **(C) Sempre com o gesto do administrador, inclusive no setup.** Ganha-se: nenhuma instalação sem a TI. Perde-se: contraria o fluxo do dono, em que o setup instala tudo sozinho.

*Por que é do dono:* muda o que o administrador faz e toca as decisões 10 e 39. *Independente das anteriores.*

**Decidido pelo dono da Maind em 12/11/2026 (opção A):** quando a Maind autoriza um app novo depois do setup, a autorização chega pela ligação, o console mostra "app autorizado" e o administrador da instância clica em instalar; o resto é o mesmo caminho do setup, sem arquivo nenhum. A decisão 10 continua valendo: nenhum módulo novo entra na casa do cliente sem um gesto da TI. Só o setup instala sozinho o que a organização pode ter.

### Divergências e riscos achados

1. **Quem troca a caixa tem poder sobre a máquina ou sobre o namespace.** No Docker, o zelador tem acesso ao motor de contêineres; no Kubernetes, o núcleo tem permissão de trocar a imagem no próprio namespace (dúvida nova 1). É inevitável para "atualizar é trocar a caixa" e para instalar módulos pelo console, mas uma TI rígida vai perguntar. O material da TI precisa dizer isso com todas as letras, nos dois formatos.
2. **No Kubernetes, "sem rede" é uma regra do cluster, não um fato físico.** A política de rede só vale se a camada de rede a aplicar; o instalador prova isso antes de instalar módulo, e o que fazer quando não aplica é a dúvida nova 2.
3. **Dois transportes na ligação, desde a onda 1.0.** O dono escolheu contra a recomendação, e com razão de produto; o custo é construir, provar e manter dois embrulhos da mesma conversa, com a troca automática como ponto mais delicado de provar. É um item a pesar na estimativa (seção 7).
4. **O OpenBao é uma peça nova para operar.** Sempre de pé, cópia de segurança, destrancamento depois de reiniciar (automático com o cofre da nuvem, manual com duas pessoas sem ele), e a cerimônia da raiz. Se ele cai, o cartório para de emitir, e uma parada longa chega a trancar organizações (decisão 44): o OpenBao precisa do mesmo cuidado de disponibilidade do ponto de conexão.
5. **O nome do endereço do mAIg precisa estar sob um domínio público da empresa.** O Google (P-05) só aceita endereço de retorno sob domínio público, e uma autoridade certificadora pública só emite para nomes assim. É uma restrição à decisão 120; vai ao manual da `MF-101` e ao PO.
6. **O PDF por e-mail e a chave temporária são o elo mais humano da cadeia.** Quem invade o e-mail oficial da organização e consegue a senha por outro caminho tem a chave; a defesa é a senha por outro canal, a chave de vida curta e uso único, marcada como usada na Maind, e o Gerenciador mostrando quando ela foi usada e de onde. O e-mail precisa ser esperado pela organização, para não parecer golpe. Uma chave vencida se refaz no Gerenciador, com PDF e senha novos.
7. **A interface de setup fica exposta no endereço interno até a instância ser configurada, e quem digita a chave vira o primeiro administrador.** A única porta é a chave temporária: ela tem de ser tratada como senha pela TI. A primeira conexão com a Maind não tem certificado da instância: a chave e o certificado público da Maind são a única proteção dessa conversa, e por isso ela só serve para pedir o certificado e o arquivo. E o e-mail do primeiro owner vem da Maind: um e-mail errado no Gerenciador manda o link à pessoa errada, o mesmo risco da decisão 51, agora do lado da Maind.
8. **O HUD Vue como pacote próprio depende do time do Horus.** Até o pacote existir, o console do mAIg não tem a cara decidida; é o primeiro item a combinar entre os dois times.
9. **O banco interno é SQLite, e a casa conhece PostgreSQL.** A escolha está justificada (seção 2.2) e vale igual nos dois formatos, mas pede uma conversa com o time.
10. **O código do OpenRouter do Horus 1.x manda ao provedor o identificador da organização, da pessoa e da conversa.** No mAIg isso não pode ir (decisão 20); quem copiar o código precisa tirar isso de propósito, e o teste do corpo serializado precisa prová-lo.
11. **A restauração depende de o owner da organização entrar no console antes de a organização dele voltar**, e depois de uma restauração todo mundo entra de novo e os certificados são reemitidos, porque as chaves privadas não vão na cópia (A-22). Os dois vão ao roteiro da `MF-107`.
12. **Três bibliotecas conhecidas do mundo .NET ficaram de fora por licença**: FluentAssertions, EPPlus e o Redis original. Quem construir vai esbarrar nelas pelo hábito.
13. **O módulo sem saída de rede não consegue nada por conta própria, nem o inofensivo**, e o log técnico da caixa dele é do app e fica à vista da TI do cliente; o contrato de app o obriga a seguir a decisão 123, e a auditoria de fora (decisão 36) é quem confere.

## 7. A base para a estimativa

O que mais pesa construir, na ordem do peso, sem prazo nem custo. "Pesa" aqui é o trabalho de construir e de provar, não só de escrever.

**O que cresceu na onda 1.0 com as decisões de 12/11/2026.** Quatro coisas entraram no mínimo do Horus 2.0 que antes não estavam: **o formato Kubernetes** (o chart, as políticas de rede, a troca pelo cluster, a prova no kind); **o WebSocket** como segundo transporte da ligação, com a troca automática; **a interface de setup com a instalação no estilo de um gerenciador de pacotes** (as cinco etapas, a primeira conexão pela chave temporária, o manifesto, o registro, os certificados nascendo na instância); e **o Gerenciador do mAIg** (M-07), uma peça inteira do lado da Maind, com as chaves temporárias, o PDF com senha e os documentos assinados. O portal do cliente, que chegou a entrar, saiu com a revisão do dono. Os quatro entram na estimativa item por item da decisão 92, e, pela mesma decisão, o item que não couber volta ao dono.

1. **A ligação e o ponto de conexão (C-18, M-01), agora em dois transportes.** Uma conversa longa, com estado dos dois lados, em dois ou mais servidores, com reconexão, conferência do que ficou pendente, encaminhamento entre nós, TLS mútuo e o balanceador que preserva o certificado; e tudo isso duas vezes, no HTTP/2 e no WebSocket, com a troca automática entre os dois como a parte mais delicada de provar. É a peça que tudo o mais atravessa.
2. **O pacote nos dois formatos, a interface de setup e quem troca a caixa (C-16, C-21, C-22).** No Docker, as caixas sem rede, o socket Unix, o zelador, a subida da caixa nova ao lado da antiga, a troca e a volta; no Kubernetes, o chart, o StatefulSet, as políticas de rede com a prova de que o cluster as aplica, a conta de serviço limitada, a troca pelo cluster e a volta; as migrações em duas etapas, iguais nos dois; e a interface de setup com as cinco etapas e a instalação no estilo de um gerenciador de pacotes, nos dois formatos. É infraestrutura delicada, que se prova em máquina e em cluster de verdade.
3. **O chaveiro, o cartório e o OpenBao (C-11, M-02, seção 2.7), com a cifra e a cópia (seção 2.5, C-23).** Uma autoridade certificadora privada com perfis e rotação curta, o cofre de chaves do lado da Maind com a cerimônia da raiz e o destrancamento, o envelope de chaves, o código de recuperação, a chave da cópia e a restauração por organização. Cada peça é pequena; o conjunto exige rigor e revisão de segurança antes da primeira venda.
4. **O Gerenciador do mAIg (M-07), o servidor das contratações (M-03) e as duas metades da instalação estilo gerenciador de pacotes.** Uma peça nova do lado da Maind: o cockpit da equipe (organizações, contratações, chaves temporárias, PDF com senha, documentos assinados, autorização de apps, aprovações com duas pessoas, situação das instâncias, tabela de preços, o lugar da cobrança), mais o handshake de máquina em M-03, com a conferência da chave temporária, o manifesto do que a organização pode ter e o aviso às nuvens dos apps, e o registro (M-04) entregando as imagens. Pesa em quantidade de fluxos, e por ser a origem de tudo o que a instância recebe assinado; sem o portal, pesa menos em tela do que pesava.
5. **O console (C-20).** É onde mais horas de tela existem na instância: a parte da instância, a da organização e a do auditor, dezenas de telas listadas na `MF-110`, mais o painel da instância, o painel de alertas, a visão do consumo, o registro com busca; as telas "adicionar organização" e "apps autorizados" substituem a de criar organização; e a onda 1.1 acrescenta telas a quase todas. Com o HUD Vue como pacote próprio, as telas saem mais rápido depois que o pacote existir.
6. **O intermediário da IA e os conectores (C-07, seção 4.4).** Primeiro **o OpenRouter e a Anthropic**, com o que se herda do Horus no primeiro; depois **a OpenAI, o Google e o Amazon Bedrock**. O que pesa mais não são os conectores, que são repetitivos, e sim o que é novo: as partes tipadas, a conferência da camada, os totais por referência com contagem, o custo em dois regimes com a marca "estimado", a tabela de preços assinada vinda do Gerenciador, o limite de gasto na mesma transação do registro.
7. **O leitor dos bancos (C-06).** Quatro famílias com conectores diferentes, o teste do usuário que só lê pelo catálogo de cada família, o guarda de SQL, os limites e a sugestão das colunas sensíveis. Pesa em variedade.
8. **O escrivão e os registros (C-09, C-12, C-13).** A cifra por linha, os índices cegos, a cadeia de hash, os pontos assinados, a busca e, na onda 1.1, a cópia assinada. Pesa em correção.
9. **O canal de atualização (M-04) e a esteira.** O registro de imagens atrás do nome único, a assinatura das imagens e do chart pelo OpenBao, o manifesto de versão, a construção reprodutível. Pesa em automação.
10. **A entrada, o cadastro e os passes (C-01, C-02, C-03).** Tecnologia conhecida; pesa a prova de A-03 no navegador.
11. **O que prova tudo isso sem gastar (seção 5).** O provedor de ensaio, o módulo de ensaio nos dois formatos, as gravações dos cinco provedores, as caixas de teste dos bancos e do OpenBao, o kind, as duas pontas da ligação nos dois transportes. É investimento que paga em toda versão.

Pesam menos, e não dependem de nada difícil: o fiscal da saída (C-08), o cache dos painéis (C-17), a luz de estado (C-19), o carteiro (C-24), o livro de regras (C-05), a guarda dos arquivos assinados (C-14) e o catálogo (C-15), que são tabelas, máquinas de estado e código de negócio sem tecnologia nova. A onda 1.1 acrescenta telas e fluxos a componentes que já existem; a segunda versão traz duas peças novas, a ponte MCP (C-25) e o login da empresa (C-26), as duas sobre bibliotecas prontas.

## Anexo A. As licenças das peças de terceiros que pesam

| Peça | Para quê | Licença | Observação |
| --- | --- | --- | --- |
| .NET, ASP.NET Core, EF Core, Kestrel | Plataforma, web, banco, servidor | MIT | Microsoft; versão de suporte longo |
| Imagens oficiais do .NET para contêiner | Base das caixas | MIT (os arquivos de construção); a distribuição Linux dentro tem a licença dela | Variante enxuta, sem shell |
| SQLite e Microsoft.Data.Sqlite | Banco interno | Domínio público; MIT | O pacote .NET traz o SQLite nativo (Apache 2.0) |
| gRPC para .NET e Protobuf | Ligação e contrato de módulo | Apache 2.0; BSD 3 cláusulas | |
| Microsoft.IdentityModel | JWT, JWS | MIT | Passe, licença, kit, arquivo da organização, manifesto |
| Vue 3, Vite, Pinia | Console, página de status, Gerenciador | MIT | |
| TypeScript | Telas | Apache 2.0 | |
| HUD Vue | Design system da casa | Da Maind | Pacote próprio a extrair do repositório do Horus |
| Docker Engine e Compose | Motor das caixas no formato Docker | Apache 2.0 | O Docker Desktop, de estação de trabalho, tem licença paga para empresas grandes e não é usado |
| Helm | Pacote do formato Kubernetes | Apache 2.0 | |
| kind | Cluster local de testes | Apache 2.0 | Só na esteira de testes |
| Cosign (Sigstore) | Assinatura das imagens e do chart | Apache 2.0 | Com a chave no OpenBao |
| CNCF Distribution | Registro de imagens (M-04) | Apache 2.0 | Atrás do nome único da Maind |
| OpenBao | Cofre de chaves do lado da Maind | MPL 2.0 | Linux Foundation; continuação aberta do Vault |
| Nginx | Balanceador em repasse TCP, fora da nuvem | BSD 2 cláusulas | Só onde não há balanceador da nuvem ou do cluster |
| PostgreSQL e Npgsql | Banco do lado da Maind; conector do leitor | Licença PostgreSQL | Permissiva |
| Microsoft.Data.SqlClient | Conector SQL Server | MIT | |
| MySqlConnector | Conector MySQL e MariaDB | MIT | |
| ODP.NET gerenciado (Oracle) | Conector Oracle | Termos de uso livre da Oracle | Permite uso comercial; não é código aberto |
| MailKit | SMTP | MIT | |
| PDFsharp | O PDF com senha do setup, no Gerenciador | MIT | QuestPDF (licença dupla) e iText (AGPL) ficaram fora |
| ClosedXML | Planilha (onda 1.1) | MIT | O EPPlus ficou fora por licença comercial |
| SDK da AWS para .NET (Bedrock) | Conector Bedrock | Apache 2.0 | |
| SDK oficial da Anthropic para .NET | Conector Anthropic | MIT | Ou cliente HTTP fino da Maind |
| Biblioteca oficial da OpenAI para .NET | Conector OpenAI | MIT | Ou cliente HTTP fino da Maind |
| SDK do Google para .NET (Gemini) | Conector Google | Apache 2.0 | Se estável na hora; senão, cliente fino |
| SDK oficial do MCP para C# | Ponte MCP (segunda versão) | MIT | |
| Bibliotecas de TOTP e de passkey para .NET | Confirmação em dois passos (segunda versão) | MIT | A escolher na segunda versão |
| xUnit, NSubstitute, Shouldly | Testes | Apache 2.0; BSD; BSD | FluentAssertions ficou fora: licença paga para uso comercial |
| WireMock.Net, Testcontainers para .NET | Testes de integração | Apache 2.0; MIT | |
| Vitest, Playwright para .NET | Testes de tela | MIT; Apache 2.0 | |
| Ollama | Servidor local de modelo para testes | MIT | Só em desenvolvimento |
| k6 | Teste de carga | AGPL 3.0 | Ferramenta usada, nunca distribuída com o mAIg |

## Anexo B. Glossário

- **ADO.NET**: o padrão do .NET para falar com bancos de dados; cada banco tem o seu conector.
- **AES-256-GCM**: a cifra simétrica padrão da indústria, com conferência de integridade: se alguém altera um byte, a decifra falha.
- **Autoridade certificadora**: quem assina certificados; pública, como a dos sites; privada, como o cartório da Maind.
- **Balanceador de carga**: a peça que distribui as conexões entre vários servidores; em modo de repasse TCP, entrega a conexão cifrada inteira sem abri-la.
- **Cadeia de hash**: cada linha carrega a impressão digital da anterior; alterar uma quebra todas as seguintes.
- **Chart Helm**: o pacote padrão do Kubernetes, um conjunto de modelos que descreve o que subir.
- **Chave temporária**: o segredo de vida curta e uso único que o Gerenciador gera e que a TI digita na interface de setup; faz o papel do código de ativação.
- **Interface de setup**: as páginas que a imagem do mAIg serve enquanto a instância não está configurada, com as cinco etapas da primeira instalação.
- **Instalação no estilo de um gerenciador de pacotes (como o npm)**: o mAIg pergunta à Maind o que pode ter, baixa do registro o que falta, confere as assinaturas e instala sozinho.
- **Compose**: o arquivo que diz quais caixas de contêiner sobem juntas e como se ligam, no formato Docker.
- **Contêiner, imagem**: a caixa fechada com um programa e tudo de que ele precisa; a imagem é o molde da caixa.
- **CORS**: a regra que diz a um navegador quais sites podem chamar um endereço.
- **Cosign**: a ferramenta padrão de assinatura de imagens de contêiner.
- **CSR**: o pedido de certificado: a chave pública mais os dados, assinados pela chave privada.
- **Docker Engine**: o programa que roda as caixas numa máquina Linux.
- **ECDSA P-256, ES256**: a assinatura de chave pública mais aceita em certificados e em JWT.
- **EF Core**: a biblioteca do .NET que traduz os objetos do programa em tabelas.
- **Encaixe**: a regra de usar um serviço da nuvem quando ele existe e uma peça portátil quando não existe.
- **Envelope de chaves**: a chave que cifra os dados é, ela mesma, cifrada por outra.
- **gRPC, protobuf**: um jeito de dois programas conversarem com mensagens tipadas e contrato escrito; protobuf é o formato das mensagens.
- **HKDF, HMAC**: formas de derivar chaves e de fazer carimbos de uma via a partir de um segredo.
- **HTTP/2**: a versão da linguagem da web que leva várias conversas numa conexão só.
- **Índice cego**: um carimbo do valor que permite procurar sem revelar o valor.
- **JWT, JWS**: um token e um documento em JSON, assinados, que se conferem com a chave pública.
- **Kestrel**: o servidor web embutido no ASP.NET Core.
- **kind**: um Kubernetes descartável dentro de contêineres, para testes.
- **KMS**: o cofre de chaves em hardware de uma nuvem; aqui, só para destrancar o OpenBao.
- **Kubernetes**: o orquestrador que roda contêineres num cluster de máquinas; namespace é a divisão lógica dentro dele; pod é a unidade que roda uma ou mais caixas; StatefulSet e Deployment são as formas de declarar quantas cópias de uma caixa rodam; Secret é o cofre de segredos dele; PersistentVolume é o disco que sobrevive ao pod; NetworkPolicy é a regra de com quem um pod fala.
- **MCP**: o protocolo com que uma IA usa ferramentas de uma empresa.
- **Monólito modular**: um programa só, dividido em partes com fronteiras claras.
- **OCI**: o padrão aberto das imagens de contêiner.
- **OpenBao**: o cofre de chaves e segredos de código aberto, continuação do Vault, que guarda chaves e devolve só assinaturas.
- **OpenID Connect (OIDC)**: o padrão de "entrar com a conta de outro".
- **PBKDF2**: o algoritmo que transforma uma senha num hash lento de reverter.
- **Razor Pages**: páginas web geradas no servidor pelo ASP.NET Core.
- **SMTP**: o protocolo de envio de e-mail.
- **Socket Unix**: um canal entre dois programas da mesma máquina, sem rede.
- **SPA**: uma tela que roda inteira no navegador e conversa com o servidor por pedidos pequenos.
- **SQLite**: um banco de dados que vive dentro do programa, num arquivo, sem servidor à parte.
- **SSE**: o fluxo de eventos pela web com que os provedores de IA entregam a resposta aos pedaços.
- **TLS, TLS mútuo**: a cifra do caminho; mútua quando os dois lados mostram certificado.
- **WebSocket**: uma conversa aberta entre dois programas pela web comum, que os intermediários de saída deixam passar.
- **X.509**: o formato padrão dos certificados digitais.
