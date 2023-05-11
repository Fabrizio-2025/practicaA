import { Component } from '@angular/core';
import { Activity } from '../Activity';
import { ActivityService } from '../service/activity.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent {



  constructor(private activityService: ActivityService){}

  ngOnInit(): void {
    
  }

}
