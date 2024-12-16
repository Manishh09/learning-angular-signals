import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, linkedSignal, signal,   } from '@angular/core';

import { rxResource } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  #vehicleUrl = 'https://swapi.py4e.com/api/vehicles';

  // Injected services
  private http = inject(HttpClient);

  // track data of below   

  selectedVehicle = signal<Vehicle | undefined>(undefined);
  // quantity = signal(1);

  quantity = linkedSignal({
    source: this.selectedVehicle,
    computation: (vehicle) => vehicle ? 1 : 0 

  })

  total = computed(() => (this.selectedVehicle()?.cost_in_credits ?? 0) * this.quantity());
  color = computed(() => this.total() > 50_000 ? 'green' : 'blue');

  vehicleResource = rxResource(
    {
      loader: () => this.http.get<VehicleResponse>(this.#vehicleUrl).pipe(
        map( res => res.results)
      ),
    }
  );
  vehicles = computed(() => this.vehicleResource.value() ?? [] as Vehicle[]);


}

export interface VehicleResponse {
  count: number;
  next: string;
  previous: string;
  results: Vehicle[]
}

export interface Vehicle {
  name: string;
  cost_in_credits: number;
}
