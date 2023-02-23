const Employee = require("../lib/Employee");
const employee = new Employee("John Doe", "111", "johndoe@email.com");

// Employee Object //
test("creates employee object", () => {
  expect(employee.name).toBe("John Doe");
  expect(employee.id).toBe("111");
  expect(employee.email).toBe("johndoe@email.com");
});

// Test Name //
test("check if getName() returns name", () => {
  expect(employee.getName()).toEqual("John Doe");
});

// Test ID //
test("check if getId() returns ID", () => {
  expect(employee.getId()).toEqual("111");
});

// Test Email //
test("check if getEmail() returns email address", () => {
  expect(employee.getEmail()).toEqual("johndoe@email.com");
});

// Test Role //
test("check if getRole() returns role", () => {
  expect(employee.getRole()).toEqual("Employee");
});
