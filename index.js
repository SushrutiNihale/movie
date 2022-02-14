let bannerImages = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVorrO7KFm1kXGxrKGQ3esDlv2qE7mkZXmgQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToqolL4OYk81CTutWHlTq5Th7iO1oxQe-5Rw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuJ4pSJDc9wnkTjRVtaPPY0e19H7N1f5ZTLQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjATwvedAZSkDmhMhtPGVwrn5bD-vIBSkCQw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl5DDRMO6U9S-EMeqirEY_sc6DvXQGuCKmsA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTIixKt4ckkAwLUysz9M1p_qwjuyJ9_X6Iig&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNRUe3VCJQsEkzwjMtZQQMDV4wIcw6wllmpw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk8QcaZIzBULjfyp1wHd_66B1fvRx9DKl18g&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8kSbI-9DbwIXTFa0273nPkuFtwlmizvbkZA&usqp=CAU',

]
let image = document.createElement('img');
image.setAttribute('src',bannerImages[0]);
document.getElementById('slideshow').append(image);

let i = 1;
setInterval(() => {
    if (i == bannerImages.length) {
        i = 0;
    }
    image.setAttribute('src',bannerImages[i]);
    i++;
}, 3000);

let movieDatabase = [
    {name: 'Onward',
    releaseDate: 2020,
    poster: 'https://lumiere-a.akamaihd.net/v1/images/p_onward_19732_09862641.jpeg?region=0%2C0%2C540%2C810',
    rating: 7.4},
    {name: 'Logan',
    releaseDate: 2017,
    poster: 'https://lumiere-a.akamaihd.net/v1/images/logan_584x800_9a5af33a.jpeg',
    rating: 8.1},
    {name: 'Ready Player One',
    releaseDate: 2018,
    poster: 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_.jpg',
    rating: 7.4},
    {name: 'Wall E',
    releaseDate: 2008,
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Yl4q1BHBG9-wXoo5Ac87F-i-g8GK4y0ThRxApn-TyqJsLSM5',
    rating: 8.4},
    {name: 'Soul',
    releaseDate: 2020,
    poster: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSWzrHSIZFXCrHAgxd2omcvTVB5jqPkmCVemT0XYPj-CWgRoMs_',
    rating: 8.1},
    {name: 'Shrek',
    releaseDate: 2001,
    poster: 'https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
    rating: 7.9},
    {name: 'The Incredibles',
    releaseDate: 2004,
    poster: 'https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_.jpg',
    rating: 8},
    {name: 'Coco',
    releaseDate: 2017,
    poster: 'https://lumiere-a.akamaihd.net/v1/images/pt_coco_31b33206.jpeg?region=0%2C0%2C300%2C450',
    rating: 8.4},
    {name: 'Thor Ragnarok',
    releaseDate: 2017,
    poster: 'https://i.ebayimg.com/images/g/l88AAOSwsFVax5qg/s-l400.jpg',
    rating: 7.9}
]

localStorage.setItem('movies',JSON.stringify(movieDatabase));

function display() {
    for (let i = 0; i < movieDatabase.length; i++) {
        let movieDiv = document.createElement('div');
        let poster = document.createElement('img');
        let title = document.createElement('p');
        let date = document.createElement('p');
        let rating = document.createElement('p');

        poster.setAttribute('src',movieDatabase[i].poster);
        title.textContent = movieDatabase[i].name;
        date.textContent = movieDatabase[i].releaseDate;
        rating.textContent = movieDatabase[i].rating;

        movieDiv.append(poster,title,date,rating);
        document.getElementById('movies').append(movieDiv);
    }
}

display();

function sort() {
    let elem = document.getElementById('sort').value;
    
    if (elem == 'asc') {
        while(true) {
            let numSwaps = 0;
            for (let i = 1; i < movieDatabase.length; i++) {
                if (movieDatabase[i].rating < movieDatabase[i-1].rating) {
                    [movieDatabase[i],movieDatabase[i-1]] = [movieDatabase[i-1],movieDatabase[i]];
                    numSwaps++;
                }
            }
            if (numSwaps === 0) {
                break;
            }
        }  
    } else if (elem == 'desc') {
        while(true) {
            let numSwaps = 0;
            for (let i = 1; i < movieDatabase.length; i++) {
                if (movieDatabase[i].rating > movieDatabase[i-1].rating) {
                    [movieDatabase[i],movieDatabase[i-1]] = [movieDatabase[i-1],movieDatabase[i]];
                    numSwaps++;
                }
            }
            if (numSwaps === 0) {
                break;
            }
        } 
    }

    for (let i = 0; i < movieDatabase.length; i++) {
        let x = document.getElementById('movies').getElementsByTagName('div')[i];
        x.children[0].src = movieDatabase[i].poster;
        x.children[1].textContent = movieDatabase[i].name;
        x.children[2].textContent = movieDatabase[i].releaseDate;
        x.children[3].textContent = movieDatabase[i].rating;
    }
}

function goToHome() {
    window.location.href = 'index.html';
}
function goToLogin() {
    window.location.href = 'login.html';
}
function goToSignup() {
    window.location.href = 'signup.html';
}