import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Aichat from './pages/Aichat.jsx'


const App = () => {

  return (
    <Router basename="/AI-chat">
      <Routes>
        <Route path="/" element={<Aichat />} />
      </Routes>
    </Router>
  )

}
export default App;