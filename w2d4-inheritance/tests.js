describe("String Test", function(){
    describe("Filtering a word from a sentence", function(){
        it("Expected output of filter('This house is not nice!') is 'This house is nice!'", function(){
            assert.equal("This house is nice!", "This house is not nice!".filter('not'))
        });

        it("Expected output of filter('You are a good person') is 'You are a person'", function(){
            assert.equal("You are a person", "You are a good person".filter('good'))
        });
    });
});


describe("Array Test", function(){
    describe("Bubble Sort", function(){
        it("Expected output of bubbleSort([6, 4, 0, 3,-2, 1]) is [-2, 0, 1, 3, 4, 6]", function(){
            assert.deepEqual([-2, 0, 1, 3, 4, 6], [6, 4, 0, 3,-2, 1].bubbleSort());
        });

        it("Expected output of bubbleSort([10, 2, 88, -99, 3, 5]) is [-99, 2, 3, 5, 10, 88]", function(){
            assert.deepEqual([-99, 2, 3, 5, 10, 88], [10, 2, 88, -99, 3, 5].bubbleSort());
        });
    });
});


describe("Inheritance Test : Teacher", function(){
    describe("Prototype teach", function(){
        it("Expected output of Teacher.teach('WAP') is 'Michael is now teaching WAP'", function(){
            let teacher1 = new Teacher();
            teacher1.initialize("Michael", 41);
            teacher1.teach("WAP");

            assert.deepEqual('Michael is now teaching WAP', teacher1.teach('WAP'));
        });

        it("Expected output of Teacher.teach('Meditation') is 'Tom is now teaching Meditation'", function(){
            let teacher2 = new Teacher();
            teacher2.initialize("Tom", 41);
            teacher2.teach("Meditation");

            assert.deepEqual('Tom is now teaching Meditation', teacher2.teach('Meditation'));
        });
    });
});