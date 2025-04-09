import { create, view, update, remove, search } from "../controllers/productController"
import { Router } from 'express';

const router = Router();


router.post("/create", create);

router.get("/view", view);

router.post("/update", update);

router.post('/remove', remove);

router.get('/search', search);

export default router;
