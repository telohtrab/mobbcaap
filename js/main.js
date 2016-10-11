var parser = new UAParser();
var result = parser.getResult();

var browserName = result.browser.name;
if(result.device.model != undefined){
  var deviceName = result.device.model;
} else {
  var deviceName = result.device.type;
}

document.addEventListener('DOMContentLoaded', function() {

document.getElementById("browser").innerHTML = "You're using "+browserName+" on a "+deviceName+", don't you ?";

})
