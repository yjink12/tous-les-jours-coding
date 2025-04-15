# [Silver IV] 설탕 배달 - 2839 

[문제 링크](https://www.acmicpc.net/problem/2839) 

### 성능 요약

메모리: 14248 KB, 시간: 108 ms

### 분류

다이나믹 프로그래밍, 그리디 알고리즘, 수학

### 제출 일자

2025년 4월 15일 17:42:38

### 문제 설명

<p>상근이는 요즘 설탕공장에서 설탕을 배달하고 있다. 상근이는 지금 사탕가게에 설탕을 정확하게 N킬로그램을 배달해야 한다. 설탕공장에서 만드는 설탕은 봉지에 담겨져 있다. 봉지는 3킬로그램 봉지와 5킬로그램 봉지가 있다.</p>

<p>상근이는 귀찮기 때문에, 최대한 적은 봉지를 들고 가려고 한다. 예를 들어, 18킬로그램 설탕을 배달해야 할 때, 3킬로그램 봉지 6개를 가져가도 되지만, 5킬로그램 3개와 3킬로그램 1개를 배달하면, 더 적은 개수의 봉지를 배달할 수 있다.</p>

<p>상근이가 설탕을 정확하게 N킬로그램 배달해야 할 때, 봉지 몇 개를 가져가면 되는지 그 수를 구하는 프로그램을 작성하시오.</p>

### 입력 

 <p>첫째 줄에 N이 주어진다. (3 ≤ N ≤ 5000)</p>

### 출력 

 <p>상근이가 배달하는 봉지의 최소 개수를 출력한다. 만약, 정확하게 N킬로그램을 만들 수 없다면 -1을 출력한다.</p>

---

### 2. 내 코드 개선점
1. 이중 for문의 사용으로 시간 복잡도 증가
2. 5의 배수일때 이전 값을 고려하지 않고 무조건 N/5 로 덮어쓴다 => 예외처리 미흡

---

### 3. 다른 풀이
```jsx
import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");

        int N = Integer.parseInt(st.nextToken());

        if (N == 4 || N == 7) { // N이 4이거나 7일 경우에는 3이나 5로 나눌수 없다.
            System.out.println(-1);
        } else if (N % 5 == 0) { // N이 5로 바로 나눠질 경우
            System.out.println(N / 5);
        } else if (N % 5 == 1 || N % 5 == 3) { // N이 6, 8, 11, 13, 16 등일 경우
            System.out.println((N / 5) + 1);
        } else if (N % 5 == 2 || N % 5 == 4) { // N이 9, 12, 14, 17, 19 등일 경우
            System.out.println((N / 5) + 2);
        }
    }
}
```
1. 봉지의 개수를 최소화하려면 5kg 봉지로 최대한 구성해야함
2. 5의 배수 +3인 N은 봉지 개수 +1
eg) N = 8 -> 5x1 + 3x1 => 봉지 개수 2
3. N>=3
    1. 5배수 +1인 N은 봉지 개수 (n/5) + (n%5)
    2. 5의 배수 +3인 N의 봉지 개수와 동일
4. N>=8
    1. 5배수 +2인 N은 봉지 개수 (n/5) + (n%5)
    2. 5의 배수 +4인 N의 봉지 개수와 동일

| N | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 봉지개수 | 1 | 2 | -1 | 2 | 3 | 2 | 3 | 4 | 3 | 4 |
| N/5 | 1 |  |  |  |  | 2 |  |  |  |  |
| N%5 | 0 | 1 | 2 | 3 | 4 | 0 | 1 | 2 | 3 | 4 |

멋지다...ㅠ
