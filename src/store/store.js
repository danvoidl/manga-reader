import { createStore } from 'vuex'
import manga from './actions/manga/index'
import chapters from './actions/chapter/index'

export default createStore({
  modules: {
    manga,
    chapters,
  }
})
