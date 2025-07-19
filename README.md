# React App

A modern React application built with best practices and security in mind.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [Running the Project](#running-the-project)
- [Testing](#testing)
- [Building for Production](#building-for-production)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (version 18.x or higher)
- **npm** (version 9.x or higher) or **yarn** (version 1.22.x or higher)

You can verify your installations by running:
```bash
node --version
npm --version
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:
```bash
npm install
```


## Environment Setup

This project uses environment variables for configuration. Follow these steps to set up your environment:

1. **Copy the environment template:**
```bash
cp .env.template .env
```

2. **Configure your environment variables:**
Open the newly created `.env` file and fill in the required values. Here's what each variable does:

```bash

# Third-party Services
VITE_NYT_API_KEY=78aiusydaiskbaksda
VITE_NYT_API_BASE_URL=https://api.nytimes.com/svc/search/v2/articlesearch.json
```

3. **Important Security Notes:**
   - Never commit `.env` or any environment files containing sensitive data to version control
   - Only use `VITE_` prefix for variables that should be exposed to the client-side code
   - The `.env.template` file should only contain example values or empty placeholders


## Running the Project

Start the development server with hot reload:

```bash
npm run dev
```


The application will open in your browser at `http://localhost:5173`. The page will automatically reload when you make changes to the code.


## Testing

This project includes comprehensive testing setup with Jest and React Testing Library.

### Run All Tests

```bash
npm run test
```


### Run Tests in Watch Mode

```bash
npm run test
```

### Run Tests with Coverage

```bash
npm run test:covergae
```

### Run Tests one time

```bash
npm run test:run
```

### Test Structure

- **Unit Tests:** Test individual components and functions

Tests should be placed alongside the components they test with the naming convention:
- `ComponentName.test.tsx`

## Building for Production

### Standard Production Build

Create an optimized production build:

```bash
npm run build
```

This creates a `build/` directory with optimized static files ready for deployment.

### Safe Build Process

For enhanced security and reliability, follow this safe build process:

1. **Pre-build Checks:**
```bash
npm run build:safe 
```

## Project Structure

```
src/
├── components/         # Reusable UI components
├── views/              # View components
├── hooks/              # Custom React hooks
├── services/           # API calls and external services
├── utils/              # Utility functions
├── styles/             # Global styles and themes
├── test/              # Test utilities and setup
├── types/              # TypeScript type definitions
└── constants/          # Application constants

public/
├── index.html          # HTML template
├── favicon.ico         # Favicon
└── manifest.json       # Web app manifest

.env.template           # Environment variables template
.env             # Your local environment variables (not in git)
package.json           # Dependencies and scripts
README.md             # This file
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Copy and configure your environment variables from `.env.template`
4. Make your changes and add tests
5. Run the test suite: `npm run test`
6. Run the linter: `npm run lint`
7. Commit your changes: `git commit -m 'Add amazing feature'`
8. Push to the branch: `git push origin feature/amazing-feature`
9. Open a Pull Request

### Development Guidelines

- Write tests for new features and bug fixes
- Follow the existing code style and conventions
- Update documentation when necessary
- Ensure all tests pass before submitting a PR
- Never commit environment files with sensitive data

## Troubleshooting

### Common Issues

**Node modules issues:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Port already in use:**
```bash
killall -9 node
npm run dev
```

**Environment variables not loading:**
- Ensure variable names start with `VITE_`
- Restart the development server after changing environment variables
- Check that `.env` is in the project root directory

For more help, check the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).