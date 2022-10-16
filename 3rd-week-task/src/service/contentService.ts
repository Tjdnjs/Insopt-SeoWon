
const getContent = async (contentId: string) => {
        const contents = require('./../data/content.json');
        return contents[contentId];
}
const getEpisode = async (contentId: string, episodeId:string) => {
    const contents = require('./../data/content.json');
    return contents[contentId][episodeId];
}
export {
    getContent,
    getEpisode
}
