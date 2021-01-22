const express = require("express");
const router = express.Router();
const screenCtrl = require("../controller/screenCtrl");


router.get("/getled", screenCtrl.selled);

router.get("/getfan", screenCtrl.selfan);

router.get("/getac", screenCtrl.selac);

router.get("/getfurnace", screenCtrl.selfurnace);

router.get("/getHumdplus", screenCtrl.selHumdplus);

router.get("/gethumd", screenCtrl.selhumd);

router.get("/gettemp", screenCtrl.seltemp);

router.get("/getdiox", screenCtrl.seldiox);

router.get("/getjiujing", screenCtrl.seljiujing);

router.get("/getlight", screenCtrl.sellight);


router.put("/alisetled", screenCtrl.alisetLED);
// router.put("/env/:temp", screenCtrl.echarts1);


module.exports = router;