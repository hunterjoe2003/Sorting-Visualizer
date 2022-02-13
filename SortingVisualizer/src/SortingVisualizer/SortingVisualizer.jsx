import React from 'react';
import './SortingVisualizer.css';
import {getMergeSortAnimations} from '../sortingAlgorithms/sortingAlgorithms';
import {getQuickSortAnimations} from '../sortingAlgorithms/sortingAlgorithms';
import {getHeapSortAnimations} from '../sortingAlgorithms/sortingAlgorithms';
import {getBubbleSortAnimations} from '../sortingAlgorithms/sortingAlgorithms';
import './SortingVisualizer.css';


const ANIMATION_SPEED_MS = 10;


const NUMBER_OF_ARRAY_BARS = 310;


const PRIMARY_COLOR = 'turquoise';

const SECONDARY_COLOR = 'red';


export default class SortingVisualizer extends React.Component{
  constructor(props){
    super(props);

    this.state = {
     array: [],
    };
  }

componentDidMount(){
  this.resetArray();
}

resetArray(){
  const array = [];
  for (let i = 0; i<100; i++){
   array.push(randomIntFromInterval(5,750));
  }
  this.setState({array});
}

mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }


quickSort(){
    const animations = getQuickSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const heights = animations[i];
          for (let i = 0; i <heights.length; i++){
          const [barOneIdx, newHeight] = heights[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
          }
        }, i * ANIMATION_SPEED_MS);
      }
    }

}

heapSort(){
   const animations = getHeapSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }

}

bubbleSort(){
  const animations = getBubbleSortAnimations(this.state.array);

  for(let i = 0; i<animations.length; i++){
  const arrayBars = document.getElementsByClassName('array-bar');
  const isColorChange = i % 3 !== 2;
  if (isColorChange){
      const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
        } else{
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
        } 
  }
}

render(){
  const {array} = this.state;
  
  return(
    <div className = "array-container">
  {array.map((value,idx) =>(
    <div className = "array-bar" key={idx} style={{height: `${value}px`}}>
    </div>
  ))}
  <div class = "buttons">
   <button id = "resetButton" onClick ={() => this.resetArray()}>Generate New Array</button> 
   <button id = "mergeButton" onClick ={() => this.mergeSort()}>Merge Sort</button> 
    <button id = "quickButton" onClick ={() => this.quickSort()}>Quick Sort</button> 
    <button id = "heapButton" onClick ={() => this.heapSort()}>Heap Sort</button> 
    <button id = "bubbleButton" onClick ={() => this.bubbleSort()}>Bubble Sort</button> 
   </div>
  </div>
  );
 }

 
}

function randomIntFromInterval(min, max){
return Math.floor(Math.random()* (max-min+1) +min);
}