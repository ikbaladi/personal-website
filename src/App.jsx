import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PaymentPage from './pages/PaymentPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bayar" element={<PaymentPage />} />

        {/* Catch-all untuk semua route yang tidak ada */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
