import java.io.*;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    int N = Integer.parseInt(br.readLine());

    StringTokenizer stk = new StringTokenizer(br.readLine());
    int[] arr = new int[N];
    for (int i=0; i<N; i++) {
      arr[i] = Integer.parseInt(stk.nextToken());
    }

    Arrays.sort(arr);
    // 최대값
    double maxScore = arr[arr.length - 1];
    double sumScore = 0.0;
    for (int i=0; i<N; i++) {
      sumScore += ((double)arr[i]/maxScore) * 100;
    }
    double average = sumScore / N;
    System.out.println(average);

    br.close();
	}
}