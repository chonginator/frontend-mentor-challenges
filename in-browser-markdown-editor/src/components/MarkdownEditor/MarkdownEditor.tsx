"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import Split from "react-split";

import Button from "@/components/Button";
import { cn } from "@/utils";

import PreviewIcon from "@/components/icons/PreviewIcon";
import HidePreviewIcon from "@/components/icons/HidePreviewIcon";

function MarkdownEditor() {
  const [markdown, setMarkdown] = React.useState("");
  const [showMarkdown, setShowMarkdown] = React.useState(true);

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setMarkdown(event.target.value);
  }

  return (
    <div className="relative flex h-dvh">
      <Split
        gutterSize={10}
        minSize={200}
        className={cn(
          "flex w-full flex-row [&>.gutter]:order-2 [&>.gutter]:hidden [&>.gutter]:bg-gray-300 [&>.gutter]:hover:cursor-col-resize md:[&>.gutter]:block",
          {
            "md:[&>.gutter]:hidden": !showMarkdown,
          },
        )}
      >
        <div
          className={cn("order-1 flex h-full grow flex-col", {
            hidden: !showMarkdown,
          })}
        >
          <div className="sticky overflow-y-auto bg-gray-200 px-4 py-[14px] font-sans text-[14px] uppercase tracking-[2px] text-gray-500 dark:bg-gray-900 dark:text-gray-400">
            Markdown
          </div>
          <textarea
            className="w-full grow resize-none bg-gray-100 p-4 font-mono  text-sm/6 text-gray-700 focus:outline-none dark:bg-gray-1000 dark:text-gray-400"
            value={markdown}
            onChange={handleChange}
          />
        </div>

        <div
          className={cn("order-3 hidden grow flex-col md:flex", {
            flex: !showMarkdown,
          })}
        >
          <div className="sticky flex flex-row items-center justify-between bg-gray-200 px-4 py-[14px] font-sans text-[14px] uppercase tracking-[2px] text-gray-500 dark:bg-gray-900 dark:text-gray-400">
            Preview
          </div>
          <ReactMarkdown
            className="flex grow flex-col gap-5 overflow-auto bg-gray-100 p-6 dark:bg-gray-1000 dark:text-gray-400"
            components={{
              h1: ({ children, ...props }) => (
                <h1
                  className="font-serif text-[32px] font-bold text-gray-700 dark:text-gray-100"
                  {...props}
                >
                  {children}
                </h1>
              ),
              h2: ({ children, ...props }) => (
                <h2
                  className="font-serif text-[28px] font-light text-gray-700 dark:text-gray-100"
                  {...props}
                >
                  {children}
                </h2>
              ),
              h3: ({ children, ...props }) => (
                <h3
                  className="font-serif text-2xl font-bold text-gray-700 dark:text-gray-100"
                  {...props}
                >
                  {children}
                </h3>
              ),
              h4: ({ children, ...props }) => (
                <h4
                  className="font-serif text-xl font-bold text-gray-700 dark:text-gray-100"
                  {...props}
                >
                  {children}
                </h4>
              ),
              h5: ({ children, ...props }) => (
                <h5
                  className="font-serif text-sm font-bold text-gray-700 dark:text-gray-100"
                  {...props}
                >
                  {children}
                </h5>
              ),
              h6: ({ children, ...props }) => (
                <h6
                  className="font-serif text-sm font-bold text-orange-600"
                  {...props}
                >
                  {children}
                </h6>
              ),
              pre: ({ children, ...props }) => (
                <pre
                  className="shrink-0 overflow-auto rounded-[4px] bg-gray-200 p-6 font-mono text-sm/6 text-gray-700 dark:bg-gray-800 dark:text-gray-100"
                  {...props}
                >
                  {children}
                </pre>
              ),
              a: ({ children, ...props }) => (
                <a className="underline" {...props}>
                  {children}
                </a>
              ),
              p: ({ children, ...props }) => (
                <p
                  className="font-serif text-sm/6 font-normal text-gray-500 dark:text-gray-400"
                  {...props}
                >
                  {children}
                </p>
              ),
              blockquote: ({ children, ...props }) => (
                <blockquote
                  className="rounded-[4px] border-l-4 border-orange-600 bg-gray-200 p-6 font-serif text-sm font-bold text-gray-700 dark:bg-gray-800 dark:text-gray-100"
                  {...props}
                >
                  {children}
                </blockquote>
              ),
              ul: ({ children, ...props }) => (
                <ul
                  className="list-disc ps-[42px] font-serif text-sm/6 font-normal text-gray-500 marker:text-xs/6 marker:text-orange-600 dark:text-gray-400"
                  {...props}
                >
                  {children}
                </ul>
              ),
              ol: ({ children, ...props }) => (
                <ol
                  className="list-decimal ps-[42px] font-serif text-sm/6 text-gray-500 dark:text-gray-400"
                  {...props}
                >
                  {children}
                </ol>
              ),
              li: ({ children, ...props }) => (
                <li className="pl-2" {...props}>
                  {children}
                </li>
              ),
            }}
          >
            {markdown}
          </ReactMarkdown>
        </div>
      </Split>

      <Button
        className="absolute right-0 top-0 h-[49px] py-0"
        icon={showMarkdown ? PreviewIcon : HidePreviewIcon}
        onClick={() => setShowMarkdown(!showMarkdown)}
      />
    </div>
  );
}

export default MarkdownEditor;
