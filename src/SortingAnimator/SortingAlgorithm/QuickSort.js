export default function getQuickSortSequence(unsortedArray, offset, sequences){

    if (unsortedArray.length <= 1){
        if (unsortedArray.length==1){
            sequences.push({
                type: 'colorChange',
                indices: [offset],
                color: 'green'
            })
        }
        return [...unsortedArray]
    }
    let pivot = unsortedArray[0]

    let pivotIdx = 0 
    for (let i = 1; i< unsortedArray.length; i++){
        sequences.push(
            {
                type: 'colorChange',
                indices: [pivotIdx+offset, i+offset]
            }
        )
        sequences.push(
            {
                type: 'colorChange',
                indices: [pivotIdx+offset, i+offset]
            }
        )
        
        if (unsortedArray[i]<pivot){
            if (i == pivotIdx+1){
                sequences.push(
                    {
                        type: "heightChange",
                        indices: [pivotIdx+offset, pivotIdx+offset+1],
                        newHeights: [unsortedArray[pivotIdx+1], pivot]
                    }
                ) 
                unsortedArray[pivotIdx] =  unsortedArray[pivotIdx+1]
                unsortedArray[pivotIdx+1] = pivot
            }
            else{
                let temp = unsortedArray[pivotIdx+1]
                sequences.push(
                    {
                        type: "heightChange",
                        indices: [pivotIdx+offset, pivotIdx+offset+1, i+offset],
                        newHeights: [unsortedArray[i], pivot, temp]
                    }
                )
                
                unsortedArray[pivotIdx+1] = pivot
                unsortedArray[pivotIdx] = unsortedArray[i]
                unsortedArray[i]=temp
            }
            
            pivotIdx++

        }
    }
    sequences.push({
        type: 'colorChange',
        indices: [pivotIdx+offset],
        color: 'green'
    })
    return [...getQuickSortSequence(unsortedArray.slice(0,pivotIdx),offset,sequences), pivot, ...getQuickSortSequence(unsortedArray.slice(pivotIdx+1,unsortedArray.length),offset+pivotIdx+1, sequences)]
}