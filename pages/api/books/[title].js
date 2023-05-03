import path from 'path'
import {promises as fs} from 'fs'

export default async function handler(req, res){
    //get the path that was entered that includes the title
    const {title} = req.query;
    //get the path to the json directory
    // cwd = current working directory
    const jsonDirectory = path.join(process.cwd(), 'json');
    //read in the contents from our jsonFile
    const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf-8');
    //d = temp variable, stands for data point
    const data = JSON.parse(fileContents).filter(d=>d.title === title)
    //send all of the files contents as JSON to the client
    res.status(200).json(data);
}