# Frontend Home Assignment
Front-end developer home assignment - July 2024.

# Bono Nonprofit Portfolio Builder

This project is a front-end developer assignment for Bono, built using Next.js. It consists of a flow of three screens using an existing backend API to build a nonprofit portfolio. The project focuses on working with APIs, SEO, server-side rendering, and code quality.

## Features

- **API Interaction**: The project interacts with the Bono API to fetch and display causes.
- **SEO**: The project includes proper meta tags and Open Graph tags.
- **Server-Side Rendering**: The project uses Next.js's server-side rendering capabilities.
- **Responsive Design**: The project is responsive and works well on various screen sizes.

## API

This project uses the Bono API to fetch causes.
- **Endpoint**: `https://dev.api.bono.so/v1`
- **Documentation**: [API Documentation](https://dev.api.bono.so/v1/swagger#/)

## Screens
The project screens are already created in our production system:
https://app.bono.so
The flow is different here!

### 1. Welcome Screen
![Welcome Screen](/screens/01_welcome/Frame.png)

The first screen that the user sees, the design is in the screen folder.
Terms and Conditions and Privacy Policy should link to the marketing site pages.
When clicking 'Let's Start', the user goes to the Causes screen.

### 2. Cause Selection Screen
![Cause Screen](/screens/02_causes/empty.png)

The screen's goal is to let the user select 3 causes and see the details about them.
The user can't select less or more than 3.
To get the causes, use the API endpoint `/v1/charity/causes`. No need for authentication here.
When the user clicks on a cause, details and an image will be shown.
The information is provided by the API.
The mobile design has a scroller option that shows only 2 rows.
There will always be 9 causes from the API.

After the user completes the selection, go to the signup screen.

### 3. Signup Screen
![Signup Screen](/screens/03_signup/iPhone%2013%20mini%20-%20172.png)

Create the same design as the image.
No need to create the Google login functionality, only the design.

When the user submits the form, send it to `/v1/auth/register/anonymous`.
You need to send the selected causes' IDs.
POST payload: 
```json
{
  "email": "string@test.com",
  "firstName": "string",
  "causes": [
    1,
    2,
    3
  ]
}
