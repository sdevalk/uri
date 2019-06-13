URI helpers
==============================

## Development

### Build image
    docker-compose build --no-cache

### Logon to container
    docker-compose run --rm node /bin/bash

### Run tests
    npm test

### Coding conventions
https://hapijs.com/styleguide

## Usage
```javascript
const uri1 = Uri.join('http://www.example.org/', '/some/', '/path/'); // http://www.example.org/some/path

const uri2 = Uri.create('/my/{firstname}/and{?lastname}', { firstname: 'John', lastname: 'Doe' }); // /my/John/and?lastname=Doe
```
