describe('Formulario de consultoria', () => {

  it('Deve solicitar consultoria individual', () => {

    cy.iniciar()
    cy.submeterLogin('papito@webdojo.com', 'katana123')

    cy.goTo('Formulários', 'Consultoria')

    cy.get('input[placeholder="Digite seu nome completo"]').type('Fernando Papito')
    cy.get('input[placeholder="Digite seu email"]').type('papito@teste.com.br')
   
    cy.get('input[placeholder="(00) 00000-0000"').type('(11)99999-1000')
    .should('have.value', '(11) 99999-1000')
   
   
    cy.contains('label', 'Tipo de Consultoria')
    .parent()
    .find('select')
    .select('In Company')

   cy.contains('label', 'Pessoa Física')
  .find('input')
  .click()
  .should('be.checked')

cy.contains('label', 'Pessoa Jurídica')
  .find('input')
  .should('not.be.checked')

    cy.contains ('label', 'CPF')
    .parent()
    .find('input')
    .type('65602530070')
    .should('have.value','656.025.300-70')

 const discoveryChannels = [
  'Instagram',
  'Udemy',
  'LinkedIn',
  'YouTube',
  'Indicação de Amigo'
]

discoveryChannels.forEach((channel) => {
  cy.contains('label', channel)
    .find('input')
    .check()
    .should('be.checked')
})
cy.get('input[type="file"]')
  .selectFile('cypress/fixtures/document.pdf', { force: true })

cy.get('textarea[placeholder="Descreva mais detalhes sobre sua necessidade"]')
      .type('Lorem ipsum teste')

 cy.get('input[placeholder="Digite uma tecnologia e pressione Enter"]')
      .type('Pessoa')
      .type('{enter}')

    cy.contains('label', 'Tecnologias')
      .parent()
      .contains('span', 'Pessoa')
      .should('be.visible')

      const techs = [
      'Cypress',
      'Selenium',
      'WebDriverIO',
      'Playwright',
      'Robot Framework'
    ]

    techs.forEach((tech) => {
      cy.get('input[placeholder="Digite uma tecnologia e pressione Enter"]')
        .type(tech)
        .type('{enter}')

      cy.contains('label', 'Tecnologias')
        .parent()
        .contains('span', tech)
        .should('be.visible')
    })

    cy.contains('label', 'termos de uso')
      .find('input')
      .check()

    cy.contains('button', 'Enviar formulário')
      .click()

 cy.contains('Sucesso!')
  .should('be.visible')

cy.contains('Sua solicitação de consultoria foi enviada')
  .should('be.visible')

})
it('Deve verificar os campos obrigatórios', () => {

  cy.iniciar()
  cy.submeterLogin('papito@webdojo.com', 'katana123')

  cy.goTo('Formulários', 'Consultoria')

  cy.contains('button', 'Enviar formulário')
    .click()

  cy.contains('Campo obrigatório')
    .should('be.visible')
    .and('have.class', 'text-red-400')
    .and('have.css', 'color', 'rgb(248, 113, 113)')

  cy.contains('Campo obrigatório')
    .should('be.visible')
    .and('have.class', 'text-red-400')
    .and('have.css', 'color', 'rgb(248, 113, 113)')

  cy.contains('Você precisa aceitar os termos de uso')
    .should('be.visible')
    .and('have.class', 'text-red-400')
    .and('have.css', 'color', 'rgb(248, 113, 113)')

})
})


