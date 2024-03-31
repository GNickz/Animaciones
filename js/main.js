/*Function NightMode */

function modeNight(){
    const ejecutador = document.querySelector('.ModeLightNight')
    const moon = document.querySelector('.svgMoon')
    const sun = document.querySelector('.svgSun')
    const body = document.querySelector('.body')
    const header = document.querySelector('.ContainerHeader')
    const footer = document.querySelector('.ContainerFooter')
    const text_icons = document.querySelectorAll('.h1 ,.p ,.svg')
    const sections = document.querySelectorAll('.ContainerAnimation ,.ContentCopy ,.HTML ,.CSS, .svgpicture')
    

    ejecutador.addEventListener("click",()=>{
        moon.classList.toggle('changeIcon')
        sun.classList.toggle('changeIcon')
        body.classList.toggle('changeColor')
        header.classList.toggle('changeColor')
        footer.classList.toggle('changeColor')
        text_icons.forEach(content=>{
            content.classList.toggle('changeColor')
        })
        sections.forEach(allsections=>{
            allsections.classList.toggle('changeColor')
        })

        
    
    })
}
modeNight()

/*Function Copy Code */
function CopyCodeHTML(code) {
    const input = document.createElement("textarea");
    input.value = code;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    alert("El código HTML ha sido guardado, aquí puede verlo completo:\n"+"\n" + code);
}

function CopyCodeCSS(code) {
    const input = document.createElement("textarea");
    input.value = code;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    alert("El código CSS ha sido guardado, aquí puedes verlo completo:\n"+"\n" + code);
}

function userselect() {
    const HTMLButtons = document.querySelectorAll('.svgCopyHTML');
    const CSSButtons = document.querySelectorAll('.svgCopyCSS');

    HTMLButtons.forEach(button => {
        button.addEventListener('click', () => {
            const codeHTML = button.parentElement.parentElement.querySelector('.pCodeHTML').innerText;
            CopyCodeHTML(codeHTML);
        });
    });

    CSSButtons.forEach(button => {
        button.addEventListener('click', () => {
            const codeCSS = button.parentElement.parentElement.querySelector('.pCodeCSS').innerText;
            CopyCodeCSS(codeCSS);
        });
    });
}

userselect();
