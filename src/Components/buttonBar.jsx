import React from "react"

const buttonBar = ({changeArraySize,resetArray, insertionSort, quickSort, mergeSort, bubbleSort, arrSize, isRunning, isSorted}) => {
    return (
        <div className='btn-container'>
            <button className='btn dark' onClick={resetArray} disabled={isRunning || (!isSorted && !isRunning)}>Reset (Same arr)</button>
            <button className='btn' onClick={insertionSort} disabled={isRunning || isSorted}>Insertion</button>
            <button className='btn' onClick={quickSort} disabled={isRunning || isSorted}>Quick</button>
            <button className='btn' onClick={mergeSort} disabled={isRunning || isSorted}>Merge</button>
            <button className='btn' onClick={bubbleSort} disabled={isRunning || isSorted}>Bubble</button>
            <div className='btn size-bar'>
                <label htmlFor="shade" className='btn'>Size {arrSize}</label>
                <input type="range" id='shade' min="10" max="550" className="range-bar btn" onChange={changeArraySize} disabled={isRunning}/>
            </div>
            <div className='btn stop'><a href='/'>Stop</a></div>

        </div>
    )
}

export default buttonBar