URI
==============================

Version: 2.0.0

Docker
------------

    $ docker-compose build
    $ docker-compose run --rm node /bin/bash

Installation
------------

    $ npm install https://github.com/sdevalk/uri.git --save

Tests
------------

    $ npm run test

Coding conventions
------------
https://hapijs.com/styleguide

Example
------------

```javascript
const uri1 = Uri.join('http://www.example.org/', '/some/', '/path/'); // http://www.example.org/some/path

const uri2 = Uri.create('/my/{firstname}/and{?lastname}', { firstname: 'John', lastname: 'Doe' }); // /my/John/and?lastname=Doe
```
