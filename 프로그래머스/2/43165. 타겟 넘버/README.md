# [level 2] 타겟 넘버 - 43165 
<details>
<summary><h3>1. 문제</h3></summary>
<div markdown="1">
        
[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/43165) 

### 성능 요약

메모리: 35.5 MB, 시간: 15.26 ms

### 구분

코딩테스트 연습 > 깊이／너비 우선 탐색（DFS／BFS）

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2025년 03월 26일 15:08:19

### 문제 설명

<p>n개의 음이 아닌 정수들이 있습니다. 이 정수들을 순서를 바꾸지 않고 적절히 더하거나 빼서 타겟 넘버를 만들려고 합니다. 예를 들어 [1, 1, 1, 1, 1]로 숫자 3을 만들려면 다음 다섯 방법을 쓸 수 있습니다.</p>
<div class="highlight"><pre class="codehilite"><code>-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3
</code></pre></div>
<p>사용할 수 있는 숫자가 담긴 배열 numbers, 타겟 넘버 target이 매개변수로 주어질 때 숫자를 적절히 더하고 빼서 타겟 넘버를 만드는 방법의 수를 return 하도록 solution 함수를 작성해주세요.</p>

<h5>제한사항</h5>

<ul>
<li>주어지는 숫자의 개수는 2개 이상 20개 이하입니다.</li>
<li>각 숫자는 1 이상 50 이하인 자연수입니다.</li>
<li>타겟 넘버는 1 이상 1000 이하인 자연수입니다.</li>
</ul>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>numbers</th>
<th>target</th>
<th>return</th>
</tr>
</thead>
        <tbody><tr>
<td>[1, 1, 1, 1, 1]</td>
<td>3</td>
<td>5</td>
</tr>
<tr>
<td>[4, 1, 2, 1]</td>
<td>4</td>
<td>2</td>
</tr>
</tbody>
      </table>
<h5>입출력 예 설명</h5>

<p><strong>입출력 예 #1</strong></p>

<p>문제 예시와 같습니다.</p>

<p><strong>입출력 예 #2</strong></p>
<div class="highlight"><pre class="codehilite"><code>+4+1-2+1 = 4
+4-1+2-1 = 4
</code></pre></div>
<ul>
<li>총 2가지 방법이 있으므로, 2를 return 합니다.</li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

</div>
</details>

---

### 2. 오답
- 고민해봤는데 모르겠어서 블로그 검색해봤더니 DFS 를 사용해서 풀어야 한다고 한다
- Javascript 에서는 DFS 를 **`재귀함수`** 를 이용해서 구현 가능
    - 각각 노드의 자식 노드를 탐색하는 함수를 스택에 추가
    - 더 이상 자식 노드가 없을 때 마지막에 추가된 자식 노드 먼저 실행 한 후 스택에서 제거
- **문제 분석**
    - 트리의 왼쪽은 `+` 더하기 / 오른쪽은 `-` 빼기
    - 트리 내에서 부분합을 만든다
      
```jsx
function solution(numbers, target) {
    let answer = 0;
    
    const dfs = (idx, sum) => {
        if (idx === numbers.length) {
            if (sum === target) answer++;
            return;
        }
        
        dfs(idx + 1, sum + numbers[idx]);
        dfs(idx + 1, sum - numbers[idx]);
    };
    
    dfs(0, 0);
    
    return answer;
}
```
- 루트 노드는 배열의 맨 처음 요소
- 인덱스가 배열의 길이와 동일하다
    
    ⇒ 배열의 맨 마지막 요소까지 모두 순회했다
    
- `sum` 합이 타겟과 동일하다면 방법의 수 올리기
    
    동일하지 않으면 함수 탈출!
    
- `+` 자식 노트 탐색 → `-` 자식 노드 탐색

<img src="https://github.com/user-attachments/assets/be30ed71-d6b0-406f-91f8-ccdb302b081f" width="70%">


---

### 3. 오늘의 개념정리
<img src="https://github.com/user-attachments/assets/c4d2e2d3-e0ed-4da7-b2dc-e94be523898a" width="70%">

어렵다!
