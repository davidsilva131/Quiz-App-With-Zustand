import { create } from 'zustand'
import { getQuiz } from '../services/QuizServices'
import { devtools, persist } from 'zustand/middleware'

export const useQuestionsStore = create(devtools(
  persist(
    (set, get) => ({
      loading: true,
      questions: [],
      currentQuestion: 0,
      fetchQuestions: async () => {
        const questions = await getQuiz()
        set({ questions }, false, 'FETCH_QUESTIONS')
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
