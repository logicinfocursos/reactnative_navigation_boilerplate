// src\models\repositories\categories.repository.js - logicinfo.com.br
import BaseRepository from './base.repository.js'



class CartsRepository extends BaseRepository {

    constructor() {
        super('cart')
    }
}

export default new CartsRepository