import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name } from './IndexPage.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'QPage', typeof __VLS_localComponents, "QPage", "qPage", "q-page"> &
__VLS_WithComponent<'QCard', typeof __VLS_localComponents, "QCard", "qCard", "q-card">;
__VLS_components.QPage; __VLS_components.QPage; __VLS_components.qPage; __VLS_components.qPage; __VLS_components["q-page"]; __VLS_components["q-page"];
// @ts-ignore
[QPage, QPage,];
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_components.QCard; __VLS_components.QCard; __VLS_components.QCard; __VLS_components.QCard; __VLS_components.qCard; __VLS_components.qCard; __VLS_components.qCard; __VLS_components.qCard; __VLS_components["q-card"]; __VLS_components["q-card"]; __VLS_components["q-card"]; __VLS_components["q-card"];
// @ts-ignore
[QCard, QCard, QCard, QCard,];
__VLS_intrinsicElements.img; __VLS_intrinsicElements.img;
{
const __VLS_0 = ({} as 'QPage' extends keyof typeof __VLS_ctx ? { 'QPage': typeof __VLS_ctx.QPage; } : 'qPage' extends keyof typeof __VLS_ctx ? { 'QPage': typeof __VLS_ctx.qPage; } : 'q-page' extends keyof typeof __VLS_ctx ? { 'QPage': (typeof __VLS_ctx)["q-page"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).QPage;
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, }));
({} as { QPage: typeof __VLS_0; }).QPage;
({} as { QPage: typeof __VLS_0; }).QPage;
const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = __VLS_intrinsicElements["div"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
const __VLS_7 = __VLS_6({ ...{}, class: ("q-pa-md row items-start q-gutter-md"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, class: ("q-pa-md row items-start q-gutter-md"), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
for (const [product] of __VLS_getVForSourceType((__VLS_ctx.products)!)) {
{
const __VLS_10 = __VLS_intrinsicElements["div"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
const __VLS_12 = __VLS_11({ ...{}, class: ("col-lg-2"), key: ((product.id)), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, class: ("col-lg-2"), key: ((product.id)), });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
{
const __VLS_15 = ({} as 'QCard' extends keyof typeof __VLS_ctx ? { 'QCard': typeof __VLS_ctx.QCard; } : 'qCard' extends keyof typeof __VLS_ctx ? { 'QCard': typeof __VLS_ctx.qCard; } : 'q-card' extends keyof typeof __VLS_ctx ? { 'QCard': (typeof __VLS_ctx)["q-card"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).QCard;
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{}, }));
({} as { QCard: typeof __VLS_15; }).QCard;
({} as { QCard: typeof __VLS_15; }).QCard;
const __VLS_17 = __VLS_16({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
{
const __VLS_20 = __VLS_intrinsicElements["img"];
const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
const __VLS_22 = __VLS_21({ ...{}, src: ("https://img.gratis.com/staticimages/brand_lykd_media_0/8803010805810_1697667736556.jpg"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, src: ("https://img.gratis.com/staticimages/brand_lykd_media_0/8803010805810_1697667736556.jpg"), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
}
(__VLS_18.slots!).default;
}
(__VLS_13.slots!).default;
}
// @ts-ignore
[products,];
}
for (const [product] of __VLS_getVForSourceType((__VLS_ctx.products)!)) {
{
const __VLS_25 = __VLS_intrinsicElements["div"];
const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
const __VLS_27 = __VLS_26({ ...{}, class: ("col-lg-2"), key: ((product.id)), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{}, class: ("col-lg-2"), key: ((product.id)), });
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>;
{
const __VLS_30 = ({} as 'QCard' extends keyof typeof __VLS_ctx ? { 'QCard': typeof __VLS_ctx.QCard; } : 'qCard' extends keyof typeof __VLS_ctx ? { 'QCard': typeof __VLS_ctx.qCard; } : 'q-card' extends keyof typeof __VLS_ctx ? { 'QCard': (typeof __VLS_ctx)["q-card"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).QCard;
const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{}, }));
({} as { QCard: typeof __VLS_30; }).QCard;
({} as { QCard: typeof __VLS_30; }).QCard;
const __VLS_32 = __VLS_31({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_31));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_30, typeof __VLS_32> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32)!;
let __VLS_34!: __VLS_NormalizeEmits<typeof __VLS_33.emit>;
{
const __VLS_35 = __VLS_intrinsicElements["img"];
const __VLS_36 = __VLS_elementAsFunctionalComponent(__VLS_35);
const __VLS_37 = __VLS_36({ ...{}, src: ("https://img.gratis.com/staticimages/brand_lykd_media_0/8803010805810_1697667736556.jpg"), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_35, typeof __VLS_37> & Record<string, unknown>) => void)({ ...{}, src: ("https://img.gratis.com/staticimages/brand_lykd_media_0/8803010805810_1697667736556.jpg"), });
const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37)!;
let __VLS_39!: __VLS_NormalizeEmits<typeof __VLS_38.emit>;
}
(__VLS_33.slots!).default;
}
(__VLS_28.slots!).default;
}
// @ts-ignore
[products,];
}
(__VLS_8.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
return __VLS_slots;
}
