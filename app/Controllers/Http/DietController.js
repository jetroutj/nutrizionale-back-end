'use strict'

const Diet = use('App/Models/Diet');
const User = use('App/Models/User');

class DietController {

    async index ({auth, response}){
        try {
            const jwt = await auth.getUser();
             let rows = await Diet.all();
             const array = rows.rows
             let diets = []


             if (jwt.$attributes.role_id === 1) {
                for (const i of array) {
                    const user = await i.hasUser().fetch();
                    if (i && user?.estado === 'activo') {
                        const data = i.$attributes;
                        console.log(data);
                        diets.push({
                            "id": data?.id,
                            "user_id": data?.user_id,
                            "disease": data?.disease,
                            "weight": data?.weight,
                            "size": data?.size,
                            "age": data?.age,
                            "allergy": data?.allergy,
                            "imc": data?.imc,
                            "stateWeight":data?.stateWeight,
                            "gender":data?.gender,
                            "calories": data?.calories,
                            "typeDiet": data?.typeDiet,
                            "date": JSON.parse(data?.date),
                            "weekOne": JSON.parse(data?.weekOne),
                            "weekTwo": JSON.parse(data?.weekTwo),
                            "weekThree": JSON.parse(data?.weekThree) ,
                            "weekFour": JSON.parse(data?.weekFour),
                             user
                        })
                    }
                }
                return response.status(200).json({ success: true,diets:diets, message: `Lista de dietas`, code: 200 });
            }else{
                return response.status(401).json({ success: false, message: `No tienes los permisos para realizar esta accion`, code: 401 });
             }
            // (jwt.$attributes.role_id === 1)
            //     ? response.status(200).json({ success: true, users: rows, message: `Lista de dietas`, code: 200 })
            //     : response.status(401).json({ success: false, message: `No tienes los permisos para realizar esta accion`, code: 401 });
        } catch (error) {
            console.log(error);
            // return response.status(500).json({ success: false, result: error, message: `Algo ocurrio`, code: 500 });
        }
    }
    async store ({request, auth, response}){
        try {
            const diet = await new Diet();
            const jwt = await auth.getUser();
            
            const {
                disease,
                weight,
                size,
                age,
                allergy,
                imc,
                stateWeight,
                gender,
                user_id,
                calories,
                typeDiet,
                date,
                weekOne,
                weekTwo,
                weekThree,
                weekFour
            } = request.all();

            if (jwt.$attributes.role_id === 1) {
                diet.disease = disease
                diet.weight = weight
                diet.size = size
                diet.age = age
                diet.allergy = allergy
                diet.imc = imc
                diet.stateWeight = stateWeight
                diet.gender = gender
                diet.calories = calories
                diet.typeDiet = typeDiet
                diet.user_id = user_id
                diet.date = JSON.stringify(date)
                diet.weekOne = JSON.stringify(weekOne)
                diet.weekTwo = JSON.stringify(weekTwo)
                diet.weekThree = JSON.stringify(weekThree)
                diet.weekFour = JSON.stringify(weekFour)

                await diet.save()
                const updateId = await User.findOrFail(user_id)
                updateId.diet_id = diet.id
                await updateId.save()
                return response.status(201).json({ success: true, result: diet, message: `Dieta creada correctamente`, code: 201 });

            }
            
        } catch (error) {
         console.log(error);   
        }
    }

    async update ({request, params, auth, response}){
        try {
            const diet = await Diet.findOrFail(params.id)
            const jwt = await auth.getUser();

            const {
                disease,
                weight,
                size,
                age,
                allergy,
                imc,
                stateWeight,
                gender,
                user_id,
                calories,
                typeDiet,
                date,
                weekOne,
                weekTwo,
                weekThree,
                weekFour
            } = request.all();

            if (jwt.$attributes.role_id === 1) {
                diet.disease = disease
                diet.weight = weight
                diet.size = size
                diet.age = age
                diet.allergy = allergy
                diet.imc = imc
                diet.stateWeight = stateWeight
                diet.gender = gender
                diet.calories = calories
                diet.typeDiet = typeDiet
                diet.user_id = user_id
                diet.date = JSON.stringify(date)
                diet.weekOne = JSON.stringify(weekOne)
                diet.weekTwo = JSON.stringify(weekTwo)
                diet.weekThree = JSON.stringify(weekThree)
                diet.weekFour = JSON.stringify(weekFour)
                await diet.save()
                return response.status(201).json({ success: true, result: diet, message: `Dieta creada correctamente`, code: 201 });

            }
        } catch (error) {
         console.log(error);   
        }
    }

    async delete ({ params, auth, response}){
        try {
            const jwt = await auth.getUser();
            if (jwt.$attributes.role_id === 1) {
                const diet = await Diet.findOrFail(params.id)
                await diet.delete();
                return response.status(200).json({ success: true, message: 'Dieta eliminada correctamente', code: 200 });
            } else {
                return response.status(401).json({ success: false, message: `No tienes los permisos para realizar esta accion`, code: 401 });
            }
        } catch (error) {
            console.log(error);
        }
    }

    async dietUserId({params, auth, response}){
        try {
            const jwt = await auth.getUser();
            const i = await Diet.findOrFail(params.id)

            let diet = []

            if (jwt.$attributes.role_id === 1) {
                const user = await i.hasUser().fetch();
                if (i) {
                    const data = i.$attributes;
                    diet.push({
                        "id": data?.id,
                        "user_id": data?.user_id,
                        "disease": data?.disease,
                        "weight": data?.weight,
                        "size": data?.size,
                        "age": data?.age,
                        "allergy": data?.allergy,
                        "imc": data?.imc,
                        "stateWeight":data?.stateWeight,
                        "gender":data?.gender,
                        "calories": data?.calories,
                        "typeDiet": data?.typeDiet,
                        "date": JSON.parse(data?.date),
                        "weekOne": JSON.parse(data?.weekOne),
                        "weekTwo": JSON.parse(data?.weekTwo),
                        "weekThree": JSON.parse(data?.weekThree) ,
                        "weekFour": JSON.parse(data?.weekFour),
                        user
                    })
                }
                return response.status(200).json({ success: true,diets:diet, message: `Dieta encontrada`, code: 200 });

            }else{
                return response.status(401).json({ success: false, message: `No tienes los permisos para realizar esta accion`, code: 401 });
             }
            
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = DietController
