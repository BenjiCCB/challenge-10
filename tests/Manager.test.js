const Manager = require("../lib/manager");

describe("Manager", () => {

    describe("Initialization", () => {
        it("should return an object containing all associated properties when called with the 'new' keyword", () => {
            
            const name = "bob"
            const id = "22"
            const email = "bob@aol.com"
            const office = "h1"
            
            const obj = new Manager(name, id, email, office);

            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("office" in obj).toEqual(true);

        });
    });

    describe("Field Returns", () => {
        it("should return the appropriate field values when each getItem method is called", () => {
            
            const name = "bob"
            const id = "22"
            const email = "bob@aol.com"
            const office = "h1"
            
            const obj = new Manager(name, id, email, office);

            expect(obj.getOffice()).toEqual("h1");
            expect(obj.getRole()).toEqual("Manager");

        });
    });

});
