import { useForm } from "react-hook-form";
import { useAppState } from "../state";
import { Button, Form, Section, SectionRow } from "../Forms";

export const Confirm = () => {
  const [state] = useAppState();
  const { handleSubmit } = useForm({ defaultValues: state });

  const submitData = (data) => {

    console.info(data);
    // Submit data to the server
    
    // Sample React Fetch command to retrieve data using "GET"
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(    {
            "username": "janedoe",
            "first_name": "Jane",
            "last_name": "Doe",
            "age": 25,
            "account_type": "standard_user"
        })
      };

    // Fetch with URL
    fetch('https://77khpd2wsf.execute-api.us-east-1.amazonaws.com/prod/requests', requestOptions)
    .then((response) => console.log(response))
    //.then((data) => console.log(data))
    .catch((error) => console.log(error));
  };

  
  return (
    <Form onSubmit={handleSubmit(submitData)}>
      <h1 className="mb-4">Confirm</h1>
      <Section title="Personal info" url="/">
        <SectionRow>
          <div>First name</div>
          <div>{state.firstName}</div>
        </SectionRow>
        <SectionRow>
          <div>Last name</div>
          <div>{state.lastName}</div>
        </SectionRow>
        <SectionRow>
          <div>Email</div>
          <div>{state.email}</div>
        </SectionRow>
      </Section>
      <Section title="Education" url="/education">
        <SectionRow>
          <div>University</div>
          <div>{state.university}</div>
        </SectionRow>
        <SectionRow>
          <div>Degree</div>
          <div>{state.degree}</div>
        </SectionRow>
      </Section>
      <Section title="About" url="/about">
        <SectionRow>
          <div>About me</div>
          <div>{state.about}</div>
        </SectionRow>
      </Section>
      <div className="d-flex justify-content-start">
        <Button>Submit</Button>
      </div>
    </Form>
  );
};
