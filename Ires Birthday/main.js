document.addEventListener('DOMContentLoaded', function(){
    let skill = 80;
    let relationship = 80;
    let weight = 165;
    let content = document.querySelector("#content");

    var button = document.querySelector("#start-button");
    button.addEventListener("click", function(){
        content.innerHTML = `
        <p class="description"> Ire wakes up to sunlight creeping through the blinds. Today is the day before his birthday! He doesn't think too much about it because he's hungry after dieting for a few days. What should he eat for breakfast? </p>
        <div class = "choice">
            <input id = "1choice1" type = "radio"/ name = "choices" value = "yogurt">
            <label for "1choice1"> Eat yogurt and grapes </label>
        </div>

        <div class = "choice">
            <input id = "1choice2" type = "radio"/ name = "choices" value = "pancakes">
            <label for "1choice2"> Eat pancakes and scrambled eggs </label>
        </div>

        <div class = "choice">
            <input id = "1choice3" type = "radio"/ name = "choices" value = "burger">
            <label for "1choice3"> Eat chicken burger and fries </label>
        </div>

        <button id="next-button">Eat</button>
        `;

        document.querySelector("#next-button").addEventListener("click", function () {
            let breakfastSelected = document.querySelector('input[name="choices"]:checked');
            if (!breakfastSelected) {
              alert("Ire cannot starve!");
              return;
            }
            
            if (breakfastSelected.value === "burger") {
                weight += 10;
            }

            console.log("skill = " + skill);
            console.log("weight = " + weight);
            console.log("relationship = " + relationship);

            content.innerHTML = `
            <p class="description"> Breakfast was a success. Now, he's thinking about what to do.  </p>
            <div class = "choice">
                <input id = "2choice1" type = "radio"/ name = "2choices" value = "basketball">
                <label for "2choice1"> Play basketball </label>
            </div>

            <div class = "choice">
                <input id = "2choice2" type = "radio"/ name = "2choices" value = "facetime">
                <label for "2choice2"> Facetime Liz </label>
            </div>

            <div class = "choice">
                <input id = "2choice3" type = "radio"/ name = "2choices" value = "brawlhalla">
                <label for "2choice3"> Play brawhalla </label>
            </div>

            <button id="play-button">Do</button>
            `
            
            document.querySelector("#play-button").addEventListener("click", function () {
                let selected = document.querySelector('input[name="2choices"]:checked');
                if (!selected) {
                  alert("Ire is too bored! He must do something!");
                  return;
                }

                if (selected.value === "basketball") {
                    weight -= 5;
                    skill += 10;
                    
                    localStorage.setItem("skill", skill);
                    localStorage.setItem("relationship", relationship);
                    localStorage.setItem("weight", weight);
    
                    window.location.href = "Activity/basketball/basketball.html"; 
                }
                
                console.log("skill = " + skill);
                console.log("weight = " + weight);
                console.log("relationship = " + relationship);


                if (selected.value === "facetime") {
                    relationship += 10;

                    localStorage.setItem("skill", skill);
                    localStorage.setItem("relationship", relationship);
                    localStorage.setItem("weight", weight);

                    window.location.href = "Activity/facetime/facetime.html";
                }

                if (selected.value === "brawlhalla") {
                    skill += 5;

                    localStorage.setItem("skill", skill);
                    localStorage.setItem("relationship", relationship);
                    localStorage.setItem("weight", weight);

                    window.location.href = "Activity/brawlhalla/brawlhalla.html";
                }

            });
        });
    });
});


