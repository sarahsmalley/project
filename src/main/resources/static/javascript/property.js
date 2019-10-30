$(document).ready(function () {
    getAllProperties();
})
function getAllProperties() {
    let request = new XMLHttpRequest();
    request.open("GET", "http://localhost:8080/property");
    request.onload = function () {
        renderToScreen(JSON.parse(request.response));
    }
    request.send();
}
function renderToScreen(data) {
    let list = document.getElementById("property-list");
    list.innerHTML = "";
    for (let property of data) {
        
        let listItem = document.createElement("li");
        listItem.className = "list-group-item";
        let text = document.createElement("div");
        let header = document.createElement("h2");
        header.innerText = property.address;
        let paragraph = document.createElement("p");
        paragraph.innerText = property.bedrooms;
        text.appendChild(header);
        text.appendChild(paragraph);
        let button = document.createElement("button");
        button.innerText = "Delete";
        button.addEventListener("click", function() {
            deleteRecipe(property.id);
        });
        let button1 = document.createElement("button");
        button1.innerText = "Edit";
        button1.addEventListener("click", function edit() {
            editRecipe(listItem , edit, button1, recipe)
        });
        listItem.append(text);
        listItem.append(button);
        listItem.append(button1);
        list.appendChild(listItem);
    }
}


function editProperty(listItem, func, button, info) {
    button.removeEventListener("click", func);
    
    let form = document.createElement("form");
    let textbox = document.createElement("input");
    textbox.type = "text";
    let submit = document.createElement("input");
    submit.type= "submit";
    
    form.onsubmit = function() {
        let body = info
        body.address = textbox.value;
        updateProperty(body);
        return false;
    }
    form.appendChild(textbox);
    form.appendChild(submit);
    listItem.appendChild(form);
    console.log(listItem);
    console.log(func)
}
function addProperty(form) {
    let request = new XMLHttpRequest();
    request.open("POST", "http://localhost:8080/property");
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function () {
        getAllProperty();
    }
    let body = {};
    for(let input of form) {
        if(input.name){
            body[input.name] = input.value;
            input.value="";
        }
    }
    request.send(JSON.stringify(body));
    return false;
}
function updateProperty(body) {
    console.log(body);
     let request = new XMLHttpRequest();
     request.open("PUT", "http://localhost:8080/property");
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function () {
            getAllProperties();
        }
        var body= JSON.stringify(body)
        request.send(body);
        return false
}
function deleteProperty(address) {
    const http = new XMLHttpRequest();
    const url = 'http://localhost:8080/property/'+address;
    http.open("DELETE", url);
    http.onload = function (e) {
        getAllProperty();
    }
    http.send();
}