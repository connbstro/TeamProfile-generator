const Employee = require("../lib/Employee");
const employee = new Employee("Connor Stroh", "001", "connbstro@gmail.com");

// Employee Object //
test("creates employee object", () => {
  expect(employee.name).toBe("Connor Stroh");
  expect(employee.id).toBe("001");
  expect(employee.email).toBe("connbstro@gmail.com");
});

// Test Name //
test("check if getName() returns name", () => {
  expect(employee.getName()).toEqual("Connor Stroh");
});

// Test ID //
test("check if getId() returns ID", () => {
  expect(employee.getId()).toEqual("001");
});

// Test Email //
test("check if getEmail() returns email address", () => {
  expect(employee.getEmail()).toEqual("connbstro@gmail.com");
});

// Test Role //
test("check if getRole() returns role", () => {
  expect(employee.getRole()).toEqual("Employee");
});
