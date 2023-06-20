
let ulBox = document.getElementById('user_list');

const getUserData = async () => {
  try {
    const result = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await result.json();
    
    for (let i = 0; i < data.length; i++) {
      const newDiv = document.createElement('div');
      newDiv.setAttribute("class", "user_box");
      
      const li = document.createElement('li');
      let some = data[i];
      li.textContent = "username : " + some.username ;
      
      ulBox.appendChild(li);
    }
  } catch (error) {
    console.log(error, 'error');
  }
};

getUserData();
