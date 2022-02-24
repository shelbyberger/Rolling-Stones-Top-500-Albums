var url = "https://raw.githubusercontent.com/shelbyberger/data-files/main/RollingStone_%20500%20Albums.csv";
var rankTemp = getColumn(url,1);
var yearTemp = getColumn(url,2);
var album = getColumn(url,3);
var artist = getColumn(url,4);
var genre = getColumn(url, 5);
var subGenre = getColumn(url,6);
var cover = getColumn(url,7);
var rank = [];
for (let i in rankTemp){
  rank.push(Number(rankTemp[i]).toFixed());
}
var year = [];
for (let i in yearTemp){
  year.push(Number(yearTemp[i]).toFixed());
}

// 1. Finds all of the albums in the top 500 list with a selected music genre.
// param selectedGenre {string} - the name of a genre that corresponds to the genre (or one of the genres) of an album (will correspond to multiple albums in almost every case).
// return genreAlbumList {list} - it returns the list of albums that includes the genre selected.
function genreSearch(selectedGenre){
  var genreAlbumList = [];
  for (var i=0; i<genre.length; i++){
    if (genre[i].includes(selectedGenre)){
      genreAlbumList.push(album[i]);
    }
  }
  if(genreAlbumList.length == 0){
    return "No matches, please check your parameters.";
  }
  return genreAlbumList;
}
console.log(genreSearch("Blues"));

// 2. Finds the album with the selected rank (rank in the Rolling Stones top 500 list).
// param selectedRank {number} - the rank that corresponds to an album in the list.
// return albumWithRank {string} - it returns the name of the album with the rank that was selected as the input.
function rankSearch(selectedRank){
  var albumWithRank = "";
  for (var i=0; i<rank.length; i++){
    if (selectedRank == rank[i]){
      albumWithRank = album[i];
    }
  }
  if(albumWithRank.length == 0){
    return "No matches, please check your parameters.";
  }
  return albumWithRank;
}
console.log(rankSearch(1));

// 3. Finds all of the albums on the top 500 list that were released between two given years
// param (min,max) {numbers} - a minimum and a maximum year, where each corresponds to the year that an album was released, but together they create a range.
// return albums {list} - it returns the list of albums that were released between the minimum release year and the maximum release year.
function yearRange(min,max){
  var albums = [];
  for (var i=0; i<year.length; i++){
    if ((year[i] >= min) && (year[i] <= max)){
      albums.push(album[i]);
    }
  }
  if(albums.length == 0){
    return "No matches, please check your parameters.";
  }
  return albums;
}
console.log(yearRange(1967,1968));

// 4.
function subGenreSearch(selectedSubGenre){
  var subGenreAlbumList = [];
  for (var i=0; i<subGenre.length; i++){
    if (subGenre[i].includes(selectedSubGenre)){
      subGenreAlbumList.push(album[i]);
    }
  }
  if(subGenreAlbumList.length == 0){
    return "No matches, please check your parameters.";
  }
  return subGenreAlbumList;
}
console.log(subGenreSearch("Blues Rock"));

// 5.
function artistSearch(musicArtist){
  var artistAlbums = [];
  for (var i=0; i<artist.length; i++){
    if (artist[i].includes(musicArtist)){
      artistAlbums.push(album[i]);
    }
  }
  if(artistAlbums.length == 0){
    return "No matches, please check your parameters.";
  }
  return artistAlbums;
}
console.log(artistSearch("The Beatles"));
