function timeout() {

    console.log('Timeout is called now');

}

setTimeout(timeout, 15000);

console.log('firstly this msg will be shown');


function timeout2() {

    console.log('Timeout is called now again ');
}
setTimeout(timeout2, 10000);
console.log('secondly this msg will be shown');