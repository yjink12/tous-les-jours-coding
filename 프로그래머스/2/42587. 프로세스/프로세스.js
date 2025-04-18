function solution(priorities, location) {
    let answer = 0;
    let locationQueue = [];
    let endLocation = [];
    
    for (let i=0; i<priorities.length; i++) {
        locationQueue.push(i);
    }
    
    while (priorities.length > 0) {
        const sortPriorities = [...priorities].sort((a, b) => b - a);
        if (priorities[0] < sortPriorities[0]) {
            priorities.push(priorities[0]);
            priorities.shift();
            
            locationQueue.push(locationQueue[0]);
            locationQueue.shift();
        } else {
            endLocation.push(locationQueue[0]);
            priorities.shift();
            locationQueue.shift();
        }
    }
    answer = endLocation.indexOf(location) + 1;
    return answer;
}