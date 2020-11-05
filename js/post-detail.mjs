import postApi from './api/postApi.js';
import AppConstants from './appConstants.js';
import utils from './utils.js';
import AppConstants from './appConstants.js';

const renderPost = (post) => {
  const imgElement = document.querySelector('#postHeroImage');
  if (imgElement) {
    imgElement.style.backgroundImage = `url(${
      post.imageUrl || AppConstants.DEFAULT_HERO_IMAGE_URL
    })`;
  }

  const titleElement = document.querySelector('#postDetailTitle');
  if (titleElement) {
    titleElement.textContent = `${post.title}`;
  }

  const descriptionElement = document.querySelector('#postItemDescription');

  if (descriptionElement) {
    descriptionElement.textContent = `${post.description}`;
  }

  const authorElement = document.querySelector('#postDetailAuthor');
  if (authorElement) {
    authorElement.textContent = `${post.author}`;
  }

  const timeElement = document.querySelector('#postDetailTimeSpan');
  if (timeElement) {
    timeElement.textContent = `${utils.formatDate(post.updatedAt)}`;
  }
};

const main = async () => {
  const params = new URLSearchParams(window.location.search);
  const postId = params.get('id');
  const post = await postApi.get(postId);

  renderPost(post);
};

main();



