# 山中有信 · 武夷山旅行手帖

## 本地运行

需要安装 Node.js。进入本目录后运行：

```powershell
node server.js
```

然后打开 <http://127.0.0.1:4173>。如端口已占用，可指定其他端口，例如 `node server.js 4175`。

地图使用 MapLibre GL JS、OpenFreeMap / OpenStreetMap 矢量底图，并尝试加载 Mapterhorn 地形。地图需要联网；不可用时页面会显示可拖动、可缩放的示意地形。地图上的收藏连线按选择顺序绘制，仅供整理地点，不代表道路导航。

## 当前内容状态

- 已确认车票和住宿按用户提供的信息展示。
- 景点、餐馆是供浏览的候选地点；店铺详情、开放时间、票务和实时接驳仍需核实。
- 鸿林大酒店的名称与公开地图里的同音地点写法不同，酒店卡片保留用户提供的“鸿林”，位置请以预订订单为准。
- 行程规划操作和每日分组暂未设定；地图当前支持筛选、地点详情和收藏。

## 地图与资料来源

- [MapLibre GL JS 3D 地形示例](https://maplibre.org/maplibre-gl-js/docs/examples/3d-terrain/)
- [OpenFreeMap 快速开始](https://openfreemap.org/quick_start/)
- [OpenStreetMap 版权与署名说明](https://www.openstreetmap.org/copyright)

