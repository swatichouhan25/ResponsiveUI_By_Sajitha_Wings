const url =`https://api.covid19api.com/summary`
 async function fetchRequestWithError(){
    try{
        const response =await fetch(url,{});
        if(response.status >=200 && response.status<400)
        {
            const data =await response.json();
            console.log(data)
        }
        else {
            //handle server error
            console.log(` Error Details:${response.status} : ${response.statusText}`)
        }
    }
    catch(error){
        console.log("from catch block:" +error.message)
    }
 }
 fetchRequestWithError()