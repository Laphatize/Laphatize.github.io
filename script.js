function checkStatus() {
  var statusName = window.prompt("What service status do you need?");
  if (statusName != "Miracle Bot") return window.alert("That service does not exist")
  if (statusName == "Miracle Bot") return window.alert("The server that your bot is being hosted on is currently being upgraded.")
}