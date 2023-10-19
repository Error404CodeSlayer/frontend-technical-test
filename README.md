# Context :

At leboncoin, our users can share messages about a transaction, or ask for informations about any products.

Your job is to create the interface to consult those messages.
The interface needs to work on both desktop & mobile devices.

# Exercise :

- Display a list of all the conversations
- Allow the user to select a conversation
  - Inside the conversation, there is a list of all the messages between these two users.
  - As a user, you can type and send new messages in this conversation

# Library choices :
- Axios : I used Axios because it's more easy to use for query creation and error handling.
- Tabler.io : to add nice icons.
- Tailwindcss : to quickly and efficiently create user interfaces using pre-designed CSS classes rather than writing custom CSS, speeding up front-end development

# Thought process :
- I proceeded as follows:

- Created a component:
  - Created the JSX structure.
  - Created custom hooks.
  - Retrieved data in the desired component.
  - Managing component logic.
  - Styled it with Tailwind CSS.
  - Implemented error handling.

- The most challenging part was understanding who the logged-in user was, as I initially didn't notice getLoggedUserId.ts in /utils. I created a list of users so that when we clicked on a user, we became that user. It was only later that I realized the existence of getLoggedUserId.ts, at which point I redesigned my architecture.