# Website Deployment

- All code used to produce the actual website was written in VSCode, this was done to preserve a hard copy.
- Due to issues I faced with pushing straight from VSCode, I manually uploaded all code to my NGINX Server.
- The website is hosted using the default NGINX directory: /var/www/html

## Navigating to the Web Directory
- The command: cd /var/www/html is used to move into the web directory

## Removing the Default NGINX Page
- The default NGINX page is removed before deploying the website files.
- The command: sudo rm index.nginx-debian.html was used while in the /var/www/html directory.
- This removes the default NGINX landing page from the site

## Creating Website Directories 
- Separate folders are created for CSS and JavaScript files to improve the file organisation
- Use the commands:
- sudo mkdir css
- sudo mkdir js

## Creating Website Files 
- The HTML, CSS, and JavaScript files will all be manually created
- All HTML files should be created in /var/www/html
- Each time one of these commands is used, it will open straight into a coding window
- Copy and paste the existing code from VSCode that correlates to the file just created
- To save these files: control x > Y > Enter
- sudo nano index.html
- sudo nano about.html
- sudo nano skills.html
- sudo nano projects.html
- sudo nano contact.html

- For CSS:
- While in /var/www/html > cd css
- This will take you into the css directory created earlier
- Follow the same steps as HTML:
- sudo nano style.css
- copy and paste code from VSCode
- control x > Y > Enter

- For JS:
- While in /var/www/html > cd js
- This will take you into the js directory created earlier
- Follow the same steps as HTML:
- sudo nano script.js
- copy and paste code from VSCode
- control x > Y > Enter

## Restarting NGINX 
- Every time a change is made to any of the code, we must restart the NGINX server
- This is done by:
- Typing the command "cd", this will take you back to the main directory
- Then use the command "sudo service nginx restart"
- This will restart the server and update the changes made

## Testing Website Deployment 
- To test that the website is working:
- Go to a search engine
- Type: http://PUBLIC_IP (the one found on the azure portal)
- This should take you directly to your website
