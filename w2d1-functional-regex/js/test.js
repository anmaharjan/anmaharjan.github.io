describe("1. sum", function (){
    describe("takes an array and outputs the sum of all the items", function (){
        it("Expected output of sum([1, 2, 3, 4]) is 10", function (){
            assert.equal(10, sum([1,2,3,4]));
        });

        it("Expected output of sum([10, 20, 30, 40, 50]) is 150", function (){
            assert.equal(150, sum([10, 20, 30, 40, 50]));
        });
    });
});

describe("2. multiply", function (){
    describe("takes an array and outputs the multiplication of all the items", function (){
        it("Expected output of multiply([1, 2, 3, 4]) is 24", function (){
            assert.equal(24, multiply([1, 2, 3, 4]));
        });

        it("Expected output of multiply([10, 20, 30, 40, 50]) is 12000000", function (){
            assert.equal(12000000, multiply([10, 20, 30, 40, 50]));
        });
    });
});

describe("3. reverse", function(){
    describe("takes a string and reverse it", function(){
        it("Expected output of reverses('Javascript is awesome') is 'emosewa si tpircsavaJ'", function (){
            assert.equal("emosewa si tpircsavaJ", reverses("Javascript is awesome"));
        });

        it("Expected output of reverses('Google is god') is 'dog si elgooG", function (){
            assert.equal("dog si elgooG", reverses('Google is god'));
        });
    });
});

describe("4. filterLongWords", function (){
    describe("takes an array and filter its content based on item's length", function (){
        it("Expected output of filterLongWords(['Maharishi', 'International', 'University'], 10) is ['International']",
            function (){
                assert.deepEqual(['International'], filterLongWords(['Maharishi', 'International', 'University'], 10));
            });

        it("Expected output of filterLongWords(['a', 'bb', 'ccc', 'dddd', 'eeeee'], 2) is ['eeeee', 'dddd', 'ccc']",
            function (){
                assert.deepEqual(['ccc', 'dddd', 'eeeee'], filterLongWords(['a', 'bb', 'ccc', 'dddd', 'eeeee'], 2));
            });
    });
});
