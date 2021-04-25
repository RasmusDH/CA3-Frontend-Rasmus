import * as React from "react";
import { Card } from "react-bootstrap";

function HomePage() {
  return (
    <div>
      <h1>Homepage</h1>
      <Card>
        <Card.Header as="h5">Backend</Card.Header>
        <Card.Body>
          <Card.Text>
            With our startcode it was easy to implement basic functions in both
            Facade and Rest.
            <br></br>
            providing already made examples for fetching data from external APIs
            as well as a Repository for entity class RenameMe so that methods
            and be easily organized and implemented in a step by step process.
            <br></br>
            Other than that we also made a provider folder in our rest package
            which contains a Provider for easy access to EMF and GSON and a
            RestRepository that already has basic methods and their respective
            HTTP method setup for ease of use.
            <br></br>
            This saves time as you can just implement them and complete them
            step by step.
            <br></br>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header as="h5">Frontend</Card.Header>
        <Card.Body>
          <Card.Text>
            In our frontend setup we have our routes and components folder where
            in routes you make the actual pages and what they need to include.
            <br></br>
            Then in components we have our headers where we can decide what
            shows up for logged in vs not logged in users.
            <br></br>
            In our apiUtils we have several methods for again saving time and
            ease of use such as fetchData and handleError.
            <br></br>
            These have been used in both BeerPage and BoughtPage to quickly
            fetch the data needed from either the server or external api.
            <br></br>
            Lastly in AuthenticatedApp and UnauthenticatedApp we connect the
            pages to and their content to the actual navbar link made in the
            respective header.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default HomePage;
