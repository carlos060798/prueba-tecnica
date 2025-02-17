import { Router } from "express"; 

import { PhotoController } from "../controller/controller";

export const router = Router();


const photoController = new PhotoController();

router.get("/photos", (req, res) => photoController.getPhotos(req, res));
router.post("/photos", (req, res) => photoController.createPhoto(req, res));
router.get("/photos/:id", (req, res) => photoController.getPhotoById(req, res));
router.put("/photos/:id", (req, res) => photoController.updatePhoto(req, res));
router.delete("/photos/:id", (req, res) => photoController.deletePhoto(req, res));

router.get("/metadata", (req, res) => photoController.getMetadatas(req, res));
router.post("/metadata", (req, res) => photoController.createMetadata(req, res));
router.get("/metadata/:id", (req, res) => photoController.getPhotoMetadata(req, res));


const photoRouter = router;



export default photoRouter;


