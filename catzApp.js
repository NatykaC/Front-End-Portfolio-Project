
fetch("https://meowfacts.herokuapp.com/?count=90")
    .then((response) => response.json())
    .then((JSONresponse) => {
        const catFacts = JSONresponse.data
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
                const errFirstName = document.querySelector("#err-first-name");
                const errLastName = document.querySelector("#err-last-name");
                const errEmail = document.querySelector("#err-email");
                if(event.target["firstName"].value === "" || null){
                    errFirstName.innerText = "Error! First Name Required!"
                        errFirstName.addEventListener("click", (event)=>{
                            errFirstName.remove()
                    });
                }
                else if(event.target["lastName"].value === "" || null){
                    errLastName.innerText = "Error! Last Name Required!"
                        errLastName.addEventListener("click", (event)=>{
                            errLastName.remove()
                    });
                }
                else if(event.target["email"].value === "" || null){
                    errEmail.innerText = "Error! Email Required!"
                        errEmail.addEventListener("click", (event)=>{
                            errEmail.remove()
                    });
                }
                else {
                const randomFactSubmit = document.querySelector("#random-fact-submit");
                const thankYouMessage = document.querySelector("#thank-you");
                randomFactSubmit.innerText = `❤️ Here's your random cat fact: ❤️\n  ${catFacts[38]}`;
                thankYouMessage.innerText = "Thanks for signing up!!";
                addFact.append(thankYouMessage,randomFactSubmit);
                event.target.reset()
                };
            });
        const catFactFive = document.querySelector("#cat-fact-five");
        const fifthFetchedFact = document.querySelector("#fetch-five");
            fifthFetchedFact.innerText = catFacts[4];
            catFactFive.append(fifthFetchedFact);
        const catFactSix = document.querySelector("#cat-fact-six");
        const sixthFetchedFact = document.querySelector("#fetch-six");
            sixthFetchedFact.innerText = catFacts[10];
            catFactSix.append(sixthFetchedFact);
        const catFactSeven = document.querySelector("#cat-fact-seven");
        const seventhFetchedFact = document.querySelector("#fetch-seven");
            seventhFetchedFact.innerText = catFacts[81];
            catFactSeven.append(seventhFetchedFact);
        const catFactEight = document.querySelector("#cat-fact-eight");
        const eighthFetchedFact = document.querySelector("#fetch-eight");
            eighthFetchedFact.innerText = catFacts[85];
            catFactEight.append(eighthFetchedFact);
        const catFactNine = document.querySelector("#cat-fact-nine");
        const ninthFetchedFact = document.querySelector("#fetch-nine");
            ninthFetchedFact.innerText = catFacts[38];
            catFactNine.append(ninthFetchedFact);
        const catFactTen = document.querySelector("#cat-fact-ten");
        const tenthFetchedFact = document.querySelector("#fetch-ten");
            tenthFetchedFact.innerText = catFacts[42];
            catFactTen.append(tenthFetchedFact);
    });