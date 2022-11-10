export function insertionSort(array){
    const animations=[]
    let len = array.length
    if(len<2) return

    for(let i=1; i<len; i++){
        let key = array[i]
        let j = i - 1

        while(key < array[j] && j >=0 ){
            array[j+1] = array[j]
            animations.push([0, i, j])
            animations.push([1, i, j])
            animations.push([2, j+1, array[j+1]])
            --j
        }
        array[j+1] = key
        animations.push([2, j+1, array[j+1]])
    }

    return animations
}