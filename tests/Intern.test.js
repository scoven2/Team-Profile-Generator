const { test, expect } = require("@jest/globals");
const Intern = require("../lib/intern");

test("can set school", () => {
    const testValue = "UofM";
    const e = new Intern("Shia", 1, "test@email.com", testValue);
    expect(e.school).toBe(testValue);
});

test("getRole() returns Intern", () => {
    const testValue = "Intern";
    const e = new Intern("Shia", 1, "test@email.com", "UofM");
    expect(e.getRole()).toBe(testValue);
});

test("can get school", () => {
    const testValue = "UofM";
    const e = new Engineer("Shia", 1, "test@email.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});