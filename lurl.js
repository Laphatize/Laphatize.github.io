/* lurl - a basic key based reference system
$ lurl <project-path>
This will open a GUI that will ask you some questions.
Afterwards, a js file should appear.
*/


function lurl() {

  var query = document.getElementById("code").value;
  var validCodes = ['laphatize-resume', 'rickroll', '2019robots'];

  if (!validCodes.includes(query)) {
      window.alert("That lurl code is either invalid or expired.")
  }

  if (query == "laphatize-resume") {
    window.location.href = "https://github.com/laphatize"
  }

  if (query == "rickroll") {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }

  if (query == "2019robots") {
    window.location.href = "https://github.com/Laphatize/Futon"
  }

}
