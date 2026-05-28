# Script Documentation 

## Overview 
- Commented code can be found: Code > Js > script.js
- The portfolio website includes a JavaScript script that does two things that improve user experience and provide interactive functionality.
- In the top middle of the home page, a greeting is displayed - either "Good Morning, Good Afternoon, or Good Night." This changes depending on the time of day the user accesses the site.
- In the top right of the page, a light/dark mode button is present, allowing users to choose between a theme by clicking on it.

# Greeting

## Purpose 
- Create a more interactive user experience
- Dynamically update website based on time of day

## Script Explanation 
- The script first selects the HTML element with the ID:
- ```bash
  greeting
- using:
- ```js
  document.getElementById()
- The current hour is obtained using:
- ```js
  new Date().getHours()
- This gets the current system time from the users device
- Conditional if statements are used to decide which greeting should be used
    - Before 1200 > "Good Morning!"
    - Before 1800 > "Good Afternoon!"
    - Otherwise > "Good Evening!"
- The selected greeing is then displayed using:
- ```js
  innerText

## Verifiable Output 
- The greeting can be seen and verified on the homepage
- If it's between 0000-1200, it should say good morning, between 1200-1800, good afternoon, and between 1800-0000, good night.
- If this site is being accessed as one of those times change, reloading the page will update it.

# Dark / Light Mode Toggle 

## Purpose 
- Switches between light and dark mode at user request
- Saves selected theme across all pages until changed
- Allows user to personalise their experience

## Script Explanation
- The script first selects the theme toggle button from the webpage using:
- ```js
  document.getElementById("theme-toggle")
- An event listener is attached so it can detect when a user clicks it.
- When clicked, this command is used:
- ```js
  document.body.classList.toggle("light-mode);
- This either adds or removes the light-mode CSS class from the website body, changing the appearance.
- The script also uses:
- ```js
  localStorage.setItem()
- This saves the users selected theme across the different pages of the site

## Verifiable Output 
- The script functionality can be tested on the website
- Users can:
    - Click on the theme toggle button
    - Switch between light and dark mode
    - Navigate between pages, keeping the same theme

