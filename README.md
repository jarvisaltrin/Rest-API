# rest-api

This project was built with Turbo 360. 

## Instructions
After cloning into repo, cd to project root directory and create a .env file. This file requires a TURBO_APP_ID and SESSION_SECRET keys:

```
TURBO_ENV=dev
SESSION_SECRET=YOUR_SESSION_SECRET
TURBO_APP_ID=123abc
```

Then run npm install from the root directory:

```
$ npm install
```

To run dev server, install Turbo CLI globally:

```
$ sudo npm install turbo-cli -g
```

Then run devserver from project root directory:

```
$ turbo devserver
```

To build for production, run build:

```
$ npm run build
```

Note: For POST command on Windows Command Prompt type:
```
$ curl -g -H "Content-Type:application/json" -X POST -d "{\"name\":\"USA\", \"country\":\"United States\", \"conference\":\"National\"}" localhost:3000/api/teams
```

Note: For PUT command on Windows Command Prompt type:
```
curl -g -H "Content-Type:application/json" -X PUT -d "{\"firstName\":\"Luka\", \"lastName\":\"Modric\", \"position\":\"Defense\" , \"age\":32, \"team\":\"CRT\"}" localhost:3000/api/players/5c9c025dccf9ad3f08a1a081
```

Note: For DELETE command on Windows Command Prompt type:
```
curl -g -H "Content-Type:application/json" -X DELETE localhost:3000/api/teams/5c9c0078ccf9ad3f08a1a07f
```