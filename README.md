🎯 This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

A simple next.js application for demonstrating secure authentication using middleware and HttpOnly cookies.

## 📱 Live URL

Project is live on Vercel:

[ 👉 Visit Here ](https://my-dashboard-app-omega.vercel.app)



## ✨ Demo Credentials

```
Email: eve.holt@reqres.in

Password: any password
```

## 💻 ⚙️ Tech Stack
``` Bash 
 * Next.js App Router.
 * Middleware for route protection.
 * HttpOnly cookies.
``` 


## ✅ Verify Secure Authentication

```
1. Open the link with a browser

2. Open Developer Tools:

Press F12 (or Ctrl+Shift+I on Windows/Linux, Cmd+Option+I on Mac)

3. Go to the "Application" tab (in Chrome/Edge) or "Storage" tab (in Firefox)

4. Before logging in:

    👉 Look at Cookies → https://https://my-dashboard-app-omega.vercel.app/
(You should see NO auth-token cookie yet)


    👉 Now login with eve.holt@reqres.in and any password
After logging in:

Look at Cookies → https://https://my-dashboard-app-omega.vercel.app/ (again
You should now see the auth-token cookie!)
```


## 🛠️ 🔧 Future Integration 

```
1. JWT/OAuth authentication.
2. PostgreSQL DBMS and Prisma ORM
```