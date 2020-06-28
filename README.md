# Starting [gulp](https://gulpjs.com/) - [nunjuck](https://mozilla.github.io/nunjucks/) - [sass](https://sass-lang.com/) template
> Render Nunjucks + SASS templates

**Description:** This is the template for starting projects on the [Nunjucks](https://mozilla.github.io/nunjucks/) + [SASS](https://sass-lang.com/) engine.

How to use: install packages `yarn` or `npm i`. Then:

**Default task**:
- `yarn start` - launches the default task, starts the server on [localhost:3000](https://localhost:3000), monitors changes and automatically reloads the page in the browser.
- `yarn build` - Compiles the assets

**File structure:**
>I use this structure, you're free to use another one

```
gulp-nunjucks-sass/
|——node_modules
|——public/                                 --compiled assets
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
|  |  |——styles.scss                        --global styles and imports
|  |  |——variables.scss
|  |——templates/
|  |    |——shared/                          --shared components and macro
|  |    |  |——components/
|  |    |  |  |——header.nunj
|  |    |  |  |——footer.nunj
|  |    |  |  |——sidebar.nunj
|  |    |  |——macro/                        -- nunj macro
|  |    |——template-pages/                  -- main code of the pages
|  |    |  |——about-us/
|  |    |  |  |——components/
|  |    |  |  |  |——features-table.nunj
|  |    |  |  |  |——slider.nunj
|  |    |  |  |——about-us-template.nunj
|  |    |  |——index/
|  |    |  |  |——components/
|  |    |  |  |  |——mail-modal.nunj/
|  |    |  |  |——index-template.nunj
|  |    |——index.nunj/                      -- individual page settings, it will be compiled into .html file
|  |    |——about-us.nunj/                   -- individual page settings, it will be compiled into .html file
|  |    |——layout.nunj/                     -- standard template for every page
|——package.json
|——package-lock.json
|——gulpfile.json
|——README.md                                --you're here
```

In order for the pages to be compiled you need to list their paths in the **pages** array

```javascript
// ./gulpfile.js

const pages = [
    'src/templates/index.nunj',
    'src/templates/about-us.nunj',
];
```

**More:**
Webstorm (v2020.1.2, Date: 27 June 2020) does not support nunjuck syntax. To solve this:
- go to _Settings > Plugins > install "Twig"_
- _Settings > Editor > File Types > Find "Twig" > Add Registered Patterns "*.nunj"_
