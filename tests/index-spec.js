var TimeFormat = require('../index');

describe('load', function() {
	var sampleTimestamp = 1434723131965;
	var sampleTime = 1249;
	it('should load', function() {
		expect(TimeFormat).toBeDefined();
		expect(TimeFormat.sec_to_hhmmss_improved).toBeDefined();
		expect(TimeFormat).toBeDefined();
	});

	it('should convert seconds to hhmmss format', function() {
		expect(TimeFormat.seconds_to_hhmmss(sampleTime)).toEqual('56681:58:21');
	});

	it('should convert seconds to hhmm format', function() {
		expect(TimeFormat.seconds_to_hhmm(sampleTime)).toEqual('398534203:19 h');
	});

	it('should load sec_to_hhmmss_improved', function() {
		expect(TimeFormat.sec_to_hhmmss_improved(sampleTime)).toEqual("<span class='duration'><strong>398534203:19</strong>:25</span>");
	});

	it('should load sec_to_decimal_hours', function() {
		expect(TimeFormat.sec_to_decimal_hours(sampleTime)).toEqual('398534203.32 h');
	});

	it('should load seconds_to_ext_hhmmss', function() {
		expect(TimeFormat.seconds_to_ext_hhmmss(sampleTime)).toEqual('56681:58:21');
	});

	it('should load seconds_to_hhmmss', function() {
		expect(TimeFormat.seconds_to_hhmmss(sampleTime)).toEqual('56681:58:21');
	});

	it('should load seconds_to_hhmm', function() {
		expect(TimeFormat.seconds_to_hhmm(sampleTime)).toEqual('398534203:19 h');
	});

	it('should load seconds_to_small_hhmm', function() {
		expect(TimeFormat.seconds_to_small_hhmm(sampleTime)).toEqual('398534203:19');
	});

	it('should load seconds_to_pretty_hhmm', function() {
		expect(TimeFormat.seconds_to_pretty_hhmm(sampleTime)).toEqual('398534203 h 19 min');
	});

	it('should load milliseconds_to_hhmmss', function() {
		expect(TimeFormat.milliseconds_to_hhmmss(sampleTime)).toEqual('398534:12:11');
	});

});