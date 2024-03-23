//creating a self running user profile function that can tell about the user details

let profile = (function(){
        let name = "Owais Abdullah"; let age = 25;
    return {
        userProfile: function(){
            return console.log(`Name: ${name}, Age: ${age}`);
            }
    }
})();

profile.userProfile();