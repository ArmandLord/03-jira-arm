import mongoose from "mongoose";

const mongoConection = {
    isConnected: 0,
}

export const connectDB = async () => {

    if (mongoConection.isConnected) {
        console.log('ya esta conectado');
        return;
    }


    if (mongoose.connections.length > 0) {
        mongoConection.isConnected = mongoose.connections[0].readyState;
        if (mongoConection.isConnected === 1) {
            console.log('usando conexion anterior');
            return;
        }
    }

    await mongoose.connect(process.env.MONGO_URL || '', )
    mongoConection.isConnected = 1;
    console.log('conectado a MongoDB:', process.env.MONGO_URL);
};


export const disconnectDB = async () => {
    if(mongoConection.isConnected === 0) return;

    await mongoose.disconnect();
    console.log('Desconectado de MongoDB');
}