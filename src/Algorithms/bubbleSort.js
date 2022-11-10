export function bubbleSort(array){
    let len = array.length
    const animations = []
    if(array.length <= 1) return array

    for(let i=0; i<len-1; i++){
        let sorted = 0
        for(let j=0; j < len-i-1 ; j++){
            if(array[j] > array[j+1]){
                let temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
                sorted = 1
            }
            animations.push([j, j + 1])
            animations.push([j, j + 1])
            animations.push([array[j], array[j+1], j, j+1])
        }
        if(sorted===0){
            break;
        }
    }
    return animations;
}