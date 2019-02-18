const test = QUnit.test;

let scorecard = null;

function addScore(choice, scorecard) {
    if(choice === 'option 1') {
        scorecard.score += 3;
    }
    if(choice === 'option 2') {
        scorecard.score += 1;
    }
}

QUnit.testStart(function() {
    scorecard = { score: 0 };
});

QUnit.module('Adding scores');

test('when option 1 is chosen score increased by 3', function(assert) {
    //Arrange
    const good = 'option 1';
    //Act
    addScore(good, scorecard);
    //Assert
    assert.deepEqual(scorecard, { score: 3 });
});

test('when option 2 is chosen score increased by 1', function(assert) {
    //Arrange
    const good = 'option 2';
    //Act
    addScore(good, scorecard);
    //Assert
    assert.deepEqual(scorecard, { score: 1 });
});



