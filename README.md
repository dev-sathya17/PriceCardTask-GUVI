# Day 22

## React Price Card Task

> [Source Code](./src/)  
> Explanation:
>
> First, we create a React Project using Vite.js.
> The page is styled using raw CSS only.
> Let's get into the Code flow:
>
> - In the App Component, we creata container, that includes a title, a description and a sub-container for our cards.
> - The data is located in a separate folder in a JavaScript file from where the array of objects is exported.
> - Such a folder structure is followed for enhanced readability.
> - [Source for data](./src/data/data.js)
> - The data is then imported into the App Component, where it is iterated using a `map() function`.
> - The map function is passed with a callback function which a single parameter named as `data`.
> - We create a single `Card` component within the components folder, which has its own CSS file.
> - The CSS for the `Card` component is seperated for better readability and easy maintanence.
> - [Source for Components folder](./src/components/)
> - We pass the data value from the `map function` to the `Card` component as `props`.
> - The `Card` component recieves the props value and required HTML tags are added for the UI requirement.
> - The `features` value in the data is an array of objects, which is iterated using a `map() function`.
> - Depending on the boolean value, we `conditionally render` a check-mark(✔) or a cross-mark(✖).
> - Also, styles for the feature are applied conditionally varying the styles for a value which is included in the package and different for the ones not included in the package.
> - The UI is made responsive by using `media queries` in CSS.
> - The output can be viewed by running the following command on terminal.
> - `npm run dev`

---
