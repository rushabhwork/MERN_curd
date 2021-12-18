import express  from "express";
import StudentControler from '../controler/StudentController.js'
const router = express.Router()

router.get("/get",StudentControler.getAllDoc );
router.post("/get",StudentControler.createDoc );
router.get("/edit/:id",StudentControler.editDoc );
router.post("/update/:id",StudentControler.updateDocById );
router.post("/delect/:id",StudentControler.delectDocById )



export default router
