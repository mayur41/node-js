# Set Up Node.js with MongoDB

## Installation Steps

1. Install the project dependencies:

   ```bash
   npm install
   ```

2. For run the node project

   ```bash
   nodemon server.js
   ```

## Features

1. Retrieve the user role by decoding the JWT to address security issues.
2. During task creation, editing, or deletion, validate the user ID and role to ensure that users cannot edit or delete tasks belonging to other users.
