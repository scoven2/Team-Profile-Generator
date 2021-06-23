const { expect, test } = require("@jest/globals");
const Employee = require("../lib/employee");

test("Can initiate Employee", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("Can set name", () => {
    const name = "Scott";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Can set id", () => {
    const testValue = 50;
    const e = new Employee("Shia", testValue);
    expect(e.id).toBe(testValue);
});

test("Can set email", () => {
    const testValue = "test@email.com";
    const e = new Employee("Shia", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("Can get name", () => {
    const testValue = "Scott";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("Can get id", () => {
    const testValue = 50;
    const e = new Employee("Shia", testValue);
    expect(e.getID()).toBe(testValue);
});

test("Can get email", () => {
    const testValue = "test@email.com";
    const e = new Employee("Shia", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("getRole returns Employee", () => {
    const testValue = "Employee";
    const e = new Employee("Scott", 1, "test@email.com")
    expect(e.getRole()).toBe(testValue);
});