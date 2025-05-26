let inputbox = document.getElementById("input-box");
let listcontainer = document.getElementById("list-container");
function addTask() {
    if (inputbox.value === '') {
        alert("write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00D7";
        li.appendChild(span);
        inputbox.value = "";
        savedata();

        span.addEventListener("click", function() {
            listcontainer.removeChild(li);
            savedata();
        });
        li.addEventListener("click", function() {
            li.classList.toggle("checked");
            savedata();
        });
    }

}
function savedata() {
    localStorage.setItem("data", listcontainer.innerHTML);
}
function showTask() {
    listcontainer.innerHTML = localStorage.getItem("data");
    let items = listcontainer.querySelectorAll("li");
    items.forEach(function(item) {
        let span = document.createElement("span");
        span.innerHTML = "\u00D7";
        item.appendChild(span);
        span.addEventListener("click", function() {
            listcontainer.removeChild(item);
            savedata();
        });
        item.addEventListener("click", function() {
            item.classList.toggle("checked");
            savedata();
        });
    });
}   
showTask();