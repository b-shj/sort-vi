import { insertionSort } from "../Algorithms/insertionSort"
import { sortedGreen } from "../Helpers/sortedGreen";

export function insertionSortAnimation(setIsRunning, setIsSorted, speed, array) {
    setIsRunning(true)
    const animations = insertionSort(array)
    const l = animations.length

    for(let i=0; i<l; i++){
        const arrayBars = document.getElementsByClassName('array-bar')
        const isColorChange = animations[i][0] === 0 || animations[i][0] === 1
        if(isColorChange){
            const [x, barOneIdx, barTwoIdx] = animations[i]
            const color = x === 1 ? "turquoise" : "red"
            setTimeout(()=>{
                arrayBars[barOneIdx].style.backgroundColor = color
                arrayBars[barTwoIdx].style.backgroundColor = color
            }, i * speed)
        }else{
            setTimeout(()=>{
                const [, barIdx, barHeight] = animations[i]
                arrayBars[barIdx].style.height = `${barHeight}px`
            }, i * speed)
        }
    }

    sortedGreen(setIsRunning, setIsSorted, speed, array, l);

}
