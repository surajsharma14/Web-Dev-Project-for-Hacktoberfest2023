# User Registration and Login System

This is a simple user registration and login system, built using HTML, CSS, PHP, and MySQL. It allows users to register, log in, and demonstrates the basic functionality of a web-based user management system.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Database Configuration](#database-configuration)
- [Usage](#usage)
- [Troubleshooting](#troubleshooting)
- [Enhancements](#enhancements)
- [Contributing](#contributing)
- [License](#license)

## Features

- User registration with a username, email, and password.
- Secure password storage using hashing.
- User login with validation.
- Redirection to a welcome page upon successful login.
- Clean and user-friendly interface.
- Easily extendable for additional features.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- A local web server stack (e.g., XAMPP, WAMP, MAMP).
- A code editor (e.g., Visual Studio Code, Sublime Text).

## Getting Started

Follow these steps to clone and run the project on your local server:

1. **Clone the Repository**

    - Open your command-line terminal.
    - Navigate to the directory where you want to store the project.
    - Run the following command to clone the repository:

        ```bash
        git clone https://github.com/your-username/user-registration-login.git
        ```

2. **Configure a Local Web Server**

    - Ensure you have a local web server installed on your system.

3. **Database Setup**

    - Open your database management tool (e.g., PHPMyAdmin).
    - Create a new database named `registration_system`.
    - Inside the `registration_system` database, create a table named `users` with columns:
      - `id` (auto-increment)
      - `username`
      - `email`
      - `password`

4. **Database Configuration**

    - Navigate to the project directory on your local system.
    - Open `register.php` and `login.php` in a code editor.
    - Update the database connection details in these files:
        - `$dbServer`: Set to your database server (e.g., `localhost`).
        - `$dbUsername`: Set to your database username.
        - `$dbPassword`: Set to your database password.
        - `$dbName`: Set to the database name (`registration_system`).

5. **Start Your Local Server**

    - Start your local web server (e.g., Apache in XAMPP).
    - Ensure the server is running, and the document root points to the project directory.

6. **Access the Project**

    - Open a web browser and navigate to the registration and login pages:
      - Registration Page: `http://localhost/user-registration-login/index.html`
      - Login Page: `http://localhost/user-registration-login/login.html`

7. **Testing**

    - Test the registration and login functionalities as described in the README.

8. **Enjoy!**

    - You've successfully cloned and set up the project on your local server. Feel free to explore and customize it further as needed.

## Project Structure

The project directory is organized as follows:

user-registration-login/
│
├── index.html
├── login.html
├── styles.css
├── register.php
├── login.php
├── welcome.html
├── conn.php
└── README.md

- `index.html`: The registration form.
- `login.html`: The login form.
- `styles.css`: CSS styles for the forms.
- `register.php`: Handles user registration.
- `login.php`: Handles user login.
- `welcome.html`: The welcome page after successful login.
- `conn.php`: Database connection script.

## Database Configuration

- Ensure you have a MySQL database set up and running on your local server.
- Create a new database named `registration_system`.
- Inside the `registration_system` database, create a table named `users` with the following columns:
  - `id` (auto-increment)
  - `username`
  - `email`
  - `password`

## Usage

1. Registering a User:
   - Open the registration page (`index.html`).
   - Fill out the registration form with a username, email, and password.
   - Submit the form, and the user's information will be stored in the database.

2. Logging In:
   - Open the login page (`login.html`).
   - Provide your username and password.
   - If the credentials are valid, you'll be redirected to the welcome page (`welcome.html`).

## Troubleshooting

If you encounter any issues or errors, please check the following:

- Ensure your local web server is running.
- Verify the database connection details in `register.php` and `login.php`.
- Make sure the database and table are correctly set up.

## Enhancements

This project serves as a basic user registration and login system. You can enhance it by adding features like email verification, user profile management, password recovery, and more.

## Contributing

Contributions are welcome! Feel free to open issues and pull requests to suggest improvements or report bugs.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
