// ... existing code ...
export enum RuleType {
    TRUE_RULE = 'TRUE_RULE',
    FALSE_RULE = 'FALSE_RULE',
    CONFLICT_RULE = 'CONFLICT_RULE',
    CONDITIONAL_RULE = 'CONDITIONAL_RULE',
    TRAP_RULE = 'TRAP_RULE'
}

export enum TriggerEventType {
    ON_INTERACT = 'ON_INTERACT',
    ON_MOVE = 'ON_MOVE',
    ON_LOOK_AT = 'ON_LOOK_AT',
    ON_TIME_REACHED = 'ON_TIME_REACHED',
    ON_ITEM_USED = 'ON_ITEM_USED'
}

export interface RuleCondition {
    check: string;
    eventId?: string;
    value: any;
}

export interface RuleAction {
    action: string;
    soundId?: string;
    value?: number;
    monsterId?: string;
    x?: number;
    y?: number;
    delay?: number;
    reason?: string;
    eventId?: string;
}

export interface Rule {
    ruleId: string;
    description: string;
    type: RuleType;
    triggerEvent: TriggerEventType;
    targetEntity?: string;
    conditions?: RuleCondition[];
    onViolate?: RuleAction[];
    onObey?: RuleAction[];
}
// ... existing code ...