function solution(arr)
{
    var answer = [];
    
    let prev;
    for (const a of arr) {
        if (prev !== a) {
            answer.push(a);
        }
        prev = a;
    }

    return answer;
}