export default (sequelize, DataType) => {
  const Student = sequelize.define(
    'students', {
    id: {
      type: DataType.STRING,
      primaryKey: true,
    },
    firstName: {
      type: DataType.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataType.STRING,
      allowNull: false,
    },
    email: {
      type: DataType.STRING,
      validate: {
        isEmail: true,
        msg: 'Invalid email'
      }
    },
    username: {
      type: DataType.STRING,
      validate: {
        isAlphanumeric: true,
      }
    },
    password: {
      type: DataType.STRING,
    },
    salt: {
      type: DataType.STRING,
    },
    createdAt: DataType.DATE,
    updatedAt:  DataType.DATE,
    deletedAt: DataType.DATE,
  });
  return Student;
};