import React from 'react';
import styles from './SlideShow.module.css';
import Fade from 'react-reveal/Fade';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import './SlideShow.css';

function SlideShow({ images }) {
    return (
        <>
            {/* SlideShow */}
            <div className={`${styles.AboutSlideshow} ${styles.AboutChildContainer}`}>
                <Fade up distance={'3em'} delay={1200}>
                    <div className={styles.ImageGalleryContainer}>
                        <ImageGallery items={images} slideDuration={500} slideInterval={7000} originalWidth={styles.originalWidth} originalHeight={styles.originalHeight} showFullscreenButton={false} showPlayButton={false} showBullets={true} infinite={true} autoPlay={true} showThumbnails={false} />;
                    </div>
                </Fade>
            </div>
        </>
    );
}

export default SlideShow;