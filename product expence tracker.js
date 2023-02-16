let submitbtn=document.getElementById("submit");
let ul=document.getElementById("ullist");
//let h1=document.getElementById("catagory");
let food=document.getElementById("food").value;
let electronics=document.getElementById("Electronics").value;
let skincare=document.getElementById("skincare").value;




submitbtn.addEventListener("click", StoreData);




function StoreData(e){
    e.preventDefault();
   
     let name=document.getElementById("name").value;
     let email=document.getElementById("email").value;
     let catagory1=document.getElementById("catagory").value;
     let bothVal=`${name} - ${email}`;
     let li=document.createElement("li");
     let text=document.createTextNode(bothVal);
   
     let myObj={
         name,
         email,
         catagory1
      }
     
        axios.post(`https://crudcrud.com/api/40e0822d1ccc412f92c74d3102936153/appoiintment2`, myObj)
          .then((response)=>{
            //console.log(response.data.catagory1)
            display(response.data);
          }
          );
}
window.addEventListener("DOMContentLoaded",()=>{
      axios.get(`https://crudcrud.com/api/40e0822d1ccc412f92c74d3102936153/appoiintment2`)
            .then((response)=>{
               for(let i=0;i<response.data.length;i++){
                  display(response.data[i]);
               }
            }); 

})
function display(respons){

    if(respons.catagory1=="food"){
      //console.log(respons.catagory1);
      //let h4=document.createElement("h4");
      let ul=document.createElement("ul");
      let li=document.createElement("li");
      li.textContent = respons.name +" -" + respons.email+"-"+respons.catagory1;
    let deletebtn = document.createElement("input");
    deletebtn.type = "button";
    deletebtn.value = "Delete";
     deletebtn.onclick =()=>{
      
      deleteUser(`${respons._id}`);
    } 
    
    function deleteUser(userId){
         axios.delete(`https://crudcrud.com/api/40e0822d1ccc412f92c74d3102936153/appoiintment2/${userId}`)
              .then((res)=>{
                ul.removeChild(li);
              })
      }
    li.appendChild(deletebtn);


     
    let editbtn = document.createElement("input");
    editbtn.type = "button";
    editbtn.value = "Edit";
    li.appendChild(editbtn);

    editbtn.onclick =()=>{
       
      editUser(`${respons._id}`);

  }

  function editUser(userid){
    axios.delete(`https://crudcrud.com/api/40e0822d1ccc412f92c74d3102936153/appoiintment2/${userid}`)
         .then((res)=>{
           ul.removeChild(li);
          document.getElementById("name").value = respons.name;
          document.getElementById("email").value = respons.email;
          document.getElementById("catagory").value = respons.catagory;
         })
   
  }

      ul.appendChild(li);
      let food=document.getElementById("food1");
      food.appendChild(ul);

 }
  else if(respons.catagory1=="skincare"){
    console.log(respons.catagory1); 
    let ul=document.createElement("ul");
      let li=document.createElement("li");
      li.textContent = respons.name +" -" + respons.email+"-"+respons.catagory1;
    let deletebtn = document.createElement("input");
    deletebtn.type = "button";
    deletebtn.value = "Delete";
     deletebtn.onclick =()=>{
      
      deleteUser(`${respons._id}`);
    } 
    
    function deleteUser(userId){
         axios.delete(`https://crudcrud.com/api/40e0822d1ccc412f92c74d3102936153/appoiintment2/${userId}`)
              .then((res)=>{
                ul.removeChild(li);
              })
      }
    li.appendChild(deletebtn);


     
    let editbtn = document.createElement("input");
    editbtn.type = "button";
    editbtn.value = "Edit";
    li.appendChild(editbtn);

    editbtn.onclick =()=>{
       
      editUser(`${respons._id}`);

  }

  function editUser(userid){
    axios.delete(`https://crudcrud.com/api/40e0822d1ccc412f92c74d3102936153/appoiintment2/${userid}`)
         .then((res)=>{
           ul.removeChild(li);
          document.getElementById("name").value = respons.name;
          document.getElementById("email").value = respons.email;
          document.getElementById("catagory").value = respons.catagory;
         })
   
  }

      ul.appendChild(li);
      let skincare =document.getElementById("skincare1");
      skincare.appendChild(ul);

    }
     else if(respons.catagory1=="electronics"){
      let ul=document.createElement("ul");
      let li=document.createElement("li");
      li.textContent = respons.name +" -" + respons.email+"-"+respons.catagory1;
    let deletebtn = document.createElement("input");
    deletebtn.type = "button";
    deletebtn.value = "Delete";
     deletebtn.onclick =()=>{
      
      deleteUser(`${respons._id}`);
    } 
    
    function deleteUser(userId){
         axios.delete(`https://crudcrud.com/api/40e0822d1ccc412f92c74d3102936153/appoiintment2/${userId}`)
              .then((res)=>{
                ul.removeChild(li);
              })
      }
    li.appendChild(deletebtn);


     
    let editbtn = document.createElement("input");
    editbtn.type = "button";
    editbtn.value = "Edit";
    li.appendChild(editbtn);

    editbtn.onclick =()=>{
       
      editUser(`${respons._id}`);

  }

  function editUser(userid){
    axios.delete(`https://crudcrud.com/api/40e0822d1ccc412f92c74d3102936153/appoiintment2/${userid}`)
         .then((res)=>{
           ul.removeChild(li);
          document.getElementById("name").value = respons.name;
          document.getElementById("email").value = respons.email;
          document.getElementById("catagory").value = respons.catagory;
         })
   
  }

      ul.appendChild(li);
      let electronics =document.getElementById("Electronics1");
      electronics.appendChild(ul);
     }
  }