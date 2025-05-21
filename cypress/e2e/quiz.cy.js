// cypress/e2e/tech-quiz.cy.ts

// 1. Define types at the top
type Answer = {
  text: string;
  isCorrect: boolean;
};

type Question = {
  question: string;
  answers: Answer[];
};

// 2. Let Cypress know that `this.mockData` will be typed
describe("Tech Quiz App", () => {
  beforeEach(function () {
    cy.fixture("questions").then((mockQuestions: Question[]) => {
      // Save mock data with type
      this.mockData = mockQuestions;

      cy.intercept("GET", "/api/questions/random", {
        statusCode: 200,
        body: mockQuestions,
      }).as("getQuestions");
    });

    cy.visit("/");
  });

  it("runs through all questions and shows correct final score", function () {
    cy.contains("Start Quiz").click();
    cy.wait("@getQuestions");

    // 3. Type the mock data to avoid 'any' error on q and a
    const questions: Question[] = this.mockData;
    let score = 0;

    questions.forEach((q) => {
      const correctAnswer = q.answers.find((a) => a.isCorrect);

      if (correctAnswer) {
        cy.contains(".alert", correctAnswer.text).prev("button").click();

        score++;
      }
    });

    cy.contains("Quiz Completed").should("be.visible");
    cy.contains(`Your score: ${score}/${questions.length}`).should(
      "be.visible"
    );
  });
});