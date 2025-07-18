import { MaraPriority } from "../MaraPriority";

/**
 * @deprecated Используйте MaraAIConfig вместо этого класса для всех новых контроллеров и логики ИИ.
 */
export class MaraSettlementControllerSettings {
    public UnitSearch: UnitSearchSettings = new UnitSearchSettings();
    public Timeouts: TimeoutsSettings = new TimeoutsSettings();
    public Squads: SquadsSettings = new SquadsSettings();
    public ControllerStates: ControllerStatesSettings = new ControllerStatesSettings();
    public ResourceMining: ResourceMiningSettings = new ResourceMiningSettings();
    public Combat: CombatSettings = new CombatSettings();
    public Priorities: Priorities = new Priorities();
}

class UnitSearchSettings {
    public BuildingSearchRadius: number = 5;
    public ExpandEnemySearchRadius: number = 12;
}

class TimeoutsSettings {
    public MaxBuildUpProduction: number = 2 * 60 * 50;
    public MinBuildUpProduction: number = 0.5 * 60 * 50;

    public Exterminate: number = 5 * 60 * 50;
    public Develop: number = 2 * 60 * 50;
    
    public ExpandBuild: number = 1.5 * 60 * 50;
    public ExpandPrepare: number = 5 * 60 * 50;

    public StrategyActionSuccessMinCooldown = 0 * 50;
    public StrategyActionSuccessMaxCooldown = 10 * 50;

    public StrategyActionFailMinCooldown = 0 * 50;
    public StrategyActionFailMaxCooldown = 10 * 50;
    
    public StrategyActionUnavailMaxCooldown: number = 1 * 60 * 50;
    public StrategyActionUnavailMinCooldown: number = 0.5 * 60 * 50;

    public DefaultTaskReattemptMaxCooldown: number = 20 * 50;

    public StrategyReInitMin = 30 * 60 * 50;
    public StrategyReInitMax = 60 * 60 * 50;

    public SettlementEnhanceMinCooldown = 2 * 60 * 50;
    public SettlementEnhanceMaxCooldown = 3 * 60 * 50;
    
    public UnfinishedConstructionThreshold: number = 2 * 60 * 50;

    public ResourceRequestDuration: number = 2 * 60 * 50;
}

class Priorities {
    // Tasks
    public SettlementDefence: MaraPriority = MaraPriority.Absolute;
    public Attack: MaraPriority = MaraPriority.Major;
    public LandmarkCapture: MaraPriority = MaraPriority.Normal;
    public ExpandBuild: MaraPriority = MaraPriority.Normal;
    public SettlementDevelopment: MaraPriority = MaraPriority.Normal;
    public DefenceBuild: MaraPriority = MaraPriority.Normal;
    public ProduceAdditionalHarvesters: MaraPriority = MaraPriority.Normal;
    public ExpandUpgrade: MaraPriority = MaraPriority.Low;

    // Production Requests
    public DefenceUnitsProduction: MaraPriority = MaraPriority.Absolute;
    public LandmarkCaptureUnitsProduction: MaraPriority = MaraPriority.Major;
    public AttackUnitsProduction: MaraPriority = MaraPriority.Normal;
    public HarvesterProduction: MaraPriority = MaraPriority.Normal;
    public HousingProduction: MaraPriority = MaraPriority.Normal;
    public ReinforcementUnitsProduction: MaraPriority = MaraPriority.Background;
}

class SquadsSettings {
    public MaxSpreadMultiplier: number = 2.8;
    public MinSpreadMultiplier: number = 2;
    public EnemySearchRadius: number = 10;
    public MinCombativityIndex: number = 0.25;
    public MinStrength: number = 100;
    public DefaultMovementPrecision: number = 3;
    public KiteTimeout: number = 8 * 50;
    public KiteThresholdPositionChangeDistance: number = 5;
    public GatherUpTimeout: number = 5 * 50;

    public MinEnrageActivationTimeout: number = 10 * 50;
    public MaxEnrageActivationTimeout: number = 20 * 50;
    public MinEnrageCooldown: number = 10 * 50;
    public MaxEnrageCooldown: number = 30 * 50;
    public MinEnrageDuration: number = 15 * 50;
    public MaxEnrageDuration: number = 25 * 50;

    public DebugSquads: boolean = false;
}

class ControllerStatesSettings {
    public DefendedGatesCount = 5;
    public DefendedGateMinSize = 3;
    public DefendedGateMaxDistanceFromSettlement = 15;
    
    public ExterminatingLossRatioThreshold: number = 0.33;
    public MinAttackStrength: number = 100;

    public MaxHarvesterProductionBatch: number = 6;
    public MaxSameCfgIdProducerCount: number = 3;

    public DevelopmentToReinforcementRatio: number = 40;
}

class ResourceMiningSettings {
    public MinMinersPerMine: number = 3;
    public WoodcutterBatchSize: number = 5;
    public MinWoodcuttersPerSawmill: number = 5;
    public MaxWoodcuttersPerSawmill: number = 13;
    public HousingBatchSize: number = 3;

    public WoodcuttingRadius: number = 10;
    public MiningRadius: number = 15;

    public MinResourceClusterDistanceSpread: number = 10;
}

class CombatSettings {
    public PointDefenseBatchStrength: number = 100;
    public MaxCompositionUnitCount: number = 20;
    public MaxUsedOffensiveCfgIdCount: number = 4;
    public MaxUsedDefensiveCfgIdCount: number = 1;
    
    public OffensiveToDefensiveRatios: Array<number> = [1, 0.75, 0.5, 0.25, 0.1];
    public AttackStrengthToEnemyStrengthRatio: number = 1.5;
    public UnitSpeedClusterizationThresholds: Array<number> = [9, 14]; //this must be in ascending order
}