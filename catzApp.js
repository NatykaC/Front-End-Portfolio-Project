//   catzApp.js file //

//Collection of 5 random cat facts - Was able to get the data
fetch("https://cat-fact.herokuapp.com/facts")
    .then((response) => response.json())
    .then((JSONresponse) => console.log(JSONresponse))


//Collection of 90 random cat facts - Was able to get data
//Can access each fact by using catFacts[index 0-89]
fetch("https://meowfacts.herokuapp.com/?count=90")
    .then((response) => response.json())
    .then((JSONresponse) => {
        const catFacts = JSONresponse.data
        console.log(catFacts)
        const wholeDocument = document.querySelector("body")
        const newHTwo = document.createElement("h2")
        newHTwo.innerText = catFacts[5]
        wholeDocument.append(newHTwo)
    });