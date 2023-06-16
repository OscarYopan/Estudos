import { Banner } from './components/Banner/Banner'
import { Head } from './components/Head/Head'
import { NavMenu } from './components/NavMenu/NavMenu'

function App() {

  return (
    <div className='app'>
      <Head />
      <NavMenu />
      <Banner/>
    </div>
  )
}

export default App
