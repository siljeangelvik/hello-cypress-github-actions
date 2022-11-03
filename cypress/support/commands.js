Cypress.Commands.add('addTask', (task = 'Take a shower') => {
    cy.get('#list_tasks_attributes_0_description').type(`${task} {enter}`)
})