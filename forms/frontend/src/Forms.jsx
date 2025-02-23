import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";

function Forms({ onSubmit, initialData }) {
  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  // Pre-fill form fields with initialData (if available)
  useEffect(() => {
    if (initialData) {
      reset(initialData); // Populate form with initial data
    }
  }, [initialData, reset]);

  const onSubmitForm = (data) => {
    onSubmit(data); // Call parent function with form data
    reset(); // Clear form after submission
  };

  return (
    <Form onSubmit={handleSubmit(onSubmitForm)}>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: "This field is required",
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                  message: "Invalid email address",
                },
              }}
              render={({ field }) => (
                <Input
                  id="email"
                
                  {...field}
                  style={{ borderColor: errors.email ? "red" : "" }}
                />
              )}
            />
            {errors.email && (
              <p role="alert" style={{ color: "red" }}>
                {errors.email.message}
              </p>
            )}
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="name">Full Name</Label>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              rules={{
                required: "This field is required",
                maxLength: {
                  value: 20,
                  message: "Name must not exceed 20 characters",
                },
              }}
              render={({ field }) => (
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  {...field}
                  style={{ borderColor: errors.name ? "red" : "" }}
                />
              )}
            />
            {errors.name && (
              <p role="alert" style={{ color: "red" }}>
                {errors.name.message}
              </p>
            )}
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="address">Address</Label>
        <Controller
          name="address"
          control={control}
          defaultValue=""
          rules={{ required: "This field is required" }}
          render={({ field }) => (
            <Input
              id="address"
              type="text"
              placeholder="Enter your address"
              {...field}
              style={{ borderColor: errors.address ? "red" : "" }}
            />
          )}
        />
        {errors.address && (
          <p role="alert" style={{ color: "red" }}>
            {errors.address.message}
          </p>
        )}
      </FormGroup>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="city">City</Label>
            <Controller
              name="city"
              control={control}
              defaultValue=""
              rules={{ required: "This field is required" }}
              render={({ field }) => (
                <Input
                  id="city"
                  type="select"
                  {...field}
                  style={{ borderColor: errors.city ? "red" : "" }}
                >
                  <option value="">Select your city</option>
                  <option value="Vadodara">Vadodara</option>
                  <option value="Surat">Surat</option>
                  <option value="Ahmedabad">Ahmedabad</option>
                  <option value="Dahod">Dahod</option>
                  <option value="Bharuch">Bharuch</option>
                </Input>
              )}
            />
            {errors.city && (
              <p role="alert" style={{ color: "red" }}>
                {errors.city.message}
              </p>
            )}
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="phone">Phone Number</Label>
            <Controller
              name="phone"
              control={control}
              defaultValue=""
              rules={{
                required: "This field is required",
                pattern: {
                  value: /^[7-9]\d{9}$/,
                  message:
                    "invalid phone number",
                },
              }}
              render={({ field }) => (
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  {...field}
                  style={{ borderColor: errors.phone ? "red" : "" }}
                />
              )}
            />
            {errors.phone && (
              <p role="alert" style={{ color: "red" }}>
                {errors.phone.message}
              </p>
            )}
          </FormGroup>
        </Col>
      </Row>
      <div>
        <Button type="submit" color="primary">
          {initialData ? "Update" : "Submit"}
        </Button>
      </div>
    </Form>
  );
}

export default Forms;
