import React from 'react';
import axios from 'axios';
import { useState , useEffect } from 'react';
import GalleryList from '../GalleryList/GalleryList';
import './App.css';


function App() {
  // Start with an empty array

  let [galleryList , setGalleryList] = useState([]);

  // Runs when the component is first put on the DOM

  useEffect(() => {
    getGallery();
  }, []);

  // GET data from the server
  
  const getGallery = () => {
    axios.get('/gallery').then((response) => {
      // array of inventory objects will get saved to the state array
      setGalleryList(response.data);
    }).catch((err) => {
      alert(`Couldn't get gallery. Try again later`);
      console.log('Error with getting gallery' , err);
    });
  };




    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Favorite Animals</h1>
        </header>
        <main>
          <GalleryList galleryList={galleryList} getGallery={getGallery}/>
          
          
          

          
          
        </main>
        
      </div>
    );
}

export default App;
