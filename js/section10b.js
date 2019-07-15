// es5 code
/*
const myTeam = {
  members:[
    'James',
    'Jane',
    'Johnny',
    'Jill'
  ],

  teamName: 'The J Team',

  teamSummary: function(){
    return this.members.map(function(member){
      return `${member} is on team ${this.teamName}`;
    }.bind(this));
  }
};

console.log(
  myTeam.teamSummary()
);
*/




// jQuery code
/*
const myTeam = {
  members:[
    'James',
    'Jane',
    'Johnny',
    'Jill'
  ],

  teamName: 'The J Team',

  teamSummary: function(){
    var self = this;
    return this.members.map(function(member){
      return `${member} is on team ${self.teamName}`;
    }.bind(this));
  }
};

console.log(
  myTeam.teamSummary()
);
*/



// es6 code

const myTeam = {
  members:[
    'James',
    'Jane',
    'Johnny',
    'Jill'
  ],

  teamName: 'The J Team',

  /*
  teamSummary: function(){
    return this.members.map(function(member){
      return `${member} is on team ${this.teamName}`;
    }.bind(this));
  }
  */

  teamSummary: function(){
    return this.members.map((member) => {
      return `${member} is on team ${this.teamName}`;
    });
  }



  
};

console.log(
  myTeam.teamSummary()
);