import type {ReactNode} from 'react';
import React from 'react';
import BrowserOnly from "@docusaurus/BrowserOnly";
import styles from './styles.module.css';
import { ImageGallery } from "react-image-grid-gallery";

/**
 * Ref: https://github.com/codesweetly/react-image-grid-gallery
 */ 
export default function ImageGridGallery({gapSize, images}): ReactNode {
    return (
        <BrowserOnly fallback={<div>Loading...</div>}>
          {() => {
            return (
              <ImageGallery
                imagesInfoArray={images}
                columnCount={"auto"}
                columnWidth={230}
                gapSize={gapSize}
              />
            );
          }}
        </BrowserOnly>
      );
}