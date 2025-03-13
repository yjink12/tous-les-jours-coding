function solution(sizes) {
    var answer = 0;
    let bigSize = [];
    let smallSize = [];

    for(let i=0; i<sizes.length; i++) {
       if (sizes[i][0] > sizes[i][1]) {
        bigSize.push(sizes[i][0]);
        smallSize.push(sizes[i][1]);
       } else {
        bigSize.push(sizes[i][1]);
        smallSize.push(sizes[i][0]);
       }
    }

    bigSize.sort((a, b) => a - b);
    smallSize.sort((a, b) => a - b);

    answer = bigSize[bigSize.length - 1] * smallSize[smallSize.length - 1];
    return answer;
}