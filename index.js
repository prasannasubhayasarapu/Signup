function signup(username) {
    let users=["alice", "bob", "charlie"];    if (users.includes(username)) {
        return "User Already Registered, Please Login";
    } else {
        users.push(username);
        return "Signup Successful, Please Login";
    }
}