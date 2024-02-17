import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public potions: {
    id: number;
    name: string;
    enabled: boolean;
    duration: number;
    amplifier: number;
    particles: boolean;
  }[] = [
    {
      id: 0,
      name: 'Speed',
      enabled: false,
      duration: 0,
      amplifier: 0,
      particles: true
    },
    {
      id: 1,
      name: 'Slowness',
      enabled: false,
      duration: 0,
      amplifier: 0,
      particles: true
    },
    {
      id: 2,
      name: 'Haste',
      enabled: false,
      duration: 0,
      amplifier: 0,
      particles: true
    },
    {
      id: 3,
      name: 'Mining Fatigue',
      enabled: false,
      duration: 0,
      amplifier: 0,
      particles: true
    },
    {
      id: 4,
      name: 'Strength',
      enabled: false,
      duration: 0,
      amplifier: 0,
      particles: true
    },
    {
      id: 5,
      name: 'Instant Health',
      enabled: false,
      duration: 0,
      amplifier: 0,
      particles: true
    },
    {
      id: 6,
      name: 'Instant Damage',
      enabled: false,
      duration: 0,
      amplifier: 0,
      particles: true
    },
    {
      id: 7,
      name: 'Jump Boost',
      enabled: false,
      duration: 0,
      amplifier: 0,
      particles: true
    },
    {
      id: 8,
      name: 'Nausea',
      enabled: false,
      duration: 0,
      amplifier: 0,
      particles: true
    },
    {
      id: 9,
      name: 'Regeneration',
      enabled: false,
      duration: 0,
      amplifier: 0,
      particles: true
    },
    {
      id: 10,
      name: 'Resistance',
      enabled: false,
      duration: 0,
      amplifier: 0,
      particles: true
    },
    {
      id: 11,
      name: 'Fire Resistance',
      enabled: false,
      duration: 0,
      amplifier: 0,
      particles: true
    },
    {
      id: 12,
      name: 'Water Breathing',
      enabled: false,
      duration: 0,
      amplifier: 0,
      particles: true
    },
    {
      id: 13,
      name: 'Invisibility',
      enabled: false,
      duration: 0,
      amplifier: 0,
      particles: true
    },
    {
      id: 14,
      name: 'Blindness',
      enabled: false,
      duration: 0,
      amplifier: 0,
      particles: true
    },
    {
      id: 15,
      name: 'Night Vision',
      enabled: false,
      duration: 0,
      amplifier: 0,
      particles: true
    },
    {
      id: 16,
      name: 'Hunger',
      enabled: false,
      duration: 0,
      amplifier: 0,
      particles: true
    },
    {
      id: 17,
      name: 'Weakness',
      enabled: false,
      duration: 0,
      amplifier: 0,
      particles: true
    },
    {
      id: 18,
      name: 'Poison',
      enabled: false,
      duration: 0,
      amplifier: 0,
      particles: true
    },
    {
      id: 19,
      name: 'Wither',
      enabled: false,
      duration: 0,
      amplifier: 0,
      particles: true
    },
    {
      id: 20,
      name: 'Health Boost',
      enabled: false,
      duration: 0,
      amplifier: 0,
      particles: true
    },
    {
      id: 21,
      name: 'Absorbtion',
      enabled: false,
      duration: 0,
      amplifier: 0,
      particles: true
    },
    {
      id: 22,
      name: 'Saturation',
      enabled: false,
      duration: 0,
      amplifier: 0,
      particles: true
    }
  ];
  public potionName: string = 'Potion';
  public splashPotion: boolean = false;
  public potionDesign: number = 0;
  public command: string = '';

  constructor() {}

  generateCommand() {
    let designId: number = this.splashPotion ? +this.potionDesign + 16384 : this.potionDesign;
    let result: string = `/give @p potion 1 ${designId} {display:{Name:${this.potionName}},CustomPotionEffects:[`;
    for (let potion of this.potions) {
      if (potion.enabled) {
      	result += `{Id:${potion.id + 1},Duration:${potion.duration},Amplifier:${potion.amplifier},ShowParticles:${potion.particles}},`;
      }
    }
    if (result.endsWith(',')) result = result.substring(0, result.length - 1);
    result += ']}';
    this.command = result;
  }
}
