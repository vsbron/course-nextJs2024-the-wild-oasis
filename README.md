# The Wild Oasis client-side web app

Client-side web app for The Wild Oasis project which allows to choose a cabin and book it for a period of stay.

## Features

- Cabins page that lists all available cabins;
- Individual Cabin page with more details and option to reserve the cabin;
- Guest area with its separate side navigation;
- Guest area page is only accessible by authorized users;
- Authorization can be done only with Google Account;
- Guast area allows user to see his reservation and customize his profile;
- Reservation page lists active reservations with the option to delete the upcoming ones;
- About us page with the more info on the service and company;

## Details

- Built using React and NEXT.js;
- Cabins page includes a filter that works by passing the state from Client to Server component using URL and Search params;
- Dynamic Routes (with generated static params) are used for individual cabin pages;
- account route is protected by Auth.js library, it can be accessed only after logging in;
- After logging in, if it's a new user - it gets added to the Database. Session gets the guesId number for further use;
- Log in and Sign Out are both handled by Auth.js and server actions;
- Uses Image component for images optmizations;

## Live version

https://vsbron-course-nextjs2024-wild-oasis.netlify.app/
