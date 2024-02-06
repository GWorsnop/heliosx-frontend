# HeliosX Tech Test

Hosted Site: https://gworsnop-heliosx-frontend.vercel.app/

---

## Introduction

- This is a Front-end application that uses NextJS, React and Typescript in order to create a web page that asks 5 yes/no questions of the customer, gathering data that will later be reviewed by a doctor.

- The site is built using HTML, CSS, Typescript, Nextjs and is styled using Tailwind using responsive techniques.

---

## How to use the site

At the application's homepage, you will initially be sent to a page that has a question and 2 response buttons, yes and no. You are required to answer each question individually before the next question is revealed.

Upon completing the last question:

- A simple 'thank you' message is displayed to the customer.
- The collected data is passed to a util function that in a real situation would send the data to our API. For this task however, the function just simply `console.log`s the data.

---

## Running the project locally:

1. Fork this repository to your GitHub account

2. Clone your forked repository to your local machine

3. cd to the correct directory _(heliosx-frontend)_ and run `npm i` to install the correct packages.

4. Use the command `npm run dev` to run the project locally.

---

## Recommended Node Version:

- Node: v18.0.0
- It is recommended that you use this version or higher.

## Thoughts and considerations of this task

I intentionally used Nextjs, Typescript and React to build this as I know that this the tech stack you have standardised as your front end languages going forward. I hope this shows my ability using these languages and how I can work within your exisitng codebase.

In this task there were a couple of small issues I spent a lot of time considering - one of the being the height of the questions box. I don't particularly like the div changing size to fit the questions / additional information inside, but the alternative of lots of white space felt worse. I would be interested to hear the opinions of others on this trade-off. I wanted to include this extra information to more closely match the real world use of this questionnaire.

There is lots of room for this task to be extended, I have shown some places it could for example in the header and footer. Navigating to different pages across the site, as well as making the search expand on mobile. I didn't implement this as I had shown something similar for the hamburger menu and didn't want to spend too much time on the header.

The data is sent out in 2 different ways, but with the just the boolean values in order, or within an object to match the questions - this was to make the content more readable but would obviously depend on the API used.

I wanted the page to be simple and accessible on both mobile and desktop, so that people can easily know how to use it and increase the click through rate of the questionnaire. The buttons are obvious and easy to identify immediately hopefully helping with this.

Overall, I enjoyed working on this task and would love to discuss it with you in more detail at a later stage.
