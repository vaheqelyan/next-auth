export function setSession(session) {
	window.session = session;
}

export function refreshSession(session) {
	if ("session" in window === false) {
		Object.defineProperty(window, "session", {
			get(name) {
				return window._user;
			},
			set(value) {
				window._user = value;
			}
		});
	}
	if (window.session === undefined && typeof session === "object") {
		window.session = session;
	}
}
export function destroySession(session) {
	window.session = undefined;
}
