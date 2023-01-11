// function change_pic(cat_num)
const dict = {
    1 : ['Why do you have a cone on your hat >->', `img/1.jpg`],
    2 : ['Silly with the Big Nose O.O', `img/2.jpg`],
    3 : ['Bit to much of the ZAZA i guess >_<', `img/3.jpg`],
    4 : ['He looks so betrayed :(', `img/4.jpg`],
    5 : ['Oh he looks so relaxed :)', `img/5.jpg`],
    6 : ['Looking quiet Handsome', `img/6.jpg`], 
    7 : ['FLOPPA', `img/7.jpg`],
    8 : ['Thats not a CAT', `img/8.jpg`],
    9 : ['Oh, is... is that the Spongebob', `img/9.gif`],
    10 : ['Very Angy >:(', `img/10.jpeg`],
    11 : ['Going hyperspeed', `img/11.jpeg`],
    12 : ['Very Wise indeed', `img/12.jpeg`],
    13 : ['Cute Tongue ;P', `img/13.jpeg`],
    14 : ['Society', `img/14.jpeg`],
    15 : ['Some days are harder than others', `img/15.jpeg`],
    16 : ['Very spooky', `img/16.jpeg`],
    17 : ["I Dont think that's a cat, cute Tuxedo", `img/17.jpeg`],
    18 : [':(', `img/18.jpeg`],
    19 : ['2 Cool 4 School', `img/19.jpeg`],
    20 : ['Who put the Cheese on da Cat', `img/20.jpeg`],
    21 : ['Dont get to close', `img/21.jpeg`],
    22 : ['He smelling the Zaza', `img/22.jpeg`],
    23 : ['Drank too much', `img/23.jpeg`],
    24 : ['Waking up is hard at times', `img/24.jpeg`],
    25 : ['Very Cute :)', `img/25.jpeg`],

}
const bone = new Audio("audio/bad-to-the-bone.mp3")

function cat_text(number){
    const myHeading = document.querySelector("h3");
    const mySrc = myImage.getAttribute("src");
    
    myHeading.textContent = dict[number][0];
    myImage.setAttribute("src", dict[number][1]);
}

let cat_num = Math.floor(Math.random() * 25) + 1;
const myImage = document.querySelector("img");
myImage.setAttribute("src", `img/${cat_num}.jpg`);
cat_text(cat_num)
let cat_num_comp = 2;


myImage.onclick = () => {
    // Returns a random integer from 0 to 7:
    bone.currentTime=0;
    cat_num = Math.floor(Math.random() * 25) + 1;
    if (cat_num === cat_num_comp){
        cat_num = Math.floor(Math.random() * 25) + 1;
    }
    
    cat_text(cat_num)
    bone.play();
    
    cat_num_comp = cat_num;

};