🧪 Cypress Test Automation

Este repositório contém testes automatizados end-to-end (E2E) desenvolvidos com Cypress para validar fluxos importantes de uma aplicação web.

Os testes foram criados como parte dos meus estudos em Quality Assurance e automação de testes, utilizando a aplicação WebDojo como ambiente de prática.

🚀 Cenários automatizados
🔐 Login

Testes automatizados para validar autenticação do usuário:

✅ Login com credenciais válidas

❌ Login com senha inválida

❌ Login com email inválido

🔎 Validação de mensagens de erro

Exemplo de teste:

cy.submeterLogin('papito@webdojo.com', 'katana123')

cy.get('[data-cy="user-name"]')
  .should('be.visible')
  .and('have.text', 'Fernando Papito')
📝 Formulário de Consultoria

Automação completa do fluxo de envio do formulário:

Preenchimento de campos

Upload de arquivo

Seleção de tecnologias

Marcação de checkboxes

Validação de envio com sucesso

Teste negativo de campos obrigatórios

🛠️ Tecnologias utilizadas

Cypress

JavaScript

Node.js

Git & GitHub

▶️ Como executar o projeto

Instalar dependências:

npm install

Executar Cypress com interface:

npx cypress open

Executar testes no terminal:

npx cypress run
📚 Observação

Este projeto foi desenvolvido para fins educacionais, com o objetivo de praticar automação de testes utilizando Cypress.

A aplicação WebDojo foi utilizada apenas como sistema sob teste.

👩‍💻 Autora

Vitória Lima

📎 LinkedIn
https://www.linkedin.com/in/vitória-aparecida-lima
