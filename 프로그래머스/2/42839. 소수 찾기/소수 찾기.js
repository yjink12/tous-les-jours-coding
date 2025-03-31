function solution(numbers) {
    // 중복 제거를 위해 set 사용
    let answer = new Set();

    // 소수 판별
    const isPrime = (num) => {
      if (num <= 1) return false;
      for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
      }
      return true;
    };

    // arr : 선택되지 않은 수들
    // fixed : 선택된 수들
    const getCombined = (arr, fixed) => {
      if (arr.length >= 1) {
        for (let i = 0; i < arr.length; i++) {
          const newFixed = fixed + arr[i];
          const copyArr = [...arr];
          copyArr.splice(i, 1);

          if (isPrime(parseInt(newFixed))) {
            answer.add(parseInt(newFixed));
          }
          getCombined(copyArr, newFixed);
        }
      }
    };

    getCombined(numbers, '');
    return answer.size;
  }