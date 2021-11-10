'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(()=>{
Route.get('usersList','UserController.index');
Route.post('login','UserController.login');
Route.post('usersCreate','UserController.store');
Route.put(`usersUpdate/:id`,'UserController.update');
Route.delete('usersDelete/:id','UserController.usersDelete');
Route.post('password','UserController.jwtpassword');
Route.post('users','UserController.createUser');
Route.get('searchName/:name','UserController.searchName');
Route.get('searchPhone/:phone','UserController.searchPhone');
Route.get('searchUserID/:id','UserController.searchId');
Route.get('userAppoiment/:name','UserController.userAppoiment');
Route.get('userDiet/:name','UserController.userDiet');

Route.get('productList','ProductController.index')
Route.get('productId/:id','ProductController.productId');
Route.post('productCreate','ProductController.store')
Route.put('productUpdate/:id','ProductController.update')
Route.put('updateToggle/:id','ProductController.updateToggle')
Route.delete('productDel/:id','ProductController.delete')

Route.get('dietList','DietController.index')
Route.post('dietCreate','DietController.store')
Route.put('dietUpdate','DietController.update')
Route.delete('dietDel','DietController.delete')

Route.get('AppoinmnetList','AppoinmnetController.index')
Route.get('AppoinmnetId/:id','AppoinmnetController.appoinmnetId');
Route.post('AppoinmnetCreate','AppoinmnetController.store')
Route.put('AppoinmnetUpdate/:id','AppoinmnetController.update')
Route.delete('AppoinmnetDel/:id','AppoinmnetController.delete')

//Route.get('','')
}).prefix('api/v1');