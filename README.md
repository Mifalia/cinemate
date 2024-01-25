# How to set up the project ?

1. Clone the project repo and install dependencies

```bash
git clone  https://github.com/Mifalia/cinemate.git
```

```bash
cd  cinemate
```

```bash
npm  install
```

2. Create a .env file based on .env.example on your project root

```text
# .env
REACT_APP_API_KEY=your_api_key
REACT_APP_GITHUB_REPOSITORY=https://github.com/Mifalia/cinemate
```

3. Sign up to [TheMovieDB](https://developer.themoviedb.org/docs/getting-started) and follow the steps to get your api key

4. Copy the generated api_key and paste it into .env at REACT_APP_API_KEY

5. Start your local server

```bash
npm  start
```

# Getting Started with Create React App

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
