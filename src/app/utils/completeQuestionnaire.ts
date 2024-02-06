export default function completeQuestionnaire(
  answers: boolean[],
  questions: string[],
) {
  console.log(answers);

  const questionnaireResults = answers.map((answer, index) => {
    const question = questions[index];
    return { [question]: answer };
  });

  console.log(questionnaireResults);
}
