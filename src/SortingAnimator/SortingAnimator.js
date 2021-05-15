import React from 'react'
import './SortingAnimator.css'
import getMergeSortSequence from './SortingAlgorithm/MergeSort'
import getBubbleSortSequence from './SortingAlgorithm/BubbleSort'

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
        const sortedArray = getSortSequence(array,0, sequences)
        // console.log(sortedArray)
        console.log(sequences)
        for (let i=0; i < sequences.length;i++){
            let sequence = sequences[i]
            if(sequence['type']=='colorChange'){
                const [idx1, idx2] = sequence['indices']
                setTimeout(()=>{setArrayColorState([idx1,idx2])}, i*ANIMATION_SPEED_MS)   
                
            }else{
                
                const idxs = sequence['indices']
                const newHeights = sequence['newHeights']
    
                setTimeout(()=>{idxs.forEach((v,idx)=>{
                    setArrayState(v, newHeights[idx])
                })}, i*ANIMATION_SPEED_MS)   
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
    function setArrayColorState(indices){

        
        setArrayColor(oldArray => {
            const newArray=[...oldArray]
            indices.forEach(idx=>{
                if (newArray[idx] == PRIMARY_COLOR){
                    newArray[idx] = SECONDARY_COLOR
                }else{
                    newArray[idx] = PRIMARY_COLOR
                }
            })
            return newArray
        })
    }

    return (
        <div className="main-container">
        <h1>Sorting Animator</h1>
            <div className="array-container">
            {array.map((value, idx)=>(
                <div 
                    className='array-bar'
                    key={idx}
                    style={{
                        backgroundColor: arrayColor[idx],
                        height: `${value*4}px`
                    }}
                ></div>
            ))}
            
        </div>
        <div className="button-container">
            <button onClick={()=>runAnimation(getMergeSortSequence)}>Merge Sort</button>
            <button onClick={()=>runAnimation(getBubbleSortSequence)}>Bubble Sort</button>
        </div>
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

