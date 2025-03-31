# FRONTEND - ACOMPANHAMENTO DE OCORRÊNCIAS DE ROTA

---

## PROJETO PORTFÓLIO

Projeto em desenvolvimento para uso dos profissionais do controle e monitoramento de entregas das revendas ou CDDs Ambev

- ideia inicial do frontend é acomodar todas as areas que possuem relacionamento com o setor logístico da revenda, seja o motorista entregando a gestão gerando resultados para os motoristas e monitoramento da rota ou o cliente sabendo onde está sua entrega, e o comercial sabendo como estão as entregas dos seus clientes.

## Paços para conclusão do desenvovimento do site

---

<!-- Insira aqui os passos que ainda precisam ser concluídos -->

---

## Sprint - Roadmap de Desenvolvimento

### Sprint 1: Criação do Layout e Estrutura Inicial

- [x] Estruturação do Header (Global Header X Local Header)
- [x] Implementação das Sidebars (User Sidebar X Side Menu Bar)
- [x] Configuração do Wrapper para o conteúdo e scroll
- [ ] _[Lacuna para futuras tarefas]_

### Sprint 2: Desenvolvimento das Páginas

- **PAGE 1 - Dashboard:**
  - [ ] Exibir informações de rota (entregas totais x realizadas)
  - [ ] _[Detalhamento do tempo em rota, percentual de devolução, etc.]_
- **PAGE 2 - Monitoramento:**
  - [ ] Implementação do dashboard visual com modais
  - [ ] _[Implementação dos formulários e funções específicas]_
- **PAGE 3 -**
  - [ ] _[Conteúdo a ser definido]_

### Sprint 3: Integração e API

- [ ] Criação da API Universal (apartada)
- [ ] Integração da API com o Frontend
- [ ] Inserção das bases da revenda

### Sprint 4: Manutenção e Expansão

- [ ] Expansão para Mobile
- [ ] Manutenção contínua e futuras atualizações
- [ ] _[Lacuna para melhorias futuras]_

---

## Especificações Técnicas

<!-- Insira as especificações técnicas do projeto -->

- **Tecnologias Utilizadas:** _[Placeholder]_
- **Dependências:** _[Placeholder]_
- **Versões:** _[Placeholder]_

---

## Mapa dos Caminhos dos Arquivos

```bash
Ocorrecias/
├── .gitignore
├── .prettierrc
├── eslint.config.js
├── estrutura_projeto.txt
├── index.html
├── package.json
├── README.md
├── vite.config.js
└── src/
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    ├── components/
    │   ├── background.jsx
    │   ├── Header.jsx
    │   ├── navActions.jsx
    │   ├── pageElements.jsx
    │   ├── sideMenuBar.jsx
    │   └── userSideBar.jsx
    ├── pages/
    │   └── dashboard.jsx
    ├── routes/
    │   └── router.jsx
    └── styles/
        ├── colors.css
        ├── especifcComponents.css
        └── var/
            └── variables.css
```

---

## CRIAÇÃO DO FRONTEND

### DESENVOLVIMENTO DO LAYOUT

- Layout base das páginas:
  - Header: Global Header X Local Header
  - Sidebars: User Sidebar X Side Menu Bar
  - Wrapper: Segura o conteúdo e permite o scroll
- Formatação dos locais onde ficarão as variáveis e dados
- Criação das páginas a partir dos layouts base

#### Páginas (Gestão):

##### PAGE 1 - Dashboard

Contém as informações de rota com a quantidade de entregas totais x quantidade de entregas realizadas

- Tempo em rota das equipes com quais equipes chegaram e qual o percentual de TR baseado no tempo máximo em rota (9h20)
- Percentual de devolução PDV x percentual de devolução HL
- Aderência ao raio das equipes (devolução x entregas)
- Percentual reversão com base nas ocorrências tratadas pelo monitoramento
- Lista das devoluções x motivo Global
- Lista das equipes com maior peso pendente para entregar

##### PAGE 2 - Monitoramento

Contém as ferramentas para análise das rotas (alimentado por relatórios)

- Dashboard de visualização da gestão, incluindo:
  - Uma onePage com diversos modais ocultos que se comunicam com os controllers das APIs para salvar dados no banco e, futuramente, gerar relatórios em CSV.
- Percentual de conclusão da rota do dia
- Acompanhamento de Entregas (alimentado pelo relatório do Bees Delivery) – página do LocalHeader  
  Exibe visualização dos motoristas, peso restante, HL restante e entregas restantes.
- Acompanhamento de Devoluções (alimentado exclusivamente por ocorrências manuais) – página do LocalHeader  
  Ao clicar em "adicionar ocorrência", um modal de formulário aparece e deve ser preenchido com as informações do pedido; ao enviar, inicia um timer para a tratativa (limitado pelo tempo de ANS do pedido).
- Criar Ocorrência (alimentado por uma base previamente formulada com as informações do dia) – modal acessado por um botão no dashboard e também pelo LocalHeader  
  Cria ocorrência de devolução, separada por nota do cliente, NF informada no formulário e contabilizada no percentual de NF devolução.
- NF Devolução Parcial (acesso pelo LocalHeader, pequena página com outras funções)
  - Registrar devolução parcial:  
    Inclui um formulário semelhante ao da criação da ocorrência de devolução, porém com aba para itens e quantidade; ao enviar, não há contagem, apenas registro e geração de uma cópia do texto formatado para envio por e-mail.

##### PAGE 3 -

<!-- Conteúdo a ser inserido futuramente para a PAGE 3 -->

---

## CRIAÇÃO DA API UNIVERSAL (apartada)

<!-- Detalhes e tarefas pendentes para a criação da API Universal -->

## INTEGRAÇÃO DA API AO FRONTEND

<!-- Detalhes e tarefas pendentes para integração da API ao Frontend -->

## IMPLEMENTAÇÃO E INSERSÃO DAS BASES DA REVENDA

<!-- Detalhes e tarefas pendentes para a implementação das bases da revenda -->

## MANUTENÇÃO E EXPANSÃO PARA MOBILE

<!-- Detalhes e tarefas pendentes para manutenção e expansão para mobile -->

---
