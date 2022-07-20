## GeekGallery Project

-> When user loads, it should show some images.
-> We show images is Grid format.
-> Search result.
-> Clicking on any image should open a popup.
-> that popup with contain the Image in HD, Title UPloaded By, Tags, Date.
-> Cliking outside of the popup will close it. 
-> popup should have close button.
-> Blur the background when popup is opened.
-> Clicking on the image should gave option to like share and download.





-> when I like, it should show red heart.

  1. npm install env-cmd 
  2. Create a file .env.staging and env.production  in root folder of your project.(just outside the src)
  3. In the package.json changes the 
"scripts": {
    "start": "env-cmd -f .env.staging react-scripts start",
    "build": "env-cmd -f .env.production react-scripts build",
    "test": "env-cmd -f .env.staging react-scripts test",
    "eject": " react-scripts eject"
  },

  4. Add the files to gitignore.
  5. -----When you want to use it, process.env.<CONSTANT>

  **NOTE: For React, it should start with REACT_APP_...