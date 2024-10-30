# The Wild Oasis [Client]

**The Wild Oasis [Client]** is a client-side web app for The Wild Oasis project that allows users to choose a cabin and book it for a period of stay. The app data is synchronized with The Wild Oasis internal SPA for managing guests, cabins, and bookings.

## Features

### General

- **Index Page:** Displays the main title and navigation buttons.
- **Cabins Page:** Lists available cabins with filtering options.
- **Cabin Page:** Provides basic information about the cabin and an option to reserve it.
- **Reservation Process:** Users can select available dates and the number of guests.
- **About Us Page:** Offers more information on the service and the company.

### Account

- **Authorization Required:** Entering the Guest Area requires a Google Account.
- **Guest Area Main Page:** Displays a welcome message and additional side navigation.
- **Reservations Page:** Shows all user reservations, including past and upcoming.
- **Reservation Management:** Upcoming reservations can be deleted or edited.
- **Editing Reservations:** Users can update guest counts and add comments.
- **Guest Profile Page:** Allows users to update their personal data.

## Details

- **Technology Stack:** Built using **React**, **NEXT.js**, and **TypeScript**.
- **Styling:** Handled with **Tailwind CSS** for responsive design.
- **Cabins Filtering:** Works by passing state from the Client to the Server component using URL and Search params.
- **Dynamic Routes:** Utilizes generated static params for individual cabin pages.
- **Account Protection:** The account route is secured by the **Auth.js** library, accessible only after logging in with a Google Account.
- **New User Addition:** After logging in, new users are added to the database. The session gets the guestId for further use.
- **Authentication Management:** Log in and Sign Out are handled by **Auth.js** and server actions.
- **Data Submission:** When making or updating a reservation or user details, forms send data to the database using Server Actions.
- **Form Handling:** Form status is displayed using **useFormStatus** and **useTransition** hooks.
- **Image Optimization:** Utilizes the **Image** component for optimized images.
- **Responsive Design:** Supports mobile devices with a minimum width of 360px.

## Live version

https://vsbron-course-nextjs2024-wild-oasis.vercel.app/
