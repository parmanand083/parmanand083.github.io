let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let color = ['6F98A8','2B8EAD','2F454E','2B8EAD','2F454E','72c3dc','BFBFBF','6F98A8','2F454E']
/*
const getDivClass = (index) => {
    let property = []
    property.bg = color[index]
    property.border =
    return
}



function creates required number of div elements
*/


const createBoxes = () => {
    
    arr.forEach( ( element,index) => {
        let box = document.createElement('div');
        box.id = "box"+index
        box.innerText = arr[index];
        box.style.backgroundColor="#"+color[index];
    
        box.style.borderLeft="#"+color[index]+" 10px solid"
        document.getElementById('container').appendChild(box);
      //  console.log( document.getElementById(''))
       }   
    );
}




const isSorted=(arr)=>
{
    var flag = true; 
    for(let index=0;index<arr.length-1;index++)
    {
         if(arr[index] > arr[index+1])
         flag=false

    }
     return flag; 
}


const updateDOM = () => {
    for (let counter = 0; counter < arr.length; counter++) {
        let boxID = "box" + counter;
        let box=document.getElementById(boxID);
        box.style.backgroundColor="#"+color[counter];
        box.style.borderLeft="#"+color[counter]+" 10px solid"
        document.getElementById(boxID).style.order = arr[counter];
    }
}



const gridAction = (actionType) => {

    if (actionType==='Shuffle')
    {
      //  alert("A")
        arr.sort(
            () => Math.random() - 0.5
            );
        updateDOM();

    } else if(actionType==="sort") {
           
        if(isSorted(arr))
        alert("Already sorted")
        else{
        arr.sort()
        updateDOM()
        }
    }else
    alert("invalid action!!!")

}