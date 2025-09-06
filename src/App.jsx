import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'next-themes'
import FinalLandingPage from './components/FinalLandingPage'

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <Router>
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<FinalLandingPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
