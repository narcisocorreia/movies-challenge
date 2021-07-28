# Narciso Daniel Correia [Mark's Movies List Challenge ](https://github.com/narcisocorreia/movies-challenge)

## Add get Movie List and Movie detail Request [0d367f8](https://github.com/narcisocorreia/movies-challenge/commit/85e0bc20f9eea7d3c298472fb5f0a9a6dab838fb)

In this commit i started with the basics request fetching the movies list and movies details so that it is easy to start creating the base list of movies and movie details popUp

![Movies List](readME-assets/movies-list.png)

![Movie Details](readME-assets/movie-details.png)

## Movies List Layout [b6209c7](https://github.com/narcisocorreia/movies-challenge/commit/b6209c7a19b2653f851929818915010ccac446c5)

![Movies List](readME-assets/movies-list-layout.png)

In this commit I developed the movies list layout.

I started by adding the [styled-components lib](https://styled-components.com/), I did this because after starting using this lib in my current job and in my personal project I believe that it make the code more easer to read.

Then I started to get the dimension of the list body. The dimension I got here :

- width: 68.7%;

  - I got this value with by divide with of the a line in the list, **938px**, multiplied by **100**, the full width of the page on the Adobe XD, **1366px**. And I rounded the number to 1 decimal house

- height: 69.7%;

  - I got this value using a similar process like the on I use to calculate the width. I start to calculate the value of the component height, so seeing the difference between the last line and the end of page. Then to that number I added the difference between the fist Line, where I mean the line with the column titles, and the page start. The total was **233px**, then I multiplied by **100**, the full width of the page on the Adobe XD, **768px**. And I rounded the number to 1 decimal house

I decided to make it a grid, I thought that would me simple and more structure secure if the div was build was a grid. And with a grid implemented it was easy to make the columns have the space that was requested.

- raking
- title
- year
- rev

**Reason for my Approach**
Then I list all the movies that the come in the API request, using the map, returning an object showing the values asked.

## Add Info PopUp Layout [4d03e4d](https://github.com/narcisocorreia/movies-challenge/commit/4d03e4d4c62a272f4dadf1b3e77ebe1b001f2444)

![Movies Info](readME-assets/movie-info-layout.png)

In this commit I created the base layout for popUp with the movie information.

For the popup it self I took the same approach that I used in last commit. I calculate the width and height by divide the popUp size multiplied by 100 by the page size.
