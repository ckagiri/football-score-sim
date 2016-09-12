var assert = require('chai').assert;
var common = require('./common');
var GoalManager = require('../src/GoalManager');


describe('GoalManager', function () {
    var goalManager;
    var goalManager2;

    describe('#constructor(options)', function () {
        goalManager = new GoalManager({
            teamA: common.teamEngland,
            teamB: common.teamSlovakia,
            period: common.fullMatchPeriod
        });
        goalManager2 = new GoalManager({
            teamA: common.teamSlovakia,
            teamB: common.teamEngland,
            period: common.fullMatchPeriod
        });

        it('should set teams correctly', function () {
            assert.equal(goalManager.teams[0], common.teamEngland);
            assert.equal(goalManager.teams[1], common.teamSlovakia);
        });

        it('should set period correctly', function () {
            assert.equal(goalManager.period, common.fullMatchPeriod);
        });
    });

    describe('#addGoals(teamIndex, goals)', function () {
        it('should add the goals to #goals', function () {
            var goals = common.goalGenerator.generate();

            goalManager.addGoals(0, goals);

            assert.deepEqual(goalManager.goals[0], goals);
        });
    });

    describe('#append(goalManager)', function () {
        it('should not throw error', function () {
            var append = goalManager.append.bind(goalManager, goalManager);
            
            assert.doesNotThrow(append, ReferenceError);
        });

        it('should append the goals', function () {
            var goals = goalManager.goals;

            assert.equal(goals[0].length, 2);
            assert.equal(goals[1].length, 0);
        });

        it('should throw error, if teams are reversed', function () {
            var append = goalManager.append.bind(goalManager, goalManager2);

            assert.throws(append, ReferenceError);
        });
    });
});
