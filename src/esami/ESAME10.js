import React, { useState, useEffect } from 'react';
import './ESAME10.css';

function ESAME10() {
  const imgGallery = [
    {url: require('./imgGallery/IMG_8857.jpg'), titolo:"foto montagna 2023", descrizione:'foto bivacco'},
    {url: require('./imgGallery/IMG_8858.jpg'), titolo:"foto montagna 2023", descrizione:'foto bivacco'},
    {url: require('./imgGallery/IMG_8859.jpg'), titolo:"foto montagna 2023", descrizione:'foto bivacco'},
    {url: require('./imgGallery/IMG_8864.jpg'), titolo:"foto montagna 2023", descrizione:'foto bivacco'},
    {url: require('./imgGallery/IMG_8870.jpg'), titolo:"foto montagna 2023", descrizione:'foto bivacco'},
    {url: require('./imgGallery/IMG_8895.jpg'), titolo:"foto montagna 2023", descrizione:'foto bivacco'}
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 500); // Durata della transizione
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const handleSkip = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imgGallery.length);
    }
  };

  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + imgGallery.length) % imgGallery.length);
    }
  };

  function ImageToDisplay() {
    const currentImage = imgGallery[currentIndex];
    const nextIndex = (currentIndex + 1) % imgGallery.length;
    const prevIndex = (currentIndex - 1 + imgGallery.length) % imgGallery.length;

    return (
      <div className='fotografie'>
        <div className={`image-container ${isTransitioning ? 'transitioning' : ''}`}>
          <img
            className="image prev-image"
            alt={`Immagine ${prevIndex}`}
            src={imgGallery[prevIndex].url}
          />
          <img
            className="image current-image"
            alt={`Immagine ${currentIndex}`}
            src={currentImage.url}
          />
          <img
            className="image next-image"
            alt={`Immagine ${nextIndex}`}
            src={imgGallery[nextIndex].url}
          />
        </div>
        <div className='titoloEdescrizione'>
          <h5>{currentImage.titolo}</h5>
          <p>{currentImage.descrizione}</p>
        </div>
        <div className="prevnext">
          <button id="prev" onClick={handlePrev}>prev</button>
          <button id="next" onClick={handleSkip}>next</button>
        </div>
      </div>
    );
  }

  return <ImageToDisplay />;
}

export default ESAME10;