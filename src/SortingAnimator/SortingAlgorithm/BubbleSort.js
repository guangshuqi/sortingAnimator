export default function getBubbleSortSequence(unsortedArray, offset, sequences){
    const auxArray = [...unsortedArray]
    for (let i = 0; i<auxArray.length;i++){
        for (let j =0; j < auxArray.length-i-1; j++){
            sequences.push({
                type: 'colorChange',
                indices: [j, j+1]
            })
            if (auxArray[j]>auxArray[j+1]){
                sequences.push({
                    type: 'heightChange',
                    indices: [j, j+1],
                    newHeights: [auxArray[j+1], auxArray[j]]
                })
                let temp = auxArray[j]
                auxArray[j]=auxArray[j+1]
                auxArray[j+1]=temp
            }
            sequences.push({
                type: 'colorChange',
                indices: [j, j+1]
            })
        }
    }
    return auxArray
}