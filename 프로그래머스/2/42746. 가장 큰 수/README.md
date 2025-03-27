# [level 2] 가장 큰 수 - 42746 
<details>
<summary><h3>1. 문제</h3></summary>
<div markdown="1">
        
[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/42746) 

### 성능 요약

메모리: 47.7 MB, 시간: 113.89 ms

### 구분

코딩테스트 연습 > 정렬

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2025년 03월 27일 13:51:15

### 문제 설명

<p>0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.</p>

<p>예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.</p>

<p>0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.</p>

<h5>제한 사항</h5>

<ul>
<li>numbers의 길이는 1 이상 100,000 이하입니다.</li>
<li>numbers의 원소는 0 이상 1,000 이하입니다.</li>
<li>정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.</li>
</ul>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>numbers</th>
<th>return</th>
</tr>
</thead>
        <tbody><tr>
<td>[6, 10, 2]</td>
<td>"6210"</td>
</tr>
<tr>
<td>[3, 30, 34, 5, 9]</td>
<td>"9534330"</td>
</tr>
</tbody>
      </table>
<hr>

<p>※ 공지 - 2021년 10월 20일 테스트케이스가 추가되었습니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

</div>
</details>

---

### 2. 내 문제풀이
```jsx
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
```

1. 숫자를 문자열로 변환
2. **`charAt(0)`** 으로 문자열 첫째 자리 수만 추출
3. **`sort()`** 특성 사용
    
    ```jsx
    1. 리턴 값 < 0
       => a가 b보다 앞으로 오도록 정렬
    2. 리턴 값 > 0
       => b가 a보다 앞으로 오도록 정렬
    3. 리턴 값 == 0
       => a와 b 순서 변경 X
    ```
    
4. a 와 b 값이 동일할 경우 남은 문자를 조합해서 어떤 수가 더 큰지 비교
5. 예외처리) [0, 0, 0] 의 경우 0을 반환할 수 있도록 해야함

---

### 3. 다른 풀이
#### Claude Refactoring
```jsx
function solution(numbers) {
    // 숫자 배열을 특정 정렬 기준으로 정렬
    const sortedNumbers = numbers.sort((a, b) => {
        // 숫자를 문자열로 변환
        const strA = a.toString();
        const strB = b.toString();

        // 두 숫자를 서로 다른 순서로 결합
        const combinedAB = strA + strB;
        const combinedBA = strB + strA;

        // 결합된 문자열을 비교하여 정렬 순서 결정
        return combinedBA.localeCompare(combinedAB);
    });

    // 정렬된 숫자들을 문자열로 결합
    const answer = sortedNumbers.join('');

    // 결과가 0으로 시작하면 '0' 반환, 그렇지 않으면 전체 문자열 반환
    return answer[0] === '0' ? '0' : answer;
}
```

1. **`join( )`** 으로 문자열 결합
2. **`localeCompare( )`**
    
    : sort와 동일한 결과 반환, but 문자열과 문자열 비교
    
    ```jsx
    'a'.localeCompare('b') // -1
    'b'.localeCompare('a') // 1
    'b'.localeCompare('b') // 0
    ```


#### 다른 풀이
```jsx
function solution(numbers) {
    var answer = numbers.map(v=>v+'')
                        .sort((a,b) => (b+a)*1 - (a+b)*1)
                        .join('');

    return answer[0]==='0'?'0':answer;
}
```

1. `map`을 돌려서 문자열로 변환
2. `*1` 로 문자열을 숫자로 변환
3. `join` 으로 문자열 결합
