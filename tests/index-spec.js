var TimeFormat = require('../index');

describe('load', function() {
	var sampleTimestamp = 31966;
	var sampleTime = 124009;
	it('should load', function() {
		expect(TimeFormat).toBeDefined();
		expect(TimeFormat.sec_to_hhmmss_improved).toBeDefined();
		expect(TimeFormat).toBeDefined();
	});

	it('should convert seconds to hhmmss format', function() {
		expect(TimeFormat.seconds_to_hhmmss(sampleTime)).toEqual('34:26:49');
	});

	it('should convert seconds to hhmm format', function() {
		expect(TimeFormat.seconds_to_hhmm(sampleTime)).toEqual('34:26 h');
	});

	it('should load sec_to_hhmmss_improved', function() {
		expect(TimeFormat.sec_to_hhmmss_improved(sampleTime)).toEqual("<span class='duration'><strong>34:26</strong>:49</span>");
	});

	it('should load sec_to_decimal_hours', function() {
		expect(TimeFormat.sec_to_decimal_hours(sampleTime)).toEqual('34.45 h');
	});

	it('should load seconds_to_ext_hhmmss', function() {
		expect(TimeFormat.seconds_to_ext_hhmmss(sampleTime)).toEqual('34:26:49');
	});

	it('should load seconds_to_hhmmss', function() {
		expect(TimeFormat.seconds_to_hhmmss(sampleTime)).toEqual('34:26:49');
	});

	it('should load seconds_to_hhmm', function() {
		expect(TimeFormat.seconds_to_hhmm(sampleTime)).toEqual('34:26 h');
	});

	it('should load seconds_to_small_hhmm', function() {
		expect(TimeFormat.seconds_to_small_hhmm(sampleTime)).toEqual('34:26');
	});

	it('should load seconds_to_pretty_hhmm', function() {
		expect(TimeFormat.seconds_to_pretty_hhmm(sampleTime)).toEqual('34 h 26 min');
	});

	it('should load milliseconds_to_hhmmss', function() {
		expect(TimeFormat.milliseconds_to_hhmmss(sampleTime)).toEqual('34:26:49');
	});

});