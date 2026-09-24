export declare function unzipAndDecodeImages(zipSize: number): TransformStream<any, any>;
export declare function fetchAndDecodeImages(url: string): ReadableStream<any>;
export declare function decodeImage(fileBytes: ArrayBuffer): Promise<{
    rgba: Uint8Array<ArrayBuffer>;
    width: number;
    height: number;
}>;
