const Server = require("../lib/Server");

test("getPosition() returns \"Server\"", () => {
    const testValue = "Server";
    const e = new Server("Pooh", 1, "test@test.com", "DiscordUser");
    expect(e.getPosition()).toBe(testValue);
});

test("Able to enter Discord account using constructor argument", () => {
    const testValue = "DiscordUser";
    const e = new Server("Pooh", 1, "test@test.com", testValue);
    expect(e.discord).toBe(testValue);
});

test("Able to retreive Discord username using getDiscord()", () => {
    const testValue = "DiscordUser";
    const e = new Server("Pooh", 1, "test@test.com", testValue);
    expect(e.getDiscord()).toBe(testValue);
});