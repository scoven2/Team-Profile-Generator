const Supervisor = require("../lib/Supervisor");
const Staff = require("../lib/Staff");

test("Able to enter years of experience as a construct argument", () => {
    const testValue = 50;
    const e = new Supervisor("Pooh", 1, "test@test.com", testValue);
    expect(e.yearsExperience).toBe(testValue);
});

test('getPosition() returns Supervisor', () => {
    const testValue = "Supervisor";
    const e = new Supervisor("Pooh", 1, "test@test.com", 50);
    expect(e.getPosition()).toBe(testValue);
});

test("Able to retreive years experience with getExperience()", () => {
    const testValue = 50;
    const e = new Supervisor("Pooh", 1, "test@test.com", testValue);
    expect(e.getYearsExperience()).toBe(testValue);
});