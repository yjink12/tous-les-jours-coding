import java.io.*;
import java.util.StringTokenizer;

public class Main {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    int N = Integer.parseInt(br.readLine());

    int minCount = -1;
    if (N % 3 == 0) {
      minCount = N/3;
    }
    if (N % 5 == 0) {
      minCount = N/5;
    }
    if (N % 3 != 0 || N % 5 != 0){
      for (int i=0; i<=N/3; i++) {
        for (int j=0; j<=N/5; j++) {
          if (3*i + 5*j == N) {
            if (minCount == -1 || minCount > i+j) minCount = i+j;
          }
        }
      }
    }
    System.out.println(minCount);
    br.close();
	}
}