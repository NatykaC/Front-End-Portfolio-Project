//   catzApp.js file //

//Collection of 5 random cat facts - Was able to get the data
// fetch("https://cat-fact.herokuapp.com/facts")
//     .then((response) => response.json())
//     .then((JSONresponse) => console.log(JSONresponse))


//Collection of 90 random cat facts - Was able to get data
//Can access each fact by using catFacts[index 0-89]
fetch("https://meowfacts.herokuapp.com/?count=90")
    .then((response) => response.json())
    .then((JSONresponse) => {
        const catFacts = JSONresponse.data
        // console.log(catFacts)
        const catFactOne = document.querySelector("#cat-fact-one");
        const firstFetchedFact = document.querySelector("#fetch-one");
            firstFetchedFact.innerText = catFacts[5];
            catFactOne.append(firstFetchedFact);
        const catFactTwo = document.querySelector("#cat-fact-two");
        const secondFetchedFact = document.querySelector("#fetch-two");
            secondFetchedFact.innerText = catFacts[2];
            catFactTwo.append(secondFetchedFact);
        const catFactThree = document.querySelector("#cat-fact-three");
        const thirdFetchedFact = document.querySelector("#fetch-three");
            thirdFetchedFact.innerText = catFacts[6];
            catFactThree.append(thirdFetchedFact);
        const catFactFour = document.querySelector("#cat-fact-four");
        const fourthFetchedFact = document.querySelector("#fetch-four");
            fourthFetchedFact.innerText = catFacts[27];
            catFactFour.append(fourthFetchedFact);

        const addFact = document.querySelector("#add-fact");
            addFact.addEventListener("submit", (event)=>{
                event.preventDefault();
                const randomFactSubmit = document.querySelector("#random-fact-submit");
                const thankYouMessage = document.querySelector("#thank-you");
                randomFactSubmit.innerText = `❤️ Here's your random cat fact: ❤️\n  ${catFacts[4]}`;
                thankYouMessage.innerText = "Thanks for signing up!!";
                addFact.append(thankYouMessage,randomFactSubmit)
                
            });
        
    });