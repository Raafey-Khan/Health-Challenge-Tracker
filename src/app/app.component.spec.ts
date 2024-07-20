import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { WorkoutFormComponent } from './workout-form/workout-form.component';
import { WorkoutService } from './workout.service';

describe('WorkoutFormComponent', () => {
  let component: WorkoutFormComponent;
  let fixture: ComponentFixture<WorkoutFormComponent>;
  let workoutService: WorkoutService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutFormComponent ],
      imports: [ FormsModule ],
      providers: [ WorkoutService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutFormComponent);
    component = fixture.componentInstance;
    workoutService = TestBed.inject(WorkoutService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call saveUser method on submit', () => {
    spyOn(workoutService, 'saveUser');
    component.userName = 'John Doe';
    component.workoutType = 'Cardio';
    component.workoutMinutes = 30;
    component.onSubmit();
    expect(workoutService.saveUser).toHaveBeenCalled();
  });
});
