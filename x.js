
document.addEventListener('DOMContentLoaded', () => {
    function addEditButton(){
     //get all the list items
     const myNodeList = document.getElementsByTagName("li");

     for (let i = 0; i < myNodeList.length; i++){
        if (!myNodeList[i].querySelector('.edit')){
            let buttonDiv = document.createElement('div');
            buttonDiv.className = 'buttons';

            let editSpan = document.createElement('span');
            let editText = document.createTextNode('\u270F');
            editSpan.className = 'edit';
            editSpan.appendChild(editText);
            buttonDiv.appendChild(editSpan)

            myNodeList[i].appendChild(buttonDiv);

            editSpan.addEventListener('click', function(){
              const currentText = myNodeList[i].firstChild;
              const newtext = prompt();

              if (newtext !== null && newtext.trim() !== ""){
                currentText.textContent = newtext;
              }else{
                alert('Please enter a valid edited text');
              }
            });
        }
     }
        
    }
    function addCloseButton(){
        //get all the list items
        const myNodeList = document.getElementsByTagName("li");

        //Loop through each list item and add a close button
        for (let i = 0; i < myNodeList.length; i++){
            //Check if the close button already exists
            if (!myNodeList[i].querySelector('.close')){
                let buttonDiv = document.createElement('div');
                buttonDiv.className = 'buttons';

                let span = document.createElement('span');
                let text = document.createTextNode('\u00D7');
                span.className = "close";
                span.appendChild(text);
                buttonDiv.appendChild(span)

                myNodeList[i].appendChild(buttonDiv);
    
                //add event listener to the close button
                span.addEventListener('click', () => {
                    myNodeList[i].style.display = 'none';
                });
            }   
        }
    }

    function createButtonsContainer(){
        const myListItem = document.getElementsByTagName("li");
        const buttonDiv = document.createElement('div');
        buttonDiv.className = 'buttons';
        myListItem.appendChild(buttonDiv);
    }


    function storeData(){
        const myInput = document.getElementById('myInput');
        const addButton = document.getElementById('addButton');

        addButton.addEventListener('click', () => {
            localStorage.setItem('My Event', myInput);
            alert('Event Saved')
        })
    }
    
    function addItem(){
        //get the value frm the input field
        const myInput = document.getElementById('myInput');
        const myEvent = myInput.value.trim();
    
        //check if the input is not empty
        if (myEvent !== ""){
            //create a new list item
            const myListItem = document.createElement('li');
            myListItem.textContent = myEvent;
            
            localStorage.setItem('Event', myListItem);
    
            //add the new list item to the unordered list
            const myList = document.getElementById('myList');
            myList.appendChild(myListItem);
    
            //Clear the input field
            myInput.value = "";

            createButtonsContainer(myListItem);
            storeData(myInput);
            
            //Add an edit button
            addEditButton();
            
            //Add a close button to the new list item
            addCloseButton();
        }else{
            alert("Please enter a valid item")
        }
    }
    //Get the button element
    const button = document.getElementById('addButton');

    button.addEventListener('click', () => {
        //add the new event on the list
       addItem();
    })

    const myNodeList = document.getElementsByTagName('li');
    for (let i = 0; i < myNodeList; i++){
        createButtonsContainer(myNodeList[i]);
        addEditButton(myNodeList[i]);
        addCloseButton(myNodeList[i]);
        storeData(myNodeList[i]);
    } 
});












