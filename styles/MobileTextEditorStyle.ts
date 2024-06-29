'use client';

import { styled } from 'styled-components';

export const MobileTextEditorStyle = styled.div`
  .ProseMirror {
    color: #333d4b;
    * {
      word-wrap: break-word;
    }

    p {
      ${({ theme }) => theme.mobileFonts.Body1_Regular};
      margin: 2.4rem 0 0.8rem 0;
      width: calc(100vw - 4rem);
    }

    h1 {
      ${({ theme }) => theme.mobileFonts.Markdown_H1};
      margin: 4rem 0 0.4rem;
      width: calc(100vw - 4rem);
      color: ${({ theme }) => theme.colors.grey_950};
    }

    h2 {
      ${({ theme }) => theme.mobileFonts.Markdown_H2};
      margin: 3.2 0 0.4rem;
      width: calc(100vw - 4rem);
      color: ${({ theme }) => theme.colors.grey_950};
    }

    h3 {
      ${({ theme }) => theme.mobileFonts.Markdown_H3};
      margin: 2.4rem 0 0.4rem;
      width: calc(100vw - 4rem);
      color: ${({ theme }) => theme.colors.grey_950};
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      margin: 2.4rem 0 0.4rem 4rem;
      width: calc(100vw - 4rem);
      list-style-type: disc;
    }

    ol {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      margin: 2.4rem 0 0.4rem 4rem;
      width: calc(100vw - 8rem);
      list-style-type: decimal;
    }

    code {
      border-radius: 0.25em;
      background-color: ${({ theme }) => theme.colors.grey_200};
      padding: 0.3rem 0.6rem;
      box-decoration-break: clone;
      overflow-x: scroll;
    }

    pre {
      margin: 2.4rem 0 0.4rem;
      border-radius: 0.5rem;
      background: ${({ theme }) => theme.colors.grey_100};
      padding: 1.6rem 2rem;
      width: 100%;
      /* width: calc(100vw - 4rem); */
      max-width: calc(100vw - 4rem);
      /* 이거 코드블럭만 피라모노! */
      /* white-space: pre-wrap; */
      overflow-x: scroll;
      word-break: break-all;
      color: #383a41;
      font-family: 'Fira Mono', monospace;

      code {
        background: none;
        padding: 0;
        width: calc(100vw - 4rem);
        overflow-x: scroll;
        color: inherit;
        font-size: 1.4rem;
      }

      .hljs-quote,
      .hljs-variable {
        color: #383a41;
      }

      .hljs-comment {
        color: #a0a1a7;
      }

      .hljs-attribute,
      .hljs-template-variable,
      .hljs-name,
      .hljs-number,
      .hljs-selector-class {
        color: #986801;
      }

      .hljs-regexp,
      .hljs-selector-id,
      .hljs-link,
      .hljs-meta {
        text-decoration: underline;
        color: #4078f2;
      }

      .hljs-literal {
        color: #0184bb;
      }

      .hljs-built_in,
      .hljs-builtin-name {
        color: #c18401;
      }

      .hljs-string {
        color: #50a14f;
      }

      .hljs-title,
      .hljs-symbol,
      .hljs-bullet {
        color: #4078f2;
      }

      .hljs-section {
        color: #e45649;
      }

      .hljs-selector-tag,
      .hljs-type,
      .hljs-params,
      .hljs-keyword,
      .hljs-tag {
        color: #a626a4;
      }

      .hljs-emphasis {
        font-style: italic;
      }

      .hljs-strong {
        font-weight: 700;
      }
    }

    blockquote {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      margin: 2.4rem 0 0.8rem 0;
      border-left: 2px solid ${({ theme }) => theme.colors.grey_900};
      padding-left: 1.8rem;
      width: calc(100vw - 4rem);
      height: 100%;

      p {
        margin: 0;
        width: calc(100vw - 6rem);
      }

      pre {
        width: calc(100vw - 6rem);
      }

      /* ul > li > p {
        width: calc(100vw - 10rem);
      } */
    }

    li {
      width: calc(100vw - 10rem);

      & > p {
        margin: 0;
        width: 100%;
      }

      & > blockquote {
        width: 100%;
      }

      & > blockquote > p {
        width: 100%;
      }

      & > ul > li {
        width: calc(100vw - 14rem);
      }

      & > ul > li > ul > li {
        width: calc(100vw - 16rem);
      }
    }

    u {
      text-decoration: underline;
    }

    hr {
      border: 1px solid ${({ theme }) => theme.colors.grey_300};
      width: calc(100vw - 4rem);
    }

    strong {
      ${({ theme }) => theme.mobileFonts.Body1_Semibold};
      width: calc(100vw - 4rem);
    }

    s {
      width: calc(100vw - 4rem);
      text-decoration: line-through;
    }

    em {
      width: calc(100vw - 4rem);
      font-style: italic;
    }

    img {
      margin-top: 2.4rem 0 0.8rem 0;
      width: calc(100vw - 4rem);
      height: auto;

      &.ProseMirror-selectednode {
        outline: 3px solid #68cef8;
      }
    }

    a {
      border-bottom: 0.8px solid ${({ theme }) => theme.colors.grey_700};
      width: calc(100vw - 4rem);
      text-decoration: none;
      color: ${({ theme }) => theme.colors.grey_700};
      &:hover {
        border-color: #0056b3;
        color: #0056b3;
      }
    }
  }
`;
