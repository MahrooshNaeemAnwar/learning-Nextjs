import { auth } from "@/auth";

export default auth((req) => {
  if (!req.auth && req.nextUrl.pathname.startsWith("/protected")) {
    return Response.redirect(new URL("/login", req.nextUrl));
  }
});

export const config = {
  matcher: ["/protected/:path*"]
}