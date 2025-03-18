# [level 2] 전화번호 목록 - 42577 
<details>
<summary><h3>1. 문제</h3></summary>
<div markdown="1">
        
[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/42577) 

### 성능 요약

메모리: 80.8 MB, 시간: 167.58 ms

### 구분

코딩테스트 연습 > 해시

### 채점결과

정확성: 83.3<br/>효율성: 16.7<br/>합계: 100.0 / 100.0

### 제출 일자

2025년 03월 18일 17:29:30

### 문제 설명

<p>전화번호부에 적힌 전화번호 중, 한 번호가 다른 번호의 접두어인 경우가 있는지 확인하려 합니다.<br>
전화번호가 다음과 같을 경우, 구조대 전화번호는 영석이의 전화번호의 접두사입니다.</p>

<ul>
<li>구조대 : 119</li>
<li>박준영 : 97 674 223</li>
<li>지영석 : 11 9552 4421</li>
</ul>

<p>전화번호부에 적힌 전화번호를 담은 배열 phone_book 이 solution 함수의 매개변수로 주어질 때, 어떤 번호가 다른 번호의 접두어인 경우가 있으면 false를 그렇지 않으면 true를 return 하도록 solution 함수를 작성해주세요.</p>

<h5>제한 사항</h5>

<ul>
<li>phone_book의 길이는 1 이상 1,000,000 이하입니다.

<ul>
<li>각 전화번호의 길이는 1 이상 20 이하입니다.</li>
<li>같은 전화번호가 중복해서 들어있지 않습니다.</li>
</ul></li>
</ul>

<h5>입출력 예제</h5>
<table class="table">
        <thead><tr>
<th>phone_book</th>
<th>return</th>
</tr>
</thead>
        <tbody><tr>
<td>["119", "97674223", "1195524421"]</td>
<td>false</td>
</tr>
<tr>
<td>["123","456","789"]</td>
<td>true</td>
</tr>
<tr>
<td>["12","123","1235","567","88"]</td>
<td>false</td>
</tr>
</tbody>
      </table>
<h5>입출력 예 설명</h5>

<p>입출력 예 #1<br>
앞에서 설명한 예와 같습니다.</p>

<p>입출력 예 #2<br>
한 번호가 다른 번호의 접두사인 경우가 없으므로, 답은 true입니다.</p>

<p>입출력 예 #3<br>
첫 번째 전화번호, “12”가 두 번째 전화번호 “123”의 접두사입니다. 따라서 답은 false입니다.</p>

<hr>

<p><strong>알림</strong></p>

<p>2021년 3월 4일, 테스트 케이스가 변경되었습니다. 이로 인해 이전에 통과하던 코드가 더 이상 통과하지 않을 수 있습니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
</div>
</details>

---
### 2. 오답
```jsx
function solution(phone_book) {
    var answer = true;
    
    const sortedPhoneBook = phone_book.sort((a, b) => a - b);

    for (let i = 0; i < sortedPhoneBook.length; i++) {
      for (let j = i + 1; j < sortedPhoneBook.length; j++) {
        let result = sortedPhoneBook[j].startsWith(sortedPhoneBook[i]);
        if (result) {
            answer = false;
            break;
        };
      }
    }
    
    return answer;
}
```

⇒ 효율성 테스트 실패 - 시간 초과 발생

**원인 1)** 이중 반복문 사용 ⇒ 최악의 경우 **시간 복잡도 O(n^2)**

**해결**

**sort ( )** 

- **시간 복잡도 O(nlogn)**
- 문자열 정렬

**startsWith( )**

- 문자열이 지정된 접두사로 시작하는지 여부 확인
- return true / false
- 사용
    
    **`string.startsWith(searchString[ , position ])`**
    
    - 대소문자 구분
    - position 매개변수로 특정 인덱스부터 검색 시작 가능
---
### 3. 다른 풀이
#### Claude Refactoring
```jsx
function solution(phone_book) {
    // 문자열 기준으로 정렬
    phone_book.sort();
    
    // 인접한 두 번호만 비교하면 됨
    for (let i = 0; i < phone_book.length - 1; i++) {
        if (phone_book[i+1].startsWith(phone_book[i])) {
            return false;
        }
    }
    
    return true;
}
```

1. 전화번호가 정렬되어 있으면, 접두어 관계는 인접한 항목에서만 발생 가능
    
    ```jsx
    ["119", "97674223", "1195524421"]
    sort()
     => ["119", "1195524421", "97674223"]
    ```
