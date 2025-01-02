Cypress.on('uncaught:exception', (err, runnable) => {
    // Prevent failing the test on uncaught exceptions
    return false;
  });