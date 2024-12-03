

const textValidator = (element, dataPattern, object, property) => {

    const elementValue = element.value;
    const regExp = new RegExp(dataPattern);
    const ob = window[object];

    if (elementValue != "") {
        if (regExp.test(elementValue)) {
            element.style.border = "2px solid green";
            ob[property] = (elementValue);

        } else {
            element.style.border = "2px solid red";
            ob[property] = null;

        }
    } else {

        if (element.required) {
            element.style.border = "2px solid red";
            ob[property] = null;

        } else {
            element.style.border = "2px solid #212529";
            ob[property] = "";

        }
    }


}

const dateElementValidator = (element, object, property) => {
    const elementValue = element.value;
    const ob = window[object];

    if (elementValue != "") {
        element.style.border = "2px solid green";
        ob[property] = (elementValue);
    } else {
        element.style.border = "2px solid red";
        ob[property] = null;
    }


}

const selectStaticElementValidator = (element, object, property) => {
    const elementValue = element.value;
    const ob = window[object];

    if (elementValue != "") {
        element.style.border = "2px solid green";
        ob[property] =(elementValue);
    } else {
        element.style.border = "2px solid red";
        ob[property] = null;
    }
}

const selectDianamicElementValidator = (element, object, property) => {
    // console.log("element", element);
    
    let elementValue = element.value;
    console.log("elementValue", elementValue);
    // console.log("object", object);
    // console.log("property", property);
    // console.log("fdfdfdfdfd", JSON.parse(elementValue));
    

    const ob = window[object];
    // console.log("ob", ob);

    // console.log("ububububu", isJson(elementValue));

    // if(isJson(elementValue)){
        
    // }else{
    //     let obj = {
    //         "id" : 3,
    //         "name" : elementValue
    //     }

    //     // obj = elementValue;
    //     elementValue = obj;
    //     JSON.stringify(elementValue);
    // }
    

    if (elementValue != "") {
        element.style.border = "2px solid green";
        ob[property] = JSON.parse(elementValue);
    } else {
        element.style.border = "2px solid red";
        ob[property] = null;
    }

    // console.log("ob ob ob ob", ob);
    


    // function isJson(value) {
    //     if (typeof value === 'string') {
    //         try {
    //             JSON.parse(value);
    //             return true; // It's valid JSON
    //         } catch (e) {
    //             return false; // It's not valid JSON
    //         }
    //     }
    //     return false; // It's not a string, thus not JSON
    // }
}