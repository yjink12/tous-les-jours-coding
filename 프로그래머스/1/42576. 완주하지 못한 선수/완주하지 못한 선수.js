function solution(participant, completion) {
    var answer = '';
    let participantMap = new Map();
    participant.forEach((part) => {
        if (participantMap.get(part)) {
            participantMap.set(part, participantMap.get(part) + 1);
        } else {
            participantMap.set(part, 1);
        }
    });
    
    completion.forEach((com) => {
        if(participantMap.has(com)) {
            participantMap.set(com, participantMap.get(com) - 1);
        }
    });
    
    participantMap.forEach((item, key) => {
        if (item !== 0) {
            answer = key;
        }
    });
    
    return answer;
}