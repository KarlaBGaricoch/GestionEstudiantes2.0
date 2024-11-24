const mongoose = require('mongoose');
const Student = require('../models/Student');
const { connect, closeDatabase, clearDatabase } = require('../test-setup');

beforeAll(async () => {
  await connect(); // Conectar a MongoDB en memoria
});

afterEach(async () => {
  await clearDatabase(); // Limpiar datos entre pruebas
});

afterAll(async () => {
  await closeDatabase(); // Cerrar la conexión después de las pruebas
}, 1000);

describe('Student Model Test Suite', () => {
  it('Debería crear un estudiante correctamente', async () => {
    const studentData = {
      name: 'Juan',
      lastname: 'Pérez',
      dni: '12345678',
      bornDate: new Date('2005-05-15'),
      email: 'juan.perez@gmail.com',
      parents: {
        parentName: 'Carlos Pérez',
        parentDni: '87654321',
      },
      subjects: [
        { subjectName: 'Matemáticas', score: 8 },
        { subjectName: 'Historia', score: 9 },
      ],
    };

    const student = new Student(studentData);
    const savedStudent = await student.save();

    expect(savedStudent._id).toBeDefined();
    expect(savedStudent.name).toBe(studentData.name);
    expect(savedStudent.subjects).toHaveLength(2);
  });

  it('Debería fallar al crear un estudiante con campos requeridos faltantes', async () => {
    const studentData = {
      lastname: 'Pérez', // Falta el campo 'name'
      dni: '12345678',
      bornDate: new Date('2005-05-15'),
      email: 'juan.perez@gmail.com',
      parents: {
        parentName: 'Carlos Pérez',
        parentDni: '87654321',
      },
    };

    try {
      const student = new Student(studentData);
      await student.save();
    } catch (error) {
      expect(error).toBeDefined();
      expect(error.errors.name).toBeDefined(); // Error por falta del campo 'name'
    }
  });
});
