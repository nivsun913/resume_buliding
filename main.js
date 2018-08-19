/*function json(file,callback){
   var xhr=new XMLHttpRequest();
   xhr.overrideMimeType("application/json");
   xhr.open("GET",file,true);
   xhr.onreadystatechange=function(){
      if(xhr.readyState===4 && xhr.status=="200"){
       	  callback(xhr.responseText);
      }
   }
   xhr.send();
}
json("data.json",function(text)
{
    let d=JSON.parse(text); 
    console.log(d);
    basics(d.basicdetails);
    carr(d.carrier);
    edu(d.education);
    techSkills(d.Skills);
    ache(d.Achievements);
    desc(d.Description);
})*/
//Fetch API
fetch("data.json")
.then(function(response){
  return response.json();
})
.then(function(d)
{
    console.log(d);
    basics(d.basicdetails);
    carr(d.carrier);
    edu(d.education);
    techSkills(d.Skills);
    ache(d.Achievements);
    desc(d.Description);
})
    var main=document.querySelector(".first");
    var l=document.createElement("div");
      l.classList.add("left");
      l.setAttribute("id","nirula");
      main.appendChild(l);
 function basics(basicdetails)
 {
     var i=document.createElement("img");
      i.src=basicdetails.image;
      i.alt="profilephoto";
      l.appendChild(i);
     var nam=document.createElement("h1");
      nam.textContent=basicdetails.name;
      l.appendChild(nam);
     var ema=document.createElement("h4");
      ema.textContent=basicdetails.email;
      l.appendChild(ema);
     var ph=document.createElement("h2");
       ph.textContent=basicdetails.phone;
       l.appendChild(ph);
     var ad=document.createElement("h4");
       ad.textContent=basicdetails.address;
       l.appendChild(ad);
}

var r=document.createElement("div");
r.classList.add("right");
main.appendChild(r);

function edu(e)
 {
   var e1=document.createElement("div");
     e1.classList.add("education");
     r.appendChild(e1);
     var head=document.createElement("h1");
     head.textContent="education";
     e1.appendChild(head);
     head.appendChild(document.createElement("HR"));
     for(var i=0;i< e.length;i++)
       {
         var h=document.createElement("h1");
         h.textContent=e[i].course;
         e1.appendChild(h);
         var u=document.createElement("ul");
         e1.appendChild(u);
         var list=document.createElement("li");
         list.textContent=e[i].college;
         u.appendChild(list);
         var list1=document.createElement("li");
         list1.textContent=e[i].percentage;
         list.appendChild(list1);
       }
  }
function techSkills(s)
{
   var d=document.createElement("div");
   d.textContent="Skills Set";
   r.appendChild(d);
   var tab=document.createElement("table");
   var row="";
   for(var i=0; i<s.length; i++)
   {
    row+="<tr><td>"+s[i].name+"</td><td>"+s[i].value+"</td></tr>";
   }
   tab.innerHTML=row;
   d.appendChild(tab);
}
 function carr(car)
 {
  var c1=document.createElement("div");
  r.appendChild(c1);
  var h1=document.createElement("h1");
  h1.textContent="Carrier Objective";
  c1.appendChild(h1);
  h1.appendChild(document.createElement("HR"));
  var para=document.createElement("p");
  para.textContent=car.ca;
  c1.appendChild(para);
 }
function ache(ach)
{
  var d=document.createElement("div");
  d.setAttribute("id","Achievements");
  r.appendChild(d);
  var h=document.createElement("h2");
  h.textContent="Achievements";
  d.appendChild(h);
  h.appendChild(document.createElement("HR"));
  for(i in ach)
  {
    var u= document.createElement("u1");
    d.appendChild(u);
    var list=document.createElement("li");
    list.textContent=ach[i];
    u.appendChild(list);
 }
}
function desc(D)
{
  var c1=document.createElement("div");
  r.appendChild(c1);
  var h1=document.createElement("h1");
  h1.textContent="Description";
  c1.appendChild(h1);
  h1.appendChild(document.createElement("HR"));
  var para=document.createElement("h3");
  para.textContent=D.des;
  c1.appendChild(para);
}


