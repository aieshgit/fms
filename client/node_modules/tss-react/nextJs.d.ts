import type NextDocument from "next/document";
import type { EmotionCache } from "@emotion/cache";
export declare function withEmotionCache(params: {
    Document: typeof NextDocument;
    getCaches?: () => EmotionCache[];
}): typeof NextDocument;
