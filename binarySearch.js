/*
    Given a sorted array of integeres and an integer n; check if n exists in the array
*/
const binarySearch = function(arr, n){
    let left = 0, right = arr.length,middle = Math.floor((left+right)/2);

    while(left < right){
        middle = Math.floor((left+right)/2);

        if(n > arr[middle]){
            left = middle+1;
        }
        else{
            right = middle;
        }
    }

    if(n == arr[left]){
        console.log("number n found in the list at index", left);
        return true;
    }
    return "Number not found";
};

console.log(binarySearch([1,2,3,4,11,14,18,21,26,29,31,39,40,45],31));