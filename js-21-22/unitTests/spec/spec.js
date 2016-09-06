var test = require('../js/script.js');
describe("Testing a POW metod", function() {

	it("testing normal numbers", function() {
		expect(test.pow(2,2)).toBe(4);
	});

	it("test pow-ing 0", function() {
		expect(test.pow(0,100000)).toBe(0);
	});

	it("test pow-ing 1 to 0", function() {
		expect(test.pow(1,0)).toBe(1);
	});

	it("test pows to step between 0-1", function() {
		expect(test.pow(4,0.5)).toBe("error");
	});

	it("test pow 0 to 0", function() {
		expect(test.pow(0,0)).toBe("error");
	});

	it("test pow 0 to negative step", function() {
		expect(test.pow(0,-2)).toBe("error");
	});

	it("test pows to negative step", function() {
		expect(test.pow(4,-2)).toBe(0.0625);
	});

	it("test pow negative numbers", function() {
		expect(test.pow(-4,2)).toBe(16);
	});

});

