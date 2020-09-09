# End-to-End Testing with Cypress

## Topics

- Identify the difference between Jest and Cypress
- Install and configure Cypress
- Write End-to-End tests with Cypress

- Goal of testing

Test from start to finish how a user wil use the app

- JEST

  - unit testing > pretty quick
  - cannot test what Cypress is testing

- Cypress

  - Slower to do
  - cannot performed by other kind of tests
  - Test the UI
  - more expansive


## Difference Between Jest and Cypress

- [JEST vs Cypress](https://docs.cypress.io/faq/questions/general-questions-faq.html#So-what-benefits-would-one-get-for-converting-one%E2%80%99s-unit-tests-from-Karma-or-Jest-to-Cypress)

## Installing Cypress

`npm install -g cypress`

to install locally

`npm install cypress --save-dev`

Add the script to `package.json`

`"cypress": "cypress open -P ."`

Add `cypress.json` to the project with the following content:

```json
{
  "baseUrl": "http://localhost:3000",
  "viewportWidth": 1280,
  "viewportHeight": 1200
}
```

- Delete the exercise files in the `cypress/integration/` folder

## Create Tests

### Test template

```js
describe('Some Functionality', () => {

  it "should test something", () => {

  }

  it "should test something", () => {

  }

})
```

### Tests

Check the `cypress/integration` to find the tests we did
