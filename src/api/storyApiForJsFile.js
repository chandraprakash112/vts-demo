import storyData  from '../apiDatabase/StoryData';

class StoryService {
  constructor() {
    this.stories = [...storyData];
    console.log(this.stories);
    
  }

  response(status, message, data = null) {
    return {
      response: 200,
      status,
      message,
      data,
    };
  }

  /* GET ALL */
  GET_ALL(api) {
    return this.response(true, 'Stories fetched', this[api]);
  }

  /* GET ONE */
  GET_ID(id) {
    const story = this.stories.find((s) => s.id === id);
    return this.response(
      !!story,
      story ? 'Story fetched' : 'Story not found',
      story,
    );
  }

  /* ADD */
  ADD(data) {
    const story = { id: Date.now(), ...data };
    this.stories.push(story);
    return this.response(true, 'Story added', story);
  }

  /* UPDATE */
  UPDATE_ID(id, data) {
    const index = this.stories.findIndex((s) => s.id === id);
    if (index === -1) return this.response(false, 'Story not found');

    this.stories[index] = { ...this.stories[index], ...data };
    return this.response(true, 'Story updated', this.stories[index]);
  }

  /* DELETE */
  DELETE_ID(id) {
    const index = this.stories.findIndex((s) => s.id === id);
    if (index === -1) return this.response(false, 'Story not found');

    const deleted = this.stories.splice(index, 1)[0];
    return this.response(true, 'Story deleted', deleted);
  }
}

export default new StoryService();