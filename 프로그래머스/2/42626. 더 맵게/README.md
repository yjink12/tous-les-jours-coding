# [level 2] 더 맵게 - 42626 
<details>
<summary><h3>1. 문제</h3></summary>
<div markdown="1">
        
[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/42626) 

### 성능 요약

메모리: 101 MB, 시간: 651.75 ms

### 구분

코딩테스트 연습 > 힙（Heap）

### 채점결과

정확성: 83.9<br/>효율성: 16.1<br/>합계: 100.0 / 100.0

### 제출 일자

2025년 03월 25일 16:16:15

### 문제 설명

<p>매운 것을 좋아하는 Leo는 모든 음식의 스코빌 지수를 K 이상으로 만들고 싶습니다. 모든 음식의 스코빌 지수를 K 이상으로 만들기 위해 Leo는 스코빌 지수가 가장 낮은 두 개의 음식을 아래와 같이 특별한 방법으로 섞어 새로운 음식을 만듭니다.</p>
<div class="highlight"><pre class="codehilite"><code>섞은 음식의 스코빌 지수 = 가장 맵지 않은 음식의 스코빌 지수 + (두 번째로 맵지 않은 음식의 스코빌 지수 * 2)
</code></pre></div>
<p>Leo는 모든 음식의 스코빌 지수가 K 이상이 될 때까지 반복하여 섞습니다.<br>
Leo가 가진 음식의 스코빌 지수를 담은 배열 scoville과 원하는 스코빌 지수 K가 주어질 때, 모든 음식의 스코빌 지수를 K 이상으로 만들기 위해 섞어야 하는 최소 횟수를 return 하도록 solution 함수를 작성해주세요.</p>

<h5>제한 사항</h5>

<ul>
<li>scoville의 길이는 2 이상 1,000,000 이하입니다.</li>
<li>K는 0 이상 1,000,000,000 이하입니다.</li>
<li>scoville의 원소는 각각 0 이상 1,000,000 이하입니다.</li>
<li>모든 음식의 스코빌 지수를 K 이상으로 만들 수 없는 경우에는 -1을 return 합니다.</li>
</ul>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>scoville</th>
<th>K</th>
<th>return</th>
</tr>
</thead>
        <tbody><tr>
<td>[1, 2, 3, 9, 10, 12]</td>
<td>7</td>
<td>2</td>
</tr>
</tbody>
      </table>
<h5>입출력 예 설명</h5>

<ol>
<li><p>스코빌 지수가 1인 음식과 2인 음식을 섞으면 음식의 스코빌 지수가 아래와 같이 됩니다.<br>
새로운 음식의 스코빌 지수 = 1 + (2 * 2) = 5<br>
가진 음식의 스코빌 지수 = [5, 3, 9, 10, 12]</p></li>
<li><p>스코빌 지수가 3인 음식과 5인 음식을 섞으면 음식의 스코빌 지수가 아래와 같이 됩니다.<br>
새로운 음식의 스코빌 지수 = 3 + (5 * 2) = 13<br>
가진 음식의 스코빌 지수 = [13, 9, 10, 12]</p></li>
</ol>

<p>모든 음식의 스코빌 지수가 7 이상이 되었고 이때 섞은 횟수는 2회입니다.</p>

<hr>

<p>※ 공지 - 2022년 12월 23일 테스트 케이스가 추가되었습니다. 기존에 제출한 코드가 통과하지 못할 수도 있습니다.<br>
※ 공지 - 2023년 03월 23일 테스트 케이스가 추가되었습니다. 기존에 제출한 코드가 통과하지 못할 수도 있습니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

</div>
</details>

---

### 2. 오답
```jsx
function solution(scoville, K) {
    // 오름차순으로 정렬
    let sortedScoville = scoville.sort((a, b) => a - b);

    // 배열 값이 k 이상인지 분기
    let mixCount = 0;
    for (let i = 0; i < sortedScoville.length; i++) {
      if (sortedScoville[i] < K) {
        // mix logic
        let mixScoville = sortedScoville[0] + sortedScoville[1] * 2;
        // 배열에서 제외하고 mix 값을 추가
        sortedScoville.splice(0, 2, mixScoville);
        // 그리고 다시 오름차순으로 정렬
        sortedScoville.sort((a, b) => a - b);
      } else {
        mixCount = i;
        break;
      }
    }

    return mixCount;
  }
```

⇒ **문제점**

`sort()` 반복적으로 호출 ⇒ O(nlogn) 의 시간 복잡도 발생

⇒ Heap 으로 풀어야하지만 javascript 에는 없다 ⇒ 직접 구현해야한다...맵다 매워...


---

### 3. 다른 풀이
#### Claude Refactoring
```jsx
class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(value) {
		    // 배열 끝에 새 값 추가
		    this.heap.push(value);
		    
		    // 새로 추가된 노드의 위치 조정 (bubbleUp)
		    this.bubbleUp(this.heap.length - 1);
		}

    pop() {
		  // 힙이 비어있으면 null 반환
		  if (this.heap.length === 0) return null;
		  
		  // 힙에 요소가 1개면 그 요소 반환
		  if (this.heap.length === 1) return this.heap.pop();
		
		  // 최소값(루트) 저장
		  const min = this.heap[0];
		  
		  // 마지막 요소를 루트로 이동
		  this.heap[0] = this.heap.pop();
		  
		  // 루트 노드 위치 조정 (bubbleDown)
		  this.bubbleDown(0);
		  
		  return min;
		}

    bubbleUp(index) {
	    while (index > 0) {
	        // 부모 노드 인덱스 계산
	        const parentIndex = Math.floor((index - 1) / 2);
	        
	        // 부모 노드가 현재 노드보다 작거나 같으면 정지
	        if (this.heap[parentIndex] <= this.heap[index]) break;
	        
	        // 부모와 자식 노드 값 교환
	        [this.heap[parentIndex], this.heap[index]] = 
	        [this.heap[index], this.heap[parentIndex]];
	        
	        // 인덱스를 부모 노드 인덱스로 변경
	        index = parentIndex;
	    }
		}

    bubbleDown(index) {
		    const lastIndex = this.heap.length - 1;
		    
		    while (true) {
		        // 왼쪽, 오른쪽 자식 노드 인덱스 계산
		        const leftIndex = 2 * index + 1;
		        const rightIndex = 2 * index + 2;
		        let smallestIndex = index;
		
		        // 왼쪽 자식이 현재 노드보다 작으면 왼쪽 자식을 최소로 설정
		        if (leftIndex <= lastIndex && 
		            this.heap[leftIndex] < this.heap[smallestIndex]) {
		            smallestIndex = leftIndex;
		        }
		
		        // 오른쪽 자식이 현재 최소 노드보다 작으면 오른쪽 자식을 최소로 설정
		        if (rightIndex <= lastIndex && 
		            this.heap[rightIndex] < this.heap[smallestIndex]) {
		            smallestIndex = rightIndex;
		        }
		
		        // 더 이상 바꿀 노드가 없으면 정지
		        if (smallestIndex === index) break;
		
		        // 현재 노드와 최소 노드 교환
		        [this.heap[index], this.heap[smallestIndex]] = 
		        [this.heap[smallestIndex], this.heap[index]];
		        
		        // 인덱스를 최소 노드 인덱스로 변경
		        index = smallestIndex;
		    }
		}

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }
}

function solution(scoville, K) {
    const minHeap = new MinHeap();
    
    // 모든 스코빌 지수를 힙에 추가
    for (const score of scoville) {
        minHeap.push(score);
    }

    let mixCount = 0;

    // 가장 낮은 스코빌 지수가 K 미만일 때 믹싱 수행
    while (minHeap.size() > 1 && minHeap.peek() < K) {
        const first = minHeap.pop();
        const second = minHeap.pop();
        
        const mixedScoville = first + second * 2;
        minHeap.push(mixedScoville);
        
        mixCount++;
    }

    // 모든 음식의 스코빌 지수를 K 이상으로 만들 수 없는 경우
    return minHeap.peek() >= K ? mixCount : -1;
}
```

⇒ `bubbleUp` : 새로 추가된 노드를 올바른 위치로 위로 올림

`bubbleDown` : 루트에서 제거된 마지막 노드를 올바른 위치로 아래로 내림
