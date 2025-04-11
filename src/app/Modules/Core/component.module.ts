import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomePage } from "../../pages/home/home.page";
import { UsersComponent } from "../../components/users/users.component";

@NgModule({
  imports: [
     FormsModule,
     ReactiveFormsModule,
     CommonModule
    ],

  declarations: [ HomePage, UsersComponent],
  exports: [ HomePage],
})
export class ComponentModule {}
