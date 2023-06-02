import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const VisualizaResumo = () => {

  const {id} = useParams()

  const url = `http://localhost:3000/resumos/${id}`


  const [visualizaResumo, setVisualizaResumo] = useState({})

  useEffect(() => {
    async function fetchData(){
      const res = await fetch(url)
      const data = await res.json()

      setVisualizaResumo(data)
    }

    fetchData()
  }, [])

  return (
    <div>
      <h1>{visualizaResumo.titulo}</h1>
      {/* <h2>{visualizaResumo.subtitulo}</h2> */}
      <p>{visualizaResumo.texto}</p>
    </div>
  )
}

export default VisualizaResumo
