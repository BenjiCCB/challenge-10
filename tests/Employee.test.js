const Employee = require("../lib/employee");

describe("Employee", () => {

    describe("Initialization", () => {
        it("should return an object containing all associated properties when called with the 'new' keyword", () => {
            const obj = new Employee(type, name, id, email, field3);

            expect("type" in obj).toEqual(true);
        });
    });

});
