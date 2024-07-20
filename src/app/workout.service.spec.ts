import { TestBed } from '@angular/core/testing';
import { WorkoutService } from './workout.service';

describe('WorkoutService', () => {
  let service: WorkoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should save user correctly', () => {
    const user = { id: 1, name: 'John Doe', workouts: [] };
    spyOn(localStorage, 'setItem');
    service.saveUser(user);
    expect(localStorage.setItem).toHaveBeenCalledWith('user_1', JSON.stringify(user));
  });
});
