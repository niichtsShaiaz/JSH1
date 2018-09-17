const crypto = require('crypto');
var SIZE = 48;


crypto.randomBytes(SIZE, (err, buf) => {
    if (err) throw err;
    //console.log(buf.toString('hex'));
});

function createNumber(sizeVar) {
    var number = crypto.randomBytes(sizeVar).toString("hex");
    //console.log(number);
    return number;
}
createNumber(48);
/*
var myPromise = new Promise(
    function (resolve, reject) {
        if (true) {
            var securenumber = createNumber(SIZE)
            resolve(securenumber); // fulfilled
        } else {
            var err = new Error('dead');
            reject(err); // reject
        }

    }
);

var getNumber = function (SIZE) {
    myPromise(SIZE)
        .then(function (fulfilled) {
            console.log(fulfilled);
        })
        .catch(function (error) {
            console.log("error msg");
            console.log(error.message);
        });
};

getNumber();
*/

let promiseFactory = function (size, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { //To demonstrate an async call
            var ok = true;  // simulates the result of the operation
            if (ok) {
                var n = createNumber(size);
                resolve(n);
            }
            else {
                reject("UPPPPs");
            }
        }, delay);
    });
};
let p = promiseFactory(48, 1000)
let promises = [promiseFactory(48),
promiseFactory(36),
promiseFactory(24)];


Promise.all(promises)
    .then((data) => {
        console.log(data);
    }).catch("error");