module.exports = {
  purge: {
      content: [
          './resources/**/*.blade.php',
          './resources/**/*.js',
          './resources/**/*.vue',
      ],
      options: {
          safelist: [
              'bg-swift',
              'bg-blade',
              'bg-css',
              'bg-go',
              'bg-html',
              'bg-javascript',
              'bg-markdown',
              'bg-php',
              'bg-python',
              'bg-ruby',
              'bg-scss',
              'bg-shell',
              'bg-typescript',
              'bg-vue',
              'bg-dockerfile',
              'bg-c',
              'bg-java',
              'bg-coffeescript',
              'bg-elixir',
              'bg-powershell',
              'bg-yaml',
              'bg-perl',
              'bg-lua',
              'bg-kotlin',
              'bg-visual-basic-net',
              'bg-vim-script',
              'bg-objective-c',
              'bg-gray-300',
          ],
      },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
      extend: {
          colors: {
              brand: {
                  '50':  '#fdfcfb',
                  '100': '#fcefef',
                  '200': '#f9c8e0',
                  '300': '#f19ac1',
                  '400': '#f16a9f',
                  '500': '#ff4297',
                  '600': '#d62e62',
                  '700': '#b22347',
                  '800': '#86192e',
                  '900': '#551018',
              },
              "1c-enterprise": "#814CCC",
              "abap": "#E8274B",
              "abap-cds": "#555e25",
              "actionscript": "#882B0F",
              "ada": "#02f88c",
              "agda": "#315665",
              "ags-script": "#B9D9FF",
              "al": "#3AA2B5",
              "alloy": "#64C800",
              "ampl": "#E6EFBB",
              "angelscript": "#C7D7DC",
              "antlr": "#9DC3FF",
              "apex": "#1797c0",
              "api-blueprint": "#2ACCA8",
              "apl": "#5A8164",
              "apollo-guidance-computer": "#0B3D91",
              "applescript": "#101F1F",
              "arc": "#aa2afe",
              "aspnet": "#9400ff",
              "aspectj": "#a957b0",
              "assembly": "#6E4C13",
              "asymptote": "#ff0000",
              "ats": "#1ac620",
              "autohotkey": "#6594b9",
              "autoit": "#1C3552",
              "ballerina": "#FF5000",
              "batchfile": "#C1F12E",
              "beef": "#a52f4e",
              "bison": "#6A463F",
              "blade": "#f7523f",
              "blitzmax": "#cd6400",
              "boo": "#d4bec1",
              "boogie": "#c80fa0",
              "brainfuck": "#2F2530",
              "browserslist": "#ffd539",
              "c": "#f34b7d",
              "ceylon": "#dfa535",
              "chapel": "#8dc63f",
              "cirru": "#ccccff",
              "clarion": "#db901e",
              "classic-asp": "#6a40fd",
              "clean": "#3F85AF",
              "click": "#E4E6F3",
              "clojure": "#db5855",
              "closure-templates": "#0d948f",
              "coffeescript": "#244776",
              "coldfusion": "#ed2cd6",
              "coldfusion-cfc": "#ed2cd6",
              "common-lisp": "#3fb68b",
              "common-workflow-language": "#B5314C",
              "component-pascal": "#B0CE4E",
              "crystal": "#000100",
              "cson": "#244776",
              "css": "#563d7c",
              "cuda": "#3A4E3A",
              "d": "#ba595e",
              "dafny": "#FFEC25",
              "dart": "#00B4AB",
              "dataweave": "#003a52",
              "dhall": "#dfafff",
              "dm": "#447265",
              "dockerfile": "#384d54",
              "dogescript": "#cca760",
              "dylan": "#6c616e",
              "e": "#ccce35",
              "ec": "#913960",
              "ecl": "#8a1267",
              "eiffel": "#4d6977",
              "ejs": "#a91e50",
              "elixir": "#6e4a7e",
              "elm": "#60B5CC",
              "emacs-lisp": "#c065db",
              "emberscript": "#FFF4F3",
              "eq": "#a78649",
              "erlang": "#B83998",
              "f": "#572e30",
              "factor": "#636746",
              "fancy": "#7b9db4",
              "fantom": "#14253c",
              "faust": "#c37240",
              "flux": "#88ccff",
              "forth": "#341708",
              "fortran": "#4d41b1",
              "freemarker": "#0050b2",
              "frege": "#00cafe",
              "futhark": "#5f021f",
              "g-code": "#D08CF2",
              "game-maker-language": "#71b417",
              "gaml": "#FFC766",
              "gdscript": "#355570",
              "gemfilelock": "#701516",
              "genie": "#fb855d",
              "gherkin": "#5B2063",
              "glyph": "#c1ac7f",
              "gnuplot": "#f0a9f0",
              "go": "#00ADD8",
              "golo": "#88562A",
              "gosu": "#82937f",
              "grammatical-framework": "#ff0000",
              "graphql": "#e10098",
              "groovy": "#e69f56",
              "hack": "#878787",
              "haml": "#ece2a9",
              "handlebars": "#f7931e",
              "harbour": "#0e60e3",
              "haskell": "#5e5086",
              "haxe": "#df7900",
              "hiveql": "#dce200",
              "holyc": "#ffefaf",
              "html": "#e34c26",
              "hy": "#7790B2",
              "idl": "#a3522f",
              "idris": "#b30000",
              "igor-pro": "#0000cc",
              "imagej-macro": "#99AAFF",
              "io": "#a9188d",
              "ioke": "#078193",
              "isabelle": "#FEFE00",
              "j": "#9EEDFF",
              "java": "#b07219",
              "javascript": "#f1e05a",
              "jflex": "#DBCA00",
              "jolie": "#843179",
              "jq": "#c7254e",
              "jsoniq": "#40d47e",
              "jsonnet": "#0064bd",
              "julia": "#a270ba",
              "jupyter-notebook": "#DA5B0B",
              "kaitai-struct": "#773b37",
              "kotlin": "#F18E33",
              "krl": "#28430A",
              "lark": "#2980B9",
              "lasso": "#999999",
              "latte": "#f2a542",
              "less": "#1d365d",
              "lex": "#DBCA00",
              "lfe": "#4C3023",
              "liquid": "#67b8de",
              "livescript": "#499886",
              "llvm": "#185619",
              "lolcode": "#cc9900",
              "lookml": "#652B81",
              "lsl": "#3d9970",
              "lua": "#000080",
              "macaulay2": "#d8ffff",
              "makefile": "#427819",
              "markdown": "#083fa1",
              "marko": "#42bff2",
              "mask": "#f97732",
              "matlab": "#e16737",
              "max": "#c4a79c",
              "maxscript": "#00a6a6",
              "mcfunction": "#E22837",
              "mercury": "#ff2b2b",
              "meson": "#007800",
              "metal": "#8f14e9",
              "mirah": "#c7a938",
              "mirc-script": "#3d57c3",
              "mlir": "#5EC8DB",
              "modula-3": "#223388",
              "mql4": "#62A8D6",
              "mql5": "#4A76B8",
              "mtml": "#b7e1f4",
              "mustache": "#724b3b",
              "ncl": "#28431f",
              "nearley": "#990000",
              "nemerle": "#3d3c6e",
              "nesc": "#94B0C7",
              "netlinx": "#0aa0ff",
              "netlinxerb": "#747faa",
              "netlogo": "#ff6375",
              "newlisp": "#87AED7",
              "nextflow": "#3ac486",
              "nim": "#ffc200",
              "nit": "#009917",
              "nix": "#7e7eff",
              "nu": "#c9df40",
              "numpy": "#9C8AF9",
              "nunjucks": "#3d8137",
              "nwscript": "#111522",
              "objective-c": "#6866fb",
              "objective-j": "#ff0c5a",
              "objectscript": "#424893",
              "ocaml": "#3be133",
              "odin": "#60AFFE",
              "omgrofl": "#cabbff",
              "ooc": "#b0b77e",
              "opal": "#f7ede0",
              "openqasm": "#AA70FF",
              "org": "#77aa99",
              "oxygene": "#cdd0e3",
              "oz": "#fab738",
              "p4": "#7055b5",
              "pan": "#cc0000",
              "papyrus": "#6600cc",
              "parrot": "#f3ca0a",
              "pascal": "#E3F171",
              "pawn": "#dbb284",
              "pep8": "#C76F5B",
              "perl": "#0298c3",
              "php": "#4F5D95",
              "piglatin": "#fcd7de",
              "pike": "#005390",
              "plsql": "#dad8d8",
              "pogoscript": "#d80074",
              "postscript": "#da291c",
              "powerbuilder": "#8f0f8d",
              "powershell": "#012456",
              "prisma": "#0c344b",
              "processing": "#0096D8",
              "prolog": "#74283c",
              "propeller-spin": "#7fa2a7",
              "pug": "#a86454",
              "puppet": "#302B6D",
              "purebasic": "#5a6986",
              "purescript": "#1D222D",
              "python": "#3572A5",
              "q": "#fed659",
              "qml": "#44a51c",
              "qt-script": "#00b841",
              "quake": "#882233",
              // "r": "#198CE7", // conflict with `border-r`
              "racket": "#3c5caa",
              "ragel": "#9d5200",
              "raku": "#0000fb",
              "raml": "#77d9fb",
              "rascal": "#fffaa0",
              "reason": "#ff5847",
              "rebol": "#358a5b",
              "record-jar": "#0673ba",
              // "red": "#f50000", // conflict with `text-red-500`
              "renpy": "#ff7f7f",
              "rescript": "#ed5051",
              "ring": "#2D54CB",
              "riot": "#A71E49",
              "roff": "#ecdebe",
              "rouge": "#cc0088",
              "ruby": "#701516",
              "runoff": "#665a4e",
              "rust": "#dea584",
              "saltstack": "#646464",
              "sas": "#B34936",
              "sass": "#a53b70",
              "scala": "#c22d40",
              "scaml": "#bd181a",
              "scheme": "#1e4aec",
              "scss": "#c6538c",
              "sed": "#64b970",
              "self": "#0579aa",
              "shell": "#89e051",
              "shen": "#120F14",
              "slash": "#007eff",
              "slice": "#003fa2",
              "slim": "#2b2b2b",
              "smalltalk": "#596706",
              "smpl": "#c94949",
              "solidity": "#AA6746",
              "sourcepawn": "#f69e1d",
              "sqf": "#3F3F3F",
              "squirrel": "#800000",
              "srecode-template": "#348a34",
              "stan": "#b2011d",
              "standard-ml": "#dc566d",
              "starlark": "#76d275",
              "stylus": "#ff6347",
              "supercollider": "#46390b",
              "svelte": "#ff3e00",
              "svg": "#ff9900",
              "swift": "#ffac45",
              "systemverilog": "#DAE1C2",
              "tcl": "#e4cc98",
              "terra": "#00004c",
              "tex": "#3D6117",
              "ti-program": "#A0AA87",
              "turing": "#cf142b",
              "twig": "#c1d026",
              "typescript": "#2b7489",
              "unified-parallel-c": "#4e3617",
              "uno": "#9933cc",
              "unrealscript": "#a54c4d",
              "v": "#4f87c4",
              "vala": "#fbe5cd",
              "vba": "#867db1",
              "vbscript": "#15dcdc",
              "vcl": "#148AA8",
              "verilog": "#b2b7f8",
              "vhdl": "#adb2cb",
              "vim-script": "#199f4b",
              "visual-basic-net": "#945db7",
              "volt": "#1F1F1F",
              "vue": "#2c3e50",
              "wdl": "#42f1f4",
              "webassembly": "#04133b",
              "wisp": "#7582D1",
              "wollok": "#a23738",
              "x10": "#4B6BEF",
              "xbase": "#403a40",
              "xc": "#99DA07",
              "xquery": "#5232e7",
              "xslt": "#EB8CEB",
              "yacc": "#4B6C4B",
              "yaml": "#cb171e",
              "yara": "#220000",
              "yasnippet": "#32AB90",
              "zap": "#0d665e",
              "zenscript": "#00BCD1",
              "zephir": "#118f9e",
              "zig": "#ec915c",
              "zil": "#dc75e5",
          },
          fontFamily: {
              logo: [
                  'Raleway',
                  'ui-sans-serif',
                  'system-ui',
                  'sans-serif',
              ],
          }
      },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
