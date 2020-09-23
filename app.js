var score,currentscore,roundscore0,roundscore1,dice,active,double,run,p;
start();
function start()
{
    run=true;
    p=1;
    currentscore=0;
    roundscore0=0;
    roundscore1=0;
    score=[0,0];
    double=[0,0];
    active=0;
    document.querySelector('#score-0').textContent='0';
    document.querySelector('#score-1').textContent='0';
    document.querySelector('#current-0').textContent='0';
    document.querySelector('#current-1').textContent='0';
    document.querySelector('.dice').style.display='none';
    document.querySelector('#name-0').textContent='Player 1';
    document.querySelector('#name-1').textContent='Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');



    
}

document.querySelector('.btn-roll').addEventListener('click', function()
{
    if(run)
    {
        dice=Math.floor(Math.random()*6+1);
        document.querySelector('.dice').src='dice-'+dice+'.png';
        document.querySelector('.dice').style.display='block';

        double.unshift(dice);
        if(double[0]+double[1]===12)
        {
            p=0;
        }
        else
        {
            p=1;
        }
        if(dice!=1 && p===1)
        {
         currentscore+=dice;
         document.querySelector('#current-'+active).textContent=currentscore;
        } 
        else if(dice!=1 && p===0)
        {
         
            currentscore=0;
            score[active]=0;
            document.querySelector('#score-'+active).textContent=score[active];
            activeplayer();
        }
        else if(dice===1)
        {
            currentscore=0;
            activeplayer();

        }
       
    }
   

});

document.querySelector('.btn-hold').addEventListener('click',function()
{
    if(run)
    {
        score[active]+=currentscore;
        document.querySelector('#score-'+active).textContent=score[active];
        document.querySelector('#current-0').textContent=0;
        if(score[active]>=20)
        {
            document.querySelector('#name-'+active).textContent='Winner!!!';
            
            document.querySelector('.player-'+active+'-panel').classList.add('winner');
            document.querySelector('.player-'+active+'-panel').classList.remove('active');
            run=false;

        }
        else
        {
            currentscore=0;
            activeplayer();
        }
       
    }
  
       
   
});
document.querySelector('.btn-new').addEventListener('click',start);
function activeplayer()
{
    if(active===0)
    {
        active=1;
    }
    else
    {
        active=0;
    }
   
    document.querySelector('#current-0').textContent='0';
    document.querySelector('#current-1').textContent='0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    

}


