const movies = [
  {
    id: '1',
    title: 'Oceans 8',
    category: 'Comedy',
    likes: 4,
    dislikes: 1,
    url: 'https://fr.web.img3.acsta.net/pictures/18/05/14/12/19/5676009.jpg'
  }, {
    id: '2',
    title: 'Midnight Sun',
    category: 'Comedy',
    likes: 2,
    dislikes: 0,
    url:'https://m.media-amazon.com/images/I/71FNeDH8B0L._AC_SY606_.jpg'
  }, {
    id: '3',
    title: 'Les indestructibles 2',
    category: 'Animation',
    likes: 3,
    dislikes: 1,
    url: 'https://fr.web.img6.acsta.net/pictures/18/04/13/15/09/0323902.jpg'
  }, {
    id: '4',
    title: 'Sans un bruit',
    category: 'Thriller',
    likes: 6,
    dislikes: 6,
    url: 'https://www.plansamericains.com/wp-content/uploads/Sans-un-bruit-affiche-1.jpg'
  }, {
    id: '5',
    title: 'Creed II',
    category: 'Drame',
    likes: 16,
    dislikes: 2,
    url: 'https://images.affiches-et-posters.com//albums/3/55797/affiche-film-creed.jpg'
  }, {
    id: '6',
    title: 'Pulp Fiction',
    category: 'Thriller',
    likes: 11,
    dislikes: 3, 
    url: 'https://image.posterlounge.fr/images/l/1905572.jpg'
  }, {
    id: '7',
    title: 'Pulp Fiction',
    category: 'Thriller',
    likes: 12333,
    dislikes: 32,
    url:'https://image.posterlounge.fr/images/l/1905572.jpg'
  }, {
    id: '8',
    title: 'Seven',
    category: 'Thriller',
    likes: 2,
    dislikes: 1,
    url:'https://static.films-horreur.com/2015/06/sQGY0TD5od0JUDAyIjo6PE1FVFT.jpg'
  }, {
    id: '9',
    title: 'Inception',
    category: 'Thriller',
    likes: 2,
    dislikes: 1,
    url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREAUUIBmMvHgE3aAE3X9C8js1gNHAUVPG81qzB1XrE55dEW8NhTQai7X8nfAKr8IV4k6c&usqp=CAU'
  }, {
    id: '10',
    title: 'Gone Girl',
    category: 'Thriller',
    likes: 22,
    dislikes: 12,
    url: 'https://www.ecranlarge.com/uploads/image/001/148/7xkj1acu40bjzlhvprilwjfvw7-555.jpg'
  },
  {
    id: '11',
    title: 'Oceans 8',
    category: 'Comedy',
    likes: 4,
    dislikes: 1,
    url:'https://fr.web.img3.acsta.net/pictures/18/05/14/12/19/5676009.jpg'
  }, {
    id: '12',
    title: 'Midnight Sun',
    category: 'Comedy',
    likes: 2,
    dislikes: 0,
    url: 'https://m.media-amazon.com/images/I/71FNeDH8B0L._AC_SY606_.jpg'
  }, {
    id: '13',
    title: 'Les indestructibles 2',
    category: 'Animation',
    likes: 3,
    dislikes: 1,
    url: 'https://fr.web.img6.acsta.net/pictures/18/04/13/15/09/0323902.jpg'
  }, {
    id: '14',
    title: 'Sans un bruit',
    category: 'Thriller',
    likes: 6,
    dislikes: 6, 
    url: 'https://www.plansamericains.com/wp-content/uploads/Sans-un-bruit-affiche-1.jpg'
  }, {
    id: '15',
    title: 'Creed II',
    category: 'Drame',
    likes: 16,
    dislikes: 2, 
    url: 'https://images.affiches-et-posters.com//albums/3/55797/affiche-film-creed.jpg'
  }, {
    id: '16',
    title: 'Pulp Fiction',
    category: 'Thriller',
    likes: 11,
    dislikes: 3,
    url:'https://image.posterlounge.fr/images/l/1905572.jpg'
  }, {
    id: '17',
    title: 'Pulp Fiction',
    category: 'Thriller',
    likes: 12333,
    dislikes: 32,
    url: 'https://image.posterlounge.fr/images/l/1905572.jpg'
  }, {
    id: '18',
    title: 'Seven',
    category: 'Thriller',
    likes: 2,
    dislikes: 1,
    url: 'https://static.films-horreur.com/2015/06/sQGY0TD5od0JUDAyIjo6PE1FVFT.jpg'
  }, {
    id: '19',
    title: 'Inception',
    category: 'Thriller',
    likes: 2,
    dislikes: 1,
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREAUUIBmMvHgE3aAE3X9C8js1gNHAUVPG81qzB1XrE55dEW8NhTQai7X8nfAKr8IV4k6c&usqp=CAU'
  }, {
    id: '20',
    title: 'Gone Girl',
    category: 'Thriller',
    likes: 22,
    dislikes: 12,
    url: 'https://www.ecranlarge.com/uploads/image/001/148/7xkj1acu40bjzlhvprilwjfvw7-555.jpg'
  },
]

export const movies$ = new Promise((resolve, reject) => setTimeout(resolve, 100, movies));
// const hahaha = async function test(){
//   let haha = await movies$;
//   console.log(haha);
//   return haha;
// }

// console.log(hahaha);