import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from '../../../core/service/user.service'

@Component({
  selector: 'app-complex-table',
  templateUrl: './complex-table.component.html',
  styleUrls: ['./complex-table.component.scss']
})
export class ComplexTableComponent implements OnInit {
  listOfData = []
  pageSize = [10, 30, 50, 100]
  isVisible = false
  total = 0
  validateForm: FormGroup;

  updateConfirmValidator(): void {
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }

  constructor(private userService: UserService, private fb: FormBuilder) { }

  ngOnInit() {
    this.listOfData = this.userService.getUserList()
    this.total = this.listOfData.length
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      address: [null, [Validators.required]],
      age: [null, [Validators.required]],
      birthday: [null, [Validators.required]],
    });
  }
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if(this.validateForm.status === 'VALID') {
      this.listOfData = this.userService.addUser(this.validateForm.value)   
      this.total = this.listOfData.length            
      this.handleCancel()
    }
  }
  handleCancel(): void {
    this.isVisible = false
  }
  editUser(data) {
    console.log(data)
  }
  deleteUser(data) {

  }
  addUser() {
    this.isVisible = true
  }
}
