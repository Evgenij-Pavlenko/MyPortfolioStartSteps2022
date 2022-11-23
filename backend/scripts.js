console.log("Hello World");

function AddTodo2List() {
    var ShowAlertContent = "🚨New Todo Has Been Added🚨";
    alert(ShowAlertContent);
//  todoList logic and variables
    //Eingabe feld, wird betretet und sein inhalt gecloned mit .value und in ein variable gespeichert
    let htmlInputField = document.querySelector(".todoInputField").value;

    //als test würde die inhalt die eingabe feld, in die konsole von die Internet Browser ausgedrückt
    console.log(htmlInputField);

    //text aus eingabe feld, die in die variable htmlInputField gespeichert in ein text Knoten umgewabdelt
    // damit das text dargestellt werden kann
    let todoTextNode = document.createTextNode(htmlInputField);

    if (htmlInputField !== ""){
        console.log("Field Leer1");

    }
    // if (!htmlInputField.value){
    //     console.log("Field Leer2");
    // }
    //
    // if (htmlInputField !== null){
    //     console.log("Field Leer3");
    // }

    //ein leeren List item die die TextNode bekommt und in sie speichert und darstellt
    let listItem = document.createElement("li");
    listItem.appendChild(todoTextNode);

    //List item als kind von ul zu gewiesen damit inhalt die li richtig platziert kann
    document.querySelector(".myUl").appendChild(listItem);

    //Entleeren von die Eingaben field
    document.querySelector(".todoInputField").value = "";

}