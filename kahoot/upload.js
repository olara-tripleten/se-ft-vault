require("dotenv").config();
const playwright = require("playwright");
const KahootManager = require("./kahoot-manager");
const kahoots = require("./constants");

(async () => {
  const browser = await playwright.chromium.launch({ headless: false });
  const page = await browser.newPage();
  const manager = new KahootManager(page);
  const user = {
    email: process.env.EMAIL,
    password: process.env.PASSWORD,
  };
  console.log(user);
  await manager.authenticate(user);

  for (const kahoot of kahoots) {
    console.log("Loading Kahoot: ", kahoot.title);
    await manager.createKahoot(kahoot.title);

    // The first question block is already present, so we just fill it
    if (kahoot.questions.length > 0) {
      console.log("Filling question 1");
      await manager.fillQuestion(kahoot.questions[0]);
    }

    // For subsequent questions, we need to add a new question block first
    for (let i = 1; i < kahoot.questions.length; i++) {
      console.log("Filling question:", i + 1);

      await manager.addQuestion(kahoot.questions[i]);
    }

    await manager.save();
    console.log(`Successfully created Kahoot: ${kahoot.title}`);
  }

  console.log("All kahoots have been created!");
  await browser.close();
})();
