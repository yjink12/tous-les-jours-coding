# [level 1] 최소직사각형 - 86491 
<details>
<summary><h3>1. 문제</h3></summary>
<div markdown="1">
        
[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/86491) 

### 성능 요약

메모리: 39 MB, 시간: 34.44 ms

### 구분

코딩테스트 연습 > 완전탐색

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2025년 03월 13일 13:40:30

### 문제 설명

<p>명함 지갑을 만드는 회사에서 지갑의 크기를 정하려고 합니다. 다양한 모양과 크기의 명함들을 모두 수납할 수 있으면서, 작아서 들고 다니기 편한 지갑을 만들어야 합니다. 이러한 요건을 만족하는 지갑을 만들기 위해 디자인팀은 모든 명함의 가로 길이와 세로 길이를 조사했습니다.</p>

<p>아래 표는 4가지 명함의 가로 길이와 세로 길이를 나타냅니다.</p>
<table class="table">
        <thead><tr>
<th>명함 번호</th>
<th>가로 길이</th>
<th>세로 길이</th>
</tr>
</thead>
        <tbody><tr>
<td>1</td>
<td>60</td>
<td>50</td>
</tr>
<tr>
<td>2</td>
<td>30</td>
<td>70</td>
</tr>
<tr>
<td>3</td>
<td>60</td>
<td>30</td>
</tr>
<tr>
<td>4</td>
<td>80</td>
<td>40</td>
</tr>
</tbody>
      </table>
<p>가장 긴 가로 길이와 세로 길이가 각각 80, 70이기 때문에 80(가로) x 70(세로) 크기의 지갑을 만들면 모든 명함들을 수납할 수 있습니다. 하지만 2번 명함을 가로로 눕혀 수납한다면 80(가로) x 50(세로) 크기의 지갑으로 모든 명함들을 수납할 수 있습니다. 이때의 지갑 크기는 4000(=80 x 50)입니다.</p>

<p>모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어집니다. 모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 지갑의 크기를 return 하도록 solution 함수를 완성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>sizes의 길이는 1 이상 10,000 이하입니다.

<ul>
<li>sizes의 원소는 [w, h] 형식입니다.</li>
<li>w는 명함의 가로 길이를 나타냅니다.</li>
<li>h는 명함의 세로 길이를 나타냅니다.</li>
<li>w와 h는 1 이상 1,000 이하인 자연수입니다.</li>
</ul></li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>sizes</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>[[60, 50], [30, 70], [60, 30], [80, 40]]</td>
<td>4000</td>
</tr>
<tr>
<td>[[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]</td>
<td>120</td>
</tr>
<tr>
<td>[[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]</td>
<td>133</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1<br>
문제 예시와 같습니다.</p>

<p>입출력 예 #2<br>
명함들을 적절히 회전시켜 겹쳤을 때, 3번째 명함(가로: 8, 세로: 15)이 다른 모든 명함보다 크기가 큽니다. 따라서 지갑의 크기는 3번째 명함의 크기와 같으며, 120(=8 x 15)을 return 합니다.</p>

<p>입출력 예 #3<br>
명함들을 적절히 회전시켜 겹쳤을 때, 모든 명함을 포함하는 가장 작은 지갑의 크기는 133(=19 x 7)입니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

</div>
</details>

### 2. 문제점
```jsx
function solution(sizes) {
    var answer = 0;
    let bigSize = [];
    let smallSize = [];

    for(let i=0; i<sizes.length; i++) {
       if (sizes[i][0] > sizes[i][1]) {
        bigSize.push(sizes[i][0]);
        smallSize.push(sizes[i][1]);
       } else {
        bigSize.push(sizes[i][1]);
        smallSize.push(sizes[i][0]);
       }
    }

    bigSize.sort((a, b) => a - b);
    smallSize.sort((a, b) => a - b);

    answer = bigSize[bigSize.length - 1] * smallSize[smallSize.length - 1];
    return answer;
}
```

**문제점**

⇒ 가로, 세로 값 중 큰 값과 작은 값을 배열에 넣고 다시 또 정렬을 할 필요 없음

⇒ 큰 값의 최대값, 작은 값의 최대값을 구하면 된다!


### 3. 다른 풀이

```jsx
function solution(sizes) {
    let w = 0;
    let h = 0;
    
    sizes.forEach(s => {
        // 각 카드의 작은 쪽을 h, 큰 쪽을 w와 비교
        const min = Math.min(s[0], s[1]);
        const max = Math.max(s[0], s[1]);
        
        h = Math.max(h, min);
        w = Math.max(w, max);
    });

    return w * h;
}
```

⇒ sort를 하지 않고 `Math.min` 과 `Math.max` 를 사용하는 방법이 있다
