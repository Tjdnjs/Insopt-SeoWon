import { Request, Response } from "express";
import { get } from "http";
import { getContent, getEpisode } from "../service/contentService";

const get_content = async (req: Request, res: Response) => {
    const {contentID} = req.params;
    const content = await getContent(contentID);
    
    if(!content){
        return res.status(404).json({status:404, message:`${contentID} is not a valid content`});
    }

    return res.status(200).json({status:200, message:`${content.title} 조회 성공` ,data:content});
};

const get_episode = async (req: Request, res: Response) => {
    const contentId = req.params.contentID;
    const episodeId = req.params.episodeID;
    const episode = await getEpisode(contentId, episodeId);
    const content = await getContent(contentId);

    if(!content){
        return res.status(404).json({status:404, message:`${contentId} is not a valid content`});
    }

    if(!episode){
        return res.status(404).json({status:404, message:`${episodeId}화 is not a valid episode in ${content.title}`});
    }

    return res.status(200).json({status:200, message:`${episodeId} episode 조회 성공` ,data:episode});
};

export {
    get_content,
    get_episode,
}