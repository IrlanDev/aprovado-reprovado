const btnFrente = document.getElementById('btn-frente');
const btnVerso = document.getElementById('btn-verso');
const btnFrenteMobile = document.getElementById('btn-frente-mobile');
const btnVersoMobile = document.getElementById('btn-verso-mobile');
const imgCertificate = document.querySelector('.img-certificate');

const frontImage = 'assets/images/Mockup - Frente - Certificado EAD 2.png';
const backImage = 'assets/images/Mockup - Verso - Certificado EAD.png';

btnFrente.addEventListener("click", () => {
    btnFrente.classList.add('btn-active');
    btnVerso.classList.remove('btn-active');
    btnVerso.classList.add('btn-inactive');
    btnFrente.classList.remove('btn-inactive');
    imgCertificate.src = frontImage; 
});

// Evento para mostrar o verso do certificado
btnVerso.addEventListener("click", () => {
    btnVerso.classList.add('btn-active');
    btnFrente.classList.remove('btn-active');
    btnVerso.classList.remove('btn-inactive');
    btnFrente.classList.add('btn-inactive');
    imgCertificate.src = backImage; 
});

btnFrenteMobile.addEventListener("click", () => {
    btnFrenteMobile.classList.add('btn-active');
    btnVersoMobile.classList.remove('btn-active');
    btnVersoMobile.classList.add('btn-inactive');
    btnFrenteMobile.classList.remove('btn-inactive');
    imgCertificate.src = frontImage; 
});

// Evento para mostrar o verso do certificado
btnVersoMobile.addEventListener("click", () => {
    btnVersoMobile.classList.add('btn-active');
    btnFrenteMobile.classList.remove('btn-active');
    btnVersoMobile.classList.remove('btn-inactive');
    btnFrenteMobile.classList.add('btn-inactive');
    imgCertificate.src = backImage; 
});