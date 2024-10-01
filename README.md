# Patient Admin Searc PatientAdministrationSystem.App
This is the frontend for the Patient Administration System, built using React and Vite. It provides a user-friendly interface to view, search, and manage patient information.
Technologies Used
•	React: A JavaScript library for building user interfaces.
•	TypeScript: A typed superset of JavaScript for improved code quality.
•	Vite: A build tool for faster development.
•	Axios: A promise-based HTTP client for API requests.
•	Tailwind CSS: A utility-first CSS framework for styling.
•	React Router: For client-side routing.
Setup and Installation
Prerequisites
•	Ensure you have Node.js and npm installed. You can download them from Node.js.
Installation
1.	Clone the Repository:
git clone https://github.com/your-username/PatientAdministrationSystem.App.git
cd PatientAdministrationSystem.App
2.	Install Dependencies:
npm install
3.	Start the Development Server:
npm run dev
The frontend will run at http://localhost:5173.
Available Scripts
•	npm run dev: Starts the development server.
•	npm run build: Builds the application for production.
•	npm run preview: Serves the production build locally.
•	npm run lint: Runs the linter to check code style and quality.
API Integration
The frontend communicates with the backend API endpoints. By default, it connects to http://localhost:5272/api. You can change this URL in src/api/apiClient.ts.
Project Structure
/src
  /components   # Reusable React components (e.g., PatientList, SearchBar).
  /pages        # Main application pages (e.g., HomePage, PatientListPage).
  /api          # API service functions for HTTP requests to the backend.
/types          # TypeScript types and interfaces.
App.tsx         # Main application component.
/main.tsx       # Entry point of the React application.

Github Link :https://github.com/Boulaower/PatientAdministrationSystem.App.git


 



