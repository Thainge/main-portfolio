import React, { useState, useEffect } from 'react';
import styles from './Sortbar.module.css';
import { ContextFunction } from '../../../../Context/ContextProvider';

function Sortbar({ ProjectsData }) {
    const obj = ContextFunction();
    const { UserObject, setUserObject, index, setProjectsArray } = obj;

    let InitialSort = {
        name: false,
        date: false
    }
    const [sortValues, setSortValues] = useState(InitialSort);
    const { views, name, date } = sortValues;

    // Sort Values dynamically 
    const sortFunction = (sortKey, sortNumbers) => {
        // Set sorting method
        const keyState = sortValues[sortKey]
        const newSort = { ...InitialSort, [sortKey]: !keyState };
        setSortValues(newSort);

        // Actual sorting function
        // Sorts numbers or letters
        let sortedDescending = ProjectsData.sort((a, b) => {
            return sortNumbers === true ? sortValues[sortKey] ? a[sortKey] - b[sortKey] : b[sortKey] - a[sortKey] : sortValues[sortKey] ? a[sortKey] > b[sortKey] ? 1 : -1 : a[sortKey] < b[sortKey] ? 1 : -1;
        });

        // Updates projects array state
        let sortedProjects = sortedDescending.slice(0, index);
        setProjectsArray(sortedProjects);
        // Update localstorage of new sorted array
        const newObject = { ...UserObject, array: sortedDescending, ...newSort }
        setUserObject(newObject)
    }

    // Initial sort icons from localstorage
    useEffect(() => {
        if (UserObject.name === true) {
            const newSort = { ...sortValues, name: true };
            setSortValues(newSort)
        } else if (UserObject.date === true) {
            const newSort = { ...sortValues, date: true };
            setSortValues(newSort)
        }
    }, [])

    return (
        <div className={styles.searchOptions}>
            <div className={styles.searchBox} onClick={() => sortFunction('name')}>
                <b>sort by name {name ? <>▼</> : <>▲</>}</b>
            </div>
            <div className={styles.searchBox} onClick={() => sortFunction('date')}>
                <b>Sort by date {date ? <>▼</> : <>▲</>}</b>
            </div>
        </div>
    );
}

export default Sortbar;