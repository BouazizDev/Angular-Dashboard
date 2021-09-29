import { Injectable } from '@angular/core';
import { members } from '../interfaces/members';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  listeMembers: members[] = [
    {id: '1', cin: '123456', name:'amine', cv:'lien', type:'etudiant'},
    {id: '1', cin: '123456', name:'amine', cv:'lien', type:'etudiant'},
    {id: '1', cin: '123456', name:'amine', cv:'lien', type:'etudiant'},
    {id: '1', cin: '123456', name:'amine', cv:'lien', type:'etudiant'},
    {id: '1', cin: '123456', name:'amine', cv:'lien', type:'etudiant'},
    {id: '1', cin: '123456', name:'amine', cv:'lien', type:'etudiant'},
    {id: '1', cin: '123456', name:'amine', cv:'lien', type:'etudiant'},
    
  ];

  constructor() { }
  getMembers(){
    return this.listeMembers.slice();
  }
  delMember(index : number){
    this.listeMembers.splice(index,1);
  }
}
