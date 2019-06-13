'use strict';

const Code = require('@hapi/code');
const Lab = require('@hapi/lab');
const Uri = require('..');

const { describe, it } = exports.lab = Lab.script();
const expect = Code.expect;

describe('Uri', () => {

    describe('join', () => {

        it('throws error if argument is not a string', () => {

            const fn = () => Uri.join(123);

            expect(fn).to.throw('Argument is not a string');
        });

        it('returns a joined string', () => {

            let uri = Uri.join();
            expect(uri).to.equal('');

            uri = Uri.join('abc');
            expect(uri).to.equal('abc');

            uri = Uri.join('/abc');
            expect(uri).to.equal('/abc');

            uri = Uri.join('', '');
            expect(uri).to.equal('');

            uri = Uri.join('', 'part', '');
            expect(uri).to.equal('part');

            uri = Uri.join('', '///pa///rt///', '');
            expect(uri).to.equal('pa///rt');

            uri = Uri.join('/', '///pa/rt///', '/');
            expect(uri).to.equal('/pa/rt');

            uri = Uri.join('http://www.example.org');
            expect(uri).to.equal('http://www.example.org');

            uri = Uri.join('http://www.example.org/');
            expect(uri).to.equal('http://www.example.org');

            uri = Uri.join('http://www.example.org', 'some/path');
            expect(uri).to.equal('http://www.example.org/some/path');

            uri = Uri.join('http://www.example.org/', '/some/path/');
            expect(uri).to.equal('http://www.example.org/some/path');

            uri = Uri.join('http://www.example.org', 'some', 'path');
            expect(uri).to.equal('http://www.example.org/some/path');

            uri = Uri.join('http://www.example.org/', '/some/', '/path/');
            expect(uri).to.equal('http://www.example.org/some/path');
        });
    });

    describe('create', () => {

        it('throws error if template is not a string', () => {

            const fn = () => Uri.create(null, {});

            expect(fn).to.throw('Argument "template" is not a string');
        });

        it('throws error if params is not an object', () => {

            const fn = () => Uri.create('/my/template', null);

            expect(fn).to.throw('Argument "params" is not an object');
        });

        it('returns an empty uri if an empty template was set', () => {

            const uri = Uri.create('', { name: 'John' });

            expect(uri).to.be.empty();
        });

        it('returns an expanded uri if params were set', () => {

            const uri = Uri.create('/my/{firstname}/and{?lastname}', { firstname: 'John', lastname: 'Doe' });

            expect(uri).to.equal('/my/John/and?lastname=Doe');
        });
    });
});
