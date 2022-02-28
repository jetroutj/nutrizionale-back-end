'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Productpayment extends Model {
  
      hasProduct(){
        return this.hasMany('App/Models/Product','productId', 'id')
      }
      hasUser(){
        return this.hasMany('App/Models/User','userId', 'id')
      }
}

module.exports = Productpayment
