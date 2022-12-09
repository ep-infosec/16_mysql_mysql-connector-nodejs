/*
 * Copyright (c) 2018, 2021, Oracle and/or its affiliates.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License, version 2.0, as
 * published by the Free Software Foundation.
 *
 * This program is also distributed with certain software (including
 * but not limited to OpenSSL) that is licensed under separate terms,
 * as designated in a particular file or component or in included license
 * documentation.  The authors of MySQL hereby grant you an
 * additional permission to link the program and your derivative works
 * with the separately licensed software that they have included with
 * MySQL.
 *
 * Without limiting anything contained in the foregoing, this file,
 * which is part of MySQL Connector/Node.js, is also subject to the
 * Universal FOSS Exception, version 1.0, a copy of which can be found at
 * http://oss.oracle.com/licenses/universal-foss-exception.
 *
 * This program is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License, version 2.0, for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin St, Fifth Floor, Boston, MA 02110-1301  USA
 */

'use strict';

/* eslint-env node, mocha */

const expect = require('chai').expect;
const docResult = require('../../../lib/DevAPI/DocResult');
const td = require('testdouble');

describe('DocResult', () => {
    let toArray;

    beforeEach('create fakes', () => {
        toArray = td.function();
    });

    afterEach('reset fakes', () => {
        td.reset();
    });

    context('fetchAll()', () => {
        it('returns an empty array when there are no items in the result set', () => {
            expect(docResult().fetchAll()).to.deep.equal([]);
            expect(docResult({ results: undefined }).fetchAll()).to.deep.equal([]);
            expect(docResult({ results: [] }).fetchAll()).to.deep.equal([]);
            expect(docResult({ results: [[]] }).fetchAll()).to.deep.equal([]);
        });

        it('returns an array containing all items in the result set', () => {
            const row = { toArray };
            const docs = [{ name: 'foo' }, { name: 'bar' }];

            td.when(toArray()).thenReturn([docs[1]]);
            td.when(toArray(), { times: 1 }).thenReturn([docs[0]]);

            expect(docResult({ results: [[row, row]] }).fetchAll()).to.deep.equal(docs);
        });
    });

    context('fetchOne()', () => {
        it('returns undefined when there are no items in the result set', () => {
            /* eslint-disable no-unused-expressions */
            expect(docResult().fetchOne()).to.not.exist;
            expect(docResult({ results: undefined }).fetchOne()).to.not.exist;
            expect(docResult({ results: [] }).fetchOne()).to.not.exist;
            /* eslint-enable no-unused-expressions */
            return expect(docResult({ results: [[]] }).fetchOne()).to.not.exist;
        });

        it('returns the next available item in the result set', () => {
            const row = { toArray };
            const docs = [{ name: 'foo' }];

            td.when(toArray()).thenReturn(docs);

            expect(docResult({ results: [[row]] }).fetchOne()).to.deep.equal(docs[0]);
        });
    });

    context('getWarnings()', () => {
        it('returns the list of warnings generated by the server for a given operation', () => {
            const warnings = ['foo', 'bar'];

            expect(docResult({ warnings }).getWarnings()).to.deep.equal(warnings);
        });
    });

    context('getWarningsCount()', () => {
        it('returns the number of warnings generated by the server for a given operation', () => {
            const warnings = ['foo', 'bar', 'baz'];

            expect(docResult({ warnings }).getWarningsCount()).to.deep.equal(3);
        });
    });

    context('toArray()', () => {
        it('returns the raw list of result set items', () => {
            const row = { toArray };
            const docs = [{ name: 'foo' }];

            // eslint-disable-next-line no-unused-expressions
            expect(docResult({ results: [] }).toArray()).to.be.an('array').and.be.empty;

            td.when(toArray()).thenReturn(docs);

            expect(docResult({ results: [[row]] }).toArray()).to.deep.equal(docs);
        });
    });
});
