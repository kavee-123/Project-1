
//define function for fill data into table (tablebodyId, dataList, propertyList, editFunctionName, deleteFunctionName, viewFunctionName)
const fillDataIntoTable = (tableBodyId, dataList, propertyList, editFunction, deleteFunction, viewFunction, buttonVisibility = true) => {
    tableBodyId.innerHTML = "";

    dataList.forEach((dataOb, index) => {
        let tr = document.createElement("tr");

        let tdIndex = document.createElement("td");
        tdIndex.innerText = parseInt(index) + 1;
        tr.appendChild(tdIndex);

        for (const property of propertyList) {

            let td = document.createElement("td");
            if (property.dataType == "string") {
                td.innerText = dataOb[property.propertyName];
            }
            if (property.dataType == "function") {
                td.innerHTML = property.propertyName(dataOb);
            }

            tr.appendChild(td);
        }

        let tdButton = document.createElement("td");

        let buttonEdit = document.createElement("button");
        buttonEdit.className = "btn btn-outline-warning";
        buttonEdit.innerText = "Edit";
        tdButton.appendChild(buttonEdit);
        buttonEdit.onclick = () => {
            console.log("Edit ", dataOb);
            editFunction(dataOb, index);

        }

        let buttonDelete = document.createElement("button");
        buttonDelete.className = "btn btn-outline-danger ms-1 me-1";
        buttonDelete.innerHTML = "<i class='fa-solid fa-trash'></i> Delete";
        tdButton.appendChild(buttonDelete);
        buttonDelete.onclick = () => {
            console.log("Delete ", dataOb);
            deleteFunction(dataOb, index);

        }

        let buttonView = document.createElement("button");
        buttonView.className = "btn btn-outline-info";
        buttonView.innerHTML = "<i class='fa-solid fa-eye'></i> View";
        tdButton.appendChild(buttonView);
        buttonView.onclick = () => {
            console.log("View ", dataOb);
            viewFunction(dataOb, index);

        }

        if (buttonVisibility) {
            tr.appendChild(tdButton);
        }







        tableBodyId.appendChild(tr);
    });
}

const fillDataIntoTableTwo = (tableBodyId, dataList, propertyList, editFunction, deleteFunction, viewFunction, buttonVisibility = true) => {
    tableBodyId.innerHTML = "";

    dataList.forEach((dataOb, index) => {
        let tr = document.createElement("tr");

        let tdIndex = document.createElement("td");
        tdIndex.innerText = parseInt(index) + 1;
        tr.appendChild(tdIndex);

        for (const property of propertyList) {

            let td = document.createElement("td");
            if (property.dataType == "string") {
                td.innerText = dataOb[property.propertyName];
            }
            if (property.dataType == "function") {
                td.innerHTML = property.propertyName(dataOb);
            }

            tr.appendChild(td);
        }

        let tdButton = document.createElement("td");

        let div = document.createElement("div");
        div.className = "dropdown";
        tdButton.appendChild(div);

        let dropdownButton = document.createElement("button");
        dropdownButton.className = "btn";
        dropdownButton.setAttribute("data-bs-toggle", "dropdown");
        dropdownButton.setAttribute("aria-expanded", "false");
        dropdownButton.innerHTML = "<i class='fa-solid fa-sliders' style='color: #e5ba1f;'></i>";

        div.appendChild(dropdownButton);

        let dropdownUl = document.createElement("ul");
        dropdownUl.className = "dropdown-menu";
        div.appendChild(dropdownUl);

        let liEdit = document.createElement("li");
        liEdit.className = "dropdown-item";

        let buttonEdit = document.createElement("button");
        buttonEdit.className = "btn btn-outline-warning";
        buttonEdit.innerText = "Edit";

        buttonEdit.onclick = () => {
            console.log("Edit ", dataOb);
            editFunction(dataOb, index);

        }

        liEdit.appendChild(buttonEdit);
        dropdownUl.appendChild(liEdit);



        let buttonDelete = document.createElement("button");
        buttonDelete.className = "btn btn-outline-danger ms-1 me-1";
        buttonDelete.innerHTML = "<i class='fa-solid fa-trash'></i> Delete";
        liEdit.appendChild(buttonDelete);
        buttonDelete.onclick = () => {
            console.log("Delete ", dataOb);
            deleteFunction(dataOb, index);

        }

        let buttonView = document.createElement("button");
        buttonView.className = "btn btn-outline-info";
        buttonView.innerHTML = "<i class='fa-solid fa-eye'></i> View";
        liEdit.appendChild(buttonView);
        buttonView.onclick = () => {
            console.log("View ", dataOb);
            viewFunction(dataOb, index);

        }

        if (buttonVisibility) {
            tr.appendChild(tdButton);
        }






        tableBodyId.appendChild(tr);
    });
}

const fillDataIntoTableThree = (tableBodyId, dataList, propertyList, buttonVisibility = true) => {
    tableBodyId.innerHTML = "";

    dataList.forEach((dataOb, index) => {
        let tr = document.createElement("tr");

        let tdIndex = document.createElement("td");
        tdIndex.innerText = parseInt(index) + 1;
        tr.appendChild(tdIndex);

        for (const property of propertyList) {

            let td = document.createElement("td");
            if (property.dataType == "string") {
                td.innerText = dataOb[property.propertyName];
            }
            if (property.dataType == "function") {
                td.innerHTML = property.propertyName(dataOb);
            }

            tr.appendChild(td);
        }

        let tdButton = document.createElement("td");

        let button = document.createElement("button");
        button.className = "btn btn-primary";
        button.innerHTML = "Edit";
        button.onclick = () => {
            modifyButton.style.display = "block";
            window['editOb'] = dataOb;
            window['editRowIndex'] = index;
        }

        tdButton.appendChild(button);
        if (buttonVisibility) {
            tr.appendChild(tdButton);
        }
        tableBodyId.appendChild(tr);
    });
}

const fillDataIntoTableFour = (tableBodyId, dataList, propertyList, editFunction, buttonVisibility = true) => {
    tableBodyId.innerHTML = "";

    dataList.forEach((dataOb, index) => {
        let tr = document.createElement("tr");

        let tdIndex = document.createElement("td");
        tdIndex.innerText = parseInt(index) + 1;
        tr.appendChild(tdIndex);

        for (const property of propertyList) {

            let td = document.createElement("td");
            if (property.dataType == "string") {
                td.innerText = dataOb[property.propertyName];
            }
            if (property.dataType == "function") {
                td.innerHTML = property.propertyName(dataOb);
            }

            tr.appendChild(td);
        }

        let tdButton = document.createElement("td");

        let button = document.createElement("button");
        button.className = "btn btn-primary";
        button.innerHTML = "Edit";
        button.onclick = () => {
            editFunction(dataOb,index);
            modifyButton.style.display = "block";
            window['editOb'] = dataOb;
            window['editRowIndex'] = index;
        }

        tdButton.appendChild(button);
        if (buttonVisibility) {
            tr.appendChild(tdButton);
        }
        tableBodyId.appendChild(tr);
    });
}


//define function for fill data into select (elemntid, displaymessage, dataListname, displaypropertyname)
const fillDataIntoSelect = (parentId, message, dataList, displayProperty) => {

    parentId.innerHTML = "";

    let optionMsgEs = document.createElement("option");
    optionMsgEs.value = "";
    optionMsgEs.selected = "selected";
    optionMsgEs.disabled = "disabled";
    optionMsgEs.innerText = message;
    parentId.appendChild(optionMsgEs);

    dataList.forEach(dataOb => {
        let option = document.createElement("option");
        option.value = JSON.stringify(dataOb);
        option.innerText = dataOb[displayProperty];
        parentId.appendChild(option);
    });
}