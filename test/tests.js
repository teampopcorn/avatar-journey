import './tally/tally.test.js';
const test = QUnit.test;

function makeCycle(startElement) {
    switch(startElement) {
        case 'air': 
            return ['water', 'earth', 'fire'];
        case 'water':
            return ['earth', 'fire', 'air'];
        case 'earth':
            return ['fire', 'air', 'water'];
        case 'fire':
            return ['air', 'water', 'earth'];
    }
}

QUnit.module('creating a cycle test');

test('when air is chosen return array [W, E, F]', function(assert) {
    const expected = ['water', 'earth', 'fire'];
    const result = makeCycle('air');
    assert.deepEqual(result, expected);
});

test('when water is chosen return array [E, F, A]', function(assert) {
    const expected = ['earth', 'fire', 'air'];
    const result = makeCycle('water');
    assert.deepEqual(result, expected);
});

test('when earth is chosen return array [F, A, W]', function(assert) {
    const expected = ['fire', 'air', 'water'];
    const result = makeCycle('earth');
    assert.deepEqual(result, expected);
});

test('when fire is chosen return array [A, W, E]', function(assert) {
    const expected = ['air', 'water', 'earth'];
    const result = makeCycle('fire');
    assert.deepEqual(result, expected);
});




