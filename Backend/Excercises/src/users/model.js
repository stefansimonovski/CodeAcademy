export default (sequelize, DataType) => {
  const User = sequelize.define('users', {
    id: {
      type: DataType.STRING,
      primaryKey: true,
    },
    name: {
      type: DataType.STRING,
      allowNull: false,
      required: true
    },
    email: {
      type: DataType.STRING,
      validate: {
        isEmail: true,
        // msg: 'Invalid email'
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
      validate: {
        len: {
          args: [5, 100],
          msg: 'The password needs to be between 5 and 100 characters long',
        },
      },
    },
    salt: {
      type: DataType.STRING,
    },
    // role: {
    //   type: DataType.ENUM,
    //   values: ['admin', 'user']
    // },
    // status: {
    //   type: DataType.ENUM,
    //   values: ['active', 'disabled'],
    //   defaultValue: 'active'
    // }
    resetPasswordToken: DataType.STRING,
    resetPasswordExpires: DataType.DATE,
    createdAt: DataType.DATE,
    updatedAt: DataType.DATE,
    deletedAt: DataType.DATE,
    lastSignIn: DataType.DATE
  });
  return User;
}