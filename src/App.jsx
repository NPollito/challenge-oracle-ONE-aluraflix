import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'

import Project from './components/Project'
import NewVideo from './components/NewVideo'

function App() {
  
  return(
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Project />}/>
        <Route path='/new-video' element={<NewVideo />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App