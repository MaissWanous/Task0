
import './App.css'
import { Route, Routes } from "react-router-dom";

import CurrencyPage from '../pages/CurrencyPage';

function App() {

  return (
    <>
     
        <Routes>
          <Route path="/" element={<CurrencyPage />} />
        </Routes>
    
    </>
  )
}

export default App
