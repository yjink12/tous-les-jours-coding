function solution(s){
    let answer = true;
    
    let tempArr = [")"];
    
    if (s[0] == ")") answer = false;
    else {
        for (let i=1; i<s.length; i++) {
            if (tempArr[0] === s[i]) {
                tempArr.pop();
                answer = true;
            }
            else tempArr.push(")");
        }
        answer = tempArr.length > 0 ? false : true;
    }
 
    return answer;
}