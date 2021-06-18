import API from '../../../API/api.ts'

const endpoint = '/chapter'

export default {    
    async getMangaChapters({commit}, { sort }) {
        let resp = await API.get(endpoint + sort);                
        commit('setMangaChapters', resp)
    },
    async getMangaChapter({commit}, { sort }){
        let url_images = 'https://uploads.mangadex.org';
        try {
            let resp = await API.get(endpoint + sort);            
            let chapter = resp.results[0];
                        
            let chapterImages = [];
    
            for (let index in chapter.data.attributes.data) {
                chapterImages.push(`${url_images}/data/${chapter.data.attributes.hash}/${chapter.data.attributes.data[index]}`);            
            }             
    
            commit('setChapterImages', {data: chapterImages});       

        } catch (error) {
            return error;
        }
    },        
}