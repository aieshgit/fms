CREATE DATABASE fleet_management_system;

CREATE TABLE employees(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(20),
    last_name VARCHAR(20),
    email VARCHAR(100),
    website VARCHAR(100)
);

CREATE TABLE vehicles(
    id SERIAL PRIMARY KEY,
    reg_num VARCHAR(10),
    vin VARCHAR(20),
    make VARCHAR(15),
    model VARCHAR(15),
    build_date DATE,
    vehicle_num VARCHAR(15),
    vehicle_type VARCHAR(15),
    etag VARCHAR(10),
    gcm VARCHAR(6),
    gvm VARCHAR(6),
    tare VARCHAR(5),
    maint_entry DATE,
    maint_exit DATE,
    mass_entry DATE,
    mass_exit DATE,
    nhvas_label_num VARCHAR(8),
    reg_due_date DATE,
    reg_state VARCHAR(3),
    engine_num VARCHAR(10),
    engine_make VARCHAR(10),
    engine_model VARCHAR(10),
    engine_capacity VARCHAR(4),
    engine_gearbox VARCHAR(15),
    frequency VARCHAR(10)
);
