describe('Tech Quiz – happy path', () => {
  beforeEach(() => {
    // intercept ANY request that ends with /api/questions/random
    cy.intercept(
      {
        method: 'GET',
        url: /\/api\/questions\/random(\?.*)?$/   
      },
      { fixture: 'questions.json' }
    ).as('getQuestions')
  })
  
    it('lets a user complete a quiz and start a new one', () => {
      cy.visit('/')                 // baseUrl set in config
      cy.contains('Start Quiz').click()
  
      // answer the two fixture questions
      cy.get('button.btn.btn-primary').first().click()  // Q1
      cy.get('button.btn.btn-primary').first().click()  // Q2
  
      // score page appears
      cy.contains('Quiz Completed').should('be.visible')
      cy.contains('Take New Quiz').click()
  
      // back to landing state
      cy.contains('Start Quiz').should('be.visible')
    })
  })
  