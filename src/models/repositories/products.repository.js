// src\models\repositories\products.repository.js - logicinfo.com.br
import BaseRepository from './base.repository.js'



class ProductsRepository extends BaseRepository {

    constructor() {
        super('product')
    }
}

export default new ProductsRepository