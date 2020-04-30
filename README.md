# Lisn Web App

This web app (written in [Vue.js]) compiles down to static **HTML**, **CSS**,
and **JS** files that are to be served by the [Lisn Server].

[Vue.js]: https://vuejs.org
[Lisn Server]: https://github.com/sharpvik/lisn-server



## Get Started

```bash
npm install
```

It will install all the dependencies for you.



## Develop

```bash
npm run lint    # lints your code

npm run serve   # compiles stuff on the go and serves it straight away
```

In case you are using [Visual Studio Code] as your preferred editor, I'd
recommend the [Vetur] extension to enable syntax highlighting in `*.vue` files.

[Visual Studio Code]: https://code.visualstudio.com
[Vetur]: https://vuejs.github.io/vetur



## Contribute

All contributions to the Lisn project are greately appreciated. I know, the
phrase is a cliché but trust me, any contribution you make
**creates a ton of difference**.


### Ways To Help

**Scout through the [Issues]**, look for the ones you think you can fix and
*go ahead*.

[Issues]: https://github.com/sharpvik/lisn-web-app/issues

Found a bug? -- **create a new issue** for the rest of us to see.

And of course, you are always welcome to `fork + git clone`, and then do
whatever you want. If you think that your version looks/feels/works better than
the one we have published here -- **issue a pull request**!


### Sister Repos

Lisn Web App is part of a bigger family. Maybe you could also help with some of
these:

- [Lisn Server] - server written in [Go]
- [Lisn Design] - all graphics realted stuff

[Go]: https://golang.org
[Lisn Design]: https://github.com/sharpvik/lisn-design



## Build and Serve

```bash
npm run build   # builds optimised development version
```

You need to create your own custom `vue.config.js` file for building, especially
if you are using [Lisn Web App] with [Lisn Server] in its original form.

[Lisn Web App]: https://github.com/sharpvik/lisn-web-app

This is how my `vue.config.js` file looks like (you can literally `Copy + Paste`
from here):

```js
'use strict';

//! BEFORE BUILDING FOR PRODUCTION
//! `ROOT` MUST BE CHANGED APPROPRIATELY
const ROOT = '/home/user/Public/Lisn'
const APP = '/pub/lisn'

module.exports = {
  publicPath: APP,
  outputDir: ROOT + APP,
}
```

The `const ROOT` and `const APP` are used to populate `publicPath` and
`outputDir` fields.

> Do *not* alter `APP` if you are running the default version of [Lisn Server].

> Make sure that `ROOT` is assigned correct path to the folder that contains the
> `storage` and `pub` folders related to your [Lisn Server].

Once you've built everything, your server will be able to serve it.

The `vue.config.js` file was excluded from the repo because its presense makes
continuous deployment harder as we'd have to maintain a separate branch for the
server where the only difference from master is this file...



## Authors

- **[Viktor Rozenko]** - *Initial work*

[Viktor Rozenko]: https://github.com/sharpvik



## License

This project is licensed under the **Mozilla Public License Version 2.0** --
see the [LICENSE](LICENSE) file for details.

Please note that this project is distributred as is,
**with absolutely no warranty of any kind** to those who are going to deploy
and/or use it. None of the authors and contributors are responsible (liable)
for **any damage**, including but not limited to, loss of sensitive data and
server machine malfunction.
