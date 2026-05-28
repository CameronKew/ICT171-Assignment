# SSH Authentication Issues
## Problem
- SSH connections initially failed due to public key authentication errors.
- Example:
- ```text
  Permission Denied (publickey)
## Cause
- SSH requires private key files to have restricted permissions for security reasons.
## Solution
- The permissions of the private key file were modified using chmod:
- ```bash
  chmod 400 YOUR_KEY_NAME.pem
- After updating permissions, SSH access works successfully.

# NGINX Default Page Still Appearing 
## Problem 
- The default NGINX landing page continued to display after deploying the website files.
## Cause 
- The default index file has not been removed
## Solution
- The default page can be removed using:
- ```bash
  sudo rm index.html
- NGINX was then restarted:
- ```bash
  sudo service nginx restart

# Website Files Not Loading Correctly 
## Problem 
- The website loads as plain text without any styling or script 
## Cause 
- The CSS and JavaScript files are either:
    - located in the wrong directory
    - incorrectly name
    - referenced using the incorrect path files
## Solution
- The HTML files are updated with the correct references:
- ```js
  <link rel="stylesheet" href="css/style.css"
- ```js
  <script src="js/script.js></script>
