# WebdriverIO Mocha Project
==========================

## Overview
--------

This project uses WebdriverIO and Mocha to automate end-to-end tests for a web application.

## Features
--------

* Automated tests for login, product sorting, cart functionality, and checkout process
* Uses WebdriverIO for browser automation and Mocha for test framework
* Supports Chrome browser

## Getting Started
---------------

### Prerequisites

* Node.js installed on your machine
* WebdriverIO and Mocha installed using npm

### Installation

1. Clone the repository: `git clone https://github.com/your-username/your-repo-name.git`
2. Install dependencies: `npm install`
3. Update the `wdio.conf.js` file with your desired test settings

### Running Tests

1. Run the tests using the command: `npm run wdio`
2. View the test results in the console or in the Allure report

## Test Scenarios
----------------

### Login

* Tests login with valid and invalid credentials
* Verifies error messages for invalid credentials

### Product Sorting

* Tests sorting products by price (high to low and low to high)
* Verifies product prices are displayed correctly

### Cart Functionality

* Tests adding and removing products from cart
* Verifies cart icon counter updates correctly

### Checkout Process

* Tests complete checkout process with valid and invalid data
* Verifies error messages for invalid data

## Page Objects
-------------

* `login.page.js`: contains selectors and methods for login page
* `product.page.js`: contains selectors and methods for product page
* `cart.page.js`: contains selectors and methods for cart page

## Data
-----

* `testData.json`: contains test data for checkout process

## Contributing
------------

Contributions are welcome! Please submit a pull request with your changes.

## License
-------

This project is licensed under the MIT License.