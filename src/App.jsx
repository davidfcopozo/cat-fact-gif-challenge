import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import useFetch from './hook/useFetch';
import CatFact from './components/CatFact'
import Giphy from './components/Giphy'


function App() {
  const [data, fetchData] = useFetch();
  const [facts, setFacts] = useState("")

  const factHandler = ()=> {
     fetchData("https://catfact.ninja/fact")
  }
  
  useEffect(()=>{
    setFacts(data?.fact);
  }, [data])

  return (
    <>
     <h1>Cat Fact Giphy</h1>
     <button onClick={factHandler}>Generate Fact</button>
     <div className="result">
     <CatFact facts={facts}/>
     <Giphy facts={facts}/>
     </div>
    </>
  )
}

export default App
