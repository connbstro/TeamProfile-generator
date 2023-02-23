const Manager = require("../lib/Manager");
const manager = new Manager("Ron Swanson", "002", "Ron@gmail.com", "Parks01");

// Manager Object //
test("creates manager object", () => {
  expect(manager.name).toBe("Ron Swanson");
  expect(manager.id).toBe("002");
  expect(manager.email).toBe("Ron@gmail.com");
  expect(manager.officeNumber).toBe("Parks01");
});

// Test Office Number //
test("check if getOfficeNumber() returns office number", () => {
  expect(manager.getOfficeNumber()).toEqual("Parks01");
});

// Test Role //
test("check if getRole() returns role", () => {
  expect(manager.getRole()).toEqual("Manager");
});
