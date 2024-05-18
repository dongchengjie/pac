import fs from "fs";
import dts from "dts-bundle";
import prettier from "prettier";

(async () => {
  // bundle
  dts.bundle({
    name: "pac",
    main: "index.d.ts",
    baseDir: "src",
    out: "../pac.d.ts",
    indent: "",
    outputAsModuleFolder: true,
    headerText: ` https://developer.mozilla.org/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file `
  });

  /* post-process */
  let content = fs.readFileSync("./pac.d.ts", "utf8");
  content = content
    .replace("\r\n", "\n")
    .split("\n")
    .map(line => (["function", "type"].some(item => line.startsWith(`${item} `)) ? `declare ${line}` : line))
    .map(line => line.trim())
    .filter(Boolean)
    .join("\n");
  // format
  const format = async json => {
    const options = {
      parser: "typescript",
      quoteProps: "as-needed",
      singleQuote: false,
      trailingComma: "all",
      bracketSpacing: false,
      proseWrap: "preserve",
      endOfLine: "lf",
      embeddedLanguageFormatting: "auto"
    };
    return await prettier.format(json, options).then(formatted => formatted);
  };
  const formatted = await format(content);
  // write
  fs.writeFileSync("./pac.d.ts", formatted);
})();
