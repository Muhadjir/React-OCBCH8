import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  render(){
    let name="Muchamad Muhadjir"
    return(
      <div className="App" >
        <div className="App-header">
          <img src={logo}className="App-logo"alt="logo"/>
          <h2>Welcome to React {name}</h2>
        </div>
        <p className="App-intro"> 
          Saya belajar dengan tekun supaya bisa menjadi website developer yang hebat.
        </p>
      </div>
    )
  }
}



export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
