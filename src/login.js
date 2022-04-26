let loggedIn = false;
let displayed = false;
var users = [
	{ // Object @ 0 index
		username: "admin",
		password: "admin1"
	},
	{ // Object @ 1 index
		username: "bula",
		password: "bula1"
	},
]
document.getElementById('buyBtn1').addEventListener('click', function(){
    // document.getElementById('login-container').style.display = 'block';
	document.getElementById('mustBeLogged').style.display = 'block';
	document.getElementById('mustBeLogged').scrollIntoView();
	setTimeout(function(){document.getElementById('mustBeLogged').style.display = "none";
	document.getElementById('navbar').scrollIntoView()}, 5000);
	console.log('hello');
	this.addEventListener('')
});
document.getElementById('buyBtn2').addEventListener('click', function(){
    // document.getElementById('login-container').style.display = 'block';
	document.getElementById('mustBeLogged').style.display = 'block';
	document.getElementById('mustBeLogged').scrollIntoView();
	setTimeout(function(){document.getElementById('mustBeLogged').style.display = "none"; 
	document.getElementById('navbar').scrollIntoView()}, 5000);
	console.log('hello');
}); 
document.getElementById('buyBtn3').addEventListener('click', function(){
    // document.getElementById('login-container').style.display = 'block';
	document.getElementById('mustBeLogged').style.display = 'block';
	document.getElementById('mustBeLogged').scrollIntoView();
	setTimeout(function(){document.getElementById('mustBeLogged').style.display = "none"; 
	document.getElementById('navbar').scrollIntoView()}, 5000);
	console.log('hello');
}); 

// function saveUser(){
// 		localStorage.setItem = username;
// 	}

document.getElementById('loginBtn').addEventListener('click', function() {
	var username = document.getElementById('userName').value
	var password = document.getElementById('userPassword').value

	localStorage.setItem("setUsername", username);

	for(var i = 0; i < users.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == users[i].username && password == users[i].password) {
            loggedIn = true;
			console.log(username + " is logged in!!!");
            console.log(loggedIn); 
            if(loggedIn == true){
                window.location = 'home.html';
                }
			// stop the function if this is found to be true
			return;
		}else if(userName != users[i].name || userPassword != users[i].password){
                    if(loggedIn == false){
                        document.getElementById('wrongLog').style.display = "block";
                        setTimeout(function(){document.getElementById('wrongLog').style.display = "none"}, 3000);
                    }
		}else{} 
	console.log("incorrect username or password")
}})
