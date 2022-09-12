//const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/"
//const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/";


const PRODUCT_INFO_URL_2 = "https://japceibal.github.io/emercado-api/products/"+ localStorage.getItem("ProductsID") + ".json";

//Ejemplo URL OBJETIVO
//https://japceibal.github.io/emercado-api/products/50921.json

//Ejemplo URL OBJETIVO
//https://japceibal.github.io/emercado-api/products_comments/50921.json

const PRODUCT_INFO_COMMENTS_URL_2 = "https://japceibal.github.io/emercado-api/products_comments/" + localStorage.getItem("ProductsID") + ".json";


function showProducts_info(){


let htmlContentToAppend1 = "";

htmlContentToAppend1 +=
`
<br>
<br>
<div>
<h2>${currentProducts_Info.name}<h2>
</div>
<br>
<br>
<h5><strong><label>Precio</label></strong></h5>
<h7>${currentProducts_Info.cost}<h7>
<br>
<br>
<h5><strong><label>Descripción</label></strong></h5>
<h7>${currentProducts_Info.description}<h7>
<br>
<br>
<h5><strong><label>Categoría</label></strong></h5>
<h7>${currentProducts_Info.category}<h7>
<br>
<br>
<h5><strong><label>Cantidad de vendidos</label></strong></h5>
<h7>${currentProducts_Info.soldCount}<h7>
<br>
<br>
<h5><strong><label>Imagenes ilustrativas</label></strong></h5>
<br>
`
//Armo arrray Imagenes reducido

let images_array = currentProducts_Info.images

htmlContentToAppend2 = "";

htmlContentToAppend2 += `

<table>

<tr>
<th><img src="${images_array[0]}" id="image_array"></th>
<th><img src="${images_array[1]}" id="image_array"></th>
<th><img src="${images_array[2]}" id="image_array"></th>
<th><img src="${images_array[3]}" id="image_array"></th>
</tr>

</table>
`




document.getElementById("products-list-container").innerHTML = htmlContentToAppend1 + htmlContentToAppend2

}



function showProducts_comments(){

let htmlContentToAppend3 = "";

htmlContentToAppend3 +=
`
<br>
<br>
<br>
<h5><label>Comentarios</label></h5>
`
let htmlContentToAppend4 = ""
let htmlContentToAppend5 = ""
let htmlstar = ""

for(i=0; i < currentProductsComments_Info.length; i++){
    let comment_info = currentProductsComments_Info[i]

if(comment_info.score===1){
        
    htmlstar = ""
        htmlstar +=
        `
        
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        
        `
       

        }else if(comment_info.score===2){
           
        htmlstar = ""
            htmlstar +=
            `
            
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            
            `
        
        }else if(comment_info.score===3){
            
            htmlstar = ""
            htmlstar +=
            `
            
            <span class="fa fa-star checked" ></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            
            `
            
        }else if(comment_info.score===4){
        htmlstar = ""
        htmlstar +=
            `
            
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            
            `
        }else{
        htmlstar = ""
        htmlstar +=
            `
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            ` 
        }

        console.log(htmlstar)

    htmlContentToAppend4 += 
    `
    <table>

    <tr>
    <th></th>
    </tr>

    <tr>
    <td><div>${comment_info.user}${'   '}${comment_info.dateTime}${'   '}${htmlstar}</div></td>
    </tr>

    <tr>
    <td><div>${comment_info.description}</div></td>
    </tr>

    </table>
    `
    

    
        }




    document.getElementById("products-list-container_2").innerHTML = htmlContentToAppend3+htmlContentToAppend4

}


let textarea_var =document.getElementById("textarea")

//Enviar comentarios a la página (próximas entregas)
/*
enviar_form.addEventListener("click",function(){
    let textarea_value = textarea_var.value
    localStorage.setItem("envio_formulario",textarea_value)
    addComment()
});

let option_1 = document.getElementById("option1")
console.log(option_1)

function addComment () {
let get_storage = localStorage.getItem("enviar_formulario")
let get_storage_2 = localStorage.getItem("text")
htmlContentToAppend6 = ""
let htmlstar2 = ""

//let option_1 = document.getElementById("option1")
//console.log(option_1)
let option = document.getElementsByTagName("select")

if(option.value===1){
        
htmlstar2 = ""
htmlstar2 +=
        `
        
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        
        `
       

}else if(option.value===2){
           
htmlstar2 = ""
htmlstar2 +=
            `
            
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            
            `
        
}else if(option.value===3){
            
htmlstar2 = ""
htmlstar2 +=
            `
            
            <span class="fa fa-star checked" ></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            
            `
            
}else if(option.value===4){
        
htmlstar2 = ""
htmlstar2 +=
            `
            
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            
            `
}else{

htmlstar2 = ""
htmlstar2 +=
            `
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            ` 
        }

console.log(htmlstar2)

    htmlContentToAppend6 += 
    `
    <table>

    <tr>
    <th></th>
    </tr>

    <tr>
    <td><div>${get_storage_2}${'   '}${htmlstar2}</div></td>
    </tr>

    <tr>
    <td><div>${get_storage}</div></td>
    </tr>

    </table>
    `

document.getElementById("products-list-container_2").innerHTML += htmlContentToAppend6 
}
*/



document.addEventListener("DOMContentLoaded", function(e){
        getJSONData(PRODUCT_INFO_URL_2).then(function(resultObj){
            if (resultObj.status === "ok"){
                currentProducts_Info = resultObj.data
                console.log(currentProducts_Info)
                showProducts_info()
            }
        })});


        document.addEventListener("DOMContentLoaded", function(e){
            getJSONData(PRODUCT_INFO_COMMENTS_URL_2).then(function(resultObj){
                if (resultObj.status === "ok"){
                    currentProductsComments_Info = resultObj.data
                    console.log(currentProductsComments_Info)
                    showProducts_comments()
                }
            })});

