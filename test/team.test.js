
const employee = require("../lib/employee");
const manager = require("../lib/manager");
const engineer = require("../lib/engineer");
const intern = require("../lib/intern");

test("employee test", () => {
    const etest = new employee("Frank", 14, "frank@email");

    expect(etest.name).toEqual("Frank");
    expect(etest.id).toEqual(14);
    expect(etest.email).toEqual("frank@email");
})

test("manager test", () => {
    const mtest = new manager("Frank", 14, "frank@email", 3);

    expect(mtest.name).toEqual("Frank");
    expect(mtest.id).toEqual(14);
    expect(mtest.email).toEqual("frank@email");
    expect(mtest.officenumber).toEqual(3);
})

test("engineer test", () => {
    const entest = new manager("Frank", 14, "frank@email", "user");

    expect(entest.name).toEqual("Frank");
    expect(entest.id).toEqual(14);
    expect(entest.email).toEqual("frank@email");
    expect(entest.officenumber).toEqual("user");
})

test("intern test", () => {
    const itest = new manager("Frank", 14, "frank@email", "Clown");

    expect(itest.name).toEqual("Frank");
    expect(itest.id).toEqual(14);
    expect(itest.email).toEqual("frank@email");
    expect(itest.officenumber).toEqual("Clown");
})