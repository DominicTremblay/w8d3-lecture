describe('todos', () => {
  beforeEach(() => {
    // visit the page
    cy.visit('/');
  });

  it('Should have the focus', () => {
    // check that the input has the focus
    cy.focused();

    cy.get('#todo-input').should('have.focus');
  });

  context('New Todo', () => {
    it('Should accept user input', () => {
      cy.get('#todo-input')
        .type('Get a coffee')
        .should('have.value', 'Get a coffee');
    });

    it('Should add a new todo', () => {
      cy.server();
      cy.route('POST', '/api/todos', {
        id: 2,
        task: 'Get a coffee',
        completed: false,
      });

      cy.get('#todo-input')
        .type('Get a coffee')
        .type('{enter}')
        .should('have.value', '');

      // check that the length of the list is 2
      cy.get('.list-group-item').should('have.length', 2);
    });

    it('Should not add an empty todo', () => {
      cy.get('#todo-input').type('{enter}');

      cy.get('#error').should('have.text', 'Please type a todo');
    });
  });

  context('Deleting Todo', () => {
    it('Should delete a todo', () => {
      cy.server();
      cy.route('DELETE', '/api/todos/1', {
        msg: `Todo with id 1 has been deleted`,
      });

      cy.get('.remove-todo')
        .first()
        .click();
      cy.get('.list-group-item').should('have.length', 1);

      cy.contains('label', 'Walk the Dog').should('not.be.visible');
    });
  });

  context('Managing Todo', () => {
    it.only('Should be checked when clicked', () => {
      cy.get('.list-group-item > input')
        .first()
        .check()
        .should('have.attr', 'completed');
    });
  });
});
