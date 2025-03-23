function solution(progresses, speeds) {
    // progresses 남은 진도 계산해서 speeds로 나누기(올림 필수)
    let leftDay = [];
    for (let i = 0; i < progresses.length; i++) {
      let duration = Math.ceil((100 - progresses[i]) / speeds[i]);
      leftDay.push(duration);
    }

    let deploySchedule = [];
    // 배포마다 몇 개 기능 배포
    let count = 1;
    let maxLeftDay = leftDay[0];

    for (let i = 1; i < leftDay.length; i++) {
      if (leftDay[i] > maxLeftDay) {
        deploySchedule.push(count);
        maxLeftDay = leftDay[i];
        count = 1;
      } else {
        count++;
      }
    }
    deploySchedule.push(count);

    return deploySchedule;
}