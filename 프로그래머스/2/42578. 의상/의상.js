function solution(clothes) {
    let answer = 1;
    
    // clothes 종류별 정리
    let closet = new Map();
    clothes.forEach((cloth) => {
         if (closet.get(cloth[1])) closet.set(cloth[1], closet.get(cloth[1]) + 1);
        else closet.set(cloth[1], 1);
    });
    
    for ([key, value] of closet) {
        answer *= (1 + value);
    }

    return answer - 1;
}