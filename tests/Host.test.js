const Host = require("../lib/Host");

test("Can get days host is unavailable to work with a getUnavailable()", () => {
    const testValue = "UofM";
    const e = new Host("Shia", 1, "test@test.com", testValue);
    expect(e.getUnavailable()).toBe(testValue);
});

test("Able to enter days host is unavailable to work using a constructor", () => {
    const testValue = "UofM";
    const e = new Host("Shia", 1, "test@test.com", testValue);
    expect(e.unavailable).toBe(testValue);
});
