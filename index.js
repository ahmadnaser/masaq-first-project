const add = require('./test')
console.log(add(1, 2));

const http = require('http');
const url = require('url')
const queryString = require('querystring')


http.createServer((req, res) => {
    res.writeHeader(200, { "Content-Type": "text/html" });
    console.log(req.url)
    const reqObj = url.parse(req.url)
    console.log(reqObj)
    let qs = queryString.parse(reqObj.query)
    console.log(qs.its)
    console.log(qs.iam)

    let who = "";
    let condition = "";
    //basic idea of router
    if (reqObj.pathname == "/hello" || reqObj.pathname == "/hi") {

        if (qs.its) {
            who = qs.its;
            res.write(`<h2>Who is this? ${who}</h2>`);
        }

        if (qs.iam) {
            condition = qs.iam;
            res.write(`<h3>How are you? ${condition}</h3>`);
        }

    } else if (reqObj.pathname == "/goodbye") {

        if (qs.its) {
            who = qs.its;
            res.write(`<h2>Ok? ${who}</h2>`);
        }

        if (qs.iam) {

            res.write(`<h3>See you later</h3>`);
        }

    } else {
        res.write(`<h3>Welcome to www.masaq.it</h3>`);
    }



    res.end();
}).listen(1337);

console.log('Node.js server running on port 1337');