import Register from './components/Register'
import Journal from './components/Journal'
import ShowMessage from './components/ShowMessage'
import ReadEntry from './components/ReadEntry'
import './css/App.css';
import { useContext } from 'react'
import { AppState } from './context/GlobalState'

function App() {

  const { state } = useContext(AppState)
  const { user, featuredEntry } = state
  

  return (
    <div className="App">
      {user.username ?  <Journal /> : <Register />}
      {featuredEntry.title && <ReadEntry /> }
      <ShowMessage />
    </div>
  );
}

export default App;
