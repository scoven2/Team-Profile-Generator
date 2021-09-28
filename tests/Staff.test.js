const Staff = require("../lib/Staff");

test("able to enter phone number with a constructor argument", () => {
    const testValue = "test@test.com";
    const e = new Staff("Pooh", 1, testValue);
    expect(e.phone).toBe(testValue);
});

test("Can get name utilizing getName()", () => {
    const testValue = "Shia";
    const e = new Staff(testValue);
    expect(e.getName()).toBe(testValue);
});

test("Able to start creating Staff instance", () => {
    const e = new Staff();
    expect(typeof(e)).toBe("object");
});

