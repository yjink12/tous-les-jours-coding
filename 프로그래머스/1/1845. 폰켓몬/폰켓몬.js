function solution(nums) {
    var answer = 0;
    let N = nums.length;
    let limit = N/2;
    
    let myPocket = new Map();
    nums.forEach((mon) => {
        if (myPocket.get(mon))
            myPocket.set(mon, myPocket.get(mon) + 1);
        else myPocket.set(mon, 1);
    });
    
    if (myPocket.size < limit)
        answer = myPocket.size;
    else
        answer = limit;
    return answer;
}