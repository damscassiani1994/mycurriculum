import { Component, OnInit } from '@angular/core';
import { ISkill } from './model/skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skillsExperienceLenguajes: ISkill[] = [];
  skillsExperienceParadigms: ISkill[] = [];
  skillExperienceBD: ISkill[] = [];
  skillExperienceDevOps: ISkill[] = [];
  skillKnowledge: ISkill[] = [];

  constructor() { 
  }

  ngOnInit(): void {
    this.getSkillExperienceLanguajes();
    this.getSkillsExperienceParadigms();
    this.getSkillExperienceBD();
    this.getSkillExperienceDevops();
  }

  getSkillExperienceLanguajes(): void {
    this.skillsExperienceLenguajes.push({name: "Java"});
    this.skillsExperienceLenguajes.push({name: "Spring Boot"});
    this.skillsExperienceLenguajes.push({name: "Spring WebFlux"});
    this.skillsExperienceLenguajes.push({name: "Spring Cloud Gateway"});
    this.skillsExperienceLenguajes.push({name: "Java Server Face"});
    this.skillsExperienceLenguajes.push({name: "Java Server Page"});
    this.skillsExperienceLenguajes.push({name: "NodeJS"});
    this.skillsExperienceLenguajes.push({name: "Express"});
    this.skillsExperienceLenguajes.push({name: "Sequelize ORM"});
    this.skillsExperienceLenguajes.push({name: "Junit"});
    this.skillsExperienceLenguajes.push({name: "Karate Framework"});
    this.skillsExperienceLenguajes.push({name: "Mockito"});
    this.skillsExperienceLenguajes.push({name: "JavaScript"});
    this.skillsExperienceLenguajes.push({name: "TypeScript"});
    this.skillsExperienceLenguajes.push({name: "Angular"})
    this.skillsExperienceLenguajes.push({name: "RabbitMQ"})
  }

  getSkillsExperienceParadigms(): void {
    this.skillsExperienceParadigms.push({name: "Clean Architecture"});
    this.skillsExperienceParadigms.push({name: "Functional Programming"});
    this.skillsExperienceParadigms.push({name: "Reactive Programming"});
    this.skillsExperienceParadigms.push({name: "Programming Oriented Object"});
    this.skillsExperienceParadigms.push({name: "Unit Testing"});
    this.skillsExperienceParadigms.push({name: "Domain Driven Design"});
    this.skillsExperienceParadigms.push({name: "Test Driven Development"});
  }

  getSkillExperienceBD(): void {
    this.skillExperienceBD.push({name: "MongoDB"});
    this.skillExperienceBD.push({name: "PostgreSQL"});
    this.skillExperienceBD.push({name: "MySQL"});
    this.skillExperienceBD.push({name: "MongoDB"});
  }

  getSkillExperienceDevops(): void {
    this.skillExperienceDevOps.push({name: "Azure DevOps"});
    this.skillExperienceDevOps.push({name: "GitHub Actions"});
    this.skillExperienceDevOps.push({name: "Docker"});
    this.skillExperienceDevOps.push({name: "Kubernetes"});
  }

}
