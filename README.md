# Starting [gulp](https://gulpjs.com/) - [nunjuck](https://mozilla.github.io/nunjucks/) - [sass](https://sass-lang.com/) template 
> Render Nunjucks + SASS templates

This is the template for starting projects on the [Nunjucks](https://mozilla.github.io/nunjucks/) + [SASS](https://sass-lang.com/) engine.

How to use: install packages `yarn` or `npm i`. Then:

**Default task**:
- `yarn start` - launches the default task, starts the server on [localhost:3000](https://localhost:3000), monitors changes and automatically reloads the page in the browser.
- `yarn build` - Makes a build. 

**File structure:** 
>I use such a structure, you can use another

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
|  |  |——components/
|  |  |  |——button.scss
|  |  |  |——input.scss
|  |  |  |——sidebar.scss
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
|  |    |——template-pages/                  -- here the main code of the pages
|  |    |  |——about-us/
|  |    |  |  |——components/
|  |    |  |  |  |——features-table.nunj
|  |    |  |  |  |——slider.nunj
|  |    |  |  |——about-us-template.nunj
|  |    |  |——index/
|  |    |  |  |——components/
|  |    |  |  |  |——mail-modal.nunj/
|  |    |  |  |——index-template.nunj
|  |    |——index.nunj/                      -- here are the individual page settings it's will be .html file
|  |    |——about-us.nunj/                   -- here are the individual page settings it's will be .html file
|  |    |——layout.nunj/                     -- here is the standard template for all pages
|——package.json
|——package-lock.json
|——gulpfile.json
|——README.md         --you here
```

In order for the pages to get into the build, you need to list the paths to them in the **page** array `./gulpfile.js`

```javascript
const pages = [
    'src/templates/index.nunj',
    'src/templates/about-us.nunj',
];
```

**More:**

In a webstorm (v2020.1.2, Date: 27 June 2020), I had a problem. IDEA did not support nunjuck syntax. I solved it like this:
- go to _Settings > Plugins > install "Twig"_
- _Settings > Editor > File Types > Find "Twig" > Add Registered Patterns "*.nunj"_