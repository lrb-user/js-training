function getStringLength(str){
    str = str || "";
    return str.length;
}

getStringLength();
getStringLength('hi');

function getStringLength(str = ''){
    return str.length;
}
getStringLength();
getStringLength('hi');