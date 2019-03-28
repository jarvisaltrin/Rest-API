# rest-api

REST API with Node and MongoDB

## Instructions
Install Node.js, MongoDB and npm.

Create a new project:

```
turbo new rest-api
```

Then cd to the folder:

```
cd rest-api
```

To run npm install from the root directory:

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

Turbo dev server running on LocalHost: http://localhost:3000

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