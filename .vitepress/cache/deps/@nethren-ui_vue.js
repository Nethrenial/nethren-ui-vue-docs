import {
  Teleport,
  Transition,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  mergeProps,
  normalizeClass,
  openBlock,
  popScopeId,
  pushScopeId,
  ref,
  renderSlot,
  toDisplayString,
  toRefs,
  unref,
  useCssVars,
  withCtx,
  withKeys
} from "./chunk-G3CMYKT2.js";

// node_modules/@nethren-ui/vue/dist/nethren-ui.js
var j = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  class: "n-button__spinner"
};
var z = createBaseVNode("path", {
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
var W = [
  z
];
var D = defineComponent({
  __name: "CircleSpinner",
  setup(e) {
    return defineComponent({
      name: "CircleSpinner"
    }), (s, a) => (openBlock(), createElementBlock("svg", j, W));
  }
});
var G = defineComponent({
  __name: "NButton",
  props: {
    mode: { default: "solid" },
    color: { default: "primary" },
    isLoading: { type: Boolean, default: false },
    loadingText: { default: void 0 },
    size: { default: "normal" }
  },
  setup(e) {
    const s = e, { color: a, mode: n, isLoading: o, loadingText: c, size: i } = toRefs(s);
    return (l, d) => (openBlock(), createElementBlock("button", {
      class: normalizeClass(["n-button", [`n--${unref(a)}`, `n-button--${unref(a)}`, `n-button--${unref(i)}`, `n-button--${unref(n)}`, unref(o) ? "n-button--loading" : ""]])
    }, [
      unref(o) ? (openBlock(), createBlock(D, {
        key: 0,
        class: "n-button__spinner"
      })) : createCommentVNode("", true),
      unref(o) ? createCommentVNode("", true) : renderSlot(l.$slots, "leftIcon", { key: 1 }),
      !unref(o) || unref(o) && !unref(c) ? renderSlot(l.$slots, "default", { key: 2 }) : createCommentVNode("", true),
      createTextVNode(" " + toDisplayString(unref(o) && unref(c) ? unref(c) : "") + " ", 1),
      unref(o) ? createCommentVNode("", true) : renderSlot(l.$slots, "rightIcon", {
        key: 3,
        class: "n-button__icon"
      })
    ], 2));
  }
});
var Ee = {
  install(e) {
    e.component("n-button", G);
  }
};
var X = ["aria-label", "aria-checked", "onKeydown", "onKeyup", "for"];
var F = ["value"];
var J = createBaseVNode("span", { class: "n-switch__thumb" }, null, -1);
var Q = defineComponent({
  inheritAttrs: false,
  __name: "NSwitch",
  props: {
    modelValue: { type: Boolean },
    color: { default: "primary" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: s }) {
    const a = e, { modelValue: n, color: o } = toRefs(a);
    function c(f) {
      if (f instanceof KeyboardEvent) {
        if (f.repeat)
          return;
        d();
      }
      s("update:modelValue", !n.value);
    }
    const i = ref(false), l = ref("right");
    function d() {
      i.value = true, n.value ? l.value = "right" : l.value = "left";
    }
    function h() {
      i.value = false;
    }
    const k = computed(() => i.value ? `n-switch--hold-${l.value}` : "");
    return (f, C) => (openBlock(), createElementBlock("label", {
      class: normalizeClass(["n-switch", [`n--${unref(o)}`, `n-switch--${unref(o)}`, unref(n) ? "n-switch--checked" : "", i.value ? "n-switch--hold" : "", k.value]]),
      tabindex: "0",
      role: "switch",
      "aria-label": f.$attrs["aria-label"],
      "aria-checked": unref(n),
      onKeydown: [
        withKeys(c, ["enter"]),
        withKeys(c, ["space"])
      ],
      onKeyup: [
        withKeys(h, ["enter"]),
        withKeys(h, ["space"])
      ],
      onClick: c,
      onMousedown: d,
      onMouseup: h,
      for: f.$attrs.id
    }, [
      createBaseVNode("input", mergeProps({
        type: "checkbox",
        class: "n-switch__input",
        "aria-invalid": "false",
        "aria-disabled": "false",
        disabled: "",
        value: unref(n)
      }, f.$attrs, { "aria-label": "" }), null, 16, F),
      J
    ], 42, X));
  }
});
var qe = {
  install(e) {
    e.component("n-switch", Q);
  }
};
var U = (e) => (pushScopeId("data-v-3ef5a0ce"), e = e(), popScopeId(), e);
var Y = {
  width: "24",
  height: "24",
  viewBox: "0 0 100 100"
};
var ee = U(() => createBaseVNode("path", {
  d: "M20 50 L45 75 L80 30",
  stroke: "black",
  fill: "transparent"
}, null, -1));
var te = [
  ee
];
var oe = defineComponent({
  __name: "AnimatedCheckmark",
  props: {
    strokeColor: { default: "white" }
  },
  setup(e) {
    const s = e;
    useCssVars((n) => ({
      "55f76663": unref(a)
    }));
    const { strokeColor: a } = toRefs(s);
    return (n, o) => (openBlock(), createElementBlock("svg", Y, te));
  }
});
var I = (e, s) => {
  const a = e.__vccOpts || e;
  for (const [n, o] of s)
    a[n] = o;
  return a;
};
var ne = I(oe, [["__scopeId", "data-v-3ef5a0ce"]]);
var se = ["aria-label", "aria-checked", "onKeydown", "onKeyup", "for"];
var ae = ["value"];
var le = defineComponent({
  inheritAttrs: false,
  __name: "NCheckbox",
  props: {
    modelValue: { type: Boolean },
    color: { default: "primary" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: s }) {
    const a = e, { modelValue: n } = toRefs(a);
    function o(d) {
      if (d instanceof KeyboardEvent) {
        if (d.repeat)
          return;
        i();
      }
      s("update:modelValue", !n.value);
    }
    const c = ref(false);
    function i() {
      c.value = true;
    }
    function l() {
      c.value = false;
    }
    return (d, h) => (openBlock(), createElementBlock("label", {
      class: normalizeClass(["n-checkbox", [`n--${d.color}`, `n-checkbox--${d.color}`, unref(n) ? "n-checkbox--checked" : "", c.value ? "n-checkbox--hold" : ""]]),
      tabindex: "0",
      role: "checkbox",
      "aria-label": d.$attrs["aria-label"],
      "aria-checked": unref(n),
      onKeydown: [
        withKeys(o, ["enter"]),
        withKeys(o, ["space"])
      ],
      onKeyup: [
        withKeys(l, ["enter"]),
        withKeys(l, ["space"])
      ],
      onClick: o,
      onMousedown: i,
      onMouseup: l,
      for: d.$attrs.id
    }, [
      unref(n) ? (openBlock(), createBlock(ne, {
        key: 0,
        class: "n-checkbox__check",
        "stroke-color": "var(--n-component-normal-text-color)"
      })) : createCommentVNode("", true),
      createBaseVNode("input", mergeProps({
        type: "checkbox",
        class: "n-checkbox__input"
      }, d.$attrs, {
        "aria-invalid": "false",
        "aria-disabled": "false",
        disabled: "",
        value: unref(n),
        "aria-label": ""
      }), null, 16, ae)
    ], 42, se));
  }
});
var He = {
  install(e) {
    e.component("n-switch", le);
  }
};
var ce = {
  name: "OpenEye"
};
var re = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24"
};
var ie = createBaseVNode("path", {
  fill: "currentColor",
  d: "M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0Z"
}, null, -1);
var de = [
  ie
];
function ue(e, s, a, n, o, c) {
  return openBlock(), createElementBlock("svg", re, de);
}
var _e = I(ce, [["render", ue]]);
var fe = {
  name: "ClosedEye"
};
var pe = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24"
};
var he = createBaseVNode("path", {
  fill: "currentColor",
  d: "M2 5.27L3.28 4L20 20.72L18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58c-5 0-9.27-3.11-11-7.5c.69-1.76 1.79-3.31 3.19-4.54L2 5.27M12 9a3 3 0 0 1 3 3a3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.79 11.79 0 0 1-4 5.19l-1.42-1.43A9.862 9.862 0 0 0 20.82 12A9.821 9.821 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.821 9.821 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13Z"
}, null, -1);
var me = [
  he
];
function be(e, s, a, n, o, c) {
  return openBlock(), createElementBlock("svg", pe, me);
}
var ye = I(fe, [["render", be]]);
var ve = ["for"];
var $e = {
  key: 0,
  class: "n-input__required-indicator"
};
var ge = ["type", "value"];
var we = { key: 1 };
var ke = { class: "n-input__error" };
var Ce = defineComponent({
  inheritAttrs: false,
  __name: "NInput",
  props: {
    modelValue: {},
    withVisibilityToggle: { type: Boolean, default: false },
    errors: { default: () => [] },
    label: { default: void 0 },
    wrapperAttrs: { default: () => ({}) },
    labelAttrs: { default: () => ({}) },
    color: { default: "primary" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: s }) {
    const a = e, { modelValue: n, label: o, type: c, errors: i, required: l, withVisibilityToggle: d, color: h, wrapperAttrs: k, labelAttrs: f } = toRefs(a);
    function C(N) {
      s("update:modelValue", N.target.value);
    }
    const $ = ref(false);
    function x() {
      $.value = !$.value;
    }
    return (N, Oe) => (openBlock(), createElementBlock("div", mergeProps({
      class: ["n-input", [`n--${unref(h)}`, `n-input--${unref(h)}`]]
    }, unref(k)), [
      unref(o) ? (openBlock(), createElementBlock("label", mergeProps({
        key: 0,
        for: N.$attrs.id,
        class: "n-input__label"
      }, unref(f)), [
        createTextVNode(toDisplayString(unref(o)) + " ", 1),
        unref(l) ? (openBlock(), createElementBlock("sup", $e, "*")) : createCommentVNode("", true)
      ], 16, ve)) : createCommentVNode("", true),
      createBaseVNode("input", mergeProps({
        type: $.value ? "text" : unref(c),
        value: unref(n),
        class: "n-input__input",
        onChange: C,
        onInput: C
      }, N.$attrs), null, 16, ge),
      unref(i) && unref(i).length > 0 ? (openBlock(), createElementBlock("div", we, [
        createBaseVNode("span", ke, toDisplayString(unref(i)[0]), 1)
      ])) : createCommentVNode("", true),
      unref(d) ? (openBlock(), createElementBlock("button", {
        key: 2,
        type: "button",
        class: "n-input__visibility",
        onClick: x
      }, [
        $.value ? (openBlock(), createBlock(_e, { key: 0 })) : (openBlock(), createBlock(ye, { key: 1 }))
      ])) : createCommentVNode("", true)
    ], 16));
  }
});
var Ke = {
  install(e) {
    e.component("n-switch", Ce);
  }
};
var xe = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24"
};
var Ne = createBaseVNode("path", {
  fill: "currentColor",
  d: "m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275L12 13.4Z"
}, null, -1);
var Me = [
  Ne
];
var Be = defineComponent({
  name: "MaterialSymbolsCloseRounded",
  __name: "XMark",
  setup(e) {
    return (s, a) => (openBlock(), createElementBlock("svg", xe, Me));
  }
});
var Ae = { class: "n-modal-header" };
var Se = { class: "n-modal-body" };
var Ve = { class: "n-modal-footer" };
var Ie = defineComponent({
  __name: "NModal",
  props: {
    closeOnOutsideClick: { type: Boolean, default: true },
    witchCloseButton: { type: Boolean },
    lockScroll: { type: Boolean, default: true },
    modelAttrs: { default: () => ({}) },
    modelOverlayAttrs: { default: () => ({}) },
    color: { default: "primary" }
  },
  setup(e, { expose: s }) {
    const a = e, { closeOnOutsideClick: n, lockScroll: o, modelAttrs: c, modelOverlayAttrs: i } = toRefs(a), l = ref(false), d = ref(false), h = ref(0);
    function k() {
      l.value = true, o.value && (h.value = window.innerWidth - document.documentElement.clientWidth, document.body.style.paddingRight = `${h.value}px`, document.body.style.overflow = "hidden");
    }
    function f() {
      l.value = false, o.value && setTimeout(() => {
        document.body.style.overflow = "auto", document.body.style.paddingRight = "0px";
      }, 300);
    }
    function C() {
      l.value = !l.value;
    }
    s({
      openModal: k,
      closeModal: f,
      toggleModal: C
    });
    function $() {
      n.value ? f() : (d.value = true, setTimeout(() => {
        d.value = false;
      }, 500));
    }
    return (x, N) => (openBlock(), createBlock(Teleport, { to: "body" }, [
      createVNode(Transition, { name: "n-modal" }, {
        default: withCtx(() => [
          l.value ? (openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            class: ["n-modal", d.value ? "n-modal--shaking" : ""]
          }, unref(c)), [
            createBaseVNode("header", Ae, [
              createBaseVNode("h3", null, [
                renderSlot(x.$slots, "modal-header")
              ]),
              createBaseVNode("button", {
                class: "n-modal__close-btn",
                onClick: f
              }, [
                createVNode(Be)
              ])
            ]),
            createBaseVNode("div", Se, [
              renderSlot(x.$slots, "modal-body")
            ]),
            createBaseVNode("footer", Ve, [
              renderSlot(x.$slots, "modal-footer")
            ])
          ], 16)) : createCommentVNode("", true)
        ]),
        _: 3
      }),
      createVNode(Transition, {
        name: "n-modal-overlay",
        onClick: $
      }, {
        default: withCtx(() => [
          l.value ? (openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            class: "n-modal-overlay"
          }, unref(i)), null, 16)) : createCommentVNode("", true)
        ]),
        _: 1
      })
    ]));
  }
});
var Pe = {
  install(e) {
    e.component("n-modal", Ie);
  }
};
var Le = ["primary", "secondary", "success", "info", "warning", "danger", "light", "dark"];
function Re(e) {
  return Le.includes(e);
}
function T(e) {
  const s = parseInt(e.slice(1, 3), 16), a = parseInt(e.slice(3, 5), 16), n = parseInt(e.slice(5, 7), 16);
  return `${s}, ${a}, ${n}`;
}
function E(e, s = 1) {
  return s >= 0 && s <= 1 ? `rgba(${T(e)}, ${s})` : `rgb(${T(e)})`;
}
var A = {
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
function Ze(e) {
  e && Object.keys(e).forEach((o) => {
    A[o] = e[o];
  });
  const s = document.querySelector("html"), a = document.createElement("style");
  let n = "html { ";
  Object.keys(A).forEach((o) => {
    const c = A[o];
    c && Object.keys(c).forEach((i) => {
      const l = c[i];
      n += `--n-color-${o}-${i}: ${E(l)};`, n += `--n-color-${o}-${i}-transparent: ${E(l, 0.3)};`;
    });
  }), n += "}", a.innerHTML = n, s == null || s.appendChild(a);
}
export {
  G as NButton,
  Ee as NButtonPlugin,
  le as NCheckbox,
  He as NCheckboxPlugin,
  Ce as NInput,
  Ke as NInputPlugin,
  Ie as NModal,
  Pe as NModalPlugin,
  Q as NSwitch,
  qe as NSwitchPlugin,
  Le as builtinColorNames,
  A as colors,
  E as hexToRGB,
  T as hexToRGBIntegers,
  Re as isBuiltinColorName,
  Ze as setColorPallete
};
//# sourceMappingURL=@nethren-ui_vue.js.map
