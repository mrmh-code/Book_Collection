
const toggleSpinner=DisplayStyle=>{
    document.getElementById('spinner').style.display=DisplayStyle;
}

const searchBook=() =>{
    const SearchText=document.getElementById('search-field');
    const searchField=SearchText.value;
    // show spinner 
    toggleSpinner('block');
    //previous text Content clear
    const count=document.getElementById('count-result');
    count.textContent='';

    //write something section
    const writeSome=document.getElementById('write');
    writeSome.textContent='';
    if(searchField==''){
        const h3=document.createElement('h3');
        h3.innerText=`Please Write Something .....`
        writeSome.appendChild(h3);
    }else{
        fetch(`https://openlibrary.org/search.json?q=${searchField}`)
    .then(res => res.json())
    .then(data => loadDataDisplay(data.docs))
    }
    

    searchField.value='';
}

//Create Display Document

const loadDataDisplay=(books) =>{
    const searchID=document.getElementById('search_result');
    searchID.textContent='';
    let cnt=0;
    console.log(books)
    const missFind=document.getElementById('findMiss');
    missFind.textContent='';
   if(books.length==0){
       const h1=document.createElement('h3');
       h1.innerText="result not found  ......";
       missFind.appendChild(h1);
   }else{
    books.forEach(book =>{
        const div=document.createElement('div');
            div.classList.add('col');
            div.innerHTML=`  <div class="col">
            <div class="card border border-primary">
            <h5 class="text-secondary mx-auto mt-4" class="card-title">${book.title}</h5>
              <div class="card-body">
                <h6 class="card-title ms-3"><span class="text-info me-2">Author: </span>${book.author_name} </h6>
                <p class="card-text ms-3"><span>first publish:</span> ${book.first_publish_year} </p>
               
              </div>
            </div>
          </div>`
      

    searchID.appendChild(div);
    cnt++;
    })
    toggleSpinner('none')
   }
  
      const count=document.getElementById('count-result');
    count.textContent='';
    const p=document.createElement('p');
    p.innerText=`count of result ${cnt} .....`
    count.appendChild(p);
}

 

 
 