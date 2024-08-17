window.onload = ()=>{
    async function bookSession(data){
        
        return response;
    }
    document.getElementById('pupcyf').onclick = ()=>{
        var error = document.getElementById('pupcyg');
        var name = document.getElementById('pupcya').value;
        var phone = document.getElementById('pupcyb').value;
        var email = document.getElementById('pupcyc').value;
        var date = document.getElementById('pupcyd').value;
        var session = document.querySelector('input[name="session"]:checked');
        var comment = document.getElementById('pupcye').value;
        if(name==""){
            error.textContent = "Name field cannot be blank.";
        } else if(phone==""){
            error.textContent = "Phone field cannot be blank";
        } else if(email==""){
            error.textContent = "Email field cannot be blank.";
        } else if(date==""){
            error.textContent = "Date field cannot be blank.";
        } else if(session==null){
            error.textContent = "Session field cannot be blank.";
        } else{
            error.textContent = "&nbsp;";
            var data = {"session":session.id,name,phone,email,date,comment};
            console.log(data);
            fetch("/booking",{
                body: JSON.stringify(data),
                method: "POST",
                headers: {
                    "content-type": "application/json"
                }
            }).then(res => res.json()).then(dat => {
                if(dat.status==200){
                    error.textContent = "SUCCESS! We will be in contact with you shortly!";
                } else {
                    error.textContent = "ERROR: " + dat.error;
                }
            });
        }
    }
}