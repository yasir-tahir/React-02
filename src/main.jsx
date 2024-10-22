import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

// JSX

// const sum = 5 + 3;

// function App(){
// console.log(sum); 
 
//  return <h1>Hello World</h1>
// }


// ................
// function App(){
// return(
// <>
// <h1>Hedy Lamarr's Todos</h1>
// <img 
//   src="https://i.imgur.com/yXOvdOSs.jpg" 
//   alt="Hedy Lamarr" 
//   class="photo"
// ></img>
// <ul>
//     <li>Invent new traffic lights</li>
//     <li>Rehearse a movie scene</li>
//     <li>Improve the spectrum technology</li>
// </ul>
// </>
// )
// }

// ......................


function App(){
  return(
    <>
    <div class="intro">
      <h1>Welcome to my website!</h1>
    </div>
    <p class="summary">
      You can find my thoughts here.
      
      <br></br>
      <br></br>
      <b>And <i>pictures</i></b> of scientists!
    </p>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
