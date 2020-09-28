import { console } from "./polyfills";

const value_null = null;
const value_undefined = undefined;
const value_empty = '';

if(!value_null) console.log('null undefined or empty');
if(!value_undefined) console.log('null undefined or empty');
if(!value_empty) console.log('null undefined or empty');