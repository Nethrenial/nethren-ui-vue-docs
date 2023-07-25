import {
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  defineComponent,
  mergeProps,
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

// node_modules/@nethren-ui/vue/dist/nethren-ui.js
var K = ["primary", "secondary", "success", "info", "warning", "danger", "light", "dark"];
function P(e) {
  return K.includes(e);
}
function M(e) {
  const o = parseInt(e.slice(1, 3), 16), r = parseInt(e.slice(3, 5), 16), n = parseInt(e.slice(5, 7), 16);
  return `${o}, ${r}, ${n}`;
}
function N(e, o = 1) {
  return o >= 0 && o <= 1 ? `rgba(${M(e)}, ${o})` : `rgb(${M(e)})`;
}
var V = {
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
function we(e) {
  e && Object.keys(e).forEach((a) => {
    V[a] = e[a];
  });
  const o = document.querySelector("html"), r = document.createElement("style");
  let n = "html { ";
  Object.keys(V).forEach((a) => {
    const s = V[a];
    s && Object.keys(s).forEach((c) => {
      const l = s[c];
      console.log(`--n-color-${a}-${c}: ${N(l)};`), n += `--n-color-${a}-${c}: ${N(l)};`, n += `--n-color-${a}-${c}-transparent: ${N(l, 0.3)};`;
    });
  }), n += "}", r.innerHTML = n, o == null || o.appendChild(r);
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
var q = [
  j
];
var R = defineComponent({
  __name: "CircleSpinner",
  setup(e) {
    return defineComponent({
      name: "CircleSpinner"
    }), (o, r) => (openBlock(), createElementBlock("svg", O, q));
  }
});
var Z = defineComponent({
  __name: "NButton",
  props: {
    label: { default: void 0 },
    mode: { default: "solid" },
    isLoading: { type: Boolean, default: false },
    loadingText: { default: void 0 },
    color: { default: "primary" }
  },
  setup(e) {
    const o = e, { label: r, color: n, mode: a, isLoading: s } = toRefs(o), c = computed(() => P(n.value) ? {} : {
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
    return (l, u) => (openBlock(), createElementBlock("button", {
      class: normalizeClass(["n-button", [`n--${unref(n)}`, `n-button--${unref(n)}`, `n-button--${unref(a)}`, unref(s) ? "n-button--loading" : ""]]),
      style: normalizeStyle(c.value)
    }, [
      unref(s) ? (openBlock(), createBlock(R, {
        key: 0,
        class: "n-button__spinner"
      })) : createCommentVNode("", true),
      unref(s) ? createCommentVNode("", true) : renderSlot(l.$slots, "leftIcon", { key: 1 }),
      !unref(s) || unref(s) && !l.loadingText ? renderSlot(l.$slots, "default", { key: 2 }, () => [
        createTextVNode(toDisplayString(unref(r) ? unref(r) : "Please add inner content or a label prop"), 1)
      ]) : createCommentVNode("", true),
      createTextVNode(" " + toDisplayString(unref(s) && l.loadingText ? l.loadingText : "") + " ", 1),
      unref(s) ? createCommentVNode("", true) : renderSlot(l.$slots, "rightIcon", {
        key: 3,
        class: "n-button__icon"
      })
    ], 6));
  }
});
var xe = {
  install(e) {
    e.component("n-button", Z);
  }
};
var z = ["aria-label", "aria-checked", "onKeydown", "onKeyup", "for"];
var D = ["value"];
var G = createBaseVNode("span", { class: "n-switch__thumb" }, null, -1);
var F = defineComponent({
  inheritAttrs: false,
  __name: "NSwitch",
  props: {
    modelValue: { type: Boolean },
    color: { default: "primary" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const r = e, { modelValue: n, color: a } = toRefs(r);
    function s(_) {
      if (_ instanceof KeyboardEvent) {
        if (_.repeat)
          return;
        u();
      }
      o("update:modelValue", !n.value);
    }
    const c = ref(false), l = ref("right");
    function u() {
      c.value = true, n.value ? l.value = "right" : l.value = "left";
    }
    function h() {
      c.value = false;
    }
    const y = computed(() => c.value ? `n-switch--hold-${l.value}` : "");
    return (_, m) => (openBlock(), createElementBlock("label", {
      class: normalizeClass(["n-switch", [`n--${unref(a)}`, `n-switch--${unref(a)}`, unref(n) ? "n-switch--checked" : "", c.value ? "n-switch--hold" : "", y.value]]),
      tabindex: "0",
      role: "switch",
      "aria-label": _.$attrs["aria-label"],
      "aria-checked": unref(n),
      onKeydown: [
        withKeys(s, ["enter"]),
        withKeys(s, ["space"])
      ],
      onKeyup: [
        withKeys(h, ["enter"]),
        withKeys(h, ["space"])
      ],
      onClick: s,
      onMousedown: u,
      onMouseup: h,
      for: _.$attrs.id
    }, [
      createBaseVNode("input", mergeProps({
        type: "checkbox",
        class: "n-switch__input",
        "aria-invalid": "false",
        "aria-disabled": "false",
        disabled: "",
        value: unref(n)
      }, _.$attrs), null, 16, D),
      G
    ], 42, z));
  }
});
var Ce = {
  install(e) {
    e.component("n-switch", F);
  }
};
var J = (e) => (pushScopeId("data-v-68ca03b6"), e = e(), popScopeId(), e);
var Q = {
  width: "24",
  height: "24",
  viewBox: "0 0 100 100"
};
var U = J(() => createBaseVNode("path", {
  d: "M20 50 L45 75 L80 30",
  stroke: "black",
  fill: "transparent"
}, null, -1));
var W = [
  U
];
var X = defineComponent({
  __name: "AnimatedCheckmark",
  props: {
    strokeColor: { default: "white" }
  },
  setup(e) {
    const o = e;
    useCssVars((n) => ({
      "1edff7fe": unref(r)
    }));
    const { strokeColor: r } = toRefs(o);
    return (n, a) => (openBlock(), createElementBlock("svg", Q, W));
  }
});
var I = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [n, a] of o)
    r[n] = a;
  return r;
};
var Y = I(X, [["__scopeId", "data-v-68ca03b6"]]);
var ee = ["aria-label", "aria-checked", "onKeydown", "onKeyup", "for"];
var te = ["value"];
var ne = defineComponent({
  inheritAttrs: false,
  __name: "NCheckbox",
  props: {
    modelValue: { type: Boolean },
    color: { default: "primary" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const r = e, { modelValue: n } = toRefs(r);
    function a(u) {
      if (u instanceof KeyboardEvent) {
        if (u.repeat)
          return;
        c();
      }
      o("update:modelValue", !n.value);
    }
    const s = ref(false);
    function c() {
      s.value = true;
    }
    function l() {
      s.value = false;
    }
    return (u, h) => (openBlock(), createElementBlock("label", {
      class: normalizeClass(["n-checkbox", [`n--${u.color}`, `n-checkbox--${u.color}`, unref(n) ? "n-checkbox--checked" : "", s.value ? "n-checkbox--hold" : ""]]),
      tabindex: "0",
      role: "checkbox",
      "aria-label": u.$attrs["aria-label"],
      "aria-checked": unref(n),
      onKeydown: [
        withKeys(a, ["enter"]),
        withKeys(a, ["space"])
      ],
      onKeyup: [
        withKeys(l, ["enter"]),
        withKeys(l, ["space"])
      ],
      onClick: a,
      onMousedown: c,
      onMouseup: l,
      for: u.$attrs.id
    }, [
      unref(n) ? (openBlock(), createBlock(Y, {
        key: 0,
        class: "n-checkbox__check",
        "stroke-color": "var(--n-component-normal-text-color)"
      })) : createCommentVNode("", true),
      createBaseVNode("input", mergeProps({
        type: "checkbox",
        class: "n-checkbox__input"
      }, u.$attrs, {
        "aria-invalid": "false",
        "aria-disabled": "false",
        disabled: "",
        value: unref(n)
      }), null, 16, te)
    ], 42, ee));
  }
});
var Ne = {
  install(e) {
    e.component("n-switch", ne);
  }
};
var oe = {
  name: "OpenEye"
};
var ae = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24"
};
var se = createBaseVNode("path", {
  fill: "currentColor",
  d: "M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0Z"
}, null, -1);
var re = [
  se
];
function le(e, o, r, n, a, s) {
  return openBlock(), createElementBlock("svg", ae, re);
}
var ce = I(oe, [["render", le]]);
var ie = {
  name: "ClosedEye"
};
var ue = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24"
};
var de = createBaseVNode("path", {
  fill: "currentColor",
  d: "M2 5.27L3.28 4L20 20.72L18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58c-5 0-9.27-3.11-11-7.5c.69-1.76 1.79-3.31 3.19-4.54L2 5.27M12 9a3 3 0 0 1 3 3a3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.79 11.79 0 0 1-4 5.19l-1.42-1.43A9.862 9.862 0 0 0 20.82 12A9.821 9.821 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.821 9.821 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13Z"
}, null, -1);
var pe = [
  de
];
function fe(e, o, r, n, a, s) {
  return openBlock(), createElementBlock("svg", ue, pe);
}
var _e = I(ie, [["render", fe]]);
var be = ["for"];
var he = {
  key: 0,
  class: "n-input__required-indicator"
};
var me = ["type", "value"];
var ve = { key: 1 };
var ye = { class: "n-input__error" };
var ge = defineComponent({
  inheritAttrs: false,
  __name: "NInput",
  props: {
    modelValue: {},
    type: { default: "text" },
    withVisibilityToggle: { type: Boolean, default: false },
    errors: {},
    label: { default: void 0 },
    color: { default: "primary" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const r = e, { modelValue: n, label: a, type: s, errors: c, required: l, withVisibilityToggle: u } = toRefs(r);
    function h(m) {
      o("update:modelValue", m.target.value);
    }
    const y = ref(false);
    function _() {
      y.value = !y.value;
    }
    return (m, $e) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["n-input", [`n--${m.color}`, `n-input--${m.color}`]])
    }, [
      unref(a) ? (openBlock(), createElementBlock("label", {
        key: 0,
        for: m.$attrs.id,
        class: "n-input__label"
      }, [
        createTextVNode(toDisplayString(unref(a)) + " ", 1),
        unref(l) ? (openBlock(), createElementBlock("sup", he, "*")) : createCommentVNode("", true)
      ], 8, be)) : createCommentVNode("", true),
      createBaseVNode("input", mergeProps({
        type: y.value ? "text" : unref(s),
        value: unref(n),
        class: "n-input__input",
        onChange: h,
        onInput: h
      }, m.$attrs), null, 16, me),
      unref(c) && unref(c).length > 0 ? (openBlock(), createElementBlock("div", ve, [
        createBaseVNode("span", ye, toDisplayString(unref(c)[0]), 1)
      ])) : createCommentVNode("", true),
      unref(u) ? (openBlock(), createElementBlock("button", {
        key: 2,
        type: "button",
        class: "n-input__visibility",
        onClick: _
      }, [
        y.value ? (openBlock(), createBlock(ce, { key: 0 })) : (openBlock(), createBlock(_e, { key: 1 }))
      ])) : createCommentVNode("", true)
    ], 2));
  }
});
var Ve = {
  install(e) {
    e.component("n-switch", ge);
  }
};
export {
  Z as NButton,
  xe as NButtonPlugin,
  ne as NCheckbox,
  Ne as NCheckboxPlugin,
  ge as NInput,
  Ve as NInputPlugin,
  F as NSwitch,
  Ce as NSwitchPlugin,
  K as builtinColorNames,
  V as colors,
  N as hexToRGB,
  M as hexToRGBIntegers,
  P as isBuiltinColorName,
  we as setColorPallete
};
//# sourceMappingURL=@nethren-ui_vue.js.map
