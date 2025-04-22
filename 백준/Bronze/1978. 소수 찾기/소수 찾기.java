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