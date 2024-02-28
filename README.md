## running the example

### pre requisit

- caddy
- node
- nss tools for caddy to create certificat

### launching things

in a first shell
`
cd api
npm ci
npm run start
`
in another shell
`
caddy run
`

### testing
`curl -k https://localhost:2016/`  
returns  
```
<html>
<body>
    welcome to index of static file
</body>
</html>
```


`curl -k https://localhost:2016/api/`  
returns  
`Hello World from api root!`


