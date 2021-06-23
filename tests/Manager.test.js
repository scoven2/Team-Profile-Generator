const Manager = require("../lib/manager");
const Employee = require("../lib/employee");

test("can set office number", () => {
    const testValue = 50;
    const e = new Manager("Shia", 1, "test@email.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

test("getRole() returns Manager", () => {
    const testValue = "Manager";
    const e = new Manager("Shia", 1, "test@email.com", 50);
    expect(e.getRole()).toBe(testValue);
});

test("can get office number", () => {
    const testValue = 50;
    const e = new Manager("Shia", 1, "test@email.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});