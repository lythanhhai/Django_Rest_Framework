import './App.scss';
import Navbar from './Component/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={
            <Navbar />
        }></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
