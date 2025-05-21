//verifying that the "Start Quiz" button appears, and it doesn't actually trigger the getQuestions() fetch call because that only happens when the button is clicked.

import Quiz from "../../client/src/components/Quiz";
import { mount } from "cypress/react";

describe("Quiz Component", () => {
  it("renders a Start Quiz button before the quiz begins", () => {
    mount(<Quiz />);
    cy.contains("Start Quiz").should("be.visible");
  });
});