import { css, Global } from "@emotion/react";

const nprogressStyle = css`
  #nprogress {
    --nprogress-color: #0bc5ea;
    --nprogress-color-dark: #9decf9;

    pointer-events: none;
  }

  #nprogress .bar {
    background: var(--nprogress-color);

    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;

    width: 100%;
    height: 2px;
  }

  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px var(--nprogress-color), 0 0 5px var(--nprogress-color);
    opacity: 1;

    -webkit-transform: rotate(3deg) translate(0px, -4px);
    -ms-transform: rotate(3deg) translate(0px, -4px);
    transform: rotate(3deg) translate(0px, -4px);
  }

  @media (prefers-color-scheme: dark) {
    #nprogress .bar {
      background: var(--nprogress-color-dark);
    }

    #nprogress .peg {
      box-shadow: 0 0 10px var(--nprogress-color-dark),
        0 0 5px var(--nprogress-color-dark);
    }
  }
`;

const NProgressGlobalStyles = () => <Global styles={nprogressStyle} />;

export default NProgressGlobalStyles;
