## Contributor's Guide

First off, thanks for taking the time to contribute! :tada::+1:

WebUI-Aria2 is an Angular JS 1.x application bundled with webpack. Follow the [Get Started Guide](#get-started) to setup the development environment. You'll need `Node > 6` and latest version of `npm` to build the source files.

## Get Started

To start developing an awesome feature or to fix a bug [fork and clone the repo](https://help.github.com/articles/fork-a-repo/) and then install Node.js > 6 and npm.

Next, install this package's dependencies with npm using `npm install` command.

Then run `npm run dev` command to start an HTTP development server on http://localhost:8888 and to watch and compile the source files.

Use `npm run build` to create a production ready build from source files.

### Useful commands

| Command                   | Purpose                                                                                                   |
| ------------------------- | --------------------------------------------------------------------------------------------------------- |
| `npm install`             | will install required dependencies                                                                        |
| `npm run dev`             | will start an HTTP dev server on http://localhost:8888 and will watch and compile the source files        |
| `npm run build`           | will create a production build from source files                                                          |
| `npm run analyze`         | will open a bundle analyzer on port http://localhost:9999. Useful for visualizing contents of your bundle |
| `npm run format --silent` | will format your code for consistency using Prettier                                                      |
