type DottedMapOptions = {
  height?: number;
  width?: number;
  grid?: "diagonal" | "rect" | "hex";
};

type SvgOptions = {
  radius?: number;
  color?: string;
  shape?: "circle" | "square";
  backgroundColor?: string;
};

type Point = { x: number; y: number };

const step = 14;
const worldPoints: Point[] = createWorldPoints();

function pseudoRandom(x: number, y: number) {
  const sin = Math.sin(x * 12.9898 + y * 78.233);
  return sin - Math.floor(sin);
}

function createWorldPoints(): Point[] {
  const regions: Array<{ cx: number; cy: number; rx: number; ry: number; weight?: number }> = [
    { cx: 210, cy: 155, rx: 120, ry: 80 }, // North America
    { cx: 300, cy: 270, rx: 65, ry: 95 }, // South America
    { cx: 410, cy: 115, rx: 70, ry: 55 }, // Europe
    { cx: 465, cy: 220, rx: 75, ry: 130 }, // Africa
    { cx: 575, cy: 170, rx: 150, ry: 105 }, // Asia
    { cx: 680, cy: 300, rx: 55, ry: 45 }, // Australia
    { cx: 540, cy: 90, rx: 90, ry: 45 }, // Russia north
    { cx: 130, cy: 220, rx: 90, ry: 75 }, // Central America
  ];

  const points: Point[] = [];

  for (const region of regions) {
    const { cx, cy, rx, ry, weight = 1 } = region;
    for (let x = cx - rx; x <= cx + rx; x += step) {
      for (let y = cy - ry; y <= cy + ry; y += step) {
        const nx = (x - cx) / rx;
        const ny = (y - cy) / ry;
        const distance = nx * nx + ny * ny;
        if (distance <= 1) {
          const jitter = pseudoRandom(x, y) - 0.5;
          const offset = step * 0.35 * weight;
          points.push({
            x: x + jitter * offset,
            y: y + (pseudoRandom(y, x) - 0.5) * offset,
          });
        }
      }
    }
  }

  // Remove points that fall outside the canvas bounds
  return points.filter((point, index, arr) => {
    if (point.x < 0 || point.x > 800 || point.y < 0 || point.y > 400) {
      return false;
    }
    // avoid duplicates that are extremely close
    for (let i = 0; i < index; i += 1) {
      const prev = arr[i];
      const dx = prev.x - point.x;
      const dy = prev.y - point.y;
      if (dx * dx + dy * dy < 4) {
        return false;
      }
    }
    return true;
  });
}

export default class DottedMap {
  private readonly options: Required<Omit<DottedMapOptions, "grid">> & { grid?: DottedMapOptions["grid"] };

  constructor(options: DottedMapOptions = {}) {
    this.options = {
      height: options.height ?? 100,
      width: options.width ?? 200,
      grid: options.grid,
    };
  }

  getSVG(options: SvgOptions = {}) {
    const radius = options.radius ?? 2;
    const actualRadius = radius < 1 ? radius * 12 : radius;
    const color = options.color ?? "#00000040";
    const backgroundColor = options.backgroundColor ?? "transparent";
    const shape = options.shape ?? "circle";

    const shapes = worldPoints
      .map((point) => {
        if (shape === "square") {
          return `<rect x="${(point.x - actualRadius).toFixed(2)}" y="${(point.y - actualRadius).toFixed(2)}" width="${(
            actualRadius * 2
          ).toFixed(2)}" height="${(actualRadius * 2).toFixed(2)}" rx="${(actualRadius * 0.35).toFixed(2)}" fill="${color}" />`;
        }

        return `<circle cx="${point.x.toFixed(2)}" cy="${point.y.toFixed(2)}" r="${actualRadius.toFixed(2)}" fill="${color}" />`;
      })
      .join("");

    return `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" shape-rendering="geometricPrecision" width="${this.options.width}" height="${this.options.height}">\n  <rect width="800" height="400" fill="${backgroundColor}" />\n  <g>${shapes}</g>\n</svg>`;
  }
}
