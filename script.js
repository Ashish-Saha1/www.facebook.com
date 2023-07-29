
    let leftSideDiv = document.querySelector('.left-side');
    let manuBar = document.querySelector('.manu-icon');
 
    manuBar.addEventListener('click', function(){
        console.log('left')
        // leftSideDiv.classList.toggle('show_left-side');
        if(leftSideDiv.style.display == 'none'){
            leftSideDiv.style.display= 'block'
        }else{
            leftSideDiv.style.display= 'none';
        }
    })
        
 




        // Setting Manu visible function
    let settingManu = document.querySelector('.setting-manu');

    function settingManuFun(){
    settingManu.classList.toggle('setting-manu-opacity')
   }


       
   // Dark Mode Function
    let darkMode = document.getElementById('dark-mode');

      darkMode.onclick = function(){
      darkMode.classList.toggle('dark-mode-on');
      document.body.classList.toggle('dark-theme')

       //below code for dark mode save in local storage thats mean after refresh dark mode can't off

      if(localStorage.getItem('theme') === 'light'){
            localStorage.setItem('theme', 'dark')
      }else{
            localStorage.setItem('theme', 'light')
      }


    }




    // dark mode save in local storage thats mean after refresh dark mode can't off

    if(localStorage.getItem('theme') === 'light'){
        darkMode.classList.remove('dark-mode-on');
        document.body.classList.remove('dark-theme')
    } 
    else if(localStorage.getItem('theme') === 'dark'){
        darkMode.classList.add('dark-mode-on');
        document.body.classList.add('dark-theme')
    } 
    else{
        localStorage.setItem('theme', 'light')
    }