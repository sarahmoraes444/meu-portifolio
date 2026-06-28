/*=================================
      MENU RESPONSIVO
=================================*/

const menu = document.querySelector(".menu-mobile");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {

        menu.innerHTML = '<i class="fas fa-times"></i>';

    } else {

        menu.innerHTML = '<i class="fas fa-bars"></i>';

    }

});

/*=================================
 FECHAR MENU AO CLICAR NO LINK
=================================*/

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menu.innerHTML = '<i class="fas fa-bars"></i>';

    });

});

/*=================================
      BOTÃO VOLTAR AO TOPO
=================================*/

const btnTopo = document.getElementById("topo");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        btnTopo.style.display = "flex";

        btnTopo.style.justifyContent = "center";

        btnTopo.style.alignItems = "center";

    } else {

        btnTopo.style.display = "none";

    }

});

btnTopo.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*=================================
      VALIDAÇÃO FORMULÁRIO
=================================*/

const formulario = document.getElementById("formContato");

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();

    const email = document.getElementById("email").value.trim();

    const mensagem = document.getElementById("mensagem").value.trim();

    if (nome === "" || email === "" || mensagem === "") {

        alert("Preencha todos os campos.");

        return;

    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(email)) {

        alert("Digite um e-mail válido.");

        return;

    }

    alert("Mensagem enviada com sucesso!");

    formulario.reset();

});

/*=================================
      ANIMAÇÃO AO ROLAR
=================================*/

const elementos = document.querySelectorAll(".card, .projeto, .item");

const mostrarElementos = () => {

    const topoTela = window.innerHeight * 0.85;

    elementos.forEach((elemento) => {

        const posicao = elemento.getBoundingClientRect().top;

        if (posicao < topoTela) {

            elemento.style.opacity = "1";

            elemento.style.transform = "translateY(0)";

        }

    });

};

elementos.forEach((elemento) => {

    elemento.style.opacity = "0";

    elemento.style.transform = "translateY(50px)";

    elemento.style.transition = "0.8s";

});

window.addEventListener("scroll", mostrarElementos);

mostrarElementos();

/*=================================
      EFEITO NAVBAR
=================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "#0d0d0d";

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.45)";

    } else {

        header.style.background = "#111";

        header.style.boxShadow = "none";

    }

});

/*=================================
      DESTAQUE DO MENU
=================================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("ativo");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("ativo");

        }

    });

});