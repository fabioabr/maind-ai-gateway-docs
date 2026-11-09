# Visão e objetivos do Maind AI Gateway (mAIg)

Situação: rascunho para o dono da Maind revisar · Data: 08/11/2026

## Em uma frase

O Maind AI Gateway, ou mAIg, é uma plataforma da Maind que a empresa cliente instala dentro da própria rede, para que os
produtos da Maind usem os dados e a inteligência artificial (IA) da empresa sem que o banco de dados fique exposto para
fora.

## O problema

Todo projeto com IA depende de dados: uma IA que responde perguntas sobre as vendas precisa ler o banco de vendas. Só que a
maioria das empresas não deixa um banco visível de fora, nem atrás de um firewall (o muro de proteção da rede) ou de uma
VPN (um túnel protegido entre duas redes).

Para a Maind, isso vira uma barreira em cada venda. Cada produto novo passa de novo pela aprovação de segurança do
cliente: reuniões com a TI, análise do jurídico, testes e liberação de rede. Essa aprovação leva semanas e muitas vezes
decide se a Maind entra ou não no cliente.

## A visão

Em vez de pedir à empresa que abra o banco para fora, a Maind leva para dentro dela um componente que lê o banco por ela: o
mAIg. Ele lê o que precisa, pede à IA o que precisa e entrega para fora só o resultado. A TI do cliente controla o que ele
pode ler, quais IAs pode usar e quais produtos da Maind podem pedir alguma coisa a ele.

A aprovação de segurança acontece **uma vez**, para o mAIg. Depois disso, cada produto da Maind entra nele como um **app**.
O Maind Horus é o primeiro; o Maind Doc, assistente para gerar documentos de projetos corporativos com IA, pode ser o
próximo.

<!-- A analogia vai num destaque (callout) quando a página virar HTML. -->
> **Como um prédio comercial.** O prédio tem portaria, crachás, câmeras, livro de visitas e um cofre com as chaves. As
> empresas que alugam salas não montam portaria própria: usam a do prédio. O mAIg é o prédio, e os produtos da Maind são
> as empresas que alugam as salas. **Onde a analogia para:** quem manda na portaria do mAIg é a TI do cliente, e não a
> Maind, que fabricou o prédio.

## Os objetivos

1. **Usar os dados e a IA do cliente sem expor o banco.** Os dados ficam na rede do cliente, o mAIg só lê e nunca altera
   nada, e para fora vai só o resultado que cada app precisa. A empresa não abre nenhuma porta de entrada na rede. Isso
   vale por inteiro quando o mAIg roda na infraestrutura do cliente; na da Maind, o banco precisa ser alcançável por
   ela, em troca de a empresa não instalar nada.
2. **Aprovar a segurança uma vez só.** Depois que o mAIg está instalado e aprovado, um novo app da Maind entra sem uma
   nova rodada de aprovação do zero. A TI só libera o app e diz o que ele pode ler.
3. **Dar à TI do cliente o controle num lugar só.** Quais bancos cada app lê, quais IAs usa, quanto gasta, quem pediu o
   quê e quando: tudo se configura e se consulta no mAIg, para todos os apps.
4. **Servir a qualquer produto da Maind do mesmo jeito.** O que é comum a todo app (segurança, login, registro, acesso aos
   dados e à IA) vem pronto no mAIg, e cada app traz só o que é dele. O Horus é o primeiro app, e não um caso especial.
5. **Ser a porta de entrada da Maind nos clientes.** A venda difícil acontece uma vez, e cada produto seguinte fica mais
   fácil de vender, porque entra por uma porta já aberta e aprovada. É o jeito de crescer num cliente chamado "entrar e
   expandir". Por isso o mAIg leva a marca Maind, e por isso ele vem embutido no preço dos apps, sem custo a mais na
   primeira venda.

## Como funciona, em poucas linhas

- **O núcleo:** o mAIg traz de fábrica a segurança, o login e as permissões, o registro de tudo o que acontece (log e
  auditoria), os certificados que identificam cada app, a gestão dos apps, o cofre das senhas dos bancos, as regras de uso
  da IA (chaves, modelos permitidos, limites e custo por app) e os servidores de ferramentas da empresa (MCP). Nenhum app
  toca uma senha de banco ou uma chave de IA: pede ao mAIg, que confere a permissão e anota no registro.
- **O app:** tem uma parte fora do mAIg, registrada com certificado e permissões (no Horus, a nuvem da Maind, com as telas),
  e um módulo que roda isolado dentro do mAIg (no Horus, onde a pergunta vira resposta).
- **Várias organizações:** cada instalação física do mAIg, chamada instância, atende uma ou mais organizações, e cada
  organização tem o seu próprio conjunto de apps e de regras de governança. O mAIg roda na infraestrutura do cliente ou
  na da Maind, e uma mesma infraestrutura física pode ter mais de uma instância, para organizações diferentes.
- **Os papéis:** o **administrador da instância** cuida da instalação física (instala os apps e vê o estado e as
  versões, nunca o que é das organizações); o **owner da organização** libera e configura os apps, os bancos, a IA e as
  pessoas da organização dele; e um **auditor**, nomeado pelo owner, só lê o registro da organização.
- **A contratação de um app:** fechado o contrato, a Maind entrega um kit de instalação com um certificado digital
  emitido por ela, abaixo de uma autoridade certificadora pública e confiável. Instalado o kit, o mAIg confirma a
  contratação com um servidor da Maind Tech (o handshake contratual), e o app é liberado para a organização que o
  contratou: a contratação é por organização. Depois, o administrador da
  instância o instala na instância, e o owner de cada organização o libera e configura para a dele.
- **O fim de um contrato:** o owner da organização é avisado antes. O app só para por uma ação manual da Maind ou
  quando o certificado digital vence sem ser renovado; até lá, a organização tem uma carência para renovar. Depois que
  o app para, a configuração dele fica guardada até a organização renovar ou o owner apagar.
- **A guarda do registro:** o registro fica guardado enquanto o app estiver instalado. Quando o app é desinstalado do
  mAIg, os dados dele são excluídos.
- **A conexão:** o mAIg liga para fora, abre a conexão com a Maind e a mantém aberta. A TI só libera a saída para o
  endereço da Maind. Se a conexão cai, o mAIg religa sozinho e guarda o que estava em andamento.

## A primeira versão

A primeira versão do mAIg sai junto com a versão 2.0 do Horus, o primeiro app, no mesmo planejamento que o Horus tinha
para o middleware. Ela traz o núcleo que o Horus usa nessa versão: a segurança, o login por usuário e senha e por Google,
as permissões, o registro com o auditor, os certificados com o handshake contratual, a gestão dos apps, o cofre dos
bancos, a governança da IA, várias organizações por instância e a conexão de dentro para fora.

Os servidores de ferramentas da empresa (MCP) e o login com o sistema de identidade da própria empresa ficam para a
segunda versão do mAIg, junto com a versão 2.1 do Horus, que é quando o Horus passa a usá-los.

## O que fica de fora

- O mAIg não é parte do Horus: é um produto à parte, com código, documentação, versões e decisões próprios.
- O mAIg não leva os dados da empresa para a Maind e não altera os bancos da empresa.
- Por enquanto, só os apps da Maind entram no mAIg. Ele não recebe sistemas do próprio cliente nem apps de outras
  empresas, e não se vende sozinho: entra junto com um app da Maind.
- Por enquanto, o desenho não considera a venda de apps com a marca de outra empresa (white label).

## O que ainda está em aberto

- **Como medir cada objetivo:** que sinal mostra que cada um foi atingido. Falta o dono da Maind decidir.

## De onde vem este documento

As decisões do dono da Maind em 08/11/2026, registradas no [README](README.md) deste repositório e, do lado do Horus, nas
decisões `D-294` a `D-297` do backlog estratégico do Horus. O que o Horus já decidiu sobre o middleware (`D-258` a
`D-293`) vale como ponto de partida do mAIg.
