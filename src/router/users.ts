import express from 'express';

import { deleteUser, getAllUsers, updateUser } from '../controllers/users';
import { isAuthentiacted, isOwner } from '../middlewares';

export default (router: express.Router) => {
    router.get('/users',isAuthentiacted,getAllUsers);
    router.delete('/users/:id',isAuthentiacted,isOwner,deleteUser);
    router.patch('/users/:id',isAuthentiacted,isOwner,updateUser);
}
