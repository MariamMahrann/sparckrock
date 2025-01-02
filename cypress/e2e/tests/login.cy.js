/* I will write 2 test cases to test login 
https://practicetestautomation.com/practice-test-login/ */

import creds from "../../fixtures/creds.json"

describe('template spec', () => {
  it('passes', () => {
    cy.login(creds.email, creds.password)

  })
})