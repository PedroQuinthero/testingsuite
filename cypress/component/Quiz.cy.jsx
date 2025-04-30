import Quiz from '../../client/src/components/Quiz'
import questions from '../fixtures/questions.json'

describe('Quiz component (unit)', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/questions/random', questions).as('getQuestions')
  })

  it('runs through a two-question quiz and shows the score', () => {
    cy.mount(<Quiz />)

    // 1 start
    cy.contains('Start Quiz').click()
    cy.wait('@getQuestions')
    cy.contains(questions[0].question).should('be.visible')

    // 2 answer first question
    cy.contains('button', '1').click()  // first answer is correct
    cy.contains(questions[1].question).should('be.visible')

    // 3 answer second question
    cy.contains('button', '1').click()

    // 4 quiz finished
    cy.contains('Quiz Completed').should('be.visible')
    cy.contains(`Your score: 2/${questions.length}`).should('be.visible')
  })
})
