// conver ("12:8PM") to 12:08
//convert ("1:1AM") tp 01"01

function convert(time) {
  let [hour, minute] = time.split(":");
  let suffix = minute.split("").slice(-2).join("");
  switch (suffix) {
    case "AM":
        if(hour ==='12') 
            return parseInt('0').toString().padStart(2,0) + ":" + parseInt(minute).toString().padStart(2,0);
        else
            return parseInt(hour).toString().padStart(2,0) + ":" + parseInt(minute).toString().padStart(2,0);
    case "PM":
        if(hour ==='12') 
            return parseInt('12').toString().padStart(2,0) + ":" + parseInt(minute).toString().padStart(2,0);
        else
            return (parseInt(hour)+12).toString().padStart(0,2) + ":" + parseInt(minute).toString().padStart(2,0);
    default:
        return "Incorrect input"
  }
}

console.log(convert("12:8AM"));
