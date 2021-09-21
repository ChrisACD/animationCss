
// initiatlisation du DOM


const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const solarizeButton = document.getElementById('solarize');
const solarizeDarkButton = document.getElementById('solarize-dark');
const body = document.body;


// Cache theme selection for loading

const theme = localStorage.getItem('theme');
const isSolarize = localStorage.getItem('isSolarize')

if(theme) {
    body.classList.add(theme);
    isSolarize && body.classList.add('solarize');
} 

// event handler
darkButton.onclick = () => {

body.classList.replace('light','dark');
localStorage.setItem('theme','dark')


}


lightButton.onclick = () => {

    body.classList.replace('dark', 'light');
    
    localStorage.setItem('theme','light')
    }



    solarizeButton.onclick = () => {

        if(body.classList.contains('solarize')){
        body.classList.remove('solarize')
         solarizeButton.style.cssText = '--bg-solar: var(--yellow)';
         solarizeButton.innerText = 'Solarize';
         localStorage.removeItem('isSolarize')

        } else if (body.classList.contains('solarize-dark'))  {

            body.classList.remove('solarize-dark')
            solarizeButton.style.cssText = '--bg-solar: var(--yellow)';
            solarizeButton.innerText = 'Solarize++';
            localStorage.removeItem('isSolarize')


        } else{

            body.classList.add('solarize');
            solarizeButton.style.cssText = '--bg-solar: white';
            solarizeButton.innerText = 'Nomarlize';
           localStorage.setItem('isSolarize', 'true')

        }
        
    }


    solarizeDarkButton.onclick = () => {

        body.classList.toggle('solarize-dark');
    
        localStorage.setItem('theme','solarise-dark')



    }

 



 













































