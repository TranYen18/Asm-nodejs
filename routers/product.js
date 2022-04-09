import { Router } from "express";
import { create, list, read, remove, update } from "../controllers/product";
import { userById } from "../controllers/user";
import { checkAuth, isAdmin, isAuth, requireSignin } from "../middlewares/checkAuth";

const router = Router();

router.get('/products', checkAuth,list);
router.get('/products/:id',checkAuth, read);
router.post('/products/', create);
router.delete('/products/:id',checkAuth, remove);
router.put('/product/:id',checkAuth, update);

router.param("userId", userById);

export default router;