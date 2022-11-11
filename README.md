# YoutTube Rewind - Music Analysis

This is a single page application built with React front end and a JSON server back end. The app offers information analysis on the user's top 10 songs played with song name and number of plays as well as the total number of songs listened to (unique song titles) and total streams. The top 10 songs are displayed in a modal pop up and the other two are buttons that change on click.

## Coding Process

Due to the data set being quite large and in JSON, I found that my first few methods were not rendering the information quickly enough and I needed to have better space / time complexity. To combat this and handle the information as efficiently as possible, I set the data coming in from the fetch to go directly to my sortPlays function that maps over the plays to return an object with the title of the song as the key and the number of plays as the value. This object is then looped through and put into arrays to be sorted by the value. Because this sortPlays function is used multiple times, the output of the function is set to a state variable. This helps the application run more quickly since it doesn't have to run the function for each user interaction, but rather runs on the page load. Although the page load on the front end takes a few seconds, this process is more efficient than having to wait after each click.

## Installation

Clone this repository to your system,

### $ cd top-10

and run

### json-server --watch db.json

Open another terminal and run

### npm start

to view in your browser and allow a few moments for the page to load.

