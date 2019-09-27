export const getComments = async function() {
  return await fetch("/api/comments").then(response => response.json());
};
export const getComment = async function(index) {
  return await fetch(`/api/comments/${index}`)
    .then(response => response.json())
    .catch(err => console.error(err));
};
export const deleteComment = async index => {
  return await fetch(`/api/comments/delete/${index}`)
    .then(response => response)
    .catch(err => console.error(err));
};
export const postComment = async (index, name, comment) => {
  let result = await getComment(index);
  if (result.length) await deleteComment(index);
  return await fetch("/api/comments", {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      index,
      name,
      comment
    })
  })
    .then(response => response)
    .catch(err => console.error(err));
};
