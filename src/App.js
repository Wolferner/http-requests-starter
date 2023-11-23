import React,{useState, useEffect, useCallback} from "react";
import AddJoke from './components/AddJoke'

import JokeList from "./components/JokeList";
import "./App.css";

function App() {
  // const dummyJokes = [
  //   {
  //     id: 1,
  //     type: "general",
  //     setup: "What do you call a bee that lives in America?",
  //     punchline: "A USB.",
  //   },
  //   {
  //     id: 2,
  //     type: "programming",
  //     setup: "What's the best thing about a Boolean?",
  //     punchline: "Even if you're wrong, you're only off by a bit.",
  //   },
  // ];

  const [jokes, setJokes] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

const fetchDummyJokes= useCallback( async ()=>{
    setIsLoading(true)
    setError(null)
    try{
      const response = await fetch('https://react-course-project-ffeb9-default-rtdb.europe-west1.firebasedatabase.app/jokes.json',{
        method: 'GET',
        headers:{
          'Content-Type': 'application/json'
        }
      })
      if (!response.ok){
        throw new Error('Some Problem')
      }
      const data = await response.json()

      const loadedJokes =[]

      for (const key in data){
        loadedJokes.push({
          id:key,
          type: data[key].type,
          setup: data[key].setup,
          punchline: data[key].punchline
        })
      }

      setJokes(loadedJokes)
    }catch(e){
      setError(e.message)
    }
    setIsLoading(false)
  },[])

  useEffect(()=>{
    fetchDummyJokes()
  }, [fetchDummyJokes])

let content = <p>Shutok net</p>

if(jokes !== null && jokes !== undefined && jokes.length > 0){
  content = <JokeList jokes={jokes} />
}
if(isLoading){
  content = <p>Zagruzka...</p>
}
if(!isLoading && error){
  content=<p>{error}</p>
}

const addJokeHandler = async(joke)=>{
  const response = await fetch('https://react-course-project-ffeb9-default-rtdb.europe-west1.firebasedatabase.app/jokes.json',{
    method: 'POST',
    body: JSON.stringify(joke),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await response.json()
  console.log(data)
}

  return (
    <React.Fragment>
      <section>
        <AddJoke onAddJoke={addJokeHandler}/>
      </section>
      <section>
        <button onClick={fetchDummyJokes}>Fetch Jokes</button>
      </section>
      <section>
        {content}
        {/* {!isLoading&& jokes.length >0  && <JokeList jokes={jokes} />}
        {!isLoading&& jokes.length === 0 && !error && <p>Shutok net</p>}
        {isLoading && <p>Zagruzka...</p>}
        {!isLoading && error && <p>{error}</p>} */}
      </section>
    </React.Fragment>
  );
}

export default App;
