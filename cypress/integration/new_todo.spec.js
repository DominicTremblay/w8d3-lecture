describe('Todos', () => {
  beforeEach(() => {
    // visit the homepage
    cy.visit('/');
  });

  it('should have the focus when the page loads', () => {
    cy.get('#todo-input').focused();
  });

  it('should accept a new todo input', () => {
    // typing Get a coffee checking the box does have the content
    cy.get('#todo-input')
      .type('Get a coffee')
      .should('have.value', 'Get a coffee');
  });

  it('should not accept an empty todo', () => {
    cy.get('#todo-input').type('{enter}');

    cy.get('#error').should('have.text', 'Please provide a valid todo');
  });

  it('should add a new todo', () => {
    // stubbing a network request
    cy.server();
    cy.route({
      method: 'POST',
      url: '/api/todos',
      response: {
        id: 2,
        task: 'Get a coffee',
        completed: false,
      },
    });

    cy.get('#todo-input').type('Get a coffee').type('{enter}');

    // check that the todo input resets to ''

    cy.get('#todo-input').should('have.value', '');

    // ensure that we have 2 list items in the list
    cy.get('.list-group li').should('have.length', 2);
  });

  it.only('should delete a todo', () => {
    cy.server();
    cy.route({
      url: '/api/todos/1',
      method: 'DELETE',
      response: { msg: 'Todo has been deleted' },
    });

    cy.get('.remove-todo').first().click();

    cy.get('.list-group li').should('have.length', 2);

    cy.contains('label', 'Walk the Dog').should('not.be.visible');
  });
});
