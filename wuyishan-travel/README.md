# 山中有信 · 武夷山旅行手帖

## 本地运行

需要安装 Node.js。进入本目录后运行：

```powershell
node server.js
```

然后打开 <http://127.0.0.1:4173>。如端口已占用，可指定其他端口，例如 `node server.js 4175`。

地图使用 MapLibre GL JS、OpenFreeMap / OpenStreetMap 矢量底图，并尝试加载 Mapterhorn 地形。地图需要联网；不可用时页面会显示可拖动、可缩放的示意地形。地图上的收藏连线按选择顺序绘制，仅供整理地点，不代表道路导航。

## 高德详细地图（Cloudflare Pages）

页面优先加载高德 JS API 2.1Beta，以显示更完整的道路、地点和 3D 视角；高德配置不可用时保留 OpenFreeMap 作为回退底图。高德 API 凭据不放入仓库，使用 Cloudflare Pages Function 从环境变量读取：

- `AMAP_JS_API_KEY`：高德开放平台 Web 端（JS API）Key
- `AMAP_SECURITY_JS_CODE`：该 Key 对应的安全密钥

在 Cloudflare Pages 项目的 Settings → Variables and Secrets 中为 Production 设置上述变量，然后重新部署。高德开放平台侧应将 Web Key 限定到生产网站域名。`functions/api/amap-config.js` 为页面提供运行时配置。

部署项目时，Pages 的根目录需要指向本目录，使 `index.html` 与 `functions/` 一起发布。

## 当前内容状态

- 已确认车票和住宿按用户提供的信息展示。
- 景点、餐馆是供浏览的候选地点；店铺详情、开放时间、票务和实时接驳仍需核实。
- 鸿林大酒店的名称与公开地图里的同音地点写法不同，酒店卡片保留用户提供的“鸿林”，位置请以预订订单为准。
- 行程规划操作和每日分组暂未设定；地图当前支持筛选、地点详情和收藏。

## 地图与资料来源

- [MapLibre GL JS 3D 地形示例](https://maplibre.org/maplibre-gl-js/docs/examples/3d-terrain/)
- [OpenFreeMap 快速开始](https://openfreemap.org/quick_start/)
- [OpenStreetMap 版权与署名说明](https://www.openstreetmap.org/copyright)

