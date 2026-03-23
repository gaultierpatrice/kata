const responses = ["yes", "no", "yes", "maybe", "YES", " no "];

function surveyStats(array) {
  let sortedStats = {};

  for (let i = 0; i < array.length; i++) {
    const value = array[i].trim(" ");
    if (value == "yes" || value == "no" || value == "maybe") {
      sortedStats[value] = (sortedStats[value] || 0) + 1;
    } else {
      sortedStats["invalid"] = (sortedStats["invalid"] || 0) + 1;
    }
  }

  return sortedStats;
}

console.log("surveyStats : ", surveyStats(responses));

function surveyStatsWithCase(array) {
  let sortedStats = {};

  for (let i = 0; i < array.length; i++) {
    const value = array[i].trim(" ").toLowerCase();

    if (value == "yes" || value == "no" || value == "maybe") {
      sortedStats[value] = (sortedStats[value] || 0) + 1;
    } else {
      sortedStats["invalid"] = (sortedStats["invalid"] || 0) + 1;
    }
  }

  return sortedStats;
}

console.log("surveyStatsWithCase : ", surveyStatsWithCase(responses));
