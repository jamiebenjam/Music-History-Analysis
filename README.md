# YoutTube Rewind - Music Analysis

This is a single page application built with React front end and a JSON server back end. The app offers information analysis on the user's total number of songs listened to (unique song titles), total streams, and their top 10 songs which includes the song name and number of plays. The top 10 songs are displayed in a modal pop up and the others are buttons that hide and show the analysis on click.

## Coding Process

Due to the data set being quite large and in JSON, I found that my first few methods were not rendering the information quickly enough and I needed to have better space / time complexity. To combat this and handle the information as efficiently as possible, I set the data coming in from the fetch to go directly to my sortPlays function that maps over the plays to return an object with the title of the song as the key and the number of plays as the value. This object is then looped through and put into arrays to be sorted by the value. Because this sortPlays function is used multiple times, the output of the function is set to a state variable. This helps the application run more quickly since it doesn't have to run the function for each user interaction, but rather runs on the page load. Although the page load on the front end takes a few seconds, this process is more efficient than having to wait after each click.

## Future Advancements

Thinking ahead about future extensions to the project, I would like to add more analysis on the data such as most frequent artist listened to and the date with the most plays. I styled using a fitting background image, YouTube logo, TypeScript animation, sourced fonts, custom CSS, and Bootstrap. With more time, I would like to add more animation when displaying the numbers or a parallax scrolling feature and have larger page to scroll rather than the static page. 

## Installation

Clone this repository to your system,

### $ cd top-10

and run

### json-server --watch db.json

Open another terminal and run

### npm start

to view in your browser and allow a few moments for the page to load.

