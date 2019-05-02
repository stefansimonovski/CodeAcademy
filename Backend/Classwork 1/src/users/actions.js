import axios from 'axios';
import config from '../../config/urls.json';

const urlConfig = config[process.env.NODE_ENV || 'dev'];
const usersUrl = urlConfig.users;
console.log(usersUrl)

async function list (req, res, next){
  const getUsers = await axios.get(usersUrl);
  console.log(getUsers);
  const usersData = getUsers.data;
  res.status(200).send(usersData)
  await next;
}
const get = async (req, res, next) =>{
  const {id}: { id: string } = req.params;
  const getUsers = await axios.get(usersUrl);
  const userData = getUsers.data
  const getUsersByID = userData.data.filter((user) => {
    return user.id.toSting() === id;
  })

  res.status(200).send(getUsersByID)

  await next;
}

export default{
  list,
  get
}; 