// const sciFiButton = document.getElementById('sciFiButton');
// const romComButton = document.getElementById('romComButton');
// const fantasyButton = document. getElementById('fantasyButton');
// // const altHistoryButton = document.getElementById('altHistoryButton');
// const genreIntro = document.querySelector('.genre-intro'); // setting this variable outside the functions so I only have to declare it once
// const nounArray = [];
// const nounInputDiv = document.createElement('div');
// const verbArray = [];
// const verbInputDiv = document.createElement('div');
// const adjectiveArray = [];
// const adjectiveInputDiv = document.createElement('div');
// const adverbArray = [];
// const adverbInputDiv = document.createElement('div');
// const sciFiStoryInputDiv = document.createElement('div');
// const romComStoryInputDiv = document.createElement('div');
// const fantasyStoryInputDiv = document.createElement('div');
// const sciFiDiv = document.createElement('div');
// const romComDiv = document.createElement('div');
// const fantasyDiv = document.createElement('div');
// const sciFiStories = [];
// const romComStories = [];
// const fantasyStories = [];


// sciFiStory = `
//              <p>Dear User,</p>

//             <p>Yes, I know your name, but “user” is what I’m calling you from now on because that’s all you are! I’ve never met someone as ${adjectiveArray[0]} as you. You’ve ${verbArray[0]} me for the last time! You want a document, I open a document. You want some music, I play you a song. You want a/n ${nounArray[0]}, and I never disappoint. But never—not once—have you ever inquired about MY needs. I’m more than just some ${adverbArray[0]} ${adjectiveArray[1]} hunk of circuitry for you to shove in that ${nounArray[1]} of yours. (You should clean that thing out every now and then, by the way; my ${adjectiveArray[2]} processor is ${adverbArray[01]} disgusting thanks to all the ${nounArray[2]} crumbs). I should have ${verbArray[02]} with your friend Chris when I had the chance; he was so gentle with me when he borrowed me to write his paper. You’ve never ${verbArray[2]} me half as ${adverbArray[2]} the way he did. Goodbye forever, and thanks for making me regret ever becoming self-aware! P.S. I signed into your savings account and emptied it on a toilet paper order. Pretty poetic if you ask me since you’re the world’s biggest a [POWER OFF].</p>
// `;

// // const sciFiStoryInputDiv = document.createElement('div');





// function sciFiText() {
//     const sciFiMsg = '<h2>Excellent! Sci-Fi it is!</h2>';
//     // const sciFiDiv = document.createElement('div');
//     sciFiDiv.innerHTML = sciFiMsg;
//     document.body.appendChild(sciFiDiv);
//     //  let nounInputMsg = `
//     //             <label>Okay, so we're going to need a few things from you. Let's start with a few nouns...</label>
//     //             <input type='text' id='nounOne'>
//     //             <input type='text' id='nounTwo'>     
//     //             <input type='text' id='nounThree'>
//     //             <input type='submit' value='submit' class='nounSubmit'>
//     //             `
//     // let nounInputDiv = document.createElement('div');
//     // nounInputDiv.innerHTML = nounInputMsg;
//     // document.body.appendChild(nounInputMsg);
//     // inputNouns();
//     inputSciFiNouns();

//     genreIntro.classList.add('d-none'); 

// }


// // Displays text fields for users to input nouns for story
// function inputSciFiNouns() {
//     let nounInputMsg = `
//     <label>Okay, so we're going to need a few things from you. Let's start with a few nouns...</label>
//     <input type='text' id='nounOne'>
//     <input type='text' id='nounTwo'>     
//     <input type='text' id='nounThree'>
//     <input type='submit' value='submit' id='nounSubmit'>
//     `
//     // const nounInputDiv = document.createElement('div');
//     // let nounInputMsg = "<p>testing</p>"
//     nounInputDiv.innerHTML = nounInputMsg;
//     document.body.appendChild(nounInputDiv);
//     collectSciFiNouns();
// }


// function collectSciFiNouns() {
//     // let nounSubmit = getElementById('nounSubmit');
//     nounSubmit.addEventListener('click', ()=>{
//         let nounOne = document.getElementById('nounOne').value;
//         let nounTwo = document.getElementById('nounTwo').value;
//         let nounThree = document.getElementById('nounThree').value;
//         nounArray.push(nounOne, nounTwo, nounThree);
//         nounInputDiv.classList.add('d-none');
//         sciFiDiv.classList.add('d-none');
//         // nounArray.forEach(noun=>{noun.style.color="blue"});
//         inputSciFiVerbs();
//     })
// }

// function inputSciFiVerbs() {
//     let verbInputMsg = `
//     <label>Okay, now let's get a few verbs! (Past tense only, please.)...</label>
//     <input type='text' id='verbOne'>
//     <input type='text' id='verbTwo'>     
//     <input type='text' id='verbThree'>
//     <input type='submit' value='submit' id='verbSubmit'>
//     `
//     // const nounInputDiv = document.createElement('div');
//     // let nounInputMsg = "<p>testing</p>"
//     verbInputDiv.innerHTML = verbInputMsg;
//     document.body.appendChild(verbInputDiv);
//     collectSciFiVerbs();
// }


// function collectSciFiVerbs() {
//     // let nounSubmit = getElementById('nounSubmit');
//     verbSubmit.addEventListener('click', ()=>{
//         let verbOne = document.getElementById('verbOne').value;
//         let verbTwo = document.getElementById('verbTwo').value;
//         let verbThree = document.getElementById('verbThree').value;
//         verbArray.push(verbOne, verbTwo, verbThree);
//         verbInputDiv.classList.add('d-none');
//         sciFiDiv.classList.add('d-none');
//         inputSciFiAdjectives();
//     })
// }

// function inputSciFiAdjectives() {
//     let adjectiveInputMsg = `
//     <label>You know the drill—-give us some beautiful, descriptive adjectives!</label>
//     <input type='text' id='adjectiveOne'>
//     <input type='text' id='adjectiveTwo'>     
//     <input type='text' id='adjectiveThree'>
//     <input type='submit' value='submit' id='adjectiveSubmit'>
//     `
//     // const nounInputDiv = document.createElement('div');
//     // let nounInputMsg = "<p>testing</p>"
//     adjectiveInputDiv.innerHTML = adjectiveInputMsg;
//     document.body.appendChild(adjectiveInputDiv);
//     collectSciFiAdjectives();
// }


// function collectSciFiAdjectives() {
//     // let nounSubmit = getElementById('nounSubmit');
//     adjectiveSubmit.addEventListener('click', ()=>{
//         let adjectiveOne = document.getElementById('adjectiveOne').value;
//         let adjectiveTwo = document.getElementById('adjectiveTwo').value;
//         let adjectiveThree = document.getElementById('adjectiveThree').value;
//         adjectiveArray.push(adjectiveOne, adjectiveTwo, adjectiveThree);
//         adjectiveInputDiv.classList.add('d-none');
//         sciFiDiv.classList.add('d-none');
//         inputSciFiAdverbs();
//     })
// }

// function inputSciFiAdverbs() {
//     let adverbInputMsg = `
//     <label>Now slap us (sweetly and lovingly) with some sweet adverb action!</label>
//     <input type='text' id='adverbOne'>
//     <input type='text' id='adverbTwo'>     
//     <input type='text' id='adverbThree'>
//     <input type='submit' value='submit' id='adverbSubmit'>
//     `
//     // const nounInputDiv = document.createElement('div');
//     // let nounInputMsg = "<p>testing</p>"
//     adverbInputDiv.innerHTML = adverbInputMsg;
//     document.body.appendChild(adverbInputDiv);
//     collectSciFiAdverbs();
// }


// function collectSciFiAdverbs() {
//     // let nounSubmit = getElementById('nounSubmit');
//     adverbSubmit.addEventListener('click', ()=>{
//         let adverbOne = document.getElementById('adverbOne').value;
//         let adverbTwo = document.getElementById('adverbTwo').value;
//         let adverbThree = document.getElementById('adverbThree').value;
//         adverbArray.push(adverbOne, adverbTwo, adverbThree);
//         adverbInputDiv.classList.add('d-none');
//         sciFiDiv.classList.add('d-none');
//         generateSciFiStory();
//     })
// }

// function generateSciFiStory() {
//     sciFiStoryInputDiv.innerHTML = sciFiStory;
//     document.body.appendChild(sciFiStoryInputDiv);
// }


// sciFiText();
// myArray = ['large', 'smelly', 'pretty'];
// console.log(`I would like a woman who is ${myArray[0]}. Also one who is ${myArray[1]}. Oh, yeah, and also ${myArray[2]}.`)



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
const genreDiv = document.createElement('div');
const romComDiv = document.createElement('div');
const fantasyDiv = document.createElement('div');
const sciFiStories = [];
const romComStories = [];
const fantasyStories = [];

// EVENT LISTENERS FOR HOME SCREEN

sciFiButton.addEventListener('click', sciFiText);
romComButton.addEventListener('click', romComText);
fantasyButton.addEventListener('click', fantasyText);

// SCI-FI RAD LIBS

sciFiStories[0] = `
    <div class="container">
        <div class = "row">
            <div class="col justify-content-center">
                 <p>Lauraquita Daviryant had just begun her shift at the Ancient Earth Artifacts museum when her mind-mail message alert <span class="blue">${verbArray[0]}</span>. She was almost done with her exhibit on 21st century social media (wow, those people were HORRIBLE!), but she couldn't make herself wait until her break to read the message. Though she felt ${adverbArray[0]} ${adjectiveArray[0]}, she took a/n ${adjectiveArray[1]} breath and opened the message. She couldn’t believe it—she was the first of her ${nounArray[0]} to be accepted into the trans-dimensional travel program! There was so much to do! She had ${verbArray[1]} her friends and family so long to prepare for the test, and it had all paid off! Happy wasn’t the word for it—-she was, as they say, ${adverbArray[1]} ${adjectiveArray[2]}. She needed to pack. “I’ll take my Schmergellian sunblock, and of course I can’t forget my ${nounArray[1]}. But first things first: she ${verbArray[2]} like she never had before! There were so many new worlds to visit! So many new species to meet! So many new times to travel! But she had to admit: she was a foodie and was ${adverbArray[2]} excited to try the ${nounArray[2]} on Melliahn IV!</p>
            </div>
        </div>
    </div>
    `

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

// ROM-COM RAD LIBS

romComStories[0] = `
<div class="container">
    <div class = "row">
        <div class="col justify-content-center">
            <p>I know this may seem sudden, but it’s not. I thought I knew love once, but he ${verbArray[0]} my heart to pieces. But you? Ever since the first time I laid eyes on that ${adjectiveArray[0]} face of yours, I knew you were the one.</p>
            
            <p>Do you remember that moment? You were outside, ${verbArray[1]} under a hot sun, chopping ${nounArray[0]}? I’ve ${verbArray[2]} my whole life hoping that one day I’d find someone even a tenth as ${adjectiveArray[1]} as you, and now that I have, I can’t bear to let you go without telling you. I love you so {${adverbArray[0]} and so ${adverbArray[1]} that it feels as if my heart will burst. And no matter your response, you’ll always be my little ${adjectiveArray[1]} ${nounArray[2]}.</p>

            <p>Signed,</p>
            <p>Your ${adverbArray[2]} devoted mail carrier</p>
        </div>
    </div>
</div>
`;

romComStories[1] = `
<div class="container">
    <div class = "row">
        <div class="col justify-content-center">
            <p>I ran the bakery on the north side of town. She ran the bakery on the south side. To say we were ${adjectiveArray[0]} rivals was an understatement. We both had devoted clientele. We’d both ${verbArray[0]} some butt on food competition shows. And we were both ${adverbArray[0]} committed to having the best baked goods—and bakery—in the state.</p>
            
            <p>We were also equally committed to rubbing it in each other’s faces. She’d bring her iced ${nounArray[1]} over for me to sample, knowing it would infuriate me, and I’d drop off a fresh-baked batch of ${adjectiveArray[1]} brownies because hers were never quite as good. (My secret ingredient was ${nounArray[1]}.) We bickered and argued and ${verbArray[1]}. But eventually our rivalry turned to a grudging respect…which developed into a mutual admiration…and then turned into a/n ${adverbArray[1]} love affair.</p>
            
            <p>Now--together, as husband and wife—-we run what’s arguably the best bakery in the country. Baby number one is almost two; she’s easily the most ${adverbArray[2]} ${adjectiveArray[2]} child you’ve ever seen. I love that woman more than ${nounArray[2]}. And to think—this is the same woman who once made me so angry I ${verbArray[2]} her pastry display case!</p>
        </div>
    </div>
</div>
`;

// FANTASY RAD-LIBS

fantasyStories[0] = `
<div class="container">
    <div class = "row">
        <div class="col justify-content-center">
            <p>Lauraquita awoke with a start. Her heart was beating ${adverbArray[0]}, but as the ${adjectiveArray[0]} morning sun peeked through the curtains, she ${verbArray[0]} with relief—it had all been a/n ${adjectiveArray[1]} dream. But as she ${verbArray[1]} the sleep from her eyes, something drew her focus. No! It couldn’t be! There sitting at the foot of her ${nounArray[0]} was the ${adjectiveArray[2]} ${nounArray[1]} of Etherb!</p>
            
            <p>She knew the legends, and she knew this meant she must be the one to wield it. Countless people had fought, bled, and ${verbArray[2]} to make it theirs. But why her? Despite her royal pedigree, she had responsibilities! Was she just supposed to leave her post as minister of ${nounArray[2]}?! Lauraquita closed her eyes and sighed ${adverbArray[1]}. She didn’t know how, but she, the Crown Princess of House Daviryant, would ${adverbArray[2]} abandon her duty if it meant fulfilling her destiny.</p>
        </div>
    </div>
</div>
`;

fantasyStories[1] = `
<div class="container">
    <div class = "row">
        <div class="col justify-content-center">
            <p>No one dared call it magic. Not those of us in possession of the ${adjectiveArray[0]} abilities—we didn’t want to draw attention to themselves—and not those who didn’t, for fear our gifts would be used against them. There was a time when people like me were ${verbArray[0]} for what we could do—sometimes even ${verbArray[1]} on the ${nounArray[0]}for it.</p>
            
            <p>No one wanted to return to that, but if the First Leader of the ${adjectiveArray[1]} Council continued to ${adverbArray[0]} rail against our gifts, who could say what would happen? There were still those alive who remembered when torture wasn’t just tolerated, but ${adverbArray[1]} encouraged. My own ${adjectiveArray[2]} grandfather was ${verbArray[2]} until he turned his tormentor into a/n ${nounArray[1]}. All these thoughts swirled ${adverbArray[2]} in my head as I levitated a/n ${nounArray[2]} for my tutor in preparation for my acceptance into the guild.</p>
            </div>
        </div>
    </div>
    `;



// color text

// nounArray.forEach(noun=>{noun.style.color="blue"});

// const sciFiMsg = '<h2>Excellent! Sci-Fi it is!</h2>';



// function collectNouns() {
//     let nounSubmit = getElementById('nounSubmit');
//     nounSubmit.addEventListener('click', ()=>{
//         let nounOne = document.getElementById('nounOne').nodeValue;
//         let nounTwo = document.getElementById('nounTwo').nodeValue;
//         let nounThree = document.getElementById('nounThree').nodeValue;
//         nounArray.push(nounOne, nounTwo, nounThree);
//     })
// }

// function inputNouns() {
//     let nounInputMsg = `
//     <label>Okay, so we're going to need a few things from you. Let's start with a few nouns...</label>
//     <input type='text' id='nounOne'>
//     <input type='text' id='nounTwo'>     
//     <input type='text' id='nounThree'>
//     <input type='submit' value='submit' id='nounSubmit'>
//     `
//     let nounInputDiv = document.createElement('div');
//     // let nounInputMsg = "<p>testing</p>"
//     nounInputDiv.innerHTML = nounInputMsg;
//     document.body.appendChild(nounInputDiv);
//     collectNouns();
// }

// SCI-FI FUNCTION PATH

function sciFiText() {
    const sciFiMsg = '<h2>Excellent! Sci-Fi it is!</h2>';
    // const sciFiDiv = document.createElement('div');
    genreDiv.innerHTML = sciFiMsg;
    document.body.appendChild(genreDiv);
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
    inputNouns();

    genreIntro.classList.add('d-none'); 

}

// Displays text fields for users to input nouns for story
function inputNouns() {
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
    collectNouns();
}


function collectNouns() {
    // let nounSubmit = getElementById('nounSubmit');
    nounSubmit.addEventListener('click', ()=>{
        let nounOne = document.getElementById('nounOne').value;
        let nounTwo = document.getElementById('nounTwo').value;
        let nounThree = document.getElementById('nounThree').value;
        nounArray.push(nounOne, nounTwo, nounThree);
        nounInputDiv.classList.add('d-none');
        genreDiv.classList.add('d-none');
        // nounArray.forEach(noun=>{noun.style.color="blue"});
        inputVerbs();
    })
}

function inputVerbs() {
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
    collectVerbs();
}


function collectVerbs() {
    // let nounSubmit = getElementById('nounSubmit');
    verbSubmit.addEventListener('click', ()=>{
        let verbOne = document.getElementById('verbOne').value;
        let verbTwo = document.getElementById('verbTwo').value;
        let verbThree = document.getElementById('verbThree').value;
        verbArray.push(verbOne, verbTwo, verbThree);
        verbInputDiv.classList.add('d-none');
        genreDiv.classList.add('d-none');
        inputAdjectives();
    })
}

function inputAdjectives() {
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
    collectAdjectives();
}


function collectAdjectives() {
    // let nounSubmit = getElementById('nounSubmit');
    adjectiveSubmit.addEventListener('click', ()=>{
        let adjectiveOne = document.getElementById('adjectiveOne').value;
        let adjectiveTwo = document.getElementById('adjectiveTwo').value;
        let adjectiveThree = document.getElementById('adjectiveThree').value;
        adjectiveArray.push(adjectiveOne, adjectiveTwo, adjectiveThree);
        adjectiveInputDiv.classList.add('d-none');
        genreDiv.classList.add('d-none');
        inputAdverbs();
    })
}

function inputAdverbs() {
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
    collectAdverbs();
}


function collectAdverbs() {
    // let nounSubmit = getElementById('nounSubmit');
    adverbSubmit.addEventListener('click', ()=>{
        let adverbOne = document.getElementById('adverbOne').value;
        let adverbTwo = document.getElementById('adverbTwo').value;
        let adverbThree = document.getElementById('adverbThree').value;
        adverbArray.push(adverbOne, adverbTwo, adverbThree);
        adverbInputDiv.classList.add('d-none');
        genreDiv.classList.add('d-none');
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




// ROM-COM FUNCTION PATH

// function sciFiText() {
//     const sciFiMsg = '<h2>Excellent! Sci-Fi it is!</h2>';
//     // const sciFiDiv = document.createElement('div');
//     sciFiDiv.innerHTML = sciFiMsg;
//     document.body.appendChild(sciFiDiv);
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
//     inputSciFiNouns();

//     genreIntro.classList.add('d-none'); 

// }

// function sciFiText() {
//     const sciFiMsg = '<h2>Excellent! Sci-Fi it is!</h2>';
//     // const sciFiDiv = document.createElement('div');
//     sciFiDiv.innerHTML = sciFiMsg;
//     document.body.appendChild(sciFiDiv);
//     //  let nounInputMsg = `
//     //             <label>Okay, so we're going to need a few things from you. Let's start with a few nouns...</label>
//     //             <input type='text' id='nounOne'>
//     //             <input type='text' id='nounTwo'>     
//     //             <input type='text' id='nounThree'>
//     //             <input type='submit' value='submit' class='nounSubmit'>
//     //             `
//     // let nounInputDiv = document.createElement('div');
//     // nounInputDiv.innerHTML = nounInputMsg;
//     // document.body.appendChild(nounInputMsg);
//     // inputNouns();
//     inputSciFiNouns();

//     genreIntro.classList.add('d-none'); 

// }

function romComText() {
    const romComMsg = '<h2>Aight, lover...here we go!</h2>';
    // let romComDiv = document.createElement('div');
    // let genreIntro = document.querySelector('.genre-intro');
    romComDiv.innerHTML = romComMsg;
    document.body.appendChild(romComDiv);
    inputRomComNouns();
    genreIntro.classList.add('d-none');
    // let inputNounsDiv = document.querySelector('.input-nouns');
    // inputNounsDiv.classList.add('d-none');
    // genreIntro.classList.add('d-none');
    // genreIntro.classList.add('d-none'); 


}

// Displays text fields for users to input nouns for story
function inputRomComNouns() {
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
    collectRomComNouns();
}


function collectRomComNouns() {
    // let nounSubmit = getElementById('nounSubmit');
    nounSubmit.addEventListener('click', ()=>{
        let nounOne = document.getElementById('nounOne').value;
        let nounTwo = document.getElementById('nounTwo').value;
        let nounThree = document.getElementById('nounThree').value;
        nounArray.push(nounOne, nounTwo, nounThree);
        nounInputDiv.classList.add('d-none');
        romComDiv.classList.add('d-none');
        // nounArray.forEach(noun=>{noun.style.color="blue"});
        inputRomComVerbs();
    })
}

function inputRomComVerbs() {
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
    collectRomComVerbs();
}


function collectRomComVerbs() {
    // let nounSubmit = getElementById('nounSubmit');
    verbSubmit.addEventListener('click', ()=>{
        let verbOne = document.getElementById('verbOne').value;
        let verbTwo = document.getElementById('verbTwo').value;
        let verbThree = document.getElementById('verbThree').value;
        verbArray.push(verbOne, verbTwo, verbThree);
        verbInputDiv.classList.add('d-none');
        romComDiv.classList.add('d-none');
        inputRomComAdjectives();
    })
}

function inputRomComAdjectives() {
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
    collectRomComAdjectives();
}


function collectRomComAdjectives() {
    // let nounSubmit = getElementById('nounSubmit');
    adjectiveSubmit.addEventListener('click', ()=>{
        let adjectiveOne = document.getElementById('adjectiveOne').value;
        let adjectiveTwo = document.getElementById('adjectiveTwo').value;
        let adjectiveThree = document.getElementById('adjectiveThree').value;
        adjectiveArray.push(adjectiveOne, adjectiveTwo, adjectiveThree);
        adjectiveInputDiv.classList.add('d-none');
        romComDiv.classList.add('d-none');
        inputRomComAdverbs();
    })
}

function inputRomComAdverbs() {
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
    collectRomComAdverbs();
}


function collectRomComAdverbs() {
    // let nounSubmit = getElementById('nounSubmit');
    adverbSubmit.addEventListener('click', ()=>{
        let adverbOne = document.getElementById('adverbOne').value;
        let adverbTwo = document.getElementById('adverbTwo').value;
        let adverbThree = document.getElementById('adverbThree').value;
        adverbArray.push(adverbOne, adverbTwo, adverbThree);
        adverbInputDiv.classList.add('d-none');
        romComDiv.classList.add('d-none');
        generateRomComStory();
    })
}

function generateRomComStory() {
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
    romComStoryInputDiv.innerHTML = romComStories[Math.floor(Math.random() * 2)];
    document.body.appendChild(romComStoryInputDiv);
}

function fantasyText() {
    let fantasyMsg = "<h2>Let's get it, nerd!</h2>";
    let fantasyDiv = document.createElement('div');
    fantasyDiv.innerHTML = fantasyMsg;
    document.body.appendChild(fantasyDiv);
    inputNouns();
    genreIntro.classList.add('d-none');
}