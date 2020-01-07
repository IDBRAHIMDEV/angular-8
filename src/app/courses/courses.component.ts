import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  editable = false;
  myCourse = {
    id: 0,
    label: ''
  };

  courses = [
    { id: 1, label: "Laravel"},
    { id: 2, label: "Angular"},
    { id: 3, label: "Spring Boot"}
  ]; 

 

  constructor() { }

  ngOnInit() {
  }

  addCourse() {
    this.courses.push(this.myCourse);
    this.myCourse = {
      id: 0,
      label: ""
    };
  }

  deleteCourse(index) {

    if(confirm('Are you sure to delete this Course ?')) {

      this.courses.splice(index, 1);
    }
  }

  editCourse(course) {
    this.myCourse = course;
    this.editable = true;
  }

  updateCourse() {
    
    this.myCourse = {
      id: 0,
      label: ""
    }

    this.editable = false;
  }

}
