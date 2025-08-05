document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.querySelector('.overlay');
    const closeMenuBtn = document.getElementById('closeMenu');
    
    // Verifica se é mobile
    const isMobile = window.innerWidth <= 767;
    
    // Função para verificar se é mobile
    function checkIfMobile() {
        return window.innerWidth <= 767;
    }
    
    // Função para abrir o menu
    function openMenu() {
        if (checkIfMobile()) {
            sidebar.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Impede o scroll do body
        }
        sidebar.classList.add('active');
        overlay.classList.add('active');
    }
    
    // Função para fechar o menu
    function closeMenu() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        if (checkIfMobile()) {
            // Adiciona um pequeno atraso antes de esconder o menu para a animação
            setTimeout(() => {
                if (!sidebar.classList.contains('active')) {
                    sidebar.style.display = 'none';
                }
            }, 300);
        }
        document.body.style.overflow = ''; // Restaura o scroll do body
    }

    // Função para verificar clique fora do menu
    function handleClickOutside(event) {
        if (sidebar.classList.contains('active') && 
            !sidebar.contains(event.target) && 
            !menuToggle.contains(event.target)) {
            closeMenu();
        }
    }
    
    // Adiciona um ouvinte de redimensionamento para ajustar o menu
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (!checkIfMobile()) {
                // Em telas maiores, mostra sempre o menu
                sidebar.style.display = 'flex';
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            } else if (!sidebar.classList.contains('active')) {
                // Em telas menores, esconde o menu se não estiver ativo
                sidebar.style.display = 'none';
            }
        }, 250);
    });
    
    // Inicialização
    if (checkIfMobile()) {
        sidebar.style.display = 'none';
    } else {
        sidebar.style.display = 'flex';
        sidebar.classList.add('active');
    }

    // Abre/fecha o menu ao clicar no botão
    if (menuToggle) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            if (sidebar.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });
        
        // Adiciona feedback tátil ao botão de menu
        menuToggle.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        menuToggle.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    }
    
    // Fecha o menu ao clicar no overlay ou no botão de fechar
    if (overlay) {
        overlay.addEventListener('click', closeMenu);
    }
    
    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', closeMenu);
    }
    
    // Fecha o menu ao clicar em um link do menu
    const menuLinks = document.querySelectorAll('.sidebar-content a, .sidebar-content button:not(#clipButton)');
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Adiciona o manipulador de eventos para o botão de clipe
    const clipButton = document.getElementById('clipButton');
    if (clipButton) {
        clipButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Cria um container para o vídeo
            const videoContainer = document.createElement('div');
            videoContainer.style.position = 'fixed';
            videoContainer.style.top = '0';
            videoContainer.style.left = '0';
            videoContainer.style.width = '100%';
            videoContainer.style.height = '100%';
            videoContainer.style.backgroundColor = 'black';
            videoContainer.style.zIndex = '9999';
            videoContainer.style.display = 'flex';
            videoContainer.style.justifyContent = 'center';
            videoContainer.style.alignItems = 'center';

            // Cria o elemento de iframe
            const iframe = document.createElement('iframe');
            iframe.src = 'https://www.youtube.com/embed/_nh4Lah9Sz8?autoplay=1';
            iframe.style.width = '80%';
            iframe.style.height = '80%';
            iframe.style.border = 'none';
            iframe.allow = 'autoplay; fullscreen';

            // Adiciona o iframe ao container
            videoContainer.appendChild(iframe);

            // Cria o botão de voltar ao início
            const backButton = document.createElement('button');
            backButton.textContent = 'Voltar ao Início';
            backButton.style.position = 'absolute';
            backButton.style.top = '20px';
            backButton.style.right = '20px';
            backButton.style.padding = '10px 20px';
            backButton.style.backgroundColor = '#fff';
            backButton.style.color = '#000';
            backButton.style.border = 'none';
            backButton.style.borderRadius = '5px';
            backButton.style.cursor = 'pointer';
            backButton.style.zIndex = '10000';

            // Adiciona evento de clique para voltar ao index.html
            backButton.addEventListener('click', function() {
                window.location.href = 'index.html';
            });

            // Adiciona o botão ao container
            videoContainer.appendChild(backButton);

            // Adiciona o container ao body
            document.body.appendChild(videoContainer);

            // Tenta ativar o modo de tela cheia
            function requestFullScreen() {
                if (videoContainer.requestFullscreen) {
                    videoContainer.requestFullscreen();
                } else if (videoContainer.webkitRequestFullscreen) {
                    videoContainer.webkitRequestFullscreen();
                } else if (videoContainer.msRequestFullscreen) {
                    videoContainer.msRequestFullscreen();
                }
            }

            // Ativa o modo de tela cheia após adicionar o iframe
            requestFullScreen();

            // Fecha o vídeo ao clicar fora dele
            videoContainer.addEventListener('click', function(e) {
                if (e.target === videoContainer) {
                    closeVideo();
                }
            });

            // Função para fechar o vídeo
            function closeVideo() {
                document.body.removeChild(videoContainer);
            }
        });
    }
});