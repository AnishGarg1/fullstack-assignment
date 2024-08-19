# Help Center

Help Center is a web application designed to manage and display a collection of help cards. 

## Table of Contents

- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

- Node.js and npm (or Yarn) installed on your machine.
- Git installed on your machine.

## Setup Instructions

Follow these steps to set up the project locally:

### 1. Clone the Repository

Clone the repository from GitHub:

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2. Backend Setup

Navigate to the `backend` directory and install the necessary dependencies:

```bash
cd backend
npm install
```

- **Configure Environment Variables**: Create a `.env` file in the `backend` directory with the following variables:

```bash
PORT = 4000
MONGODB_URL = "mongodb://127.0.0.1/HelpCenter"
```

- **Start the Backend Server**: Run the backend server:

```bash
npm run dev
```

The backend server will typically run on `http://localhost:4000`.

### 3. Frontend Setup

Navigate to the `frontend` directory and install the necessary dependencies:

```bash
cd ../frontend
npm install
```

- **Configure Environment Variables**: Create a `.env` file in the `frontend` directory. Ensure that the `REACT_APP_BASE_URL` points to the backend server URL (e.g., `http://localhost:4000`).

- **Start the Frontend Server**: Run the frontend development server:

```bash
npm run start
```

The frontend development server will typically run on `http://localhost:3000` or another port specified in your `.env` file.

## Usage

Once both the frontend and backend servers are running, you can access the frontend application in your browser at `http://localhost:3000`. The frontend will communicate with the backend server running at `http://localhost:4000`.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```