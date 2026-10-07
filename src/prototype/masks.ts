import type { Mask } from "./model";
export const SIZE = 256;
export async function fontReady() {
  await document.fonts.load('700 120px Plex');
}
export function textMask(text: string): Mask {
  const c = document.createElement("canvas"); c.width = c.height = SIZE;
  const ctx = c.getContext("2d")!; ctx.fillStyle = "black"; ctx.fillRect(0, 0, SIZE, SIZE); ctx.fillStyle = "white";
  ctx.font = '700 150px Plex, sans-serif'; const measured = ctx.measureText(text);
  const scale = Math.min(1, 218 / Math.max(1, measured.width)); const size = 150 * scale;
  ctx.font = `700 ${size}px Plex, sans-serif`; ctx.textAlign = "center"; ctx.textBaseline = "middle";
  // Text metrics, not a Latin-only fixed baseline, keep kana and symbols inside the safe box.
  const m = ctx.measureText(text); const mid = ((m.actualBoundingBoxAscent || size / 2) - (m.actualBoundingBoxDescent || 0)) / 2;
  ctx.textBaseline = "alphabetic"; ctx.fillText(text, SIZE / 2, SIZE / 2 + mid);
  return canvasMask(c, text);
}
export function shapeMask(shape: "ring" | "diamond"): Mask {
  const c = document.createElement("canvas"); c.width = c.height = SIZE; const x = c.getContext("2d")!;
  x.fillStyle = "black"; x.fillRect(0,0,SIZE,SIZE); x.strokeStyle = "white"; x.lineWidth = 24;
  x.beginPath(); if (shape === "ring") x.arc(128,128,74,0,Math.PI*2); else { x.moveTo(128,35);x.lineTo(218,128);x.lineTo(128,221);x.lineTo(38,128);x.closePath(); } x.stroke();
  return canvasMask(c, shape === "ring" ? "自作の輪" : "自作の菱形");
}
function canvasMask(c: HTMLCanvasElement, label: string): Mask {
  const data = c.getContext("2d")!.getImageData(0,0,SIZE,SIZE).data;
  return { size: SIZE, pixels: Uint8Array.from({ length: SIZE * SIZE }, (_, i) => data[i * 4]!), label };
}
export async function imageMask(file: File, threshold: number, polarity: string): Promise<Mask> {
  if (!['image/png','image/jpeg','image/webp'].includes(file.type)) throw new Error("PNG・JPEG・WebP画像を選んでください。");
  if (file.size > 8 * 1024 * 1024) throw new Error("画像は8MB以内にしてください。");
  let img:ImageBitmap;try{img=await createImageBitmap(file);}catch{throw new Error("画像として開けませんでした。正常なPNG・JPEG・WebPを選んでください。");} if (img.width * img.height > 32_000_000) { img.close(); throw new Error("画像は3200万画素以内にしてください。"); }
  const c = document.createElement("canvas"); c.width = c.height = SIZE;
  const ctx = c.getContext("2d")!; const scale = 218 / Math.max(img.width,img.height), w = img.width * scale, h = img.height * scale;
  ctx.drawImage(img,(SIZE-w)/2,(SIZE-h)/2,w,h); img.close();
  const rgba = ctx.getImageData(0,0,SIZE,SIZE).data;
  return { size: SIZE, label: file.name, pixels: Uint8Array.from({ length: SIZE * SIZE },(_,i) => {
    const a = rgba[i*4+3]!/255, luma = (.2126*rgba[i*4]!+.7152*rgba[i*4+1]!+.0722*rgba[i*4+2]!)/255;
    const signal = polarity === "alpha" ? a : polarity === "dark" ? (1-luma)*a : luma*a;
    return signal >= threshold ? 255 : 0;
  }) };
}
export function previewMask(mask: Mask): string {
  const c = document.createElement("canvas"); c.width = c.height = mask.size; const ctx = c.getContext("2d")!; const d = ctx.createImageData(mask.size, mask.size);
  mask.pixels.forEach((v,i) => { d.data[i*4] = v; d.data[i*4+1] = v; d.data[i*4+2] = v; d.data[i*4+3]=255; }); ctx.putImageData(d,0,0);return c.toDataURL();
}
export function validateMasks(masks: Mask[]): string[] {
  return masks.flatMap(mask=>{
    const ink = mask.pixels.reduce((n,v)=>n+(v>127?1:0),0), ratio = ink / mask.pixels.length;
    if (!ink) throw new Error(`${mask.label}: 形が空です。`);
    let edges=0;
    for(let y=1;y<mask.size-1;y++)for(let x=1;x<mask.size-1;x++){
      const i=y*mask.size+x;
      if(mask.pixels[i]!>127 && [i-1,i+1,i-mask.size,i+mask.size].some(n=>mask.pixels[n]!<=127))edges++;
    }
    const warnings:string[]=[];
    if(ratio<.025 || edges/ink>.6)warnings.push(`${mask.label}: 256pxの輪郭で細線が多い形です。線を太くするか文字を短くしてください。`);
    if(ratio>.65)warnings.push(`${mask.label}: ほぼ全面が選択されています。背景の明暗を確認してください。`);
    // Tiny detached features can have no supporting field particles even when
    // the overall mask is thick. Inspect 8-connected foreground components;
    // this warning is a raster heuristic, not a promise about visible pixels.
    const seen=new Uint8Array(mask.pixels.length), queue=new Uint32Array(mask.pixels.length);let tiny=0;
    for(let start=0;start<mask.pixels.length;start++){
      if(seen[start]||mask.pixels[start]!<=127)continue;
      let head=0,tail=1;queue[0]=start;seen[start]=1;
      while(head<tail){const at=queue[head++]!,x=at%mask.size,y=Math.floor(at/mask.size);
        for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++){
          const nx=x+dx,ny=y+dy;if(nx<0||ny<0||nx>=mask.size||ny>=mask.size)continue;
          const next=ny*mask.size+nx;if(!seen[next]&&mask.pixels[next]!>127){seen[next]=1;queue[tail++]=next;}
        }
      }
      if(tail<=9)tiny++;
    }
    if(tiny)warnings.push(`${mask.label}: 9画素以下の孤立した部分が${tiny}個あります。点群では欠ける場合があるため、拡大して確認してください。`);
    return warnings;
  });
}
