let dta = [];


function display(){
    let item = document.getElementById('item');
    item.innerHTML = "";
    dta.forEach(person =>{
        let list = document.createElement('ol');
        list.appendChild(document.createTextNode(person));
        item.appendChild(list);
    })
}

function pushbutton(){
    let input = document.getElementById('input').value;
    dta.push(input);
    display();
}

function popbutton(){
    dta.pop();
    display();
}

function unshiftbutton(){
    let input = prompt("Enter you want to add");
    dta.push(input);
    display();
}

function shiftbutton(){
    dta.shift();
    display();
}


function alertbutton(){
    alert("Your message comes Here! ");
}

function confirmbutton(){
    confirm("Please click OK! ");
}

function promptbutton(){
    let name = prompt("Enter your name: ");
    if(name != ""){
        confirm("Are you sure! ");
        alert("Thankyou! ");
    }else{
        alert("Please try again! ");
    }
}