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
Route.get('listActiveSupend','UserController.listActiveSupend');
Route.post('login','UserController.login');
Route.post('usersCreate','UserController.store');
Route.put(`usersUpdate/:id`,'UserController.update');
Route.put(`updateStateUser/:id`,'UserController.updateStateUser');
Route.delete('usersDelete/:id','UserController.usersDelete');
Route.post('password','UserController.jwtpassword');
Route.post('users','UserController.createUser');
Route.get('searchName/:name','UserController.searchName');
Route.get('searchPhone/:phone','UserController.searchPhone');
Route.get('searchUserID/:id','UserController.searchId');
Route.get('listForUser','UserController.listForUser');
Route.get('userAppoiment/:name','UserController.userAppoiment');
Route.get('userDiet/:name','UserController.userDiet');

Route.get('productList','ProductController.index')
Route.get('productsOfAuth','ProductController.productsOfAuth')
Route.get('productId/:id','ProductController.productId');
Route.post('productCreate','ProductController.store')
Route.put('productUpdate/:id','ProductController.update')
Route.put('updateToggle/:id','ProductController.updateToggle')
Route.delete('productDel/:id','ProductController.delete')

Route.post('apartarProd','ProductpaymentController.store')
Route.get('getProductsApart','ProductpaymentController.index')
Route.put('updateproductQuantity/:id','ProductpaymentController.update')

Route.post('sendMailer','SendmailController.store')

Route.get('dietList','DietController.index')
Route.get('dietUserId/:id','DietController.dietUserId')
Route.post('dietCreate','DietController.store')
Route.put('dietUpdate/:id','DietController.update')
Route.delete('dietDel/:id','DietController.delete')



Route.get('AppoinmnetList','AppoinmnetController.index')
Route.get('AppoinmnetListComplete','AppoinmnetController.complete')
Route.get('AppoinmnetListHistory','AppoinmnetController.history')
Route.get('AppoinmnetListActive','AppoinmnetController.active')
Route.get('AppoinmnetId/:id','AppoinmnetController.appoinmnetId');
Route.post('AppoinmnetCreate','AppoinmnetController.store')
Route.put('AppoinmnetUpdate/:id','AppoinmnetController.update')
Route.delete('AppoinmnetDel/:id','AppoinmnetController.delete')
Route.put('stateAppoment/:id','AppoinmnetController.stateAppoment')
Route.get('dietListState','AppoinmnetController.listDietState')

Route.get('listTemplate','PreListDietController.index');


//Route.get('','')
}).prefix('api/v1');