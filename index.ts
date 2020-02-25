import { console } from './polyfills';

console.log('🥑 Synchronous 1');
setTimeout(() => console.log('🥣 Timeout 2'));
Promise.resolve().then(() => console.log('🍜 Promise 3'));
console.log('🍍 Synchronous 4');