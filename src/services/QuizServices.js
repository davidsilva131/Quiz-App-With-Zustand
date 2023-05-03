const URL_API = 'https://opentdb.com/api.php'
const QUIZ_QUANTITY = 10
export const getQuiz = async () => {
  const url = `${URL_API}?amount=${QUIZ_QUANTITY}&type=multiple`
  const response = await fetch(url)
  const { results } = await response.json()
  const newResults = results.map(q => (
    {
      ...q,
      answers: [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5),
      correctAnswer: q.correct_answer
    }
  ))
  return newResults
}
