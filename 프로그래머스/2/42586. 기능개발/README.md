# [level 2] 기능개발 - 42586 
<details>
<summary><h3>1. 문제</h3></summary>
<div markdown="1">
        
[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/42586) 

### 성능 요약

메모리: 33.4 MB, 시간: 0.16 ms

### 구분

코딩테스트 연습 > 스택／큐

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2025년 03월 23일 20:22:55

### 문제 설명

<p>프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다. 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.</p>

<p>또, 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고, 이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.</p>

<p>먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때 각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 solution 함수를 완성하세요.</p>

<h5>제한 사항</h5>

<ul>
<li>작업의 개수(progresses, speeds배열의 길이)는 100개 이하입니다.</li>
<li>작업 진도는 100 미만의 자연수입니다.</li>
<li>작업 속도는 100 이하의 자연수입니다.</li>
<li>배포는 하루에 한 번만 할 수 있으며, 하루의 끝에 이루어진다고 가정합니다. 예를 들어 진도율이 95%인 작업의 개발 속도가 하루에 4%라면 배포는 2일 뒤에 이루어집니다.</li>
</ul>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>progresses</th>
<th>speeds</th>
<th>return</th>
</tr>
</thead>
        <tbody><tr>
<td>[93, 30, 55]</td>
<td>[1, 30, 5]</td>
<td>[2, 1]</td>
</tr>
<tr>
<td>[95, 90, 99, 99, 80, 99]</td>
<td>[1, 1, 1, 1, 1, 1]</td>
<td>[1, 3, 2]</td>
</tr>
</tbody>
      </table>
<h5>입출력 예 설명</h5>

<p>입출력 예 #1<br>
첫 번째 기능은 93% 완료되어 있고 하루에 1%씩 작업이 가능하므로 7일간 작업 후 배포가 가능합니다.<br>
두 번째 기능은 30%가 완료되어 있고 하루에 30%씩 작업이 가능하므로 3일간 작업 후 배포가 가능합니다. 하지만 이전 첫 번째 기능이 아직 완성된 상태가 아니기 때문에 첫 번째 기능이 배포되는 7일째 배포됩니다.<br>
세 번째 기능은 55%가 완료되어 있고 하루에 5%씩 작업이 가능하므로 9일간 작업 후 배포가 가능합니다. </p>

<p>따라서 7일째에 2개의 기능, 9일째에 1개의 기능이 배포됩니다.</p>

<p>입출력 예 #2<br>
모든 기능이 하루에 1%씩 작업이 가능하므로, 작업이 끝나기까지 남은 일수는 각각 5일, 10일, 1일, 1일, 20일, 1일입니다. 어떤 기능이 먼저 완성되었더라도 앞에 있는 모든 기능이 완성되지 않으면 배포가 불가능합니다.</p>

<p>따라서 5일째에 1개의 기능, 10일째에 3개의 기능, 20일째에 2개의 기능이 배포됩니다.</p>

<p>※ 공지 - 2020년 7월 14일 테스트케이스가 추가되었습니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
</div>
</details>

---

### 2. 내 문제풀이
```jsx
function solution(progresses, speeds) {
    // progresses 남은 진도 계산해서 speeds로 나누기(올림 필수)
    let leftDay = [];
    for (let i = 0; i < progresses.length; i++) {
      let duration = Math.ceil((100 - progresses[i]) / speeds[i]);
      leftDay.push(duration);
    }

    let deploySchedule = [];
    // 배포마다 몇 개 기능 배포
    let count = 1;
    let maxLeftDay = leftDay[0];

    for (let i = 1; i < leftDay.length; i++) {
      if (leftDay[i] > maxLeftDay) {
        deploySchedule.push(count);
        maxLeftDay = leftDay[i];
        count = 1;
      } else {
        count++;
      }
    }
    deploySchedule.push(count);

    return deploySchedule;
}
```

1. progresses 를 순회해서 남은 작업 진도 값 추출한다
2. 남은 작업 진도 값을 개발 속도로 나눈다
3. 그리고 그 값을 올림(ceil) 한다
4. `leftDay` 배열에  남은 작업일 push
5. 어차피 `leftDay` 배열의 첫 번째 요소는 첫번째 요소이기 때문에 maxLeftDay로 바로 할당한다
6. 배포마다 몇 개 기능을 배포하는지 확인하기 위해 `leftDay` 를 순회해서
    1. leftDay의 값이 이전 leftDay 의 값보다 크면
        
        이전 count 값을 deploySchedule에 push 한다
        
        그리고 maxLeftDay를 현재 leftDay 값으로 변경하고 count를 1로 초기화한다.
        
    2. leftDay의 값이 이전 leftDay 의 값보다 작으면
        
        이전 leftDay 에 포함되는 것이기 때문에 count 값을 증가시킨다
        
7. 마지막 배포 그룹을 추가 시켜준다

---

### 3. 다른 풀이
```jsx
function solution(progresses, speeds) {
    let answer = [0];
    let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    let maxDay = days[0];

		// i = 작업, j = 배포 그룹
    for(let i = 0, j = 0; i< days.length; i++){
        if(days[i] <= maxDay) {
            answer[j] += 1;
        } else {
            maxDay = days[i];
            answer[++j] = 1;
        }
    }

    return answer;
}
```

1. `map` 을 사용해서 남은 작업일을 계산한다
2. 두 개의  변수 i 와 j 를 사용한다
    
    
    i=0
    
    days[0] = 7 ≤ maxDay(7)
    
    answer[0] += 1 → answer=[1]
    
    i=1
    
    days[1] = 3 ≤ maxDay(7)
    
    answer[0] += 1 → answer=[2]
    
    i=2
    
    days[2] = 9 > maxDay(7)
    
    maxDay = 9
    
    answer[1] += 1 → answer=[2, 1]
