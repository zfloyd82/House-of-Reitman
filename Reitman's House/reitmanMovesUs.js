function reitmanEngage() {
    reitmanFace = document.getElementById("reitman");
    spaceWidth = screen.height - reitmanFace.height;
    spaceHeight = screen.width - reitmanFace.width;

    reitmanEngaged = setInterval(reitmanMove, 2000);
}

function reitmanMove() {
    reitmanFace.style.top = Math.round(Math.random() * spaceWidth) + "px";
    reitmanFace.style.left = Math.round(Math.random() * spaceHeight) + "px";
}

function reitmanMessage() {
    var messages = ['Hey Butterpals!!!', 'My dad says I need to come of age...', 
                    'You know, money isn\'t everything. Did you know that I have $3500 in my drawer?',
                    'I can\'t stop thinking of her... My dream woman... Michelle...',
                    'It isn\'t easy being blacked, but I try to make the best of it.',
                    'There is more to life than just money. For example, my music. SHUT UP DAD, IT\'S IMPORTANT TO ME!',
                    'I\'ve been so lonely lately, I just want somebody to love me for who I am...',
                    'Working at Guitar Center isn\'t so bad once you get used to the shame from your father.',
                    'I only eat fresh TACO from BELL.', 'WAAAH WAAAAAAHH WWAAAHHH *continues to cry*',
                    'Hey Alan, let\'s go to Applebees tonight!!!', 'suhhhh dude',
                    'Dude, I\'m gonna write a program for Salesforce that controls Cubase.',
                    'How does it make you feel that I\'m dating Jordan now?', 'Time to slam a Monst.',
                    'Yeah, dude. I\'m buying it today.', 'Little Ally, little job, $65k.', 'Dude, I hate Guitar Center.',
                    'Dude, I love Guitar Center.', 'Dude, Sarah Addy has huge tits!', 'panera bread'];

    return alert(messages[Math.floor(Math.random()*messages.length)]);
}

function easyMode() {
    clearInterval(reitmanEngaged);
    reitmanEngaged = setInterval(reitmanMove, 1000);
}
function medMode() {
    clearInterval(reitmanEngaged);
    reitmanEngaged = setInterval(reitmanMove, 600);
}
function hardMode() {
    clearInterval(reitmanEngaged);
    reitmanEngaged = setInterval(reitmanMove, 500);
}
function extremeMode() {
    clearInterval(reitmanEngaged);
    reitmanEngaged = setInterval(reitmanMove, 250);
}
function glickMode() {
    clearInterval(reitmanEngaged);
    reitmanEngaged = setInterval(reitmanMove, 50);
}
