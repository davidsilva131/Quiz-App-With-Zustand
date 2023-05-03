import { create } from 'zustand'
import { getQuiz } from '../services/QuizServices'
import { devtools, persist } from 'zustand/middleware'
import confetti from 'canvas-confetti'

export const useQuestionsStore = create(devtools(
  persist(
    (set, get) => ({
      loading: false,
      questions: [],
      currentQuestion: 0,
      fetchQuestions: async () => {
        const questions = await getQuiz()
        set({ questions }, false, 'FETCH_QUESTIONS')
      },
      selectAnswer: (question, answer) => {
        const { questions } = get()
        const { currentQuestion } = get()
        const newQuestions = structuredClone(questions)
        const questionInfo = newQuestions[currentQuestion]
        const isCorrectUserAnswer = questionInfo.correctAnswer === answer
        if (isCorrectUserAnswer) confetti()

        newQuestions[currentQuestion] = {
          ...questionInfo,
          isCorrectUserAnswer,
          userSelectedAnswer: answer
        }

        set({ questions: newQuestions }, false, 'SELECT_ANSWER')
      },
      goNextQuestion: () => {
        const { currentQuestion, questions } = get()
        const nextQuestion = currentQuestion + 1

        if (nextQuestion < questions.length) {
          set({ currentQuestion: nextQuestion }, false, 'GO_NEXT_QUESTION')
        }
      },
      goPreviousQuestion: () => {
        const { currentQuestion } = get()
        const previousQuestion = currentQuestion - 1

        if (previousQuestion >= 0) {
          set({ currentQuestion: previousQuestion }, false, 'GO_PREVIOSU_QUESTION')
        }
      },
      reset: () => {
        set({ currentQuestion: 0, questions: [] }, false, 'RESET')
      }
    }),
    {
      name: 'questions'
    }
  ))
)
