//receive a array of letters and return a object with 
//all combinations between this letters
export function createCommsState(letterScheme){
    let allPairs = {};
    for (let i in letterScheme){
        for (let j in letterScheme){
            if(i !== j){
                allPairs[letterScheme[i]+letterScheme[j]] = {reviewed: false, times: 0}
            }
        }
    }
    return allPairs;
}

//test
//createCommsState(["A","B","C"])