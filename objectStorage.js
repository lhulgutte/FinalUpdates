//Get All Value
let submitBtn = document.getElementById('submit1');
let form = document.getElementById('form');

let users=[];

//Now Start SendBtn
document.getElementById("submit1").addEventListener('click',(e) =>{
    $("#result").empty();
    e.preventDefault();
   
    let name = document.getElementById('username');
    let email = document.getElementById('useremail');

    if(name && email){
    let obj={
        name:name.value,
        email:email.value
    };

    users.push(obj);
}

    users.forEach(obj =>{
        let res =`
        <tr>
            <td>${obj.name}</td>
            <td>${obj.email}</td>   
                 
        </tr>
        `
        $("#result").append(res);
    
    })

 //Set Value And LocalStorage
    localStorage.setItem('obj',JSON.stringify(users));
   console.log(JSON.stringify(users));
   alert("Your details are stored in localStorage");
 
});
if(localStorage.getItem('obj')){
    //parse to JSON object
    let usersArray=JSON.parse(localStorage.getItem('obj')) || []

    for(let i=0;i<usersArray.length;i++)
    {
        let res =`
            <tr>
                <td>${usersArray[i].name}</td>
                <td>${usersArray[i].email}</td>

            </tr>
            `
            $("#result").append(res);
    }
    
    console.log(usersArray);
    let un=document.getElementById('un').value="";
    let ue=document.getElementById('ue').value="";
   
}

getdata = () =>{
    let data=localStorage.getItem('obj');
    data.JSON.parse(data);
    console.log(data);
    console.log(typeof data);
}

function deleteuser(index){
    console.log(index); 
        
    
}


//myPoint.__proto__ == Point.prototype