import React, { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage3 from "./pages/LandingPage3";
import LandingPage2 from "./pages/LandingPage2";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }

    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Home Page Title";
        metaDescription = "Description for the home page.";
        break;
      case "/landing-page-2":
        title = "Landing Page 2 Title";
        metaDescription = "Description for landing page 2.";
        break;
      default:
        // Add a default case or set values for other paths
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [action, pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage3 />} />
      <Route path="/landing-page-2" element={<LandingPage2 />} />
    </Routes>
  );
}


// frontend.js
fetch('http://localhost:3000/api/map')
  .then(response => response.json())
  .then(data => {
    // Verarbeiten Sie die erhaltenen Daten
    console.log(data);
  })
  .catch(error => {
    // Behandeln Sie Fehler
    console.error('Error:', error);
  });

// Server-Antworten verarbeiten:
// javascript
// Copy code


// HTTP-Anfragen vom Frontend senden

fetch('http://localhost:8080/api/map') 
  .then(response => response.json())
  .then(data => {
    // Verarbeiten Sie die erhaltenen Daten
    console.log(data);
  })
  .catch(error => {
    // Behandeln Sie Fehler
    console.error('Error:', error);
  });


  // Server-Antworten verarbeiten

  fetch('http://localhost:8080/api/map')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Verarbeiten Sie die erhaltenen Daten
    const { lat, lon } = data;

    // Verwenden Sie lat und lon, um OpenStreetMap im Frontend anzuzeigen
    console.log('Latitude:', lat);
    console.log('Longitude:', lon);
    
    // Hier können Sie OpenStreetMap-Code oder andere Funktionen aufrufen, um die Karte anzuzeigen
  })
  .catch(error => {
    // Behandeln Sie Fehler
    console.error('Error:', error);
  });







export default App;
