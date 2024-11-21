import { useEffect, useState } from "react";
// packages
import { Container, Row, Col, Toast, Button } from "react-bootstrap";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState(null);
  // const getDataLoader = () => {
  //   axios
  //     .get("https://dummyjson.com/psts")
  //     .then(({ data }) => {
  //       setData(data.posts);
  //     })
  //     .catch((error) => {
  //       const { status, message } = error;
  //       //R&D : throw Error
  //       throw Error(`status  = ${status} . error message is : ${message}`);
  //     });
  // };

  const toggleShowToast = () => setShowToast(!showToast);

  const getDataLoader = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/posts");
      console.log(response);
      setData(response.data.posts);
    } catch (error) {
      console.log(error);

      setShowToast(true);
      setError(error);
    }
  };

  useEffect(() => {
    getDataLoader();
  }, []);

  return (
    <>
      {showToast && (
        <Row>
          <Col xs={12}>
            <Toast
              show={showToast}
              bg="danger"
              animation={true}
              onClose={toggleShowToast}
            >
              <Toast.Header className="d-flex justify-content-between">
                <small>status = {error.status}.</small>
              </Toast.Header>
              <Toast.Body>
                <span>message is : {error.message}</span>
              </Toast.Body>
            </Toast>
          </Col>
        </Row>
      )}
      <Container>
        <Row>
          <Col sm={12}></Col>
          <h1>in the name of god</h1>
          <Col sm={12}>
            {data &&
              data.map(({ id, userId, title }) => (
                <div className="border p-4" key={[id]}>
                  <div className="d-flex justify-content-between align-items-end">
                    <div>
                      <h3>userId : {userId}</h3>
                      <p>title : {title}</p>
                    </div>
                    <Button>detail</Button>
                  </div>
                </div>
              ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
