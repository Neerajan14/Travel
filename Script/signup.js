document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if(email && password){
        window.location.href = "index.html";
    }else{
        alert("Please fill all fields.");
    }
});

document.getElementById("googleLogin").addEventListener("click", function(){
    window.location.href = "index.html";
});