import React from "react";
import ReactMarkdown from "react-markdown";

import PaneHeader from "./PaneHeader";

import { cn } from "@/utils";

type PreviewPaneProps = { className?: string; markdown: string };

function PreviewPane({ className = "", markdown }: PreviewPaneProps) {
  return (
    <div className={cn("hidden grow flex-col md:flex", className)}>
      <PaneHeader>Preview</PaneHeader>
      <ReactMarkdown
        className="flex grow flex-col gap-5 overflow-auto bg-gray-100 p-6 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300 dark:bg-gray-1000 dark:text-gray-400 dark:scrollbar-track-gray-1000 dark:scrollbar-thumb-gray-600"
        components={{
          h1: ({ children, ...delegated }) => (
            <h1
              className="font-serif text-[32px] font-bold text-gray-700 dark:text-gray-100"
              {...delegated}
            >
              {children}
            </h1>
          ),
          h2: ({ children, ...delegated }) => (
            <h2
              className="font-serif text-[28px] font-light text-gray-700 dark:text-gray-100"
              {...delegated}
            >
              {children}
            </h2>
          ),
          h3: ({ children, ...delegated }) => (
            <h3
              className="font-serif text-2xl font-bold text-gray-700 dark:text-gray-100"
              {...delegated}
            >
              {children}
            </h3>
          ),
          h4: ({ children, ...delegated }) => (
            <h4
              className="font-serif text-xl font-bold text-gray-700 dark:text-gray-100"
              {...delegated}
            >
              {children}
            </h4>
          ),
          h5: ({ children, ...delegated }) => (
            <h5
              className="font-serif text-sm font-bold text-gray-700 dark:text-gray-100"
              {...delegated}
            >
              {children}
            </h5>
          ),
          h6: ({ children, ...delegated }) => (
            <h6
              className="font-serif text-sm font-bold text-orange-600"
              {...delegated}
            >
              {children}
            </h6>
          ),
          pre: ({ children, ...delegated }) => (
            <pre
              className="shrink-0 overflow-auto rounded-[4px] bg-gray-200 p-6 font-mono text-sm/6 text-gray-700 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:scrollbar-track-gray-1000 dark:scrollbar-thumb-gray-600"
              {...delegated}
            >
              {children}
            </pre>
          ),
          a: ({ children, ...delegated }) => (
            <a className="underline" {...delegated}>
              {children}
            </a>
          ),
          p: ({ children, ...delegated }) => (
            <p
              className="font-serif text-sm/6 font-normal text-gray-500 dark:text-gray-400"
              {...delegated}
            >
              {children}
            </p>
          ),
          blockquote: ({ children, ...delegated }) => (
            <blockquote
              className="rounded-[4px] border-l-4 border-orange-600 bg-gray-200 p-6 font-serif text-sm font-bold text-gray-700 dark:bg-gray-800 dark:text-gray-100"
              {...delegated}
            >
              {children}
            </blockquote>
          ),
          ul: ({ children, ...delegated }) => (
            <ul
              className="list-disc ps-[42px] font-serif text-sm/6 font-normal text-gray-500 marker:text-xs/6 marker:text-orange-600 dark:text-gray-400"
              {...delegated}
            >
              {children}
            </ul>
          ),
          ol: ({ children, ...delegated }) => (
            <ol
              className="list-decimal ps-[42px] font-serif text-sm/6 text-gray-500 dark:text-gray-400"
              {...delegated}
            >
              {children}
            </ol>
          ),
          li: ({ children, ...delegated }) => (
            <li className="pl-2" {...delegated}>
              {children}
            </li>
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}

export default PreviewPane;
