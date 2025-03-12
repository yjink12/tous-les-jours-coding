function solution(array, commands) {
    var answer = [];
    for (let i=0; i<commands.length; i++) {
      const [start, end, index] = commands[i];

      const sliceArr = array.slice(start-1, end);
      const sortArr = sliceArr.sort((a, b) => a - b);

      answer.push(sortArr[index-1]);
    }
    return answer;
}