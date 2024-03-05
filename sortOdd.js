

let array=[5, 8, 6, 3, 4];
function sortArray(array) {
    let index=[];
    let array2=[];
    array.forEach((x,i) => {
        if(x%2!=0){
            index.push(i);
            array2.push(x);
        }
    });
    array2.sort((a,b)=>a-b);
    for (let i = 0; i < array2.length; i++) {
        array[index[i]]=array2[i];
    }
    return array;
}
console.log(sortArray(array));



