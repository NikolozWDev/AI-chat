import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AiChat from './pages/AiChat.jsx'


const App = () => {

  return (
    <Router basename="/AI-chat">
      <Routes>
        <Route path="/" element={<AiChat />} />
      </Routes>
    </Router>
  )

}
export default App;