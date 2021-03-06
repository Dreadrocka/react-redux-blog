// need to track the last ID used
// the last ID used by the dummy articles is 2
let lastID = 2;

// create a function that returns a new article
const createArticle = ({ title, article }) => {
    // up the ID by 1 every time
    lastID += 1;

    return {
        id: lastID,
        title: title,
        article: article,
        comments: [],
        tags: [],
    };
};

const addArticle = (state, action) => {
  // create a new article with a dummy ID
  let newArticle = createArticle(action);

  return {
      ...state,
      articles: {
          ...state.articles,

          // add using the dummy ID
          [newArticle.id]: newArticle,
      },
  };
};

const reducer = (state, action) => {
    switch (action.type) {
        case "addArticle": return addArticle(state, action);
        default: return state;
    }
}

export default reducer;