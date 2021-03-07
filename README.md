## Features

-  React (without jQuery etc.)
-  TypeScript
-  React Hooks
-  Redux
-  Responsive (adjusted to mobile devices)
-  React-router-dom
-  Bootstrap 4
-  Modern, clean, readable layout
-  Authentication

#### 1. Run `npm install`

npm install will install all modules listed as dependencies in [package.json](package.json) file.

#### 2. Run `npm run start`

It will run application in http://localhost:3000

Error: resolve-url-loader: CSS error
source-map information is not available at url() declaration (found orphan CR, try removeCR option)

go into node_modules/resolve-url-loader open index.js file and find var options

now set removeCR to true

removeCR : true,

#### 3. Run `npm run build`

Builds the production version of app and put it into build folder. Now you can use these files to perform real production deployment.
