db.createCollection("oldbooks",{
    validator : {
        $jsonSchema : {
            required : ["name", "price"],
            properties : {
                name : {
                    bsonType : "string",
                    description : "must be a string or something is required"
                },
                price : {
                    bsonType : "number",
                    description : "must be a number or something is required"
                }
            }
        }
    },
    validationAction : "error" // or warn 
})

db.runCommand({
    collMod : "oldbooks",
    validator : {
        $jsonSchema : {
            required : ["name", "price", "authors"],
            properties : {
                name : {
                    bsonType : "string",
                    description : "Must be a string or required"
                },
                price : {
                    bsonType : "number",
                    description : "must be a number or something is required"
                },
                authors : {
                    bsonType : "array",
                    description : "must be any array or required",
                    items : {
                        bsonType : "object",
                        required : ["name", "isPopular"],
                        properties : {
                            name : {
                                bsonType : "string"
                            },
                            isPopular : {
                                bsonType : "bool"
                            }
                        }
                    }
                }
            }
        }
    },
    validationAction : "error"
})