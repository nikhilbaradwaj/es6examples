import {Polygon} from '../../es6/classes'
describe('Test suite for ES6 classes', function () {
    it('Creates a new instance of Polygon', function () {
        var p = new Polygon(6);
        expect(p).not.toBeUndefined();
    })
});