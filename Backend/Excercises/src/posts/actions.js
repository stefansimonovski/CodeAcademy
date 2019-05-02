import hat from 'hat';
import models from '../models/index';

const Posts = models.Posts;

const getModels = async (req, res, next) => {
  const results: Array = await Posts.findAll({
    include: [
      models.Comments
    ]
  });

  res.status(200).send(results);

  await next;
};

const addPost = async (req, res, next) => {
  // const { userId }: { userId: string} = req.parmas;
  const {
    userId,
    content
  }: {
    userId: string,
    content: string
  } = req.body;

  const postId = hat();

  await Posts.create({
    id: postId,
    userId,
    content
  });

  res.status(201).send({ info: `User ${userId} added post` });
  await next;
}

export default {
  addPost,
  getModels
};
