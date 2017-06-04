'use strict';


// Load modules
const Code = require('code');
const Lab = require('lab');
const Uri = require('..');


// Test shortcuts
const lab = exports.lab = Lab.script();
const experiment = lab.experiment;
const it = lab.it;
const expect = Code.expect;


experiment('Uri', () => {

    experiment('join', () => {

        it('throws error if argument is not a string', (done) => {

            const fn = () => {

                Uri.join(123);
            };

            expect(fn).to.throw(Error, 'Argument is not a string');

            done();
        });

        it('returns a joined string', (done) => {

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

            done();
        });
    });

    experiment('create', () => {

        it('throws error if template is not a string', (done) => {

            const fn = () => {

                Uri.create(null, {});
            };

            expect(fn).to.throw(Error, 'Argument "template" is not a string');

            done();
        });

        it('throws error if params is not an object', (done) => {

            const fn = () => {

                Uri.create('/my/template', null);
            };

            expect(fn).to.throw(Error, 'Argument "params" is not an object');

            done();
        });

        it('returns an empty uri if an empty template was set', (done) => {

            const uri = Uri.create('', { name: 'John' });

            expect(uri).to.be.empty();

            done();
        });

        it('returns an expanded uri if params were set', (done) => {

            const uri = Uri.create('/my/{firstname}/and{?lastname}', { firstname: 'John', lastname: 'Doe' });

            expect(uri).to.equal('/my/John/and?lastname=Doe');

            done();
        });
    });
});
