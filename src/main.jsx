import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import './index.css';
import BookList from './components/BookList/BookList';
import BookDetails from './components/BookDetails/BookDetails';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children: [
      {
        path: 'books/:bookId', // Corrected path syntax to include ':bookId' for dynamic parameter
        element: <BookList />,
        loader: async ({ params }) => {
          const response = await fetch(`https://openlibrary.org/search.json?title=${params.bookId}`);
          return response.json();
        }
      },
      {
        path: 'bookdetails/work/:bookDetailsId', // Corrected path syntax to include ':bookId' for dynamic parameter
        element: <BookDetails />,
        loader: async ({ params }) => {
          const response = await fetch(`https://openlibrary.org/works/${params.bookDetailsId}.json`);

          return response.json();
        }
      },
    ]
  },

  {
    path: 'about',
    element: <About />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
