export default (sequelize, DataType) => {
  const Comments = sequelize.define('comments', {
    id: {
      type: DataType.STRING,
      primaryKey: true,
    },
    postId: {
      type: DataType.STRING,
      allowNull: false
    },
    nameCommenter: DataType.STRING,
    usernameCommenter: DataType.STRING,
    emailCommenter: DataType.STRING,
    content: {
      required: true,
      type: DataType.STRING
    },
    createdAt: DataType.DATE,
    updatedAt: DataType.DATE,
    deletedAt: DataType.DATE
  });
  return Comments;
}

// fiendsIds: ['123', 'q2eq', 'qweq', 'qweqw', '2e12ea']
// timeToExpireFriendRequest: '123154654'
// following: [],
// followers: [],
// user: {
//   id: '123',
//   name: 'askdjals',
//   email: 'askdjas',
//   friendship: '2019-03-18',
//   yf: '1y 1m 2d'
// }

// isFriend: true,
// fiends: [
//   {
//     id: '123',
//     name: 'askdjals',
//     email: 'askdjas',
//     friendship: '2019-03-18',
//     yf: '1y 1m 2d'
//   },
//   {
//     id: '123',
//     name: 'askdjals',
//     email: 'askdjas',
//     friendship: '2019-03-18',
//     yf: '1y 1m 2d'
//   },
//   {
//     id: '123',
//     name: 'askdjals',
//     email: 'askdjas',
//     friendship: '2019-03-18',
//     yf: '1y 1m 2d'
//   },
//   {
//     id: '123',
//     name: 'askdjals',
//     email: 'askdjas',
//     friendship: '2019-03-18',
//     yf: '1y 1m 2d'
//   }
// ]