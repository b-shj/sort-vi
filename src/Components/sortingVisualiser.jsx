import React, { useEffect, useState } from 'react'
import { mergeSortAnimation } from '../Animations/mergeSort'
import { quickSortAnimation } from '../Animations/quickSort'
import { bubbleSortAnimation } from '../Animations/bubbleSort'
import { insertionSortAnimation } from '../Animations/insertionSort'
import './styles.css'
import ButtonBar from './buttonBar'

import { changeArrayHelper } from "../Helpers/changeArray";


const SortingVisualiser = () => {
    const [array, setArray] = useState([])
    const [arrSize, setArrSize] = useState(50)
    const [speed, setSpeed] = useState(2)
    const [isRunning, setIsRunning] = useState(false)
    const [isSorted, setIsSorted] = useState(false)
    const [copiedArr, setCopiedArr] = useState([]);
    const [width, setWidth] = useState(0)
    const [sameArr, setSameArr] = useState([])
 
    useEffect(()=>{
        changeArray(50);
    }, [])

    function changeArray(size){
        if (isRunning === false) {
            changeArrayHelper(
              setIsSorted,
              array,
              setCopiedArr,
              setSameArr,
              setArray,
              setWidth,
              setSpeed,
              size,
              randomIntGenerator
            );
          }
    }

    const changeArraySize = (e) => {
        setArrSize(parseInt(e.target.value))
        changeArray(parseInt(e.target.value))
    }

    const randomIntGenerator = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const resetArray = () => {
        if(isRunning === false){
            setIsSorted(false)
            setArray([...sameArr])
            setCopiedArr([...sameArr])
            const arrayBars = document.getElementsByClassName('array-bar')
            for(let i=0; i<array.length; i++){
                arrayBars[i].style.backgroundColor = "#FF85D5"
                arrayBars[i].style.height = `${array[i]}px`
            }
        }
    }

    const bubbleSort = () => {
        if(isRunning === false && isSorted === false){
            bubbleSortAnimation(setIsRunning, setIsSorted, speed, copiedArr, array)
        }
    }

    const mergeSort = () => {
        if(isRunning === false && isSorted === false){
            mergeSortAnimation(setIsRunning, setIsSorted, speed, copiedArr, array)
        }
    }

    const quickSort = () => {
        if(isRunning === false && isSorted === false){
            quickSortAnimation(setIsRunning, setIsSorted, speed, copiedArr, array)
        }
    }

    const insertionSort = () => {
        if(isRunning === false && isSorted === false){
            insertionSortAnimation(setIsRunning, setIsSorted, speed, copiedArr,  array)
        }
    }

    return(
        <>
            <div className='container'>
                {array.map((value, idx) => (
                    <div className='array-bar' key={idx} style = {{height:`${value}px`, backgroundColor: "#FF85D5", width: `${width}px`}}></div>
                ))}
            </div>
            <ButtonBar 
                changeArraySize={changeArraySize}
                resetArray={resetArray}
                insertionSort={insertionSort}
                quickSort={quickSort}
                mergeSort={mergeSort}
                bubbleSort={bubbleSort}
                size={arrSize}
                isRunning={isRunning}
                isSorted={isSorted}
            />
        </>
    );
};

export default SortingVisualiser
