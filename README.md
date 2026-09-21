# Tuga's App Login Portal

A responsive login UI built with React, Vite, TypeScript, and Material UI.

## Live Demo

[View the application](https://login-authentication-portal.web.app/)

## Features

- Responsive Figma-based login interface
- Email and password validation
- Firebase Google Authentication
- Access-token page after Google sign-in
- Firebase Hosting deployment

## Tech Stack

- React + Vite + TypeScript
- Material UI
- Firebase Authentication
- Firebase Hosting
- React Router

## Project Structure

````text
src/
├── assets/
│   └── login/
├── components/
│   └── login/
│       ├── LoginField.tsx
│       ├── LoginIllustration.tsx
│       └── SocialLoginButton.tsx
├── config/
│   └── firebase.ts
├── pages/
│   ├── AccessTokenPage.tsx
│   └── LoginPage.tsx
├── App.tsx
├── main.tsx
└── theme.ts

## Run Locally

```bash
npm install
npm run dev
````
