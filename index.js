const testVar = {};

function superbowlWin(arrOfObjs) {
  let gotObj = arrOfObjs.find((obj) => obj.result === "W")
  if (gotObj.result === "W") {
    return gotObj.year
  }
   else { 
      return gotObj;
   }
}
