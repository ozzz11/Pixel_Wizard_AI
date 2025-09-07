import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'next-themes'
import EnhancedLandingPage from './components/EnhancedLandingPage'

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <Router>
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<EnhancedLandingPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
