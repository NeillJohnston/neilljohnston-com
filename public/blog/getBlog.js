const LIST_ID = 'blog';
const FETCH_BLOG_POSTS_PATH = '/api/blog-posts';
const FETCH_FILTERED_BLOG_POSTS_PATH = '/api/filtered-blog-posts';

const makePostItem = ({ display, posted, link, tags }) => {
  const linkText = document.createElement('a');
  linkText.classList = 'list-item-link';
  linkText.href = link;
  linkText.innerHTML = display;

  const dateText = document.createElement('div');
  dateText.classList = 'list-item-date'
  dateText.innerHTML = posted;

  const tagsText = document.createElement('div');
  for (const tag of tags.split(',')) {
    const tagText = document.createElement('a');
    tagText.classList = 'list-item-tags';
    tagText.innerHTML = `#${tag}`;
    tagText.href = window.location.pathname + `?tag=${tag}`;
    tagsText.append(' ', tagText);
  }

  const right = document.createElement('div');
  right.append(dateText, tagsText);

  const item = document.createElement('li');
  item.append(linkText, right);
  
  return item;
}

const setList = (data) => {
  const posts = data.map(makePostItem);
  const list = document.getElementById(LIST_ID);
  list.innerHTML = '';
  list.append(...posts);
}

const run = async () => {
  const data = await (await fetch(FETCH_BLOG_POSTS_PATH)).json();
  setList(data);
};

const runFilter = async (tag) => {
  const data = await (await fetch(FETCH_FILTERED_BLOG_POSTS_PATH + `?${tag}`)).json();
  setList(data);
}

const params = new URLSearchParams(window.location.search);
const tag = params.get('tag');
if (tag) {
  runFilter(tag);
}
else {
  run();
}