module.exports = {
    nome_cliente: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    peso_em_kg: {
        type: String,
        required: true
    },
    endereco: {
        logradouro: {
            type: String,
            required: true
        },
        numero: {
            type: String,
            required: true
        },
        bairro: {
            type: String,
            required: true
        },
        complemento: {
            type: String,
            required: true
        },
        cidade: {
            type: String,
            required: true
        },
        estado: {
            type: String,
            required: true
        },
        pais: {
            type: String,
            required: true
        },
        geolocalizacao: {
            lng: {
                type: Number
            },
            lat: {
                type: Number
            }
        }
    }
};