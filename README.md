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

Then open http://localhost:9000 in a browser. Notice how only one of the apps is visible.

![image](https://user-images.githubusercontent.com/5524384/101824968-38860e80-3aea-11eb-9aea-e2d7321f0cbb.png)
