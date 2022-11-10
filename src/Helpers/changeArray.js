export function changeArrayHelper(
    setIsSorted,
    array,
    setCopiedArr,
    setSameArr,
    setArray,
    setWidth,
    setSpeed,
    size,
    randomIntGenerator
  ) {
    setIsSorted(false);
    const arr = [];
    for (let i = 0; i < size; i++) {
      arr.push(randomIntGenerator(5, 630));
    }
    setArray(arr);
    setCopiedArr([...arr])
    setSameArr([...arr]);
    setWidth(920 / arr.length);
    const arrayBars = document.getElementsByClassName("array-bar");
    for (let i = 0; i < array.length; i++) {
      arrayBars[i].style.backgroundColor = "#FF85D5";
    }
    setSpeed((2 * 500) / size);
    return arr;
  }
  