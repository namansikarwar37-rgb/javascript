const userNameTextField = document.getElementById("username");
const addUserBtn = document.getElementById("addUser");
const recordata = document.getElementById("records");

// part2
let userArray = []; //object
let edit_id = null;

//part 1
addUserBtn.onclick = () => {
  const name = userNameTextField.value;
  //   alert(name)
  if (edit_id != null) {
    userArray.splice(edit_id, 1, {
      username: name,
    });
    edit_id = null;
    addUserBtn.innerText = "add user";
  } else {
    userArray.push({ username: name }); //object  part3
  }
  saveData(userArray);

  userNameTextField.value = "";
};
// console.log(userArray)

// part 4
function saveData(userArray) {
  // console.log(userArray)
  let strdata = JSON.stringify(userArray); //obj to string
  console.log(strdata);
  localStorage.setItem("username", strdata);
  dispayData();
}

// data get local storage part 5
const getdata = localStorage.getItem("username");
// console.log(getdata) //storage in string

if (getdata != null) {
  userArray = JSON.parse(getdata);
}
console.log(userArray);

// part 6
function dispayData() {
  let data1 = "";
  userArray.forEach((item, index) => {
    // console.log(item)
    data1 += `<tr>
     <td>${index + 1}</td>
     <td>${item.username}</td>
     <td>
        <a href="#" onclick="editinfo(${index})">Edit</a>
        <a href="#" onclick="deleteinfo(${index})">Delete</a>
     </td>
    </tr>`;
    console.log(data1);
  });
  recordata.innerHTML = data1;
}
dispayData();

// part 7
function deleteinfo(id) {
  //alert(id)
  userArray.splice(id, 1);
  saveData(userArray);
}
//part 8
function editinfo(id) {
  //alert(id)
  edit_id = id;
  userNameTextField.value = userArray[id].username;
  addUserBtn.innerText = "Update user";
}
