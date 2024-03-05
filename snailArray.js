let array = [[]];
const snail = function(array) {
    if(array[0].length==0){
        return [];
    }
    let array2=[];
    let left=0;
    let right=array.length-1;
    let top=0;
    let bottom=array.length-1;
    while(top<=bottom && left<=right){
        for (let i = left; i <= right; i++) {
            array2.push(array[top][i]);
        }
        top++;
        for (let j = top; j <= bottom; j++) {
            array2.push(array[j][right]);
        }
        right--;
        for (let k = right; k >= left; k--) {
            array2.push(array[bottom][k]);
        }
        bottom--;
        for (let l = bottom; l >= top; l--) {
            array2.push(array[l][left]);
        }
        left++;
    }
    return array2;
}

console.log(snail(array));