# [level 1] K번째수 - 42748 
<details>
<summary><h3>1. 문제</h3></summary>
<div markdown="1">
        
[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/42748) 

### 성능 요약

메모리: 33.5 MB, 시간: 0.14 ms

### 구분

코딩테스트 연습 > 정렬

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2025년 03월 12일 17:39:59

### 문제 설명

<p>배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.</p>

<p>예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면</p>

<ol>
<li>array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.</li>
<li>1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.</li>
<li>2에서 나온 배열의 3번째 숫자는 5입니다.</li>
</ol>

<p>배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.</p>

<h5>제한사항</h5>

<ul>
<li>array의 길이는 1 이상 100 이하입니다.</li>
<li>array의 각 원소는 1 이상 100 이하입니다.</li>
<li>commands의 길이는 1 이상 50 이하입니다.</li>
<li>commands의 각 원소는 길이가 3입니다.</li>
</ul>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>array</th>
<th>commands</th>
<th>return</th>
</tr>
</thead>
        <tbody><tr>
<td>[1, 5, 2, 6, 3, 7, 4]</td>
<td>[[2, 5, 3], [4, 4, 1], [1, 7, 3]]</td>
<td>[5, 6, 3]</td>
</tr>
</tbody>
      </table>
<h5>입출력 예 설명</h5>

<p>[1, 5, 2, 6, 3, 7, 4]를 2번째부터 5번째까지 자른 후 정렬합니다. [2, 3, 5, 6]의 세 번째 숫자는 5입니다.<br>
[1, 5, 2, 6, 3, 7, 4]를 4번째부터 4번째까지 자른 후 정렬합니다. [6]의 첫 번째 숫자는 6입니다.<br>
[1, 5, 2, 6, 3, 7, 4]를 1번째부터 7번째까지 자릅니다. [1, 2, 3, 4, 5, 6, 7]의 세 번째 숫자는 3입니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

</div>
</details>

### 2. 오답
```jsx
function solution(array, commands) {
    var answer = [];
    for (let i=0; i<commands.length; i++) {
      const start = commands[i][0]-1
      const end = commands[i][1];
      const index = commands[i][2]-1

      const sliceArr = array.slice(start, end);
      const sortArr = sliceArr.sort();

      answer.push(sortArr[index]);
    }
    return answer;
}
```

**문제점**

1. **`sort()`** 
    1. 사전순(문자열 기준) 으로 정렬
    2. 숫자 배열을 정렬하면 정렬이 정확하지 않다
        
        ⇒ 해결책) 숫자 오름차순 정렬을 위해서 비교 필요
        
        1. 첫 번째 인자가 두 번째 인자보다 작다 ⇒ 음수
        2. 첫 번째 인자가 두 번째 인자보다 크다 ⇒ 양수
        3. 첫 번째 인자가 두 번째 인자와 같다 ⇒ 0
        
        ⇒ 오름차순 :  a - b  / 내림차순 : b - a
        
    3. 원본 배열 변경 위험
        
        ⇒ sort( ) 는 원본 배열을 직접 변경
        
        원본 배열을 유지해야 하는 경우 배열을 복제한 후에 사본으로 정렬
        
        참고) **`toSorted()`  :** 사용할 경우 바로 정렬된 배열 사본 얻을 수 있음
        
2. **`구조 분해 할당`** 사용 가능
    
    ```jsx
    const start = commands[i][0]-1
    const end = commands[i][1];
    const index = commands[i][2]-1
    
    =>>>>>
    const [start, end, index] = commands[i];
    ```

### 3. 더 좋은 풀이
#### Claude 제안 (내 풀이 리팩토링)

```jsx
function solution(array, commands) {
    let answer = [];
    
    for (let i = 0; i < commands.length; i++) {
        const [start, end, index] = commands[i];

        const sortedArr = array.slice(start - 1, end).sort((a, b) => a - b);
        answer.push(sortedArr[index - 1]);
    }

    return answer;
}
```

#### 다른 풀이 
```jsx
function solution(array, commands) {
    return commands.map(([sPosition, ePosition, position]) => {
        return array
            .slice(sPosition - 1, ePosition)  // slice() 사용으로 최적화
            .sort((a, b) => a - b)[position - 1]; // 정렬 후 원하는 위치 반환
    });
}

```
