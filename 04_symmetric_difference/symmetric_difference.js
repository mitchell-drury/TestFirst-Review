function difference (arr1, arr2) {
    return arr1.filter(function (element){
        return arr2.indexOf(element) < 0;
    });
}

function symmetricDiff(arr1, arr2) {
    return difference(arr1, arr2).concat(difference(arr2,arr1));
}