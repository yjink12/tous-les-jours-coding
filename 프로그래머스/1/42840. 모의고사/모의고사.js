function solution(answers) {
    var answer = [];
    
    // 수포자들의 규칙
    const fMath = [1, 2, 3, 4, 5];
    const sMath = [2, 1, 2, 3, 2, 4, 2, 5];
    const tMath = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let [fScore, sScore, tScore] = [0, 0, 0];
    
    for (let i=0; i<answers.length; i++) {
        if (answers[i] === fMath[i%fMath.length]) fScore++;
        if (answers[i] === sMath[i%sMath.length]) sScore++;
        if (answers[i] === tMath[i%tMath.length]) tScore++;
    }
    
    const maxScore = Math.max(fScore, sScore, tScore);

    if (fScore === maxScore) answer.push(1);
    if (sScore === maxScore) answer.push(2);
    if (tScore === maxScore) answer.push(3);
  
    return answer;
}