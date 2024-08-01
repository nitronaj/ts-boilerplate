# TypeScript Boilerplate

This is a TypeScript boilerplate project designed to kickstart your development with TypeScript, `ts-node`, and `jest`. It includes a setup for writing and running tests using a Test-Driven Development (TDD) approach.

## Features

- **TypeScript**: Strongly-typed programming with TypeScript.
- **`ts-node`**: Run TypeScript files directly without compiling them first.
- **`jest`**: A testing framework for running unit tests with support for TypeScript.

## Getting Started

### Prerequisites

Ensure you have `Node.js` and `npm` installed. You can download them from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:nitronaj/ts-boilerplate.git
   cd ts-boilerplate
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Project Structure

- **`src/`**: Source files for your project.
- **`tests/` or `src/**/\*.test.ts`**: Test files for your project.
- **`tsconfig.json`**: TypeScript configuration file.
- **`jest.config.js`**: Jest configuration file.

### Running the Project

You can run TypeScript files using `ts-node`:

```bash
npx ts-node src/index.ts
```

### Running Tests

To run tests, use:

```bash
npm test
npm test:watch
npm test -- --testPathPattern=<folder-name> #Jest tests only in a specific folder
```

### Test-Driven Development (TDD) Approach

<img src="https://symflower.com/en/company/blog/2023/how-to-get-started-with-tdd/images/get-started-with-tdd-blogpost-02.png" alt="TDD Cycle Diagram" width="500px" height="500px">

This project follows a Test-Driven Development (TDD) approach. TDD is a software development process where you write tests before writing the actual code. This approach follows a cycle of:

1. **Red**: Write a failing test that defines a function or improvement.
2. **Green**: Write the minimal code necessary to pass the test.
3. **Refactor**: Refactor the code while ensuring all tests still pass.

#### TDD Cycle

1. Write a Test: Write a test that covers a specific piece of functionality.
2. Run the Test and See it Fail: Run the test and see it fail, as the code to implement the functionality does not exist yet.
3. Write the Code: Write the minimal amount of code required to pass the test.
4. Run the Test and See it Pass: Run the test and see it pass.
5. Refactor the Code: Refactor the code to improve its quality and maintainability.

#### Benefits of TDD

- **Improved Design**: Helps design better software by thinking about the requirements and design before writing code.
- **Early Detection of Issues**: Identifies and fixes issues early in the development cycle.
- **Regression Prevention**: Ensures that changes do not break existing functionality by running tests frequently.

### Example

Here is an example of how you might write a test and then implement the code using TDD:

1. **Write a Test**

   Create a new test file `src/example.test.ts`:

   ```typescript
   import { add } from "./example";

   test("adds 1 + 2 to equal 3", () => {
     expect(add(1, 2)).toBe(3);
   });
   ```

   ```typescript
   import { add } from "../src/calculator";

   describe("add", () => {
     it("should add two numbers", () => {
       expect(add(2, 3)).toBe(5);
     });

     it("should handle negative numbers", () => {
       expect(add(-1, 4)).toBe(3);
     });
   });
   ```

2. **Implement the Function**

   Create or modify `src/example.ts`:

   ```typescript
   export function add(a: number, b: number): number {
     return a + b;
   }
   ```

3. **Run the Test**

   Execute `npm test` to run your test. The test should pass if the implementation is correct.

4. **Refactor**

   Improve or refactor your code while ensuring that all tests pass.

## Contributing

Feel free to submit issues, feature requests, or pull requests. Follow the guidelines for contributing to ensure a smooth workflow.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, reach out to [your-email@example.com](mailto:your-email@example.com).
