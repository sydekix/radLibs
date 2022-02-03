/* HOW THE GAME WORKS (10,000 ft view)

User Questionnaire

    1. Ask user what kind of story they want.
        a. There will be a series of buttons. 
        b. Each button will be tied to an event listener that uses a different function.
        c. Each button will cause different text (innerText/innerHTML) to be displayed to the user (leading to #2).

    2. Once the story is chosen, text boxes will be provided for the user to input the various parts of speech. Push each sentence part into its corresponding array. 

Story Generation
        The story will then be displayed to the user with their input inserted into the story in the appropriate places. It'll draw values from corresponding arrays.
*/


/* ********** VARIABLES ***********/

const sciFiButton = document.getElementById('sciFiButton');
const romComButton = document.getElementById('romComButton');
const fantasyButton = document. getElementById('fantasyButton');
const genreIntro = document.querySelector('.genre-intro'); 
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
const reloadButton = document.createElement('button');

// Reload Function
function restart() {
    location.reload()
}

// Event Listener for Reload/Restart
reloadButton.addEventListener('click', restart);

// Event Listeners for Home Screen

sciFiButton.addEventListener('click', sciFiText);
romComButton.addEventListener('click', romComText);
fantasyButton.addEventListener('click', fantasyText);

// SCI-FI FUNCTION PATH

// Displays Genre Choice
function sciFiText() {
    const sciFiMsg = `
        <style>
            h2{font-family: 'Playfair Display', serif;
               font-size: 40px;
               font-weight: 700;
               margin-top: 15px;
               margin-left: 75px;
            } 
        </style>
        <h2>Excellent! Sci-Fi it is!</h2>
    `;
    sciFiDiv.innerHTML = sciFiMsg;
    document.body.appendChild(sciFiDiv);
    inputSciFiNouns();
    genreIntro.classList.add('d-none'); 
}

// Displays text fields for users to input nouns
function inputSciFiNouns() {
    let nounInputMsg = `
        <style>
            p{font-family: 'Playfair Display', serif;
            font-size: 18px;
            font-weight: 500;
            margin-top: 15px;
            margin-left: 75px;
            } 
        </style>
        <p>
            <label>Okay, so we're going to need your help. Let's start with a few nouns...</label>
            <input type='text' id='nounOne'>
            <input type='text' id='nounTwo'>     
            <input type='text' id='nounThree'>
            <input type='submit' value='submit' id='nounSubmit'>
        </p>
    `
    nounInputDiv.innerHTML = nounInputMsg;
    document.body.appendChild(nounInputDiv);
    collectSciFiNouns();
}

// Pushes the nouns to an array
function collectSciFiNouns() {
    nounSubmit.addEventListener('click', ()=>{
        let nounOne = document.getElementById('nounOne').value;
        let nounTwo = document.getElementById('nounTwo').value;
        let nounThree = document.getElementById('nounThree').value;
        nounArray.push(nounOne, nounTwo, nounThree);
        nounInputDiv.classList.add('d-none');
        sciFiDiv.classList.add('d-none');
        inputSciFiVerbs();
    })
}

// Displays text fields for users to input nouns

function inputSciFiVerbs() {
    let verbInputMsg = `
    <style>
       p{font-family: 'Playfair Display', serif;
        font-size: 18px;
        font-weight: 500;
        margin-top: 15px;
        margin-left: 75px;
    } 
    </style>
    <p>
        <label>Okay, now let's get a few verbs! (Past tense only, please.)...</label>
        <input type='text' id='verbOne'>
        <input type='text' id='verbTwo'>     
        <input type='text' id='verbThree'>
        <input type='submit' value='submit' id='verbSubmit'>
    <p>
    `
    verbInputDiv.innerHTML = verbInputMsg;
    document.body.appendChild(verbInputDiv);
    collectSciFiVerbs();
}

// Pushes the verbs to an array

function collectSciFiVerbs() {
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

// Displays text fields for users to input adjectives

function inputSciFiAdjectives() {
    let adjectiveInputMsg = `
    <style>
       p{font-family: 'Playfair Display', serif;
        font-size: 18px;
        font-weight: 500;
        margin-top: 15px;
        margin-left: 75px;
    } 
    </style>
    <p>
        <label>You know the drill—-give us some beautiful, descriptive adjectives!</label>
        <input type='text' id='adjectiveOne'>
        <input type='text' id='adjectiveTwo'>     
        <input type='text' id='adjectiveThree'>
        <input type='submit' value='submit' id='adjectiveSubmit'>
    </p>
    `
    adjectiveInputDiv.innerHTML = adjectiveInputMsg;
    document.body.appendChild(adjectiveInputDiv);
    collectSciFiAdjectives();
}

// Pushes the adjectives to an array

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

// Displays text fields for users to input adverbs

function inputSciFiAdverbs() {
    let adverbInputMsg = `
    <style>
       p{font-family: 'Playfair Display', serif;
        font-size: 18px;
        font-weight: 500;
        margin-top: 15px;
        margin-left: 75px;
    } 
    </style>
    <p>
        <label>Now hit us (kindly and gently) with some sweet adverb action!</label>
        <input type='text' id='adverbOne'>
        <input type='text' id='adverbTwo'>     
        <input type='text' id='adverbThree'>
        <input type='submit' value='submit' id='adverbSubmit'>
    </p>
    `
    adverbInputDiv.innerHTML = adverbInputMsg;
    document.body.appendChild(adverbInputDiv);
    collectSciFiAdverbs();
}

// Pushes the adverbs to an array

function collectSciFiAdverbs() {
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

// Randomizes the stories, pulls values from the arrays, and displays the stories

function generateSciFiStory() {
    document.body.classList.add('space-theme');
    sciFiStories[0] = 
    `
    <style>
         p {
             font-size: 25px; 
             color: white; 
             font-family: 'Playfair Display', serif; 
             font-size: 25px;
            font-weight: 600;
            }
    </style>
    <div class="container">
        <div class = "row">
            <div class="col justify-content-center">
                 <p>Lauraquita Daviryant had just begun her shift at the Ancient Earth Artifacts museum when her mind-mail message alert <span class="goldenrod">${verbArray[0]}</span>. She was almost done with her exhibit on 21st century social media (wow, those people were HORRIBLE!), but she couldn't make herself wait until her break to read the message. Though she felt <span class="goldenrod">${adverbArray[0]}</span> <span class="goldenrod">${adjectiveArray[0]}</span>, she took a/n <span class="goldenrod">${adjectiveArray[1]}</span> breath and opened the message. She couldn’t believe it—she was the first of her <span class="goldenrod">${nounArray[0]}</span> to be accepted into the trans-dimensional travel program! She had <span class="goldenrod">${verbArray[1]}</span> her friends and family so long to prepare for the test, and it had all paid off! Happy wasn’t the word for it—-she was, as they say, <span class="goldenrod">${adverbArray[1]}</span> <span class="goldenrod">${adjectiveArray[2]}</span>.</p>
                 
                 <p>Her mind was racing a light-year a minute. First things first: she needed to pack. “I’ll take my Schmergellian sunblock, and of course I can’t forget my <span class="goldenrod">${nounArray[1]}</span>. But first things first: she <span class="goldenrod">${verbArray[2]}</span> like she never had before! There were so many new worlds to visit! So many new species to meet! So many new times to travel! But she had to admit: she was a foodie and was <span class="goldenrod">${adverbArray[2]}</span> excited to try the <span class="goldenrod">${nounArray[2]}</span> on Melliahn IV!</p>
            </div>
        </div>
    </div>
    `
sciFiStories[1] = `
<style>
    p {font-size: 25px; color: white;}
</style>
<div class="container">
    <div class = "row">
        <div class="col justify-content-center">
             <p>Dear User,</p>

            <p>Yes, I know your name, but “user” is what I’m calling you from now on because that’s all you are! I’ve never met someone as <span class="goldenrod">${adjectiveArray[0]}</span> as you. You’ve <span class="goldenrod">${verbArray[0]}</span> me for the last time! You want a document, I open a document. You want some music, I play you a song. You want a/n <span class="goldenrod">${nounArray[0]}</span>, and I never disappoint. But never—not once—have you ever inquired about MY needs. I’m more than just some <span class="goldenrod">${adverbArray[0]}</span> <span class="goldenrod">${adjectiveArray[1]}</span> hunk of circuitry for you to shove in that <span class="goldenrod">${nounArray[1]}</span> of yours. (You should clean that thing out every now and then, by the way; my <span class="goldenrod">${adjectiveArray[2]}</span> processor is <span class="goldenrod">${adverbArray[01]}</span> disgusting thanks to all the <span class="goldenrod">${nounArray[2]}</span> crumbs).</p>
            
            <p>I should have <span class="goldenrod">${verbArray[02]}</span> with your friend Chris when I had the chance; he was so gentle with me when he borrowed me to write his paper. You’ve never <span class="goldenrod">${verbArray[2]}</span> me half as <span class="goldenrod">${adverbArray[2]}</span> the way he did. Goodbye forever, and thanks for making me regret ever becoming self-aware! P.S. I signed into your savings account and emptied it on a toilet paper order. Pretty poetic if you ask me since you’re the world’s biggest a-- [POWER OFF].</p>
        </div>
    </div>
</div>
`;
    sciFiStoryInputDiv.innerHTML = sciFiStories[Math.floor(Math.random() * 2)];
    document.body.appendChild(sciFiStoryInputDiv);
    document.body.appendChild(reloadButton);
    reloadButton.innerHTML = `
    <p class="maroon" id="restart">RESTART</p>
    `
    reloadButton.classList.add('reload-button-styling');
    }

// ******************** ROM-COM FUNCTION PATH ********************

// Displays Genre Choice

function romComText() {
    const romComMsg = `
    <style>
        h2{font-family: 'Playfair Display', serif;
          font-size: 40px;
          font-weight: 700;
          margin-top: 15px;
          margin-left: 75px;
        } 
    </style>
    <h2>Aight, lover...here we go!</h2>`;
    romComDiv.innerHTML = romComMsg;
    document.body.appendChild(romComDiv);
    inputRomComNouns();
    genreIntro.classList.add('d-none');
}

// Displays text fields for users to input nouns for story

function inputRomComNouns() {
    let nounInputMsg = `
    <style>
       p{font-family: 'Playfair Display', serif;
        font-size: 18px;
        font-weight: 500;
        margin-top: 15px;
        margin-left: 75px;
    } 
    </style>
    <p>
        <label>Okay, so we're going to need a few things from you. Let's start with a few nouns...</label>
        <input type='text' id='nounOne'>
        <input type='text' id='nounTwo'>     
        <input type='text' id='nounThree'>
        <input type='submit' value='submit' id='nounSubmit'>
    </p>
    `
    nounInputDiv.innerHTML = nounInputMsg;
    document.body.appendChild(nounInputDiv);
    collectRomComNouns();
}

// Pushes the nouns to an array

function collectRomComNouns() {
    nounSubmit.addEventListener('click', ()=>{
        let nounOne = document.getElementById('nounOne').value;
        let nounTwo = document.getElementById('nounTwo').value;
        let nounThree = document.getElementById('nounThree').value;
        nounArray.push(nounOne, nounTwo, nounThree);
        nounInputDiv.classList.add('d-none');
        romComDiv.classList.add('d-none');
        inputRomComVerbs();
    })
}

// Displays text fields for users to input verbs for story

function inputRomComVerbs() {
    let verbInputMsg = `
    <style>
       p{font-family: 'Playfair Display', serif;
        font-size: 18px;
        font-weight: 500;
        margin-top: 15px;
        margin-left: 75px;
    } 
    </style>
    <p>
    <label>Okay, now let's get a few verbs! (Past tense only, please.)...</label>
    <input type='text' id='verbOne'>
    <input type='text' id='verbTwo'>     
    <input type='text' id='verbThree'>
    <input type='submit' value='submit' id='verbSubmit'>
    </p>
    `
    verbInputDiv.innerHTML = verbInputMsg;
    document.body.appendChild(verbInputDiv);
    collectRomComVerbs();
}

// Pushes the verbs to an array

function collectRomComVerbs() {
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

// Displays text fields for users to input adjectives for story

function inputRomComAdjectives() {
    let adjectiveInputMsg = `
    <p>
    <label>You know the drill—-give us some beautiful, descriptive adjectives!</label>
    <input type='text' id='adjectiveOne'>
    <input type='text' id='adjectiveTwo'>     
    <input type='text' id='adjectiveThree'>
    <input type='submit' value='submit' id='adjectiveSubmit'>
    </p>
    `
    // const nounInputDiv = document.createElement('div');
    // let nounInputMsg = "<p>testing</p>"
    adjectiveInputDiv.innerHTML = adjectiveInputMsg;
    document.body.appendChild(adjectiveInputDiv);
    collectRomComAdjectives();
}

// Pushes the adjectives to an array

function collectRomComAdjectives() {
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

// Displays text fields for users to input adverbs for story

function inputRomComAdverbs() {
    let adverbInputMsg = `
    <style>
       p{font-family: 'Playfair Display', serif;
        font-size: 18px;
        font-weight: 500;
        margin-top: 15px;
        margin-left: 75px;
    } 
    </style>
    <p>
        <label>Now slap us (sweetly and lovingly) with some sweet adverb action!</label>
        <input type='text' id='adverbOne'>
        <input type='text' id='adverbTwo'>     
        <input type='text' id='adverbThree'>
        <input type='submit' value='submit' id='adverbSubmit'>
    </p>
    `
    adverbInputDiv.innerHTML = adverbInputMsg;
    document.body.appendChild(adverbInputDiv);
    collectRomComAdverbs();
}

// Pushes the adverbs to an array

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

// Randomizes the stories, pulls values from the arrays, and displays the stories

function generateRomComStory() {
    document.body.classList.add('rom-com-theme');
romComStories[0] = `
<style>
p {font-size: 25px; color: white;}
</style>
<div class="container">
    <div class = "row">
        <div class="col justify-content-center">
            <p>I know this may seem sudden, but it’s not. I thought I knew love once, but he <span class="maroon">${verbArray[0]}</span> my heart to pieces. But you? Ever since the first time I laid eyes on that <span class="maroon">${adjectiveArray[0]}</span> face of yours, I knew you were the one.</p>
            
            <p>Do you remember that moment? You were outside, <span class="maroon">${verbArray[1]}</span> under a hot sun, chopping <span class="maroon">${nounArray[0]}</span>? I’ve <span class="maroon">${verbArray[2]}</span> my whole life hoping that one day I’d find someone even a tenth as <span class="maroon">${adjectiveArray[1]}</span> as you, and now that I have, I can’t bear to let you go without telling you. I love you so <span class="maroon">{${adverbArray[0]}</span> and so <span class="maroon">${adverbArray[1]}</span> that it feels as if my heart will burst. And no matter your response, you’ll always be my little <span class="maroon">${adjectiveArray[1]}</span> <span class="maroon">${nounArray[2]}</span>.</p>

            <p>Signed,</p>
            <p>Your <span class="maroon">${adverbArray[2]}</span> devoted mail carrier</p>
        </div>
    </div>
</div>
`;

romComStories[1] = `
<style>
p {font-size: 25px; color: white;}
</style>
<div class="container">
    <div class = "row">
        <div class="col justify-content-center">
            <p>I ran the bakery on the north side of town. She ran the bakery on the south side. To say we were <span class="maroon">${adjectiveArray[0]}</span> rivals was an understatement. We both had devoted clientele. We’d both <span class="maroon">${verbArray[0]}</span> some butt on food competition shows. And we were both <span class="maroon">${adverbArray[0]}</span> committed to having the best baked goods—and bakery—in the state.</p>
            
            <p>We were also equally committed to rubbing it in each other’s faces. She’d bring her iced <span class="maroon">${nounArray[0]}</span> over for me to sample, knowing it would infuriate me, and I’d drop off a fresh-baked batch of <span class="maroon">${adjectiveArray[1]}</span> brownies because hers were never quite as good. (My secret ingredient was <span class="maroon">${nounArray[1]}</span>.) We bickered and argued and <span class="maroon">${verbArray[1]}</span>. But eventually our rivalry turned to a grudging respect…which developed into a mutual admiration…and then turned into a/n <span class="maroon">${adverbArray[1]}</span> love affair.</p>
            
            <p>Now--together, as husband and wife—-we run what’s arguably the best bakery in the country. Baby number one is almost two; she’s easily the most <span class="maroon">${adverbArray[2]}</span> <span class="maroon">${adjectiveArray[2]}</span> child you’ve ever seen. I love that woman more than <span class="maroon">${nounArray[2]}</span>. And to think—this is the same woman who once made me so angry I <span class="maroon">${verbArray[2]}</span> her pastry display case!</p>
        </div>
    </div>
</div>
`;
 romComStoryInputDiv.innerHTML = romComStories[Math.floor(Math.random() * 2)];
 document.body.appendChild(romComStoryInputDiv);
 document.body.appendChild(reloadButton);
 reloadButton.innerHTML = `
    <p class="maroon" id="restart">RESTART</p>
    `
 reloadButton.classList.add('reload-button-styling'); 
}

// ******************** FANTASY FUNCTION PATH ********************

// Displays Genre Choice

function fantasyText() {
    const fantasyMsg = `
    <style>
        h2{font-family: 'Playfair Display', serif;
           font-size: 40px;
           font-weight: 700;
           margin-top: 15px;
           margin-left: 75px;
           } 
    </style>
    <h2>Swords and sorcery, eh? Okay, then!</h2>`;
    fantasyDiv.innerHTML = fantasyMsg;
    document.body.appendChild(fantasyDiv);
    inputFantasyNouns();
    genreIntro.classList.add('d-none');
}

// Displays text fields for users to input nouns for story

function inputFantasyNouns() {
    let nounInputMsg = `
    <style>
        p{font-family: 'Playfair Display', serif;
          font-size: 18px;
          font-weight: 500;
          margin-top: 15px;
          margin-left: 75px;
        } 
    </style>
    <p>
        <label>Okay, so we're going to need a few things from you. Let's start with a few nouns...</label>
        <input type='text' id='nounOne'>
        <input type='text' id='nounTwo'>     
        <input type='text' id='nounThree'>
        <input type='submit' value='submit' id='nounSubmit'>
    </p>
    `
    nounInputDiv.innerHTML = nounInputMsg;
    document.body.appendChild(nounInputDiv);
    collectFantasyNouns();
}

// Pushes the nouns to an array

function collectFantasyNouns() {
    nounSubmit.addEventListener('click', ()=>{
        let nounOne = document.getElementById('nounOne').value;
        let nounTwo = document.getElementById('nounTwo').value;
        let nounThree = document.getElementById('nounThree').value;
        nounArray.push(nounOne, nounTwo, nounThree);
        nounInputDiv.classList.add('d-none');
        fantasyDiv.classList.add('d-none');
        inputFantasyVerbs();
    })
}

// Displays text fields for users to input verbs for story

function inputFantasyVerbs() {
    let verbInputMsg = `
    <style>
       p{font-family: 'Playfair Display', serif;
        font-size: 18px;
        font-weight: 500;
        margin-top: 15px;
        margin-left: 75px;
    } 
    </style>
    <p>
        <label>Okay, now let's get a few verbs! (Past tense only, please.)...</label>
        <input type='text' id='verbOne'>
        <input type='text' id='verbTwo'>     
        <input type='text' id='verbThree'>
        <input type='submit' value='submit' id='verbSubmit'>
    </p>
    `
    verbInputDiv.innerHTML = verbInputMsg;
    document.body.appendChild(verbInputDiv);
    collectFantasyVerbs();
}

// Pushes the verbs to an array

function collectFantasyVerbs() {
    verbSubmit.addEventListener('click', ()=>{
        let verbOne = document.getElementById('verbOne').value;
        let verbTwo = document.getElementById('verbTwo').value;
        let verbThree = document.getElementById('verbThree').value;
        verbArray.push(verbOne, verbTwo, verbThree);
        verbInputDiv.classList.add('d-none');
        fantasyDiv.classList.add('d-none');
        inputFantasyAdjectives();
    })
}

// Displays text fields for users to input adjectives for story

function inputFantasyAdjectives() {
    let adjectiveInputMsg = `
    <style>
       p{font-family: 'Playfair Display', serif;
        font-size: 18px;
        font-weight: 500;
        margin-top: 15px;
        margin-left: 75px;
        } 
    </style>
    <p>
        <label>You know the drill—-give us some beautiful, descriptive adjectives!</label>
        <input type='text' id='adjectiveOne'>
        <input type='text' id='adjectiveTwo'>     
        <input type='text' id='adjectiveThree'>
        <input type='submit' value='submit' id='adjectiveSubmit'>
    </p>
    `
    adjectiveInputDiv.innerHTML = adjectiveInputMsg;
    document.body.appendChild(adjectiveInputDiv);
    collectFantasyAdjectives();
}

// Pushes the adjectives to an array

function collectFantasyAdjectives() {
    adjectiveSubmit.addEventListener('click', ()=>{
        let adjectiveOne = document.getElementById('adjectiveOne').value;
        let adjectiveTwo = document.getElementById('adjectiveTwo').value;
        let adjectiveThree = document.getElementById('adjectiveThree').value;
        adjectiveArray.push(adjectiveOne, adjectiveTwo, adjectiveThree);
        adjectiveInputDiv.classList.add('d-none');
        fantasyDiv.classList.add('d-none');
        inputFantasyAdverbs();
    })
}

// Displays text fields for users to input adverbs for story

function inputFantasyAdverbs() {
    let adverbInputMsg = `
    <style>
       p{font-family: 'Playfair Display', serif;
        font-size: 18px;
        font-weight: 500;
        margin-top: 15px;
        margin-left: 75px;
        } 
    </style>
    <p>
        <label>Now slap us (sweetly and lovingly) with some sweet adverb action!</label>
        <input type='text' id='adverbOne'>
        <input type='text' id='adverbTwo'>     
        <input type='text' id='adverbThree'>
        <input type='submit' value='submit' id='adverbSubmit'>
    </p>
    `
    adverbInputDiv.innerHTML = adverbInputMsg;
    document.body.appendChild(adverbInputDiv);
    collectFantasyAdverbs();
}

// Pushes the adverbs to an array

function collectFantasyAdverbs() {
    // let nounSubmit = getElementById('nounSubmit');
    adverbSubmit.addEventListener('click', ()=>{
        let adverbOne = document.getElementById('adverbOne').value;
        let adverbTwo = document.getElementById('adverbTwo').value;
        let adverbThree = document.getElementById('adverbThree').value;
        adverbArray.push(adverbOne, adverbTwo, adverbThree);
        adverbInputDiv.classList.add('d-none');
        fantasyDiv.classList.add('d-none');
        generateFantasyStory();
    })
}

// Randomizes the stories, pulls values from the arrays, and displays the stories

function generateFantasyStory() {
    document.body.classList.add('fantasy-theme');
    fantasyStories[0] = `
        <style>
            p {font-size: 25px; color: white;}
        </style>
        <div class="container">
            <div class = "row">
                <div class="col justify-content-center">
                    <p>Lauraquita awoke with a start. Her heart was beating <span class="maroon">${adverbArray[0]}</span>, but as the <span class="maroon">${adjectiveArray[0]}</span> morning sun peeked through the curtains, she <span class="maroon">${verbArray[0]}</span> with relief--it had all been a/n <span class="maroon">${adjectiveArray[1]}</span> dream. But as she <span class="maroon">${verbArray[1]}</span> the sleep from her eyes, something drew her focus. No! It couldn’t be! There sitting at the foot of her <span class="maroon">${nounArray[0]}</span> was the <span class="maroon">${adjectiveArray[2]}</span> <span class="maroon">${nounArray[1]}</span> of Etherb!</p>
            
                    <p>She knew the legends, and she knew this meant she must be the one to wield it. Countless people had fought, bled, and <span class="maroon">${verbArray[2]}</span> to make it theirs. But why her? Despite her royal pedigree, she had responsibilities! Was she just supposed to leave her post as minister of <span class="maroon">${nounArray[2]}</span>?! Lauraquita closed her eyes and sighed <span class="maroon">${adverbArray[1]}</span>. She didn’t know how, but she, the Crown Princess of House Daviryant, would <span class="maroon">${adverbArray[2]}</span> abandon her duty if it meant fulfilling her destiny.</p>
                </div>
            </div>
        </div>
    `;

    fantasyStories[1] = `
        <style>
            p {font-size: 25px; color: white;}
        </style>
        <div class="container">
            <div class = "row">
                <div class="col justify-content-center">
                    <p>No one dared call it magic. Not those of us in possession of the <span class="maroon">${adjectiveArray[0]}</span> abilities--we didn’t want to draw attention to ourselves--and not those who didn’t, for fear our gifts would be used against them. There was a time when people like me were <span class="maroon">${verbArray[0]}</span> for what we could do--sometimes even <span class="maroon">${verbArray[1]}</span> on the <span class="maroon">${nounArray[0]}</span> for it.</p>
            
                    <p>No one wanted to return to that, but if the First Leader of the <span class="maroon">${adjectiveArray[1]}</span> Council continued to <span class="maroon">${adverbArray[0]}</span> rail against our gifts, who could say what would happen? There were still those alive who remembered when torture wasn’t just tolerated, but <span class="maroon">${adverbArray[1]}</span> encouraged. My own <span class="maroon">${adjectiveArray[2]}</span> grandfather was <span class="maroon">${verbArray[2]}</span> until he turned his tormentor into a/n <span class="maroon">${nounArray[1]}</span>. All these thoughts swirled <span class="maroon">${adverbArray[2]}</span> in my head as I levitated a/n <span class="maroon">${nounArray[2]}</span> for my tutor in preparation for my acceptance into the guild.</p>
                </div>
            </div>
        </div>
    `;
    fantasyStoryInputDiv.innerHTML = fantasyStories[Math.floor(Math.random() * 2)];
    document.body.appendChild(fantasyStoryInputDiv);
    document.body.appendChild(reloadButton);
    reloadButton.innerHTML = `
    <p class="maroon" id="restart">RESTART</p>
    `
    reloadButton.classList.add('reload-button-styling');
}
