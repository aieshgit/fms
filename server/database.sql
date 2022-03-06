CREATE DATABASE fleet_management_system;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE employees(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(20),
    last_name VARCHAR(20),
    email VARCHAR(100),
    website VARCHAR(100)
);

CREATE TABLE vehicles(
    row_id SERIAL PRIMARY KEY,
	id uuid DEFAULT uuid_generate_v4 (),
	vehicle_num SERIAL UNIQUE,
    reg_num VARCHAR(10),
    vin VARCHAR(20),
    make VARCHAR(15),
    model VARCHAR(15),
    build_date DATE,
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

alter sequence vehicles_row_id_seq restart with 1001;



CREATE TABLE services(
    row_id SERIAL PRIMARY KEY,
   	id uuid DEFAULT uuid_generate_v4 (),
    service_num SERIAL UNIQUE,
   service_type VARCHAR(15),
   start_date DATE,
   completion_date DATE,
	repairer VARCHAR(30),
	vehicle_row_id INT,
      FOREIGN KEY(vehicle_row_id) 
	  REFERENCES vehicles(row_id)
	/* ON DELETE SET NULL */
);

alter sequence services_row_id_seq restart with 2001;

CREATE TABLE attachments(
    row_id SERIAL PRIMARY KEY,
	id uuid DEFAULT uuid_generate_v4 (),
	doc_num SERIAL UNIQUE,
	parent_object varchar(15), 
    file_path varchar(250),
	file_name varchar(150),
	service_row_id INT,
	      FOREIGN KEY(service_row_id) 
	  REFERENCES services(row_id),
		vehicle_row_id INT,
	      FOREIGN KEY(service_row_id) 
	  REFERENCES services(row_id)
);


CREATE TABLE odometer(
    row_id SERIAL PRIMARY KEY,
   	id uuid DEFAULT uuid_generate_v4 (),
    odo_num SERIAL UNIQUE,
    reading_date DATE,
	initial_reading Numeric,
	final_reading Numeric,
	mileage Numeric,
	vehicle_row_id INT,
      FOREIGN KEY(vehicle_row_id) 
	  REFERENCES vehicles(row_id)
	/* ON DELETE SET NULL */
);

alter sequence odometer_row_id_seq restart with 101;


CREATE TABLE employees(
    row_id SERIAL PRIMARY KEY,
   	id uuid DEFAULT uuid_generate_v4 (),
    employee_num SERIAL UNIQUE,
    first_name varchar,
	last_name varchar,
	title varchar,
	license_num varchar,
	mobile_num varchar,
	email varchar UNIQUE,
	address varchar,
	city varchar,
	state varchar,
	postcode varchar,
	start_date date,
	end_date date
);

alter sequence employees_row_id_seq restart with 4001;