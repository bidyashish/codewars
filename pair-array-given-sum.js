/* 
arr=[1, 4, 45, 6, 10, 8]

sum=11

find array[a,b,c]  where a+b+c = sum

eg: From above array 1+10 =11
so Answers is [1,10]

Bidyashish Kumar
*/

function givenPairs(arr, sum) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == sum) {
        return [arr[i], arr[j]];
      }
    }
  }
  return false;
}

console.log(givenPairs([1, 4, 45, 6, 10, 8], 11));
