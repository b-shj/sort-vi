import { quickSortAnimationArray } from "../Algorithms/quickSort"
import { sortedGreen } from "../Helpers/sortedGreen";


export function quickSortAnimation(setIsRunning, setIsSorted, speed, array) {
    setIsRunning(true)
    const animations = quickSortAnimationArray(array)
    const l =  animations.length
    
    for(let i=0; i<l; i++){
      const arrayBars =  document.getElementsByClassName('array-bar')
      let isColorChange = false
      if(i%4 === 0 || i%4 === 1){
        isColorChange = true
      }
      if(isColorChange){
        const[barOneIdx, barTwoIdx] = animations[i];
        const color = i % 4 === 0 ? "red" : "turquoise"
        setTimeout(()=>{
          arrayBars[barOneIdx].style.backgroundColor = color
          arrayBars[barTwoIdx].style.backgroundColor = color
        }, i * speed)
      }else if(i % 4 === 2){
        setTimeout(() => {
        const [barOneHeight, barTwoHeight, barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        barOneStyle.height = `${barOneHeight}px`;
        barTwoStyle.height = `${barTwoHeight}px`;
      }, i * speed);
      } else if (i % 4 === 3) {
        setTimeout(() => {
          const [pivotBarIdx] = animations[i];
          if (pivotBarIdx !== 1000) {
            const pivotBarStyle = arrayBars[pivotBarIdx].style;
            pivotBarStyle.backgroundColor = "#E9897E";
          }
        }, i * speed);
      }

    }
    sortedGreen(setIsRunning, setIsSorted, speed, array, l);
}
