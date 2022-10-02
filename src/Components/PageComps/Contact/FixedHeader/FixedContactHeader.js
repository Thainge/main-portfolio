import React from 'react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Fade from 'react-reveal/Fade';
import styles from './FixedContactHeader.module.css';
import MapsImage from './../../../../assets/maps.png'

function FixedContactHeader() {
    return (
        <>
            {/* Maps Background */}
            <Fade delay={300} duration={500}>
                <div className={styles.MapBackground}>
                    <TransformWrapper limitToBounds={false} initialPositionX={-1000} initialPositionY={-400} initialScale={1.2} wheel={{ disabled: true }}>
                        <TransformComponent>
                            <img src={`${MapsImage}`} alt="test" />
                        </TransformComponent>
                    </TransformWrapper>
                </div>
            </Fade>

            {/* Maps Overlay Text */}
            <div className={styles.MapTextContainer}>
                <div className={styles.MapLetters}>
                    <Fade delay={500}><i>L</i></Fade>
                    <Fade delay={800}><i>e</i></Fade>
                    <Fade delay={1100}><i>t</i></Fade>
                    <Fade delay={1400}><i>s</i></Fade>
                    <Fade delay={1100}><i>W</i></Fade>
                    <Fade delay={800}><i>o</i></Fade>
                    <Fade delay={500}><i>r</i></Fade>
                    <Fade delay={500}><i>k</i></Fade>
                    <Fade delay={800}><i>T</i></Fade>
                    <Fade delay={1100}><i>o</i></Fade>
                    <Fade delay={500}><i>g</i></Fade>
                    <Fade delay={1400}><i>e</i></Fade>
                    <Fade delay={1100}><i>t</i></Fade>
                    <Fade delay={500}><i>h</i></Fade>
                    <Fade delay={800}><i>e</i></Fade>
                    <Fade delay={500}><i>r</i></Fade>
                </div>
            </div>
        </>
    );
}

export default FixedContactHeader;