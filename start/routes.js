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

}).prefix('api/v1');