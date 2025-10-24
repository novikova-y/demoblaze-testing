# Demoblaze Cypress Test Automation

This project contains automated tests for [Demoblaze](https://www.demoblaze.com/) website. The focus of the tests is on login functionality and purchasing a laptop using **Cypress** with **JavaScript**.

## Project Scope

**Covered by tests:**

- User login
- Purchase of a laptop

**Out of scope:**

- User registration
- Navigation across the website
- Purchase of other products or multiple products
- Cross-browser testing
- Layout and display on different screen resolutions

During testing, 4 purchase flow bugs were found and are annotated in the test cases (those tests are skipped).

## Project Structure

cypress/e2e/
─ login.cy.js
─ purchaseLaptop.cy.js

## Suggested Improvements

If I were to enhance the project, I would:

- Implement full **Page Object Models** for each section of the application
- Add more tests for **form validation**, especially during order placement
- Verify the displayed **order date** (currently shows incorrect date)
- Add **reporting** (e.g., Allure)
- Set up **CI/CD** with GitHub Actions
- Create a separate **command** for login and form filling
- Add **fixture users** for testing

## How to Run the Project

### Prerequisites

Ensure you have Node.js installed on your system.

– Clone this repository:

`git clone <repository-url>`
`cd <repository-folder>`

– Install dependencies:
`npm install`

– Open Cypress Test Runner:
`npx cypress open`

– Choose the test suit

– Run it!

## AI Tool Usage Disclosure

AI tools were used to assist in formatting and structuring this README only.
