import {
  Fragment,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  defineComponent,
  normalizeClass,
  normalizeStyle,
  openBlock,
  popScopeId,
  pushScopeId,
  ref,
  renderSlot,
  toDisplayString,
  toRefs,
  unref,
  useCssVars,
  withKeys
} from "./chunk-G3CMYKT2.js";
import "./chunk-UGBRVHZY.js";

// node_modules/@nethren-ui/vue/dist/nethren-ui.js
var P = ["primary", "secondary", "success", "info", "warning", "danger", "light", "dark"];
function q(t) {
  return P.includes(t);
}
function V(t) {
  const o = parseInt(t.slice(1, 3), 16), l = parseInt(t.slice(3, 5), 16), n = parseInt(t.slice(5, 7), 16);
  return `${o}, ${l}, ${n}`;
}
function C(t, o = 1) {
  return o >= 0 && o <= 1 ? `rgba(${V(t)}, ${o})` : `rgb(${V(t)})`;
}
var N = {
  primary: {
    50: "#e8eaff",
    100: "#c0c2f5",
    200: "#9799e8",
    300: "#6f70de",
    400: "#4647d3",
    500: "#2c2db9",
    600: "#212391",
    700: "#171969",
    800: "#0c0e41",
    900: "#04041c"
  },
  secondary: {
    50: "#fbfbdf",
    100: "#f0f0bc",
    200: "#e7e695",
    300: "#dddc6e",
    400: "#d3d246",
    500: "#b9b82c",
    600: "#908f20",
    700: "#676614",
    800: "#3e3d09",
    900: "#161400"
  },
  success: {
    50: "#e2fbed",
    100: "#c2ebd4",
    200: "#9fddb9",
    300: "#7ccf9e",
    400: "#58c184",
    500: "#3ea76a",
    600: "#2e8251",
    700: "#1f5d3a",
    800: "#0f3921",
    900: "#001506"
  },
  warning: {
    50: "#fff8de",
    100: "#f9eab6",
    200: "#f3dc8b",
    300: "#eecf5e",
    400: "#e9c131",
    500: "#d0a719",
    600: "#a18211",
    700: "#735d09",
    800: "#453802",
    900: "#191300"
  },
  info: {
    50: "#e5eeff",
    100: "#b9cbfb",
    200: "#8da9f3",
    300: "#6186eb",
    400: "#3564e4",
    500: "#1b4aca",
    600: "#123abd",
    700: "#0a2972",
    800: "#031947",
    900: "#00081d"
  },
  danger: {
    50: "#ffe4e4",
    100: "#fcb8b8",
    200: "#f48c8c",
    300: "#ee5e5e",
    400: "#e73131",
    500: "#ce1818",
    600: "#a11011",
    700: "#73090b",
    800: "#480405",
    900: "#1f0000"
  },
  light: {
    50: "#ffffff",
    100: "#fefefe",
    200: "#fdfdfd",
    300: "#fcfcfc",
    400: "#fbfbfb",
    500: "#fafafa",
    600: "#e6e6e6",
    700: "#bfbfbf",
    800: "#999999",
    900: "#737373"
  },
  dark: {
    50: "#666666",
    100: "#555555",
    200: "#444444",
    300: "#333333",
    400: "#222222",
    500: "#151515",
    600: "#121212",
    700: "#0f0f0f",
    800: "#0d0d0d",
    900: "#000000"
  }
};
function fe(t) {
  t && Object.keys(t).forEach((r) => {
    N[r] = t[r];
  });
  const o = document.querySelector("html"), l = document.createElement("style");
  let n = "html { ";
  Object.keys(N).forEach((r) => {
    const c = N[r];
    c && Object.keys(c).forEach((s) => {
      const a = c[s];
      console.log(`--n-color-${r}-${s}: ${C(a)};`), n += `--n-color-${r}-${s}: ${C(a)};`, n += `--n-color-${r}-${s}-transparent: ${C(a, 0.3)};`;
    });
  }), n += "}", l.innerHTML = n, o == null || o.appendChild(l);
}
var O = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  class: "n-button__spinner"
};
var j = createBaseVNode("path", {
  fill: "currentColor",
  d: "M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
}, [
  createBaseVNode("animateTransform", {
    attributeName: "transform",
    dur: "0.75s",
    repeatCount: "indefinite",
    type: "rotate",
    values: "0 12 12;360 12 12"
  })
], -1);
var R = [
  j
];
var z = defineComponent({
  __name: "CircleSpinner",
  setup(t) {
    return defineComponent({
      name: "CircleSpinner"
    }), (o, l) => (openBlock(), createElementBlock("svg", O, R));
  }
});
var D = defineComponent({
  __name: "NButton",
  props: {
    label: { default: void 0 },
    mode: { default: "solid" },
    isLoading: { type: Boolean, default: false },
    loadingText: { default: void 0 },
    color: { default: "primary" }
  },
  setup(t) {
    const o = t, { label: l, color: n, mode: r, isLoading: c } = toRefs(o), s = computed(() => q(n.value) ? {} : {
      // set colors for solid buttons
      "--n-button-solid-bg": "var(--n-color-primary-400)",
      "--n-button-solid-bg-hover": "var(--n-color-primary-500)",
      "--n-button-solid-bg-active": "var(--n-color-primary-600)",
      "--n-button-solid-bg-disabled": "var(--n-color-primary-200)",
      "--n-button-solid-text": "var(--n-color-primary-50)",
      // set colors for outline buttons
      "--n-button-outline-bg": "transparent",
      "--n-button-outline-bg-hover": "var(--n-color-primary-50)",
      "--n-button-outline-bg-active": "var(--n-color-primary-100)",
      "--n-button-outline-bg-disabled": "transparent",
      "--n-button-outline-text": "var(--n-color-primary-400)",
      "--n-button-outline-outline": "var(--n-color-primary-400)",
      // set colors for text buttons
      "--n-button-text-bg": "transparent",
      "--n-button-text-bg-hover": "var(--n-color-primary-50)",
      "--n-button-text-bg-active": "var(--n-color-primary-100)",
      "--n-button-text-bg-disabled": "transparent",
      "--n-button-text-text": "var(--n-color-primary-400)"
    });
    return (a, u) => (openBlock(), createElementBlock("button", {
      class: normalizeClass(["n-button", [`n--${unref(n)}`, `n-button--${unref(n)}`, `n-button--${unref(r)}`, unref(c) ? "n-button--loading" : ""]]),
      style: normalizeStyle(s.value)
    }, [
      unref(c) ? (openBlock(), createBlock(z, {
        key: 0,
        class: "n-button__spinner"
      })) : createCommentVNode("", true),
      unref(c) ? createCommentVNode("", true) : renderSlot(a.$slots, "leftIcon", { key: 1 }),
      !unref(c) || unref(c) && !a.loadingText ? renderSlot(a.$slots, "default", { key: 2 }, () => [
        createTextVNode(toDisplayString(unref(l) ? unref(l) : "Please add inner content or a label prop"), 1)
      ]) : createCommentVNode("", true),
      createTextVNode(" " + toDisplayString(unref(c) && a.loadingText ? a.loadingText : "") + " ", 1),
      unref(c) ? createCommentVNode("", true) : renderSlot(a.$slots, "rightIcon", {
        key: 3,
        class: "n-button__icon"
      })
    ], 6));
  }
});
var _e = {
  install(t) {
    t.component("n-button", D);
  }
};
var G = ["aria-label", "aria-checked", "onKeydown", "onKeyup"];
var F = ["id", "value"];
var Z = createBaseVNode("span", { class: "n-switch__thumb" }, null, -1);
var J = defineComponent({
  __name: "NSwitch",
  props: {
    modelValue: { type: Boolean },
    ariaLabel: {},
    id: {},
    color: { default: "primary" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: o }) {
    const l = t, { modelValue: n, ariaLabel: r, color: c, id: s } = toRefs(l);
    function a(b) {
      if (b instanceof KeyboardEvent) {
        if (b.repeat)
          return;
        i();
      }
      o("update:modelValue", !n.value);
    }
    const u = ref(false), f = ref("right");
    function i() {
      u.value = true, n.value ? f.value = "right" : f.value = "left";
    }
    function y() {
      u.value = false;
    }
    const k = computed(() => u.value ? `n-switch--hold-${f.value}` : "");
    return (b, T) => (openBlock(), createElementBlock("label", {
      class: normalizeClass(["n-switch", [`n--${unref(c)}`, `n-switch--${unref(c)}`, unref(n) ? "n-switch--checked" : "", u.value ? "n-switch--hold" : "", k.value]]),
      tabindex: "0",
      role: "switch",
      "aria-label": unref(r),
      "aria-checked": unref(n),
      onKeydown: [
        withKeys(a, ["enter"]),
        withKeys(a, ["space"])
      ],
      onKeyup: [
        withKeys(y, ["enter"]),
        withKeys(y, ["space"])
      ],
      onClick: a,
      onMousedown: i,
      onMouseup: y
    }, [
      createBaseVNode("input", {
        type: "checkbox",
        class: "n-switch__input",
        id: unref(s),
        "aria-invalid": "false",
        "aria-disabled": "false",
        disabled: "",
        value: unref(n)
      }, null, 8, F),
      Z
    ], 42, G));
  }
});
var be = {
  install(t) {
    t.component("n-switch", J);
  }
};
var Q = (t) => (pushScopeId("data-v-68ca03b6"), t = t(), popScopeId(), t);
var U = {
  width: "24",
  height: "24",
  viewBox: "0 0 100 100"
};
var W = Q(() => createBaseVNode("path", {
  d: "M20 50 L45 75 L80 30",
  stroke: "black",
  fill: "transparent"
}, null, -1));
var X = [
  W
];
var Y = defineComponent({
  __name: "AnimatedCheckmark",
  props: {
    strokeColor: { default: "white" }
  },
  setup(t) {
    const o = t;
    useCssVars((n) => ({
      "1edff7fe": unref(l)
    }));
    const { strokeColor: l } = toRefs(o);
    return (n, r) => (openBlock(), createElementBlock("svg", U, X));
  }
});
var ee = (t, o) => {
  const l = t.__vccOpts || t;
  for (const [n, r] of o)
    l[n] = r;
  return l;
};
var te = ee(Y, [["__scopeId", "data-v-68ca03b6"]]);
var ne = ["aria-label", "aria-checked", "onKeydown", "onKeyup"];
var oe = ["id", "name", "value"];
var ae = defineComponent({
  __name: "NCheckbox",
  props: {
    modelValue: { type: Boolean },
    id: {},
    name: {},
    ariaLabel: {},
    color: { default: "primary" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: o }) {
    const l = t, { modelValue: n, id: r, name: c } = toRefs(l);
    function s(i) {
      if (i instanceof KeyboardEvent) {
        if (i.repeat)
          return;
        u();
      }
      o("update:modelValue", !n.value);
    }
    const a = ref(false);
    function u() {
      a.value = true;
    }
    function f() {
      a.value = false;
    }
    return (i, y) => (openBlock(), createElementBlock("label", {
      class: normalizeClass(["n-checkbox", [`n--${i.color}`, `n-checkbox--${i.color}`, unref(n) ? "n-checkbox--checked" : "", a.value ? "n-checkbox--hold" : ""]]),
      tabindex: "0",
      role: "switch",
      "aria-label": i.ariaLabel,
      "aria-checked": unref(n),
      onKeydown: [
        withKeys(s, ["enter"]),
        withKeys(s, ["space"])
      ],
      onKeyup: [
        withKeys(f, ["enter"]),
        withKeys(f, ["space"])
      ],
      onClick: s,
      onMousedown: u,
      onMouseup: f
    }, [
      unref(n) ? (openBlock(), createBlock(te, {
        key: 0,
        class: "n-checkbox__check",
        "stroke-color": "var(--n-component-normal-text-color)"
      })) : createCommentVNode("", true),
      createBaseVNode("input", {
        type: "checkbox",
        class: "n-checkbox__input",
        id: unref(r),
        name: unref(c),
        "aria-invalid": "false",
        "aria-disabled": "false",
        disabled: "",
        value: unref(n)
      }, null, 8, oe)
    ], 42, ne));
  }
});
var he = {
  install(t) {
    t.component("n-switch", ae);
  }
};
var le = ["for"];
var re = {
  key: 0,
  class: "n-input__required-indicator"
};
var ce = ["type", "name", "id", "value", "placeholder", "disabled"];
var se = { key: 1 };
var ie = { class: "n-input__error" };
var de = createBaseVNode("label", null, null, -1);
var ue = defineComponent({
  __name: "NInput",
  props: {
    modelValue: {},
    id: {},
    name: {},
    label: { default: void 0 },
    placeholder: { default: void 0 },
    disabled: { type: Boolean, default: false },
    type: { default: "text" },
    errors: {},
    required: { type: Boolean, default: true },
    color: { default: "primary" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: o }) {
    const l = t, { modelValue: n, id: r, name: c, label: s, placeholder: a, disabled: u, type: f, errors: i, required: y } = toRefs(l);
    function k(b) {
      o("update:modelValue", b.target.value);
    }
    return (b, T) => (openBlock(), createElementBlock(Fragment, null, [
      createBaseVNode("div", {
        class: normalizeClass(["n-input", [`n--${b.color}`, `n-input--${b.color}`]])
      }, [
        unref(s) ? (openBlock(), createElementBlock("label", {
          key: 0,
          for: unref(r),
          class: "n-input__label"
        }, [
          createTextVNode(toDisplayString(unref(s)) + " ", 1),
          unref(y) ? (openBlock(), createElementBlock("sup", re, "*")) : createCommentVNode("", true)
        ], 8, le)) : createCommentVNode("", true),
        createBaseVNode("input", {
          type: unref(f),
          name: unref(c),
          id: unref(r),
          value: unref(n),
          placeholder: unref(a),
          disabled: unref(u),
          class: "n-input__input",
          onChange: k,
          onInput: k
        }, null, 40, ce),
        unref(i) && unref(i).length > 0 ? (openBlock(), createElementBlock("div", se, [
          createBaseVNode("span", ie, toDisplayString(unref(i)[0]), 1)
        ])) : createCommentVNode("", true)
      ], 2),
      de
    ], 64));
  }
});
var me = {
  install(t) {
    t.component("n-switch", ue);
  }
};
export {
  D as NButton,
  _e as NButtonPlugin,
  ae as NCheckbox,
  he as NCheckboxPlugin,
  ue as NInput,
  me as NInputPlugin,
  J as NSwitch,
  be as NSwitchPlugin,
  P as builtinColorNames,
  N as colors,
  C as hexToRGB,
  V as hexToRGBIntegers,
  q as isBuiltinColorName,
  fe as setColorPallete
};
//# sourceMappingURL=@nethren-ui_vue.js.map
