# The Wild Oasis client-side web app

Client-side web app for The Wild Oasis project which allows to choose a cabin and book it for a period of stay.
The app data is syncronized with The Wild Oasis interal SPA for managing guests, cabins and bookings.

## Features

### General

- Index page that simply displays the main title and some navigation buttons;
- Cabins page that lists the available cabins with the option of filtering them;
- Cabin page contains some basic info about the cabin as well as the option to reserve it for a stay;
- Reservation is done by selecting available dates and selecting the number of guests;
- About us page with the more info on the service and company;

### Account

- Entering the Guest Area area requires authorization with Google Account;
- Guest area main page lists welcome message and additional side navigation;
- Reservations page shows all reservations made by the user, past and upcoming;
- Upcoming reservations can be deleted or edited out;
- When editing a reservation guest can update the amount of guests and add additional comment for the reservation;
- Guest profile page allows gues to update some of his data in the app;

## Details

- Built using React and NEXT.js;
- Styles are handled with Tailwind CSS;
- Cabins page includes a filter that works by passing the state from Client to Server component using URL and Search params;
- Dynamic Routes (with generated static params) are used for individual cabin pages;
- Account route is protected by Auth.js library, it can be accessed only after logging in with Google Account;
- After logging in, if it's a new user - it gets added to the Database. Session gets the guesId number for further use;
- Log in and Sign Out are both handled by Auth.js and server actions;
- When making/updating a reservation or user details, forms send the data to the database using Server Actions;
- Forms status are displayed using useFormStatus and useTransition hooks;
- Uses Image component for images optmizations;
- Responsive design supporting mobile devices with a width of at least 360px;

## Live version

https://vsbron-course-nextjs2024-wild-oasis.vercel.app/
