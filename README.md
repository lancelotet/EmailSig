# EmailSig - Email Signature Generator

A simple and easy-to-use email signature generator built with React, Vite, and Tailwind CSS.

## Features

- **Live Preview:** See your email signature update in real-time as you type.
- **Customizable Fields:** Personalize your signature with fields for your name, title, phone number, email, social media links, location, and a profile image.
- **Multiple Export Options:**
    - **Copy HTML:** Copies the raw HTML of the signature to your clipboard, ready to be pasted into your email client's signature settings.
    - **Download HTML:** Download the signature as an `.html` file.
    - **Export as PNG:** Download a PNG image of your signature, perfect for use in platforms that support image signatures.

## Running Locally

To run this project on your local machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/lancelotet/emailsig-vite.git
    cd emailsig-vite
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  Open your browser and navigate to the URL provided by Vite (usually `http://localhost:5173`).

## Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [html2canvas](https://html2canvas.hertzen.com/)
