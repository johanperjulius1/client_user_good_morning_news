import axios from "axios";
const Articles = {
  async index(category) {
    let response
    try {
      let result
      if (category) {
        result = await axios.get(`/articles/?category=${category}`);
      } else {
        result = await axios.get(`/articles`);
      }
      response = result.data.articles;
    } catch(error) {
      response = error.response.data.error_message
    } finally {
      return response
    }
  },
  async show(articleId) {
    try {
      let result = await axios.get(`/articles/${articleId}`);
      return result.data.article;
    } catch (error) {
      return error.response.data.error;
    }
  },
};
export default Articles;