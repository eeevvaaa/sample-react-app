# Movie List

Using the JSON file (characters.json) below develop a single page web app using any Javascript framework with some kind of component based pattern (Angular, React, Stenciljs) to display list of films that a character appears in with below guidelines.

- Hosting is upto you.
  - Plunker, StackBlitz are a few suggestions
- Alternatively, use github, gitlab, or bitbucket for source control, and a real hosting service such as AWS, Google Cloud / Firebase hosting, Digital Ocean, or Heroku.
- On launch of the application allow the user to select a character from the provided JSON file.
  Upon selecting a character the UI should update and display details on each of the films the character appears in.
  - At minimum you should display Title and Formatted release date (Thursday, May 17 1980)
- You can only use the API URL’s provided in the JSON file and the data returned from those calls.
  Movie data shouldn’t be loaded until the character is clicked
- Don’t show movie information until you have details about all the movies for that character
- Handle http errors (URL for Leia Organa is intentionally incorrect – PLEASE DO NOT MODIFY THE JSON)
- Follow best practices where applicable.

**Bonus Points:** Make it look pretty and responsive (should look good on mobile and desktop) – You are encouraged to use any css library like Bootstrap, Material library.
Feel free to use any library you like.

## characters.json

```
{
  "characters": [
    {
      "name": "Luke Skywalker",
      "url": "https://swapi.dev/api/people/1/"
    },
    {
      "name": "C-3PO",
      "url": "https://swapi.dev/api/people/2/"
    },
    {
      "name": "Leia Organa",
      "url": "https://swapi.dev/api/people/unknown/"
    },
    {
      "name": "R2-D2",
      "url": "https://swapi.dev/api/people/3/"
    }
  ]
}
```
