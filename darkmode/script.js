const toggleSwitch = document.querySelector('input[type="checkbox"]');
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

//EventListeners
toggleSwitch.addEventListener("change", switchTheme);
