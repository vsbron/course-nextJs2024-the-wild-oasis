// import { NextResponse } from "next/server";

// export function middleware(request) {
//   // Redirects to about page
//   return NextResponse.redirect(new URL("/about", request.url));
// }

// // Setting the routes where middleware will work
// export const config = {
//   matcher: ["/account", "/cabins"],
// };

import { auth } from "@/app/_lib/auth";
export const middleware = auth;

// Setting the route for middleware
export const config = {
  matcher: ["/account"],
};
