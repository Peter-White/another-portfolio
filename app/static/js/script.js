$(document).ready(function(){

  var $path = $("#path");
  var $command-input = $("#command-input");

  function changePath(path) {
    return path;
  }

  var commands = {
    "cd": "Change directory",
    "run": "Run application",
    "help": "Get function names",
    "stuff": "See all files in directory",
    "nav": "Open program navigation menu",
    "login": "Log in to your Personal Computer account",
    "logout": "Log out of your Personal Computer account",
    "register": "Create a Personal Computer account to log in and log out of",
    "cleanse": "Purge all items on screen from existence",
    "getmeouttahere": "Quit"
  };

  $command-input.on("keypress", function(e){
    if(e.which == 13) {
      console.log(commands[$(this).val()]);
    }
  });

});
