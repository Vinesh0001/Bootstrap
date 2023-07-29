let cropper;

const fileInput = document.getElementById('fileInput');
const previewImg = document.getElementById('previewImg');
const cropButton = document.getElementById('cropButton');
const applyFilterButton = document.getElementById('applyFilterButton');
const captionInput = document.getElementById('captionInput');
const hashtagsInput = document.getElementById('hashtagsInput');
const postButton = document.getElementById('postButton');
const postModal = document.getElementById('postModal');
const openModalButton = document.getElementById('openModalButton');
const closeModalButton = document.getElementById('closeModalButton');

fileInput.addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function() {
      previewImg.src = reader.result;
      cropButton.disabled = false;
      applyFilterButton.disabled = false;
      postButton.disabled = false;
      cropper = new Cropper(previewImg, {
        aspectRatio: 1,
        viewMode: 1,
      });
    };
    reader.readAsDataURL(file);
  }
});

cropButton.addEventListener('click', function() {
  const croppedImageData = cropper.getCroppedCanvas().toDataURL();
  const croppedImage = new Image();
  croppedImage.src = croppedImageData;
  previewImgContainer.innerHTML = '';
  previewImgContainer.appendChild(croppedImage);
});

applyFilterButton.addEventListener('click', function() {
  Caman(previewImg, function () {
    // Apply filters using CamanJS API
    // Example: this.brightness(10).contrast(5).vibrance(20).render();
    // For simplicity, let's apply a basic grayscale filter
    this.greyscale().render();
  });
});

postButton.addEventListener('click', function() {
  const caption = captionInput.value;
  const hashtags = hashtagsInput.value.split(',').map(tag => tag.trim());

  // Create a post object
  const post = {
    image: previewImg.src,
    caption: caption,
    hashtags: hashtags,
    // Add more properties like user information, timestamp, etc. as needed
  };

  // You can save the post object in local storage or perform any other action here
  // For simplicity, we'll just display an alert with the post details
  alert(`Post Created!\nImage: ${post.image}\nCaption: ${post.caption}\nHashtags: ${post.hashtags.join(', ')}`);
});

openModalButton.addEventListener('click', function() {
  postModal.style.display = 'block';
});

closeModalButton.addEventListener('click', function() {
  postModal.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target === postModal) {
    postModal.style.display = 'none';
  }
});
