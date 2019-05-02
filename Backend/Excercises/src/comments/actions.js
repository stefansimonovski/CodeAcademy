import hat from 'hat';
import models from '../models/index';

const Comments = models.Comments;

const postComment = async (req, res, next) => {
  const {
    postId,
    nameCommenter,
    usernameCommenter,
    emailCommenter,
    content
  }: {
    postId: string,
    nameCommenter: ?string,
    usernameCommenter: ?string,
    emailCommenter: ?string,
    content: string,
  } = req.body;

  const commentId = hat();

  await Comments.create({
    id: commentId,
    postId,
    nameCommenter,
    usernameCommenter,
    emailCommenter,
    content
  });

  res.status(201).send({ info: `Comment added on ${postId}` });

  await next;
};

export default {
  postComment
};