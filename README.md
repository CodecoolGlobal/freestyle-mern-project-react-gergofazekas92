<a id="readme-top"></a>


# FoodHub Recipe Site

 [![Contributors](https://img.shields.io/badge/contributors-4-orange)](https://github.com/CodecoolGlobal/freestyle-mern-project-react-gergofazekas92/graphs/contributors)
 [![Forks](https://img.shields.io/badge/forks-0-orange)](https://github.com/CodecoolGlobal/freestyle-mern-project-react-gergofazekas92/forks)
 [![Stargazers](https://img.shields.io/badge/stargazers-0-orange)](https://github.com/CodecoolGlobal/freestyle-mern-project-react-gergofazekas92/stargazers)
 [![Issues](https://img.shields.io/badge/issues-0-orange)](https://github.com/CodecoolGlobal/freestyle-mern-project-react-gergofazekas92/issues)


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#team-members">Team Members</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#features">Features</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
  </ol>
</details>


## About The Project
<br>

<img width="1439" alt="image" src="https://github.com/user-attachments/assets/93569677-c06e-4415-acdd-e869d440d553">

<br>
<br>
This project is a Recipe Finder and Manager web application built using the MERN stack (MongoDB, Express, React, Node.js). Our team developed this application to help users find recipes based on specific ingredients. Users can search for recipes, mark their favorites, and leave comments on the recipe pages. The application integrates an external API to provide a wide range of recipe ideas and includes a visually appealing design for an enhanced user experience.
<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Built With
<br>

* [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
* [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
* [![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
* [![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
* [![Mongoose](https://img.shields.io/badge/Mongoose-AA2929?style=for-the-badge&logo=mongoose&logoColor=white)](https://mongoosejs.com/)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Team Members:

<br>

* [![Fazekas Gergő](https://img.shields.io/badge/Fazekas%20Gergő-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/gergofazekas92)
* [![Horváth Melani](https://img.shields.io/badge/Horváth%20Melani-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/melanihorvath)
* [![Konkoly Gergő](https://img.shields.io/badge/Konkoly%20Gergő-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/whowful)
* [![Mészáros Ádám](https://img.shields.io/badge/Mészáros%20Ádám-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/adesz0112)

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Key at [Edamam Recipe API](https://api.edamam.com/)
2. Clone the repo
   ```sh
   git clone https://github.com/CodecoolGlobal/freestyle-mern-project-react-gergofazekas92.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API and Mongoose URL in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   const MONGOOSE_URL = 'ENTER YOUR API';
   ```
5. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin github_username/repo_name
   git remote -v # confirm the changes
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Features

- **Search Recipes:** Users can search for recipes by entering specific ingredients.
- **View Recipes:** Users can view a list of recipes and detailed information for each recipe.
- **Favorite Recipes:** Users can mark recipes as favorites for easy access later.
- **Comment on Recipes:** Users can leave comments on recipe pages to share their thoughts and feedback.
- **External API Integration:** Utilizes a reliable external recipe API to provide diverse and extensive recipe ideas.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Roadmap

- [ ] Main Page
    - [ ] Search Bar
- [ ] Favorites Page
- [ ] Recipe Page
    - [ ] Comment
    - [ ] Mark as a favorite

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



