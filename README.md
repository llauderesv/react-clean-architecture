# React Folder Template

An opinionated folder structure for React Redux project.

`common`

Contains a common helper functions to be accessible in all javascript files.

`components`

Contains a reusable ui components in your application example eg: button, text,

`config`

Contains the configuration settings in your app for example initializing request instance in axios.

`modules`

This folder contains application specific modules. For example in your application you might have a authorization module and that consist of login and logout functionality. This place where reducer and actions takes place. For more detailed please see this ducks pattern.

`pages`

Contains all the pages in your application. This serves as a container where you'll get data in your redux store.

`styles`

Contains all global style to be applied in your application.

`theme`

Customizable theme in your application. If you have a feature that has a dark-mode and light-mode capability.

