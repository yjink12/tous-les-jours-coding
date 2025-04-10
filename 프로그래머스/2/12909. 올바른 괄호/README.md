# [level 2] 올바른 괄호 - 12909 
<details>
<summary><h3>1. 문제</h3></summary>
<div markdown="1">
        
[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12909) 

### 성능 요약

메모리: 37.1 MB, 시간: 30.41 ms

### 구분

코딩테스트 연습 > 스택／큐

### 채점결과

정확성: 69.5<br/>효율성: 30.5<br/>합계: 100.0 / 100.0

### 제출 일자

2025년 04월 10일 16:11:28

### 문제 설명

<p>괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어</p>

<ul>
<li>"()()" 또는 "(())()" 는 올바른 괄호입니다.</li>
<li>")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.</li>
</ul>

<p>'(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.</p>

<h5>제한사항</h5>

<ul>
<li>문자열 s의 길이 : 100,000 이하의 자연수</li>
<li>문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>s</th>
<th>answer</th>
</tr>
</thead>
        <tbody><tr>
<td>"()()"</td>
<td>true</td>
</tr>
<tr>
<td>"(())()"</td>
<td>true</td>
</tr>
<tr>
<td>")()("</td>
<td>false</td>
</tr>
<tr>
<td>"(()("</td>
<td>false</td>
</tr>
</tbody>
      </table>
<h5>입출력 예 설명</h5>

<p>입출력 예 #1,2,3,4<br>
문제의 예시와 같습니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

</div>
</details>

---

### 2. 나의 문제풀이
#### 오답
```jsx
function solution(s){
    let answer = true;
    
    let typeArr = [0, 0];
    
    if (s[0] === ")") {
        answer = false;
    } else {
        for (let i=0; i<s.length; i++) {
         if (s[i] === "(") typeArr[0]++;
            else typeArr[1]++;   
        }
        answer = typeArr[0] === typeArr[1] ? true : false;   
    }
 
    return answer;
}
```

1. 효율성 테스트 실패
    1. 정확성 54.1 /100.0
    2. 효율성 0.0
2. `))((`  의 경우도 통과된다는 뜻이기 때문에 땡!

```jsx
function solution(s){
    let answer = true;
    
    let tempArr = [")"];
    
    if (s[0] == ")") answer = false;
    else {
        for (let i=1; i<s.length; i++) {
            if (tempArr[0] === s[i]) {
                tempArr.pop();
                answer = true;
            }
            else tempArr.push(")");
        }
        answer = tempArr.length > 0 ? false : true;
    }
 
    return answer;
}
```

1. s 문자열의 첫번째 요소가 ( 가 아니면 올바른 괄호로 성립하지 않기 때문에
    1. 미리 tempArr 에 `)` 을 넣어놓음
2. s 문자열 첫번째 요소가 `)` 일 때 anwer `false`로 처리
3. tempArr 의 첫번째 요소가 s[1] 과 동일할 경우
    1. tempArr 에서 `)` 을 삭제한다
    2. 그리고 answer 를 `true` 로 바꾼다
    3. 동일하지 않을 경우는 요소가 `(` ⇒ 따라서 tempArr 에 `)` 를 추가한다
4. 그리고 tempArr 이 비워지지 않은 경우에는 answer 를 `false` 로 바꾼다


---

### 3. 다른 풀이
#### Claude Refactoring
```jsx
function solution(s) {
  const stack = [];
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push('(');
    } else if (s[i] === ')') {
      if (stack.length === 0) {
        return false; // 닫는 괄호인데 스택이 비어있으면 짝이 맞지 않음
      }
      stack.pop(); // 여는 괄호를 꺼냄
    }
  }
  
  return stack.length === 0; // 스택이 비어있으면 모든 괄호의 짝이 맞음
}
```

- 여는 괄호 `(`가 나오면 스택에 넣습니다.
- 닫는 괄호 `)`가 나오면 스택에서 여는 괄호를 꺼냅니다.
- 닫는 괄호가 나왔는데 스택이 비어있다면 짝이 맞지 않는 것이므로 false를 반환합니다.
- 모든 문자를 처리한 후 스택이 비어있다면 모든 괄호의 짝이 맞는 것이므로 true를 반환합니다.
