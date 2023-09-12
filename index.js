function imgSlider(anything){
    document.querySelector('.starbucks').src = anything;
    }

function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
    }

    const instagramLink = document.getElementById("https://www.instagram.com/starbucksindonesia/#");
    instagramLink.href = "https://www.instagram.com/starbucksindonesia";

    const twitterLink = document.getElementById("https://twitter.com/SbuxIndonesia")
    twitterLink.href = "https://twitter.com/SbuxIndonesia";

    const facebookLink = document.getElementById("https://www.facebook.com/StarbucksIndonesia?__cft__[0]=AZVarHQaaRsdcP4XUp4Tv_gyizl5ZyFk23htBD_6lt6qizl6P087MdDgBAuBaNXAjttkRQnAWqaararfu6aPr8TTXOlaCGPaBf4gs1rP4AWgmLT6q_W0S262aUMxoUv73diGdD6MeWMC5Zgh14uTSR0OHABdeeGXtqmpX3nI0mFnvoN6uZ0wwaQJUiDFExNywSg&__tn__=-UC%2CP-R")
    facebookLink.href = "https://www.facebook.com/StarbucksIndonesia?__cft__[0]=AZVarHQaaRsdcP4XUp4Tv_gyizl5ZyFk23htBD_6lt6qizl6P087MdDgBAuBaNXAjttkRQnAWqaararfu6aPr8TTXOlaCGPaBf4gs1rP4AWgmLT6q_W0S262aUMxoUv73diGdD6MeWMC5Zgh14uTSR0OHABdeeGXtqmpX3nI0mFnvoN6uZ0wwaQJUiDFExNywSg&__tn__=-UC%2CP-R";

    document.getElementById("home").addEventListener("click", function() {
        alert("sedang dalam perbaikan.... harap di tunggu.. arjun✌️");
    });

    var orderNowLink = document.getElementById("orderNowLink");
    orderNowLink.addEventListener("click", function(event) {
        event.preventDefault(); 
        alert("Pesanan Anda telah diterima! harap menunggu pesanan anda terimakasih!");
    });

    var orderNowLink = document.getElementById("orderNowLink");
    orderNowLink.addEventListener("click", function(event) {
        event.preventDefault(); 
        alert("Pesanan Anda telah diterima! harap menunggu pesanan anda terimakasih!");
    });


    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('header ul li a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
    let currentIndex = 0;
    const images = [
        'img/img1.png',
        'img/img2.png',
        'img/img3.png'
    ];

    function imgSlider(imageUrl) {
        const imgBox = document.querySelector('.imgBox img');
        imgBox.src = imageUrl;
    }

    function changeCircleColor(color) {
        const circle = document.querySelector('.circle');
        circle.style.backgroundColor = color;
    }

    function autoSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        imgSlider(images[currentIndex]);
        changeCircleColor(['#017143', '#eb7495', '#d752b1'][currentIndex]);
    }

    setInterval(autoSlide, 3000);
    
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });