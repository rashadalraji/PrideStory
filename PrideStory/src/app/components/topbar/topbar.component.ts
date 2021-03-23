import { Component, OnInit } from '@angular/core';
import { StoriesService } from 'src/app/services/stories.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(private storyService:StoriesService) { }

  ngOnInit(): void {
  }

  searchItem(input){
    this.storyService.searchedResult(input);
    
  }

}
