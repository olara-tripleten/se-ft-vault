const fs = require('fs');
const path = require('path');

const kahootsDir = path.join(__dirname, 'kahoots');
const kahootFiles = fs.readdirSync(kahootsDir).filter(file => file.endsWith('.json'));

describe('Kahoot JSON files structure', () => {
  kahootFiles.forEach(file => {
    describe(file, () => {
      const filePath = path.join(kahootsDir, file);
      const kahoot = JSON.parse(fs.readFileSync(filePath, 'utf8'));

      test('should have a "questions" array', () => {
        expect(Array.isArray(kahoot.questions)).toBe(true);
      });

      if (kahoot.questions && kahoot.questions.length > 0) {
        describe.each(kahoot.questions.map((q, i) => [i, q]))('question %i', (i, question) => {
          test('title should be a string with less than 120 characters', () => {
            expect(typeof question.title).toBe('string');
            expect(question.title.length).toBeLessThan(120);
          });

          test('answers should be an array', () => {
            expect(Array.isArray(question.answers)).toBe(true);
          });

          if (question.answers && question.answers.length > 0) {
            describe.each(question.answers.map((a, i) => [i, a]))('answer %i', (i, answer) => {
              test('answer should be a string with less than 75 characters', () => {
                expect(typeof answer).toBe('string');
                expect(answer.length).toBeLessThan(75);
              });
            });
          }
        });
      }
    });
  });
});
