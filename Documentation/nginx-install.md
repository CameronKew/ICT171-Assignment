## Installing NGINX
- Now that the VM is setup we need to install NGINX
- To access the VM use the command:
- ```bash
  ssh -i "yourkeyname.pem" yourusername@your_azure_IP
- Next use:
- ```bash
  sudo apt update"
- This will update the apt repositories 
- Finally, use the command:
- ```bash
  sudo apt install nginx-full
- This will install NGINX onto the VM

## Testing the Web Server 
- In the Azure portal, under "servername-ip" the public IP address can be found
- Using a search engine enter the IP address found
- You will see a "Welcome to NGINX" page verifying everything is working correctly 
