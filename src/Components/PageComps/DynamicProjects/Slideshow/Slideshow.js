import React from 'react';
import styles from './Slideshow.module.css';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import './SlideShow.css';

function SlideShow({ project }) {
    // Dynamic projects slideshow
    // items = project images
    return (
        <>
            {/* SlideShow */}
            <div className={styles.AboutSlideshowProjects}>
                <div className={styles.ImageGalleryContainerProjects}>
                    <ImageGallery items={project.images} slideDuration={500} slideInterval={7000} originalWidth={styles.originalWidth} originalHeight={styles.originalHeight} showFullscreenButton={false} showPlayButton={false} showBullets={true} infinite={true} autoPlay={true} showThumbnails={false} />
                </div>
            </div>
        </>
    );
}

export default SlideShow;