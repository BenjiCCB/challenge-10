const Engineer = require("../lib/engineer");

describe("Engineer", () => {

    describe("Initialization", () => {
        it("should return an object containing all associated properties when called with the 'new' keyword", () => {
            
            const name = "bob"
            const id = "22"
            const email = "bob@aol.com"
            const gitHub = "bobDev"
            
            const obj = new Engineer(name, id, email, gitHub);

            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("gitHub" in obj).toEqual(true);

        });
    });

    describe("Field Returns", () => {
        it("should return the appropriate field values when each getItem method is called", () => {
            
            const name = "bob"
            const id = "22"
            const email = "bob@aol.com"
            const gitHub = "bobDev"
            
            const obj = new Engineer(name, id, email, gitHub);

            expect(obj.getGithub()).toEqual("bobDev");
            expect(obj.getRole()).toEqual("Engineer");

        });
    });

});
