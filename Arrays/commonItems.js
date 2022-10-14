const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'a'];




const commonItems = (array1, array2)=>{
    const arrayObj = {}
    for(let i = 0; i<array1.length; i++){ 
        if(!array1[i] in arrayObj){
            arrayObj[array1[i]] = true
        }
    }


    for(let i =0; i < array2.length; i++){
        if(!Object.keys(array1).includes(array2[i])){
            return false
        }
    }

    return true;
}

console.log(commonItems(array1,array2));

const reverseAString = (str)=>{
    //check type of string
    let rev = "";
    if(typeof str != 'string'){
        return "Invalid input"
    }

    if(str.length === 1){
        return str
    }

    for(i= str.length - 1; i>=0; i--){
        rev += str[i]
    }

    return rev;
}


console.log(reverseAString("Blessing"))


const mergeSortedArrays = (array1, array2)=>{

    let sortedArrays = [];

    let length1 = array1.length;
    let length2 = array2.length;
    let i = 0;
    let j = 0;
    while( i < length1 && j < length2){

        if(array1[i] < array2[j]){
            sortedArrays.push(array1[i])
            i++;
        }else{
            sortedArrays.push(array2[j]);
            j++;
        }
    }

    while(i < array1.length){
        sortedArrays.push(array1[i]);
        i++;
     };
     while(j < array2.length){
        sortedArrays.push(array2[j]);
        j++;
     };

    
    return sortedArrays
}

console.log(mergeSortedArrays([0,3,4,31], [3,4,30]));