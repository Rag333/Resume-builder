function addNewWEField(){
 let newNode = document.createElement("textarea")
 newNode.classList.add("form-control");
 newNode.classList.add("weField");
 newNode.classList.add("mt-2")
 newNode.setAttribute("rows",3);
 newNode.setAttribute('placeholder',"Enter here")

 let weOb = document.getElementById("we");
 let weAddButtonOb = document.getElementById("weAddButton");
 weOb.insertBefore(newNode,weAddButtonOb)


}
function addNewAQField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","enterhere")

    let aqob = document.getElementById("aq");
    let aqAddButtonob = document.getElementById("aqAddButton");
    aqob.insertBefore(newNode,aqAddButtonob);
}



//generating CV

function generateCV(){
    // console.log("generating");
    let nameField = document.getElementById("nameField").value;
    let nameT1 =document.getElementById("nameT1");
    nameT1.innerHTML = nameField ;

    //direct
    document.getElementById("nameT2").innerHTML = nameField ;

    //contact
    document.getElementById("contactT").innerHTML = document.getElementById('contactField').value;

    //address
    document.getElementById("addressT").innerHTML = document.getElementById('addressField').value;

    //facebook
    document.getElementById("fbT").innerHTML = document.getElementById('facebookField').value;

    //insta
    document.getElementById("instaT").innerHTML = document.getElementById('instaField').value;
    
    //linkedin
    document.getElementById("linkedT").innerHTML = document.getElementById('linkedinField').value;


    //objective
    document.getElementById("objectiveT").innerHTML = document.getElementById('objectiveField').value;

     //we
   let wes =  document.getElementsByClassName('weField');
   let str = " ";

   for(let e of wes){
    str = str + `<li> ${e.value}</li>`;

   }
   document.getElementById("weT").innerHTML = str ;



   //aq
   let aqs =  document.getElementsByClassName('aqField');
   let str1 = " ";

   for(let e of aqs){
    str1  = str1 + `<li> ${e.value}</li>`;

   }
   document.getElementById("aqT").innerHTML = str1 ;

   //code for setting images
   let file = document.getElementById('imgField').files[0];
   console.log(file);
   let reader = new FileReader()
   reader.readAsDataURL(file)
   console.log(reader.result);
   
   //set the image to template 
   reader.onload = function(){
    document.getElementById("img-template").src = reader.result ;

   };


   document.getElementById('cv-form').style.display='none';
   document.getElementById('cv-template').style.display = 'block';
}


function printCV(){
    window.print();
}