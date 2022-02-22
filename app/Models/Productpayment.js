'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Productpayment extends Model {
  
      hasProduct(){
        return this.belongsToMany('App/Models/Product','productId', 'id')
      }
}

module.exports = Productpayment
