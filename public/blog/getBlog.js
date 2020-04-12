const LIST_ID = 'blog';
const FETCH_BLOG_POSTS_PATH = '/api/blog-posts';

const makePostItem = ({ display, posted, link, tags }) => {
  const linkText = document.createElement('a');
  linkText.classList = 'list-item-link';
  linkText.href = link;
  linkText.innerHTML = display;

  const dateText = document.createElement('div');
  dateText.classList = 'list-item-date'
  dateText.innerHTML = posted;

  const tagsText = document.createElement('div');
  tagsText.classList = 'list-item-tags';
  tagsText.innerHTML = tags.split(',').map(tag => `#${tag}`).join(' ');

  const right = document.createElement('div');
  right.append(dateText, tagsText);

  const item = document.createElement('li');
  item.append(linkText, right);
  
  return item;
}

const run = async () => {
  const data = await (await fetch(FETCH_BLOG_POSTS_PATH)).json();
  const posts = data.map(makePostItem);
  const list = document.getElementById(LIST_ID);
  list.innerHTML = '';
  list.append(...posts);
};

run();