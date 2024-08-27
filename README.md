# Aero-Tix: An Online Air Ticket Booking Application

## Project Description

**Aero-Tix** is a feature-rich online air ticket booking application built with modern web technologies. It offers a seamless and intuitive user experience for searching flights, booking tickets, and managing reservations. The application leverages a combination of powerful tools and libraries to ensure a responsive and efficient interface, making the ticket booking process smooth and enjoyable for users.

## Project Features

- **Flight Search & Booking:** 
  - Browse and search for available flights.
  - Book tickets with an intuitive user interface.
- **User Authentication & Profile Management:** 
  - Secure login and registration using JWT.
  - Manage user profiles and booking history.
- **Responsive Design:** 
  - Tailwind CSS ensures a responsive and modern design.
  - Swiper.js provides smooth and interactive carousels for displaying featured deals.
- **State Management:** 
  - Redux and Redux-Persist handle global state and data persistence across sessions.
- **Smooth Scrolling & Animations:**
  - Lenis for smooth scrolling and enhanced user experience.
- **Data Fetching:** 
  - SWR and Axios for efficient data fetching and caching.
- **Utility-First Styling:** 
  - clsx and Class-Variance-Authority for managing dynamic class names and styling.

## Tools and Technologies

- **Next.js:** React framework for server-side rendering and static site generation.
- **TypeScript:** Statically typed JavaScript for better code quality and maintainability.
- **Tailwind CSS:** Utility-first CSS framework for custom designs.
- **Redux & Redux-Persist:** State management and persistence.
- **Axios & SWR:** For data fetching and API requests.
- **Swiper.js:** Touch-friendly slider component for carousels.
- **Lenis:** Smooth scrolling library for improved UX.
- **React-Hot-Toast:** For displaying toast notifications.
- **clsx & Class-Variance-Authority:** Utilities for managing dynamic classes and styling.

## Installation

To set up this project locally, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/kajal-rekha/aero-tix.git
    cd aero-tix
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up environment variables:**
   - Create a `.env.local` file in the root directory and add the necessary environment variables:
     ```plaintext
     NEXT_PUBLIC_API_URL=your_api_url
     NEXT_PUBLIC_JWT_SECRET=your_jwt_secret
     ```

4. **Run the development server:**
    ```bash
    npm run dev
    ```

   The application will be accessible at `http://localhost:3000`.

## Conclusion

**Aero-Tix** combines the latest web development tools to create a dynamic and efficient air ticket booking application. Its use of modern technologies ensures a responsive design, secure user authentication, and smooth user interactions, making it a robust solution for online flight booking needs.

Feel free to explore, contribute, or report any issues you encounter.

