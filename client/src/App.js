import { BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import { useDispatch } from 'react-redux';
import Navbar from './Navbar'
import AllRoutes from './AllRoutes'
import { useEffect } from 'react';
import { fetchAllQuestions } from './actions/question.js';
import { fetchAllUsers } from './actions/users.js';



function App() {
const dispatch = useDispatch()

useEffect(() => {
  dispatch(fetchAllQuestions())
  dispatch(fetchAllUsers())
}, [dispatch])
 

  return (
    <div className="App">
    <Router>
      <Navbar />
      <AllRoutes />
    </Router>
      
    </div>
  );
}

export default App;
