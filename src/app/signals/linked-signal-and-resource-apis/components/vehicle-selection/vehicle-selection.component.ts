import { Component, inject } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vehicle-selection',
  imports: [FormsModule],
  templateUrl: './vehicle-selection.component.html',
  styleUrl: './vehicle-selection.component.scss'
})
export class VehicleSelectionComponent {

  #vehicleService = inject(VehicleService);

  vehicles = this.#vehicleService.vehicles;

  selectedVehicle = this.#vehicleService.selectedVehicle;

  quantity = this.#vehicleService.quantity;
  
  total = this.#vehicleService.total;

  color = this.#vehicleService.color;
}
