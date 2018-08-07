const usernameElement = document.getElementById("username");
const messageElement = document.getElementById("message");
const button = document.getElementById("submitButton");
button.addEventListener("click",updateDB);

//Set database object here
const database = firebase.database().ref(); 

/**
 * Updates the database with the username and message.
 */
function updateDB(event){
    event.preventDefault();
    const username        = usernameElement.value;
    const message         = messageElement.value;

    usernameElement.value = "";
    messageElement.value  = "";

    console.log(username + " : " + message);

    //Update database here
    const value = {
        "message" : message, 
        "username" : username
    }
    database.push(value); 
}
function updateUI (message){
    const allMessagesdiv = document.getElementById('allMessages');
    const messageDiv = document.createElement("p"); 
    messageDiv.innerText = message['username'] + ":" + message['message'];  
    allMessagesdiv.appendChild(messageDiv); 
}

// Set database "child_added" event listener here
database.on('child_added', function(dataref){
    const data = dataref.val(); 
    updateUI(data); 
    console.log(data); 
});


