import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} /> 
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#1f2937', 
            color: '#fff',
            border: '1px solid #3b82f6', 
          },
          success: {
            iconTheme: {
              primary: '#3b82f6',
              secondary: '#fff',
            },
          },
        }}
      />
    </BrowserRouter>
  )
}

export default App
