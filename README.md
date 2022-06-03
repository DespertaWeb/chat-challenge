# Chat Challenge

The goal of this exercise is to develop the frontend side of a chat application using VUEJS. To reach this
goal, you must use the json model that is provided

This was an almost 2 day goal challenge for a company. It wasn't finished, but feedback is very welcome.

- Please note that it was not allowed to change any of the json files provided, but it was encouraged to change the model objects

These were the goals:

The following requirements have been established. Feel free to implement them in order, we will
consider only those you were able to complete:

1. List conversations sorted from the most recent to oldest one. This is determined by the last
   message sent in each conversation.
2. The list of conversations should display the name and photo of the user, as well as the text of
   the most recent message.
3. Typing some text in the Search field, should filter the conversations and show only those that
   contain said text in the Name of the person.
   4
4. Clicking on a conversation should display all the messages that the user had with the selected
   contact.
5. Scroll to older messages should be possible. When opening a conversation, the scroll should be
   placed on the most recent message.
6. The conversation should be sorted by date. The most recent messages should be displayed in
   the bottom of the screen.
7. The status of the message should be displayed by the provided icons.
   a. Delivered, but not Read, should be displayed with a grey check mark.
   b. Delivered and Read should display a blue check mark
   c. Sent, but not Delivered and not Read, should not display any check
8. The messages should be grouped if they have the same timestamp. This means that the
   timestamp only needs to be displayed if it is a different one from the previous message.
9. The user should be able to reply to the conversation and this new message also needs to be
   added to the conversation after pressing “Enter”.
10. Custom look and feel is appreciated. Feel free to provide a creative and user-friendly
    application.
11. App is planned to be used both in desktop and mobile, so it needs to be a responsive app.

---

# How to get started

This guide should help get you started developing and also running the server with Vue 3 in Vite. Just follow along:

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
