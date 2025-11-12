function signup(username) {
    let users=["alice", "bob", "charlie"];    if (users.includes(username)) {
        return "User Already Registered, Please Login";
    } else {
        users.push(username);
        return "Signup Successful, Please Login";
    }
}
//function 2
function login(userName, password) {
  let users = ["alice", "bob", "charlie"]; // Same user list for demo
  const correctPassword = "Emp@123";

  if (!users.includes(userName)) {
    return "User Not Found, Please Signup";
  } else if (password !== correctPassword) {
    return "Wrong Password....";
  } else {
    return "Login Successful...";
  }
}
//function2
function login(userName, password) {
    let users = ["alice", "bob", "charlie"]; 
   if (!users.includes(userName)) {
    return "User Not Found, Please Signup";
  } else if (password !== correctPassword) {
    return "Wrong Password....";
  } else {
    return "Login Successful...";
  }
}