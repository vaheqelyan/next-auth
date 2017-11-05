import Link from "next/link";
import GoogleLogin from "react-google-login";
import { inject, observer } from "mobx-react";

const LoginRenderer = inject(({ store }) => ({
  onSuccess: store.onSuccess,
  onFailure: store.onFailure
}))(
  observer(({ onSuccess, onFailure }) => (
    <div>
      <GoogleLogin class="pt-button pt-fill" clientId={`${process.env.GOOGLE_CLIENT_ID}`} buttonText="Login" onSuccess={onSuccess} onFailure={onFailure} isSignedIn={false} />
    </div>
  ))
);
export default LoginRenderer;
