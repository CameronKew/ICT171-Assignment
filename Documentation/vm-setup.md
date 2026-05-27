## Creating the Azure Virtual Machine 
1. Log in to the Azure Portal 
2. Navigate to Virtual Machines > Create > Azure Virtual Machine
3. Subscription: Use the Azure for Students Option for the Free Credits 
4. Resource Group: Create a name 
5. Virtual Machine Name: Create a name
6. Region: Australia East (Zone 2) 
7. Image: Ubuntu 24.04 LTS
8. Size: Standard B2ats v2 (2 vcpus, 1GiB Memory)
9. Create a new key pair - create a name
10. Allow all inbound ports
11. Anything not mentioned can be left as default
12. Continue to Review + Create
13. When prompted, download and save the key file, as it will be needed to access the server 

## Connecting to the Virtual Machine
- The server is accessed remotely using SSH
- Using command prompt/terminal:
- Use "Cd filename" to navigate to the file that your key is in 
- Enter the command: ssh -i "yourkeyname.pem" yourusername@your_azure_IP
- If a warning message "Unprotected Key File" appears: type chmod 400 your_key_name.pem
- This will allow only you to use the key and grant access to the server 
