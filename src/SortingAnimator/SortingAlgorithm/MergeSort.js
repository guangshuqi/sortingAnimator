// Merge Sort (Recursive)
export default function getMergeSortSequence (unsortedArray,offset=0, sequences) {
    // No need to sort the array if the array only has one element or empty
    const N = unsortedArray.length
    if (N == 0) {
      return [[], offset];
    }else if (N ==1){
        return [unsortedArray, offset]
    }
    // In order to divide the array in half, we need to figure out the middle


    const middle = Math.floor(N/ 2);
    
    const left = unsortedArray.slice(0, middle)
    const right = unsortedArray.slice(middle, N)

    // Using recursion to combine the left and right
    return merge(
        getMergeSortSequence(left, offset,sequences), getMergeSortSequence(right, offset+middle,sequences), sequences
    );
  }


  
  function merge (left, right, sequence) {
    let resultArray = [], leftOffset = left[1], leftArr = left[0], rightArr = right[0],rightOffset=right[1], startIndex = 0, leftIndex = 0, rightIndex=0
    
    while (leftIndex <leftArr.length || rightIndex < rightArr.length) {
        sequence.push({
            type: 'colorChange',
            indices: [leftIndex+leftOffset, rightIndex+rightOffset]
        })
        sequence.push({
            type: 'colorChange',
            indices: [leftIndex+leftOffset, rightIndex+rightOffset]
        })
        if (rightIndex === rightArr.length || leftArr[leftIndex] < rightArr[rightIndex]) { 
            resultArray.push(leftArr[leftIndex])
            sequence.push({
                type: 'heightChange',
                indices: [startIndex+leftOffset],
                newHeights: [leftArr[leftIndex]]
            })
            leftIndex++;
        } else {
            resultArray.push(rightArr[rightIndex])
            sequence.push({
                type: 'heightChange',
                indices: [startIndex+leftOffset],
                newHeights: [rightArr[rightIndex]]
            })
            rightIndex++;
        }
        startIndex++
    }
    // while (leftIndex<leftArr.length){
        
    // }
    return [resultArray, leftOffset]
  }
  
