let defaultVal = "Y";

let arr = new Array(9).fill(null);
const msg = document.getElementById("winner-message");
const winnerCheck = () => {
  if (
    (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
    (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
    (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
    (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
    (arr[6] !== null && arr[6] == arr[4] && arr[4] == arr[2]) ||
    (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
    (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
    (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8])
  ) {
    console.log(`winner is ${defaultVal}`);
    msg.innerText = `Player ${defaultVal} is Winner 🎉`;
  }
  if(!arr.some(e=> e==null)){
    msg.innerText = `The match is drow`;
   
  }
};

const handelOnClick = (e) => {
  if (arr[e.id] != null) return;
  arr[e.id] = defaultVal;
  defaultVal == "Y" ? (defaultVal = "X") : (defaultVal = "Y");
  e.innerText = defaultVal;
  winnerCheck();
  console.log(arr);
};
