# Maind AI Gateway (mAIg) — documentação

Documentação pública do **Maind AI Gateway (mAIg)**. O código fica num repositório privado, à parte.

## O que é

Com a IA, os dados viraram o combustível dos projetos. Mas a maioria das empresas não deixa um banco de dados
visível de fora, nem atrás de firewall ou VPN. O mAIg resolve isso: é uma plataforma da Maind instalada **na casa
do cliente**. Quem acessa os dados é o mAIg, e a TI do cliente controla o que cada produto pode ver e fazer.

Os produtos da Maind entram no mAIg como **apps**. O **Maind Horus** é o primeiro; o **Maind Doc** (assistente
para gerar documentos de projetos corporativos com IA) e outros podem vir depois. Com o mAIg instalado e aprovado,
um novo app não precisa passar de novo pela aprovação de segurança: basta liberá-lo no mAIg que já existe.

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

## Em aberto

- Se também entram no núcleo nativo as conexões com os dados (o cofre das senhas dos bancos, só leitura), a
  governança da IA (as chaves dos provedores, os modelos permitidos, os limites e o custo por app) e os servidores
  MCP do cliente.
- A direção da conexão: se o mAIg liga para fora (o cliente não abre porta de entrada) ou se os apps ligam para ele.
- A marca Maind visível dentro de um app white label, como o Horus vendido com a marca de quem o contrata.
