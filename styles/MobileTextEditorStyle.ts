'use client';

import { styled } from 'styled-components';

export const MobileTextEditorStyle = styled.div`
  .ProseMirror {
    width: 100vw;
    color: #333d4b;

    /* 기본 */
    * {
      word-wrap: break-word;
    }

    /* 문단 */
    p {
      ${({ theme }) => theme.mobileFonts.Body1_Regular};
      margin: 0 0 1.2rem 0;
      width: 100%;
    }

    /* 리스트 */
    ul,
    ol {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      margin: 0 0 1.2rem 0;
      padding: 0 1rem 0 2.4rem;
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
      overflow-x: scroll;
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
      max-width: calc(100vw - 4rem);
      /* 이거 코드블럭만 피라모노! */
      /* white-space: pre-wrap; */
      overflow-x: scroll;
      word-break: break-all;
      color: #383a41;
      font-family: 'Fira Mono', monospace !important;

      code {
        border: 0;
        background: none;
        padding: 0;
        /* width: calc(100vw - 4rem); 모바일 pre 태그 안에서는 어차피 좌우스크롤이기 때문에 width가 의미가 없음 */
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
      /* ul > li > p {
        width: calc(100vw - 10rem);
      } */
    }

    /* 언더라인 */
    u {
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
      ${({ theme }) => theme.mobileFonts.Body1_Semibold};
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
      border-radius: 12px;
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
      ${({ theme }) => theme.mobileFonts.Markdown_H1};
      margin: 4rem 0 0.8rem;
      width: 100%;
      color: ${({ theme }) => theme.colors.grey_950};
      * {
        ${({ theme }) => theme.mobileFonts.Markdown_H1};
        color: ${({ theme }) => theme.colors.grey_950};
      }
    }

    h2 {
      ${({ theme }) => theme.mobileFonts.Markdown_H1};
      margin: 4rem 0 0.8rem;
      width: 100%;
      color: ${({ theme }) => theme.colors.grey_950};
      * {
        ${({ theme }) => theme.mobileFonts.Markdown_H1};
        color: ${({ theme }) => theme.colors.grey_950};
      }
    }

    h3 {
      ${({ theme }) => theme.mobileFonts.Markdown_H2};
      margin: 3.2rem 0 0.8rem;
      width: 100%;
      color: ${({ theme }) => theme.colors.grey_950};
      * {
        ${({ theme }) => theme.mobileFonts.Markdown_H2};
        color: ${({ theme }) => theme.colors.grey_950};
      }
    }

    h4 {
      ${({ theme }) => theme.mobileFonts.Markdown_H3};
      margin: 2.4rem 0 0.8rem;
      width: 100%;
      color: ${({ theme }) => theme.colors.grey_950};
      * {
        ${({ theme }) => theme.mobileFonts.Markdown_H3};
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
