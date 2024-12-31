
document.addEventListener('DOMContentLoaded', () => {
    function addEditButton(){
     //get all the list items
     const myNodeList = document.getElementsByTagName("li");

     for (let i = 0; i < myNodeList.length; i++){
        if (!myNodeList[i].querySelector('.edit')){
            let editSpan = document.createElement('span');
            let editText = document.createTextNode('\u270F');
            editSpan.className = 'edit';
            editSpan.appendChild(editText);
            myNodeList[i].appendChild(editSpan);

            editSpan.addEventListener('click', function(){
              const currentText = myNodeList[i].firstChild;
              const newtext = prompt();

              if (newtext !== null && newtext.trim() !== ""){
                currentText.textContent = newtext;
                updateLocalStorage();
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
                let span = document.createElement('span');
                let text = document.createTextNode('\u00D7');
                span.className = "close";
                span.appendChild(text);
                myNodeList[i].appendChild(span);
    
                //add event listener to the close button
                span.addEventListener('click', () => {
                    myNodeList[i].style.display = 'none';
                    updateLocalStorage();
                });
            }   
        }
    }

    function updateLocalStorage(){
        const myListItem = document.querySelectorAll('li');
        const itemsArray = [];
        myListItem.forEach(item => {
            itemsArray.push(item.firstChild.textContent);
        });
        localStorage.setItem('myListItems', JSON.stringify(itemsArray));
        console.log('Events Updated:', itemsArray);
    }

    function loadFromLocalStorage(){
       
        const storedData = localStorage.getItem('myListItems');
        if (storedData) {
            const itemsArray = JSON.parse(storedData);
            itemsArray.forEach(itemText => {
                const myListItem = document.createElement('li');
                myListItem.textContent = itemText;
                const myList = document.getElementById('myList');
                myList.appendChild(myListItem);
                addEditButton(myListItem);
                addCloseButton(myListItem);
            });
        }
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
    
    
            //add the new list item to the unordered list
            const myList = document.getElementById('myList');
            myList.appendChild(myListItem);
    
            //Clear the input field
            myInput.value = "";
            
            updateLocalStorage();
            //Add an edit button
            addEditButton(myListItem);
            
            //Add a close button to the new list item
            addCloseButton(myListItem);
        }else{
            alert("Please enter a valid item")
        }
    }
    //Get the button element
    const button = document.getElementById('addButton');

    button.addEventListener('click', () => {
        //add the new event on the list
       addItem();
    });

    loadFromLocalStorage();

    const myNodeList = document.getElementsByTagName('li');
    for (let i = 0; i < myNodeList; i++){
        addEditButton(myNodeList[i]);
        addCloseButton(myNodeList[i]);
    }
    //Initial call to add a close button to existing list
   
});












