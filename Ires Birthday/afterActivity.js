document.addEventListener('DOMContentLoaded', function () {
    let skill = parseInt(localStorage.getItem('skill'), 10);
    let relationship = parseInt(localStorage.getItem('relationship'), 10);
    let weight = parseInt(localStorage.getItem('weight'), 10);
    let content = document.querySelector("#content");
  
    console.log(skill, relationship, weight);
  
    document.querySelector("#next-button").addEventListener("click", function () {
        let dinnerSelected = document.querySelector('input[name="choices"]:checked');
        
        if (!dinnerSelected) {
            alert("Ire cannot starve!");
            return;
        }

        if (dinnerSelected.value === "sam's") {
            weight += 5;
        }

        console.log("skill = " + skill);
        console.log("weight = " + weight);
        console.log("relationship = " + relationship);

        content.innerHTML = `
            <p class="description"> Ire is starting to get sleepy after eating his dinner. What should he do to wind down the day? </p>
            <div class="choice">
                <input id="2choice1" type="radio" name="2choices" value="webtoon">
                <label for="2choice1"> Read Webtoons </label>
            </div>
            <div class="choice">
                <input id="2choice2" type="radio" name="2choices" value="history">
                <label for="2choice2"> Listen to history videos </label>
            </div>
            <div class="choice">
                <input id="2choice3" type="radio" name="2choices" value="Liz">
                <label for="2choice3"> Talk to Liz </label>
            </div>
            <button id="play-button">Wind Down</button>
        `;

        document.querySelector("#play-button").addEventListener("click", function () {
            let sleepSelected = document.querySelector('input[name="2choices"]:checked');
            if (!sleepSelected) {
                alert("Ire wants to fall asleep with something to do!");
                return;
            }

            if (sleepSelected.value === "history") {
                skill += 5;
            }

            if (sleepSelected.value === "Liz") {
                relationship += 10;
            }

            console.log("skill = " + skill);
            console.log("weight = " + weight);
            console.log("relationship = " + relationship);

            content.innerHTML = `
                <p class="description"> Right about when his eyes are closing, he hears the noises of footsteps. He turns to look at the door as it opens suddenly with a bang and he hears… </p>
            `;

            setTimeout(() => {
                const birthday = document.createElement("p");
                birthday.className = "description birthday";
                birthday.textContent = "🎉 Happy Birthday! 🎉";
                content.appendChild(birthday);

                const almostButton = document.createElement("button");
                almostButton.id = "almost-button";
                almostButton.textContent = "Next";
                content.appendChild(almostButton);

                almostButton.addEventListener("click", function () {
                content.innerHTML = `
                    <div id="fun">
                    <p class="description">His closest family and friends are there, all rushing through the door as they surround him. Ire's whisked away downstairs to a party set up with balloons and cake, and he spends the rest of the night partying it up until he finally falls asleep on the couch...</p>
                    </div>
                `;

                    setTimeout(() => {
                        const endMessage = document.createElement("p");
                        endMessage.className = "end";
                        endMessage.textContent = "The End. Happy Birthday Ire ❤️";
                        content.appendChild(endMessage);

                        const finalButton = document.createElement("button");
                        finalButton.id = "final-button";
                        finalButton.textContent = "See Stats";
                        content.appendChild(finalButton);

                        finalButton.addEventListener("click", function () {
                            content.innerHTML = `
                                <div class="finalStats">
                                    <p><strong>Final Stats</strong></p>
                                    <p>Skill: ${skill}/100</p>
                                    <p>Relationship: ${relationship}/100</p>
                                    <p>Weight: ${weight}/165 lb</p>
                                    <p id="note">Replay to see how your stats change & play all three mid-day activities!</p>
                                    <button id="replay-button">Replay Game</button>
                                </div>
                            `;

                            document.querySelector("#replay-button").addEventListener("click", () => {
                                window.location.href = "index.html";
                            });
                        });
                    }, 9000);
                });
            }, 4500);
        });
    });
});
  