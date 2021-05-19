export default function getQuickSortSequence(unsortedArray, offset, sequences){

    const auxArray = [...unsortedArray]
    
    if (auxArray.length <= 1){
        if (auxArray.length==1){
            sequences.push({
                type: 'colorChange',
                indices: [offset],
                color: 'green'
            })
        }
        return [...auxArray]
    }
    let pivot = auxArray[0]

    let pivotIdx = 0 
    for (let i = 1; i< auxArray.length; i++){
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
        
        if (auxArray[i]<pivot){
            if (i == pivotIdx+1){
                sequences.push(
                    {
                        type: "heightChange",
                        indices: [pivotIdx+offset, pivotIdx+offset+1],
                        newHeights: [auxArray[pivotIdx+1], pivot]
                    }
                ) 
                auxArray[pivotIdx] =  auxArray[pivotIdx+1]
                auxArray[pivotIdx+1] = pivot
            }
            else{
                let temp = auxArray[pivotIdx+1]
                sequences.push(
                    {
                        type: "heightChange",
                        indices: [pivotIdx+offset, pivotIdx+offset+1, i+offset],
                        newHeights: [auxArray[i], pivot, temp]
                    }
                )
                
                auxArray[pivotIdx+1] = pivot
                auxArray[pivotIdx] = auxArray[i]
                auxArray[i]=temp
            }
            
            pivotIdx++

        }
    }
    sequences.push({
        type: 'colorChange',
        indices: [pivotIdx+offset],
        color: 'green'
    })
    return [...getQuickSortSequence(auxArray.slice(0,pivotIdx),offset,sequences), pivot, ...getQuickSortSequence(auxArray.slice(pivotIdx+1,auxArray.length),offset+pivotIdx+1, sequences)]
}