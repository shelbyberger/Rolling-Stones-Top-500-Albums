# RollingStonesTop500AlbumsLibrary
The following functions can be used to find out interesting information about the albums on the Rolling Stones top 500 albums list.
#
##### Finds all of the albums in the top 500 list with a selected music genre.
###### @param selectedGenre {string} - the name of a genre that corresponds to the genre (or one of the genres) of an album (will correspond to multiple albums in almost every case).
###### @return genreAlbumList {list} - it returns the list of albums that includes the genre selected.
**`function genreSearch(selectedGenre)`**
#

##### Finds the album with the selected rank (rank in the Rolling Stones top 500 list).
###### @param selectedRank {number} - the rank that corresponds to an album in the list. 
###### @return albumWithRank {string} - it returns the name of the album with the rank that was selected as the input.
**`function rankSearch(selectedRank)`**
#

##### Finds all of the albums on the top 500 list that were released between two given years
###### @param (min,max) {numbers} - a minimum and a maximum year, where each corresponds to the year that an album was released, but together they create a range.
###### @return albums {list} - it returns the list of albums that were released between the minimum release year and the maximum release year.
**`function yearRange(min,max)`**
#

##### Finds all of the albums in the top 500 list with a selected music subgenre.
###### @param selectedSubGenre {string} - the name of a subgenre that corresponds to the subgenre (or one of the subgenres) of an album (will correspond to multiple albums in almost every case).
###### @return subGenreAlbumList {list} - it returns the list of albums that includes the subgenre selected.
**`function subGenreSearch(selectedSubGenre)`**
#

##### Finds all albums on the top 500 list that are by a selected artist/band.
###### @param musicArtist {string} - the name of a music artist.
###### @return artistAlbums {list} - it returns the list of albums on the top 500 list by the selected artist.
**`function artistSearch(musicArist)`**
#
