# [level 2] 소수 찾기 - 42839 
<details>
<summary><h3>1. 문제</h3></summary>
<div markdown="1">
        
[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/42839) 

### 성능 요약

메모리: 36.7 MB, 시간: 162.94 ms

### 구분

코딩테스트 연습 > 완전탐색

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2025년 03월 31일 22:42:46

### 문제 설명

<p>한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.</p>

<p>각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.</p>

<h5>제한사항</h5>

<ul>
<li>numbers는 길이 1 이상 7 이하인 문자열입니다.</li>
<li>numbers는 0~9까지 숫자만으로 이루어져 있습니다.</li>
<li>"013"은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미입니다.</li>
</ul>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>numbers</th>
<th>return</th>
</tr>
</thead>
        <tbody><tr>
<td>"17"</td>
<td>3</td>
</tr>
<tr>
<td>"011"</td>
<td>2</td>
</tr>
</tbody>
      </table>
<h5>입출력 예 설명</h5>

<p>예제 #1<br>
[1, 7]으로는 소수 [7, 17, 71]를 만들 수 있습니다.</p>

<p>예제 #2<br>
[0, 1, 1]으로는 소수 [11, 101]를 만들 수 있습니다.</p>

<ul>
<li>11과 011은 같은 숫자로 취급합니다.</li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

</div>
</details>

---
### 2. 오늘의 개념정리
```jsx
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
      if (arr.length >= 1) {  // 선택할 수가 남아있다면
        for (let i = 0; i < arr.length; i++) {
          const newFixed = fixed + arr[i];  // 현재 숫자를 선택해 조합에 추가
          const copyArr = [...arr];  // 배열 복사
          copyArr.splice(i, 1);   // 선택한 숫자 제거

          if (isPrime(parseInt(newFixed))) {  // 현재까지의 조합이 소수인지 확인
            answer.add(parseInt(newFixed));   // 소수이면 결과 Set에 추가
          }
          getCombined(copyArr, newFixed);   // 재귀호출!
        }
      }
    };

    getCombined(numbers, '');
    return answer.size;
  }
```

어렵다…

다른 사람 문제 풀이 참고했다…또륵

### 소수

1. 1 이하는 소수 X
2. 2부터 num -1 까지 나머지가 없이 나누어 떨어지면 소수 X
3. 나누어 떨어지는 수가 없으면 소수 O

### 실행 흐름

1. “17”
    1. getCombined(”17”, “”)
    2. i=0
        1. newFixed = “” + “1” = “1”
        2. isPrime(1) = false
        3. 재귀
            1. getCombined(”7”, “1”)
            2. newFixed = “1” + “7” = “17”
            3. isPrime(17) = true
            4. add(17)
    3. i=1
        1. newFixed = “” + “7” = “7”
        2. isPrime(7) = true
        3. add(7)
        4. 재귀
            1. getCombined(”1”, “7”)
            2. newFixed = “7” + “1” = “71”
            3. isPrime(71) = true
            4. add(71)
