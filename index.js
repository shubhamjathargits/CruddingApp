let data = [10, 99, 20, 55, 39, 77,0,45];
     
// This Code is for displaying the Original Array
document.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById('original').innerHTML = data.join(', ');
});

// this function is for searching of element inex
function searchme(){
    let searcho=document.getElementById('ele').value;
    let index=undefined;
    for(let i=0;i<=data.length-1;i++)
    {
      if(data[i]===parseInt(searcho)){
          index=i;
      }
      
  
    }
    if(index>=0){
    document.getElementById('ser').innerHTML=index;
    }
    else{
      alert("Enter Valid Number !");
    }

  }
// This function is for Travelsing an array:
function trav(){
    let indexs=document.getElementById('ind').value;
    outputs=undefined;
    for(let i=0;i<data.length;i++)
    {
        outputs=data[indexs];
    }
   document.getElementById('trvss').innerHTML=outputs;
}
// this code is for inserting the element in array
function insert(){
    let pos=document.getElementById('position').value;
    let ele=document.getElementById('nele').value;
    for(let i=data.length-1;i>=0;i--)
    {
        if(i>=pos){
            data[i+1]=data[i];
            if(pos==i)
            {
                data[i]=ele;
            }
        }
    }
    document.getElementById('output').innerHTML='o/p= '+data;
}


function sortZ()
        {
        for(let i=0;i<data.length;i++)
        {
            for(let j=0;j<data.length;j++)
            {
                if(data[j]>data[j+1])
                {
                   let temp=data[j];
                   data[j]=data[j+1];
                   data[j+1]=temp;
                }
            }
        }
        document.getElementById('output').innerHTML ='o/p= '+data;
        // document.getElementById('sorts').innerHTML=data;
        }
        function deleteNumber() {
            let num = parseInt(document.getElementById('numToDelete').value);
            if (!isNaN(num)) {
                let index = data.indexOf(num);
                if (index !== -1) {
                    data.splice(index, 1);
                    document.getElementById('output').innerHTML = 'o/p= ' + data;
                } else {
                    alert("Number not found in the array.");
                }
            } else {
                alert("Invalid number.");
            }
        }


        
        
        
        
        