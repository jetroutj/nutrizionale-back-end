'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Appoinmnet extends Model {


    hasUser(){
        return this.belongsTo('App/Models/User','user_id','appoiment_id')
      }
}

module.exports = Appoinmnet
