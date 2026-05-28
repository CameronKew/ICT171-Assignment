## Installing Certbot 
- To install Certbot:
- ```bash
  sudo apt update
- ```bash
  sudo apt install certbot python3-certbot-nginx -y
- These will allow SSL certificates to be generated and automatically configured within NGINX

## Configure Certbot 
- Run:
- ```bash
  sudo certbot --nginx
- Certbot will ask for:
  - Your email
  - To accept terms of service (Type Y)
  - If you want to share your email (Type Y or N based on preference)
- It will ask you to select a domain. In this case, it will have two options:
- Type 1,2 to select both domains - this applied SSL to both

## Test HTTPS
- Open browser and type:
- ```text
  https://YOUR_DOMAIN
  
- Example:
- ```text
  https://www.kewportfolio.online
  
- You should see your website appear and now be secure

## Test Certificate Renewal 
- To check the automatic renewal of the certificate:
- ```bash
  sudo certbot renew --dry-run


  
