export interface Spell {
  spellName: string;
  passive?: string;
  active?: string;
  icon: string;
}

export interface Champion {
  name: string;
  render: string;
  square: string;
  lore: string;
  spells: {
    [key: string]: Spell;
  }
}

export interface Info {
  champions: Champion[];
}
  