function initSession(req) {
  const isServer = !!req;
  let session;
  if (isServer) {
    console.log(req.session);
    session = req.session.user;
  } else {
    session = window.session;
  }

  return { isServer, session };
}

export default initSession;
