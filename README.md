## Introduction

The solution is developed using :
-	TypeScript, React, Redux
-	UI: Modal box from React Bootstrap
-	Two example test cases using Jest


## Use of SOLID principles

 ### Single Responsibility Principle:
-	Every component has one responsibility
o	Example: Image component shows the single individual markers on the map
o	MapBrowser shows the background or the Map on specific positions on specific positions
o	This keeps one component small in code size and follows the SOLID principle and makes it easier for other programmers to follow about the responsibility of the Component and provides separation of concerns.

 ### Open Closed Principle:
-	Used in the Modal box: we could easy add more properties
Interface Segration Principle
-	IPoint describes X, Y co-ordinates
-	IPointStyle extends IPoint and adds Style to points
Using TypeScript also has advantages as it has built in support for SOLID principles

 ### Future Developmenta
-	This project has taken into account of the MapBrowser growing into more than one Background image. The implementation would need only minor code change by iterating an example json file provided in the >data directory (map-images.json) which would contain the URL to the image and the position to insert it inside the App.ts.
-	Small and Cohesive interfaces used which should enable for easy implementation for new Components by extending
-	As Single Responsibility Principle has been followed, writing test cases in future would be very easy.
-	Room for Improvement
o	Loading of the JSON file => Async loading



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

