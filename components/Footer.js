import Link from "next/link";

const Footer = () => (
  <div class="footer">
    <div class="star-project">
      <a class="github-button" href="https://github.com/vaheqelyan/next-auth/">
        Star
      </a>
    </div>
    <div class="follow-me">
      <a class="github-button" href="https://github.com/vaheqelyan">
        Follow @vaheqelyan
      </a>
    </div>
    <div class="download">
      <a class="github-button" href="https://github.com/vaheqelyan/next-auth/archive/master.zip">
        Download
      </a>
    </div>
    <div class="idea">
      <Link href="/hdiw">
        <a>How it works?</a>
      </Link>
    </div>

    <div class="view-on-github" onClick={() => window.open("https://github.com/vaheqelyan/next-auth")}>
      View on Github
      <span class="pt-icon-standard pt-icon-git-repo" />
    </div>
  </div>
);

export default Footer;
