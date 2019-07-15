// lecture 55, 56

const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill'
};

const engineeringTeam = {
  testingTeam,  // or testingTeam: testingTeam
  size: 3,
  department: 'Engineering',
  lead: "Jill",
  manager: 'Alex',
  engineering: 'Dave'
};


function* TeamIterator(team){
  yield team.lead;
  yield team.manager;
  yield team.engineering;
  // yield team.testingTeam.lead;
  // yield team.testingTeam;

  const testingTeamGenerator = TestingTeamIterator(team.testingTeam);
  yield* testingTeamGenerator;
}


function* TestingTeamIterator(team){
  yield team.lead;
  yield team.tester;
}


const names = [];
for (let name of TeamIterator(engineeringTeam)){
  names.push(name);
}

console.log(names);