$(document).ready(function () {
    showAllProperties();
})

function showAllProperties() {
    let request = new XMLHttpRequest();
    request.open("GET", "http://"+location.hostname+":8081/property/showall");

    request.onload = function () {
        renderToScreen(JSON.parse(request.response));
    }

    request.send();
}

function renderToScreen(data) {
    var table = document.getElementById("PropertyData");
    table.innerHTML = "";
    data.forEach(function (item) {
        var row = table.insertRow(-1);

        var c1 = row.insertCell(0);
        var c2 = row.insertCell(1);
        var c3 = row.insertCell(2);
        var c4 = row.insertCell(3);
        var c5 = row.insertCell(4);
        var c6 = row.insertCell(5);
        var c7 = row.insertCell(6);

        var listItem = document.createElement("li");
        listItem.className = "list-group-item";
        var editButton = document.createElement("button");
        var delButton = document.createElement("button");

        let image = document.createElement("img");
        image.width = "200";
        image.height = "150";
        image.setAttribute("src", item.image);
        c5.appendChild(image);

        editButton.innerText = "Edit";
        delButton.innerText = "Delete";

        editButton.addEventListener("click", function edit() {
            editProperty(edit, editButton, item, c4)
        });

        delButton.addEventListener("click", function () {
            deleteProperty(item.id);
        });

        c1.innerHTML = item.id;
        c2.innerHTML = item.address;
        c3.innerHTML = item.bedrooms;
        c4.innerHTML = "£" + item.price;
        // c5.innerHTML = item.image;
        c6.appendChild(editButton);
        c7.appendChild(delButton);
    });
}


// todo - create extra "submit" button
function editProperty(func, button, info, c4) {
    button.removeEventListener("click", func);
    button.addEventListener("click", function () {
        info.price = c4.innerText;
        updateProperty(info);
    });

    c4.contentEditable = true;
}
function addProperty(form) {
    let request = new XMLHttpRequest();
    request.open("POST", "http://"+location.hostname+":8081/property");
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function () {
        showAllProperties();
    }
    let body = {};
    for (let input of form) {
        if (input.name) {
            body[input.name] = input.value;
            input.value = "";
        }
    }
    request.send(JSON.stringify(body));
    return false;
}




// "body" being passed in does contain the edited field, but when the request is sent,
// yields a 400 error code.
function updateProperty(body) {
    let request = new XMLHttpRequest();
    request.open("PUT", "http://"+location.hostname+":8081/property/");
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function () {
        showAllProperties();
    }
    body.price = poundToNum(body.price);
    var body = JSON.stringify(body);
    console.log(body);
    request.send(body);
    return false
}

function poundToNum(pound) {
    return pound.substring(1);
}

function deleteProperty(id) {
    const http = new XMLHttpRequest();
    const url = 'http://'+location.hostname+':8081/property/' + id;
    http.open("DELETE", url);
    http.onload = function (e) {
        showAllProperties();
    }
    http.send();
}