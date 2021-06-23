const { test, expect } = require("@jest/globals");
const Engineer = require("../lib/engineer");

test("can set github account", () => {
    const testValue = "GitHubUsername";
    const e = new Engineer("Shia", 1, "test@email.com", testValue);
    expect(e.github).toBe(testValue);
});

test("getRole() returns Engineer", () => {
    const testValue = "Engineer";
    const e = new Engineer("Shia", 1, "test@email.com", "GitHubUsername");
    expect(e.getRole()).toBe(testValue);
});

test("can get github account", () => {
    const testValue = "GitHubUsername";
    const e = new Engineer("Shia", 1, "test@email.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});