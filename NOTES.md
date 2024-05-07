# NOTES - Progress made in the project

1.  Configured EsLint, Prettier for code consistency throughout the project.
    References used-
    1.1 https://medium.com/@grantsky0503/setup-eslint-and-prettier-in-react-app-7c46b37697f6
    1.2 https://youtube.com/watch?v=ZXW6Jn6or1w&t=597s

2.  Pre-commit hooks configured using Husky

3.  Configured React-Router 6.4+ for pages

4.  Created Simple navbar using Font-awesome free icons and image sprite icons

5.  Fixed eslint issue - "import/no-extraneous-dependencies" by doing - `rm -Rf node_modules/.cache` and `npm i`. Removed the unnecessary rule related to this issue from `.eslintrc.json` file [*disabling this rule before every import was really annoying*]

<!-- Home Page Progress -->

6. Created UI components like - Carousel, Multi-Item Carousel

7. Created basic layout of Home page
