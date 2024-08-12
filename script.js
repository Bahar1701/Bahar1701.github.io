/*Dark mode toggle function */
function toggleDarkMode(){
    var body= document.body;
    body.classList.toggle("dark-mode");
}
/*Dynamic blog section */
document.addEventListener('DOMContentLoaded', function() {
    // get the blog post container
    const blogList = document.getElementById('blog-posts');
    // fetch blog post from posts.json
    fetch('posts.json')
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                console.log('Loaded posts:', posts);
                const postElement = document.createElement('div');
                postElement.classList.add('post');
                

                const titleElement = document.createElement('h2');
                titleElement.textContent = post.title;
                postElement.appendChild(titleElement);

                const textElement = document.createElement('p');
                textElement.textContent = post.text;
                postElement.appendChild(textElement);

                const authorElement = document.createElement('p');
                authorElement.textContent = `By ${post.author}`;
                authorElement.classList.add('author');
                postElement.appendChild(authorElement);

                blogList.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error loading blog posts:', error));
});

