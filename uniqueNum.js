
let arr=[ 0, 1, 0 ];
function findUniq(arr) {
    arr.sort((a,b)=>a-b);
    let arr2=[];
    let arr3=[];
    for (let i = 0; i < arr.length-1; i++) {
        if(arr[i]!=arr[i+1]){
            arr2.push(arr[i+1]);
        }
        else{
            arr3.push(arr[i]);
        }        
    }
    if(arr2.length==1){
        return arr2[0];
    }
    else{
        return arr3[0];
    }
}
console.log(findUniq(arr));
  