summary of episode 16 -

![summary](<Screenshot (3845).png>)

In **npm (Node Package Manager)**, the **tilde (~)** and **caret (^)** symbols are used in the `package.json` file to specify version ranges for dependencies. Here's how they work:

### **Tilde (`~`)**  
- It allows **only patch updates** (last number in the version).  
- Example: `"lodash": "~4.17.2"`  
  - This means npm can install **4.17.3, 4.17.4**, etc. (patch updates).  
  - But **not 4.18.0** (minor update) or **5.0.0** (major update).

### **Caret (`^`)**  
- It allows **both minor and patch updates** (middle and last numbers).  
- Example: `"lodash": "^4.17.2"`  
  - This means npm can install **4.18.0, 4.19.0, etc.**, as well as **4.17.3, 4.17.4**, etc.  
  - But **not 5.0.0** (major update).

### **Which One to Use?**
- Use `~` if you **only want bug fixes** (safe updates).  
- Use `^` if you **also want new features** (but no breaking changes).  

Most of the time, `^` is used by default in `package.json`. 🚀

# const express = require("express");
const app = express();

what is app in this case and why are we using it

In this code:

```js
const express = require("express");
const app = express();
```

### **What is `app`?**
- `app` is an **instance of an Express application**.
- It represents your web server and allows you to define routes, handle requests, and configure middleware.

### **Why are we using it?**
- `express()` creates a new Express application.
- `app` is then used to set up your API or web app.

For example:

```js
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

### **Key Uses of `app`**
1. **Defining Routes:** `app.get()`, `app.post()`, etc.
2. **Middleware Handling:** `app.use()`
3. **Starting the Server:** `app.listen()`

It's the main object that controls your Express app! 🚀


describe me the 2 lines of code what is each word doing
ChatGPT said:
Sure! Let's break it down word by word:

js
Copy
Edit
const express = require("express");
const → Declares a constant variable (cannot be reassigned).
express → A variable that will store the Express module.
= → Assigns the value of require("express") to express.
require("express") → Imports the Express framework so you can use it.
js
Copy
Edit
const app = express();
const → Declares a constant variable (app).
app → Stores the instance of the Express application.
= → Assigns the result of express() to app.
express() → Calls the Express function, creating a new web application instance.
Summary:
First line: Loads the Express module into express.
Second line: Creates an Express application and stores it in app, which is used to define routes, middleware, and start the server. 🚀






You said:
so in first line we are getting the express module
after that from that express module we are using the express function thats one of the parts of the express module
after that we are creating an app and making that app work like a express server by running the express fn for app ri8?
ChatGPT said:
Yes, exactly! You nailed it! 🎯

Here's a step-by-step breakdown of your thought process:

First line (require("express"))

We import the Express module and store it in the express variable.
This express variable now gives us access to all the features of Express.
Second line (express())

We call the express() function, which is a built-in function in the Express module.
This function creates a new Express application (basically, an instance of an Express server).
We store this Express app inside the app variable.
What happens next?

app now acts as your Express server, meaning you can use it to:
Define routes (app.get(), app.post(), etc.).
Use middleware (app.use()).
Start the server (app.listen(3000)).
So in simple words, we are creating an Express app (app) and making it behave like a web server by calling express(). 🚀

node modules gitignore e rekhe push the code


![last summary of epi 16](image.png)

## summary of episode 17 -

.gitignore r importance


now aks told us that 
jodi amra / route r por jekono jinis likhi
it will provide us the output response of / route only

ami jerom
http://localhost:7777/ e gelam so amake output e hello world dilo

and http://localhost:7777/about e gelam eikhaneo amake output e hello world dilo

karon ektai / r por je route tai likhbo seitar output / route r output tai asbe

solution ki ? order chqnge kore dao code r
/ route r response code last e likhle
je jar route r response ei pabe
that is http://localhost:7777/about e gelam eikhaneo amake pb7 here dilo
tarpor http://localhost:7777/ e gelam so amake output e hello world dilo
    ![solution](image-1.png)



![order of routes matters a lot](image-2.png)



api test korar jonno postman install koralo

get method use koralo

![get method](image-3.png)

![get method part 2](image-4.png)


![alt text](image-5.png)

![alt text](image-6.png)

![alt text](image-7.png)   * mane eikhane ja khusi lekha jabe

![alt text](image-8.png)   ? mark mane optional

![alt text](image-9.png)   + mane jotobar iccha dewa jabe

![alt text](image-10.png)   a thaklei run korbe


![alt text](image-11.png)   end with fly

![alt text](image-12.png) req.query

![alt text](image-13.png)  req.params

![alt text](image-14.png)  req.params

![alt text](image-15.png)  summary of episode 17


## episode 18 - route handlers and middlewares
![alt text](<Screenshot (3872).png>)
![alt text](<Screenshot (3873).png>)
![alt text](<Screenshot (3874).png>)
![alt text](<Screenshot (3876).png>)
![alt text](<Screenshot (3877).png>)


![alt text](image-16.png)

![alt text](<Screenshot (3880).png>)
![alt text](image-17.png)

jokhun ekta user ekta particular pg r data chaiche
suppose get /user

tokhun exactly jota functions oi same user route r sathe match korche sei sob kota fn ke middleware bole.

last e je fn ta response ferot debe take ei request handler bola hocche.

kintu eisob kota fn ei request handler ei 

just onek kota alada naam eder

taijonnoi middleware chain e ghore express aar je middleware ta response ferot deye seitake request handler bole.


why do we need middlewares?

![alt text](image-18.png)

![alt text](image-19.png)

![alt text](image-20.png)

amra eikhane ki korchi ?
admin kina seita barbar check korchi for all admin wala routes admin/getdata admin/deluser

eita ki bhalo upay?
na bhai

lets use middleware jeikhane ekbar ei admin kina check korbo jodi admin hoye se tahole ei next middleware aka handle routes fns of admin/getdata admin/anything
e jabe noile jabena

![alt text](image-21.png)

Yes, exactly! In Express.js, middleware functions are functions that have access to the request (`req`), response (`res`), and the `next` function. They can process the request, modify it, and then pass control to the next middleware in the stack using `next()`.

However, the request handler that actually sends the response (using `res.send()`, `res.json()`, etc.) is the **actual request handler** or **final request handler**. This handler is typically the last function in the middleware chain and does not call `next()`, because it terminates the request-response cycle.

For example:

```javascript
const express = require('express');
const app = express();

// Middleware 1 (logging)
app.use('/user/getdata', (req, res, next) => {
    console.log('Middleware 1: Logging request');
    next(); // Pass control to the next middleware
});

// Middleware 2 (authentication)
app.use('/user/getdata', (req, res, next) => {
    console.log('Middleware 2: Checking authentication');
    // Assume authentication is valid
    next(); // Pass control to the next middleware
});

// Actual request handler
app.get('/user/getdata', (req, res) => {
    console.log('Actual request handler: Sending response');
    res.json({ message: 'User data retrieved successfully' });
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

### How it works:
1. The first middleware logs the request.
2. The second middleware checks authentication.
3. The actual request handler processes the request and sends a response.

Since the request handler sends the response, it **does not call `next()`**, because the response has already been sent.

So yes, **all handlers in the chain are middleware functions, but the one that sends the response is the actual request handler.** 🚀



## now suppose a user is trying to access a get method under admin/getalldata and admin/deleteuser first we have to authenticate the user so we are writing the authentication code for both the routes but it is not a good way so we created a function authenication and we give it the route of admin and next fn such that only when someone is authenticated then only he can access the other 2 routes now why this authentication fn is known as a middleware?

The **authentication function** is known as a **middleware** because it sits in the request-response cycle **before** the actual request handlers and performs a specific task (authentication) before passing control to the next function in the stack. 

### Why is it a middleware?
1. **It has access to the `req`, `res`, and `next` function.**  
   - It can inspect the request, modify it, or reject it.
   
2. **It runs before the actual request handlers.**  
   - If the authentication is successful, it calls `next()` to allow the request to continue.
   - If authentication fails, it sends a response (e.g., 401 Unauthorized), stopping further execution.

3. **It is reusable.**  
   - Instead of writing authentication logic inside each route separately, we define it once and apply it to multiple routes.

### Example in Express.js:

```javascript
const express = require('express');
const app = express();

// Authentication Middleware
const authentication = (req, res, next) => {
    console.log('Authentication Middleware: Checking user authentication');

    // Suppose we check a token in headers
    const token = req.headers.authorization;
    
    if (token === 'valid-token') {
        console.log('Authentication successful');
        next(); // Proceed to the next middleware or actual handler
    } else {
        console.log('Authentication failed');
        res.status(401).json({ message: 'Unauthorized access' }); // Stop further execution
    }
};

// Apply authentication middleware to all `/admin` routes
app.use('/admin', authentication);

// Admin routes
app.get('/admin/getalldata', (req, res) => {
    res.json({ message: 'All data retrieved successfully' });
});

app.delete('/admin/deleteuser', (req, res) => {
    res.json({ message: 'User deleted successfully' });
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

### How it Works:
1. A request to `/admin/getalldata` or `/admin/deleteuser` first passes through `authentication`.
2. If authentication is successful, `next()` is called, allowing the request to proceed.
3. If authentication fails, a `401 Unauthorized` response is sent, stopping further execution.

### Summary:
✅ The `authentication` function is called **before the actual route handlers**.  
✅ It **does not send a response unless authentication fails**.  
✅ It **passes control to the next function (`next()`) if authentication is successful**.  
✅ This makes it a **middleware** in Express.js. 🚀

## so exactly whats a middleware?

### **What is a Middleware in Express.js?**  

A **middleware** is a function in Express.js that sits between the incoming request and the final request handler. It has access to the **request (`req`)**, the **response (`res`)**, and a special function called **`next()`** that allows passing control to the next middleware or request handler.  

---

### **Key Features of Middleware:**
✅ **Intermediary function** – It executes before the final request handler.  
✅ **Access to `req`, `res`, and `next()`** – Can modify request, send response, or pass control.  
✅ **Reusable** – Helps avoid repeating code in multiple routes.  
✅ **Can terminate or continue** – If it sends a response, it stops execution; otherwise, it calls `next()`.  

---

### **Types of Middleware in Express.js**
1. **Application-level middleware** – Applied globally using `app.use()`.  
2. **Route-level middleware** – Applied to specific routes.  
3. **Built-in middleware** – Like `express.json()` for parsing JSON.  
4. **Third-party middleware** – Like `cors` for enabling CORS.  
5. **Error-handling middleware** – Used for handling errors (`(err, req, res, next) => {}`).

---

### **Example 1: Basic Middleware**
```javascript
const express = require('express');
const app = express();

// Middleware that logs request details
const loggerMiddleware = (req, res, next) => {
    console.log(`${req.method} request to ${req.url}`);
    next(); // Pass control to the next middleware or request handler
};

// Use middleware for all routes
app.use(loggerMiddleware);

app.get('/hello', (req, res) => {
    res.send('Hello, World!');
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

**🔹 How it works:**  
1. Any request first goes through `loggerMiddleware`.  
2. It logs request details.  
3. It calls `next()`, allowing the request to proceed to `/hello`.  

---

### **Example 2: Authentication Middleware**
```javascript
const authentication = (req, res, next) => {
    const token = req.headers.authorization;
    if (token === 'valid-token') {
        next(); // User is authenticated, proceed
    } else {
        res.status(401).json({ message: 'Unauthorized' }); // Stop request
    }
};

// Apply to `/admin` routes
app.use('/admin', authentication);

app.get('/admin/dashboard', (req, res) => {
    res.json({ message: 'Welcome to Admin Dashboard' });
});
```

**🔹 How it works:**  
1. Before accessing `/admin/dashboard`, `authentication` middleware runs.  
2. If the token is valid, it calls `next()` to proceed.  
3. If invalid, it sends a `401 Unauthorized` response and stops execution.  

---
## so when the authentication fails in that case the middleware is the actual request handler as it sends the response of 404 error

### **Final Summary:**
💡 **Middleware is a function that runs before the actual request handler, allowing you to modify requests, enforce security, log data, and more.**  

🚀 **Think of middleware as security guards, filters, or pre-processing steps in your Express app.**


Yes! When **authentication fails**, the middleware effectively **becomes the actual request handler** because it **terminates the request-response cycle** by sending a response (`res.status(401).json({...})`).  

In this case:  
✅ The middleware **does not call `next()`**, so the request never reaches the actual route handler.  
✅ It **sends the response itself**, making it the final handler for that request.  

---

### **Example: Middleware Acting as the Actual Request Handler on Failure**
```javascript
const express = require('express');
const app = express();

// Authentication Middleware
const authentication = (req, res, next) => {
    const token = req.headers.authorization;
    
    if (token === 'valid-token') {
        next(); // Pass control to the actual request handler
    } else {
        res.status(401).json({ message: 'Unauthorized access' }); // Ends request cycle here
    }
};

// Apply middleware to all /admin routes
app.use('/admin', authentication);

app.get('/admin/getalldata', (req, res) => {
    res.json({ message: 'All data retrieved successfully' });
});

app.delete('/admin/deleteuser', (req, res) => {
    res.json({ message: 'User deleted successfully' });
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

---

### **What Happens in Different Cases?**  

| Scenario | What Happens? | Who Sends the Response? |
|----------|--------------|-------------------------|
| **Valid Token** | `authentication` calls `next()`, request reaches route handler. | The **actual request handler** (e.g., `/admin/getalldata`). |
| **Invalid Token** | `authentication` sends `401 Unauthorized` response. | The **middleware itself** (middleware acts as the actual handler in this case). |

---

### **Conclusion**
✔ **Middleware is not always just a "pass-through."**  
✔ If it sends a response (like in case of authentication failure), **it acts as the actual request handler for that request.**  
✔ If it calls `next()`, it just **pre-processes** and lets the actual request handler send the response. 🚀


![alt text](image-22.png)


handle request errors-
![alt text](image-23.png)
![alt text](image-24.png)

basically umm try catch r modhe code lekha best way

but for extra error case
we can write another route handler
![err parameter starting e likhtei hobe](image-25.png)
![alt text](image-26.png)

![summary of epi 18](image-27.png)


## episode 19 --> database ,schema and model

cluster = collection of more than one databases.

first thing connect korlo database r cluster r sathe using moongose libary
so firstly i installed mongoose
by using npm i mongoose

after that take that cluster url from the application mongodb compass or gugul mongo db atlas theke 
i took from app


its a better approach to connect to the database before listening to the server

![alt text](image-28.png)


![alt text](image-29.png)

![alt text](image-30.png)


![alt text](image-31.png)

![alt text](image-32.png)


![alt text](image-33.png)

![alt text](image-34.png)


prottek ta mongoose fn hocche async fn tai async await use korbo aar secondly 
await ta try catch r modhe likhbo to make our code handle bug efficiently


## episode 20 --> diving into the apis

whats api
ChatGPT said:
API stands for Application Programming Interface. It's a set of rules that allows different software applications to communicate with each other. APIs define the methods and data formats that programs can use to request and exchange information.

Example of API Usage:
Web APIs: Services like Google Maps, Twitter, or weather apps expose APIs so developers can fetch data (e.g., get live weather updates).
REST API: A common API type using HTTP requests to GET, POST, PUT, and DELETE data.
GraphQL API: A flexible API format that allows clients to request only the data they need.
Would you like an example of how an API works in code? 🚀







You said:
another explanation plz
ChatGPT said:
Sure! Think of an API like a waiter in a restaurant.

You (the user) sit at the table and look at the menu (this is like a website or app).
You tell the waiter your order (this is your request to the API).
The waiter takes your order to the kitchen (the server) and tells the chefs what to make.
The kitchen prepares the food and gives it to the waiter (the API processes your request).
The waiter brings the food back to your table (the API delivers the response).
In short, an API is the messenger that lets different software systems talk to each other and share data. 🎯

Need a real-world example? 😊







You said:
yes
ChatGPT said:
Alright! Let’s take Google Maps API as a real-world example.

Imagine you're building a ride-sharing app like Uber. You need to show the user’s location and nearby drivers on a map. Instead of creating your own map system from scratch, you can use Google Maps API to fetch map data and display it in your app.

How it works:
Your app sends a request to the Google Maps API, asking for map details of a specific location.
Google’s servers process the request and return the data (like roads, buildings, and landmarks).
Your app receives the data and displays the map with all the details.
Code Example (Fetching a Map using Google Maps API in JavaScript):
javascript
Copy
Edit
function initMap() {
  var location = { lat: 37.7749, lng: -122.4194 }; // San Francisco
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: location
  });
}
This code loads a Google Map centered on San Francisco using the API.

💡 This is just one example—APIs are used everywhere! Want to see an API in action that you can try yourself? 🚀







You said:
but when we talk about api
api is just another website with different params where user is suppose filling a form so the form website here is the api and this data on the api will now be stored in db
ChatGPT said:
You're on the right track! An API is basically a special kind of website that accepts requests and returns responses, often in a structured format like JSON or XML.

Breaking It Down:
API as a Website:

Just like a regular website, an API has a URL (e.g., https://api.example.com/users).
Instead of showing a web page, it returns data (like JSON).
API as a Form:

When you fill out a form on a website and hit submit, the form sends data to the server.
APIs work similarly—clients (like apps) send data using requests (e.g., POST request).
Database Storage:

The API takes the submitted data and stores it in a database.
Later, another request (e.g., GET) can retrieve the stored data.
Example of an API in Action
Imagine you have a user registration form:

Form on a Website: User enters name, email, and password.
API Request: The form sends a POST request to https://api.example.com/register.
Database: The API stores the user’s data in the database.
API Response: The API returns { "message": "User registered successfully" }.
So, yeah—APIs are like websites, but instead of showing pages, they exchange data between applications! 🔥


eibar amra sikhte cholechi how to add dynamic data 
directly from postman 
so amra postman e jabo
body select korbo 
tarpor raw version r modhe giye json select korbo

such that imagine postman r ei api version ta actually toh hocche oi registration form pg
so when we are putting data dynamically mane random user eshe nijer data debe 
tokhun ei data ta server r kache jabe (server ei moment e amader laptop)
tarpor server ei data take db e send korbe

eita korar somoye i.e after writing the data in postman 
if we want to read the data in our system we cant directly do it
as req.body korleo seita json format r data ke convert kore dekhate parbe na amader
![proof](image-35.png)

so we need a json middleware je amader ke json format r data ke amader dekhabe normal js obj hisabe
![done](image-36.png)


now this req.body is the same thing that we were writing as a java obj and passing to the new User fn while creating a new user 

so ei req.body takei directly pass kore debo new User r modhe

such that amra je data likhbo postman e seita amader server db te dhukiye debe.

done


now time for get request
so we created get requests for 2 apis
1. get req to find the user details for a particular emailId jeita amra likhchi postman e 
so ekta user jodi ekta particular emailid lekhe amader api te amader server sei emailid wala manus r data ta take dekhiye debe jodi thake 
aar na thakle error debe

2. get request to see all the users in our feed pg
basically db e jekota user ache sob kota user details show hobe feed pg e jokhun jabe ekta user

find vs findOne difference hocche
findOne returns only one user's data
suppose my db has 2 same emailid wala useer tokhun findOne fn ta amader ke sei user r details debe jeita old id mane age account toiri koreche je


- delete user api created
id take mongodb compass theke tullam after that postman e use kore id wala user take oralam

const user = await User.findByIdAndDelete({_id:userId});
in this case _id ta hocche amar db r modhe ekta field
so it means je jodi userId bole kono id theke thake amar db te
tahole delete that particular id wala user



- update api toiri korlam
using 
User.findByIdAndUpdate({_id:userId},updateObj);
now eikhane findByIdAndUpdate ekta third parameter o neye so amra jodi kono third parameter na di tahole by default third paramter = before assume kore and data update howar age je data ta chilo seitai hocche before r mane so it will return us the previous data as a object
tai jonnoi  3rd paramter ta na diye amra dekhlam aar console log kore dekhlam before update r value tai amra before r modhe pacchi as a object
![proof](image-37.png)

![summary of episode 20](image-38.png)


## episode 21 -- data sanitization and schema validation

basically post aka create aar patch aka update code niye amader main chinta
as user ei duto method ei data push korte parbe
so amader ke bhalo bhabe data take test kore nite hobe

so prothome lets learn about db schema te change kora

## 1. emailID firstname ei field guno ditei hobe
so required property use korbo amra
  required: true,

## 2. eibar jerom emailID sobar unique hobe
so amra unique property use korbo
    unique: true,

## 3. now if we want to have a default property that is
suppose ekta dating app e 
about section e ekta default statement thakbe hello i am using this dating app
so ekta user ei field take na bhorleo ei default value ta db e store hobe
default:"Hello i am using this xyz app",


## 4. suppose we want multiple ans of a qs
like skills so we will create a array 
and ekta user jodi ans na deye
tahole
db e ekta empty array toiri hobe
type: [String],


## 5. suppose a user is writing their email in capital
so we will use property of lowercase beforehand only
to make sure everything the user wrote is in lowercase
lowercase: true,

## 6. suppose a person is giving their mail with spaces from the start and backside
then in the db the email id will be saved with spaces 
to avoid this we will use trim property
trim: true,


## 7. now if we want the user to have a firstname of minimum of 4 characters then we will use minlength property
 minlength: 4,

 ## 8. now suppose we want only users above age of 18 should register then we can use property of min that is used for number type
 min: 18,

## db validator
 ## 9. schema validation
 suppose we want the user to have a gender of  either male,female or others
 how to do that ?
 using custom validation in user model

      validate(value){
      // this is a custom validator function which will check if the value is in the array or not such that if the value is not in the array then it will throw an error and the value should be either male female or others and value is the string that the user is providing.
      if(["male","female","others"].includes(value)==false){
        throw new Error("Gender data is invalid");

      }
    },
but there is a catch 
we cant use the custom validatation fn for update methods we can only use it for create fn
now to use this fn in patch aka update method 
we have to use
runValidator method in the 3rd parameter of the findidandupdate fn
{
      runValidators:true, // this will run the validators that we have set in the schema
    }

## 10. skills o add korlo ![skills add in postman](image-39.png)

## 11. now we require the time when the user registered and when the user last updated their profile
how to do that?
jokhun ami userSchema toiri korechi tokhun first paramter was the schema of the model je bhai erom erom details thakbe ekta model r
2nd parameter e amra 2nd object debo with timeatamp property
{
  timestamps: true, // this will add createdAt and updatedAt fields to the schema
}
created at updated at field add korlo
![proof](image-40.png)


so the flow is
schema te amra likhchi whichever property we want in a user
eibar to use all the properties of the schema we create a model which has got all the properties of schema

schema->model->users

##  schema model user
schema is all the propeties i want in my partner
now model is nothing but accumulation of all the properties in the schema
now to create a robot gf
this robot gf will be based on the model aka this gf will have the properties of the schema
just theory i am ri8?


Yeah, you're absolutely right—you're thinking in solid theoretical terms.

Let’s break it down with a bit more structure, just to confirm:

- **Schema**: This defines the **structure** or **blueprint**—in your case, all the **properties you want in a partner** (e.g., caring, intelligent, funny, etc.). Think of it like a class or interface in programming—it tells you *what* is expected.

- **Model**: This is the **concrete implementation** of the schema. So your **model** is a complete "data structure" filled with actual values or traits that satisfy the schema. It's the **accumulation** or actual instance of all the defined properties.

- **Robot GF**: This is the **entity or object** you create **based on the model**. So yes, the robot girlfriend would be **instantiated** from the model, which in turn was built using your ideal schema.

So in theory, yeah—you’re spot on. You’re applying object-oriented design thinking to human traits and using it to conceptualize an ideal partner. Super creative—and very nerdy in the best way 😂

## api validator
## 12. now we will make sure that when a user is trying to update some of their data
we will allow only some of the data fields aka mail names cant be updated

how to do it?
we have to create api validator

app.patch("/user", async (req, res) => {
  const userId = req.body.userId;
  const updateObj = req.body;
  try {
    const allowed_updates = ["userId","about", "skills", "age", "gender"];
    // this will check if the keys in the updateObj are present in the allowed_updates array or not and if not then it will throw an error
    // this is a way to check if the keys in the updateObj are present in the allowed_updates array or not and if not then it will throw an error
    // but when we are testing this then we can use any key in the updateObj and it will not throw an error but when we are using this in production then we can use only the keys that are present in the allowed_updates array and if we use any other key then it will throw an error and we can use this to check if the keys in the updateObj are present in the allowed_updates array or not and if not then it will throw an error
    // but when we will create from the client side then we will use only the keys that are present in the allowed_updates array and if we use any other key then it will throw an error and we can use this to check if the keys in the updateObj are present in the allowed_updates array or not and if not then it will throw an error so basically the user cant update the user with any other key that is not present in the allowed_updates array and this is a way to check if the keys in the updateObj are present in the allowed_updates array or not and if not then it will throw an error
    const isUpdateAllowed = Object.keys(updateObj).every((key) =>
      allowed_updates.includes(key)
    );
    if (!isUpdateAllowed) {
      // return res.status(400).send("Invalid updates");
      throw new Error("Invalid updates");
    }
    if(updateObj?.skills?.length>10){
      throw new Error("Skills should be less than 10");
    }
    const user = await User.findByIdAndUpdate({ _id: userId }, updateObj, {
      runValidators: true, // this will run the validators that we have set in the schema
    });
    console.log(user);
    res.send("User updated successfully");
  } catch (err) {
    res.status(400).send("User not deleted" + err.message);
  }
});


eibar amra userId key take update korte debona
so amra /user e na giye
/user/:userId route e jabo
such that
amra 
instead of const userId = req.body.userId;
const userId = req.params?.userId use korte pari and we will fetch the userId from the top using params

`req.params` is a property in Express.js (a popular Node.js web framework) that contains **route parameters**. These are parts of the URL that act as variables, and they are defined in the route path using a colon (`:`) syntax.

### Example:

```js
const express = require('express');
const app = express();

// Route with a parameter called "userId"
app.get('/users/:userId', (req, res) => {
  const userId = req.params.userId;
  res.send(`User ID is: ${userId}`);
});
```

If a request is made to `http://localhost:3000/users/42`, then:

```js
req.params = { userId: '42' }
```

### Summary:
- `req.params` is used to access URL parameters.
- Parameters are defined in the route path with a colon.
- It's always an object where each key is the parameter name.

## Data sanitization : api validators


 ## 13. eibar kotha ta hocche je email validator e onek kota validation korte hoye
@ , .com
onek jala
tai baire theke ekta extension use korbo je amader hoye mail validate kore debe
npm i validator = install

code -->

const validator = require("validator");
validate(value) {
      if(!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    }

   ![summmary of episode 21](image-41.png)