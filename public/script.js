const mode = new URLSearchParams(window.location.search);

if(mode.get('mode') == null){
    document.getElementById('chemicalEngineer').checked = true;
    document.getElementById('lChemicalEngineer').classList.add('disabled');
    document.getElementById('career').innerText = 'CHEMICAL ENGINEER';
}
else if(mode.get('mode') == 'freelancer'){
    document.documentElement.style.setProperty('--HS', '5, 90%');
    document.getElementById('freelancer').checked = true;
    document.getElementById('lFreelancer').classList.add('disabled');
    document.getElementById('career').innerText = 'FREELANCER';
    document.getElementById('icon').setAttribute('href', '/images/iconF.png');
    document.getElementById('image').setAttribute('src', '/images/photoF.png');
}