SITE 2016
============

Based on React Rocket, a ReactJS/ES6/Gulp Boilerplate by Jake Marsh. Very Nice.

---

### Getting up and running

1. Run `npm install` from the root directory
2. Run `gulp dev` (may require installing Gulp globally `npm install gulp -g`)
3. Your browser will automatically be opened and directed to the browser-sync proxy address
4. To prepare assets for production, run the `gulp prod` task (Note: the production task does not fire up the browser-sync server, and won't provide you with browser-sync's live reloading. Simply use `gulp dev` during development. More information below)

Now that `gulp dev` is running, the server is up as well and serving files from the `/build` directory. Any changes in the `/app` directory will be automatically processed by Gulp and the changes will be injected to any open browsers pointed at the proxy address.
