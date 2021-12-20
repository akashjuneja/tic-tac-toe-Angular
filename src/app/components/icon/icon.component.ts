import { Component, OnInit ,Input } from '@angular/core';
import { faCircle, faCoffee, faPen, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {
   faCoffee=faCoffee
   faPen=faPen
   faTimes=faTimes
   faCircle=faCircle
   @Input() iconName: string | undefined

  constructor(private toastr: ToastrService) { }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  ngOnInit(): void {
  }

}
