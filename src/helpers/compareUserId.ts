const compareUserId = <T, Y>(id1: T, id2: Y) => {
  return Number(id1) === Number(id2);
};

export default compareUserId;
