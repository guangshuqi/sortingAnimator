import React from 'react'
import './SortingAnimator.css'

const ARRAY_LEN = 20
// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';
const ANIMATION_SPEED_MS = 100
// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';
export default function SortingAnimator(){

    const [array, setArray] = React.useState([])
    const [arrayColor, setArrayColor] = React.useState([])
    React.useEffect(()=> {
        const arr = Array.from(Array(ARRAY_LEN)).map(_=>randomIntFromInterval(1,100))
        setArray(arr)
        const arrColor = Array.from(Array(ARRAY_LEN)).map(_=>PRIMARY_COLOR)
        setArrayColor(arrColor)
    },[])

    function runAnimation(getSortSequence){
        const sequences = []
        const sortedArray = getSortSequence(array, 0 , sequences)
        // console.log(sortedArray)
        console.log(sequences)
        for (let i=0; i < sequences.length;i++){
            let sequence = sequences[i]
            if(sequence['type']=='colorChange'){
                const [idx1, idx2] = sequence['indices']
                let newColor
                if(arrayColor[idx1] == PRIMARY_COLOR){
                    newColor = SECONDARY_COLOR
                }else{
                    newColor = PRIMARY_COLOR
                }
                setTimeout(()=>{setArrayColorState(idx1)}, i*ANIMATION_SPEED_MS)   
                setTimeout(()=>{setArrayColorState(idx2)}, i*ANIMATION_SPEED_MS)   
            }else{
                
                const idx = sequence['index']
                const newHeight = sequence['newHeight']
    
                setTimeout(()=>{setArrayState(idx, newHeight)}, i*ANIMATION_SPEED_MS)   
            }
        }
    }
    function setArrayState(idx, newState){
        
        
        setArray(oldArray=>{
            const newArray=[...oldArray]
            newArray[idx] = newState
            return newArray
        })
    }
    function setArrayColorState(idx){

        
        setArrayColor(oldArray => {
            const newArray=[...oldArray]
            if (newArray[idx] == PRIMARY_COLOR){
                newArray[idx] = SECONDARY_COLOR
            }else{
                newArray[idx] = PRIMARY_COLOR
            }
            
            return newArray
        })
    }

    return (
        <div className="array-container">
            {array.map((value, idx)=>(
                <div 
                    className='array-bar'
                    key={idx}
                    style={{
                        backgroundColor: arrayColor[idx],
                        height: `${value}px`
                    }}
                ></div>
            ))}
            <button onClick={()=>runAnimation(getMergeSortSequence)}>Merge Sort</button>
        </div>
    )
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
function arraysAreEqual(arrayOne, arrayTwo) {
if (arrayOne.length !== arrayTwo.length) return false;
for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
    return false;
    }
}
return true;
}

// Merge Sort (Recursive)
function getMergeSortSequence (unsortedArray,offset, sequences) {
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
                index: startIndex+leftOffset,
                newHeight: leftArr[leftIndex]
            })
            leftIndex++;
        } else {
            resultArray.push(rightArr[rightIndex])
            sequence.push({
                type: 'heightChange',
                index: startIndex+leftOffset,
                newHeight: rightArr[rightIndex]
            })
            rightIndex++;
        }
        startIndex++
    }
    // while (leftIndex<leftArr.length){
        
    // }
    return [resultArray, leftOffset]
  }
  
