const userNameTextField = document.getElementById("username");
const addUserBtn = document.getElementById("addUser");

let userArray = []//part 2

//part 1
addUserBtn.onclick = () => {
  const name = userNameTextField.value;
 // alert(name)

userArray.push({ username: name }); //object  //part3
saveData(userArray)
};

//console.log(userArray)
//part 4
function saveData(userArray){
  //console.log(userArray)
  let strdata = JSON.stringify(userArray) //object to string
  console.log(strdata)
  localStorage.setItem("username", strdata);
}