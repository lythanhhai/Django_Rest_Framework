import './App.scss';
import Navbar from './Component/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Department from './Component/Department';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Department" element={
            <>
              <Navbar />
              <Department />
            </>
        }></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
