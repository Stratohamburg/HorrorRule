// ... existing code ...
# 《恐怖规则》技术开发规范 (Technical Specification)

本文档旨在将策划案中的概念转化为前端开发可直接执行的技术标准，包括地图图层规范、全局事件字典、资源命名规范等。

---

## 一、 Tiled Map Editor 图层与对象规范

为了让程序能正确解析地图并生成游戏对象，所有关卡的 Tiled Map 必须遵循以下图层命名和对象属性规范：

### 1.1 图层结构 (Layers)
从下到上依次为：
1. `Tile Layer 1: Ground` (地面，无碰撞)
2. `Tile Layer 2: Wall` (墙壁，有碰撞，阻挡视线)
3. `Tile Layer 3: Decor_Bottom` (底层装饰，如地毯、血迹，无碰撞)
4. `Tile Layer 4: Decor_Top` (顶层装饰，如墙上的画，无碰撞)
5. `Object Layer 1: Collisions` (不可见碰撞体，用于精细化阻挡)
6. `Object Layer 2: Entities` (实体生成点，如玩家、怪物、NPC)
7. `Object Layer 3: Interactables` (可交互物体，如门、抽屉、纸条)
8. `Object Layer 4: Lights` (光源，如路灯、台灯)
9. `Object Layer 5: Triggers` (触发区域，用于事件检测)

### 1.2 对象属性 (Custom Properties)
在 `Entities`、`Interactables`、`Lights`、`Triggers` 图层中的对象，必须配置以下自定义属性：

*   **Entities (实体)**
    *   `type`: `Player` | `Monster` | `NPC`
    *   `id`: 实体唯一ID (如 `M001`)
    *   `direction`: 初始朝向 (`up`, `down`, `left`, `right`)
*   **Interactables (可交互物体)**
    *   `type`: `Door` | `Container` | `Note` | `Switch`
    *   `id`: 物体唯一ID (如 `Door_Room404`)
    *   `locked`: 是否上锁 (布尔值)
    *   `keyId`: 解锁所需物品ID (如 `I009`)
    *   `ruleId`: 关联的规则ID (如 `R_L003_01`)
*   **Lights (光源)**
    *   `type`: `PointLight` | `SpotLight`
    *   `radius`: 光照半径 (数值)
    *   `color`: 光照颜色 (Hex，如 `#FFDD88`)
    *   `intensity`: 光照强度 (0.0 - 1.0)
    *   `active`: 初始是否开启 (布尔值)
*   **Triggers (触发区域)**
    *   `id`: 触发器唯一ID (如 `Trigger_EnterRoom`)
    *   `eventId`: 触发的事件ID (如 `Event_SpawnMonster`)

---

## 二、 全局事件字典 (Event Bus Dictionary)

游戏核心逻辑基于事件驱动，以下是系统中会抛出和监听的核心事件：

### 2.1 玩家行为事件
*   `PLAYER_MOVE`: 玩家移动时触发。参数：`{ x, y, direction, speed, isRunning }`
*   `PLAYER_INTERACT`: 玩家与物体交互时触发。参数：`{ targetId, targetType }`
*   `PLAYER_USE_ITEM`: 玩家使用物品时触发。参数：`{ itemId, targetId? }`
*   `PLAYER_SANITY_CHANGE`: 玩家SAN值改变时触发。参数：`{ amount, reason }`
*   `PLAYER_STAMINA_CHANGE`: 玩家体力值改变时触发。参数：`{ amount, isExhausted }`

### 2.2 实体与环境事件
*   `MONSTER_STATE_CHANGE`: 怪物状态改变时触发。参数：`{ monsterId, oldState, newState }`
*   `LIGHT_STATE_CHANGE`: 光源状态改变时触发。参数：`{ lightId, isActive }`
*   `DOOR_STATE_CHANGE`: 门状态改变时触发。参数：`{ doorId, isOpen, isLocked }`

### 2.3 游戏流程事件
*   `LEVEL_START`: 关卡开始时触发。参数：`{ levelId }`
*   `LEVEL_COMPLETE`: 关卡完成时触发。参数：`{ levelId, stats }`
*   `GAME_OVER`: 游戏结束时触发。参数：`{ reason }`
*   `RULE_DISCOVERED`: 发现新规则时触发。参数：`{ ruleId }`
*   `RULE_VIOLATED`: 违反规则时触发。参数：`{ ruleId, consequence }`

---

## 三、 资源命名规范 (Asset Naming Convention)

为了方便代码动态加载和管理，所有美术和音频资源必须遵循以下命名规范：

*   **精灵图 (Sprites)**: `spr_<type>_<name>.png` (如 `spr_player_idle.png`, `spr_monster_m001.png`)
*   **图块集 (Tilesets)**: `ts_<name>.png` (如 `ts_school_interior.png`)
*   **地图数据 (Maps)**: `map_<levelId>.json` (如 `map_l001.json`)
*   **背景音乐 (BGM)**: `bgm_<name>.mp3/ogg` (如 `bgm_main_menu.mp3`)
*   **音效 (SFX)**: `sfx_<type>_<name>.mp3/ogg` (如 `sfx_footstep_wood.mp3`, `sfx_door_open.mp3`)
*   **UI 图标 (UI)**: `ui_icon_<name>.png` (如 `ui_icon_inventory.png`, `ui_icon_sanity.png`)
// ... existing code ...