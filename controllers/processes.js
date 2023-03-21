const { Process, History, RelatedPart} = require('../models');
const getAllProcesses = async (req, res) => {
    try {
        const processes = await Process.findAll({
            include: [
                {
                    model: History,
                    as: "histories"
                },
                {
                    model: RelatedPart,
                    as: "related_parts"
                }
            ]
        });
        return res.status(200).json({ processes });
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getAllForuns = async (req, res) => {
    try {
        const processes = await Process.findAll({
            include: [
                {
                    model: History,
                    as: "histories"
                },
                {
                    model: RelatedPart,
                    as: "related_parts"
                }
            ]
        });

      
        const format = await processes.map((item) => ({label:item.forum,value: item.forum })).filter(function (a) {
            return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
        }, Object.create(null))

        return res.status(200).json(format);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


const getProcessByForum = async (req, res) => {
    try {
       const {cnj,forum} = req.body
        
        const process = await Process.findOne({
            where: { 
                forum: forum,
                 cnj: cnj
             },
            include: [
                {
                    model: History,
                    as: "histories"
                },
                {
                    model: RelatedPart,
                    as: "related_parts"
                }
            ]
        });
        if (process) {
            return res.status(200).json([process]);
        }
        return res.status(404).send(req.body);
    } catch (error) {
        return res.status(500).send(req.body);
    }
}
module.exports = {
    getAllProcesses,
    getProcessByForum,
    getAllForuns
}