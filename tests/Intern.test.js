const Intern = require("../lib/intern");

describe("Intern", () => {

    describe("Initialization", () => {
        it("should return an object containing all associated properties when called with the 'new' keyword", () => {
            
            const name = "bob"
            const id = "22"
            const email = "bob@aol.com"
            const school = "NYU"
            
            const obj = new Intern(name, id, email, school);

            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("school" in obj).toEqual(true);

        });
    });

    describe("Field Returns", () => {
        it("should return the appropriate field values when each getItem method is called", () => {
            
            const name = "bob"
            const id = "22"
            const email = "bob@aol.com"
            const school = "NYU"
            
            const obj = new Intern(name, id, email, school);

            expect(obj.getSchool()).toEqual("NYU");
            expect(obj.getRole()).toEqual("Intern");

        });
    });

});
