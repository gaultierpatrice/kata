const actions = [
  { type: "win", points: 10 },
  { type: "bonus", points: 5 },
  { type: "penalty", points: 3 },
  { type: "win", points: 20 },
  { type: "penalty", points: 2 },
];

function getScore(actions) {
  let score = 0;
  actions.forEach((action) => {
    switch (action.type) {
      case "win":
        score += action.points;
        break;
      case "bonus":
        score += action.points;
        break;
      case "penalty":
        score -= action.points;
        break;
    }
  });
  if (score < 0) {
    score = 0;
  }
  return score;
}

console.log("getScore(actions) :", getScore(actions));

function getScoreWithReduce(actions) {
  let score = actions.reduce((acc, action) => {
    switch (action.type) {
      case "win":
        acc += action.points;
        break;
      case "bonus":
        acc += action.points;
        break;
      case "penalty":
        acc -= action.points;
        break;
    }
    return acc;
  }, 0);
  return score;
}

console.log("getScoreWithReduce(actions) :", getScoreWithReduce(actions));
