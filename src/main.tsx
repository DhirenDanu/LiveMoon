import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // Import necessary router components
import './index.css';
import App from './App.tsx';
import Home from './pages/Home.tsx';
import Room from './components/Room.tsx';

// Define the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Use JSX for the root element
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:'/Live',
        element:<Room/>
      }
    ]
  
  },
]);

// Render the application
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} /> {/* Provide the router to the application */}
  </StrictMode>
);
