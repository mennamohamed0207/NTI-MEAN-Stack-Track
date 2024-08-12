const skillModel=require('../models/skillModel');


skills.syncIndexes();
exports.createSkill=async(req,res)=> {
    try {
      const data = await skills.create(req.body);
      res.status(200).json({ message: "skill added successfully", data: data });
    } catch (error) {
      res.status(500).json({ message: "something went wrong", error: error });
    }
};

exports.getSkills= async (req, res) => {
  const data = await skills.find();
  res.status(200).json({ data: data });
};


exports.deleteSkill= async (req, res) => {
  const data = await skills.deleteOne({ name: req.params.name });
  res.status(200).json({ message: "skill deleted successfully", data: data });
};


exports.updateSkill=async (req, res) => {
  const data = await skills.updateOne(
    { name: req.params.name },
    { $set: req.body }
  );
  res.status(200).json({ message: "skill updated successfully", data: data });
};