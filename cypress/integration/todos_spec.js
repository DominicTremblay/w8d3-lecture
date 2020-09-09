describe('Todos', () => {
  
  beforeEach(() => {
    cy.visit('/')
  });
  
  it ('should receive the focus when loading', () => {
    
    
    
    cy.get('#todo-input').should('have.focus');
    
  })
  
  it('should accept a new todo string', () => {
    
    
    // type Get a coffee in the input
    cy.get('#todo-input').type('Get a coffee').should('have.value', 'Get a coffee')
    
  });
  
  it('should add a new todo', () => {
    
    cy.server();
    cy.route({
      method: 'POST',
      url: '/api/todos',
      response: {
        id: 4,
        task: 'Get a coffee',
        completed: false
      }
    })
        
    // type Get a coffee in the input
    cy.get('#todo-input').type('Get a coffee').type('{enter}')
    
    // check that the new todo has been added
    cy.get('.list-group-item').should('have.length', 4);
    cy.get('#todo-input').should('have.value', '')
    
  });

  it('should not add a new todo when empty',() => {

    cy.server();
    cy.route({
      method: 'POST',
      url: '/api/todos',
      response: {
        id: 2,
        task: 'Get a coffee',
        completed: false
      }
    })

    cy.get('#todo-input').type('{enter}');
    cy.get('.list-group-item').should('have.length', 3);
    cy.get('#error').should('have.text','Todo cannot be empty!');

  });

  it.only('should delete a todo', () => {

    cy.server();
    cy.route({
      method: 'DELETE',
      url: '/api/todos/1',
      response: {
        msg: `Todo with id 1 was deleted`
      }
    })

    
    cy.get('.remove-todo').first().click()
    cy.get('.list-group-item').should('have.length', 2);
    cy.get('label').contains('Walk the Dog').should('not.be.visible')
  });

  
});
  
  
  