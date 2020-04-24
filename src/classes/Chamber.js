/**
 * Song type (as fetched from Lisn API).
 * @typedef {*, number, string, string, string, string} Song
 */

/**
 * @classdesc Chamber is an ordered collection of songs. It may represent an
 * album or playlist. Chambers may be passed to a Queue in order to be enqued or
 * simply to replace all the songs previously held there.
 *
 * @class
 */
export class Chamber {

  /**
   * @param {Array<Song>} songs A list of songs to be used by the Chamber
   */
  constructor(songs = []) {
    this.selected = null
    this.songs = songs
    this.songs.forEach( (song, id) => song.id = id )
  }

  /** @return {Array<Song>} */
  get chamber() {
    return this.songs
  }

  /** @return {Song} */
  get current() {
    return this.selected
  }

  /**
   * @param {number} id Song's chamber id that gets set when song is added
   */
  select(id) {
    this.selected = this.songs[id]
  }

  /**
   * @param {Song} song A song to be added to the Chamber
   */
  load(song) {
    song.id = this.songs.length
    this.songs.push(song)
  }

}