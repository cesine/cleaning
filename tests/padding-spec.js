var leftPad = require('../padding');

describe('load', function(){
	
	it('should pad zeros', function(){
		expect(leftPad(1234, 6, '0')).toEqual('001234');
		expect(leftPad(123, 6, '0')).toEqual('000123');
	});

	it('should pad spaces', function(){
		expect(leftPad('align', 6, ' ')).toEqual(' align');
		expect(leftPad('me', 6, ' ')).toEqual('    me');
	});
});