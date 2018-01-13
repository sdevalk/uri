URI
==============================

Version: 2.0.0

Build image
------------
    docker-compose build

Logon to container
------------
    docker-compose run --rm node /bin/bash

Run tests
------------
    npm test

Coding conventions
------------
https://hapijs.com/styleguide

Install
------------
    npm install https://github.com/sdevalk/uri.git --save

Example
------------

```javascript
const uri1 = Uri.join('http://www.example.org/', '/some/', '/path/'); // http://www.example.org/some/path

const uri2 = Uri.create('/my/{firstname}/and{?lastname}', { firstname: 'John', lastname: 'Doe' }); // /my/John/and?lastname=Doe
```
