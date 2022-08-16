import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Homepage from './pages/Homepage';
import Coinpage from './pages/Coinpage';
import { makeStyles } from '@material-ui/core/styles';
const useStyle = makeStyles ({ 

  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh"
  },
})

function App() {
  const classes = useStyle()

  return (
    <div className={classes.App}>
      <Header />
      <Router>
        <Routes>  
            <Route path="/"  element={<Homepage />} exact />  
            <Route path="/coins/:id"  element={<Coinpage />} />
        </Routes>  
    </Router>

    </div>



  );
}

export default App;
