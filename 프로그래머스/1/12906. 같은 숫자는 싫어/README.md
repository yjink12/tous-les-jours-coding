# [level 1] 같은 숫자는 싫어 - 12906 

<details>
<summary><h3>1. 문제</h3></summary>
<div markdown="1">
        
[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12906) 

### 성능 요약

메모리: 90.7 MB, 시간: 28.44 ms

### 구분

코딩테스트 연습 > 스택／큐

### 채점결과

정확성: 71.9<br/>효율성: 28.1<br/>합계: 100.0 / 100.0

### 제출 일자

2025년 03월 12일 16:54:10

### 문제 설명

<p>배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,</p>

<ul>
<li>arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.</li>
<li>arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.</li>
</ul>

<p>배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.</p>

<h5>제한사항</h5>

<ul>
<li>배열 arr의 크기 : 1,000,000 이하의 자연수</li>
<li>배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>arr</th>
<th>answer</th>
</tr>
</thead>
        <tbody><tr>
<td>[1,1,3,3,0,1,1]</td>
<td>[1,3,0,1]</td>
</tr>
<tr>
<td>[4,4,4,3,3]</td>
<td>[4,3]</td>
</tr>
</tbody>
      </table>
<h5>입출력 예 설명</h5>

<p>입출력 예 #1,2<br>
문제의 예시와 같습니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

</div>
</details>

### 2. 더 좋은 풀이
#### Claude Refactoring
```jsx
function solution(arr) {
    const answer = [arr[0]]; // 첫 번째 요소는 항상 포함
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i-1]) { // 이전 요소와 비교
            answer.push(arr[i]);
        }
    }
    return answer;
}
```
=> 배열 인덱스 직접 비교

#### 다른 풀이
```jsx
function solution(arr)
{
    return arr.filter((val,index) => val != arr[index+1]);
}
```

- arr[index+1]
    
    ⇒ 마지막 요소에서는 undefined
    
    보완한다면,
    
    ```jsx
    function solution(arr) {   
        // 첫번째 요소는 항상 포함
        // 현재 요소가 이전 요소와 다른 경우에만 포함
        return arr.filter((val, index) => index === 0 || val !== arr[index-1]);
    }
    ```
