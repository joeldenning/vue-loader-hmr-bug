# To reproduce

```sh
# Terminal tab 1
cd vue-loader-hmr-bug
npm install
npm run serve

# Terminal tab 2
cd app1
npm install
npm run serve

# Terminal tab 3
cd app2
npm install
npm run serve
```

Then open http://localhost:9000 in a browser. Notice how only one of the apps is mounted twice and the other isn't mounted at all.

![image](https://user-images.githubusercontent.com/5524384/101824968-38860e80-3aea-11eb-9aea-e2d7321f0cbb.png)

Then go to the vue.config.js in both apps and uncomment the code in there that disables HMR. Restart the servers for each app, and the bug is fixed:

![image](https://user-images.githubusercontent.com/5524384/101825240-99154b80-3aea-11eb-8317-e44ddf6bbd4c.png)
