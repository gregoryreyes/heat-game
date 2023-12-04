let attempts = 3;
let answer = "";
const button = document.getElementById("button");
const getNewPlayerButton = document.getElementById("refresh-player-button");
const playerName = document.getElementById("player-name");
const countContainer = document.getElementById("count-container");
const yearContainer = document.getElementById("year");

countContainer.textContent = attempts;

let heatPlayers = [
  {
    name: "Bam Adebayo",
    number: 13,
    nickname: "Bam Bam",
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1628389.png"
  },
  {
    name: "Jimmy Butler",
    number: 22,
    nickname: "Jimmy Buckets",
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/202710.png"
  },
  {
    name: "Tyler Herro",
    number: 14,
    nickname: "No Limit Herro",
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629639.png"
  },
  {
    name: "Jaime Jaquez Jr.",
    number: 11,
    nickname: "Tripple J",
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1631170.png",
  },
  {
    name: "Kyle Lowry",
    number: 7,
    nickname: "Kloe",
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/200768.png",
  },
  {
    name: "Kevin Love",
    number: 42,
    nickname: "K Love",
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/201567.png",
  },
  {
    name: "Duncan Robinson",
    number: 55,
    nickname: "D-Bo",
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629130.png",
  },
  {
    name: "Nikola Jovic",
    number: 5,
    nickname: "Jover",
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1631107.png",
  },
];

let randomNumber = Math.floor( Math.random() * heatPlayers.length );

function displayPlayer( player ){
  console.log( 'player ---> ', heatPlayers[player].image );
  let appEl = document.getElementById("app");

  if ( appEl.hasChildNodes() ) {
  document.querySelector(".player-pic").remove();
  let imageTag = document.createElement("img");
  imageTag.classList.add("player-pic")
  imageTag.setAttribute( "src", heatPlayers[player].image );
  appEl.appendChild( imageTag );
  } else {
    let imageTag = document.createElement("img");
    imageTag.classList.add("player-pic")
    imageTag.setAttribute( "src", heatPlayers[player].image );
    appEl.appendChild( imageTag );
  }

  
}

displayPlayer( randomNumber );

heatPlayers.forEach( player => {
  // console.log( player.name );
  const rosterUl = document.getElementById("roster-list");
  const playerLi = document.createElement("li");
  playerLi.textContent = player.name;
  rosterUl.appendChild( playerLi );
});

function askQuestion(){
  setTimeout( () => {
    answer = prompt('Name this player:');
    if ( typeof answer !== "object" ){
      isAnswerCorrect( answer, randomNumber ); 
    } else {
      console.log( `You didn't answer the question. :(` );
    }
    
  }, 500 );
}

function isAnswerCorrect( answer, number ){
  answer = answer.toLowerCase();
  player = heatPlayers[number].name.toLowerCase().trim();

  if ( answer === player ){
    playerName.textContent = heatPlayers[number].name;
    console.log(`WINNER!!!! you found ${heatPlayers[number].name}`);
    setTimeout(() => {
      alert( `WINNER!!!! you found ${heatPlayers[number].name}`);
      location.reload();
    }, 500);
  } else {
    if ( attempts !== 1 ) {
      console.log( `Wrong!!! The correct name of the player is ${heatPlayers[number].name}` );
      alert( `Wrong. Try again. Number of attempts left: ${attempts - 1}` );
    } else {
      console.log( 'game over ---> The correct name of the player is ' + heatPlayers[number].name + '. attempts = ', attempts );
      alert("Game Over. Sorry, try again!");
      location.reload();
    }

    --attempts
    countContainer.textContent = attempts;
    console.log( 'attempts ---> ', attempts );
  }
}

button.addEventListener( 'click', e => {
  askQuestion();
});

getNewPlayerButton.addEventListener( 'click', e => {
//  TODO: Make sure new player isn't the last player that was displayed.

  randomNumber = Math.floor( Math.random() * heatPlayers.length );

  displayPlayer( randomNumber );
});