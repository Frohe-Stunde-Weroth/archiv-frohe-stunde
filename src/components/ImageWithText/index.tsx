import React, { ReactNode, useState } from 'react';
import BrowserOnly from "@docusaurus/BrowserOnly";
import styles from './styles.module.css'; // Erstelle diese CSS-Datei

export default function ImageWithText({ image, text }): ReactNode {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleClick = () => {
    setIsZoomed(true);
  };

  const handleClose = () => {
    setIsZoomed(false);
  };

  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
        {() => {
            return (
    <div className={styles.container}>
         <div className={styles.imageContainer}>
        <img
          src={image.src}
          alt={image.alt}
          className={styles.image}
          onClick={handleClick}
        />
      </div>
        <div className={styles.textContainer}>
        {text}
      </div>
     

      {isZoomed && (
        <div className={styles.overlay} onClick={handleClose}>
          <img
            src={image.src}
            alt={image.alt}
            className={styles.zoomedImage}
            onClick={(e) => e.stopPropagation()}
          />
          <button onClick={handleClose} className={styles.closeButton}>
            &times;
          </button>
        </div>
      )}
    </div>
    );
    }}
    </BrowserOnly>
  );
}