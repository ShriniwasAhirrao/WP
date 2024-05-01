// Define a function to sort an array
function customSort(arr) {
    // Check if the input is an array
    if (!Array.isArray(arr)) {
      return "Input is not an array!";
    }
  
    // Perform sorting using bubble sort algorithm
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        // Compare adjacent elements and swap if necessary
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  
    return arr; // Return the sorted array
  }
  
  // Example usage:
  const unsortedArray = [3, 1, 5, 2, 4];
  console.log("Unsorted Array:", unsortedArray);
  const sortedArray = customSort(unsortedArray);
  console.log("Sorted Array:", sortedArray);
  