import React, { useState, useEffect } from 'react';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [dogImage, setDogImage] = useState('');

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        setDogImage(data.message);
        setIsLoaded(true);
      });
  }, []);

  if (!isLoaded) return <p>Loading...</p>   
  return <img src={dogImage} alt="A Random Dog"></img>
}

export default App;
