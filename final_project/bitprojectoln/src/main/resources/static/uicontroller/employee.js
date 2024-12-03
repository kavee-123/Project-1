// $(document).ready(function() {
//             $('#tableEmployee').DataTable();
//         });

window.addEventListener("load", () => {
    console.log("browser load Event");

    // enable tooltip

    $('[data-bs-toggle="tooltip"]').tooltip();

    reloadEmployeeTable();

    refreshForm();

})

//refresh table Area
const reloadEmployeeTable = () => {

    modifyButton.style.display = "none";

    let employees = [{ id: 1, callingname: "Kaveesha", fullname: "Kaveesha Nethmina", mobileno: "0770190043", nic: "990691924V", gender: "Male", dob: "1999-03-09", civilstaus: { id: 3, name: "Married" }, designation_id: { id: 1, name: "Manager" }, employeestatus: { id: 1, status: "Working" } },
    { id: 1, callingname: "Charith", fullname: "Charith Madushanka", mobileno: "0770190873", nic: "930691924V", gender: "Male", dob: "1993-03-09", civilstaus: { id: 1, name: "Married" }, designation_id: { id: 3, name: "Cashier" }, employeestatus: { id: 2, status: "Resign" } },
    { id: 1, callingname: "Osanda", fullname: "Osanda Gamage", mobileno: "0710170043", nic: "950691924V", gender: "Male", dob: "1995-03-09", civilstaus: { id: 2, name: "Single" }, designation_id: { id: 2, name: "AS - Manager" }, employeestatus: { id: 3, status: "Removed" } }
    ];

    //data types
    //string => string / date / number
    //function => object / array / boolean


    let propertyList = [{ propertyName: "fullname", dataType: "string" },
    { propertyName: "nic", dataType: "string" },
    { propertyName: "mobileno", dataType: "string" },
    { propertyName: "dob", dataType: "string" },
    { propertyName: getCivilStatus, dataType: "function" },
    { propertyName: genarateBirthYear, dataType: "function" },
    { propertyName: getDesignation, dataType: "function" },
    { propertyName: getEmployeeStatus, dataType: "function" }];

    //call filldatatable function(tablebodyid, datalist)
    fillDataIntoTable(tableEmployeeBody, employees, propertyList, employeeFormRefill, employeeDelete, employeeView, true);

    //fillDataIntoTableThree(tableEmployeeBody, employees, propertyList,true);
    fillDataIntoTableFour(tableEmployeeBody, employees, propertyList,employeeFormRefill,true);

    $('#tableEmployee').DataTable();

}


const genarateBirthYear = (dataOb) => {
    return new Date(dataOb.dob).getFullYear();
}

const getDesignation = (dataOb) => {
    console.log("dataOb", dataOb);

    return dataOb.designation_id.name;
}

const getCivilStatus = (dataOb) => {
    console.log("dataOb", dataOb);

    return dataOb.civilstaus.name;
}

const getEmployeeStatus = (dataOb) => {
    if (dataOb.employeestatus.status == "Working") {
        return "<p class = 'p-2 bg-success fw-bold text-center'>" + dataOb.employeestatus.status + "</p>";
    }

    if (dataOb.employeestatus.status == "Resign") {
        return "<p class = 'p-2 bg-warning fw-bold text-center'>" + dataOb.employeestatus.status + "</p>";
    }

    if (dataOb.employeestatus.status == "Removed") {
        return "<p class = 'p-2 bg-danger fw-bold text-center'>" + dataOb.employeestatus.status + "</p>";
    }

}

//function define for refill employee form
const employeeFormRefill = (ob, index) => {
    console.log("Edit ", ob, index);
    // tableEmployeeBody.children[index].style.backgroundColor = "orange";

    textFullName.value = ob.fullname;
    textCallingName.value = ob.callingname;

    let fullNameParts = textFullName.value.split(" ");
    fullNameParts.forEach(element => {
        let option = document.createElement("option");
        option.value = element;
        if (element.length > 2) {
            dlCallingName.appendChild(option);
        }

    });
    textNic.value = ob.nic;

    if (ob.gender == "Male") {
        radiomale.checked = true;
    } else {
        radiofemale.checked = true;
    }


    dteDOB.value = ob.dob;
    employeeEmail.value = ob.email
    textMobile.value = ob.mobileno;
    selectCivilStatus.value = ob.civilstaus.name;


    if (ob.landno == undefined) {
        textLandNo.value = "";
    } else {
        textLandNo.value = ob.landno;
    }


    selectDesignation.value = JSON.stringify(ob.designation_id);
    selectEmployeeStatus.value = JSON.stringify(ob.employeestatus);

    employee = JSON.parse(JSON.stringify(ob));
    oldEmployee = JSON.parse(JSON.stringify(ob));

    $('#modalForm').modal("show");

}
//function define for delete employee form
const employeeDelete = (dataOb, index) => {

    let userConfirmMSG = "\n Employee Full Name : " + dataOb.fullname +
        "\n Employee NIC : " + dataOb.nic +
        "\n Employee Designation : " + dataOb.designation_id.name;

    swal({
        title: "Are you sure to delete..?",
        text: userConfirmMSG,
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((userResponce) => {
            if (userResponce) {
                swal("Delete Successfully", {
                    icon: "success",
                });
                reloadEmployeeTable();
                // window.location.reload();
                refreshForm();
            }
        });

    // swal ( "Oops" ,  "Something went wrong!" ,  "error" );
    // console.log("Delete ", dataOb, index);

    // // need to get user confirmation
    // let userConfirm = window.confirm("Are you sure to Delete following employee..?" +
    //     "\n Employee Full Name : " + dataOb.fullname +
    //     "\n Employee NIC : " + dataOb.nic +
    //     "\n Employee Designation : " + dataOb.designation_id.name
    // );
    // if (userConfirm) {
    //     //call post service
    //     let deleteResponce = "OK";
    //     if (deleteResponce == "OK") {
    //         window.alert("Delete Successfully ");
    //         reloadEmployeeTable();
    //         //window.location.reload();
    //         refreshForm();
    //     } else {
    //         window.alert("Faild to submit \n " + postResponce);
    //     }
    // }

}
//function define for view employee form
const employeeView = (ob, index) => {
    console.log("View ", ob, index);

    //option one
    //     let newWindow = window.open();
    //     let printView = "<head><title> Employee Print </title>  <link rel='stylesheet' href='../resource/bootstrap-5.2.3/css/bootstrap.min.css'></head>" + "<body> <table class='table table-striped table-hover'>" + 
    //     "<tr><th> Employee Full Name </th><td>" + ob.fullname + "</td></tr>" +
    //     "<tr><th> Employee Calling Name </th><td>" + ob.callingname + "</td></tr>" +
    //     "<tr><th> Employee NIC </th><td>" + ob.nic + "</td></tr>" +
    //     "<tr><th> Employee Designation </th><td>" + ob.designation_id.name + "</td></tr>" +
    //     "</table></body>"
    //     newWindow.document.write(printView);

    // setTimeout(()=>{
    // newWindow.stop();
    // newWindow.print();
    // newWindow.close();
    // }, 500);

    //option 2

    employeeFullname.innerText = ob.fullname;
    employeeCallingname.innerText = ob.callingname;
    employeenic.innerText = ob.nic;
    employeeDesignation.innerText = ob.designation_id.name;

    $("#modalEmployeeFormView").modal("show");

}

const buttonPrintRow = () => {
    let newWindow = window.open();
    let printView = "<head><title> Employee Print </title>  <link rel='stylesheet' href='../resource/bootstrap-5.2.3/css/bootstrap.min.css'></head>" + "<body>" + tableEmployeeView.outerHTML + "</body>"
    newWindow.document.write(printView);

    setTimeout(() => {
        newWindow.stop();
        newWindow.print();
        newWindow.close();
    }, 500);
}
const checkFormError = () => {


    let errors = "";

    if (employee.fullname == null) {


        errors = errors + "Please Enter valid Full Name..! \n";
    }

    if (employee.callingname == null) {
        errors = errors + "Please Enter valid Calling Name..! \n";
    }

    if (employee.nic == null) {
        errors = errors + "Please Enter valid NIC..! \n";
    }

    if (employee.gender == null) {
        errors = errors + "Please Select Gender..! \n";
    }

    if (employee.dob == null) {
        errors = errors + "Please Select valid dob..! \n";
    }

    if (employee.email == null) {
        errors = errors + "Please Enter valid Email address..! \n";
    }

    if (employee.mobileno == null) {
        errors = errors + "Please Enter valid Mobile No..! \n";
    }

    if (employee.civilstaus == null) {
        errors = errors + "Please Select Civil Status..! \n";

    }

    if (employee.employeestatus == null) {
        errors = errors + "Please Select valid employee status..! \n";
    }

    if (employee.designation_id == null) {
        errors = errors + "Please Select Designation..! \n";
    }


    return errors;

}


// Employee form submint event function
const buttonEmployeeSubmit = () => {



    //check form error for required element
    let errors = checkFormError();
    if (errors == "") {
        // errors not exist
        // need to get user confirmation
        let userConfirm = window.confirm("Are you sure to add following employee..?" +
            "\n Employee Full Name : " + employee.fullname +
            "\n Employee NIC : " + employee.nic +
            "\n Employee Designation : " + employee.designation_id.name
        );
        if (userConfirm) {
            //call post service
            let postResponce = "OK";
            if (postResponce == "OK") {
                window.alert("Save Successfully ");
                reloadEmployeeTable();
                //window.location.reload();
                refreshForm();
                $('#modalForm').modal("hide");
            } else {
                window.alert("Faild to submit \n " + postResponce);
            }
        }
    } else {
        window.alert("Form has following error..\n " + errors);
    }


}


const checkFormUpdates = () => {
    let updates = "";

    if (employee != null && oldEmployee != null) {
        if (employee.fullname != oldEmployee.fullname) {
            updates = updates + "Full Name is Changed..! \n";
        }

        if (employee.nic != oldEmployee.nic) {
            updates = updates + "Nic is Changed..! " + oldEmployee.nic + " into " + employee.nic + "\n";
        }

        if (employee.designation_id.name != oldEmployee.designation_id.name) {
            updates = updates + "Designation is Changed..! " + oldEmployee.designation_id.name + " into " + employee.designation_id.name + "\n";
        }

        if (employee.mobileno != oldEmployee.mobileno) {
            updates = updates + "Mobile No is Changed..! " + oldEmployee.mobileno + " into " + employee.mobileno + "\n";
        }
    }

    return updates;
}

// form update event function
const buttonEmployeeUpdate = () => {

    //need to check form errors
    let errors = checkFormError();
    if (errors == "") {
        //need to check form updates
        let updates = checkFormUpdates();
        if (updates == "") {
            window.alert("Nothing to update..\n ");
        } else {
            // need to user confirmation
            let userConfirm = window.confirm("Are you sure to update following changes..! \n" + updates);
            if (userConfirm) {
                //call put service
                let putResponce = "OK";
                if (putResponce == "OK") {
                    window.alert("Update Successfully...!");
                    reloadEmployeeTable();
                    refreshForm();
                    $('#modalForm').modal("hide");
                } else {
                    window.alert("Faild to Update...!" + putResponce);
                }
            }

        }
    } else {
        window.alert("Form has following error..\n " + errors);
    }
}


textFullName.addEventListener("keyup", () => {
    const fullNameValue = textFullName.value;
    if (fullNameValue != "") {
        if (new RegExp("^([A-Z][a-z]{1,20}[\\s])+([A-Z][a-z]{1,20})$").test(fullNameValue)) {
            //valid Fullname
            employee.fullname = fullNameValue;
            textFullName.style.border = "2px solid green";
            let fullNameParts = fullNameValue.split(" ");
            dlCallingName.innerHTML = "";

            textCallingName.value = fullNameParts[0];
            textCallingName.style.border = "2px solid green";
            employee.callingname = textCallingName.value;

            fullNameParts.forEach(element => {
                let option = document.createElement("option");
                option.value = element;
                if (element.length > 2) {
                    dlCallingName.appendChild(option);
                }

            });
        } else {
            //in-valid Fullname
            textFullName.style.border = "2px solid red";
            employee.fullname = null;
        }
    } else {
        //in-valid Fullname
        textFullName.style.border = "2px solid red";
        employee.fullname = null;
    }
});

const callingNameValidator = (callingNameElement) => {
    const callingNameValue = callingNameElement.value;
    const fullNameValue = textFullName.value;
    let fullNameParts = fullNameValue.split(" ");

    if (callingNameValue != "") {
        let extIndex = fullNameParts.map(fullNamePart => fullNamePart).indexOf(callingNameValue);
        if (extIndex != -1) {
            // valid callingname
            callingNameElement.style.border = "2px solid green";
            employee.callingname = textCallingName.value;
        } else {
            //in - valid callingname
            callingNameElement.style.border = "2px solid red";
            employee.callingname = null;
        }
    } else {
        //in - valid callingname
        callingNameElement.style.border = "2px solid red";
        employee.callingname = null;
    }


}

const nicValidator = (nicElement) => {
    const nicValue = nicElement.value;

    if (nicValue != "") {
        if (new RegExp("^(([98765][0-9]{8}[VvXx])|([0-9]{12}))$").test(nicValue)) {
            //valid nic
            nicElement.style.border = "2px solid green";
            employee.nic = nicValue;
            //generate gender and DOB

            // if (nicValue.length == 10) {
            //     const gen = nicValue.substring(2, 5);

            //     if (gen > 500) {
            //         console.log("Female");

            //     } else {
            //         console.log("Male");
            //     }
            // } else if (nicValue.length == 12) {
            //     const gen = nicValue.substring(7, 8);

            //     if (gen < 4) {
            //         console.log("Female");

            //     } else {
            //         console.log("Male");
            //     }
            // }

        } else {
            //in-valid nic
            nicElement.style.border = "2px solid red";
            employee.nic = null;
        }
    } else {
        //in-valid nic
        nicElement.style.border = "2px solid red";
        employee.nic = null;
    }
}

const refreshForm = () => {

    employee = new Object();

    // static element only
    // textFullName.value = "";
    // textCallingName.value = "";
    // textNic.value = "";
    // dteDOB.value = "";
    // employeeEmail.value = "";
    // textMobile.value = "";
    // selectCivilStatus.value = "";
    // selectDesignation.value = "";
    // selectEmployeeStatus.value = "";

    formEmployee.reset();
    setDefault([dteDOB, employeeEmail, selectEmployeeStatus]);
    // dteDOB.style.border = "1px solid #ced4da";
    // employeeEmail.style.border = "1px solid #ced4da";
    // selectEmployeeStatus.style.border = "1px solid #ced4da";

    let designation = [{ id: 1, name: "Manager" }, { id: 2, name: "AS - Manager" }, { id: 3, name: "Cashier" }];

    let employeeStatuses = [{ id: 1, status: "Working" }, { id: 2, status: "Resign" }, { id: 3, status: "Removed" }];

    fillDataIntoSelect(selectDesignation, "Please select Designation..!", designation, "name");
    fillDataIntoSelect(selectEmployeeStatus, "Please select Status..!", employeeStatuses, "status");
}