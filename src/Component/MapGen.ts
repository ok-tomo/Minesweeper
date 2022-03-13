// 周辺の爆弾の数を数える
const bombCount = (map: number[][]) => {
    const newMap: number[][] = map;
    const size = map.length;

    // O(size ^ 2)
    for (let y = 0; y < size; y += 1) {
        for (let x = 0; x < size; x += 1) {
            if (newMap[y][x] >= 0) { continue; }

            for (let dy = -1; dy < 2; dy += 1) {
                if ((y === 0 && dy === -1) || (y === size - 1 && dy === 1)) { continue; }

                for (let dx = -1; dx < 2; dx += 1) {
                    if ((x === 0 && dx === -1) || (x === size - 1 && dx === 1)) { continue; }
                    if (dy === 0 && dx === 0) { continue; }
                    const nx: number = x + dx;
                    const ny: number = y + dy;

                    if (newMap[ny][nx] === -1) { continue; }
                    newMap[ny][nx] += 1;
                }
            }
        }
    }

    return newMap;
};

const bombGen = (size: number, bombs: number) => {
    const map = [...Array(size)].map(() => new Array(size).fill(0));
    const bombPoint: number[][] = Array(0);
    let n: number = bombs;

    for (let i = 0; i < n; i += 1) {
        // sizeの範囲内で爆弾の生成
        const x: number = Math.floor(Math.random() * size);
        const y: number = Math.floor(Math.random() * size);

        const isAlreadyAdded = bombPoint.some((point) => {
            if ([x, y] === point) {
                return true;
            }
            return false;
        });

        // 被った場合はループを1増やして次へ
        if (isAlreadyAdded) {
            n += 1;
            continue;
        }

        map[y][x] = -1;
        bombPoint.push([x, y]);
    }

    return map;
};

// マップの生成
const mapGen = (size: number, bombs: number) => {
    // マップの初期化と爆弾の配置
    let map = bombGen(size, bombs);

    // 周囲の爆弾の数を数える
    map = bombCount(map);

    return map;
};

export default mapGen;
