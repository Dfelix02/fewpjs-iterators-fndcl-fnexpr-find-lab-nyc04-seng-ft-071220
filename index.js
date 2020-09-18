const testVar = {};

function superbowlWin(arrOfObjs) {
  let gotObj = arrOfObjs.find((obj) => obj.result === "W")
  if (typeof gotObj !== "undefined") {
    return gotObj.year
  }
   else { 
      return gotObj;
   }
}
