# [Bronze II] 소수 찾기 - 1978 
<details>
<summary><h3>1. 문제</h3></summary>
<div markdown="1">
 
[문제 링크](https://www.acmicpc.net/problem/1978) 

### 성능 요약

메모리: 14252 KB, 시간: 104 ms

### 분류

소수 판정, 정수론, 수학

### 제출 일자

2025년 4월 22일 14:06:35

### 문제 설명

<p>주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오.</p>

### 입력 

 <p>첫 줄에 수의 개수 N이 주어진다. N은 100이하이다. 다음으로 N개의 수가 주어지는데 수는 1,000 이하의 자연수이다.</p>

### 출력 

 <p>주어진 수들 중 소수의 개수를 출력한다.</p>

</div>
</details>

---

### 2. 오늘의 개념정리
### `소수`

**기본적인 소수 판별법**
1. 1 이하는 소수 X
2. 2부터 판별하려는 수 직전 수까지 하나씩 나눠가면서 나누어 떨어지면 소수 X
3. 나누어 떨어지는 수가 없으면 소수 O
4. 시간 복잡도 O(N)

**제곱근을 이용한 소수 판별법**
1. 4 이상의 수는 검사할 필요 X
   11을 4이상으로 나누려는 수가 11의 제곱근(3.XXX)보다 크기 때문에 몫은 11의 제곱근보다 작은 수가 된다
   2 또는 3이 몫이 되거나 나누어 떨어지지 않는 수 => 4이상의 수는 검사할 필요 X
2. 판별하려는 수의 제곱근까지만 확인해보면 된다!
3. 시간 복잡도 O(√N)

**에라토스테네스의 체**
 - 체로 걸러낸다고 생각
 - 1 ~ N까지의 수 중 모든 소수를 구함
1. 소수의 판별 범위만큼 이차원 배열을 생성해서 그 인덱스에 해당하는 값을 넣어준다
2. 2부터 시작해 특정 숫자의 배수에 해당하는 숫자들을 모두 지운다 (단, 자기 자신은 지우지 X)
   1) 2의 배수 지우기
   2) 3의 배수 지우기
   3) 이미 지워진 숫자의 경우 skip (4는 pass)
   4) 5의 배수 지우기
3. 구하려는 범위의 최대값의 제곱근까지만 반복
4. 시간 복잡도 O(n ㏒ (㏒ n))

   
---

### 3. 나의 풀이
```jsx
import java.io.*;
import java.util.StringTokenizer;

public class Main {
    private static int isPrime(int num) {
    if (num <= 1) return 0;
    for (int i=2; i<num; i++) {
      if (num % i == 0) return 0;
    }
    return 1;
  }
    public void findPrime() throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    int N = Integer.parseInt(br.readLine());

    StringTokenizer stz = new StringTokenizer(br.readLine());
    int[] arr = new int[N];
    for (int i=0; i<N; i++) {
      arr[i] = Integer.parseInt(stz.nextToken());
    }

    int primeCount = 0;
    for (int i=0; i<N; i++) {
      primeCount += isPrime(arr[i]);
    }
    System.out.println(primeCount);
    br.close();
    }
    
	public static void main(String[] args) throws IOException {
		new Main().findPrime();
	}
}
```

### 3. 다른 풀이
**"에라토스테네스의 체"를 사용한 풀이 방법**
```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        int[] arr = new int[n];

        int max = Integer.MIN_VALUE;
        StringTokenizer st = new StringTokenizer(br.readLine());
        for (int i = 0; i < n; i++) {
            arr[i] = Integer.parseInt(st.nextToken());
            max = Math.max(max, arr[i]);
        }

        //배열의 인덱스는 수, 값이 true 이면 소수가 아니다.
        boolean[] isNotPrimes = new boolean[max+1];

        //1은 소수가 아니다.
        isNotPrimes[1] = true;

        //에라테네스 체 알고리즘 사용하여 1 ~ max 범위의 소수 판별
        for (int i = 2; i <= max; i++) {
            if (!isNotPrimes[i]) {
                for (int j = i * 2; j <= max; j += i) {
                    isNotPrimes[j] = true;
                }
            }
        }

        int count = 0; //소수 개수

        for (int num : arr) {
            if (!isNotPrimes[num]) {
                count++;
            }
        }

        System.out.println(count);
    }
}
```
