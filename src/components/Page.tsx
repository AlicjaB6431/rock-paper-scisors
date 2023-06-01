import { Route, Router, Routes } from 'react-router-dom'

import RockPaperScisorsApp from '../apps/rock-paper/RockPaperScisorsApp'
import CreateTask from '../apps/to-do-list/CreateTask'
import QuizApp from '../apps/quiz/QuizApp'
import QuizzQuestions from '../apps/quiz/QuizzQuestions'
import QuizResult from '../apps/quiz/QuizResult'

const Page = () => {
  return (
    <Routes>
      <Route
        path='/rock-paper-scisors'
        element={<RockPaperScisorsApp />}
      ></Route>
      <Route
        path='/to-do-list'
        element={<CreateTask />}
      ></Route>
      <Route
        path='/quiz-app'
        element={<QuizApp />}
      ></Route>

      <Route
        path='/quiz-app-questions'
        element={<QuizzQuestions />}
      ></Route>
      <Route
        path='/quiz-app-results'
        element={<QuizResult />}
      ></Route>
    </Routes>
  )
}

export default Page

// tutuaj tylko importuje wszystko i przekaazuje na jakich ścieżkach mas ię wyświetlać
