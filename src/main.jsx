import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
// import Header from './components/Header'
import Books from './components/Books'
// import Book from './components/Book'
import BookDetails from './components/BookDetails'
import LoadingSppiner from './components/LoadingSppiner'
import ErrorPage from './components/ErrorPage'



const router = createBrowserRouter([{

path: '/',
element:<App></App>,
children:[
    {
        path:'/',
        element:<Home></Home>,    
    },
    {
        path:'books',
        element:<Books></Books>,
        loader: () => fetch('https://api.itbook.store/1.0/new')
    },
    {
        path:'book/:id',
        element:<BookDetails></BookDetails>,
        loader: ({params})=> fetch(`https://api.itbook.store/1.0/books/${params.id}`)
    },

    {
        path: '/about',
        element:<About></About>
    }
    ,
    {
        path:'/loader',
        element: <LoadingSppiner></LoadingSppiner>
    },
    {
        path:'*',
        element: <ErrorPage></ErrorPage>
    }
    
    
]


    }])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}>

    </RouterProvider>
)
