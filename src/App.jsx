import React from 'react';
import Router from './Router';

const App = () => {
  return (
    <main>
      <Router />
    </main>
  )
}

export default App



// import logo from './logo.svg';
// import './App.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { signInAction, signOutAction } from './reducks/users/actions';

// function App() {
//   //Dispatchメソッドを直接記述出来ないので一度dispatchという定数に入れて使用
//   const dispatch = useDispatch();
//   const selector = useSelector((state) => state)

//   console.log(selector.users)

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
//         <button onClick={
//           () => dispatch(signInAction({uid: "0001", username: "Yuki Kubota"}))
//         }>
//           Sign In
//         </button>
//         <button onClick={() => dispatch(signOutAction())}>
//           Sign Out
//         </button>
//       </header>
//     </div>
//   );
// }

// export default App;