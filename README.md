# GitHub Search Project

This project is a web application built with Next.js that is used to search for users and repositories on GitHub.

## Table of Contents

- [Install](#install)
- [Running with Docker](#docker)

## Install
This package works in Node.js >= 18.17.0.

To run this project locally, you need to install node and install the dependencies with `npm install`. This project is using Next.js as a sandbox to develop and test the web component.
To start the Next.js project run `npm run dev`.

You can also run a production build by running `npm run build` and start with `npm run start`.

## Docker

First you need to install docker on your machine and then run the following commands:
- `docker build -t github-search .`
- `docker run -p 3000:3000 github-search `