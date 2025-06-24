function startGame() {
    let points = 0;
    const game = document.getElementById("game");
    game.innerHTML = `
      <div id="ire"></div>
      <div id="basketball"></div>
    `;
  
    const ire = document.getElementById("ire");
    const basketball = document.getElementById("basketball");
  
    // Jump logic
    function jump() {
      if (!ire.classList.contains("jump")) {
        ire.classList.add("jump");
        setTimeout(() => {
          ire.classList.remove("jump");
        }, 500);
      }
    }
  
    document.addEventListener("keydown", jump);
    
  
    // Collision check
    let ballLeft = 600;
    const collisionCheck = setInterval(() => {
        ballLeft -= 5;
        basketball.style.left = `${ballLeft}px`;
        const ireRect = ire.getBoundingClientRect();
        const ballRect = basketball.getBoundingClientRect();

        const isHit =
        ireRect.left + 20 < ballRect.right - 20 &&
        ireRect.right - 20 > ballRect.left + 20 &&
        ireRect.bottom > ballRect.top + 20;
 
        if (isHit) {
        clearInterval(collisionCheck);
        document.removeEventListener("keydown", jump);

        // Replace game content with message and button
        game.innerHTML = `       
            <div id=failed >
                <img width="30" height="38" src="assets/sad.png" />
                <p> Ire didn't score enough points! Try again?</p>
                <button id="replay-button">Replay</button>
            </div>
            `
        ;

        // Replay logic
        document.getElementById("replay-button").addEventListener("click", startGame);
        }

        if (ballLeft < 215 && !isHit) { 
            points++; 
            score.innerHTML = `${points} / 5 points`;
            if (points === 5) {
              clearInterval(collisionCheck);
              document.removeEventListener("keydown", jump);
              game.innerHTML = `       
                <div id=won  >
                    <img width="30" height="38" src="assets/win.png" />
                    <p> Ire played well! He's heading back home now to take a shower.</p>
                    <button id="done-button">Head Home</button>
                </div>
                `
              ;
              document.getElementById("done-button").addEventListener("click", () => {
                window.location.href = "../../afterActivity.html"; // or previous page
              });
            } else {
              // Reset ball for next jump
              ballLeft = 600;
            }
          }

    }, 20);
  }
  
  document.addEventListener("DOMContentLoaded", startGame);
  