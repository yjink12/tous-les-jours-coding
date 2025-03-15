function solution(n, lost, reserve) {
    var answer = 0;
    
    const actualLost = lost.filter(student => !reserve.includes(student));
    const actualReserve = reserve.filter(student => !lost.includes(student));
    
    let sortLost = actualLost.sort((a, b) => a - b);
    let sortReserve = actualReserve.sort((a, b) => a - b);
        
    for (let student of sortLost) {
        const canShare = sortReserve.filter((re) => re == student-1 || re == student+1);
        
        if (1 <= canShare.length) {
            sortLost = sortLost.filter((lt) => lt !== student);
            sortReserve = sortReserve.filter((re) => re !== canShare[0]);
        }
    }
    
    answer = n - sortLost.length;
    return answer;
}