export function sortedGreen(setIsPlaying, setIsSorted, speed, array, n) {
    setTimeout(() => {
      setIsPlaying(false);
      setIsSorted(true);
      const arrayBars = document.getElementsByClassName("array-bar");
      for (let i = 0; i < array.length; i++) {
        setTimeout(() => {
          arrayBars[i].style.backgroundColor = "#FF85Df";
        }, i * speed);
      }
    }, n * speed);
}
  