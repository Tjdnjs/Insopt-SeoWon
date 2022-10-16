import express, { Router } from 'express';
import { get_content, get_episode } from '../controller/contentControll';

const router: Router = express.Router();

router.get('/:contentID', get_content);
router.get('/:contentID/:episodeID', get_episode);
module.exports = router;