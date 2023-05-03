import path from 'path'
import {promises as fs} from 'fs'

export default async function handler(req, res){
    //get the path to the json directory
    // cwd = current working directory
    const jsonDirectory = path.join(process.cwd(), 'json');
    //read in the contents from our jsonFile
    const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf-8');
    const data = JSON.parse(fileContents);
    //send all of the files contents as JSON to the client
    res.status(200).json(data);
}