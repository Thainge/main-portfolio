import React, { useRef, useLayoutEffect } from 'react';
import styles from './Textarea.module.css';
import Fade from 'react-reveal/Fade';
import { ContextFunction } from '../../../../Context/ContextProvider';
import ReactLoading from 'react-loading';
import ReCAPTCHA from "react-google-recaptcha";

function Textarea() {
    const obj = ContextFunction();
    const { setFormValues, formValues, submitted, formLoading, failed } = obj;

    // Textarea ref used for dynamic textarea height
    const textareaRef = useRef(null);

    // sets form values with textarea value on change
    const onTextAreaChange = (event) => {
        setFormValues({ ...formValues, [event.target.name]: event.target.value })
    }

    // Dynamic Textarea
    useLayoutEffect(() => {
        // Reset height - important to shrink on delete
        textareaRef.current.style.height = "inherit";
        // Set height
        textareaRef.current.style.height = `${Math.max(
            textareaRef.current.scrollHeight - 20,
            10
        )}px`;
    }, [formValues.Message]);

    //site key for captcha
    let siteKey = "6LffyGghAAAAAJgHm_V_mBfWZo-1IQoTvUB94ru-"

    return (
        <>
            {/* Message Text Area */}
            <div className={styles.column}>
                <label className={styles.TextLabel}>
                    Message *
                    <textarea onChange={onTextAreaChange} ref={textareaRef} value={formValues.Message} maxLength="2000" className={styles.TextArea} type="text" name="Message" placeholder={'What is your message?'} required />
                </label>

                {/* Captcha */}
                <div>
                    <ReCAPTCHA
                        sitekey={siteKey}
                        onChange={(e) => console.log(e)}
                    />
                </div>

                {/* Submit Button */}
                {
                    formLoading ? <ReactLoading type={'bubbles'} color={'black'} height={'10%'} width={'10%'} />
                        :
                        submitted ? <Fade><div className={styles.submittedText}>Message sent! I will respond as soon as possible!</div></Fade>
                            :
                            failed ?
                                <Fade>
                                    <div className={styles.failedText}>There was a problem processing your request, please try again later.</div>
                                    <input className={styles.submitButton} type="submit" value='✉ Send Message' />
                                </Fade> :
                                <input className={styles.submitButton} type="submit" value='✉ Send Message' />



                }
            </div>
        </>
    );
}

export default Textarea;