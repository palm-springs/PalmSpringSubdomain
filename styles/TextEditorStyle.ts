'use client';

import { styled } from 'styled-components';

export const TextEditorStyle = styled.div`
  .ProseMirror {
    margin: 4.8rem auto 0;
    width: 72rem;
    color: #333d4b;

    /* 기본 */
    * {
      word-wrap: break-word;
    }

    /* 문단 */
    p {
      ${({ theme }) => theme.fonts.Body1_Regular};
      /* margin: 2.4rem 0 0.8rem 0; */
      margin: 0 0 1.2rem 0;
      width: 100%;
    }

    /* 리스트 */
    ol,
    ul {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      margin: 0 0 1.2rem 0;
      padding: 0 1rem 0 3.2rem;
      width: 100%;
    }
    ul {
      list-style-type: disc;
    }
    ol {
      list-style-type: decimal;
    }

    /* 코드 */
    code {
      border: 1px solid ${({ theme }) => theme.colors.grey_400};
      border-radius: 0.25em;
      background-color: ${({ theme }) => theme.colors.grey_200};
      padding: 0.3rem 0.6rem;
      width: 100%;
      line-height: 2.601rem;
      letter-spacing: -0.0072rem;
      font-family: 'Fira Mono' !important;
      font-size: 1.53rem;
      font-weight: 400;
      font-style: normal;
      box-decoration-break: clone;
    }

    pre {
      margin: 1.2rem 0 2rem 0;
      border-radius: 0.5rem;
      background: ${({ theme }) => theme.colors.grey_100};
      padding: 1.6rem 2rem;
      width: 100%;
      line-height: 2.601rem;
      letter-spacing: -0.0072rem;
      white-space: pre-wrap;
      word-break: break-all;
      color: #383a41;
      font-family: 'Fira Mono' !important;
      font-size: 1.4rem;
      font-weight: 400;

      code {
        border: 0;
        background: none;
        padding: 0;
        line-height: 2.601rem;
        letter-spacing: -0.0072rem;
        color: inherit;
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

    /* 인용 */
    blockquote {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      margin: 1.2rem 0 2rem 0;
      border-left: 3px solid ${({ theme }) => theme.colors.grey_900};
      background: ${({ theme }) => theme.colors.grey_100};
      padding: 1.2rem 1.2rem 1.2rem 2rem;
      width: 100%;

      & > * {
        margin: 0;
      }
    }

    /* 언더라인 */
    u {
      width: 100%;
      text-decoration: underline;
    }

    /* 구분선 */
    hr {
      margin: 1.2rem 0;
      border: 1px solid ${({ theme }) => theme.colors.grey_300};
      width: 100%;
    }

    /* 볼드 */
    strong {
      ${({ theme }) => theme.fonts.Body1_Semibold};
    }

    /* 취소선 */
    s {
      text-decoration: line-through;
    }

    /* 이탤릭 */
    em {
      font-style: italic;
    }

    /* 이미지 */
    img {
      margin: 2rem 0;
      border-radius: 16px;
      width: 100%;
      height: auto;
    }

    /* 링크 */
    a {
      border-bottom: 0.8px solid ${({ theme }) => theme.colors.grey_700};
      text-decoration: none;
      color: ${({ theme }) => theme.colors.grey_700};
      &:hover {
        border-color: #0056b3;
        color: #0056b3;
      }
    }

    /* 헤딩 */
    h1 {
      ${({ theme }) => theme.editor.Edit_h1};
      margin: 5.6rem 0 1.2rem 0;
      width: 100%;
      color: ${({ theme }) => theme.colors.grey_950};
      * {
        ${({ theme }) => theme.editor.Edit_h1};
        color: ${({ theme }) => theme.colors.grey_950};
      }
    }

    h2 {
      ${({ theme }) => theme.editor.Edit_h2};
      margin: 4rem 0 1.2rem 0;
      width: 100%;
      color: ${({ theme }) => theme.colors.grey_950};
      * {
        ${({ theme }) => theme.editor.Edit_h2};
        color: ${({ theme }) => theme.colors.grey_950};
      }
    }

    h3 {
      ${({ theme }) => theme.editor.Edit_h3};
      margin: 2.4rem 0 1.2rem;
      width: 100%;
      color: ${({ theme }) => theme.colors.grey_950};
      * {
        ${({ theme }) => theme.editor.Edit_h3};
        color: ${({ theme }) => theme.colors.grey_950};
      }
    }

    /* 리스트 아이템 */
    li {
      width: 100%;
      & > p:nth-of-type(1) {
        margin: 0;
      }
      & > * {
        margin: 0.8rem 0 0 0;
      }
      & > *:not(:first-child):last-child {
        margin-bottom: 0.4rem;
      }
    }

    .ProseMirror-separator {
      display: none;
    }
  }
`;
