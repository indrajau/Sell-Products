function addUser(event){
    
        event.preventDefault();
        var appointment = event.target.appointment.value;
        var description = event.target.description.value;
        var category = event.target.category.value;
    
        var obj = {
          appointment,
          description,
          category
        };
        axios
      .post(
        " https://crudcrud.com/api/1365bc0b36a94374b2b26a3a3aa070b3/appoiintment2",
        obj
      )
      .then((res) => {
        console.log(res.data);
      })
      .Catch((err) => console.log(err));
      window.addEventListener("DOMContentLoaded", () => {


axios
      .get(
        "https://crudcrud.com/api/1365bc0b36a94374b2b26a3a3aa070b3"
      )
      .then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          registeredusers(res.data[i]);
        }
      });
      axios.
      delete(
        "https://crudcrud.com/api/1365bc0b36a94374b2b26a3a3aa070b3/appoiintment2/63d7cec007307e03e8c77191"
      )
      .then((res) => {
        console.log(res);
      });
        });
    }
    function registerusers(user) 
      {
        const product = document.getElementById("message");
        const createItems = `<li id='${user.appointment}'>${user.description} - ${user.category}
                                                <button onclick=deleteUser('${user.appointment}')>Delete</button>
                                                <button onclick=editUserDetails('${user.appointment}','${user.description}','${user.category}')>Edit User </button>
                                            </li>
                                            `;
        product.innerHTML += createItems;
      }
    function editUser( appointment,description,category) 
    {
      document.getElementById("appointment").value = appointment;
      document.getElementById("description").value = description;
      document.getElementById("category").value = category;
  
      deleteUser(appointment);
    }
    function deleteUser(appointment) 
    {
      localStorage.removeItem(appointment);
      removeitems(appoinment);
    }
    function removeitems(appointment) {
      const product = document.getElementById("message");
      const child = document.getElementById(appointment);
      product.removeChild(child);
    }