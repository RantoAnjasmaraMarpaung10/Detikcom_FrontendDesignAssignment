

      // animasi arrow
      const slideContainer = document.querySelector(".slide-container");
      const slides = document.querySelectorAll(".card");
      const prevArrow = document.querySelector(".arrow-left");
      const nextArrow = document.querySelector(".arrow-right");
      const slideWidth = slides[0].offsetWidth + 20; // Lebar slide + margin (20px)
      let currentIndex = 0;

      function goToSlide(index) {
        currentIndex = index;
        const translateXValue = -slideWidth * currentIndex;
        slideContainer.style.transform = `translateX(${translateXValue}px)`;
      }

      prevArrow.addEventListener("click", () => {
        currentIndex = currentIndex > 0 ? currentIndex - 1 : 0;
        goToSlide(currentIndex);
      });

      nextArrow.addEventListener("click", () => {
        currentIndex =
          currentIndex < slides.length - 1
            ? currentIndex + 1
            : slides.length - 1;
        goToSlide(currentIndex);
      });

      let touchStartX = 0;
      let touchEndX = 0;
      slideContainer.addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].clientX;
      });

      slideContainer.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].clientX;
        handleSwipe();
      });

      function handleSwipe() {
        const swipeDistance = touchEndX - touchStartX;
        const swipeThreshold = slideWidth * 0.3; // 30% dari lebar slide sebagai ambang batas swipe

        if (swipeDistance > swipeThreshold) {
          // Swipe ke kanan (panah kiri)
          currentIndex = currentIndex > 0 ? currentIndex - 1 : 0;
        } else if (swipeDistance < -swipeThreshold) {
          // Swipe ke kiri (panah kanan)
          currentIndex =
            currentIndex < slides.length - 1
              ? currentIndex + 1
              : slides.length - 1;
        }
        goToSlide(currentIndex);
      }


    // navbar mobile
		const mainMenu = document.getElementsByClassName('nav-mobile')[0];
		const closeMenu = document.getElementsByClassName('closeMenu')[0];
		const openMenu = document.getElementsByClassName('openMenu')[0];
		const menu = document.getElementsByClassName('dropdown-menu2')[0];
		const menu2 = document.getElementsByClassName('dropdown-menu2')[1];
		const menu3 = document.getElementsByClassName('dropdown-menu2')[2];
		const menu4 = document.getElementsByClassName('dropdown-menu2')[3];

		function handleSidebar() {
			openMenu.addEventListener('click', () => {
				mainMenu.style.left = "0"
				// mainMenu.style.transform = 'translateX(0)'
				// mainMenu.style.transition = '.5s'
				// mainMenu.classList.toggle('.slide');
				closeMenu.style.display = 'block';
				closeMenu.style.opacity = '1'
				openMenu.style.display = 'none';
			})
			closeMenu.addEventListener('click', () => {
				mainMenu.style.left = "-100%"
				openMenu.style.display = 'block';
				closeMenu.style.display = 'none';
				// menu.style.display = 'none';
				// menu2.style.display = 'none';
				// menu3.style.display = 'none';
				// menu4.style.display = 'none';

			})
		}

		handleSidebar()