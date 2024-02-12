import React, { useContext } from "react";

import Navbar from "../Navbar";

import { Context } from "../data/context";

import { Row, Col } from "react-grid-system";

import { Card } from "antd";

const { Meta } = Card;

const ListingsPage = () => {
    const { users } = useContext(Context);
    console.log(users);
    function renderSellers() {
        const parsedUsers = users.map((user) => {
            return {
                ...user,
                custom_json: JSON.parse(user.custom_json),
            };
        });

        return parsedUsers.map((seller, index) => {
            return (
                <Col key={`product-${index}`} xs={12} sm={6} md={4} lg={3}>
                    <div style={{ margin: "12px" }}>
                        <a href={`/product/${seller.id}`}>
                            <Card
                                hoverable
                                style={{ width: "100%" }}
                                cover={
                                    <img
                                        alt="example"
                                        src={seller.custom_json.photos[0]}
                                        style={{
                                            width: "100%",
                                            height: "320px",
                                            objectFit: "cover",
                                        }}
                                    />
                                }
                            >
                                <Meta
                                    title={seller.custom_json.product}
                                    description={`${seller.custom_json.price} - ${seller.first_name} ${seller.last_name}`}
                                />
                            </Card>
                        </a>
                    </div>
                </Col>
            );
        });
    }

    return (
        <Row>
            <Navbar />
            {renderSellers()}
        </Row>
    );
};

export default ListingsPage;
