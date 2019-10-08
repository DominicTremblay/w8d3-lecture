describe('New Todo', () => {

beforeEach(() => {
 cy.visit('/');
})
  
  
it("receives the focus when the page loads", () => {
 
  cy.get('#todo-input').focused();
});

it('accepts a value for a new todo', () => {
 
  cy
    .get('#todo-input')
    .type('Learn React')
    .should('have.value', 'Learn React')
    .type('{enter}');

  })
  
it('adds a new todo to the list', () => {
   
    // Stub an axios request

      cy.server(),
      cy.route('POST', '/api/todos', {
        id: 2,
        task: "Go for a run",
        completed: false
      })

      cy.get('#todo-input')
        .type("Get a coffee")
        .type('{enter}')
        .should('have.value',"");

    
      cy
        .get('.list-group li')
        .should('have.length', '2');
});

it('should not submit an empty todo', () => {
  
  cy.get('#todo-input')
    .type('{enter}')

  cy
    .get('#error')
    .should('to.contain', 'Please, submit a todo');
})

it.only('should delete a todo', () => {
  cy.server();
  cy.route('DELETE', '/api/todos/1', {message: 'todo has been deleted'});

  cy.get('.remove-todo').first().click();

  cy
    .contains('label', 'Walk the Dog')
    .should('not.be.visible');
  })

});

