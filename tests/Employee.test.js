const Employee = require("../lib/employee");

describe("Employee", () => {

    describe("Initialization", () => {
        it("should return an object containing all associated properties when called with the 'new' keyword", () => {
            
            const type = "employee"
            const name = "bob"
            const id = "22"
            const email = "bob@aol.com"
            const field3 = "fieldValue"
            
            const obj = new Employee(type, name, id, email, field3);

            expect("type" in obj).toEqual(true);
            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("field3" in obj).toEqual(true);

        });
    });

    describe("Field Returns", () => {
        it("should return the appropriate field values when each getItem method is called", () => {
            
            const type = "employee"
            const name = "bob"
            const id = "22"
            const email = "bob@aol.com"
            const field3 = "fieldValue"
            
            const obj = new Employee(type, name, id, email, field3);

            expect(obj.getName()).toEqual("bob");
            expect(obj.getId()).toEqual("22");
            expect(obj.getEmail()).toEqual("bob@aol.com");
            expect(obj.getRole()).toEqual("Employee");

        });
    });

});
