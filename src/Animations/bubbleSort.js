import { bubbleSort } from '../Algorithms/bubbleSort'
import { sortedGreen } from "../Helpers/sortedGreen";

export function bubbleSortAnimation(setIsRunning, setIsSorted, speed, copiedArr, array) {
  setIsRunning(true)  
  const animations = bubbleSort(copiedArr)
  const l = animations.length

  for(let i=0; i<l;i++){
    const arrayBars = document.getElementsByClassName("array-bar")
    const isColorChange = i % 3 !== 2
    if(isColorChange){
      const [barOneIdx, barTwoIdx] = animations[i]
      const color = i % 3 === 0 ? "red" : "turquoise"
      setTimeout(()=>{
        arrayBars[barOneIdx].style.backgroundColor = color
        arrayBars[barTwoIdx].style.backgroundColor = color
      }, i * speed)
    }else{
      setTimeout(()=>{
        const [barOneHeight, barTwoHeight, barOneIdx, barTwoIdx] = animations[i]
        arrayBars[barOneIdx].style.height = `${barOneHeight}px`
        arrayBars[barTwoIdx].style.height = `${barTwoHeight}px`
      }, i * speed)
    }
  }
  sortedGreen(setIsRunning, setIsSorted, speed, array, l);

}
