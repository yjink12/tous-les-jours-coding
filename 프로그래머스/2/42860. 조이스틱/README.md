# [level 2] 조이스틱 - 42860 
<details>
<summary><h3>1. 문제</h3></summary>
<div markdown="1">
        
[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/42860) 

### 성능 요약

메모리: 33.5 MB, 시간: 0.18 ms

### 구분

코딩테스트 연습 > 탐욕법（Greedy）

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2025년 04월 08일 17:13:27

### 문제 설명

<p>조이스틱으로 알파벳 이름을 완성하세요. 맨 처음엔 A로만 이루어져 있습니다.<br>
ex) 완성해야 하는 이름이 세 글자면 AAA, 네 글자면 AAAA</p>

<p>조이스틱을 각 방향으로 움직이면 아래와 같습니다.</p>
<div class="highlight"><pre class="codehilite"><code>▲ - 다음 알파벳
▼ - 이전 알파벳 (A에서 아래쪽으로 이동하면 Z로)
◀ - 커서를 왼쪽으로 이동 (첫 번째 위치에서 왼쪽으로 이동하면 마지막 문자에 커서)
▶ - 커서를 오른쪽으로 이동 (마지막 위치에서 오른쪽으로 이동하면 첫 번째 문자에 커서)
</code></pre></div>
<p>예를 들어 아래의 방법으로 "JAZ"를 만들 수 있습니다.</p>
<div class="highlight"><pre class="codehilite"><code>- 첫 번째 위치에서 조이스틱을 위로 9번 조작하여 J를 완성합니다.
- 조이스틱을 왼쪽으로 1번 조작하여 커서를 마지막 문자 위치로 이동시킵니다.
- 마지막 위치에서 조이스틱을 아래로 1번 조작하여 Z를 완성합니다.
따라서 11번 이동시켜 "JAZ"를 만들 수 있고, 이때가 최소 이동입니다.
</code></pre></div>
<p>만들고자 하는 이름 name이 매개변수로 주어질 때, 이름에 대해 조이스틱 조작 횟수의 최솟값을 return 하도록 solution 함수를 만드세요.</p>

<h5>제한 사항</h5>

<ul>
<li>name은 알파벳 대문자로만 이루어져 있습니다.</li>
<li>name의 길이는 1 이상 20 이하입니다.</li>
</ul>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>name</th>
<th>return</th>
</tr>
</thead>
        <tbody><tr>
<td>"JEROEN"</td>
<td>56</td>
</tr>
<tr>
<td>"JAN"</td>
<td>23</td>
</tr>
</tbody>
      </table>
<p><a href="https://commissies.ch.tudelft.nl/chipcie/archief/2010/nwerc/nwerc2010.pdf" target="_blank" rel="noopener">출처</a></p>

<p>※ 공지 - 2019년 2월 28일 테스트케이스가 추가되었습니다.<br>
※ 공지 - 2022년 1월 14일 지문 수정 및 테스트케이스가 추가되었습니다. 이로 인해 이전에 통과하던 코드가 더 이상 통과하지 않을 수 있습니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

</div>
</details>

---

### 2. 오답
```jsx
  function solution(name) {
    let count = 0;

    let baseStr = ['A'];
    const alpha = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
    ];

    for (let i = 1; i < name.length; i++) {
      baseStr.push('A');
    }

    const moveRight = (idx) => {
      for (let i = idx; i < name.length; i++) {
        const index = alpha.indexOf(name[i]);
        console.log('index', `${i} === ` + index);

        // move up down
        if (index > 13) {
          const reverseIndex = index - 13;
          count += reverseIndex;
        } else {
          count += index;
        }

        console.log('right count', count);

        baseStr[i] = alpha[index];

        if (name[i + 1] === 'A' || name[name.length - 1] === 'A') {
          count++;
          moveLeft(name.length - 1);
        } else {
          count++;
        }
      }
    };

    const moveLeft = (idx) => {
      for (let i = idx; 0 <= i < name.length; i--) {
        const index = alpha.indexOf(name[i]);
        console.log('index', `${i} === ` + index);

        // move up down
        if (index > 13) {
          const reverseIndex = index - 13;
          count += reverseIndex;
        } else {
          count += index;
        }

        console.log('left count', count);

        baseStr[i] = alpha[index];

        if (name[i + 1] === 'A' || name[name.length - 1] === 'A') {
          count++;
          moveRight(i + 1);
        } else {
          count++;
        }
      }
    };

    moveRight(0);

    console.log('baseStr', baseStr);
    console.log('count', count);

    return count;
```

1. name 길이 판단 → 배열에 A를 기본값으로 push
2. 알파벳의 위치 판단해서 위치가
    1. 13 이상인 경우 `위치 - 13` 으로 down 부터 시작
    2. 13 미만인 경우 up 부터 시작
3. 수평 이동을 어떤 식으로 구성해야하는지 ??? 해결법을 찾지 못함
4. 진짜…. 너무 어렵다…..ㅠ

---

### 3. 다른 풀이
```jsx
function solution(name) {
    let moves = 0;  // 상하 이동 횟수
    let minSideMove = name.length - 1;  // 좌우 이동의 최소값 (초기값은 한 방향으로 쭉 이동하는 경우)
    
    for (let i = 0; i < name.length; i++) {
        // 각 문자에 대해 위아래 중 최소 이동 횟수 계산
        moves += Math.min(name[i].charCodeAt(0) - 65, 91 - name[i].charCodeAt(0));
        
        // 현재 위치 이후의 연속된 A의 끝 위치 찾기
        let endA = i + 1;
        while (endA < name.length && name[endA] === 'A') endA++;
        
        // 좌우 이동의 최소값 갱신
        // 1. 현재까지 왔다가 돌아가는 경우
        // 2. 끝까지 갔다가 돌아오는 경우
        minSideMove = Math.min(minSideMove, i * 2 + (name.length - endA), (name.length - endA) * 2 + i);
    }
    
    return moves + minSideMove;  // 총 이동 횟수 반환
}
```
1. 상하 이동
    1. ASCII 코드 A = 65 / Z = 90
2. 연속된 A 탐색
3. 좌우 이동
    1. 경우의 수
        1. 기존 최소값
        2. 현재까지 왔다가 들어가는 경우
            
            **`i * 2 + (name.length - endA)`**
            
            - **i * 2**
                - 시작점에서 i까지 갔다가 다시 시작점으로 돌아오는 이동 횟수
            - **name.length - endA**
                - endA 이후부터 끝까지 남은 글자 수만큼 이동
            - 예시)  **JAN**
                - 시작점(0) 에서 J 처리 (moves X)
                - 다시 시작점으로 돌아감 (이미 시작점 → moves X)
                - 끝(2) 에서부터 역순으로 이동 N 처리
        3. 끝까지 갔다가 돌아오는 경우
            
            **`(name.length - endA) * 2 + i`**
            
            - **(name.length - endA) * 2**
                - endA부터 끝까지 이동했다가 다시 돌아오는 이동 횟수
            - **i**
                - 시작점에서 현재 위치까지의 이동 횟수
            - 예시)  **JAN**
                - 시작점(0) 에서 J 처리 (moves X)
                - J에서 끝까지 이동 (0 → 1 → 2)
                - A (endA=2) 위치로 역순 이동 (2 → 1)
