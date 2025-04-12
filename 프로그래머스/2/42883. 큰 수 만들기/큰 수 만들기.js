function solution(number, k) {
    let answer = '';
    const stack = [];
    
    for (const num of number) {
        while(k > 0 && stack[stack.length -1] < num) {
            stack.pop();
            k--;
        }
        stack.push(num);
    }
    stack.splice(stack.length - k, k);
    answer = stack.join("");
    
    return answer;
} 