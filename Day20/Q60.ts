let profile = function(){
        let name = "Owais Abdullah"; let age = 25;
    return {
        userProfile: function(){
            return console.log(`Name: ${name}, Age: ${age}`);
            }
    }
}();

profile.userProfile();