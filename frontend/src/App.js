// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages 
//import products from './data/products.js';
import HomePage from './pages/HomePage';

import LogPage from './pages/LogPage';
import AddDeliveryRobotPageTable from './pages/AddDeliveryRobotPageTable';
import EditDeliveryRobotPageTable from './pages/EditDeliveryRobotPageTable';

import TopicsPage from './pages/TopicsPage';


//import MoviesPage from './pages/MoviesPage';

// For Create and Edit, use the form OR table design; not both.
// If your schema requires LONG data input, then use the FORM design:
//import AddMoviePageForm from './pages/AddMoviePageForm';
//import EditMoviePageForm from './pages/EditMoviePageForm';

// If your schema requires SHORT data input, then use the TABLE design.
//import EditMoviePageTable from './pages/EditMoviePageTable';
//import AddMoviePageTable from './pages/AddMoviePageTable';

// Define the function that renders the content in Routes, using State.
function App() {

  const [robotToEdit, setDeliveryRobot] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
          <h1>Warehouse Robot Delivery Tracker</h1>
            <p>A website for tracking warehouse robot deliveries. It uses the MERN stack for web development.</p>
          </header>

          <nav className="global">
            <Navigation />
          </nav>

          <main>
            <section>
                <Routes> 
                    {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.  */}
                    
                    <Route path="/" element={<HomePage robotToEdit={robotToEdit} setDeliveryRobot={setDeliveryRobot}/>} />
                    <Route path="/topics" element={<TopicsPage />} />
                    
                    <Route path="/create" element={<AddDeliveryRobotPageTable /> } />
                    <Route path="/log" element={<LogPage setDeliveryRobot={setDeliveryRobot}/>} />
                    <Route path="/update" element={<EditDeliveryRobotPageTable robotToEdit={robotToEdit} setDeliveryRobot={setDeliveryRobot}/>} /> 
                 
                    {/* Use these if your schema requires LONG data input: */}
                    {/* <Route path="/create" element={<AddMoviePageTable />} /> 
                    <Route path="/update" element={<EditMoviePageTable movieToEdit={movie} />} /> */}

                    {/* Or these if your schema requires SHORT data input: */}
                     {/* <Route path="/create" element={<AddMoviePageForm />} />   
                     <Route path="/update" element={<EditMoviePageForm movieToEdit={movie} />} /> */}
                </Routes>
              </section>
          </main>

          <footer>
            <p>&copy; 2024 Chris Buckheit</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;