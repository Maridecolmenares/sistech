document.addEventListener("DOMContentLoaded", () =>{
    const paragraph=document.querySelector("#secret");
    const button=document.querySelector("#main")
    console.log(paragraph)
    button.addEventListener("click",() =>{
        paragraph.classList.toggle("hidden");
    })
})

let current = 0;
function nextField() {
  const steps = document.querySelectorAll('#multi-form fieldset');
  steps[current].style.display = 'none';
  current = (current + 1) % steps.length;
  steps[current].style.display = 'block';
}
