const request = new XMLHttpRequest();
var html=""
request.onload=(event)=>{
    console.log("Response Loaded");
    html=request.responseXML.body.innerHTML;

    console.log("Data: "+html)
}

//let url =`https://developer.mozilla.org/en-US/docs/Web/JavaScript`
request.open('GET',url);
request.setRequestHeader('Accept','text/html')
request.send();

console.log(request.status);
console.log(request.statusText);
console.log("Completed...")

//----------------------------------
//example:2
const url =`https://api.covid19api.com/summary`
 const request = new XMLHttpRequest()
 request.open('GET',url);
 // request.open('POST',url);
 request.send();

 request.onload=(event)=>{
    if(request.status>=200 && request.status<=400){
        //successful request return the json data
        const data=JSON.parse(request.response);
        console.log(data);
    }
    else{
        console.log(`Error in fetching ${request.status} " ${request.statusText}`)
    }

 }
 request.onerror= ()=>console.log("on Error :" +request.statusText)