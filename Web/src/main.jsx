import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global.js'
import light from './styles/light.js'

import { Home } from './pages/Home/index.jsx'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { MemoryRouter } from 'react-router';


const router = createBrowserRouter([
    {
      path:"/",
      element:<App/>,
      children:[
        {
          path:"/home",
          element:<Home/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/contact",
          element:<Contact/>
        }
      ]
    }   
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ThemeProvider theme={light}>
        <GlobalStyles/>
        <RouterProvider router={router}>
          <MemoryRouter>
            
          </MemoryRouter>
        </RouterProvider>
      </ThemeProvider>
  </React.StrictMode>,
)
