function solution(citations) {
    // 숫자 정렬
    const sortedCitations = citations.sort((a, b) => b - a);
    
    let count = 0;
    for (let i=0; i<sortedCitations.length; i++) {
        if (sortedCitations[i] > i) count++;
        else break;
    }
    
    return count;
}