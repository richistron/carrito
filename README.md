# Single page carrito [![Build Status](https://travis-ci.org/richistron/carrito.svg?branch=master)](https://travis-ci.org/richistron/carrito)

Simple shopping cart (dummy) created with yeoman:

* Angular.js
* Bootstrap 3

# Install

You'll need node.js installed in your computer, go to http://nodejs.org/ and 
install it. Node is available for several plataforms such as linux, mac and
windows. Once you have node installed in your computer you can follow this
steps:

Make sure you have node and npm ready to use
```
node -v // v0.12.0
npm -v // 2.5.1
```

Install global dependencies
```
npm install -g yo bower grunt-cli gulp 
npm install -g generator-angular
```

Nice to have
```
npm install -g npm-check-updates
```

# Create  scaffolding

```
yo angular
```

Follow the instructions and add the things that you want

*You are ready to go*

# deploy 

```
grunt
git commit -am "my message"
git subtree push --prefix dist heroku master
```

force push
```
git push heroku `git subtree split --prefix dist master`:master --force
```

http://carrito.infraestructocho.com
