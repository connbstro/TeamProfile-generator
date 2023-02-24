const fs = require("fs");

let profileCards = [];

// Generate Manager layout //
const generateManager = (manager) => {
  return `
    <div class="bg-gray-100 rounded drop-shadow-[5px_5px_4px_rgba(76,76,76)] border-2 border-black basis-1/4">
      <div class="bg-bright-purple rounded-t">
        <h2 class="text-white text-2xl font-normal px-4 pt-3">${manager.name}</h2>
        <h3 class="text-white text-xl font-normal pl-4 pb-3">Manager</h3>
      </div>
      <div class="text-sm">
        <div class="bg-white mx-4 mt-6 px-4 py-2 border-2 border-solid border-gray-200 rounded-t">
          <p>ID:
            <span>${manager.id}</span>
          </p>
        </div>
        <div class="bg-white mx-4 px-4 py-2 border-x-2 border-solid border-gray-200">
          <p>Email:
            <span class="text-bright-blue"><a href="mailto:${manager.email}">${manager.email}</a></span>
          </p>
        </div>
        <div class="bg-white mx-4 mb-6 px-4 py-2 border-2 border-solid border-gray-200 rounded-b">
          <p>Office Number:
            <span>${manager.officeNumber}</span>
          </p>
        </div>
      </div>
    </div>
    `;
};

// Generate Engineer layout //
const generateEngineer = (engineer) => {
  return `
    <div class="bg-gray-100 rounded drop-shadow-[5px_5px_6px_rgba(76,76,76)] border-2 border-black basis-1/4">
      <div class="bg-bright-blue rounded-t">
        <h2 class="text-white text-2xl font-normal px-4 pt-3">${engineer.name}</h2>
        <h3 class="text-white text-xl font-normal pl-4 pb-3">Engineer</h3>
      </div>
      <div class="text-sm">
        <div class="bg-white mx-4 mt-6 px-4 py-2 border-2 border-solid border-gray-200 rounded-t">
          <p>ID:
            <span>${engineer.id}</span>
          </p>
        </div>
        <div class="bg-white mx-4 px-4 py-2 border-x-2 border-solid border-gray-200">
          <p>Email:
            <span class="text-bright-blue"><a href="mailto:${engineer.email}">${engineer.email}</a></span>
          </p>
        </div>
        <div class="bg-white mx-4 mb-6 px-4 py-2 border-2 border-solid border-gray-200 rounded-b">
          <p>GitHub:
            <span class="text-bright-blue"><a href="https://www.github.com/${engineer.github}" target="_blank">${engineer.github}</a></span>
          </p>
        </div>
      </div>
    </div>
    `;
};

// Generate Intern layout //
const generateIntern = (intern) => {
  return `
    <div class="bg-gray-100 rounded drop-shadow-[5px_5px_6px_rgba(76,76,76)] border-2 border-black basis-1/4">
      <div class="bg-bright-green rounded-t">
        <h2 class="text-white text-2xl font-normal px-4 pt-3">${intern.name}</h2>
        <h3 class="text-white text-xl font-normal pl-4 pb-3">Intern</h3>
      </div>
      <div class="text-sm">
        <div class="bg-white mx-4 mt-6 px-4 py-2 border-2 border-solid border-gray-200 rounded-t">
          <p>ID:
            <span>${intern.id}</span>
          </p>
        </div>
        <div class="bg-white mx-4 px-4 py-2 border-x-2 border-solid border-gray-200">
          <p>Email:
            <span class="text-bright-blue"><a href="mailto:${intern.email}">${intern.email}</a></span>
          </p>
        </div>
        <div class="bg-white mx-4 mb-6 px-4 py-2 border-2 border-solid border-gray-200 rounded-b">
          <p>School:
            <span>${intern.school}</span>
          </p>
        </div>
      </div>
    </div>
    `;
};

// User input paramater changes to data //
const generateTeam = (data) => {
  for (let i = 0; i < data.length; i++)
    switch (data[i].role) {
      case "Manager":
        profileCards.push(generateManager(data[i]));
        break;

      case "Engineer":
        profileCards.push(generateEngineer(data[i]));
        break;

      case "Intern":
        profileCards.push(generateIntern(data[i]));
        break;

      default:
        break;
    }
  profileCards = profileCards.join(``);
  return profileCards;
};

// Dynamically generate HTML elements //
module.exports = (allInput) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <!-- Tailwind Styling -->
      <script src="https://cdn.tailwindcss.com"></script>
      <script>
        tailwind.config = {
          theme: {
            extend: {
              colors: {
                'coral': '#EF818A',
                'bright-blue': '#48A0FE',
                'bright-purple': '#B664D1',
                'bright-green': '#67E0B9',
              }
            }
          }
        }
      </script>
      <title>Team Profile Generator</title>
    </head>
    <body>
      <header>
        <div class="text-center bg-coral text-white p-8 text-4xl">
          <p>My Team</p>
        </div>
      </header>
      <main class="mt-14 mx-40 flex flex-row flex-wrap gap-8 justify-center">
        ${generateTeam(allInput)}
      </main>
    </body>
    </html>
    `;
};
