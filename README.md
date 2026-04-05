## Requirements:

(These might change as the project moves forward)

1. A new user opens the website, they will be redirected to the login page
2. If they do not have an account, they can create an account (register)
3. Once logged in, a user will be able to post messages
4. If the user knows the secret password, they can apply to be members
5. Any user can post and see messages, however only members can see which author posted which message
6. A special admin role will exist which allows users to delete posted messages (users can delete their own messages, admins can 
delete any message)


## Schema Design:

(This might change in the future)

1. users(firstname, lastname, username, email, password, role).
    username and email has to be unique (will try to add username suggestions for already taken usernames)
    role is either user, member or admin
2. messages(author, title, body, timestamp, isDeleted, deletedBy)
    author refers to users.username (FK)
    deletedBy refers to users.username (FK)
    isDeleted is a boolean
