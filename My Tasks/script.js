const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAll = document.querySelector(".footer button");

inputBox.onkeyup = ()=>{
  let userEnteredValue = inputBox.value; //getting user entered value
  if(userEnteredValue.trim() != 0){ //if the user value isn't only spaces
    addBtn.classList.add("active"); //active the add button
  }else{
    addBtn.classList.remove("active"); //unactive the add button
  }
}
showTasks();

addBtn.onclick = ()=>{
    let userEnteredValue = inputBox.value;
    let getLocalStorageData = localStorage.getItem("New Todo"); 
    if(getLocalStorageData == null){ 
      listArray = [];
    }else{
      listArray = JSON.parse(getLocalStorageData); 
    }
    listArray.push(userEnteredValue); 
    localStorage.setItem("New Todo", JSON.stringify(listArray)); 
    showTasks();
    addBtn.classList.remove("active");
}
  function showTasks(){
    let getLocalStorageData = localStorage.getItem("New Todo"); 
    if(getLocalStorageData == null){ 
        listArray = [];
      }else{
        listArray = JSON.parse(getLocalStorageData); 
      }
      const pendingNumber = document.querySelector(".pending");
      if(listArray.length >1)
      {
          deleteAll.classList.add("active");
      }else
      {
        deleteAll.classList.remove("active");
      }
      pendingNumber.textContent = listArray.length;
      let newLiTag = '';
      listArray.forEach((element,index) => {
        newLiTag += `<li> ${element} <span onclick="deleteTask(${index})"; ><i class="fas fa-trash"></i></span></li>`;
      });
      todoList.innerHTML = newLiTag;
      inputBox.value = "";
  }

  function deleteTask(index){
    let getLocalStorageData = localStorage.getItem("New Todo"); 
    listArray = JSON.parse(getLocalStorageData); 
    listArray.splice(index,1);
    localStorage.setItem("New Todo", JSON.stringify(listArray)); 
    showTasks();
  }
  deleteAll.onclick = ()=>{
      listArray = [];
      localStorage.setItem("New Todo", JSON.stringify(listArray)); 
      showTasks();
  }