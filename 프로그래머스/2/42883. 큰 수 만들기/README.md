# [level 2] 큰 수 만들기 - 42883 
<details>
<summary><h3>1. 문제</h3></summary>
<div markdown="1">
        
[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/42883) 

### 성능 요약

메모리: 53.6 MB, 시간: 58.11 ms

### 구분

코딩테스트 연습 > 탐욕법（Greedy）

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2025년 04월 12일 14:42:03

### 문제 설명

<p>어떤 숫자에서 k개의 수를 제거했을 때 얻을 수 있는 가장 큰 숫자를 구하려 합니다.</p>

<p>예를 들어, 숫자 1924에서 수 두 개를 제거하면 [19, 12, 14, 92, 94, 24] 를 만들 수 있습니다. 이 중 가장 큰 숫자는 94 입니다.</p>

<p>문자열 형식으로 숫자 number와 제거할 수의 개수 k가 solution 함수의 매개변수로 주어집니다. number에서 k 개의 수를 제거했을 때 만들 수 있는 수 중 가장 큰 숫자를 문자열 형태로 return 하도록 solution 함수를 완성하세요.</p>

<h5>제한 조건</h5>

<ul>
<li>number는 2자리 이상, 1,000,000자리 이하인 숫자입니다.</li>
<li>k는 1 이상 <code>number의 자릿수</code> 미만인 자연수입니다.</li>
</ul>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>number</th>
<th>k</th>
<th>return</th>
</tr>
</thead>
        <tbody><tr>
<td>"1924"</td>
<td>2</td>
<td>"94"</td>
</tr>
<tr>
<td>"1231234"</td>
<td>3</td>
<td>"3234"</td>
</tr>
<tr>
<td>"4177252841"</td>
<td>4</td>
<td>"775841"</td>
</tr>
</tbody>
      </table>

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

</div>
</details>

### 2. 내 문제풀이
### 오답

- 도저히 모르겠다!
- 순회해서 큰 수 작은 수 판단하고 제거하고 하려다 보니 너무 복잡해져서 다른 사람 풀이 참고….
- 어떻게 이렇게 간단하게 풀지...후

```jsx
function solution(number, k) {
    let answer = '';
    const stack = [];
    
    for (const num of number) {
        while(k > 0 && stack.length > 0 && stack[stack.length -1] < num) {
            stack.pop();
            k--;
        }
        stack.push(num);
    }
    stack.splice(stack.length - k, k);
    answer = stack.join("");
    
    return answer;
} 
```

1. 문자열 number 순회
2. k 가 0보다 크고 stack의 length 가 0보다 크고 현재 숫자보다 stack의 맨 위에 있는 값이 작으면
    1. stack에서 맨 위 값을 제거
    2. k 값 감소
3. 현재 숫자를 stack 에 추가
4. 반복문 이후에도 k가 0보다 크면 남은 k개의 숫자를 뒤에서부터 제거

<img src="https://github.com/user-attachments/assets/336b2007-6b02-46fc-8f9e-09dc9edc7f08" width="80%">
