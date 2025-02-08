apiUrl = "https://fakestoreapi.com/products"

async function getApi (url){
    let store = await fetch(url)
    let data = await store.json()
    console.log(data);
    


let dipslayData = ""
data.forEach(element => {
        
    dipslayData +=
     `
                <div class="card p-3 m-3" style="width: 18rem;">
                <img src="${element.image}" class="card-img-top" alt="..." width="300px" height="200">
                <div class="card-body">
                    <h5 class="card-title"><b> ${element.title} </b></h5>
                    <p class="card-text"><b>Rs. <span>${element.price}</span></b></p>
                    <a href="#" class="btn btn-success">Add to Cart</a>
                </div>
            </div>
    `
    document.getElementById("showData").innerHTML = dipslayData

});
}

getApi(apiUrl)