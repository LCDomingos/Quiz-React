import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const url = "http://localhost:3000/resumos"

const Home = () => {

  const [resumos, setResumos] = useState([])
  
  useEffect(() =>{
    async function fetchData(){
      const res = await fetch(url)
      const data = await res.json()

      setResumos(data)
    }

    fetchData()
  }, [])

  return (
    <div className="Home">
      <h1>O QUE É?</h1>
      <ul>
        {resumos.map((resumo) => (
          <li key={resumo.id}>
            <h2>
              <Link to={`/visualiza-resumo/${resumo.id}`}class="meu-link">{resumo.titulo}</Link>
            </h2>
            <h3>{resumo.subtitulo}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home
