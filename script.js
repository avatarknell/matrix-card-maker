const nameBtn = document.getElementById('nameBtn');

let avatarName = document.getElementById('avatarName');
let newAvatarName = document.getElementById("newAvatarName").value;

let level=document.getElementById('level'); 
let newLevel=document.getElementById('avatarLevel').value;

let attribute=document.getElementById('attribute'); 
let newAttribute=document.getElementById('avatarAttribute').value;

let avatarClass=document.getElementById('class'); 
let newCLass=document.getElementById('avatarClass').value; 

let ability=document.getElementById('ability'); 
let newAbility=document.getElementById('avatarAbility').value;

let position=document.getElementById('position'); 
let newPosition=document.getElementById('avatarPosition').value;

let points=document.getElementById('points'); 
let newPoints=document.getElementById('avatarPoints').value;

let crystal1=document.getElementById("crystal1")
let crystal2=document.getElementById("crystal2")
let crystal3=document.getElementById("crystal3")

const bg=document.getElementById("bg")
let newbg=document.getElementById('newbg').value;


let newCrystal=document.getElementById('newCrystal').value;
const attributes=["Earth","Water","Fire", "Air", "Neutral", "lightning"]

function newCard(){
    avatarName.innerHTML=newAvatarName;
    level.innerHTML=newLevel;
    avatarClass.innerHTML=newCLass;
    ability.innerHTML=newAbility;
    points.innerHTML=newPoints;    
    attribute.classList.add(newAttribute);
    if(newCrystal==2){
        crystal1.classList.add("displayNone");
    }else if(newCrystal==1){
        crystal1.classList.add("displayNone");
        crystal2.classList.add("displayNone");    
    }else if(newCrystal==0){
        crystal1.classList.add("displayNone");
        crystal2.classList.add("displayNone");
        crystal3.classList.add("displayNone");
    };
    bg.src=newbg;
    if(newPosition=="attack"){
        position.src="/img/attack.png"
    }else{
        position.src="/img/defense.png"
    };    
};

nameBtn.addEventListener('click',newCard);

let avatarList=[
    {
    "name":"",
    "level":"",
    "attribute":"",
    "class":"",
    "ability":"",
    "position":"",
    "points":"",
    "crystals":""
}
];
