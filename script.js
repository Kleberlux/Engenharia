 // Aplica scroll suave apenas para links internos (com "#")
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Ajuste para cabeçalho fixo
        behavior: 'smooth'
      });
    }
  });
});

// Links com classe 'externa' são ignorados pelo script (eles redirecionam)