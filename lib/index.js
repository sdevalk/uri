'use strict';


// Load modules

const Hoek = require('hoek');
const UrlTemplate = require('url-template');


/**
 * Join server paths to a URI
 *
 * @param {...String} args
 * @return {String}
 * @throws {Error}
 */
exports.join = function (...args) {

    const paths = [];

    args.forEach((path) => {

        Hoek.assert(typeof path === 'string', 'Argument is not a string');

        // Remove leading and trailing forward slashes
        path = path.replace(/^\/+/, '');
        path = path.replace(/\/+$/, '');

        if (path) {
            paths.push(path);
        }
    });

    let uri = paths.join('/');

    if (arguments[0] && arguments[0].charAt(0) === '/') {
        uri = '/' + uri;
    }

    return uri;
};


/**
 * Create a URI from a template
 *
 * @param {String} template
 * @param {Object} params
 * @return {String}
 * @throws {Error}
 */
exports.create = function (template, params) {

    Hoek.assert(typeof template === 'string', 'Argument "template" is not a string');
    Hoek.assert(params && typeof params === 'object', 'Argument "params" is not an object');

    const urlTemplate = UrlTemplate.parse(template);
    const uri = urlTemplate.expand(params);

    return uri;
};
