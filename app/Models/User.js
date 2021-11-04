'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Hash = use('Hash')
class User extends Model {
    
  static boot () {
    super.boot()

    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  
  }
  tokens () {
    return this.hasMany('App/Models/Token')
  }
  hasRole(){
    return this.belongsTo('App/Models/Role','role_id', 'id')
  }
  hasstatus(){
    return this.hasOne('App/Models/StatusUser')
  }
  hasAppoiment(){
    return this.belongsTo('App/Models/Appoinmnet','appoiment_id','id')
  }
  hasDiet(){
    return this.belongsTo('App/Models/Diet','diet_id','id')
  }
  
}



module.exports = User
