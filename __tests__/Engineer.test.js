const Engineer = require("../lib/Engineer");
const engineer = new Engineer("Steve Jobs", "003", "job@apple.com", "macJobs");

// Engineer Object //
test("creates engineer object", () => {
  expect(engineer.name).toBe("Steve Jobs");
  expect(engineer.id).toBe("003");
  expect(engineer.email).toBe("job@apple.com");
  expect(engineer.github).toBe("macJobs");
});

// Test gitHub //
test("check if getGithub() returns username", () => {
  expect(engineer.getGithub()).toEqual("macJobs");
});

// Test Role //
test("check if getRole() returns role", () => {
  expect(engineer.getRole()).toEqual("Engineer");
});
