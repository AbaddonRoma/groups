import { GroupsService } from './groups.service';
import { Component, OnInit, group, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Table } from './interface';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss'],
  providers: [GroupsService]
})
export class GroupsComponent implements OnInit {
  // post:any = this.groupsService.newPost;
  groups: any = [];
  faculties: any = [];
  specialties: any = [];
  
  table: Table[] = [];
  constructor(private groupsService: GroupsService) { }

  click() {
    this.groupsService.createPost();
    console.log(this.groupsService.newPost);
  }

  getGroup() {
    this.groupsService._getGroup().subscribe(data => this.groups = data);
  }

  getFaculties() {
    this.groupsService._getFaculties().subscribe(data => this.faculties = data);
  }

  getSpecialties() {
    this.groupsService._getSpecialties().subscribe(data => this.specialties = data);

  }

  getTable() {
    for (let group of this.groups) {

      let i:number = 0;

      this.table.push({
        id: i,
        group: group.group_name,
        faculty: '',
        specialty: ''
      })

      for (let faculty of this.faculties) {
        if (group.faculty_id === faculty.faculty_id){
          this.table[i].faculty = faculty.faculty_name;
          break;
        }
      }
      
      for (let specialty of this.specialties) {
        if (group.speciality_id === specialty.speciality_id){
          this.table[i].specialty = specialty.speciality_name;
          break;
        }
      }

      i++;

    }
    console.log(this.table);
    for(let i=0; i<this.table.length; i++){
      console.log(this.table[i]);
    }
  }
  
  

  ngOnInit() {
    this.getGroup();
    this.getFaculties();
    this.getSpecialties();
    // this.getTable();
    // console.log(this.table);
  }
  // *****************


  // *****************


}
