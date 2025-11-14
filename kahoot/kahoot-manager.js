module.exports = class KahootManager {
  constructor(page) {
    this._page = page;
  }
  async authenticate(user) {
    await this._page.goto("https://create.kahoot.it/auth/login");
    if (!user.email || !user.password)
      throw new Error("User should have: { email, password }");

    try {
      // Authentication process
      await this._page
        .getByRole("button", { name: "Reject all cookies" })
        .click({ timeout: 5000 });
    } catch (error) {
      console.log("Cookie banner not found or could not be clicked.");
    }

    await this._page
      .getByRole("textbox", { name: "Username or email" })
      .fill(user.email);
    await this._page
      .getByRole("textbox", { name: "Password" })
      .fill(user.password);
    await this._page.getByRole("button", { name: "Log in" }).click();
    await this._page.waitForNavigation();

    try {
      // Close possible popup
      await this._page
        .locator('#dom iframe[name="ipm-frame"]')
        .contentFrame()
        .getByRole("link", { name: "×" })
        .click({ timeout: 5000 });
    } catch (error) {
      console.log("Popup not found or could not be clicked.");
    }
  }

  async createKahoot(title) {
    await this._page
      .getByRole("button", { name: "Create new content." })
      .click();
    await this._page
      .getByRole("button", { name: "Create new Kahoot." })
      .click();
    await this._page
      .getByRole("button", { name: "Blank canvas Create from" })
      .click();

    // Renaming Kahoot
    await this._page
      .getByRole("button", { name: "Enter kahoot title…" })
      .click();
    await this._page
      .getByRole("textbox", { name: "Kahoot title. 76 characters" })
      .fill(title);
    await this._page.getByRole("button", { name: "Done" }).click();
  }

  async addQuestion(question) {
    console.log("Adding question:", question.title);
    await this._page
      .locator('[data-functional-selector="add-question-button"]')
      .click();
    const questionType =
      question.type === "Quiz"
        ? "Add a new Quiz type question"
        : "Add a new True or false type";
    await this._page.getByRole("button", { name: questionType }).click();
    await this.fillQuestion(question);
  }

  async fillQuestion(question) {
    await this._page
      .getByRole("textbox", { name: "Question title. Click to add" })
      .fill(question.title);

    if (question.type === "Quiz") {
      for (let i = 0; i < question.answers.length; i++) {
        const answer = question.answers[i];
        // The selector might need to be more specific if there are other similar textboxes
        await this._page
          .getByRole("textbox", { name: `Add answer ${i + 1}` })
          .fill(answer);
      }
    }
    // For True/False, the answers are buttons, not textboxes to be filled.

    // Selecting "Correct" Option
    const correctAnswerName = `Toggle answer ${
      question.correctAnswerIndex + 1
    } correct.`;

    console.log(correctAnswerName);
    await this._page
      .getByRole("switch", {
        name: correctAnswerName,
      })
      .click();
  }

  async save() {
    await this._page
      .locator('[data-functional-selector="top-bar__save-button"]')
      .click();
    await this._page
      .locator('[data-functional-selector="dialog-complete-kahoot__finish-button"]')
      .click();
  }
};
