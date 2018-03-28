var katzDeli = []

function takeANumber (line, name) {
  var n
  
  return 'Welcome, you are number ' + n + ' in line.'
}

function nowServing (line) {
  for (line.length; line.length >= 0 ; line.shift()) {
    if (line.length === 0 ) {
      return "There is nobody waiting to be served!"
    } else {
      return "Currently serving " + line.shift() + "."
    }
  }
}

function currentLine (line) {
  var arr = "";
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    for (var i = 0 ; i < line.length; i++) {
      arr += ((i+1) + ". " + line[i] + ", ")
    } 
    return "The line is currently: " + arr.slice(0, -2)
  }
}