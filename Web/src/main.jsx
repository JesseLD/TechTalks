import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global.js'
import light from './styles/light.js'

import { Home } from './pages/Home/index.jsx'
import { About } from './pages/About'
// import { Page2 } from './pages/Page2'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<Principal/>
//   },
//   {
//     path:"/page2",
//     element:<Page2/>
//   }
// ])

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
        }
      ]
    }
    
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ThemeProvider theme={light}>
        <GlobalStyles/>
        <RouterProvider router={router}>
        </RouterProvider>
      </ThemeProvider>
  </React.StrictMode>,
)
