



let arr = [false,1,0,1,2,0,1,3,"a"];

function moveZeros(arr) {
    let array=[];
    let array2=[];
    arr.forEach(element => {
        if(element!==0){
            array.push(element);
        }
        else{
            array2.push(0);
        }
    });
    return array.concat(array2);
}

console.log(moveZeros(arr));
