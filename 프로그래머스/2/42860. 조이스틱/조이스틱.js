function solution(name) {
    let moves = 0;
    
    // 상하이동 / 좌우이동 / + 연속된 A 탐색
    
    // 좌우 이동 최소값 (한 방향으로 이동)
    let minSide = name.length - 1;
    
    for (let i=0; i<name.length; i++) {
        // 상하이동
        // ASCII A=65, Z=90
        moves += Math.min(name[i].charCodeAt(0) - 65, 91 - name[i].charCodeAt(0));
        
        // 연속된 A 탐색
        let endA = i + 1;
        while (endA < name.length && name[endA] === 'A') endA++;
        
        // 좌우이동
        // 1. 기존 최소값 2. 현재까지 왔다가 들어가는 경우 3. 끝까지 갔다가 돌아오는 경우
        minSide = Math.min(minSide, i*2 + (name.length - endA), (name.length - endA)*2 + i);
    }
    return moves + minSide;
}