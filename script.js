(function(){

emailjs.init("mVvXqHd4Qmk8FYta3");

})();

if(localStorage.getItem("quiz_deja_fait")){

document.body.innerHTML="<h2 style='color:white;text-align:center'>Vous avez déjà répondu à ce quiz.</h2>";

}

const zone=document.getElementById("questions");

quiz.forEach((q,i)=>{

let html="<h3>"+(i+1)+". "+q.question+"</h3>";

q.choix.forEach(c=>{

html+=`<label>
<input type="radio" name="q${i}" value="${c}" required> ${c}
</label>`;

});

zone.innerHTML+=html;

});

let temps=300;

let timer=setInterval(function(){

temps--;

document.getElementById("timer").innerText="Temps restant : "+temps+" secondes";

if(temps<=0){

clearInterval(timer);

alert("Temps écoulé");

document.getElementById("quizForm").submit();

}

},1000);

document.getElementById("quizForm").addEventListener("submit",function(e){

e.preventDefault();

emailjs.sendForm("service_dw1u1gd","template_cnpadzs",this)

.then(function(){

localStorage.setItem("quiz_deja_fait","oui");

document.getElementById("message").innerText="Merci ! Vos réponses ont été envoyées.";

});

});