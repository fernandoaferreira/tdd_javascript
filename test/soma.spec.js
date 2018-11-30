const { expect } = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

lab.test('Retorno da função soma ...', () => {

    expect(soma(1,1)).to.equal(2);

});