import { BrowserRouter, Routes, Route } from "react-router-dom"
import QuizFrontEnd from "./pages/QuizFrontEnd"
import QuizBackEnd from "./pages/QuizBackEnd"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import VisualizaResumo from "./pages/VisualizaResumo"
import QuizBancoDados from "./pages/QuizBancoDados"

function App() {

  return (
    <>
    <BrowserRouter>
    <h1>MultiQuizVerso</h1>
    <Navbar />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='visualiza-resumo/:id' element={<VisualizaResumo />} />
      <Route path='/quiz-verso-frontend' element={<QuizFrontEnd />} />
      <Route path='/quiz-verso-backend' element={<QuizBackEnd />} />
      <Route path='/quiz-verso-banco-de-dados' element={<QuizBancoDados />} />

    </Routes>

    </BrowserRouter>
     
    </>
  )
}

export default App
