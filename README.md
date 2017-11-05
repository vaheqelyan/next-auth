# next-auth

### Getting started

Clone the repo
```code
git clone https://github.com/vaheqelyan/next-auth.git
```
Then create a file ```.env``` file.

```code
SECRET=<YOUR_SESSION_SECRET>
```

Then create a file `env-config.js`
```javascript
module.exports = {
	"process.env.GOOGLE_CLIENT_ID": "<YOUR_GOOGLE_CLIENT_ID>"
};
```

###  Install the dependencies

```code
yarn
```

```code
npm install
```

### Running locally in development mode

```code
npm run dev
```

### Building and deploying in production

```code
npm build
npm start
```

### Deploying to the cloud with now.sh

```code
npm run public
```


