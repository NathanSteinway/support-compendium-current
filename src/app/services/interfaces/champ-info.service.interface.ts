export interface SpellDetail {
    spellName: string;
    passive?: string;
    active?: string;
    icon: string;
  }
  
export interface Spells {
  passive_1?: SpellDetail;
  passive_2?: SpellDetail;
  q?: SpellDetail;
  w?: SpellDetail;
  e?: SpellDetail;
  r?: SpellDetail;
  [key: string]: SpellDetail | undefined;
}

export interface Champion {
name: string;
render: string;
square: string;
spells: Spells;
}

export interface Info {
champions: Champion[];
}
  