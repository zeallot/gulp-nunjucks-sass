# Starting [gulp](https://gulpjs.com/) - [nunjuck](https://mozilla.github.io/nunjucks/) - [sass](https://sass-lang.com/) template 
> Render Nunjucks + SASS templates

This is the template for starting projects on the [Nunjucks](https://mozilla.github.io/nunjucks/) + [SASS](https://sass-lang.com/) engine.

How to use: install packages `yarn` or `npm i`.

Default task:
- `yarn satrt` - launches the default task, starts the server on [localhost:3000](https://localhost:3000), monitors changes and automatically reloads the page in the browser.
- `yarn build` - Makes a build. 

I use this file structure: 

```
start-nunj-project/
|——node_modules
|——public/                                 --builded project 
|  |——css/
|  |——img/
|  |——js/
|  |——index.html
|——src/
|  |——img/
|  |——js/
|  |——sass/                                 --styles
|  |  |——shared-components/
|  |  |  |——button.scss
|  |  |  |——input.scss
|  |  |  |——bread-crumbs.scss
|  |  |——pages/
|  |  |  |——about-us.scss
|  |  |  |——index.scss
|  |  |——styles.scss                        --global styles and all imports
|  |  |——variables.scss
|  |——templates/
|  |    |——shared/                          --shared componentns and macro
|  |    |  |——components/
|  |    |  |  |——header.nunj
|  |    |  |  |——footer.nunj
|  |    |  |  |——sidebar.nunj
|  |    |  |——macro/                        -- macro nunj
|  |    |——template-pages/
|  |    |  |——about-us/
|  |    |  |  |——components/
|  |    |  |  |  |——features-table.nunj
|  |    |  |  |  |——slider.nunj
|  |    |  |  |——about-us-template.nunj
|  |    |  |——index/
|  |    |  |  |——components/
|  |    |  |  |  |——mail-modal.nunj/
|  |    |  |  |——index-template.nunj
|  |    |——index.nunj/
|  |    |——about-us.nunj/
|  |    |——layout.nunj/
|——package.json
|——package-lock.json
|——gulpfile.json
|——README.md         --you here
```
It's just example. You can use another structure !!! (TODO: REWRITE)