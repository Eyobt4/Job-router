import {BrowserRouter , Routes , Route , Link , NavLink} from 'react-router-dom'
import Home from './pages/Home.js'
import About from './pages/About.js'
function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>Jobrouter</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="About">About</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App
