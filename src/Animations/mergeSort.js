import { mergeSort } from '../Algorithms/mergeSort'
import { sortedGreen } from "../Helpers/sortedGreen";


export function mergeSortAnimation(setIsRunning, setIsSorted, speed, array){

    setIsRunning(true)
    const animations = mergeSort(array)
    const l = animations.length

    for(let i=0; i<l; i++){
        const arrayBars = document.getElementsByClassName('array-bar')
        const isColorChange = i % 3 !== 2 
        if(isColorChange){
            const [barOneIdx, barTwoIdx] = animations[i]
            const color = i % 3 === 0 ? "red" : "turquoise"
            setTimeout(() => {
                arrayBars[barOneIdx].style.backgroundColor = color
                arrayBars[barTwoIdx].style.backgroundColor = color  
            }, i * speed);
        }else{
            setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i]
                arrayBars[barOneIdx].style.height =  `${newHeight}px`
            }, i * speed)
        }
    }

    sortedGreen(setIsRunning, setIsSorted, speed, array, l);

}

