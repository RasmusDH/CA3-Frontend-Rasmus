import * as React from "react";
import { fetchData, handleError } from "../apiUtils";
import { BEER } from "../settings";
import { Card, Container, Button } from "react-bootstrap";
import { useHistory } from "react-router";

function BoughtPage() {
  const [beers, setBeers] = React.useState();
  const [err, setErr] = React.useState();

  React.useEffect(() => {
    loadBeer();
  }, []);

  function buyBeer(beer) {
    fetchData(BEER.BUY_BEER, "POST", beer)
      .then((data) => loadBeer())
      .catch((err) => handleError(err, setErr));
  }

  function loadBeer() {
    fetchData(BEER.FETCH_BEER)
      .then((data) => setBeers(data))
      .catch((err) => handleError(err, setErr));
  }

  return (
    <Container>
      <h1>Buy Beers</h1>
      {beers && (
        <div>
          <Card style={{ cursor: "pointer" }}>
            <Card.Header className="text-center">
              The current beer is:
            </Card.Header>

            <Card.Body>
              {beers.map((beer) => (
                <>
                  {Object.entries(beer).map(([key, value]) => (
                    <Card.Text key={key}>
                      {key}: {value}
                    </Card.Text>
                  ))}
                  <Button className="mr-3" onClick={() => buyBeer(beer)}>
                    Click to buy
                  </Button>
                  <Button onClick={loadBeer}>Load new Beer</Button>
                </>
              ))}
              <br></br>

              {err && <h4>{err.message}</h4>}
            </Card.Body>
          </Card>
        </div>
      )}
    </Container>
  );
}

export default BoughtPage;
