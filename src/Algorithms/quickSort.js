export function quickSortAnimationArray(array){
    const animations = []
    let len = array.length
    if(len<2) return
    quickSortHelper(array, 0, len-1, animations)
    return animations
}

function partition(array, low, high, animations){
    let pivot = array[high]
    let i= low
    let prevI
    for(let j = low; j < high; j++){
        prevI = i
        if(array[j] <= pivot){
            swap(array, i, j)
            i++
        }
        animations.push([j, high])
        animations.push([j, high])
        animations.push([array[prevI], array[j], prevI, j])
        animations.push([1000])
    }
    swap(array, i, high)
    animations.push([i, high])
    animations.push([i, high])
    animations.push([array[i],array[high], i, high])
    animations.push([i])
    return i
}

function swap(array, a, b){
    let temp = array[a]
    array[a] = array[b]
    array[b] = temp
}

function quickSortHelper(array, low, high, animations){
    if(low<high){
        let pi = partition(array, low, high, animations)

        quickSortHelper(array, low, pi-1, animations)
        quickSortHelper(array, pi+1, high, animations)
    }
}