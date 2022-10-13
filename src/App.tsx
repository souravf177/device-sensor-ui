import React from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import SensorDetail from './components/SensorDetail'
import AddSensor from './components/AddSensor'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Routes>
          <Route path='/sensor/:id' element={<SensorDetail />} />
        </Routes>
        <Routes>
          <Route path='/add-sensor' element={<AddSensor />} />
        </Routes>
        <Routes>
          <Route path='/edit-sensor/:id' element={<AddSensor />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  )
}

export default App
