function solution(numbers) {
    let answer = '';

    // 첫째 자리 수만 비교
    const sortedNumbers = numbers.sort((a, b) => {
      // 문자열로 변환
      const aString = a.toString();
      const bString = b.toString();

      // 문자열 첫째 자리 수
      const aFirst = aString.charAt(0);
      const bFirst = bString.charAt(0);

      if (aFirst < bFirst) return 1;
      if (aFirst > bFirst) return -1;

      // a 첫번째 문자와 b 첫번째 문자가 동일
      if (aFirst == bFirst) {   

        // a b 더해서
        const combineAB = aString + bString;
        const combineBA = bString + aString;

        // 어떤 수가 더 큰지 비교
        if (combineAB < combineBA) return 1;
        if (combineAB > combineBA) return -1;
      }
    });
    
    for (const number of sortedNumbers) {
      answer += number;
    }
    return answer[0] === '0' ? '0' : answer;
}