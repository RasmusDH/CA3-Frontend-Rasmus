import * as React from "react";
import { fetchData } from "../apiUtils";
import { BEER } from "../settings";
import { Card, Container } from "react-bootstrap";

function BoughtPage() {
  const [bought, setBought] = React.useState();

  React.useEffect(() => {
    fetchData(BEER.GET_BEER_FROM_USER)
      .then((data) => setBought(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <h1>Bought Beers</h1>
      {bought && (
        <>
          <Card>
            <Card.Header as="h5">Beer list</Card.Header>
            <Card.Body>
              {bought.map((beer) => (
                <>
                  {Object.entries(beer).map(([key, value]) => (
                    <Card.Text key={key}>
                      {key}: {value}
                    </Card.Text>
                  ))}
                </>
              ))}
            </Card.Body>
          </Card>
        </>
      )}
    </Container>
  );
}

export default BoughtPage;
