import React from 'react';
import styles from './DropDown.module.css';
import { ContextFunction } from '../../../../Context/ContextProvider';


function DropDown({ data }) {
    const obj = ContextFunction();
    const { handleChange } = obj;

    // Individual dropdown box
    return (
        <>
            {/* Dropdown Boxes */}
            <div className={styles.row}>
                {data.Radiobuttons.map((item, index) => (
                    <label className={styles.TextLabel} key={index}>
                        {item.label}
                        <select name={item.name} className={styles.Select} defaultValue={item.DefaultChecked} onChange={(e) => handleChange(e)}>
                            <option value={item.DefaultChecked} disabled>{item.DefaultChecked}</option>
                            {item.RadioOptions.map((item, index) => (
                                <option value={item.optionName} key={index}>{item.optionName}</option>
                            ))}
                        </select>
                    </label>
                ))}
            </div>
        </>
    );
}

export default DropDown;