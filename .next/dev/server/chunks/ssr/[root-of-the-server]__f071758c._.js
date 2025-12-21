module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Downloads/Album with Babi/memories-with-babi/src/lib/appwrite.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "databases",
    ()=>databases,
    "storage",
    ()=>storage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/node_modules/appwrite/dist/esm/sdk.js [app-ssr] (ecmascript)");
;
const client = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Client"]();
client.setEndpoint(("TURBOPACK compile-time value", "https://sgp.cloud.appwrite.io/v1")).setProject(("TURBOPACK compile-time value", "693ece3900052a7c4caf"));
const databases = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Databases"](client);
const storage = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Storage"](client);
}),
"[project]/Downloads/Album with Babi/memories-with-babi/src/lib/imageHandle.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getImageUrl",
    ()=>getImageUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/src/lib/appwrite.ts [app-ssr] (ecmascript)");
;
function getImageUrl(fileId) {
    const bucketId = ("TURBOPACK compile-time value", "693ed25500011cc40c48");
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storage"].getFileView(bucketId, fileId);
}
}),
"[project]/Downloads/Album with Babi/memories-with-babi/src/components/ImageCarousel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ImageCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/node_modules/swiper/swiper-react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$src$2f$lib$2f$imageHandle$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/src/lib/imageHandle.ts [app-ssr] (ecmascript)");
;
;
;
;
function ImageCarousel({ images, onImageClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Swiper"], {
        spaceBetween: 10,
        slidesPerView: 1,
        children: images.map((fileId, i)=>{
            const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$src$2f$lib$2f$imageHandle$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getImageUrl"])(fileId);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: url,
                    alt: `Image ${i + 1}`,
                    className: "w-full h-56 object-contain rounded-lg bg-[#FFC1CC]",
                    onClick: ()=>onImageClick?.(url)
                }, void 0, false, {
                    fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/ImageCarousel.tsx",
                    lineNumber: 17,
                    columnNumber: 13
                }, this)
            }, i, false, {
                fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/ImageCarousel.tsx",
                lineNumber: 16,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/ImageCarousel.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/Album with Babi/memories-with-babi/src/components/MemoryCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MemoryCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$src$2f$components$2f$ImageCarousel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/src/components/ImageCarousel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/src/lib/appwrite.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function MemoryCard({ memory }) {
    const [expandedImageId, setExpandedImageId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const formattedDate = new Date(memory.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    const bucketId = ("TURBOPACK compile-time value", "693ed25500011cc40c48");
    // Convert Appwrite file ID to a public URL
    const getImageUrl = (fileId)=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storage"].getFileView(bucketId, fileId);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.6
                },
                className: "bg-white rounded-2xl shadow-md overflow-hidden w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$src$2f$components$2f$ImageCarousel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        images: memory.imageIds.map(getImageUrl),
                        onImageClick: (fileId)=>setExpandedImageId(fileId)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/MemoryCard.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-[#6D4C41]",
                                children: formattedDate
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/MemoryCard.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-semibold mt-1 text-[#6D4C41]",
                                children: memory.title
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/MemoryCard.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[#6D4C41] mt-2 leading-relaxed",
                                children: memory.description
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/MemoryCard.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/MemoryCard.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/MemoryCard.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: expandedImageId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    onClick: ()=>setExpandedImageId(null),
                    className: "fixed inset-0 z-50 flex items-center justify-center bg-[#FFF1E6]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].img, {
                        src: getImageUrl(expandedImageId),
                        alt: "Expanded Image",
                        initial: {
                            scale: 0.8,
                            opacity: 0
                        },
                        animate: {
                            scale: 1,
                            opacity: 1
                        },
                        exit: {
                            scale: 0.8,
                            opacity: 0
                        },
                        transition: {
                            duration: 0.3
                        },
                        className: "max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg cursor-pointer"
                    }, "image", false, {
                        fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/MemoryCard.tsx",
                        lineNumber: 61,
                        columnNumber: 13
                    }, this)
                }, "overlay", false, {
                    fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/MemoryCard.tsx",
                    lineNumber: 53,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/MemoryCard.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f071758c._.js.map