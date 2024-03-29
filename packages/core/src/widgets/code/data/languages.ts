import type { ProcessedCodeLanguage } from '@staticcms/core';

const languages: ProcessedCodeLanguage[] = [
  {
    label: 'AGS Script',
    identifiers: ['ags', 'asc', 'ash'],
    codemirror_mode: 'c',
    codemirror_mime_type: 'text/x-c++src',
  },
  {
    label: 'APL',
    identifiers: ['apl', 'dyalog'],
    codemirror_mode: 'apl',
    codemirror_mime_type: 'text/apl',
  },
  {
    label: 'ASP',
    identifiers: ['asp', 'aspx', 'asax', 'ascx', 'ashx', 'asmx', 'axd'],
    codemirror_mode: 'html',
    codemirror_mime_type: 'application/x-aspx',
  },
  {
    label: 'Alpine Abuild',
    identifiers: ['abuild', 'apkbuild'],
    codemirror_mode: 'shell',
    codemirror_mime_type: 'text/x-sh',
  },
  {
    label: 'AngelScript',
    identifiers: ['angelscript', 'as'],
    codemirror_mode: 'c',
    codemirror_mime_type: 'text/x-c++src',
  },
  {
    label: 'Ant Build System',
    identifiers: [],
    codemirror_mode: 'xml',
    codemirror_mime_type: 'application/xml',
  },
  {
    label: 'Apex',
    identifiers: ['apex', 'cls'],
    codemirror_mode: 'c',
    codemirror_mime_type: 'text/x-java',
  },
  {
    label: 'Asymptote',
    identifiers: ['asymptote', 'asy'],
    codemirror_mode: 'c',
    codemirror_mime_type: 'text/x-kotlin',
  },
  {
    label: 'BibTeX',
    identifiers: ['bibtex', 'bib'],
    codemirror_mode: 'stex',
    codemirror_mime_type: 'text/x-stex',
  },
  {
    label: 'Brainfuck',
    identifiers: ['brainfuck', 'b', 'bf'],
    codemirror_mode: 'brainfuck',
    codemirror_mime_type: 'text/x-brainfuck',
  },
  {
    label: 'C',
    identifiers: ['c', 'cats', 'h', 'idc'],
    codemirror_mode: 'c',
    codemirror_mime_type: 'text/x-csrc',
  },
  {
    label: 'C#',
    identifiers: ['csharp', 'cs', 'cake', 'csx'],
    codemirror_mode: 'csharp',
    codemirror_mime_type: 'text/x-csharp',
  },
  {
    label: 'C++',
    identifiers: [
      'cpp',
      'cc',
      'cp',
      'cxx',
      'h',
      'hh',
      'hpp',
      'hxx',
      'inc',
      'inl',
      'ino',
      'ipp',
      're',
      'tcc',
      'tpp',
    ],
    codemirror_mode: 'cpp',
    codemirror_mime_type: 'text/x-c++src',
  },
  {
    label: 'C2hs Haskell',
    identifiers: ['chs'],
    codemirror_mode: 'haskell',
    codemirror_mime_type: 'text/x-haskell',
  },
  {
    label: 'CMake',
    identifiers: ['cmake'],
    codemirror_mode: 'cmake',
    codemirror_mime_type: 'text/x-cmake',
  },
  {
    label: 'COBOL',
    identifiers: ['cobol', 'cob', 'cbl', 'ccp', 'cpy'],
    codemirror_mode: 'cobol',
    codemirror_mime_type: 'text/x-cobol',
  },
  {
    label: 'COLLADA',
    identifiers: ['collada', 'dae'],
    codemirror_mode: 'xml',
    codemirror_mime_type: 'text/xml',
  },
  {
    label: 'CSON',
    identifiers: ['cson'],
    codemirror_mode: 'coffeescript',
    codemirror_mime_type: 'text/x-coffeescript',
  },
  {
    label: 'CSS',
    identifiers: ['css'],
    codemirror_mode: 'css',
    codemirror_mime_type: 'text/css',
  },
  {
    label: 'Cabal Config',
    identifiers: ['Cabal', 'cabal'],
    codemirror_mode: 'haskell',
    codemirror_mime_type: 'text/x-haskell',
  },
  {
    label: 'ChucK',
    identifiers: ['chuck', 'ck'],
    codemirror_mode: 'c',
    codemirror_mime_type: 'text/x-java',
  },
  {
    label: 'Clojure',
    identifiers: ['clojure', 'clj', 'boot', 'cljc', 'cljs', 'cljscm', 'cljx', 'hic'],
    codemirror_mode: 'clojure',
    codemirror_mime_type: 'text/x-clojure',
  },
  {
    label: 'Cloud Firestore Security Rules',
    identifiers: [],
    codemirror_mode: 'css',
    codemirror_mime_type: 'text/css',
  },
  {
    label: 'CoffeeScript',
    identifiers: ['coffeescript', 'coffee', 'cake', 'cjsx', 'iced'],
    codemirror_mode: 'coffeescript',
    codemirror_mime_type: 'text/x-coffeescript',
  },
  {
    label: 'Common Lisp',
    identifiers: ['lisp', 'asd', 'cl', 'l', 'lsp', 'ny', 'podsl', 'sexp'],
    codemirror_mode: 'commonLisp',
    codemirror_mime_type: 'text/x-common-lisp',
  },
  {
    label: 'Common Workflow Language',
    identifiers: ['cwl'],
    codemirror_mode: 'yaml',
    codemirror_mime_type: 'text/x-yaml',
  },
  {
    label: 'Component Pascal',
    identifiers: ['delphi', 'objectpascal', 'cp', 'cps'],
    codemirror_mode: 'pascal',
    codemirror_mime_type: 'text/x-pascal',
  },
  {
    label: 'Crystal',
    identifiers: ['crystal', 'cr'],
    codemirror_mode: 'crystal',
    codemirror_mime_type: 'text/x-crystal',
  },
  {
    label: 'Cuda',
    identifiers: ['cuda', 'cu', 'cuh'],
    codemirror_mode: 'c',
    codemirror_mime_type: 'text/x-c++src',
  },
  {
    label: 'Cycript',
    identifiers: ['cycript', 'cy'],
    codemirror_mode: 'javascript',
    codemirror_mime_type: 'text/javascript',
  },
  {
    label: 'Cython',
    identifiers: ['cython', 'pyrex', 'pyx', 'pxd', 'pxi'],
    codemirror_mode: 'python',
    codemirror_mime_type: 'text/x-cython',
  },
  {
    label: 'D',
    identifiers: ['d', 'di'],
    codemirror_mode: 'd',
    codemirror_mime_type: 'text/x-d',
  },
  {
    label: 'DTrace',
    identifiers: ['dtrace', 'd'],
    codemirror_mode: 'c',
    codemirror_mime_type: 'text/x-csrc',
  },
  {
    label: 'Dart',
    identifiers: ['dart'],
    codemirror_mode: 'dart',
    codemirror_mime_type: 'application/dart',
  },
  {
    label: 'Dhall',
    identifiers: ['dhall'],
    codemirror_mode: 'haskell',
    codemirror_mime_type: 'text/x-haskell',
  },
  {
    label: 'Diff',
    identifiers: ['diff', 'udiff', 'patch'],
    codemirror_mode: 'diff',
    codemirror_mime_type: 'text/x-diff',
  },
  {
    label: 'Dockerfile',
    identifiers: ['dockerfile'],
    codemirror_mode: 'dockerfile',
    codemirror_mime_type: 'text/x-dockerfile',
  },
  {
    label: 'Dylan',
    identifiers: ['dylan', 'dyl', 'intr', 'lid'],
    codemirror_mode: 'dylan',
    codemirror_mime_type: 'text/x-dylan',
  },
  {
    label: 'EBNF',
    identifiers: ['ebnf'],
    codemirror_mode: 'ebnf',
    codemirror_mime_type: 'text/x-ebnf',
  },
  {
    label: 'ECL',
    identifiers: ['ecl', 'eclxml'],
    codemirror_mode: 'ecl',
    codemirror_mime_type: 'text/x-ecl',
  },
  {
    label: 'EQ',
    identifiers: ['eq'],
    codemirror_mode: 'c',
    codemirror_mime_type: 'text/x-csharp',
  },
  {
    label: 'Eagle',
    identifiers: ['eagle', 'sch', 'brd'],
    codemirror_mode: 'xml',
    codemirror_mime_type: 'text/xml',
  },
  {
    label: 'Easybuild',
    identifiers: ['easybuild', 'eb'],
    codemirror_mode: 'python',
    codemirror_mime_type: 'text/x-python',
  },
  {
    label: 'Ecere Projects',
    identifiers: ['epj'],
    codemirror_mode: 'javascript',
    codemirror_mime_type: 'application/json',
  },
  {
    label: 'EditorConfig',
    identifiers: ['editorconfig'],
    codemirror_mode: 'properties',
    codemirror_mime_type: 'text/x-properties',
  },
  {
    label: 'Edje Data Collection',
    identifiers: ['edc'],
    codemirror_mode: 'c',
    codemirror_mime_type: 'text/x-c++src',
  },
  {
    label: 'Eiffel',
    identifiers: ['eiffel', 'e'],
    codemirror_mode: 'eiffel',
    codemirror_mime_type: 'text/x-eiffel',
  },
  {
    label: 'Elm',
    identifiers: ['elm'],
    codemirror_mode: 'elm',
    codemirror_mime_type: 'text/x-elm',
  },
  {
    label: 'Emacs Lisp',
    identifiers: ['elisp', 'emacs', 'el'],
    codemirror_mode: 'c',
    codemirror_mime_type: 'text/x-common-lisp',
  },
  {
    label: 'EmberScript',
    identifiers: ['emberscript', 'em'],
    codemirror_mode: 'coffeescript',
    codemirror_mime_type: 'text/x-coffeescript',
  },
  {
    label: 'Erlang',
    identifiers: ['erlang', 'erl', 'es', 'escript', 'hrl', 'xrl', 'yrl'],
    codemirror_mode: 'erlang',
    codemirror_mime_type: 'text/x-erlang',
  },
  {
    label: 'Factor',
    identifiers: ['factor'],
    codemirror_mode: 'factor',
    codemirror_mime_type: 'text/x-factor',
  },
  {
    label: 'Forth',
    identifiers: ['forth', 'fth', 'f', 'for', 'fr', 'frt', 'fs'],
    codemirror_mode: 'forth',
    codemirror_mime_type: 'text/x-forth',
  },
  {
    label: 'Fortran',
    identifiers: ['fortran', 'f', 'for', 'fpp'],
    codemirror_mode: 'fortran',
    codemirror_mime_type: 'text/x-fortran',
  },
  {
    label: 'GCC Machine Description',
    identifiers: ['md'],
    codemirror_mode: 'commonLisp',
    codemirror_mime_type: 'text/x-common-lisp',
  },
  {
    label: 'GN',
    identifiers: ['gn', 'gni'],
    codemirror_mode: 'python',
    codemirror_mime_type: 'text/x-python',
  },
  {
    label: 'Game Maker Language',
    identifiers: ['gml'],
    codemirror_mode: 'c',
    codemirror_mime_type: 'text/x-c++src',
  },
  {
    label: 'Genshi',
    identifiers: ['genshi', 'kid'],
    codemirror_mode: 'xml',
    codemirror_mime_type: 'text/xml',
  },
  {
    label: 'Gentoo Ebuild',
    identifiers: ['ebuild'],
    codemirror_mode: 'shell',
    codemirror_mime_type: 'text/x-sh',
  },
  {
    label: 'Gentoo Eclass',
    identifiers: ['eclass'],
    codemirror_mode: 'shell',
    codemirror_mime_type: 'text/x-sh',
  },
  {
    label: 'Git Attributes',
    identifiers: ['gitattributes'],
    codemirror_mode: 'shell',
    codemirror_mime_type: 'text/x-sh',
  },
  {
    label: 'Git Config',
    identifiers: ['gitconfig', 'gitmodules'],
    codemirror_mode: 'properties',
    codemirror_mime_type: 'text/x-properties',
  },
  {
    label: 'Glyph',
    identifiers: ['glyph', 'glf'],
    codemirror_mode: 'tcl',
    codemirror_mime_type: 'text/x-tcl',
  },
  {
    label: 'Go',
    identifiers: ['go', 'golang'],
    codemirror_mode: 'go',
    codemirror_mime_type: 'text/x-go',
  },
  {
    label: 'Grammatical Framework',
    identifiers: ['gf'],
    codemirror_mode: 'haskell',
    codemirror_mime_type: 'text/x-haskell',
  },
  {
    label: 'Groovy',
    identifiers: ['groovy', 'grt', 'gtpl', 'gvy'],
    codemirror_mode: 'groovy',
    codemirror_mime_type: 'text/x-groovy',
  },
  {
    label: 'HCL',
    identifiers: ['hcl', 'terraform', 'tf', 'tfvars', 'workflow'],
    codemirror_mode: 'ruby',
    codemirror_mime_type: 'text/x-ruby',
  },
  {
    label: 'HTML',
    identifiers: ['html', 'xhtml', 'htm', 'inc', 'st', 'xht'],
    codemirror_mode: 'html',
    codemirror_mime_type: 'text/html',
  },
  {
    label: 'HTML+ECR',
    identifiers: ['ecr'],
    codemirror_mode: 'html',
    codemirror_mime_type: 'text/html',
  },
  {
    label: 'HTML+EEX',
    identifiers: ['eex'],
    codemirror_mode: 'html',
    codemirror_mime_type: 'text/html',
  },
  {
    label: 'HTML+ERB',
    identifiers: ['erb'],
    codemirror_mode: 'html',
    codemirror_mime_type: 'application/x-erb',
  },
  {
    label: 'HTML+PHP',
    identifiers: ['phtml'],
    codemirror_mode: 'php',
    codemirror_mime_type: 'application/x-httpd-php',
  },
  {
    label: 'HTML+Razor',
    identifiers: ['razor', 'cshtml'],
    codemirror_mode: 'html',
    codemirror_mime_type: 'text/html',
  },
  {
    label: 'HTTP',
    identifiers: ['http'],
    codemirror_mode: 'http',
    codemirror_mime_type: 'message/http',
  },
  {
    label: 'Hack',
    identifiers: ['hack', 'hh', 'php'],
    codemirror_mode: 'php',
    codemirror_mime_type: 'application/x-httpd-php',
  },
  {
    label: 'Haskell',
    identifiers: ['haskell', 'hs', 'hsc'],
    codemirror_mode: 'haskell',
    codemirror_mime_type: 'text/x-haskell',
  },
  {
    label: 'Haxe',
    identifiers: ['haxe', 'hx', 'hxsl'],
    codemirror_mode: 'haxe',
    codemirror_mime_type: 'text/x-haxe',
  },
  {
    label: 'HolyC',
    identifiers: ['holyc', 'hc'],
    codemirror_mode: 'c',
    codemirror_mime_type: 'text/x-csrc',
  },
  {
    label: 'IDL',
    identifiers: ['idl', 'pro', 'dlm'],
    codemirror_mode: 'idl',
    codemirror_mime_type: 'text/x-idl',
  },
  {
    label: 'INI',
    identifiers: ['ini', 'dosini', 'cfg', 'lektorproject', 'prefs', 'pro', 'properties'],
    codemirror_mode: 'properties',
    codemirror_mime_type: 'text/x-properties',
  },
  {
    label: 'IRC log',
    identifiers: ['irc', 'irclog', 'weechatlog'],
    codemirror_mode: 'mirc',
    codemirror_mime_type: 'text/mirc',
  },
  {
    label: 'Ignore List',
    identifiers: ['ignore', 'gitignore'],
    codemirror_mode: 'shell',
    codemirror_mime_type: 'text/x-sh',
  },
  {
    label: 'JSON',
    identifiers: [
      'json',
      'avsc',
      'geojson',
      'gltf',
      'har',
      'ice',
      'jsonl',
      'mcmeta',
      'tfstate',
      'topojson',
      'webapp',
      'webmanifest',
      'yy',
      'yyp',
    ],
    codemirror_mode: 'javascript',
    codemirror_mime_type: 'application/json',
  },
  {
    label: 'JSON with Comments',
    identifiers: ['jsonc'],
    codemirror_mode: 'javascript',
    codemirror_mime_type: 'text/javascript',
  },
  {
    label: 'JSON5',
    identifiers: [],
    codemirror_mode: 'javascript',
    codemirror_mime_type: 'application/json',
  },
  {
    label: 'JSONLD',
    identifiers: ['jsonld'],
    codemirror_mode: 'javascript',
    codemirror_mime_type: 'application/json',
  },
  {
    label: 'JSONiq',
    identifiers: ['jsoniq', 'jq'],
    codemirror_mode: 'javascript',
    codemirror_mime_type: 'application/json',
  },
  {
    label: 'JSX',
    identifiers: ['jsx'],
    codemirror_mode: 'jsx',
    codemirror_mime_type: 'text/jsx',
  },
  {
    label: 'Java',
    identifiers: ['java'],
    codemirror_mode: 'java',
    codemirror_mime_type: 'text/x-java',
  },
  {
    label: 'Java Properties',
    identifiers: ['properties'],
    codemirror_mode: 'properties',
    codemirror_mime_type: 'text/x-properties',
  },
  {
    label: 'Java Server Pages',
    identifiers: ['jsp'],
    codemirror_mode: 'html',
    codemirror_mime_type: 'application/x-jsp',
  },
  {
    label: 'JavaScript',
    identifiers: [
      'javascript',
      'js',
      'node',
      'bones',
      'es',
      'frag',
      'gs',
      'jake',
      'jsb',
      'jscad',
      'jsfl',
      'jsm',
      'jss',
      'mjs',
      'njs',
      'pac',
      'sjs',
      'ssjs',
      'xsjs',
      'xsjslib',
    ],
    codemirror_mode: 'javascript',
    codemirror_mime_type: 'text/javascript',
  },
  {
    label: 'JavaScript+ERB',
    identifiers: [],
    codemirror_mode: 'javascript',
    codemirror_mime_type: 'application/javascript',
  },
  {
    label: 'Julia',
    identifiers: ['julia', 'jl'],
    codemirror_mode: 'julia',
    codemirror_mime_type: 'text/x-julia',
  },
  {
    label: 'Jupyter Notebook',
    identifiers: ['ipynb'],
    codemirror_mode: 'javascript',
    codemirror_mime_type: 'application/json',
  },
  {
    label: 'KiCad Layout',
    identifiers: ['pcbnew'],
    codemirror_mode: 'commonLisp',
    codemirror_mime_type: 'text/x-common-lisp',
  },
  {
    label: 'Kit',
    identifiers: ['kit'],
    codemirror_mode: 'html',
    codemirror_mime_type: 'text/html',
  },
  {
    label: 'Kotlin',
    identifiers: ['kotlin', 'kt', 'ktm', 'kts'],
    codemirror_mode: 'kotlin',
    codemirror_mime_type: 'text/x-kotlin',
  },
  {
    label: 'LFE',
    identifiers: ['lfe'],
    codemirror_mode: 'commonLisp',
    codemirror_mime_type: 'text/x-common-lisp',
  },
  {
    label: 'LTspice Symbol',
    identifiers: ['asy'],
    codemirror_mode: 'spreadsheet',
    codemirror_mime_type: 'text/x-spreadsheet',
  },
  {
    label: 'LabVIEW',
    identifiers: ['labview', 'lvproj'],
    codemirror_mode: 'xml',
    codemirror_mime_type: 'text/xml',
  },
  {
    label: 'Less',
    identifiers: ['less'],
    codemirror_mode: 'css',
    codemirror_mime_type: 'text/css',
  },
  {
    label: 'Literate Haskell',
    identifiers: ['lhaskell', 'lhs'],
    codemirror_mode: 'haskell',
    codemirror_mime_type: 'text/x-literate-haskell',
  },
  {
    label: 'LiveScript',
    identifiers: ['livescript', 'ls'],
    codemirror_mode: 'livescript',
    codemirror_mime_type: 'text/x-livescript',
  },
  {
    label: 'LookML',
    identifiers: ['lookml'],
    codemirror_mode: 'yaml',
    codemirror_mime_type: 'text/x-yaml',
  },
  {
    label: 'Lua',
    identifiers: ['lua', 'fcgi', 'nse', 'rbxs', 'wlua'],
    codemirror_mode: 'lua',
    codemirror_mime_type: 'text/x-lua',
  },
  {
    label: 'M',
    identifiers: ['m', 'mumps'],
    codemirror_mode: 'mumps',
    codemirror_mime_type: 'text/x-mumps',
  },
  {
    label: 'MATLAB',
    identifiers: ['matlab', 'octave', 'm'],
    codemirror_mode: 'octave',
    codemirror_mime_type: 'text/x-octave',
  },
  {
    label: 'MTML',
    identifiers: ['mtml'],
    codemirror_mode: 'html',
    codemirror_mime_type: 'text/html',
  },
  {
    label: 'MUF',
    identifiers: ['muf', 'm'],
    codemirror_mode: 'forth',
    codemirror_mime_type: 'text/x-forth',
  },
  {
    label: 'Makefile',
    identifiers: ['makefile', 'bsdmake', 'make', 'mf', 'mak', 'd', 'mk', 'mkfile'],
    codemirror_mode: 'cmake',
    codemirror_mime_type: 'text/x-cmake',
  },
  {
    label: 'Markdown',
    identifiers: [
      'markdown',
      'pandoc',
      'md',
      'mdown',
      'mdwn',
      'mdx',
      'mkd',
      'mkdn',
      'mkdown',
      'ronn',
      'workbook',
    ],
    codemirror_mode: 'markdown',
    codemirror_mime_type: 'text/x-gfm',
  },
  {
    label: 'Marko',
    identifiers: ['marko', 'markojs'],
    codemirror_mode: 'html',
    codemirror_mime_type: 'text/html',
  },
  {
    label: 'Mathematica',
    identifiers: ['mathematica', 'mma', 'cdf', 'm', 'ma', 'mt', 'nb', 'nbp', 'wl', 'wlt'],
    codemirror_mode: 'mathematica',
    codemirror_mime_type: 'text/x-mathematica',
  },
  {
    label: 'Maven POM',
    identifiers: [],
    codemirror_mode: 'xml',
    codemirror_mime_type: 'text/xml',
  },
  {
    label: 'Max',
    identifiers: ['max', 'maxmsp', 'maxpat', 'maxhelp', 'maxproj', 'mxt', 'pat'],
    codemirror_mode: 'javascript',
    codemirror_mime_type: 'application/json',
  },
  {
    label: 'Metal',
    identifiers: ['metal'],
    codemirror_mode: 'c',
    codemirror_mime_type: 'text/x-c++src',
  },
  {
    label: 'Mirah',
    identifiers: ['mirah', 'druby', 'duby'],
    codemirror_mode: 'ruby',
    codemirror_mime_type: 'text/x-ruby',
  },
  {
    label: 'Modelica',
    identifiers: ['modelica', 'mo'],
    codemirror_mode: 'modelica',
    codemirror_mime_type: 'text/x-modelica',
  },
  {
    label: 'NSIS',
    identifiers: ['nsis', 'nsi', 'nsh'],
    codemirror_mode: 'nsis',
    codemirror_mime_type: 'text/x-nsis',
  },
  {
    label: 'NetLogo',
    identifiers: ['netlogo', 'nlogo'],
    codemirror_mode: 'commonLisp',
    codemirror_mime_type: 'text/x-common-lisp',
  },
  {
    label: 'NewLisp',
    identifiers: ['newlisp', 'nl', 'lisp', 'lsp'],
    codemirror_mode: 'commonLisp',
    codemirror_mime_type: 'text/x-common-lisp',
  },
  {
    label: 'Nginx',
    identifiers: ['nginx', 'nginxconf', 'vhost'],
    codemirror_mode: 'nginx',
    codemirror_mime_type: 'text/x-nginx-conf',
  },
  {
    label: 'Nu',
    identifiers: ['nu', 'nush'],
    codemirror_mode: 'scheme',
    codemirror_mime_type: 'text/x-scheme',
  },
  {
    label: 'NumPy',
    identifiers: ['numpy', 'numpyw', 'numsc'],
    codemirror_mode: 'python',
    codemirror_mime_type: 'text/x-python',
  },
  {
    label: 'Objective-C',
    identifiers: ['objc', 'objectivec', 'm', 'h'],
    codemirror_mode: 'c',
    codemirror_mime_type: 'text/x-objectivec',
  },
  {
    label: 'Objective-C++',
    identifiers: ['mm'],
    codemirror_mode: 'c',
    codemirror_mime_type: 'text/x-objectivec',
  },
  {
    label: 'OpenCL',
    identifiers: ['opencl', 'cl'],
    codemirror_mode: 'c',
    codemirror_mime_type: 'text/x-csrc',
  },
  {
    label: 'OpenRC runscript',
    identifiers: ['openrc'],
    codemirror_mode: 'shell',
    codemirror_mime_type: 'text/x-sh',
  },
  {
    label: 'Oz',
    identifiers: ['oz'],
    codemirror_mode: 'oz',
    codemirror_mime_type: 'text/x-oz',
  },
  {
    label: 'PHP',
    identifiers: ['php', 'inc', 'aw', 'ctp', 'fcgi', 'phps', 'phpt'],
    codemirror_mode: 'php',
    codemirror_mime_type: 'application/x-httpd-php',
  },
  {
    label: 'PLSQL',
    identifiers: [
      'plsql',
      'pls',
      'bdy',
      'ddl',
      'fnc',
      'pck',
      'pkb',
      'pks',
      'plb',
      'prc',
      'spc',
      'sql',
      'tpb',
      'tps',
      'trg',
      'vw',
    ],
    codemirror_mode: 'sql',
    codemirror_mime_type: 'text/x-plsql',
  },
  {
    label: 'PLpgSQL',
    identifiers: ['plpgsql', 'pgsql', 'sql'],
    codemirror_mode: 'sql',
    codemirror_mime_type: 'text/x-sql',
  },
  {
    label: 'Pascal',
    identifiers: ['pascal', 'pas', 'dfm', 'dpr', 'inc', 'lpr', 'pp'],
    codemirror_mode: 'pascal',
    codemirror_mime_type: 'text/x-pascal',
  },
  {
    label: 'Perl',
    identifiers: ['perl', 'cperl', 'pl', 'al', 'cgi', 'fcgi', 'ph', 'plx', 'pm', 'psgi', 't'],
    codemirror_mode: 'perl',
    codemirror_mime_type: 'text/x-perl',
  },
  {
    label: 'Perl 6',
    identifiers: ['nqp', 'pl', 'pm', 't'],
    codemirror_mode: 'perl',
    codemirror_mime_type: 'text/x-perl',
  },
  {
    label: 'Pic',
    identifiers: ['pic', 'chem'],
    codemirror_mode: 'troff',
    codemirror_mime_type: 'text/troff',
  },
  {
    label: 'Pod',
    identifiers: ['pod'],
    codemirror_mode: 'perl',
    codemirror_mime_type: 'text/x-perl',
  },
  {
    label: 'PowerShell',
    identifiers: ['powershell', 'posh', 'pwsh'],
    codemirror_mode: 'powershell',
    codemirror_mime_type: 'application/x-powershell',
  },
  {
    label: 'Protocol Buffer',
    identifiers: ['protobuf', 'proto'],
    codemirror_mode: 'protobuf',
    codemirror_mime_type: 'text/x-protobuf',
  },
  {
    label: 'Public Key',
    identifiers: ['asc', 'pub'],
    codemirror_mode: 'asciiArmor',
    codemirror_mime_type: 'application/pgp',
  },
  {
    label: 'Puppet',
    identifiers: ['puppet', 'pp'],
    codemirror_mode: 'puppet',
    codemirror_mime_type: 'text/x-puppet',
  },
  {
    label: 'PureScript',
    identifiers: ['purescript', 'purs'],
    codemirror_mode: 'haskell',
    codemirror_mime_type: 'text/x-haskell',
  },
  {
    label: 'Python',
    identifiers: [
      'python',
      'rusthon',
      'py',
      'bzl',
      'cgi',
      'fcgi',
      'gyp',
      'gypi',
      'lmi',
      'pyde',
      'pyi',
      'pyp',
      'pyt',
      'pyw',
      'rpy',
      'spec',
      'tac',
      'wsgi',
      'xpy',
    ],
    codemirror_mode: 'python',
    codemirror_mime_type: 'text/x-python',
  },
  {
    label: 'R',
    identifiers: ['r', 'R', 'Rscript', 'splus', 'rd', 'rsx'],
    codemirror_mode: 'r',
    codemirror_mime_type: 'text/x-rsrc',
  },
  {
    label: 'RAML',
    identifiers: ['raml'],
    codemirror_mode: 'yaml',
    codemirror_mime_type: 'text/x-yaml',
  },
  {
    label: 'RHTML',
    identifiers: ['rhtml'],
    codemirror_mode: 'html',
    codemirror_mime_type: 'application/x-erb',
  },
  {
    label: 'RMarkdown',
    identifiers: ['rmarkdown', 'rmd'],
    codemirror_mode: 'markdown',
    codemirror_mime_type: 'text/x-gfm',
  },
  {
    label: 'Reason',
    identifiers: ['reason', 're', 'rei'],
    codemirror_mode: 'rust',
    codemirror_mime_type: 'text/x-rustsrc',
  },
  {
    label: 'Roff',
    identifiers: [
      'roff',
      'groff',
      'man',
      'manpage',
      'mdoc',
      'nroff',
      'troff',
      'l',
      'me',
      'ms',
      'n',
      'nr',
      'rno',
      'tmac',
    ],
    codemirror_mode: 'troff',
    codemirror_mime_type: 'text/troff',
  },
  {
    label: 'Roff Manpage',
    identifiers: ['man', 'mdoc'],
    codemirror_mode: 'troff',
    codemirror_mime_type: 'text/troff',
  },
  {
    label: 'Rouge',
    identifiers: ['rouge', 'rg'],
    codemirror_mode: 'clojure',
    codemirror_mime_type: 'text/x-clojure',
  },
  {
    label: 'Ruby',
    identifiers: [
      'ruby',
      'jruby',
      'macruby',
      'rake',
      'rb',
      'rbx',
      'builder',
      'eye',
      'fcgi',
      'gemspec',
      'god',
      'jbuilder',
      'mspec',
      'pluginspec',
      'podspec',
      'rabl',
      'rbuild',
      'rbw',
      'ru',
      'spec',
      'thor',
      'watchr',
    ],
    codemirror_mode: 'ruby',
    codemirror_mime_type: 'text/x-ruby',
  },
  {
    label: 'Rust',
    identifiers: ['rust', 'rs'],
    codemirror_mode: 'rust',
    codemirror_mime_type: 'text/x-rustsrc',
  },
  {
    label: 'SAS',
    identifiers: ['sas'],
    codemirror_mode: 'sas',
    codemirror_mime_type: 'text/x-sas',
  },
  {
    label: 'SCSS',
    identifiers: ['scss'],
    codemirror_mode: 'css',
    codemirror_mime_type: 'text/x-scss',
  },
  {
    label: 'SPARQL',
    identifiers: ['sparql', 'rq'],
    codemirror_mode: 'sparql',
    codemirror_mime_type: 'application/sparql-query',
  },
  {
    label: 'SQL',
    identifiers: ['sql', 'cql', 'ddl', 'inc', 'mysql', 'prc', 'tab', 'udf', 'viw'],
    codemirror_mode: 'sql',
    codemirror_mime_type: 'text/x-sql',
  },
  {
    label: 'SQLPL',
    identifiers: ['sqlpl', 'sql'],
    codemirror_mode: 'sql',
    codemirror_mime_type: 'text/x-sql',
  },
  {
    label: 'SRecode Template',
    identifiers: ['srt'],
    codemirror_mode: 'commonLisp',
    codemirror_mime_type: 'text/x-common-lisp',
  },
  {
    label: 'SVG',
    identifiers: ['svg'],
    codemirror_mode: 'xml',
    codemirror_mime_type: 'text/xml',
  },
  {
    label: 'Sage',
    identifiers: ['sage', 'sagews'],
    codemirror_mode: 'python',
    codemirror_mime_type: 'text/x-python',
  },
  {
    label: 'SaltStack',
    identifiers: ['saltstack', 'saltstate', 'salt', 'sls'],
    codemirror_mode: 'yaml',
    codemirror_mime_type: 'text/x-yaml',
  },
  {
    label: 'Sass',
    identifiers: ['sass'],
    codemirror_mode: 'sass',
    codemirror_mime_type: 'text/x-sass',
  },
  {
    label: 'Scala',
    identifiers: ['scala', 'kojo', 'sbt', 'sc'],
    codemirror_mode: 'scala',
    codemirror_mime_type: 'text/x-scala',
  },
  {
    label: 'Scheme',
    identifiers: ['scheme', 'scm', 'sch', 'sld', 'sls', 'sps', 'ss'],
    codemirror_mode: 'scheme',
    codemirror_mime_type: 'text/x-scheme',
  },
  {
    label: 'Shell',
    identifiers: [
      'shell',
      'sh',
      'bash',
      'zsh',
      'bats',
      'cgi',
      'command',
      'fcgi',
      'ksh',
      'tmux',
      'tool',
    ],
    codemirror_mode: 'shell',
    codemirror_mime_type: 'text/x-sh',
  },
  {
    label: 'ShellSession',
    identifiers: ['shellsession', 'console'],
    codemirror_mode: 'shell',
    codemirror_mime_type: 'text/x-sh',
  },
  {
    label: 'Smalltalk',
    identifiers: ['smalltalk', 'squeak', 'st', 'cs'],
    codemirror_mode: 'smalltalk',
    codemirror_mime_type: 'text/x-stsrc',
  },
  {
    label: 'Squirrel',
    identifiers: ['squirrel', 'nut'],
    codemirror_mode: 'squirrel',
    codemirror_mime_type: 'text/x-c++src',
  },
  {
    label: 'Svelte',
    identifiers: ['svelte'],
    codemirror_mode: 'html',
    codemirror_mime_type: 'text/html',
  },
  {
    label: 'Swift',
    identifiers: ['swift'],
    codemirror_mode: 'swift',
    codemirror_mime_type: 'text/x-swift',
  },
  {
    label: 'SystemVerilog',
    identifiers: ['systemverilog', 'sv', 'svh', 'vh'],
    codemirror_mode: 'verilog',
    codemirror_mime_type: 'text/x-systemverilog',
  },
  {
    label: 'TOML',
    identifiers: ['toml'],
    codemirror_mode: 'toml',
    codemirror_mime_type: 'text/x-toml',
  },
  {
    label: 'TSX',
    identifiers: ['tsx'],
    codemirror_mode: 'jsx',
    codemirror_mime_type: 'text/jsx',
  },
  {
    label: 'Tcl',
    identifiers: ['tcl', 'adp', 'tm'],
    codemirror_mode: 'tcl',
    codemirror_mime_type: 'text/x-tcl',
  },
  {
    label: 'Tcsh',
    identifiers: ['tcsh', 'csh'],
    codemirror_mode: 'shell',
    codemirror_mime_type: 'text/x-sh',
  },
  {
    label: 'TeX',
    identifiers: [
      'tex',
      'latex',
      'aux',
      'bbx',
      'cbx',
      'cls',
      'dtx',
      'ins',
      'lbx',
      'ltx',
      'mkii',
      'mkiv',
      'mkvi',
      'sty',
      'toc',
    ],
    codemirror_mode: 'stex',
    codemirror_mime_type: 'text/x-stex',
  },
  {
    label: 'Terra',
    identifiers: ['terra', 't'],
    codemirror_mode: 'lua',
    codemirror_mime_type: 'text/x-lua',
  },
  {
    label: 'Textile',
    identifiers: ['textile'],
    codemirror_mode: 'textile',
    codemirror_mime_type: 'text/x-textile',
  },
  {
    label: 'Turtle',
    identifiers: ['turtle', 'ttl'],
    codemirror_mode: 'turtle',
    codemirror_mime_type: 'text/turtle',
  },
  {
    label: 'TypeScript',
    identifiers: ['typescript', 'ts'],
    codemirror_mode: 'javascript',
    codemirror_mime_type: 'application/typescript',
  },
  {
    label: 'Unified Parallel C',
    identifiers: ['upc'],
    codemirror_mode: 'c',
    codemirror_mime_type: 'text/x-csrc',
  },
  {
    label: 'Unity3D Asset',
    identifiers: ['anim', 'asset', 'mat', 'meta', 'prefab', 'unity'],
    codemirror_mode: 'yaml',
    codemirror_mime_type: 'text/x-yaml',
  },
  {
    label: 'Uno',
    identifiers: ['uno'],
    codemirror_mode: 'c',
    codemirror_mime_type: 'text/x-csharp',
  },
  {
    label: 'UnrealScript',
    identifiers: ['unrealscript', 'uc'],
    codemirror_mode: 'c',
    codemirror_mime_type: 'text/x-java',
  },
  {
    label: 'V',
    identifiers: ['v', 'vlang'],
    codemirror_mode: 'go',
    codemirror_mime_type: 'text/x-go',
  },
  {
    label: 'VHDL',
    identifiers: ['vhdl', 'vhd', 'vhf', 'vhi', 'vho', 'vhs', 'vht', 'vhw'],
    codemirror_mode: 'vhdl',
    codemirror_mime_type: 'text/x-vhdl',
  },
  {
    label: 'Verilog',
    identifiers: ['verilog', 'v', 'veo'],
    codemirror_mode: 'verilog',
    codemirror_mime_type: 'text/x-verilog',
  },
  {
    label: 'Visual Basic',
    identifiers: ['vbnet', 'vb', 'bas', 'cls', 'frm', 'frx', 'vba', 'vbhtml', 'vbs'],
    codemirror_mode: 'vb',
    codemirror_mime_type: 'text/x-vb',
  },
  {
    label: 'Volt',
    identifiers: ['volt'],
    codemirror_mode: 'd',
    codemirror_mime_type: 'text/x-d',
  },
  {
    label: 'WebAssembly',
    identifiers: ['webassembly', 'wast', 'wasm', 'wat'],
    codemirror_mode: 'commonLisp',
    codemirror_mime_type: 'text/x-common-lisp',
  },
  {
    label: 'Windows Registry Entries',
    identifiers: ['reg'],
    codemirror_mode: 'properties',
    codemirror_mime_type: 'text/x-properties',
  },
  {
    label: 'X BitMap',
    identifiers: ['xbm'],
    codemirror_mode: 'c',
    codemirror_mime_type: 'text/x-csrc',
  },
  {
    label: 'X PixMap',
    identifiers: ['xpm', 'pm'],
    codemirror_mode: 'c',
    codemirror_mime_type: 'text/x-csrc',
  },
  {
    label: 'XC',
    identifiers: ['xc'],
    codemirror_mode: 'c',
    codemirror_mime_type: 'text/x-csrc',
  },
  {
    label: 'XML',
    identifiers: [
      'xml',
      'rss',
      'xsd',
      'wsdl',
      'adml',
      'admx',
      'ant',
      'axml',
      'builds',
      'ccproj',
      'ccxml',
      'clixml',
      'cproject',
      'cscfg',
      'csdef',
      'csl',
      'csproj',
      'ct',
      'depproj',
      'dita',
      'ditamap',
      'ditaval',
      'dotsettings',
      'filters',
      'fsproj',
      'fxml',
      'glade',
      'gml',
      'gmx',
      'grxml',
      'iml',
      'ivy',
      'jelly',
      'jsproj',
      'kml',
      'launch',
      'mdpolicy',
      'mjml',
      'mm',
      'mod',
      'mxml',
      'natvis',
      'ncl',
      'ndproj',
      'nproj',
      'nuspec',
      'odd',
      'osm',
      'pkgproj',
      'pluginspec',
      'proj',
      'props',
      'pt',
      'rdf',
      'resx',
      'sch',
      'scxml',
      'sfproj',
      'shproj',
      'srdf',
      'storyboard',
      'targets',
      'tml',
      'ts',
      'tsx',
      'ui',
      'urdf',
      'ux',
      'vbproj',
      'vcxproj',
      'vsixmanifest',
      'vssettings',
      'vstemplate',
      'vxml',
      'wixproj',
      'workflow',
      'wsf',
      'wxi',
      'wxl',
      'wxs',
      'xacro',
      'xaml',
      'xib',
      'xlf',
      'xliff',
      'xmi',
      'xproj',
      'xspec',
      'xul',
      'zcml',
    ],
    codemirror_mode: 'xml',
    codemirror_mime_type: 'text/xml',
  },
  {
    label: 'XML Property List',
    identifiers: [
      'plist',
      'stTheme',
      'tmCommand',
      'tmLanguage',
      'tmPreferences',
      'tmSnippet',
      'tmTheme',
    ],
    codemirror_mode: 'xml',
    codemirror_mime_type: 'text/xml',
  },
  {
    label: 'XPages',
    identifiers: ['xpages'],
    codemirror_mode: 'xml',
    codemirror_mime_type: 'text/xml',
  },
  {
    label: 'XProc',
    identifiers: ['xproc', 'xpl'],
    codemirror_mode: 'xml',
    codemirror_mime_type: 'text/xml',
  },
  {
    label: 'XQuery',
    identifiers: ['xquery', 'xq', 'xql', 'xqm', 'xqy'],
    codemirror_mode: 'xQuery',
    codemirror_mime_type: 'application/xquery',
  },
  {
    label: 'XS',
    identifiers: ['xs'],
    codemirror_mode: 'c',
    codemirror_mime_type: 'text/x-csrc',
  },
  {
    label: 'XSLT',
    identifiers: ['xslt', 'xsl'],
    codemirror_mode: 'xml',
    codemirror_mime_type: 'text/xml',
  },
  {
    label: 'YAML',
    identifiers: ['yaml', 'yml', 'mir', 'reek', 'rviz', 'syntax'],
    codemirror_mode: 'yaml',
    codemirror_mime_type: 'text/x-yaml',
  },
  {
    label: 'edn',
    identifiers: ['edn'],
    codemirror_mode: 'clojure',
    codemirror_mime_type: 'text/x-clojure',
  },
  {
    label: 'wisp',
    identifiers: ['wisp'],
    codemirror_mode: 'clojure',
    codemirror_mime_type: 'text/x-clojure',
  },
];

export default languages;
