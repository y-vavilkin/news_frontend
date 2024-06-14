# Client App for "News Site"

- To install the application, you must first clone the repository using the command:
`git clone <url>`

- After that, you need to run the command:
`npm install`

- To run the server application, you need to write the following command:
`npm run dev`

## The main functionality

The user can create posts, edit their own profile (login and avatar). 
View the profiles of other users and their posts.
The user can edit posts (title, content, tags), delete them.
The user can also create comments on posts. You can edit and delete your own comments.
There is a division of roles into regular users and admins. Admins can delete other people's posts and comments on posts.

### Routes
`/` - the route of the main page with posts by all users;

- `/users/:id` - the route to get the user profile;

---
