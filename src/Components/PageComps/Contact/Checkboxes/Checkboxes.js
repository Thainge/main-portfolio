import React from 'react';
import styles from './Checkboxes.module.css';
import { ContextFunction } from '../../../../Context/ContextProvider';


function Checkboxes({ data }) {
    const obj = ContextFunction();
    const { handleChange } = obj;

    // Individual input box
    return (
        <>
            {/* Input Boxes */}
            <div className={styles.row}>
                {data.Checkboxes.map((item, index) => (
                    <label className={styles.TextLabel} key={index}>
                        {item.label}
                        <input onChange={(e) => handleChange(e)} className={styles.TextInput} maxLength="150" type="text" name={`${item.name}`} placeholder={`${item.placeholder}`} required />
                    </label>
                ))}
            </div>
        </>
    );
}

export default Checkboxes;