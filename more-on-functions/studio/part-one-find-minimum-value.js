//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

function numArray(array){
let minValue = array[0]
    for (let i = 0; i < array.length; i++){
        if (minValue > array[i]){
            minValue = array[i] 
        }
    }
    return minValue
    }
    console.log(numArray(nums1));
//Using one of the test arrays as the argument, call your function inside the console.log statement below.

//console.log(numArray(nums1));
