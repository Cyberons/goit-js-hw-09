import"./assets/styles-fa728800.js";document.addEventListener("DOMContentLoaded",()=>{const a=document.querySelector(".feedback-form"),e=a.querySelector('input[type="email"]'),t=a.querySelector("textarea"),l=JSON.parse(localStorage.getItem("feedback-form-state"))||{};e.value=l.email||"",t.value=l.message||"",a.addEventListener("input",()=>{const o={email:e.value.trim(),message:t.value.trim()};localStorage.setItem("feedback-form-state",JSON.stringify(o)),console.log(o)}),a.addEventListener("submit",o=>{if(o.preventDefault(),e.value.trim()&&t.value.trim()){const r={email:e.value.trim(),message:t.value.trim()};console.log(r),localStorage.removeItem("feedback-form-state"),e.value="",t.value=""}else console.log("Поля форми не заповнені")})});
//# sourceMappingURL=commonHelpers2.js.map
