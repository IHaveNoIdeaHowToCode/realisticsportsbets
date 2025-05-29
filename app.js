// console.log("Hello world! I am Peppercorn Bing Bong!")

// LAB DATA
let bank = 100;

const players = [
  { teamNumber: 1, emoji: "🏃‍♂️", skill: 10, name: "D'Marcus Williums" },
  { teamNumber: 1, emoji: "🤾‍♂️", skill: 30, name: "Tyroil Smoochie-Wallace" },
  { teamNumber: 1, emoji: "🏇", skill: 88, name: "Jackmerius Tacktheratrix" },
  {
    teamNumber: 1,
    emoji: "🏌️‍♀️",
    skill: 15,
    name: "Javaris Jamar Javarison-Lamar",
  },
  { teamNumber: 1, emoji: "🏋️‍♂️", skill: 77, name: "D'Pez Poopsie" },
  { teamNumber: 1, emoji: "🏌️‍♂️", skill: 21, name: "D'Jasper Probincrux III" },
  { teamNumber: 1, emoji: "🤾", skill: 5, name: "Leoz Maxwell Jilliumz" },
  { teamNumber: 1, emoji: "🏂", skill: 99, name: "Hingle McCringleberry" },
  { teamNumber: 1, emoji: "🧘‍♀️", skill: 50, name: "L'Carpetron Dookmarriot" },
  { teamNumber: 1, emoji: "🚶‍♀️", skill: 1, name: "Xmus Jaxon Flaxon-Waxon" },
  { teamNumber: 2, emoji: "🏋️‍♀️", skill: 61, name: "Saggitariutt Jefferspin" },
  { teamNumber: 2, emoji: "🤺", skill: 34, name: "Quatro Quatro" },
  { teamNumber: 2, emoji: "🏄", skill: 71, name: "X-Wing @Aliciousness" },
  { teamNumber: 2, emoji: "🧜‍♂️", skill: 76, name: "Bisquiteen Trisket" },
  {
    teamNumber: 2,
    emoji: "🤸",
    skill: 47,
    name: "Scoish Velociraptor Maloish",
  },
  { teamNumber: 2, emoji: "⛹️‍♀️", skill: 23, name: "Donkey Teeth" },
  {
    teamNumber: 2,
    emoji: "🕴️",
    skill: 58,
    name: "T.J. A.J. R.J. Backslashinfourth V",
  },
  { teamNumber: 2, emoji: "💃", skill: 99, name: "Firstname Lastname" },
  { teamNumber: 2, emoji: "🧍‍♂️", skill: 3, name: "Dan Smith" },
  { teamNumber: 2, emoji: "🐅", skill: 100, name: "Tiger" },
];

// NOTE -- DRAW PLAYERS SECTION

function drawTeam1() {
  const team1Container = document.getElementById('teamOneRoster')
  let team1Content = "";

  players.forEach((player) => {
    if (player.teamNumber == 1) {
      // console.log(player)
      team1Content += `<span title="${player.name}">${player.emoji}</span>`
    }
  })
  team1Container.innerHTML = team1Content
}

function drawTeam2() {
  const team2Container = document.getElementById('teamTwoRoster')
  let team2Content = "";

  players.forEach((player) => {
    if (player.teamNumber == 2) {
      // console.log(player)
      team2Content += `<span title="${player.name}">${player.emoji}</span>`
    }
  })
  team2Container.innerHTML = team2Content
}

drawTeam1()
drawTeam2()

//  BETTING FOR TEAM 1

function calculateTeam1Score() {
  let team1Skill = 0;

  players.forEach((player) => {
    if (player.teamNumber == 1) {
      team1Skill += player.skill
    }
  });
  console.log(team1Skill);
}

function calculateTeam2Score() {
  let team2Skill = 0

  players.forEach((player) => {
    if (player.teamNumber == 2) {
      team2Skill += player.skill
    }
  })
  console.log(team2Skill)
}

function calculateScoreForTeam(teamNumber) {
  let teamSkill = 0

  players.forEach((player) => {
    if (player.teamNumber == teamNumber) {
      teamSkill += player.skill
    }
  })
  console.log(teamSkill)
  return teamSkill
}

function betFiveOnTeam1() {
  let team1Skill = calculateScoreForTeam(1)
  let team2Skill = calculateScoreForTeam(2)

  if (team1Skill > team2Skill) {
    bank += 25
  }
  else {
    bank -= 25
  }
}

// calculateTeamScore()

// //  BETTING FOR TEAM 2
// function betTeam2() {

//   players.forEach((player) => {
//     if (player.teamNumber == 2) {
//       team2Skill += player.skill
//     }
//   });

//   console.log(team2Skill);
// }


// betTeam2()