"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[4324],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),f=a,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||l;return t?r.createElement(d,o(o({ref:n},c),{},{components:t})):r.createElement(d,o({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=f;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(7294),a=t(6010);const l="tabItem_Ymn6";function o(e){let{children:n,hidden:t,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>T});var r=t(7462),a=t(7294),l=t(6010),o=t(2466),i=t(6550),s=t(1980),u=t(7392),c=t(12);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}function m(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function d(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(l),(0,a.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,l=m(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[s,u]=d({queryString:t,groupId:r}),[p,h]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,c.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:r}),v=(()=>{const e=s??p;return f({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{v&&i(v)}),[v]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,l]),tabValues:l}}var v=t(2389);const b="tabList__CuJ",g="tabItem_LNqP";function y(e){let{className:n,block:t,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),m=e=>{const n=e.currentTarget,t=c.indexOf(n),r=u[t].value;r!==i&&(p(n),s(r))},f=e=>{let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n)},u.map((e=>{let{value:n,label:t,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>c.push(e),onKeyDown:f,onClick:m},o,{className:(0,l.Z)("tabs__item",g,o?.className,{"tabs__item--active":i===n})}),t??n)})))}function k(e){let{lazy:n,children:t,selectedValue:r}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r}))))}function w(e){const n=h(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",b)},a.createElement(y,(0,r.Z)({},e,n)),a.createElement(k,(0,r.Z)({},e,n)))}function T(e){const n=(0,v.Z)();return a.createElement(w,(0,r.Z)({key:String(n)},e))}},6627:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=t(7462),a=(t(7294),t(3905)),l=t(4866),o=t(5162);const i={},s="flash.nvim",u={unversionedId:"plugins/extras/editor.flash",id:"plugins/extras/editor.flash",title:"flash.nvim",description:"flash.nvim lets you navigate your code with search labels,",source:"@site/docs/plugins/extras/editor.flash.md",sourceDirName:"plugins/extras",slug:"/plugins/extras/editor.flash",permalink:"/plugins/extras/editor.flash",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/master/docs/plugins/extras/editor.flash.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DAP Neovim Lua Adapter",permalink:"/plugins/extras/dap.nlua"},next:{title:"Mini Files",permalink:"/plugins/extras/editor.mini-files"}},c={},p=[{value:"flash.nvim",id:"flashnvim-1",level:2},{value:"telescope.nvim",id:"telescopenvim",level:2}],m={toc:p};function f(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"flashnvim"},(0,a.kt)("inlineCode",{parentName:"h1"},"flash.nvim")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"flash.nvim")," lets you navigate your code with search labels,\nenhanced character motions, and Treesitter integration."),(0,a.kt)("p",null,"This ",(0,a.kt)("strong",{parentName:"p"},"extra")," will disable ",(0,a.kt)("inlineCode",{parentName:"p"},"leap.nvim")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"flit.nvim"),"."),(0,a.kt)("p",null,"To use this, add it to your ",(0,a.kt)("strong",{parentName:"p"},"lazy.nvim")," imports:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="lua/config/lazy.lua" {4}',title:'"lua/config/lazy.lua"',"{4}":!0},'require("lazy").setup({\n  spec = {\n    { "LazyVim/LazyVim", import = "lazyvim.plugins" },\n    { import = "lazyvim.plugins.extras.editor.flash" },\n    { import = "plugins" },\n  },\n})\n')),(0,a.kt)("h2",{id:"flashnvim-1"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/folke/flash.nvim"},"flash.nvim")),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"opts = {}\n"))),(0,a.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "folke/flash.nvim",\n  event = "VeryLazy",\n  vscode = true,\n  ---@type Flash.Config\n  opts = {},\n  keys = {\n    {\n      "s",\n      mode = { "n", "x", "o" },\n      function()\n        require("flash").jump()\n      end,\n      desc = "Flash",\n    },\n    {\n      "S",\n      mode = { "n", "o", "x" },\n      function()\n        require("flash").treesitter()\n      end,\n      desc = "Flash Treesitter",\n    },\n    {\n      "r",\n      mode = "o",\n      function()\n        require("flash").remote()\n      end,\n      desc = "Remote Flash",\n    },\n    {\n      "R",\n      mode = { "o", "x" },\n      function()\n        require("flash").treesitter_search()\n      end,\n      desc = "Treesitter Search",\n    },\n    {\n      "<c-s>",\n      mode = { "c" },\n      function()\n        require("flash").toggle()\n      end,\n      desc = "Toggle Flash Search",\n    },\n  },\n}\n')))),(0,a.kt)("h2",{id:"telescopenvim"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/nvim-telescope/telescope.nvim"},"telescope.nvim")),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function(_, opts)\n  local function flash(prompt_bufnr)\n    require("flash").jump({\n      pattern = "^",\n      label = { after = { 0, 0 } },\n      search = {\n        mode = "search",\n        exclude = {\n          function(win)\n            return vim.bo[vim.api.nvim_win_get_buf(win)].filetype ~= "TelescopeResults"\n          end,\n        },\n      },\n      action = function(match)\n        local picker = require("telescope.actions.state").get_current_picker(prompt_bufnr)\n        picker:set_selection(match.pos[1] - 1)\n      end,\n    })\n  end\n  opts.defaults = vim.tbl_deep_extend("force", opts.defaults or {}, {\n    mappings = {\n      n = { s = flash },\n      i = { ["<c-s>"] = flash },\n    },\n  })\nend\n'))),(0,a.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvim-telescope/telescope.nvim",\n  optional = true,\n  opts = function(_, opts)\n    local function flash(prompt_bufnr)\n      require("flash").jump({\n        pattern = "^",\n        label = { after = { 0, 0 } },\n        search = {\n          mode = "search",\n          exclude = {\n            function(win)\n              return vim.bo[vim.api.nvim_win_get_buf(win)].filetype ~= "TelescopeResults"\n            end,\n          },\n        },\n        action = function(match)\n          local picker = require("telescope.actions.state").get_current_picker(prompt_bufnr)\n          picker:set_selection(match.pos[1] - 1)\n        end,\n      })\n    end\n    opts.defaults = vim.tbl_deep_extend("force", opts.defaults or {}, {\n      mappings = {\n        n = { s = flash },\n        i = { ["<c-s>"] = flash },\n      },\n    })\n  end,\n}\n')))))}f.isMDXComponent=!0}}]);