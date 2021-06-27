var longestCommonPrefix = function(strs) {
    let firstWrd = strs[0];
    let check = '';
    let i=0;
    while(i<firstWrd.length){
        let checkStr = firstWrd.slice(0,i+1);
        let flag = true;
        for(let j=1; j<strs.length; j++){
            let checkInAll = strs[j].slice(0,i+1);
            if(checkStr !== checkInAll) flag = false;
        }
        if(flag) check = checkStr;
        else break;
        i++;
    }
    return check;   
};