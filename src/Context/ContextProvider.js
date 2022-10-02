import React, { useContext, useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Context = React.createContext();

export function ContextFunction() {
    return useContext(Context)
}

export function InputProvider({ children }) {
    // States
    const [closeIcon, setCloseIcon] = useState(false);
    const [formValues, setFormValues] = useState({});
    const [formLoading, setFormLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [failed, setFailed] = useState(false);
    const [index, setIndex] = useState(8);
    const [projectsArray, setProjectsArray] = useState([]);

    // Refs used for form values and scroll pointer
    let projectsRef = useRef('')
    let form = useRef();

    // Handle form change
    const handleChange = (e) => {
        e.preventDefault();
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    // Handle form submit and send email to given email
    const handleSubmit = (e) => {
        e.preventDefault();
        // Async loader while request is sent
        setFormLoading(true);
        sendEmail();
    }

    // Resets all Form Values
    const handleReset = () => {
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );
        Array.from(document.querySelectorAll("select")).forEach(
            select => (select.value = select.options[0].value)
        );
        Array.from(document.querySelectorAll("textarea")).forEach(
            textarea => (textarea.value = "")
        );
        setFormValues({});
    }

    // Takes form inputs and sends email with them using emailJS for email template
    // Have to sign up with emailJS, give your service key, template key, and public key for them to send emails to you
    const sendEmail = () => {
        emailjs.sendForm('service_itv6wt9', 'template_qvdslvh', form.current, 'q5kYwSvAbKx0so3GL')
            .then((result) => {
                // show the user a success message
                handleReset();
                setFormLoading(false);
                setSubmitted(true);
            }, (error) => {
                // show the user an error
                setFormLoading(false);
                setFailed(true);
            });
    };

    // Initial value for localstorage
    const storedObject = JSON.parse(localStorage.getItem("data")) || [];
    const [UserObject, setUserObject] = useState(storedObject);

    // Updates localstorage value every time UserObject changes
    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(UserObject));
    }, [UserObject])

    let obj = {
        closeIcon: closeIcon,
        setCloseIcon: setCloseIcon,
        projectsRef: projectsRef,
        formValues: formValues,
        setFormValues: setFormValues,
        handleSubmit: handleSubmit,
        handleChange: handleChange,
        submitted: submitted,
        formLoading: formLoading,
        failed: failed,
        form: form,
        UserObject, UserObject,
        setUserObject, setUserObject,
        index: index,
        setIndex: setIndex,
        projectsArray: projectsArray,
        setProjectsArray: setProjectsArray,
    }

    return (
        <Context.Provider value={obj}>
            {children}
        </Context.Provider>
    )
}