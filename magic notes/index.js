
shownote();
let addbtn=document.getElementById('addbtn');
addbtn.addEventListener('click',function(e){
  let addtxt=document.getElementById('newnotes');
  let addttl=document.getElementById('newtitle');
  let titles=localStorage.getItem('titles')
  let notes=localStorage.getItem('notes');
  if(notes == null){
    notesobj=[];
    titlesobj=[];
  }
  else{
    notesobj=JSON.parse(notes)
    titlesobj=JSON.parse(titles)
  }
  if(addtxt.value!=''){
  notesobj.push(addtxt.value);
  }
  else{
    alert("Write Something....");
  }
  if(addttl.value!=''){
  titlesobj.push(addttl.value);
  }
  else{
    alert("Add A Title....");
  }
  localStorage.setItem('notes',JSON.stringify(notesobj))
  localStorage.setItem('titles',JSON.stringify(titlesobj))
  addtxt.value="";
  addttl.value="";
  // console.log(notesobj);
  shownote()
})

function shownote(){
  let titles=localStorage.getItem('titles')
  let notes=localStorage.getItem('notes');
  if(notes == null){
    notesobj=[];
    titlesobj=[];
  }
  else{
    notesobj=JSON.parse(notes)
    titlesobj=JSON.parse(titles)
  }
  let html="";
  notesobj.forEach(function(element,index){
    html+=`
    <div class="carditem"
    style="padding: 15px; border: 2px solid rgb(190, 189, 189);width:200px;display:inline-block;margin:0 auto 5px;">
      <h3 style="margin:1px 0">${titlesobj[index]}</h3>
    <p style="margin:8px 0">${element}</p>
    <input type="button" id="${index}" onclick="dnote(this.id)" value="Delete Note"
        style="padding:5px;background-color: rgb(59, 59, 245);color: white;border:none;margin-top: 4px;border-radius: 4px;">
</div>
`;   
  });
  let cards=document.getElementById('cards');
  if(notesobj.length !=0){
    cards.innerHTML=html;
  }
  else{
    cards.innerHTML=`<i>make your first note</i>`;
  }
}

function dnote(index){
  console.log("i an deleting ",index);
  let titles=localStorage.getItem('titles')
  let notes=localStorage.getItem('notes');
  if(notes == null){
    notesobj=[];
    titlesobj=[];
  }
  else{
    notesobj=JSON.parse(notes)
    titlesobj=JSON.parse(titles)
  }
  notesobj.splice(index,1);
  localStorage.setItem('notes',JSON.stringify(notesobj));
  localStorage.setItem('titles',JSON.stringify(titlesobj));
  shownote();
}

let search=document.getElementById('searchbar1')
search.addEventListener('input',function () {
  let inpval=search.value;
  let notecards=document.getElementsByClassName('carditem');
  Array.from(notecards).forEach(element => {
    let cardtxt=element.getElementsByTagName("p")[0].innerHTML;
    let cardttl=element.getElementsByTagName("h3")[0].innerHTML;
    if(cardtxt.includes(inpval)){
      element.style.display="inline-block";
    }
    else if(cardttl.includes(inpval)){
      element.style.display="inline-block";
    }
    else{
      element.style.display="none";
    }
  });
  })
// let searc=document.getElementById('searchbar2')
// searc.addEventListener('input',function () {
//   let inpval=searc.value;
//   console.log(inpval);
//   let notecards=document.getElementsByClassName('carditem');
//   Array.from(notecards).forEach(element => {
//     let cardtxt=element.getElementsByTagName("p")[0].innerHTML;
//     if(cardtxt.includes(inpval)){
//       element.style.display="inline-block";
//     }
//     else{
//       element.style.display="none";
//     }
//   });
  // })







