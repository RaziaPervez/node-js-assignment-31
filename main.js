//project=31
//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
//1st Method
var usernames = ["Ahmed", "Ahsen", "Sana", "Hasnain"];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var i = 0; i < usernames.length; i++)
        ;
}
console.log(usernames);
// 2nd Method
var usernames1 = [];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var i = 0; i < usernames1.length; i++)
        ;
}
console.log(usernames1);
