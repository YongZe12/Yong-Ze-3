// Tab switching logic
document.querySelectorAll('.tablink').forEach(btn => {
  btn.addEventListener('click', function() {
    // Remove active class from all buttons and tabs
    document.querySelectorAll('.tablink').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tabcontent').forEach(tab => tab.classList.remove('active'));
    // Activate this button and corresponding tab
    this.classList.add('active');
    document.getElementById(this.dataset.tab).classList.add('active');
  });
});

// Feedback form handling
document.getElementById('feedbackForm').addEventListener('submit', function(e) {
  e.preventDefault();
  let txt = document.getElementById('userFeedback').value.trim();
  let msg = document.getElementById('feedbackMessage');
  if(txt.length > 1){
    msg.textContent = "Thank you for your feedback! 🚀";
    this.reset();
    // Optionally store feedback or send to server here
  } else {
    msg.textContent = "Please write something before submitting!";
  }
});
let gameInterval, gameActive = false, dropId = 0, savedCount = 0, gameDuration = 20;
const gameArea = document.getElementById('water-game-area');
const scoreArea = document.getElementById('water-game-score');
const startBtn = document.getElementById('start-water-game');

function startWaterGame() {
  clearGame();
  savedCount = 0;
  scoreArea.textContent = "Score: 0";
  gameActive = true;
  let startTime = Date.now();
  gameInterval = setInterval(() => {
    if (Date.now() - startTime > gameDuration * 1000) {
      finishGame();
      return;
    }
    createWaterDrop();
  }, 600);

  // Animate drops movement
  animateDrops();
}

function clearGame() {
  gameArea.innerHTML = "<div style='position:absolute; bottom:0; left:52%; transform:translateX(-50%); font-size:2rem;'>🗑️</div>";
  clearInterval(gameInterval);
  gameActive = false;
}

function finishGame() {
  gameActive = false;
  clearInterval(gameInterval);
  scoreArea.textContent = `Time's up! Final score: ${savedCount}`;
}

function createWaterDrop() {
  const drop = document.createElement('div');
  drop.className = 'water-drop';
  drop.style.left = (Math.random() * 260 + 10) + "px";
  drop.style.top = "0px";
  drop.dataset.id = ++dropId;
  drop.textContent = "💧";
  drop.addEventListener('click', function(){
    if(gameActive){
      savedCount++;
      scoreArea.textContent = "Score: " + savedCount;
      drop.remove();
    }
  });
  gameArea.appendChild(drop);
}

function animateDrops() {
  function step() {
    if (!gameActive) return;
    let drops = Array.from(gameArea.getElementsByClassName('water-drop'));
    drops.forEach(drop => {
      let top = parseFloat(drop.style.top);
      drop.style.top = (top + 8) + "px";
      // Check if reached waste bin (bottom)
      if (top > 220) drop.remove();
    });
    requestAnimationFrame(step);
  }
  step();
}

startBtn && startBtn.addEventListener('click', startWaterGame);
clearGame(); // Show waste bin

// -- QUIZ LOGIC --
document.getElementById('quizForm').addEventListener('submit', function(e){
  e.preventDefault();
  let score = 0;
  if (this.q1.value === "a") score++;
  if (this.q2.value === "true") score++;
  if (this.q3.value === "fix") score++;
  let result = document.getElementById('quizResult');
  if(score === 3){
    result.textContent = "🌟 Perfect! You know how to save water!";
  } else if (score >= 2){
    result.textContent = "👍 Good job! You know a lot about water saving!";
  } else {
    result.textContent = "Keep learning and practicing water saving!";
  }
});
