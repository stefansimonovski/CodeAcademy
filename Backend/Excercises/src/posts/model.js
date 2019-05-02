export default (sequelize, DataType) => {
  const Post = sequelize.define('posts', {
    id: {
      type: DataType.STRING,
      primaryKey: true,
    },
    userId: {
      type: DataType.STRING,
      allowNull: false,
      required: true
    },
    content: {
      type: DataType.TEXT,
      allowNull: false,
      required: true,
    },
    createdAt: DataType.DATE,
    updatedAt: DataType.DATE,
    deletedAt: DataType.DATE
  });
  return Post;
}