/*
HOW THE GAME WORKS (10,000 ft view)

User Questionnaire

   1.  Ask user what kind of story they want:
        - sci-fi
        - rom-com
        - action
        - alternate history
        - etc.

    2. The story chosen will determine how many of each sentence part you'll need to get from the user.
        - List # (part of speech)
        - List # (part of speech)
        - List # (part of speech)
        - etc.

Story Generation

    The story will then be displayed to the user with their input inserted into the story in the appropriate places.

Optional Functionality:

    Give user the option of having assistance in word generation. Maybe if they choose this option, can randomly choose "x" different words, depending on how many they provided. (Could use Math.random() and/or loop(s) for this.)


********** PSEUDOCODE **********

User Questionnaire

    1. Ask user what kind of story they want.
        a. There will be a series of buttons. 
        b. Each button will be tied to an event listener that uses a different function.
        c. Each button will cause different text (innerText/innerHTML) to be displayed to the user (leading to #2).

    2. The story chosen will determine how many of each sentence part you'll need to get from the user.
        a. Put each sentence part into its corresponding array within an object for that story. (First attempt--we'll see if that seems to be working.)

Story Generation
        The story will then be displayed to the user with their input inserted into the story in the appropriate places. I think it'll draw values from corresponding arrays.
*/

// ********** GENERAL NOTES ********** // 



// ********** ACTUAL GAME CODE BELOW HERE ********** // 


/* ********** GENRE BUTTON VARIABLES AND FUNCTIONS**********
These create event listeners and hide the instructions/buttons when one button is clicked */

const sciFiButton = document.getElementById('sciFiButton');
const romComButton = document.getElementById('romComButton');
const fantasyButton = document. getElementById('fantasyButton');
// const altHistoryButton = document.getElementById('altHistoryButton');
const genreIntro = document.querySelector('.genre-intro'); // setting this variable outside the functions so I only have to declare it once
const nounArray = [];
const nounInputDiv = document.createElement('div');
const verbArray = [];
const verbInputDiv = document.createElement('div');
const adjectiveArray = [];
const adjectiveInputDiv = document.createElement('div');
const adverbArray = [];
const adverbInputDiv = document.createElement('div');
const sciFiStoryInputDiv = document.createElement('div');
const romComStoryInputDiv = document.createElement('div');
const fantasyStoryInputDiv = document.createElement('div');
const sciFiDiv = document.createElement('div');
const romComDiv = document.createElement('div');
const fantasyDiv = document.createElement('div');
const sciFiStories = [];
const romComStories = [];
const fantasyStories = [];

// EVENT LISTENERS FOR HOME SCREEN

sciFiButton.addEventListener('click', sciFiText);
// romComButton.addEventListener('click', romComText);
// fantasyButton.addEventListener('click', fantasyText);

// SCI-FI RAD LIBS

sciFiStories[0] = `
    <div class="container">
        <div class = "row">
            <div class="col justify-content-center">
                 <p>Lauraquita Daviryant had just begun her shift at the Ancient Earth Artifacts museum when her mind-mail message alert <span class="blue">${verbArray[0]}</span>. She was almost done with her exhibit on 21st century social media (wow, those people were HORRIBLE!), but she couldn't make herself wait until her break to read the message. Though she felt ${adverbArray[0]} ${adjectiveArray[0]}, she took a/n ${adjectiveArray[1]} breath and opened the message. She couldn’t believe it—she was the first of her ${nounArray[0]} to be accepted into the trans-dimensional travel program! There was so much to do! She had ${verbArray[1]} her friends and family so long to prepare for the test, and it had all paid off! Happy wasn’t the word for it—-she was, as they say, ${adverbArray[1]} ${adjectiveArray[2]}. She needed to pack. “I’ll take my Schmergellian sunblock, and of course I can’t forget my ${nounArray[1]}. But first things first: she ${verbArray[2]} like she never had before! There were so many new worlds to visit! So many new species to meet! So many new times to travel! But she had to admit: she was a foodie and was ${adverbArray[2]} excited to try the ${nounArray[2]} on Melliahn IV!</p>
            </div>
        </div>
    </div>
    `;

sciFiStories[1] = `
<div class="container">
    <div class = "row">
        <div class="col justify-content-center">
             <p>Dear User,</p>

            <p>Yes, I know your name, but “user” is what I’m calling you from now on because that’s all you are! I’ve never met someone as ${adjectiveArray[0]} as you. You’ve ${verbArray[0]} me for the last time! You want a document, I open a document. You want some music, I play you a song. You want a/n ${nounArray[0]}, and I never disappoint. But never—not once—have you ever inquired about MY needs. I’m more than just some ${adverbArray[0]} ${adjectiveArray[1]} hunk of circuitry for you to shove in that ${nounArray[1]} of yours. (You should clean that thing out every now and then, by the way; my ${adjectiveArray[2]} processor is ${adverbArray[01]} disgusting thanks to all the ${nounArray[2]} crumbs). I should have ${verbArray[02]} with your friend Chris when I had the chance; he was so gentle with me when he borrowed me to write his paper. You’ve never ${verbArray[2]} me half as ${adverbArray[2]} the way he did. Goodbye forever, and thanks for making me regret ever becoming self-aware! P.S. I signed into your savings account and emptied it on a toilet paper order. Pretty poetic if you ask me since you’re the world’s biggest a [POWER OFF].</p>
        </div>
    </div>
</div>
`;



// SCI-FI FUNCTION PATH

function sciFiText() {
    const sciFiMsg = '<h2>Excellent! Sci-Fi it is!</h2>';
    // const sciFiDiv = document.createElement('div');
    sciFiDiv.innerHTML = sciFiMsg;
    document.body.appendChild(sciFiDiv);
    //  let nounInputMsg = `
    //             <label>Okay, so we're going to need a few things from you. Let's start with a few nouns...</label>
    //             <input type='text' id='nounOne'>
    //             <input type='text' id='nounTwo'>     
    //             <input type='text' id='nounThree'>
    //             <input type='submit' value='submit' class='nounSubmit'>
    //             `
    // let nounInputDiv = document.createElement('div');
    // nounInputDiv.innerHTML = nounInputMsg;
    // document.body.appendChild(nounInputMsg);
    // inputNouns();
    inputSciFiNouns();

    genreIntro.classList.add('d-none'); 

}

// Displays text fields for users to input nouns for story
function inputSciFiNouns() {
    let nounInputMsg = `
    <label>Okay, so we're going to need a few things from you. Let's start with a few nouns...</label>
    <input type='text' id='nounOne'>
    <input type='text' id='nounTwo'>     
    <input type='text' id='nounThree'>
    <input type='submit' value='submit' id='nounSubmit'>
    `
    // const nounInputDiv = document.createElement('div');
    // let nounInputMsg = "<p>testing</p>"
    nounInputDiv.innerHTML = nounInputMsg;
    document.body.appendChild(nounInputDiv);
    collectSciFiNouns();
}


function collectSciFiNouns() {
    // let nounSubmit = getElementById('nounSubmit');
    nounSubmit.addEventListener('click', ()=>{
        let nounOne = document.getElementById('nounOne').value;
        let nounTwo = document.getElementById('nounTwo').value;
        let nounThree = document.getElementById('nounThree').value;
        nounArray.push(nounOne, nounTwo, nounThree);
        nounInputDiv.classList.add('d-none');
        sciFiDiv.classList.add('d-none');
        // nounArray.forEach(noun=>{noun.style.color="blue"});
        inputSciFiVerbs();
    })
}

function inputSciFiVerbs() {
    let verbInputMsg = `
    <label>Okay, now let's get a few verbs! (Past tense only, please.)...</label>
    <input type='text' id='verbOne'>
    <input type='text' id='verbTwo'>     
    <input type='text' id='verbThree'>
    <input type='submit' value='submit' id='verbSubmit'>
    `
    // const nounInputDiv = document.createElement('div');
    // let nounInputMsg = "<p>testing</p>"
    verbInputDiv.innerHTML = verbInputMsg;
    document.body.appendChild(verbInputDiv);
    collectSciFiVerbs();
}


function collectSciFiVerbs() {
    // let nounSubmit = getElementById('nounSubmit');
    verbSubmit.addEventListener('click', ()=>{
        let verbOne = document.getElementById('verbOne').value;
        let verbTwo = document.getElementById('verbTwo').value;
        let verbThree = document.getElementById('verbThree').value;
        verbArray.push(verbOne, verbTwo, verbThree);
        verbInputDiv.classList.add('d-none');
        sciFiDiv.classList.add('d-none');
        inputSciFiAdjectives();
    })
}

function inputSciFiAdjectives() {
    let adjectiveInputMsg = `
    <label>You know the drill—-give us some beautiful, descriptive adjectives!</label>
    <input type='text' id='adjectiveOne'>
    <input type='text' id='adjectiveTwo'>     
    <input type='text' id='adjectiveThree'>
    <input type='submit' value='submit' id='adjectiveSubmit'>
    `
    // const nounInputDiv = document.createElement('div');
    // let nounInputMsg = "<p>testing</p>"
    adjectiveInputDiv.innerHTML = adjectiveInputMsg;
    document.body.appendChild(adjectiveInputDiv);
    collectSciFiAdjectives();
}


function collectSciFiAdjectives() {
    // let nounSubmit = getElementById('nounSubmit');
    adjectiveSubmit.addEventListener('click', ()=>{
        let adjectiveOne = document.getElementById('adjectiveOne').value;
        let adjectiveTwo = document.getElementById('adjectiveTwo').value;
        let adjectiveThree = document.getElementById('adjectiveThree').value;
        adjectiveArray.push(adjectiveOne, adjectiveTwo, adjectiveThree);
        adjectiveInputDiv.classList.add('d-none');
        sciFiDiv.classList.add('d-none');
        inputSciFiAdverbs();
    })
}

function inputSciFiAdverbs() {
    let adverbInputMsg = `
    <label>Now slap us (sweetly and lovingly) with some sweet adverb action!</label>
    <input type='text' id='adverbOne'>
    <input type='text' id='adverbTwo'>     
    <input type='text' id='adverbThree'>
    <input type='submit' value='submit' id='adverbSubmit'>
    `
    // const nounInputDiv = document.createElement('div');
    // let nounInputMsg = "<p>testing</p>"
    adverbInputDiv.innerHTML = adverbInputMsg;
    document.body.appendChild(adverbInputDiv);
    collectSciFiAdverbs();
}


function collectSciFiAdverbs() {
    // let nounSubmit = getElementById('nounSubmit');
    adverbSubmit.addEventListener('click', ()=>{
        let adverbOne = document.getElementById('adverbOne').value;
        let adverbTwo = document.getElementById('adverbTwo').value;
        let adverbThree = document.getElementById('adverbThree').value;
        adverbArray.push(adverbOne, adverbTwo, adverbThree);
        adverbInputDiv.classList.add('d-none');
        sciFiDiv.classList.add('d-none');
        generateSciFiStory();
    })
}

function generateSciFiStory() {
    // const sciFiStory = `
    // <p>Lauraquita Daviryant was getting ready for her first shift at the Ancient Earth Artifacts museum when her mind-mail message alert ${verbArray[0]}. She was almost done with her exhibit on 21st century social media (wow, those people were HORRIBLE!), but she couldn't make herself wait until her break to read it. Though she felt ${adverbArray[0]} ${adjectiveArray[0]}, she took a/n ${adjectiveArray[1]} breath and opened the message. She couldn’t believe it—she was the first of her ${nounArray[0]} to be accepted into the trans-dimensional travel program! There was so much to do! She had ${verbArray[1]} her friends and family so long to prepare for the test, and it had all paid off! Happy wasn’t the word for it—-she was, as they say, ${adverbArray[1]} ${adjectiveArray[2]}. She needed to pack. “I’ll take my Schmergellian sunblock, and of course I can’t forget my ${nounArray[1]}. But first things first: she ${verbArray[2]} like she never had before! There were so many new worlds to visit! So many new species to meet! So many new times to travel! But she had to admit: she was a foodie and was ${adverbArray[2]} excited to try the ${nounArray[2]} on Melliahn IV!</p>
    // `
// const sciFiStories = [];
// sciFiStories[0] = `
//     <div class="container">
//         <div class = "row">
//             <div class="col justify-content-center">
//                  <p>Lauraquita Daviryant had just begun her shift at the Ancient Earth Artifacts museum when her mind-mail message alert <span class="blue">${verbArray[0]}</span>. She was almost done with her exhibit on 21st century social media (wow, those people were HORRIBLE!), but she couldn't make herself wait until her break to read the message. Though she felt ${adverbArray[0]} ${adjectiveArray[0]}, she took a/n ${adjectiveArray[1]} breath and opened the message. She couldn’t believe it—she was the first of her ${nounArray[0]} to be accepted into the trans-dimensional travel program! There was so much to do! She had ${verbArray[1]} her friends and family so long to prepare for the test, and it had all paid off! Happy wasn’t the word for it—-she was, as they say, ${adverbArray[1]} ${adjectiveArray[2]}. She needed to pack. “I’ll take my Schmergellian sunblock, and of course I can’t forget my ${nounArray[1]}. But first things first: she ${verbArray[2]} like she never had before! There were so many new worlds to visit! So many new species to meet! So many new times to travel! But she had to admit: she was a foodie and was ${adverbArray[2]} excited to try the ${nounArray[2]} on Melliahn IV!</p>
//             </div>
//         </div>
//     </div>
//     `;

// sciFiStories[1] = `
// <div class="container">
//     <div class = "row">
//         <div class="col justify-content-center">
//              <p>Dear User,</p>

//             <p>Yes, I know your name, but “user” is what I’m calling you from now on because that’s all you are! I’ve never met someone as ${adjectiveArray[0]} as you. You’ve ${verbArray[0]} me for the last time! You want a document, I open a document. You want some music, I play you a song. You want a/n ${nounArray[0]}, and I never disappoint. But never—not once—have you ever inquired about MY needs. I’m more than just some ${adverbArray[0]} ${adjectiveArray[1]} hunk of circuitry for you to shove in that ${nounArray[1]} of yours. (You should clean that thing out every now and then, by the way; my ${adjectiveArray[2]} processor is ${adverbArray[01]} disgusting thanks to all the ${nounArray[2]} crumbs). I should have ${verbArray[02]} with your friend Chris when I had the chance; he was so gentle with me when he borrowed me to write his paper. You’ve never ${verbArray[2]} me half as ${adverbArray[2]} the way he did. Goodbye forever, and thanks for making me regret ever becoming self-aware! P.S. I signed into your savings account and emptied it on a toilet paper order. Pretty poetic if you ask me since you’re the world’s biggest a [POWER OFF].</p>
//         </div>
//     </div>
// </div>
// `;


        


    // storyInputDiv.innerHTML = sciFiStories[`${Math.floor(Math.random() * 2)}`];
    sciFiStoryInputDiv.innerHTML = sciFiStories[Math.floor(Math.random() * 2)];
    document.body.appendChild(sciFiStoryInputDiv);
}






