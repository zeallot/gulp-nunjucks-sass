#Basic starting nunj-project

This is the template for starting projects on the [Nunjucks](https://mozilla.github.io/nunjucks/) template engine.

How to use: install packages ```yarn``` or ```npm i```.

Default task:
- ```yarn satrt``` -  launches the default task, starts the server on [localhost:3000](https://localhost:3000), monitors changes and automatically reloads the page in the browser.
- ```yarn build``` - Collects build. 

I use this file structure: 

```
start-nunj-project/
|——node_modules
|——public/
|  |——css/
|  |——img/
|  |——js/
|  |——index.html
|——src/
|  |——img/
|  |——js/
|  |——sass/                   --styles
|  |——templates/
|  |    |——index.nunj/
|  |    |——layout.nunj/
|——package.json
|——package-lock.json
|——gulpfile.json
|——README.md                  --you here
```
