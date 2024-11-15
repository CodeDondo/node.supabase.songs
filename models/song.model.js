import { supabase } from '../config/supabase_config.js';

export class songModel {
    constructor() {
        this.id = '';
        this.name = '';
        this.artist = '';
        this.album = '';
        this.duration = '';
        this.lyrics = '';
    }

    static getAllRecords = async () => {
        try {
            const { data, error } = await supabase
                .from('songs')
                .select('*');
            if (error) {
                throw new Error(error.message);
            }
            return data;

        } catch (error) {
            console.error('Error: ', error);
        }
    }
}