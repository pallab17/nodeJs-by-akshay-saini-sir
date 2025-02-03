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

![amra je code ta likhlam oita v8 engine ke pass kora hoye and that code is executed by v8 engine](pics/image-12.png)


vscode installation

![first node js code](image-13.png)

![global === global object aka one of the super powers  is provided by nodejs ](image-14.png)

![global object of node js === global](image-15.png)

![this keyword in node js outputs an empty object until in frontend this keyword outputs window ie the global object of browser](image-16.png)


## globalThis is the same global object name for all the environments.

![globalThis](image-17.png)

![globalThis == global](/pics/image-18.png)

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

## what is Module.exports - empty object - {}

console.log(module.exports); // empty object

another way of exporting-

module.exports.p=p;
module.exports.calculateSum=calculateSum;


## always export and import as a object for a better code understanding

## create a folder calculate and put the two files sum.js and multiply.js inside it

## imp pattern 
## now the thing is we are importing add fn,multiply fn from different files 
ans -->
so  we want to import them together from the calculate folder itself
how will we do it?

we are gonna create a file index.js and inside this index.js we will import the fns first that we want to import in app.js

after that we are gonna export the index file

and lastly we are gonna import all the fns we need from the index.js file directly

ekta jayega theke sob kota fn import korchi basically

// directly importing all the functions and variables from the index.js file
const {calculateMultiply, calculateSum,p} = require("./calculate/pallab");
// we dont need to write the index.js file name as node will automatically search for the index.js file if we dont write the file name as it will assume its a type of folder import

## // we can keep whatever file name we want index.js is not compulsory
## index.js file name renamed to pallab.js for proving.


# how to import a json file in app.js file
![importing json data](image-25.png)
![data.json](image-26.png)


# episode 5 - Diving into the NodeJS Github repo

In this episode, we'll explore how modules actually work behind the scenes. We'll dive into how modules load into a page and how Node.js handles multiple modules, focusing on a deep dive into the
module.exports and require functions


Behind the scenes
In JavaScript, when you create a function…
function x () {
const a = 10;
function b () {
console.log("b");
}
}
Will you be able to access this value? no
console.log(a);
//op - a is not defined 


Q: if u execute this code, will you be able to access it outside the
function?
A:
You cannot access a value outside the function x because it is defined within the
function's scope. Each function creates its own scope, so variables inside a
function are not accessible from outside that function.
To learn more about scope, check out this video: Understanding Scope in
JavaScript.
imp concept 🧐
Modules in Node.js work similarly to function scopes. When you require a file,
Node.js wraps the code from that file inside a function. This means that all
variables and functions in the module are contained within that functions
scope and cannot be accessed from outside the module unless explicitly
exported.
To expose variables or functions to other modules, you use module.exports . This allows you to export specific elements from the module, making them
 accessible when required elsewhere in your application.
All the code of a module is wrapped inside a function when you call require .
This function is not a regular function; its a special type known as an IIFE
(Immediately Invoked Function Expression). Heres how it works:
(function () {
 // All the code of the module runs inside here
})();

In this pattern, you create a function and then immediately invoke it. This is
different from a normal function in JavaScript, which is defined and then called
separately:
function x(){}
x();
In Node.js, before passing the code to the V8 engine, it wraps the
module code inside an IIFE. The purpose of IIFE is to:
 Immediately Invoke Code: The function runs as soon as it is defined.
 Keep Variables and Functions Private: By encapsulating the code within the
IIFE, it prevents variables and functions from interfering with other parts of the
code. This ensures that the code within the IIFE remains independent and
private.
Using IIFE solves multiple problems by providing scope isolation and immediate
execution.
![iife modules](image-1.png)
![iife](image-2.png)
![iife full](image-3.png)
![iife fn](image.png)

![steps behind require fn](image-4.png)


# episode 6 - libuv async io

![Js synchronous single threaded lanaguage](image-5.png)

# explain me thread
Single-threaded and Multi-threaded
like a kid

# Alright, imagine your computer is like a pizza delivery shop. The "thread" is like a delivery person who takes pizzas (tasks) from the shop to the customers.

### Single-Threaded:
In a single-threaded shop, you have **only one delivery person**. They take one pizza at a time, deliver it, and then come back to the shop to pick up the next pizza. It works fine if the orders are few and simple. But if one delivery takes a long time, the others have to wait.

- **Example**: You’re playing a video game, and only one thing happens at a time—when you press a button, the game responds one action at a time.

### Multi-Threaded:
In a multi-threaded shop, you have **multiple delivery people**. Each person can take a pizza and deliver it simultaneously. While one is delivering a pizza, another can deliver another pizza to a different customer. It’s much faster and more efficient for handling lots of orders.

- **Example**: You’re using a smartphone. While you're watching a YouTube video, you can also receive notifications and download updates in the background—all at the same time.

### Key Difference:
- **Single-threaded**: One task at a time.
- **Multi-threaded**: Many tasks at the same time.

Threads help your computer work smarter by doing many things at once!

 # A thread is the smallest unit of execution within a process in an
operating system. It represents a single sequence of instructions
that can be managed independently by a scheduler. Multiple
threads can exist within a single process, sharing the same
memory space but executing independently. This allows for
parallel execution of tasks within a program, improving efficiency
and responsiveness.
explain me this like a kid
ChatGPT said:
ChatGPT
Alright, let's break it down super simple:

# Imagine your computer is like a big house where work happens (a process). Inside the house, there are workers (threads). Each worker is doing a job, like cleaning, cooking, or fixing stuff.

Here's how it works:

A thread is like one worker in the house. This worker does a specific job, step by step, following instructions (like cleaning a room or making lunch).

A process is the whole house. It's the big workspace where all the workers (threads) live and do their tasks.

Multiple threads (workers) can work in the same house (process) at the same time, sharing the same tools and space (memory). For example, if one worker is cooking in the kitchen, another can clean the living room.

Since they're working together, they can finish things faster! This is called parallel execution because they’re doing different jobs at the same time.

Why is this useful?
Instead of waiting for one worker to finish everything, you get the job done quicker because many workers help out. Your computer can handle lots of stuff at once, like playing music, running a game, and downloading a file all at the same time!


# thread is basically a kajer lok which executes a small portion of our task(process)

suppose 20 ta dish majhte hobe
kajer masi ekta kore majche otai

eibar js r jonno ekta kajer masi dorkar jar modhe abar v8 engine o cholche
eibar ei kajer masi ta js r ekta kore line execute korbe

![synchronous](image-6.png) blocking operation
![asynchronous](image-7.png) non blocking operation

js is synchronous but with  nodejs super power it becomes asynchronous

![sync vs async](image-8.png)

![sync code1 ](image-10.png)
![sync code 2](image-9.png)

# js doesnt have a concept of time

![how will v8 engine do async work?](image-11.png)

![we need super power!](image-12.png)

![libuv is our super power](image-13.png)

![v8 delegates the async work to libuv](image-14.png)

![libuv executes most of the async work for us ](image-15.png)

![working of libuv part 1](image-16.png)

![working of libuv part 2](image-17.png)
fec toiri howar time  e heap memory  e result variable store korchi

ar after fec is going out of the call stack the  garbage collector will collect the result variable from the  heap memory 


![libuv r kaj](image-18.png)
libuv ke js engine async fn guno diyeche like api call,fs,settimeout
so after ei api call,fs,settimeout r kaj sesh howar por
libuv oi callback fn guno ke v8 engine ke diye bole bhai amar kaj sesh eibar tui execute kor ei callback fn gulo
after executing this callback fns our job is over.




![node js has asynchronous I/O or non blocking I/O](image-19.png)
I/O - input output 
ei kaj guno ke input output bola hoye
ei kaj = asynchronous kaj gulo jerom api call, read file aar set timeout fn ei pic e
node js r kache  ei non blocking I/O model ache bolei its famous.


# episode 7 - sync async code settimeout zero code

 # this episode is the code implementation of the previous episode aka 6

![execution order ](image-20.png)


![cpu r feel newa xd by blocking the main thread](image-21.png)


if u notice the sync functions like readfilesync doesnt have any callback fns
keno thakbe?
thori na libuv r kaj ache lol

![settimeout flow](image-22.png)

settimeout zero -
setTimeout(() => {
  console.log("call me right now ");
}, 0);

jotoi bolo 0ms e chalao
main call stack phaka na thakle async fn r callback fn run korbe na sona


# episode 8 - how v8 engine works - behind the scenes

![alt text](image-23.png)
![alt text](image-37.png)

![alt text](image-24.png)

![alt text](image-25.png)

when our code's ast cant be generated then we get syntax error

![alt text](image-26.png)

![alt text](image-27.png)

![alt text](image-28.png)

![alt text](image-29.png)

![alt text](image-30.png)


![alt text](image-31.png)

![alt text](image-32.png)

![alt text](image-33.png)

![alt text](image-34.png)

![alt text](image-35.png)

![alt text](image-36.png)

# episode 9 - libuv 

![libuv](image-38.png)

asynchronous aar non blocking io is possible due to libuv

![alt text](image-39.png)

callback fn gulo libuv r callback queue te output niye ferot ese bose thakbe

eibar event loop r kaj holo check kora v8 engine r call-stack free naki busy aar check kora callback queue te kono callback fn pore ache kina

jodi v8 r call-stack busy thake callback fn guno bosei thakbe wait kore

jokhun v8 engine r call-stack free hobe event loop seita lokkho kore callback fn take callstack push kore execute korbe

![event loop](image-40.png)

time wala callback gulo like setTimeout gets the 1st priority ie timer phase e execute hoye

async callback fn gulo 2nd priority paye ie poll phase

set immediate callback fn 3rd priority paye

close phase e je fn gulo close ba stop hocche seiguno priority paye
eg socket close

![blue circle](image-41.png)

internal loop ta every phase r age run kore

so basically age ei internal loop ta run korbe after that timer phase chole tarpor abar
ei internal loop ta run korbe after that poll phase cholbe tarpor abar
ei internal loop ta run korbe after that check phase cholbe tarpor abar
ei internal loop ta run korbe after that close phase cholbe 

ei jinis ta continuously repeat hobe 

# ei event loop r bhetore loop duto tokhun ei run korbe jokhun callstack empty thakbe

![demo 1 ](image-42.png)

![demo 2.1](image-43.png)

![demo 2.2](image-44.png)

![demo 2.3](image-45.png)

![demo 3.1](image-46.png)
![demo 3.2](image-47.png)

![demo 3.3](image-48.png)

![ my output](image-49.png)


![event loop r kaj na thakle event loop poll phase e wait kore bose thake](image-50.png)



browser r event loop aar node r event loop different

![demo 4.1](image-51.png)

![demo 4.2](image-52.png)

![demo 4.3](image-53.png)

![my output](image-54.png)

![my output for demo 4.4](image-55.png)



# episode 10 - thread pool

![thread pool](image-59.png)

![node pg e event loop](image-56.png)

![libuv pg e event loop](image-57.png)


![event loop](image-58.png)

![alt text](image-60.png)

Whenever there's an asynchronous task, V8 offloads it to libuv. For example,
when reading a file, libuv uses one of the threads in its thread pool. The file
system (fs) call is assigned to a thread in the pool, and that thread makes a
request to the OS. While the file is being read, the thread in the pool is fully
occupied and cannot perform any other tasks. Once the file reading is complete,
the engaged thread is freed up and becomes available for other operations. For
instance, if you're performing a cryptographic operation like hashing, it will be
assigned to another thread. There are certain functions for which libuv uses the
thread pool.
In Node.js, the default size of the thread pool is 4 threads:
UV_THREADPOOL_SIZE=4
Now, suppose you make 5 simultaneous file reading calls. What happens is that 4
file calls will occupy 4 threads, and the 5th one will wait until one of the threads is
free.

# Now that you have enough knowledge, answer this question: Is Node.js singlethreaded or multi-threaded?
 # If you're dealing with synchronous code, Node.js is single-threaded. But if you're dealing with asynchronous tasks, it utilizes libuv's thread pool, making it multithreaded.


 ## my qs is if the async code is executed using a thread in thread pool then why it is again executed in callstack 
ChatGPT said:
ChatGPT
This question gets to the heart of how asynchronous operations work in systems like libuv and the broader Node.js ecosystem. Let's clarify what's happening:

## Why Async Code Uses Both the Thread Pool and the Call Stack
Thread Pool Execution:

## When you execute an asynchronous operation (e.g., file I/O, uv_queue_work), libuv offloads the blocking or computationally intensive part to a thread in the thread pool. This allows the main event loop to continue running without being blocked.Callback Mechanism: Once the thread pool worker completes its task, it reports the result back to the event loop.At this point, the associated callback is queued in the event loop’s task queue (or "callback queue"). Call Stack Execution: The event loop continuously checks its task queue for pending callbacks.When it finds one (like the callback for your async operation), it pushes the callback onto the call stack for execution.The code inside the callback is synchronous and executes sequentially on the main thread.
Key Insight
The callback is executed on the main thread (and therefore appears on the call stack) because libuv’s design ensures that JavaScript (or other single-threaded code) runs in a single thread to maintain thread safety and avoid concurrency issues.

Even though the "work" part of the asynchronous task was done in the thread pool, the result processing happens back in the main thread. This way:

The main thread (event loop) is always the context for JavaScript code execution.
Developers don't need to worry about thread synchronization or race conditions in their callback code.



This question gets to the heart of how **asynchronous operations** work in systems like **libuv** and the broader **Node.js** ecosystem. Let's clarify what's happening:

### **Why Async Code Uses Both the Thread Pool and the Call Stack**

1. **Thread Pool Execution**:
   - When you execute an asynchronous operation (e.g., file I/O, `uv_queue_work`), libuv offloads the blocking or computationally intensive part to a thread in the thread pool.
   - This allows the main event loop to continue running without being blocked.

2. **Callback Mechanism**:
   - Once the thread pool worker completes its task, it reports the result back to the **event loop**.
   - At this point, the associated **callback** is queued in the **event loop’s task queue** (or "callback queue").

3. **Call Stack Execution**:
   - The event loop continuously checks its task queue for pending callbacks.
   - When it finds one (like the callback for your async operation), it pushes the callback onto the **call stack** for execution.
   - The code inside the callback is synchronous and executes sequentially on the main thread.

### **Key Insight**
The callback is executed on the main thread (and therefore appears on the call stack) because libuv’s design ensures that JavaScript (or other single-threaded code) runs in a single thread to maintain thread safety and avoid concurrency issues.

Even though the "work" part of the asynchronous task was done in the thread pool, the **result processing** happens back in the main thread. This way:
- The main thread (event loop) is always the context for JavaScript code execution.
- Developers don't need to worry about thread synchronization or race conditions in their callback code.

---

### **Example Walkthrough**
Consider this pseudo-process for an async file read:

```javascript
const fs = require('fs');

fs.readFile('example.txt', (err, data) => {
  console.log('File read completed:', data.toString());
});
```

#### Steps:
1. **API Call**:
   - `fs.readFile` is called.
   - Internally, libuv delegates the file read operation to a thread in the thread pool.

2. **Thread Pool Work**:
   - A thread from the thread pool performs the blocking file read operation.

3. **Callback Queueing**:
   - When the thread completes the task, the result (file content) is passed to the event loop and queued for the callback to run.

4. **Call Stack Execution**:
   - The event loop dequeues the callback and pushes it onto the main thread’s call stack for execution.
   - This is why you see the callback execute in the **call stack**.

---

### **Why This Design?**

1. **Thread Safety**:
   - JavaScript was designed as a single-threaded language. This avoids complexities like race conditions and deadlocks.

2. **Non-Blocking Design**:
   - The thread pool handles blocking tasks. The event loop handles lightweight, high-frequency tasks efficiently.

3. **Separation of Concerns**:
   - Blocking and computationally intensive work is delegated to worker threads.
   - Callback execution happens in the single-threaded JavaScript context.

---

### **Visualizing the Flow**

Here’s a high-level breakdown:

1. **Initial call** (e.g., `fs.readFile`) → Non-blocking API.
2. **Task delegation** → Thread pool does the heavy lifting.
3. **Completion notification** → Thread pool notifies the event loop.
4. **Callback queueing** → Event loop schedules the callback.
5. **Callback execution** → Callback runs on the call stack in the main thread.

---

### **Summary**

The async code executes on the thread pool to prevent blocking the main thread. The **callback**, however, must execute on the main thread (call stack) because JavaScript operates in a single-threaded environment. This ensures the program remains thread-safe and aligns with JavaScript's non-blocking, event-driven design.


## Q Can you change the size of the thread pool? A Yes, you can change the size of the thread pool by setting the UV_THREADPOOL_SIZEenvironment variable. For example, you can set it to 8 like this: 
## process.env.UV_THREADPOOL_SIZE = 8;
## If your production system involves heavy file handling or other tasks that benefitfrom additional threads, you can adjust the thread pool size accordingly to better suit your needs.

![alt text](image-61.png)

Ah, I see what you're asking now! You're wondering whether **simultaneous reading and writing on a socket connection** is the reason for blocking. The short answer is **no, simultaneous reading and writing on a socket does not inherently cause blocking**. Let me explain.

---

### **Key Points to Understand**
1. **Sockets Can Handle Simultaneous Read and Write**:
   - A socket is full-duplex, meaning it can read and write data simultaneously. 
   - The **read side** and **write side** of a socket are independent of each other. Reading from a socket doesn’t interfere with writing to it, and vice versa.

2. **Blocking Happens Due to Buffer States**:
   - **Write Blocking**: Happens if the send buffer (used for writing) is full. This can occur if the network is slow, the receiver is slow, or the receiver’s TCP window size is small.
   - **Read Blocking**: Happens if there’s no data available to read yet, and the application tries to read synchronously.

3. **Why Blocking Isn't Caused by Simultaneous Read/Write**:
   - The operating system manages the send buffer (for writes) and the receive buffer (for reads) separately.
   - You can read and write concurrently without causing interference between the two operations.

---

### **So Why Might It Seem Like Blocking?**
If you’re experiencing blocking while trying to write during an ongoing read, it’s likely due to one of these reasons:
1. **Full Send Buffer**:
   - The write operation blocks because the send buffer is full, not because of the read operation happening at the same time.
   
2. **Blocking Socket Mode**:
   - If the socket is in its default **blocking mode**, any operation (read or write) will wait until it completes successfully:
     - Writes wait for space in the send buffer.
     - Reads wait for data to arrive.

3. **TCP Flow Control or Network Conditions**:
   - If the receiver is slow or the network is congested, it affects the send buffer’s availability, leading to blocking on writes.

---

### **How to Avoid Blocking in This Case**
1. **Non-Blocking Mode**:
   - Set the socket to non-blocking mode so that `read` and `write` calls return immediately if they can’t proceed, rather than waiting.

   ```c
   int flags = fcntl(sockfd, F_GETFL, 0);
   fcntl(sockfd, F_SETFL, flags | O_NONBLOCK);
   ```

2. **Use Asynchronous I/O**:
   - Use an event-driven mechanism (like **libuv**, **epoll**, or **select**) to handle reads and writes without blocking.
   - These libraries notify you when a socket is ready for reading or writing.

3. **Separate Threads**:
   - Use separate threads for reading and writing, if you’re working in a multithreaded environment, to ensure one doesn’t block the other.

---

### **Conclusion**
Simultaneous reading and writing on a socket **do not cause blocking by themselves** because they operate on separate buffers. Blocking occurs due to other factors like full send buffers, network delays, or the use of blocking mode. Switching to non-blocking sockets or asynchronous I/O can help avoid these issues and ensure smooth operation.




![lesson part 1](image-62.png)


![lessons part 2](image-63.png)

No, the **thread pool** does not execute `setTimeout` functions in Node.js. Instead, `setTimeout` is handled entirely by the **event loop** in Node.js, not the thread pool. Here's how it works:

---

### **How `setTimeout` Works**
1. **Timer Registration**:
   - When you call `setTimeout(callback, delay)`, Node.js sets up a timer in its **timers phase**.
   - The timer counts down the specified delay using the event loop's internal mechanisms.

2. **Callback Queue**:
   - Once the delay has elapsed, the callback you provided is added to the **callback queue** for the event loop.

3. **Event Loop Execution**:
   - The event loop picks up the callback from the queue and executes it when it reaches the **timers phase**, as long as the main thread is not busy.

---

### **Where the Thread Pool Is Involved**
The **thread pool** in Node.js (powered by **libuv**) is used for:
- File system operations (e.g., `fs.readFile`).
- DNS lookups (e.g., `dns.lookup`).
- Certain crypto operations (e.g., `crypto.pbkdf2`).
- Compression (e.g., `zlib`).

These are **blocking tasks** that are offloaded to the thread pool to keep the event loop responsive. However, **timers like `setTimeout` or `setInterval` are not blocking operations**, so they don’t involve the thread pool at all.

---

### **Summary**
- **No**, the thread pool does not execute `setTimeout` functions.
- The `setTimeout` function is managed by the event loop itself.
- The thread pool is only used for specific blocking operations, not for managing timers.

The **event loop** and the **thread pool** in Node.js are key parts of its architecture, but they handle different types of tasks. Here's a breakdown:

---

### **Managed by the Event Loop**
The **event loop** is responsible for managing non-blocking operations and orchestrating the execution of asynchronous tasks. Tasks handled directly by the event loop include:

1. **Timers**:
   - `setTimeout`
   - `setInterval`
   - `setImmediate`

2. **I/O Polling**:
   - Monitoring sockets for readiness (e.g., readable, writable).
   - Handling network requests and responses.

3. **Microtasks**:
   - Promises (e.g., `.then`, `.catch`, `.finally`).
   - `process.nextTick`.

4. **Events**:
   - Emitting and handling events through `EventEmitter`.

5. **Callbacks from Non-blocking APIs**:
   - APIs like `fs.readFile` and `http.get` don’t block the event loop. They offload work to the thread pool or OS, and the results are passed back to the event loop via callbacks.

---

### **Managed by the Thread Pool**
The **thread pool** in Node.js (part of **libuv**) handles tasks that are **CPU-bound** or involve **blocking operations**. Examples include:

1. **File System Operations**:
   - `fs.readFile`, `fs.writeFile`, `fs.appendFile` (for non-buffered I/O).
   - Any blocking file operations.

2. **Crypto Operations**:
   - `crypto.pbkdf2`
   - `crypto.scrypt`
   - `crypto.randomBytes`
   - `crypto.createHash` (depending on the operation).

3. **DNS Resolution**:
   - `dns.lookup` (but not `dns.resolve`, which uses a different mechanism).

4. **Compression**:
   - `zlib` methods like `zlib.deflate` and `zlib.gzip`.

5. **Some User-Defined Work**:
   - If you use Node.js's **worker threads** or the `workerpool` library, tasks you define will also run in the thread pool.

---

### **How They Work Together**
1. The event loop coordinates everything. It delegates blocking operations to the thread pool when necessary.
2. Once a thread pool task completes, the event loop picks up the callback and executes it.

---

### **Key Difference**
- **Event Loop**: Best for lightweight, non-blocking tasks.
- **Thread Pool**: Handles heavy, CPU-bound, or blocking tasks that could otherwise freeze the event loop.

---

### **Summary Table**

| **Task Type**                  | **Managed By**     |
|--------------------------------|--------------------|
| `setTimeout`, `setInterval`    | Event Loop         |
| Promises, `process.nextTick`   | Event Loop         |
| HTTP Requests (e.g., `http.get`) | Event Loop         |
| Sockets (I/O readiness)        | Event Loop         |
| File System APIs (e.g., `fs.readFile`) | Thread Pool     |
| Crypto (e.g., `crypto.pbkdf2`) | Thread Pool        |
| Compression (e.g., `zlib.gzip`) | Thread Pool        |
| DNS Lookups (`dns.lookup`)     | Thread Pool        |

This division ensures that the event loop remains fast and responsive by delegating heavier or blocking tasks to the thread pool.


Understanding whether a task is **blocking** or **non-blocking** in Node.js depends on how the task interacts with the **event loop** and whether it makes the event loop wait for its completion. Here's a guide to help you distinguish between blocking and non-blocking tasks:

---

### **1. What Does "Blocking" Mean?**
A **blocking task** is one that prevents the event loop from continuing until the task completes. This can cause delays and make the application unresponsive. 

A **non-blocking task**, on the other hand, allows the event loop to keep running while the task is performed in the background or asynchronously.

---

### **2. Key Characteristics of Blocking Tasks**
- Executes synchronously.
- Keeps the CPU or event loop occupied until the task is finished.
- Typically found in **synchronous APIs**.

Examples:
- `fs.readFileSync` or `fs.writeFileSync` (file operations in synchronous mode).
- Heavy CPU computations (e.g., loops, data processing, encryption).
- Blocking network or I/O calls (rare in Node.js but possible if using certain synchronous libraries).

---

### **3. Key Characteristics of Non-Blocking Tasks**
- Executes asynchronously.
- Delegates the task to the OS, thread pool, or other subsystems, allowing the event loop to proceed.
- Typically uses callbacks, promises, or async/await for handling results.

Examples:
- `fs.readFile` or `fs.writeFile` (asynchronous file operations).
- Network requests (e.g., HTTP, WebSocket).
- Timers like `setTimeout` or `setInterval`.

---

### **4. How to Identify Blocking Tasks**
1. **Check the API Name**:
   - Functions with "Sync" in their name are typically blocking (e.g., `fs.readFileSync`).
   - Asynchronous versions don’t have "Sync" in the name and often accept callbacks or return promises (e.g., `fs.readFile`).

2. **Understand the Task Type**:
   - **File System Operations**:
     - Blocking: `fs.readFileSync`
     - Non-blocking: `fs.readFile`
   - **CPU-Bound Tasks**:
     - Example: Complex mathematical calculations (e.g., processing large arrays).
     - These are blocking unless offloaded to a worker thread.
   - **Network I/O**:
     - Non-blocking by default in Node.js (e.g., `http.get`).

3. **Run a Simple Test**:
   - Use a timer to measure whether the task delays the event loop:
     ```javascript
     console.log("Start");
     
     setTimeout(() => console.log("Timer executed"), 1000);

     // Blocking task
     const start = Date.now();
     while (Date.now() - start < 3000); // Simulates a blocking task
     
     console.log("End");
     ```
   - If the timer is delayed, the task is blocking.

4. **Documentation**:
   - Node.js documentation explicitly mentions whether an API is blocking or non-blocking.

---

### **5. Common Blocking Scenarios**
- Synchronous file system operations (e.g., `fs.readFileSync`).
- Long-running loops or recursive operations.
- Synchronous crypto functions (e.g., `crypto.pbkdf2Sync`).
- Heavy JSON parsing for large data sets.

---

### **6. Common Non-Blocking Scenarios**
- Asynchronous file system operations (e.g., `fs.readFile`).
- HTTP requests and responses.
- Database queries (when using asynchronous drivers).
- Timer functions (`setTimeout`, `setImmediate`).

---

### **7. Guidelines to Avoid Blocking the Event Loop**
1. Use **asynchronous APIs** whenever possible.
2. Offload heavy computations to **worker threads**.
3. Use libraries like **streams** for processing large amounts of data incrementally.
4. Monitor your code using tools like `clinic.js` to detect blocking operations.

---

### **Example Comparison**
```javascript
// Blocking Example
const fs = require('fs');
console.log("Start");
const data = fs.readFileSync('largefile.txt', 'utf8'); // Blocks the event loop
console.log(data);
console.log("End");

// Non-Blocking Example
console.log("Start");
fs.readFile('largefile.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data); // Executes after "End"
});
console.log("End");
```

Output for Blocking:
```
Start
[File content here]
End
```

Output for Non-Blocking:
```
Start
End
[File content here]
```

---

### **Conclusion**
Blocking tasks prevent the event loop from running efficiently and should be avoided in most cases in Node.js. To identify whether a task is blocking or non-blocking:
- Check if the API has "Sync" in its name.
- Understand the nature of the task (e.g., I/O is often non-blocking, CPU work is often blocking).
- Refer to Node.js documentation for clarity.


## epi 11- creating a server

![alt text](image-64.png)

![alt text](image-65.png)

![alt text](image-66.png)

![alt text](image-67.png)

![alt text](image-68.png)

![alt text](image-69.png)

![alt text](image-70.png)

![alt text](image-71.png)

![alt text](image-72.png)

![alt text](image-73.png)

![alt text](image-74.png)

 # episode 13 - creating a database mongodb

   # 1. gugul e mongo db search korlam toh mongodb atlas khullo 
 which is the server of mongodb 
 je amader database ta free te manage korbe bollo 
free te manage koranor jonno amader kotar kaaj korte hobe
 # 1.1. amader prothome mongodb r pg e loggin korte hobe tarpor
![project pg of mongodb](image-75.png)
project pg na khulle prothome after login home logo te click korle projects pg khule jabe

new project create korte hobe basically ![1st pg ](image-76.png)
![alt text](image-77.png)

now we have to create a cluster--> ![alt text](image-78.png)

we need to store the password for this cluster ![alt text](image-79.png) 
// i55vv65mEDwsHuFD

![alt text](image-80.png)

eibar oi database r sathe connect korar onek upay ache -
basically ask korche kon app diye database r sathe khelte chao

![alt text](image-81.png)

amra mongodb compass use korbo - mongodb compass ekta app jeikhane database ke visualize kora jaye ie chokher samne dekha jaye
jehetu amra database r sathe khelte chai  mongodb compass e 
tai amader ke ei uri ta save korte rakhte hobe
tarpor ei uri ta mongodb compass e giye paste korle
amra amader database r sathe connection korte parbo.
![alt text](image-82.png)
 // mongodb+srv://pallabb584:i55vv65mEDwsHuFD@democluster.oy7w2.mongodb.net/


https://stackoverflow.com/questions/69797985/all-charts-apps-need-to-be-terminated-before-the-project-can-be-deleted 
this helped me to delete the demo database cluster

 2. eibar amader database ready
 so we can play with the database in 2 ways-
 directly from the compass or by writing code
 
 firstly we will create a database inside it we create a collection(table)
 ![alt text](image-83.png)
 inside that collection we have one particular data jeitake amra document boli
 document r modhe field wise data thake
 ![alt text](image-84.png)
 ei id wala obj hocche ekta document
 name r city hocche fields

 ## now now now we wont use the compass to create anything again we will code to perform crud operations on our db.
 to do this-

 1. we first need the mongodb module to  make our code connect with db
 2. to do that we need to install mongodb using
 npm i mongodb
3. now we dont want to push the node modules to github which came from installing
soln ?
create a .gitignore file and write node modules inside it



