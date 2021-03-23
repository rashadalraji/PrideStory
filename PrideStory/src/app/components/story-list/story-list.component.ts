import { Component, OnInit } from '@angular/core';
import { StoriesService } from 'src/app/services/stories.service';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit {

  stories;
  selectedStory;
  storyId:any;
  search='';

  constructor(public storyService: StoriesService) { 
    this.storyService.searchedItem.subscribe(response=>{
      this.search=response;
      // console.log(this.search);
      this.searchBook();
      // this.bookService.showForCustomer(this.search);
    })
  }

  ngOnInit() {
    this.stories = this.storyService.getStories();    
  }

   selectStory(story){
    this.selectedStory = story;
  }

  editStory(id){
    this.storyId=id;
    // console.log(this.storyId);
    
  }

  deleteStory(story,id){
    // console.log(story.length)
    this.storyService.deleteStory(story,id);
  }

  closeModal(){
    this.storyId='';
  }


  searchBook(){
    if(this.stories && this.search !=''){
      this.stories=this.stories.filter(res=>{            
        if(res.name.toLowerCase().match(this.search.toLowerCase())){      
        return res.name.toLowerCase().match(this.search.toLowerCase());
        }
        // else if(res.writer_name.toLowerCase().match(this.search.toLowerCase())){
        //   return res.writer_name.toLowerCase().match(this.search.toLowerCase());
        // }else if(res.publisher_name.toLowerCase().match(this.search.toLowerCase())){
        //   return res.publisher_name.toLowerCase().match(this.search.toLowerCase());
        // }
      })
    }else if(this.search==""){
      this.ngOnInit();
    }
  }

}
