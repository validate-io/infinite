'use strict';

var isInfinite = require( './../lib' );

console.log( isInfinite( Number.POSITIVE_INFINITY ) );
// returns true

console.log( isInfinite( Number.NEGATIVE_INFINITY ) );
// returns true

console.log( isInfinite( 0 ) );
// returns false

console.log( isInfinite( 1e308 ) );
// returns false

console.log( isInfinite( NaN ) );
// returns false

console.log( isInfinite( true ) );
// returns false

console.log( isInfinite( null ) );
// returns false

console.log( isInfinite( 'infinite' ) );
// returns false
