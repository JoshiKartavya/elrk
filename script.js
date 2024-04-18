let currentImageIndex = 0;

const carouselImages = [
    "https://t4.ftcdn.net/jpg/04/84/87/61/240_F_484876187_u6HIlCgA2iZdfkoOamuQa43OJH2zaDVR.jpg",
    "https://t3.ftcdn.net/jpg/05/18/23/70/240_F_518237081_JLHWJngMbsKPdZwaySwALL4jTOKDEO3z.jpg",
    "https://t4.ftcdn.net/jpg/06/20/19/33/240_F_620193320_pc7v6U8NszOeShSxqAQCgqCUxOHB39b8.jpg",
    "https://t4.ftcdn.net/jpg/06/79/11/29/240_F_679112980_73x8psdDECRevGKTQHixp588Qd8fd5b4.jpg"
];

function updateCarouselImage(direction) {
    const CarosoulImage = document.querySelector(".carosoul-image_one");

    if (direction === "next") {
        currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
    } else if (direction === "prev") {
        currentImageIndex = (currentImageIndex - 1 + carouselImages.length) % carouselImages.length;
    }

    CarosoulImage.src = carouselImages[currentImageIndex];
}

document.querySelector(".ri-arrow-left-s-line").addEventListener("click", () => {
    updateCarouselImage("prev");
});

document.querySelector(".ri-arrow-right-s-line").addEventListener("click", () => {
    updateCarouselImage("next");
});


const images = document.querySelectorAll('.img-box');
const leftButton = document.querySelector('.highlights_img_arrow button:first-of-type');
const rightButton = document.querySelector('.highlights_img_arrow button:last-of-type');

let currentImgIndex = 0;
console.log(currentImgIndex);

function updateImages() {
    const newIndex = (currentImgIndex + images.length) % images.length;
    const prevIndex = (newIndex + images.length - 1) % images.length;
    const nextIndex = (newIndex + 1) % images.length;

    images[newIndex].style.order = 1;
    images[prevIndex].style.order = 0;
    images[nextIndex].style.order = 2;
}

leftButton.addEventListener('click', () => {
    currentImgIndex = (currentImgIndex + images.length - 1) % images.length;
    updateImages();
    console.log("left");
});

rightButton.addEventListener('click', () => {
    currentImgIndex = (currentImgIndex + 1) % images.length;
    updateImages();
    console.log("right");
});

const products = [
    { name: "Yellow hoodie", image: "https://t3.ftcdn.net/jpg/05/34/01/78/240_F_534017817_L4Ya7tjjn57wfbQBiij2YoZbJIxRYwqC.jpg", price: 25.99 },
    { name: "ladies short wear", image: "https://t4.ftcdn.net/jpg/00/96/48/31/240_F_96483134_Jf5zjDTZIvnsM72tA8X1byFVl9Vi8PZH.jpg", price: 19.99 },
    { name: "Yellow hoodie", image: "https://t3.ftcdn.net/jpg/05/34/01/78/240_F_534017817_L4Ya7tjjn57wfbQBiij2YoZbJIxRYwqC.jpg", price: 25.99 },
    { name: "ladies short wear", image: "https://t4.ftcdn.net/jpg/00/96/48/31/240_F_96483134_Jf5zjDTZIvnsM72tA8X1byFVl9Vi8PZH.jpg", price: 19.99 },
];

function generateProductHTML(product) {
    return `
        <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <div class="product_info">
                <div class="name">${product.name}</div>
                <div class="product_info-price">
                    <div class="price">$${product.price.toFixed(2)}</div>
                    <button class="add_to_cart">+</button>
                </div>
            </div>
        </div>
    `;
}

function displayProducts() {
    const productContainer = document.getElementById("productContainer");
    products.forEach(product => {
        const productHTML = generateProductHTML(product);
        productContainer.innerHTML += productHTML;
    });
}

window.onload = displayProducts;

$(function () {

    'use strict';



    //accordion
    //free accordion
    function freeAckordion() {
        $('.accordion_free .accordion__item').on('click', function () {
            const timeAnim = 250;
            $(this).toggleClass('active');
            $(this).find('.accordion__header').next().slideToggle(timeAnim);
            $(this).css({ 'pointer-events': 'none' });
            setTimeout(function () {
                $(this).css({ 'pointer-events': 'auto' });
            }.bind(this), timeAnim);
        });
    }
    freeAckordion();

    //one item accordion
    function oneItemAckordion() {
        $('.accordion_one_item .accordion__item').on('click', function () {
            const timeAnim = 250;
            $('.accordion_one_item .accordion__item').removeClass('active').css({ 'pointer-events': 'auto' });
            $(this).addClass('active').css({ 'pointer-events': 'none' });
            $('.accordion_one_item .accordion__header').next().slideUp(timeAnim);
            $(this).find('.accordion__header').next().slideDown(timeAnim);
        });
    }
    oneItemAckordion();
});
