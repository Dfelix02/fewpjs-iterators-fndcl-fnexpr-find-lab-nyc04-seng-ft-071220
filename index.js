const testVar = {};

function superbowlWin(arrOfObjs) {
  gotObj = arrOfObjs.find((obj) => obj.result === "W")
  return gotObj.year;
}
