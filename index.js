async function callApi(){
  const res =await fetch("http://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  
  console.log(users);
}

callApi();
