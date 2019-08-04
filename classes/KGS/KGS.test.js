const KGS = require("./KGS");

it("should generate string id", () => {
  expect(KGS.getID()).toEqual(expect.any(String));
});
