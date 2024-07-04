// src\models\repositories\categories.repository.js - logicinfo.com.br
import BaseRepository from './base.repository.js'



class CategoriesRepository extends BaseRepository {

    constructor() {
        super('category')
    }
}

export default new CategoriesRepository