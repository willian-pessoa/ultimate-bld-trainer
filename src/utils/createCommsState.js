//receive a array of letters and return a object and an array with 
//all combinations between this letters 
export function createCommsState(letterScheme){
    let allPairsStatus = {};
    let allPairsToChoice = [];
    for (let i in letterScheme){
        for (let j in letterScheme){
            if(i !== j){
                allPairsStatus[letterScheme[i]+letterScheme[j]] = {reviewed: false, times: 0}
                allPairsToChoice.push(letterScheme[i]+letterScheme[j]);
            }
        }
    }
    return {allPairsStatus, allPairsToChoice};
}

//test
//createCommsState(["A","B","C"])