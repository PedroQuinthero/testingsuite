interface Answer {
  text: string;
  isCorrect: boolean;
}

interface Question {
  question: string;
  answers: Answer[];
}

export const mockQuestions: Question[] = [
  {
    question: "What is 2 + 2?",
    answers: [
      { text: "3", isCorrect: false },
      { text: "4", isCorrect: true },
      { text: "5", isCorrect: false },
      { text: "22", isCorrect: false },
    ],
  },
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Berlin", isCorrect: false },
      { text: "Paris", isCorrect: true },
      { text: "Rome", isCorrect: false },
      { text: "Madrid", isCorrect: false },
    ],
  },
];