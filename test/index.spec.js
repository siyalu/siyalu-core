var assert = require('assert');
const siyalu = require('../index');

describe('Siyalu :) ', function() {
  describe('vowel modifiers', function() {
    it('ක', function() {
      const output = siyalu("ක");
      assert.equal(output, "ක");
    });
    it('කෙ', function() {
      const output = siyalu("කෙ");
      assert.equal(output, "ෙක");
    });
    it('ක්', function() {
      const output = siyalu("ක්");
      assert.equal(output, "ක්");
    });
    it('කේ', function() {
      const output = siyalu("කේ");
      assert.equal(output, "ෙක්");
    });
    it('කෞ', function() {
      const output = siyalu("කෞ");
      assert.equal(output, "ෙකෟ");
    });
    it('කෝ', function() {
      const output = siyalu("කෝ");
      assert.equal(output, "ෙකා්");
    });
  });

  describe('words', function() {
    it('කෞව', function() {
      const output = siyalu("කෞව");
      assert.equal(output, "ෙකෟව");
    });
    it('කෞව්වා', function() {
      const output = siyalu("කෞව්වා");
      assert.equal(output, "ෙකෟව්වා");
    });
  });
});
