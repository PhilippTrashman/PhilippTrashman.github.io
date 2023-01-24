// function change_pic(cat_num)
const bone = new Audio("audio/bad-to-the-bone.mp3")
const chad = new Audio("audio/Chad.mp3")
const sweater = new Audio("audio/Sweaterlove.mp3")
const funky = new Audio("audio/funky.mp3")
const sussy = new Audio("audio/among_us.mp3")

bone.volume = 0.5
chad.volume = 0.5
funky.volume = 0.25
sussy.volume = 0.75

const dict = {
    1 : ['Why do you have a cone on your hat >->', `img/1.jpg`, bone],
    2 : ['Silly with the Big Nose O.O', `img/2.jpg`, bone],
    3 : ['Bit to much of the ZAZA i guess >_<', `img/3.jpg`, bone],
    4 : ['He looks so betrayed :(', `img/4.jpg`, bone],
    5 : ['Oh he looks so relaxed :)', `img/5.jpg`, bone],
    6 : ['Looking quite Handsome', `img/6.jpg`, chad], 
    7 : ['FLOPPA', `img/7.jpg`, bone],
    8 : ['Thats not a CAT', `img/8.jpg`, bone],
    9 : ['Oh, is... is that the Spongebob', `img/9.gif`, funky],
    10 : ['Very Angy >:(', `img/10.jpeg`, bone],
    11 : ['Going hyperspeed', `img/11.jpeg`, bone],
    12 : ['Very Wise indeed', `img/12.jpeg`, bone],
    13 : ['Cute Tongue ;P', `img/13.jpeg`, bone],
    14 : ['Society', `img/14.jpeg`, bone],
    15 : ['Some days are harder than others', `img/15.jpeg`, bone],
    16 : ['Very spooky', `img/16.jpeg`, bone],
    17 : ["I Dont think that's a cat, cute Tuxedo", `img/17.jpeg`, bone],
    18 : [':(', `img/18.jpeg`, bone],
    19 : ['2 Cool 4 School', `img/19.jpeg`, sweater],
    20 : ['Who put the Cheese on da Cat', `img/20.jpeg`, bone],
    21 : ['Dont get too close', `img/21.jpeg`, bone],
    22 : ['He smelling the Zaza', `img/22.jpeg`, bone],
    23 : ['Drank too much', `img/23.jpeg`, bone],
    24 : ['Waking up is hard at times', `img/24.jpeg`, bone],
    25 : ['Very Cute :)', `img/25.jpeg`, bone],
    26 : ['Me when no zaza', 'img/26.gif', bone],
    27 : ['Looking very Sussy ඞ', 'img/27.gif', sussy],
    28 : ['Smile so bright like the sun', `img/28.jpeg`, bone],
    29 : ['Coding is hard :(', `img/29.jpeg`, bone],
    30 : ['He knows', `img/30.jpeg`, bone],
    31 : ['Oh silly, ate too much', `img/31.jpeg`, bone],
    32 : ['Very comfortable :)', `img/32.jpeg`, bone],
    33 : ['goober', `img/33.jpeg`, bone],
    34 : ['Who took his boots >:(', `img/34.jpeg`, bone],
    35 : ["OMG SNUGGLES", `img/35.jpeg`, bone],
    36 : ["Can't get out of this one", `img/36.jpeg`, bone],
    37 : ['Why are they holding him like that :O', `img/37.jpeg`, bone],
    38 : ['It was probably very tasty', `img/38.jpeg`, bone],
    39 : ['The Observer', `img/39.jpeg`, bone],
    40 : ['I will join him to the end of the world', `img/40.jpeg`, bone],
    41 : ['You tellin me, a shrimp fried that rice', `img/41.jpeg`, bone],
    42 : ['looking very adorable', `img/42.jpeg`, bone],
    43 : ['he be zoomin', `img/43.jpeg`, bone],
    44 : ['Very Judgemental of the Salad', `img/44.jpeg`, bone],
    45 : ['What knowledge does he have', `img/45.jpeg`, bone],


}

function music_handler(){
    // used to controll the different songs
    bone.currentTime=0;
    chad.currentTime=0;
    sweater.currentTime=0;
    funky.currentTime = 0;
    sussy.currentTime = 0;

    bone.pause()
    chad.pause()
    sweater.pause()
    funky.pause()
    sussy.pause()
}

function cat_text(number){
    // changes the cat picture and music
    const myHeading = document.querySelector("h3");
    const mySrc = myImage.getAttribute("src");

    myHeading.textContent = dict[number][0];
    myImage.setAttribute("src", dict[number][1]);
    dict[number][2].play()
}

let cat_num = Math.floor(Math.random() * 45) + 1;
const myImage = document.querySelector("#cat");
myImage.setAttribute("src", `img/${cat_num}.jpg`);
cat_text(cat_num)
let cat_num_comp = 6;

const paybutton = document.querySelector("#paybutton")

myImage.onclick = () => {
    music_handler()
    
    cat_num = Math.floor(Math.random() * 45) + 1;
    if (cat_num === cat_num_comp){
        cat_num = Math.floor(Math.random() * 45) + 1;
    }
    
    cat_text(cat_num)
    
    cat_num_comp = cat_num;
    
};

paybutton.onclick = () =>{
    
}