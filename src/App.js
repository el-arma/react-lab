import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

  const [title, setTitle] = useState('Wall-E');

  let message;
    if (title.length < 5) {
        message = "Tytuł jest za krótki. Nagrywają takie filmy?";
    } else if (title.length < 15) {
        message = "Tytuł jest ekstra, w sam raz na plakat przed kinem!";
    } else {
        message = "Tytuł jest za długi, nikt tego nie zapamięta.";
    }

    {
        title.length > 0 && <div>{message}</div>
    }

  function handleChange(event) {

      setTitle(event.target.value);
      
  }

  function handleShowMovieClick(){
    alert(title);
  }


  return (

      <div>

          <h1>My favourite movies to watch</h1>

          <h2>My favourite movie for today is {title}</h2>

          <br></br>

          {title.length > 0 && <div>{message}</div>}

          <input type="text" value={title} onChange={handleChange}/>
          
          <button onClick={handleShowMovieClick} >Show movie title</button>

      </div>

  );

}

export default App;

