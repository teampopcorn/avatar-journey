const test = QUnit.test;

function tally(score) {
    if(score > 21) {
        return 'good';
    } else if(score > 15) {
        return 'okay';
    } else {
        return 'bad';
    }
}


QUnit.module('tally scores');

test('when score greater than 21 then return good', function(assert) {
    const score = 24;
    const result = tally(score);
    assert.equal(result, 'good');
});
test('when score greater than 15 then return okay', function(assert) {
    const score = 16;
    const result = tally(score);
    assert.equal(result, 'okay');
});
test('when score lower than 16 then return bad', function(assert) {
    const score = 1;
    const result = tally(score);
    assert.equal(result, 'bad');
});



