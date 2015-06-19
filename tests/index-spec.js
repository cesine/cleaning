var TimeFormat = require('../index');

describe('load', function(){
	it('should load', function(){
		expect(TimeFormat).toBeDefined();
		expect(TimeFormat.sec_to_hhmmss_improved).toBeDefined();
		expect(TimeFormat).toBeDefined();
	});

	it('should convert seconds to hhmmss format', function(){
		expect(TimeFormat.seconds_to_hhmmss(1434723131965)).toEqual('56681:58:21');
	});

	it('should convert seconds to hhmm format', function(){
		expect(TimeFormat.seconds_to_hhmm(1434723131965)).toEqual('398534203:19 h');
	});
});