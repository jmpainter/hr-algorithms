function climbingLeaderboard(scores, alice) {
  const result = [];
  alice.forEach(score => {
    // insert score in right place
    const scoresCopy = scores.slice(0);
    let rank = 1;

    for (let i = 0; i < scoresCopy.length; i++) {
      if (scoresCopy[i] < scoresCopy[i - 1]) {
        rank++;
      }
      if (i === scoresCopy.length - 1 && score < scoresCopy[i]) {
        rank++;
        result.push(rank);
      } else if (scoresCopy[i] < score) {
        result.push(rank);
        break;
      } else if (scoresCopy[i] === score) {
        result.push(rank);
        break;
      }
    }
  });
  return result;
}

let scores = [100, 90, 90, 80, 75, 60];
let alice = [50, 65, 77, 90, 102];
console.log(climbingLeaderboard(scores, alice));
