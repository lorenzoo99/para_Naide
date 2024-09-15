const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click', function(){
    alert('Casi que no aceptas jajaja no te arrepentiras');
    });

const noBtn = document.querySelector('#noBtn');
    noBtn.addEventListener('mouseover', function(){
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.sytle.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
});
