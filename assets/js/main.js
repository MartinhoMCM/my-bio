document.addEventListener("DOMContentLoaded",function(){new SweetScroll({}),particlesJS("particles-js",{particles:{number:{value:30,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"polygon",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:19.18081918081918,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:4,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}},nb:80},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})},!1);

    document.addEventListener('click', function (event) {
        const lang = document.getElementById('language');
        if (lang) {
            let languageScript = lang.innerText;
            languageScript = languageScript ==='English'? 'Português': 'English';
         //  document.getElementById('language').innerText= languageScript;

            var dropdown = document.getElementById('languageDropdown');
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';

        }
    });

    document.querySelectorAll('.dropdown-content').forEach(function(item) {
        item.addEventListener('click', function(event) {
            var selectedLanguage = event.target.getAttribute('data-lang');
            var langScript = document.querySelector('.lang-script');
            langScript.innerText = selectedLanguage;

            if (selectedLanguage==='English'){
               transcriptEnglish();
            } else {
                transcriptPt();
            }


            // Hide the dropdown after selection
            document.getElementById('languageDropdown').style.display = 'none';
        });
    });

    // Hide dropdown when clicking outside of it
    window.addEventListener('click', function(event) {
        var dropdown = document.getElementById('languageDropdown');
        if (!event.target.matches('.languague, .languague *')) {
            dropdown.style.display = 'none';
        }
    });


    function transcriptPt() {
            document.getElementById('about-me').innerText = 'Sobre Mim';
            document.getElementById('about-link').innerText = 'Sobre Mim';
            document.getElementById('profile').innerText = 'Engenheiro Informático • Desenvolvedor FullStack • DevOps';
            document.getElementById('bio-desc').innerText = 'Olá, eu sou Martinho Correia Mussamba, um Desenvolvedor Full Stack residente em Luanda, ' +
                'Angola. Com uma paixão profunda por tecnologia e um desejo de criar soluções inovadoras de software, ' +
                'contribuí com sucesso para vários projetos de empresas angolanas, bem como iniciativas de código aberto. ' +
                'Minha expertise abrange toda a stack de desenvolvimento, garantindo soluções abrangentes e eficientes desde o frontend até o backend. ' +
                'Atualmente, estou expandindo minhas habilidades aprendendo e trabalhando com Docker e AWS Cloud.';
            document.getElementById('programming-languages').innerText = 'Linguagens de Programação';
            document.getElementById('frontend').innerText = 'Desenvolvimento FrontEnd';
            document.getElementById('backend').innerText = 'Desenvolvimento BackEnd';
            document.getElementById('tools').innerText = 'Pipelines CI/CD';

    }

    function transcriptEnglish() {
        document.getElementById('about-me').innerText= 'About Me';
        document.getElementById('about-link').innerText= 'About Me';
        document.getElementById('profile').innerText = 'Computer Engineer • FullStack Developer • DevOps';
        document.getElementById('bio-desc').innerText= ' Hi, I am Martinho Correia Mussamba, a Full Stack Developer residing in Luanda, ' +
            'Angola. With a deep passion for technology and a drive to create innovative software solutions, ' +
            'I have successfully contributed to various projects for Angolan companies as well as open-source initiatives. ' +
            'My expertise spans across the full stack of development, ensuring comprehensive and efficient solutions from frontend to backend. ' +
            'Currently, I am expanding my skill set by learning and working with Docker and AWS Cloud.';
        document.getElementById('programming-languages').innerText= 'Programming Languages';
        document.getElementById('frontend').innerText= 'FrontEnd Development';
        document.getElementById('backend').innerText= 'BackEnd Development';
        document.getElementById('tools').innerText= 'CI/CD Pipelines';
    }