var lengthOfLongestSubstring = function(s) {
    if(s.length==0){
        return 0;
    }
    let i,len=0,lar="",ansLen=1;
    lar=lar+s[0];
    for(i=1;i<s.length;i++){
        if(lar.includes(s[i])){
            var loc=lar.indexOf(s[i]);
            var s_len=lar.length;
            lar=lar.substring(loc+1, s_len);
            lar=lar+s[i];
        }
        else{
            lar=lar+(s[i]);
           if(ansLen<lar.length)
               ansLen=lar.length;
        }    
    }
    return ansLen;
};