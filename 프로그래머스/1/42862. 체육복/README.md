# [level 1] 체육복 - 42862 
<details>
<summary><h3>1. 문제</h3></summary>
<div markdown="1">
        
[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/42862) 

### 성능 요약

메모리: 33.5 MB, 시간: 0.22 ms

### 구분

코딩테스트 연습 > 탐욕법（Greedy）

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2025년 03월 15일 13:26:47

### 문제 설명

<p>점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다. 예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. 체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.</p>

<p>전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.</p>

<h5>제한사항</h5>

<ul>
<li>전체 학생의 수는 2명 이상 30명 이하입니다.</li>
<li>체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.</li>
<li>여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.</li>
<li>여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.</li>
<li>여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.</li>
</ul>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>n</th>
<th>lost</th>
<th>reserve</th>
<th>return</th>
</tr>
</thead>
        <tbody><tr>
<td>5</td>
<td>[2, 4]</td>
<td>[1, 3, 5]</td>
<td>5</td>
</tr>
<tr>
<td>5</td>
<td>[2, 4]</td>
<td>[3]</td>
<td>4</td>
</tr>
<tr>
<td>3</td>
<td>[3]</td>
<td>[1]</td>
<td>2</td>
</tr>
</tbody>
      </table>
<h5>입출력 예 설명</h5>

<p>예제 #1<br>
1번 학생이 2번 학생에게 체육복을 빌려주고, 3번 학생이나 5번 학생이 4번 학생에게 체육복을 빌려주면 학생 5명이 체육수업을 들을 수 있습니다.</p>

<p>예제 #2<br>
3번 학생이 2번 학생이나 4번 학생에게 체육복을 빌려주면 학생 4명이 체육수업을 들을 수 있습니다.</p>

<h5>문제가 잘 안풀린다면😢</h5>

<p>힌트가 필요한가요? [코딩테스트 연습 힌트 모음집]으로 오세요! → <a href="https://school.programmers.co.kr/learn/courses/14743?itm_content=lesson42862" target="_blank" rel="noopener">클릭</a></p>

<p>※ 공지 - 2019년 2월 18일 지문이 리뉴얼되었습니다.<br>
※ 공지 - 2019년 2월 27일, 28일 테스트케이스가 추가되었습니다.<br>
※ 공지 - 2021년 7월 28일 테스트케이스가 추가되었습니다.<br>
※ 공지 - 2021년 8월 30일 테스트케이스가 추가되었습니다.<br>
※ 공지 - 2022년 11월 30일 테스트케이스가 추가되었습니다.<br>
※ 공지 - 2023년 6월 12일 테스트케이스가 추가되었습니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
</div>
</details>

### 2. 오답
```jsx
export function setupGreedy(element) {
  function solution(n, lost, reserve) {
    var answer = 0;
    
    for (let student of lost) {
      const canShare = reserve.filter(
        (re) => re == student - 1 || re == student + 1
      );
      if (2 == canShare.length) {
        lost = lost.filter((lt) => lt !== student);
        reserve = reserve.filter(
          (re) => re !== canShare.sort((a, b) => a - b)[0]
        );
      } else if (1 == canShare.length) {
        lost = lost.filter((lt) => lt !== student);
        reserve = reserve.filter((re) => re !== canShare[0]);
      }
    }

    answer = n - lost.length;
    return answer;
  }

  const result = solution(3, [3], [1]);
  console.log('result ===>', result);
}

```

1. lost for문
2. reserve 배열에 lost 값의 -1, +1 한 값들이 있는지 확인
3. 확인 후 처리
    <table class="table">
        <thead><tr>
<th>-1</th>
<th>+1</th>
<th></th>
</tr>
</thead>
        <tbody><tr>
<td>o</td>
<td>o</td>
<td>1. reserve 배열에서 -1 값 삭제
    2. lost 배열에서 기준 값 삭제</td>
</tr>
<tr>
<td>x</td>
<td>o</td>
<td>1. reserve 배열에서 +1 값 삭제
    2. lost 배열에서 기준 값 삭제</td>
</tr>
<tr>
<td>o</td>
<td>x</td>
<td>1. reserve 배열에서 -1 값 삭제
    2. lost 배열에서 기준 값 삭제</td>
</tr>
<tr>
<td>x</td>
<td>x</td>
<td>삭제 X</td>
</tr>
</tbody>
</table>
4. n (전체) - lost.length

**⇒ 오답 원인) Lost 이면서 reserve인 경우를 고려 X ⇒ reserve에서 제외해야함**
- 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다.
  이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.

```jsx
function solution(n, lost, reserve) {
    var answer = 0;
    
    const actualLost = lost.filter(student => !reserve.includes(student));
    const actualReserve = reserve.filter(student => !lost.includes(student));
    
    let sortLost = actualLost.sort((a, b) => a - b);
    let sortReserve = actualReserve.sort((a, b) => a - b);
        
    for (let student of sortLost) {
        const canShare = sortReserve.filter((re) => re == student-1 || re == student+1);
        
        if (1 <= canShare.length) {
            sortLost = sortLost.filter((lt) => lt !== student);
            sortReserve = sortReserve.filter((re) => re !== canShare[0]);
        }
    }
    
    answer = n - sortLost.length;
    return answer;
}
```

**문제점**

1. 반복문 내에서 원본 배열을 변경할 경우 예상치 못한 동작 발생 가능
2. sortLost와 sortReserve  배열을 반복적으로 필터링 ⇒ 성능 저하

---

### 3. 다른 풀이
#### Claude Refactoring
```jsx
function solution(n, lost, reserve) {
    // 1. 여벌 체육복이 있는 학생이 도난당한 경우 처리
    const actualLost = lost.filter(student => !reserve.includes(student)).sort((a, b) => a - b);
    const actualReserve = reserve.filter(student => !lost.includes(student)).sort((a, b) => a - b);
    
    // 2. 처리 과정에서 사용할 배열 복사 (원본 변경 방지)
    let remainingLost = [...actualLost];
    const reserveStatus = [...actualReserve];
    
    // 3. 체육복 빌려주기 - 최적화된 방식
    for (const student of actualLost) {
        // 앞번호 학생에게 먼저 빌리기 시도
        const frontIdx = reserveStatus.indexOf(student - 1);
        if (frontIdx !== -1) {
            remainingLost = remainingLost.filter(s => s !== student);
            reserveStatus.splice(frontIdx, 1);
            continue;
        }
        
        // 뒷번호 학생에게 빌리기 시도
        const backIdx = reserveStatus.indexOf(student + 1);
        if (backIdx !== -1) {
            remainingLost = remainingLost.filter(s => s !== student);
            reserveStatus.splice(backIdx, 1);
        }
    }
    
    // 4. 체육수업을 들을 수 있는 학생 수 계산
    return n - remainingLost.length;
}
```

#### 다른 풀이
```jsx
function solution(n, lost, reserve) {
    const students = {};
    let answer = 0;
    for(let i = 1; i <= n; i++){
        students[i] = 1;
    }
    lost.forEach(number => students[number] -= 1);
    reserve.forEach(number => students[number] += 1);

    for(let i = 1; i <= n; i++){
        if(students[i] === 2 && students[i-1] === 0){
                students[i-1]++;
                students[i]--;
        } else if(students[i] === 2 && students[i+1] === 0){
                students[i+1]++;
                students[i]--;
        }
    }
    for(let key in students){
        if(students[key] >= 1){
            answer++;
        }
    }
    return answer;
}
```
