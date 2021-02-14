const { MongoClient, ObjectId } = require("mongodb")
const config = require("../config")

const mongoUri = config.mongoDB.uri

const client = new MongoClient(mongoUri)

class MongoLib {
    constructor(){
        this.client = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
        this.dbName = config.mongoDB.databaseName
    }
    connect(){
        if(!MongoLib.connection){
            MongoLib.connection =  new Promise((resolve, reject)=>{
                this.client.connect((err)=>{
                    if(err) return reject(err)
                    resolve(this.client.db(this.dbName))
                })
            })

        }
        return MongoLib.connection
    }

    createItems(collection, data){
        /* Necesitas la data en Array */
        return this.connect()
        .then(db => {
            return db.collection(collection).insertMany([...data])
        })          
    }

    getAll(collection, filter){
        /* El filtro sirve por ejemplo para filtar por ID por ejemplo*/
        /* {_id: "6029a51e2f8af907b095f7a0"} */
        return this.connect()
            .then(db => {
                let data = db.collection(collection).find(filter).toArray()
                return data
            })
            .then(data=>{
                console.log(data);
                return data
            })
    }

    updateOne(collection, data){
        /* Ejemplo de como actualizar in item */
        // instanceMongo.updateOne("users", {
            // id: "6029a51e2f8af907b095f7a0",
            // updatedData: {
                // number: 12345
            // }
        // })

        return this.connect()
            .then(db => {
                return db.collection(collection).updateOne(
                    {_id: ObjectId(data.id)},
                    {$set: data.updatedData}
                )
            })
    }

    deleteOne(collection, id){
        /* Solo necesitas el ID del item para eliminarlo */
        return this.connect()
            .then(db => {
                return db.collection(collection).deleteOne({_id: ObjectId(id)})
            })          
    }
}

let instanceMongo = new MongoLib()


module.exports = MongoLib;