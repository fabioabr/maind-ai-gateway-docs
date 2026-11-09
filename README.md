# Maind AI Gateway (mAIg) — documentação

Documentação pública do **Maind AI Gateway (mAIg)**. O código fica num repositório privado, à parte.

Comece pela [visão e pelos objetivos](visao.md).

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
5. **Dados e IA também são nativos.** Entram no núcleo, além do item 3:
   - as conexões com os dados: o cofre das senhas dos bancos e o acesso só de leitura;
   - a governança da IA: as chaves dos provedores, os modelos permitidos, os limites e o custo por app;
   - os servidores MCP do cliente.

   Nenhum app toca uma senha de banco ou uma chave de IA: pede ao mAIg, que confere a permissão e registra no log.
6. **O mAIg liga para fora.** Ele abre a conexão com a Maind e a mantém aberta, e as partes de fora dos apps
   respondem por ela. O cliente não abre porta de entrada nenhuma; só libera a saída para o endereço da Maind. O
   certificado do handshake vale dentro dessa conexão. Se ela cair, o mAIg reconecta sozinho e guarda o que estava
   em andamento.
7. **Marca Maind.** O mAIg leva a marca da Maind. Por enquanto, o desenho não considera apps vendidos com a marca
   de outra empresa (white label).
8. **Só apps da Maind, por enquanto.** O mAIg não recebe sistemas do próprio cliente nem apps de outras empresas, e
   não se vende sozinho: entra junto com um app da Maind. Reabrir quando um cliente pedir para ligar um sistema
   próprio ao mAIg.
9. **Várias organizações por instância, em qualquer infraestrutura.** O mAIg atende várias organizações
   (multi-tenant): uma instância, que é cada instalação física do mAIg, atende uma ou mais organizações, e cada
   organização tem o seu próprio conjunto de apps e de regras de governança. O mAIg roda na infraestrutura do cliente
   ou na da Maind. Numa mesma infraestrutura física pode haver mais de uma instância, para organizações diferentes.
10. **A Maind libera cada app por certificado; depois, dois passos.** Fechada a contratação, a Maind entrega um **kit de
    instalação** com um **certificado digital emitido pela Maind**, abaixo de uma autoridade certificadora pública e
    confiável. Instalado o kit, o mAIg conversa com um **servidor da Maind Tech** para o **handshake contratual**, que
    confere a contratação e libera o app. Liberado pela Maind, o app segue em dois passos: o **administrador da
    instância** o instala na instância, uma vez só, e o **owner de cada organização** o libera e configura para a dele.
11. **A contratação é por organização.** Cada organização contrata os próprios apps, e o handshake contratual libera o
    app só para ela. Um contrato comercial pode listar várias organizações da mesma empresa.
12. **O registro é do owner e de um auditor.** Dentro da organização, consultam o registro (log e auditoria) o
    **owner da organização** e um **auditor** que ele nomeia, que só lê o registro e não muda nenhuma configuração. O
    administrador da instância vê só o que é da instância (as instalações, o estado e as versões), nunca o registro das
    organizações.
13. **O fim do contrato não para o app sozinho.** O owner da organização é avisado antes do fim. O serviço só se
    encerra de dois jeitos: por uma **ação manual da Maind** ou quando o **certificado digital vence sem ser
    renovado**. Até lá, o app continua funcionando, o que dá à organização uma carência para renovar.
14. **Depois que um app para, a configuração dele fica guardada.** As permissões, os bancos e as IAs que o app usa e
    os ajustes do owner ficam guardados até a organização renovar, e o app volta como estava, ou até o owner apagar.
15. **O registro fica guardado enquanto o app estiver instalado.** Não há prazo de guarda: o registro de um app só é
    excluído quando o app é **desinstalado** do mAIg, e aí os dados dele são excluídos. Abre-se mão de: o volume do
    registro só cresce, e guardar dados de pessoas sem prazo pede cuidado com a lei de proteção de dados.
16. **A primeira versão é o núcleo que a v2.0 do Horus usa, no mesmo planejamento do middleware.** Entram a segurança,
    o login por usuário e senha e por Google, as permissões, o registro com o auditor, os certificados com o handshake
    contratual, a gestão dos apps, o cofre dos bancos, a governança da IA (chaves, modelos, limites e custo), várias
    organizações por instância e a conexão de dentro para fora. Os servidores MCP e o login da empresa ficam para a
    segunda versão, junto com a v2.1 do Horus. O planejamento que o Horus tinha para o middleware se mantém para o mAIg.
17. **O mAIg vem embutido no preço dos apps.** O cliente paga pelos apps, e o mAIg vem junto, sem linha própria na
    conta. Abre-se mão de: o preço de cada app precisa cobrir o custo do mAIg, e o primeiro app o carrega sozinho até
    chegar o segundo.
18. **Os sinais de cada objetivo vêm depois do primeiro cliente.** Como medir se cada objetivo foi atingido se define
    a partir de um caso real. Abre-se mão de: a primeira venda acontece sem um sinal combinado para observar nela.
