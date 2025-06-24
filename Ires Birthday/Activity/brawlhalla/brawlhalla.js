document.addEventListener('DOMContentLoaded', function () {
    const game = document.getElementById("game");
    const healthBar = document.getElementById("healthBar");
    const badGuy = document.getElementById("badGuy");
    const timerDisplay = document.getElementById("timer");
  
    const healthBarImages = [
      "assets/healthBars/health1.png", "assets/healthBars/health2.png", "assets/healthBars/health3.png",
      "assets/healthBars/health4.png", "assets/healthBars/health5.png", "assets/healthBars/health6.png",
      "assets/healthBars/health7.png",  "assets/healthBars/health9.png",
      "assets/healthBars/health10.png", "assets/healthBars/health11.png", "assets/healthBars/health12.png",
      "assets/healthBars/health13.png", "assets/healthBars/health14.png", "assets/healthBars/health15.png",
      "assets/healthBars/health16.png", "assets/healthBars/health17.png", "assets/healthBars/health18.png",
      "assets/healthBars/health19.png", "assets/healthBars/health20.png", "assets/healthBars/health21.png",
      "assets/healthBars/health22.png", "assets/healthBars/health23.png"
    ];
  
    let currentStage = 0;
    let clicksNeeded = 22;
    let won = false;
    let timeLeft = 7;
  
    // Countdown logic
    const countdown = setInterval(() => {
      timeLeft--;
      timerDisplay.textContent = `Time: ${timeLeft}`;
  
      if (timeLeft === 0 && !won) {
        clearInterval(countdown);
        game.innerHTML = `
          <div id="failed">
            <img width="30" height="38" src="assets/sad.png" />
            <p>You were too slow... Koji defeated Ire!</p>
            <button id="replay-button">Try Again</button>
          </div>
        `;
  
        document.getElementById("replay-button").addEventListener("click", () => {
          window.location.reload();
        });
      }
    }, 700);
  
    // Bad guy click logic
    badGuy.addEventListener("click", function (event) {
      if (won || currentStage >= clicksNeeded) return;
  
      // Show click effect image at cursor position
      const clickImage = document.createElement("img");
      clickImage.src = "assets/sword.png"; // your image for the click effect
      clickImage.classList.add("click-effect");
      clickImage.style.left = `${event.clientX}px`;
      clickImage.style.top = `${event.clientY}px`;
      document.body.appendChild(clickImage);
  
      setTimeout(() => {
        clickImage.remove();
      }, 500);
  
      // Update health bar
      healthBar.src = healthBarImages[currentStage];
      currentStage++;
  
      // Win condition
      if (currentStage === clicksNeeded) {
        won = true;
        clearInterval(countdown);
  
        game.innerHTML = `
          <div id="won">
            <img width="30" height="38" src="assets/win.png" />
            <p>Koji has been defeated! Ire's eyes are hurting. </p>
            <button id="done-button"> Leave Game</button>
          </div>
        `;
  
        document.getElementById("done-button").addEventListener("click", () => {
          window.location.href = "../../afterActivity.html";
        });
      }
    });
  });
  