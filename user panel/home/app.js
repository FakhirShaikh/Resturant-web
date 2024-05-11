// console.log(firebase.database())
let category_in_row= document.getElementById("category_in_row")

//chat Hide spinner function
function hideSpinner() {
    document.getElementById("spinner").classList.remove("show");
}

async function getAllcategory(){

//chat Show spinner
document.getElementById("spinner").classList.add("show");


    await firebase.database().ref("category").get()
    .then((snap)=>{
        // console.log(snap.val())
        var categorydata=Object.values(snap.val())
        // console.log(categorydata)
        for(var data of categorydata){
            // console.log(data)
            category_in_row.innerHTML +=`
                        
                            <div class="col-lg-6">
                                <div class="d-flex align-items-center">
                                    
                                    <div class="w-100 d-flex flex-column text-start ps-4">
                                        <h5 class="d-flex justify-content-between border-bottom pb-2">
                                            <span>${data["Category_name"]}</span>
                                        </h5>
                                    </div>
                                    <img class="flex-shrink-0 img-fluid rounded" src=${data["Category_image"]} alt="" style="width: 12%;"> 
                                </div>
                            </div>
                        
                    
           
            `

        }
   
    //chat Hide spinner after categories are loaded
    hideSpinner();
    })
    
    .catch((e)=>{
    console.log(e)

    //chat Hide spinner in case of error
    hideSpinner();
})
}

getAllcategory()