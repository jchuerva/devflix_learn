# devflix
> A platform to recap all video content

## devflix-api
### Videos CRUD

| Endpoint | HTTP | Description |
| --- | --- | ---|
| `/videos` | GET | Retrieve all the videos |
| `/videos/:id` | GET | Retrieve an specific video with `id`
| `/videos` | POST | Create a new video |
| `/videos/:id` | PUT | Update a existing video |
| `/videos/:id` | DELETE | Remove a video |


## Steps

1. `git init`
1. `npm init`
1. `.gitignore` from [gitignore.io](https://www.gitignore.io/)
1. Use `express` for the REST: `npm i express`
1. Create README
1. Create LICENSE from [MIT LICENSE](https://opensource.org/licenses/MIT)
1. Install linters:
`npm i -D eslint eslint-config-prettier eslint-plugin-prettier prettier// development`
1. Install nodemon `npm i -D nodemon` for auto reload the server
1. Create `.eslintrc` and `.prettierrc`
1. Create `index.js`
1. Add scripts in `package.json`
```
"scripts": {
  "dev": "nodemon index.js",
  "start": "NODE_ENV=production node index.js"
}
```
1. Add library `husky` to prevent bad commits : `npm i -D husky`. Configure it in `package.json`
1. Add config folder and `index.js` for App configuration
1. Add `npm i -D dotenv` and configure the `.env` file and config ☝️ file
