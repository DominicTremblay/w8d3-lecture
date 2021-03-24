describe('todos', () => {
  beforeEach(() => {
    // visit a page
    cy.visit('/');
  });

  it('should have the focus when it loads', () => {
    // target the element on the page
    cy.get('#todo-input').should('have.focus');

    // assertion
  });

  it('should accept a new input string', () => {
    cy.get('#todo-input')
      .type('Get a coffee')
      .should('have.value', 'Get a coffee');
  });

  it('should add a new todo', () => {
    cy.intercept('POST', '/api/todos', {
      statusCode: 201,
      body: {
        id: 4,
        task: 'Go for a walk!',
        completed: false,
      },
    }).as('addTodo');

    cy.get('#todo-input').type('Go for a walk!').type('{enter}');

    cy.wait('@addTodo').its('response.body').should('deep.equal', {
      id: 4,
      task: 'Go for a walk!',
      completed: false,
    });

    // check the length of the list items

    cy.get('.list-group-item').should('have.length', 4);

    // check that the last label has the string 'Go for a walk!'
    cy.get('label').last().should('contain', 'Go for a walk!');
  });

  it('should not add an empty todo', () => {
    cy.intercept('POST', '/api/todos', {
      statusCode: 201,
      body: '',
    }).as('addTodo');

    cy.get('#todo-input').type('{enter}');

    // check the lenght of the list => unchanged
    cy.get('.list-group-item').should('have.length', 3);

    // check for the right error message

    cy.get('#error').should('contain', 'Please enter a todo');
  });

  it('Should delete a todo', () => {
    cy.intercept('DELETE', '/api/todos', {
      statusCode: 202,
    }).as('deleteTodo');

    cy.get('.remove-todo').last().click();

    cy.wait('@deleteTodo').its('response.statusCode').should('eq', 202);

    // check the lenght of list => 2
    cy.get('.list-group-item').should('have.length', 2);

    // we should not see Wash the car anymore
    cy.get('.list-group-item > label')
      .contains('Wash the car')
      .should('not.exist');
  });

  it('should check the todo', () => {

    cy.get('.list-group > :nth-child(1) > input').check();

    cy.get('.list-group > :nth-child(1) > label').should('have.css','text-decoration', 'line-through solid rgb(255, 0, 0)');

  })
});
