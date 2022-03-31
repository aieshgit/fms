
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE vehicles(
    row_id SERIAL PRIMARY KEY,
	id uuid DEFAULT uuid_generate_v4 (),
	vehicle_num SERIAL UNIQUE,
    reg_num VARCHAR,
    vin VARCHAR,
    make VARCHAR,
    model VARCHAR,
    build_date DATE,
    vehicle_type VARCHAR,
    etag VARCHAR,
    gcm VARCHAR,
    gvm VARCHAR,
    tare VARCHAR,
    maint_entry DATE,
    maint_exit DATE,
    mass_entry DATE,
    mass_exit DATE,
    nhvas_label_num VARCHAR(8),
    reg_due_date DATE,
    reg_state VARCHAR,
    engine_num VARCHAR,
    engine_make VARCHAR,
    engine_model VARCHAR,
    engine_capacity VARCHAR,
    engine_gearbox VARCHAR,
    frequency VARCHAR
);

alter sequence vehicles_row_id_seq restart with 1001;


CREATE TABLE services(
    row_id SERIAL PRIMARY KEY,
   	id uuid DEFAULT uuid_generate_v4 (),
    service_num SERIAL UNIQUE,
   service_type VARCHAR,
   start_date DATE,
   completion_date DATE,
	repairer VARCHAR,
	vehicle_row_id INT,
      FOREIGN KEY(vehicle_row_id) 
	  REFERENCES vehicles(row_id)
	/* ON DELETE SET NULL */
);

alter sequence services_row_id_seq restart with 2001;


CREATE TABLE documents(
    row_id SERIAL PRIMARY KEY,
	id uuid DEFAULT uuid_generate_v4 (),
	doc_num SERIAL UNIQUE,
	parent_object varchar, 
    file_path varchar,
	file_name varchar,
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
	job_title varchar,
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

CREATE TABLE users
(
    row_id SERIAL PRIMARY KEY,
    id uuid DEFAULT uuid_generate_v4(),
    user_num SERIAL UNIQUE,
    username varchar UNIQUE,
    password varchar
);

alter sequence users_row_id_seq restart with 5001;



alter sequence vehicles_row_id_seq restart with 2001;
alter sequence services_row_id_seq restart with 1001;
alter sequence odometer_row_id_seq restart with 101;
alter sequence employees_row_id_seq restart with 4001;

/* alter sequence vehicles_vehicle_num_seq restart with 14; */