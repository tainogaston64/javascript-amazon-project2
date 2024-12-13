// message to backend computer = request

// Common Types of requests:
  // GET
  // POST
  // PUT
  // DELETE
  // use of two parameters(type, URL = Uniform Resource Locator)

  // https = used to communicate with another computer;'
  // the s stands for a secure version web site. 
  // ex: amazon.com is a domain name that points to a backend amazon computer

 //http = Hyper Text Tranfer Protocol
 const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
  console.log(xhr.response);
});

 xhr.open('GET', 'https://supersimplebackend.dev');
 xhr.send();
 

 // URL Path: it comes after the domain name
 // Ex: https://supersimplebackend.dev(/products/first)=> this is the URL path
 // API = APPLICATION PROGRAMMING INTERFACE