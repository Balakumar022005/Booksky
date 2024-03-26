var nl=document.querySelector(".newlay")
var np=document.querySelector(".newpop")
var bt=document.querySelector(".addplus")
bt.addEventListener("click",function ()
{nl.style.display="block"
np.style.display="block"
})
var cancel=document.querySelector(".but2")
cancel.addEventListener("click",function(event){
    event.preventDefault()
    nl.style.display="none"
np.style.display="none"
})
var divvname=document.querySelector(".container")
var bname=document.querySelector(".Bname")
var Aname=document.querySelector(".Author")
var descript=document.querySelector(".Descript")
var adding=document.querySelector(".but1")
adding.addEventListener("click",function(event){
event.preventDefault()
var create=document.createElement("div")
create.setAttribute("class","content")
create.innerHTML= `<h2>${bname.value}</h2>
<h6>${Aname.value}</h6>
<p>${descript.value}
</p>
<button   onclick="clearing(event)" class="But">Delete</button>`
divvname.append(create)
nl.style.display="none"
np.style.display="none"

})
function clearing(event)
{
    event.target.parentElement.remove()
}