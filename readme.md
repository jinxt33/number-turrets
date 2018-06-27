# NUMBERS FOR SUPERSTITIOUS TURRETS
## A JAVASCRIPT ARRAYS & LOOPING DEMO

#### Epicodus Independent Project, last edited June 27th, 2018.

#### By Zoe Zhou

## Description
This project showcases my understanding of arrays and looping functions.

## Specifications
It will count up to any number the user inputs.
* Example Input: 8
* Example Output: [1, 2, 3, 4, 5, 6, 7, 8]

It will tell you all the lucky numbers (numbers that are divisible by 8).
* Example Input: 8
* Example Output: [1, 2, 3, 4, 5, 6, 7, solucky!]

It will tell you all the unlucky numbers (numbers that are divisible by 4).
* Example Input: 8
* Example Output: [1, 2, 3, unlucky, 5, 6, 7, solucky!]

It will tell you all the crazy numbers (numbers divisible by 3).
* Example Input: 8
* Example Output: [1, 2, crazyyy, unlucky, 5, crazyyy, 7, solucky!]

## Setup/Installation Requirements
To clone this project, please follow these steps
* in the terminal, navigate to the location where you want to copy my project repo
* then type, git clone https://github.com/jinxt33/number-turrets.git

This project is now yours! Have fun!

## Known Bugs
I originally intended for my calculations to check if the number includes 4 its unlucky, if the number includes 8 its lucky ... etc, which is more authentic to Chinese culture. I had planned to use the .includes(); function outlined here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes. However, I kept getting an error "TypeError: index.includes is not a function". Then I spent over an hour researching on Google and found many has had similar experiences, so I explored a few diff possible solutions: .indexOf(), .has() .... but with no success, so I eventually changed my calculations to use divisible by using the % calculation. I've // out my original erroneous calc.

## Support and Contact Details
If you have any questions, ideas and concerns please feel free to email me: <zoezo85@gmail.com>.

## Technologies Used
This readme is written in Markdown. The webpages are written in simple HTML. Styled with CSS and Bootstrap. Interactions by Javascript and JQuery!

### License
MIT, code is free to use by anyone and we are not liable.

Copyright (c) 2018 **Zoe Zhou**
