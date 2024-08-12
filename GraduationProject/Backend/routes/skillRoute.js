const express=require('express');
const {createSkill,getSkills,updateSkill,deleteSkill}=require('../services/skillService');
const router=express.Router();

router.post("/skills/add",createSkill);
router.get("/skills",getSkills);
router.delete("/skills/:name",deleteSkill);
router.put("skills/:name",updateSkill);

module.exports=router;