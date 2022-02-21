# React Template

The reason behind creating this repository is because I just learned something new today. It was about [Vite][vitejs-site], an excellent frontend tool created by Evan You. You must already know about [Vite][vitejs-site], this repository is simply a template for a daily [react-based][reactjs-site] application that I will be making.

I'm really looking forward to getting used to and proficient in [Vite][vitejs-site] and developing this template to be even better.

## 🛠️ Installation

The installation process is actually very easy to do. I learned to provide an app that is easy to install. So, here are some steps to follow:

##### ⬇️ Clone the repository

The first thing to do is clone the repository, you as a developer should be familiar with this. But here's the command:

```sh
# without ssh
git clone https://github.com/eternalbeginner/react-template.git

# using ssh
git clone git@github.com:eternalbeginner/react-template.git
```

##### 💉 Install the necessary dependencies

The next step is to install the dependencies included in this repository. You can use either `yarn` or `npm` to install it:

```sh
# with yarn
yarn install

# with npm
npm install
```

> Make sure you have `node` installed on your machine

## 🪴 Usage

After the installation process, of course, now it's how to run it, right? [Vite][vitejs-site] makes it simple, you can run either `dev`, `build`, or `preview` commands.

##### ▶️ `dev` command

This command is used to run a dev server to serve your application.

```sh
# with yarn
yarn dev

# with npm
npm run dev
```

> The dev server is up and running at `localhost:3000`.

##### ▶️ ️`build` command

This command is used to build/bundle your entire application and put its bundled output into the `build` directory.

```sh
# with yarn
yarn build

# with npm
npm run build
```

##### ▶️ `preview` command

This last command is used to serve your bundled code in the local server.

```sh
# with yarn
yarn preview

# with npm
npm run preview
```

> The server is up and running at `localhost:5000`.

##### ▶️ `lint` and `format` commands

This is additional commands used to lint and format your codes. The lint is done by [ESLint][eslint-site] and the format is done by [Prettier][prettier-site].

```sh
# with yarn
yarn lint
yarn format

# with npm
npm run lint
npm run format
```

> We also include the configuration files for those two additional features placed under the `/` directory with the `.js` extension. If you want to modify the configuration just make it, for further information you can read the documentation at their official website for [ESLint][eslint-site] and [Prettier][prettier-site].

## 📪 Issues

If you have some issues or you have an idea for future development, feel free to drop your idea on [issues][github-issues].

## 🌠 Contact Me

Feel free to [contact me][mail-me] also if there are some issues or bugs regarding the application. I'm open for discussion, better you upload it on the [issues][github-issues] page.

[github-issues]: https://github.com/eternalbeginner/react-template/issues
[mail-me]: mailto:ini.dwiii@gmail.com
[eslint-site]: https://eslint.org/
[prettier-site]: https://prettier.io
[reactjs-site]: https://reactjs.org/
[vitejs-site]: https://vitejs.dev/
