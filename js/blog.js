// On recupere les boutons et les elements a afficher/masquer
const btnImages = document.querySelectorAll('[id^=blogImage]');
const blogArticleWrappers = document.querySelectorAll('[id^=blogArticlesDescWrapper]');
const firstBtnImage = btnImages[0];

// On affiche le premier article par defaut
blogArticleWrappers[0].style.display = 'flex';

// Fonction pour masquer tous les articles sauf celui sélectionné
function showSelectedArticle(selectedArticleWrapper) {
    blogArticleWrappers.forEach(wrapper => wrapper.style.display = 'none');
    selectedArticleWrapper.style.display = 'flex';
}

// On ajoute un écouteur d'événement à chaque bouton
btnImages.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        showSelectedArticle(blogArticleWrappers[index]);
        btnImages.forEach(btn => btn.classList.remove('hover'));
        btn.classList.add('hover');
    });
    if (index === 0) {
        btn.classList.add('hover');
    }
});


// On recupere les boutons et les elements a afficher/masquer
const btnBlogs = document.querySelectorAll('.btnBlog');
const blogImages = document.querySelectorAll('[class^=blogImage]');

// On masque toutes les images sauf la première
blogImages.forEach((image, index) => {
    if (index === 0) {
        image.style.display = 'flex';
    } else {
        image.style.display = 'none';
    }
});

// Fonction pour masquer toutes les images sauf celle sélectionnée
function showSelectedImage(selectedImage) {
    blogImages.forEach(image => image.style.display = 'none');
    selectedImage.style.display = 'flex';
}

// On ajoute un écouteur d'événement à chaque bouton
btnBlogs.forEach(btn => {
    btn.addEventListener('click', () => {
        const selectedImageIndex = btn.dataset.image - 1;
        const selectedImage = blogImages[selectedImageIndex];
        showSelectedImage(selectedImage);
    });
});