export const setArrayForCarusel = (array:Array<any> = [], size: number = 4):Array<any> => {
    let subarray = [];

    for (let i = 0; i <Math.ceil(array.length/size); i++){
        subarray[i] = array.slice((i*size), (i*size) + size);
    }
    return subarray;
}