import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  stories = [
    {id: 1, name: "project title 001", description: "Description of the project 001", requirements: "lorem ipsum", 
      users:{userDescription:'description of user type 1',functionality:'Users functionality requirements',benefit:'Users gaining or benefit 1'},
      acceptanceCrieteria:{givenCrieteria:'The begining crieteria 1',actionTaken:'the process of action taking over crieteris 1',outcome:'The result or outcome 1'},
      priority:'1',status:'0'
    },
    {id: 2, name: "project title 002", description: "Description of the project 002", requirements: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum", 
      users:{userDescription:'description of user type 2',functionality:'Users functionality requirements',benefit:'Users gaining or benefit 2'},
      acceptanceCrieteria:{givenCrieteria:'The begining crieteria 2',actionTaken:'the process of action taking over crieteris 2',outcome:'The result or outcome 2'},
      priority:'1',status:'0'
    },
    {id: 3, name: "project title 003", description: "Description of the project 003", requirements: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum", 
      users:{userDescription:'description of user type 3',functionality:'Users functionality requirements',benefit:'Users gaining or benefit 3'},
      acceptanceCrieteria:{givenCrieteria:'The begining crieteria 3',actionTaken:'the process of action taking over crieteris 3',outcome:'The result or outcome 3'},
      priority:'0',status:'0'
    },
    {id: 4, name: "project title 004", description: "Description of the project 004", requirements: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum", 
      users:{userDescription:'description of user type 4',functionality:'Users functionality requirements',benefit:'Users gaining or benefit 4'},
      acceptanceCrieteria:{givenCrieteria:'The begining crieteria 4',actionTaken:'the process of action taking over crieteris 4',outcome:'The result or outcome 4'},
      priority:'0',status:'0'
    }
    
  ];

  constructor() { }

  public getStories():Array<{}>{
    return this.stories;
  }

  public createStory(form){
    this.stories.push(form);
    
  }

  public deleteStory(story:any,id){
    // let index=story.indexOf(story);
    let index = story.findIndex(x => x.id === id);
    story.splice(index,1);

  }

 


  public updateStory(story:any,id,form){
    let index = story.findIndex(x => x.id === id);
    this.stories[index].id=form.id;
    this.stories[index].name=form.name;
    this.stories[index].description=form.description;
    this.stories[index].requirements=form.requirements;
    this.stories[index].users.userDescription=form.users.userDescription;
    this.stories[index].users.functionality=form.users.functionality;
    this.stories[index].users.benefit=form.users.benefit;
    this.stories[index].acceptanceCrieteria.givenCrieteria=form.acceptanceCrieteria.givenCrieteria;
    this.stories[index].acceptanceCrieteria.actionTaken=form.acceptanceCrieteria.actionTaken;
    this.stories[index].acceptanceCrieteria.outcome=form.acceptanceCrieteria.outcome;
    this.stories[index].priority=form.priority;
    this.stories[index].status=form.status;
    
  }


  search=new BehaviorSubject('');
  searchedItem = this.search.asObservable();


  searchedResult(cart: any) {
    this.search.next(cart)
  }
}
