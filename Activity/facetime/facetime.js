document.addEventListener('DOMContentLoaded', function () {
  const game = document.getElementById("game");
  const scoreDisplay = document.getElementById("score");
  let score = 0;

  function createHeart() {
    const heart = document.createElement("img");
    heart.src = "assets/heart.png";
    heart.classList.add("heart");

    // Add to DOM before positioning
    game.appendChild(heart);

    const heartWidth = 40;
    const heartHeight = 40;

    const maxX = game.clientWidth - heartWidth;
    const maxY = game.clientHeight - heartHeight;

    const randomLeft = Math.floor(Math.random() * maxX);
    const randomTop = Math.floor(Math.random() * maxY);

    heart.style.left = `${randomLeft}px`;
    heart.style.top = `${randomTop}px`;

    const timeout = setTimeout(() => {
      heart.remove();
    }, 800);

    heart.addEventListener("click", () => {
      clearTimeout(timeout);
      heart.remove();
      score++;

      // Update score text
      scoreDisplay.textContent = `${score} / 10 hearts`;

      if (score === 10) {
        clearInterval(heartInterval); // Stop new hearts
        game.innerHTML = `
          <div id="won">
            <img width="30" height="38" src="assets/win.png" />
            <p>Ire had a great FaceTime call! Liz left to eat.</p>
            <button id="done-button">End Call</button>
          </div>
        `;
        
        document.getElementById("done-button").addEventListener("click", () => {
          window.location.href = "../../afterActivity.html"; // or previous page
        });
      }
    });
  }

  const heartInterval = setInterval(createHeart, 1000);
});
