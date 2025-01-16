## episode 1 - introduction to node js
node js = Nodejs is basically a Javascript runtime. built on chrome's V8 engine.
Nodejs helps Javascript to run outside the browser 
Nodejs has an event driven architecture that's the specialty of it.
It is capable of asynchronous I/o which is also known as non-blocking i/o.
history of node js-
2009 Ryan Dahl  developed node js
 every code u write in node js code is only js
 js can't run without js engine
 spider monkey firefox js engine was used by ryan at starting 
 after 2 days he switched to chrome's v8 engine
 Joyent company -> internal project -> run js on server
 the company told ryan join us and build this node js with us
 web js naam diyechilo starting e as web server create korbe bole 
 pore node.js naam deye as node js diye onek kichu banano jaye
 question - keno hotat node.js dorkar porlo? apache was used to create http servers which are blocking in nature
so he wanted to create a non blocking server.
advantage of non blocking server is that it can handle multiple requests with lesser no of threads.
npm created by issac came in 2010 = package manager for node 
  2011 e windows support pelo joyent + ms theke as node came in 2009 only for macos and linux
2012 e ryan maintain kora chere dilo tai responsibility pelo isaac
node r development kome gechilo ryan maintain kora stop korar por
2014 e fedor forked node js into io.js in 2014
in 2015 september node js foundation holo node js by joyent + io.js by fedor got merged into  SINGLE/OFFICIAL NODE js
  in 2019 js foundation + node js foundation merged into open js foundation and  open js foundation took  the control of nodejs
  ![introduction of node js r notes in pic format by as sir](image.png)


  ## episode 2 - Js on server
suru
## what is a server?
    server - jekono computer/device jar kache internet ache aar sei device ta programmed(in any programming language) kora in such a way that keu kono request korle ei device ta take response pathabe. erom device ke server bola hoye.
    je mal ta request korche se mal ta jeno internet r sathe connected hoye tarpor request korche.
    dewa newa using internet

  ![js on server](image-1.png)

  ![v8](image-2.png)

  ![node js](image-3.png)

  ![node js](image-4.png)

  ![ecmascript rules](image-5.png)

  ![node js is a c++ application](image-6.png)

  ![v8 is a c++ code](image-7.png)

  ![summary](image-8.png)

![DNS lookup](<Screenshot (3619).png>)

## how the internet works in depth
  phone theke data berolo packet hisabe
  tower opdi gelo (majkhane isp check kore je bhai data ta whitelist naki blacklist)
  tower data take electric signal e convert kore
  eibar optical fibre r ghar e chepe data ta pouchabe receiver r kacher tower opdi
  tarpor oi nearest tower theke abar data ta packet rupe convert hoye receiver r device e dhukbe
  this process is the working of internet.

## how the router works in depth
  router - this dabba got my mac address now whenever i msg someone this dabba gets the msg first and delivers it
  and when this dabba receives a msg it send me the msg because it knows my mac address now age ka dine mac address hack kora jeto and akhun hoyena as msg guno encrypted.
  router ta basically ekta dalal jeita amader hoye data transfer korche



## how the internet works normally
 # just a doubt
when i am searching google.com the dns lookup converts the name to the ip adress of google.com and asks whose server for a response ?

When you search for **google.com**, the process involves several steps to reach the correct **Google server**. Here's a breakdown:

1. **DNS Lookup**: 
   - When you type **google.com** in your browser, your computer doesn’t know the exact IP address of that website, so it needs to resolve the domain name to an IP address. This is where the **DNS (Domain Name System)** comes into play.
   - Your device sends a request to a **DNS server** (often provided by your ISP or a third-party service like Google DNS or Cloudflare DNS).
   - The DNS server looks up the IP address associated with **google.com** and returns the result to your device.

2. **Requesting the Web Page**:
   - Once your browser receives the IP address (say, **172.217.9.46**), it knows where to send the request.
   - Your browser then sends an HTTP request (or HTTPS, if using a secure connection) to the **Google web server** identified by that IP address.

3. **Google Server Response**:
   - The request reaches the **Google server** (hosted in a data center somewhere).
   - Google processes the request (e.g., checking your search query) and sends back the response, which is the web page containing search results.

### Who’s Server Responding?
- The **Google web server** that you’re accessing is part of **Google’s infrastructure**, which could be distributed across many data centers around the world.
- The DNS server only helps resolve the domain name to an IP address but does not serve the actual web page. Once your computer has the IP address of Google's server, the browser directly communicates with the **Google server** to fetch the content.

So, in simple terms:
- The DNS server helps find the IP address of **google.com**.
- The **Google server** responds to your request once the IP address is known.

 ## Once your browser receives the IP address (say, 172.217.9.46), it knows where to send the request.
that means whenver i am opening a website that particular website has a own server which is responding 
just like when i serach for google google server responds
same as flipkart amazon

Yes, exactly! Each website typically has its own **server** or a **set of servers** that respond to your requests. Here's how it works for different websites:

1. **Unique Servers for Each Website**:
   - **Google** has its own servers that host **google.com**.
   - **Flipkart** has its own servers for **flipkart.com**.
   - **Amazon** has its own servers for **amazon.com**.

   These servers handle your requests, such as displaying a webpage, processing a search query, or handling a purchase. 

2. **DNS and IP Resolution**:
   - When you type a website's name (like **flipkart.com** or **amazon.com**) into your browser, DNS resolves the domain name to an IP address.
   - Your browser then sends an HTTP or HTTPS request to the server identified by that IP.

3. **Server Response**:
   - Once the server (e.g., Google's server, Flipkart's server, or Amazon's server) receives the request, it processes it and sends back the appropriate response, like the content of the webpage, products, or search results.

### Servers Are Often Distributed:
- **Big websites** like Google, Flipkart, and Amazon typically use **multiple servers** and **content delivery networks (CDNs)** spread across various locations around the world. This helps them handle large amounts of traffic and deliver content quickly to users.
- For example, Google's servers are part of a vast network spread across data centers in different regions. Similarly, Amazon uses a combination of servers to serve millions of users at once.

### In Summary:
- Each website has its own **server or set of servers** that responds to your request.
- The DNS system helps find the correct IP address for that server.
- Once the IP address is found, the browser directly communicates with the server of that specific website (Google, Flipkart, Amazon, etc.) to fetch and display the page.

## difference between http vs https

internet e data dewa newa i.e. data request response http chara hobena
only protocol to surf internet is http
http hocche set of rules(jara internet toiri koreche tara ei rule guno ke baniyeche) jeita follow na korle we cant do internet surfing i.e., data dewa newa
isp- internet service provider ra ei rules guno ke follow korbei

now the difference-->
http e thakle website r data ta ekta hacker read korte parbe this is extremely dangerous

https e thakle website r data ta ekta hacker read korte parbe na as encrypted form e thakbe human readable form e thakbe na

thats why https >> http


## ports-

now server r sathe connection korte gele we need ports.
ports - the places through which we can pass through to connect with the server.
ports are just like gates which allows us to connect with the server.
4-5 digit number like 1234 , 3000.

there are two types of ports open vs closed ports

suppose ami amar barite dhukte chaichi amar barir janla diye whiich is closed that means eita closed port so i cant enter the house using this port

eibar suppose ami ekta mall e dhukte chaichi dorja diye jeita khola ache
tarmane its a open port from which we can enter.

we can choose our own port which is not already running.







## episode 3 - lets write code
install node js
node -v === version of node

npm -v automatically install hoye jaye

![how tp run node code](image-9.png)

![running js on node runtime  environment](image-10.png)
node js = ja

![node js = v8 engine + super power](image-11.png)

![amra je code ta likhlam oita v8 engine ke pass kora hoye and that code is executed by v8 engine](image-12.png)


vscode installation

![first node js code](image-13.png)

![global === global object aka one of the super powers  is provided by nodejs ](image-14.png)

![global object of node js === global](image-15.png)

![this keyword in node js outputs an empty object until in frontend this keyword outputs window ie the global object of browser](image-16.png)


## globalThis is the same global object name for all the environments.

![globalThis](image-17.png)

![globalThis == global](image-18.png)

## episode 4 - module,export,require

a file is known as module

now amra jokhun onno ekta module r code entry file ie app.js e run korate chai 
tokhun amra require fn ta use kori 
eg 
app.js e -
require("./xyz.js");

xyz.js e-
console.log("pb7 is typing");

output -
pb7 is typing.

a module doesn't leak its fn and variables
but at default ekta module nijer variable fn ke protect kore
so we cant directly access them from app.js 
![proof](image-19.png)
amader export module korte hobe sei var ba fn ta jeitar access amra dite chai
ebong import korte hobe oi particular var ba fn ta
![module.exports for a fn](image-20.png)
sum.js file e-
function calculateSum(a, b) {
  const sum = a + b;

  console.log(sum);
  

}

module.exports = calculateSum;


now if we want to export both var and fns we have to use object
![app.js file](image-21.png)
![sum.js file](image-22.png)



![another way of importing and exporting](image-23.png)

first create a package.json file and change the type to module 

tarpor directly export korte parbo
// 2nd way of exporting the function and variable is as shown below

 export function calculateSum(a, b) {
  const sum = a + b;
  console.log(sum);
}
export var p = " Hello Pallab";

// 2nd way of importing the function and variable is as shown below
import {calculateSum,p} from "./sum.js";
var a = 10;
var b = 20;
calculateSum(a, b);
console.log(p);

## akshay saini sir will use old way  common js module for this series
so either package.json uriye debo or
package.json e type = common js kore debo to go bavk to cjs module game of import and export


![all differences btw cjs and mjs](image-24.png)

## non strict mode example -
suppose we are writing a var with giving its type it will run in cjs
eg .   p=20;
console.log(p); //20

but
## strict mode example -
suppose we are writing a var with giving its type it will not run in mjs
eg .   p=20;
console.log(p); // error p not defined

what is Module.exports - empty object - {}

console.log(module.exports); // empty object

another way of exporting-

module.exports.p=p;
module.exports.calculateSum=calculateSum;
