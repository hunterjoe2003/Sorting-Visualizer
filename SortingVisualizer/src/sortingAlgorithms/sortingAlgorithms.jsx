
//mergeSort
export function getMergeSortAnimations(array) {
  if (array.length <= 1) return array;

  const animations = [];
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  console.log(animations);
  return animations;
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, i]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, i]);
    // We overwrite the value at index k in the original array with the
    // value at index i in the auxiliary array.
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([j, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([j, j]);
    // We overwrite the value at index k in the original array with the
    // value at index j in the auxiliary array.
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}
//quickSort
export function getQuickSortAnimations(array){
  if(array.length <= 1) return array;

  const animations = [];
  const auxiliaryarray = array.slice();
  doQuickSort(auxiliaryarray,0,auxiliaryarray.length-1,animations);
  return animations;
}

function doQuickSort(auxiliaryarray,startIdx,endIdx,animations){

if(startIdx >= endIdx) {return};

//Math.floor(Math.random()*(endIdx - startIdx + 1) + startIdx)
let pivotIdx = startIdx;
let pivot = auxiliaryarray[pivotIdx];

for(let i = startIdx; i< pivotIdx; i++){
  
  if(auxiliaryarray[i] > pivot){
    animations.push([i,pivotIdx]);
    animations.push([i,pivotIdx]);
    let k = i;
    let heights = [];
    while (k<pivotIdx){
     heights.push([k,auxiliaryarray[k+1]]);
     heights.push([k+1,auxiliaryarray[k]]);
     let m = auxiliaryarray[k];
     let n = auxiliaryarray[k+1];
     auxiliaryarray[k+1] = m;
     auxiliaryarray[k] = n;
     if ((k+1)==pivotIdx){
       pivotIdx--;
     }
     k++;
    }
    animations.push(heights);
   }
}
for(let i = pivotIdx+1; i < endIdx+1; i++){
  if(auxiliaryarray[i] < pivot){
    animations.push([i,pivotIdx]);
    animations.push([i,pivotIdx]);
    let k = i;
    let heights = [];
    while (k>pivotIdx){
     heights.push([k,auxiliaryarray[k-1]]);
     heights.push([k-1,auxiliaryarray[k]]);
     let m = auxiliaryarray[k];
     let n = auxiliaryarray[k-1];
     auxiliaryarray[k-1] = m;
     auxiliaryarray[k] = n;
     if ((k-1)==pivotIdx){
       pivotIdx++;
     }
     k--;
    }
    animations.push(heights);
   }
}

doQuickSort(auxiliaryarray,startIdx,pivotIdx-1,animations);
doQuickSort(auxiliaryarray,pivotIdx+1,endIdx,animations);

}

//heapSort

export function getHeapSortAnimations(array){
  if (array.length <= 1) return array;

  const animations = [];
  const auxillaryarray = array.slice();
  doHeapSort(auxillaryarray,animations);
  return animations;
}

function doHeapSort(array,animations){
  let endIdx = array.length-1;
  while (endIdx >0){
    let [maxIdx,max] =  findMax(array.slice(0,endIdx+1));
    animations.push([0,maxIdx]);
    animations.push([0,maxIdx]);
    animations.push([0,max]);
    animations.push([0,maxIdx]);
    animations.push([0,maxIdx]);
    animations.push([maxIdx,array[0]]); 
    array[maxIdx] = array[0];
    array[0] = max;
    animations.push([0,endIdx]);
    animations.push([0,endIdx]);
    animations.push([0,array[endIdx]]);
    animations.push([0,endIdx]);
    animations.push([0,endIdx]);
    animations.push([endIdx,max]);
    array[0] = array[endIdx];
    array[endIdx] = max;
    endIdx--;
  }

}

function findMax(auxillaryarray){
  let maxIdx = 0
  let max = auxillaryarray[0];
  for (let i = 1; i <auxillaryarray.length; i++){
     if (auxillaryarray[i] > max){
       maxIdx = i;
       max = auxillaryarray[i];
     }
  }
   return [maxIdx,max];
}

//bubbleSort

export function getBubbleSortAnimations(array){
  if (array.length <= 1) return array;
  
  const animations = [];
  const auxillaryArray = array.slice();

  let check = false;
  let count = 0;
  while (check === false){
    count = 0;
  for (var i = 0; i < array.length-1; i++){
    animations.push([i,i+1]);
    animations.push([i,i+1]);

    if(auxillaryArray[i] > auxillaryArray[i+1]){
      animations.push([i,auxillaryArray[i+1]]);
      animations.push([i,i+1]);
      animations.push([i,i+1]);
      animations.push([i+1,auxillaryArray[i]]);
      const idx1 = auxillaryArray[i+1];
      const idx2 = auxillaryArray[i];
      auxillaryArray[i] = idx1;
      auxillaryArray[i+1] = idx2;
      count++;
    }
    else{
      animations.push([i,auxillaryArray[i]]);
      animations.push([i,i+1]);
      animations.push([i,i+1]);
      animations.push([i+1,auxillaryArray[i+1]]);
    }
  }
  if(count === 0){
   check = true;
  }
  }
  return animations;
}