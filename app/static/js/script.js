$(document).ready(function(){

  var $command = $(".command");
  var $command_input = $("input#command-input");
  var $dosBoxx = $("div#dosBoxx");
  var $path = $("#path");

  function changePath(path) {
    return path;
  }

  function oldInput(path, command) {

    var html = '<div class="row cell">';
        html += '<div class="col-md-12">';
        html += '<div class="input-group mb-3">';
        html += '<div class="input-group-prepend">';
        html += '<span class="input-group-text" id="path">' + path + '</span>';
        html += '</div>';
        html += '<input type="text" class="form-control" id="command-input" placeholder="First name" aria-describedby="basic-addon3" disabled>';
        html += '</div></div></div>'

        $dosBoxx.append(html);
        $command_input = $("input#command-input").last();
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
    "getmethehellouttahere": "Quit"
  };

  $command_input.on("keypress", function(e){
    if(e.which == 13) {
        var today = new Date();
        console.log(today);
        oldInput($(this).parent().children("div.input-group-prepend").children("#path").text(), $(this).val());
        $(this).val() = "";
    }
  });



});
