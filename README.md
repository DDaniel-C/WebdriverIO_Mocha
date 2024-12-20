# WebdriverIO Mocha Project

[![Build Status](https://travis-ci.org/your-username/your-repo-name.svg?branch=master)](https://travis-ci.org/your-username/your-repo-name)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [Test Scenarios](#test-scenarios)
- [Page Objects](#page-objects)
- [Data](#data)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project uses WebdriverIO and Mocha to automate end-to-end tests for a web application. The goal is to ensure the application is stable, reliable, and functions as expected.

## Features

- **Automated tests**: Automated tests for login, product sorting, cart functionality, and checkout process
- **Browser automation**: Uses WebdriverIO for browser automation
- **Test framework**: Uses Mocha for test framework
- **Browser support**: Supports Chrome browser, Firefox and Eddge

## Getting Started

### Prerequisites

- Node.js installed on your machine
- WebdriverIO and Mocha installed using npm

### Installation

1. Clone the repository: `git clone https://github.com/your-username/your-repo-name.git`
2. Install dependencies: `npm install`
3. Update the `wdio.conf.js` file with your desired test settings

### Running Tests

1. Run the tests using the command: `npm run wdio`
2. Run the report using the command: `npm generateAllureReport`
The report will automatically open up.

## Test Scenarios

### Login

- **Valid credentials**: Tests login with valid credentials
- **Invalid credentials**: Tests login with invalid credentials
- **Error messages**: Verifies error messages for invalid credentials

### Product Sorting

- **Price sorting**: Tests sorting products by price (high to low and low to high)
- **Product prices**: Verifies product prices are displayed correctly

### Cart Functionality

- **Add to cart**: Tests adding products to cart
- **Remove from cart**: Tests removing products from cart
- **Cart icon counter**: Verifies cart icon counter updates correctly

### Checkout Process

- **Valid data**: Tests complete checkout process with valid data
- **Error messages**: Verifies error messages for lack of data

## Page Objects

- `login.page.js`: contains selectors and methods for login page
- `product.page.js`: contains selectors and methods for product page
- `cart.page.js`: contains selectors and methods for cart page

## Data

- `testData.json`: contains test data for checkout process

## Contributing

Contributions are welcome! Please submit a pull request with your changes.

## License

This project is licensed under the MIT License.

Note: Replace `your-username` and `your-repo-name` with your actual GitHub username and repository name.
