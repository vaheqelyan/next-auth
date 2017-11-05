import { inject, observer } from "mobx-react";
import Link from "next/link";

const Nav = inject(({ store }) => {
  if (store.session) {
    return {
      fullname: store.fullname,
      email: store.session.email
    };
  }
})(
  observer(({ fullname, email }) => (
    <div class="nav">
      <Link href="/">
        <a>
          {!fullname && !email ? (
            "Login"
          ) : (
            <p>
              <b>{fullname}</b> {email}
            </p>
          )}
        </a>
      </Link>
      <Link href="/page1">
        <a class="try-link">page-1</a>
      </Link>
      <Link href="/page2">
        <a class="try-link">page-2</a>
      </Link>
    </div>
  ))
);

export default Nav;
