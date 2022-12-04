// code your solution here
function mondayWork(work="go to the office"){
    return `This Monday, I will ${work}.`
}

function saturdayFun(fun = 'roller-skate'){
    return `This Saturday, I want to ${fun}!` 

}
function wrapAdjective(flair='*'){
    return function(adj=special){
        return `You are ${flair}${adj}${flair}!`
    }

}