import { ActionPanel, Action, Icon, List, useNavigation } from "@raycast/api";
import { useExec } from "@raycast/utils";

const LANGUAGES = [
  {
    title: "Python",
    iconUrl: "https://replit.com/public/images/languages/python.svg",
    slug: "python3",
    id: "python3",
    language: "Python"
  },
  {
    title: "Node.js",
    iconUrl: "https://replit.com/public/images/languages/nodejs.svg",
    slug: "nodejs",
    id: "nodejs",
    language: "Node.js"
  },
  {
    title: "C",
    iconUrl: "https://replit.com/public/images/languages/c.svg",
    slug: "c",
    id: "c",
    language: "C"
  },
  {
    title: "Java",
    iconUrl: "https://replit.com/public/images/languages/java.svg",
    slug: "java10",
    id: "java10",
    language: "Java"
  },
  {
    title: "C++",
    iconUrl: "https://replit.com/public/images/languages/cpp.svg",
    slug: "cpp",
    id: "cpp",
    language: "C++"
  },
  {
    title: "Ruby",
    iconUrl: "https://replit.com/public/images/languages/ruby.svg",
    slug: "ruby",
    id: "ruby",
    language: "Ruby"
  },
  {
    title: "HTML, CSS, JS",
    iconUrl: "/public/images/languages/web_project.svg",
    slug: "html",
    id: "html",
    language: "HTML, CSS, JS"
  },
  {
    title: "Scheme",
    iconUrl: "/public/images/languages/scheme.svg",
    slug: "scheme",
    id: "scheme",
    language: "Scheme"
  },
  {
    title: "Go",
    iconUrl: "https://replit.com/public/images/languages/go.svg",
    slug: "go",
    id: "go",
    language: "Go"
  },
  {
    title: "Rust",
    iconUrl: "https://replit.com/public/images/languages/rust.svg",
    slug: "rust",
    id: "rust",
    language: "Rust"
  },
  {
    title: "Clojure",
    iconUrl: "https://replit.com/public/images/languages/clojure.svg",
    slug: "clojure",
    id: "clojure",
    language: "Clojure"
  },
  {
    title: "Haskell",
    iconUrl: "https://replit.com/public/images/languages/haskell.svg",
    slug: "haskell",
    id: "haskell",
    language: "Haskell"
  },
  {
    title: "Kotlin",
    iconUrl: "https://replit.com/public/images/languages/kotlin.svg",
    slug: "kotlin",
    id: "kotlin",
    language: "Kotlin"
  },
  {
    title: "QBasic",
    iconUrl: "/public/images/languages/language.svg",
    slug: "qbasic",
    id: "qbasic",
    language: "QBasic"
  },
  {
    title: "Forth",
    iconUrl: "/public/images/languages/language.svg",
    slug: "forth",
    id: "forth",
    language: "Forth"
  },
  {
    title: "LOLCODE",
    iconUrl: "/public/images/languages/lolcode.svg",
    slug: "lolcode",
    id: "lolcode",
    language: "LOLCODE"
  },
  {
    title: "BrainF",
    iconUrl: "/public/images/languages/brainfuck.svg",
    slug: "brainfuck",
    id: "brainfuck",
    language: "BrainF"
  },
  {
    title: "Emoticon",
    iconUrl: "/public/images/languages/language.svg",
    slug: "emoticon",
    id: "emoticon",
    language: "Emoticon"
  },
  {
    title: "Bloop",
    iconUrl: "/public/images/languages/language.svg",
    slug: "bloop",
    id: "bloop",
    language: "Bloop"
  },
  {
    title: "Unlambda",
    iconUrl: "/public/images/languages/language.svg",
    slug: "unlambda",
    id: "unlambda",
    language: "Unlambda"
  },
  {
    title: "CoffeeScript",
    iconUrl: "/public/images/languages/coffeescript.svg",
    slug: "coffeescript",
    id: "coffeescript",
    language: "CoffeeScript"
  },
  {
    title: "APL",
    iconUrl: "https://replit.com/public/images/languages/language.svg",
    slug: "apl",
    id: "apl",
    language: "APL"
  },
  {
    title: "Lua",
    iconUrl: "https://replit.com/public/images/languages/lua.svg",
    slug: "lua",
    id: "lua",
    language: "Lua"
  },
  {
    title: "Roy",
    iconUrl: "/public/images/languages/roy.svg",
    slug: "roy",
    id: "roy",
    language: "Roy"
  },
  {
    title: "Deno (beta)",
    iconUrl: "https://icons.util.repl.co/deno-no-transparent.svg",
    slug: "deno",
    id: "deno",
    language: "Deno (beta)"
  },
  {
    title: "C#",
    iconUrl: "https://replit.com/public/images/languages/csharp.svg",
    slug: "csharp",
    id: "csharp",
    language: "C#"
  },
  {
    title: "F#",
    iconUrl: "https://replit.com/public/images/languages/fsharp.svg",
    slug: "fsharp",
    id: "fsharp",
    language: "F#"
  },
  {
    title: "Swift",
    iconUrl: "https://replit.com/public/images/languages/swift.svg",
    slug: "swift",
    id: "swift",
    language: "Swift"
  },
  {
    title: "Python (with Turtle)",
    iconUrl: "https://replit.com/public/images/languages/python_turtle.svg",
    slug: "python_turtle",
    id: "python_turtle",
    language: "Python (with Turtle)"
  },
  {
    title: "Basic (beta)",
    iconUrl: "https://icons--util.repl.co/basic.svg",
    slug: "basic",
    id: "basic",
    language: "Basic (beta)"
  },
  {
    title: "R",
    iconUrl: "https://logos.turbio.repl.co/rlang.svg",
    slug: "rlang",
    id: "rlang",
    language: "R"
  },
  {
    title: "Bash",
    iconUrl: "https://icons.util.repl.co/bash.svg",
    slug: "bash",
    id: "bash",
    language: "Bash"
  },
  {
    title: "Crystal",
    iconUrl: "https://logos.turbio.repl.co/crystal.svg",
    slug: "crystal",
    id: "crystal",
    language: "Crystal"
  },
  {
    title: "Julia",
    iconUrl: "https://logos.turbio.repl.co/julia.svg",
    slug: "julia",
    id: "julia",
    language: "Julia"
  },
  {
    title: "Elixir",
    iconUrl: "https://lang-images--timmy-i-chen.repl.co/elixir.png",
    slug: "elixir",
    id: "elixir",
    language: "Elixir"
  },
  {
    title: "Nim",
    iconUrl: "https://lang-images--timmy-i-chen.repl.co/nim.png",
    slug: "nim",
    id: "nim",
    language: "Nim"
  },
  {
    title: "Dart",
    iconUrl: "https://logos.turbio.repl.co/dart.svg",
    slug: "dart",
    id: "dart",
    language: "Dart"
  },
  {
    title: "Reason Node.js",
    iconUrl: "https://replit.com/public/images/languages/reason.png",
    slug: "reason_nodejs",
    id: "reason_nodejs",
    language: "Reason Node.js"
  },
  {
    title: "Tcl",
    iconUrl: "https://logos.turbio.repl.co/tcl.svg",
    slug: "tcl",
    id: "tcl",
    language: "Tcl"
  },
  {
    title: "Erlang",
    iconUrl: "https://lang-images--timmy-i-chen.repl.co/erlang.png",
    slug: "erlang",
    id: "erlang",
    language: "Erlang"
  },
  {
    title: "TypeScript",
    iconUrl: "https://tsnodelogo.masfrost.repl.co/typescript.png",
    slug: "typescript",
    id: "typescript",
    language: "TypeScript"
  },
  {
    title: "Pygame",
    iconUrl: "https://replit.com/public/images/languages/python.svg",
    slug: "pygame",
    id: "pygame",
    language: "Pygame"
  },
  {
    title: "Love2D",
    iconUrl: "https://lang-images--timmy-i-chen.repl.co/love2d.png",
    slug: "love2d",
    id: "love2d",
    language: "Love2D"
  },
  {
    title: "Emacs Lisp (Elisp)",
    iconUrl: "https://icons--util.repl.co/emacs.svg",
    slug: "elisp",
    id: "elisp",
    language: "Emacs Lisp (Elisp)"
  },
  {
    title: "PHP Web Server",
    iconUrl: "https://replit.com/public/images/languages/php.svg",
    slug: "php7",
    id: "php7",
    language: "PHP Web Server"
  },
  {
    title: "SQLite",
    iconUrl: "https://icons--util.repl.co/sqlite.svg",
    slug: "sqlite",
    id: "sqlite",
    language: "SQLite"
  },
  {
    title: "PHP CLI",
    iconUrl: "https://replit.com/public/images/languages/php.svg",
    slug: "php_cli",
    id: "php_cli",
    language: "PHP CLI"
  },
  {
    title: "Pyxel",
    iconUrl: "https://replit.com/public/images/languages/python.svg",
    slug: "pyxel",
    id: "pyxel",
    language: "Pyxel"
  },
  {
    title: "Raku",
    iconUrl: "https://logos.turbio.repl.co/perl6.png",
    slug: "raku",
    id: "raku",
    language: "Raku"
  },
  {
    title: "Scala (beta)",
    iconUrl: "https://icons--util.repl.co/scala.svg",
    slug: "scala",
    id: "scala",
    language: "Scala (beta)"
  },
  {
    title: "Nix (beta)",
    iconUrl: "https://icons.util.repl.co/bash.svg",
    slug: "nix",
    id: "nix",
    language: "Nix (beta)"
  }
];

import data from "./data.json";
import { useEffect, useMemo } from "react";
import TemplateList from "./TemplateList";

const ITEMS = data.data.templateRepls2.items.map((language, i) => {
  return {
    id: language.id,
    title: language.title,
    value: language.id,
    slug: language.id,
    subtitle: "Subtitle",
    accessory: "Accessory",
    icon: language.iconUrl
    // recentReplsCreatedCount: language.recentReplsCreatedCount
  };
});

export default function Command() {
  const { push } = useNavigation();

  const { isLoading, data, revalidate } = useExec(`curl 'https://replit.com/graphql' -H 'Accept-Encoding: gzip, deflate' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: https://replit.com' -H 'x-requested-with: wow' --data-binary '{"query": "{templateRepls2(options: {count: 100,category:10}) {__typename ... on TemplateReplSearchConnection {category items {title templateCategories {title id}}}}templateCategories {__typename ... on TemplateCategoriesResults {results {... on TemplateCategory {id title slug}}}}}"}' --compressed`, {
    shell: true,
  });

  const response = useMemo(() => JSON.parse(data), [isLoading, data]);

  const results = useMemo(() => {
    console.log(data)
    if (!response) return [];
    const templateCategories = response.data.templateCategories.results;
    return templateCategories
  }, [isLoading, response]);


  useEffect(() => {
    console.log('RESULTS', results)
  }, [results])

  // const results = useMemo(() => {
  //   console.log(data)
  //   // if (!data) return [];
  //   // const templateCategories = data.data.templateCategories.results;
  //   // return templateCategories
  // }, [isLoading, data]);


  return (
    <List isLoading={isLoading}>
      {(results || []).map((item) => (
        <List.Item key={item.id} title={item.title} actions={
          <ActionPanel>
            <Action title="View templates" onAction={() => push(<TemplateList category={item.id} key={Math.random()} />)} />
          </ActionPanel>
        }  />
      ))}
    </List>
    // <List searchBarPlaceholder="Search for a programming language…">
    //   {/* {ITEMS.sort((
    //     a,
    //     b
    //   ) => {
    //     return b.recentReplsCreatedCount - a.recentReplsCreatedCount;
    //   }).map((item, i) => ( */}
    //   {ITEMS.map((item, i) => (
    //     <List.Item
    //       key={item.id}
    //       icon={item.icon}
    //       title={item.title}
    //       // subtitle={i < 3 ? "Popular" : ""}
    //       // accessories={[{ icon: i < 3 ? Icon.Heartbeat : null, text: `${item.recentReplsCreatedCount.toLocaleString()} projects on Replit` }]}
    //       actions={
    //         <ActionPanel>
    //           <Action.OpenInBrowser
    //             title={`Create a ${item.title} project`}
    //             url={`http://replit.com/new/${item.slug.toLowerCase()}`}
    //           />
    //         </ActionPanel>
    //       }
    //     />
    //   ))}
    // </List>
  );
}
