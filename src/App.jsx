import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'

import Project from './components/Project'
import NewVideo from './components/NewVideo'
import NewCategory from './components/NewCategory'

function App() {
  
  return(
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={ <Project /> }/>
        <Route path='/new-video' element={ <NewVideo /> }/>
        <Route path='/new-category' element= {<NewCategory /> }/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App