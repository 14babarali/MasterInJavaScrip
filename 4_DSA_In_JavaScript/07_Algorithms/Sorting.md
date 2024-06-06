# Sorting Algorithms in JavaScript

## Overview
Sorting algorithms are used to rearrange elements in a collection in a specific order.There are various sorting algorithms available, each with its own advantages and disadvantages in terms of time and space complexity.

## Detailed Explanation
Here are some commonly used sorting algorithms:
- ** Bubble Sort **: Compares adjacent elements and swaps them if they are in the wrong order.
- ** Selection Sort **: Finds the minimum element in the unsorted portion of the array and swaps it with the first unsorted element.
- ** Insertion Sort **: Builds the final sorted array one element at a time by repeatedly taking the next element and inserting it into the correct position in the already sorted portion of the array.
- ** Merge Sort **: Divides the array into smaller subarrays, sorts each subarray, and then merges them back together in the correct order.
- ** Quick Sort **: Picks a pivot element and partitions the array into two subarrays such that elements less than the pivot are on the left and elements greater than the pivot are on the right.It then recursively sorts the subarrays.

## Code Example(Bubble Sort)
    ```javascript
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

const array = [5, 3, 8, 4, 2];
console.log("Original array:", array);
console.log("Sorted array (Bubble Sort):", bubbleSort(array));
