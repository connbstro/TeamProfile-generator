const Intern = require("../lib/Intern");
const intern = new Intern("Adam Devine", "004", "adam@gmail.com", "U of M");

// Intern Object //
test("creates Intern object", () => {
  expect(intern.name).toBe("Adam Devine");
  expect(intern.id).toBe("004");
  expect(intern.email).toBe("adam@gmail.com");
  expect(intern.school).toBe("U of M");
});

// Test School //
test("check if getSchool() returns school", () => {
  expect(intern.getSchool()).toEqual("U of M");
});

// Test Role //
test("check if getRole() returns role", () => {
  expect(intern.getRole()).toEqual("Intern");
});
