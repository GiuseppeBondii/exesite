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
  const [nextIndex, setNextIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setCurrentIndex(nextIndex);
        setIsTransitioning(false);
      }, 500); // Durata della transizione
      return () => clearTimeout(timer);
    }
  }, [isTransitioning, nextIndex]);

  const transition = (newIndex) => {
    if (!isTransitioning) {
      setNextIndex(newIndex);
      setIsTransitioning(true);
    }
  };

  const handleNext = () => {
    transition((currentIndex + 1) % imgGallery.length);
  };

  const handlePrev = () => {
    transition((currentIndex - 1 + imgGallery.length) % imgGallery.length);
  };

  return (
    <div className='fotografie'>
      <div className={`image-container ${isTransitioning ? 'transitioning' : ''}`}>
        <div className="image-layer current-layer">
          <img
            alt={`Immagine ${currentIndex}`}
            src={imgGallery[currentIndex].url}
          />
        </div>
        <div className="image-layer next-layer">
          <img
            alt={`Immagine ${nextIndex}`}
            src={imgGallery[nextIndex].url}
          />
        </div>
      </div>
      <div className='titoloEdescrizione'>
        <h5>{imgGallery[currentIndex].titolo}</h5>
        <p>{imgGallery[currentIndex].descrizione}</p>
      </div>
      <div className="prevnext">
        <button id="prev" onClick={handlePrev}>prev</button>
        <button id="next" onClick={handleNext}>next</button>
      </div>
    </div>
  );
}

export default ESAME10;