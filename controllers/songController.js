import express from 'express';
import { songModel } from '../models/song.model.js';

export const songController = express.Router();

songController.get('/songs', async (req, res) => {
    const data = await songModel.getAllRecords();
    res.status(200).send(data);
});