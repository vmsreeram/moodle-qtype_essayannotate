/**
 * @licstart The following is the entire license notice for the
 * JavaScript code in this page
 *
 * Copyright 2023 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @licend The above is the entire license notice for the
 * JavaScript code in this page
 */
!(function webpackUniversalModuleDefinition(t, e) {
  "object" == typeof exports && "object" == typeof module
      ? (module.exports = t.pdfjsLib = e())
      : "function" == typeof define && define.amd
      ? define([], () => (t.pdfjsLib = e()))
      : "object" == typeof exports
      ? (exports["pdfjs-dist/build/pdf"] = t.pdfjsLib = e())
      : (t["pdfjs-dist/build/pdf"] = t.pdfjsLib = e());
})(globalThis, () =>
  (() => {
      "use strict";
      var __webpack_modules__ = [
              ,
              (t, e) => {
                  Object.defineProperty(e, "__esModule", { value: !0 });
                  e.VerbosityLevel = e.Util = e.UnknownErrorException = e.UnexpectedResponseException = e.TextRenderingMode = e.RenderingIntentFlag = e.PromiseCapability = e.PermissionFlag = e.PasswordResponses = e.PasswordException = e.PageActionEventType = e.OPS = e.MissingPDFException = e.MAX_IMAGE_SIZE_TO_CACHE = e.LINE_FACTOR = e.LINE_DESCENT_FACTOR = e.InvalidPDFException = e.ImageKind = e.IDENTITY_MATRIX = e.FormatError = e.FeatureTest = e.FONT_IDENTITY_MATRIX = e.DocumentActionEventType = e.CMapCompressionType = e.BaseException = e.BASELINE_FACTOR = e.AnnotationType = e.AnnotationReplyType = e.AnnotationPrefix = e.AnnotationMode = e.AnnotationFlag = e.AnnotationFieldFlag = e.AnnotationEditorType = e.AnnotationEditorPrefix = e.AnnotationEditorParamsType = e.AnnotationBorderStyleType = e.AnnotationActionEventType = e.AbortException = void 0;
                  e.assert = function assert(t, e) {
                      t || unreachable(e);
                  };
                  e.bytesToString = bytesToString;
                  e.createValidAbsoluteUrl = function createValidAbsoluteUrl(t, e = null, i = null) {
                      if (!t) return null;
                      try {
                          if (i && "string" == typeof t) {
                              if (i.addDefaultProtocol && t.startsWith("www.")) {
                                  const e = t.match(/\./g);
                                  e?.length >= 2 && (t = `http://${t}`);
                              }
                              if (i.tryConvertEncoding)
                                  try {
                                      t = stringToUTF8String(t);
                                  } catch {}
                          }
                          const s = e ? new URL(t, e) : new URL(t);
                          if (
                              (function _isValidProtocol(t) {
                                  switch (t?.protocol) {
                                      case "http:":
                                      case "https:":
                                      case "ftp:":
                                      case "mailto:":
                                      case "tel:":
                                          return !0;
                                      default:
                                          return !1;
                                  }
                              })(s)
                          )
                              return s;
                      } catch {}
                      return null;
                  };
                  e.getModificationDate = function getModificationDate(t = new Date()) {
                      return [
                          t.getUTCFullYear().toString(),
                          (t.getUTCMonth() + 1).toString().padStart(2, "0"),
                          t.getUTCDate().toString().padStart(2, "0"),
                          t.getUTCHours().toString().padStart(2, "0"),
                          t.getUTCMinutes().toString().padStart(2, "0"),
                          t.getUTCSeconds().toString().padStart(2, "0"),
                      ].join("");
                  };
                  e.getUuid = function getUuid() {
                      if ("undefined" != typeof crypto && "function" == typeof crypto?.randomUUID) return crypto.randomUUID();
                      const t = new Uint8Array(32);
                      if ("undefined" != typeof crypto && "function" == typeof crypto?.getRandomValues) crypto.getRandomValues(t);
                      else for (let e = 0; e < 32; e++) t[e] = Math.floor(255 * Math.random());
                      return bytesToString(t);
                  };
                  e.getVerbosityLevel = function getVerbosityLevel() {
                      return n;
                  };
                  e.info = function info(t) {
                      n >= s.INFOS && console.log(`Info: ${t}`);
                  };
                  e.isArrayBuffer = function isArrayBuffer(t) {
                      return "object" == typeof t && void 0 !== t?.byteLength;
                  };
                  e.isArrayEqual = function isArrayEqual(t, e) {
                      if (t.length !== e.length) return !1;
                      for (let i = 0, s = t.length; i < s; i++) if (t[i] !== e[i]) return !1;
                      return !0;
                  };
                  e.isNodeJS = void 0;
                  e.normalizeUnicode = function normalizeUnicode(t) {
                      if (!l) {
                          l = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu;
                          h = new Map([["ﬅ", "ſt"]]);
                      }
                      return t.replaceAll(l, (t, e, i) => (e ? e.normalize("NFKC") : h.get(i)));
                  };
                  e.objectFromMap = function objectFromMap(t) {
                      const e = Object.create(null);
                      for (const [i, s] of t) e[i] = s;
                      return e;
                  };
                  e.objectSize = function objectSize(t) {
                      return Object.keys(t).length;
                  };
                  e.setVerbosityLevel = function setVerbosityLevel(t) {
                      Number.isInteger(t) && (n = t);
                  };
                  e.shadow = shadow;
                  e.string32 = function string32(t) {
                      return String.fromCharCode((t >> 24) & 255, (t >> 16) & 255, (t >> 8) & 255, 255 & t);
                  };
                  e.stringToBytes = stringToBytes;
                  e.stringToPDFString = function stringToPDFString(t) {
                      if (t[0] >= "ï") {
                          let e;
                          "þ" === t[0] && "ÿ" === t[1] ? (e = "utf-16be") : "ÿ" === t[0] && "þ" === t[1] ? (e = "utf-16le") : "ï" === t[0] && "»" === t[1] && "¿" === t[2] && (e = "utf-8");
                          if (e)
                              try {
                                  const i = new TextDecoder(e, { fatal: !0 }),
                                      s = stringToBytes(t);
                                  return i.decode(s);
                              } catch (t) {
                                  warn(`stringToPDFString: "${t}".`);
                              }
                      }
                      const e = [];
                      for (let i = 0, s = t.length; i < s; i++) {
                          const s = o[t.charCodeAt(i)];
                          e.push(s ? String.fromCharCode(s) : t.charAt(i));
                      }
                      return e.join("");
                  };
                  e.stringToUTF8String = stringToUTF8String;
                  e.unreachable = unreachable;
                  e.utf8StringToString = function utf8StringToString(t) {
                      return unescape(encodeURIComponent(t));
                  };
                  e.warn = warn;
                  const i = !("object" != typeof process || process + "" != "[object process]" || process.versions.nw || (process.versions.electron && process.type && "browser" !== process.type));
                  e.isNodeJS = i;
                  e.IDENTITY_MATRIX = [1, 0, 0, 1, 0, 0];
                  e.FONT_IDENTITY_MATRIX = [0.001, 0, 0, 0.001, 0, 0];
                  e.MAX_IMAGE_SIZE_TO_CACHE = 1e7;
                  e.LINE_FACTOR = 1.35;
                  e.LINE_DESCENT_FACTOR = 0.35;
                  e.BASELINE_FACTOR = 0.25925925925925924;
                  e.RenderingIntentFlag = { ANY: 1, DISPLAY: 2, PRINT: 4, SAVE: 8, ANNOTATIONS_FORMS: 16, ANNOTATIONS_STORAGE: 32, ANNOTATIONS_DISABLE: 64, OPLIST: 256 };
                  e.AnnotationMode = { DISABLE: 0, ENABLE: 1, ENABLE_FORMS: 2, ENABLE_STORAGE: 3 };
                  e.AnnotationEditorPrefix = "pdfjs_internal_editor_";
                  e.AnnotationEditorType = { DISABLE: -1, NONE: 0, FREETEXT: 3, STAMP: 13, INK: 15 };
                  e.AnnotationEditorParamsType = { RESIZE: 1, CREATE: 2, FREETEXT_SIZE: 11, FREETEXT_COLOR: 12, FREETEXT_OPACITY: 13, INK_COLOR: 21, INK_THICKNESS: 22, INK_OPACITY: 23 };
                  e.PermissionFlag = { PRINT: 4, MODIFY_CONTENTS: 8, COPY: 16, MODIFY_ANNOTATIONS: 32, FILL_INTERACTIVE_FORMS: 256, COPY_FOR_ACCESSIBILITY: 512, ASSEMBLE: 1024, PRINT_HIGH_QUALITY: 2048 };
                  e.TextRenderingMode = { FILL: 0, STROKE: 1, FILL_STROKE: 2, INVISIBLE: 3, FILL_ADD_TO_PATH: 4, STROKE_ADD_TO_PATH: 5, FILL_STROKE_ADD_TO_PATH: 6, ADD_TO_PATH: 7, FILL_STROKE_MASK: 3, ADD_TO_PATH_FLAG: 4 };
                  e.ImageKind = { GRAYSCALE_1BPP: 1, RGB_24BPP: 2, RGBA_32BPP: 3 };
                  e.AnnotationType = {
                      TEXT: 1,
                      LINK: 2,
                      FREETEXT: 3,
                      LINE: 4,
                      SQUARE: 5,
                      CIRCLE: 6,
                      POLYGON: 7,
                      POLYLINE: 8,
                      HIGHLIGHT: 9,
                      UNDERLINE: 10,
                      SQUIGGLY: 11,
                      STRIKEOUT: 12,
                      STAMP: 13,
                      CARET: 14,
                      INK: 15,
                      POPUP: 16,
                      FILEATTACHMENT: 17,
                      SOUND: 18,
                      MOVIE: 19,
                      WIDGET: 20,
                      SCREEN: 21,
                      PRINTERMARK: 22,
                      TRAPNET: 23,
                      WATERMARK: 24,
                      THREED: 25,
                      REDACT: 26,
                  };
                  e.AnnotationReplyType = { GROUP: "Group", REPLY: "R" };
                  e.AnnotationFlag = { INVISIBLE: 1, HIDDEN: 2, PRINT: 4, NOZOOM: 8, NOROTATE: 16, NOVIEW: 32, READONLY: 64, LOCKED: 128, TOGGLENOVIEW: 256, LOCKEDCONTENTS: 512 };
                  e.AnnotationFieldFlag = {
                      READONLY: 1,
                      REQUIRED: 2,
                      NOEXPORT: 4,
                      MULTILINE: 4096,
                      PASSWORD: 8192,
                      NOTOGGLETOOFF: 16384,
                      RADIO: 32768,
                      PUSHBUTTON: 65536,
                      COMBO: 131072,
                      EDIT: 262144,
                      SORT: 524288,
                      FILESELECT: 1048576,
                      MULTISELECT: 2097152,
                      DONOTSPELLCHECK: 4194304,
                      DONOTSCROLL: 8388608,
                      COMB: 16777216,
                      RICHTEXT: 33554432,
                      RADIOSINUNISON: 33554432,
                      COMMITONSELCHANGE: 67108864,
                  };
                  e.AnnotationBorderStyleType = { SOLID: 1, DASHED: 2, BEVELED: 3, INSET: 4, UNDERLINE: 5 };
                  e.AnnotationActionEventType = {
                      E: "Mouse Enter",
                      X: "Mouse Exit",
                      D: "Mouse Down",
                      U: "Mouse Up",
                      Fo: "Focus",
                      Bl: "Blur",
                      PO: "PageOpen",
                      PC: "PageClose",
                      PV: "PageVisible",
                      PI: "PageInvisible",
                      K: "Keystroke",
                      F: "Format",
                      V: "Validate",
                      C: "Calculate",
                  };
                  e.DocumentActionEventType = { WC: "WillClose", WS: "WillSave", DS: "DidSave", WP: "WillPrint", DP: "DidPrint" };
                  e.PageActionEventType = { O: "PageOpen", C: "PageClose" };
                  const s = { ERRORS: 0, WARNINGS: 1, INFOS: 5 };
                  e.VerbosityLevel = s;
                  e.CMapCompressionType = { NONE: 0, BINARY: 1 };
                  e.OPS = {
                      dependency: 1,
                      setLineWidth: 2,
                      setLineCap: 3,
                      setLineJoin: 4,
                      setMiterLimit: 5,
                      setDash: 6,
                      setRenderingIntent: 7,
                      setFlatness: 8,
                      setGState: 9,
                      save: 10,
                      restore: 11,
                      transform: 12,
                      moveTo: 13,
                      lineTo: 14,
                      curveTo: 15,
                      curveTo2: 16,
                      curveTo3: 17,
                      closePath: 18,
                      rectangle: 19,
                      stroke: 20,
                      closeStroke: 21,
                      fill: 22,
                      eoFill: 23,
                      fillStroke: 24,
                      eoFillStroke: 25,
                      closeFillStroke: 26,
                      closeEOFillStroke: 27,
                      endPath: 28,
                      clip: 29,
                      eoClip: 30,
                      beginText: 31,
                      endText: 32,
                      setCharSpacing: 33,
                      setWordSpacing: 34,
                      setHScale: 35,
                      setLeading: 36,
                      setFont: 37,
                      setTextRenderingMode: 38,
                      setTextRise: 39,
                      moveText: 40,
                      setLeadingMoveText: 41,
                      setTextMatrix: 42,
                      nextLine: 43,
                      showText: 44,
                      showSpacedText: 45,
                      nextLineShowText: 46,
                      nextLineSetSpacingShowText: 47,
                      setCharWidth: 48,
                      setCharWidthAndBounds: 49,
                      setStrokeColorSpace: 50,
                      setFillColorSpace: 51,
                      setStrokeColor: 52,
                      setStrokeColorN: 53,
                      setFillColor: 54,
                      setFillColorN: 55,
                      setStrokeGray: 56,
                      setFillGray: 57,
                      setStrokeRGBColor: 58,
                      setFillRGBColor: 59,
                      setStrokeCMYKColor: 60,
                      setFillCMYKColor: 61,
                      shadingFill: 62,
                      beginInlineImage: 63,
                      beginImageData: 64,
                      endInlineImage: 65,
                      paintXObject: 66,
                      markPoint: 67,
                      markPointProps: 68,
                      beginMarkedContent: 69,
                      beginMarkedContentProps: 70,
                      endMarkedContent: 71,
                      beginCompat: 72,
                      endCompat: 73,
                      paintFormXObjectBegin: 74,
                      paintFormXObjectEnd: 75,
                      beginGroup: 76,
                      endGroup: 77,
                      beginAnnotation: 80,
                      endAnnotation: 81,
                      paintImageMaskXObject: 83,
                      paintImageMaskXObjectGroup: 84,
                      paintImageXObject: 85,
                      paintInlineImageXObject: 86,
                      paintInlineImageXObjectGroup: 87,
                      paintImageXObjectRepeat: 88,
                      paintImageMaskXObjectRepeat: 89,
                      paintSolidColorImageMask: 90,
                      constructPath: 91,
                  };
                  e.PasswordResponses = { NEED_PASSWORD: 1, INCORRECT_PASSWORD: 2 };
                  let n = s.WARNINGS;
                  function warn(t) {
                      n >= s.WARNINGS && console.log(`Warning: ${t}`);
                  }
                  function unreachable(t) {
                      throw new Error(t);
                  }
                  function shadow(t, e, i, s = !1) {
                      Object.defineProperty(t, e, { value: i, enumerable: !s, configurable: !0, writable: !1 });
                      return i;
                  }
                  const a = (function BaseExceptionClosure() {
                      function BaseException(t, e) {
                          this.constructor === BaseException && unreachable("Cannot initialize BaseException.");
                          this.message = t;
                          this.name = e;
                      }
                      BaseException.prototype = new Error();
                      BaseException.constructor = BaseException;
                      return BaseException;
                  })();
                  e.BaseException = a;
                  e.PasswordException = class PasswordException extends a {
                      constructor(t, e) {
                          super(t, "PasswordException");
                          this.code = e;
                      }
                  };
                  e.UnknownErrorException = class UnknownErrorException extends a {
                      constructor(t, e) {
                          super(t, "UnknownErrorException");
                          this.details = e;
                      }
                  };
                  e.InvalidPDFException = class InvalidPDFException extends a {
                      constructor(t) {
                          super(t, "InvalidPDFException");
                      }
                  };
                  e.MissingPDFException = class MissingPDFException extends a {
                      constructor(t) {
                          super(t, "MissingPDFException");
                      }
                  };
                  e.UnexpectedResponseException = class UnexpectedResponseException extends a {
                      constructor(t, e) {
                          super(t, "UnexpectedResponseException");
                          this.status = e;
                      }
                  };
                  e.FormatError = class FormatError extends a {
                      constructor(t) {
                          super(t, "FormatError");
                      }
                  };
                  e.AbortException = class AbortException extends a {
                      constructor(t) {
                          super(t, "AbortException");
                      }
                  };
                  function bytesToString(t) {
                      ("object" == typeof t && void 0 !== t?.length) || unreachable("Invalid argument for bytesToString");
                      const e = t.length,
                          i = 8192;
                      if (e < i) return String.fromCharCode.apply(null, t);
                      const s = [];
                      for (let n = 0; n < e; n += i) {
                          const a = Math.min(n + i, e),
                              r = t.subarray(n, a);
                          s.push(String.fromCharCode.apply(null, r));
                      }
                      return s.join("");
                  }
                  function stringToBytes(t) {
                      "string" != typeof t && unreachable("Invalid argument for stringToBytes");
                      const e = t.length,
                          i = new Uint8Array(e);
                      for (let s = 0; s < e; ++s) i[s] = 255 & t.charCodeAt(s);
                      return i;
                  }
                  e.FeatureTest = class FeatureTest {
                      static get isLittleEndian() {
                          return shadow(
                              this,
                              "isLittleEndian",
                              (function isLittleEndian() {
                                  const t = new Uint8Array(4);
                                  t[0] = 1;
                                  return 1 === new Uint32Array(t.buffer, 0, 1)[0];
                              })()
                          );
                      }
                      static get isEvalSupported() {
                          return shadow(
                              this,
                              "isEvalSupported",
                              (function isEvalSupported() {
                                  try {
                                      new Function("");
                                      return !0;
                                  } catch {
                                      return !1;
                                  }
                              })()
                          );
                      }
                      static get isOffscreenCanvasSupported() {
                          return shadow(this, "isOffscreenCanvasSupported", "undefined" != typeof OffscreenCanvas);
                      }
                      static get platform() {
                          return "undefined" == typeof navigator ? shadow(this, "platform", { isWin: !1, isMac: !1 }) : shadow(this, "platform", { isWin: navigator.platform.includes("Win"), isMac: navigator.platform.includes("Mac") });
                      }
                      static get isCSSRoundSupported() {
                          return shadow(this, "isCSSRoundSupported", globalThis.CSS?.supports?.("width: round(1.5px, 1px)"));
                      }
                  };
                  const r = [...Array(256).keys()].map((t) => t.toString(16).padStart(2, "0"));
                  e.Util = class Util {
                      static makeHexColor(t, e, i) {
                          return `#${r[t]}${r[e]}${r[i]}`;
                      }
                      static scaleMinMax(t, e) {
                          let i;
                          if (t[0]) {
                              if (t[0] < 0) {
                                  i = e[0];
                                  e[0] = e[1];
                                  e[1] = i;
                              }
                              e[0] *= t[0];
                              e[1] *= t[0];
                              if (t[3] < 0) {
                                  i = e[2];
                                  e[2] = e[3];
                                  e[3] = i;
                              }
                              e[2] *= t[3];
                              e[3] *= t[3];
                          } else {
                              i = e[0];
                              e[0] = e[2];
                              e[2] = i;
                              i = e[1];
                              e[1] = e[3];
                              e[3] = i;
                              if (t[1] < 0) {
                                  i = e[2];
                                  e[2] = e[3];
                                  e[3] = i;
                              }
                              e[2] *= t[1];
                              e[3] *= t[1];
                              if (t[2] < 0) {
                                  i = e[0];
                                  e[0] = e[1];
                                  e[1] = i;
                              }
                              e[0] *= t[2];
                              e[1] *= t[2];
                          }
                          e[0] += t[4];
                          e[1] += t[4];
                          e[2] += t[5];
                          e[3] += t[5];
                      }
                      static transform(t, e) {
                          return [t[0] * e[0] + t[2] * e[1], t[1] * e[0] + t[3] * e[1], t[0] * e[2] + t[2] * e[3], t[1] * e[2] + t[3] * e[3], t[0] * e[4] + t[2] * e[5] + t[4], t[1] * e[4] + t[3] * e[5] + t[5]];
                      }
                      static applyTransform(t, e) {
                          return [t[0] * e[0] + t[1] * e[2] + e[4], t[0] * e[1] + t[1] * e[3] + e[5]];
                      }
                      static applyInverseTransform(t, e) {
                          const i = e[0] * e[3] - e[1] * e[2];
                          return [(t[0] * e[3] - t[1] * e[2] + e[2] * e[5] - e[4] * e[3]) / i, (-t[0] * e[1] + t[1] * e[0] + e[4] * e[1] - e[5] * e[0]) / i];
                      }
                      static getAxialAlignedBoundingBox(t, e) {
                          const i = this.applyTransform(t, e),
                              s = this.applyTransform(t.slice(2, 4), e),
                              n = this.applyTransform([t[0], t[3]], e),
                              a = this.applyTransform([t[2], t[1]], e);
                          return [Math.min(i[0], s[0], n[0], a[0]), Math.min(i[1], s[1], n[1], a[1]), Math.max(i[0], s[0], n[0], a[0]), Math.max(i[1], s[1], n[1], a[1])];
                      }
                      static inverseTransform(t) {
                          const e = t[0] * t[3] - t[1] * t[2];
                          return [t[3] / e, -t[1] / e, -t[2] / e, t[0] / e, (t[2] * t[5] - t[4] * t[3]) / e, (t[4] * t[1] - t[5] * t[0]) / e];
                      }
                      static singularValueDecompose2dScale(t) {
                          const e = [t[0], t[2], t[1], t[3]],
                              i = t[0] * e[0] + t[1] * e[2],
                              s = t[0] * e[1] + t[1] * e[3],
                              n = t[2] * e[0] + t[3] * e[2],
                              a = t[2] * e[1] + t[3] * e[3],
                              r = (i + a) / 2,
                              o = Math.sqrt((i + a) ** 2 - 4 * (i * a - n * s)) / 2,
                              l = r + o || 1,
                              h = r - o || 1;
                          return [Math.sqrt(l), Math.sqrt(h)];
                      }
                      static normalizeRect(t) {
                          const e = t.slice(0);
                          if (t[0] > t[2]) {
                              e[0] = t[2];
                              e[2] = t[0];
                          }
                          if (t[1] > t[3]) {
                              e[1] = t[3];
                              e[3] = t[1];
                          }
                          return e;
                      }
                      static intersect(t, e) {
                          const i = Math.max(Math.min(t[0], t[2]), Math.min(e[0], e[2])),
                              s = Math.min(Math.max(t[0], t[2]), Math.max(e[0], e[2]));
                          if (i > s) return null;
                          const n = Math.max(Math.min(t[1], t[3]), Math.min(e[1], e[3])),
                              a = Math.min(Math.max(t[1], t[3]), Math.max(e[1], e[3]));
                          return n > a ? null : [i, n, s, a];
                      }
                      static bezierBoundingBox(t, e, i, s, n, a, r, o) {
                          const l = [],
                              h = [[], []];
                          let c, d, u, p, g, m, f, b;
                          for (let h = 0; h < 2; ++h) {
                              if (0 === h) {
                                  d = 6 * t - 12 * i + 6 * n;
                                  c = -3 * t + 9 * i - 9 * n + 3 * r;
                                  u = 3 * i - 3 * t;
                              } else {
                                  d = 6 * e - 12 * s + 6 * a;
                                  c = -3 * e + 9 * s - 9 * a + 3 * o;
                                  u = 3 * s - 3 * e;
                              }
                              if (Math.abs(c) < 1e-12) {
                                  if (Math.abs(d) < 1e-12) continue;
                                  p = -u / d;
                                  0 < p && p < 1 && l.push(p);
                              } else {
                                  f = d * d - 4 * u * c;
                                  b = Math.sqrt(f);
                                  if (!(f < 0)) {
                                      g = (-d + b) / (2 * c);
                                      0 < g && g < 1 && l.push(g);
                                      m = (-d - b) / (2 * c);
                                      0 < m && m < 1 && l.push(m);
                                  }
                              }
                          }
                          let A,
                              _ = l.length;
                          const v = _;
                          for (; _--; ) {
                              p = l[_];
                              A = 1 - p;
                              h[0][_] = A * A * A * t + 3 * A * A * p * i + 3 * A * p * p * n + p * p * p * r;
                              h[1][_] = A * A * A * e + 3 * A * A * p * s + 3 * A * p * p * a + p * p * p * o;
                          }
                          h[0][v] = t;
                          h[1][v] = e;
                          h[0][v + 1] = r;
                          h[1][v + 1] = o;
                          h[0].length = h[1].length = v + 2;
                          return [Math.min(...h[0]), Math.min(...h[1]), Math.max(...h[0]), Math.max(...h[1])];
                      }
                  };
                  const o = [
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      728,
                      711,
                      710,
                      729,
                      733,
                      731,
                      730,
                      732,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      8226,
                      8224,
                      8225,
                      8230,
                      8212,
                      8211,
                      402,
                      8260,
                      8249,
                      8250,
                      8722,
                      8240,
                      8222,
                      8220,
                      8221,
                      8216,
                      8217,
                      8218,
                      8482,
                      64257,
                      64258,
                      321,
                      338,
                      352,
                      376,
                      381,
                      305,
                      322,
                      339,
                      353,
                      382,
                      0,
                      8364,
                  ];
                  function stringToUTF8String(t) {
                      return decodeURIComponent(escape(t));
                  }
                  e.PromiseCapability = class PromiseCapability {
                      #t = !1;
                      constructor() {
                          this.promise = new Promise((t, e) => {
                              this.resolve = (e) => {
                                  this.#t = !0;
                                  t(e);
                              };
                              this.reject = (t) => {
                                  this.#t = !0;
                                  e(t);
                              };
                          });
                      }
                      get settled() {
                          return this.#t;
                      }
                  };
                  let l = null,
                      h = null;
                  e.AnnotationPrefix = "pdfjs_internal_id_";
              },
              (__unused_webpack_module, exports, __w_pdfjs_require__) => {
                  Object.defineProperty(exports, "__esModule", { value: !0 });
                  exports.RenderTask = exports.PDFWorkerUtil = exports.PDFWorker = exports.PDFPageProxy = exports.PDFDocumentProxy = exports.PDFDocumentLoadingTask = exports.PDFDataRangeTransport = exports.LoopbackPort = exports.DefaultStandardFontDataFactory = exports.DefaultFilterFactory = exports.DefaultCanvasFactory = exports.DefaultCMapReaderFactory = void 0;
                  Object.defineProperty(exports, "SVGGraphics", {
                      enumerable: !0,
                      get: function () {
                          return _displaySvg.SVGGraphics;
                      },
                  });
                  exports.build = void 0;
                  exports.getDocument = getDocument;
                  exports.version = void 0;
                  var _util = __w_pdfjs_require__(1),
                      _annotation_storage = __w_pdfjs_require__(3),
                      _display_utils = __w_pdfjs_require__(6),
                      _font_loader = __w_pdfjs_require__(9),
                      _displayNode_utils = __w_pdfjs_require__(10),
                      _canvas = __w_pdfjs_require__(11),
                      _worker_options = __w_pdfjs_require__(14),
                      _message_handler = __w_pdfjs_require__(15),
                      _metadata = __w_pdfjs_require__(16),
                      _optional_content_config = __w_pdfjs_require__(17),
                      _transport_stream = __w_pdfjs_require__(18),
                      _displayFetch_stream = __w_pdfjs_require__(19),
                      _displayNetwork = __w_pdfjs_require__(22),
                      _displayNode_stream = __w_pdfjs_require__(23),
                      _displaySvg = __w_pdfjs_require__(24),
                      _xfa_text = __w_pdfjs_require__(25);
                  const DEFAULT_RANGE_CHUNK_SIZE = 65536,
                      RENDERING_CANCELLED_TIMEOUT = 100,
                      DELAYED_CLEANUP_TIMEOUT = 5e3,
                      DefaultCanvasFactory = _util.isNodeJS ? _displayNode_utils.NodeCanvasFactory : _display_utils.DOMCanvasFactory;
                  exports.DefaultCanvasFactory = DefaultCanvasFactory;
                  const DefaultCMapReaderFactory = _util.isNodeJS ? _displayNode_utils.NodeCMapReaderFactory : _display_utils.DOMCMapReaderFactory;
                  exports.DefaultCMapReaderFactory = DefaultCMapReaderFactory;
                  const DefaultFilterFactory = _util.isNodeJS ? _displayNode_utils.NodeFilterFactory : _display_utils.DOMFilterFactory;
                  exports.DefaultFilterFactory = DefaultFilterFactory;
                  const DefaultStandardFontDataFactory = _util.isNodeJS ? _displayNode_utils.NodeStandardFontDataFactory : _display_utils.DOMStandardFontDataFactory;
                  exports.DefaultStandardFontDataFactory = DefaultStandardFontDataFactory;
                  function getDocument(t) {
                      "string" == typeof t || t instanceof URL ? (t = { url: t }) : (0, _util.isArrayBuffer)(t) && (t = { data: t });
                      if ("object" != typeof t) throw new Error("Invalid parameter in getDocument, need parameter object.");
                      if (!t.url && !t.data && !t.range) throw new Error("Invalid parameter object: need either .data, .range or .url");
                      const e = new PDFDocumentLoadingTask(),
                          { docId: i } = e,
                          s = t.url ? getUrlProp(t.url) : null,
                          n = t.data ? getDataProp(t.data) : null,
                          a = t.httpHeaders || null,
                          r = !0 === t.withCredentials,
                          o = t.password ?? null,
                          l = t.range instanceof PDFDataRangeTransport ? t.range : null,
                          h = Number.isInteger(t.rangeChunkSize) && t.rangeChunkSize > 0 ? t.rangeChunkSize : DEFAULT_RANGE_CHUNK_SIZE;
                      let c = t.worker instanceof PDFWorker ? t.worker : null;
                      const d = t.verbosity,
                          u = "string" != typeof t.docBaseUrl || (0, _display_utils.isDataScheme)(t.docBaseUrl) ? null : t.docBaseUrl,
                          p = "string" == typeof t.cMapUrl ? t.cMapUrl : null,
                          g = !1 !== t.cMapPacked,
                          m = t.CMapReaderFactory || DefaultCMapReaderFactory,
                          f = "string" == typeof t.standardFontDataUrl ? t.standardFontDataUrl : null,
                          b = t.StandardFontDataFactory || DefaultStandardFontDataFactory,
                          A = !0 !== t.stopAtErrors,
                          _ = Number.isInteger(t.maxImageSize) && t.maxImageSize > -1 ? t.maxImageSize : -1,
                          v = !1 !== t.isEvalSupported,
                          y = "boolean" == typeof t.isOffscreenCanvasSupported ? t.isOffscreenCanvasSupported : !_util.isNodeJS,
                          S = Number.isInteger(t.canvasMaxAreaInBytes) ? t.canvasMaxAreaInBytes : -1,
                          E = "boolean" == typeof t.disableFontFace ? t.disableFontFace : _util.isNodeJS,
                          x = !0 === t.fontExtraProperties,
                          w = !0 === t.enableXfa,
                          C = t.ownerDocument || globalThis.document,
                          T = !0 === t.disableRange,
                          P = !0 === t.disableStream,
                          M = !0 === t.disableAutoFetch,
                          k = !0 === t.pdfBug,
                          F = l ? l.length : t.length ?? NaN,
                          R = "boolean" == typeof t.useSystemFonts ? t.useSystemFonts : !_util.isNodeJS && !E,
                          D =
                              "boolean" == typeof t.useWorkerFetch
                                  ? t.useWorkerFetch
                                  : m === _display_utils.DOMCMapReaderFactory &&
                                    b === _display_utils.DOMStandardFontDataFactory &&
                                    p &&
                                    f &&
                                    (0, _display_utils.isValidFetchUrl)(p, document.baseURI) &&
                                    (0, _display_utils.isValidFetchUrl)(f, document.baseURI),
                          I = t.canvasFactory || new DefaultCanvasFactory({ ownerDocument: C }),
                          L = t.filterFactory || new DefaultFilterFactory({ docId: i, ownerDocument: C });
                      (0, _util.setVerbosityLevel)(d);
                      const O = { canvasFactory: I, filterFactory: L };
                      if (!D) {
                          O.cMapReaderFactory = new m({ baseUrl: p, isCompressed: g });
                          O.standardFontDataFactory = new b({ baseUrl: f });
                      }
                      if (!c) {
                          const t = { verbosity: d, port: _worker_options.GlobalWorkerOptions.workerPort };
                          c = t.port ? PDFWorker.fromPort(t) : new PDFWorker(t);
                          e._worker = c;
                      }
                      const N = {
                              docId: i,
                              apiVersion: "3.11.174",
                              data: n,
                              password: o,
                              disableAutoFetch: M,
                              rangeChunkSize: h,
                              length: F,
                              docBaseUrl: u,
                              enableXfa: w,
                              evaluatorOptions: {
                                  maxImageSize: _,
                                  disableFontFace: E,
                                  ignoreErrors: A,
                                  isEvalSupported: v,
                                  isOffscreenCanvasSupported: y,
                                  canvasMaxAreaInBytes: S,
                                  fontExtraProperties: x,
                                  useSystemFonts: R,
                                  cMapUrl: D ? p : null,
                                  standardFontDataUrl: D ? f : null,
                              },
                          },
                          B = { ignoreErrors: A, isEvalSupported: v, disableFontFace: E, fontExtraProperties: x, enableXfa: w, ownerDocument: C, disableAutoFetch: M, pdfBug: k, styleElement: null };
                      c.promise
                          .then(function () {
                              if (e.destroyed) throw new Error("Loading aborted");
                              const t = _fetchDocument(c, N),
                                  o = new Promise(function (t) {
                                      let e;
                                      if (l)
                                          e = new _transport_stream.PDFDataTransportStream(
                                              { length: F, initialData: l.initialData, progressiveDone: l.progressiveDone, contentDispositionFilename: l.contentDispositionFilename, disableRange: T, disableStream: P },
                                              l
                                          );
                                      else if (!n) {
                                          e = ((t) =>
                                              _util.isNodeJS ? new _displayNode_stream.PDFNodeStream(t) : (0, _display_utils.isValidFetchUrl)(t.url) ? new _displayFetch_stream.PDFFetchStream(t) : new _displayNetwork.PDFNetworkStream(t))({
                                              url: s,
                                              length: F,
                                              httpHeaders: a,
                                              withCredentials: r,
                                              rangeChunkSize: h,
                                              disableRange: T,
                                              disableStream: P,
                                          });
                                      }
                                      t(e);
                                  });
                              return Promise.all([t, o]).then(function ([t, s]) {
                                  if (e.destroyed) throw new Error("Loading aborted");
                                  const n = new _message_handler.MessageHandler(i, t, c.port),
                                      a = new WorkerTransport(n, e, s, B, O);
                                  e._transport = a;
                                  n.send("Ready", null);
                              });
                          })
                          .catch(e._capability.reject);
                      return e;
                  }
                  async function _fetchDocument(t, e) {
                      if (t.destroyed) throw new Error("Worker was destroyed");
                      const i = await t.messageHandler.sendWithPromise("GetDocRequest", e, e.data ? [e.data.buffer] : null);
                      if (t.destroyed) throw new Error("Worker was destroyed");
                      return i;
                  }
                  function getUrlProp(t) {
                      if (t instanceof URL) return t.href;
                      try {
                          return new URL(t, window.location).href;
                      } catch {
                          if (_util.isNodeJS && "string" == typeof t) return t;
                      }
                      throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
                  }
                  function getDataProp(t) {
                      if (_util.isNodeJS && "undefined" != typeof Buffer && t instanceof Buffer) throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
                      if (t instanceof Uint8Array && t.byteLength === t.buffer.byteLength) return t;
                      if ("string" == typeof t) return (0, _util.stringToBytes)(t);
                      if (("object" == typeof t && !isNaN(t?.length)) || (0, _util.isArrayBuffer)(t)) return new Uint8Array(t);
                      throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
                  }
                  class PDFDocumentLoadingTask {
                      static #e = 0;
                      constructor() {
                          this._capability = new _util.PromiseCapability();
                          this._transport = null;
                          this._worker = null;
                          this.docId = "d" + PDFDocumentLoadingTask.#e++;
                          this.destroyed = !1;
                          this.onPassword = null;
                          this.onProgress = null;
                      }
                      get promise() {
                          return this._capability.promise;
                      }
                      async destroy() {
                          this.destroyed = !0;
                          try {
                              this._worker?.port && (this._worker._pendingDestroy = !0);
                              await this._transport?.destroy();
                          } catch (t) {
                              this._worker?.port && delete this._worker._pendingDestroy;
                              throw t;
                          }
                          this._transport = null;
                          if (this._worker) {
                              this._worker.destroy();
                              this._worker = null;
                          }
                      }
                  }
                  exports.PDFDocumentLoadingTask = PDFDocumentLoadingTask;
                  class PDFDataRangeTransport {
                      constructor(t, e, i = !1, s = null) {
                          this.length = t;
                          this.initialData = e;
                          this.progressiveDone = i;
                          this.contentDispositionFilename = s;
                          this._rangeListeners = [];
                          this._progressListeners = [];
                          this._progressiveReadListeners = [];
                          this._progressiveDoneListeners = [];
                          this._readyCapability = new _util.PromiseCapability();
                      }
                      addRangeListener(t) {
                          this._rangeListeners.push(t);
                      }
                      addProgressListener(t) {
                          this._progressListeners.push(t);
                      }
                      addProgressiveReadListener(t) {
                          this._progressiveReadListeners.push(t);
                      }
                      addProgressiveDoneListener(t) {
                          this._progressiveDoneListeners.push(t);
                      }
                      onDataRange(t, e) {
                          for (const i of this._rangeListeners) i(t, e);
                      }
                      onDataProgress(t, e) {
                          this._readyCapability.promise.then(() => {
                              for (const i of this._progressListeners) i(t, e);
                          });
                      }
                      onDataProgressiveRead(t) {
                          this._readyCapability.promise.then(() => {
                              for (const e of this._progressiveReadListeners) e(t);
                          });
                      }
                      onDataProgressiveDone() {
                          this._readyCapability.promise.then(() => {
                              for (const t of this._progressiveDoneListeners) t();
                          });
                      }
                      transportReady() {
                          this._readyCapability.resolve();
                      }
                      requestDataRange(t, e) {
                          (0, _util.unreachable)("Abstract method PDFDataRangeTransport.requestDataRange");
                      }
                      abort() {}
                  }
                  exports.PDFDataRangeTransport = PDFDataRangeTransport;
                  class PDFDocumentProxy {
                      constructor(t, e) {
                          this._pdfInfo = t;
                          this._transport = e;
                          Object.defineProperty(this, "getJavaScript", {
                              value: () => {
                                  (0, _display_utils.deprecated)("`PDFDocumentProxy.getJavaScript`, please use `PDFDocumentProxy.getJSActions` instead.");
                                  return this.getJSActions().then((t) => {
                                      if (!t) return t;
                                      const e = [];
                                      for (const i in t) e.push(...t[i]);
                                      return e;
                                  });
                              },
                          });
                      }
                      get annotationStorage() {
                          return this._transport.annotationStorage;
                      }
                      get filterFactory() {
                          return this._transport.filterFactory;
                      }
                      get numPages() {
                          return this._pdfInfo.numPages;
                      }
                      get fingerprints() {
                          return this._pdfInfo.fingerprints;
                      }
                      get isPureXfa() {
                          return (0, _util.shadow)(this, "isPureXfa", !!this._transport._htmlForXfa);
                      }
                      get allXfaHtml() {
                          return this._transport._htmlForXfa;
                      }
                      getPage(t) {
                          return this._transport.getPage(t);
                      }
                      getPageIndex(t) {
                          return this._transport.getPageIndex(t);
                      }
                      getDestinations() {
                          return this._transport.getDestinations();
                      }
                      getDestination(t) {
                          return this._transport.getDestination(t);
                      }
                      getPageLabels() {
                          return this._transport.getPageLabels();
                      }
                      getPageLayout() {
                          return this._transport.getPageLayout();
                      }
                      getPageMode() {
                          return this._transport.getPageMode();
                      }
                      getViewerPreferences() {
                          return this._transport.getViewerPreferences();
                      }
                      getOpenAction() {
                          return this._transport.getOpenAction();
                      }
                      getAttachments() {
                          return this._transport.getAttachments();
                      }
                      getJSActions() {
                          return this._transport.getDocJSActions();
                      }
                      getOutline() {
                          return this._transport.getOutline();
                      }
                      getOptionalContentConfig() {
                          return this._transport.getOptionalContentConfig();
                      }
                      getPermissions() {
                          return this._transport.getPermissions();
                      }
                      getMetadata() {
                          return this._transport.getMetadata();
                      }
                      getMarkInfo() {
                          return this._transport.getMarkInfo();
                      }
                      getData() {
                          return this._transport.getData();
                      }
                      saveDocument() {
                          return this._transport.saveDocument();
                      }
                      getDownloadInfo() {
                          return this._transport.downloadInfoCapability.promise;
                      }
                      cleanup(t = !1) {
                          return this._transport.startCleanup(t || this.isPureXfa);
                      }
                      destroy() {
                          return this.loadingTask.destroy();
                      }
                      get loadingParams() {
                          return this._transport.loadingParams;
                      }
                      get loadingTask() {
                          return this._transport.loadingTask;
                      }
                      getFieldObjects() {
                          return this._transport.getFieldObjects();
                      }
                      hasJSActions() {
                          return this._transport.hasJSActions();
                      }
                      getCalculationOrderIds() {
                          return this._transport.getCalculationOrderIds();
                      }
                  }
                  exports.PDFDocumentProxy = PDFDocumentProxy;
                  class PDFPageProxy {
                      #i = null;
                      #s = !1;
                      constructor(t, e, i, s = !1) {
                          this._pageIndex = t;
                          this._pageInfo = e;
                          this._transport = i;
                          this._stats = s ? new _display_utils.StatTimer() : null;
                          this._pdfBug = s;
                          this.commonObjs = i.commonObjs;
                          this.objs = new PDFObjects();
                          this._maybeCleanupAfterRender = !1;
                          this._intentStates = new Map();
                          this.destroyed = !1;
                      }
                      get pageNumber() {
                          return this._pageIndex + 1;
                      }
                      get rotate() {
                          return this._pageInfo.rotate;
                      }
                      get ref() {
                          return this._pageInfo.ref;
                      }
                      get userUnit() {
                          return this._pageInfo.userUnit;
                      }
                      get view() {
                          return this._pageInfo.view;
                      }
                      getViewport({ scale: t, rotation: e = this.rotate, offsetX: i = 0, offsetY: s = 0, dontFlip: n = !1 } = {}) {
                          return new _display_utils.PageViewport({ viewBox: this.view, scale: t, rotation: e, offsetX: i, offsetY: s, dontFlip: n });
                      }
                      getAnnotations({ intent: t = "display" } = {}) {
                          const e = this._transport.getRenderingIntent(t);
                          return this._transport.getAnnotations(this._pageIndex, e.renderingIntent);
                      }
                      getJSActions() {
                          return this._transport.getPageJSActions(this._pageIndex);
                      }
                      get filterFactory() {
                          return this._transport.filterFactory;
                      }
                      get isPureXfa() {
                          return (0, _util.shadow)(this, "isPureXfa", !!this._transport._htmlForXfa);
                      }
                      async getXfa() {
                          return this._transport._htmlForXfa?.children[this._pageIndex] || null;
                      }
                      render({
                          canvasContext: t,
                          viewport: e,
                          intent: i = "display",
                          annotationMode: s = _util.AnnotationMode.ENABLE,
                          transform: n = null,
                          background: a = null,
                          optionalContentConfigPromise: r = null,
                          annotationCanvasMap: o = null,
                          pageColors: l = null,
                          printAnnotationStorage: h = null,
                      }) {
                          this._stats?.time("Overall");
                          const c = this._transport.getRenderingIntent(i, s, h);
                          this.#s = !1;
                          this.#n();
                          r || (r = this._transport.getOptionalContentConfig());
                          let d = this._intentStates.get(c.cacheKey);
                          if (!d) {
                              d = Object.create(null);
                              this._intentStates.set(c.cacheKey, d);
                          }
                          if (d.streamReaderCancelTimeout) {
                              clearTimeout(d.streamReaderCancelTimeout);
                              d.streamReaderCancelTimeout = null;
                          }
                          const u = !!(c.renderingIntent & _util.RenderingIntentFlag.PRINT);
                          if (!d.displayReadyCapability) {
                              d.displayReadyCapability = new _util.PromiseCapability();
                              d.operatorList = { fnArray: [], argsArray: [], lastChunk: !1, separateAnnots: null };
                              this._stats?.time("Page Request");
                              this._pumpOperatorList(c);
                          }
                          const complete = (t) => {
                                  d.renderTasks.delete(p);
                                  (this._maybeCleanupAfterRender || u) && (this.#s = !0);
                                  this.#a(!u);
                                  if (t) {
                                      p.capability.reject(t);
                                      this._abortOperatorList({ intentState: d, reason: t instanceof Error ? t : new Error(t) });
                                  } else p.capability.resolve();
                                  this._stats?.timeEnd("Rendering");
                                  this._stats?.timeEnd("Overall");
                              },
                              p = new InternalRenderTask({
                                  callback: complete,
                                  params: { canvasContext: t, viewport: e, transform: n, background: a },
                                  objs: this.objs,
                                  commonObjs: this.commonObjs,
                                  annotationCanvasMap: o,
                                  operatorList: d.operatorList,
                                  pageIndex: this._pageIndex,
                                  canvasFactory: this._transport.canvasFactory,
                                  filterFactory: this._transport.filterFactory,
                                  useRequestAnimationFrame: !u,
                                  pdfBug: this._pdfBug,
                                  pageColors: l,
                              });
                          (d.renderTasks ||= new Set()).add(p);
                          const g = p.task;
                          Promise.all([d.displayReadyCapability.promise, r])
                              .then(([t, e]) => {
                                  if (this.destroyed) complete();
                                  else {
                                      this._stats?.time("Rendering");
                                      p.initializeGraphics({ transparency: t, optionalContentConfig: e });
                                      p.operatorListChanged();
                                  }
                              })
                              .catch(complete);
                          return g;
                      }
                      getOperatorList({ intent: t = "display", annotationMode: e = _util.AnnotationMode.ENABLE, printAnnotationStorage: i = null } = {}) {
                          const s = this._transport.getRenderingIntent(t, e, i, !0);
                          let n,
                              a = this._intentStates.get(s.cacheKey);
                          if (!a) {
                              a = Object.create(null);
                              this._intentStates.set(s.cacheKey, a);
                          }
                          if (!a.opListReadCapability) {
                              n = Object.create(null);
                              n.operatorListChanged = function operatorListChanged() {
                                  if (a.operatorList.lastChunk) {
                                      a.opListReadCapability.resolve(a.operatorList);
                                      a.renderTasks.delete(n);
                                  }
                              };
                              a.opListReadCapability = new _util.PromiseCapability();
                              (a.renderTasks ||= new Set()).add(n);
                              a.operatorList = { fnArray: [], argsArray: [], lastChunk: !1, separateAnnots: null };
                              this._stats?.time("Page Request");
                              this._pumpOperatorList(s);
                          }
                          return a.opListReadCapability.promise;
                      }
                      streamTextContent({ includeMarkedContent: t = !1, disableNormalization: e = !1 } = {}) {
                          return this._transport.messageHandler.sendWithStream(
                              "GetTextContent",
                              { pageIndex: this._pageIndex, includeMarkedContent: !0 === t, disableNormalization: !0 === e },
                              { highWaterMark: 100, size: (t) => t.items.length }
                          );
                      }
                      getTextContent(t = {}) {
                          if (this._transport._htmlForXfa) return this.getXfa().then((t) => _xfa_text.XfaText.textContent(t));
                          const e = this.streamTextContent(t);
                          return new Promise(function (t, i) {
                              const s = e.getReader(),
                                  n = { items: [], styles: Object.create(null) };
                              !(function pump() {
                                  s.read().then(function ({ value: e, done: i }) {
                                      if (i) t(n);
                                      else {
                                          Object.assign(n.styles, e.styles);
                                          n.items.push(...e.items);
                                          pump();
                                      }
                                  }, i);
                              })();
                          });
                      }
                      getStructTree() {
                          return this._transport.getStructTree(this._pageIndex);
                      }
                      _destroy() {
                          this.destroyed = !0;
                          const t = [];
                          for (const e of this._intentStates.values()) {
                              this._abortOperatorList({ intentState: e, reason: new Error("Page was destroyed."), force: !0 });
                              if (!e.opListReadCapability)
                                  for (const i of e.renderTasks) {
                                      t.push(i.completed);
                                      i.cancel();
                                  }
                          }
                          this.objs.clear();
                          this.#s = !1;
                          this.#n();
                          return Promise.all(t);
                      }
                      cleanup(t = !1) {
                          this.#s = !0;
                          const e = this.#a(!1);
                          t && e && (this._stats &&= new _display_utils.StatTimer());
                          return e;
                      }
                      #a(t = !1) {
                          this.#n();
                          if (!this.#s || this.destroyed) return !1;
                          if (t) {
                              this.#i = setTimeout(() => {
                                  this.#i = null;
                                  this.#a(!1);
                              }, DELAYED_CLEANUP_TIMEOUT);
                              return !1;
                          }
                          for (const { renderTasks: t, operatorList: e } of this._intentStates.values()) if (t.size > 0 || !e.lastChunk) return !1;
                          this._intentStates.clear();
                          this.objs.clear();
                          this.#s = !1;
                          return !0;
                      }
                      #n() {
                          if (this.#i) {
                              clearTimeout(this.#i);
                              this.#i = null;
                          }
                      }
                      _startRenderPage(t, e) {
                          const i = this._intentStates.get(e);
                          if (i) {
                              this._stats?.timeEnd("Page Request");
                              i.displayReadyCapability?.resolve(t);
                          }
                      }
                      _renderPageChunk(t, e) {
                          for (let i = 0, s = t.length; i < s; i++) {
                              e.operatorList.fnArray.push(t.fnArray[i]);
                              e.operatorList.argsArray.push(t.argsArray[i]);
                          }
                          e.operatorList.lastChunk = t.lastChunk;
                          e.operatorList.separateAnnots = t.separateAnnots;
                          for (const t of e.renderTasks) t.operatorListChanged();
                          t.lastChunk && this.#a(!0);
                      }
                      _pumpOperatorList({ renderingIntent: t, cacheKey: e, annotationStorageSerializable: i }) {
                          const { map: s, transfers: n } = i,
                              a = this._transport.messageHandler.sendWithStream("GetOperatorList", { pageIndex: this._pageIndex, intent: t, cacheKey: e, annotationStorage: s }, n).getReader(),
                              r = this._intentStates.get(e);
                          r.streamReader = a;
                          const pump = () => {
                              a.read().then(
                                  ({ value: t, done: e }) => {
                                      if (e) r.streamReader = null;
                                      else if (!this._transport.destroyed) {
                                          this._renderPageChunk(t, r);
                                          pump();
                                      }
                                  },
                                  (t) => {
                                      r.streamReader = null;
                                      if (!this._transport.destroyed) {
                                          if (r.operatorList) {
                                              r.operatorList.lastChunk = !0;
                                              for (const t of r.renderTasks) t.operatorListChanged();
                                              this.#a(!0);
                                          }
                                          if (r.displayReadyCapability) r.displayReadyCapability.reject(t);
                                          else {
                                              if (!r.opListReadCapability) throw t;
                                              r.opListReadCapability.reject(t);
                                          }
                                      }
                                  }
                              );
                          };
                          pump();
                      }
                      _abortOperatorList({ intentState: t, reason: e, force: i = !1 }) {
                          if (t.streamReader) {
                              if (t.streamReaderCancelTimeout) {
                                  clearTimeout(t.streamReaderCancelTimeout);
                                  t.streamReaderCancelTimeout = null;
                              }
                              if (!i) {
                                  if (t.renderTasks.size > 0) return;
                                  if (e instanceof _display_utils.RenderingCancelledException) {
                                      let i = RENDERING_CANCELLED_TIMEOUT;
                                      e.extraDelay > 0 && e.extraDelay < 1e3 && (i += e.extraDelay);
                                      t.streamReaderCancelTimeout = setTimeout(() => {
                                          t.streamReaderCancelTimeout = null;
                                          this._abortOperatorList({ intentState: t, reason: e, force: !0 });
                                      }, i);
                                      return;
                                  }
                              }
                              t.streamReader.cancel(new _util.AbortException(e.message)).catch(() => {});
                              t.streamReader = null;
                              if (!this._transport.destroyed) {
                                  for (const [e, i] of this._intentStates)
                                      if (i === t) {
                                          this._intentStates.delete(e);
                                          break;
                                      }
                                  this.cleanup();
                              }
                          }
                      }
                      get stats() {
                          return this._stats;
                      }
                  }
                  exports.PDFPageProxy = PDFPageProxy;
                  class LoopbackPort {
                      #r = new Set();
                      #o = Promise.resolve();
                      postMessage(t, e) {
                          const i = { data: structuredClone(t, e ? { transfer: e } : null) };
                          this.#o.then(() => {
                              for (const t of this.#r) t.call(this, i);
                          });
                      }
                      addEventListener(t, e) {
                          this.#r.add(e);
                      }
                      removeEventListener(t, e) {
                          this.#r.delete(e);
                      }
                      terminate() {
                          this.#r.clear();
                      }
                  }
                  exports.LoopbackPort = LoopbackPort;
                  const PDFWorkerUtil = { isWorkerDisabled: !1, fallbackWorkerSrc: null, fakeWorkerId: 0 };
                  exports.PDFWorkerUtil = PDFWorkerUtil;
                  if (_util.isNodeJS && "function" == typeof require) {
                      PDFWorkerUtil.isWorkerDisabled = !0;
                      PDFWorkerUtil.fallbackWorkerSrc = "./pdf.worker.min.js";
                  } else if ("object" == typeof document) {
                      const t = document?.currentScript?.src;
                      t && (PDFWorkerUtil.fallbackWorkerSrc = t.replace(/(\.(?:min\.)?js)(\?.*)?$/i, ".worker$1$2"));
                  }
                  PDFWorkerUtil.isSameOrigin = function (t, e) {
                      let i;
                      try {
                          i = new URL(t);
                          if (!i.origin || "null" === i.origin) return !1;
                      } catch {
                          return !1;
                      }
                      const s = new URL(e, i);
                      return i.origin === s.origin;
                  };
                  PDFWorkerUtil.createCDNWrapper = function (t) {
                      const e = `importScripts("${t}");`;
                      return URL.createObjectURL(new Blob([e]));
                  };
                  class PDFWorker {
                      static #l;
                      constructor({ name: t = null, port: e = null, verbosity: i = (0, _util.getVerbosityLevel)() } = {}) {
                          this.name = t;
                          this.destroyed = !1;
                          this.verbosity = i;
                          this._readyCapability = new _util.PromiseCapability();
                          this._port = null;
                          this._webWorker = null;
                          this._messageHandler = null;
                          if (e) {
                              if (PDFWorker.#l?.has(e)) throw new Error("Cannot use more than one PDFWorker per port.");
                              (PDFWorker.#l ||= new WeakMap()).set(e, this);
                              this._initializeFromPort(e);
                          } else this._initialize();
                      }
                      get promise() {
                          return this._readyCapability.promise;
                      }
                      get port() {
                          return this._port;
                      }
                      get messageHandler() {
                          return this._messageHandler;
                      }
                      _initializeFromPort(t) {
                          this._port = t;
                          this._messageHandler = new _message_handler.MessageHandler("main", "worker", t);
                          this._messageHandler.on("ready", function () {});
                          this._readyCapability.resolve();
                          this._messageHandler.send("configure", { verbosity: this.verbosity });
                      }
                      _initialize() {
                          if (!PDFWorkerUtil.isWorkerDisabled && !PDFWorker._mainThreadWorkerMessageHandler) {
                              let { workerSrc: t } = PDFWorker;
                              try {
                                  PDFWorkerUtil.isSameOrigin(window.location.href, t) || (t = PDFWorkerUtil.createCDNWrapper(new URL(t, window.location).href));
                                  const e = new Worker(t),
                                      i = new _message_handler.MessageHandler("main", "worker", e),
                                      terminateEarly = () => {
                                          e.removeEventListener("error", onWorkerError);
                                          i.destroy();
                                          e.terminate();
                                          this.destroyed ? this._readyCapability.reject(new Error("Worker was destroyed")) : this._setupFakeWorker();
                                      },
                                      onWorkerError = () => {
                                          this._webWorker || terminateEarly();
                                      };
                                  e.addEventListener("error", onWorkerError);
                                  i.on("test", (t) => {
                                      e.removeEventListener("error", onWorkerError);
                                      if (this.destroyed) terminateEarly();
                                      else if (t) {
                                          this._messageHandler = i;
                                          this._port = e;
                                          this._webWorker = e;
                                          this._readyCapability.resolve();
                                          i.send("configure", { verbosity: this.verbosity });
                                      } else {
                                          this._setupFakeWorker();
                                          i.destroy();
                                          e.terminate();
                                      }
                                  });
                                  i.on("ready", (t) => {
                                      e.removeEventListener("error", onWorkerError);
                                      if (this.destroyed) terminateEarly();
                                      else
                                          try {
                                              sendTest();
                                          } catch {
                                              this._setupFakeWorker();
                                          }
                                  });
                                  const sendTest = () => {
                                      const t = new Uint8Array();
                                      i.send("test", t, [t.buffer]);
                                  };
                                  sendTest();
                                  return;
                              } catch {
                                  (0, _util.info)("The worker has been disabled.");
                              }
                          }
                          this._setupFakeWorker();
                      }
                      _setupFakeWorker() {
                          if (!PDFWorkerUtil.isWorkerDisabled) {
                              (0, _util.warn)("Setting up fake worker.");
                              PDFWorkerUtil.isWorkerDisabled = !0;
                          }
                          PDFWorker._setupFakeWorkerGlobal
                              .then((t) => {
                                  if (this.destroyed) {
                                      this._readyCapability.reject(new Error("Worker was destroyed"));
                                      return;
                                  }
                                  const e = new LoopbackPort();
                                  this._port = e;
                                  const i = "fake" + PDFWorkerUtil.fakeWorkerId++,
                                      s = new _message_handler.MessageHandler(i + "_worker", i, e);
                                  t.setup(s, e);
                                  const n = new _message_handler.MessageHandler(i, i + "_worker", e);
                                  this._messageHandler = n;
                                  this._readyCapability.resolve();
                                  n.send("configure", { verbosity: this.verbosity });
                              })
                              .catch((t) => {
                                  this._readyCapability.reject(new Error(`Setting up fake worker failed: "${t.message}".`));
                              });
                      }
                      destroy() {
                          this.destroyed = !0;
                          if (this._webWorker) {
                              this._webWorker.terminate();
                              this._webWorker = null;
                          }
                          PDFWorker.#l?.delete(this._port);
                          this._port = null;
                          if (this._messageHandler) {
                              this._messageHandler.destroy();
                              this._messageHandler = null;
                          }
                      }
                      static fromPort(t) {
                          if (!t?.port) throw new Error("PDFWorker.fromPort - invalid method signature.");
                          const e = this.#l?.get(t.port);
                          if (e) {
                              if (e._pendingDestroy) throw new Error("PDFWorker.fromPort - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
                              return e;
                          }
                          return new PDFWorker(t);
                      }
                      static get workerSrc() {
                          if (_worker_options.GlobalWorkerOptions.workerSrc) return _worker_options.GlobalWorkerOptions.workerSrc;
                          if (null !== PDFWorkerUtil.fallbackWorkerSrc) {
                              _util.isNodeJS || (0, _display_utils.deprecated)('No "GlobalWorkerOptions.workerSrc" specified.');
                              return PDFWorkerUtil.fallbackWorkerSrc;
                          }
                          throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
                      }
                      static get _mainThreadWorkerMessageHandler() {
                          try {
                              return globalThis.pdfjsWorker?.WorkerMessageHandler || null;
                          } catch {
                              return null;
                          }
                      }
                      static get _setupFakeWorkerGlobal() {
                          const loader = async () => {
                              const mainWorkerMessageHandler = this._mainThreadWorkerMessageHandler;
                              if (mainWorkerMessageHandler) return mainWorkerMessageHandler;
                              if (_util.isNodeJS && "function" == typeof require) {
                                  const worker = eval("require")(this.workerSrc);
                                  return worker.WorkerMessageHandler;
                              }
                              await (0, _display_utils.loadScript)(this.workerSrc);
                              return window.pdfjsWorker.WorkerMessageHandler;
                          };
                          return (0, _util.shadow)(this, "_setupFakeWorkerGlobal", loader());
                      }
                  }
                  exports.PDFWorker = PDFWorker;
                  class WorkerTransport {
                      #h = new Map();
                      #c = new Map();
                      #d = new Map();
                      #u = null;
                      constructor(t, e, i, s, n) {
                          this.messageHandler = t;
                          this.loadingTask = e;
                          this.commonObjs = new PDFObjects();
                          this.fontLoader = new _font_loader.FontLoader({ ownerDocument: s.ownerDocument, styleElement: s.styleElement });
                          this._params = s;
                          this.canvasFactory = n.canvasFactory;
                          this.filterFactory = n.filterFactory;
                          this.cMapReaderFactory = n.cMapReaderFactory;
                          this.standardFontDataFactory = n.standardFontDataFactory;
                          this.destroyed = !1;
                          this.destroyCapability = null;
                          this._networkStream = i;
                          this._fullReader = null;
                          this._lastProgress = null;
                          this.downloadInfoCapability = new _util.PromiseCapability();
                          this.setupMessageHandler();
                      }
                      #p(t, e = null) {
                          const i = this.#h.get(t);
                          if (i) return i;
                          const s = this.messageHandler.sendWithPromise(t, e);
                          this.#h.set(t, s);
                          return s;
                      }
                      get annotationStorage() {
                          return (0, _util.shadow)(this, "annotationStorage", new _annotation_storage.AnnotationStorage());
                      }
                      getRenderingIntent(t, e = _util.AnnotationMode.ENABLE, i = null, s = !1) {
                          let n = _util.RenderingIntentFlag.DISPLAY,
                              a = _annotation_storage.SerializableEmpty;
                          switch (t) {
                              case "any":
                                  n = _util.RenderingIntentFlag.ANY;
                                  break;
                              case "display":
                                  break;
                              case "print":
                                  n = _util.RenderingIntentFlag.PRINT;
                                  break;
                              default:
                                  (0, _util.warn)(`getRenderingIntent - invalid intent: ${t}`);
                          }
                          switch (e) {
                              case _util.AnnotationMode.DISABLE:
                                  n += _util.RenderingIntentFlag.ANNOTATIONS_DISABLE;
                                  break;
                              case _util.AnnotationMode.ENABLE:
                                  break;
                              case _util.AnnotationMode.ENABLE_FORMS:
                                  n += _util.RenderingIntentFlag.ANNOTATIONS_FORMS;
                                  break;
                              case _util.AnnotationMode.ENABLE_STORAGE:
                                  n += _util.RenderingIntentFlag.ANNOTATIONS_STORAGE;
                                  a = (n & _util.RenderingIntentFlag.PRINT && i instanceof _annotation_storage.PrintAnnotationStorage ? i : this.annotationStorage).serializable;
                                  break;
                              default:
                                  (0, _util.warn)(`getRenderingIntent - invalid annotationMode: ${e}`);
                          }
                          s && (n += _util.RenderingIntentFlag.OPLIST);
                          return { renderingIntent: n, cacheKey: `${n}_${a.hash}`, annotationStorageSerializable: a };
                      }
                      destroy() {
                          if (this.destroyCapability) return this.destroyCapability.promise;
                          this.destroyed = !0;
                          this.destroyCapability = new _util.PromiseCapability();
                          this.#u?.reject(new Error("Worker was destroyed during onPassword callback"));
                          const t = [];
                          for (const e of this.#c.values()) t.push(e._destroy());
                          this.#c.clear();
                          this.#d.clear();
                          this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
                          const e = this.messageHandler.sendWithPromise("Terminate", null);
                          t.push(e);
                          Promise.all(t).then(() => {
                              this.commonObjs.clear();
                              this.fontLoader.clear();
                              this.#h.clear();
                              this.filterFactory.destroy();
                              this._networkStream?.cancelAllRequests(new _util.AbortException("Worker was terminated."));
                              if (this.messageHandler) {
                                  this.messageHandler.destroy();
                                  this.messageHandler = null;
                              }
                              this.destroyCapability.resolve();
                          }, this.destroyCapability.reject);
                          return this.destroyCapability.promise;
                      }
                      setupMessageHandler() {
                          const { messageHandler: t, loadingTask: e } = this;
                          t.on("GetReader", (t, e) => {
                              (0, _util.assert)(this._networkStream, "GetReader - no `IPDFStream` instance available.");
                              this._fullReader = this._networkStream.getFullReader();
                              this._fullReader.onProgress = (t) => {
                                  this._lastProgress = { loaded: t.loaded, total: t.total };
                              };
                              e.onPull = () => {
                                  this._fullReader
                                      .read()
                                      .then(function ({ value: t, done: i }) {
                                          if (i) e.close();
                                          else {
                                              (0, _util.assert)(t instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer.");
                                              e.enqueue(new Uint8Array(t), 1, [t]);
                                          }
                                      })
                                      .catch((t) => {
                                          e.error(t);
                                      });
                              };
                              e.onCancel = (t) => {
                                  this._fullReader.cancel(t);
                                  e.ready.catch((t) => {
                                      if (!this.destroyed) throw t;
                                  });
                              };
                          });
                          t.on("ReaderHeadersReady", (t) => {
                              const i = new _util.PromiseCapability(),
                                  s = this._fullReader;
                              s.headersReady.then(() => {
                                  if (!s.isStreamingSupported || !s.isRangeSupported) {
                                      this._lastProgress && e.onProgress?.(this._lastProgress);
                                      s.onProgress = (t) => {
                                          e.onProgress?.({ loaded: t.loaded, total: t.total });
                                      };
                                  }
                                  i.resolve({ isStreamingSupported: s.isStreamingSupported, isRangeSupported: s.isRangeSupported, contentLength: s.contentLength });
                              }, i.reject);
                              return i.promise;
                          });
                          t.on("GetRangeReader", (t, e) => {
                              (0, _util.assert)(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
                              const i = this._networkStream.getRangeReader(t.begin, t.end);
                              if (i) {
                                  e.onPull = () => {
                                      i.read()
                                          .then(function ({ value: t, done: i }) {
                                              if (i) e.close();
                                              else {
                                                  (0, _util.assert)(t instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer.");
                                                  e.enqueue(new Uint8Array(t), 1, [t]);
                                              }
                                          })
                                          .catch((t) => {
                                              e.error(t);
                                          });
                                  };
                                  e.onCancel = (t) => {
                                      i.cancel(t);
                                      e.ready.catch((t) => {
                                          if (!this.destroyed) throw t;
                                      });
                                  };
                              } else e.close();
                          });
                          t.on("GetDoc", ({ pdfInfo: t }) => {
                              this._numPages = t.numPages;
                              this._htmlForXfa = t.htmlForXfa;
                              delete t.htmlForXfa;
                              e._capability.resolve(new PDFDocumentProxy(t, this));
                          });
                          t.on("DocException", function (t) {
                              let i;
                              switch (t.name) {
                                  case "PasswordException":
                                      i = new _util.PasswordException(t.message, t.code);
                                      break;
                                  case "InvalidPDFException":
                                      i = new _util.InvalidPDFException(t.message);
                                      break;
                                  case "MissingPDFException":
                                      i = new _util.MissingPDFException(t.message);
                                      break;
                                  case "UnexpectedResponseException":
                                      i = new _util.UnexpectedResponseException(t.message, t.status);
                                      break;
                                  case "UnknownErrorException":
                                      i = new _util.UnknownErrorException(t.message, t.details);
                                      break;
                                  default:
                                      (0, _util.unreachable)("DocException - expected a valid Error.");
                              }
                              e._capability.reject(i);
                          });
                          t.on("PasswordRequest", (t) => {
                              this.#u = new _util.PromiseCapability();
                              if (e.onPassword) {
                                  const updatePassword = (t) => {
                                      t instanceof Error ? this.#u.reject(t) : this.#u.resolve({ password: t });
                                  };
                                  try {
                                      e.onPassword(updatePassword, t.code);
                                  } catch (t) {
                                      this.#u.reject(t);
                                  }
                              } else this.#u.reject(new _util.PasswordException(t.message, t.code));
                              return this.#u.promise;
                          });
                          t.on("DataLoaded", (t) => {
                              e.onProgress?.({ loaded: t.length, total: t.length });
                              this.downloadInfoCapability.resolve(t);
                          });
                          t.on("StartRenderPage", (t) => {
                              if (this.destroyed) return;
                              this.#c.get(t.pageIndex)._startRenderPage(t.transparency, t.cacheKey);
                          });
                          t.on("commonobj", ([e, i, s]) => {
                              if (!this.destroyed && !this.commonObjs.has(e))
                                  switch (i) {
                                      case "Font":
                                          const n = this._params;
                                          if ("error" in s) {
                                              const t = s.error;
                                              (0, _util.warn)(`Error during font loading: ${t}`);
                                              this.commonObjs.resolve(e, t);
                                              break;
                                          }
                                          const a = n.pdfBug && globalThis.FontInspector?.enabled ? (t, e) => globalThis.FontInspector.fontAdded(t, e) : null,
                                              r = new _font_loader.FontFaceObject(s, { isEvalSupported: n.isEvalSupported, disableFontFace: n.disableFontFace, ignoreErrors: n.ignoreErrors, inspectFont: a });
                                          this.fontLoader
                                              .bind(r)
                                              .catch((i) => t.sendWithPromise("FontFallback", { id: e }))
                                              .finally(() => {
                                                  !n.fontExtraProperties && r.data && (r.data = null);
                                                  this.commonObjs.resolve(e, r);
                                              });
                                          break;
                                      case "FontPath":
                                      case "Image":
                                      case "Pattern":
                                          this.commonObjs.resolve(e, s);
                                          break;
                                      default:
                                          throw new Error(`Got unknown common object type ${i}`);
                                  }
                          });
                          t.on("obj", ([t, e, i, s]) => {
                              if (this.destroyed) return;
                              const n = this.#c.get(e);
                              if (!n.objs.has(t))
                                  switch (i) {
                                      case "Image":
                                          n.objs.resolve(t, s);
                                          if (s) {
                                              let t;
                                              if (s.bitmap) {
                                                  const { width: e, height: i } = s;
                                                  t = e * i * 4;
                                              } else t = s.data?.length || 0;
                                              t > _util.MAX_IMAGE_SIZE_TO_CACHE && (n._maybeCleanupAfterRender = !0);
                                          }
                                          break;
                                      case "Pattern":
                                          n.objs.resolve(t, s);
                                          break;
                                      default:
                                          throw new Error(`Got unknown object type ${i}`);
                                  }
                          });
                          t.on("DocProgress", (t) => {
                              this.destroyed || e.onProgress?.({ loaded: t.loaded, total: t.total });
                          });
                          t.on("FetchBuiltInCMap", (t) =>
                              this.destroyed
                                  ? Promise.reject(new Error("Worker was destroyed."))
                                  : this.cMapReaderFactory
                                  ? this.cMapReaderFactory.fetch(t)
                                  : Promise.reject(new Error("CMapReaderFactory not initialized, see the `useWorkerFetch` parameter."))
                          );
                          t.on("FetchStandardFontData", (t) =>
                              this.destroyed
                                  ? Promise.reject(new Error("Worker was destroyed."))
                                  : this.standardFontDataFactory
                                  ? this.standardFontDataFactory.fetch(t)
                                  : Promise.reject(new Error("StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter."))
                          );
                      }
                      getData() {
                          return this.messageHandler.sendWithPromise("GetData", null);
                      }
                      saveDocument() {
                          this.annotationStorage.size <= 0 && (0, _util.warn)("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
                          const { map: t, transfers: e } = this.annotationStorage.serializable;
                          return this.messageHandler.sendWithPromise("SaveDocument", { isPureXfa: !!this._htmlForXfa, numPages: this._numPages, annotationStorage: t, filename: this._fullReader?.filename ?? null }, e).finally(() => {
                              this.annotationStorage.resetModified();
                          });
                      }
                      getPage(t) {
                          if (!Number.isInteger(t) || t <= 0 || t > this._numPages) return Promise.reject(new Error("Invalid page request."));
                          const e = t - 1,
                              i = this.#d.get(e);
                          if (i) return i;
                          const s = this.messageHandler.sendWithPromise("GetPage", { pageIndex: e }).then((t) => {
                              if (this.destroyed) throw new Error("Transport destroyed");
                              const i = new PDFPageProxy(e, t, this, this._params.pdfBug);
                              this.#c.set(e, i);
                              return i;
                          });
                          this.#d.set(e, s);
                          return s;
                      }
                      getPageIndex(t) {
                          return "object" != typeof t || null === t || !Number.isInteger(t.num) || t.num < 0 || !Number.isInteger(t.gen) || t.gen < 0
                              ? Promise.reject(new Error("Invalid pageIndex request."))
                              : this.messageHandler.sendWithPromise("GetPageIndex", { num: t.num, gen: t.gen });
                      }
                      getAnnotations(t, e) {
                          return this.messageHandler.sendWithPromise("GetAnnotations", { pageIndex: t, intent: e });
                      }
                      getFieldObjects() {
                          return this.#p("GetFieldObjects");
                      }
                      hasJSActions() {
                          return this.#p("HasJSActions");
                      }
                      getCalculationOrderIds() {
                          return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
                      }
                      getDestinations() {
                          return this.messageHandler.sendWithPromise("GetDestinations", null);
                      }
                      getDestination(t) {
                          return "string" != typeof t ? Promise.reject(new Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", { id: t });
                      }
                      getPageLabels() {
                          return this.messageHandler.sendWithPromise("GetPageLabels", null);
                      }
                      getPageLayout() {
                          return this.messageHandler.sendWithPromise("GetPageLayout", null);
                      }
                      getPageMode() {
                          return this.messageHandler.sendWithPromise("GetPageMode", null);
                      }
                      getViewerPreferences() {
                          return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
                      }
                      getOpenAction() {
                          return this.messageHandler.sendWithPromise("GetOpenAction", null);
                      }
                      getAttachments() {
                          return this.messageHandler.sendWithPromise("GetAttachments", null);
                      }
                      getDocJSActions() {
                          return this.#p("GetDocJSActions");
                      }
                      getPageJSActions(t) {
                          return this.messageHandler.sendWithPromise("GetPageJSActions", { pageIndex: t });
                      }
                      getStructTree(t) {
                          return this.messageHandler.sendWithPromise("GetStructTree", { pageIndex: t });
                      }
                      getOutline() {
                          return this.messageHandler.sendWithPromise("GetOutline", null);
                      }
                      getOptionalContentConfig() {
                          return this.messageHandler.sendWithPromise("GetOptionalContentConfig", null).then((t) => new _optional_content_config.OptionalContentConfig(t));
                      }
                      getPermissions() {
                          return this.messageHandler.sendWithPromise("GetPermissions", null);
                      }
                      getMetadata() {
                          const t = "GetMetadata",
                              e = this.#h.get(t);
                          if (e) return e;
                          const i = this.messageHandler
                              .sendWithPromise(t, null)
                              .then((t) => ({ info: t[0], metadata: t[1] ? new _metadata.Metadata(t[1]) : null, contentDispositionFilename: this._fullReader?.filename ?? null, contentLength: this._fullReader?.contentLength ?? null }));
                          this.#h.set(t, i);
                          return i;
                      }
                      getMarkInfo() {
                          return this.messageHandler.sendWithPromise("GetMarkInfo", null);
                      }
                      async startCleanup(t = !1) {
                          if (!this.destroyed) {
                              await this.messageHandler.sendWithPromise("Cleanup", null);
                              for (const t of this.#c.values()) {
                                  if (!t.cleanup()) throw new Error(`startCleanup: Page ${t.pageNumber} is currently rendering.`);
                              }
                              this.commonObjs.clear();
                              t || this.fontLoader.clear();
                              this.#h.clear();
                              this.filterFactory.destroy(!0);
                          }
                      }
                      get loadingParams() {
                          const { disableAutoFetch: t, enableXfa: e } = this._params;
                          return (0, _util.shadow)(this, "loadingParams", { disableAutoFetch: t, enableXfa: e });
                      }
                  }
                  class PDFObjects {
                      #g = Object.create(null);
                      #m(t) {
                          return (this.#g[t] ||= { capability: new _util.PromiseCapability(), data: null });
                      }
                      get(t, e = null) {
                          if (e) {
                              const i = this.#m(t);
                              i.capability.promise.then(() => e(i.data));
                              return null;
                          }
                          const i = this.#g[t];
                          if (!i?.capability.settled) throw new Error(`Requesting object that isn't resolved yet ${t}.`);
                          return i.data;
                      }
                      has(t) {
                          const e = this.#g[t];
                          return e?.capability.settled || !1;
                      }
                      resolve(t, e = null) {
                          const i = this.#m(t);
                          i.data = e;
                          i.capability.resolve();
                      }
                      clear() {
                          for (const t in this.#g) {
                              const { data: e } = this.#g[t];
                              e?.bitmap?.close();
                          }
                          this.#g = Object.create(null);
                      }
                  }
                  class RenderTask {
                      #f = null;
                      constructor(t) {
                          this.#f = t;
                          this.onContinue = null;
                      }
                      get promise() {
                          return this.#f.capability.promise;
                      }
                      cancel(t = 0) {
                          this.#f.cancel(null, t);
                      }
                      get separateAnnots() {
                          const { separateAnnots: t } = this.#f.operatorList;
                          if (!t) return !1;
                          const { annotationCanvasMap: e } = this.#f;
                          return t.form || (t.canvas && e?.size > 0);
                      }
                  }
                  exports.RenderTask = RenderTask;
                  class InternalRenderTask {
                      static #b = new WeakSet();
                      constructor({
                          callback: t,
                          params: e,
                          objs: i,
                          commonObjs: s,
                          annotationCanvasMap: n,
                          operatorList: a,
                          pageIndex: r,
                          canvasFactory: o,
                          filterFactory: l,
                          useRequestAnimationFrame: h = !1,
                          pdfBug: c = !1,
                          pageColors: d = null,
                      }) {
                          this.callback = t;
                          this.params = e;
                          this.objs = i;
                          this.commonObjs = s;
                          this.annotationCanvasMap = n;
                          this.operatorListIdx = null;
                          this.operatorList = a;
                          this._pageIndex = r;
                          this.canvasFactory = o;
                          this.filterFactory = l;
                          this._pdfBug = c;
                          this.pageColors = d;
                          this.running = !1;
                          this.graphicsReadyCallback = null;
                          this.graphicsReady = !1;
                          this._useRequestAnimationFrame = !0 === h && "undefined" != typeof window;
                          this.cancelled = !1;
                          this.capability = new _util.PromiseCapability();
                          this.task = new RenderTask(this);
                          this._cancelBound = this.cancel.bind(this);
                          this._continueBound = this._continue.bind(this);
                          this._scheduleNextBound = this._scheduleNext.bind(this);
                          this._nextBound = this._next.bind(this);
                          this._canvas = e.canvasContext.canvas;
                      }
                      get completed() {
                          return this.capability.promise.catch(function () {});
                      }
                      initializeGraphics({ transparency: t = !1, optionalContentConfig: e }) {
                          if (this.cancelled) return;
                          if (this._canvas) {
                              if (InternalRenderTask.#b.has(this._canvas)) throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
                              InternalRenderTask.#b.add(this._canvas);
                          }
                          if (this._pdfBug && globalThis.StepperManager?.enabled) {
                              this.stepper = globalThis.StepperManager.create(this._pageIndex);
                              this.stepper.init(this.operatorList);
                              this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint();
                          }
                          const { canvasContext: i, viewport: s, transform: n, background: a } = this.params;
                          this.gfx = new _canvas.CanvasGraphics(i, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, { optionalContentConfig: e }, this.annotationCanvasMap, this.pageColors);
                          this.gfx.beginDrawing({ transform: n, viewport: s, transparency: t, background: a });
                          this.operatorListIdx = 0;
                          this.graphicsReady = !0;
                          this.graphicsReadyCallback?.();
                      }
                      cancel(t = null, e = 0) {
                          this.running = !1;
                          this.cancelled = !0;
                          this.gfx?.endDrawing();
                          InternalRenderTask.#b.delete(this._canvas);
                          this.callback(t || new _display_utils.RenderingCancelledException(`Rendering cancelled, page ${this._pageIndex + 1}`, e));
                      }
                      operatorListChanged() {
                          if (this.graphicsReady) {
                              this.stepper?.updateOperatorList(this.operatorList);
                              this.running || this._continue();
                          } else this.graphicsReadyCallback ||= this._continueBound;
                      }
                      _continue() {
                          this.running = !0;
                          this.cancelled || (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext());
                      }
                      _scheduleNext() {
                          this._useRequestAnimationFrame
                              ? window.requestAnimationFrame(() => {
                                    this._nextBound().catch(this._cancelBound);
                                })
                              : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
                      }
                      async _next() {
                          if (!this.cancelled) {
                              this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper);
                              if (this.operatorListIdx === this.operatorList.argsArray.length) {
                                  this.running = !1;
                                  if (this.operatorList.lastChunk) {
                                      this.gfx.endDrawing();
                                      InternalRenderTask.#b.delete(this._canvas);
                                      this.callback();
                                  }
                              }
                          }
                      }
                  }
                  const version = "3.11.174";
                  exports.version = version;
                  const build = "ce8716743";
                  exports.build = build;
              },
              (t, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 });
                  e.SerializableEmpty = e.PrintAnnotationStorage = e.AnnotationStorage = void 0;
                  var s = i(1),
                      n = i(4),
                      a = i(8);
                  const r = Object.freeze({ map: null, hash: "", transfers: void 0 });
                  e.SerializableEmpty = r;
                  class AnnotationStorage {
                      #A = !1;
                      #_ = new Map();
                      constructor() {
                          this.onSetModified = null;
                          this.onResetModified = null;
                          this.onAnnotationEditor = null;
                      }
                      getValue(t, e) {
                          const i = this.#_.get(t);
                          return void 0 === i ? e : Object.assign(e, i);
                      }
                      getRawValue(t) {
                          return this.#_.get(t);
                      }
                      remove(t) {
                          this.#_.delete(t);
                          0 === this.#_.size && this.resetModified();
                          if ("function" == typeof this.onAnnotationEditor) {
                              for (const t of this.#_.values()) if (t instanceof n.AnnotationEditor) return;
                              this.onAnnotationEditor(null);
                          }
                      }
                      setValue(t, e) {
                          const i = this.#_.get(t);
                          let s = !1;
                          if (void 0 !== i) {
                              for (const [t, n] of Object.entries(e))
                                  if (i[t] !== n) {
                                      s = !0;
                                      i[t] = n;
                                  }
                          } else {
                              s = !0;
                              this.#_.set(t, e);
                          }
                          s && this.#v();
                          e instanceof n.AnnotationEditor && "function" == typeof this.onAnnotationEditor && this.onAnnotationEditor(e.constructor._type);
                      }
                      has(t) {
                          return this.#_.has(t);
                      }
                      getAll() {
                          return this.#_.size > 0 ? (0, s.objectFromMap)(this.#_) : null;
                      }
                      setAll(t) {
                          for (const [e, i] of Object.entries(t)) this.setValue(e, i);
                      }
                      get size() {
                          return this.#_.size;
                      }
                      #v() {
                          if (!this.#A) {
                              this.#A = !0;
                              "function" == typeof this.onSetModified && this.onSetModified();
                          }
                      }
                      resetModified() {
                          if (this.#A) {
                              this.#A = !1;
                              "function" == typeof this.onResetModified && this.onResetModified();
                          }
                      }
                      get print() {
                          return new PrintAnnotationStorage(this);
                      }
                      get serializable() {
                          if (0 === this.#_.size) return r;
                          const t = new Map(),
                              e = new a.MurmurHash3_64(),
                              i = [],
                              s = Object.create(null);
                          let o = !1;
                          for (const [i, a] of this.#_) {
                              const r = a instanceof n.AnnotationEditor ? a.serialize(!1, s) : a;
                              if (r) {
                                  t.set(i, r);
                                  e.update(`${i}:${JSON.stringify(r)}`);
                                  o ||= !!r.bitmap;
                              }
                          }
                          if (o) for (const e of t.values()) e.bitmap && i.push(e.bitmap);
                          return t.size > 0 ? { map: t, hash: e.hexdigest(), transfers: i } : r;
                      }
                  }
                  e.AnnotationStorage = AnnotationStorage;
                  class PrintAnnotationStorage extends AnnotationStorage {
                      #y;
                      constructor(t) {
                          super();
                          const { map: e, hash: i, transfers: s } = t.serializable,
                              n = structuredClone(e, s ? { transfer: s } : null);
                          this.#y = { map: n, hash: i, transfers: s };
                      }
                      get print() {
                          (0, s.unreachable)("Should not call PrintAnnotationStorage.print");
                      }
                      get serializable() {
                          return this.#y;
                      }
                  }
                  e.PrintAnnotationStorage = PrintAnnotationStorage;
              },
              (t, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 });
                  e.AnnotationEditor = void 0;
                  var s = i(5),
                      n = i(1),
                      a = i(6);
                  class AnnotationEditor {
                      #S = "";
                      #E = !1;
                      #x = null;
                      #w = null;
                      #C = null;
                      #T = !1;
                      #P = null;
                      #M = this.focusin.bind(this);
                      #k = this.focusout.bind(this);
                      #F = !1;
                      #R = !1;
                      #D = !1;
                      _initialOptions = Object.create(null);
                      _uiManager = null;
                      _focusEventsAllowed = !0;
                      _l10nPromise = null;
                      #I = !1;
                      #L = AnnotationEditor._zIndex++;
                      static _borderLineWidth = -1;
                      static _colorManager = new s.ColorManager();
                      static _zIndex = 1;
                      static SMALL_EDITOR_SIZE = 0;
                      constructor(t) {
                          this.constructor === AnnotationEditor && (0, n.unreachable)("Cannot initialize AnnotationEditor.");
                          this.parent = t.parent;
                          this.id = t.id;
                          this.width = this.height = null;
                          this.pageIndex = t.parent.pageIndex;
                          this.name = t.name;
                          this.div = null;
                          this._uiManager = t.uiManager;
                          this.annotationElementId = null;
                          this._willKeepAspectRatio = !1;
                          this._initialOptions.isCentered = t.isCentered;
                          this._structTreeParentId = null;
                          const {
                              rotation: e,
                              rawDims: { pageWidth: i, pageHeight: s, pageX: a, pageY: r },
                          } = this.parent.viewport;
                          this.rotation = e;
                          this.pageRotation = (360 + e - this._uiManager.viewParameters.rotation) % 360;
                          this.pageDimensions = [i, s];
                          this.pageTranslation = [a, r];
                          const [o, l] = this.parentDimensions;
                          this.x = t.x / o;
                          this.y = t.y / l;
                          this.isAttachedToDOM = !1;
                          this.deleted = !1;
                      }
                      get editorType() {
                          return Object.getPrototypeOf(this).constructor._type;
                      }
                      static get _defaultLineColor() {
                          return (0, n.shadow)(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
                      }
                      static deleteAnnotationElement(t) {
                          const e = new FakeEditor({ id: t.parent.getNextId(), parent: t.parent, uiManager: t._uiManager });
                          e.annotationElementId = t.annotationElementId;
                          e.deleted = !0;
                          e._uiManager.addToAnnotationStorage(e);
                      }
                      static initialize(t, e = null) {
                          AnnotationEditor._l10nPromise ||= new Map(["editor_alt_text_button_label", "editor_alt_text_edit_button_label", "editor_alt_text_decorative_tooltip"].map((e) => [e, t.get(e)]));
                          if (e?.strings) for (const i of e.strings) AnnotationEditor._l10nPromise.set(i, t.get(i));
                          if (-1 !== AnnotationEditor._borderLineWidth) return;
                          const i = getComputedStyle(document.documentElement);
                          AnnotationEditor._borderLineWidth = parseFloat(i.getPropertyValue("--outline-width")) || 0;
                      }
                      static updateDefaultParams(t, e) {}
                      static get defaultPropertiesToUpdate() {
                          return [];
                      }
                      static isHandlingMimeForPasting(t) {
                          return !1;
                      }
                      static paste(t, e) {
                          (0, n.unreachable)("Not implemented");
                      }
                      get propertiesToUpdate() {
                          return [];
                      }
                      get _isDraggable() {
                          return this.#I;
                      }
                      set _isDraggable(t) {
                          this.#I = t;
                          this.div?.classList.toggle("draggable", t);
                      }
                      center() {
                          const [t, e] = this.pageDimensions;
                          switch (this.parentRotation) {
                              case 90:
                                  this.x -= (this.height * e) / (2 * t);
                                  this.y += (this.width * t) / (2 * e);
                                  break;
                              case 180:
                                  this.x += this.width / 2;
                                  this.y += this.height / 2;
                                  break;
                              case 270:
                                  this.x += (this.height * e) / (2 * t);
                                  this.y -= (this.width * t) / (2 * e);
                                  break;
                              default:
                                  this.x -= this.width / 2;
                                  this.y -= this.height / 2;
                          }
                          this.fixAndSetPosition();
                      }
                      addCommands(t) {
                          this._uiManager.addCommands(t);
                      }
                      get currentLayer() {
                          return this._uiManager.currentLayer;
                      }
                      setInBackground() {
                          this.div.style.zIndex = 0;
                      }
                      setInForeground() {
                          this.div.style.zIndex = this.#L;
                      }
                      setParent(t) {
                          if (null !== t) {
                              this.pageIndex = t.pageIndex;
                              this.pageDimensions = t.pageDimensions;
                          }
                          this.parent = t;
                      }
                      focusin(t) {
                          this._focusEventsAllowed && (this.#F ? (this.#F = !1) : this.parent.setSelected(this));
                      }
                      focusout(t) {
                          if (!this._focusEventsAllowed) return;
                          if (!this.isAttachedToDOM) return;
                          const e = t.relatedTarget;
                          if (!e?.closest(`#${this.id}`)) {
                              t.preventDefault();
                              this.parent?.isMultipleSelection || this.commitOrRemove();
                          }
                      }
                      commitOrRemove() {
                          this.isEmpty() ? this.remove() : this.commit();
                      }
                      commit() {
                          this.addToAnnotationStorage();
                      }
                      addToAnnotationStorage() {
                          this._uiManager.addToAnnotationStorage(this);
                      }
                      setAt(t, e, i, s) {
                          const [n, a] = this.parentDimensions;
                          [i, s] = this.screenToPageTranslation(i, s);
                          this.x = (t + i) / n;
                          this.y = (e + s) / a;
                          this.fixAndSetPosition();
                      }
                      #O([t, e], i, s) {
                          [i, s] = this.screenToPageTranslation(i, s);
                          this.x += i / t;
                          this.y += s / e;
                          this.fixAndSetPosition();
                      }
                      translate(t, e) {
                          this.#O(this.parentDimensions, t, e);
                      }
                      translateInPage(t, e) {
                          this.#O(this.pageDimensions, t, e);
                          this.div.scrollIntoView({ block: "nearest" });
                      }
                      drag(t, e) {
                          const [i, s] = this.parentDimensions;
                          this.x += t / i;
                          this.y += e / s;
                          if (this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
                              const { x: t, y: e } = this.div.getBoundingClientRect();
                              if (this.parent.findNewParent(this, t, e)) {
                                  this.x -= Math.floor(this.x);
                                  this.y -= Math.floor(this.y);
                              }
                          }
                          let { x: n, y: a } = this;
                          const [r, o] = this.#N();
                          n += r;
                          a += o;
                          this.div.style.left = `${(100 * n).toFixed(2)}%`;
                          this.div.style.top = `${(100 * a).toFixed(2)}%`;
                          this.div.scrollIntoView({ block: "nearest" });
                      }
                      #N() {
                          const [t, e] = this.parentDimensions,
                              { _borderLineWidth: i } = AnnotationEditor,
                              s = i / t,
                              n = i / e;
                          switch (this.rotation) {
                              case 90:
                                  return [-s, n];
                              case 180:
                                  return [s, n];
                              case 270:
                                  return [s, -n];
                              default:
                                  return [-s, -n];
                          }
                      }
                      fixAndSetPosition() {
                          const [t, e] = this.pageDimensions;
                          let { x: i, y: s, width: n, height: a } = this;
                          n *= t;
                          a *= e;
                          i *= t;
                          s *= e;
                          switch (this.rotation) {
                              case 0:
                                  i = Math.max(0, Math.min(t - n, i));
                                  s = Math.max(0, Math.min(e - a, s));
                                  break;
                              case 90:
                                  i = Math.max(0, Math.min(t - a, i));
                                  s = Math.min(e, Math.max(n, s));
                                  break;
                              case 180:
                                  i = Math.min(t, Math.max(n, i));
                                  s = Math.min(e, Math.max(a, s));
                                  break;
                              case 270:
                                  i = Math.min(t, Math.max(a, i));
                                  s = Math.max(0, Math.min(e - n, s));
                          }
                          this.x = i /= t;
                          this.y = s /= e;
                          const [r, o] = this.#N();
                          i += r;
                          s += o;
                          const { style: l } = this.div;
                          l.left = `${(100 * i).toFixed(2)}%`;
                          l.top = `${(100 * s).toFixed(2)}%`;
                          this.moveInDOM();
                      }
                      static #B(t, e, i) {
                          switch (i) {
                              case 90:
                                  return [e, -t];
                              case 180:
                                  return [-t, -e];
                              case 270:
                                  return [-e, t];
                              default:
                                  return [t, e];
                          }
                      }
                      screenToPageTranslation(t, e) {
                          return AnnotationEditor.#B(t, e, this.parentRotation);
                      }
                      pageTranslationToScreen(t, e) {
                          return AnnotationEditor.#B(t, e, 360 - this.parentRotation);
                      }
                      #U(t) {
                          switch (t) {
                              case 90: {
                                  const [t, e] = this.pageDimensions;
                                  return [0, -t / e, e / t, 0];
                              }
                              case 180:
                                  return [-1, 0, 0, -1];
                              case 270: {
                                  const [t, e] = this.pageDimensions;
                                  return [0, t / e, -e / t, 0];
                              }
                              default:
                                  return [1, 0, 0, 1];
                          }
                      }
                      get parentScale() {
                          return this._uiManager.viewParameters.realScale;
                      }
                      get parentRotation() {
                          return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
                      }
                      get parentDimensions() {
                          const {
                                  parentScale: t,
                                  pageDimensions: [e, i],
                              } = this,
                              s = e * t,
                              a = i * t;
                          return n.FeatureTest.isCSSRoundSupported ? [Math.round(s), Math.round(a)] : [s, a];
                      }
                      setDims(t, e) {
                          const [i, s] = this.parentDimensions;
                          this.div.style.width = `${((100 * t) / i).toFixed(2)}%`;
                          this.#T || (this.div.style.height = `${((100 * e) / s).toFixed(2)}%`);
                          this.#x?.classList.toggle("small", t < AnnotationEditor.SMALL_EDITOR_SIZE || e < AnnotationEditor.SMALL_EDITOR_SIZE);
                      }
                      fixDims() {
                          const { style: t } = this.div,
                              { height: e, width: i } = t,
                              s = i.endsWith("%"),
                              n = !this.#T && e.endsWith("%");
                          if (s && n) return;
                          const [a, r] = this.parentDimensions;
                          s || (t.width = `${((100 * parseFloat(i)) / a).toFixed(2)}%`);
                          this.#T || n || (t.height = `${((100 * parseFloat(e)) / r).toFixed(2)}%`);
                      }
                      getInitialTranslation() {
                          return [0, 0];
                      }
                      #j() {
                          if (this.#P) return;
                          this.#P = document.createElement("div");
                          this.#P.classList.add("resizers");
                          const t = ["topLeft", "topRight", "bottomRight", "bottomLeft"];
                          this._willKeepAspectRatio || t.push("topMiddle", "middleRight", "bottomMiddle", "middleLeft");
                          for (const e of t) {
                              const t = document.createElement("div");
                              this.#P.append(t);
                              t.classList.add("resizer", e);
                              t.addEventListener("pointerdown", this.#z.bind(this, e));
                              t.addEventListener("contextmenu", a.noContextMenu);
                          }
                          this.div.prepend(this.#P);
                      }
                      #z(t, e) {
                          e.preventDefault();
                          const { isMac: i } = n.FeatureTest.platform;
                          if (0 !== e.button || (e.ctrlKey && i)) return;
                          const s = this.#H.bind(this, t),
                              a = this._isDraggable;
                          this._isDraggable = !1;
                          const r = { passive: !0, capture: !0 };
                          window.addEventListener("pointermove", s, r);
                          const o = this.x,
                              l = this.y,
                              h = this.width,
                              c = this.height,
                              d = this.parent.div.style.cursor,
                              u = this.div.style.cursor;
                          this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(e.target).cursor;
                          const pointerUpCallback = () => {
                              this._isDraggable = a;
                              window.removeEventListener("pointerup", pointerUpCallback);
                              window.removeEventListener("blur", pointerUpCallback);
                              window.removeEventListener("pointermove", s, r);
                              this.parent.div.style.cursor = d;
                              this.div.style.cursor = u;
                              const t = this.x,
                                  e = this.y,
                                  i = this.width,
                                  n = this.height;
                              (t === o && e === l && i === h && n === c) ||
                                  this.addCommands({
                                      cmd: () => {
                                          this.width = i;
                                          this.height = n;
                                          this.x = t;
                                          this.y = e;
                                          const [s, a] = this.parentDimensions;
                                          this.setDims(s * i, a * n);
                                          this.fixAndSetPosition();
                                      },
                                      undo: () => {
                                          this.width = h;
                                          this.height = c;
                                          this.x = o;
                                          this.y = l;
                                          const [t, e] = this.parentDimensions;
                                          this.setDims(t * h, e * c);
                                          this.fixAndSetPosition();
                                      },
                                      mustExec: !0,
                                  });
                          };
                          window.addEventListener("pointerup", pointerUpCallback);
                          window.addEventListener("blur", pointerUpCallback);
                      }
                      #H(t, e) {
                          const [i, s] = this.parentDimensions,
                              n = this.x,
                              a = this.y,
                              r = this.width,
                              o = this.height,
                              l = AnnotationEditor.MIN_SIZE / i,
                              h = AnnotationEditor.MIN_SIZE / s,
                              round = (t) => Math.round(1e4 * t) / 1e4,
                              c = this.#U(this.rotation),
                              transf = (t, e) => [c[0] * t + c[2] * e, c[1] * t + c[3] * e],
                              d = this.#U(360 - this.rotation);
                          let u,
                              p,
                              g = !1,
                              m = !1;
                          switch (t) {
                              case "topLeft":
                                  g = !0;
                                  u = (t, e) => [0, 0];
                                  p = (t, e) => [t, e];
                                  break;
                              case "topMiddle":
                                  u = (t, e) => [t / 2, 0];
                                  p = (t, e) => [t / 2, e];
                                  break;
                              case "topRight":
                                  g = !0;
                                  u = (t, e) => [t, 0];
                                  p = (t, e) => [0, e];
                                  break;
                              case "middleRight":
                                  m = !0;
                                  u = (t, e) => [t, e / 2];
                                  p = (t, e) => [0, e / 2];
                                  break;
                              case "bottomRight":
                                  g = !0;
                                  u = (t, e) => [t, e];
                                  p = (t, e) => [0, 0];
                                  break;
                              case "bottomMiddle":
                                  u = (t, e) => [t / 2, e];
                                  p = (t, e) => [t / 2, 0];
                                  break;
                              case "bottomLeft":
                                  g = !0;
                                  u = (t, e) => [0, e];
                                  p = (t, e) => [t, 0];
                                  break;
                              case "middleLeft":
                                  m = !0;
                                  u = (t, e) => [0, e / 2];
                                  p = (t, e) => [t, e / 2];
                          }
                          const f = u(r, o),
                              b = p(r, o);
                          let A = transf(...b);
                          const _ = round(n + A[0]),
                              v = round(a + A[1]);
                          let y = 1,
                              S = 1,
                              [E, x] = this.screenToPageTranslation(e.movementX, e.movementY);
                          [E, x] = ((w = E / i), (C = x / s), [d[0] * w + d[2] * C, d[1] * w + d[3] * C]);
                          var w, C;
                          if (g) {
                              const t = Math.hypot(r, o);
                              y = S = Math.max(Math.min(Math.hypot(b[0] - f[0] - E, b[1] - f[1] - x) / t, 1 / r, 1 / o), l / r, h / o);
                          } else m ? (y = Math.max(l, Math.min(1, Math.abs(b[0] - f[0] - E))) / r) : (S = Math.max(h, Math.min(1, Math.abs(b[1] - f[1] - x))) / o);
                          const T = round(r * y),
                              P = round(o * S);
                          A = transf(...p(T, P));
                          const M = _ - A[0],
                              k = v - A[1];
                          this.width = T;
                          this.height = P;
                          this.x = M;
                          this.y = k;
                          this.setDims(i * T, s * P);
                          this.fixAndSetPosition();
                      }
                      async addAltTextButton() {
                          if (this.#x) return;
                          const t = (this.#x = document.createElement("button"));
                          t.className = "altText";
                          const e = await AnnotationEditor._l10nPromise.get("editor_alt_text_button_label");
                          t.textContent = e;
                          t.setAttribute("aria-label", e);
                          t.tabIndex = "0";
                          t.addEventListener("contextmenu", a.noContextMenu);
                          t.addEventListener("pointerdown", (t) => t.stopPropagation());
                          t.addEventListener(
                              "click",
                              (t) => {
                                  t.preventDefault();
                                  this._uiManager.editAltText(this);
                              },
                              { capture: !0 }
                          );
                          t.addEventListener("keydown", (e) => {
                              if (e.target === t && "Enter" === e.key) {
                                  e.preventDefault();
                                  this._uiManager.editAltText(this);
                              }
                          });
                          this.#W();
                          this.div.append(t);
                          if (!AnnotationEditor.SMALL_EDITOR_SIZE) {
                              const e = 40;
                              AnnotationEditor.SMALL_EDITOR_SIZE = Math.min(128, Math.round(t.getBoundingClientRect().width * (1 + e / 100)));
                          }
                      }
                      async #W() {
                          const t = this.#x;
                          if (!t) return;
                          if (!this.#S && !this.#E) {
                              t.classList.remove("done");
                              this.#w?.remove();
                              return;
                          }
                          AnnotationEditor._l10nPromise.get("editor_alt_text_edit_button_label").then((e) => {
                              t.setAttribute("aria-label", e);
                          });
                          let e = this.#w;
                          if (!e) {
                              this.#w = e = document.createElement("span");
                              e.className = "tooltip";
                              e.setAttribute("role", "tooltip");
                              const i = (e.id = `alt-text-tooltip-${this.id}`);
                              t.setAttribute("aria-describedby", i);
                              const s = 100;
                              t.addEventListener("mouseenter", () => {
                                  this.#C = setTimeout(() => {
                                      this.#C = null;
                                      this.#w.classList.add("show");
                                      this._uiManager._eventBus.dispatch("reporttelemetry", { source: this, details: { type: "editing", subtype: this.editorType, data: { action: "alt_text_tooltip" } } });
                                  }, s);
                              });
                              t.addEventListener("mouseleave", () => {
                                  clearTimeout(this.#C);
                                  this.#C = null;
                                  this.#w?.classList.remove("show");
                              });
                          }
                          t.classList.add("done");
                          e.innerText = this.#E ? await AnnotationEditor._l10nPromise.get("editor_alt_text_decorative_tooltip") : this.#S;
                          e.parentNode || t.append(e);
                      }
                      getClientDimensions() {
                          return this.div.getBoundingClientRect();
                      }
                      get altTextData() {
                          return { altText: this.#S, decorative: this.#E };
                      }
                      set altTextData({ altText: t, decorative: e }) {
                          if (this.#S !== t || this.#E !== e) {
                              this.#S = t;
                              this.#E = e;
                              this.#W();
                          }
                      }
                      render() {
                          this.div = document.createElement("div");
                          this.div.setAttribute("data-editor-rotation", (360 - this.rotation) % 360);
                          this.div.className = this.name;
                          this.div.setAttribute("id", this.id);
                          this.div.setAttribute("tabIndex", 0);
                          this.setInForeground();
                          this.div.addEventListener("focusin", this.#M);
                          this.div.addEventListener("focusout", this.#k);
                          const [t, e] = this.parentDimensions;
                          if (this.parentRotation % 180 != 0) {
                              this.div.style.maxWidth = `${((100 * e) / t).toFixed(2)}%`;
                              this.div.style.maxHeight = `${((100 * t) / e).toFixed(2)}%`;
                          }
                          const [i, n] = this.getInitialTranslation();
                          this.translate(i, n);
                          (0, s.bindEvents)(this, this.div, ["pointerdown"]);
                          return this.div;
                      }
                      pointerdown(t) {
                          const { isMac: e } = n.FeatureTest.platform;
                          if (0 !== t.button || (t.ctrlKey && e)) t.preventDefault();
                          else {
                              this.#F = !0;
                              this.#G(t);
                          }
                      }
                      #G(t) {
                          if (!this._isDraggable) return;
                          const e = this._uiManager.isSelected(this);
                          this._uiManager.setUpDragSession();
                          let i, s;
                          if (e) {
                              i = { passive: !0, capture: !0 };
                              s = (t) => {
                                  const [e, i] = this.screenToPageTranslation(t.movementX, t.movementY);
                                  this._uiManager.dragSelectedEditors(e, i);
                              };
                              window.addEventListener("pointermove", s, i);
                          }
                          const pointerUpCallback = () => {
                              window.removeEventListener("pointerup", pointerUpCallback);
                              window.removeEventListener("blur", pointerUpCallback);
                              e && window.removeEventListener("pointermove", s, i);
                              this.#F = !1;
                              if (!this._uiManager.endDragSession()) {
                                  const { isMac: e } = n.FeatureTest.platform;
                                  (t.ctrlKey && !e) || t.shiftKey || (t.metaKey && e) ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
                              }
                          };
                          window.addEventListener("pointerup", pointerUpCallback);
                          window.addEventListener("blur", pointerUpCallback);
                      }
                      moveInDOM() {
                          this.parent?.moveEditorInDOM(this);
                      }
                      _setParentAndPosition(t, e, i) {
                          t.changeParent(this);
                          this.x = e;
                          this.y = i;
                          this.fixAndSetPosition();
                      }
                      getRect(t, e) {
                          const i = this.parentScale,
                              [s, n] = this.pageDimensions,
                              [a, r] = this.pageTranslation,
                              o = t / i,
                              l = e / i,
                              h = this.x * s,
                              c = this.y * n,
                              d = this.width * s,
                              u = this.height * n;
                          switch (this.rotation) {
                              case 0:
                                  return [h + o + a, n - c - l - u + r, h + o + d + a, n - c - l + r];
                              case 90:
                                  return [h + l + a, n - c + o + r, h + l + u + a, n - c + o + d + r];
                              case 180:
                                  return [h - o - d + a, n - c + l + r, h - o + a, n - c + l + u + r];
                              case 270:
                                  return [h - l - u + a, n - c - o - d + r, h - l + a, n - c - o + r];
                              default:
                                  throw new Error("Invalid rotation");
                          }
                      }
                      getRectInCurrentCoords(t, e) {
                          const [i, s, n, a] = t,
                              r = n - i,
                              o = a - s;
                          switch (this.rotation) {
                              case 0:
                                  return [i, e - a, r, o];
                              case 90:
                                  return [i, e - s, o, r];
                              case 180:
                                  return [n, e - s, r, o];
                              case 270:
                                  return [n, e - a, o, r];
                              default:
                                  throw new Error("Invalid rotation");
                          }
                      }
                      onceAdded() {}
                      isEmpty() {
                          return !1;
                      }
                      enableEditMode() {
                          this.#D = !0;
                      }
                      disableEditMode() {
                          this.#D = !1;
                      }
                      isInEditMode() {
                          return this.#D;
                      }
                      shouldGetKeyboardEvents() {
                          return !1;
                      }
                      needsToBeRebuilt() {
                          return this.div && !this.isAttachedToDOM;
                      }
                      rebuild() {
                          this.div?.addEventListener("focusin", this.#M);
                          this.div?.addEventListener("focusout", this.#k);
                      }
                      serialize(t = !1, e = null) {
                          (0, n.unreachable)("An editor must be serializable");
                      }
                      static deserialize(t, e, i) {
                          const s = new this.prototype.constructor({ parent: e, id: e.getNextId(), uiManager: i });
                          s.rotation = t.rotation;
                          const [n, a] = s.pageDimensions,
                              [r, o, l, h] = s.getRectInCurrentCoords(t.rect, a);
                          s.x = r / n;
                          s.y = o / a;
                          s.width = l / n;
                          s.height = h / a;
                          return s;
                      }
                      remove() {
                          this.div.removeEventListener("focusin", this.#M);
                          this.div.removeEventListener("focusout", this.#k);
                          this.isEmpty() || this.commit();
                          this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this);
                          this.#x?.remove();
                          this.#x = null;
                          this.#w = null;
                      }
                      get isResizable() {
                          return !1;
                      }
                      makeResizable() {
                          if (this.isResizable) {
                              this.#j();
                              this.#P.classList.remove("hidden");
                          }
                      }
                      select() {
                          this.makeResizable();
                          this.div?.classList.add("selectedEditor");
                      }
                      unselect() {
                          this.#P?.classList.add("hidden");
                          this.div?.classList.remove("selectedEditor");
                          this.div?.contains(document.activeElement) && this._uiManager.currentLayer.div.focus();
                      }
                      updateParams(t, e) {}
                      disableEditing() {
                          this.#x && (this.#x.hidden = !0);
                      }
                      enableEditing() {
                          this.#x && (this.#x.hidden = !1);
                      }
                      enterInEditMode() {}
                      get contentDiv() {
                          return this.div;
                      }
                      get isEditing() {
                          return this.#R;
                      }
                      set isEditing(t) {
                          this.#R = t;
                          if (this.parent)
                              if (t) {
                                  this.parent.setSelected(this);
                                  this.parent.setActiveEditor(this);
                              } else this.parent.setActiveEditor(null);
                      }
                      setAspectRatio(t, e) {
                          this.#T = !0;
                          const i = t / e,
                              { style: s } = this.div;
                          s.aspectRatio = i;
                          s.height = "auto";
                      }
                      static get MIN_SIZE() {
                          return 16;
                      }
                  }
                  e.AnnotationEditor = AnnotationEditor;
                  class FakeEditor extends AnnotationEditor {
                      constructor(t) {
                          super(t);
                          this.annotationElementId = t.annotationElementId;
                          this.deleted = !0;
                      }
                      serialize() {
                          return { id: this.annotationElementId, deleted: !0, pageIndex: this.pageIndex };
                      }
                  }
              },
              (t, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 });
                  e.KeyboardManager = e.CommandManager = e.ColorManager = e.AnnotationEditorUIManager = void 0;
                  e.bindEvents = function bindEvents(t, e, i) {
                      for (const s of i) e.addEventListener(s, t[s].bind(t));
                  };
                  e.opacityToHex = function opacityToHex(t) {
                      return Math.round(Math.min(255, Math.max(1, 255 * t)))
                          .toString(16)
                          .padStart(2, "0");
                  };
                  var s = i(1),
                      n = i(6);
                  class IdManager {
                      #q = 0;
                      getId() {
                          return `${s.AnnotationEditorPrefix}${this.#q++}`;
                      }
                  }
                  class ImageManager {
                      #V = (0, s.getUuid)();
                      #q = 0;
                      #$ = null;
                      static get _isSVGFittingCanvas() {
                          const t = new OffscreenCanvas(1, 3).getContext("2d"),
                              e = new Image();
                          e.src = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>';
                          const i = e.decode().then(() => {
                              t.drawImage(e, 0, 0, 1, 1, 0, 0, 1, 3);
                              return 0 === new Uint32Array(t.getImageData(0, 0, 1, 1).data.buffer)[0];
                          });
                          return (0, s.shadow)(this, "_isSVGFittingCanvas", i);
                      }
                      async #X(t, e) {
                          this.#$ ||= new Map();
                          let i = this.#$.get(t);
                          if (null === i) return null;
                          if (i?.bitmap) {
                              i.refCounter += 1;
                              return i;
                          }
                          try {
                              i ||= { bitmap: null, id: `image_${this.#V}_${this.#q++}`, refCounter: 0, isSvg: !1 };
                              let t;
                              if ("string" == typeof e) {
                                  i.url = e;
                                  const s = await fetch(e);
                                  if (!s.ok) throw new Error(s.statusText);
                                  t = await s.blob();
                              } else t = i.file = e;
                              if ("image/svg+xml" === t.type) {
                                  const e = ImageManager._isSVGFittingCanvas,
                                      s = new FileReader(),
                                      n = new Image(),
                                      a = new Promise((t, a) => {
                                          n.onload = () => {
                                              i.bitmap = n;
                                              i.isSvg = !0;
                                              t();
                                          };
                                          s.onload = async () => {
                                              const t = (i.svgUrl = s.result);
                                              n.src = (await e) ? `${t}#svgView(preserveAspectRatio(none))` : t;
                                          };
                                          n.onerror = s.onerror = a;
                                      });
                                  s.readAsDataURL(t);
                                  await a;
                              } else i.bitmap = await createImageBitmap(t);
                              i.refCounter = 1;
                          } catch (t) {
                              console.error(t);
                              i = null;
                          }
                          this.#$.set(t, i);
                          i && this.#$.set(i.id, i);
                          return i;
                      }
                      async getFromFile(t) {
                          const { lastModified: e, name: i, size: s, type: n } = t;
                          return this.#X(`${e}_${i}_${s}_${n}`, t);
                      }
                      async getFromUrl(t) {
                          return this.#X(t, t);
                      }
                      async getFromId(t) {
                          this.#$ ||= new Map();
                          const e = this.#$.get(t);
                          if (!e) return null;
                          if (e.bitmap) {
                              e.refCounter += 1;
                              return e;
                          }
                          return e.file ? this.getFromFile(e.file) : this.getFromUrl(e.url);
                      }
                      getSvgUrl(t) {
                          const e = this.#$.get(t);
                          return e?.isSvg ? e.svgUrl : null;
                      }
                      deleteId(t) {
                          this.#$ ||= new Map();
                          const e = this.#$.get(t);
                          if (e) {
                              e.refCounter -= 1;
                              0 === e.refCounter && (e.bitmap = null);
                          }
                      }
                      isValidId(t) {
                          return t.startsWith(`image_${this.#V}_`);
                      }
                  }
                  class CommandManager {
                      #K = [];
                      #Y = !1;
                      #J;
                      #Q = -1;
                      constructor(t = 128) {
                          this.#J = t;
                      }
                      add({ cmd: t, undo: e, mustExec: i, type: s = NaN, overwriteIfSameType: n = !1, keepUndo: a = !1 }) {
                          i && t();
                          if (this.#Y) return;
                          const r = { cmd: t, undo: e, type: s };
                          if (-1 === this.#Q) {
                              this.#K.length > 0 && (this.#K.length = 0);
                              this.#Q = 0;
                              this.#K.push(r);
                              return;
                          }
                          if (n && this.#K[this.#Q].type === s) {
                              a && (r.undo = this.#K[this.#Q].undo);
                              this.#K[this.#Q] = r;
                              return;
                          }
                          const o = this.#Q + 1;
                          if (o === this.#J) this.#K.splice(0, 1);
                          else {
                              this.#Q = o;
                              o < this.#K.length && this.#K.splice(o);
                          }
                          this.#K.push(r);
                      }
                      undo() {
                          if (-1 !== this.#Q) {
                              this.#Y = !0;
                              this.#K[this.#Q].undo();
                              this.#Y = !1;
                              this.#Q -= 1;
                          }
                      }
                      redo() {
                          if (this.#Q < this.#K.length - 1) {
                              this.#Q += 1;
                              this.#Y = !0;
                              this.#K[this.#Q].cmd();
                              this.#Y = !1;
                          }
                      }
                      hasSomethingToUndo() {
                          return -1 !== this.#Q;
                      }
                      hasSomethingToRedo() {
                          return this.#Q < this.#K.length - 1;
                      }
                      destroy() {
                          this.#K = null;
                      }
                  }
                  e.CommandManager = CommandManager;
                  class KeyboardManager {
                      constructor(t) {
                          this.buffer = [];
                          this.callbacks = new Map();
                          this.allKeys = new Set();
                          const { isMac: e } = s.FeatureTest.platform;
                          for (const [i, s, n = {}] of t)
                              for (const t of i) {
                                  const i = t.startsWith("mac+");
                                  if (e && i) {
                                      this.callbacks.set(t.slice(4), { callback: s, options: n });
                                      this.allKeys.add(t.split("+").at(-1));
                                  } else if (!e && !i) {
                                      this.callbacks.set(t, { callback: s, options: n });
                                      this.allKeys.add(t.split("+").at(-1));
                                  }
                              }
                      }
                      #Z(t) {
                          t.altKey && this.buffer.push("alt");
                          t.ctrlKey && this.buffer.push("ctrl");
                          t.metaKey && this.buffer.push("meta");
                          t.shiftKey && this.buffer.push("shift");
                          this.buffer.push(t.key);
                          const e = this.buffer.join("+");
                          this.buffer.length = 0;
                          return e;
                      }
                      exec(t, e) {
                          if (!this.allKeys.has(e.key)) return;
                          const i = this.callbacks.get(this.#Z(e));
                          if (!i) return;
                          const {
                              callback: s,
                              options: { bubbles: n = !1, args: a = [], checker: r = null },
                          } = i;
                          if (!r || r(t, e)) {
                              s.bind(t, ...a)();
                              if (!n) {
                                  e.stopPropagation();
                                  e.preventDefault();
                              }
                          }
                      }
                  }
                  e.KeyboardManager = KeyboardManager;
                  class ColorManager {
                      static _colorsMapping = new Map([
                          ["CanvasText", [0, 0, 0]],
                          ["Canvas", [255, 255, 255]],
                      ]);
                      get _colors() {
                          const t = new Map([
                              ["CanvasText", null],
                              ["Canvas", null],
                          ]);
                          (0, n.getColorValues)(t);
                          return (0, s.shadow)(this, "_colors", t);
                      }
                      convert(t) {
                          const e = (0, n.getRGB)(t);
                          if (!window.matchMedia("(forced-colors: active)").matches) return e;
                          for (const [t, i] of this._colors) if (i.every((t, i) => t === e[i])) return ColorManager._colorsMapping.get(t);
                          return e;
                      }
                      getHexCode(t) {
                          const e = this._colors.get(t);
                          return e ? s.Util.makeHexColor(...e) : t;
                      }
                  }
                  e.ColorManager = ColorManager;
                  class AnnotationEditorUIManager {
                      #tt = null;
                      #et = new Map();
                      #it = new Map();
                      #st = null;
                      #nt = null;
                      #at = new CommandManager();
                      #rt = 0;
                      #ot = new Set();
                      #lt = null;
                      #ht = null;
                      #ct = new Set();
                      #dt = null;
                      #ut = new IdManager();
                      #pt = !1;
                      #gt = !1;
                      #mt = null;
                      #ft = s.AnnotationEditorType.NONE;
                      #bt = new Set();
                      #At = null;
                      #_t = this.blur.bind(this);
                      #vt = this.focus.bind(this);
                      #yt = this.copy.bind(this);
                      #St = this.cut.bind(this);
                      #Et = this.paste.bind(this);
                      #xt = this.keydown.bind(this);
                      #wt = this.onEditingAction.bind(this);
                      #Ct = this.onPageChanging.bind(this);
                      #Tt = this.onScaleChanging.bind(this);
                      #Pt = this.onRotationChanging.bind(this);
                      #Mt = { isEditing: !1, isEmpty: !0, hasSomethingToUndo: !1, hasSomethingToRedo: !1, hasSelectedEditor: !1 };
                      #kt = [0, 0];
                      #Ft = null;
                      #Rt = null;
                      #Dt = null;
                      static TRANSLATE_SMALL = 1;
                      static TRANSLATE_BIG = 10;
                      static get _keyboardManager() {
                          const t = AnnotationEditorUIManager.prototype,
                              arrowChecker = (t) => {
                                  const { activeElement: e } = document;
                                  return e && t.#Rt.contains(e) && t.hasSomethingToControl();
                              },
                              e = this.TRANSLATE_SMALL,
                              i = this.TRANSLATE_BIG;
                          return (0, s.shadow)(
                              this,
                              "_keyboardManager",
                              new KeyboardManager([
                                  [["ctrl+a", "mac+meta+a"], t.selectAll],
                                  [["ctrl+z", "mac+meta+z"], t.undo],
                                  [["ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z"], t.redo],
                                  [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete", "mac+Delete"], t.delete],
                                  [["Escape", "mac+Escape"], t.unselectAll],
                                  [["ArrowLeft", "mac+ArrowLeft"], t.translateSelectedEditors, { args: [-e, 0], checker: arrowChecker }],
                                  [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t.translateSelectedEditors, { args: [-i, 0], checker: arrowChecker }],
                                  [["ArrowRight", "mac+ArrowRight"], t.translateSelectedEditors, { args: [e, 0], checker: arrowChecker }],
                                  [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t.translateSelectedEditors, { args: [i, 0], checker: arrowChecker }],
                                  [["ArrowUp", "mac+ArrowUp"], t.translateSelectedEditors, { args: [0, -e], checker: arrowChecker }],
                                  [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t.translateSelectedEditors, { args: [0, -i], checker: arrowChecker }],
                                  [["ArrowDown", "mac+ArrowDown"], t.translateSelectedEditors, { args: [0, e], checker: arrowChecker }],
                                  [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t.translateSelectedEditors, { args: [0, i], checker: arrowChecker }],
                              ])
                          );
                      }
                      constructor(t, e, i, s, a, r) {
                          this.#Rt = t;
                          this.#Dt = e;
                          this.#st = i;
                          this._eventBus = s;
                          this._eventBus._on("editingaction", this.#wt);
                          this._eventBus._on("pagechanging", this.#Ct);
                          this._eventBus._on("scalechanging", this.#Tt);
                          this._eventBus._on("rotationchanging", this.#Pt);
                          this.#nt = a.annotationStorage;
                          this.#dt = a.filterFactory;
                          this.#At = r;
                          this.viewParameters = { realScale: n.PixelsPerInch.PDF_TO_CSS_UNITS, rotation: 0 };
                      }
                      destroy() {
                          this.#It();
                          this.#Lt();
                          this._eventBus._off("editingaction", this.#wt);
                          this._eventBus._off("pagechanging", this.#Ct);
                          this._eventBus._off("scalechanging", this.#Tt);
                          this._eventBus._off("rotationchanging", this.#Pt);
                          for (const t of this.#it.values()) t.destroy();
                          this.#it.clear();
                          this.#et.clear();
                          this.#ct.clear();
                          this.#tt = null;
                          this.#bt.clear();
                          this.#at.destroy();
                          this.#st.destroy();
                      }
                      get hcmFilter() {
                          return (0, s.shadow)(this, "hcmFilter", this.#At ? this.#dt.addHCMFilter(this.#At.foreground, this.#At.background) : "none");
                      }
                      get direction() {
                          return (0, s.shadow)(this, "direction", getComputedStyle(this.#Rt).direction);
                      }
                      editAltText(t) {
                          this.#st?.editAltText(this, t);
                      }
                      onPageChanging({ pageNumber: t }) {
                          this.#rt = t - 1;
                      }
                      focusMainContainer() {
                          this.#Rt.focus();
                      }
                      findParent(t, e) {
                          for (const i of this.#it.values()) {
                              const { x: s, y: n, width: a, height: r } = i.div.getBoundingClientRect();
                              if (t >= s && t <= s + a && e >= n && e <= n + r) return i;
                          }
                          return null;
                      }
                      disableUserSelect(t = !1) {
                          this.#Dt.classList.toggle("noUserSelect", t);
                      }
                      addShouldRescale(t) {
                          this.#ct.add(t);
                      }
                      removeShouldRescale(t) {
                          this.#ct.delete(t);
                      }
                      onScaleChanging({ scale: t }) {
                          this.commitOrRemove();
                          this.viewParameters.realScale = t * n.PixelsPerInch.PDF_TO_CSS_UNITS;
                          for (const t of this.#ct) t.onScaleChanging();
                      }
                      onRotationChanging({ pagesRotation: t }) {
                          this.commitOrRemove();
                          this.viewParameters.rotation = t;
                      }
                      addToAnnotationStorage(t) {
                          t.isEmpty() || !this.#nt || this.#nt.has(t.id) || this.#nt.setValue(t.id, t);
                      }
                      #Ot() {
                          window.addEventListener("focus", this.#vt);
                          window.addEventListener("blur", this.#_t);
                      }
                      #Lt() {
                          window.removeEventListener("focus", this.#vt);
                          window.removeEventListener("blur", this.#_t);
                      }
                      blur() {
                          if (!this.hasSelection) return;
                          const { activeElement: t } = document;
                          for (const e of this.#bt)
                              if (e.div.contains(t)) {
                                  this.#mt = [e, t];
                                  e._focusEventsAllowed = !1;
                                  break;
                              }
                      }
                      focus() {
                          if (!this.#mt) return;
                          const [t, e] = this.#mt;
                          this.#mt = null;
                          e.addEventListener(
                              "focusin",
                              () => {
                                  t._focusEventsAllowed = !0;
                              },
                              { once: !0 }
                          );
                          e.focus();
                      }
                      #Nt() {
                          window.addEventListener("keydown", this.#xt, { capture: !0 });
                      }
                      #It() {
                          window.removeEventListener("keydown", this.#xt, { capture: !0 });
                      }
                      #Bt() {
                          document.addEventListener("copy", this.#yt);
                          document.addEventListener("cut", this.#St);
                          document.addEventListener("paste", this.#Et);
                      }
                      #Ut() {
                          document.removeEventListener("copy", this.#yt);
                          document.removeEventListener("cut", this.#St);
                          document.removeEventListener("paste", this.#Et);
                      }
                      addEditListeners() {
                          this.#Nt();
                          this.#Bt();
                      }
                      removeEditListeners() {
                          this.#It();
                          this.#Ut();
                      }
                      copy(t) {
                          t.preventDefault();
                          this.#tt?.commitOrRemove();
                          if (!this.hasSelection) return;
                          const e = [];
                          for (const t of this.#bt) {
                              const i = t.serialize(!0);
                              i && e.push(i);
                          }
                          0 !== e.length && t.clipboardData.setData("application/pdfjs", JSON.stringify(e));
                      }
                      cut(t) {
                          this.copy(t);
                          this.delete();
                      }
                      paste(t) {
                          t.preventDefault();
                          const { clipboardData: e } = t;
                          for (const t of e.items)
                              for (const e of this.#ht)
                                  if (e.isHandlingMimeForPasting(t.type)) {
                                      e.paste(t, this.currentLayer);
                                      return;
                                  }
                          let i = e.getData("application/pdfjs");
                          if (!i) return;
                          try {
                              i = JSON.parse(i);
                          } catch (t) {
                              (0, s.warn)(`paste: "${t.message}".`);
                              return;
                          }
                          if (!Array.isArray(i)) return;
                          this.unselectAll();
                          const n = this.currentLayer;
                          try {
                              const t = [];
                              for (const e of i) {
                                  const i = n.deserialize(e);
                                  if (!i) return;
                                  t.push(i);
                              }
                              const cmd = () => {
                                      for (const e of t) this.#jt(e);
                                      this.#zt(t);
                                  },
                                  undo = () => {
                                      for (const e of t) e.remove();
                                  };
                              this.addCommands({ cmd: cmd, undo: undo, mustExec: !0 });
                          } catch (t) {
                              (0, s.warn)(`paste: "${t.message}".`);
                          }
                      }
                      keydown(t) {
                          this.getActive()?.shouldGetKeyboardEvents() || AnnotationEditorUIManager._keyboardManager.exec(this, t);
                      }
                      onEditingAction(t) {
                          ["undo", "redo", "delete", "selectAll"].includes(t.name) && this[t.name]();
                      }
                      #Ht(t) {
                          Object.entries(t).some(([t, e]) => this.#Mt[t] !== e) && this._eventBus.dispatch("annotationeditorstateschanged", { source: this, details: Object.assign(this.#Mt, t) });
                      }
                      #Wt(t) {
                          this._eventBus.dispatch("annotationeditorparamschanged", { source: this, details: t });
                      }
                      setEditingState(t) {
                          if (t) {
                              this.#Ot();
                              this.#Nt();
                              this.#Bt();
                              this.#Ht({
                                  isEditing: this.#ft !== s.AnnotationEditorType.NONE,
                                  isEmpty: this.#Gt(),
                                  hasSomethingToUndo: this.#at.hasSomethingToUndo(),
                                  hasSomethingToRedo: this.#at.hasSomethingToRedo(),
                                  hasSelectedEditor: !1,
                              });
                          } else {
                              this.#Lt();
                              this.#It();
                              this.#Ut();
                              this.#Ht({ isEditing: !1 });
                              this.disableUserSelect(!1);
                          }
                      }
                      registerEditorTypes(t) {
                          if (!this.#ht) {
                              this.#ht = t;
                              for (const t of this.#ht) this.#Wt(t.defaultPropertiesToUpdate);
                          }
                      }
                      getId() {
                          return this.#ut.getId();
                      }
                      get currentLayer() {
                          return this.#it.get(this.#rt);
                      }
                      getLayer(t) {
                          return this.#it.get(t);
                      }
                      get currentPageIndex() {
                          return this.#rt;
                      }
                      addLayer(t) {
                          this.#it.set(t.pageIndex, t);
                          this.#pt ? t.enable() : t.disable();
                      }
                      removeLayer(t) {
                          this.#it.delete(t.pageIndex);
                      }
                      updateMode(t, e = null) {
                          if (this.#ft !== t) {
                              this.#ft = t;
                              if (t !== s.AnnotationEditorType.NONE) {
                                  this.setEditingState(!0);
                                  this.#qt();
                                  this.unselectAll();
                                  for (const e of this.#it.values()) e.updateMode(t);
                                  if (e)
                                      for (const t of this.#et.values())
                                          if (t.annotationElementId === e) {
                                              this.setSelected(t);
                                              t.enterInEditMode();
                                              break;
                                          }
                              } else {
                                  this.setEditingState(!1);
                                  this.#Vt();
                              }
                          }
                      }
                      updateToolbar(t) {
                          t !== this.#ft && this._eventBus.dispatch("switchannotationeditormode", { source: this, mode: t });
                      }
                      updateParams(t, e) {
                          if (this.#ht)
                              if (t !== s.AnnotationEditorParamsType.CREATE) {
                                  for (const i of this.#bt) i.updateParams(t, e);
                                  for (const i of this.#ht) i.updateDefaultParams(t, e);
                              } else this.currentLayer.addNewEditor(t);
                      }
                      enableWaiting(t = !1) {
                          if (this.#gt !== t) {
                              this.#gt = t;
                              for (const e of this.#it.values()) {
                                  t ? e.disableClick() : e.enableClick();
                                  e.div.classList.toggle("waiting", t);
                              }
                          }
                      }
                      #qt() {
                          if (!this.#pt) {
                              this.#pt = !0;
                              for (const t of this.#it.values()) t.enable();
                          }
                      }
                      #Vt() {
                          this.unselectAll();
                          if (this.#pt) {
                              this.#pt = !1;
                              for (const t of this.#it.values()) t.disable();
                          }
                      }
                      getEditors(t) {
                          const e = [];
                          for (const i of this.#et.values()) i.pageIndex === t && e.push(i);
                          return e;
                      }
                      getEditor(t) {
                          return this.#et.get(t);
                      }
                      addEditor(t) {
                          this.#et.set(t.id, t);
                      }
                      removeEditor(t) {
                          this.#et.delete(t.id);
                          this.unselect(t);
                          (t.annotationElementId && this.#ot.has(t.annotationElementId)) || this.#nt?.remove(t.id);
                      }
                      addDeletedAnnotationElement(t) {
                          this.#ot.add(t.annotationElementId);
                          t.deleted = !0;
                      }
                      isDeletedAnnotationElement(t) {
                          return this.#ot.has(t);
                      }
                      removeDeletedAnnotationElement(t) {
                          this.#ot.delete(t.annotationElementId);
                          t.deleted = !1;
                      }
                      #jt(t) {
                          const e = this.#it.get(t.pageIndex);
                          e ? e.addOrRebuild(t) : this.addEditor(t);
                      }
                      setActiveEditor(t) {
                          if (this.#tt !== t) {
                              this.#tt = t;
                              t && this.#Wt(t.propertiesToUpdate);
                          }
                      }
                      toggleSelected(t) {
                          if (this.#bt.has(t)) {
                              this.#bt.delete(t);
                              t.unselect();
                              this.#Ht({ hasSelectedEditor: this.hasSelection });
                          } else {
                              this.#bt.add(t);
                              t.select();
                              this.#Wt(t.propertiesToUpdate);
                              this.#Ht({ hasSelectedEditor: !0 });
                          }
                      }
                      setSelected(t) {
                          for (const e of this.#bt) e !== t && e.unselect();
                          this.#bt.clear();
                          this.#bt.add(t);
                          t.select();
                          this.#Wt(t.propertiesToUpdate);
                          this.#Ht({ hasSelectedEditor: !0 });
                      }
                      isSelected(t) {
                          return this.#bt.has(t);
                      }
                      unselect(t) {
                          t.unselect();
                          this.#bt.delete(t);
                          this.#Ht({ hasSelectedEditor: this.hasSelection });
                      }
                      get hasSelection() {
                          return 0 !== this.#bt.size;
                      }
                      undo() {
                          this.#at.undo();
                          this.#Ht({ hasSomethingToUndo: this.#at.hasSomethingToUndo(), hasSomethingToRedo: !0, isEmpty: this.#Gt() });
                      }
                      redo() {
                          this.#at.redo();
                          this.#Ht({ hasSomethingToUndo: !0, hasSomethingToRedo: this.#at.hasSomethingToRedo(), isEmpty: this.#Gt() });
                      }
                      addCommands(t) {
                          this.#at.add(t);
                          this.#Ht({ hasSomethingToUndo: !0, hasSomethingToRedo: !1, isEmpty: this.#Gt() });
                      }
                      #Gt() {
                          if (0 === this.#et.size) return !0;
                          if (1 === this.#et.size) for (const t of this.#et.values()) return t.isEmpty();
                          return !1;
                      }
                      delete() {
                          this.commitOrRemove();
                          if (!this.hasSelection) return;
                          const t = [...this.#bt];
                          this.addCommands({
                              cmd: () => {
                                  for (const e of t) e.remove();
                              },
                              undo: () => {
                                  for (const e of t) this.#jt(e);
                              },
                              mustExec: !0,
                          });
                      }
                      commitOrRemove() {
                          this.#tt?.commitOrRemove();
                      }
                      hasSomethingToControl() {
                          return this.#tt || this.hasSelection;
                      }
                      #zt(t) {
                          this.#bt.clear();
                          for (const e of t)
                              if (!e.isEmpty()) {
                                  this.#bt.add(e);
                                  e.select();
                              }
                          this.#Ht({ hasSelectedEditor: !0 });
                      }
                      selectAll() {
                          for (const t of this.#bt) t.commit();
                          this.#zt(this.#et.values());
                      }
                      unselectAll() {
                          if (this.#tt) this.#tt.commitOrRemove();
                          else if (this.hasSelection) {
                              for (const t of this.#bt) t.unselect();
                              this.#bt.clear();
                              this.#Ht({ hasSelectedEditor: !1 });
                          }
                      }
                      translateSelectedEditors(t, e, i = !1) {
                          i || this.commitOrRemove();
                          if (!this.hasSelection) return;
                          this.#kt[0] += t;
                          this.#kt[1] += e;
                          const [s, n] = this.#kt,
                              a = [...this.#bt];
                          this.#Ft && clearTimeout(this.#Ft);
                          this.#Ft = setTimeout(() => {
                              this.#Ft = null;
                              this.#kt[0] = this.#kt[1] = 0;
                              this.addCommands({
                                  cmd: () => {
                                      for (const t of a) this.#et.has(t.id) && t.translateInPage(s, n);
                                  },
                                  undo: () => {
                                      for (const t of a) this.#et.has(t.id) && t.translateInPage(-s, -n);
                                  },
                                  mustExec: !1,
                              });
                          }, 1e3);
                          for (const i of a) i.translateInPage(t, e);
                      }
                      setUpDragSession() {
                          if (this.hasSelection) {
                              this.disableUserSelect(!0);
                              this.#lt = new Map();
                              for (const t of this.#bt) this.#lt.set(t, { savedX: t.x, savedY: t.y, savedPageIndex: t.pageIndex, newX: 0, newY: 0, newPageIndex: -1 });
                          }
                      }
                      endDragSession() {
                          if (!this.#lt) return !1;
                          this.disableUserSelect(!1);
                          const t = this.#lt;
                          this.#lt = null;
                          let e = !1;
                          for (const [{ x: i, y: s, pageIndex: n }, a] of t) {
                              a.newX = i;
                              a.newY = s;
                              a.newPageIndex = n;
                              e ||= i !== a.savedX || s !== a.savedY || n !== a.savedPageIndex;
                          }
                          if (!e) return !1;
                          const move = (t, e, i, s) => {
                              if (this.#et.has(t.id)) {
                                  const n = this.#it.get(s);
                                  if (n) t._setParentAndPosition(n, e, i);
                                  else {
                                      t.pageIndex = s;
                                      t.x = e;
                                      t.y = i;
                                  }
                              }
                          };
                          this.addCommands({
                              cmd: () => {
                                  for (const [e, { newX: i, newY: s, newPageIndex: n }] of t) move(e, i, s, n);
                              },
                              undo: () => {
                                  for (const [e, { savedX: i, savedY: s, savedPageIndex: n }] of t) move(e, i, s, n);
                              },
                              mustExec: !0,
                          });
                          return !0;
                      }
                      dragSelectedEditors(t, e) {
                          if (this.#lt) for (const i of this.#lt.keys()) i.drag(t, e);
                      }
                      rebuild(t) {
                          if (null === t.parent) {
                              const e = this.getLayer(t.pageIndex);
                              if (e) {
                                  e.changeParent(t);
                                  e.addOrRebuild(t);
                              } else {
                                  this.addEditor(t);
                                  this.addToAnnotationStorage(t);
                                  t.rebuild();
                              }
                          } else t.parent.addOrRebuild(t);
                      }
                      isActive(t) {
                          return this.#tt === t;
                      }
                      getActive() {
                          return this.#tt;
                      }
                      getMode() {
                          return this.#ft;
                      }
                      get imageManager() {
                          return (0, s.shadow)(this, "imageManager", new ImageManager());
                      }
                  }
                  e.AnnotationEditorUIManager = AnnotationEditorUIManager;
              },
              (t, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 });
                  e.StatTimer = e.RenderingCancelledException = e.PixelsPerInch = e.PageViewport = e.PDFDateString = e.DOMStandardFontDataFactory = e.DOMSVGFactory = e.DOMFilterFactory = e.DOMCanvasFactory = e.DOMCMapReaderFactory = void 0;
                  e.deprecated = function deprecated(t) {
                      console.log("Deprecated API usage: " + t);
                  };
                  e.getColorValues = function getColorValues(t) {
                      const e = document.createElement("span");
                      e.style.visibility = "hidden";
                      document.body.append(e);
                      for (const i of t.keys()) {
                          e.style.color = i;
                          const s = window.getComputedStyle(e).color;
                          t.set(i, getRGB(s));
                      }
                      e.remove();
                  };
                  e.getCurrentTransform = function getCurrentTransform(t) {
                      const { a: e, b: i, c: s, d: n, e: a, f: r } = t.getTransform();
                      return [e, i, s, n, a, r];
                  };
                  e.getCurrentTransformInverse = function getCurrentTransformInverse(t) {
                      const { a: e, b: i, c: s, d: n, e: a, f: r } = t.getTransform().invertSelf();
                      return [e, i, s, n, a, r];
                  };
                  e.getFilenameFromUrl = function getFilenameFromUrl(t, e = !1) {
                      e || ([t] = t.split(/[#?]/, 1));
                      return t.substring(t.lastIndexOf("/") + 1);
                  };
                  e.getPdfFilenameFromUrl = function getPdfFilenameFromUrl(t, e = "document.pdf") {
                      if ("string" != typeof t) return e;
                      if (isDataScheme(t)) {
                          (0, n.warn)('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.');
                          return e;
                      }
                      const i = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i,
                          s = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/.exec(t);
                      let a = i.exec(s[1]) || i.exec(s[2]) || i.exec(s[3]);
                      if (a) {
                          a = a[0];
                          if (a.includes("%"))
                              try {
                                  a = i.exec(decodeURIComponent(a))[0];
                              } catch {}
                      }
                      return a || e;
                  };
                  e.getRGB = getRGB;
                  e.getXfaPageViewport = function getXfaPageViewport(t, { scale: e = 1, rotation: i = 0 }) {
                      const { width: s, height: n } = t.attributes.style,
                          a = [0, 0, parseInt(s), parseInt(n)];
                      return new PageViewport({ viewBox: a, scale: e, rotation: i });
                  };
                  e.isDataScheme = isDataScheme;
                  e.isPdfFile = function isPdfFile(t) {
                      return "string" == typeof t && /\.pdf$/i.test(t);
                  };
                  e.isValidFetchUrl = isValidFetchUrl;
                  e.loadScript = function loadScript(t, e = !1) {
                      return new Promise((i, s) => {
                          const n = document.createElement("script");
                          n.src = t;
                          n.onload = function (t) {
                              e && n.remove();
                              i(t);
                          };
                          n.onerror = function () {
                              s(new Error(`Cannot load script at: ${n.src}`));
                          };
                          (document.head || document.documentElement).append(n);
                      });
                  };
                  e.noContextMenu = function noContextMenu(t) {
                      t.preventDefault();
                  };
                  e.setLayerDimensions = function setLayerDimensions(t, e, i = !1, s = !0) {
                      if (e instanceof PageViewport) {
                          const { pageWidth: s, pageHeight: a } = e.rawDims,
                              { style: r } = t,
                              o = n.FeatureTest.isCSSRoundSupported,
                              l = `var(--scale-factor) * ${s}px`,
                              h = `var(--scale-factor) * ${a}px`,
                              c = o ? `round(${l}, 1px)` : `calc(${l})`,
                              d = o ? `round(${h}, 1px)` : `calc(${h})`;
                          if (i && e.rotation % 180 != 0) {
                              r.width = d;
                              r.height = c;
                          } else {
                              r.width = c;
                              r.height = d;
                          }
                      }
                      s && t.setAttribute("data-main-rotation", e.rotation);
                  };
                  var s = i(7),
                      n = i(1);
                  const a = "http://www.w3.org/2000/svg";
                  class PixelsPerInch {
                      static CSS = 96;
                      static PDF = 72;
                      static PDF_TO_CSS_UNITS = this.CSS / this.PDF;
                  }
                  e.PixelsPerInch = PixelsPerInch;
                  class DOMFilterFactory extends s.BaseFilterFactory {
                      #$t;
                      #Xt;
                      #e;
                      #Kt;
                      #Yt;
                      #Jt;
                      #Qt;
                      #Zt;
                      #te;
                      #ee;
                      #q = 0;
                      constructor({ docId: t, ownerDocument: e = globalThis.document } = {}) {
                          super();
                          this.#e = t;
                          this.#Kt = e;
                      }
                      get #$() {
                          return (this.#$t ||= new Map());
                      }
                      get #ie() {
                          if (!this.#Xt) {
                              const t = this.#Kt.createElement("div"),
                                  { style: e } = t;
                              e.visibility = "hidden";
                              e.contain = "strict";
                              e.width = e.height = 0;
                              e.position = "absolute";
                              e.top = e.left = 0;
                              e.zIndex = -1;
                              const i = this.#Kt.createElementNS(a, "svg");
                              i.setAttribute("width", 0);
                              i.setAttribute("height", 0);
                              this.#Xt = this.#Kt.createElementNS(a, "defs");
                              t.append(i);
                              i.append(this.#Xt);
                              this.#Kt.body.append(t);
                          }
                          return this.#Xt;
                      }
                      addFilter(t) {
                          if (!t) return "none";
                          let e,
                              i,
                              s,
                              n,
                              a = this.#$.get(t);
                          if (a) return a;
                          if (1 === t.length) {
                              const a = t[0],
                                  r = new Array(256);
                              for (let t = 0; t < 256; t++) r[t] = a[t] / 255;
                              n = e = i = s = r.join(",");
                          } else {
                              const [a, r, o] = t,
                                  l = new Array(256),
                                  h = new Array(256),
                                  c = new Array(256);
                              for (let t = 0; t < 256; t++) {
                                  l[t] = a[t] / 255;
                                  h[t] = r[t] / 255;
                                  c[t] = o[t] / 255;
                              }
                              e = l.join(",");
                              i = h.join(",");
                              s = c.join(",");
                              n = `${e}${i}${s}`;
                          }
                          a = this.#$.get(n);
                          if (a) {
                              this.#$.set(t, a);
                              return a;
                          }
                          const r = `g_${this.#e}_transfer_map_${this.#q++}`,
                              o = `url(#${r})`;
                          this.#$.set(t, o);
                          this.#$.set(n, o);
                          const l = this.#se(r);
                          this.#ne(e, i, s, l);
                          return o;
                      }
                      addHCMFilter(t, e) {
                          const i = `${t}-${e}`;
                          if (this.#Jt === i) return this.#Qt;
                          this.#Jt = i;
                          this.#Qt = "none";
                          this.#Yt?.remove();
                          if (!t || !e) return this.#Qt;
                          const s = this.#ae(t);
                          t = n.Util.makeHexColor(...s);
                          const a = this.#ae(e);
                          e = n.Util.makeHexColor(...a);
                          this.#ie.style.color = "";
                          if (("#000000" === t && "#ffffff" === e) || t === e) return this.#Qt;
                          const r = new Array(256);
                          for (let t = 0; t <= 255; t++) {
                              const e = t / 255;
                              r[t] = e <= 0.03928 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
                          }
                          const o = r.join(","),
                              l = `g_${this.#e}_hcm_filter`,
                              h = (this.#Zt = this.#se(l));
                          this.#ne(o, o, o, h);
                          this.#re(h);
                          const getSteps = (t, e) => {
                              const i = s[t] / 255,
                                  n = a[t] / 255,
                                  r = new Array(e + 1);
                              for (let t = 0; t <= e; t++) r[t] = i + (t / e) * (n - i);
                              return r.join(",");
                          };
                          this.#ne(getSteps(0, 5), getSteps(1, 5), getSteps(2, 5), h);
                          this.#Qt = `url(#${l})`;
                          return this.#Qt;
                      }
                      addHighlightHCMFilter(t, e, i, s) {
                          const n = `${t}-${e}-${i}-${s}`;
                          if (this.#te === n) return this.#ee;
                          this.#te = n;
                          this.#ee = "none";
                          this.#Zt?.remove();
                          if (!t || !e) return this.#ee;
                          const [a, r] = [t, e].map(this.#ae.bind(this));
                          let o = Math.round(0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2]),
                              l = Math.round(0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]),
                              [h, c] = [i, s].map(this.#ae.bind(this));
                          l < o && ([o, l, h, c] = [l, o, c, h]);
                          this.#ie.style.color = "";
                          const getSteps = (t, e, i) => {
                                  const s = new Array(256),
                                      n = (l - o) / i,
                                      a = t / 255,
                                      r = (e - t) / (255 * i);
                                  let h = 0;
                                  for (let t = 0; t <= i; t++) {
                                      const e = Math.round(o + t * n),
                                          i = a + t * r;
                                      for (let t = h; t <= e; t++) s[t] = i;
                                      h = e + 1;
                                  }
                                  for (let t = h; t < 256; t++) s[t] = s[h - 1];
                                  return s.join(",");
                              },
                              d = `g_${this.#e}_hcm_highlight_filter`,
                              u = (this.#Zt = this.#se(d));
                          this.#re(u);
                          this.#ne(getSteps(h[0], c[0], 5), getSteps(h[1], c[1], 5), getSteps(h[2], c[2], 5), u);
                          this.#ee = `url(#${d})`;
                          return this.#ee;
                      }
                      destroy(t = !1) {
                          if (!t || (!this.#Qt && !this.#ee)) {
                              if (this.#Xt) {
                                  this.#Xt.parentNode.parentNode.remove();
                                  this.#Xt = null;
                              }
                              if (this.#$t) {
                                  this.#$t.clear();
                                  this.#$t = null;
                              }
                              this.#q = 0;
                          }
                      }
                      #re(t) {
                          const e = this.#Kt.createElementNS(a, "feColorMatrix");
                          e.setAttribute("type", "matrix");
                          e.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0");
                          t.append(e);
                      }
                      #se(t) {
                          const e = this.#Kt.createElementNS(a, "filter");
                          e.setAttribute("color-interpolation-filters", "sRGB");
                          e.setAttribute("id", t);
                          this.#ie.append(e);
                          return e;
                      }
                      #oe(t, e, i) {
                          const s = this.#Kt.createElementNS(a, e);
                          s.setAttribute("type", "discrete");
                          s.setAttribute("tableValues", i);
                          t.append(s);
                      }
                      #ne(t, e, i, s) {
                          const n = this.#Kt.createElementNS(a, "feComponentTransfer");
                          s.append(n);
                          this.#oe(n, "feFuncR", t);
                          this.#oe(n, "feFuncG", e);
                          this.#oe(n, "feFuncB", i);
                      }
                      #ae(t) {
                          this.#ie.style.color = t;
                          return getRGB(getComputedStyle(this.#ie).getPropertyValue("color"));
                      }
                  }
                  e.DOMFilterFactory = DOMFilterFactory;
                  class DOMCanvasFactory extends s.BaseCanvasFactory {
                      constructor({ ownerDocument: t = globalThis.document } = {}) {
                          super();
                          this._document = t;
                      }
                      _createCanvas(t, e) {
                          const i = this._document.createElement("canvas");
                          i.width = t;
                          i.height = e;
                          return i;
                      }
                  }
                  e.DOMCanvasFactory = DOMCanvasFactory;
                  async function fetchData(t, e = !1) {
                      if (isValidFetchUrl(t, document.baseURI)) {
                          const i = await fetch(t);
                          if (!i.ok) throw new Error(i.statusText);
                          return e ? new Uint8Array(await i.arrayBuffer()) : (0, n.stringToBytes)(await i.text());
                      }
                      return new Promise((i, s) => {
                          const a = new XMLHttpRequest();
                          a.open("GET", t, !0);
                          e && (a.responseType = "arraybuffer");
                          a.onreadystatechange = () => {
                              if (a.readyState === XMLHttpRequest.DONE) {
                                  if (200 === a.status || 0 === a.status) {
                                      let t;
                                      e && a.response ? (t = new Uint8Array(a.response)) : !e && a.responseText && (t = (0, n.stringToBytes)(a.responseText));
                                      if (t) {
                                          i(t);
                                          return;
                                      }
                                  }
                                  s(new Error(a.statusText));
                              }
                          };
                          a.send(null);
                      });
                  }
                  class DOMCMapReaderFactory extends s.BaseCMapReaderFactory {
                      _fetchData(t, e) {
                          return fetchData(t, this.isCompressed).then((t) => ({ cMapData: t, compressionType: e }));
                      }
                  }
                  e.DOMCMapReaderFactory = DOMCMapReaderFactory;
                  class DOMStandardFontDataFactory extends s.BaseStandardFontDataFactory {
                      _fetchData(t) {
                          return fetchData(t, !0);
                      }
                  }
                  e.DOMStandardFontDataFactory = DOMStandardFontDataFactory;
                  class DOMSVGFactory extends s.BaseSVGFactory {
                      _createSVG(t) {
                          return document.createElementNS(a, t);
                      }
                  }
                  e.DOMSVGFactory = DOMSVGFactory;
                  class PageViewport {
                      constructor({ viewBox: t, scale: e, rotation: i, offsetX: s = 0, offsetY: n = 0, dontFlip: a = !1 }) {
                          this.viewBox = t;
                          this.scale = e;
                          this.rotation = i;
                          this.offsetX = s;
                          this.offsetY = n;
                          const r = (t[2] + t[0]) / 2,
                              o = (t[3] + t[1]) / 2;
                          let l, h, c, d, u, p, g, m;
                          (i %= 360) < 0 && (i += 360);
                          switch (i) {
                              case 180:
                                  l = -1;
                                  h = 0;
                                  c = 0;
                                  d = 1;
                                  break;
                              case 90:
                                  l = 0;
                                  h = 1;
                                  c = 1;
                                  d = 0;
                                  break;
                              case 270:
                                  l = 0;
                                  h = -1;
                                  c = -1;
                                  d = 0;
                                  break;
                              case 0:
                                  l = 1;
                                  h = 0;
                                  c = 0;
                                  d = -1;
                                  break;
                              default:
                                  throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
                          }
                          if (a) {
                              c = -c;
                              d = -d;
                          }
                          if (0 === l) {
                              u = Math.abs(o - t[1]) * e + s;
                              p = Math.abs(r - t[0]) * e + n;
                              g = (t[3] - t[1]) * e;
                              m = (t[2] - t[0]) * e;
                          } else {
                              u = Math.abs(r - t[0]) * e + s;
                              p = Math.abs(o - t[1]) * e + n;
                              g = (t[2] - t[0]) * e;
                              m = (t[3] - t[1]) * e;
                          }
                          this.transform = [l * e, h * e, c * e, d * e, u - l * e * r - c * e * o, p - h * e * r - d * e * o];
                          this.width = g;
                          this.height = m;
                      }
                      get rawDims() {
                          const { viewBox: t } = this;
                          return (0, n.shadow)(this, "rawDims", { pageWidth: t[2] - t[0], pageHeight: t[3] - t[1], pageX: t[0], pageY: t[1] });
                      }
                      clone({ scale: t = this.scale, rotation: e = this.rotation, offsetX: i = this.offsetX, offsetY: s = this.offsetY, dontFlip: n = !1 } = {}) {
                          return new PageViewport({ viewBox: this.viewBox.slice(), scale: t, rotation: e, offsetX: i, offsetY: s, dontFlip: n });
                      }
                      convertToViewportPoint(t, e) {
                          return n.Util.applyTransform([t, e], this.transform);
                      }
                      convertToViewportRectangle(t) {
                          const e = n.Util.applyTransform([t[0], t[1]], this.transform),
                              i = n.Util.applyTransform([t[2], t[3]], this.transform);
                          return [e[0], e[1], i[0], i[1]];
                      }
                      convertToPdfPoint(t, e) {
                          return n.Util.applyInverseTransform([t, e], this.transform);
                      }
                  }
                  e.PageViewport = PageViewport;
                  class RenderingCancelledException extends n.BaseException {
                      constructor(t, e = 0) {
                          super(t, "RenderingCancelledException");
                          this.extraDelay = e;
                      }
                  }
                  e.RenderingCancelledException = RenderingCancelledException;
                  function isDataScheme(t) {
                      const e = t.length;
                      let i = 0;
                      for (; i < e && "" === t[i].trim(); ) i++;
                      return "data:" === t.substring(i, i + 5).toLowerCase();
                  }
                  e.StatTimer = class StatTimer {
                      started = Object.create(null);
                      times = [];
                      time(t) {
                          t in this.started && (0, n.warn)(`Timer is already running for ${t}`);
                          this.started[t] = Date.now();
                      }
                      timeEnd(t) {
                          t in this.started || (0, n.warn)(`Timer has not been started for ${t}`);
                          this.times.push({ name: t, start: this.started[t], end: Date.now() });
                          delete this.started[t];
                      }
                      toString() {
                          const t = [];
                          let e = 0;
                          for (const { name: t } of this.times) e = Math.max(t.length, e);
                          for (const { name: i, start: s, end: n } of this.times) t.push(`${i.padEnd(e)} ${n - s}ms\n`);
                          return t.join("");
                      }
                  };
                  function isValidFetchUrl(t, e) {
                      try {
                          const { protocol: i } = e ? new URL(t, e) : new URL(t);
                          return "http:" === i || "https:" === i;
                      } catch {
                          return !1;
                      }
                  }
                  let r;
                  e.PDFDateString = class PDFDateString {
                      static toDateObject(t) {
                          if (!t || "string" != typeof t) return null;
                          r ||= new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?");
                          const e = r.exec(t);
                          if (!e) return null;
                          const i = parseInt(e[1], 10);
                          let s = parseInt(e[2], 10);
                          s = s >= 1 && s <= 12 ? s - 1 : 0;
                          let n = parseInt(e[3], 10);
                          n = n >= 1 && n <= 31 ? n : 1;
                          let a = parseInt(e[4], 10);
                          a = a >= 0 && a <= 23 ? a : 0;
                          let o = parseInt(e[5], 10);
                          o = o >= 0 && o <= 59 ? o : 0;
                          let l = parseInt(e[6], 10);
                          l = l >= 0 && l <= 59 ? l : 0;
                          const h = e[7] || "Z";
                          let c = parseInt(e[8], 10);
                          c = c >= 0 && c <= 23 ? c : 0;
                          let d = parseInt(e[9], 10) || 0;
                          d = d >= 0 && d <= 59 ? d : 0;
                          if ("-" === h) {
                              a += c;
                              o += d;
                          } else if ("+" === h) {
                              a -= c;
                              o -= d;
                          }
                          return new Date(Date.UTC(i, s, n, a, o, l));
                      }
                  };
                  function getRGB(t) {
                      if (t.startsWith("#")) {
                          const e = parseInt(t.slice(1), 16);
                          return [(16711680 & e) >> 16, (65280 & e) >> 8, 255 & e];
                      }
                      if (t.startsWith("rgb("))
                          return t
                              .slice(4, -1)
                              .split(",")
                              .map((t) => parseInt(t));
                      if (t.startsWith("rgba("))
                          return t
                              .slice(5, -1)
                              .split(",")
                              .map((t) => parseInt(t))
                              .slice(0, 3);
                      (0, n.warn)(`Not a valid color format: "${t}"`);
                      return [0, 0, 0];
                  }
              },
              (t, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 });
                  e.BaseStandardFontDataFactory = e.BaseSVGFactory = e.BaseFilterFactory = e.BaseCanvasFactory = e.BaseCMapReaderFactory = void 0;
                  var s = i(1);
                  class BaseFilterFactory {
                      constructor() {
                          this.constructor === BaseFilterFactory && (0, s.unreachable)("Cannot initialize BaseFilterFactory.");
                      }
                      addFilter(t) {
                          return "none";
                      }
                      addHCMFilter(t, e) {
                          return "none";
                      }
                      addHighlightHCMFilter(t, e, i, s) {
                          return "none";
                      }
                      destroy(t = !1) {}
                  }
                  e.BaseFilterFactory = BaseFilterFactory;
                  class BaseCanvasFactory {
                      constructor() {
                          this.constructor === BaseCanvasFactory && (0, s.unreachable)("Cannot initialize BaseCanvasFactory.");
                      }
                      create(t, e) {
                          if (t <= 0 || e <= 0) throw new Error("Invalid canvas size");
                          const i = this._createCanvas(t, e);
                          return { canvas: i, context: i.getContext("2d") };
                      }
                      reset(t, e, i) {
                          if (!t.canvas) throw new Error("Canvas is not specified");
                          if (e <= 0 || i <= 0) throw new Error("Invalid canvas size");
                          t.canvas.width = e;
                          t.canvas.height = i;
                      }
                      destroy(t) {
                          if (!t.canvas) throw new Error("Canvas is not specified");
                          t.canvas.width = 0;
                          t.canvas.height = 0;
                          t.canvas = null;
                          t.context = null;
                      }
                      _createCanvas(t, e) {
                          (0, s.unreachable)("Abstract method `_createCanvas` called.");
                      }
                  }
                  e.BaseCanvasFactory = BaseCanvasFactory;
                  class BaseCMapReaderFactory {
                      constructor({ baseUrl: t = null, isCompressed: e = !0 }) {
                          this.constructor === BaseCMapReaderFactory && (0, s.unreachable)("Cannot initialize BaseCMapReaderFactory.");
                          this.baseUrl = t;
                          this.isCompressed = e;
                      }
                      async fetch({ name: t }) {
                          if (!this.baseUrl) throw new Error('The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.');
                          if (!t) throw new Error("CMap name must be specified.");
                          const e = this.baseUrl + t + (this.isCompressed ? ".bcmap" : ""),
                              i = this.isCompressed ? s.CMapCompressionType.BINARY : s.CMapCompressionType.NONE;
                          return this._fetchData(e, i).catch((t) => {
                              throw new Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${e}`);
                          });
                      }
                      _fetchData(t, e) {
                          (0, s.unreachable)("Abstract method `_fetchData` called.");
                      }
                  }
                  e.BaseCMapReaderFactory = BaseCMapReaderFactory;
                  class BaseStandardFontDataFactory {
                      constructor({ baseUrl: t = null }) {
                          this.constructor === BaseStandardFontDataFactory && (0, s.unreachable)("Cannot initialize BaseStandardFontDataFactory.");
                          this.baseUrl = t;
                      }
                      async fetch({ filename: t }) {
                          if (!this.baseUrl) throw new Error('The standard font "baseUrl" parameter must be specified, ensure that the "standardFontDataUrl" API parameter is provided.');
                          if (!t) throw new Error("Font filename must be specified.");
                          const e = `${this.baseUrl}${t}`;
                          return this._fetchData(e).catch((t) => {
                              throw new Error(`Unable to load font data at: ${e}`);
                          });
                      }
                      _fetchData(t) {
                          (0, s.unreachable)("Abstract method `_fetchData` called.");
                      }
                  }
                  e.BaseStandardFontDataFactory = BaseStandardFontDataFactory;
                  class BaseSVGFactory {
                      constructor() {
                          this.constructor === BaseSVGFactory && (0, s.unreachable)("Cannot initialize BaseSVGFactory.");
                      }
                      create(t, e, i = !1) {
                          if (t <= 0 || e <= 0) throw new Error("Invalid SVG dimensions");
                          const s = this._createSVG("svg:svg");
                          s.setAttribute("version", "1.1");
                          if (!i) {
                              s.setAttribute("width", `${t}px`);
                              s.setAttribute("height", `${e}px`);
                          }
                          s.setAttribute("preserveAspectRatio", "none");
                          s.setAttribute("viewBox", `0 0 ${t} ${e}`);
                          return s;
                      }
                      createElement(t) {
                          if ("string" != typeof t) throw new Error("Invalid SVG element type");
                          return this._createSVG(t);
                      }
                      _createSVG(t) {
                          (0, s.unreachable)("Abstract method `_createSVG` called.");
                      }
                  }
                  e.BaseSVGFactory = BaseSVGFactory;
              },
              (t, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 });
                  e.MurmurHash3_64 = void 0;
                  var s = i(1);
                  const n = 3285377520,
                      a = 4294901760,
                      r = 65535;
                  e.MurmurHash3_64 = class MurmurHash3_64 {
                      constructor(t) {
                          this.h1 = t ? 4294967295 & t : n;
                          this.h2 = t ? 4294967295 & t : n;
                      }
                      update(t) {
                          let e, i;
                          if ("string" == typeof t) {
                              e = new Uint8Array(2 * t.length);
                              i = 0;
                              for (let s = 0, n = t.length; s < n; s++) {
                                  const n = t.charCodeAt(s);
                                  if (n <= 255) e[i++] = n;
                                  else {
                                      e[i++] = n >>> 8;
                                      e[i++] = 255 & n;
                                  }
                              }
                          } else {
                              if (!(0, s.isArrayBuffer)(t)) throw new Error("Wrong data format in MurmurHash3_64_update. Input must be a string or array.");
                              e = t.slice();
                              i = e.byteLength;
                          }
                          const n = i >> 2,
                              o = i - 4 * n,
                              l = new Uint32Array(e.buffer, 0, n);
                          let h = 0,
                              c = 0,
                              d = this.h1,
                              u = this.h2;
                          const p = 3432918353,
                              g = 461845907,
                              m = 11601,
                              f = 13715;
                          for (let t = 0; t < n; t++)
                              if (1 & t) {
                                  h = l[t];
                                  h = ((h * p) & a) | ((h * m) & r);
                                  h = (h << 15) | (h >>> 17);
                                  h = ((h * g) & a) | ((h * f) & r);
                                  d ^= h;
                                  d = (d << 13) | (d >>> 19);
                                  d = 5 * d + 3864292196;
                              } else {
                                  c = l[t];
                                  c = ((c * p) & a) | ((c * m) & r);
                                  c = (c << 15) | (c >>> 17);
                                  c = ((c * g) & a) | ((c * f) & r);
                                  u ^= c;
                                  u = (u << 13) | (u >>> 19);
                                  u = 5 * u + 3864292196;
                              }
                          h = 0;
                          switch (o) {
                              case 3:
                                  h ^= e[4 * n + 2] << 16;
                              case 2:
                                  h ^= e[4 * n + 1] << 8;
                              case 1:
                                  h ^= e[4 * n];
                                  h = ((h * p) & a) | ((h * m) & r);
                                  h = (h << 15) | (h >>> 17);
                                  h = ((h * g) & a) | ((h * f) & r);
                                  1 & n ? (d ^= h) : (u ^= h);
                          }
                          this.h1 = d;
                          this.h2 = u;
                      }
                      hexdigest() {
                          let t = this.h1,
                              e = this.h2;
                          t ^= e >>> 1;
                          t = ((3981806797 * t) & a) | ((36045 * t) & r);
                          e = ((4283543511 * e) & a) | (((2950163797 * ((e << 16) | (t >>> 16))) & a) >>> 16);
                          t ^= e >>> 1;
                          t = ((444984403 * t) & a) | ((60499 * t) & r);
                          e = ((3301882366 * e) & a) | (((3120437893 * ((e << 16) | (t >>> 16))) & a) >>> 16);
                          t ^= e >>> 1;
                          return (t >>> 0).toString(16).padStart(8, "0") + (e >>> 0).toString(16).padStart(8, "0");
                      }
                  };
              },
              (t, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 });
                  e.FontLoader = e.FontFaceObject = void 0;
                  var s = i(1);
                  e.FontLoader = class FontLoader {
                      #le = new Set();
                      constructor({ ownerDocument: t = globalThis.document, styleElement: e = null }) {
                          this._document = t;
                          this.nativeFontFaces = new Set();
                          this.styleElement = null;
                          this.loadingRequests = [];
                          this.loadTestFontId = 0;
                      }
                      addNativeFontFace(t) {
                          this.nativeFontFaces.add(t);
                          this._document.fonts.add(t);
                      }
                      removeNativeFontFace(t) {
                          this.nativeFontFaces.delete(t);
                          this._document.fonts.delete(t);
                      }
                      insertRule(t) {
                          if (!this.styleElement) {
                              this.styleElement = this._document.createElement("style");
                              this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement);
                          }
                          const e = this.styleElement.sheet;
                          e.insertRule(t, e.cssRules.length);
                      }
                      clear() {
                          for (const t of this.nativeFontFaces) this._document.fonts.delete(t);
                          this.nativeFontFaces.clear();
                          this.#le.clear();
                          if (this.styleElement) {
                              this.styleElement.remove();
                              this.styleElement = null;
                          }
                      }
                      async loadSystemFont(t) {
                          if (t && !this.#le.has(t.loadedName)) {
                              (0, s.assert)(!this.disableFontFace, "loadSystemFont shouldn't be called when `disableFontFace` is set.");
                              if (this.isFontLoadingAPISupported) {
                                  const { loadedName: e, src: i, style: n } = t,
                                      a = new FontFace(e, i, n);
                                  this.addNativeFontFace(a);
                                  try {
                                      await a.load();
                                      this.#le.add(e);
                                  } catch {
                                      (0, s.warn)(`Cannot load system font: ${t.baseFontName}, installing it could help to improve PDF rendering.`);
                                      this.removeNativeFontFace(a);
                                  }
                              } else (0, s.unreachable)("Not implemented: loadSystemFont without the Font Loading API.");
                          }
                      }
                      async bind(t) {
                          if (t.attached || (t.missingFile && !t.systemFontInfo)) return;
                          t.attached = !0;
                          if (t.systemFontInfo) {
                              await this.loadSystemFont(t.systemFontInfo);
                              return;
                          }
                          if (this.isFontLoadingAPISupported) {
                              const e = t.createNativeFontFace();
                              if (e) {
                                  this.addNativeFontFace(e);
                                  try {
                                      await e.loaded;
                                  } catch (i) {
                                      (0, s.warn)(`Failed to load font '${e.family}': '${i}'.`);
                                      t.disableFontFace = !0;
                                      throw i;
                                  }
                              }
                              return;
                          }
                          const e = t.createFontFaceRule();
                          if (e) {
                              this.insertRule(e);
                              if (this.isSyncFontLoadingSupported) return;
                              await new Promise((e) => {
                                  const i = this._queueLoadingCallback(e);
                                  this._prepareFontLoadEvent(t, i);
                              });
                          }
                      }
                      get isFontLoadingAPISupported() {
                          const t = !!this._document?.fonts;
                          return (0, s.shadow)(this, "isFontLoadingAPISupported", t);
                      }
                      get isSyncFontLoadingSupported() {
                          let t = !1;
                          (s.isNodeJS || ("undefined" != typeof navigator && /Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(navigator.userAgent))) && (t = !0);
                          return (0, s.shadow)(this, "isSyncFontLoadingSupported", t);
                      }
                      _queueLoadingCallback(t) {
                          const { loadingRequests: e } = this,
                              i = {
                                  done: !1,
                                  complete: function completeRequest() {
                                      (0, s.assert)(!i.done, "completeRequest() cannot be called twice.");
                                      i.done = !0;
                                      for (; e.length > 0 && e[0].done; ) {
                                          const t = e.shift();
                                          setTimeout(t.callback, 0);
                                      }
                                  },
                                  callback: t,
                              };
                          e.push(i);
                          return i;
                      }
                      get _loadTestFont() {
                          const t = atob(
                              "T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA=="
                          );
                          return (0, s.shadow)(this, "_loadTestFont", t);
                      }
                      _prepareFontLoadEvent(t, e) {
                          function int32(t, e) {
                              return (t.charCodeAt(e) << 24) | (t.charCodeAt(e + 1) << 16) | (t.charCodeAt(e + 2) << 8) | (255 & t.charCodeAt(e + 3));
                          }
                          function spliceString(t, e, i, s) {
                              return t.substring(0, e) + s + t.substring(e + i);
                          }
                          let i, n;
                          const a = this._document.createElement("canvas");
                          a.width = 1;
                          a.height = 1;
                          const r = a.getContext("2d");
                          let o = 0;
                          const l = `lt${Date.now()}${this.loadTestFontId++}`;
                          let h = this._loadTestFont;
                          h = spliceString(h, 976, l.length, l);
                          const c = 1482184792;
                          let d = int32(h, 16);
                          for (i = 0, n = l.length - 3; i < n; i += 4) d = (d - c + int32(l, i)) | 0;
                          i < l.length && (d = (d - c + int32(l + "XXX", i)) | 0);
                          h = spliceString(h, 16, 4, (0, s.string32)(d));
                          const u = `@font-face {font-family:"${l}";src:${`url(data:font/opentype;base64,${btoa(h)});`}}`;
                          this.insertRule(u);
                          const p = this._document.createElement("div");
                          p.style.visibility = "hidden";
                          p.style.width = p.style.height = "10px";
                          p.style.position = "absolute";
                          p.style.top = p.style.left = "0px";
                          for (const e of [t.loadedName, l]) {
                              const t = this._document.createElement("span");
                              t.textContent = "Hi";
                              t.style.fontFamily = e;
                              p.append(t);
                          }
                          this._document.body.append(p);
                          !(function isFontReady(t, e) {
                              if (++o > 30) {
                                  (0, s.warn)("Load test font never loaded.");
                                  e();
                                  return;
                              }
                              r.font = "30px " + t;
                              r.fillText(".", 0, 20);
                              r.getImageData(0, 0, 1, 1).data[3] > 0 ? e() : setTimeout(isFontReady.bind(null, t, e));
                          })(l, () => {
                              p.remove();
                              e.complete();
                          });
                      }
                  };
                  e.FontFaceObject = class FontFaceObject {
                      constructor(t, { isEvalSupported: e = !0, disableFontFace: i = !1, ignoreErrors: s = !1, inspectFont: n = null }) {
                          this.compiledGlyphs = Object.create(null);
                          for (const e in t) this[e] = t[e];
                          this.isEvalSupported = !1 !== e;
                          this.disableFontFace = !0 === i;
                          this.ignoreErrors = !0 === s;
                          this._inspectFont = n;
                      }
                      createNativeFontFace() {
                          if (!this.data || this.disableFontFace) return null;
                          let t;
                          if (this.cssFontInfo) {
                              const e = { weight: this.cssFontInfo.fontWeight };
                              this.cssFontInfo.italicAngle && (e.style = `oblique ${this.cssFontInfo.italicAngle}deg`);
                              t = new FontFace(this.cssFontInfo.fontFamily, this.data, e);
                          } else t = new FontFace(this.loadedName, this.data, {});
                          this._inspectFont?.(this);
                          return t;
                      }
                      createFontFaceRule() {
                          if (!this.data || this.disableFontFace) return null;
                          const t = (0, s.bytesToString)(this.data),
                              e = `url(data:${this.mimetype};base64,${btoa(t)});`;
                          let i;
                          if (this.cssFontInfo) {
                              let t = `font-weight: ${this.cssFontInfo.fontWeight};`;
                              this.cssFontInfo.italicAngle && (t += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`);
                              i = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${t}src:${e}}`;
                          } else i = `@font-face {font-family:"${this.loadedName}";src:${e}}`;
                          this._inspectFont?.(this, e);
                          return i;
                      }
                      getPathGenerator(t, e) {
                          if (void 0 !== this.compiledGlyphs[e]) return this.compiledGlyphs[e];
                          let i;
                          try {
                              i = t.get(this.loadedName + "_path_" + e);
                          } catch (t) {
                              if (!this.ignoreErrors) throw t;
                              (0, s.warn)(`getPathGenerator - ignoring character: "${t}".`);
                              return (this.compiledGlyphs[e] = function (t, e) {});
                          }
                          if (this.isEvalSupported && s.FeatureTest.isEvalSupported) {
                              const t = [];
                              for (const e of i) {
                                  const i = void 0 !== e.args ? e.args.join(",") : "";
                                  t.push("c.", e.cmd, "(", i, ");\n");
                              }
                              return (this.compiledGlyphs[e] = new Function("c", "size", t.join("")));
                          }
                          return (this.compiledGlyphs[e] = function (t, e) {
                              for (const s of i) {
                                  "scale" === s.cmd && (s.args = [e, -e]);
                                  t[s.cmd].apply(t, s.args);
                              }
                          });
                      }
                  };
              },
              (t, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 });
                  e.NodeStandardFontDataFactory = e.NodeFilterFactory = e.NodeCanvasFactory = e.NodeCMapReaderFactory = void 0;
                  var s = i(7);
                  i(1);
                  const fetchData = function (t) {
                      return new Promise((e, i) => {
                          require("fs").readFile(t, (t, s) => {
                              !t && s ? e(new Uint8Array(s)) : i(new Error(t));
                          });
                      });
                  };
                  class NodeFilterFactory extends s.BaseFilterFactory {}
                  e.NodeFilterFactory = NodeFilterFactory;
                  class NodeCanvasFactory extends s.BaseCanvasFactory {
                      _createCanvas(t, e) {
                          return require("canvas").createCanvas(t, e);
                      }
                  }
                  e.NodeCanvasFactory = NodeCanvasFactory;
                  class NodeCMapReaderFactory extends s.BaseCMapReaderFactory {
                      _fetchData(t, e) {
                          return fetchData(t).then((t) => ({ cMapData: t, compressionType: e }));
                      }
                  }
                  e.NodeCMapReaderFactory = NodeCMapReaderFactory;
                  class NodeStandardFontDataFactory extends s.BaseStandardFontDataFactory {
                      _fetchData(t) {
                          return fetchData(t);
                      }
                  }
                  e.NodeStandardFontDataFactory = NodeStandardFontDataFactory;
              },
              (t, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 });
                  e.CanvasGraphics = void 0;
                  var s = i(1),
                      n = i(6),
                      a = i(12),
                      r = i(13);
                  const o = 4096,
                      l = 16;
                  class CachedCanvases {
                      constructor(t) {
                          this.canvasFactory = t;
                          this.cache = Object.create(null);
                      }
                      getCanvas(t, e, i) {
                          let s;
                          if (void 0 !== this.cache[t]) {
                              s = this.cache[t];
                              this.canvasFactory.reset(s, e, i);
                          } else {
                              s = this.canvasFactory.create(e, i);
                              this.cache[t] = s;
                          }
                          return s;
                      }
                      delete(t) {
                          delete this.cache[t];
                      }
                      clear() {
                          for (const t in this.cache) {
                              const e = this.cache[t];
                              this.canvasFactory.destroy(e);
                              delete this.cache[t];
                          }
                      }
                  }
                  function drawImageAtIntegerCoords(t, e, i, s, a, r, o, l, h, c) {
                      const [d, u, p, g, m, f] = (0, n.getCurrentTransform)(t);
                      if (0 === u && 0 === p) {
                          const n = o * d + m,
                              b = Math.round(n),
                              A = l * g + f,
                              _ = Math.round(A),
                              v = (o + h) * d + m,
                              y = Math.abs(Math.round(v) - b) || 1,
                              S = (l + c) * g + f,
                              E = Math.abs(Math.round(S) - _) || 1;
                          t.setTransform(Math.sign(d), 0, 0, Math.sign(g), b, _);
                          t.drawImage(e, i, s, a, r, 0, 0, y, E);
                          t.setTransform(d, u, p, g, m, f);
                          return [y, E];
                      }
                      if (0 === d && 0 === g) {
                          const n = l * p + m,
                              b = Math.round(n),
                              A = o * u + f,
                              _ = Math.round(A),
                              v = (l + c) * p + m,
                              y = Math.abs(Math.round(v) - b) || 1,
                              S = (o + h) * u + f,
                              E = Math.abs(Math.round(S) - _) || 1;
                          t.setTransform(0, Math.sign(u), Math.sign(p), 0, b, _);
                          t.drawImage(e, i, s, a, r, 0, 0, E, y);
                          t.setTransform(d, u, p, g, m, f);
                          return [E, y];
                      }
                      t.drawImage(e, i, s, a, r, o, l, h, c);
                      return [Math.hypot(d, u) * h, Math.hypot(p, g) * c];
                  }
                  class CanvasExtraState {
                      constructor(t, e) {
                          this.alphaIsShape = !1;
                          this.fontSize = 0;
                          this.fontSizeScale = 1;
                          this.textMatrix = s.IDENTITY_MATRIX;
                          this.textMatrixScale = 1;
                          this.fontMatrix = s.FONT_IDENTITY_MATRIX;
                          this.leading = 0;
                          this.x = 0;
                          this.y = 0;
                          this.lineX = 0;
                          this.lineY = 0;
                          this.charSpacing = 0;
                          this.wordSpacing = 0;
                          this.textHScale = 1;
                          this.textRenderingMode = s.TextRenderingMode.FILL;
                          this.textRise = 0;
                          this.fillColor = "#000000";
                          this.strokeColor = "#000000";
                          this.patternFill = !1;
                          this.fillAlpha = 1;
                          this.strokeAlpha = 1;
                          this.lineWidth = 1;
                          this.activeSMask = null;
                          this.transferMaps = "none";
                          this.startNewPathAndClipBox([0, 0, t, e]);
                      }
                      clone() {
                          const t = Object.create(this);
                          t.clipBox = this.clipBox.slice();
                          return t;
                      }
                      setCurrentPoint(t, e) {
                          this.x = t;
                          this.y = e;
                      }
                      updatePathMinMax(t, e, i) {
                          [e, i] = s.Util.applyTransform([e, i], t);
                          this.minX = Math.min(this.minX, e);
                          this.minY = Math.min(this.minY, i);
                          this.maxX = Math.max(this.maxX, e);
                          this.maxY = Math.max(this.maxY, i);
                      }
                      updateRectMinMax(t, e) {
                          const i = s.Util.applyTransform(e, t),
                              n = s.Util.applyTransform(e.slice(2), t);
                          this.minX = Math.min(this.minX, i[0], n[0]);
                          this.minY = Math.min(this.minY, i[1], n[1]);
                          this.maxX = Math.max(this.maxX, i[0], n[0]);
                          this.maxY = Math.max(this.maxY, i[1], n[1]);
                      }
                      updateScalingPathMinMax(t, e) {
                          s.Util.scaleMinMax(t, e);
                          this.minX = Math.min(this.minX, e[0]);
                          this.maxX = Math.max(this.maxX, e[1]);
                          this.minY = Math.min(this.minY, e[2]);
                          this.maxY = Math.max(this.maxY, e[3]);
                      }
                      updateCurvePathMinMax(t, e, i, n, a, r, o, l, h, c) {
                          const d = s.Util.bezierBoundingBox(e, i, n, a, r, o, l, h);
                          if (c) {
                              c[0] = Math.min(c[0], d[0], d[2]);
                              c[1] = Math.max(c[1], d[0], d[2]);
                              c[2] = Math.min(c[2], d[1], d[3]);
                              c[3] = Math.max(c[3], d[1], d[3]);
                          } else this.updateRectMinMax(t, d);
                      }
                      getPathBoundingBox(t = a.PathType.FILL, e = null) {
                          const i = [this.minX, this.minY, this.maxX, this.maxY];
                          if (t === a.PathType.STROKE) {
                              e || (0, s.unreachable)("Stroke bounding box must include transform.");
                              const t = s.Util.singularValueDecompose2dScale(e),
                                  n = (t[0] * this.lineWidth) / 2,
                                  a = (t[1] * this.lineWidth) / 2;
                              i[0] -= n;
                              i[1] -= a;
                              i[2] += n;
                              i[3] += a;
                          }
                          return i;
                      }
                      updateClipFromPath() {
                          const t = s.Util.intersect(this.clipBox, this.getPathBoundingBox());
                          this.startNewPathAndClipBox(t || [0, 0, 0, 0]);
                      }
                      isEmptyClip() {
                          return this.minX === 1 / 0;
                      }
                      startNewPathAndClipBox(t) {
                          this.clipBox = t;
                          this.minX = 1 / 0;
                          this.minY = 1 / 0;
                          this.maxX = 0;
                          this.maxY = 0;
                      }
                      getClippedPathBoundingBox(t = a.PathType.FILL, e = null) {
                          return s.Util.intersect(this.clipBox, this.getPathBoundingBox(t, e));
                      }
                  }
                  function putBinaryImageData(t, e) {
                      if ("undefined" != typeof ImageData && e instanceof ImageData) {
                          t.putImageData(e, 0, 0);
                          return;
                      }
                      const i = e.height,
                          n = e.width,
                          a = i % l,
                          r = (i - a) / l,
                          o = 0 === a ? r : r + 1,
                          h = t.createImageData(n, l);
                      let c,
                          d = 0;
                      const u = e.data,
                          p = h.data;
                      let g, m, f, b;
                      if (e.kind === s.ImageKind.GRAYSCALE_1BPP) {
                          const e = u.byteLength,
                              i = new Uint32Array(p.buffer, 0, p.byteLength >> 2),
                              b = i.length,
                              A = (n + 7) >> 3,
                              _ = 4294967295,
                              v = s.FeatureTest.isLittleEndian ? 4278190080 : 255;
                          for (g = 0; g < o; g++) {
                              f = g < r ? l : a;
                              c = 0;
                              for (m = 0; m < f; m++) {
                                  const t = e - d;
                                  let s = 0;
                                  const a = t > A ? n : 8 * t - 7,
                                      r = -8 & a;
                                  let o = 0,
                                      l = 0;
                                  for (; s < r; s += 8) {
                                      l = u[d++];
                                      i[c++] = 128 & l ? _ : v;
                                      i[c++] = 64 & l ? _ : v;
                                      i[c++] = 32 & l ? _ : v;
                                      i[c++] = 16 & l ? _ : v;
                                      i[c++] = 8 & l ? _ : v;
                                      i[c++] = 4 & l ? _ : v;
                                      i[c++] = 2 & l ? _ : v;
                                      i[c++] = 1 & l ? _ : v;
                                  }
                                  for (; s < a; s++) {
                                      if (0 === o) {
                                          l = u[d++];
                                          o = 128;
                                      }
                                      i[c++] = l & o ? _ : v;
                                      o >>= 1;
                                  }
                              }
                              for (; c < b; ) i[c++] = 0;
                              t.putImageData(h, 0, g * l);
                          }
                      } else if (e.kind === s.ImageKind.RGBA_32BPP) {
                          m = 0;
                          b = n * l * 4;
                          for (g = 0; g < r; g++) {
                              p.set(u.subarray(d, d + b));
                              d += b;
                              t.putImageData(h, 0, m);
                              m += l;
                          }
                          if (g < o) {
                              b = n * a * 4;
                              p.set(u.subarray(d, d + b));
                              t.putImageData(h, 0, m);
                          }
                      } else {
                          if (e.kind !== s.ImageKind.RGB_24BPP) throw new Error(`bad image kind: ${e.kind}`);
                          f = l;
                          b = n * f;
                          for (g = 0; g < o; g++) {
                              if (g >= r) {
                                  f = a;
                                  b = n * f;
                              }
                              c = 0;
                              for (m = b; m--; ) {
                                  p[c++] = u[d++];
                                  p[c++] = u[d++];
                                  p[c++] = u[d++];
                                  p[c++] = 255;
                              }
                              t.putImageData(h, 0, g * l);
                          }
                      }
                  }
                  function putBinaryImageMask(t, e) {
                      if (e.bitmap) {
                          t.drawImage(e.bitmap, 0, 0);
                          return;
                      }
                      const i = e.height,
                          s = e.width,
                          n = i % l,
                          a = (i - n) / l,
                          o = 0 === n ? a : a + 1,
                          h = t.createImageData(s, l);
                      let c = 0;
                      const d = e.data,
                          u = h.data;
                      for (let e = 0; e < o; e++) {
                          const i = e < a ? l : n;
                          ({ srcPos: c } = (0, r.convertBlackAndWhiteToRGBA)({ src: d, srcPos: c, dest: u, width: s, height: i, nonBlackColor: 0 }));
                          t.putImageData(h, 0, e * l);
                      }
                  }
                  function copyCtxState(t, e) {
                      const i = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
                      for (const s of i) void 0 !== t[s] && (e[s] = t[s]);
                      if (void 0 !== t.setLineDash) {
                          e.setLineDash(t.getLineDash());
                          e.lineDashOffset = t.lineDashOffset;
                      }
                  }
                  function resetCtxToDefault(t) {
                      t.strokeStyle = t.fillStyle = "#000000";
                      t.fillRule = "nonzero";
                      t.globalAlpha = 1;
                      t.lineWidth = 1;
                      t.lineCap = "butt";
                      t.lineJoin = "miter";
                      t.miterLimit = 10;
                      t.globalCompositeOperation = "source-over";
                      t.font = "10px sans-serif";
                      if (void 0 !== t.setLineDash) {
                          t.setLineDash([]);
                          t.lineDashOffset = 0;
                      }
                      if (!s.isNodeJS) {
                          const { filter: e } = t;
                          "none" !== e && "" !== e && (t.filter = "none");
                      }
                  }
                  function composeSMaskBackdrop(t, e, i, s) {
                      const n = t.length;
                      for (let a = 3; a < n; a += 4) {
                          const n = t[a];
                          if (0 === n) {
                              t[a - 3] = e;
                              t[a - 2] = i;
                              t[a - 1] = s;
                          } else if (n < 255) {
                              const r = 255 - n;
                              t[a - 3] = (t[a - 3] * n + e * r) >> 8;
                              t[a - 2] = (t[a - 2] * n + i * r) >> 8;
                              t[a - 1] = (t[a - 1] * n + s * r) >> 8;
                          }
                      }
                  }
                  function composeSMaskAlpha(t, e, i) {
                      const s = t.length;
                      for (let n = 3; n < s; n += 4) {
                          const s = i ? i[t[n]] : t[n];
                          e[n] = (e[n] * s * 0.00392156862745098) | 0;
                      }
                  }
                  function composeSMaskLuminosity(t, e, i) {
                      const s = t.length;
                      for (let n = 3; n < s; n += 4) {
                          const s = 77 * t[n - 3] + 152 * t[n - 2] + 28 * t[n - 1];
                          e[n] = i ? (e[n] * i[s >> 8]) >> 8 : (e[n] * s) >> 16;
                      }
                  }
                  function composeSMask(t, e, i, s) {
                      const n = s[0],
                          a = s[1],
                          r = s[2] - n,
                          o = s[3] - a;
                      if (0 !== r && 0 !== o) {
                          !(function genericComposeSMask(t, e, i, s, n, a, r, o, l, h, c) {
                              const d = !!a,
                                  u = d ? a[0] : 0,
                                  p = d ? a[1] : 0,
                                  g = d ? a[2] : 0,
                                  m = "Luminosity" === n ? composeSMaskLuminosity : composeSMaskAlpha,
                                  f = Math.min(s, Math.ceil(1048576 / i));
                              for (let n = 0; n < s; n += f) {
                                  const a = Math.min(f, s - n),
                                      b = t.getImageData(o - h, n + (l - c), i, a),
                                      A = e.getImageData(o, n + l, i, a);
                                  d && composeSMaskBackdrop(b.data, u, p, g);
                                  m(b.data, A.data, r);
                                  e.putImageData(A, o, n + l);
                              }
                          })(e.context, i, r, o, e.subtype, e.backdrop, e.transferMap, n, a, e.offsetX, e.offsetY);
                          t.save();
                          t.globalAlpha = 1;
                          t.globalCompositeOperation = "source-over";
                          t.setTransform(1, 0, 0, 1, 0, 0);
                          t.drawImage(i.canvas, 0, 0);
                          t.restore();
                      }
                  }
                  function getImageSmoothingEnabled(t, e) {
                      const i = s.Util.singularValueDecompose2dScale(t);
                      i[0] = Math.fround(i[0]);
                      i[1] = Math.fround(i[1]);
                      const a = Math.fround((globalThis.devicePixelRatio || 1) * n.PixelsPerInch.PDF_TO_CSS_UNITS);
                      return void 0 !== e ? e : i[0] <= a || i[1] <= a;
                  }
                  const h = ["butt", "round", "square"],
                      c = ["miter", "round", "bevel"],
                      d = {},
                      u = {};
                  class CanvasGraphics {
                      constructor(t, e, i, s, n, { optionalContentConfig: a, markedContentStack: r = null }, o, l) {
                          this.ctx = t;
                          this.current = new CanvasExtraState(this.ctx.canvas.width, this.ctx.canvas.height);
                          this.stateStack = [];
                          this.pendingClip = null;
                          this.pendingEOFill = !1;
                          this.res = null;
                          this.xobjs = null;
                          this.commonObjs = e;
                          this.objs = i;
                          this.canvasFactory = s;
                          this.filterFactory = n;
                          this.groupStack = [];
                          this.processingType3 = null;
                          this.baseTransform = null;
                          this.baseTransformStack = [];
                          this.groupLevel = 0;
                          this.smaskStack = [];
                          this.smaskCounter = 0;
                          this.tempSMask = null;
                          this.suspendedCtx = null;
                          this.contentVisible = !0;
                          this.markedContentStack = r || [];
                          this.optionalContentConfig = a;
                          this.cachedCanvases = new CachedCanvases(this.canvasFactory);
                          this.cachedPatterns = new Map();
                          this.annotationCanvasMap = o;
                          this.viewportScale = 1;
                          this.outputScaleX = 1;
                          this.outputScaleY = 1;
                          this.pageColors = l;
                          this._cachedScaleForStroking = [-1, 0];
                          this._cachedGetSinglePixelWidth = null;
                          this._cachedBitmapsMap = new Map();
                      }
                      getObject(t, e = null) {
                          return "string" == typeof t ? (t.startsWith("g_") ? this.commonObjs.get(t) : this.objs.get(t)) : e;
                      }
                      beginDrawing({ transform: t, viewport: e, transparency: i = !1, background: s = null }) {
                          const a = this.ctx.canvas.width,
                              r = this.ctx.canvas.height,
                              o = this.ctx.fillStyle;
                          this.ctx.fillStyle = s || "#ffffff";
                          this.ctx.fillRect(0, 0, a, r);
                          this.ctx.fillStyle = o;
                          if (i) {
                              const t = this.cachedCanvases.getCanvas("transparent", a, r);
                              this.compositeCtx = this.ctx;
                              this.transparentCanvas = t.canvas;
                              this.ctx = t.context;
                              this.ctx.save();
                              this.ctx.transform(...(0, n.getCurrentTransform)(this.compositeCtx));
                          }
                          this.ctx.save();
                          resetCtxToDefault(this.ctx);
                          if (t) {
                              this.ctx.transform(...t);
                              this.outputScaleX = t[0];
                              this.outputScaleY = t[0];
                          }
                          this.ctx.transform(...e.transform);
                          this.viewportScale = e.scale;
                          this.baseTransform = (0, n.getCurrentTransform)(this.ctx);
                      }
                      executeOperatorList(t, e, i, n) {
                          const a = t.argsArray,
                              r = t.fnArray;
                          let o = e || 0;
                          const l = a.length;
                          if (l === o) return o;
                          const h = l - o > 10 && "function" == typeof i,
                              c = h ? Date.now() + 15 : 0;
                          let d = 0;
                          const u = this.commonObjs,
                              p = this.objs;
                          let g;
                          for (;;) {
                              if (void 0 !== n && o === n.nextBreakPoint) {
                                  n.breakIt(o, i);
                                  return o;
                              }
                              g = r[o];
                              if (g !== s.OPS.dependency) this[g].apply(this, a[o]);
                              else
                                  for (const t of a[o]) {
                                      const e = t.startsWith("g_") ? u : p;
                                      if (!e.has(t)) {
                                          e.get(t, i);
                                          return o;
                                      }
                                  }
                              o++;
                              if (o === l) return o;
                              if (h && ++d > 10) {
                                  if (Date.now() > c) {
                                      i();
                                      return o;
                                  }
                                  d = 0;
                              }
                          }
                      }
                      #he() {
                          for (; this.stateStack.length || this.inSMaskMode; ) this.restore();
                          this.ctx.restore();
                          if (this.transparentCanvas) {
                              this.ctx = this.compositeCtx;
                              this.ctx.save();
                              this.ctx.setTransform(1, 0, 0, 1, 0, 0);
                              this.ctx.drawImage(this.transparentCanvas, 0, 0);
                              this.ctx.restore();
                              this.transparentCanvas = null;
                          }
                      }
                      endDrawing() {
                          this.#he();
                          this.cachedCanvases.clear();
                          this.cachedPatterns.clear();
                          for (const t of this._cachedBitmapsMap.values()) {
                              for (const e of t.values()) "undefined" != typeof HTMLCanvasElement && e instanceof HTMLCanvasElement && (e.width = e.height = 0);
                              t.clear();
                          }
                          this._cachedBitmapsMap.clear();
                          this.#ce();
                      }
                      #ce() {
                          if (this.pageColors) {
                              const t = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
                              if ("none" !== t) {
                                  const e = this.ctx.filter;
                                  this.ctx.filter = t;
                                  this.ctx.drawImage(this.ctx.canvas, 0, 0);
                                  this.ctx.filter = e;
                              }
                          }
                      }
                      _scaleImage(t, e) {
                          const i = t.width,
                              s = t.height;
                          let n,
                              a,
                              r = Math.max(Math.hypot(e[0], e[1]), 1),
                              o = Math.max(Math.hypot(e[2], e[3]), 1),
                              l = i,
                              h = s,
                              c = "prescale1";
                          for (; (r > 2 && l > 1) || (o > 2 && h > 1); ) {
                              let e = l,
                                  i = h;
                              if (r > 2 && l > 1) {
                                  e = l >= 16384 ? Math.floor(l / 2) - 1 || 1 : Math.ceil(l / 2);
                                  r /= l / e;
                              }
                              if (o > 2 && h > 1) {
                                  i = h >= 16384 ? Math.floor(h / 2) - 1 || 1 : Math.ceil(h) / 2;
                                  o /= h / i;
                              }
                              n = this.cachedCanvases.getCanvas(c, e, i);
                              a = n.context;
                              a.clearRect(0, 0, e, i);
                              a.drawImage(t, 0, 0, l, h, 0, 0, e, i);
                              t = n.canvas;
                              l = e;
                              h = i;
                              c = "prescale1" === c ? "prescale2" : "prescale1";
                          }
                          return { img: t, paintWidth: l, paintHeight: h };
                      }
                      _createMaskCanvas(t) {
                          const e = this.ctx,
                              { width: i, height: r } = t,
                              o = this.current.fillColor,
                              l = this.current.patternFill,
                              h = (0, n.getCurrentTransform)(e);
                          let c, d, u, p;
                          if ((t.bitmap || t.data) && t.count > 1) {
                              const e = t.bitmap || t.data.buffer;
                              d = JSON.stringify(l ? h : [h.slice(0, 4), o]);
                              c = this._cachedBitmapsMap.get(e);
                              if (!c) {
                                  c = new Map();
                                  this._cachedBitmapsMap.set(e, c);
                              }
                              const i = c.get(d);
                              if (i && !l) {
                                  return { canvas: i, offsetX: Math.round(Math.min(h[0], h[2]) + h[4]), offsetY: Math.round(Math.min(h[1], h[3]) + h[5]) };
                              }
                              u = i;
                          }
                          if (!u) {
                              p = this.cachedCanvases.getCanvas("maskCanvas", i, r);
                              putBinaryImageMask(p.context, t);
                          }
                          let g = s.Util.transform(h, [1 / i, 0, 0, -1 / r, 0, 0]);
                          g = s.Util.transform(g, [1, 0, 0, 1, 0, -r]);
                          const m = s.Util.applyTransform([0, 0], g),
                              f = s.Util.applyTransform([i, r], g),
                              b = s.Util.normalizeRect([m[0], m[1], f[0], f[1]]),
                              A = Math.round(b[2] - b[0]) || 1,
                              _ = Math.round(b[3] - b[1]) || 1,
                              v = this.cachedCanvases.getCanvas("fillCanvas", A, _),
                              y = v.context,
                              S = Math.min(m[0], f[0]),
                              E = Math.min(m[1], f[1]);
                          y.translate(-S, -E);
                          y.transform(...g);
                          if (!u) {
                              u = this._scaleImage(p.canvas, (0, n.getCurrentTransformInverse)(y));
                              u = u.img;
                              c && l && c.set(d, u);
                          }
                          y.imageSmoothingEnabled = getImageSmoothingEnabled((0, n.getCurrentTransform)(y), t.interpolate);
                          drawImageAtIntegerCoords(y, u, 0, 0, u.width, u.height, 0, 0, i, r);
                          y.globalCompositeOperation = "source-in";
                          const x = s.Util.transform((0, n.getCurrentTransformInverse)(y), [1, 0, 0, 1, -S, -E]);
                          y.fillStyle = l ? o.getPattern(e, this, x, a.PathType.FILL) : o;
                          y.fillRect(0, 0, i, r);
                          if (c && !l) {
                              this.cachedCanvases.delete("fillCanvas");
                              c.set(d, v.canvas);
                          }
                          return { canvas: v.canvas, offsetX: Math.round(S), offsetY: Math.round(E) };
                      }
                      setLineWidth(t) {
                          t !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1);
                          this.current.lineWidth = t;
                          this.ctx.lineWidth = t;
                      }
                      setLineCap(t) {
                          this.ctx.lineCap = h[t];
                      }
                      setLineJoin(t) {
                          this.ctx.lineJoin = c[t];
                      }
                      setMiterLimit(t) {
                          this.ctx.miterLimit = t;
                      }
                      setDash(t, e) {
                          const i = this.ctx;
                          if (void 0 !== i.setLineDash) {
                              i.setLineDash(t);
                              i.lineDashOffset = e;
                          }
                      }
                      setRenderingIntent(t) {}
                      setFlatness(t) {}
                      setGState(t) {
                          for (const [e, i] of t)
                              switch (e) {
                                  case "LW":
                                      this.setLineWidth(i);
                                      break;
                                  case "LC":
                                      this.setLineCap(i);
                                      break;
                                  case "LJ":
                                      this.setLineJoin(i);
                                      break;
                                  case "ML":
                                      this.setMiterLimit(i);
                                      break;
                                  case "D":
                                      this.setDash(i[0], i[1]);
                                      break;
                                  case "RI":
                                      this.setRenderingIntent(i);
                                      break;
                                  case "FL":
                                      this.setFlatness(i);
                                      break;
                                  case "Font":
                                      this.setFont(i[0], i[1]);
                                      break;
                                  case "CA":
                                      this.current.strokeAlpha = i;
                                      break;
                                  case "ca":
                                      this.current.fillAlpha = i;
                                      this.ctx.globalAlpha = i;
                                      break;
                                  case "BM":
                                      this.ctx.globalCompositeOperation = i;
                                      break;
                                  case "SMask":
                                      this.current.activeSMask = i ? this.tempSMask : null;
                                      this.tempSMask = null;
                                      this.checkSMaskState();
                                      break;
                                  case "TR":
                                      this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(i);
                              }
                      }
                      get inSMaskMode() {
                          return !!this.suspendedCtx;
                      }
                      checkSMaskState() {
                          const t = this.inSMaskMode;
                          this.current.activeSMask && !t ? this.beginSMaskMode() : !this.current.activeSMask && t && this.endSMaskMode();
                      }
                      beginSMaskMode() {
                          if (this.inSMaskMode) throw new Error("beginSMaskMode called while already in smask mode");
                          const t = this.ctx.canvas.width,
                              e = this.ctx.canvas.height,
                              i = "smaskGroupAt" + this.groupLevel,
                              s = this.cachedCanvases.getCanvas(i, t, e);
                          this.suspendedCtx = this.ctx;
                          this.ctx = s.context;
                          const a = this.ctx;
                          a.setTransform(...(0, n.getCurrentTransform)(this.suspendedCtx));
                          copyCtxState(this.suspendedCtx, a);
                          !(function mirrorContextOperations(t, e) {
                              if (t._removeMirroring) throw new Error("Context is already forwarding operations.");
                              t.__originalSave = t.save;
                              t.__originalRestore = t.restore;
                              t.__originalRotate = t.rotate;
                              t.__originalScale = t.scale;
                              t.__originalTranslate = t.translate;
                              t.__originalTransform = t.transform;
                              t.__originalSetTransform = t.setTransform;
                              t.__originalResetTransform = t.resetTransform;
                              t.__originalClip = t.clip;
                              t.__originalMoveTo = t.moveTo;
                              t.__originalLineTo = t.lineTo;
                              t.__originalBezierCurveTo = t.bezierCurveTo;
                              t.__originalRect = t.rect;
                              t.__originalClosePath = t.closePath;
                              t.__originalBeginPath = t.beginPath;
                              t._removeMirroring = () => {
                                  t.save = t.__originalSave;
                                  t.restore = t.__originalRestore;
                                  t.rotate = t.__originalRotate;
                                  t.scale = t.__originalScale;
                                  t.translate = t.__originalTranslate;
                                  t.transform = t.__originalTransform;
                                  t.setTransform = t.__originalSetTransform;
                                  t.resetTransform = t.__originalResetTransform;
                                  t.clip = t.__originalClip;
                                  t.moveTo = t.__originalMoveTo;
                                  t.lineTo = t.__originalLineTo;
                                  t.bezierCurveTo = t.__originalBezierCurveTo;
                                  t.rect = t.__originalRect;
                                  t.closePath = t.__originalClosePath;
                                  t.beginPath = t.__originalBeginPath;
                                  delete t._removeMirroring;
                              };
                              t.save = function ctxSave() {
                                  e.save();
                                  this.__originalSave();
                              };
                              t.restore = function ctxRestore() {
                                  e.restore();
                                  this.__originalRestore();
                              };
                              t.translate = function ctxTranslate(t, i) {
                                  e.translate(t, i);
                                  this.__originalTranslate(t, i);
                              };
                              t.scale = function ctxScale(t, i) {
                                  e.scale(t, i);
                                  this.__originalScale(t, i);
                              };
                              t.transform = function ctxTransform(t, i, s, n, a, r) {
                                  e.transform(t, i, s, n, a, r);
                                  this.__originalTransform(t, i, s, n, a, r);
                              };
                              t.setTransform = function ctxSetTransform(t, i, s, n, a, r) {
                                  e.setTransform(t, i, s, n, a, r);
                                  this.__originalSetTransform(t, i, s, n, a, r);
                              };
                              t.resetTransform = function ctxResetTransform() {
                                  e.resetTransform();
                                  this.__originalResetTransform();
                              };
                              t.rotate = function ctxRotate(t) {
                                  e.rotate(t);
                                  this.__originalRotate(t);
                              };
                              t.clip = function ctxRotate(t) {
                                  e.clip(t);
                                  this.__originalClip(t);
                              };
                              t.moveTo = function (t, i) {
                                  e.moveTo(t, i);
                                  this.__originalMoveTo(t, i);
                              };
                              t.lineTo = function (t, i) {
                                  e.lineTo(t, i);
                                  this.__originalLineTo(t, i);
                              };
                              t.bezierCurveTo = function (t, i, s, n, a, r) {
                                  e.bezierCurveTo(t, i, s, n, a, r);
                                  this.__originalBezierCurveTo(t, i, s, n, a, r);
                              };
                              t.rect = function (t, i, s, n) {
                                  e.rect(t, i, s, n);
                                  this.__originalRect(t, i, s, n);
                              };
                              t.closePath = function () {
                                  e.closePath();
                                  this.__originalClosePath();
                              };
                              t.beginPath = function () {
                                  e.beginPath();
                                  this.__originalBeginPath();
                              };
                          })(a, this.suspendedCtx);
                          this.setGState([
                              ["BM", "source-over"],
                              ["ca", 1],
                              ["CA", 1],
                          ]);
                      }
                      endSMaskMode() {
                          if (!this.inSMaskMode) throw new Error("endSMaskMode called while not in smask mode");
                          this.ctx._removeMirroring();
                          copyCtxState(this.ctx, this.suspendedCtx);
                          this.ctx = this.suspendedCtx;
                          this.suspendedCtx = null;
                      }
                      compose(t) {
                          if (!this.current.activeSMask) return;
                          if (t) {
                              t[0] = Math.floor(t[0]);
                              t[1] = Math.floor(t[1]);
                              t[2] = Math.ceil(t[2]);
                              t[3] = Math.ceil(t[3]);
                          } else t = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
                          const e = this.current.activeSMask;
                          composeSMask(this.suspendedCtx, e, this.ctx, t);
                          this.ctx.save();
                          this.ctx.setTransform(1, 0, 0, 1, 0, 0);
                          this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
                          this.ctx.restore();
                      }
                      save() {
                          if (this.inSMaskMode) {
                              copyCtxState(this.ctx, this.suspendedCtx);
                              this.suspendedCtx.save();
                          } else this.ctx.save();
                          const t = this.current;
                          this.stateStack.push(t);
                          this.current = t.clone();
                      }
                      restore() {
                          0 === this.stateStack.length && this.inSMaskMode && this.endSMaskMode();
                          if (0 !== this.stateStack.length) {
                              this.current = this.stateStack.pop();
                              if (this.inSMaskMode) {
                                  this.suspendedCtx.restore();
                                  copyCtxState(this.suspendedCtx, this.ctx);
                              } else this.ctx.restore();
                              this.checkSMaskState();
                              this.pendingClip = null;
                              this._cachedScaleForStroking[0] = -1;
                              this._cachedGetSinglePixelWidth = null;
                          }
                      }
                      transform(t, e, i, s, n, a) {
                          this.ctx.transform(t, e, i, s, n, a);
                          this._cachedScaleForStroking[0] = -1;
                          this._cachedGetSinglePixelWidth = null;
                      }
                      constructPath(t, e, i) {
                          const a = this.ctx,
                              r = this.current;
                          let o,
                              l,
                              h = r.x,
                              c = r.y;
                          const d = (0, n.getCurrentTransform)(a),
                              u = (0 === d[0] && 0 === d[3]) || (0 === d[1] && 0 === d[2]),
                              p = u ? i.slice(0) : null;
                          for (let i = 0, n = 0, g = t.length; i < g; i++)
                              switch (0 | t[i]) {
                                  case s.OPS.rectangle:
                                      h = e[n++];
                                      c = e[n++];
                                      const t = e[n++],
                                          i = e[n++],
                                          g = h + t,
                                          m = c + i;
                                      a.moveTo(h, c);
                                      if (0 === t || 0 === i) a.lineTo(g, m);
                                      else {
                                          a.lineTo(g, c);
                                          a.lineTo(g, m);
                                          a.lineTo(h, m);
                                      }
                                      u || r.updateRectMinMax(d, [h, c, g, m]);
                                      a.closePath();
                                      break;
                                  case s.OPS.moveTo:
                                      h = e[n++];
                                      c = e[n++];
                                      a.moveTo(h, c);
                                      u || r.updatePathMinMax(d, h, c);
                                      break;
                                  case s.OPS.lineTo:
                                      h = e[n++];
                                      c = e[n++];
                                      a.lineTo(h, c);
                                      u || r.updatePathMinMax(d, h, c);
                                      break;
                                  case s.OPS.curveTo:
                                      o = h;
                                      l = c;
                                      h = e[n + 4];
                                      c = e[n + 5];
                                      a.bezierCurveTo(e[n], e[n + 1], e[n + 2], e[n + 3], h, c);
                                      r.updateCurvePathMinMax(d, o, l, e[n], e[n + 1], e[n + 2], e[n + 3], h, c, p);
                                      n += 6;
                                      break;
                                  case s.OPS.curveTo2:
                                      o = h;
                                      l = c;
                                      a.bezierCurveTo(h, c, e[n], e[n + 1], e[n + 2], e[n + 3]);
                                      r.updateCurvePathMinMax(d, o, l, h, c, e[n], e[n + 1], e[n + 2], e[n + 3], p);
                                      h = e[n + 2];
                                      c = e[n + 3];
                                      n += 4;
                                      break;
                                  case s.OPS.curveTo3:
                                      o = h;
                                      l = c;
                                      h = e[n + 2];
                                      c = e[n + 3];
                                      a.bezierCurveTo(e[n], e[n + 1], h, c, h, c);
                                      r.updateCurvePathMinMax(d, o, l, e[n], e[n + 1], h, c, h, c, p);
                                      n += 4;
                                      break;
                                  case s.OPS.closePath:
                                      a.closePath();
                              }
                          u && r.updateScalingPathMinMax(d, p);
                          r.setCurrentPoint(h, c);
                      }
                      closePath() {
                          this.ctx.closePath();
                      }
                      stroke(t = !0) {
                          const e = this.ctx,
                              i = this.current.strokeColor;
                          e.globalAlpha = this.current.strokeAlpha;
                          if (this.contentVisible)
                              if ("object" == typeof i && i?.getPattern) {
                                  e.save();
                                  e.strokeStyle = i.getPattern(e, this, (0, n.getCurrentTransformInverse)(e), a.PathType.STROKE);
                                  this.rescaleAndStroke(!1);
                                  e.restore();
                              } else this.rescaleAndStroke(!0);
                          t && this.consumePath(this.current.getClippedPathBoundingBox());
                          e.globalAlpha = this.current.fillAlpha;
                      }
                      closeStroke() {
                          this.closePath();
                          this.stroke();
                      }
                      fill(t = !0) {
                          const e = this.ctx,
                              i = this.current.fillColor;
                          let s = !1;
                          if (this.current.patternFill) {
                              e.save();
                              e.fillStyle = i.getPattern(e, this, (0, n.getCurrentTransformInverse)(e), a.PathType.FILL);
                              s = !0;
                          }
                          const r = this.current.getClippedPathBoundingBox();
                          if (this.contentVisible && null !== r)
                              if (this.pendingEOFill) {
                                  e.fill("evenodd");
                                  this.pendingEOFill = !1;
                              } else e.fill();
                          s && e.restore();
                          t && this.consumePath(r);
                      }
                      eoFill() {
                          this.pendingEOFill = !0;
                          this.fill();
                      }
                      fillStroke() {
                          this.fill(!1);
                          this.stroke(!1);
                          this.consumePath();
                      }
                      eoFillStroke() {
                          this.pendingEOFill = !0;
                          this.fillStroke();
                      }
                      closeFillStroke() {
                          this.closePath();
                          this.fillStroke();
                      }
                      closeEOFillStroke() {
                          this.pendingEOFill = !0;
                          this.closePath();
                          this.fillStroke();
                      }
                      endPath() {
                          this.consumePath();
                      }
                      clip() {
                          this.pendingClip = d;
                      }
                      eoClip() {
                          this.pendingClip = u;
                      }
                      beginText() {
                          this.current.textMatrix = s.IDENTITY_MATRIX;
                          this.current.textMatrixScale = 1;
                          this.current.x = this.current.lineX = 0;
                          this.current.y = this.current.lineY = 0;
                      }
                      endText() {
                          const t = this.pendingTextPaths,
                              e = this.ctx;
                          if (void 0 !== t) {
                              e.save();
                              e.beginPath();
                              for (const i of t) {
                                  e.setTransform(...i.transform);
                                  e.translate(i.x, i.y);
                                  i.addToPath(e, i.fontSize);
                              }
                              e.restore();
                              e.clip();
                              e.beginPath();
                              delete this.pendingTextPaths;
                          } else e.beginPath();
                      }
                      setCharSpacing(t) {
                          this.current.charSpacing = t;
                      }
                      setWordSpacing(t) {
                          this.current.wordSpacing = t;
                      }
                      setHScale(t) {
                          this.current.textHScale = t / 100;
                      }
                      setLeading(t) {
                          this.current.leading = -t;
                      }
                      setFont(t, e) {
                          const i = this.commonObjs.get(t),
                              n = this.current;
                          if (!i) throw new Error(`Can't find font for ${t}`);
                          n.fontMatrix = i.fontMatrix || s.FONT_IDENTITY_MATRIX;
                          (0 !== n.fontMatrix[0] && 0 !== n.fontMatrix[3]) || (0, s.warn)("Invalid font matrix for font " + t);
                          if (e < 0) {
                              e = -e;
                              n.fontDirection = -1;
                          } else n.fontDirection = 1;
                          this.current.font = i;
                          this.current.fontSize = e;
                          if (i.isType3Font) return;
                          const a = i.loadedName || "sans-serif",
                              r = i.systemFontInfo?.css || `"${a}", ${i.fallbackName}`;
                          let o = "normal";
                          i.black ? (o = "900") : i.bold && (o = "bold");
                          const l = i.italic ? "italic" : "normal";
                          let h = e;
                          e < 16 ? (h = 16) : e > 100 && (h = 100);
                          this.current.fontSizeScale = e / h;
                          this.ctx.font = `${l} ${o} ${h}px ${r}`;
                      }
                      setTextRenderingMode(t) {
                          this.current.textRenderingMode = t;
                      }
                      setTextRise(t) {
                          this.current.textRise = t;
                      }
                      moveText(t, e) {
                          this.current.x = this.current.lineX += t;
                          this.current.y = this.current.lineY += e;
                      }
                      setLeadingMoveText(t, e) {
                          this.setLeading(-e);
                          this.moveText(t, e);
                      }
                      setTextMatrix(t, e, i, s, n, a) {
                          this.current.textMatrix = [t, e, i, s, n, a];
                          this.current.textMatrixScale = Math.hypot(t, e);
                          this.current.x = this.current.lineX = 0;
                          this.current.y = this.current.lineY = 0;
                      }
                      nextLine() {
                          this.moveText(0, this.current.leading);
                      }
                      paintChar(t, e, i, a) {
                          const r = this.ctx,
                              o = this.current,
                              l = o.font,
                              h = o.textRenderingMode,
                              c = o.fontSize / o.fontSizeScale,
                              d = h & s.TextRenderingMode.FILL_STROKE_MASK,
                              u = !!(h & s.TextRenderingMode.ADD_TO_PATH_FLAG),
                              p = o.patternFill && !l.missingFile;
                          let g;
                          (l.disableFontFace || u || p) && (g = l.getPathGenerator(this.commonObjs, t));
                          if (l.disableFontFace || p) {
                              r.save();
                              r.translate(e, i);
                              r.beginPath();
                              g(r, c);
                              a && r.setTransform(...a);
                              (d !== s.TextRenderingMode.FILL && d !== s.TextRenderingMode.FILL_STROKE) || r.fill();
                              (d !== s.TextRenderingMode.STROKE && d !== s.TextRenderingMode.FILL_STROKE) || r.stroke();
                              r.restore();
                          } else {
                              (d !== s.TextRenderingMode.FILL && d !== s.TextRenderingMode.FILL_STROKE) || r.fillText(t, e, i);
                              (d !== s.TextRenderingMode.STROKE && d !== s.TextRenderingMode.FILL_STROKE) || r.strokeText(t, e, i);
                          }
                          if (u) {
                              (this.pendingTextPaths ||= []).push({ transform: (0, n.getCurrentTransform)(r), x: e, y: i, fontSize: c, addToPath: g });
                          }
                      }
                      get isFontSubpixelAAEnabled() {
                          const { context: t } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
                          t.scale(1.5, 1);
                          t.fillText("I", 0, 10);
                          const e = t.getImageData(0, 0, 10, 10).data;
                          let i = !1;
                          for (let t = 3; t < e.length; t += 4)
                              if (e[t] > 0 && e[t] < 255) {
                                  i = !0;
                                  break;
                              }
                          return (0, s.shadow)(this, "isFontSubpixelAAEnabled", i);
                      }
                      showText(t) {
                          const e = this.current,
                              i = e.font;
                          if (i.isType3Font) return this.showType3Text(t);
                          const r = e.fontSize;
                          if (0 === r) return;
                          const o = this.ctx,
                              l = e.fontSizeScale,
                              h = e.charSpacing,
                              c = e.wordSpacing,
                              d = e.fontDirection,
                              u = e.textHScale * d,
                              p = t.length,
                              g = i.vertical,
                              m = g ? 1 : -1,
                              f = i.defaultVMetrics,
                              b = r * e.fontMatrix[0],
                              A = e.textRenderingMode === s.TextRenderingMode.FILL && !i.disableFontFace && !e.patternFill;
                          o.save();
                          o.transform(...e.textMatrix);
                          o.translate(e.x, e.y + e.textRise);
                          d > 0 ? o.scale(u, -1) : o.scale(u, 1);
                          let _;
                          if (e.patternFill) {
                              o.save();
                              const t = e.fillColor.getPattern(o, this, (0, n.getCurrentTransformInverse)(o), a.PathType.FILL);
                              _ = (0, n.getCurrentTransform)(o);
                              o.restore();
                              o.fillStyle = t;
                          }
                          let v = e.lineWidth;
                          const y = e.textMatrixScale;
                          if (0 === y || 0 === v) {
                              const t = e.textRenderingMode & s.TextRenderingMode.FILL_STROKE_MASK;
                              (t !== s.TextRenderingMode.STROKE && t !== s.TextRenderingMode.FILL_STROKE) || (v = this.getSinglePixelWidth());
                          } else v /= y;
                          if (1 !== l) {
                              o.scale(l, l);
                              v /= l;
                          }
                          o.lineWidth = v;
                          if (i.isInvalidPDFjsFont) {
                              const i = [];
                              let s = 0;
                              for (const e of t) {
                                  i.push(e.unicode);
                                  s += e.width;
                              }
                              o.fillText(i.join(""), 0, 0);
                              e.x += s * b * u;
                              o.restore();
                              this.compose();
                              return;
                          }
                          let S,
                              E = 0;
                          for (S = 0; S < p; ++S) {
                              const e = t[S];
                              if ("number" == typeof e) {
                                  E += (m * e * r) / 1e3;
                                  continue;
                              }
                              let s = !1;
                              const n = (e.isSpace ? c : 0) + h,
                                  a = e.fontChar,
                                  u = e.accent;
                              let p,
                                  v,
                                  y = e.width;
                              if (g) {
                                  const t = e.vmetric || f,
                                      i = -(e.vmetric ? t[1] : 0.5 * y) * b,
                                      s = t[2] * b;
                                  y = t ? -t[0] : y;
                                  p = i / l;
                                  v = (E + s) / l;
                              } else {
                                  p = E / l;
                                  v = 0;
                              }
                              if (i.remeasure && y > 0) {
                                  const t = ((1e3 * o.measureText(a).width) / r) * l;
                                  if (y < t && this.isFontSubpixelAAEnabled) {
                                      const e = y / t;
                                      s = !0;
                                      o.save();
                                      o.scale(e, 1);
                                      p /= e;
                                  } else y !== t && (p += (((y - t) / 2e3) * r) / l);
                              }
                              if (this.contentVisible && (e.isInFont || i.missingFile))
                                  if (A && !u) o.fillText(a, p, v);
                                  else {
                                      this.paintChar(a, p, v, _);
                                      if (u) {
                                          const t = p + (r * u.offset.x) / l,
                                              e = v - (r * u.offset.y) / l;
                                          this.paintChar(u.fontChar, t, e, _);
                                      }
                                  }
                              E += g ? y * b - n * d : y * b + n * d;
                              s && o.restore();
                          }
                          g ? (e.y -= E) : (e.x += E * u);
                          o.restore();
                          this.compose();
                      }
                      showType3Text(t) {
                          const e = this.ctx,
                              i = this.current,
                              n = i.font,
                              a = i.fontSize,
                              r = i.fontDirection,
                              o = n.vertical ? 1 : -1,
                              l = i.charSpacing,
                              h = i.wordSpacing,
                              c = i.textHScale * r,
                              d = i.fontMatrix || s.FONT_IDENTITY_MATRIX,
                              u = t.length;
                          let p, g, m, f;
                          if (!(i.textRenderingMode === s.TextRenderingMode.INVISIBLE) && 0 !== a) {
                              this._cachedScaleForStroking[0] = -1;
                              this._cachedGetSinglePixelWidth = null;
                              e.save();
                              e.transform(...i.textMatrix);
                              e.translate(i.x, i.y);
                              e.scale(c, r);
                              for (p = 0; p < u; ++p) {
                                  g = t[p];
                                  if ("number" == typeof g) {
                                      f = (o * g * a) / 1e3;
                                      this.ctx.translate(f, 0);
                                      i.x += f * c;
                                      continue;
                                  }
                                  const r = (g.isSpace ? h : 0) + l,
                                      u = n.charProcOperatorList[g.operatorListId];
                                  if (!u) {
                                      (0, s.warn)(`Type3 character "${g.operatorListId}" is not available.`);
                                      continue;
                                  }
                                  if (this.contentVisible) {
                                      this.processingType3 = g;
                                      this.save();
                                      e.scale(a, a);
                                      e.transform(...d);
                                      this.executeOperatorList(u);
                                      this.restore();
                                  }
                                  m = s.Util.applyTransform([g.width, 0], d)[0] * a + r;
                                  e.translate(m, 0);
                                  i.x += m * c;
                              }
                              e.restore();
                              this.processingType3 = null;
                          }
                      }
                      setCharWidth(t, e) {}
                      setCharWidthAndBounds(t, e, i, s, n, a) {
                          this.ctx.rect(i, s, n - i, a - s);
                          this.ctx.clip();
                          this.endPath();
                      }
                      getColorN_Pattern(t) {
                          let e;
                          if ("TilingPattern" === t[0]) {
                              const i = t[1],
                                  s = this.baseTransform || (0, n.getCurrentTransform)(this.ctx),
                                  r = {
                                      createCanvasGraphics: (t) =>
                                          new CanvasGraphics(t, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, { optionalContentConfig: this.optionalContentConfig, markedContentStack: this.markedContentStack }),
                                  };
                              e = new a.TilingPattern(t, i, this.ctx, r, s);
                          } else e = this._getPattern(t[1], t[2]);
                          return e;
                      }
                      setStrokeColorN() {
                          this.current.strokeColor = this.getColorN_Pattern(arguments);
                      }
                      setFillColorN() {
                          this.current.fillColor = this.getColorN_Pattern(arguments);
                          this.current.patternFill = !0;
                      }
                      setStrokeRGBColor(t, e, i) {
                          const n = s.Util.makeHexColor(t, e, i);
                          this.ctx.strokeStyle = n;
                          this.current.strokeColor = n;
                      }
                      setFillRGBColor(t, e, i) {
                          const n = s.Util.makeHexColor(t, e, i);
                          this.ctx.fillStyle = n;
                          this.current.fillColor = n;
                          this.current.patternFill = !1;
                      }
                      _getPattern(t, e = null) {
                          let i;
                          if (this.cachedPatterns.has(t)) i = this.cachedPatterns.get(t);
                          else {
                              i = (0, a.getShadingPattern)(this.getObject(t));
                              this.cachedPatterns.set(t, i);
                          }
                          e && (i.matrix = e);
                          return i;
                      }
                      shadingFill(t) {
                          if (!this.contentVisible) return;
                          const e = this.ctx;
                          this.save();
                          const i = this._getPattern(t);
                          e.fillStyle = i.getPattern(e, this, (0, n.getCurrentTransformInverse)(e), a.PathType.SHADING);
                          const r = (0, n.getCurrentTransformInverse)(e);
                          if (r) {
                              const { width: t, height: i } = e.canvas,
                                  [n, a, o, l] = s.Util.getAxialAlignedBoundingBox([0, 0, t, i], r);
                              this.ctx.fillRect(n, a, o - n, l - a);
                          } else this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
                          this.compose(this.current.getClippedPathBoundingBox());
                          this.restore();
                      }
                      beginInlineImage() {
                          (0, s.unreachable)("Should not call beginInlineImage");
                      }
                      beginImageData() {
                          (0, s.unreachable)("Should not call beginImageData");
                      }
                      paintFormXObjectBegin(t, e) {
                          if (this.contentVisible) {
                              this.save();
                              this.baseTransformStack.push(this.baseTransform);
                              Array.isArray(t) && 6 === t.length && this.transform(...t);
                              this.baseTransform = (0, n.getCurrentTransform)(this.ctx);
                              if (e) {
                                  const t = e[2] - e[0],
                                      i = e[3] - e[1];
                                  this.ctx.rect(e[0], e[1], t, i);
                                  this.current.updateRectMinMax((0, n.getCurrentTransform)(this.ctx), e);
                                  this.clip();
                                  this.endPath();
                              }
                          }
                      }
                      paintFormXObjectEnd() {
                          if (this.contentVisible) {
                              this.restore();
                              this.baseTransform = this.baseTransformStack.pop();
                          }
                      }
                      beginGroup(t) {
                          if (!this.contentVisible) return;
                          this.save();
                          if (this.inSMaskMode) {
                              this.endSMaskMode();
                              this.current.activeSMask = null;
                          }
                          const e = this.ctx;
                          t.isolated || (0, s.info)("TODO: Support non-isolated groups.");
                          t.knockout && (0, s.warn)("Knockout groups not supported.");
                          const i = (0, n.getCurrentTransform)(e);
                          t.matrix && e.transform(...t.matrix);
                          if (!t.bbox) throw new Error("Bounding box is required.");
                          let a = s.Util.getAxialAlignedBoundingBox(t.bbox, (0, n.getCurrentTransform)(e));
                          const r = [0, 0, e.canvas.width, e.canvas.height];
                          a = s.Util.intersect(a, r) || [0, 0, 0, 0];
                          const l = Math.floor(a[0]),
                              h = Math.floor(a[1]);
                          let c = Math.max(Math.ceil(a[2]) - l, 1),
                              d = Math.max(Math.ceil(a[3]) - h, 1),
                              u = 1,
                              p = 1;
                          if (c > o) {
                              u = c / o;
                              c = o;
                          }
                          if (d > o) {
                              p = d / o;
                              d = o;
                          }
                          this.current.startNewPathAndClipBox([0, 0, c, d]);
                          let g = "groupAt" + this.groupLevel;
                          t.smask && (g += "_smask_" + (this.smaskCounter++ % 2));
                          const m = this.cachedCanvases.getCanvas(g, c, d),
                              f = m.context;
                          f.scale(1 / u, 1 / p);
                          f.translate(-l, -h);
                          f.transform(...i);
                          if (t.smask)
                              this.smaskStack.push({
                                  canvas: m.canvas,
                                  context: f,
                                  offsetX: l,
                                  offsetY: h,
                                  scaleX: u,
                                  scaleY: p,
                                  subtype: t.smask.subtype,
                                  backdrop: t.smask.backdrop,
                                  transferMap: t.smask.transferMap || null,
                                  startTransformInverse: null,
                              });
                          else {
                              e.setTransform(1, 0, 0, 1, 0, 0);
                              e.translate(l, h);
                              e.scale(u, p);
                              e.save();
                          }
                          copyCtxState(e, f);
                          this.ctx = f;
                          this.setGState([
                              ["BM", "source-over"],
                              ["ca", 1],
                              ["CA", 1],
                          ]);
                          this.groupStack.push(e);
                          this.groupLevel++;
                      }
                      endGroup(t) {
                          if (!this.contentVisible) return;
                          this.groupLevel--;
                          const e = this.ctx,
                              i = this.groupStack.pop();
                          this.ctx = i;
                          this.ctx.imageSmoothingEnabled = !1;
                          if (t.smask) {
                              this.tempSMask = this.smaskStack.pop();
                              this.restore();
                          } else {
                              this.ctx.restore();
                              const t = (0, n.getCurrentTransform)(this.ctx);
                              this.restore();
                              this.ctx.save();
                              this.ctx.setTransform(...t);
                              const i = s.Util.getAxialAlignedBoundingBox([0, 0, e.canvas.width, e.canvas.height], t);
                              this.ctx.drawImage(e.canvas, 0, 0);
                              this.ctx.restore();
                              this.compose(i);
                          }
                      }
                      beginAnnotation(t, e, i, a, r) {
                          this.#he();
                          resetCtxToDefault(this.ctx);
                          this.ctx.save();
                          this.save();
                          this.baseTransform && this.ctx.setTransform(...this.baseTransform);
                          if (Array.isArray(e) && 4 === e.length) {
                              const a = e[2] - e[0],
                                  o = e[3] - e[1];
                              if (r && this.annotationCanvasMap) {
                                  (i = i.slice())[4] -= e[0];
                                  i[5] -= e[1];
                                  (e = e.slice())[0] = e[1] = 0;
                                  e[2] = a;
                                  e[3] = o;
                                  const [r, l] = s.Util.singularValueDecompose2dScale((0, n.getCurrentTransform)(this.ctx)),
                                      { viewportScale: h } = this,
                                      c = Math.ceil(a * this.outputScaleX * h),
                                      d = Math.ceil(o * this.outputScaleY * h);
                                  this.annotationCanvas = this.canvasFactory.create(c, d);
                                  const { canvas: u, context: p } = this.annotationCanvas;
                                  this.annotationCanvasMap.set(t, u);
                                  this.annotationCanvas.savedCtx = this.ctx;
                                  this.ctx = p;
                                  this.ctx.save();
                                  this.ctx.setTransform(r, 0, 0, -l, 0, o * l);
                                  resetCtxToDefault(this.ctx);
                              } else {
                                  resetCtxToDefault(this.ctx);
                                  this.ctx.rect(e[0], e[1], a, o);
                                  this.ctx.clip();
                                  this.endPath();
                              }
                          }
                          this.current = new CanvasExtraState(this.ctx.canvas.width, this.ctx.canvas.height);
                          this.transform(...i);
                          this.transform(...a);
                      }
                      endAnnotation() {
                          if (this.annotationCanvas) {
                              this.ctx.restore();
                              this.#ce();
                              this.ctx = this.annotationCanvas.savedCtx;
                              delete this.annotationCanvas.savedCtx;
                              delete this.annotationCanvas;
                          }
                      }
                      paintImageMaskXObject(t) {
                          if (!this.contentVisible) return;
                          const e = t.count;
                          (t = this.getObject(t.data, t)).count = e;
                          const i = this.ctx,
                              s = this.processingType3;
                          if (s) {
                              void 0 === s.compiled &&
                                  (s.compiled = (function compileType3Glyph(t) {
                                      const { width: e, height: i } = t;
                                      if (e > 1e3 || i > 1e3) return null;
                                      const s = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]),
                                          n = e + 1;
                                      let a,
                                          r,
                                          o,
                                          l = new Uint8Array(n * (i + 1));
                                      const h = (e + 7) & -8;
                                      let c = new Uint8Array(h * i),
                                          d = 0;
                                      for (const e of t.data) {
                                          let t = 128;
                                          for (; t > 0; ) {
                                              c[d++] = e & t ? 0 : 255;
                                              t >>= 1;
                                          }
                                      }
                                      let u = 0;
                                      d = 0;
                                      if (0 !== c[d]) {
                                          l[0] = 1;
                                          ++u;
                                      }
                                      for (r = 1; r < e; r++) {
                                          if (c[d] !== c[d + 1]) {
                                              l[r] = c[d] ? 2 : 1;
                                              ++u;
                                          }
                                          d++;
                                      }
                                      if (0 !== c[d]) {
                                          l[r] = 2;
                                          ++u;
                                      }
                                      for (a = 1; a < i; a++) {
                                          d = a * h;
                                          o = a * n;
                                          if (c[d - h] !== c[d]) {
                                              l[o] = c[d] ? 1 : 8;
                                              ++u;
                                          }
                                          let t = (c[d] ? 4 : 0) + (c[d - h] ? 8 : 0);
                                          for (r = 1; r < e; r++) {
                                              t = (t >> 2) + (c[d + 1] ? 4 : 0) + (c[d - h + 1] ? 8 : 0);
                                              if (s[t]) {
                                                  l[o + r] = s[t];
                                                  ++u;
                                              }
                                              d++;
                                          }
                                          if (c[d - h] !== c[d]) {
                                              l[o + r] = c[d] ? 2 : 4;
                                              ++u;
                                          }
                                          if (u > 1e3) return null;
                                      }
                                      d = h * (i - 1);
                                      o = a * n;
                                      if (0 !== c[d]) {
                                          l[o] = 8;
                                          ++u;
                                      }
                                      for (r = 1; r < e; r++) {
                                          if (c[d] !== c[d + 1]) {
                                              l[o + r] = c[d] ? 4 : 8;
                                              ++u;
                                          }
                                          d++;
                                      }
                                      if (0 !== c[d]) {
                                          l[o + r] = 4;
                                          ++u;
                                      }
                                      if (u > 1e3) return null;
                                      const p = new Int32Array([0, n, -1, 0, -n, 0, 0, 0, 1]),
                                          g = new Path2D();
                                      for (a = 0; u && a <= i; a++) {
                                          let t = a * n;
                                          const i = t + e;
                                          for (; t < i && !l[t]; ) t++;
                                          if (t === i) continue;
                                          g.moveTo(t % n, a);
                                          const s = t;
                                          let r = l[t];
                                          do {
                                              const e = p[r];
                                              do {
                                                  t += e;
                                              } while (!l[t]);
                                              const i = l[t];
                                              if (5 !== i && 10 !== i) {
                                                  r = i;
                                                  l[t] = 0;
                                              } else {
                                                  r = i & ((51 * r) >> 4);
                                                  l[t] &= (r >> 2) | (r << 2);
                                              }
                                              g.lineTo(t % n, (t / n) | 0);
                                              l[t] || --u;
                                          } while (s !== t);
                                          --a;
                                      }
                                      c = null;
                                      l = null;
                                      return function (t) {
                                          t.save();
                                          t.scale(1 / e, -1 / i);
                                          t.translate(0, -i);
                                          t.fill(g);
                                          t.beginPath();
                                          t.restore();
                                      };
                                  })(t));
                              if (s.compiled) {
                                  s.compiled(i);
                                  return;
                              }
                          }
                          const n = this._createMaskCanvas(t),
                              a = n.canvas;
                          i.save();
                          i.setTransform(1, 0, 0, 1, 0, 0);
                          i.drawImage(a, n.offsetX, n.offsetY);
                          i.restore();
                          this.compose();
                      }
                      paintImageMaskXObjectRepeat(t, e, i = 0, a = 0, r, o) {
                          if (!this.contentVisible) return;
                          t = this.getObject(t.data, t);
                          const l = this.ctx;
                          l.save();
                          const h = (0, n.getCurrentTransform)(l);
                          l.transform(e, i, a, r, 0, 0);
                          const c = this._createMaskCanvas(t);
                          l.setTransform(1, 0, 0, 1, c.offsetX - h[4], c.offsetY - h[5]);
                          for (let t = 0, n = o.length; t < n; t += 2) {
                              const n = s.Util.transform(h, [e, i, a, r, o[t], o[t + 1]]),
                                  [d, u] = s.Util.applyTransform([0, 0], n);
                              l.drawImage(c.canvas, d, u);
                          }
                          l.restore();
                          this.compose();
                      }
                      paintImageMaskXObjectGroup(t) {
                          if (!this.contentVisible) return;
                          const e = this.ctx,
                              i = this.current.fillColor,
                              s = this.current.patternFill;
                          for (const r of t) {
                              const { data: t, width: o, height: l, transform: h } = r,
                                  c = this.cachedCanvases.getCanvas("maskCanvas", o, l),
                                  d = c.context;
                              d.save();
                              putBinaryImageMask(d, this.getObject(t, r));
                              d.globalCompositeOperation = "source-in";
                              d.fillStyle = s ? i.getPattern(d, this, (0, n.getCurrentTransformInverse)(e), a.PathType.FILL) : i;
                              d.fillRect(0, 0, o, l);
                              d.restore();
                              e.save();
                              e.transform(...h);
                              e.scale(1, -1);
                              drawImageAtIntegerCoords(e, c.canvas, 0, 0, o, l, 0, -1, 1, 1);
                              e.restore();
                          }
                          this.compose();
                      }
                      paintImageXObject(t) {
                          if (!this.contentVisible) return;
                          const e = this.getObject(t);
                          e ? this.paintInlineImageXObject(e) : (0, s.warn)("Dependent image isn't ready yet");
                      }
                      paintImageXObjectRepeat(t, e, i, n) {
                          if (!this.contentVisible) return;
                          const a = this.getObject(t);
                          if (!a) {
                              (0, s.warn)("Dependent image isn't ready yet");
                              return;
                          }
                          const r = a.width,
                              o = a.height,
                              l = [];
                          for (let t = 0, s = n.length; t < s; t += 2) l.push({ transform: [e, 0, 0, i, n[t], n[t + 1]], x: 0, y: 0, w: r, h: o });
                          this.paintInlineImageXObjectGroup(a, l);
                      }
                      applyTransferMapsToCanvas(t) {
                          if ("none" !== this.current.transferMaps) {
                              t.filter = this.current.transferMaps;
                              t.drawImage(t.canvas, 0, 0);
                              t.filter = "none";
                          }
                          return t.canvas;
                      }
                      applyTransferMapsToBitmap(t) {
                          if ("none" === this.current.transferMaps) return t.bitmap;
                          const { bitmap: e, width: i, height: s } = t,
                              n = this.cachedCanvases.getCanvas("inlineImage", i, s),
                              a = n.context;
                          a.filter = this.current.transferMaps;
                          a.drawImage(e, 0, 0);
                          a.filter = "none";
                          return n.canvas;
                      }
                      paintInlineImageXObject(t) {
                          if (!this.contentVisible) return;
                          const e = t.width,
                              i = t.height,
                              a = this.ctx;
                          this.save();
                          if (!s.isNodeJS) {
                              const { filter: t } = a;
                              "none" !== t && "" !== t && (a.filter = "none");
                          }
                          a.scale(1 / e, -1 / i);
                          let r;
                          if (t.bitmap) r = this.applyTransferMapsToBitmap(t);
                          else if (("function" == typeof HTMLElement && t instanceof HTMLElement) || !t.data) r = t;
                          else {
                              const s = this.cachedCanvases.getCanvas("inlineImage", e, i).context;
                              putBinaryImageData(s, t);
                              r = this.applyTransferMapsToCanvas(s);
                          }
                          const o = this._scaleImage(r, (0, n.getCurrentTransformInverse)(a));
                          a.imageSmoothingEnabled = getImageSmoothingEnabled((0, n.getCurrentTransform)(a), t.interpolate);
                          drawImageAtIntegerCoords(a, o.img, 0, 0, o.paintWidth, o.paintHeight, 0, -i, e, i);
                          this.compose();
                          this.restore();
                      }
                      paintInlineImageXObjectGroup(t, e) {
                          if (!this.contentVisible) return;
                          const i = this.ctx;
                          let s;
                          if (t.bitmap) s = t.bitmap;
                          else {
                              const e = t.width,
                                  i = t.height,
                                  n = this.cachedCanvases.getCanvas("inlineImage", e, i).context;
                              putBinaryImageData(n, t);
                              s = this.applyTransferMapsToCanvas(n);
                          }
                          for (const t of e) {
                              i.save();
                              i.transform(...t.transform);
                              i.scale(1, -1);
                              drawImageAtIntegerCoords(i, s, t.x, t.y, t.w, t.h, 0, -1, 1, 1);
                              i.restore();
                          }
                          this.compose();
                      }
                      paintSolidColorImageMask() {
                          if (this.contentVisible) {
                              this.ctx.fillRect(0, 0, 1, 1);
                              this.compose();
                          }
                      }
                      markPoint(t) {}
                      markPointProps(t, e) {}
                      beginMarkedContent(t) {
                          this.markedContentStack.push({ visible: !0 });
                      }
                      beginMarkedContentProps(t, e) {
                          "OC" === t ? this.markedContentStack.push({ visible: this.optionalContentConfig.isVisible(e) }) : this.markedContentStack.push({ visible: !0 });
                          this.contentVisible = this.isContentVisible();
                      }
                      endMarkedContent() {
                          this.markedContentStack.pop();
                          this.contentVisible = this.isContentVisible();
                      }
                      beginCompat() {}
                      endCompat() {}
                      consumePath(t) {
                          const e = this.current.isEmptyClip();
                          this.pendingClip && this.current.updateClipFromPath();
                          this.pendingClip || this.compose(t);
                          const i = this.ctx;
                          if (this.pendingClip) {
                              e || (this.pendingClip === u ? i.clip("evenodd") : i.clip());
                              this.pendingClip = null;
                          }
                          this.current.startNewPathAndClipBox(this.current.clipBox);
                          i.beginPath();
                      }
                      getSinglePixelWidth() {
                          if (!this._cachedGetSinglePixelWidth) {
                              const t = (0, n.getCurrentTransform)(this.ctx);
                              if (0 === t[1] && 0 === t[2]) this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(t[0]), Math.abs(t[3]));
                              else {
                                  const e = Math.abs(t[0] * t[3] - t[2] * t[1]),
                                      i = Math.hypot(t[0], t[2]),
                                      s = Math.hypot(t[1], t[3]);
                                  this._cachedGetSinglePixelWidth = Math.max(i, s) / e;
                              }
                          }
                          return this._cachedGetSinglePixelWidth;
                      }
                      getScaleForStroking() {
                          if (-1 === this._cachedScaleForStroking[0]) {
                              const { lineWidth: t } = this.current,
                                  { a: e, b: i, c: s, d: n } = this.ctx.getTransform();
                              let a, r;
                              if (0 === i && 0 === s) {
                                  const i = Math.abs(e),
                                      s = Math.abs(n);
                                  if (i === s)
                                      if (0 === t) a = r = 1 / i;
                                      else {
                                          const e = i * t;
                                          a = r = e < 1 ? 1 / e : 1;
                                      }
                                  else if (0 === t) {
                                      a = 1 / i;
                                      r = 1 / s;
                                  } else {
                                      const e = i * t,
                                          n = s * t;
                                      a = e < 1 ? 1 / e : 1;
                                      r = n < 1 ? 1 / n : 1;
                                  }
                              } else {
                                  const o = Math.abs(e * n - i * s),
                                      l = Math.hypot(e, i),
                                      h = Math.hypot(s, n);
                                  if (0 === t) {
                                      a = h / o;
                                      r = l / o;
                                  } else {
                                      const e = t * o;
                                      a = h > e ? h / e : 1;
                                      r = l > e ? l / e : 1;
                                  }
                              }
                              this._cachedScaleForStroking[0] = a;
                              this._cachedScaleForStroking[1] = r;
                          }
                          return this._cachedScaleForStroking;
                      }
                      rescaleAndStroke(t) {
                          const { ctx: e } = this,
                              { lineWidth: i } = this.current,
                              [s, n] = this.getScaleForStroking();
                          e.lineWidth = i || 1;
                          if (1 === s && 1 === n) {
                              e.stroke();
                              return;
                          }
                          const a = e.getLineDash();
                          t && e.save();
                          e.scale(s, n);
                          if (a.length > 0) {
                              const t = Math.max(s, n);
                              e.setLineDash(a.map((e) => e / t));
                              e.lineDashOffset /= t;
                          }
                          e.stroke();
                          t && e.restore();
                      }
                      isContentVisible() {
                          for (let t = this.markedContentStack.length - 1; t >= 0; t--) if (!this.markedContentStack[t].visible) return !1;
                          return !0;
                      }
                  }
                  e.CanvasGraphics = CanvasGraphics;
                  for (const t in s.OPS) void 0 !== CanvasGraphics.prototype[t] && (CanvasGraphics.prototype[s.OPS[t]] = CanvasGraphics.prototype[t]);
              },
              (t, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 });
                  e.TilingPattern = e.PathType = void 0;
                  e.getShadingPattern = function getShadingPattern(t) {
                      switch (t[0]) {
                          case "RadialAxial":
                              return new RadialAxialShadingPattern(t);
                          case "Mesh":
                              return new MeshShadingPattern(t);
                          case "Dummy":
                              return new DummyShadingPattern();
                      }
                      throw new Error(`Unknown IR type: ${t[0]}`);
                  };
                  var s = i(1),
                      n = i(6);
                  const a = { FILL: "Fill", STROKE: "Stroke", SHADING: "Shading" };
                  e.PathType = a;
                  function applyBoundingBox(t, e) {
                      if (!e) return;
                      const i = e[2] - e[0],
                          s = e[3] - e[1],
                          n = new Path2D();
                      n.rect(e[0], e[1], i, s);
                      t.clip(n);
                  }
                  class BaseShadingPattern {
                      constructor() {
                          this.constructor === BaseShadingPattern && (0, s.unreachable)("Cannot initialize BaseShadingPattern.");
                      }
                      getPattern() {
                          (0, s.unreachable)("Abstract method `getPattern` called.");
                      }
                  }
                  class RadialAxialShadingPattern extends BaseShadingPattern {
                      constructor(t) {
                          super();
                          this._type = t[1];
                          this._bbox = t[2];
                          this._colorStops = t[3];
                          this._p0 = t[4];
                          this._p1 = t[5];
                          this._r0 = t[6];
                          this._r1 = t[7];
                          this.matrix = null;
                      }
                      _createGradient(t) {
                          let e;
                          "axial" === this._type
                              ? (e = t.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]))
                              : "radial" === this._type && (e = t.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1));
                          for (const t of this._colorStops) e.addColorStop(t[0], t[1]);
                          return e;
                      }
                      getPattern(t, e, i, r) {
                          let o;
                          if (r === a.STROKE || r === a.FILL) {
                              const a = e.current.getClippedPathBoundingBox(r, (0, n.getCurrentTransform)(t)) || [0, 0, 0, 0],
                                  l = Math.ceil(a[2] - a[0]) || 1,
                                  h = Math.ceil(a[3] - a[1]) || 1,
                                  c = e.cachedCanvases.getCanvas("pattern", l, h, !0),
                                  d = c.context;
                              d.clearRect(0, 0, d.canvas.width, d.canvas.height);
                              d.beginPath();
                              d.rect(0, 0, d.canvas.width, d.canvas.height);
                              d.translate(-a[0], -a[1]);
                              i = s.Util.transform(i, [1, 0, 0, 1, a[0], a[1]]);
                              d.transform(...e.baseTransform);
                              this.matrix && d.transform(...this.matrix);
                              applyBoundingBox(d, this._bbox);
                              d.fillStyle = this._createGradient(d);
                              d.fill();
                              o = t.createPattern(c.canvas, "no-repeat");
                              const u = new DOMMatrix(i);
                              o.setTransform(u);
                          } else {
                              applyBoundingBox(t, this._bbox);
                              o = this._createGradient(t);
                          }
                          return o;
                      }
                  }
                  function drawTriangle(t, e, i, s, n, a, r, o) {
                      const l = e.coords,
                          h = e.colors,
                          c = t.data,
                          d = 4 * t.width;
                      let u;
                      if (l[i + 1] > l[s + 1]) {
                          u = i;
                          i = s;
                          s = u;
                          u = a;
                          a = r;
                          r = u;
                      }
                      if (l[s + 1] > l[n + 1]) {
                          u = s;
                          s = n;
                          n = u;
                          u = r;
                          r = o;
                          o = u;
                      }
                      if (l[i + 1] > l[s + 1]) {
                          u = i;
                          i = s;
                          s = u;
                          u = a;
                          a = r;
                          r = u;
                      }
                      const p = (l[i] + e.offsetX) * e.scaleX,
                          g = (l[i + 1] + e.offsetY) * e.scaleY,
                          m = (l[s] + e.offsetX) * e.scaleX,
                          f = (l[s + 1] + e.offsetY) * e.scaleY,
                          b = (l[n] + e.offsetX) * e.scaleX,
                          A = (l[n + 1] + e.offsetY) * e.scaleY;
                      if (g >= A) return;
                      const _ = h[a],
                          v = h[a + 1],
                          y = h[a + 2],
                          S = h[r],
                          E = h[r + 1],
                          x = h[r + 2],
                          w = h[o],
                          C = h[o + 1],
                          T = h[o + 2],
                          P = Math.round(g),
                          M = Math.round(A);
                      let k, F, R, D, I, L, O, N;
                      for (let t = P; t <= M; t++) {
                          if (t < f) {
                              const e = t < g ? 0 : (g - t) / (g - f);
                              k = p - (p - m) * e;
                              F = _ - (_ - S) * e;
                              R = v - (v - E) * e;
                              D = y - (y - x) * e;
                          } else {
                              let e;
                              e = t > A ? 1 : f === A ? 0 : (f - t) / (f - A);
                              k = m - (m - b) * e;
                              F = S - (S - w) * e;
                              R = E - (E - C) * e;
                              D = x - (x - T) * e;
                          }
                          let e;
                          e = t < g ? 0 : t > A ? 1 : (g - t) / (g - A);
                          I = p - (p - b) * e;
                          L = _ - (_ - w) * e;
                          O = v - (v - C) * e;
                          N = y - (y - T) * e;
                          const i = Math.round(Math.min(k, I)),
                              s = Math.round(Math.max(k, I));
                          let n = d * t + 4 * i;
                          for (let t = i; t <= s; t++) {
                              e = (k - t) / (k - I);
                              e < 0 ? (e = 0) : e > 1 && (e = 1);
                              c[n++] = (F - (F - L) * e) | 0;
                              c[n++] = (R - (R - O) * e) | 0;
                              c[n++] = (D - (D - N) * e) | 0;
                              c[n++] = 255;
                          }
                      }
                  }
                  function drawFigure(t, e, i) {
                      const s = e.coords,
                          n = e.colors;
                      let a, r;
                      switch (e.type) {
                          case "lattice":
                              const o = e.verticesPerRow,
                                  l = Math.floor(s.length / o) - 1,
                                  h = o - 1;
                              for (a = 0; a < l; a++) {
                                  let e = a * o;
                                  for (let a = 0; a < h; a++, e++) {
                                      drawTriangle(t, i, s[e], s[e + 1], s[e + o], n[e], n[e + 1], n[e + o]);
                                      drawTriangle(t, i, s[e + o + 1], s[e + 1], s[e + o], n[e + o + 1], n[e + 1], n[e + o]);
                                  }
                              }
                              break;
                          case "triangles":
                              for (a = 0, r = s.length; a < r; a += 3) drawTriangle(t, i, s[a], s[a + 1], s[a + 2], n[a], n[a + 1], n[a + 2]);
                              break;
                          default:
                              throw new Error("illegal figure");
                      }
                  }
                  class MeshShadingPattern extends BaseShadingPattern {
                      constructor(t) {
                          super();
                          this._coords = t[2];
                          this._colors = t[3];
                          this._figures = t[4];
                          this._bounds = t[5];
                          this._bbox = t[7];
                          this._background = t[8];
                          this.matrix = null;
                      }
                      _createMeshCanvas(t, e, i) {
                          const s = Math.floor(this._bounds[0]),
                              n = Math.floor(this._bounds[1]),
                              a = Math.ceil(this._bounds[2]) - s,
                              r = Math.ceil(this._bounds[3]) - n,
                              o = Math.min(Math.ceil(Math.abs(a * t[0] * 1.1)), 3e3),
                              l = Math.min(Math.ceil(Math.abs(r * t[1] * 1.1)), 3e3),
                              h = a / o,
                              c = r / l,
                              d = { coords: this._coords, colors: this._colors, offsetX: -s, offsetY: -n, scaleX: 1 / h, scaleY: 1 / c },
                              u = o + 4,
                              p = l + 4,
                              g = i.getCanvas("mesh", u, p, !1),
                              m = g.context,
                              f = m.createImageData(o, l);
                          if (e) {
                              const t = f.data;
                              for (let i = 0, s = t.length; i < s; i += 4) {
                                  t[i] = e[0];
                                  t[i + 1] = e[1];
                                  t[i + 2] = e[2];
                                  t[i + 3] = 255;
                              }
                          }
                          for (const t of this._figures) drawFigure(f, t, d);
                          m.putImageData(f, 2, 2);
                          return { canvas: g.canvas, offsetX: s - 2 * h, offsetY: n - 2 * c, scaleX: h, scaleY: c };
                      }
                      getPattern(t, e, i, r) {
                          applyBoundingBox(t, this._bbox);
                          let o;
                          if (r === a.SHADING) o = s.Util.singularValueDecompose2dScale((0, n.getCurrentTransform)(t));
                          else {
                              o = s.Util.singularValueDecompose2dScale(e.baseTransform);
                              if (this.matrix) {
                                  const t = s.Util.singularValueDecompose2dScale(this.matrix);
                                  o = [o[0] * t[0], o[1] * t[1]];
                              }
                          }
                          const l = this._createMeshCanvas(o, r === a.SHADING ? null : this._background, e.cachedCanvases);
                          if (r !== a.SHADING) {
                              t.setTransform(...e.baseTransform);
                              this.matrix && t.transform(...this.matrix);
                          }
                          t.translate(l.offsetX, l.offsetY);
                          t.scale(l.scaleX, l.scaleY);
                          return t.createPattern(l.canvas, "no-repeat");
                      }
                  }
                  class DummyShadingPattern extends BaseShadingPattern {
                      getPattern() {
                          return "hotpink";
                      }
                  }
                  const r = 1,
                      o = 2;
                  class TilingPattern {
                      static MAX_PATTERN_SIZE = 3e3;
                      constructor(t, e, i, s, n) {
                          this.operatorList = t[2];
                          this.matrix = t[3] || [1, 0, 0, 1, 0, 0];
                          this.bbox = t[4];
                          this.xstep = t[5];
                          this.ystep = t[6];
                          this.paintType = t[7];
                          this.tilingType = t[8];
                          this.color = e;
                          this.ctx = i;
                          this.canvasGraphicsFactory = s;
                          this.baseTransform = n;
                      }
                      createPatternCanvas(t) {
                          const e = this.operatorList,
                              i = this.bbox,
                              a = this.xstep,
                              r = this.ystep,
                              o = this.paintType,
                              l = this.tilingType,
                              h = this.color,
                              c = this.canvasGraphicsFactory;
                          (0, s.info)("TilingType: " + l);
                          const d = i[0],
                              u = i[1],
                              p = i[2],
                              g = i[3],
                              m = s.Util.singularValueDecompose2dScale(this.matrix),
                              f = s.Util.singularValueDecompose2dScale(this.baseTransform),
                              b = [m[0] * f[0], m[1] * f[1]],
                              A = this.getSizeAndScale(a, this.ctx.canvas.width, b[0]),
                              _ = this.getSizeAndScale(r, this.ctx.canvas.height, b[1]),
                              v = t.cachedCanvases.getCanvas("pattern", A.size, _.size, !0),
                              y = v.context,
                              S = c.createCanvasGraphics(y);
                          S.groupLevel = t.groupLevel;
                          this.setFillAndStrokeStyleToContext(S, o, h);
                          let E = d,
                              x = u,
                              w = p,
                              C = g;
                          if (d < 0) {
                              E = 0;
                              w += Math.abs(d);
                          }
                          if (u < 0) {
                              x = 0;
                              C += Math.abs(u);
                          }
                          y.translate(-A.scale * E, -_.scale * x);
                          S.transform(A.scale, 0, 0, _.scale, 0, 0);
                          y.save();
                          this.clipBbox(S, E, x, w, C);
                          S.baseTransform = (0, n.getCurrentTransform)(S.ctx);
                          S.executeOperatorList(e);
                          S.endDrawing();
                          return { canvas: v.canvas, scaleX: A.scale, scaleY: _.scale, offsetX: E, offsetY: x };
                      }
                      getSizeAndScale(t, e, i) {
                          t = Math.abs(t);
                          const s = Math.max(TilingPattern.MAX_PATTERN_SIZE, e);
                          let n = Math.ceil(t * i);
                          n >= s ? (n = s) : (i = n / t);
                          return { scale: i, size: n };
                      }
                      clipBbox(t, e, i, s, a) {
                          const r = s - e,
                              o = a - i;
                          t.ctx.rect(e, i, r, o);
                          t.current.updateRectMinMax((0, n.getCurrentTransform)(t.ctx), [e, i, s, a]);
                          t.clip();
                          t.endPath();
                      }
                      setFillAndStrokeStyleToContext(t, e, i) {
                          const n = t.ctx,
                              a = t.current;
                          switch (e) {
                              case r:
                                  const t = this.ctx;
                                  n.fillStyle = t.fillStyle;
                                  n.strokeStyle = t.strokeStyle;
                                  a.fillColor = t.fillStyle;
                                  a.strokeColor = t.strokeStyle;
                                  break;
                              case o:
                                  const l = s.Util.makeHexColor(i[0], i[1], i[2]);
                                  n.fillStyle = l;
                                  n.strokeStyle = l;
                                  a.fillColor = l;
                                  a.strokeColor = l;
                                  break;
                              default:
                                  throw new s.FormatError(`Unsupported paint type: ${e}`);
                          }
                      }
                      getPattern(t, e, i, n) {
                          let r = i;
                          if (n !== a.SHADING) {
                              r = s.Util.transform(r, e.baseTransform);
                              this.matrix && (r = s.Util.transform(r, this.matrix));
                          }
                          const o = this.createPatternCanvas(e);
                          let l = new DOMMatrix(r);
                          l = l.translate(o.offsetX, o.offsetY);
                          l = l.scale(1 / o.scaleX, 1 / o.scaleY);
                          const h = t.createPattern(o.canvas, "repeat");
                          h.setTransform(l);
                          return h;
                      }
                  }
                  e.TilingPattern = TilingPattern;
              },
              (t, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 });
                  e.convertBlackAndWhiteToRGBA = convertBlackAndWhiteToRGBA;
                  e.convertToRGBA = function convertToRGBA(t) {
                      switch (t.kind) {
                          case s.ImageKind.GRAYSCALE_1BPP:
                              return convertBlackAndWhiteToRGBA(t);
                          case s.ImageKind.RGB_24BPP:
                              return (function convertRGBToRGBA({ src: t, srcPos: e = 0, dest: i, destPos: n = 0, width: a, height: r }) {
                                  let o = 0;
                                  const l = t.length >> 2,
                                      h = new Uint32Array(t.buffer, e, l);
                                  if (s.FeatureTest.isLittleEndian) {
                                      for (; o < l - 2; o += 3, n += 4) {
                                          const t = h[o],
                                              e = h[o + 1],
                                              s = h[o + 2];
                                          i[n] = 4278190080 | t;
                                          i[n + 1] = (t >>> 24) | (e << 8) | 4278190080;
                                          i[n + 2] = (e >>> 16) | (s << 16) | 4278190080;
                                          i[n + 3] = (s >>> 8) | 4278190080;
                                      }
                                      for (let e = 4 * o, s = t.length; e < s; e += 3) i[n++] = t[e] | (t[e + 1] << 8) | (t[e + 2] << 16) | 4278190080;
                                  } else {
                                      for (; o < l - 2; o += 3, n += 4) {
                                          const t = h[o],
                                              e = h[o + 1],
                                              s = h[o + 2];
                                          i[n] = 255 | t;
                                          i[n + 1] = (t << 24) | (e >>> 8) | 255;
                                          i[n + 2] = (e << 16) | (s >>> 16) | 255;
                                          i[n + 3] = (s << 8) | 255;
                                      }
                                      for (let e = 4 * o, s = t.length; e < s; e += 3) i[n++] = (t[e] << 24) | (t[e + 1] << 16) | (t[e + 2] << 8) | 255;
                                  }
                                  return { srcPos: e, destPos: n };
                              })(t);
                      }
                      return null;
                  };
                  e.grayToRGBA = function grayToRGBA(t, e) {
                      if (s.FeatureTest.isLittleEndian) for (let i = 0, s = t.length; i < s; i++) e[i] = (65793 * t[i]) | 4278190080;
                      else for (let i = 0, s = t.length; i < s; i++) e[i] = (16843008 * t[i]) | 255;
                  };
                  var s = i(1);
                  function convertBlackAndWhiteToRGBA({ src: t, srcPos: e = 0, dest: i, width: n, height: a, nonBlackColor: r = 4294967295, inverseDecode: o = !1 }) {
                      const l = s.FeatureTest.isLittleEndian ? 4278190080 : 255,
                          [h, c] = o ? [r, l] : [l, r],
                          d = n >> 3,
                          u = 7 & n,
                          p = t.length;
                      i = new Uint32Array(i.buffer);
                      let g = 0;
                      for (let s = 0; s < a; s++) {
                          for (const s = e + d; e < s; e++) {
                              const s = e < p ? t[e] : 255;
                              i[g++] = 128 & s ? c : h;
                              i[g++] = 64 & s ? c : h;
                              i[g++] = 32 & s ? c : h;
                              i[g++] = 16 & s ? c : h;
                              i[g++] = 8 & s ? c : h;
                              i[g++] = 4 & s ? c : h;
                              i[g++] = 2 & s ? c : h;
                              i[g++] = 1 & s ? c : h;
                          }
                          if (0 === u) continue;
                          const s = e < p ? t[e++] : 255;
                          for (let t = 0; t < u; t++) i[g++] = s & (1 << (7 - t)) ? c : h;
                      }
                      return { srcPos: e, destPos: g };
                  }
              },
              (t, e) => {
                  Object.defineProperty(e, "__esModule", { value: !0 });
                  e.GlobalWorkerOptions = void 0;
                  const i = Object.create(null);
                  e.GlobalWorkerOptions = i;
                  i.workerPort = null;
                  i.workerSrc = "";
              },
              (t, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 });
                  e.MessageHandler = void 0;
                  var s = i(1);
                  const n = 1,
                      a = 2,
                      r = 1,
                      o = 2,
                      l = 3,
                      h = 4,
                      c = 5,
                      d = 6,
                      u = 7,
                      p = 8;
                  function wrapReason(t) {
                      t instanceof Error || ("object" == typeof t && null !== t) || (0, s.unreachable)('wrapReason: Expected "reason" to be a (possibly cloned) Error.');
                      switch (t.name) {
                          case "AbortException":
                              return new s.AbortException(t.message);
                          case "MissingPDFException":
                              return new s.MissingPDFException(t.message);
                          case "PasswordException":
                              return new s.PasswordException(t.message, t.code);
                          case "UnexpectedResponseException":
                              return new s.UnexpectedResponseException(t.message, t.status);
                          case "UnknownErrorException":
                              return new s.UnknownErrorException(t.message, t.details);
                          default:
                              return new s.UnknownErrorException(t.message, t.toString());
                      }
                  }
                  e.MessageHandler = class MessageHandler {
                      constructor(t, e, i) {
                          this.sourceName = t;
                          this.targetName = e;
                          this.comObj = i;
                          this.callbackId = 1;
                          this.streamId = 1;
                          this.streamSinks = Object.create(null);
                          this.streamControllers = Object.create(null);
                          this.callbackCapabilities = Object.create(null);
                          this.actionHandler = Object.create(null);
                          this._onComObjOnMessage = (t) => {
                              const e = t.data;
                              if (e.targetName !== this.sourceName) return;
                              if (e.stream) {
                                  this.#de(e);
                                  return;
                              }
                              if (e.callback) {
                                  const t = e.callbackId,
                                      i = this.callbackCapabilities[t];
                                  if (!i) throw new Error(`Cannot resolve callback ${t}`);
                                  delete this.callbackCapabilities[t];
                                  if (e.callback === n) i.resolve(e.data);
                                  else {
                                      if (e.callback !== a) throw new Error("Unexpected callback case");
                                      i.reject(wrapReason(e.reason));
                                  }
                                  return;
                              }
                              const s = this.actionHandler[e.action];
                              if (!s) throw new Error(`Unknown action from worker: ${e.action}`);
                              if (e.callbackId) {
                                  const t = this.sourceName,
                                      r = e.sourceName;
                                  new Promise(function (t) {
                                      t(s(e.data));
                                  }).then(
                                      function (s) {
                                          i.postMessage({ sourceName: t, targetName: r, callback: n, callbackId: e.callbackId, data: s });
                                      },
                                      function (s) {
                                          i.postMessage({ sourceName: t, targetName: r, callback: a, callbackId: e.callbackId, reason: wrapReason(s) });
                                      }
                                  );
                              } else e.streamId ? this.#ue(e) : s(e.data);
                          };
                          i.addEventListener("message", this._onComObjOnMessage);
                      }
                      on(t, e) {
                          const i = this.actionHandler;
                          if (i[t]) throw new Error(`There is already an actionName called "${t}"`);
                          i[t] = e;
                      }
                      send(t, e, i) {
                          this.comObj.postMessage({ sourceName: this.sourceName, targetName: this.targetName, action: t, data: e }, i);
                      }
                      sendWithPromise(t, e, i) {
                          const n = this.callbackId++,
                              a = new s.PromiseCapability();
                          this.callbackCapabilities[n] = a;
                          try {
                              this.comObj.postMessage({ sourceName: this.sourceName, targetName: this.targetName, action: t, callbackId: n, data: e }, i);
                          } catch (t) {
                              a.reject(t);
                          }
                          return a.promise;
                      }
                      sendWithStream(t, e, i, n) {
                          const a = this.streamId++,
                              o = this.sourceName,
                              l = this.targetName,
                              h = this.comObj;
                          return new ReadableStream(
                              {
                                  start: (i) => {
                                      const r = new s.PromiseCapability();
                                      this.streamControllers[a] = { controller: i, startCall: r, pullCall: null, cancelCall: null, isClosed: !1 };
                                      h.postMessage({ sourceName: o, targetName: l, action: t, streamId: a, data: e, desiredSize: i.desiredSize }, n);
                                      return r.promise;
                                  },
                                  pull: (t) => {
                                      const e = new s.PromiseCapability();
                                      this.streamControllers[a].pullCall = e;
                                      h.postMessage({ sourceName: o, targetName: l, stream: d, streamId: a, desiredSize: t.desiredSize });
                                      return e.promise;
                                  },
                                  cancel: (t) => {
                                      (0, s.assert)(t instanceof Error, "cancel must have a valid reason");
                                      const e = new s.PromiseCapability();
                                      this.streamControllers[a].cancelCall = e;
                                      this.streamControllers[a].isClosed = !0;
                                      h.postMessage({ sourceName: o, targetName: l, stream: r, streamId: a, reason: wrapReason(t) });
                                      return e.promise;
                                  },
                              },
                              i
                          );
                      }
                      #ue(t) {
                          const e = t.streamId,
                              i = this.sourceName,
                              n = t.sourceName,
                              a = this.comObj,
                              r = this,
                              o = this.actionHandler[t.action],
                              d = {
                                  enqueue(t, r = 1, o) {
                                      if (this.isCancelled) return;
                                      const l = this.desiredSize;
                                      this.desiredSize -= r;
                                      if (l > 0 && this.desiredSize <= 0) {
                                          this.sinkCapability = new s.PromiseCapability();
                                          this.ready = this.sinkCapability.promise;
                                      }
                                      a.postMessage({ sourceName: i, targetName: n, stream: h, streamId: e, chunk: t }, o);
                                  },
                                  close() {
                                      if (!this.isCancelled) {
                                          this.isCancelled = !0;
                                          a.postMessage({ sourceName: i, targetName: n, stream: l, streamId: e });
                                          delete r.streamSinks[e];
                                      }
                                  },
                                  error(t) {
                                      (0, s.assert)(t instanceof Error, "error must have a valid reason");
                                      if (!this.isCancelled) {
                                          this.isCancelled = !0;
                                          a.postMessage({ sourceName: i, targetName: n, stream: c, streamId: e, reason: wrapReason(t) });
                                      }
                                  },
                                  sinkCapability: new s.PromiseCapability(),
                                  onPull: null,
                                  onCancel: null,
                                  isCancelled: !1,
                                  desiredSize: t.desiredSize,
                                  ready: null,
                              };
                          d.sinkCapability.resolve();
                          d.ready = d.sinkCapability.promise;
                          this.streamSinks[e] = d;
                          new Promise(function (e) {
                              e(o(t.data, d));
                          }).then(
                              function () {
                                  a.postMessage({ sourceName: i, targetName: n, stream: p, streamId: e, success: !0 });
                              },
                              function (t) {
                                  a.postMessage({ sourceName: i, targetName: n, stream: p, streamId: e, reason: wrapReason(t) });
                              }
                          );
                      }
                      #de(t) {
                          const e = t.streamId,
                              i = this.sourceName,
                              n = t.sourceName,
                              a = this.comObj,
                              g = this.streamControllers[e],
                              m = this.streamSinks[e];
                          switch (t.stream) {
                              case p:
                                  t.success ? g.startCall.resolve() : g.startCall.reject(wrapReason(t.reason));
                                  break;
                              case u:
                                  t.success ? g.pullCall.resolve() : g.pullCall.reject(wrapReason(t.reason));
                                  break;
                              case d:
                                  if (!m) {
                                      a.postMessage({ sourceName: i, targetName: n, stream: u, streamId: e, success: !0 });
                                      break;
                                  }
                                  m.desiredSize <= 0 && t.desiredSize > 0 && m.sinkCapability.resolve();
                                  m.desiredSize = t.desiredSize;
                                  new Promise(function (t) {
                                      t(m.onPull?.());
                                  }).then(
                                      function () {
                                          a.postMessage({ sourceName: i, targetName: n, stream: u, streamId: e, success: !0 });
                                      },
                                      function (t) {
                                          a.postMessage({ sourceName: i, targetName: n, stream: u, streamId: e, reason: wrapReason(t) });
                                      }
                                  );
                                  break;
                              case h:
                                  (0, s.assert)(g, "enqueue should have stream controller");
                                  if (g.isClosed) break;
                                  g.controller.enqueue(t.chunk);
                                  break;
                              case l:
                                  (0, s.assert)(g, "close should have stream controller");
                                  if (g.isClosed) break;
                                  g.isClosed = !0;
                                  g.controller.close();
                                  this.#pe(g, e);
                                  break;
                              case c:
                                  (0, s.assert)(g, "error should have stream controller");
                                  g.controller.error(wrapReason(t.reason));
                                  this.#pe(g, e);
                                  break;
                              case o:
                                  t.success ? g.cancelCall.resolve() : g.cancelCall.reject(wrapReason(t.reason));
                                  this.#pe(g, e);
                                  break;
                              case r:
                                  if (!m) break;
                                  new Promise(function (e) {
                                      e(m.onCancel?.(wrapReason(t.reason)));
                                  }).then(
                                      function () {
                                          a.postMessage({ sourceName: i, targetName: n, stream: o, streamId: e, success: !0 });
                                      },
                                      function (t) {
                                          a.postMessage({ sourceName: i, targetName: n, stream: o, streamId: e, reason: wrapReason(t) });
                                      }
                                  );
                                  m.sinkCapability.reject(wrapReason(t.reason));
                                  m.isCancelled = !0;
                                  delete this.streamSinks[e];
                                  break;
                              default:
                                  throw new Error("Unexpected stream case");
                          }
                      }
                      async #pe(t, e) {
                          await Promise.allSettled([t.startCall?.promise, t.pullCall?.promise, t.cancelCall?.promise]);
                          delete this.streamControllers[e];
                      }
                      destroy() {
                          this.comObj.removeEventListener("message", this._onComObjOnMessage);
                      }
                  };
              },
              (t, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 });
                  e.Metadata = void 0;
                  var s = i(1);
                  e.Metadata = class Metadata {
                      #ge;
                      #me;
                      constructor({ parsedData: t, rawData: e }) {
                          this.#ge = t;
                          this.#me = e;
                      }
                      getRaw() {
                          return this.#me;
                      }
                      get(t) {
                          return this.#ge.get(t) ?? null;
                      }
                      getAll() {
                          return (0, s.objectFromMap)(this.#ge);
                      }
                      has(t) {
                          return this.#ge.has(t);
                      }
                  };
              },
              (t, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 });
                  e.OptionalContentConfig = void 0;
                  var s = i(1),
                      n = i(8);
                  const a = Symbol("INTERNAL");
                  class OptionalContentGroup {
                      #fe = !0;
                      constructor(t, e) {
                          this.name = t;
                          this.intent = e;
                      }
                      get visible() {
                          return this.#fe;
                      }
                      _setVisible(t, e) {
                          t !== a && (0, s.unreachable)("Internal method `_setVisible` called.");
                          this.#fe = e;
                      }
                  }
                  e.OptionalContentConfig = class OptionalContentConfig {
                      #be = null;
                      #Ae = new Map();
                      #_e = null;
                      #ve = null;
                      constructor(t) {
                          this.name = null;
                          this.creator = null;
                          if (null !== t) {
                              this.name = t.name;
                              this.creator = t.creator;
                              this.#ve = t.order;
                              for (const e of t.groups) this.#Ae.set(e.id, new OptionalContentGroup(e.name, e.intent));
                              if ("OFF" === t.baseState) for (const t of this.#Ae.values()) t._setVisible(a, !1);
                              for (const e of t.on) this.#Ae.get(e)._setVisible(a, !0);
                              for (const e of t.off) this.#Ae.get(e)._setVisible(a, !1);
                              this.#_e = this.getHash();
                          }
                      }
                      #ye(t) {
                          const e = t.length;
                          if (e < 2) return !0;
                          const i = t[0];
                          for (let n = 1; n < e; n++) {
                              const e = t[n];
                              let a;
                              if (Array.isArray(e)) a = this.#ye(e);
                              else {
                                  if (!this.#Ae.has(e)) {
                                      (0, s.warn)(`Optional content group not found: ${e}`);
                                      return !0;
                                  }
                                  a = this.#Ae.get(e).visible;
                              }
                              switch (i) {
                                  case "And":
                                      if (!a) return !1;
                                      break;
                                  case "Or":
                                      if (a) return !0;
                                      break;
                                  case "Not":
                                      return !a;
                                  default:
                                      return !0;
                              }
                          }
                          return "And" === i;
                      }
                      isVisible(t) {
                          if (0 === this.#Ae.size) return !0;
                          if (!t) {
                              (0, s.warn)("Optional content group not defined.");
                              return !0;
                          }
                          if ("OCG" === t.type) {
                              if (!this.#Ae.has(t.id)) {
                                  (0, s.warn)(`Optional content group not found: ${t.id}`);
                                  return !0;
                              }
                              return this.#Ae.get(t.id).visible;
                          }
                          if ("OCMD" === t.type) {
                              if (t.expression) return this.#ye(t.expression);
                              if (!t.policy || "AnyOn" === t.policy) {
                                  for (const e of t.ids) {
                                      if (!this.#Ae.has(e)) {
                                          (0, s.warn)(`Optional content group not found: ${e}`);
                                          return !0;
                                      }
                                      if (this.#Ae.get(e).visible) return !0;
                                  }
                                  return !1;
                              }
                              if ("AllOn" === t.policy) {
                                  for (const e of t.ids) {
                                      if (!this.#Ae.has(e)) {
                                          (0, s.warn)(`Optional content group not found: ${e}`);
                                          return !0;
                                      }
                                      if (!this.#Ae.get(e).visible) return !1;
                                  }
                                  return !0;
                              }
                              if ("AnyOff" === t.policy) {
                                  for (const e of t.ids) {
                                      if (!this.#Ae.has(e)) {
                                          (0, s.warn)(`Optional content group not found: ${e}`);
                                          return !0;
                                      }
                                      if (!this.#Ae.get(e).visible) return !0;
                                  }
                                  return !1;
                              }
                              if ("AllOff" === t.policy) {
                                  for (const e of t.ids) {
                                      if (!this.#Ae.has(e)) {
                                          (0, s.warn)(`Optional content group not found: ${e}`);
                                          return !0;
                                      }
                                      if (this.#Ae.get(e).visible) return !1;
                                  }
                                  return !0;
                              }
                              (0, s.warn)(`Unknown optional content policy ${t.policy}.`);
                              return !0;
                          }
                          (0, s.warn)(`Unknown group type ${t.type}.`);
                          return !0;
                      }
                      setVisibility(t, e = !0) {
                          if (this.#Ae.has(t)) {
                              this.#Ae.get(t)._setVisible(a, !!e);
                              this.#be = null;
                          } else (0, s.warn)(`Optional content group not found: ${t}`);
                      }
                      get hasInitialVisibility() {
                          return null === this.#_e || this.getHash() === this.#_e;
                      }
                      getOrder() {
                          return this.#Ae.size ? (this.#ve ? this.#ve.slice() : [...this.#Ae.keys()]) : null;
                      }
                      getGroups() {
                          return this.#Ae.size > 0 ? (0, s.objectFromMap)(this.#Ae) : null;
                      }
                      getGroup(t) {
                          return this.#Ae.get(t) || null;
                      }
                      getHash() {
                          if (null !== this.#be) return this.#be;
                          const t = new n.MurmurHash3_64();
                          for (const [e, i] of this.#Ae) t.update(`${e}:${i.visible}`);
                          return (this.#be = t.hexdigest());
                      }
                  };
              },
              (t, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 });
                  e.PDFDataTransportStream = void 0;
                  var s = i(1),
                      n = i(6);
                  e.PDFDataTransportStream = class PDFDataTransportStream {
                      constructor({ length: t, initialData: e, progressiveDone: i = !1, contentDispositionFilename: n = null, disableRange: a = !1, disableStream: r = !1 }, o) {
                          (0, s.assert)(o, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
                          this._queuedChunks = [];
                          this._progressiveDone = i;
                          this._contentDispositionFilename = n;
                          if (e?.length > 0) {
                              const t = e instanceof Uint8Array && e.byteLength === e.buffer.byteLength ? e.buffer : new Uint8Array(e).buffer;
                              this._queuedChunks.push(t);
                          }
                          this._pdfDataRangeTransport = o;
                          this._isStreamingSupported = !r;
                          this._isRangeSupported = !a;
                          this._contentLength = t;
                          this._fullRequestReader = null;
                          this._rangeReaders = [];
                          this._pdfDataRangeTransport.addRangeListener((t, e) => {
                              this._onReceiveData({ begin: t, chunk: e });
                          });
                          this._pdfDataRangeTransport.addProgressListener((t, e) => {
                              this._onProgress({ loaded: t, total: e });
                          });
                          this._pdfDataRangeTransport.addProgressiveReadListener((t) => {
                              this._onReceiveData({ chunk: t });
                          });
                          this._pdfDataRangeTransport.addProgressiveDoneListener(() => {
                              this._onProgressiveDone();
                          });
                          this._pdfDataRangeTransport.transportReady();
                      }
                      _onReceiveData({ begin: t, chunk: e }) {
                          const i = e instanceof Uint8Array && e.byteLength === e.buffer.byteLength ? e.buffer : new Uint8Array(e).buffer;
                          if (void 0 === t) this._fullRequestReader ? this._fullRequestReader._enqueue(i) : this._queuedChunks.push(i);
                          else {
                              const e = this._rangeReaders.some(function (e) {
                                  if (e._begin !== t) return !1;
                                  e._enqueue(i);
                                  return !0;
                              });
                              (0, s.assert)(e, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
                          }
                      }
                      get _progressiveDataLength() {
                          return this._fullRequestReader?._loaded ?? 0;
                      }
                      _onProgress(t) {
                          void 0 === t.total ? this._rangeReaders[0]?.onProgress?.({ loaded: t.loaded }) : this._fullRequestReader?.onProgress?.({ loaded: t.loaded, total: t.total });
                      }
                      _onProgressiveDone() {
                          this._fullRequestReader?.progressiveDone();
                          this._progressiveDone = !0;
                      }
                      _removeRangeReader(t) {
                          const e = this._rangeReaders.indexOf(t);
                          e >= 0 && this._rangeReaders.splice(e, 1);
                      }
                      getFullReader() {
                          (0, s.assert)(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
                          const t = this._queuedChunks;
                          this._queuedChunks = null;
                          return new PDFDataTransportStreamReader(this, t, this._progressiveDone, this._contentDispositionFilename);
                      }
                      getRangeReader(t, e) {
                          if (e <= this._progressiveDataLength) return null;
                          const i = new PDFDataTransportStreamRangeReader(this, t, e);
                          this._pdfDataRangeTransport.requestDataRange(t, e);
                          this._rangeReaders.push(i);
                          return i;
                      }
                      cancelAllRequests(t) {
                          this._fullRequestReader?.cancel(t);
                          for (const e of this._rangeReaders.slice(0)) e.cancel(t);
                          this._pdfDataRangeTransport.abort();
                      }
                  };
                  class PDFDataTransportStreamReader {
                      constructor(t, e, i = !1, s = null) {
                          this._stream = t;
                          this._done = i || !1;
                          this._filename = (0, n.isPdfFile)(s) ? s : null;
                          this._queuedChunks = e || [];
                          this._loaded = 0;
                          for (const t of this._queuedChunks) this._loaded += t.byteLength;
                          this._requests = [];
                          this._headersReady = Promise.resolve();
                          t._fullRequestReader = this;
                          this.onProgress = null;
                      }
                      _enqueue(t) {
                          if (!this._done) {
                              if (this._requests.length > 0) {
                                  this._requests.shift().resolve({ value: t, done: !1 });
                              } else this._queuedChunks.push(t);
                              this._loaded += t.byteLength;
                          }
                      }
                      get headersReady() {
                          return this._headersReady;
                      }
                      get filename() {
                          return this._filename;
                      }
                      get isRangeSupported() {
                          return this._stream._isRangeSupported;
                      }
                      get isStreamingSupported() {
                          return this._stream._isStreamingSupported;
                      }
                      get contentLength() {
                          return this._stream._contentLength;
                      }
                      async read() {
                          if (this._queuedChunks.length > 0) {
                              return { value: this._queuedChunks.shift(), done: !1 };
                          }
                          if (this._done) return { value: void 0, done: !0 };
                          const t = new s.PromiseCapability();
                          this._requests.push(t);
                          return t.promise;
                      }
                      cancel(t) {
                          this._done = !0;
                          for (const t of this._requests) t.resolve({ value: void 0, done: !0 });
                          this._requests.length = 0;
                      }
                      progressiveDone() {
                          this._done || (this._done = !0);
                      }
                  }
                  class PDFDataTransportStreamRangeReader {
                      constructor(t, e, i) {
                          this._stream = t;
                          this._begin = e;
                          this._end = i;
                          this._queuedChunk = null;
                          this._requests = [];
                          this._done = !1;
                          this.onProgress = null;
                      }
                      _enqueue(t) {
                          if (!this._done) {
                              if (0 === this._requests.length) this._queuedChunk = t;
                              else {
                                  this._requests.shift().resolve({ value: t, done: !1 });
                                  for (const t of this._requests) t.resolve({ value: void 0, done: !0 });
                                  this._requests.length = 0;
                              }
                              this._done = !0;
                              this._stream._removeRangeReader(this);
                          }
                      }
                      get isStreamingSupported() {
                          return !1;
                      }
                      async read() {
                          if (this._queuedChunk) {
                              const t = this._queuedChunk;
                              this._queuedChunk = null;
                              return { value: t, done: !1 };
                          }
                          if (this._done) return { value: void 0, done: !0 };
                          const t = new s.PromiseCapability();
                          this._requests.push(t);
                          return t.promise;
                      }
                      cancel(t) {
                          this._done = !0;
                          for (const t of this._requests) t.resolve({ value: void 0, done: !0 });
                          this._requests.length = 0;
                          this._stream._removeRangeReader(this);
                      }
                  }
              },
              (t, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 });
                  e.PDFFetchStream = void 0;
                  var s = i(1),
                      n = i(20);
                  function createFetchOptions(t, e, i) {
                      return { method: "GET", headers: t, signal: i.signal, mode: "cors", credentials: e ? "include" : "same-origin", redirect: "follow" };
                  }
                  function createHeaders(t) {
                      const e = new Headers();
                      for (const i in t) {
                          const s = t[i];
                          void 0 !== s && e.append(i, s);
                      }
                      return e;
                  }
                  function getArrayBuffer(t) {
                      if (t instanceof Uint8Array) return t.buffer;
                      if (t instanceof ArrayBuffer) return t;
                      (0, s.warn)(`getArrayBuffer - unexpected data format: ${t}`);
                      return new Uint8Array(t).buffer;
                  }
                  e.PDFFetchStream = class PDFFetchStream {
                      constructor(t) {
                          this.source = t;
                          this.isHttp = /^https?:/i.test(t.url);
                          this.httpHeaders = (this.isHttp && t.httpHeaders) || {};
                          this._fullRequestReader = null;
                          this._rangeRequestReaders = [];
                      }
                      get _progressiveDataLength() {
                          return this._fullRequestReader?._loaded ?? 0;
                      }
                      getFullReader() {
                          (0, s.assert)(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once.");
                          this._fullRequestReader = new PDFFetchStreamReader(this);
                          return this._fullRequestReader;
                      }
                      getRangeReader(t, e) {
                          if (e <= this._progressiveDataLength) return null;
                          const i = new PDFFetchStreamRangeReader(this, t, e);
                          this._rangeRequestReaders.push(i);
                          return i;
                      }
                      cancelAllRequests(t) {
                          this._fullRequestReader?.cancel(t);
                          for (const e of this._rangeRequestReaders.slice(0)) e.cancel(t);
                      }
                  };
                  class PDFFetchStreamReader {
                      constructor(t) {
                          this._stream = t;
                          this._reader = null;
                          this._loaded = 0;
                          this._filename = null;
                          const e = t.source;
                          this._withCredentials = e.withCredentials || !1;
                          this._contentLength = e.length;
                          this._headersCapability = new s.PromiseCapability();
                          this._disableRange = e.disableRange || !1;
                          this._rangeChunkSize = e.rangeChunkSize;
                          this._rangeChunkSize || this._disableRange || (this._disableRange = !0);
                          this._abortController = new AbortController();
                          this._isStreamingSupported = !e.disableStream;
                          this._isRangeSupported = !e.disableRange;
                          this._headers = createHeaders(this._stream.httpHeaders);
                          const i = e.url;
                          fetch(i, createFetchOptions(this._headers, this._withCredentials, this._abortController))
                              .then((t) => {
                                  if (!(0, n.validateResponseStatus)(t.status)) throw (0, n.createResponseStatusError)(t.status, i);
                                  this._reader = t.body.getReader();
                                  this._headersCapability.resolve();
                                  const getResponseHeader = (e) => t.headers.get(e),
                                      { allowRangeRequests: e, suggestedLength: a } = (0, n.validateRangeRequestCapabilities)({
                                          getResponseHeader: getResponseHeader,
                                          isHttp: this._stream.isHttp,
                                          rangeChunkSize: this._rangeChunkSize,
                                          disableRange: this._disableRange,
                                      });
                                  this._isRangeSupported = e;
                                  this._contentLength = a || this._contentLength;
                                  this._filename = (0, n.extractFilenameFromHeader)(getResponseHeader);
                                  !this._isStreamingSupported && this._isRangeSupported && this.cancel(new s.AbortException("Streaming is disabled."));
                              })
                              .catch(this._headersCapability.reject);
                          this.onProgress = null;
                      }
                      get headersReady() {
                          return this._headersCapability.promise;
                      }
                      get filename() {
                          return this._filename;
                      }
                      get contentLength() {
                          return this._contentLength;
                      }
                      get isRangeSupported() {
                          return this._isRangeSupported;
                      }
                      get isStreamingSupported() {
                          return this._isStreamingSupported;
                      }
                      async read() {
                          await this._headersCapability.promise;
                          const { value: t, done: e } = await this._reader.read();
                          if (e) return { value: t, done: e };
                          this._loaded += t.byteLength;
                          this.onProgress?.({ loaded: this._loaded, total: this._contentLength });
                          return { value: getArrayBuffer(t), done: !1 };
                      }
                      cancel(t) {
                          this._reader?.cancel(t);
                          this._abortController.abort();
                      }
                  }
                  class PDFFetchStreamRangeReader {
                      constructor(t, e, i) {
                          this._stream = t;
                          this._reader = null;
                          this._loaded = 0;
                          const a = t.source;
                          this._withCredentials = a.withCredentials || !1;
                          this._readCapability = new s.PromiseCapability();
                          this._isStreamingSupported = !a.disableStream;
                          this._abortController = new AbortController();
                          this._headers = createHeaders(this._stream.httpHeaders);
                          this._headers.append("Range", `bytes=${e}-${i - 1}`);
                          const r = a.url;
                          fetch(r, createFetchOptions(this._headers, this._withCredentials, this._abortController))
                              .then((t) => {
                                  if (!(0, n.validateResponseStatus)(t.status)) throw (0, n.createResponseStatusError)(t.status, r);
                                  this._readCapability.resolve();
                                  this._reader = t.body.getReader();
                              })
                              .catch(this._readCapability.reject);
                          this.onProgress = null;
                      }
                      get isStreamingSupported() {
                          return this._isStreamingSupported;
                      }
                      async read() {
                          await this._readCapability.promise;
                          const { value: t, done: e } = await this._reader.read();
                          if (e) return { value: t, done: e };
                          this._loaded += t.byteLength;
                          this.onProgress?.({ loaded: this._loaded });
                          return { value: getArrayBuffer(t), done: !1 };
                      }
                      cancel(t) {
                          this._reader?.cancel(t);
                          this._abortController.abort();
                      }
                  }
              },
              (t, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 });
                  e.createResponseStatusError = function createResponseStatusError(t, e) {
                      if (404 === t || (0 === t && e.startsWith("file:"))) return new s.MissingPDFException('Missing PDF "' + e + '".');
                      return new s.UnexpectedResponseException(`Unexpected server response (${t}) while retrieving PDF "${e}".`, t);
                  };
                  e.extractFilenameFromHeader = function extractFilenameFromHeader(t) {
                      const e = t("Content-Disposition");
                      if (e) {
                          let t = (0, n.getFilenameFromContentDispositionHeader)(e);
                          if (t.includes("%"))
                              try {
                                  t = decodeURIComponent(t);
                              } catch {}
                          if ((0, a.isPdfFile)(t)) return t;
                      }
                      return null;
                  };
                  e.validateRangeRequestCapabilities = function validateRangeRequestCapabilities({ getResponseHeader: t, isHttp: e, rangeChunkSize: i, disableRange: s }) {
                      const n = { allowRangeRequests: !1, suggestedLength: void 0 },
                          a = parseInt(t("Content-Length"), 10);
                      if (!Number.isInteger(a)) return n;
                      n.suggestedLength = a;
                      if (a <= 2 * i) return n;
                      if (s || !e) return n;
                      if ("bytes" !== t("Accept-Ranges")) return n;
                      if ("identity" !== (t("Content-Encoding") || "identity")) return n;
                      n.allowRangeRequests = !0;
                      return n;
                  };
                  e.validateResponseStatus = function validateResponseStatus(t) {
                      return 200 === t || 206 === t;
                  };
                  var s = i(1),
                      n = i(21),
                      a = i(6);
              },
              (t, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 });
                  e.getFilenameFromContentDispositionHeader = function getFilenameFromContentDispositionHeader(t) {
                      let e = !0,
                          i = toParamRegExp("filename\\*", "i").exec(t);
                      if (i) {
                          i = i[1];
                          let t = rfc2616unquote(i);
                          t = unescape(t);
                          t = rfc5987decode(t);
                          t = rfc2047decode(t);
                          return fixupEncoding(t);
                      }
                      i = (function rfc2231getparam(t) {
                          const e = [];
                          let i;
                          const s = toParamRegExp("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
                          for (; null !== (i = s.exec(t)); ) {
                              let [, t, s, n] = i;
                              t = parseInt(t, 10);
                              if (t in e) {
                                  if (0 === t) break;
                              } else e[t] = [s, n];
                          }
                          const n = [];
                          for (let t = 0; t < e.length && t in e; ++t) {
                              let [i, s] = e[t];
                              s = rfc2616unquote(s);
                              if (i) {
                                  s = unescape(s);
                                  0 === t && (s = rfc5987decode(s));
                              }
                              n.push(s);
                          }
                          return n.join("");
                      })(t);
                      if (i) {
                          return fixupEncoding(rfc2047decode(i));
                      }
                      i = toParamRegExp("filename", "i").exec(t);
                      if (i) {
                          i = i[1];
                          let t = rfc2616unquote(i);
                          t = rfc2047decode(t);
                          return fixupEncoding(t);
                      }
                      function toParamRegExp(t, e) {
                          return new RegExp("(?:^|;)\\s*" + t + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', e);
                      }
                      function textdecode(t, i) {
                          if (t) {
                              if (!/^[\x00-\xFF]+$/.test(i)) return i;
                              try {
                                  const n = new TextDecoder(t, { fatal: !0 }),
                                      a = (0, s.stringToBytes)(i);
                                  i = n.decode(a);
                                  e = !1;
                              } catch {}
                          }
                          return i;
                      }
                      function fixupEncoding(t) {
                          if (e && /[\x80-\xff]/.test(t)) {
                              t = textdecode("utf-8", t);
                              e && (t = textdecode("iso-8859-1", t));
                          }
                          return t;
                      }
                      function rfc2616unquote(t) {
                          if (t.startsWith('"')) {
                              const e = t.slice(1).split('\\"');
                              for (let t = 0; t < e.length; ++t) {
                                  const i = e[t].indexOf('"');
                                  if (-1 !== i) {
                                      e[t] = e[t].slice(0, i);
                                      e.length = t + 1;
                                  }
                                  e[t] = e[t].replaceAll(/\\(.)/g, "$1");
                              }
                              t = e.join('"');
                          }
                          return t;
                      }
                      function rfc5987decode(t) {
                          const e = t.indexOf("'");
                          if (-1 === e) return t;
                          return textdecode(t.slice(0, e), t.slice(e + 1).replace(/^[^']*'/, ""));
                      }
                      function rfc2047decode(t) {
                          return !t.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(t)
                              ? t
                              : t.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function (t, e, i, s) {
                                    if ("q" === i || "Q" === i)
                                        return textdecode(
                                            e,
                                            (s = (s = s.replaceAll("_", " ")).replaceAll(/=([0-9a-fA-F]{2})/g, function (t, e) {
                                                return String.fromCharCode(parseInt(e, 16));
                                            }))
                                        );
                                    try {
                                        s = atob(s);
                                    } catch {}
                                    return textdecode(e, s);
                                });
                      }
                      return "";
                  };
                  var s = i(1);
              },
              (t, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 });
                  e.PDFNetworkStream = void 0;
                  var s = i(1),
                      n = i(20);
                  class NetworkManager {
                      constructor(t, e = {}) {
                          this.url = t;
                          this.isHttp = /^https?:/i.test(t);
                          this.httpHeaders = (this.isHttp && e.httpHeaders) || Object.create(null);
                          this.withCredentials = e.withCredentials || !1;
                          this.currXhrId = 0;
                          this.pendingRequests = Object.create(null);
                      }
                      requestRange(t, e, i) {
                          const s = { begin: t, end: e };
                          for (const t in i) s[t] = i[t];
                          return this.request(s);
                      }
                      requestFull(t) {
                          return this.request(t);
                      }
                      request(t) {
                          const e = new XMLHttpRequest(),
                              i = this.currXhrId++,
                              s = (this.pendingRequests[i] = { xhr: e });
                          e.open("GET", this.url);
                          e.withCredentials = this.withCredentials;
                          for (const t in this.httpHeaders) {
                              const i = this.httpHeaders[t];
                              void 0 !== i && e.setRequestHeader(t, i);
                          }
                          if (this.isHttp && "begin" in t && "end" in t) {
                              e.setRequestHeader("Range", `bytes=${t.begin}-${t.end - 1}`);
                              s.expectedStatus = 206;
                          } else s.expectedStatus = 200;
                          e.responseType = "arraybuffer";
                          t.onError &&
                              (e.onerror = function (i) {
                                  t.onError(e.status);
                              });
                          e.onreadystatechange = this.onStateChange.bind(this, i);
                          e.onprogress = this.onProgress.bind(this, i);
                          s.onHeadersReceived = t.onHeadersReceived;
                          s.onDone = t.onDone;
                          s.onError = t.onError;
                          s.onProgress = t.onProgress;
                          e.send(null);
                          return i;
                      }
                      onProgress(t, e) {
                          const i = this.pendingRequests[t];
                          i && i.onProgress?.(e);
                      }
                      onStateChange(t, e) {
                          const i = this.pendingRequests[t];
                          if (!i) return;
                          const n = i.xhr;
                          if (n.readyState >= 2 && i.onHeadersReceived) {
                              i.onHeadersReceived();
                              delete i.onHeadersReceived;
                          }
                          if (4 !== n.readyState) return;
                          if (!(t in this.pendingRequests)) return;
                          delete this.pendingRequests[t];
                          if (0 === n.status && this.isHttp) {
                              i.onError?.(n.status);
                              return;
                          }
                          const a = n.status || 200;
                          if (!(200 === a && 206 === i.expectedStatus) && a !== i.expectedStatus) {
                              i.onError?.(n.status);
                              return;
                          }
                          const r = (function getArrayBuffer(t) {
                              const e = t.response;
                              return "string" != typeof e ? e : (0, s.stringToBytes)(e).buffer;
                          })(n);
                          if (206 === a) {
                              const t = n.getResponseHeader("Content-Range"),
                                  e = /bytes (\d+)-(\d+)\/(\d+)/.exec(t);
                              i.onDone({ begin: parseInt(e[1], 10), chunk: r });
                          } else r ? i.onDone({ begin: 0, chunk: r }) : i.onError?.(n.status);
                      }
                      getRequestXhr(t) {
                          return this.pendingRequests[t].xhr;
                      }
                      isPendingRequest(t) {
                          return t in this.pendingRequests;
                      }
                      abortRequest(t) {
                          const e = this.pendingRequests[t].xhr;
                          delete this.pendingRequests[t];
                          e.abort();
                      }
                  }
                  e.PDFNetworkStream = class PDFNetworkStream {
                      constructor(t) {
                          this._source = t;
                          this._manager = new NetworkManager(t.url, { httpHeaders: t.httpHeaders, withCredentials: t.withCredentials });
                          this._rangeChunkSize = t.rangeChunkSize;
                          this._fullRequestReader = null;
                          this._rangeRequestReaders = [];
                      }
                      _onRangeRequestReaderClosed(t) {
                          const e = this._rangeRequestReaders.indexOf(t);
                          e >= 0 && this._rangeRequestReaders.splice(e, 1);
                      }
                      getFullReader() {
                          (0, s.assert)(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once.");
                          this._fullRequestReader = new PDFNetworkStreamFullRequestReader(this._manager, this._source);
                          return this._fullRequestReader;
                      }
                      getRangeReader(t, e) {
                          const i = new PDFNetworkStreamRangeRequestReader(this._manager, t, e);
                          i.onClosed = this._onRangeRequestReaderClosed.bind(this);
                          this._rangeRequestReaders.push(i);
                          return i;
                      }
                      cancelAllRequests(t) {
                          this._fullRequestReader?.cancel(t);
                          for (const e of this._rangeRequestReaders.slice(0)) e.cancel(t);
                      }
                  };
                  class PDFNetworkStreamFullRequestReader {
                      constructor(t, e) {
                          this._manager = t;
                          const i = { onHeadersReceived: this._onHeadersReceived.bind(this), onDone: this._onDone.bind(this), onError: this._onError.bind(this), onProgress: this._onProgress.bind(this) };
                          this._url = e.url;
                          this._fullRequestId = t.requestFull(i);
                          this._headersReceivedCapability = new s.PromiseCapability();
                          this._disableRange = e.disableRange || !1;
                          this._contentLength = e.length;
                          this._rangeChunkSize = e.rangeChunkSize;
                          this._rangeChunkSize || this._disableRange || (this._disableRange = !0);
                          this._isStreamingSupported = !1;
                          this._isRangeSupported = !1;
                          this._cachedChunks = [];
                          this._requests = [];
                          this._done = !1;
                          this._storedError = void 0;
                          this._filename = null;
                          this.onProgress = null;
                      }
                      _onHeadersReceived() {
                          const t = this._fullRequestId,
                              e = this._manager.getRequestXhr(t),
                              getResponseHeader = (t) => e.getResponseHeader(t),
                              { allowRangeRequests: i, suggestedLength: s } = (0, n.validateRangeRequestCapabilities)({
                                  getResponseHeader: getResponseHeader,
                                  isHttp: this._manager.isHttp,
                                  rangeChunkSize: this._rangeChunkSize,
                                  disableRange: this._disableRange,
                              });
                          i && (this._isRangeSupported = !0);
                          this._contentLength = s || this._contentLength;
                          this._filename = (0, n.extractFilenameFromHeader)(getResponseHeader);
                          this._isRangeSupported && this._manager.abortRequest(t);
                          this._headersReceivedCapability.resolve();
                      }
                      _onDone(t) {
                          if (t)
                              if (this._requests.length > 0) {
                                  this._requests.shift().resolve({ value: t.chunk, done: !1 });
                              } else this._cachedChunks.push(t.chunk);
                          this._done = !0;
                          if (!(this._cachedChunks.length > 0)) {
                              for (const t of this._requests) t.resolve({ value: void 0, done: !0 });
                              this._requests.length = 0;
                          }
                      }
                      _onError(t) {
                          this._storedError = (0, n.createResponseStatusError)(t, this._url);
                          this._headersReceivedCapability.reject(this._storedError);
                          for (const t of this._requests) t.reject(this._storedError);
                          this._requests.length = 0;
                          this._cachedChunks.length = 0;
                      }
                      _onProgress(t) {
                          this.onProgress?.({ loaded: t.loaded, total: t.lengthComputable ? t.total : this._contentLength });
                      }
                      get filename() {
                          return this._filename;
                      }
                      get isRangeSupported() {
                          return this._isRangeSupported;
                      }
                      get isStreamingSupported() {
                          return this._isStreamingSupported;
                      }
                      get contentLength() {
                          return this._contentLength;
                      }
                      get headersReady() {
                          return this._headersReceivedCapability.promise;
                      }
                      async read() {
                          if (this._storedError) throw this._storedError;
                          if (this._cachedChunks.length > 0) {
                              return { value: this._cachedChunks.shift(), done: !1 };
                          }
                          if (this._done) return { value: void 0, done: !0 };
                          const t = new s.PromiseCapability();
                          this._requests.push(t);
                          return t.promise;
                      }
                      cancel(t) {
                          this._done = !0;
                          this._headersReceivedCapability.reject(t);
                          for (const t of this._requests) t.resolve({ value: void 0, done: !0 });
                          this._requests.length = 0;
                          this._manager.isPendingRequest(this._fullRequestId) && this._manager.abortRequest(this._fullRequestId);
                          this._fullRequestReader = null;
                      }
                  }
                  class PDFNetworkStreamRangeRequestReader {
                      constructor(t, e, i) {
                          this._manager = t;
                          const s = { onDone: this._onDone.bind(this), onError: this._onError.bind(this), onProgress: this._onProgress.bind(this) };
                          this._url = t.url;
                          this._requestId = t.requestRange(e, i, s);
                          this._requests = [];
                          this._queuedChunk = null;
                          this._done = !1;
                          this._storedError = void 0;
                          this.onProgress = null;
                          this.onClosed = null;
                      }
                      _close() {
                          this.onClosed?.(this);
                      }
                      _onDone(t) {
                          const e = t.chunk;
                          if (this._requests.length > 0) {
                              this._requests.shift().resolve({ value: e, done: !1 });
                          } else this._queuedChunk = e;
                          this._done = !0;
                          for (const t of this._requests) t.resolve({ value: void 0, done: !0 });
                          this._requests.length = 0;
                          this._close();
                      }
                      _onError(t) {
                          this._storedError = (0, n.createResponseStatusError)(t, this._url);
                          for (const t of this._requests) t.reject(this._storedError);
                          this._requests.length = 0;
                          this._queuedChunk = null;
                      }
                      _onProgress(t) {
                          this.isStreamingSupported || this.onProgress?.({ loaded: t.loaded });
                      }
                      get isStreamingSupported() {
                          return !1;
                      }
                      async read() {
                          if (this._storedError) throw this._storedError;
                          if (null !== this._queuedChunk) {
                              const t = this._queuedChunk;
                              this._queuedChunk = null;
                              return { value: t, done: !1 };
                          }
                          if (this._done) return { value: void 0, done: !0 };
                          const t = new s.PromiseCapability();
                          this._requests.push(t);
                          return t.promise;
                      }
                      cancel(t) {
                          this._done = !0;
                          for (const t of this._requests) t.resolve({ value: void 0, done: !0 });
                          this._requests.length = 0;
                          this._manager.isPendingRequest(this._requestId) && this._manager.abortRequest(this._requestId);
                          this._close();
                      }
                  }
              },
              (t, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 });
                  e.PDFNodeStream = void 0;
                  var s = i(1),
                      n = i(20);
                  const a = /^file:\/\/\/[a-zA-Z]:\//;
                  e.PDFNodeStream = class PDFNodeStream {
                      constructor(t) {
                          this.source = t;
                          this.url = (function parseUrl(t) {
                              const e = require("url"),
                                  i = e.parse(t);
                              if ("file:" === i.protocol || i.host) return i;
                              if (/^[a-z]:[/\\]/i.test(t)) return e.parse(`file:///${t}`);
                              i.host || (i.protocol = "file:");
                              return i;
                          })(t.url);
                          this.isHttp = "http:" === this.url.protocol || "https:" === this.url.protocol;
                          this.isFsUrl = "file:" === this.url.protocol;
                          this.httpHeaders = (this.isHttp && t.httpHeaders) || {};
                          this._fullRequestReader = null;
                          this._rangeRequestReaders = [];
                      }
                      get _progressiveDataLength() {
                          return this._fullRequestReader?._loaded ?? 0;
                      }
                      getFullReader() {
                          (0, s.assert)(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once.");
                          this._fullRequestReader = this.isFsUrl ? new PDFNodeStreamFsFullReader(this) : new PDFNodeStreamFullReader(this);
                          return this._fullRequestReader;
                      }
                      getRangeReader(t, e) {
                          if (e <= this._progressiveDataLength) return null;
                          const i = this.isFsUrl ? new PDFNodeStreamFsRangeReader(this, t, e) : new PDFNodeStreamRangeReader(this, t, e);
                          this._rangeRequestReaders.push(i);
                          return i;
                      }
                      cancelAllRequests(t) {
                          this._fullRequestReader?.cancel(t);
                          for (const e of this._rangeRequestReaders.slice(0)) e.cancel(t);
                      }
                  };
                  class BaseFullReader {
                      constructor(t) {
                          this._url = t.url;
                          this._done = !1;
                          this._storedError = null;
                          this.onProgress = null;
                          const e = t.source;
                          this._contentLength = e.length;
                          this._loaded = 0;
                          this._filename = null;
                          this._disableRange = e.disableRange || !1;
                          this._rangeChunkSize = e.rangeChunkSize;
                          this._rangeChunkSize || this._disableRange || (this._disableRange = !0);
                          this._isStreamingSupported = !e.disableStream;
                          this._isRangeSupported = !e.disableRange;
                          this._readableStream = null;
                          this._readCapability = new s.PromiseCapability();
                          this._headersCapability = new s.PromiseCapability();
                      }
                      get headersReady() {
                          return this._headersCapability.promise;
                      }
                      get filename() {
                          return this._filename;
                      }
                      get contentLength() {
                          return this._contentLength;
                      }
                      get isRangeSupported() {
                          return this._isRangeSupported;
                      }
                      get isStreamingSupported() {
                          return this._isStreamingSupported;
                      }
                      async read() {
                          await this._readCapability.promise;
                          if (this._done) return { value: void 0, done: !0 };
                          if (this._storedError) throw this._storedError;
                          const t = this._readableStream.read();
                          if (null === t) {
                              this._readCapability = new s.PromiseCapability();
                              return this.read();
                          }
                          this._loaded += t.length;
                          this.onProgress?.({ loaded: this._loaded, total: this._contentLength });
                          return { value: new Uint8Array(t).buffer, done: !1 };
                      }
                      cancel(t) {
                          this._readableStream ? this._readableStream.destroy(t) : this._error(t);
                      }
                      _error(t) {
                          this._storedError = t;
                          this._readCapability.resolve();
                      }
                      _setReadableStream(t) {
                          this._readableStream = t;
                          t.on("readable", () => {
                              this._readCapability.resolve();
                          });
                          t.on("end", () => {
                              t.destroy();
                              this._done = !0;
                              this._readCapability.resolve();
                          });
                          t.on("error", (t) => {
                              this._error(t);
                          });
                          !this._isStreamingSupported && this._isRangeSupported && this._error(new s.AbortException("streaming is disabled"));
                          this._storedError && this._readableStream.destroy(this._storedError);
                      }
                  }
                  class BaseRangeReader {
                      constructor(t) {
                          this._url = t.url;
                          this._done = !1;
                          this._storedError = null;
                          this.onProgress = null;
                          this._loaded = 0;
                          this._readableStream = null;
                          this._readCapability = new s.PromiseCapability();
                          const e = t.source;
                          this._isStreamingSupported = !e.disableStream;
                      }
                      get isStreamingSupported() {
                          return this._isStreamingSupported;
                      }
                      async read() {
                          await this._readCapability.promise;
                          if (this._done) return { value: void 0, done: !0 };
                          if (this._storedError) throw this._storedError;
                          const t = this._readableStream.read();
                          if (null === t) {
                              this._readCapability = new s.PromiseCapability();
                              return this.read();
                          }
                          this._loaded += t.length;
                          this.onProgress?.({ loaded: this._loaded });
                          return { value: new Uint8Array(t).buffer, done: !1 };
                      }
                      cancel(t) {
                          this._readableStream ? this._readableStream.destroy(t) : this._error(t);
                      }
                      _error(t) {
                          this._storedError = t;
                          this._readCapability.resolve();
                      }
                      _setReadableStream(t) {
                          this._readableStream = t;
                          t.on("readable", () => {
                              this._readCapability.resolve();
                          });
                          t.on("end", () => {
                              t.destroy();
                              this._done = !0;
                              this._readCapability.resolve();
                          });
                          t.on("error", (t) => {
                              this._error(t);
                          });
                          this._storedError && this._readableStream.destroy(this._storedError);
                      }
                  }
                  function createRequestOptions(t, e) {
                      return { protocol: t.protocol, auth: t.auth, host: t.hostname, port: t.port, path: t.path, method: "GET", headers: e };
                  }
                  class PDFNodeStreamFullReader extends BaseFullReader {
                      constructor(t) {
                          super(t);
                          const handleResponse = (e) => {
                              if (404 === e.statusCode) {
                                  const t = new s.MissingPDFException(`Missing PDF "${this._url}".`);
                                  this._storedError = t;
                                  this._headersCapability.reject(t);
                                  return;
                              }
                              this._headersCapability.resolve();
                              this._setReadableStream(e);
                              const getResponseHeader = (t) => this._readableStream.headers[t.toLowerCase()],
                                  { allowRangeRequests: i, suggestedLength: a } = (0, n.validateRangeRequestCapabilities)({
                                      getResponseHeader: getResponseHeader,
                                      isHttp: t.isHttp,
                                      rangeChunkSize: this._rangeChunkSize,
                                      disableRange: this._disableRange,
                                  });
                              this._isRangeSupported = i;
                              this._contentLength = a || this._contentLength;
                              this._filename = (0, n.extractFilenameFromHeader)(getResponseHeader);
                          };
                          this._request = null;
                          if ("http:" === this._url.protocol) {
                              const e = require("http");
                              this._request = e.request(createRequestOptions(this._url, t.httpHeaders), handleResponse);
                          } else {
                              const e = require("https");
                              this._request = e.request(createRequestOptions(this._url, t.httpHeaders), handleResponse);
                          }
                          this._request.on("error", (t) => {
                              this._storedError = t;
                              this._headersCapability.reject(t);
                          });
                          this._request.end();
                      }
                  }
                  class PDFNodeStreamRangeReader extends BaseRangeReader {
                      constructor(t, e, i) {
                          super(t);
                          this._httpHeaders = {};
                          for (const e in t.httpHeaders) {
                              const i = t.httpHeaders[e];
                              void 0 !== i && (this._httpHeaders[e] = i);
                          }
                          this._httpHeaders.Range = `bytes=${e}-${i - 1}`;
                          const handleResponse = (t) => {
                              if (404 !== t.statusCode) this._setReadableStream(t);
                              else {
                                  const t = new s.MissingPDFException(`Missing PDF "${this._url}".`);
                                  this._storedError = t;
                              }
                          };
                          this._request = null;
                          if ("http:" === this._url.protocol) {
                              const t = require("http");
                              this._request = t.request(createRequestOptions(this._url, this._httpHeaders), handleResponse);
                          } else {
                              const t = require("https");
                              this._request = t.request(createRequestOptions(this._url, this._httpHeaders), handleResponse);
                          }
                          this._request.on("error", (t) => {
                              this._storedError = t;
                          });
                          this._request.end();
                      }
                  }
                  class PDFNodeStreamFsFullReader extends BaseFullReader {
                      constructor(t) {
                          super(t);
                          let e = decodeURIComponent(this._url.path);
                          a.test(this._url.href) && (e = e.replace(/^\//, ""));
                          const i = require("fs");
                          i.lstat(e, (t, n) => {
                              if (t) {
                                  "ENOENT" === t.code && (t = new s.MissingPDFException(`Missing PDF "${e}".`));
                                  this._storedError = t;
                                  this._headersCapability.reject(t);
                              } else {
                                  this._contentLength = n.size;
                                  this._setReadableStream(i.createReadStream(e));
                                  this._headersCapability.resolve();
                              }
                          });
                      }
                  }
                  class PDFNodeStreamFsRangeReader extends BaseRangeReader {
                      constructor(t, e, i) {
                          super(t);
                          let s = decodeURIComponent(this._url.path);
                          a.test(this._url.href) && (s = s.replace(/^\//, ""));
                          const n = require("fs");
                          this._setReadableStream(n.createReadStream(s, { start: e, end: i - 1 }));
                      }
                  }
              },
              (t, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 });
                  e.SVGGraphics = void 0;
                  var s = i(6),
                      n = i(1);
                  const a = "normal",
                      r = "normal",
                      o = "#000000",
                      l = ["butt", "round", "square"],
                      h = ["miter", "round", "bevel"],
                      createObjectURL = function (t, e = "", i = !1) {
                          if (URL.createObjectURL && "undefined" != typeof Blob && !i) return URL.createObjectURL(new Blob([t], { type: e }));
                          const s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                          let n = `data:${e};base64,`;
                          for (let e = 0, i = t.length; e < i; e += 3) {
                              const a = 255 & t[e],
                                  r = 255 & t[e + 1],
                                  o = 255 & t[e + 2];
                              n += s[a >> 2] + s[((3 & a) << 4) | (r >> 4)] + s[e + 1 < i ? ((15 & r) << 2) | (o >> 6) : 64] + s[e + 2 < i ? 63 & o : 64];
                          }
                          return n;
                      },
                      c = (function () {
                          const t = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]),
                              e = new Int32Array(256);
                          for (let t = 0; t < 256; t++) {
                              let i = t;
                              for (let t = 0; t < 8; t++) i = 1 & i ? 3988292384 ^ ((i >> 1) & 2147483647) : (i >> 1) & 2147483647;
                              e[t] = i;
                          }
                          function writePngChunk(t, i, s, n) {
                              let a = n;
                              const r = i.length;
                              s[a] = (r >> 24) & 255;
                              s[a + 1] = (r >> 16) & 255;
                              s[a + 2] = (r >> 8) & 255;
                              s[a + 3] = 255 & r;
                              a += 4;
                              s[a] = 255 & t.charCodeAt(0);
                              s[a + 1] = 255 & t.charCodeAt(1);
                              s[a + 2] = 255 & t.charCodeAt(2);
                              s[a + 3] = 255 & t.charCodeAt(3);
                              a += 4;
                              s.set(i, a);
                              a += i.length;
                              const o = (function crc32(t, i, s) {
                                  let n = -1;
                                  for (let a = i; a < s; a++) {
                                      const i = 255 & (n ^ t[a]);
                                      n = (n >>> 8) ^ e[i];
                                  }
                                  return -1 ^ n;
                              })(s, n + 4, a);
                              s[a] = (o >> 24) & 255;
                              s[a + 1] = (o >> 16) & 255;
                              s[a + 2] = (o >> 8) & 255;
                              s[a + 3] = 255 & o;
                          }
                          function deflateSyncUncompressed(t) {
                              let e = t.length;
                              const i = 65535,
                                  s = Math.ceil(e / i),
                                  n = new Uint8Array(2 + e + 5 * s + 4);
                              let a = 0;
                              n[a++] = 120;
                              n[a++] = 156;
                              let r = 0;
                              for (; e > i; ) {
                                  n[a++] = 0;
                                  n[a++] = 255;
                                  n[a++] = 255;
                                  n[a++] = 0;
                                  n[a++] = 0;
                                  n.set(t.subarray(r, r + i), a);
                                  a += i;
                                  r += i;
                                  e -= i;
                              }
                              n[a++] = 1;
                              n[a++] = 255 & e;
                              n[a++] = (e >> 8) & 255;
                              n[a++] = 255 & ~e;
                              n[a++] = ((65535 & ~e) >> 8) & 255;
                              n.set(t.subarray(r), a);
                              a += t.length - r;
                              const o = (function adler32(t, e, i) {
                                  let s = 1,
                                      n = 0;
                                  for (let a = e; a < i; ++a) {
                                      s = (s + (255 & t[a])) % 65521;
                                      n = (n + s) % 65521;
                                  }
                                  return (n << 16) | s;
                              })(t, 0, t.length);
                              n[a++] = (o >> 24) & 255;
                              n[a++] = (o >> 16) & 255;
                              n[a++] = (o >> 8) & 255;
                              n[a++] = 255 & o;
                              return n;
                          }
                          function encode(e, i, s, a) {
                              const r = e.width,
                                  o = e.height;
                              let l, h, c;
                              const d = e.data;
                              switch (i) {
                                  case n.ImageKind.GRAYSCALE_1BPP:
                                      h = 0;
                                      l = 1;
                                      c = (r + 7) >> 3;
                                      break;
                                  case n.ImageKind.RGB_24BPP:
                                      h = 2;
                                      l = 8;
                                      c = 3 * r;
                                      break;
                                  case n.ImageKind.RGBA_32BPP:
                                      h = 6;
                                      l = 8;
                                      c = 4 * r;
                                      break;
                                  default:
                                      throw new Error("invalid format");
                              }
                              const u = new Uint8Array((1 + c) * o);
                              let p = 0,
                                  g = 0;
                              for (let t = 0; t < o; ++t) {
                                  u[p++] = 0;
                                  u.set(d.subarray(g, g + c), p);
                                  g += c;
                                  p += c;
                              }
                              if (i === n.ImageKind.GRAYSCALE_1BPP && a) {
                                  p = 0;
                                  for (let t = 0; t < o; t++) {
                                      p++;
                                      for (let t = 0; t < c; t++) u[p++] ^= 255;
                                  }
                              }
                              const m = new Uint8Array([(r >> 24) & 255, (r >> 16) & 255, (r >> 8) & 255, 255 & r, (o >> 24) & 255, (o >> 16) & 255, (o >> 8) & 255, 255 & o, l, h, 0, 0, 0]),
                                  f = (function deflateSync(t) {
                                      if (!n.isNodeJS) return deflateSyncUncompressed(t);
                                      try {
                                          const e = parseInt(process.versions.node) >= 8 ? t : Buffer.from(t),
                                              i = require("zlib").deflateSync(e, { level: 9 });
                                          return i instanceof Uint8Array ? i : new Uint8Array(i);
                                      } catch (t) {
                                          (0, n.warn)("Not compressing PNG because zlib.deflateSync is unavailable: " + t);
                                      }
                                      return deflateSyncUncompressed(t);
                                  })(u),
                                  b = t.length + 36 + m.length + f.length,
                                  A = new Uint8Array(b);
                              let _ = 0;
                              A.set(t, _);
                              _ += t.length;
                              writePngChunk("IHDR", m, A, _);
                              _ += 12 + m.length;
                              writePngChunk("IDATA", f, A, _);
                              _ += 12 + f.length;
                              writePngChunk("IEND", new Uint8Array(0), A, _);
                              return createObjectURL(A, "image/png", s);
                          }
                          return function convertImgDataToPng(t, e, i) {
                              return encode(t, void 0 === t.kind ? n.ImageKind.GRAYSCALE_1BPP : t.kind, e, i);
                          };
                      })();
                  class SVGExtraState {
                      constructor() {
                          this.fontSizeScale = 1;
                          this.fontWeight = r;
                          this.fontSize = 0;
                          this.textMatrix = n.IDENTITY_MATRIX;
                          this.fontMatrix = n.FONT_IDENTITY_MATRIX;
                          this.leading = 0;
                          this.textRenderingMode = n.TextRenderingMode.FILL;
                          this.textMatrixScale = 1;
                          this.x = 0;
                          this.y = 0;
                          this.lineX = 0;
                          this.lineY = 0;
                          this.charSpacing = 0;
                          this.wordSpacing = 0;
                          this.textHScale = 1;
                          this.textRise = 0;
                          this.fillColor = o;
                          this.strokeColor = "#000000";
                          this.fillAlpha = 1;
                          this.strokeAlpha = 1;
                          this.lineWidth = 1;
                          this.lineJoin = "";
                          this.lineCap = "";
                          this.miterLimit = 0;
                          this.dashArray = [];
                          this.dashPhase = 0;
                          this.dependencies = [];
                          this.activeClipUrl = null;
                          this.clipGroup = null;
                          this.maskId = "";
                      }
                      clone() {
                          return Object.create(this);
                      }
                      setCurrentPoint(t, e) {
                          this.x = t;
                          this.y = e;
                      }
                  }
                  function pf(t) {
                      if (Number.isInteger(t)) return t.toString();
                      const e = t.toFixed(10);
                      let i = e.length - 1;
                      if ("0" !== e[i]) return e;
                      do {
                          i--;
                      } while ("0" === e[i]);
                      return e.substring(0, "." === e[i] ? i : i + 1);
                  }
                  function pm(t) {
                      if (0 === t[4] && 0 === t[5]) {
                          if (0 === t[1] && 0 === t[2]) return 1 === t[0] && 1 === t[3] ? "" : `scale(${pf(t[0])} ${pf(t[3])})`;
                          if (t[0] === t[3] && t[1] === -t[2]) {
                              return `rotate(${pf((180 * Math.acos(t[0])) / Math.PI)})`;
                          }
                      } else if (1 === t[0] && 0 === t[1] && 0 === t[2] && 1 === t[3]) return `translate(${pf(t[4])} ${pf(t[5])})`;
                      return `matrix(${pf(t[0])} ${pf(t[1])} ${pf(t[2])} ${pf(t[3])} ${pf(t[4])} ${pf(t[5])})`;
                  }
                  let d = 0,
                      u = 0,
                      p = 0;
                  e.SVGGraphics = class SVGGraphics {
                      constructor(t, e, i = !1) {
                          (0, s.deprecated)("The SVG back-end is no longer maintained and *may* be removed in the future.");
                          this.svgFactory = new s.DOMSVGFactory();
                          this.current = new SVGExtraState();
                          this.transformMatrix = n.IDENTITY_MATRIX;
                          this.transformStack = [];
                          this.extraStack = [];
                          this.commonObjs = t;
                          this.objs = e;
                          this.pendingClip = null;
                          this.pendingEOFill = !1;
                          this.embedFonts = !1;
                          this.embeddedFonts = Object.create(null);
                          this.cssStyle = null;
                          this.forceDataSchema = !!i;
                          this._operatorIdMapping = [];
                          for (const t in n.OPS) this._operatorIdMapping[n.OPS[t]] = t;
                      }
                      getObject(t, e = null) {
                          return "string" == typeof t ? (t.startsWith("g_") ? this.commonObjs.get(t) : this.objs.get(t)) : e;
                      }
                      save() {
                          this.transformStack.push(this.transformMatrix);
                          const t = this.current;
                          this.extraStack.push(t);
                          this.current = t.clone();
                      }
                      restore() {
                          this.transformMatrix = this.transformStack.pop();
                          this.current = this.extraStack.pop();
                          this.pendingClip = null;
                          this.tgrp = null;
                      }
                      group(t) {
                          this.save();
                          this.executeOpTree(t);
                          this.restore();
                      }
                      loadDependencies(t) {
                          const e = t.fnArray,
                              i = t.argsArray;
                          for (let t = 0, s = e.length; t < s; t++)
                              if (e[t] === n.OPS.dependency)
                                  for (const e of i[t]) {
                                      const t = e.startsWith("g_") ? this.commonObjs : this.objs,
                                          i = new Promise((i) => {
                                              t.get(e, i);
                                          });
                                      this.current.dependencies.push(i);
                                  }
                          return Promise.all(this.current.dependencies);
                      }
                      transform(t, e, i, s, a, r) {
                          const o = [t, e, i, s, a, r];
                          this.transformMatrix = n.Util.transform(this.transformMatrix, o);
                          this.tgrp = null;
                      }
                      getSVG(t, e) {
                          this.viewport = e;
                          const i = this._initialize(e);
                          return this.loadDependencies(t).then(() => {
                              this.transformMatrix = n.IDENTITY_MATRIX;
                              this.executeOpTree(this.convertOpList(t));
                              return i;
                          });
                      }
                      convertOpList(t) {
                          const e = this._operatorIdMapping,
                              i = t.argsArray,
                              s = t.fnArray,
                              n = [];
                          for (let t = 0, a = s.length; t < a; t++) {
                              const a = s[t];
                              n.push({ fnId: a, fn: e[a], args: i[t] });
                          }
                          return (function opListToTree(t) {
                              let e = [];
                              const i = [];
                              for (const s of t)
                                  if ("save" !== s.fn) "restore" === s.fn ? (e = i.pop()) : e.push(s);
                                  else {
                                      e.push({ fnId: 92, fn: "group", items: [] });
                                      i.push(e);
                                      e = e.at(-1).items;
                                  }
                              return e;
                          })(n);
                      }
                      executeOpTree(t) {
                          for (const e of t) {
                              const t = e.fn,
                                  i = e.fnId,
                                  s = e.args;
                              switch (0 | i) {
                                  case n.OPS.beginText:
                                      this.beginText();
                                      break;
                                  case n.OPS.dependency:
                                      break;
                                  case n.OPS.setLeading:
                                      this.setLeading(s);
                                      break;
                                  case n.OPS.setLeadingMoveText:
                                      this.setLeadingMoveText(s[0], s[1]);
                                      break;
                                  case n.OPS.setFont:
                                      this.setFont(s);
                                      break;
                                  case n.OPS.showText:
                                  case n.OPS.showSpacedText:
                                      this.showText(s[0]);
                                      break;
                                  case n.OPS.endText:
                                      this.endText();
                                      break;
                                  case n.OPS.moveText:
                                      this.moveText(s[0], s[1]);
                                      break;
                                  case n.OPS.setCharSpacing:
                                      this.setCharSpacing(s[0]);
                                      break;
                                  case n.OPS.setWordSpacing:
                                      this.setWordSpacing(s[0]);
                                      break;
                                  case n.OPS.setHScale:
                                      this.setHScale(s[0]);
                                      break;
                                  case n.OPS.setTextMatrix:
                                      this.setTextMatrix(s[0], s[1], s[2], s[3], s[4], s[5]);
                                      break;
                                  case n.OPS.setTextRise:
                                      this.setTextRise(s[0]);
                                      break;
                                  case n.OPS.setTextRenderingMode:
                                      this.setTextRenderingMode(s[0]);
                                      break;
                                  case n.OPS.setLineWidth:
                                      this.setLineWidth(s[0]);
                                      break;
                                  case n.OPS.setLineJoin:
                                      this.setLineJoin(s[0]);
                                      break;
                                  case n.OPS.setLineCap:
                                      this.setLineCap(s[0]);
                                      break;
                                  case n.OPS.setMiterLimit:
                                      this.setMiterLimit(s[0]);
                                      break;
                                  case n.OPS.setFillRGBColor:
                                      this.setFillRGBColor(s[0], s[1], s[2]);
                                      break;
                                  case n.OPS.setStrokeRGBColor:
                                      this.setStrokeRGBColor(s[0], s[1], s[2]);
                                      break;
                                  case n.OPS.setStrokeColorN:
                                      this.setStrokeColorN(s);
                                      break;
                                  case n.OPS.setFillColorN:
                                      this.setFillColorN(s);
                                      break;
                                  case n.OPS.shadingFill:
                                      this.shadingFill(s[0]);
                                      break;
                                  case n.OPS.setDash:
                                      this.setDash(s[0], s[1]);
                                      break;
                                  case n.OPS.setRenderingIntent:
                                      this.setRenderingIntent(s[0]);
                                      break;
                                  case n.OPS.setFlatness:
                                      this.setFlatness(s[0]);
                                      break;
                                  case n.OPS.setGState:
                                      this.setGState(s[0]);
                                      break;
                                  case n.OPS.fill:
                                      this.fill();
                                      break;
                                  case n.OPS.eoFill:
                                      this.eoFill();
                                      break;
                                  case n.OPS.stroke:
                                      this.stroke();
                                      break;
                                  case n.OPS.fillStroke:
                                      this.fillStroke();
                                      break;
                                  case n.OPS.eoFillStroke:
                                      this.eoFillStroke();
                                      break;
                                  case n.OPS.clip:
                                      this.clip("nonzero");
                                      break;
                                  case n.OPS.eoClip:
                                      this.clip("evenodd");
                                      break;
                                  case n.OPS.paintSolidColorImageMask:
                                      this.paintSolidColorImageMask();
                                      break;
                                  case n.OPS.paintImageXObject:
                                      this.paintImageXObject(s[0]);
                                      break;
                                  case n.OPS.paintInlineImageXObject:
                                      this.paintInlineImageXObject(s[0]);
                                      break;
                                  case n.OPS.paintImageMaskXObject:
                                      this.paintImageMaskXObject(s[0]);
                                      break;
                                  case n.OPS.paintFormXObjectBegin:
                                      this.paintFormXObjectBegin(s[0], s[1]);
                                      break;
                                  case n.OPS.paintFormXObjectEnd:
                                      this.paintFormXObjectEnd();
                                      break;
                                  case n.OPS.closePath:
                                      this.closePath();
                                      break;
                                  case n.OPS.closeStroke:
                                      this.closeStroke();
                                      break;
                                  case n.OPS.closeFillStroke:
                                      this.closeFillStroke();
                                      break;
                                  case n.OPS.closeEOFillStroke:
                                      this.closeEOFillStroke();
                                      break;
                                  case n.OPS.nextLine:
                                      this.nextLine();
                                      break;
                                  case n.OPS.transform:
                                      this.transform(s[0], s[1], s[2], s[3], s[4], s[5]);
                                      break;
                                  case n.OPS.constructPath:
                                      this.constructPath(s[0], s[1]);
                                      break;
                                  case n.OPS.endPath:
                                      this.endPath();
                                      break;
                                  case 92:
                                      this.group(e.items);
                                      break;
                                  default:
                                      (0, n.warn)(`Unimplemented operator ${t}`);
                              }
                          }
                      }
                      setWordSpacing(t) {
                          this.current.wordSpacing = t;
                      }
                      setCharSpacing(t) {
                          this.current.charSpacing = t;
                      }
                      nextLine() {
                          this.moveText(0, this.current.leading);
                      }
                      setTextMatrix(t, e, i, s, n, a) {
                          const r = this.current;
                          r.textMatrix = r.lineMatrix = [t, e, i, s, n, a];
                          r.textMatrixScale = Math.hypot(t, e);
                          r.x = r.lineX = 0;
                          r.y = r.lineY = 0;
                          r.xcoords = [];
                          r.ycoords = [];
                          r.tspan = this.svgFactory.createElement("svg:tspan");
                          r.tspan.setAttributeNS(null, "font-family", r.fontFamily);
                          r.tspan.setAttributeNS(null, "font-size", `${pf(r.fontSize)}px`);
                          r.tspan.setAttributeNS(null, "y", pf(-r.y));
                          r.txtElement = this.svgFactory.createElement("svg:text");
                          r.txtElement.append(r.tspan);
                      }
                      beginText() {
                          const t = this.current;
                          t.x = t.lineX = 0;
                          t.y = t.lineY = 0;
                          t.textMatrix = n.IDENTITY_MATRIX;
                          t.lineMatrix = n.IDENTITY_MATRIX;
                          t.textMatrixScale = 1;
                          t.tspan = this.svgFactory.createElement("svg:tspan");
                          t.txtElement = this.svgFactory.createElement("svg:text");
                          t.txtgrp = this.svgFactory.createElement("svg:g");
                          t.xcoords = [];
                          t.ycoords = [];
                      }
                      moveText(t, e) {
                          const i = this.current;
                          i.x = i.lineX += t;
                          i.y = i.lineY += e;
                          i.xcoords = [];
                          i.ycoords = [];
                          i.tspan = this.svgFactory.createElement("svg:tspan");
                          i.tspan.setAttributeNS(null, "font-family", i.fontFamily);
                          i.tspan.setAttributeNS(null, "font-size", `${pf(i.fontSize)}px`);
                          i.tspan.setAttributeNS(null, "y", pf(-i.y));
                      }
                      showText(t) {
                          const e = this.current,
                              i = e.font,
                              s = e.fontSize;
                          if (0 === s) return;
                          const l = e.fontSizeScale,
                              h = e.charSpacing,
                              c = e.wordSpacing,
                              d = e.fontDirection,
                              u = e.textHScale * d,
                              p = i.vertical,
                              g = p ? 1 : -1,
                              m = i.defaultVMetrics,
                              f = s * e.fontMatrix[0];
                          let b = 0;
                          for (const n of t) {
                              if (null === n) {
                                  b += d * c;
                                  continue;
                              }
                              if ("number" == typeof n) {
                                  b += (g * n * s) / 1e3;
                                  continue;
                              }
                              const t = (n.isSpace ? c : 0) + h,
                                  a = n.fontChar;
                              let r,
                                  o,
                                  u = n.width;
                              if (p) {
                                  let t;
                                  const e = n.vmetric || m;
                                  t = n.vmetric ? e[1] : 0.5 * u;
                                  t = -t * f;
                                  const i = e[2] * f;
                                  u = e ? -e[0] : u;
                                  r = t / l;
                                  o = (b + i) / l;
                              } else {
                                  r = b / l;
                                  o = 0;
                              }
                              if (n.isInFont || i.missingFile) {
                                  e.xcoords.push(e.x + r);
                                  p && e.ycoords.push(-e.y + o);
                                  e.tspan.textContent += a;
                              }
                              b += p ? u * f - t * d : u * f + t * d;
                          }
                          e.tspan.setAttributeNS(null, "x", e.xcoords.map(pf).join(" "));
                          p ? e.tspan.setAttributeNS(null, "y", e.ycoords.map(pf).join(" ")) : e.tspan.setAttributeNS(null, "y", pf(-e.y));
                          p ? (e.y -= b) : (e.x += b * u);
                          e.tspan.setAttributeNS(null, "font-family", e.fontFamily);
                          e.tspan.setAttributeNS(null, "font-size", `${pf(e.fontSize)}px`);
                          e.fontStyle !== a && e.tspan.setAttributeNS(null, "font-style", e.fontStyle);
                          e.fontWeight !== r && e.tspan.setAttributeNS(null, "font-weight", e.fontWeight);
                          const A = e.textRenderingMode & n.TextRenderingMode.FILL_STROKE_MASK;
                          if (A === n.TextRenderingMode.FILL || A === n.TextRenderingMode.FILL_STROKE) {
                              e.fillColor !== o && e.tspan.setAttributeNS(null, "fill", e.fillColor);
                              e.fillAlpha < 1 && e.tspan.setAttributeNS(null, "fill-opacity", e.fillAlpha);
                          } else e.textRenderingMode === n.TextRenderingMode.ADD_TO_PATH ? e.tspan.setAttributeNS(null, "fill", "transparent") : e.tspan.setAttributeNS(null, "fill", "none");
                          if (A === n.TextRenderingMode.STROKE || A === n.TextRenderingMode.FILL_STROKE) {
                              const t = 1 / (e.textMatrixScale || 1);
                              this._setStrokeAttributes(e.tspan, t);
                          }
                          let _ = e.textMatrix;
                          if (0 !== e.textRise) {
                              _ = _.slice();
                              _[5] += e.textRise;
                          }
                          e.txtElement.setAttributeNS(null, "transform", `${pm(_)} scale(${pf(u)}, -1)`);
                          e.txtElement.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
                          e.txtElement.append(e.tspan);
                          e.txtgrp.append(e.txtElement);
                          this._ensureTransformGroup().append(e.txtElement);
                      }
                      setLeadingMoveText(t, e) {
                          this.setLeading(-e);
                          this.moveText(t, e);
                      }
                      addFontStyle(t) {
                          if (!t.data) throw new Error('addFontStyle: No font data available, ensure that the "fontExtraProperties" API parameter is set.');
                          if (!this.cssStyle) {
                              this.cssStyle = this.svgFactory.createElement("svg:style");
                              this.cssStyle.setAttributeNS(null, "type", "text/css");
                              this.defs.append(this.cssStyle);
                          }
                          const e = createObjectURL(t.data, t.mimetype, this.forceDataSchema);
                          this.cssStyle.textContent += `@font-face { font-family: "${t.loadedName}"; src: url(${e}); }\n`;
                      }
                      setFont(t) {
                          const e = this.current,
                              i = this.commonObjs.get(t[0]);
                          let s = t[1];
                          e.font = i;
                          if (this.embedFonts && !i.missingFile && !this.embeddedFonts[i.loadedName]) {
                              this.addFontStyle(i);
                              this.embeddedFonts[i.loadedName] = i;
                          }
                          e.fontMatrix = i.fontMatrix || n.FONT_IDENTITY_MATRIX;
                          let a = "normal";
                          i.black ? (a = "900") : i.bold && (a = "bold");
                          const r = i.italic ? "italic" : "normal";
                          if (s < 0) {
                              s = -s;
                              e.fontDirection = -1;
                          } else e.fontDirection = 1;
                          e.fontSize = s;
                          e.fontFamily = i.loadedName;
                          e.fontWeight = a;
                          e.fontStyle = r;
                          e.tspan = this.svgFactory.createElement("svg:tspan");
                          e.tspan.setAttributeNS(null, "y", pf(-e.y));
                          e.xcoords = [];
                          e.ycoords = [];
                      }
                      endText() {
                          const t = this.current;
                          if (t.textRenderingMode & n.TextRenderingMode.ADD_TO_PATH_FLAG && t.txtElement?.hasChildNodes()) {
                              t.element = t.txtElement;
                              this.clip("nonzero");
                              this.endPath();
                          }
                      }
                      setLineWidth(t) {
                          t > 0 && (this.current.lineWidth = t);
                      }
                      setLineCap(t) {
                          this.current.lineCap = l[t];
                      }
                      setLineJoin(t) {
                          this.current.lineJoin = h[t];
                      }
                      setMiterLimit(t) {
                          this.current.miterLimit = t;
                      }
                      setStrokeAlpha(t) {
                          this.current.strokeAlpha = t;
                      }
                      setStrokeRGBColor(t, e, i) {
                          this.current.strokeColor = n.Util.makeHexColor(t, e, i);
                      }
                      setFillAlpha(t) {
                          this.current.fillAlpha = t;
                      }
                      setFillRGBColor(t, e, i) {
                          this.current.fillColor = n.Util.makeHexColor(t, e, i);
                          this.current.tspan = this.svgFactory.createElement("svg:tspan");
                          this.current.xcoords = [];
                          this.current.ycoords = [];
                      }
                      setStrokeColorN(t) {
                          this.current.strokeColor = this._makeColorN_Pattern(t);
                      }
                      setFillColorN(t) {
                          this.current.fillColor = this._makeColorN_Pattern(t);
                      }
                      shadingFill(t) {
                          const { width: e, height: i } = this.viewport,
                              s = n.Util.inverseTransform(this.transformMatrix),
                              [a, r, o, l] = n.Util.getAxialAlignedBoundingBox([0, 0, e, i], s),
                              h = this.svgFactory.createElement("svg:rect");
                          h.setAttributeNS(null, "x", a);
                          h.setAttributeNS(null, "y", r);
                          h.setAttributeNS(null, "width", o - a);
                          h.setAttributeNS(null, "height", l - r);
                          h.setAttributeNS(null, "fill", this._makeShadingPattern(t));
                          this.current.fillAlpha < 1 && h.setAttributeNS(null, "fill-opacity", this.current.fillAlpha);
                          this._ensureTransformGroup().append(h);
                      }
                      _makeColorN_Pattern(t) {
                          return "TilingPattern" === t[0] ? this._makeTilingPattern(t) : this._makeShadingPattern(t);
                      }
                      _makeTilingPattern(t) {
                          const e = t[1],
                              i = t[2],
                              s = t[3] || n.IDENTITY_MATRIX,
                              [a, r, o, l] = t[4],
                              h = t[5],
                              c = t[6],
                              d = t[7],
                              u = "shading" + p++,
                              [g, m, f, b] = n.Util.normalizeRect([...n.Util.applyTransform([a, r], s), ...n.Util.applyTransform([o, l], s)]),
                              [A, _] = n.Util.singularValueDecompose2dScale(s),
                              v = h * A,
                              y = c * _,
                              S = this.svgFactory.createElement("svg:pattern");
                          S.setAttributeNS(null, "id", u);
                          S.setAttributeNS(null, "patternUnits", "userSpaceOnUse");
                          S.setAttributeNS(null, "width", v);
                          S.setAttributeNS(null, "height", y);
                          S.setAttributeNS(null, "x", `${g}`);
                          S.setAttributeNS(null, "y", `${m}`);
                          const E = this.svg,
                              x = this.transformMatrix,
                              w = this.current.fillColor,
                              C = this.current.strokeColor,
                              T = this.svgFactory.create(f - g, b - m);
                          this.svg = T;
                          this.transformMatrix = s;
                          if (2 === d) {
                              const t = n.Util.makeHexColor(...e);
                              this.current.fillColor = t;
                              this.current.strokeColor = t;
                          }
                          this.executeOpTree(this.convertOpList(i));
                          this.svg = E;
                          this.transformMatrix = x;
                          this.current.fillColor = w;
                          this.current.strokeColor = C;
                          S.append(T.childNodes[0]);
                          this.defs.append(S);
                          return `url(#${u})`;
                      }
                      _makeShadingPattern(t) {
                          "string" == typeof t && (t = this.objs.get(t));
                          switch (t[0]) {
                              case "RadialAxial":
                                  const e = "shading" + p++,
                                      i = t[3];
                                  let s;
                                  switch (t[1]) {
                                      case "axial":
                                          const i = t[4],
                                              n = t[5];
                                          s = this.svgFactory.createElement("svg:linearGradient");
                                          s.setAttributeNS(null, "id", e);
                                          s.setAttributeNS(null, "gradientUnits", "userSpaceOnUse");
                                          s.setAttributeNS(null, "x1", i[0]);
                                          s.setAttributeNS(null, "y1", i[1]);
                                          s.setAttributeNS(null, "x2", n[0]);
                                          s.setAttributeNS(null, "y2", n[1]);
                                          break;
                                      case "radial":
                                          const a = t[4],
                                              r = t[5],
                                              o = t[6],
                                              l = t[7];
                                          s = this.svgFactory.createElement("svg:radialGradient");
                                          s.setAttributeNS(null, "id", e);
                                          s.setAttributeNS(null, "gradientUnits", "userSpaceOnUse");
                                          s.setAttributeNS(null, "cx", r[0]);
                                          s.setAttributeNS(null, "cy", r[1]);
                                          s.setAttributeNS(null, "r", l);
                                          s.setAttributeNS(null, "fx", a[0]);
                                          s.setAttributeNS(null, "fy", a[1]);
                                          s.setAttributeNS(null, "fr", o);
                                          break;
                                      default:
                                          throw new Error(`Unknown RadialAxial type: ${t[1]}`);
                                  }
                                  for (const t of i) {
                                      const e = this.svgFactory.createElement("svg:stop");
                                      e.setAttributeNS(null, "offset", t[0]);
                                      e.setAttributeNS(null, "stop-color", t[1]);
                                      s.append(e);
                                  }
                                  this.defs.append(s);
                                  return `url(#${e})`;
                              case "Mesh":
                                  (0, n.warn)("Unimplemented pattern Mesh");
                                  return null;
                              case "Dummy":
                                  return "hotpink";
                              default:
                                  throw new Error(`Unknown IR type: ${t[0]}`);
                          }
                      }
                      setDash(t, e) {
                          this.current.dashArray = t;
                          this.current.dashPhase = e;
                      }
                      constructPath(t, e) {
                          const i = this.current;
                          let s = i.x,
                              a = i.y,
                              r = [],
                              o = 0;
                          for (const i of t)
                              switch (0 | i) {
                                  case n.OPS.rectangle:
                                      s = e[o++];
                                      a = e[o++];
                                      const t = s + e[o++],
                                          i = a + e[o++];
                                      r.push("M", pf(s), pf(a), "L", pf(t), pf(a), "L", pf(t), pf(i), "L", pf(s), pf(i), "Z");
                                      break;
                                  case n.OPS.moveTo:
                                      s = e[o++];
                                      a = e[o++];
                                      r.push("M", pf(s), pf(a));
                                      break;
                                  case n.OPS.lineTo:
                                      s = e[o++];
                                      a = e[o++];
                                      r.push("L", pf(s), pf(a));
                                      break;
                                  case n.OPS.curveTo:
                                      s = e[o + 4];
                                      a = e[o + 5];
                                      r.push("C", pf(e[o]), pf(e[o + 1]), pf(e[o + 2]), pf(e[o + 3]), pf(s), pf(a));
                                      o += 6;
                                      break;
                                  case n.OPS.curveTo2:
                                      r.push("C", pf(s), pf(a), pf(e[o]), pf(e[o + 1]), pf(e[o + 2]), pf(e[o + 3]));
                                      s = e[o + 2];
                                      a = e[o + 3];
                                      o += 4;
                                      break;
                                  case n.OPS.curveTo3:
                                      s = e[o + 2];
                                      a = e[o + 3];
                                      r.push("C", pf(e[o]), pf(e[o + 1]), pf(s), pf(a), pf(s), pf(a));
                                      o += 4;
                                      break;
                                  case n.OPS.closePath:
                                      r.push("Z");
                              }
                          r = r.join(" ");
                          if (i.path && t.length > 0 && t[0] !== n.OPS.rectangle && t[0] !== n.OPS.moveTo) r = i.path.getAttributeNS(null, "d") + r;
                          else {
                              i.path = this.svgFactory.createElement("svg:path");
                              this._ensureTransformGroup().append(i.path);
                          }
                          i.path.setAttributeNS(null, "d", r);
                          i.path.setAttributeNS(null, "fill", "none");
                          i.element = i.path;
                          i.setCurrentPoint(s, a);
                      }
                      endPath() {
                          const t = this.current;
                          t.path = null;
                          if (!this.pendingClip) return;
                          if (!t.element) {
                              this.pendingClip = null;
                              return;
                          }
                          const e = "clippath" + d++,
                              i = this.svgFactory.createElement("svg:clipPath");
                          i.setAttributeNS(null, "id", e);
                          i.setAttributeNS(null, "transform", pm(this.transformMatrix));
                          const s = t.element.cloneNode(!0);
                          "evenodd" === this.pendingClip ? s.setAttributeNS(null, "clip-rule", "evenodd") : s.setAttributeNS(null, "clip-rule", "nonzero");
                          this.pendingClip = null;
                          i.append(s);
                          this.defs.append(i);
                          if (t.activeClipUrl) {
                              t.clipGroup = null;
                              for (const t of this.extraStack) t.clipGroup = null;
                              i.setAttributeNS(null, "clip-path", t.activeClipUrl);
                          }
                          t.activeClipUrl = `url(#${e})`;
                          this.tgrp = null;
                      }
                      clip(t) {
                          this.pendingClip = t;
                      }
                      closePath() {
                          const t = this.current;
                          if (t.path) {
                              const e = `${t.path.getAttributeNS(null, "d")}Z`;
                              t.path.setAttributeNS(null, "d", e);
                          }
                      }
                      setLeading(t) {
                          this.current.leading = -t;
                      }
                      setTextRise(t) {
                          this.current.textRise = t;
                      }
                      setTextRenderingMode(t) {
                          this.current.textRenderingMode = t;
                      }
                      setHScale(t) {
                          this.current.textHScale = t / 100;
                      }
                      setRenderingIntent(t) {}
                      setFlatness(t) {}
                      setGState(t) {
                          for (const [e, i] of t)
                              switch (e) {
                                  case "LW":
                                      this.setLineWidth(i);
                                      break;
                                  case "LC":
                                      this.setLineCap(i);
                                      break;
                                  case "LJ":
                                      this.setLineJoin(i);
                                      break;
                                  case "ML":
                                      this.setMiterLimit(i);
                                      break;
                                  case "D":
                                      this.setDash(i[0], i[1]);
                                      break;
                                  case "RI":
                                      this.setRenderingIntent(i);
                                      break;
                                  case "FL":
                                      this.setFlatness(i);
                                      break;
                                  case "Font":
                                      this.setFont(i);
                                      break;
                                  case "CA":
                                      this.setStrokeAlpha(i);
                                      break;
                                  case "ca":
                                      this.setFillAlpha(i);
                                      break;
                                  default:
                                      (0, n.warn)(`Unimplemented graphic state operator ${e}`);
                              }
                      }
                      fill() {
                          const t = this.current;
                          if (t.element) {
                              t.element.setAttributeNS(null, "fill", t.fillColor);
                              t.element.setAttributeNS(null, "fill-opacity", t.fillAlpha);
                              this.endPath();
                          }
                      }
                      stroke() {
                          const t = this.current;
                          if (t.element) {
                              this._setStrokeAttributes(t.element);
                              t.element.setAttributeNS(null, "fill", "none");
                              this.endPath();
                          }
                      }
                      _setStrokeAttributes(t, e = 1) {
                          const i = this.current;
                          let s = i.dashArray;
                          1 !== e &&
                              s.length > 0 &&
                              (s = s.map(function (t) {
                                  return e * t;
                              }));
                          t.setAttributeNS(null, "stroke", i.strokeColor);
                          t.setAttributeNS(null, "stroke-opacity", i.strokeAlpha);
                          t.setAttributeNS(null, "stroke-miterlimit", pf(i.miterLimit));
                          t.setAttributeNS(null, "stroke-linecap", i.lineCap);
                          t.setAttributeNS(null, "stroke-linejoin", i.lineJoin);
                          t.setAttributeNS(null, "stroke-width", pf(e * i.lineWidth) + "px");
                          t.setAttributeNS(null, "stroke-dasharray", s.map(pf).join(" "));
                          t.setAttributeNS(null, "stroke-dashoffset", pf(e * i.dashPhase) + "px");
                      }
                      eoFill() {
                          this.current.element?.setAttributeNS(null, "fill-rule", "evenodd");
                          this.fill();
                      }
                      fillStroke() {
                          this.stroke();
                          this.fill();
                      }
                      eoFillStroke() {
                          this.current.element?.setAttributeNS(null, "fill-rule", "evenodd");
                          this.fillStroke();
                      }
                      closeStroke() {
                          this.closePath();
                          this.stroke();
                      }
                      closeFillStroke() {
                          this.closePath();
                          this.fillStroke();
                      }
                      closeEOFillStroke() {
                          this.closePath();
                          this.eoFillStroke();
                      }
                      paintSolidColorImageMask() {
                          const t = this.svgFactory.createElement("svg:rect");
                          t.setAttributeNS(null, "x", "0");
                          t.setAttributeNS(null, "y", "0");
                          t.setAttributeNS(null, "width", "1px");
                          t.setAttributeNS(null, "height", "1px");
                          t.setAttributeNS(null, "fill", this.current.fillColor);
                          this._ensureTransformGroup().append(t);
                      }
                      paintImageXObject(t) {
                          const e = this.getObject(t);
                          e ? this.paintInlineImageXObject(e) : (0, n.warn)(`Dependent image with object ID ${t} is not ready yet`);
                      }
                      paintInlineImageXObject(t, e) {
                          const i = t.width,
                              s = t.height,
                              n = c(t, this.forceDataSchema, !!e),
                              a = this.svgFactory.createElement("svg:rect");
                          a.setAttributeNS(null, "x", "0");
                          a.setAttributeNS(null, "y", "0");
                          a.setAttributeNS(null, "width", pf(i));
                          a.setAttributeNS(null, "height", pf(s));
                          this.current.element = a;
                          this.clip("nonzero");
                          const r = this.svgFactory.createElement("svg:image");
                          r.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
                          r.setAttributeNS(null, "x", "0");
                          r.setAttributeNS(null, "y", pf(-s));
                          r.setAttributeNS(null, "width", pf(i) + "px");
                          r.setAttributeNS(null, "height", pf(s) + "px");
                          r.setAttributeNS(null, "transform", `scale(${pf(1 / i)} ${pf(-1 / s)})`);
                          e ? e.append(r) : this._ensureTransformGroup().append(r);
                      }
                      paintImageMaskXObject(t) {
                          const e = this.getObject(t.data, t);
                          if (e.bitmap) {
                              (0, n.warn)("paintImageMaskXObject: ImageBitmap support is not implemented, ensure that the `isOffscreenCanvasSupported` API parameter is disabled.");
                              return;
                          }
                          const i = this.current,
                              s = e.width,
                              a = e.height,
                              r = i.fillColor;
                          i.maskId = "mask" + u++;
                          const o = this.svgFactory.createElement("svg:mask");
                          o.setAttributeNS(null, "id", i.maskId);
                          const l = this.svgFactory.createElement("svg:rect");
                          l.setAttributeNS(null, "x", "0");
                          l.setAttributeNS(null, "y", "0");
                          l.setAttributeNS(null, "width", pf(s));
                          l.setAttributeNS(null, "height", pf(a));
                          l.setAttributeNS(null, "fill", r);
                          l.setAttributeNS(null, "mask", `url(#${i.maskId})`);
                          this.defs.append(o);
                          this._ensureTransformGroup().append(l);
                          this.paintInlineImageXObject(e, o);
                      }
                      paintFormXObjectBegin(t, e) {
                          Array.isArray(t) && 6 === t.length && this.transform(t[0], t[1], t[2], t[3], t[4], t[5]);
                          if (e) {
                              const t = e[2] - e[0],
                                  i = e[3] - e[1],
                                  s = this.svgFactory.createElement("svg:rect");
                              s.setAttributeNS(null, "x", e[0]);
                              s.setAttributeNS(null, "y", e[1]);
                              s.setAttributeNS(null, "width", pf(t));
                              s.setAttributeNS(null, "height", pf(i));
                              this.current.element = s;
                              this.clip("nonzero");
                              this.endPath();
                          }
                      }
                      paintFormXObjectEnd() {}
                      _initialize(t) {
                          const e = this.svgFactory.create(t.width, t.height),
                              i = this.svgFactory.createElement("svg:defs");
                          e.append(i);
                          this.defs = i;
                          const s = this.svgFactory.createElement("svg:g");
                          s.setAttributeNS(null, "transform", pm(t.transform));
                          e.append(s);
                          this.svg = s;
                          return e;
                      }
                      _ensureClipGroup() {
                          if (!this.current.clipGroup) {
                              const t = this.svgFactory.createElement("svg:g");
                              t.setAttributeNS(null, "clip-path", this.current.activeClipUrl);
                              this.svg.append(t);
                              this.current.clipGroup = t;
                          }
                          return this.current.clipGroup;
                      }
                      _ensureTransformGroup() {
                          if (!this.tgrp) {
                              this.tgrp = this.svgFactory.createElement("svg:g");
                              this.tgrp.setAttributeNS(null, "transform", pm(this.transformMatrix));
                              this.current.activeClipUrl ? this._ensureClipGroup().append(this.tgrp) : this.svg.append(this.tgrp);
                          }
                          return this.tgrp;
                      }
                  };
              },
              (t, e) => {
                  Object.defineProperty(e, "__esModule", { value: !0 });
                  e.XfaText = void 0;
                  class XfaText {
                      static textContent(t) {
                          const e = [],
                              i = { items: e, styles: Object.create(null) };
                          !(function walk(t) {
                              if (!t) return;
                              let i = null;
                              const s = t.name;
                              if ("#text" === s) i = t.value;
                              else {
                                  if (!XfaText.shouldBuildText(s)) return;
                                  t?.attributes?.textContent ? (i = t.attributes.textContent) : t.value && (i = t.value);
                              }
                              null !== i && e.push({ str: i });
                              if (t.children) for (const e of t.children) walk(e);
                          })(t);
                          return i;
                      }
                      static shouldBuildText(t) {
                          return !("textarea" === t || "input" === t || "option" === t || "select" === t);
                      }
                  }
                  e.XfaText = XfaText;
              },
              (t, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 });
                  e.TextLayerRenderTask = void 0;
                  e.renderTextLayer = function renderTextLayer(t) {
                      if (!t.textContentSource && (t.textContent || t.textContentStream)) {
                          (0, n.deprecated)("The TextLayerRender `textContent`/`textContentStream` parameters will be removed in the future, please use `textContentSource` instead.");
                          t.textContentSource = t.textContent || t.textContentStream;
                      }
                      const { container: e, viewport: i } = t,
                          s = getComputedStyle(e),
                          a = s.getPropertyValue("visibility"),
                          r = parseFloat(s.getPropertyValue("--scale-factor"));
                      "visible" === a &&
                          (!r || Math.abs(r - i.scale) > 1e-5) &&
                          console.error("The `--scale-factor` CSS-variable must be set, to the same value as `viewport.scale`, either on the `container`-element itself or higher up in the DOM.");
                      const o = new TextLayerRenderTask(t);
                      o._render();
                      return o;
                  };
                  e.updateTextLayer = function updateTextLayer({ container: t, viewport: e, textDivs: i, textDivProperties: s, isOffscreenCanvasSupported: a, mustRotate: r = !0, mustRescale: o = !0 }) {
                      r && (0, n.setLayerDimensions)(t, { rotation: e.rotation });
                      if (o) {
                          const t = getCtx(0, a),
                              n = { prevFontSize: null, prevFontFamily: null, div: null, scale: e.scale * (globalThis.devicePixelRatio || 1), properties: null, ctx: t };
                          for (const t of i) {
                              n.properties = s.get(t);
                              n.div = t;
                              layout(n);
                          }
                      }
                  };
                  var s = i(1),
                      n = i(6);
                  const a = 30,
                      r = 0.8,
                      o = new Map();
                  function getCtx(t, e) {
                      let i;
                      if (e && s.FeatureTest.isOffscreenCanvasSupported) i = new OffscreenCanvas(t, t).getContext("2d", { alpha: !1 });
                      else {
                          const e = document.createElement("canvas");
                          e.width = e.height = t;
                          i = e.getContext("2d", { alpha: !1 });
                      }
                      return i;
                  }
                  function appendText(t, e, i) {
                      const n = document.createElement("span"),
                          l = { angle: 0, canvasWidth: 0, hasText: "" !== e.str, hasEOL: e.hasEOL, fontSize: 0 };
                      t._textDivs.push(n);
                      const h = s.Util.transform(t._transform, e.transform);
                      let c = Math.atan2(h[1], h[0]);
                      const d = i[e.fontName];
                      d.vertical && (c += Math.PI / 2);
                      const u = Math.hypot(h[2], h[3]),
                          p =
                              u *
                              (function getAscent(t, e) {
                                  const i = o.get(t);
                                  if (i) return i;
                                  const s = getCtx(a, e);
                                  s.font = `${a}px ${t}`;
                                  const n = s.measureText("");
                                  let l = n.fontBoundingBoxAscent,
                                      h = Math.abs(n.fontBoundingBoxDescent);
                                  if (l) {
                                      const e = l / (l + h);
                                      o.set(t, e);
                                      s.canvas.width = s.canvas.height = 0;
                                      return e;
                                  }
                                  s.strokeStyle = "red";
                                  s.clearRect(0, 0, a, a);
                                  s.strokeText("g", 0, 0);
                                  let c = s.getImageData(0, 0, a, a).data;
                                  h = 0;
                                  for (let t = c.length - 1 - 3; t >= 0; t -= 4)
                                      if (c[t] > 0) {
                                          h = Math.ceil(t / 4 / a);
                                          break;
                                      }
                                  s.clearRect(0, 0, a, a);
                                  s.strokeText("A", 0, a);
                                  c = s.getImageData(0, 0, a, a).data;
                                  l = 0;
                                  for (let t = 0, e = c.length; t < e; t += 4)
                                      if (c[t] > 0) {
                                          l = a - Math.floor(t / 4 / a);
                                          break;
                                      }
                                  s.canvas.width = s.canvas.height = 0;
                                  if (l) {
                                      const e = l / (l + h);
                                      o.set(t, e);
                                      return e;
                                  }
                                  o.set(t, r);
                                  return r;
                              })(d.fontFamily, t._isOffscreenCanvasSupported);
                      let g, m;
                      if (0 === c) {
                          g = h[4];
                          m = h[5] - p;
                      } else {
                          g = h[4] + p * Math.sin(c);
                          m = h[5] - p * Math.cos(c);
                      }
                      const f = "calc(var(--scale-factor)*",
                          b = n.style;
                      if (t._container === t._rootContainer) {
                          b.left = `${((100 * g) / t._pageWidth).toFixed(2)}%`;
                          b.top = `${((100 * m) / t._pageHeight).toFixed(2)}%`;
                      } else {
                          b.left = `${f}${g.toFixed(2)}px)`;
                          b.top = `${f}${m.toFixed(2)}px)`;
                      }
                      b.fontSize = `${f}${u.toFixed(2)}px)`;
                      b.fontFamily = d.fontFamily;
                      l.fontSize = u;
                      n.setAttribute("role", "presentation");
                      n.textContent = e.str;
                      n.dir = e.dir;
                      t._fontInspectorEnabled && (n.dataset.fontName = e.fontName);
                      0 !== c && (l.angle = c * (180 / Math.PI));
                      let A = !1;
                      if (e.str.length > 1) A = !0;
                      else if (" " !== e.str && e.transform[0] !== e.transform[3]) {
                          const t = Math.abs(e.transform[0]),
                              i = Math.abs(e.transform[3]);
                          t !== i && Math.max(t, i) / Math.min(t, i) > 1.5 && (A = !0);
                      }
                      A && (l.canvasWidth = d.vertical ? e.height : e.width);
                      t._textDivProperties.set(n, l);
                      t._isReadableStream && t._layoutText(n);
                  }
                  function layout(t) {
                      const { div: e, scale: i, properties: s, ctx: n, prevFontSize: a, prevFontFamily: r } = t,
                          { style: o } = e;
                      let l = "";
                      if (0 !== s.canvasWidth && s.hasText) {
                          const { fontFamily: h } = o,
                              { canvasWidth: c, fontSize: d } = s;
                          if (a !== d || r !== h) {
                              n.font = `${d * i}px ${h}`;
                              t.prevFontSize = d;
                              t.prevFontFamily = h;
                          }
                          const { width: u } = n.measureText(e.textContent);
                          u > 0 && (l = `scaleX(${(c * i) / u})`);
                      }
                      0 !== s.angle && (l = `rotate(${s.angle}deg) ${l}`);
                      l.length > 0 && (o.transform = l);
                  }
                  class TextLayerRenderTask {
                      constructor({ textContentSource: t, container: e, viewport: i, textDivs: a, textDivProperties: r, textContentItemsStr: o, isOffscreenCanvasSupported: l }) {
                          this._textContentSource = t;
                          this._isReadableStream = t instanceof ReadableStream;
                          this._container = this._rootContainer = e;
                          this._textDivs = a || [];
                          this._textContentItemsStr = o || [];
                          this._isOffscreenCanvasSupported = l;
                          this._fontInspectorEnabled = !!globalThis.FontInspector?.enabled;
                          this._reader = null;
                          this._textDivProperties = r || new WeakMap();
                          this._canceled = !1;
                          this._capability = new s.PromiseCapability();
                          this._layoutTextParams = { prevFontSize: null, prevFontFamily: null, div: null, scale: i.scale * (globalThis.devicePixelRatio || 1), properties: null, ctx: getCtx(0, l) };
                          const { pageWidth: h, pageHeight: c, pageX: d, pageY: u } = i.rawDims;
                          this._transform = [1, 0, 0, -1, -d, u + c];
                          this._pageWidth = h;
                          this._pageHeight = c;
                          (0, n.setLayerDimensions)(e, i);
                          this._capability.promise
                              .finally(() => {
                                  this._layoutTextParams = null;
                              })
                              .catch(() => {});
                      }
                      get promise() {
                          return this._capability.promise;
                      }
                      cancel() {
                          this._canceled = !0;
                          if (this._reader) {
                              this._reader.cancel(new s.AbortException("TextLayer task cancelled.")).catch(() => {});
                              this._reader = null;
                          }
                          this._capability.reject(new s.AbortException("TextLayer task cancelled."));
                      }
                      _processItems(t, e) {
                          for (const i of t)
                              if (void 0 !== i.str) {
                                  this._textContentItemsStr.push(i.str);
                                  appendText(this, i, e);
                              } else if ("beginMarkedContentProps" === i.type || "beginMarkedContent" === i.type) {
                                  const t = this._container;
                                  this._container = document.createElement("span");
                                  this._container.classList.add("markedContent");
                                  null !== i.id && this._container.setAttribute("id", `${i.id}`);
                                  t.append(this._container);
                              } else "endMarkedContent" === i.type && (this._container = this._container.parentNode);
                      }
                      _layoutText(t) {
                          const e = (this._layoutTextParams.properties = this._textDivProperties.get(t));
                          this._layoutTextParams.div = t;
                          layout(this._layoutTextParams);
                          e.hasText && this._container.append(t);
                          if (e.hasEOL) {
                              const t = document.createElement("br");
                              t.setAttribute("role", "presentation");
                              this._container.append(t);
                          }
                      }
                      _render() {
                          const t = new s.PromiseCapability();
                          let e = Object.create(null);
                          if (this._isReadableStream) {
                              const pump = () => {
                                  this._reader.read().then(({ value: i, done: s }) => {
                                      if (s) t.resolve();
                                      else {
                                          Object.assign(e, i.styles);
                                          this._processItems(i.items, e);
                                          pump();
                                      }
                                  }, t.reject);
                              };
                              this._reader = this._textContentSource.getReader();
                              pump();
                          } else {
                              if (!this._textContentSource) throw new Error('No "textContentSource" parameter specified.');
                              {
                                  const { items: e, styles: i } = this._textContentSource;
                                  this._processItems(e, i);
                                  t.resolve();
                              }
                          }
                          t.promise.then(() => {
                              e = null;
                              !(function render(t) {
                                  if (t._canceled) return;
                                  const e = t._textDivs,
                                      i = t._capability;
                                  if (e.length > 1e5) i.resolve();
                                  else {
                                      if (!t._isReadableStream) for (const i of e) t._layoutText(i);
                                      i.resolve();
                                  }
                              })(this);
                          }, this._capability.reject);
                      }
                  }
                  e.TextLayerRenderTask = TextLayerRenderTask;
              },
              (t, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 });
                  e.AnnotationEditorLayer = void 0;
                  var s = i(1),
                      n = i(4),
                      a = i(28),
                      r = i(33),
                      o = i(6),
                      l = i(34);
                  class AnnotationEditorLayer {
                      #Se;
                      #Ee = !1;
                      #xe = null;
                      #we = this.pointerup.bind(this);
                      #Ce = this.pointerdown.bind(this);
                      #Te = new Map();
                      #Pe = !1;
                      #Me = !1;
                      #ke = !1;
                      #Fe;
                      static _initialized = !1;
                      constructor({ uiManager: t, pageIndex: e, div: i, accessibilityManager: s, annotationLayer: n, viewport: o, l10n: h }) {
                          const c = [a.FreeTextEditor, r.InkEditor, l.StampEditor];
                          if (!AnnotationEditorLayer._initialized) {
                              AnnotationEditorLayer._initialized = !0;
                              for (const t of c) t.initialize(h);
                          }
                          t.registerEditorTypes(c);
                          this.#Fe = t;
                          this.pageIndex = e;
                          this.div = i;
                          this.#Se = s;
                          this.#xe = n;
                          this.viewport = o;
                          this.#Fe.addLayer(this);
                      }
                      get isEmpty() {
                          return 0 === this.#Te.size;
                      }
                      updateToolbar(t) {
                          this.#Fe.updateToolbar(t);
                      }
                      updateMode(t = this.#Fe.getMode()) {
                          this.#Re();
                          if (t === s.AnnotationEditorType.INK) {
                              this.addInkEditorIfNeeded(!1);
                              this.disableClick();
                          } else this.enableClick();
                          if (t !== s.AnnotationEditorType.NONE) {
                              this.div.classList.toggle("freeTextEditing", t === s.AnnotationEditorType.FREETEXT);
                              this.div.classList.toggle("inkEditing", t === s.AnnotationEditorType.INK);
                              this.div.classList.toggle("stampEditing", t === s.AnnotationEditorType.STAMP);
                              this.div.hidden = !1;
                          }
                      }
                      addInkEditorIfNeeded(t) {
                          if (!t && this.#Fe.getMode() !== s.AnnotationEditorType.INK) return;
                          if (!t)
                              for (const t of this.#Te.values())
                                  if (t.isEmpty()) {
                                      t.setInBackground();
                                      return;
                                  }
                          this.#De({ offsetX: 0, offsetY: 0 }, !1).setInBackground();
                      }
                      setEditingState(t) {
                          this.#Fe.setEditingState(t);
                      }
                      addCommands(t) {
                          this.#Fe.addCommands(t);
                      }
                      enable() {
                          this.div.style.pointerEvents = "auto";
                          const t = new Set();
                          for (const e of this.#Te.values()) {
                              e.enableEditing();
                              e.annotationElementId && t.add(e.annotationElementId);
                          }
                          if (!this.#xe) return;
                          const e = this.#xe.getEditableAnnotations();
                          for (const i of e) {
                              i.hide();
                              if (this.#Fe.isDeletedAnnotationElement(i.data.id)) continue;
                              if (t.has(i.data.id)) continue;
                              const e = this.deserialize(i);
                              if (e) {
                                  this.addOrRebuild(e);
                                  e.enableEditing();
                              }
                          }
                      }
                      disable() {
                          this.#ke = !0;
                          this.div.style.pointerEvents = "none";
                          const t = new Set();
                          for (const e of this.#Te.values()) {
                              e.disableEditing();
                              if (e.annotationElementId && null === e.serialize()) {
                                  this.getEditableAnnotation(e.annotationElementId)?.show();
                                  e.remove();
                              } else t.add(e.annotationElementId);
                          }
                          if (this.#xe) {
                              const e = this.#xe.getEditableAnnotations();
                              for (const i of e) {
                                  const { id: e } = i.data;
                                  t.has(e) || this.#Fe.isDeletedAnnotationElement(e) || i.show();
                              }
                          }
                          this.#Re();
                          this.isEmpty && (this.div.hidden = !0);
                          this.#ke = !1;
                      }
                      getEditableAnnotation(t) {
                          return this.#xe?.getEditableAnnotation(t) || null;
                      }
                      setActiveEditor(t) {
                          this.#Fe.getActive() !== t && this.#Fe.setActiveEditor(t);
                      }
                      enableClick() {
                          this.div.addEventListener("pointerdown", this.#Ce);
                          this.div.addEventListener("pointerup", this.#we);
                      }
                      disableClick() {
                          this.div.removeEventListener("pointerdown", this.#Ce);
                          this.div.removeEventListener("pointerup", this.#we);
                      }
                      attach(t) {
                          this.#Te.set(t.id, t);
                          const { annotationElementId: e } = t;
                          e && this.#Fe.isDeletedAnnotationElement(e) && this.#Fe.removeDeletedAnnotationElement(t);
                      }
                      detach(t) {
                          this.#Te.delete(t.id);
                          this.#Se?.removePointerInTextLayer(t.contentDiv);
                          !this.#ke && t.annotationElementId && this.#Fe.addDeletedAnnotationElement(t);
                      }
                      remove(t) {
                          this.detach(t);
                          this.#Fe.removeEditor(t);
                          t.div.contains(document.activeElement) &&
                              setTimeout(() => {
                                  this.#Fe.focusMainContainer();
                              }, 0);
                          t.div.remove();
                          t.isAttachedToDOM = !1;
                          this.#Me || this.addInkEditorIfNeeded(!1);
                      }
                      changeParent(t) {
                          if (t.parent !== this) {
                              if (t.annotationElementId) {
                                  this.#Fe.addDeletedAnnotationElement(t.annotationElementId);
                                  n.AnnotationEditor.deleteAnnotationElement(t);
                                  t.annotationElementId = null;
                              }
                              this.attach(t);
                              t.parent?.detach(t);
                              t.setParent(this);
                              if (t.div && t.isAttachedToDOM) {
                                  t.div.remove();
                                  this.div.append(t.div);
                              }
                          }
                      }
                      add(t) {
                          this.changeParent(t);
                          this.#Fe.addEditor(t);
                          this.attach(t);
                          if (!t.isAttachedToDOM) {
                              const e = t.render();
                              this.div.append(e);
                              t.isAttachedToDOM = !0;
                          }
                          t.fixAndSetPosition();
                          t.onceAdded();
                          this.#Fe.addToAnnotationStorage(t);
                      }
                      moveEditorInDOM(t) {
                          if (!t.isAttachedToDOM) return;
                          const { activeElement: e } = document;
                          if (t.div.contains(e)) {
                              t._focusEventsAllowed = !1;
                              setTimeout(() => {
                                  if (t.div.contains(document.activeElement)) t._focusEventsAllowed = !0;
                                  else {
                                      t.div.addEventListener(
                                          "focusin",
                                          () => {
                                              t._focusEventsAllowed = !0;
                                          },
                                          { once: !0 }
                                      );
                                      e.focus();
                                  }
                              }, 0);
                          }
                          t._structTreeParentId = this.#Se?.moveElementInDOM(this.div, t.div, t.contentDiv, !0);
                      }
                      addOrRebuild(t) {
                          t.needsToBeRebuilt() ? t.rebuild() : this.add(t);
                      }
                      addUndoableEditor(t) {
                          this.addCommands({
                              cmd: () => t._uiManager.rebuild(t),
                              undo: () => {
                                  t.remove();
                              },
                              mustExec: !1,
                          });
                      }
                      getNextId() {
                          return this.#Fe.getId();
                      }
                      #Ie(t) {
                          switch (this.#Fe.getMode()) {
                              case s.AnnotationEditorType.FREETEXT:
                                  return new a.FreeTextEditor(t);
                              case s.AnnotationEditorType.INK:
                                  return new r.InkEditor(t);
                              case s.AnnotationEditorType.STAMP:
                                  return new l.StampEditor(t);
                          }
                          return null;
                      }
                      pasteEditor(t, e) {
                          this.#Fe.updateToolbar(t);
                          this.#Fe.updateMode(t);
                          const { offsetX: i, offsetY: s } = this.#Le(),
                              n = this.getNextId(),
                              a = this.#Ie({ parent: this, id: n, x: i, y: s, uiManager: this.#Fe, isCentered: !0, ...e });
                          a && this.add(a);
                      }
                      deserialize(t) {
                          switch (t.annotationType ?? t.annotationEditorType) {
                              case s.AnnotationEditorType.FREETEXT:
                                  return a.FreeTextEditor.deserialize(t, this, this.#Fe);
                              case s.AnnotationEditorType.INK:
                                  return r.InkEditor.deserialize(t, this, this.#Fe);
                              case s.AnnotationEditorType.STAMP:
                                  return l.StampEditor.deserialize(t, this, this.#Fe);
                          }
                          return null;
                      }
                      #De(t, e) {
                          const i = this.getNextId(),
                              s = this.#Ie({ parent: this, id: i, x: t.offsetX, y: t.offsetY, uiManager: this.#Fe, isCentered: e });
                          s && this.add(s);
                          return s;
                      }
                      #Le() {
                          const { x: t, y: e, width: i, height: s } = this.div.getBoundingClientRect(),
                              n = Math.max(0, t),
                              a = Math.max(0, e),
                              r = (n + Math.min(window.innerWidth, t + i)) / 2 - t,
                              o = (a + Math.min(window.innerHeight, e + s)) / 2 - e,
                              [l, h] = this.viewport.rotation % 180 == 0 ? [r, o] : [o, r];
                          return { offsetX: l, offsetY: h };
                      }
                      addNewEditor() {
                          this.#De(this.#Le(), !0);
                      }
                      setSelected(t) {
                          this.#Fe.setSelected(t);
                      }
                      toggleSelected(t) {
                          this.#Fe.toggleSelected(t);
                      }
                      isSelected(t) {
                          return this.#Fe.isSelected(t);
                      }
                      unselect(t) {
                          this.#Fe.unselect(t);
                      }
                      pointerup(t) {
                          const { isMac: e } = s.FeatureTest.platform;
                          if (!(0 !== t.button || (t.ctrlKey && e)) && t.target === this.div && this.#Pe) {
                              this.#Pe = !1;
                              this.#Ee ? (this.#Fe.getMode() !== s.AnnotationEditorType.STAMP ? this.#De(t, !1) : this.#Fe.unselectAll()) : (this.#Ee = !0);
                          }
                      }
                      pointerdown(t) {
                          if (this.#Pe) {
                              this.#Pe = !1;
                              return;
                          }
                          const { isMac: e } = s.FeatureTest.platform;
                          if (0 !== t.button || (t.ctrlKey && e)) return;
                          if (t.target !== this.div) return;
                          this.#Pe = !0;
                          const i = this.#Fe.getActive();
                          this.#Ee = !i || i.isEmpty();
                      }
                      findNewParent(t, e, i) {
                          const s = this.#Fe.findParent(e, i);
                          if (null === s || s === this) return !1;
                          s.changeParent(t);
                          return !0;
                      }
                      destroy() {
                          if (this.#Fe.getActive()?.parent === this) {
                              this.#Fe.commitOrRemove();
                              this.#Fe.setActiveEditor(null);
                          }
                          for (const t of this.#Te.values()) {
                              this.#Se?.removePointerInTextLayer(t.contentDiv);
                              t.setParent(null);
                              t.isAttachedToDOM = !1;
                              t.div.remove();
                          }
                          this.div = null;
                          this.#Te.clear();
                          this.#Fe.removeLayer(this);
                      }
                      #Re() {
                          this.#Me = !0;
                          for (const t of this.#Te.values()) t.isEmpty() && t.remove();
                          this.#Me = !1;
                      }
                      render({ viewport: t }) {
                          this.viewport = t;
                          (0, o.setLayerDimensions)(this.div, t);
                          for (const t of this.#Fe.getEditors(this.pageIndex)) this.add(t);
                          this.updateMode();
                      }
                      update({ viewport: t }) {
                          this.#Fe.commitOrRemove();
                          this.viewport = t;
                          (0, o.setLayerDimensions)(this.div, { rotation: t.rotation });
                          this.updateMode();
                      }
                      get pageDimensions() {
                          const { pageWidth: t, pageHeight: e } = this.viewport.rawDims;
                          return [t, e];
                      }
                  }
                  e.AnnotationEditorLayer = AnnotationEditorLayer;
              },
              (t, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 });
                  e.FreeTextEditor = void 0;
                  var s = i(1),
                      n = i(5),
                      a = i(4),
                      r = i(29);
                  class FreeTextEditor extends a.AnnotationEditor {
                      #Oe = this.editorDivBlur.bind(this);
                      #Ne = this.editorDivFocus.bind(this);
                      #Be = this.editorDivInput.bind(this);
                      #Ue = this.editorDivKeydown.bind(this);
                      #je;
                      #ze = "";
                      #He = `${this.id}-editor`;
                      #We;
                      #Ge = null;
                      static _freeTextDefaultContent = "";
                      static _internalPadding = 0;
                      static _defaultColor = null;
                      static _defaultFontSize = 10;
                      static get _keyboardManager() {
                          const t = FreeTextEditor.prototype,
                              arrowChecker = (t) => t.isEmpty(),
                              e = n.AnnotationEditorUIManager.TRANSLATE_SMALL,
                              i = n.AnnotationEditorUIManager.TRANSLATE_BIG;
                          return (0, s.shadow)(
                              this,
                              "_keyboardManager",
                              new n.KeyboardManager([
                                  [["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], t.commitOrRemove, { bubbles: !0 }],
                                  [["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], t.commitOrRemove],
                                  [["ArrowLeft", "mac+ArrowLeft"], t._translateEmpty, { args: [-e, 0], checker: arrowChecker }],
                                  [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t._translateEmpty, { args: [-i, 0], checker: arrowChecker }],
                                  [["ArrowRight", "mac+ArrowRight"], t._translateEmpty, { args: [e, 0], checker: arrowChecker }],
                                  [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t._translateEmpty, { args: [i, 0], checker: arrowChecker }],
                                  [["ArrowUp", "mac+ArrowUp"], t._translateEmpty, { args: [0, -e], checker: arrowChecker }],
                                  [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t._translateEmpty, { args: [0, -i], checker: arrowChecker }],
                                  [["ArrowDown", "mac+ArrowDown"], t._translateEmpty, { args: [0, e], checker: arrowChecker }],
                                  [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t._translateEmpty, { args: [0, i], checker: arrowChecker }],
                              ])
                          );
                      }
                      static _type = "freetext";
                      constructor(t) {
                          super({ ...t, name: "freeTextEditor" });
                          this.#je = t.color || FreeTextEditor._defaultColor || a.AnnotationEditor._defaultLineColor;
                          this.#We = t.fontSize || FreeTextEditor._defaultFontSize;
                      }
                      static initialize(t) {
                          a.AnnotationEditor.initialize(t, { strings: ["free_text2_default_content", "editor_free_text2_aria_label"] });
                          const e = getComputedStyle(document.documentElement);
                          this._internalPadding = parseFloat(e.getPropertyValue("--freetext-padding"));
                      }
                      static updateDefaultParams(t, e) {
                          switch (t) {
                              case s.AnnotationEditorParamsType.FREETEXT_SIZE:
                                  FreeTextEditor._defaultFontSize = e;
                                  break;
                              case s.AnnotationEditorParamsType.FREETEXT_COLOR:
                                  FreeTextEditor._defaultColor = e;
                          }
                      }
                      updateParams(t, e) {
                          switch (t) {
                              case s.AnnotationEditorParamsType.FREETEXT_SIZE:
                                  this.#qe(e);
                                  break;
                              case s.AnnotationEditorParamsType.FREETEXT_COLOR:
                                  this.#Ve(e);
                          }
                      }
                      static get defaultPropertiesToUpdate() {
                          return [
                              [s.AnnotationEditorParamsType.FREETEXT_SIZE, FreeTextEditor._defaultFontSize],
                              [s.AnnotationEditorParamsType.FREETEXT_COLOR, FreeTextEditor._defaultColor || a.AnnotationEditor._defaultLineColor],
                          ];
                      }
                      get propertiesToUpdate() {
                          return [
                              [s.AnnotationEditorParamsType.FREETEXT_SIZE, this.#We],
                              [s.AnnotationEditorParamsType.FREETEXT_COLOR, this.#je],
                          ];
                      }
                      #qe(t) {
                          const setFontsize = (t) => {
                                  this.editorDiv.style.fontSize = `calc(${t}px * var(--scale-factor))`;
                                  this.translate(0, -(t - this.#We) * this.parentScale);
                                  this.#We = t;
                                  this.#$e();
                              },
                              e = this.#We;
                          this.addCommands({
                              cmd: () => {
                                  setFontsize(t);
                              },
                              undo: () => {
                                  setFontsize(e);
                              },
                              mustExec: !0,
                              type: s.AnnotationEditorParamsType.FREETEXT_SIZE,
                              overwriteIfSameType: !0,
                              keepUndo: !0,
                          });
                      }
                      #Ve(t) {
                          const e = this.#je;
                          this.addCommands({
                              cmd: () => {
                                  this.#je = this.editorDiv.style.color = t;
                              },
                              undo: () => {
                                  this.#je = this.editorDiv.style.color = e;
                              },
                              mustExec: !0,
                              type: s.AnnotationEditorParamsType.FREETEXT_COLOR,
                              overwriteIfSameType: !0,
                              keepUndo: !0,
                          });
                      }
                      _translateEmpty(t, e) {
                          this._uiManager.translateSelectedEditors(t, e, !0);
                      }
                      getInitialTranslation() {
                          const t = this.parentScale;
                          return [-FreeTextEditor._internalPadding * t, -(FreeTextEditor._internalPadding + this.#We) * t];
                      }
                      rebuild() {
                          if (this.parent) {
                              super.rebuild();
                              null !== this.div && (this.isAttachedToDOM || this.parent.add(this));
                          }
                      }
                      enableEditMode() {
                          if (!this.isInEditMode()) {
                              this.parent.setEditingState(!1);
                              this.parent.updateToolbar(s.AnnotationEditorType.FREETEXT);
                              super.enableEditMode();
                              this.overlayDiv.classList.remove("enabled");
                              this.editorDiv.contentEditable = !0;
                              this._isDraggable = !1;
                              this.div.removeAttribute("aria-activedescendant");
                              this.editorDiv.addEventListener("keydown", this.#Ue);
                              this.editorDiv.addEventListener("focus", this.#Ne);
                              this.editorDiv.addEventListener("blur", this.#Oe);
                              this.editorDiv.addEventListener("input", this.#Be);
                          }
                      }
                      disableEditMode() {
                          if (this.isInEditMode()) {
                              this.parent.setEditingState(!0);
                              super.disableEditMode();
                              this.overlayDiv.classList.add("enabled");
                              this.editorDiv.contentEditable = !1;
                              this.div.setAttribute("aria-activedescendant", this.#He);
                              this._isDraggable = !0;
                              this.editorDiv.removeEventListener("keydown", this.#Ue);
                              this.editorDiv.removeEventListener("focus", this.#Ne);
                              this.editorDiv.removeEventListener("blur", this.#Oe);
                              this.editorDiv.removeEventListener("input", this.#Be);
                              this.div.focus({ preventScroll: !0 });
                              this.isEditing = !1;
                              this.parent.div.classList.add("freeTextEditing");
                          }
                      }
                      focusin(t) {
                          if (this._focusEventsAllowed) {
                              super.focusin(t);
                              t.target !== this.editorDiv && this.editorDiv.focus();
                          }
                      }
                      onceAdded() {
                          if (this.width) this.#Xe();
                          else {
                              this.enableEditMode();
                              this.editorDiv.focus();
                              this._initialOptions?.isCentered && this.center();
                              this._initialOptions = null;
                          }
                      }
                      isEmpty() {
                          return !this.editorDiv || "" === this.editorDiv.innerText.trim();
                      }
                      remove() {
                          this.isEditing = !1;
                          if (this.parent) {
                              this.parent.setEditingState(!0);
                              this.parent.div.classList.add("freeTextEditing");
                          }
                          super.remove();
                      }
                      #Ke() {
                          const t = this.editorDiv.getElementsByTagName("div");
                          if (0 === t.length) return this.editorDiv.innerText;
                          const e = [];
                          for (const i of t) e.push(i.innerText.replace(/\r\n?|\n/, ""));
                          return e.join("\n");
                      }
                      #$e() {
                          const [t, e] = this.parentDimensions;
                          let i;
                          if (this.isAttachedToDOM) i = this.div.getBoundingClientRect();
                          else {
                              const { currentLayer: t, div: e } = this,
                                  s = e.style.display;
                              e.style.display = "hidden";
                              t.div.append(this.div);
                              i = e.getBoundingClientRect();
                              e.remove();
                              e.style.display = s;
                          }
                          if (this.rotation % 180 == this.parentRotation % 180) {
                              this.width = i.width / t;
                              this.height = i.height / e;
                          } else {
                              this.width = i.height / t;
                              this.height = i.width / e;
                          }
                          this.fixAndSetPosition();
                      }
                      commit() {
                          if (!this.isInEditMode()) return;
                          super.commit();
                          this.disableEditMode();
                          const t = this.#ze,
                              e = (this.#ze = this.#Ke().trimEnd());
                          if (t === e) return;
                          const setText = (t) => {
                              this.#ze = t;
                              if (t) {
                                  this.#Ye();
                                  this._uiManager.rebuild(this);
                                  this.#$e();
                              } else this.remove();
                          };
                          this.addCommands({
                              cmd: () => {
                                  setText(e);
                              },
                              undo: () => {
                                  setText(t);
                              },
                              mustExec: !1,
                          });
                          this.#$e();
                      }
                      shouldGetKeyboardEvents() {
                          return this.isInEditMode();
                      }
                      enterInEditMode() {
                          this.enableEditMode();
                          this.editorDiv.focus();
                      }
                      dblclick(t) {
                          this.enterInEditMode();
                      }
                      keydown(t) {
                          if (t.target === this.div && "Enter" === t.key) {
                              this.enterInEditMode();
                              t.preventDefault();
                          }
                      }
                      editorDivKeydown(t) {
                          FreeTextEditor._keyboardManager.exec(this, t);
                      }
                      editorDivFocus(t) {
                          this.isEditing = !0;
                      }
                      editorDivBlur(t) {
                          this.isEditing = !1;
                      }
                      editorDivInput(t) {
                          this.parent.div.classList.toggle("freeTextEditing", this.isEmpty());
                      }
                      disableEditing() {
                          this.editorDiv.setAttribute("role", "comment");
                          this.editorDiv.removeAttribute("aria-multiline");
                      }
                      enableEditing() {
                          this.editorDiv.setAttribute("role", "textbox");
                          this.editorDiv.setAttribute("aria-multiline", !0);
                      }
                      render() {
                          if (this.div) return this.div;
                          let t, e;
                          if (this.width) {
                              t = this.x;
                              e = this.y;
                          }
                          super.render();
                          this.editorDiv = document.createElement("div");
                          this.editorDiv.className = "internal";
                          this.editorDiv.setAttribute("id", this.#He);
                          this.enableEditing();
                          a.AnnotationEditor._l10nPromise.get("editor_free_text2_aria_label").then((t) => this.editorDiv?.setAttribute("aria-label", t));
                          a.AnnotationEditor._l10nPromise.get("free_text2_default_content").then((t) => this.editorDiv?.setAttribute("default-content", t));
                          this.editorDiv.contentEditable = !0;
                          const { style: i } = this.editorDiv;
                          i.fontSize = `calc(${this.#We}px * var(--scale-factor))`;
                          i.color = this.#je;
                          this.div.append(this.editorDiv);
                          this.overlayDiv = document.createElement("div");
                          this.overlayDiv.classList.add("overlay", "enabled");
                          this.div.append(this.overlayDiv);
                          (0, n.bindEvents)(this, this.div, ["dblclick", "keydown"]);
                          if (this.width) {
                              const [i, s] = this.parentDimensions;
                              if (this.annotationElementId) {
                                  const { position: n } = this.#Ge;
                                  let [a, r] = this.getInitialTranslation();
                                  [a, r] = this.pageTranslationToScreen(a, r);
                                  const [o, l] = this.pageDimensions,
                                      [h, c] = this.pageTranslation;
                                  let d, u;
                                  switch (this.rotation) {
                                      case 0:
                                          d = t + (n[0] - h) / o;
                                          u = e + this.height - (n[1] - c) / l;
                                          break;
                                      case 90:
                                          d = t + (n[0] - h) / o;
                                          u = e - (n[1] - c) / l;
                                          [a, r] = [r, -a];
                                          break;
                                      case 180:
                                          d = t - this.width + (n[0] - h) / o;
                                          u = e - (n[1] - c) / l;
                                          [a, r] = [-a, -r];
                                          break;
                                      case 270:
                                          d = t + (n[0] - h - this.height * l) / o;
                                          u = e + (n[1] - c - this.width * o) / l;
                                          [a, r] = [-r, a];
                                  }
                                  this.setAt(d * i, u * s, a, r);
                              } else this.setAt(t * i, e * s, this.width * i, this.height * s);
                              this.#Ye();
                              this._isDraggable = !0;
                              this.editorDiv.contentEditable = !1;
                          } else {
                              this._isDraggable = !1;
                              this.editorDiv.contentEditable = !0;
                          }
                          return this.div;
                      }
                      #Ye() {
                          this.editorDiv.replaceChildren();
                          if (this.#ze)
                              for (const t of this.#ze.split("\n")) {
                                  const e = document.createElement("div");
                                  e.append(t ? document.createTextNode(t) : document.createElement("br"));
                                  this.editorDiv.append(e);
                              }
                      }
                      get contentDiv() {
                          return this.editorDiv;
                      }
                      static deserialize(t, e, i) {
                          let n = null;
                          if (t instanceof r.FreeTextAnnotationElement) {
                              const {
                                  data: {
                                      defaultAppearanceData: { fontSize: e, fontColor: i },
                                      rect: a,
                                      rotation: r,
                                      id: o,
                                  },
                                  textContent: l,
                                  textPosition: h,
                                  parent: {
                                      page: { pageNumber: c },
                                  },
                              } = t;
                              if (!l || 0 === l.length) return null;
                              n = t = { annotationType: s.AnnotationEditorType.FREETEXT, color: Array.from(i), fontSize: e, value: l.join("\n"), position: h, pageIndex: c - 1, rect: a, rotation: r, id: o, deleted: !1 };
                          }
                          const a = super.deserialize(t, e, i);
                          a.#We = t.fontSize;
                          a.#je = s.Util.makeHexColor(...t.color);
                          a.#ze = t.value;
                          a.annotationElementId = t.id || null;
                          a.#Ge = n;
                          return a;
                      }
                      serialize(t = !1) {
                          if (this.isEmpty()) return null;
                          if (this.deleted) return { pageIndex: this.pageIndex, id: this.annotationElementId, deleted: !0 };
                          const e = FreeTextEditor._internalPadding * this.parentScale,
                              i = this.getRect(e, e),
                              n = a.AnnotationEditor._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : this.#je),
                              r = {
                                  annotationType: s.AnnotationEditorType.FREETEXT,
                                  color: n,
                                  fontSize: this.#We,
                                  value: this.#ze,
                                  pageIndex: this.pageIndex,
                                  rect: i,
                                  rotation: this.rotation,
                                  structTreeParentId: this._structTreeParentId,
                              };
                          if (t) return r;
                          if (this.annotationElementId && !this.#Je(r)) return null;
                          r.id = this.annotationElementId;
                          return r;
                      }
                      #Je(t) {
                          const { value: e, fontSize: i, color: s, rect: n, pageIndex: a } = this.#Ge;
                          return t.value !== e || t.fontSize !== i || t.rect.some((t, e) => Math.abs(t - n[e]) >= 1) || t.color.some((t, e) => t !== s[e]) || t.pageIndex !== a;
                      }
                      #Xe(t = !1) {
                          if (!this.annotationElementId) return;
                          this.#$e();
                          if (!t && (0 === this.width || 0 === this.height)) {
                              setTimeout(() => this.#Xe(!0), 0);
                              return;
                          }
                          const e = FreeTextEditor._internalPadding * this.parentScale;
                          this.#Ge.rect = this.getRect(e, e);
                      }
                  }
                  e.FreeTextEditor = FreeTextEditor;
              },
              (t, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 });
                  e.StampAnnotationElement = e.InkAnnotationElement = e.FreeTextAnnotationElement = e.AnnotationLayer = void 0;
                  var s = i(1),
                      n = i(6),
                      a = i(3),
                      r = i(30),
                      o = i(31),
                      l = i(32);
                  const h = 1e3,
                      c = new WeakSet();
                  function getRectDims(t) {
                      return { width: t[2] - t[0], height: t[3] - t[1] };
                  }
                  class AnnotationElementFactory {
                      static create(t) {
                          switch (t.data.annotationType) {
                              case s.AnnotationType.LINK:
                                  return new LinkAnnotationElement(t);
                              case s.AnnotationType.TEXT:
                                  return new TextAnnotationElement(t);
                              case s.AnnotationType.WIDGET:
                                  switch (t.data.fieldType) {
                                      case "Tx":
                                          return new TextWidgetAnnotationElement(t);
                                      case "Btn":
                                          return t.data.radioButton ? new RadioButtonWidgetAnnotationElement(t) : t.data.checkBox ? new CheckboxWidgetAnnotationElement(t) : new PushButtonWidgetAnnotationElement(t);
                                      case "Ch":
                                          return new ChoiceWidgetAnnotationElement(t);
                                      case "Sig":
                                          return new SignatureWidgetAnnotationElement(t);
                                  }
                                  return new WidgetAnnotationElement(t);
                              case s.AnnotationType.POPUP:
                                  return new PopupAnnotationElement(t);
                              case s.AnnotationType.FREETEXT:
                                  return new FreeTextAnnotationElement(t);
                              case s.AnnotationType.LINE:
                                  return new LineAnnotationElement(t);
                              case s.AnnotationType.SQUARE:
                                  return new SquareAnnotationElement(t);
                              case s.AnnotationType.CIRCLE:
                                  return new CircleAnnotationElement(t);
                              case s.AnnotationType.POLYLINE:
                                  return new PolylineAnnotationElement(t);
                              case s.AnnotationType.CARET:
                                  return new CaretAnnotationElement(t);
                              case s.AnnotationType.INK:
                                  return new InkAnnotationElement(t);
                              case s.AnnotationType.POLYGON:
                                  return new PolygonAnnotationElement(t);
                              case s.AnnotationType.HIGHLIGHT:
                                  return new HighlightAnnotationElement(t);
                              case s.AnnotationType.UNDERLINE:
                                  return new UnderlineAnnotationElement(t);
                              case s.AnnotationType.SQUIGGLY:
                                  return new SquigglyAnnotationElement(t);
                              case s.AnnotationType.STRIKEOUT:
                                  return new StrikeOutAnnotationElement(t);
                              case s.AnnotationType.STAMP:
                                  return new StampAnnotationElement(t);
                              case s.AnnotationType.FILEATTACHMENT:
                                  return new FileAttachmentAnnotationElement(t);
                              default:
                                  return new AnnotationElement(t);
                          }
                      }
                  }
                  class AnnotationElement {
                      #Qe = !1;
                      constructor(t, { isRenderable: e = !1, ignoreBorder: i = !1, createQuadrilaterals: s = !1 } = {}) {
                          this.isRenderable = e;
                          this.data = t.data;
                          this.layer = t.layer;
                          this.linkService = t.linkService;
                          this.downloadManager = t.downloadManager;
                          this.imageResourcesPath = t.imageResourcesPath;
                          this.renderForms = t.renderForms;
                          this.svgFactory = t.svgFactory;
                          this.annotationStorage = t.annotationStorage;
                          this.enableScripting = t.enableScripting;
                          this.hasJSActions = t.hasJSActions;
                          this._fieldObjects = t.fieldObjects;
                          this.parent = t.parent;
                          e && (this.container = this._createContainer(i));
                          s && this._createQuadrilaterals();
                      }
                      static _hasPopupData({ titleObj: t, contentsObj: e, richText: i }) {
                          return !!(t?.str || e?.str || i?.str);
                      }
                      get hasPopupData() {
                          return AnnotationElement._hasPopupData(this.data);
                      }
                      _createContainer(t) {
                          const {
                                  data: e,
                                  parent: { page: i, viewport: n },
                              } = this,
                              a = document.createElement("section");
                          a.setAttribute("data-annotation-id", e.id);
                          this instanceof WidgetAnnotationElement || (a.tabIndex = h);
                          a.style.zIndex = this.parent.zIndex++;
                          this.data.popupRef && a.setAttribute("aria-haspopup", "dialog");
                          e.noRotate && a.classList.add("norotate");
                          const { pageWidth: r, pageHeight: o, pageX: l, pageY: c } = n.rawDims;
                          if (!e.rect || this instanceof PopupAnnotationElement) {
                              const { rotation: t } = e;
                              e.hasOwnCanvas || 0 === t || this.setRotation(t, a);
                              return a;
                          }
                          const { width: d, height: u } = getRectDims(e.rect),
                              p = s.Util.normalizeRect([e.rect[0], i.view[3] - e.rect[1] + i.view[1], e.rect[2], i.view[3] - e.rect[3] + i.view[1]]);
                          if (!t && e.borderStyle.width > 0) {
                              a.style.borderWidth = `${e.borderStyle.width}px`;
                              const t = e.borderStyle.horizontalCornerRadius,
                                  i = e.borderStyle.verticalCornerRadius;
                              if (t > 0 || i > 0) {
                                  const e = `calc(${t}px * var(--scale-factor)) / calc(${i}px * var(--scale-factor))`;
                                  a.style.borderRadius = e;
                              } else if (this instanceof RadioButtonWidgetAnnotationElement) {
                                  const t = `calc(${d}px * var(--scale-factor)) / calc(${u}px * var(--scale-factor))`;
                                  a.style.borderRadius = t;
                              }
                              switch (e.borderStyle.style) {
                                  case s.AnnotationBorderStyleType.SOLID:
                                      a.style.borderStyle = "solid";
                                      break;
                                  case s.AnnotationBorderStyleType.DASHED:
                                      a.style.borderStyle = "dashed";
                                      break;
                                  case s.AnnotationBorderStyleType.BEVELED:
                                      (0, s.warn)("Unimplemented border style: beveled");
                                      break;
                                  case s.AnnotationBorderStyleType.INSET:
                                      (0, s.warn)("Unimplemented border style: inset");
                                      break;
                                  case s.AnnotationBorderStyleType.UNDERLINE:
                                      a.style.borderBottomStyle = "solid";
                              }
                              const n = e.borderColor || null;
                              if (n) {
                                  this.#Qe = !0;
                                  a.style.borderColor = s.Util.makeHexColor(0 | n[0], 0 | n[1], 0 | n[2]);
                              } else a.style.borderWidth = 0;
                          }
                          a.style.left = (100 * (p[0] - l)) / r + "%";
                          a.style.top = (100 * (p[1] - c)) / o + "%";
                          const { rotation: g } = e;
                          if (e.hasOwnCanvas || 0 === g) {
                              a.style.width = (100 * d) / r + "%";
                              a.style.height = (100 * u) / o + "%";
                          } else this.setRotation(g, a);
                          return a;
                      }
                      setRotation(t, e = this.container) {
                          if (!this.data.rect) return;
                          const { pageWidth: i, pageHeight: s } = this.parent.viewport.rawDims,
                              { width: n, height: a } = getRectDims(this.data.rect);
                          let r, o;
                          if (t % 180 == 0) {
                              r = (100 * n) / i;
                              o = (100 * a) / s;
                          } else {
                              r = (100 * a) / i;
                              o = (100 * n) / s;
                          }
                          e.style.width = `${r}%`;
                          e.style.height = `${o}%`;
                          e.setAttribute("data-main-rotation", (360 - t) % 360);
                      }
                      get _commonActions() {
                          const setColor = (t, e, i) => {
                              const s = i.detail[t],
                                  n = s[0],
                                  a = s.slice(1);
                              i.target.style[e] = r.ColorConverters[`${n}_HTML`](a);
                              this.annotationStorage.setValue(this.data.id, { [e]: r.ColorConverters[`${n}_rgb`](a) });
                          };
                          return (0, s.shadow)(this, "_commonActions", {
                              display: (t) => {
                                  const { display: e } = t.detail,
                                      i = e % 2 == 1;
                                  this.container.style.visibility = i ? "hidden" : "visible";
                                  this.annotationStorage.setValue(this.data.id, { noView: i, noPrint: 1 === e || 2 === e });
                              },
                              print: (t) => {
                                  this.annotationStorage.setValue(this.data.id, { noPrint: !t.detail.print });
                              },
                              hidden: (t) => {
                                  const { hidden: e } = t.detail;
                                  this.container.style.visibility = e ? "hidden" : "visible";
                                  this.annotationStorage.setValue(this.data.id, { noPrint: e, noView: e });
                              },
                              focus: (t) => {
                                  setTimeout(() => t.target.focus({ preventScroll: !1 }), 0);
                              },
                              userName: (t) => {
                                  t.target.title = t.detail.userName;
                              },
                              readonly: (t) => {
                                  t.target.disabled = t.detail.readonly;
                              },
                              required: (t) => {
                                  this._setRequired(t.target, t.detail.required);
                              },
                              bgColor: (t) => {
                                  setColor("bgColor", "backgroundColor", t);
                              },
                              fillColor: (t) => {
                                  setColor("fillColor", "backgroundColor", t);
                              },
                              fgColor: (t) => {
                                  setColor("fgColor", "color", t);
                              },
                              textColor: (t) => {
                                  setColor("textColor", "color", t);
                              },
                              borderColor: (t) => {
                                  setColor("borderColor", "borderColor", t);
                              },
                              strokeColor: (t) => {
                                  setColor("strokeColor", "borderColor", t);
                              },
                              rotation: (t) => {
                                  const e = t.detail.rotation;
                                  this.setRotation(e);
                                  this.annotationStorage.setValue(this.data.id, { rotation: e });
                              },
                          });
                      }
                      _dispatchEventFromSandbox(t, e) {
                          const i = this._commonActions;
                          for (const s of Object.keys(e.detail)) {
                              const n = t[s] || i[s];
                              n?.(e);
                          }
                      }
                      _setDefaultPropertiesFromJS(t) {
                          if (!this.enableScripting) return;
                          const e = this.annotationStorage.getRawValue(this.data.id);
                          if (!e) return;
                          const i = this._commonActions;
                          for (const [s, n] of Object.entries(e)) {
                              const a = i[s];
                              if (a) {
                                  a({ detail: { [s]: n }, target: t });
                                  delete e[s];
                              }
                          }
                      }
                      _createQuadrilaterals() {
                          if (!this.container) return;
                          const { quadPoints: t } = this.data;
                          if (!t) return;
                          const [e, i, s, n] = this.data.rect;
                          if (1 === t.length) {
                              const [, { x: a, y: r }, { x: o, y: l }] = t[0];
                              if (s === a && n === r && e === o && i === l) return;
                          }
                          const { style: a } = this.container;
                          let r;
                          if (this.#Qe) {
                              const { borderColor: t, borderWidth: e } = a;
                              a.borderWidth = 0;
                              r = ["url('data:image/svg+xml;utf8,", '<svg xmlns="http://www.w3.org/2000/svg"', ' preserveAspectRatio="none" viewBox="0 0 1 1">', `<g fill="transparent" stroke="${t}" stroke-width="${e}">`];
                              this.container.classList.add("hasBorder");
                          }
                          const o = s - e,
                              l = n - i,
                              { svgFactory: h } = this,
                              c = h.createElement("svg");
                          c.classList.add("quadrilateralsContainer");
                          c.setAttribute("width", 0);
                          c.setAttribute("height", 0);
                          const d = h.createElement("defs");
                          c.append(d);
                          const u = h.createElement("clipPath"),
                              p = `clippath_${this.data.id}`;
                          u.setAttribute("id", p);
                          u.setAttribute("clipPathUnits", "objectBoundingBox");
                          d.append(u);
                          for (const [, { x: i, y: s }, { x: a, y: c }] of t) {
                              const t = h.createElement("rect"),
                                  d = (a - e) / o,
                                  p = (n - s) / l,
                                  g = (i - a) / o,
                                  m = (s - c) / l;
                              t.setAttribute("x", d);
                              t.setAttribute("y", p);
                              t.setAttribute("width", g);
                              t.setAttribute("height", m);
                              u.append(t);
                              r?.push(`<rect vector-effect="non-scaling-stroke" x="${d}" y="${p}" width="${g}" height="${m}"/>`);
                          }
                          if (this.#Qe) {
                              r.push("</g></svg>')");
                              a.backgroundImage = r.join("");
                          }
                          this.container.append(c);
                          this.container.style.clipPath = `url(#${p})`;
                      }
                      _createPopup() {
                          const { container: t, data: e } = this;
                          t.setAttribute("aria-haspopup", "dialog");
                          const i = new PopupAnnotationElement({
                              data: {
                                  color: e.color,
                                  titleObj: e.titleObj,
                                  modificationDate: e.modificationDate,
                                  contentsObj: e.contentsObj,
                                  richText: e.richText,
                                  parentRect: e.rect,
                                  borderStyle: 0,
                                  id: `popup_${e.id}`,
                                  rotation: e.rotation,
                              },
                              parent: this.parent,
                              elements: [this],
                          });
                          this.parent.div.append(i.render());
                      }
                      render() {
                          (0, s.unreachable)("Abstract method `AnnotationElement.render` called");
                      }
                      _getElementsByName(t, e = null) {
                          const i = [];
                          if (this._fieldObjects) {
                              const n = this._fieldObjects[t];
                              if (n)
                                  for (const { page: t, id: a, exportValues: r } of n) {
                                      if (-1 === t) continue;
                                      if (a === e) continue;
                                      const n = "string" == typeof r ? r : null,
                                          o = document.querySelector(`[data-element-id="${a}"]`);
                                      !o || c.has(o) ? i.push({ id: a, exportValue: n, domElement: o }) : (0, s.warn)(`_getElementsByName - element not allowed: ${a}`);
                                  }
                              return i;
                          }
                          for (const s of document.getElementsByName(t)) {
                              const { exportValue: t } = s,
                                  n = s.getAttribute("data-element-id");
                              n !== e && c.has(s) && i.push({ id: n, exportValue: t, domElement: s });
                          }
                          return i;
                      }
                      show() {
                          this.container && (this.container.hidden = !1);
                          this.popup?.maybeShow();
                      }
                      hide() {
                          this.container && (this.container.hidden = !0);
                          this.popup?.forceHide();
                      }
                      getElementsToTriggerPopup() {
                          return this.container;
                      }
                      addHighlightArea() {
                          const t = this.getElementsToTriggerPopup();
                          if (Array.isArray(t)) for (const e of t) e.classList.add("highlightArea");
                          else t.classList.add("highlightArea");
                      }
                      _editOnDoubleClick() {
                          const {
                              annotationEditorType: t,
                              data: { id: e },
                          } = this;
                          this.container.addEventListener("dblclick", () => {
                              this.linkService.eventBus?.dispatch("switchannotationeditormode", { source: this, mode: t, editId: e });
                          });
                      }
                  }
                  class LinkAnnotationElement extends AnnotationElement {
                      constructor(t, e = null) {
                          super(t, { isRenderable: !0, ignoreBorder: !!e?.ignoreBorder, createQuadrilaterals: !0 });
                          this.isTooltipOnly = t.data.isTooltipOnly;
                      }
                      render() {
                          const { data: t, linkService: e } = this,
                              i = document.createElement("a");
                          i.setAttribute("data-element-id", t.id);
                          let s = !1;
                          if (t.url) {
                              e.addLinkAttributes(i, t.url, t.newWindow);
                              s = !0;
                          } else if (t.action) {
                              this._bindNamedAction(i, t.action);
                              s = !0;
                          } else if (t.attachment) {
                              this._bindAttachment(i, t.attachment);
                              s = !0;
                          } else if (t.setOCGState) {
                              this.#Ze(i, t.setOCGState);
                              s = !0;
                          } else if (t.dest) {
                              this._bindLink(i, t.dest);
                              s = !0;
                          } else {
                              if (t.actions && (t.actions.Action || t.actions["Mouse Up"] || t.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions) {
                                  this._bindJSAction(i, t);
                                  s = !0;
                              }
                              if (t.resetForm) {
                                  this._bindResetFormAction(i, t.resetForm);
                                  s = !0;
                              } else if (this.isTooltipOnly && !s) {
                                  this._bindLink(i, "");
                                  s = !0;
                              }
                          }
                          this.container.classList.add("linkAnnotation");
                          s && this.container.append(i);
                          return this.container;
                      }
                      #ti() {
                          this.container.setAttribute("data-internal-link", "");
                      }
                      _bindLink(t, e) {
                          t.href = this.linkService.getDestinationHash(e);
                          t.onclick = () => {
                              e && this.linkService.goToDestination(e);
                              return !1;
                          };
                          (e || "" === e) && this.#ti();
                      }
                      _bindNamedAction(t, e) {
                          t.href = this.linkService.getAnchorUrl("");
                          t.onclick = () => {
                              this.linkService.executeNamedAction(e);
                              return !1;
                          };
                          this.#ti();
                      }
                      _bindAttachment(t, e) {
                          t.href = this.linkService.getAnchorUrl("");
                          t.onclick = () => {
                              this.downloadManager?.openOrDownloadData(this.container, e.content, e.filename);
                              return !1;
                          };
                          this.#ti();
                      }
                      #Ze(t, e) {
                          t.href = this.linkService.getAnchorUrl("");
                          t.onclick = () => {
                              this.linkService.executeSetOCGState(e);
                              return !1;
                          };
                          this.#ti();
                      }
                      _bindJSAction(t, e) {
                          t.href = this.linkService.getAnchorUrl("");
                          const i = new Map([
                              ["Action", "onclick"],
                              ["Mouse Up", "onmouseup"],
                              ["Mouse Down", "onmousedown"],
                          ]);
                          for (const s of Object.keys(e.actions)) {
                              const n = i.get(s);
                              n &&
                                  (t[n] = () => {
                                      this.linkService.eventBus?.dispatch("dispatcheventinsandbox", { source: this, detail: { id: e.id, name: s } });
                                      return !1;
                                  });
                          }
                          t.onclick || (t.onclick = () => !1);
                          this.#ti();
                      }
                      _bindResetFormAction(t, e) {
                          const i = t.onclick;
                          i || (t.href = this.linkService.getAnchorUrl(""));
                          this.#ti();
                          if (this._fieldObjects)
                              t.onclick = () => {
                                  i?.();
                                  const { fields: t, refs: n, include: a } = e,
                                      r = [];
                                  if (0 !== t.length || 0 !== n.length) {
                                      const e = new Set(n);
                                      for (const i of t) {
                                          const t = this._fieldObjects[i] || [];
                                          for (const { id: i } of t) e.add(i);
                                      }
                                      for (const t of Object.values(this._fieldObjects)) for (const i of t) e.has(i.id) === a && r.push(i);
                                  } else for (const t of Object.values(this._fieldObjects)) r.push(...t);
                                  const o = this.annotationStorage,
                                      l = [];
                                  for (const t of r) {
                                      const { id: e } = t;
                                      l.push(e);
                                      switch (t.type) {
                                          case "text": {
                                              const i = t.defaultValue || "";
                                              o.setValue(e, { value: i });
                                              break;
                                          }
                                          case "checkbox":
                                          case "radiobutton": {
                                              const i = t.defaultValue === t.exportValues;
                                              o.setValue(e, { value: i });
                                              break;
                                          }
                                          case "combobox":
                                          case "listbox": {
                                              const i = t.defaultValue || "";
                                              o.setValue(e, { value: i });
                                              break;
                                          }
                                          default:
                                              continue;
                                      }
                                      const i = document.querySelector(`[data-element-id="${e}"]`);
                                      i && (c.has(i) ? i.dispatchEvent(new Event("resetform")) : (0, s.warn)(`_bindResetFormAction - element not allowed: ${e}`));
                                  }
                                  this.enableScripting && this.linkService.eventBus?.dispatch("dispatcheventinsandbox", { source: this, detail: { id: "app", ids: l, name: "ResetForm" } });
                                  return !1;
                              };
                          else {
                              (0, s.warn)('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.');
                              i || (t.onclick = () => !1);
                          }
                      }
                  }
                  class TextAnnotationElement extends AnnotationElement {
                      constructor(t) {
                          super(t, { isRenderable: !0 });
                      }
                      render() {
                          this.container.classList.add("textAnnotation");
                          const t = document.createElement("img");
                          t.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg";
                          t.alt = "[{{type}} Annotation]";
                          t.dataset.l10nId = "text_annotation_type";
                          t.dataset.l10nArgs = JSON.stringify({ type: this.data.name });
                          !this.data.popupRef && this.hasPopupData && this._createPopup();
                          this.container.append(t);
                          return this.container;
                      }
                  }
                  class WidgetAnnotationElement extends AnnotationElement {
                      render() {
                          this.data.alternativeText && (this.container.title = this.data.alternativeText);
                          return this.container;
                      }
                      showElementAndHideCanvas(t) {
                          if (this.data.hasOwnCanvas) {
                              "CANVAS" === t.previousSibling?.nodeName && (t.previousSibling.hidden = !0);
                              t.hidden = !1;
                          }
                      }
                      _getKeyModifier(t) {
                          const { isWin: e, isMac: i } = s.FeatureTest.platform;
                          return (e && t.ctrlKey) || (i && t.metaKey);
                      }
                      _setEventListener(t, e, i, s, n) {
                          i.includes("mouse")
                              ? t.addEventListener(i, (t) => {
                                    this.linkService.eventBus?.dispatch("dispatcheventinsandbox", { source: this, detail: { id: this.data.id, name: s, value: n(t), shift: t.shiftKey, modifier: this._getKeyModifier(t) } });
                                })
                              : t.addEventListener(i, (t) => {
                                    if ("blur" === i) {
                                        if (!e.focused || !t.relatedTarget) return;
                                        e.focused = !1;
                                    } else if ("focus" === i) {
                                        if (e.focused) return;
                                        e.focused = !0;
                                    }
                                    n && this.linkService.eventBus?.dispatch("dispatcheventinsandbox", { source: this, detail: { id: this.data.id, name: s, value: n(t) } });
                                });
                      }
                      _setEventListeners(t, e, i, s) {
                          for (const [n, a] of i)
                              if ("Action" === a || this.data.actions?.[a]) {
                                  ("Focus" !== a && "Blur" !== a) || (e ||= { focused: !1 });
                                  this._setEventListener(t, e, n, a, s);
                                  "Focus" !== a || this.data.actions?.Blur ? "Blur" !== a || this.data.actions?.Focus || this._setEventListener(t, e, "focus", "Focus", null) : this._setEventListener(t, e, "blur", "Blur", null);
                              }
                      }
                      _setBackgroundColor(t) {
                          const e = this.data.backgroundColor || null;
                          t.style.backgroundColor = null === e ? "transparent" : s.Util.makeHexColor(e[0], e[1], e[2]);
                      }
                      _setTextStyle(t) {
                          const e = ["left", "center", "right"],
                              { fontColor: i } = this.data.defaultAppearanceData,
                              n = this.data.defaultAppearanceData.fontSize || 9,
                              a = t.style;
                          let r;
                          const roundToOneDecimal = (t) => Math.round(10 * t) / 10;
                          if (this.data.multiLine) {
                              const t = Math.abs(this.data.rect[3] - this.data.rect[1] - 2),
                                  e = t / (Math.round(t / (s.LINE_FACTOR * n)) || 1);
                              r = Math.min(n, roundToOneDecimal(e / s.LINE_FACTOR));
                          } else {
                              const t = Math.abs(this.data.rect[3] - this.data.rect[1] - 2);
                              r = Math.min(n, roundToOneDecimal(t / s.LINE_FACTOR));
                          }
                          a.fontSize = `calc(${r}px * var(--scale-factor))`;
                          a.color = s.Util.makeHexColor(i[0], i[1], i[2]);
                          null !== this.data.textAlignment && (a.textAlign = e[this.data.textAlignment]);
                      }
                      _setRequired(t, e) {
                          e ? t.setAttribute("required", !0) : t.removeAttribute("required");
                          t.setAttribute("aria-required", e);
                      }
                  }
                  class TextWidgetAnnotationElement extends WidgetAnnotationElement {
                      constructor(t) {
                          super(t, { isRenderable: t.renderForms || (!t.data.hasAppearance && !!t.data.fieldValue) });
                      }
                      setPropertyOnSiblings(t, e, i, s) {
                          const n = this.annotationStorage;
                          for (const a of this._getElementsByName(t.name, t.id)) {
                              a.domElement && (a.domElement[e] = i);
                              n.setValue(a.id, { [s]: i });
                          }
                      }
                      render() {
                          const t = this.annotationStorage,
                              e = this.data.id;
                          this.container.classList.add("textWidgetAnnotation");
                          let i = null;
                          if (this.renderForms) {
                              const s = t.getValue(e, { value: this.data.fieldValue });
                              let n = s.value || "";
                              const a = t.getValue(e, { charLimit: this.data.maxLen }).charLimit;
                              a && n.length > a && (n = n.slice(0, a));
                              let r = s.formattedValue || this.data.textContent?.join("\n") || null;
                              r && this.data.comb && (r = r.replaceAll(/\s+/g, ""));
                              const o = { userValue: n, formattedValue: r, lastCommittedValue: null, commitKey: 1, focused: !1 };
                              if (this.data.multiLine) {
                                  i = document.createElement("textarea");
                                  i.textContent = r ?? n;
                                  this.data.doNotScroll && (i.style.overflowY = "hidden");
                              } else {
                                  i = document.createElement("input");
                                  i.type = "text";
                                  i.setAttribute("value", r ?? n);
                                  this.data.doNotScroll && (i.style.overflowX = "hidden");
                              }
                              this.data.hasOwnCanvas && (i.hidden = !0);
                              c.add(i);
                              i.setAttribute("data-element-id", e);
                              i.disabled = this.data.readOnly;
                              i.name = this.data.fieldName;
                              i.tabIndex = h;
                              this._setRequired(i, this.data.required);
                              a && (i.maxLength = a);
                              i.addEventListener("input", (s) => {
                                  t.setValue(e, { value: s.target.value });
                                  this.setPropertyOnSiblings(i, "value", s.target.value, "value");
                                  o.formattedValue = null;
                              });
                              i.addEventListener("resetform", (t) => {
                                  const e = this.data.defaultFieldValue ?? "";
                                  i.value = o.userValue = e;
                                  o.formattedValue = null;
                              });
                              let blurListener = (t) => {
                                  const { formattedValue: e } = o;
                                  null != e && (t.target.value = e);
                                  t.target.scrollLeft = 0;
                              };
                              if (this.enableScripting && this.hasJSActions) {
                                  i.addEventListener("focus", (t) => {
                                      if (o.focused) return;
                                      const { target: e } = t;
                                      o.userValue && (e.value = o.userValue);
                                      o.lastCommittedValue = e.value;
                                      o.commitKey = 1;
                                      o.focused = !0;
                                  });
                                  i.addEventListener("updatefromsandbox", (i) => {
                                      this.showElementAndHideCanvas(i.target);
                                      const s = {
                                          value(i) {
                                              o.userValue = i.detail.value ?? "";
                                              t.setValue(e, { value: o.userValue.toString() });
                                              i.target.value = o.userValue;
                                          },
                                          formattedValue(i) {
                                              const { formattedValue: s } = i.detail;
                                              o.formattedValue = s;
                                              null != s && i.target !== document.activeElement && (i.target.value = s);
                                              t.setValue(e, { formattedValue: s });
                                          },
                                          selRange(t) {
                                              t.target.setSelectionRange(...t.detail.selRange);
                                          },
                                          charLimit: (i) => {
                                              const { charLimit: s } = i.detail,
                                                  { target: n } = i;
                                              if (0 === s) {
                                                  n.removeAttribute("maxLength");
                                                  return;
                                              }
                                              n.setAttribute("maxLength", s);
                                              let a = o.userValue;
                                              if (a && !(a.length <= s)) {
                                                  a = a.slice(0, s);
                                                  n.value = o.userValue = a;
                                                  t.setValue(e, { value: a });
                                                  this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                                                      source: this,
                                                      detail: { id: e, name: "Keystroke", value: a, willCommit: !0, commitKey: 1, selStart: n.selectionStart, selEnd: n.selectionEnd },
                                                  });
                                              }
                                          },
                                      };
                                      this._dispatchEventFromSandbox(s, i);
                                  });
                                  i.addEventListener("keydown", (t) => {
                                      o.commitKey = 1;
                                      let i = -1;
                                      "Escape" === t.key ? (i = 0) : "Enter" !== t.key || this.data.multiLine ? "Tab" === t.key && (o.commitKey = 3) : (i = 2);
                                      if (-1 === i) return;
                                      const { value: s } = t.target;
                                      if (o.lastCommittedValue !== s) {
                                          o.lastCommittedValue = s;
                                          o.userValue = s;
                                          this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                                              source: this,
                                              detail: { id: e, name: "Keystroke", value: s, willCommit: !0, commitKey: i, selStart: t.target.selectionStart, selEnd: t.target.selectionEnd },
                                          });
                                      }
                                  });
                                  const s = blurListener;
                                  blurListener = null;
                                  i.addEventListener("blur", (t) => {
                                      if (!o.focused || !t.relatedTarget) return;
                                      o.focused = !1;
                                      const { value: i } = t.target;
                                      o.userValue = i;
                                      o.lastCommittedValue !== i &&
                                          this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                                              source: this,
                                              detail: { id: e, name: "Keystroke", value: i, willCommit: !0, commitKey: o.commitKey, selStart: t.target.selectionStart, selEnd: t.target.selectionEnd },
                                          });
                                      s(t);
                                  });
                                  this.data.actions?.Keystroke &&
                                      i.addEventListener("beforeinput", (t) => {
                                          o.lastCommittedValue = null;
                                          const { data: i, target: s } = t,
                                              { value: n, selectionStart: a, selectionEnd: r } = s;
                                          let l = a,
                                              h = r;
                                          switch (t.inputType) {
                                              case "deleteWordBackward": {
                                                  const t = n.substring(0, a).match(/\w*[^\w]*$/);
                                                  t && (l -= t[0].length);
                                                  break;
                                              }
                                              case "deleteWordForward": {
                                                  const t = n.substring(a).match(/^[^\w]*\w*/);
                                                  t && (h += t[0].length);
                                                  break;
                                              }
                                              case "deleteContentBackward":
                                                  a === r && (l -= 1);
                                                  break;
                                              case "deleteContentForward":
                                                  a === r && (h += 1);
                                          }
                                          t.preventDefault();
                                          this.linkService.eventBus?.dispatch("dispatcheventinsandbox", { source: this, detail: { id: e, name: "Keystroke", value: n, change: i || "", willCommit: !1, selStart: l, selEnd: h } });
                                      });
                                  this._setEventListeners(
                                      i,
                                      o,
                                      [
                                          ["focus", "Focus"],
                                          ["blur", "Blur"],
                                          ["mousedown", "Mouse Down"],
                                          ["mouseenter", "Mouse Enter"],
                                          ["mouseleave", "Mouse Exit"],
                                          ["mouseup", "Mouse Up"],
                                      ],
                                      (t) => t.target.value
                                  );
                              }
                              blurListener && i.addEventListener("blur", blurListener);
                              if (this.data.comb) {
                                  const t = (this.data.rect[2] - this.data.rect[0]) / a;
                                  i.classList.add("comb");
                                  i.style.letterSpacing = `calc(${t}px * var(--scale-factor) - 1ch)`;
                              }
                          } else {
                              i = document.createElement("div");
                              i.textContent = this.data.fieldValue;
                              i.style.verticalAlign = "middle";
                              i.style.display = "table-cell";
                          }
                          this._setTextStyle(i);
                          this._setBackgroundColor(i);
                          this._setDefaultPropertiesFromJS(i);
                          this.container.append(i);
                          return this.container;
                      }
                  }
                  class SignatureWidgetAnnotationElement extends WidgetAnnotationElement {
                      constructor(t) {
                          super(t, { isRenderable: !!t.data.hasOwnCanvas });
                      }
                  }
                  class CheckboxWidgetAnnotationElement extends WidgetAnnotationElement {
                      constructor(t) {
                          super(t, { isRenderable: t.renderForms });
                      }
                      render() {
                          const t = this.annotationStorage,
                              e = this.data,
                              i = e.id;
                          let s = t.getValue(i, { value: e.exportValue === e.fieldValue }).value;
                          if ("string" == typeof s) {
                              s = "Off" !== s;
                              t.setValue(i, { value: s });
                          }
                          this.container.classList.add("buttonWidgetAnnotation", "checkBox");
                          const n = document.createElement("input");
                          c.add(n);
                          n.setAttribute("data-element-id", i);
                          n.disabled = e.readOnly;
                          this._setRequired(n, this.data.required);
                          n.type = "checkbox";
                          n.name = e.fieldName;
                          s && n.setAttribute("checked", !0);
                          n.setAttribute("exportValue", e.exportValue);
                          n.tabIndex = h;
                          n.addEventListener("change", (s) => {
                              const { name: n, checked: a } = s.target;
                              for (const s of this._getElementsByName(n, i)) {
                                  const i = a && s.exportValue === e.exportValue;
                                  s.domElement && (s.domElement.checked = i);
                                  t.setValue(s.id, { value: i });
                              }
                              t.setValue(i, { value: a });
                          });
                          n.addEventListener("resetform", (t) => {
                              const i = e.defaultFieldValue || "Off";
                              t.target.checked = i === e.exportValue;
                          });
                          if (this.enableScripting && this.hasJSActions) {
                              n.addEventListener("updatefromsandbox", (e) => {
                                  const s = {
                                      value(e) {
                                          e.target.checked = "Off" !== e.detail.value;
                                          t.setValue(i, { value: e.target.checked });
                                      },
                                  };
                                  this._dispatchEventFromSandbox(s, e);
                              });
                              this._setEventListeners(
                                  n,
                                  null,
                                  [
                                      ["change", "Validate"],
                                      ["change", "Action"],
                                      ["focus", "Focus"],
                                      ["blur", "Blur"],
                                      ["mousedown", "Mouse Down"],
                                      ["mouseenter", "Mouse Enter"],
                                      ["mouseleave", "Mouse Exit"],
                                      ["mouseup", "Mouse Up"],
                                  ],
                                  (t) => t.target.checked
                              );
                          }
                          this._setBackgroundColor(n);
                          this._setDefaultPropertiesFromJS(n);
                          this.container.append(n);
                          return this.container;
                      }
                  }
                  class RadioButtonWidgetAnnotationElement extends WidgetAnnotationElement {
                      constructor(t) {
                          super(t, { isRenderable: t.renderForms });
                      }
                      render() {
                          this.container.classList.add("buttonWidgetAnnotation", "radioButton");
                          const t = this.annotationStorage,
                              e = this.data,
                              i = e.id;
                          let s = t.getValue(i, { value: e.fieldValue === e.buttonValue }).value;
                          if ("string" == typeof s) {
                              s = s !== e.buttonValue;
                              t.setValue(i, { value: s });
                          }
                          const n = document.createElement("input");
                          c.add(n);
                          n.setAttribute("data-element-id", i);
                          n.disabled = e.readOnly;
                          this._setRequired(n, this.data.required);
                          n.type = "radio";
                          n.name = e.fieldName;
                          s && n.setAttribute("checked", !0);
                          n.tabIndex = h;
                          n.addEventListener("change", (e) => {
                              const { name: s, checked: n } = e.target;
                              for (const e of this._getElementsByName(s, i)) t.setValue(e.id, { value: !1 });
                              t.setValue(i, { value: n });
                          });
                          n.addEventListener("resetform", (t) => {
                              const i = e.defaultFieldValue;
                              t.target.checked = null != i && i === e.buttonValue;
                          });
                          if (this.enableScripting && this.hasJSActions) {
                              const s = e.buttonValue;
                              n.addEventListener("updatefromsandbox", (e) => {
                                  const n = {
                                      value: (e) => {
                                          const n = s === e.detail.value;
                                          for (const s of this._getElementsByName(e.target.name)) {
                                              const e = n && s.id === i;
                                              s.domElement && (s.domElement.checked = e);
                                              t.setValue(s.id, { value: e });
                                          }
                                      },
                                  };
                                  this._dispatchEventFromSandbox(n, e);
                              });
                              this._setEventListeners(
                                  n,
                                  null,
                                  [
                                      ["change", "Validate"],
                                      ["change", "Action"],
                                      ["focus", "Focus"],
                                      ["blur", "Blur"],
                                      ["mousedown", "Mouse Down"],
                                      ["mouseenter", "Mouse Enter"],
                                      ["mouseleave", "Mouse Exit"],
                                      ["mouseup", "Mouse Up"],
                                  ],
                                  (t) => t.target.checked
                              );
                          }
                          this._setBackgroundColor(n);
                          this._setDefaultPropertiesFromJS(n);
                          this.container.append(n);
                          return this.container;
                      }
                  }
                  class PushButtonWidgetAnnotationElement extends LinkAnnotationElement {
                      constructor(t) {
                          super(t, { ignoreBorder: t.data.hasAppearance });
                      }
                      render() {
                          const t = super.render();
                          t.classList.add("buttonWidgetAnnotation", "pushButton");
                          this.data.alternativeText && (t.title = this.data.alternativeText);
                          const e = t.lastChild;
                          if (this.enableScripting && this.hasJSActions && e) {
                              this._setDefaultPropertiesFromJS(e);
                              e.addEventListener("updatefromsandbox", (t) => {
                                  this._dispatchEventFromSandbox({}, t);
                              });
                          }
                          return t;
                      }
                  }
                  class ChoiceWidgetAnnotationElement extends WidgetAnnotationElement {
                      constructor(t) {
                          super(t, { isRenderable: t.renderForms });
                      }
                      render() {
                          this.container.classList.add("choiceWidgetAnnotation");
                          const t = this.annotationStorage,
                              e = this.data.id,
                              i = t.getValue(e, { value: this.data.fieldValue }),
                              s = document.createElement("select");
                          c.add(s);
                          s.setAttribute("data-element-id", e);
                          s.disabled = this.data.readOnly;
                          this._setRequired(s, this.data.required);
                          s.name = this.data.fieldName;
                          s.tabIndex = h;
                          let n = this.data.combo && this.data.options.length > 0;
                          if (!this.data.combo) {
                              s.size = this.data.options.length;
                              this.data.multiSelect && (s.multiple = !0);
                          }
                          s.addEventListener("resetform", (t) => {
                              const e = this.data.defaultFieldValue;
                              for (const t of s.options) t.selected = t.value === e;
                          });
                          for (const t of this.data.options) {
                              const e = document.createElement("option");
                              e.textContent = t.displayValue;
                              e.value = t.exportValue;
                              if (i.value.includes(t.exportValue)) {
                                  e.setAttribute("selected", !0);
                                  n = !1;
                              }
                              s.append(e);
                          }
                          let a = null;
                          if (n) {
                              const t = document.createElement("option");
                              t.value = " ";
                              t.setAttribute("hidden", !0);
                              t.setAttribute("selected", !0);
                              s.prepend(t);
                              a = () => {
                                  t.remove();
                                  s.removeEventListener("input", a);
                                  a = null;
                              };
                              s.addEventListener("input", a);
                          }
                          const getValue = (t) => {
                              const e = t ? "value" : "textContent",
                                  { options: i, multiple: n } = s;
                              return n ? Array.prototype.filter.call(i, (t) => t.selected).map((t) => t[e]) : -1 === i.selectedIndex ? null : i[i.selectedIndex][e];
                          };
                          let r = getValue(!1);
                          const getItems = (t) => {
                              const e = t.target.options;
                              return Array.prototype.map.call(e, (t) => ({ displayValue: t.textContent, exportValue: t.value }));
                          };
                          if (this.enableScripting && this.hasJSActions) {
                              s.addEventListener("updatefromsandbox", (i) => {
                                  const n = {
                                      value(i) {
                                          a?.();
                                          const n = i.detail.value,
                                              o = new Set(Array.isArray(n) ? n : [n]);
                                          for (const t of s.options) t.selected = o.has(t.value);
                                          t.setValue(e, { value: getValue(!0) });
                                          r = getValue(!1);
                                      },
                                      multipleSelection(t) {
                                          s.multiple = !0;
                                      },
                                      remove(i) {
                                          const n = s.options,
                                              a = i.detail.remove;
                                          n[a].selected = !1;
                                          s.remove(a);
                                          if (n.length > 0) {
                                              -1 === Array.prototype.findIndex.call(n, (t) => t.selected) && (n[0].selected = !0);
                                          }
                                          t.setValue(e, { value: getValue(!0), items: getItems(i) });
                                          r = getValue(!1);
                                      },
                                      clear(i) {
                                          for (; 0 !== s.length; ) s.remove(0);
                                          t.setValue(e, { value: null, items: [] });
                                          r = getValue(!1);
                                      },
                                      insert(i) {
                                          const { index: n, displayValue: a, exportValue: o } = i.detail.insert,
                                              l = s.children[n],
                                              h = document.createElement("option");
                                          h.textContent = a;
                                          h.value = o;
                                          l ? l.before(h) : s.append(h);
                                          t.setValue(e, { value: getValue(!0), items: getItems(i) });
                                          r = getValue(!1);
                                      },
                                      items(i) {
                                          const { items: n } = i.detail;
                                          for (; 0 !== s.length; ) s.remove(0);
                                          for (const t of n) {
                                              const { displayValue: e, exportValue: i } = t,
                                                  n = document.createElement("option");
                                              n.textContent = e;
                                              n.value = i;
                                              s.append(n);
                                          }
                                          s.options.length > 0 && (s.options[0].selected = !0);
                                          t.setValue(e, { value: getValue(!0), items: getItems(i) });
                                          r = getValue(!1);
                                      },
                                      indices(i) {
                                          const s = new Set(i.detail.indices);
                                          for (const t of i.target.options) t.selected = s.has(t.index);
                                          t.setValue(e, { value: getValue(!0) });
                                          r = getValue(!1);
                                      },
                                      editable(t) {
                                          t.target.disabled = !t.detail.editable;
                                      },
                                  };
                                  this._dispatchEventFromSandbox(n, i);
                              });
                              s.addEventListener("input", (i) => {
                                  const s = getValue(!0);
                                  t.setValue(e, { value: s });
                                  i.preventDefault();
                                  this.linkService.eventBus?.dispatch("dispatcheventinsandbox", { source: this, detail: { id: e, name: "Keystroke", value: r, changeEx: s, willCommit: !1, commitKey: 1, keyDown: !1 } });
                              });
                              this._setEventListeners(
                                  s,
                                  null,
                                  [
                                      ["focus", "Focus"],
                                      ["blur", "Blur"],
                                      ["mousedown", "Mouse Down"],
                                      ["mouseenter", "Mouse Enter"],
                                      ["mouseleave", "Mouse Exit"],
                                      ["mouseup", "Mouse Up"],
                                      ["input", "Action"],
                                      ["input", "Validate"],
                                  ],
                                  (t) => t.target.value
                              );
                          } else
                              s.addEventListener("input", function (i) {
                                  t.setValue(e, { value: getValue(!0) });
                              });
                          this.data.combo && this._setTextStyle(s);
                          this._setBackgroundColor(s);
                          this._setDefaultPropertiesFromJS(s);
                          this.container.append(s);
                          return this.container;
                      }
                  }
                  class PopupAnnotationElement extends AnnotationElement {
                      constructor(t) {
                          const { data: e, elements: i } = t;
                          super(t, { isRenderable: AnnotationElement._hasPopupData(e) });
                          this.elements = i;
                      }
                      render() {
                          this.container.classList.add("popupAnnotation");
                          const t = new PopupElement({
                                  container: this.container,
                                  color: this.data.color,
                                  titleObj: this.data.titleObj,
                                  modificationDate: this.data.modificationDate,
                                  contentsObj: this.data.contentsObj,
                                  richText: this.data.richText,
                                  rect: this.data.rect,
                                  parentRect: this.data.parentRect || null,
                                  parent: this.parent,
                                  elements: this.elements,
                                  open: this.data.open,
                              }),
                              e = [];
                          for (const i of this.elements) {
                              i.popup = t;
                              e.push(i.data.id);
                              i.addHighlightArea();
                          }
                          this.container.setAttribute("aria-controls", e.map((t) => `${s.AnnotationPrefix}${t}`).join(","));
                          return this.container;
                      }
                  }
                  class PopupElement {
                      #ei = null;
                      #ii = this.#si.bind(this);
                      #ni = this.#ai.bind(this);
                      #ri = this.#oi.bind(this);
                      #li = this.#hi.bind(this);
                      #je = null;
                      #Rt = null;
                      #ci = null;
                      #di = null;
                      #ui = null;
                      #pi = null;
                      #gi = !1;
                      #mi = null;
                      #fi = null;
                      #bi = null;
                      #Ai = null;
                      #_i = !1;
                      constructor({ container: t, color: e, elements: i, titleObj: s, modificationDate: a, contentsObj: r, richText: o, parent: l, rect: h, parentRect: c, open: d }) {
                          this.#Rt = t;
                          this.#Ai = s;
                          this.#ci = r;
                          this.#bi = o;
                          this.#ui = l;
                          this.#je = e;
                          this.#fi = h;
                          this.#pi = c;
                          this.#di = i;
                          const u = n.PDFDateString.toDateObject(a);
                          u && (this.#ei = l.l10n.get("annotation_date_string", { date: u.toLocaleDateString(), time: u.toLocaleTimeString() }));
                          this.trigger = i.flatMap((t) => t.getElementsToTriggerPopup());
                          for (const t of this.trigger) {
                              t.addEventListener("click", this.#li);
                              t.addEventListener("mouseenter", this.#ri);
                              t.addEventListener("mouseleave", this.#ni);
                              t.classList.add("popupTriggerArea");
                          }
                          for (const t of i) t.container?.addEventListener("keydown", this.#ii);
                          this.#Rt.hidden = !0;
                          d && this.#hi();
                      }
                      render() {
                          if (this.#mi) return;
                          const {
                                  page: { view: t },
                                  viewport: {
                                      rawDims: { pageWidth: e, pageHeight: i, pageX: n, pageY: a },
                                  },
                              } = this.#ui,
                              r = (this.#mi = document.createElement("div"));
                          r.className = "popup";
                          if (this.#je) {
                              const t = (r.style.outlineColor = s.Util.makeHexColor(...this.#je));
                              if (CSS.supports("background-color", "color-mix(in srgb, red 30%, white)")) r.style.backgroundColor = `color-mix(in srgb, ${t} 30%, white)`;
                              else {
                                  const t = 0.7;
                                  r.style.backgroundColor = s.Util.makeHexColor(...this.#je.map((e) => Math.floor(t * (255 - e) + e)));
                              }
                          }
                          const o = document.createElement("span");
                          o.className = "header";
                          const h = document.createElement("h1");
                          o.append(h);
                          ({ dir: h.dir, str: h.textContent } = this.#Ai);
                          r.append(o);
                          if (this.#ei) {
                              const t = document.createElement("span");
                              t.classList.add("popupDate");
                              this.#ei.then((e) => {
                                  t.textContent = e;
                              });
                              o.append(t);
                          }
                          const c = this.#ci,
                              d = this.#bi;
                          if (!d?.str || (c?.str && c.str !== d.str)) {
                              const t = this._formatContents(c);
                              r.append(t);
                          } else {
                              l.XfaLayer.render({ xfaHtml: d.html, intent: "richText", div: r });
                              r.lastChild.classList.add("richText", "popupContent");
                          }
                          let u = !!this.#pi,
                              p = u ? this.#pi : this.#fi;
                          for (const t of this.#di)
                              if (!p || null !== s.Util.intersect(t.data.rect, p)) {
                                  p = t.data.rect;
                                  u = !0;
                                  break;
                              }
                          const g = s.Util.normalizeRect([p[0], t[3] - p[1] + t[1], p[2], t[3] - p[3] + t[1]]),
                              m = u ? p[2] - p[0] + 5 : 0,
                              f = g[0] + m,
                              b = g[1],
                              { style: A } = this.#Rt;
                          A.left = (100 * (f - n)) / e + "%";
                          A.top = (100 * (b - a)) / i + "%";
                          this.#Rt.append(r);
                      }
                      _formatContents({ str: t, dir: e }) {
                          const i = document.createElement("p");
                          i.classList.add("popupContent");
                          i.dir = e;
                          const s = t.split(/(?:\r\n?|\n)/);
                          for (let t = 0, e = s.length; t < e; ++t) {
                              const n = s[t];
                              i.append(document.createTextNode(n));
                              t < e - 1 && i.append(document.createElement("br"));
                          }
                          return i;
                      }
                      #si(t) {
                          t.altKey || t.shiftKey || t.ctrlKey || t.metaKey || (("Enter" === t.key || ("Escape" === t.key && this.#gi)) && this.#hi());
                      }
                      #hi() {
                          this.#gi = !this.#gi;
                          if (this.#gi) {
                              this.#oi();
                              this.#Rt.addEventListener("click", this.#li);
                              this.#Rt.addEventListener("keydown", this.#ii);
                          } else {
                              this.#ai();
                              this.#Rt.removeEventListener("click", this.#li);
                              this.#Rt.removeEventListener("keydown", this.#ii);
                          }
                      }
                      #oi() {
                          this.#mi || this.render();
                          if (this.isVisible) this.#gi && this.#Rt.classList.add("focused");
                          else {
                              this.#Rt.hidden = !1;
                              this.#Rt.style.zIndex = parseInt(this.#Rt.style.zIndex) + 1e3;
                          }
                      }
                      #ai() {
                          this.#Rt.classList.remove("focused");
                          if (!this.#gi && this.isVisible) {
                              this.#Rt.hidden = !0;
                              this.#Rt.style.zIndex = parseInt(this.#Rt.style.zIndex) - 1e3;
                          }
                      }
                      forceHide() {
                          this.#_i = this.isVisible;
                          this.#_i && (this.#Rt.hidden = !0);
                      }
                      maybeShow() {
                          if (this.#_i) {
                              this.#_i = !1;
                              this.#Rt.hidden = !1;
                          }
                      }
                      get isVisible() {
                          return !1 === this.#Rt.hidden;
                      }
                  }
                  class FreeTextAnnotationElement extends AnnotationElement {
                      constructor(t) {
                          super(t, { isRenderable: !0, ignoreBorder: !0 });
                          this.textContent = t.data.textContent;
                          this.textPosition = t.data.textPosition;
                          this.annotationEditorType = s.AnnotationEditorType.FREETEXT;
                      }
                      render() {
                          this.container.classList.add("freeTextAnnotation");
                          if (this.textContent) {
                              const t = document.createElement("div");
                              t.classList.add("annotationTextContent");
                              t.setAttribute("role", "comment");
                              for (const e of this.textContent) {
                                  const i = document.createElement("span");
                                  i.textContent = e;
                                  t.append(i);
                              }
                              this.container.append(t);
                          }
                          !this.data.popupRef && this.hasPopupData && this._createPopup();
                          this._editOnDoubleClick();
                          return this.container;
                      }
                  }
                  e.FreeTextAnnotationElement = FreeTextAnnotationElement;
                  class LineAnnotationElement extends AnnotationElement {
                      #vi = null;
                      constructor(t) {
                          super(t, { isRenderable: !0, ignoreBorder: !0 });
                      }
                      render() {
                          this.container.classList.add("lineAnnotation");
                          const t = this.data,
                              { width: e, height: i } = getRectDims(t.rect),
                              s = this.svgFactory.create(e, i, !0),
                              n = (this.#vi = this.svgFactory.createElement("svg:line"));
                          n.setAttribute("x1", t.rect[2] - t.lineCoordinates[0]);
                          n.setAttribute("y1", t.rect[3] - t.lineCoordinates[1]);
                          n.setAttribute("x2", t.rect[2] - t.lineCoordinates[2]);
                          n.setAttribute("y2", t.rect[3] - t.lineCoordinates[3]);
                          n.setAttribute("stroke-width", t.borderStyle.width || 1);
                          n.setAttribute("stroke", "transparent");
                          n.setAttribute("fill", "transparent");
                          s.append(n);
                          this.container.append(s);
                          !t.popupRef && this.hasPopupData && this._createPopup();
                          return this.container;
                      }
                      getElementsToTriggerPopup() {
                          return this.#vi;
                      }
                      addHighlightArea() {
                          this.container.classList.add("highlightArea");
                      }
                  }
                  class SquareAnnotationElement extends AnnotationElement {
                      #yi = null;
                      constructor(t) {
                          super(t, { isRenderable: !0, ignoreBorder: !0 });
                      }
                      render() {
                          this.container.classList.add("squareAnnotation");
                          const t = this.data,
                              { width: e, height: i } = getRectDims(t.rect),
                              s = this.svgFactory.create(e, i, !0),
                              n = t.borderStyle.width,
                              a = (this.#yi = this.svgFactory.createElement("svg:rect"));
                          a.setAttribute("x", n / 2);
                          a.setAttribute("y", n / 2);
                          a.setAttribute("width", e - n);
                          a.setAttribute("height", i - n);
                          a.setAttribute("stroke-width", n || 1);
                          a.setAttribute("stroke", "transparent");
                          a.setAttribute("fill", "transparent");
                          s.append(a);
                          this.container.append(s);
                          !t.popupRef && this.hasPopupData && this._createPopup();
                          return this.container;
                      }
                      getElementsToTriggerPopup() {
                          return this.#yi;
                      }
                      addHighlightArea() {
                          this.container.classList.add("highlightArea");
                      }
                  }
                  class CircleAnnotationElement extends AnnotationElement {
                      #Si = null;
                      constructor(t) {
                          super(t, { isRenderable: !0, ignoreBorder: !0 });
                      }
                      render() {
                          this.container.classList.add("circleAnnotation");
                          const t = this.data,
                              { width: e, height: i } = getRectDims(t.rect),
                              s = this.svgFactory.create(e, i, !0),
                              n = t.borderStyle.width,
                              a = (this.#Si = this.svgFactory.createElement("svg:ellipse"));
                          a.setAttribute("cx", e / 2);
                          a.setAttribute("cy", i / 2);
                          a.setAttribute("rx", e / 2 - n / 2);
                          a.setAttribute("ry", i / 2 - n / 2);
                          a.setAttribute("stroke-width", n || 1);
                          a.setAttribute("stroke", "transparent");
                          a.setAttribute("fill", "transparent");
                          s.append(a);
                          this.container.append(s);
                          !t.popupRef && this.hasPopupData && this._createPopup();
                          return this.container;
                      }
                      getElementsToTriggerPopup() {
                          return this.#Si;
                      }
                      addHighlightArea() {
                          this.container.classList.add("highlightArea");
                      }
                  }
                  class PolylineAnnotationElement extends AnnotationElement {
                      #Ei = null;
                      constructor(t) {
                          super(t, { isRenderable: !0, ignoreBorder: !0 });
                          this.containerClassName = "polylineAnnotation";
                          this.svgElementName = "svg:polyline";
                      }
                      render() {
                          this.container.classList.add(this.containerClassName);
                          const t = this.data,
                              { width: e, height: i } = getRectDims(t.rect),
                              s = this.svgFactory.create(e, i, !0);
                          let n = [];
                          for (const e of t.vertices) {
                              const i = e.x - t.rect[0],
                                  s = t.rect[3] - e.y;
                              n.push(i + "," + s);
                          }
                          n = n.join(" ");
                          const a = (this.#Ei = this.svgFactory.createElement(this.svgElementName));
                          a.setAttribute("points", n);
                          a.setAttribute("stroke-width", t.borderStyle.width || 1);
                          a.setAttribute("stroke", "transparent");
                          a.setAttribute("fill", "transparent");
                          s.append(a);
                          this.container.append(s);
                          !t.popupRef && this.hasPopupData && this._createPopup();
                          return this.container;
                      }
                      getElementsToTriggerPopup() {
                          return this.#Ei;
                      }
                      addHighlightArea() {
                          this.container.classList.add("highlightArea");
                      }
                  }
                  class PolygonAnnotationElement extends PolylineAnnotationElement {
                      constructor(t) {
                          super(t);
                          this.containerClassName = "polygonAnnotation";
                          this.svgElementName = "svg:polygon";
                      }
                  }
                  class CaretAnnotationElement extends AnnotationElement {
                      constructor(t) {
                          super(t, { isRenderable: !0, ignoreBorder: !0 });
                      }
                      render() {
                          this.container.classList.add("caretAnnotation");
                          !this.data.popupRef && this.hasPopupData && this._createPopup();
                          return this.container;
                      }
                  }
                  class InkAnnotationElement extends AnnotationElement {
                      #xi = [];
                      constructor(t) {
                          super(t, { isRenderable: !0, ignoreBorder: !0 });
                          this.containerClassName = "inkAnnotation";
                          this.svgElementName = "svg:polyline";
                          this.annotationEditorType = s.AnnotationEditorType.INK;
                      }
                      render() {
                          this.container.classList.add(this.containerClassName);
                          const t = this.data,
                              { width: e, height: i } = getRectDims(t.rect),
                              s = this.svgFactory.create(e, i, !0);
                          for (const e of t.inkLists) {
                              let i = [];
                              for (const s of e) {
                                  const e = s.x - t.rect[0],
                                      n = t.rect[3] - s.y;
                                  i.push(`${e},${n}`);
                              }
                              i = i.join(" ");
                              const n = this.svgFactory.createElement(this.svgElementName);
                              this.#xi.push(n);
                              n.setAttribute("points", i);
                              n.setAttribute("stroke-width", t.borderStyle.width || 1);
                              n.setAttribute("stroke", "transparent");
                              n.setAttribute("fill", "transparent");
                              !t.popupRef && this.hasPopupData && this._createPopup();
                              s.append(n);
                          }
                          this.container.append(s);
                          return this.container;
                      }
                      getElementsToTriggerPopup() {
                          return this.#xi;
                      }
                      addHighlightArea() {
                          this.container.classList.add("highlightArea");
                      }
                  }
                  e.InkAnnotationElement = InkAnnotationElement;
                  class HighlightAnnotationElement extends AnnotationElement {
                      constructor(t) {
                          super(t, { isRenderable: !0, ignoreBorder: !0, createQuadrilaterals: !0 });
                      }
                      render() {
                          !this.data.popupRef && this.hasPopupData && this._createPopup();
                          this.container.classList.add("highlightAnnotation");
                          return this.container;
                      }
                  }
                  class UnderlineAnnotationElement extends AnnotationElement {
                      constructor(t) {
                          super(t, { isRenderable: !0, ignoreBorder: !0, createQuadrilaterals: !0 });
                      }
                      render() {
                          !this.data.popupRef && this.hasPopupData && this._createPopup();
                          this.container.classList.add("underlineAnnotation");
                          return this.container;
                      }
                  }
                  class SquigglyAnnotationElement extends AnnotationElement {
                      constructor(t) {
                          super(t, { isRenderable: !0, ignoreBorder: !0, createQuadrilaterals: !0 });
                      }
                      render() {
                          !this.data.popupRef && this.hasPopupData && this._createPopup();
                          this.container.classList.add("squigglyAnnotation");
                          return this.container;
                      }
                  }
                  class StrikeOutAnnotationElement extends AnnotationElement {
                      constructor(t) {
                          super(t, { isRenderable: !0, ignoreBorder: !0, createQuadrilaterals: !0 });
                      }
                      render() {
                          !this.data.popupRef && this.hasPopupData && this._createPopup();
                          this.container.classList.add("strikeoutAnnotation");
                          return this.container;
                      }
                  }
                  class StampAnnotationElement extends AnnotationElement {
                      constructor(t) {
                          super(t, { isRenderable: !0, ignoreBorder: !0 });
                      }
                      render() {
                          this.container.classList.add("stampAnnotation");
                          !this.data.popupRef && this.hasPopupData && this._createPopup();
                          return this.container;
                      }
                  }
                  e.StampAnnotationElement = StampAnnotationElement;
                  class FileAttachmentAnnotationElement extends AnnotationElement {
                      #wi = null;
                      constructor(t) {
                          super(t, { isRenderable: !0 });
                          const { filename: e, content: i } = this.data.file;
                          this.filename = (0, n.getFilenameFromUrl)(e, !0);
                          this.content = i;
                          this.linkService.eventBus?.dispatch("fileattachmentannotation", { source: this, filename: e, content: i });
                      }
                      render() {
                          this.container.classList.add("fileAttachmentAnnotation");
                          const { container: t, data: e } = this;
                          let i;
                          if (e.hasAppearance || 0 === e.fillAlpha) i = document.createElement("div");
                          else {
                              i = document.createElement("img");
                              i.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(e.name) ? "paperclip" : "pushpin"}.svg`;
                              e.fillAlpha && e.fillAlpha < 1 && (i.style = `filter: opacity(${Math.round(100 * e.fillAlpha)}%);`);
                          }
                          i.addEventListener("dblclick", this.#Ci.bind(this));
                          this.#wi = i;
                          const { isMac: n } = s.FeatureTest.platform;
                          t.addEventListener("keydown", (t) => {
                              "Enter" === t.key && (n ? t.metaKey : t.ctrlKey) && this.#Ci();
                          });
                          !e.popupRef && this.hasPopupData ? this._createPopup() : i.classList.add("popupTriggerArea");
                          t.append(i);
                          return t;
                      }
                      getElementsToTriggerPopup() {
                          return this.#wi;
                      }
                      addHighlightArea() {
                          this.container.classList.add("highlightArea");
                      }
                      #Ci() {
                          this.downloadManager?.openOrDownloadData(this.container, this.content, this.filename);
                      }
                  }
                  e.AnnotationLayer = class AnnotationLayer {
                      #Se = null;
                      #Ti = null;
                      #Pi = new Map();
                      constructor({ div: t, accessibilityManager: e, annotationCanvasMap: i, l10n: s, page: n, viewport: a }) {
                          this.div = t;
                          this.#Se = e;
                          this.#Ti = i;
                          this.l10n = s;
                          this.page = n;
                          this.viewport = a;
                          this.zIndex = 0;
                          this.l10n ||= o.NullL10n;
                      }
                      #Mi(t, e) {
                          const i = t.firstChild || t;
                          i.id = `${s.AnnotationPrefix}${e}`;
                          this.div.append(t);
                          this.#Se?.moveElementInDOM(this.div, t, i, !1);
                      }
                      async render(t) {
                          const { annotations: e } = t,
                              i = this.div;
                          (0, n.setLayerDimensions)(i, this.viewport);
                          const r = new Map(),
                              o = {
                                  data: null,
                                  layer: i,
                                  linkService: t.linkService,
                                  downloadManager: t.downloadManager,
                                  imageResourcesPath: t.imageResourcesPath || "",
                                  renderForms: !1 !== t.renderForms,
                                  svgFactory: new n.DOMSVGFactory(),
                                  annotationStorage: t.annotationStorage || new a.AnnotationStorage(),
                                  enableScripting: !0 === t.enableScripting,
                                  hasJSActions: t.hasJSActions,
                                  fieldObjects: t.fieldObjects,
                                  parent: this,
                                  elements: null,
                              };
                          for (const t of e) {
                              if (t.noHTML) continue;
                              const e = t.annotationType === s.AnnotationType.POPUP;
                              if (e) {
                                  const e = r.get(t.id);
                                  if (!e) continue;
                                  o.elements = e;
                              } else {
                                  const { width: e, height: i } = getRectDims(t.rect);
                                  if (e <= 0 || i <= 0) continue;
                              }
                              o.data = t;
                              const i = AnnotationElementFactory.create(o);
                              if (!i.isRenderable) continue;
                              if (!e && t.popupRef) {
                                  const e = r.get(t.popupRef);
                                  e ? e.push(i) : r.set(t.popupRef, [i]);
                              }
                              i.annotationEditorType > 0 && this.#Pi.set(i.data.id, i);
                              const n = i.render();
                              t.hidden && (n.style.visibility = "hidden");
                              this.#Mi(n, t.id);
                          }
                          this.#ki();
                          await this.l10n.translate(i);
                      }
                      update({ viewport: t }) {
                          const e = this.div;
                          this.viewport = t;
                          (0, n.setLayerDimensions)(e, { rotation: t.rotation });
                          this.#ki();
                          e.hidden = !1;
                      }
                      #ki() {
                          if (!this.#Ti) return;
                          const t = this.div;
                          for (const [e, i] of this.#Ti) {
                              const s = t.querySelector(`[data-annotation-id="${e}"]`);
                              if (!s) continue;
                              const { firstChild: n } = s;
                              n ? ("CANVAS" === n.nodeName ? n.replaceWith(i) : n.before(i)) : s.append(i);
                          }
                          this.#Ti.clear();
                      }
                      getEditableAnnotations() {
                          return Array.from(this.#Pi.values());
                      }
                      getEditableAnnotation(t) {
                          return this.#Pi.get(t);
                      }
                  };
              },
              (t, e) => {
                  Object.defineProperty(e, "__esModule", { value: !0 });
                  e.ColorConverters = void 0;
                  function makeColorComp(t) {
                      return Math.floor(255 * Math.max(0, Math.min(1, t)))
                          .toString(16)
                          .padStart(2, "0");
                  }
                  function scaleAndClamp(t) {
                      return Math.max(0, Math.min(255, 255 * t));
                  }
                  e.ColorConverters = class ColorConverters {
                      static CMYK_G([t, e, i, s]) {
                          return ["G", 1 - Math.min(1, 0.3 * t + 0.59 * i + 0.11 * e + s)];
                      }
                      static G_CMYK([t]) {
                          return ["CMYK", 0, 0, 0, 1 - t];
                      }
                      static G_RGB([t]) {
                          return ["RGB", t, t, t];
                      }
                      static G_rgb([t]) {
                          return [(t = scaleAndClamp(t)), t, t];
                      }
                      static G_HTML([t]) {
                          const e = makeColorComp(t);
                          return `#${e}${e}${e}`;
                      }
                      static RGB_G([t, e, i]) {
                          return ["G", 0.3 * t + 0.59 * e + 0.11 * i];
                      }
                      static RGB_rgb(t) {
                          return t.map(scaleAndClamp);
                      }
                      static RGB_HTML(t) {
                          return `#${t.map(makeColorComp).join("")}`;
                      }
                      static T_HTML() {
                          return "#00000000";
                      }
                      static T_rgb() {
                          return [null];
                      }
                      static CMYK_RGB([t, e, i, s]) {
                          return ["RGB", 1 - Math.min(1, t + s), 1 - Math.min(1, i + s), 1 - Math.min(1, e + s)];
                      }
                      static CMYK_rgb([t, e, i, s]) {
                          return [scaleAndClamp(1 - Math.min(1, t + s)), scaleAndClamp(1 - Math.min(1, i + s)), scaleAndClamp(1 - Math.min(1, e + s))];
                      }
                      static CMYK_HTML(t) {
                          const e = this.CMYK_RGB(t).slice(1);
                          return this.RGB_HTML(e);
                      }
                      static RGB_CMYK([t, e, i]) {
                          const s = 1 - t,
                              n = 1 - e,
                              a = 1 - i;
                          return ["CMYK", s, n, a, Math.min(s, n, a)];
                      }
                  };
              },
              (t, e) => {
                  Object.defineProperty(e, "__esModule", { value: !0 });
                  e.NullL10n = void 0;
                  e.getL10nFallback = getL10nFallback;
                  const i = {
                      of_pages: "of {{pagesCount}}",
                      page_of_pages: "({{pageNumber}} of {{pagesCount}})",
                      document_properties_kb: "{{size_kb}} KB ({{size_b}} bytes)",
                      document_properties_mb: "{{size_mb}} MB ({{size_b}} bytes)",
                      document_properties_date_string: "{{date}}, {{time}}",
                      document_properties_page_size_unit_inches: "in",
                      document_properties_page_size_unit_millimeters: "mm",
                      document_properties_page_size_orientation_portrait: "portrait",
                      document_properties_page_size_orientation_landscape: "landscape",
                      document_properties_page_size_name_a3: "A3",
                      document_properties_page_size_name_a4: "A4",
                      document_properties_page_size_name_letter: "Letter",
                      document_properties_page_size_name_legal: "Legal",
                      document_properties_page_size_dimension_string: "{{width}} × {{height}} {{unit}} ({{orientation}})",
                      document_properties_page_size_dimension_name_string: "{{width}} × {{height}} {{unit}} ({{name}}, {{orientation}})",
                      document_properties_linearized_yes: "Yes",
                      document_properties_linearized_no: "No",
                      additional_layers: "Additional Layers",
                      page_landmark: "Page {{page}}",
                      thumb_page_title: "Page {{page}}",
                      thumb_page_canvas: "Thumbnail of Page {{page}}",
                      find_reached_top: "Reached top of document, continued from bottom",
                      find_reached_bottom: "Reached end of document, continued from top",
                      "find_match_count[one]": "{{current}} of {{total}} match",
                      "find_match_count[other]": "{{current}} of {{total}} matches",
                      "find_match_count_limit[one]": "More than {{limit}} match",
                      "find_match_count_limit[other]": "More than {{limit}} matches",
                      find_not_found: "Phrase not found",
                      page_scale_width: "Page Width",
                      page_scale_fit: "Page Fit",
                      page_scale_auto: "Automatic Zoom",
                      page_scale_actual: "Actual Size",
                      page_scale_percent: "{{scale}}%",
                      loading_error: "An error occurred while loading the PDF.",
                      invalid_file_error: "Invalid or corrupted PDF file.",
                      missing_file_error: "Missing PDF file.",
                      unexpected_response_error: "Unexpected server response.",
                      rendering_error: "An error occurred while rendering the page.",
                      annotation_date_string: "{{date}}, {{time}}",
                      printing_not_supported: "Warning: Printing is not fully supported by this browser.",
                      printing_not_ready: "Warning: The PDF is not fully loaded for printing.",
                      web_fonts_disabled: "Web fonts are disabled: unable to use embedded PDF fonts.",
                      free_text2_default_content: "Start typing…",
                      editor_free_text2_aria_label: "Text Editor",
                      editor_ink2_aria_label: "Draw Editor",
                      editor_ink_canvas_aria_label: "User-created image",
                      editor_alt_text_button_label: "Alt text",
                      editor_alt_text_edit_button_label: "Edit alt text",
                      editor_alt_text_decorative_tooltip: "Marked as decorative",
                      print_progress_percent: "{{progress}}%",
                  };
                  function getL10nFallback(t, e) {
                      switch (t) {
                          case "find_match_count":
                              t = `find_match_count[${1 === e.total ? "one" : "other"}]`;
                              break;
                          case "find_match_count_limit":
                              t = `find_match_count_limit[${1 === e.limit ? "one" : "other"}]`;
                      }
                      return i[t] || "";
                  }
                  const s = {
                      getLanguage: async () => "en-us",
                      getDirection: async () => "ltr",
                      get: async (t, e = null, i = getL10nFallback(t, e)) =>
                          (function formatL10nValue(t, e) {
                              return e ? t.replaceAll(/\{\{\s*(\w+)\s*\}\}/g, (t, i) => (i in e ? e[i] : "{{" + i + "}}")) : t;
                          })(i, e),
                      async translate(t) {},
                  };
                  e.NullL10n = s;
              },
              (t, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 });
                  e.XfaLayer = void 0;
                  var s = i(25);
                  e.XfaLayer = class XfaLayer {
                      static setupStorage(t, e, i, s, n) {
                          const a = s.getValue(e, { value: null });
                          switch (i.name) {
                              case "textarea":
                                  null !== a.value && (t.textContent = a.value);
                                  if ("print" === n) break;
                                  t.addEventListener("input", (t) => {
                                      s.setValue(e, { value: t.target.value });
                                  });
                                  break;
                              case "input":
                                  if ("radio" === i.attributes.type || "checkbox" === i.attributes.type) {
                                      a.value === i.attributes.xfaOn ? t.setAttribute("checked", !0) : a.value === i.attributes.xfaOff && t.removeAttribute("checked");
                                      if ("print" === n) break;
                                      t.addEventListener("change", (t) => {
                                          s.setValue(e, { value: t.target.checked ? t.target.getAttribute("xfaOn") : t.target.getAttribute("xfaOff") });
                                      });
                                  } else {
                                      null !== a.value && t.setAttribute("value", a.value);
                                      if ("print" === n) break;
                                      t.addEventListener("input", (t) => {
                                          s.setValue(e, { value: t.target.value });
                                      });
                                  }
                                  break;
                              case "select":
                                  if (null !== a.value) {
                                      t.setAttribute("value", a.value);
                                      for (const t of i.children) t.attributes.value === a.value ? (t.attributes.selected = !0) : t.attributes.hasOwnProperty("selected") && delete t.attributes.selected;
                                  }
                                  t.addEventListener("input", (t) => {
                                      const i = t.target.options,
                                          n = -1 === i.selectedIndex ? "" : i[i.selectedIndex].value;
                                      s.setValue(e, { value: n });
                                  });
                          }
                      }
                      static setAttributes({ html: t, element: e, storage: i = null, intent: s, linkService: n }) {
                          const { attributes: a } = e,
                              r = t instanceof HTMLAnchorElement;
                          "radio" === a.type && (a.name = `${a.name}-${s}`);
                          for (const [e, i] of Object.entries(a))
                              if (null != i)
                                  switch (e) {
                                      case "class":
                                          i.length && t.setAttribute(e, i.join(" "));
                                          break;
                                      case "dataId":
                                          break;
                                      case "id":
                                          t.setAttribute("data-element-id", i);
                                          break;
                                      case "style":
                                          Object.assign(t.style, i);
                                          break;
                                      case "textContent":
                                          t.textContent = i;
                                          break;
                                      default:
                                          (!r || ("href" !== e && "newWindow" !== e)) && t.setAttribute(e, i);
                                  }
                          r && n.addLinkAttributes(t, a.href, a.newWindow);
                          i && a.dataId && this.setupStorage(t, a.dataId, e, i);
                      }
                      static render(t) {
                          const e = t.annotationStorage,
                              i = t.linkService,
                              n = t.xfaHtml,
                              a = t.intent || "display",
                              r = document.createElement(n.name);
                          n.attributes && this.setAttributes({ html: r, element: n, intent: a, linkService: i });
                          const o = [[n, -1, r]],
                              l = t.div;
                          l.append(r);
                          if (t.viewport) {
                              const e = `matrix(${t.viewport.transform.join(",")})`;
                              l.style.transform = e;
                          }
                          "richText" !== a && l.setAttribute("class", "xfaLayer xfaFont");
                          const h = [];
                          for (; o.length > 0; ) {
                              const [t, n, r] = o.at(-1);
                              if (n + 1 === t.children.length) {
                                  o.pop();
                                  continue;
                              }
                              const l = t.children[++o.at(-1)[1]];
                              if (null === l) continue;
                              const { name: c } = l;
                              if ("#text" === c) {
                                  const t = document.createTextNode(l.value);
                                  h.push(t);
                                  r.append(t);
                                  continue;
                              }
                              const d = l?.attributes?.xmlns ? document.createElementNS(l.attributes.xmlns, c) : document.createElement(c);
                              r.append(d);
                              l.attributes && this.setAttributes({ html: d, element: l, storage: e, intent: a, linkService: i });
                              if (l.children && l.children.length > 0) o.push([l, -1, d]);
                              else if (l.value) {
                                  const t = document.createTextNode(l.value);
                                  s.XfaText.shouldBuildText(c) && h.push(t);
                                  d.append(t);
                              }
                          }
                          for (const t of l.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea")) t.setAttribute("readOnly", !0);
                          return { textDivs: h };
                      }
                      static update(t) {
                          const e = `matrix(${t.viewport.transform.join(",")})`;
                          t.div.style.transform = e;
                          t.div.hidden = !1;
                      }
                  };
              },
              (t, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 });
                  e.InkEditor = void 0;
                  var s = i(1),
                      n = i(4),
                      a = i(29),
                      r = i(6),
                      o = i(5);
                  class InkEditor extends n.AnnotationEditor {
                      #Fi = 0;
                      #Ri = 0;
                      #Di = this.canvasPointermove.bind(this);
                      #Ii = this.canvasPointerleave.bind(this);
                      #Li = this.canvasPointerup.bind(this);
                      #Oi = this.canvasPointerdown.bind(this);
                      #Ni = new Path2D();
                      #Bi = !1;
                      #Ui = !1;
                      #ji = !1;
                      #zi = null;
                      #Hi = 0;
                      #Wi = 0;
                      #Gi = null;
                      static _defaultColor = null;
                      static _defaultOpacity = 1;
                      static _defaultThickness = 1;
                      static _type = "ink";
                      constructor(t) {
                          super({ ...t, name: "inkEditor" });
                          this.color = t.color || null;
                          this.thickness = t.thickness || null;
                          this.opacity = t.opacity || null;
                          this.paths = [];
                          this.bezierPath2D = [];
                          this.allRawPaths = [];
                          this.currentPath = [];
                          this.scaleFactor = 1;
                          this.translationX = this.translationY = 0;
                          this.x = 0;
                          this.y = 0;
                          this._willKeepAspectRatio = !0;
                      }
                      static initialize(t) {
                          n.AnnotationEditor.initialize(t, { strings: ["editor_ink_canvas_aria_label", "editor_ink2_aria_label"] });
                      }
                      static updateDefaultParams(t, e) {
                          switch (t) {
                              case s.AnnotationEditorParamsType.INK_THICKNESS:
                                  InkEditor._defaultThickness = e;
                                  break;
                              case s.AnnotationEditorParamsType.INK_COLOR:
                                  InkEditor._defaultColor = e;
                                  break;
                              case s.AnnotationEditorParamsType.INK_OPACITY:
                                  InkEditor._defaultOpacity = e / 100;
                          }
                      }
                      updateParams(t, e) {
                          switch (t) {
                              case s.AnnotationEditorParamsType.INK_THICKNESS:
                                  this.#qi(e);
                                  break;
                              case s.AnnotationEditorParamsType.INK_COLOR:
                                  this.#Ve(e);
                                  break;
                              case s.AnnotationEditorParamsType.INK_OPACITY:
                                  this.#Vi(e);
                          }
                      }
                      static get defaultPropertiesToUpdate() {
                          return [
                              [s.AnnotationEditorParamsType.INK_THICKNESS, InkEditor._defaultThickness],
                              [s.AnnotationEditorParamsType.INK_COLOR, InkEditor._defaultColor || n.AnnotationEditor._defaultLineColor],
                              [s.AnnotationEditorParamsType.INK_OPACITY, Math.round(100 * InkEditor._defaultOpacity)],
                          ];
                      }
                      get propertiesToUpdate() {
                          return [
                              [s.AnnotationEditorParamsType.INK_THICKNESS, this.thickness || InkEditor._defaultThickness],
                              [s.AnnotationEditorParamsType.INK_COLOR, this.color || InkEditor._defaultColor || n.AnnotationEditor._defaultLineColor],
                              [s.AnnotationEditorParamsType.INK_OPACITY, Math.round(100 * (this.opacity ?? InkEditor._defaultOpacity))],
                          ];
                      }
                      #qi(t) {
                          const e = this.thickness;
                          this.addCommands({
                              cmd: () => {
                                  this.thickness = t;
                                  this.#$i();
                              },
                              undo: () => {
                                  this.thickness = e;
                                  this.#$i();
                              },
                              mustExec: !0,
                              type: s.AnnotationEditorParamsType.INK_THICKNESS,
                              overwriteIfSameType: !0,
                              keepUndo: !0,
                          });
                      }
                      #Ve(t) {
                          const e = this.color;
                          this.addCommands({
                              cmd: () => {
                                  this.color = t;
                                  this.#Xi();
                              },
                              undo: () => {
                                  this.color = e;
                                  this.#Xi();
                              },
                              mustExec: !0,
                              type: s.AnnotationEditorParamsType.INK_COLOR,
                              overwriteIfSameType: !0,
                              keepUndo: !0,
                          });
                      }
                      #Vi(t) {
                          t /= 100;
                          const e = this.opacity;
                          this.addCommands({
                              cmd: () => {
                                  this.opacity = t;
                                  this.#Xi();
                              },
                              undo: () => {
                                  this.opacity = e;
                                  this.#Xi();
                              },
                              mustExec: !0,
                              type: s.AnnotationEditorParamsType.INK_OPACITY,
                              overwriteIfSameType: !0,
                              keepUndo: !0,
                          });
                      }
                      rebuild() {
                          if (this.parent) {
                              super.rebuild();
                              if (null !== this.div) {
                                  if (!this.canvas) {
                                      this.#Ki();
                                      this.#Yi();
                                  }
                                  if (!this.isAttachedToDOM) {
                                      this.parent.add(this);
                                      this.#Ji();
                                  }
                                  this.#$i();
                              }
                          }
                      }
                      remove() {
                          if (null !== this.canvas) {
                              this.isEmpty() || this.commit();
                              this.canvas.width = this.canvas.height = 0;
                              this.canvas.remove();
                              this.canvas = null;
                              this.#zi.disconnect();
                              this.#zi = null;
                              super.remove();
                          }
                      }
                      setParent(t) {
                          !this.parent && t ? this._uiManager.removeShouldRescale(this) : this.parent && null === t && this._uiManager.addShouldRescale(this);
                          super.setParent(t);
                      }
                      onScaleChanging() {
                          const [t, e] = this.parentDimensions,
                              i = this.width * t,
                              s = this.height * e;
                          this.setDimensions(i, s);
                      }
                      enableEditMode() {
                          if (!this.#Bi && null !== this.canvas) {
                              super.enableEditMode();
                              this._isDraggable = !1;
                              this.canvas.addEventListener("pointerdown", this.#Oi);
                          }
                      }
                      disableEditMode() {
                          if (this.isInEditMode() && null !== this.canvas) {
                              super.disableEditMode();
                              this._isDraggable = !this.isEmpty();
                              this.div.classList.remove("editing");
                              this.canvas.removeEventListener("pointerdown", this.#Oi);
                          }
                      }
                      onceAdded() {
                          this._isDraggable = !this.isEmpty();
                      }
                      isEmpty() {
                          return 0 === this.paths.length || (1 === this.paths.length && 0 === this.paths[0].length);
                      }
                      #Qi() {
                          const {
                              parentRotation: t,
                              parentDimensions: [e, i],
                          } = this;
                          switch (t) {
                              case 90:
                                  return [0, i, i, e];
                              case 180:
                                  return [e, i, e, i];
                              case 270:
                                  return [e, 0, i, e];
                              default:
                                  return [0, 0, e, i];
                          }
                      }
                      #Zi() {
                          const { ctx: t, color: e, opacity: i, thickness: s, parentScale: n, scaleFactor: a } = this;
                          t.lineWidth = (s * n) / a;
                          t.lineCap = "round";
                          t.lineJoin = "round";
                          t.miterLimit = 10;
                          t.strokeStyle = `${e}${(0, o.opacityToHex)(i)}`;
                      }
                      #ts(t, e) {
                          this.canvas.addEventListener("contextmenu", r.noContextMenu);
                          this.canvas.addEventListener("pointerleave", this.#Ii);
                          this.canvas.addEventListener("pointermove", this.#Di);
                          this.canvas.addEventListener("pointerup", this.#Li);
                          this.canvas.removeEventListener("pointerdown", this.#Oi);
                          this.isEditing = !0;
                          if (!this.#ji) {
                              this.#ji = !0;
                              this.#Ji();
                              this.thickness ||= InkEditor._defaultThickness;
                              this.color ||= InkEditor._defaultColor || n.AnnotationEditor._defaultLineColor;
                              this.opacity ??= InkEditor._defaultOpacity;
                          }
                          this.currentPath.push([t, e]);
                          this.#Ui = !1;
                          this.#Zi();
                          this.#Gi = () => {
                              this.#es();
                              this.#Gi && window.requestAnimationFrame(this.#Gi);
                          };
                          window.requestAnimationFrame(this.#Gi);
                      }
                      #is(t, e) {
                          const [i, s] = this.currentPath.at(-1);
                          if (this.currentPath.length > 1 && t === i && e === s) return;
                          const n = this.currentPath;
                          let a = this.#Ni;
                          n.push([t, e]);
                          this.#Ui = !0;
                          if (n.length <= 2) {
                              a.moveTo(...n[0]);
                              a.lineTo(t, e);
                          } else {
                              if (3 === n.length) {
                                  this.#Ni = a = new Path2D();
                                  a.moveTo(...n[0]);
                              }
                              this.#ss(a, ...n.at(-3), ...n.at(-2), t, e);
                          }
                      }
                      #ns() {
                          if (0 === this.currentPath.length) return;
                          const t = this.currentPath.at(-1);
                          this.#Ni.lineTo(...t);
                      }
                      #as(t, e) {
                          this.#Gi = null;
                          t = Math.min(Math.max(t, 0), this.canvas.width);
                          e = Math.min(Math.max(e, 0), this.canvas.height);
                          this.#is(t, e);
                          this.#ns();
                          let i;
                          if (1 !== this.currentPath.length) i = this.#rs();
                          else {
                              const s = [t, e];
                              i = [[s, s.slice(), s.slice(), s]];
                          }
                          const s = this.#Ni,
                              n = this.currentPath;
                          this.currentPath = [];
                          this.#Ni = new Path2D();
                          this.addCommands({
                              cmd: () => {
                                  this.allRawPaths.push(n);
                                  this.paths.push(i);
                                  this.bezierPath2D.push(s);
                                  this.rebuild();
                              },
                              undo: () => {
                                  this.allRawPaths.pop();
                                  this.paths.pop();
                                  this.bezierPath2D.pop();
                                  if (0 === this.paths.length) this.remove();
                                  else {
                                      if (!this.canvas) {
                                          this.#Ki();
                                          this.#Yi();
                                      }
                                      this.#$i();
                                  }
                              },
                              mustExec: !0,
                          });
                      }
                      #es() {
                          if (!this.#Ui) return;
                          this.#Ui = !1;
                          const t = Math.ceil(this.thickness * this.parentScale),
                              e = this.currentPath.slice(-3),
                              i = e.map((t) => t[0]),
                              s = e.map((t) => t[1]),
                              { ctx: n } = (Math.min(...i), Math.max(...i), Math.min(...s), Math.max(...s), this);
                          n.save();
                          n.clearRect(0, 0, this.canvas.width, this.canvas.height);
                          for (const t of this.bezierPath2D) n.stroke(t);
                          n.stroke(this.#Ni);
                          n.restore();
                      }
                      #ss(t, e, i, s, n, a, r) {
                          const o = (e + s) / 2,
                              l = (i + n) / 2,
                              h = (s + a) / 2,
                              c = (n + r) / 2;
                          t.bezierCurveTo(o + (2 * (s - o)) / 3, l + (2 * (n - l)) / 3, h + (2 * (s - h)) / 3, c + (2 * (n - c)) / 3, h, c);
                      }
                      #rs() {
                          const t = this.currentPath;
                          if (t.length <= 2) return [[t[0], t[0], t.at(-1), t.at(-1)]];
                          const e = [];
                          let i,
                              [s, n] = t[0];
                          for (i = 1; i < t.length - 2; i++) {
                              const [a, r] = t[i],
                                  [o, l] = t[i + 1],
                                  h = (a + o) / 2,
                                  c = (r + l) / 2,
                                  d = [s + (2 * (a - s)) / 3, n + (2 * (r - n)) / 3],
                                  u = [h + (2 * (a - h)) / 3, c + (2 * (r - c)) / 3];
                              e.push([[s, n], d, u, [h, c]]);
                              [s, n] = [h, c];
                          }
                          const [a, r] = t[i],
                              [o, l] = t[i + 1],
                              h = [s + (2 * (a - s)) / 3, n + (2 * (r - n)) / 3],
                              c = [o + (2 * (a - o)) / 3, l + (2 * (r - l)) / 3];
                          e.push([[s, n], h, c, [o, l]]);
                          return e;
                      }
                      #Xi() {
                          if (this.isEmpty()) {
                              this.#os();
                              return;
                          }
                          this.#Zi();
                          const { canvas: t, ctx: e } = this;
                          e.setTransform(1, 0, 0, 1, 0, 0);
                          e.clearRect(0, 0, t.width, t.height);
                          this.#os();
                          for (const t of this.bezierPath2D) e.stroke(t);
                      }
                      commit() {
                          if (!this.#Bi) {
                              super.commit();
                              this.isEditing = !1;
                              this.disableEditMode();
                              this.setInForeground();
                              this.#Bi = !0;
                              this.div.classList.add("disabled");
                              this.#$i(!0);
                              this.makeResizable();
                              this.parent.addInkEditorIfNeeded(!0);
                              this.moveInDOM();
                              this.div.focus({ preventScroll: !0 });
                          }
                      }
                      focusin(t) {
                          if (this._focusEventsAllowed) {
                              super.focusin(t);
                              this.enableEditMode();
                          }
                      }
                      canvasPointerdown(t) {
                          if (0 === t.button && this.isInEditMode() && !this.#Bi) {
                              this.setInForeground();
                              t.preventDefault();
                              "mouse" !== t.type && this.div.focus();
                              this.#ts(t.offsetX, t.offsetY);
                          }
                      }
                      canvasPointermove(t) {
                          t.preventDefault();
                          this.#is(t.offsetX, t.offsetY);
                      }
                      canvasPointerup(t) {
                          t.preventDefault();
                          this.#ls(t);
                      }
                      canvasPointerleave(t) {
                          this.#ls(t);
                      }
                      #ls(t) {
                          this.canvas.removeEventListener("pointerleave", this.#Ii);
                          this.canvas.removeEventListener("pointermove", this.#Di);
                          this.canvas.removeEventListener("pointerup", this.#Li);
                          this.canvas.addEventListener("pointerdown", this.#Oi);
                          setTimeout(() => {
                              this.canvas.removeEventListener("contextmenu", r.noContextMenu);
                          }, 10);
                          this.#as(t.offsetX, t.offsetY);
                          this.addToAnnotationStorage();
                          this.setInBackground();
                      }
                      #Ki() {
                          this.canvas = document.createElement("canvas");
                          this.canvas.width = this.canvas.height = 0;
                          this.canvas.className = "inkEditorCanvas";
                          n.AnnotationEditor._l10nPromise.get("editor_ink_canvas_aria_label").then((t) => this.canvas?.setAttribute("aria-label", t));
                          this.div.append(this.canvas);
                          this.ctx = this.canvas.getContext("2d");
                      }
                      #Yi() {
                          this.#zi = new ResizeObserver((t) => {
                              const e = t[0].contentRect;
                              e.width && e.height && this.setDimensions(e.width, e.height);
                          });
                          this.#zi.observe(this.div);
                      }
                      get isResizable() {
                          return !this.isEmpty() && this.#Bi;
                      }
                      render() {
                          if (this.div) return this.div;
                          let t, e;
                          if (this.width) {
                              t = this.x;
                              e = this.y;
                          }
                          super.render();
                          n.AnnotationEditor._l10nPromise.get("editor_ink2_aria_label").then((t) => this.div?.setAttribute("aria-label", t));
                          const [i, s, a, r] = this.#Qi();
                          this.setAt(i, s, 0, 0);
                          this.setDims(a, r);
                          this.#Ki();
                          if (this.width) {
                              const [i, s] = this.parentDimensions;
                              this.setAspectRatio(this.width * i, this.height * s);
                              this.setAt(t * i, e * s, this.width * i, this.height * s);
                              this.#ji = !0;
                              this.#Ji();
                              this.setDims(this.width * i, this.height * s);
                              this.#Xi();
                              this.div.classList.add("disabled");
                          } else {
                              this.div.classList.add("editing");
                              this.enableEditMode();
                          }
                          this.#Yi();
                          return this.div;
                      }
                      #Ji() {
                          if (!this.#ji) return;
                          const [t, e] = this.parentDimensions;
                          this.canvas.width = Math.ceil(this.width * t);
                          this.canvas.height = Math.ceil(this.height * e);
                          this.#os();
                      }
                      setDimensions(t, e) {
                          const i = Math.round(t),
                              s = Math.round(e);
                          if (this.#Hi === i && this.#Wi === s) return;
                          this.#Hi = i;
                          this.#Wi = s;
                          this.canvas.style.visibility = "hidden";
                          const [n, a] = this.parentDimensions;
                          this.width = t / n;
                          this.height = e / a;
                          this.fixAndSetPosition();
                          this.#Bi && this.#hs(t, e);
                          this.#Ji();
                          this.#Xi();
                          this.canvas.style.visibility = "visible";
                          this.fixDims();
                      }
                      #hs(t, e) {
                          const i = this.#cs(),
                              s = (t - i) / this.#Ri,
                              n = (e - i) / this.#Fi;
                          this.scaleFactor = Math.min(s, n);
                      }
                      #os() {
                          const t = this.#cs() / 2;
                          this.ctx.setTransform(this.scaleFactor, 0, 0, this.scaleFactor, this.translationX * this.scaleFactor + t, this.translationY * this.scaleFactor + t);
                      }
                      static #ds(t) {
                          const e = new Path2D();
                          for (let i = 0, s = t.length; i < s; i++) {
                              const [s, n, a, r] = t[i];
                              0 === i && e.moveTo(...s);
                              e.bezierCurveTo(n[0], n[1], a[0], a[1], r[0], r[1]);
                          }
                          return e;
                      }
                      static #us(t, e, i) {
                          const [s, n, a, r] = e;
                          switch (i) {
                              case 0:
                                  for (let e = 0, i = t.length; e < i; e += 2) {
                                      t[e] += s;
                                      t[e + 1] = r - t[e + 1];
                                  }
                                  break;
                              case 90:
                                  for (let e = 0, i = t.length; e < i; e += 2) {
                                      const i = t[e];
                                      t[e] = t[e + 1] + s;
                                      t[e + 1] = i + n;
                                  }
                                  break;
                              case 180:
                                  for (let e = 0, i = t.length; e < i; e += 2) {
                                      t[e] = a - t[e];
                                      t[e + 1] += n;
                                  }
                                  break;
                              case 270:
                                  for (let e = 0, i = t.length; e < i; e += 2) {
                                      const i = t[e];
                                      t[e] = a - t[e + 1];
                                      t[e + 1] = r - i;
                                  }
                                  break;
                              default:
                                  throw new Error("Invalid rotation");
                          }
                          return t;
                      }
                      static #ps(t, e, i) {
                          const [s, n, a, r] = e;
                          switch (i) {
                              case 0:
                                  for (let e = 0, i = t.length; e < i; e += 2) {
                                      t[e] -= s;
                                      t[e + 1] = r - t[e + 1];
                                  }
                                  break;
                              case 90:
                                  for (let e = 0, i = t.length; e < i; e += 2) {
                                      const i = t[e];
                                      t[e] = t[e + 1] - n;
                                      t[e + 1] = i - s;
                                  }
                                  break;
                              case 180:
                                  for (let e = 0, i = t.length; e < i; e += 2) {
                                      t[e] = a - t[e];
                                      t[e + 1] -= n;
                                  }
                                  break;
                              case 270:
                                  for (let e = 0, i = t.length; e < i; e += 2) {
                                      const i = t[e];
                                      t[e] = r - t[e + 1];
                                      t[e + 1] = a - i;
                                  }
                                  break;
                              default:
                                  throw new Error("Invalid rotation");
                          }
                          return t;
                      }
                      #gs(t, e, i, s) {
                          const n = [],
                              a = this.thickness / 2,
                              r = t * e + a,
                              o = t * i + a;
                          for (const e of this.paths) {
                              const i = [],
                                  a = [];
                              for (let s = 0, n = e.length; s < n; s++) {
                                  const [l, h, c, d] = e[s],
                                      u = t * l[0] + r,
                                      p = t * l[1] + o,
                                      g = t * h[0] + r,
                                      m = t * h[1] + o,
                                      f = t * c[0] + r,
                                      b = t * c[1] + o,
                                      A = t * d[0] + r,
                                      _ = t * d[1] + o;
                                  if (0 === s) {
                                      i.push(u, p);
                                      a.push(u, p);
                                  }
                                  i.push(g, m, f, b, A, _);
                                  a.push(g, m);
                                  s === n - 1 && a.push(A, _);
                              }
                              n.push({ bezier: InkEditor.#us(i, s, this.rotation), points: InkEditor.#us(a, s, this.rotation) });
                          }
                          return n;
                      }
                      #ms() {
                          let t = 1 / 0,
                              e = -1 / 0,
                              i = 1 / 0,
                              n = -1 / 0;
                          for (const a of this.paths)
                              for (const [r, o, l, h] of a) {
                                  const a = s.Util.bezierBoundingBox(...r, ...o, ...l, ...h);
                                  t = Math.min(t, a[0]);
                                  i = Math.min(i, a[1]);
                                  e = Math.max(e, a[2]);
                                  n = Math.max(n, a[3]);
                              }
                          return [t, i, e, n];
                      }
                      #cs() {
                          return this.#Bi ? Math.ceil(this.thickness * this.parentScale) : 0;
                      }
                      #$i(t = !1) {
                          if (this.isEmpty()) return;
                          if (!this.#Bi) {
                              this.#Xi();
                              return;
                          }
                          const e = this.#ms(),
                              i = this.#cs();
                          this.#Ri = Math.max(n.AnnotationEditor.MIN_SIZE, e[2] - e[0]);
                          this.#Fi = Math.max(n.AnnotationEditor.MIN_SIZE, e[3] - e[1]);
                          const s = Math.ceil(i + this.#Ri * this.scaleFactor),
                              a = Math.ceil(i + this.#Fi * this.scaleFactor),
                              [r, o] = this.parentDimensions;
                          this.width = s / r;
                          this.height = a / o;
                          this.setAspectRatio(s, a);
                          const l = this.translationX,
                              h = this.translationY;
                          this.translationX = -e[0];
                          this.translationY = -e[1];
                          this.#Ji();
                          this.#Xi();
                          this.#Hi = s;
                          this.#Wi = a;
                          this.setDims(s, a);
                          const c = t ? i / this.scaleFactor / 2 : 0;
                          this.translate(l - this.translationX - c, h - this.translationY - c);
                      }
                      static deserialize(t, e, i) {
                          if (t instanceof a.InkAnnotationElement) return null;
                          const r = super.deserialize(t, e, i);
                          r.thickness = t.thickness;
                          r.color = s.Util.makeHexColor(...t.color);
                          r.opacity = t.opacity;
                          const [o, l] = r.pageDimensions,
                              h = r.width * o,
                              c = r.height * l,
                              d = r.parentScale,
                              u = t.thickness / 2;
                          r.#Bi = !0;
                          r.#Hi = Math.round(h);
                          r.#Wi = Math.round(c);
                          const { paths: p, rect: g, rotation: m } = t;
                          for (let { bezier: t } of p) {
                              t = InkEditor.#ps(t, g, m);
                              const e = [];
                              r.paths.push(e);
                              let i = d * (t[0] - u),
                                  s = d * (t[1] - u);
                              for (let n = 2, a = t.length; n < a; n += 6) {
                                  const a = d * (t[n] - u),
                                      r = d * (t[n + 1] - u),
                                      o = d * (t[n + 2] - u),
                                      l = d * (t[n + 3] - u),
                                      h = d * (t[n + 4] - u),
                                      c = d * (t[n + 5] - u);
                                  e.push([
                                      [i, s],
                                      [a, r],
                                      [o, l],
                                      [h, c],
                                  ]);
                                  i = h;
                                  s = c;
                              }
                              const n = this.#ds(e);
                              r.bezierPath2D.push(n);
                          }
                          const f = r.#ms();
                          r.#Ri = Math.max(n.AnnotationEditor.MIN_SIZE, f[2] - f[0]);
                          r.#Fi = Math.max(n.AnnotationEditor.MIN_SIZE, f[3] - f[1]);
                          r.#hs(h, c);
                          return r;
                      }
                      serialize() {
                          if (this.isEmpty()) return null;
                          const t = this.getRect(0, 0),
                              e = n.AnnotationEditor._colorManager.convert(this.ctx.strokeStyle);
                          return {
                              annotationType: s.AnnotationEditorType.INK,
                              color: e,
                              thickness: this.thickness,
                              opacity: this.opacity,
                              paths: this.#gs(this.scaleFactor / this.parentScale, this.translationX, this.translationY, t),
                              pageIndex: this.pageIndex,
                              rect: t,
                              rotation: this.rotation,
                              structTreeParentId: this._structTreeParentId,
                          };
                      }
                  }
                  e.InkEditor = InkEditor;
              },
              (t, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 });
                  e.StampEditor = void 0;
                  var s = i(1),
                      n = i(4),
                      a = i(6),
                      r = i(29);
                  class StampEditor extends n.AnnotationEditor {
                      #fs = null;
                      #bs = null;
                      #As = null;
                      #_s = null;
                      #vs = null;
                      #ys = null;
                      #zi = null;
                      #Ss = null;
                      #Es = !1;
                      #xs = !1;
                      static _type = "stamp";
                      constructor(t) {
                          super({ ...t, name: "stampEditor" });
                          this.#_s = t.bitmapUrl;
                          this.#vs = t.bitmapFile;
                      }
                      static initialize(t) {
                          n.AnnotationEditor.initialize(t);
                      }
                      static get supportedTypes() {
                          return (0, s.shadow)(
                              this,
                              "supportedTypes",
                              ["apng", "avif", "bmp", "gif", "jpeg", "png", "svg+xml", "webp", "x-icon"].map((t) => `image/${t}`)
                          );
                      }
                      static get supportedTypesStr() {
                          return (0, s.shadow)(this, "supportedTypesStr", this.supportedTypes.join(","));
                      }
                      static isHandlingMimeForPasting(t) {
                          return this.supportedTypes.includes(t);
                      }
                      static paste(t, e) {
                          e.pasteEditor(s.AnnotationEditorType.STAMP, { bitmapFile: t.getAsFile() });
                      }
                      #ws(t, e = !1) {
                          if (t) {
                              this.#fs = t.bitmap;
                              if (!e) {
                                  this.#bs = t.id;
                                  this.#Es = t.isSvg;
                              }
                              this.#Ki();
                          } else this.remove();
                      }
                      #Cs() {
                          this.#As = null;
                          this._uiManager.enableWaiting(!1);
                          this.#ys && this.div.focus();
                      }
                      #Ts() {
                          if (this.#bs) {
                              this._uiManager.enableWaiting(!0);
                              this._uiManager.imageManager
                                  .getFromId(this.#bs)
                                  .then((t) => this.#ws(t, !0))
                                  .finally(() => this.#Cs());
                              return;
                          }
                          if (this.#_s) {
                              const t = this.#_s;
                              this.#_s = null;
                              this._uiManager.enableWaiting(!0);
                              this.#As = this._uiManager.imageManager
                                  .getFromUrl(t)
                                  .then((t) => this.#ws(t))
                                  .finally(() => this.#Cs());
                              return;
                          }
                          if (this.#vs) {
                              const t = this.#vs;
                              this.#vs = null;
                              this._uiManager.enableWaiting(!0);
                              this.#As = this._uiManager.imageManager
                                  .getFromFile(t)
                                  .then((t) => this.#ws(t))
                                  .finally(() => this.#Cs());
                              return;
                          }
                          const t = document.createElement("input");
                          t.type = "file";
                          t.accept = StampEditor.supportedTypesStr;
                          this.#As = new Promise((e) => {
                              t.addEventListener("change", async () => {
                                  if (t.files && 0 !== t.files.length) {
                                      this._uiManager.enableWaiting(!0);
                                      const e = await this._uiManager.imageManager.getFromFile(t.files[0]);
                                      this.#ws(e);
                                  } else this.remove();
                                  e();
                              });
                              t.addEventListener("cancel", () => {
                                  this.remove();
                                  e();
                              });
                          }).finally(() => this.#Cs());
                          t.click();
                      }
                      remove() {
                          if (this.#bs) {
                              this.#fs = null;
                              this._uiManager.imageManager.deleteId(this.#bs);
                              this.#ys?.remove();
                              this.#ys = null;
                              this.#zi?.disconnect();
                              this.#zi = null;
                          }
                          super.remove();
                      }
                      rebuild() {
                          if (this.parent) {
                              super.rebuild();
                              if (null !== this.div) {
                                  this.#bs && this.#Ts();
                                  this.isAttachedToDOM || this.parent.add(this);
                              }
                          } else this.#bs && this.#Ts();
                      }
                      onceAdded() {
                          this._isDraggable = !0;
                          this.div.focus();
                      }
                      isEmpty() {
                          return !(this.#As || this.#fs || this.#_s || this.#vs);
                      }
                      get isResizable() {
                          return !0;
                      }
                      render() {
                          if (this.div) return this.div;
                          let t, e;
                          if (this.width) {
                              t = this.x;
                              e = this.y;
                          }
                          super.render();
                          this.div.hidden = !0;
                          this.#fs ? this.#Ki() : this.#Ts();
                          if (this.width) {
                              const [i, s] = this.parentDimensions;
                              this.setAt(t * i, e * s, this.width * i, this.height * s);
                          }
                          return this.div;
                      }
                      #Ki() {
                          const { div: t } = this;
                          let { width: e, height: i } = this.#fs;
                          const [s, n] = this.pageDimensions,
                              a = 0.75;
                          if (this.width) {
                              e = this.width * s;
                              i = this.height * n;
                          } else if (e > a * s || i > a * n) {
                              const t = Math.min((a * s) / e, (a * n) / i);
                              e *= t;
                              i *= t;
                          }
                          const [r, o] = this.parentDimensions;
                          this.setDims((e * r) / s, (i * o) / n);
                          this._uiManager.enableWaiting(!1);
                          const l = (this.#ys = document.createElement("canvas"));
                          t.append(l);
                          t.hidden = !1;
                          this.#Ps(e, i);
                          this.#Yi();
                          if (!this.#xs) {
                              this.parent.addUndoableEditor(this);
                              this.#xs = !0;
                          }
                          this._uiManager._eventBus.dispatch("reporttelemetry", { source: this, details: { type: "editing", subtype: this.editorType, data: { action: "inserted_image" } } });
                          this.addAltTextButton();
                      }
                      #Ms(t, e) {
                          const [i, s] = this.parentDimensions;
                          this.width = t / i;
                          this.height = e / s;
                          this.setDims(t, e);
                          this._initialOptions?.isCentered ? this.center() : this.fixAndSetPosition();
                          this._initialOptions = null;
                          null !== this.#Ss && clearTimeout(this.#Ss);
                          this.#Ss = setTimeout(() => {
                              this.#Ss = null;
                              this.#Ps(t, e);
                          }, 200);
                      }
                      #ks(t, e) {
                          const { width: i, height: s } = this.#fs;
                          let n = i,
                              a = s,
                              r = this.#fs;
                          for (; n > 2 * t || a > 2 * e; ) {
                              const i = n,
                                  s = a;
                              n > 2 * t && (n = n >= 16384 ? Math.floor(n / 2) - 1 : Math.ceil(n / 2));
                              a > 2 * e && (a = a >= 16384 ? Math.floor(a / 2) - 1 : Math.ceil(a / 2));
                              const o = new OffscreenCanvas(n, a);
                              o.getContext("2d").drawImage(r, 0, 0, i, s, 0, 0, n, a);
                              r = o.transferToImageBitmap();
                          }
                          return r;
                      }
                      #Ps(t, e) {
                          t = Math.ceil(t);
                          e = Math.ceil(e);
                          const i = this.#ys;
                          if (!i || (i.width === t && i.height === e)) return;
                          i.width = t;
                          i.height = e;
                          const s = this.#Es ? this.#fs : this.#ks(t, e),
                              n = i.getContext("2d");
                          n.filter = this._uiManager.hcmFilter;
                          n.drawImage(s, 0, 0, s.width, s.height, 0, 0, t, e);
                      }
                      #Fs(t) {
                          if (t) {
                              if (this.#Es) {
                                  const t = this._uiManager.imageManager.getSvgUrl(this.#bs);
                                  if (t) return t;
                              }
                              const t = document.createElement("canvas");
                              ({ width: t.width, height: t.height } = this.#fs);
                              t.getContext("2d").drawImage(this.#fs, 0, 0);
                              return t.toDataURL();
                          }
                          if (this.#Es) {
                              const [t, e] = this.pageDimensions,
                                  i = Math.round(this.width * t * a.PixelsPerInch.PDF_TO_CSS_UNITS),
                                  s = Math.round(this.height * e * a.PixelsPerInch.PDF_TO_CSS_UNITS),
                                  n = new OffscreenCanvas(i, s);
                              n.getContext("2d").drawImage(this.#fs, 0, 0, this.#fs.width, this.#fs.height, 0, 0, i, s);
                              return n.transferToImageBitmap();
                          }
                          return structuredClone(this.#fs);
                      }
                      #Yi() {
                          this.#zi = new ResizeObserver((t) => {
                              const e = t[0].contentRect;
                              e.width && e.height && this.#Ms(e.width, e.height);
                          });
                          this.#zi.observe(this.div);
                      }
                      static deserialize(t, e, i) {
                          if (t instanceof r.StampAnnotationElement) return null;
                          const s = super.deserialize(t, e, i),
                              { rect: n, bitmapUrl: a, bitmapId: o, isSvg: l, accessibilityData: h } = t;
                          o && i.imageManager.isValidId(o) ? (s.#bs = o) : (s.#_s = a);
                          s.#Es = l;
                          const [c, d] = s.pageDimensions;
                          s.width = (n[2] - n[0]) / c;
                          s.height = (n[3] - n[1]) / d;
                          h && (s.altTextData = h);
                          return s;
                      }
                      serialize(t = !1, e = null) {
                          if (this.isEmpty()) return null;
                          const i = {
                              annotationType: s.AnnotationEditorType.STAMP,
                              bitmapId: this.#bs,
                              pageIndex: this.pageIndex,
                              rect: this.getRect(0, 0),
                              rotation: this.rotation,
                              isSvg: this.#Es,
                              structTreeParentId: this._structTreeParentId,
                          };
                          if (t) {
                              i.bitmapUrl = this.#Fs(!0);
                              i.accessibilityData = this.altTextData;
                              return i;
                          }
                          const { decorative: n, altText: a } = this.altTextData;
                          !n && a && (i.accessibilityData = { type: "Figure", alt: a });
                          if (null === e) return i;
                          e.stamps ||= new Map();
                          const r = this.#Es ? (i.rect[2] - i.rect[0]) * (i.rect[3] - i.rect[1]) : null;
                          if (e.stamps.has(this.#bs)) {
                              if (this.#Es) {
                                  const t = e.stamps.get(this.#bs);
                                  if (r > t.area) {
                                      t.area = r;
                                      t.serialized.bitmap.close();
                                      t.serialized.bitmap = this.#Fs(!1);
                                  }
                              }
                          } else {
                              e.stamps.set(this.#bs, { area: r, serialized: i });
                              i.bitmap = this.#Fs(!1);
                          }
                          return i;
                      }
                  }
                  e.StampEditor = StampEditor;
              },
          ],
          __webpack_module_cache__ = {};
      function __w_pdfjs_require__(t) {
          var e = __webpack_module_cache__[t];
          if (void 0 !== e) return e.exports;
          var i = (__webpack_module_cache__[t] = { exports: {} });
          __webpack_modules__[t](i, i.exports, __w_pdfjs_require__);
          return i.exports;
      }
      var __webpack_exports__ = {};
      (() => {
          var t = __webpack_exports__;
          Object.defineProperty(t, "__esModule", { value: !0 });
          Object.defineProperty(t, "AbortException", {
              enumerable: !0,
              get: function () {
                  return e.AbortException;
              },
          });
          Object.defineProperty(t, "AnnotationEditorLayer", {
              enumerable: !0,
              get: function () {
                  return a.AnnotationEditorLayer;
              },
          });
          Object.defineProperty(t, "AnnotationEditorParamsType", {
              enumerable: !0,
              get: function () {
                  return e.AnnotationEditorParamsType;
              },
          });
          Object.defineProperty(t, "AnnotationEditorType", {
              enumerable: !0,
              get: function () {
                  return e.AnnotationEditorType;
              },
          });
          Object.defineProperty(t, "AnnotationEditorUIManager", {
              enumerable: !0,
              get: function () {
                  return r.AnnotationEditorUIManager;
              },
          });
          Object.defineProperty(t, "AnnotationLayer", {
              enumerable: !0,
              get: function () {
                  return o.AnnotationLayer;
              },
          });
          Object.defineProperty(t, "AnnotationMode", {
              enumerable: !0,
              get: function () {
                  return e.AnnotationMode;
              },
          });
          Object.defineProperty(t, "CMapCompressionType", {
              enumerable: !0,
              get: function () {
                  return e.CMapCompressionType;
              },
          });
          Object.defineProperty(t, "DOMSVGFactory", {
              enumerable: !0,
              get: function () {
                  return s.DOMSVGFactory;
              },
          });
          Object.defineProperty(t, "FeatureTest", {
              enumerable: !0,
              get: function () {
                  return e.FeatureTest;
              },
          });
          Object.defineProperty(t, "GlobalWorkerOptions", {
              enumerable: !0,
              get: function () {
                  return l.GlobalWorkerOptions;
              },
          });
          Object.defineProperty(t, "ImageKind", {
              enumerable: !0,
              get: function () {
                  return e.ImageKind;
              },
          });
          Object.defineProperty(t, "InvalidPDFException", {
              enumerable: !0,
              get: function () {
                  return e.InvalidPDFException;
              },
          });
          Object.defineProperty(t, "MissingPDFException", {
              enumerable: !0,
              get: function () {
                  return e.MissingPDFException;
              },
          });
          Object.defineProperty(t, "OPS", {
              enumerable: !0,
              get: function () {
                  return e.OPS;
              },
          });
          Object.defineProperty(t, "PDFDataRangeTransport", {
              enumerable: !0,
              get: function () {
                  return i.PDFDataRangeTransport;
              },
          });
          Object.defineProperty(t, "PDFDateString", {
              enumerable: !0,
              get: function () {
                  return s.PDFDateString;
              },
          });
          Object.defineProperty(t, "PDFWorker", {
              enumerable: !0,
              get: function () {
                  return i.PDFWorker;
              },
          });
          Object.defineProperty(t, "PasswordResponses", {
              enumerable: !0,
              get: function () {
                  return e.PasswordResponses;
              },
          });
          Object.defineProperty(t, "PermissionFlag", {
              enumerable: !0,
              get: function () {
                  return e.PermissionFlag;
              },
          });
          Object.defineProperty(t, "PixelsPerInch", {
              enumerable: !0,
              get: function () {
                  return s.PixelsPerInch;
              },
          });
          Object.defineProperty(t, "PromiseCapability", {
              enumerable: !0,
              get: function () {
                  return e.PromiseCapability;
              },
          });
          Object.defineProperty(t, "RenderingCancelledException", {
              enumerable: !0,
              get: function () {
                  return s.RenderingCancelledException;
              },
          });
          Object.defineProperty(t, "SVGGraphics", {
              enumerable: !0,
              get: function () {
                  return i.SVGGraphics;
              },
          });
          Object.defineProperty(t, "UnexpectedResponseException", {
              enumerable: !0,
              get: function () {
                  return e.UnexpectedResponseException;
              },
          });
          Object.defineProperty(t, "Util", {
              enumerable: !0,
              get: function () {
                  return e.Util;
              },
          });
          Object.defineProperty(t, "VerbosityLevel", {
              enumerable: !0,
              get: function () {
                  return e.VerbosityLevel;
              },
          });
          Object.defineProperty(t, "XfaLayer", {
              enumerable: !0,
              get: function () {
                  return h.XfaLayer;
              },
          });
          Object.defineProperty(t, "build", {
              enumerable: !0,
              get: function () {
                  return i.build;
              },
          });
          Object.defineProperty(t, "createValidAbsoluteUrl", {
              enumerable: !0,
              get: function () {
                  return e.createValidAbsoluteUrl;
              },
          });
          Object.defineProperty(t, "getDocument", {
              enumerable: !0,
              get: function () {
                  return i.getDocument;
              },
          });
          Object.defineProperty(t, "getFilenameFromUrl", {
              enumerable: !0,
              get: function () {
                  return s.getFilenameFromUrl;
              },
          });
          Object.defineProperty(t, "getPdfFilenameFromUrl", {
              enumerable: !0,
              get: function () {
                  return s.getPdfFilenameFromUrl;
              },
          });
          Object.defineProperty(t, "getXfaPageViewport", {
              enumerable: !0,
              get: function () {
                  return s.getXfaPageViewport;
              },
          });
          Object.defineProperty(t, "isDataScheme", {
              enumerable: !0,
              get: function () {
                  return s.isDataScheme;
              },
          });
          Object.defineProperty(t, "isPdfFile", {
              enumerable: !0,
              get: function () {
                  return s.isPdfFile;
              },
          });
          Object.defineProperty(t, "loadScript", {
              enumerable: !0,
              get: function () {
                  return s.loadScript;
              },
          });
          Object.defineProperty(t, "noContextMenu", {
              enumerable: !0,
              get: function () {
                  return s.noContextMenu;
              },
          });
          Object.defineProperty(t, "normalizeUnicode", {
              enumerable: !0,
              get: function () {
                  return e.normalizeUnicode;
              },
          });
          Object.defineProperty(t, "renderTextLayer", {
              enumerable: !0,
              get: function () {
                  return n.renderTextLayer;
              },
          });
          Object.defineProperty(t, "setLayerDimensions", {
              enumerable: !0,
              get: function () {
                  return s.setLayerDimensions;
              },
          });
          Object.defineProperty(t, "shadow", {
              enumerable: !0,
              get: function () {
                  return e.shadow;
              },
          });
          Object.defineProperty(t, "updateTextLayer", {
              enumerable: !0,
              get: function () {
                  return n.updateTextLayer;
              },
          });
          Object.defineProperty(t, "version", {
              enumerable: !0,
              get: function () {
                  return i.version;
              },
          });
          var e = __w_pdfjs_require__(1),
              i = __w_pdfjs_require__(2),
              s = __w_pdfjs_require__(6),
              n = __w_pdfjs_require__(26),
              a = __w_pdfjs_require__(27),
              r = __w_pdfjs_require__(5),
              o = __w_pdfjs_require__(29),
              l = __w_pdfjs_require__(14),
              h = __w_pdfjs_require__(32);
      })();
      return __webpack_exports__;
  })()
);
