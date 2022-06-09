import React from 'react';
import './App.scss';
import {ItemCard} from "./components/ItemCard/ItemCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ItemCard image="https://www.doterra.com/medias/2x3-5ml-arbovitae.png?context=bWFzdGVyfHJvb3R8Mzg2MTN8aW1hZ2UvcG5nfGgzYy9oMTQvMjc5OTAzOTMxMjY5NDIucG5nfGZlZjI5ZTU1NjA5NjJlODg1ODg0OGRiNGI1Zjk3ZDRiZjYzMjY4YTc3NTUwNDlkYWNhYjczM2I5YWEyYWQzODM"
                  title="Arborvitae Oil"/>
      </header>
    </div>
  );
}

export default App;
