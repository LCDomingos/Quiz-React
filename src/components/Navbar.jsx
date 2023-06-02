import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Início</Link> <br />
      <Link to="/quiz-verso-frontend">Quiz Front-End</Link> <br />
      <Link to="/quiz-verso-backend">Quiz Back-End</Link> <br />
      <Link to="/quiz-verso-banco-de-dados">Quiz Banco de Dados</Link> <br />
    </nav>
  );
}

export default Navbar
