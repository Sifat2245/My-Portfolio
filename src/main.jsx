import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './route/router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className=''>
      <RouterProvider router={router}></RouterProvider>
    </div>
  </StrictMode>,
)
