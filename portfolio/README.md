# My Portfolio

This is my personal portfolio website, built using **Next.js**.

## Overview

This portfolio showcases my skills, projects, and provides a way for visitors to get in touch. It's built with a focus on performance and a clean, user-friendly experience.

## Technologies Used

* **Next.js:** A React framework for building server-rendered and statically generated applications.
* **React:** A JavaScript library for building user interfaces.
* **[Add any other relevant technologies here, e.g., Tailwind CSS, Styled Components, Framer Motion, etc.]**

## Folder Structure

PORTFOLIO/
├── .next/             # Next.js build output and cache
├── app/                # New App Router directory (Next.js 13+)
│   └── (main)/         # Route group (can be named as per your layout)
│       └── projects/   # Projects page route
│           └── page.tsx
│   ├── globals.css     # Global CSS styles
│   ├── layout.tsx      # Root layout for the application
│   └── page.tsx        # Home page route
├── components/         # Reusable UI components
│   └── main/
│       ├── AnimatedPin.tsx
│       ├── ContactForm.tsx
│       ├── Footer.tsx
│       ├── HeroBackground.tsx
│       ├── HeroSection.tsx
│       ├── HeroSectionContent.tsx
│       ├── Navbar.tsx
│       ├── NavbarHome.tsx
│       ├── Projects.tsx
│       ├── SocialLinks.tsx
│       └── TechStack.tsx
├── public/             # Static assets (images, fonts, etc.)
└── ... (other configuration files like package.json, etc.)


## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone ...
    cd portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

## Build and Deployment

To build the production-ready application:

```bash
npm run build
# or
yarn build
# or
pnpm build
You can then deploy the generated .next folder to your preferred hosting provider (e.g., Vercel, Netlify).

Learn More
To learn more about Next.js, take a look at the official Next.js documentation.

Author
[Aryan Gupta] (aaryyann)
