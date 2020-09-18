const testVar = {};

function superbowlWin(arrOfObjs) {
  let gotObj = arrOfObjs.find((obj) => obj.result === "W")
  if (gotObj.year) {
    return gotObj
  }
   else { 
      return gotObj.year;
   }
}
