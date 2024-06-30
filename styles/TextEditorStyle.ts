'use client';

import { styled } from 'styled-components';

export const TextEditorStyle = styled.div`
  .ProseMirror {
    margin: 4rem auto 0;
    width: 72.2rem;
    color: #333d4b;
    * {
      word-wrap: break-word;
    }

    p {
      ${({ theme }) => theme.fonts.Body1_Regular};
      margin: 2.4rem 0 0.8rem 0;
      width: 72rem;
    }

    h1 {
      ${({ theme }) => theme.editor.Edit_h1};
      margin: 5.6rem 0 0.4rem 0;
      width: 72rem;
      color: ${({ theme }) => theme.colors.grey_950};
    }

    h2 {
      ${({ theme }) => theme.editor.Edit_h2};
      margin: 4rem 0 0.4rem 0;
      width: 72rem;
      color: ${({ theme }) => theme.colors.grey_950};
    }

    h3 {
      ${({ theme }) => theme.editor.Edit_h3};
      margin: 2.4rem 0 0.4rem;
      width: 72rem;
      color: ${({ theme }) => theme.colors.grey_950};
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      margin: 2.4rem 0 0.4rem 4rem;
      width: 72rem;
      list-style-type: disc;
    }

    ol {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      margin: 2.4rem 0 0.4rem 4rem;
      width: 72rem;
      list-style-type: decimal;
    }

    li {
      & > p {
        margin: 0;
      }
    }

    u {
      width: 72rem;
      text-decoration: underline;
    }

    hr {
      border: 1px solid ${({ theme }) => theme.colors.grey_300};
      width: 100%;
    }
    strong {
      ${({ theme }) => theme.fonts.Body1_Semibold};
    }

    s {
      text-decoration: line-through;
    }

    em {
      font-style: italic;
    }

    code {
      border-radius: 0.25em;
      background-color: ${({ theme }) => theme.colors.grey_200};
      padding: 0.3rem 0.6rem;
      width: 72rem;
      line-height: 2.601rem;
      letter-spacing: -0.0072rem;
      font-family: 'Fira Mono' !important;
      font-size: 1.53rem;
      font-weight: 400;
      font-style: normal;
      box-decoration-break: clone;
    }

    pre {
      margin: 2.016rem 0 0.8rem;
      border-radius: 0.5rem;
      background: ${({ theme }) => theme.colors.grey_100};
      padding: 1.6rem 2rem;
      width: 72rem;
      line-height: 2.601rem;
      letter-spacing: -0.0072rem;
      white-space: pre-wrap;
      word-break: break-all;
      color: #383a41;
      font-family: 'Fira Mono' !important;
      font-size: 1.4rem;
      font-weight: 400;
      code {
        background: none;
        padding: 0;
        line-height: 2.601rem;
        letter-spacing: -0.0072rem;
        color: inherit;
        font-family: 'Fira Mono' !important;
        font-size: 1.4rem;
        font-weight: 400;
      }

      .hljs-quote,
      .hljs-variable {
        line-height: 2.601rem;
        letter-spacing: -0.0072rem;
        color: #383a41;
        font-family: 'Fira Mono' !important;
        font-size: 1.4rem;
        font-weight: 400;
      }

      .hljs-comment {
        line-height: 2.601rem;
        letter-spacing: -0.0072rem;
        color: #a0a1a7;
        font-family: 'Fira Mono' !important;
        font-size: 1.4rem;
        font-weight: 400;
      }

      .hljs-attribute,
      .hljs-template-variable,
      .hljs-name,
      .hljs-number,
      .hljs-selector-class {
        line-height: 2.601rem;
        letter-spacing: -0.0072rem;
        color: #986801;
        font-family: 'Fira Mono' !important;
        font-size: 1.4rem;
        font-weight: 400;
      }

      .hljs-regexp,
      .hljs-selector-id,
      .hljs-link,
      .hljs-meta {
        text-decoration: underline;
        line-height: 2.601rem;
        letter-spacing: -0.0072rem;
        color: #4078f2;
        font-family: 'Fira Mono' !important;
        font-size: 1.4rem;
        font-weight: 400;
      }

      .hljs-literal {
        line-height: 2.601rem;
        letter-spacing: -0.0072rem;
        color: #0184bb;
        font-family: 'Fira Mono' !important;
        font-size: 1.4rem;
        font-weight: 400;
      }

      .hljs-built_in,
      .hljs-builtin-name {
        line-height: 2.601rem;
        letter-spacing: -0.0072rem;
        color: #c18401;
        font-family: 'Fira Mono' !important;
        font-size: 1.4rem;
        font-weight: 400;
      }

      .hljs-string {
        line-height: 2.601rem;
        letter-spacing: -0.0072rem;
        color: #50a14f;
        font-family: 'Fira Mono' !important;
        font-size: 1.4rem;
        font-weight: 400;
      }

      .hljs-title,
      .hljs-symbol,
      .hljs-bullet {
        line-height: 2.601rem;
        letter-spacing: -0.0072rem;
        color: #4078f2;
        font-family: 'Fira Mono' !important;
        font-size: 1.4rem;
        font-weight: 400;
      }

      .hljs-section {
        line-height: 2.601rem;
        letter-spacing: -0.0072rem;
        color: #e45649;
        font-family: 'Fira Mono' !important;
        font-size: 1.4rem;
        font-weight: 400;
      }

      .hljs-selector-tag,
      .hljs-type,
      .hljs-params,
      .hljs-keyword,
      .hljs-tag {
        line-height: 2.601rem;
        letter-spacing: -0.0072rem;
        color: #a626a4;
        font-family: 'Fira Mono' !important;
        font-size: 1.4rem;
        font-weight: 400;
      }

      .hljs-emphasis {
        line-height: 2.601rem;
        letter-spacing: -0.0072rem;
        font-family: 'Fira Mono' !important;
        font-size: 1.4rem;
        font-weight: 400;
        font-style: italic;
      }

      .hljs-strong {
        line-height: 2.601rem;
        letter-spacing: -0.0072rem;
        font-family: 'Fira Mono' !important;
        font-size: 1.4rem;
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

      p {
        margin: 0;
      }
    }

    img {
      margin-top: 2.4rem 0 0.8rem 0;
      border-radius: 16px;
      width: 100%;
      height: auto;

      &.ProseMirror-selectednode {
        border: 2px solid ${({ theme }) => theme.colors.green};
        border-radius: 16px;
      }
    }

    a {
      border-bottom: 0.8px solid ${({ theme }) => theme.colors.grey_700};
      text-decoration: none;
      color: ${({ theme }) => theme.colors.grey_700};
      &:hover {
        border-color: #0056b3;
        color: #0056b3;
      }
    }
  }

  &.editor > .ProseMirror {
    * {
      font-family: sans-serif;
    }
  }
`;
