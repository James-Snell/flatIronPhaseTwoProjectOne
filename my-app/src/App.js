import './App.css';
import {React, useState} from 'react';
import Body from "./components/Body";
import Trim from "./components/Trim";
import Drive from "./components/Drive";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";


function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
      setCurrentPage((prevPage) => (prevPage === 3 ? 1 : prevPage + 1));
  };
  const router = createBrowserRouter([
    {
      path:"/body",
      element: (<Body></Body>)
    },
    {
      path:"/drive",
      element: <Drive></Drive>
    },
    {
      path:"/trim",
      element:<Trim></Trim>
    }
  ])

  return (    
    
    <div className="App">
      <header className="App-header">
        <h2>1961 Chevrolet Bel Air</h2>
      </header>
      <RouterProvider router={router}/>
{/* 
        {currentPage === 1 && <Body />}
        {currentPage === 2 && <Trim />}
        {currentPage === 3 && <Drive />}


        <button onClick={nextPage}>
            {currentPage === 1 ? 'Show Trim' : currentPage === 2 ? 'Show Drive' : 'Show Body'}
        </button> */}
       
    </div>
  );
}

export default App;
