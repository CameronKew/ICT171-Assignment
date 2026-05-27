## Purchasing the Domain Name 
- For this project, NameCheap was chosen to purchase the domain name
- Any site that sells domain names work
- The domain created will be used as the public address for this server

## Obtaining the Azure Public IP
- The public IP is obtained through the azure portal
- Navigation:
- Azure Portal > Virtual Machines > Overview

## Configuring the DNS Records 
- On the domain registrar, navigate to the DNS management panel
- Create:
- Type: A, Host: @, YOUR_PUBLIC_IP
- Type: A, Host: www, YOUR_PUBLIC_IP
- Allow up to 24 hours before this works

## Verifying DNS Configuration 
- The domain can now be tested by visting:
- http://YOUR_DOMAIN_NAME
- An example from this project:
- http://www.kewportfolio.online

## Configuring NGINX for the Domain
- The NGINX configuration file should now be edited so that the server will respond to requests for the domain name
- First:
- ```bash
  sudo nano /etc/nginx/sites-available/default
- The line:
- ```bash
  server_name _;
- Should be replaced with:
- ```bash
  server_name YOUR_DOMAIN www.YOUR_DOMAIN;
- Example:
- ```bash
  server_name kewportfolio.online www.kewportfolio.online;

## Testing NGINX Configuration
- To test the NGINX configuration use:
- ```bash
  sudo nginx -t
- After successful validation, restart the server:
- ```bash
  sudo service nginx restart
- 
