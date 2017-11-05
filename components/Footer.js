import Link from "next/link";

const Footer = () => (
  <div class="footer">
    <div class="star-project">
      <a
        class="github-button"
        href="https://github.com/vaheqelyan/rinterest"
        data-icon="octicon-star"
        data-show-count="true"
        aria-label="Star vaheqelyan/rinterest on GitHub"
      >
        Star
      </a>
    </div>
    <div class="follow-me">
      <a
        class="github-button"
        href="https://github.com/vaheqelyan"
        aria-label="Follow @vaheqelyan on GitHub"
      >
        Follow @vaheqelyan
      </a>
    </div>
    <div class="download">
      <a
        class="github-button"
        href="https://github.com/vaheqelyan/rinterest/archive/master.zip"
        data-icon="octicon-cloud-download"
        aria-label="Download vaheqelyan/rinterest on GitHub"
      >
        Download
      </a>
    </div>
    <div class="idea">
      <Link href="/hdiw">
        <a>How it works?</a>
      </Link>
    </div>

    <div class="view-on-github">
      View on Github
      <span class="pt-icon-standard pt-icon-git-repo" />
    </div>
  </div>
);

export default Footer;
