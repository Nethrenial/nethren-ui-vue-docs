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
  useSlots,
  withCtx,
  withKeys
} from "./chunk-G3CMYKT2.js";

// node_modules/@nethren-ui/vue/dist/nethren-ui.js
var G = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  class: "n-button__spinner"
};
var X = createBaseVNode("path", {
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
var Y = [
  X
];
var F = defineComponent({
  __name: "CircleSpinner",
  setup(e) {
    return defineComponent({
      name: "CircleSpinner"
    }), (s, l) => (openBlock(), createElementBlock("svg", G, Y));
  }
});
var J = defineComponent({
  __name: "NButton",
  props: {
    mode: { default: "solid" },
    color: { default: "primary" },
    isLoading: { type: Boolean, default: false },
    loadingText: { default: void 0 },
    size: { default: "normal" }
  },
  setup(e) {
    const s = e, { color: l, mode: n, isLoading: o, loadingText: i, size: u } = toRefs(s);
    return (a, r) => (openBlock(), createElementBlock("button", {
      class: normalizeClass(["n-button", [`n--${unref(l)}`, `n-button--${unref(l)}`, `n-button--${unref(u)}`, `n-button--${unref(n)}`, unref(o) ? "n-button--loading" : ""]])
    }, [
      unref(o) ? (openBlock(), createBlock(F, {
        key: 0,
        class: "n-button__spinner"
      })) : createCommentVNode("", true),
      unref(o) ? createCommentVNode("", true) : renderSlot(a.$slots, "leftIcon", { key: 1 }),
      !unref(o) || unref(o) && !unref(i) ? renderSlot(a.$slots, "default", { key: 2 }) : createCommentVNode("", true),
      createTextVNode(" " + toDisplayString(unref(o) && unref(i) ? unref(i) : "") + " ", 1),
      unref(o) ? createCommentVNode("", true) : renderSlot(a.$slots, "rightIcon", {
        key: 3,
        class: "n-button__icon"
      })
    ], 2));
  }
});
var je = {
  install(e) {
    e.component("n-button", J);
  }
};
var Q = ["aria-label", "aria-checked", "onKeydown", "onKeyup", "for"];
var U = ["value"];
var ee = createBaseVNode("span", { class: "n-switch__thumb" }, null, -1);
var te = defineComponent({
  inheritAttrs: false,
  __name: "NSwitch",
  props: {
    modelValue: { type: Boolean },
    color: { default: "primary" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: s }) {
    const l = e, { modelValue: n, color: o } = toRefs(l);
    function i(p) {
      if (p instanceof KeyboardEvent) {
        if (p.repeat)
          return;
        r();
      }
      s("update:modelValue", !n.value);
    }
    const u = ref(false), a = ref("right");
    function r() {
      u.value = true, n.value ? a.value = "right" : a.value = "left";
    }
    function h() {
      u.value = false;
    }
    const C = computed(() => u.value ? `n-switch--hold-${a.value}` : "");
    return (p, x) => (openBlock(), createElementBlock("label", {
      class: normalizeClass(["n-switch", [`n--${unref(o)}`, `n-switch--${unref(o)}`, unref(n) ? "n-switch--checked" : "", u.value ? "n-switch--hold" : "", C.value]]),
      tabindex: "0",
      role: "switch",
      "aria-label": p.$attrs["aria-label"],
      "aria-checked": unref(n),
      onKeydown: [
        withKeys(i, ["enter"]),
        withKeys(i, ["space"])
      ],
      onKeyup: [
        withKeys(h, ["enter"]),
        withKeys(h, ["space"])
      ],
      onClick: i,
      onMousedown: r,
      onMouseup: h,
      for: p.$attrs.id
    }, [
      createBaseVNode("input", mergeProps({
        type: "checkbox",
        class: "n-switch__input",
        "aria-invalid": "false",
        "aria-disabled": "false",
        disabled: "",
        value: unref(n)
      }, p.$attrs, { "aria-label": "" }), null, 16, U),
      ee
    ], 42, Q));
  }
});
var ze = {
  install(e) {
    e.component("n-switch", te);
  }
};
var oe = (e) => (pushScopeId("data-v-30532f98"), e = e(), popScopeId(), e);
var ne = {
  width: "24",
  height: "24",
  viewBox: "0 0 100 100"
};
var se = oe(() => createBaseVNode("path", {
  d: "M20 50 L45 75 L80 30",
  stroke: "black",
  fill: "transparent"
}, null, -1));
var le = [
  se
];
var ae = defineComponent({
  __name: "AnimatedCheckmark",
  props: {
    strokeColor: { default: "white" }
  },
  setup(e) {
    const s = e;
    useCssVars((n) => ({
      "19e33ec7": unref(l)
    }));
    const { strokeColor: l } = toRefs(s);
    return (n, o) => (openBlock(), createElementBlock("svg", ne, le));
  }
});
var E = (e, s) => {
  const l = e.__vccOpts || e;
  for (const [n, o] of s)
    l[n] = o;
  return l;
};
var ce = E(ae, [["__scopeId", "data-v-30532f98"]]);
var ie = ["aria-label", "aria-checked", "onKeydown", "onKeyup", "for"];
var re = ["value"];
var ue = defineComponent({
  inheritAttrs: false,
  __name: "NCheckbox",
  props: {
    modelValue: { type: Boolean },
    color: { default: "primary" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: s }) {
    const l = e, { modelValue: n } = toRefs(l);
    function o(r) {
      if (r instanceof KeyboardEvent) {
        if (r.repeat)
          return;
        u();
      }
      s("update:modelValue", !n.value);
    }
    const i = ref(false);
    function u() {
      i.value = true;
    }
    function a() {
      i.value = false;
    }
    return (r, h) => (openBlock(), createElementBlock("label", {
      class: normalizeClass(["n-checkbox", [`n--${r.color}`, `n-checkbox--${r.color}`, unref(n) ? "n-checkbox--checked" : "", i.value ? "n-checkbox--hold" : ""]]),
      tabindex: "0",
      role: "checkbox",
      "aria-label": r.$attrs["aria-label"],
      "aria-checked": unref(n),
      onKeydown: [
        withKeys(o, ["enter"]),
        withKeys(o, ["space"])
      ],
      onKeyup: [
        withKeys(a, ["enter"]),
        withKeys(a, ["space"])
      ],
      onClick: o,
      onMousedown: u,
      onMouseup: a,
      for: r.$attrs.id
    }, [
      unref(n) ? (openBlock(), createBlock(ce, {
        key: 0,
        class: "n-checkbox__check",
        "stroke-color": "var(--n-component-normal-text-color)"
      })) : createCommentVNode("", true),
      createBaseVNode("input", mergeProps({
        type: "checkbox",
        class: "n-checkbox__input"
      }, r.$attrs, {
        "aria-invalid": "false",
        "aria-disabled": "false",
        disabled: "",
        value: unref(n),
        "aria-label": ""
      }), null, 16, re)
    ], 42, ie));
  }
});
var We = {
  install(e) {
    e.component("n-switch", ue);
  }
};
var de = {
  name: "OpenEye"
};
var _e = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24"
};
var fe = createBaseVNode("path", {
  fill: "currentColor",
  d: "M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0Z"
}, null, -1);
var pe = [
  fe
];
function he(e, s, l, n, o, i) {
  return openBlock(), createElementBlock("svg", _e, pe);
}
var me = E(de, [["render", he]]);
var be = {
  name: "ClosedEye"
};
var ye = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24"
};
var ve = createBaseVNode("path", {
  fill: "currentColor",
  d: "M2 5.27L3.28 4L20 20.72L18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58c-5 0-9.27-3.11-11-7.5c.69-1.76 1.79-3.31 3.19-4.54L2 5.27M12 9a3 3 0 0 1 3 3a3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.79 11.79 0 0 1-4 5.19l-1.42-1.43A9.862 9.862 0 0 0 20.82 12A9.821 9.821 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.821 9.821 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13Z"
}, null, -1);
var ge = [
  ve
];
function $e(e, s, l, n, o, i) {
  return openBlock(), createElementBlock("svg", ye, ge);
}
var we = E(be, [["render", $e]]);
var ke = ["for"];
var Ce = {
  key: 0,
  class: "n-input__required-indicator"
};
var xe = { class: "n-input__icon-wrap" };
var Ne = {
  key: 0,
  class: "n-input__left-icon"
};
var Ie = ["type", "value"];
var Me = {
  key: 2,
  class: "n-input__right-icon"
};
var Be = { key: 1 };
var Se = { class: "n-input__error" };
var Ae = defineComponent({
  inheritAttrs: false,
  __name: "NInput",
  props: {
    modelValue: {},
    withVisibilityToggle: { type: Boolean, default: false },
    errors: { default: () => [] },
    label: { default: void 0 },
    wrapperAttrs: { default: () => ({}) },
    labelAttrs: { default: () => ({}) },
    color: { default: "primary" },
    type: { default: "text" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: s }) {
    const l = e, { modelValue: n, label: o, type: i, errors: u, required: a, withVisibilityToggle: r, color: h, wrapperAttrs: C, labelAttrs: p } = toRefs(l);
    function x(b) {
      s("update:modelValue", b.target.value);
    }
    const w = ref(false);
    function N() {
      w.value = !w.value;
    }
    const M = useSlots(), O = computed(() => M.rightIcon !== void 0), R = computed(() => M.leftIcon !== void 0);
    if (r.value && O.value)
      throw new Error("You shouldn't use both `with-visibility-toggle` and `rightIcon` slot at the same time, it will mess up with styling and honestly, would look hideous anyways!");
    return (b, Re) => (openBlock(), createElementBlock("div", mergeProps({
      class: ["n-input", [`n--${unref(h)}`, `n-input--${unref(h)}`]]
    }, unref(C)), [
      unref(o) ? (openBlock(), createElementBlock("label", mergeProps({
        key: 0,
        for: b.$attrs.id,
        class: "n-input__label"
      }, unref(p)), [
        createTextVNode(toDisplayString(unref(o)) + " ", 1),
        unref(a) ? (openBlock(), createElementBlock("sup", Ce, "*")) : createCommentVNode("", true)
      ], 16, ke)) : createCommentVNode("", true),
      createBaseVNode("div", xe, [
        b.$slots.leftIcon ? (openBlock(), createElementBlock("span", Ne, [
          renderSlot(b.$slots, "leftIcon")
        ])) : createCommentVNode("", true),
        createBaseVNode("input", mergeProps({
          type: w.value ? "text" : unref(i),
          value: unref(n),
          class: ["n-input__input", [
            unref(r) ? "n-input__input--with-visibility-toggle" : "",
            O.value ? "n-input__input--with-right-icon" : "",
            R.value ? "n-input__input--with-left-icon" : ""
          ]],
          onChange: x,
          onInput: x
        }, b.$attrs), null, 16, Ie),
        unref(r) ? (openBlock(), createElementBlock("button", {
          key: 1,
          type: "button",
          class: "n-input__visibility",
          onClick: N
        }, [
          w.value ? (openBlock(), createBlock(me, { key: 0 })) : (openBlock(), createBlock(we, { key: 1 }))
        ])) : createCommentVNode("", true),
        b.$slots.rightIcon ? (openBlock(), createElementBlock("span", Me, [
          renderSlot(b.$slots, "rightIcon")
        ])) : createCommentVNode("", true)
      ]),
      unref(u) && unref(u).length > 0 ? (openBlock(), createElementBlock("div", Be, [
        createBaseVNode("span", Se, toDisplayString(unref(u)[0]), 1)
      ])) : createCommentVNode("", true)
    ], 16));
  }
});
var De = {
  install(e) {
    e.component("n-switch", Ae);
  }
};
var Ve = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24"
};
var Le = createBaseVNode("path", {
  fill: "currentColor",
  d: "m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275L12 13.4Z"
}, null, -1);
var Ee = [
  Le
];
var Oe = defineComponent({
  name: "MaterialSymbolsCloseRounded",
  __name: "XMark",
  setup(e) {
    return (s, l) => (openBlock(), createElementBlock("svg", Ve, Ee));
  }
});
var Te = { class: "n-modal-header" };
var qe = { class: "n-modal-body" };
var He = { class: "n-modal-footer" };
var Ke = defineComponent({
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
    const l = e, { closeOnOutsideClick: n, lockScroll: o, modelAttrs: i, modelOverlayAttrs: u } = toRefs(l), a = ref(false), r = ref(false), h = ref(0);
    function C() {
      a.value = true, o.value && (h.value = window.innerWidth - document.documentElement.clientWidth, document.body.style.paddingRight = `${h.value}px`, document.body.style.overflow = "hidden");
    }
    function p() {
      a.value = false, o.value && setTimeout(() => {
        document.body.style.overflow = "auto", document.body.style.paddingRight = "0px";
      }, 200);
    }
    function x() {
      a.value = !a.value;
    }
    s({
      openModal: C,
      closeModal: p,
      toggleModal: x
    });
    function w() {
      n.value ? p() : (r.value = true, setTimeout(() => {
        r.value = false;
      }, 500));
    }
    return (N, M) => (openBlock(), createBlock(Teleport, { to: "body" }, [
      createVNode(Transition, { name: "n-modal" }, {
        default: withCtx(() => [
          a.value ? (openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            class: ["n-modal", r.value ? "n-modal--shaking" : ""]
          }, unref(i)), [
            createBaseVNode("header", Te, [
              createBaseVNode("h3", null, [
                renderSlot(N.$slots, "modal-header")
              ]),
              createBaseVNode("button", {
                class: "n-modal__close-btn",
                onClick: p
              }, [
                createVNode(Oe)
              ])
            ]),
            createBaseVNode("div", qe, [
              renderSlot(N.$slots, "modal-body")
            ]),
            createBaseVNode("footer", He, [
              renderSlot(N.$slots, "modal-footer")
            ])
          ], 16)) : createCommentVNode("", true)
        ]),
        _: 3
      }),
      createVNode(Transition, {
        name: "n-modal-overlay",
        onClick: w
      }, {
        default: withCtx(() => [
          a.value ? (openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            class: "n-modal-overlay"
          }, unref(u)), null, 16)) : createCommentVNode("", true)
        ]),
        _: 1
      })
    ]));
  }
});
var Ge = {
  install(e) {
    e.component("n-modal", Ke);
  }
};
var Pe = ["primary", "secondary", "success", "info", "warning", "danger", "light", "dark"];
function Xe(e) {
  return Pe.includes(e);
}
function H(e) {
  const s = parseInt(e.slice(1, 3), 16), l = parseInt(e.slice(3, 5), 16), n = parseInt(e.slice(5, 7), 16);
  return `${s}, ${l}, ${n}`;
}
function K(e, s = 1) {
  return s >= 0 && s <= 1 ? `rgba(${H(e)}, ${s})` : `rgb(${H(e)})`;
}
var S = {
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
function Ye(e) {
  e && Object.keys(e).forEach((o) => {
    S[o] = e[o];
  });
  const s = document.querySelector("html"), l = document.createElement("style");
  let n = "html { ";
  Object.keys(S).forEach((o) => {
    const i = S[o];
    i && Object.keys(i).forEach((u) => {
      const a = i[u];
      n += `--n-color-${o}-${u}: ${K(a)};`, n += `--n-color-${o}-${u}-transparent: ${K(a, 0.3)};`;
    });
  }), n += "}", l.innerHTML = n, s == null || s.appendChild(l);
}
export {
  J as NButton,
  je as NButtonPlugin,
  ue as NCheckbox,
  We as NCheckboxPlugin,
  Ae as NInput,
  De as NInputPlugin,
  Ke as NModal,
  Ge as NModalPlugin,
  te as NSwitch,
  ze as NSwitchPlugin,
  Pe as builtinColorNames,
  S as colors,
  K as hexToRGB,
  H as hexToRGBIntegers,
  Xe as isBuiltinColorName,
  Ye as setColorPallete
};
//# sourceMappingURL=@nethren-ui_vue.js.map
