# GitHub Topic Explorer

## Assignment:

Your task is to build a React web application that displays all the "[topics](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#topic)" related to the term "react", using the GitHub GraphQL API.

The application should display how many "[stargazers](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#stargazerconnection)" each topic has. A click on a topic should display the topics related to that topic, and how many stargazers they have. And so forth.

To interact with the Github GraphQL API you'll need to have

- a [Github API key](https://docs.github.com/en/free-pro-team@latest/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql)
- You'll want to make use of the key in the .env file within your application

You may use whatever React framework or library you find useful. URL routing is optional.

## Evaluation:

- We will pay particular attention to the way the code is organized, and to the overall readability
- Unit tests will be greatly appreciated
- Design will be ignored, however usability and accessibility will be taken into consideration
- Remember to update this README with instructions on how to install, run and test your application
- Your first goal is to have a working app, but feel free to improve the application however you see fit
- We hope that you can complete the assignment within 2 hours but don't set any time constraints
- Please reach out per email or by opening an issue if anything is unclear or blocking you

Best of luck!!!

---

### Dev Notes

- I did the assignment using Styling Components, which i think is really useful when yo want to have the exact style for a component and reuse it everywhere you want.

- I also used ApolloClient created in a separate file (apollo-client.js) in src folder with the objective of having it in a 'global' manner to be able to use it in any other component or hook.

- Having these last two points it is possible to create your separate functions or API calls as in /hooks/useTopics.js where basically the client already created is used here to do the query and the API call to Graphql to get the data that we request and return it as well.

### How to run app & test

- Clone the git repo or download the zip package.
- Install npm packages by running `npm install`.
- Get the .env file and create a new valid token to be able to run the application and use ApolloClient,
  assign your valid token to REACT_APP_GITHUB_API_TOKEN constant in .env file.
- Run the app with `npm run start`.

### Future Improvements

- Code Structuring: in terms of the structure, is possible to do the application even more simpler adding the styled components in App.js file, we can use also props to assign to the components and display the elements with diferent styles or in the case if the component depends of any value and it needs to be different we can use that method.

- Refactoring: To refactor the application, by creating reusable components we can even use little less components that i created here, for example, is possible to eliminate the use of Footer.js and Header.js components due in this ones we are only using the styled components created for the header and footer, and the text to display is added just with this tag. We can add the same tag in App.js file where we are adding the Header and Footer as well. I just wanted to keep it like that to show that if i want to add other thing in those components out of the styled component i can add it easily and keep App.js as simple as possible.

- Additional Features: As an additional feature i would add more components to show more details per topic by clicking the element, also, it would be fun to create some animations to display the stargazer count in each item, of course this takes more time to develop, but surely it would be incredible!

---
