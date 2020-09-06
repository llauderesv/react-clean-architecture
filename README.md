# React clean-architecture folder template

An opinionated clean-architecture folder structure for react redux (redux-saga, react-router) project.

`components`

Contains all your reusable ui components in your application example eg: button, text,

`config`

Contains the configuration settings in your app for example initializing request instance in axios.

`hoc`

Contains all your reusable Higher-Order Component file to be used throughout your application.

`modules`

This folder contains the module of your application. For example in your application you might have a **authorization** in your app and that consist of login and logout functionality.

This also the place where reducer and actions takes place. For more detailed please see this ducks pattern.

Note: If you're already familiar with ducks pattern you already know this.

`pages`

Contains all the pages in your application. This serves as a container where you'll get data in your redux store.

`routes`

Contains all your application top-level routing navigation system.

This place where you put your top-level routing in your app. For example in a e-commerce site built on single-page application you might have a top-level navigation such as Home, Cart, Orders, Profile and Settings.

`styles`

Contains all the global style to be applied in your application.

`theme`

Customizable theme in your application. If you have a feature that has a dark-mode and light-mode capability.

`utils`

Contains a common helper functions to be accessible in all javascript files.
