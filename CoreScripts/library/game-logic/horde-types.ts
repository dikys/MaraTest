
// ===================================================
// --- Глобальные переменные

export const BattleController = HordeResurrection.Engine.Logic.Battle.BattleController;
export type BattleController = HordeResurrection.Engine.Logic.Battle.BattleController;
export const AllContent = HordeClassLibrary.HordeContent.AllContent;
export type AllContent = HordeClassLibrary.HordeContent.AllContent;
export const WorldConstants = HordeClassLibrary.World.Const.WorldConstants;
export type WorldConstants = HordeClassLibrary.World.Const.WorldConstants;


// ===================================================
// --- Утилиты

export const GeometryPresets = HordeClassLibrary.World.Geometry.GeometryPresets;
export type GeometryPresets = HordeClassLibrary.World.Geometry.GeometryPresets;


// ===================================================
// --- Сцена

export const Scena = HordeClassLibrary.World.ScenaComponents.Scena;
export type Scena = HordeClassLibrary.World.ScenaComponents.Scena;
export const Settlement = HordeClassLibrary.World.Settlements.Settlement;
export type Settlement = HordeClassLibrary.World.Settlements.Settlement;
export const DiplomacyStatus = HordeClassLibrary.World.Simple.DiplomacyStatus;
export type DiplomacyStatus = HordeClassLibrary.World.Simple.DiplomacyStatus;


// ===================================================
// --- Тайлы

// Ландшафт
export const Tile = HordeClassLibrary.World.Objects.Tiles.Tile;
export type Tile = HordeClassLibrary.World.Objects.Tiles.Tile;
export const TileModel = HordeClassLibrary.World.Objects.Tiles.TileModel;
export type TileModel = HordeClassLibrary.World.Objects.Tiles.TileModel;
export const KnownTile = HordeClassLibrary.World.Objects.Tiles.KnownTile;
export type KnownTile = HordeClassLibrary.World.Objects.Tiles.KnownTile;

// Unknown, Grass, Forest, Water, Marsh, Sand, Mounts, Road, Ice
export const TileType = HordeClassLibrary.HordeContent.Configs.Tiles.Stuff.TileType;
export type TileType = HordeClassLibrary.HordeContent.Configs.Tiles.Stuff.TileType;

// None, Scorched, Chopped, Exploded, ...
export const TilePayload = HordeClassLibrary.HordeContent.Configs.Tiles.Stuff.TilePayload;
export type TilePayload = HordeClassLibrary.HordeContent.Configs.Tiles.Stuff.TilePayload;

// Ресурсы
export const ResourceTile = HordeClassLibrary.World.Objects.Tiles.ResourceTile;
export type ResourceTile = HordeClassLibrary.World.Objects.Tiles.ResourceTile;
export const ResourceTileModel = HordeClassLibrary.World.Objects.Tiles.ResourceTileModel;
export type ResourceTileModel = HordeClassLibrary.World.Objects.Tiles.ResourceTileModel;
export const KnownResourceTile = HordeClassLibrary.World.Objects.Tiles.KnownResourceTile;
export type KnownResourceTile = HordeClassLibrary.World.Objects.Tiles.KnownResourceTile;

// None, Gold, Metal
export const ResourceTileType = HordeClassLibrary.World.Objects.Tiles.ResourceTileType;
export type ResourceTileType = HordeClassLibrary.World.Objects.Tiles.ResourceTileType;


// ===================================================
// --- Снаряды

export const BaseBullet = HordeClassLibrary.World.Objects.Bullets.BaseBullet;
export type BaseBullet = HordeClassLibrary.World.Objects.Bullets.BaseBullet;
export const BulletState = HordeClassLibrary.World.Objects.Bullets.BulletState;
export type BulletState = HordeClassLibrary.World.Objects.Bullets.BulletState;
export const ScriptBullet = HordeClassLibrary.World.Objects.Bullets.Implementations.Other.ScriptBullet;
export type ScriptBullet = HordeClassLibrary.World.Objects.Bullets.Implementations.Other.ScriptBullet;
export const BulletEmittingArgs = HordeClassLibrary.World.Objects.Bullets.BulletEmittingArgs;
export type BulletEmittingArgs = HordeClassLibrary.World.Objects.Bullets.BulletEmittingArgs;

// ===================================================
// --- Конфиг юнита

export const UnitConfig = HordeClassLibrary.HordeContent.Configs.Units.UnitConfig;
export type UnitConfig = HordeClassLibrary.HordeContent.Configs.Units.UnitConfig;

export const BuildingConfig = HordeClassLibrary.HordeContent.Configs.Units.BuildingConfig;
export type BuildingConfig = HordeClassLibrary.HordeContent.Configs.Units.BuildingConfig;
export const UnitTechConfig = HordeClassLibrary.HordeContent.Configs.Units.UnitTechConfig;
export type UnitTechConfig = HordeClassLibrary.HordeContent.Configs.Units.UnitTechConfig;


// ===================================================
// --- Различные типы связанные с юнитами

export const Unit = HordeClassLibrary.World.Objects.Units.Unit;
export type Unit = HordeClassLibrary.World.Objects.Units.Unit;
export const KnownUnit = HordeClassLibrary.World.Objects.Units.KnownUnit;
export type KnownUnit = HordeClassLibrary.World.Objects.Units.KnownUnit;
export const UnitArmament = HordeClassLibrary.UnitComponents.BattleSystem.UnitArmament;
export type UnitArmament = HordeClassLibrary.UnitComponents.BattleSystem.UnitArmament;
export const ShotParams = HordeClassLibrary.World.Objects.Bullets.ShotParams;
export type ShotParams = HordeClassLibrary.World.Objects.Bullets.ShotParams;
export const Squad = HordeClassLibrary.World.Objects.Squads.Squad;
export type Squad = HordeClassLibrary.World.Objects.Squads.Squad;

export const ReplaceUnitFlags = HordeClassLibrary.World.Objects.Units.ReplaceUnitFlags;
export type ReplaceUnitFlags = HordeClassLibrary.World.Objects.Units.ReplaceUnitFlags;
export const ReplaceUnitParameters = HordeClassLibrary.World.Objects.Units.ReplaceUnitParameters;
export type ReplaceUnitParameters = HordeClassLibrary.World.Objects.Units.ReplaceUnitParameters;
export const SpawnUnitParameters = HordeClassLibrary.World.Objects.Units.SpawnUnitParameters;
export type SpawnUnitParameters = HordeClassLibrary.World.Objects.Units.SpawnUnitParameters;

export const BaseUnitEventArgs = HordeClassLibrary.UnitComponents.EventArgs.BaseUnitEventArgs;
export type BaseUnitEventArgs = HordeClassLibrary.UnitComponents.EventArgs.BaseUnitEventArgs;
export const CauseDamageEventArgs = HordeClassLibrary.UnitComponents.EventArgs.CauseDamageEventArgs;
export type CauseDamageEventArgs = HordeClassLibrary.UnitComponents.EventArgs.CauseDamageEventArgs;
export const ComradeIsAttackedEventArgs = HordeClassLibrary.UnitComponents.EventArgs.ComradeIsAttackedEventArgs;
export type ComradeIsAttackedEventArgs = HordeClassLibrary.UnitComponents.EventArgs.ComradeIsAttackedEventArgs;
export const MoveAwayRequestEventArgs = HordeClassLibrary.UnitComponents.EventArgs.MoveAwayRequestEventArgs;
export type MoveAwayRequestEventArgs = HordeClassLibrary.UnitComponents.EventArgs.MoveAwayRequestEventArgs;
export const MoveOutRequestEventArgs = HordeClassLibrary.UnitComponents.EventArgs.MoveOutRequestEventArgs;
export type MoveOutRequestEventArgs = HordeClassLibrary.UnitComponents.EventArgs.MoveOutRequestEventArgs;
export const StepAwayRequestEventArgs = HordeClassLibrary.UnitComponents.EventArgs.StepAwayRequestEventArgs;
export type StepAwayRequestEventArgs = HordeClassLibrary.UnitComponents.EventArgs.StepAwayRequestEventArgs;
export const TakeDamageByUnknownSourceEventArgs = HordeClassLibrary.UnitComponents.EventArgs.TakeDamageByUnknownSourceEventArgs;
export type TakeDamageByUnknownSourceEventArgs = HordeClassLibrary.UnitComponents.EventArgs.TakeDamageByUnknownSourceEventArgs;
export const TakeDamageEventArgs = HordeClassLibrary.UnitComponents.EventArgs.TakeDamageEventArgs;
export type TakeDamageEventArgs = HordeClassLibrary.UnitComponents.EventArgs.TakeDamageEventArgs;
export const UnitBuildingCompleteEventArgs = HordeClassLibrary.UnitComponents.EventArgs.UnitBuildingCompleteEventArgs;
export type UnitBuildingCompleteEventArgs = HordeClassLibrary.UnitComponents.EventArgs.UnitBuildingCompleteEventArgs;
export const UnitDeathEventArgs = HordeClassLibrary.UnitComponents.EventArgs.UnitDeathEventArgs;
export type UnitDeathEventArgs = HordeClassLibrary.UnitComponents.EventArgs.UnitDeathEventArgs;
export const UnitDeletionEventArgs = HordeClassLibrary.UnitComponents.EventArgs.UnitDeletionEventArgs;
export type UnitDeletionEventArgs = HordeClassLibrary.UnitComponents.EventArgs.UnitDeletionEventArgs;
export const UnitDummyStateChangedEventArgs = HordeClassLibrary.UnitComponents.EventArgs.UnitDummyStateChangedEventArgs;
export type UnitDummyStateChangedEventArgs = HordeClassLibrary.UnitComponents.EventArgs.UnitDummyStateChangedEventArgs;
export const UnitHealthChangedEventArgs = HordeClassLibrary.UnitComponents.EventArgs.UnitHealthChangedEventArgs;
export type UnitHealthChangedEventArgs = HordeClassLibrary.UnitComponents.EventArgs.UnitHealthChangedEventArgs;
export const UnitLifeStateChangedEventArgs = HordeClassLibrary.UnitComponents.EventArgs.UnitLifeStateChangedEventArgs;
export type UnitLifeStateChangedEventArgs = HordeClassLibrary.UnitComponents.EventArgs.UnitLifeStateChangedEventArgs;
export const UnitMovedToCellEventArgs = HordeClassLibrary.UnitComponents.EventArgs.UnitMovedToCellEventArgs;
export type UnitMovedToCellEventArgs = HordeClassLibrary.UnitComponents.EventArgs.UnitMovedToCellEventArgs;
export const UnitNearDeathEventArgs = HordeClassLibrary.UnitComponents.EventArgs.UnitNearDeathEventArgs;
export type UnitNearDeathEventArgs = HordeClassLibrary.UnitComponents.EventArgs.UnitNearDeathEventArgs;
export const UnitOrderChangedEventArgs = HordeClassLibrary.UnitComponents.EventArgs.UnitOrderChangedEventArgs;
export type UnitOrderChangedEventArgs = HordeClassLibrary.UnitComponents.EventArgs.UnitOrderChangedEventArgs;
export const UnitOwnerChangedEventArgs = HordeClassLibrary.UnitComponents.EventArgs.UnitOwnerChangedEventArgs;
export type UnitOwnerChangedEventArgs = HordeClassLibrary.UnitComponents.EventArgs.UnitOwnerChangedEventArgs;
export const UnitReplacedEventArgs = HordeClassLibrary.UnitComponents.EventArgs.UnitReplacedEventArgs;
export type UnitReplacedEventArgs = HordeClassLibrary.UnitComponents.EventArgs.UnitReplacedEventArgs;
export const UnitEventHandler = HordeClassLibrary.UnitComponents.Events.UnitEventHandler;
export type UnitEventHandler = HordeClassLibrary.UnitComponents.Events.UnitEventHandler;

// ===================================================
// --- Перечисления связанные с юнитами

export const CanNotAttackCause = HordeClassLibrary.UnitComponents.Enumerations.CanNotAttackCause;
export type CanNotAttackCause = HordeClassLibrary.UnitComponents.Enumerations.CanNotAttackCause;
export const CanNotBuildReason = HordeClassLibrary.UnitComponents.Enumerations.CanNotBuildReason;
export type CanNotBuildReason = HordeClassLibrary.UnitComponents.Enumerations.CanNotBuildReason;
export const CaptureCondition = HordeClassLibrary.UnitComponents.Enumerations.CaptureCondition;
export type CaptureCondition = HordeClassLibrary.UnitComponents.Enumerations.CaptureCondition;
export const CompoundPart = HordeClassLibrary.UnitComponents.Enumerations.CompoundPart;
export type CompoundPart = HordeClassLibrary.UnitComponents.Enumerations.CompoundPart;
export const PatternUnitFeature = HordeClassLibrary.UnitComponents.Enumerations.PatternUnitFeature;
export type PatternUnitFeature = HordeClassLibrary.UnitComponents.Enumerations.PatternUnitFeature;
export const ResourceItemType = HordeClassLibrary.UnitComponents.Enumerations.ResourceItemType;
export type ResourceItemType = HordeClassLibrary.UnitComponents.Enumerations.ResourceItemType;
export const UnitHurtType = HordeClassLibrary.UnitComponents.Enumerations.UnitHurtType;
export type UnitHurtType = HordeClassLibrary.UnitComponents.Enumerations.UnitHurtType;
export const UnitDirection = HordeClassLibrary.UnitComponents.Enumerations.UnitDirection;
export type UnitDirection = HordeClassLibrary.UnitComponents.Enumerations.UnitDirection;
export const UnitAnimDirection = HordeClassLibrary.UnitComponents.Enumerations.UnitAnimDirection;
export type UnitAnimDirection = HordeClassLibrary.UnitComponents.Enumerations.UnitAnimDirection;
export const UnitAnimState = HordeClassLibrary.UnitComponents.Enumerations.UnitAnimState;
export type UnitAnimState = HordeClassLibrary.UnitComponents.Enumerations.UnitAnimState;
export const UnitEffectFlag = HordeClassLibrary.UnitComponents.Enumerations.UnitEffectFlag;
export type UnitEffectFlag = HordeClassLibrary.UnitComponents.Enumerations.UnitEffectFlag;
export const UnitEventFlag = HordeClassLibrary.UnitComponents.Enumerations.UnitEventFlag;
export type UnitEventFlag = HordeClassLibrary.UnitComponents.Enumerations.UnitEventFlag;
export const UnitFlags = HordeClassLibrary.UnitComponents.Enumerations.UnitFlags;
export type UnitFlags = HordeClassLibrary.UnitComponents.Enumerations.UnitFlags;
export const UnitHealthLevel = HordeClassLibrary.UnitComponents.Enumerations.UnitHealthLevel;
export type UnitHealthLevel = HordeClassLibrary.UnitComponents.Enumerations.UnitHealthLevel;
export const UnitLifeState = HordeClassLibrary.UnitComponents.Enumerations.UnitLifeState;
export type UnitLifeState = HordeClassLibrary.UnitComponents.Enumerations.UnitLifeState;
export const UnitMapLayer = HordeClassLibrary.UnitComponents.Enumerations.UnitMapLayer;
export type UnitMapLayer = HordeClassLibrary.UnitComponents.Enumerations.UnitMapLayer;
export const UnitQueryFlag = HordeClassLibrary.UnitComponents.Enumerations.UnitQueryFlag;
export type UnitQueryFlag = HordeClassLibrary.UnitComponents.Enumerations.UnitQueryFlag;
export const UnitSpecification = HordeClassLibrary.UnitComponents.Enumerations.UnitSpecification;
export type UnitSpecification = HordeClassLibrary.UnitComponents.Enumerations.UnitSpecification;
export const UnitState = HordeClassLibrary.UnitComponents.Enumerations.UnitState;
export type UnitState = HordeClassLibrary.UnitComponents.Enumerations.UnitState;
export const UnitVisibility = HordeClassLibrary.UnitComponents.Enumerations.UnitVisibility;
export type UnitVisibility = HordeClassLibrary.UnitComponents.Enumerations.UnitVisibility;
export const UnitBehaviorByOrderFlag = HordeClassLibrary.UnitComponents.Enumerations.UnitBehaviorByOrderFlag;
export type UnitBehaviorByOrderFlag = HordeClassLibrary.UnitComponents.Enumerations.UnitBehaviorByOrderFlag;


// ===================================================
// --- Команды и приказы

export const UnitCommand = HordeClassLibrary.UnitComponents.OrdersSystem.UnitCommand;
export type UnitCommand = HordeClassLibrary.UnitComponents.OrdersSystem.UnitCommand;

export const ACommandArgs = HordeClassLibrary.UnitComponents.OrdersSystem.CommandArgs.ACommandArgs;
export type ACommandArgs = HordeClassLibrary.UnitComponents.OrdersSystem.CommandArgs.ACommandArgs;
export const AUnknownCommandArgs = HordeClassLibrary.UnitComponents.OrdersSystem.CommandArgs.AUnknownCommandArgs;
export type AUnknownCommandArgs = HordeClassLibrary.UnitComponents.OrdersSystem.CommandArgs.AUnknownCommandArgs;
export const OneClickCommandArgs = HordeClassLibrary.UnitComponents.OrdersSystem.CommandArgs.OneClickCommandArgs;
export type OneClickCommandArgs = HordeClassLibrary.UnitComponents.OrdersSystem.CommandArgs.OneClickCommandArgs;
export const PointCommandArgs = HordeClassLibrary.UnitComponents.OrdersSystem.CommandArgs.PointCommandArgs;
export type PointCommandArgs = HordeClassLibrary.UnitComponents.OrdersSystem.CommandArgs.PointCommandArgs;
export const ProduceAtCommandArgs = HordeClassLibrary.UnitComponents.OrdersSystem.CommandArgs.ProduceAtCommandArgs;
export type ProduceAtCommandArgs = HordeClassLibrary.UnitComponents.OrdersSystem.CommandArgs.ProduceAtCommandArgs;
export const ProduceCommandArgs = HordeClassLibrary.UnitComponents.OrdersSystem.CommandArgs.ProduceCommandArgs;
export type ProduceCommandArgs = HordeClassLibrary.UnitComponents.OrdersSystem.CommandArgs.ProduceCommandArgs;

export const AOrderBase = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.AOrderBase;
export type AOrderBase = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.AOrderBase;
export const OrderAttackParameters = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.OrderAttackParameters;
export type OrderAttackParameters = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.OrderAttackParameters;
export const OrderAttackUnit = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.OrderAttackUnit;
export type OrderAttackUnit = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.OrderAttackUnit;
export const OrderBuildingAttackUnit = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.OrderBuildingAttackUnit;
export type OrderBuildingAttackUnit = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.OrderBuildingAttackUnit;
export const OrderCapture = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.OrderCapture;
export type OrderCapture = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.OrderCapture;
export const OrderCustom = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.OrderCustom;
export type OrderCustom = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.OrderCustom;
export const OrderDeath = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.OrderDeath;
export type OrderDeath = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.OrderDeath;
export const OrderDestroySelf = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.OrderDestroySelf;
export type OrderDestroySelf = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.OrderDestroySelf;
export const OrderDoNothing = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.OrderDoNothing;
export type OrderDoNothing = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.OrderDoNothing;
export const OrderHarvestLumber = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.OrderHarvestLumber;
export type OrderHarvestLumber = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.OrderHarvestLumber;
export const OrderHoldPosition = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.OrderHoldPosition;
export type OrderHoldPosition = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.OrderHoldPosition;
export const OrderMine = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.OrderMine;
export type OrderMine = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.OrderMine;
export const OrderMoveAway = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.OrderMoveAway;
export type OrderMoveAway = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.OrderMoveAway;
export const OrderMoveOutRegion = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.OrderMoveOutRegion;
export type OrderMoveOutRegion = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.OrderMoveOutRegion;
export const OrderMoveToPoint = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.OrderMoveToPoint;
export type OrderMoveToPoint = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.OrderMoveToPoint;
export const OrderMoveToStock = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.OrderMoveToStock;
export type OrderMoveToStock = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.OrderMoveToStock;
export const OrderPanikMoving = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.OrderPanikMoving;
export type OrderPanikMoving = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.OrderPanikMoving;
export const OrderPanikStupor = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.OrderPanikStupor;
export type OrderPanikStupor = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.OrderPanikStupor;
export const OrderStepAwayImmediate = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.OrderStepAwayImmediate;
export type OrderStepAwayImmediate = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.OrderStepAwayImmediate;
export const OrderStepAwayWaiting = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.OrderStepAwayWaiting;
export type OrderStepAwayWaiting = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.OrderStepAwayWaiting;
export const OrderTurn = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.OrderTurn;
export type OrderTurn = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.OrderTurn;

export const OrderBuild = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.Producing.OrderBuild;
export type OrderBuild = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.Producing.OrderBuild;
export const OrderBuildParameters = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.Producing.OrderBuildParameters;
export type OrderBuildParameters = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.Producing.OrderBuildParameters;
export const OrderBuildSelf = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.Producing.OrderBuildSelf;
export type OrderBuildSelf = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.Producing.OrderBuildSelf;
export const OrderPreBuild = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.Producing.OrderPreBuild;
export type OrderPreBuild = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.Producing.OrderPreBuild;
export const OrderPreBuildParameters = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.Producing.OrderPreBuildParameters;
export type OrderPreBuildParameters = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.Producing.OrderPreBuildParameters;
export const OrderProduce = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.Producing.OrderProduce;
export type OrderProduce = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.Producing.OrderProduce;
export const OrderProduceAt = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.Producing.OrderProduceAt;
export type OrderProduceAt = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.Producing.OrderProduceAt;
export const OrderRepair = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.Producing.OrderRepair;
export type OrderRepair = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.Producing.OrderRepair;
export const OrderRepairParameters = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.Producing.OrderRepairParameters;
export type OrderRepairParameters = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.Producing.OrderRepairParameters;
export const OrderRepairSelf = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.Producing.OrderRepairSelf;
export type OrderRepairSelf = HordeClassLibrary.UnitComponents.OrdersSystem.Orders.Producing.OrderRepairSelf;

export const StateMotion = HordeClassLibrary.UnitComponents.OrdersSystem.Motions.StateMotion;
export type StateMotion = HordeClassLibrary.UnitComponents.OrdersSystem.Motions.StateMotion;

export const AActBase = HordeClassLibrary.UnitComponents.OrdersSystem.Acts.AActBase;
export type AActBase = HordeClassLibrary.UnitComponents.OrdersSystem.Acts.AActBase;
export const ActProduce = HordeClassLibrary.UnitComponents.OrdersSystem.Acts.Producing.ActProduce;
export type ActProduce = HordeClassLibrary.UnitComponents.OrdersSystem.Acts.Producing.ActProduce;
export const ActCustom = HordeClassLibrary.UnitComponents.OrdersSystem.Acts.ActCustom;
export type ActCustom = HordeClassLibrary.UnitComponents.OrdersSystem.Acts.ActCustom;

export const AMotionBase = HordeClassLibrary.UnitComponents.OrdersSystem.Motions.AMotionBase;
export type AMotionBase = HordeClassLibrary.UnitComponents.OrdersSystem.Motions.AMotionBase;
export const MotionHit = HordeClassLibrary.UnitComponents.OrdersSystem.Motions.MotionHit;
export type MotionHit = HordeClassLibrary.UnitComponents.OrdersSystem.Motions.MotionHit;
export const MotionCustom = HordeClassLibrary.UnitComponents.OrdersSystem.Motions.MotionCustom;
export type MotionCustom = HordeClassLibrary.UnitComponents.OrdersSystem.Motions.MotionCustom;

// Обработчики
export const ScriptUnitWorkerState = HordeClassLibrary.UnitComponents.Workers.Script.ScriptUnitWorkerState;
export type ScriptUnitWorkerState = HordeClassLibrary.UnitComponents.Workers.Script.ScriptUnitWorkerState;
export const ScriptUnitWorkerEveryTick = HordeClassLibrary.UnitComponents.Workers.Script.ScriptUnitWorkerEveryTick;
export type ScriptUnitWorkerEveryTick = HordeClassLibrary.UnitComponents.Workers.Script.ScriptUnitWorkerEveryTick;
export const ScriptUnitWorkerGetOrder = HordeClassLibrary.UnitComponents.Workers.Script.ScriptUnitWorkerGetOrder;
export type ScriptUnitWorkerGetOrder = HordeClassLibrary.UnitComponents.Workers.Script.ScriptUnitWorkerGetOrder;
export const ScriptUnitWorkerGetSpeedAtCell = HordeClassLibrary.UnitComponents.Workers.Script.ScriptUnitWorkerGetSpeedAtCell;
export type ScriptUnitWorkerGetSpeedAtCell = HordeClassLibrary.UnitComponents.Workers.Script.ScriptUnitWorkerGetSpeedAtCell;
export const GetSpeedAtCellByKnownMapJsResult = HordeClassLibrary.UnitComponents.Workers.Script.GetSpeedAtCellByKnownMapJsResult;
export type GetSpeedAtCellByKnownMapJsResult = HordeClassLibrary.UnitComponents.Workers.Script.GetSpeedAtCellByKnownMapJsResult;
export const GetSpeedAtCellByRealMapJsResult = HordeClassLibrary.UnitComponents.Workers.Script.GetSpeedAtCellByRealMapJsResult;
export type GetSpeedAtCellByRealMapJsResult = HordeClassLibrary.UnitComponents.Workers.Script.GetSpeedAtCellByRealMapJsResult;
export const ScriptUnitWorkerCanBePlaced = HordeClassLibrary.UnitComponents.Workers.Script.ScriptUnitWorkerCanBePlaced;
export type ScriptUnitWorkerCanBePlaced = HordeClassLibrary.UnitComponents.Workers.Script.ScriptUnitWorkerCanBePlaced;
export const CanBePlacedByKnownMapJsResult = HordeClassLibrary.UnitComponents.Workers.Script.CanBePlacedByKnownMapJsResult;
export type CanBePlacedByKnownMapJsResult = HordeClassLibrary.UnitComponents.Workers.Script.CanBePlacedByKnownMapJsResult;
export const CanBePlacedByRealMapJsResult = HordeClassLibrary.UnitComponents.Workers.Script.CanBePlacedByRealMapJsResult;
export type CanBePlacedByRealMapJsResult = HordeClassLibrary.UnitComponents.Workers.Script.CanBePlacedByRealMapJsResult;


// ===================================================
// --- Конфиги

export const BulletConfig = HordeClassLibrary.HordeContent.Configs.Bullets.BulletConfig;
export type BulletConfig = HordeClassLibrary.HordeContent.Configs.Bullets.BulletConfig;
export const Force = HordeClassLibrary.HordeContent.Configs.Army.Force;
export type Force = HordeClassLibrary.HordeContent.Configs.Army.Force;
export const RuleConfig = HordeClassLibrary.HordeContent.Configs.Rules.RuleConfig;
export type RuleConfig = HordeClassLibrary.HordeContent.Configs.Rules.RuleConfig;
export const SoundEffectConfig = HordeClassLibrary.HordeContent.Configs.SoundEffects.SoundEffectConfig;
export type SoundEffectConfig = HordeClassLibrary.HordeContent.Configs.SoundEffects.SoundEffectConfig;
export const SoundsCatalog = HordeClassLibrary.HordeContent.Configs.ViewResourceCatalogs.Audio.SoundsCatalog;
export type SoundsCatalog = HordeClassLibrary.HordeContent.Configs.ViewResourceCatalogs.Audio.SoundsCatalog;
export const BackgroundAnimationsCatalog = HordeClassLibrary.HordeContent.Configs.ViewResourceCatalogs.Graphics.Specialization.BackgroundAnimationsCatalog;
export type BackgroundAnimationsCatalog = HordeClassLibrary.HordeContent.Configs.ViewResourceCatalogs.Graphics.Specialization.BackgroundAnimationsCatalog;
export const BulletAnimationsCatalog = HordeClassLibrary.HordeContent.Configs.ViewResourceCatalogs.Graphics.Specialization.BulletAnimationsCatalog;
export type BulletAnimationsCatalog = HordeClassLibrary.HordeContent.Configs.ViewResourceCatalogs.Graphics.Specialization.BulletAnimationsCatalog;
export const ButtonAnimationsCatalog = HordeClassLibrary.HordeContent.Configs.ViewResourceCatalogs.Graphics.Specialization.ButtonAnimationsCatalog;
export type ButtonAnimationsCatalog = HordeClassLibrary.HordeContent.Configs.ViewResourceCatalogs.Graphics.Specialization.ButtonAnimationsCatalog;
export const DecayAnimationsCatalog = HordeClassLibrary.HordeContent.Configs.ViewResourceCatalogs.Graphics.Specialization.DecayAnimationsCatalog;
export type DecayAnimationsCatalog = HordeClassLibrary.HordeContent.Configs.ViewResourceCatalogs.Graphics.Specialization.DecayAnimationsCatalog;
export const FontCatalog = HordeClassLibrary.HordeContent.Configs.ViewResourceCatalogs.Graphics.Specialization.FontCatalog;
export type FontCatalog = HordeClassLibrary.HordeContent.Configs.ViewResourceCatalogs.Graphics.Specialization.FontCatalog;
export const SimpleAnimationsCatalog = HordeClassLibrary.HordeContent.Configs.ViewResourceCatalogs.Graphics.Specialization.SimpleAnimationsCatalog;
export type SimpleAnimationsCatalog = HordeClassLibrary.HordeContent.Configs.ViewResourceCatalogs.Graphics.Specialization.SimpleAnimationsCatalog;
export const UnitAnimationsCatalog = HordeClassLibrary.HordeContent.Configs.ViewResourceCatalogs.Graphics.Specialization.UnitAnimationsCatalog;
export type UnitAnimationsCatalog = HordeClassLibrary.HordeContent.Configs.ViewResourceCatalogs.Graphics.Specialization.UnitAnimationsCatalog;
export const VisualEffectConfig = HordeClassLibrary.HordeContent.Configs.VisualEffects.VisualEffectConfig;
export type VisualEffectConfig = HordeClassLibrary.HordeContent.Configs.VisualEffects.VisualEffectConfig;
export const UnitCommandConfig = HordeClassLibrary.HordeContent.Configs.UnitCommandConfig;
export type UnitCommandConfig = HordeClassLibrary.HordeContent.Configs.UnitCommandConfig;
export const MindCharacterConfig = HordeClassLibrary.HordeContent.Configs.MasterMind.MindCharacterConfig;
export type MindCharacterConfig = HordeClassLibrary.HordeContent.Configs.MasterMind.MindCharacterConfig;


// ===================================================
// --- Прочие объекты сцены

export const StringVisualEffect = HordeClassLibrary.World.Objects.VisualEffects.StringVisualEffect;
export type StringVisualEffect = HordeClassLibrary.World.Objects.VisualEffects.StringVisualEffect;
export const GeometryVisualEffect = HordeClassLibrary.World.Objects.VisualEffects.GeometryVisualEffect;
export type GeometryVisualEffect = HordeClassLibrary.World.Objects.VisualEffects.GeometryVisualEffect;

export const VisualEffectFogOfWarMode = HordeClassLibrary.World.Objects.VisualEffects.VisualEffectFogOfWarMode;
export type VisualEffectFogOfWarMode = HordeClassLibrary.World.Objects.VisualEffects.VisualEffectFogOfWarMode;


// ===================================================
// --- Графика

export const DrawLayer = HordeClassLibrary.World.Simple.DrawLayer;
export type DrawLayer = HordeClassLibrary.World.Simple.DrawLayer;
export const FontUtils = HordeResurrection.Game.UI.Utils.FontUtils;
export type FontUtils = HordeResurrection.Game.UI.Utils.FontUtils;
export const GeometryCanvas = HordeResurrection.Game.Render.GeometryCanvas.GeometryCanvas;
export type GeometryCanvas = HordeResurrection.Game.Render.GeometryCanvas.GeometryCanvas;


// ===================================================
// --- Player

export const Player = HordeResurrection.Engine.Logic.Main.Players.Player;
export type Player = HordeResurrection.Engine.Logic.Main.Players.Player;


// ===================================================
// --- Типы для использования в рендере

export const Stride_Vector2 = Stride.Core.Mathematics.Vector2;
export type Stride_Vector2 = any;
export const Stride_Color = Stride.Core.Mathematics.Color;
export type Stride_Color = any;


// ===================================================
// --- Прочее

export const AnimatorScriptTasks = HordeClassLibrary.HordeContent.ViewResources.Graphics.InternalLogic.Tasks.AnimatorScriptTasks;
export type AnimatorScriptTasks = HordeClassLibrary.HordeContent.ViewResources.Graphics.InternalLogic.Tasks.AnimatorScriptTasks;
