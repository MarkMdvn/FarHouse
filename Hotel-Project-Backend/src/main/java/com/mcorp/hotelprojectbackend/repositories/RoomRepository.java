package com.mcorp.hotelprojectbackend.repositories;

import com.mcorp.hotelprojectbackend.models.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepository extends JpaRepository<Room, Long> {
}
