To get started with the application, follow these steps:

Clone the Repository

bash
Copy code
git clone <repository-url>
cd <repository-directory>
Install Dependencies

Ensure you have Node.js installed. Then, install the necessary packages:

bash
Copy code
npm install
Start the Development Server

Start the application in development mode:

bash
Copy code
npm start
This will launch the application in your default web browser at http://localhost:3000.

Project Structure
src/: Main source directory
features/itemSlice.js: Redux slice for managing items and pagination.
components/: Contains React components
Item.js: Represents a single item.
ItemList.js: Displays the list of paginated and filtered items.
SearchBar.js: Input field for filtering items.
store.js: Configures the Redux store.
App.js: Main application component.
index.js: Entry point of the application, includes Redux provider.
Pagination and Filtering
Filtering: The SearchBar component allows users to filter items based on a search term. Filtering is handled by the Redux slice and updates the list of filtered items.

Pagination: The ItemList component handles pagination. It calculates the number of pages based on the number of filtered items and allows navigation between pages.

Running the Application
Install Dependencies

Run npm install to install all the necessary packages.

Start the Development Server

Run npm start to start the application in development mode. Open http://localhost:3000 in your web browser to view the application.

