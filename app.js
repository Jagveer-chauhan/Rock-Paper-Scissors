let userScore=0;
let computerScore=0;
const computerScoreDiv=document.getElementById('computer-score');
const userScoreDiv=document.getElementById('user-score');
const rockDiv=document.getElementById('r');
const paperDiv=document.getElementById('p');
const scissorDiv=document.getElementById('s');
const popUpDiv=document.getElementById('pop-up');
let playing=false;

function computerChoice()
{
    const choices=['r','p','s'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}
function play(){
    playing=true;
    totalChances=10;
    popUpDiv.style.display='none';
}
function showPopUp()
{
    popUpDiv.style.display='flex';
}
function win(userChoice)
{
    userScore++;
    userScoreDiv.innerHTML = userScore;
    computerScoreDiv.innerHTML=computerScore;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow')},300);
}
function loss(userChoice)
{
    computerScore++;
    computerScoreDiv.innerHTML=computerScore;
    userScoreDiv.innerHTML = userScore;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('red-glow')},300);
}
function draw(userChoice)
{
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('gray-glow')},300);
}
function game(userChoice)
{
    let computer_choice = computerChoice();
    switch(userChoice+computer_choice){
        case'rs':
            win(userChoice);
            break;
        case'pr':
            win(userChoice);
            break;
        case'sp':
            win(userChoice);
            break;
        case'rp':
            loss(userChoice);
            break;
        case'ps':
            loss(userChoice);
            break;
        case'sr':
            loss(userChoice);
            break;
        case'rr':
            draw(userChoice);
            break;
        case'pp':
            draw(userChoice);
            break;
        case'ss':
            draw(userChoice);
            break;
    }    
}   

document.addEventListener('click', function handleClickOutsideBox(event) 
{  
    if ((!popUpDiv.contains(event.target)) && (!rockDiv.contains(event.target) && !paperDiv.contains(event.target) && !scissorDiv.contains(event.target)) ) {
        popUpDiv.style.display = 'none';
    }
});

rockDiv.addEventListener('click', function(){
    if(playing == true){
        game('r');
    }
    else 
    {
        showPopUp();
    }
})
paperDiv.addEventListener('click', function(){
    if(playing == true){
        game('p');
    }
    else 
    {
        showPopUp();
    }
})
scissorDiv.addEventListener('click', function(){
    if(playing){
        game('s');
    }
    else 
    {
        showPopUp();
    }
})