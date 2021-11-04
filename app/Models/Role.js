'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Role extends Model {

    hasUser(){
        return this.belongsToMany('App/Models/User','id', 'role_id')
      }
}

module.exports = Role
