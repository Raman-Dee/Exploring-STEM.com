//Get button

const up = document.getElementById("up");

//when scrolled 100px, butoon appears

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        up.style.display = "block";

    }

    else {
        up.style.display = "none";
    }

}


//click to scroll

up.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})




//defination button
const define = document.getElementById('define');

define.addEventListener('click', () => {
    document.body.scrollTop = 150;
    document.documentElement.scrollTop = 150;
})

//careerbutton

const career = document.getElementById('career');
career.addEventListener('click', () => {
    document.body.scrollTop = 700;
    document.documentElement.scrollTop = 700;
})

//benfiitsbutton

const ben = document.getElementById('benifits');
ben.addEventListener('click', () => {
    document.body.scrollTop = 1465;
    document.documentElement.scrollTop = 1465;
})

const female = document.getElementById('females');
female.addEventListener('click', ()=> {
    document.body.scrollTop = 3250;
    document.documentElement.scrollTop = 3250;
})

const college = document.getElementById('colleges');
college.addEventListener('click', () => {
    document.body.scrollTop = 5630;
    document.documentElement.scrollTop = 5630;
})

const contact = document.getElementById('contact');
contact.addEventListener('click',()=>{
    document.body.scrollTop = 6300;
    document.documentElement.scrollTop = 6300;
})