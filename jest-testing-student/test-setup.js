const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true)

let mongoServer;

module.exports.connect = async () => {
    mongoServer = await MongoMemoryServer.create(); // Crear la instancia del servidor
    const uri = mongoServer.getUri(); // Generar URI
    if (typeof uri !== 'string') {
        throw new Error('URI generado no es válido.');
    }
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports.closeDatabase = async () => {
  if (mongoServer) {
      try {
          await mongoose.connection.dropDatabase();
          await mongoose.connection.close();
          await mongoServer.stop(); // Asegura que se detenga el servidor
      } catch (error) {
          console.error("Error al cerrar MongoDB Memory Server:", error);
      }
  }
};

module.exports.clearDatabase = async () => {
    const collections = mongoose.connection.collections;
    for (const key in collections) {
        const collection = collections[key];
        await collection.deleteMany({});
    }
};
