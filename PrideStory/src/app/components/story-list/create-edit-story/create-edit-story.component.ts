import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StoriesService } from 'src/app/services/stories.service';

@Component({
  selector: 'app-create-edit-story',
  templateUrl: './create-edit-story.component.html',
  styleUrls: ['./create-edit-story.component.css']
})
export class CreateEditStoryComponent implements OnInit {

  stories:any;
  
  @Input() storyId;
  @ViewChild('closeStoryModalModal') closeStoryModalModal: ElementRef;
  @Output("closeModal") closeModal: EventEmitter<any> = new EventEmitter();
  
  form:{
    id,
    name,
    description,
    requirements,
    users:{
      userDescription,
      functionality,
      benefit
    },
    acceptanceCrieteria:{
      givenCrieteria,
      actionTaken,
      outcome
    },
    priority,
    status    
  }={
    id:null,
    name:null,
    description:null,
    requirements:'lorem ipsum',
    users:{
      userDescription:null,
      functionality:null,
      benefit:null
    },
    acceptanceCrieteria:{
      givenCrieteria:null,
      actionTaken:null,
      outcome:null
    },
    priority:'1',
    status:'0'
    
  }

  singleStory:any;

  constructor(public storyService: StoriesService) { 
    
  }

  ngOnInit() {
    this.stories = this.storyService.getStories();
    if(this.storyId){
    let index=this.stories.findIndex(x => x.id === this.storyId);
    this.form.id=this.stories[index].id;
    this.form.name=this.stories[index].name;
    this.form.description=this.stories[index].description;
    this.form.requirements=this.stories[index].requirements;
    this.form.users.userDescription=this.stories[index].users.userDescription;
    this.form.users.functionality=this.stories[index].users.functionality;
    this.form.users.benefit=this.stories[index].users.benefit;
    this.form.acceptanceCrieteria.givenCrieteria=this.stories[index].acceptanceCrieteria.givenCrieteria;
    this.form.acceptanceCrieteria.actionTaken=this.stories[index].acceptanceCrieteria.actionTaken;
    this.form.acceptanceCrieteria.outcome=this.stories[index].acceptanceCrieteria.outcome;
    this.form.priority=this.stories[index].priority;
    this.form.status=this.stories[index].status;
    
    }
  }

  createStory(form:NgForm){
    
    if(this.stories){
     let lengths=this.stories.length
     let index = this.stories.findIndex(x => x.id === this.stories[lengths-1].id);
     let id=this.stories[index].id+1;
     this.form.id=id;
    }
   
    console.log(this.form);
    this.storyService.createStory(this.form)
    // this.stories.push(this.form)
    
    this.form={
      id:null,
      name:null,
      description:null,
      requirements:'lorem ipsum',
      users:{
        userDescription:null,
        functionality:null,
        benefit:null
      },
      acceptanceCrieteria:{
        givenCrieteria:null,
        actionTaken:null,
        outcome:null
      },
      priority:'1',
      status:'0'
      
    }
    
  }

  updateStory(){
    this.storyService.updateStory(this.stories,this.storyId,this.form);
    this.closeStoryModalModal.nativeElement.click();
    this.closeModal.emit();
  }

  closeModals(){
    this.closeStoryModalModal.nativeElement.click();
    this.closeModal.emit();
  }
}
