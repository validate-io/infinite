'use strict';

// MODULES //

var test = require( 'tape' );
var isInfinite = require( './../lib' );


// TESTS //

test( 'main export is a function', function test( t ) {
	t.ok( typeof isInfinite === 'function', 'main export is a function' );
	t.end();
});

test( 'the function positively validates positive and negative infinity', function test( t ) {
	t.ok( isInfinite( Number.POSITIVE_INFINITY ), 'positive infinity' );
	t.ok( isInfinite( Number.NEGATIVE_INFINITY ), 'negative infinity' );
	t.end();
});

test( 'the function negatively validates anything which is not positive or negative infinity', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		Math.PI,
		0,
		-1,
		true,
		null,
		NaN,
		undefined,
		[],
		{},
		function(){}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.notOk( isInfinite( values[ i ] ), 'returns false when provided ' + values[ i ] );
	}
	t.end();
});
