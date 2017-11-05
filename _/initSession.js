function initSession(req) {
  const isServer = !!req;
  let session;
  if (isServer) {
    console.log(req.session);
    session = req.session.user;
  } else {
    if ("session" in window && typeof window.session == "object") {
      session = window.session;
    } else {
      session = null;
    }
  }

  return { isServer, session };
}

export default initSession;
