let darkmode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabledDark');

  //update button to stay white
  var element =  document.getElementById('dark-mode-toggle');
  element.checked = true;  

  // update toggle Button text
  var btnText =  document.getElementById('darkBtnStyle');
  btnText.innerHTML = 'Light-Mode'
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);

  //update button to stay black
  var element =  document.getElementById('dark-mode-toggle');
  element.checked = false; 

  // update toggle Button text
  var btnText =  document.getElementById('darkBtnStyle');
  btnText.innerHTML = 'Dark-Mode'


}
 

// If the user already visited and enabled darkMode
// start things off with it on

if (darkmode === 'enabledDark') {
  enableDarkMode();
}



// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkmode = localStorage.getItem('darkMode'); 

  // if it not current enabled, enable it
  if (darkmode !== 'enabledDark') {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }
});

// the above code was obtained from - https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/
// and has been edited for text appending and checking for dark button slider
