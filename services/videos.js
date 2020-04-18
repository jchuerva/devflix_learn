const Db = require('../lib/db');

// this class only contains the functionality: list, remove, etc
class VideosService {
  constructor() {
    this.collection = 'videos';
    this.db = new Db();
  }
  // hint: pass the params as object to pass the key and forget about the params order
  async getVideos({ tags }) {
    // getAll will be in the lib/db module
    const videos = await this.db.getAll(this.collection, tags);

    return videos || [];
  }

  async getVideo({ videoId }) {
    const video = await this.db.get(this.collection, videoId);

    return video || [];
  }

  async createVideo({ video }) {
    const createVideoId = await this.db.create(this.collection, video);

    return createVideoId;
  }

  // hint: pass the params as object to pass the key and forget about the params order
  async updateVideo({ videoId, video }) {
    const updateVideoId = await this.db.update(this.collection, videoId, video);

    return updateVideoId;
  }

  async delete({ videoId }) {
    const deleteVideoId = await this.db.delete(this.collection, videoId);

    return deleteVideoId;
  }
}

module.exports = VideosService;
