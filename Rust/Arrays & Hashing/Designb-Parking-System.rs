struct ParkingSystem {
    spaces: [i32; 3],
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl ParkingSystem {
    fn new(big: i32, medium: i32, small: i32) -> Self {
        Self {
            spaces: [big, medium, small],
        }
    }

    fn add_car(&mut self, car_type: i32) -> bool {
        let parking_space = self.spaces[(car_type - 1) as usize];

        if parking_space > 0 {
            self.spaces[(car_type - 1) as usize] -= 1;
            return true;
        }

        false
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * let obj = ParkingSystem::new(big, medium, small);
 * let ret_1: bool = obj.add_car(carType);
 */
fn main() {}
