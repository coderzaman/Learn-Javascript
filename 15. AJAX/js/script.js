// AJAX (Asynchronous Javascript and XML)
// asynchronous মানে হচ্ছে একাধিক কাজ একই সময়ে চলা।  আমরা যখন  function কল করি তখন ওই function execute করার পর এর পরের লাইন বা function execute হয়।  কিন্তু এখানে অন্য কোনো function যদি রান করতে টাইম বেশি লাগে এটির কাজও চলতে থাকে সাথে এর পরের কাজ বা অন্য প্রোগ্রামগুলাও চলতে থাকে। 

//We use JSON heere Instead pf XML
// AJAX is a developer's dream, because you can:
// Read data from a web server - after the page has loaded
// Update a web page without reloading the page
// Send data to a web server - in the backgroun
// AJAX is not a programming language.
// AJAX is a technique for accessing web servers from a web page.
// AJAX stands for Asynchronous JavaScript And XML.


// fetch data from a file using ajax

document.getElementById('get-data').addEventListener('click', loadData);
// Method 1: Cuurently Use it
function loadData() {
    // Create a xhr Object(XML HTTP Request)
    // It creates a new instance of XMLHttpRequest named xhr, which is the core of AJAX requests.

    let xhr = new XMLHttpRequest();

    //Open the file
    // ** Purpose: This open() method configures the request.
    //     * The first argument ('GET') specifies the type of HTTP request (GET request in this case, used to retrieve data).
    //     * The second argument ('data.txt') is the file to be requested from the server.
    //     * The third argument (true) sets the request to be asynchronous, meaning the JavaScript will continue to execute without waiting for the server's response.
    xhr.open('GET', 'data.txt', true);
    xhr.onprogress = function(){
        console.log(this.readyState);
    }

    // call onload function function for load data 
    // Purpose: This defines the onload event handler, which is triggered when the request is complete.

    xhr.onload = function(){
        // HTTP status 
        // 200 "OK"
        // 403 "Forbidden" 
        // 404 "Not found"

        if(xhr.status === 200){
            document.getElementById('showData').innerHTML =`${this.responseText}`;
        }

    }


    // Purpose: This sends the actual request to the server to retrieve the data.txt file.
    xhr.send();
} 

// How It Works:
//    1. When the user clicks the button with ID get-data, the loadData() function is called.
//    2. An AJAX request is made using the XMLHttpRequest object to fetch the contents of data.txt.
//    3. When the response is received (if the status is 200), the contents of the file are inserted into the webpage inside the element with the ID showData.
//    4. If there are errors (e.g., 404 Not Found), nothing is displayed, but you could add additional handling for other statuses.
// This is a basic example of how AJAX can be used to dynamically load data from the server without needing to refresh the page.




//Methods 2(Previous Used) onreadystatechange

// function loadData(){
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET','data.txt', true);


//     //oneprogress method used data is comeing to progress
//     // we show something on onprogress "Data in progress please wait"

   

//     xhr.onreadystatechange = function(){
//         // readyState values
//         // 0: request not initialized
//         // 1: server connection established
//         // 2: response received
//         // 3: processing request 
//         // 4: request finished and response is ready 
//         if(this.status === 200 && this.readyState === 4){
//             document.getElementById('showData').innerText = this.responseText;
//         }
//     }

//     xhr.send();
// } 

document.getElementById("get-data-server").addEventListener("click", loadDataServer);


function loadDataServer(e){
    xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.api-ninjas.com/v1/jokes/`, true);
    xhr.setRequestHeader('X-Api-Key', 'f88n0jSzxJ9hdDCDlU8p/A==wrX6uj9eqGVhzao2');

    xhr.onloadstart = function(){
        document.getElementById('showDataApi').innerText = "Loading data...";
    }

    xhr.onload = function(){
        if(this.status === 200){
            let data = JSON.parse(this.responseText);
            let output = data[0].joke;
            document.getElementById('showDataApi').innerHTML = output;
        }
    }

    xhr.send();
}

// অ্যাপ্লিকেশন প্রোগ্রামিং ইন্টারফেস বা এপিআই হচ্ছে এক গুচ্ছ ফাংশনের সমষ্টি। এটি একটি ইন্টারফেস যা কোন কম্পিউটার, লাইব্রেরি অথবা অ্যাপলিকেশন অন্য অ্যাপ্লিকেশনকে বিভিন্ন সার্ভিস দেয়ার লক্ষ্যে বা ডাটা বিনিময়ের জন্য প্রদান করে থাকে। সাধারণত সফটওয়্যার প্রস্তুতকারক কোম্পানি এটি তৈরি করে। অন্য কোনো প্রোগ্রাম ঐ সফটওয়্যারকে নিজেদের সাথে একীভূত করতে চাইলে এপিআই এর মাধ্যমে সফটওয়্যারের সাথে যোগাযোগ রক্ষা করে।[১]

// What is RESTful API?
// RESTful API is an interface that two computer systems use to exchange information securely over the internet. Most business applications have to communicate with other internal and third-party applications to perform various tasks. For example, to generate monthly payslips, your internal accounts system has to share data with your customer's banking system to automate invoicing and communicate with an internal timesheet application. RESTful APIs support this information exchange because they follow secure, reliable, and efficient software communication standards.

// What is REST?
// Representational State Transfer (REST) is a software architecture that imposes conditions on how an API should work. REST was initially created as a guideline to manage communication on a complex network like the internet. You can use REST-based architecture to support high-performing and reliable communication at scale. You can easily implement and modify it, bringing visibility and cross-platform portability to any API system.

// API developers can design APIs using several different architectures. APIs that follow the REST architectural style are called REST APIs. Web services that implement REST architecture are called RESTful web services. The term RESTful API generally refers to RESTful web APIs. However, you can use the terms REST API and RESTful API interchangeably.

// The following are some of the principles of the REST architectural style: